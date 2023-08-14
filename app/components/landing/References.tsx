import Image from 'next/image'
import logoMark from '../../../public/icons/logomark.svg';

const References = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center bg-black text-white py-36'>
        <Image src={logoMark} alt='logomark' className='m-auto w-10 h-10' />
        <h1 className='px-3 text-center text-base xl:text-2xl'>"I use SpecialNotes for all my notes when I'm working on a project or need to jot something down, it's definitely improved my productivity."</h1>
    </div>
  )
}

export default References