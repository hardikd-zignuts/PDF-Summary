import React from 'react'
import { Button } from 'flowbite-react'
import { IoMdAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import FormField from './FormField';
import { setFieldsInState } from '../../redux/actions';

const FormBox = () => {
    const dispatch = useDispatch()
    const fields = useSelector(state => state.fields)
    const handleChapterAdd = () => {
        dispatch(setFieldsInState([...fields, {
            id: fields.length,
            name: null,
            startPage: null,
            endPage: null
        }]))
    }
    return (
        <>
            <div className="flex flex-col gap-4">
                {
                    fields.map(item => <FormField key={item.id} {...item} />)
                }
                <Button onClick={handleChapterAdd} color="blue" className='mx-2'>
                    <IoMdAdd className="mr-3 h-4 w-4" />
                    New Chapter
                </Button>
            </div>
        </>
    )
}

export default FormBox