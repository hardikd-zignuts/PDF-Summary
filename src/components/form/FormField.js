import { Button, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteFieldsInState } from '../../redux/actions'

const FormField = ({ id }) => {
    const dispatch = useDispatch()
    const [isSave, setIsSave] = useState(false)
    const [isEdit, setIsEdit] = useState(true)
    const handleEdit = () => {
        setIsSave(true)
        setIsEdit(false)
    }
    const handleSave = () => {
        setIsSave(false)
        setIsEdit(true)
    }
    const handleDelete = () => {
        dispatch(deleteFieldsInState(id))
    }
    return (
        <>
            <div className='bg-blue-100 p-2 border border-blue-400 rounded'>
                <div className="mb-2 flex items-center justify-between mt-5">
                    {/* Chapter Name  */}
                    <div className='w-1/2 mx-3'>
                        <Label
                            value="Chapter Name"
                            className='w-32 text-2xl'
                        />
                        <TextInput
                            disabled={isEdit}
                            className='text-2xl font-bold w-full   '
                            type="text"
                            sizing="sm"
                        />
                    </div>
                    {/* Start Page  */}
                    <div className='w-1/4 mx-3'>
                        <Label
                            value="Start Page"
                            className='w-32 text-2xl'
                        />
                        <TextInput
                            disabled={isEdit}
                            className='text-2xl font-bold'
                            type="number"
                            sizing="sm"
                        />
                    </div>
                    {/* End Page  */}
                    <div className='w-1/4 mx-3'>
                        <Label
                            value="End Page"
                            className='w-32 text-2xl'
                        />
                        <TextInput
                            disabled={isEdit}
                            className='text-2xl font-bold w-full   '
                            type="number"
                            sizing="sm"
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