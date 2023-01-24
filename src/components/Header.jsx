import React, {useState} from 'react'

const Header = () => {
    const [dark, setDark] = useState(false)

    const handleClick = () => {
        setDark(prevDark => !prevDark)
        console.log(dark)
    }

  return (
    <div onClick={handleClick} className='bg-teal-200 p-8 rounded-lg'>
        <h1 className='text-4xl md:text-6xl font-bold text-teal-700  text-center'>Image Gallery</h1>
    </div>
  )
}

export default Header