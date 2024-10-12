import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-400 flex justify-between p-2'>
        <div className="logo px-4 font-bold ">PassMan</div>
        <ul className='flex gap-5 justify-between px-3'>
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>About</li>
            <li className='cursor-pointer hover:font-bold'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
