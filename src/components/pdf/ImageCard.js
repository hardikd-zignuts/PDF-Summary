import React, { useEffect, useState } from 'react'
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { useSelector } from 'react-redux';
const ImageCard = ({ id, src, onSelect }) => {
    const stateImage = useSelector(state => state.stateImage)
    const [selected, setSelected] = useState(false);
    const handleImageClick = () => {
        setSelected(!selected);
        onSelect({ id, src });
    };
    useEffect(() => {
        setSelected(stateImage.some((item) => item.id === id))
    }, [id, stateImage])
    return (
        <div
            className={`relative ${selected ? 'opacity-60' : ''} transition-opacity duration-500 cursor-pointer hover:opacity-60`}
            onClick={handleImageClick}
        >
            <img
                className='h-auto max-w-full rounded-lg'
                src={src}
                alt='card data'
            />
            {selected && (
                <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-white font-bold text-xl'>
                        <IoMdCheckmarkCircle color='blue' size={50} />
                    </span>
                </div>
            )}
        </div>
    );
}

export default ImageCard;
