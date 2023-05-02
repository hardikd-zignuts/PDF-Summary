import React, { useState } from 'react'
import { GoVerified } from 'react-icons/go';
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
                        <GoVerified color='#000' size={50} />
                    </span>
                </div>
            )}
        </div>
    );
}

export default ImageCard;
