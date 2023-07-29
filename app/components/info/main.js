import React from 'react';
import ImageHolder from './imageHolder';
import TextHolder from './textHolder';
export default function Info() {

    return (


        <div className='max-w-full flex flex-col px-4 font-hubot text-white grid gap-2'>
            <ImageHolder />
            <TextHolder />
        </div>
    )

}