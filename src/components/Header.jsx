import React, {useState} from 'react'

const Header = (props) => {
    
    

  return (
    <div className='relative bg-teal-500 p-8 rounded-lg'>
        <h1 className='text-4xl md:text-6xl font-bold text-white  text-center'>Image Gallery</h1>
        <h3 onClick={props.toggleDarkMode} className='absolute top-1 right-1 bg-white py-1 px-2 rounded font-bold cursor-pointer'>
          {props.darkMode ? "Light" : "Dark"  }
        </h3>
    </div>
  )
}

export default Header