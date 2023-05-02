import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteFieldsInState, updateFieldsInState } from '../../redux/actions'
import { CheckValidationInField } from '../../utils/utils'
import { toast } from 'react-hot-toast'

const FormField = ({ id, setIsValid }) => {
    const dispatch = useDispatch()
    const [isSave, setIsSave] = useState(false)
    const [isEdit, setIsEdit] = useState(true)
    const [current, setCurrent] = useState({
        id,
        name: null,
        startPage: null,
        endPage: null
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrent((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleEdit = () => {
        setIsSave(true)
        setIsEdit(false)
    }
    const handleSave = () => {
        if (CheckValidationInField(current)) {
            setIsValid(false)
            setIsSave(false)
            setIsEdit(true)
            dispatch(updateFieldsInState(current))
        } else {
            toast.error("Please fill all the fields")
        }
    }
    const handleDelete = () => {
        dispatch(deleteFieldsInState(id))
    }
    // useEffect(() => {
    //     setIsValid(CheckValidationInField(current))
    // }, [current, setIsValid])
    return (
        <>
            <div className='bg-blue-100 p-2 border border-blue-400 rounded relative'>
                <div className="mb-2 flex items-center justify-between mt-5">
                    {/* Chapter Name  */}
                    <div className='w-1/2 mx-3'>
                        <Label
                            value="Chapter Name"
                            className='w-32 text-2xl'
                        />
                        <TextInput
                            onChange={handleInputChange}
                            disabled={isEdit}
                            className='text-2xl font-bold w-full   '
                            type="text"
                            sizing="sm"
                            name='name'
                        />
                    </div>
                    {/* Start Page  */}
                    <div className='w-1/4 mx-3'>
                        <Label
                            value="Start Page"
                            className='w-32 text-2xl'
                        />
                        <TextInput
                            onChange={handleInputChange}
                            disabled={isEdit}
                            className='text-2xl font-bold'
                            type="number"
                            sizing="sm"
                            name='startPage'
                        />
                    </div>
                    {/* End Page  */}
                    <div className='w-1/4 mx-3'>
                        <Label
                            value="End Page"
                            className='w-32 text-2xl'
                        />
                        <TextInput
                            onChange={handleInputChange}
                            disabled={isEdit}
                            className='text-2xl font-bold w-full   '
                            type="number"
                            sizing="sm"
                            name='endPage'
                        />
                    </div>
                </div>
                <div className='mt-3 w-full flex justify-center'>
                    {
                        !isSave &&
                        <Button onClick={handleEdit} color="gray" className='mx-2'>
                            <AiFillEdit className="mr-3 h-4 w-4" />
                            Edit
                        </Button>
                    }
                    {isSave &&
                        <>
                            <Button onClick={handleDelete} color="gray" className='mx-2'>
                                <AiFillDelete className="mr-3 h-4 w-4" />
                                Delete
                            </Button>
                            <Button onClick={handleSave} color="gray" className='mx-2'>
                                <AiFillSave className="mr-3 h-4 w-4" />
                                Save
                            </Button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default FormField