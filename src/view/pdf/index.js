import React, { useEffect, useState } from 'react'
import ImageData from '../../constant/ImageData'
import ImageCard from '../../components/pdf/ImageCard'
import { useDispatch, useSelector } from 'react-redux'
import { resetSelectedImages, setImagesInState } from '../../redux/actions'
import { GetMinAndMaxId } from '../../utils/utils'

const PDF = () => {
    const dispatch = useDispatch()
    const [selectedImages, setSelectedImages] = useState([]);
    const resetImage = useSelector(state => state.resetImage)
    const [flag, setFlag] = useState(false)
    const [cId, setCId] = useState(null)
    const handleImageSelect = (item) => {
        setFlag((prev) => !prev)
        const selectedIndex = selectedImages.findIndex((img) => img.id === item.id);
        if (selectedIndex === -1) {
            setSelectedImages((prev) => [...prev, item]);
        } else {
            setSelectedImages((prev) => [...prev].filter((selectedImage) => selectedImage.id !== item.id));
        }
        setCId(parseInt(item.id.slice(1)))
    };
    useEffect(() => {
        if (selectedImages.length >= 2) {
            const num = GetMinAndMaxId(selectedImages)
            const temp = ImageData.slice(num.min - 1, num.max)
            setSelectedImages(temp)
            if (cId > num.min && cId < num.max) {
                console.log(cId)
                let firstI = cId - num.min
                let lastI = num.max - cId
                if (firstI > lastI) {
                    let firstPart = ImageData.slice(num.min - 1, cId - 1)
                    setSelectedImages(firstPart)
                } else {
                    let secPart = ImageData.slice(cId, num.max)
                    setSelectedImages(secPart)
                }
            }
        }
        // eslint-disable-next-line
    }, [flag, cId])
    useEffect(() => {
        dispatch(setImagesInState(selectedImages))
    }, [selectedImages, dispatch])

    useEffect(() => {
        if (resetImage) {
            setSelectedImages([]);
        } else {
            dispatch(resetSelectedImages())
        }
    }, [resetImage, dispatch])
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