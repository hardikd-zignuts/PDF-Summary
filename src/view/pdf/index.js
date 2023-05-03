import React, { useEffect, useState } from 'react'
import ImageData from '../../constant/ImageData'
import ImageCard from '../../components/pdf/ImageCard'
import { useDispatch } from 'react-redux'
import { setImagesInState } from '../../redux/actions'

const PDF = () => {
    const dispatch = useDispatch()
    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageSelect = (item) => {
        setSelectedImages((prevSelectedImages) => {
            if (prevSelectedImages.some((selectedItem) => selectedItem.id === item.id)) {
                return prevSelectedImages.filter((selectedItem) => selectedItem.id !== item.id);
            } else {
                return [...prevSelectedImages, item];
            }
        });
    };

    useEffect(() => {
        dispatch(setImagesInState(selectedImages))
    }, [selectedImages, dispatch])
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    ImageData.map(item => {
                        return (
                            <ImageCard onSelect={handleImageSelect} key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default PDF