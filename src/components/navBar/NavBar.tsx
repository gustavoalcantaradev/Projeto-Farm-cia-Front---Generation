import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {

    
  return (
    <>
     <div className='w-full bg-red-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
            <div className='hover:underline'>Produtos</div>
            <Link to='/categorias' className='hover:underline'>Categoria</Link>
            <Link to='/cadastroCategorias' className='hover:underline'>Cadastrar Categoria</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar