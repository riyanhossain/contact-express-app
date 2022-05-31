import React from 'react'

function Frm() {
  return (
    <div className='h-[30rem] w-72 flex flex-col gap-2 justify-center items-center bg-[#070556] mb-6 md:w-96'>
      <p className='font-bold text-white font-myfont'>Add Contact</p>
      <form action="" className='w-11/12 flex flex-col gap-y-2' encType='multipart/form-data'>
      <input type="file" id="avatar" name="avatar" className='text-white font-myfont text-sm w-full' accept='image/png, image/jpeg, image/jpg' required/>
      <input type="text" className='font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic place-content-center' placeholder='name' required/>
      <input type="text" className='font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic' placeholder='occupation' required/>
      <input type="email" className='font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic' placeholder='email' required/>
      <input type="number" className='font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic' placeholder='phone' required/>
      <input type="text" className='font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic' placeholder='location' required/>
      <input type="text" className='font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic' placeholder='Facebook username' required/>
      <input type="text" className='font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic' placeholder='Instagram username' required/>
      <input type="text" className='font-myfont text-[#2825D1] outline-cyan-400 w-full placeholder:italic' placeholder='twitter username' required/>
      <textarea
              placeholder="quote"
              name="quote"
              rows={4}
              className="text-sm font-myfont text-[#2825D1] w-full outline-cyan-400"
              required
            />
      <input type="submit" className='w-full bg-white text-[#2825D1] font-myfont font-bold'/>
      </form>
      

      
      
    </div>
  )
}

export default Frm