import React from 'react'

export default function Digi_Image({src,alt}) {
    console.log(src);
  return (
    <div className="flex flex-col items-center justify-center">
          <img src={src} alt={alt} border="0"
              className="2xl:w-96 md:w-64 max-h-screen"
            />
          </div>
  )
}
