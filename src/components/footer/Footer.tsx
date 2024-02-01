import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  return (
    <>
        <div className="flex justify-center bg-red-600 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Farmácia | Copyright: </p>
            <p className='text-lg'>Entre em contato</p>
            <div className='flex gap-2'>
              <InstagramLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer