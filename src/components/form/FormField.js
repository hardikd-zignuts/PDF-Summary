import { Button, Label, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFieldsInState, resetSelectedImages, resetTempSelect, setTempData, updateFieldsInState, updateTempSelect } from '../../redux/actions'
import { CheckValidationInField, GetMinAndMaxId } from '../../utils/utils'
import { toast } from 'react-hot-toast'

const FormField = ({ id, open, setOpen }) => {
    const dispatch = useDispatch()
    const stateImage = useSelector(state => state.stateImage)
    const validStatus = useSelector(state => state.validStatus)
    const [isSave, setIsSave] = useState(false)
    const [isEdit, setIsEdit] = useState(true)
    const [page, setPage] = useState({ id, startPage: null, endPage: null })

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
        if (name === 'startPage' || name === 'endPage') {
            setPage((prevState) => ({
                ...prevState,
                [name]: parseInt(value)
            }))
        }
    };
    const handleEdit = () => {
        setOpen(id)
        setIsSave(true)
        setIsEdit(false)
    }
    const handleSave = () => {
        if (CheckValidationInField(current)) {
            setOpen(null)
            setIsSave(false)
            setIsEdit(true)
            dispatch(updateFieldsInState(current))
            dispatch(resetTempSelect())
            dispatch(resetSelectedImages())
        } else {
            toast.error("Please fill all the fields")
        }
    }
    const handleDelete = () => {
        setOpen(null)
        dispatch(deleteFieldsInState(id))
        dispatch(resetSelectedImages())
    }
    useEffect(() => {
        dispatch(updateTempSelect(page))
    }, [page, dispatch])
    console.log('valid', CheckValidationInField(current))
    useEffect(() => {
        if (stateImage.length > 0) {
            const numId = GetMinAndMaxId(stateImage)
            setCurrent((prev) => ({
                ...prev,
                startPage: (numId.min).toString(),
                endPage: (numId.max).toString()
            }))
        }
    }, [stateImage])
    useEffect(() => {
        dispatch(setTempData({
            id: open,
        }))
    }, [dispatch, open])
    useEffect(() => {
        setIsEdit(!(open === id))
        setIsSave(open === id)
    }, [open, id])
    console.log(validStatus)


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
                            min={0}
                            value={current.startPage}
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
                            value={current.endPage}
                            min={0}
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
                        <Button onClick={handleEdit} color="blue" className='mx-2'>
                            <AiFillEdit className="mr-3 h-4 w-4" />
                            Edit
                        </Button>
                    }
                    {isSave &&
                        <>
                            <Button onClick={handleDelete} color="red" className='mx-2'>
                                <AiFillDelete className="mr-3 h-4 w-4" />
                                Delete
                            </Button>
                            <Button onClick={handleSave} color="green" className='mx-2'>
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