import React, { useState } from 'react'
import { IoMdCheckmarkCircle } from 'react-icons/io';
const ImageCard = ({ id, src, onSelect }) => {
    const [selected, setSelected] = useState(false);

    const handleImageClick = () => {
        setSelected(!selected);
        onSelect({
            id, src
        });
    };

    return (
        <div
            className={`relative ${selected ? 'opacity-60' : ''} transition-opacity duration-500`}
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
