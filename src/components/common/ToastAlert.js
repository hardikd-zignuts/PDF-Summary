import React, { useState } from 'react'
import { Toast } from 'flowbite-react'

const ToastAlert = ({ title }) => {
    const [isShow, setIsShow] = useState(true)
    setTimeout(() => {
        setIsShow(false)
    }, [2000])
    return (
        <>
            {
                isShow &&
                <div className='absolute right-1 bottom-9'>
                    <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                            Ri
                        </div>
                        <div className="ml-3 text-sm font-normal">
                            {title}
                        </div>
                        <Toast.Toggle />
                    </Toast>
                </div>
            }
        </>
    )
}

export default ToastAlert