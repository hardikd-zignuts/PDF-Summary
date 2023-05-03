import React, { useEffect, useState } from 'react'
import ImageData from '../../constant/ImageData'
import ImageCard from '../../components/pdf/ImageCard'
import { useDispatch } from 'react-redux'
import { setImagesInState } from '../../redux/actions'

const PDF = () => {
    const dispatch = useDispatch()
    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageSelect = (item) => {
        const selectedIndex = selectedImages.findIndex((img) => img.id === item.id);
        if (selectedIndex === -1) {
            setSelectedImages((prev) => [...prev, item]);
        } else {
            setSelectedImages((prev) => [...prev].filter((selectedImage) => selectedImage.id !== item.id));
        }
        if (selectedImages.length >= 2) {
            const firstIndex = ImageData.findIndex((img) => img.id === selectedImages[0].id);
            const lastIndex = ImageData.findIndex((img) => img.id === selectedImages[selectedImages.length - 1].id);
            if (Math.abs(firstIndex - lastIndex) > 1) {
                const selectedRange = ImageData.slice(
                    Math.min(firstIndex, lastIndex) + 1,
                    Math.max(firstIndex, lastIndex)
                );
                const unselectedImages = selectedRange.filter(
                    (img) => !selectedImages.some((selectedImg) => selectedImg.id === img.id)
                );
                setSelectedImages([...selectedImages, ...unselectedImages]);
            }
        }
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