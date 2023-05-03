import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { IoMdAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import FormField from './FormField';
import { setFieldsInState } from '../../redux/actions';

const FormBox = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(0)
    // const [isValid, setIsValid] = useState(false)
    const fields = useSelector(state => state.fields)
    const handleChapterAdd = () => {
        // setIsValid(true)
        setOpen(fields.length)
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
                    fields.length !== 0 ? fields.map(item => {
                        return (
                            <FormField
                                open={open}
                                setOpen={setOpen}
                                key={item.id}
                                {...item}
                            />
                        )
                    }) :
                        <div className='text-center text-3xl p-3'>
                            There are No Chapters
                        </div>
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