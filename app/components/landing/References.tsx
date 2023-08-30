import Image from 'next/image'
import logoMark from '../../../public/icons/logomark.svg';

const References = () => {
  return (
    <div className='bg-paynes text-light flex flex-col gap-5 justify-center items-center py-36'>
        <Image priority src={logoMark} alt='logomark' className='m-auto w-10 h-10' />
        <h1 className='px-3 text-center text-base xl:text-2xl'>{"I use SpecialNotes for all my notes when I&apos;m working on a project or need to jot something down, it&apos;s definitely improved my productivity."}</h1>
    </div>
  )
}

export default References