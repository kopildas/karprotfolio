import React from 'react'

export default function Contact() {

  const sendEmail =(e) => {
    e.preventDefault();
  }

  return (
    <div>
      <section className="p-28 flex bg-custom-green w-full h-screen gap-12 items-center justify-center fon ">
        <div className='flex -mt-20'>
        <div className='w-1/2 flex flex-col items-center justify-center ml-20'>
          <form  onSubmit={sendEmail}>
            <input type="text" className='h-8 mt-8 w-96 border border-b-gray-500 bg-custom-green' placeholder='Your Name' />
            <input type="text" className='h-8 mt-8 w-96 border border-b-gray-500 bg-custom-green' placeholder='Your Email' />
            <textarea name="postContent" rows={4} cols={40} className='h-8 mt-8 w-96 border border-b-gray-500 bg-custom-green' placeholder='Share Your Thoughts' />

            <button type="submit" className='border border-blue-400 w-96 h-10 mt-10 rounded-lg hover:bg-color-palate-2 hover:text-white transition ease-in-out duration-150 text-gray-700 '>Sent</button>
          </form>
        </div>
        <div className='w-1/2 flex flex-col items-center justify-evenly gap-10'>
          <div className='w-64 h-80 rounded-blob border border-blue-300 flex flex-col items-start justify-evenly gap-10 shadow-2xl'>
              <div>
                <p className='text-7xl flex items-end justify-end w-full font-black text-gray-700'>Contact</p>
                <p className='text-6xl flex items-end justify-end w-full font-black text-gray-700 -left-5'>
                  <div className='border border-gray-700 w-32'></div>
                  Me</p>
              </div>
              <div>
                <p className=' flex items-end justify-end w-full text-gray-600 '>Interested in connecting? Fill the form below and I’ll get in touch with you shortly!</p>
              </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
