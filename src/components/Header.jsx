import React, {useState} from 'react'

const Header = (props) => {
    
    

  return (
    <div className='relative bg-teal-500 p-8 rounded-lg'>
        <h1 className='text-4xl md:text-6xl font-bold text-white  text-center'>Image Gallery</h1>
        <h3 onClick={props.toggleDarkMode} className='absolute top-2 right-3 bg-white p-1 rounded font-bold cursor-pointer'>
          {props.darkMode ? "Light Mode" : "Dark Mode"  }
        </h3>
    </div>
  )
}

export default Header