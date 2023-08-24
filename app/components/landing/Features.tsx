import Image from 'next/image';
import messageIcon from '../../../public/icons/message.svg';

const Features = () => {
  return (
    <section className='bg-rich-black text-light flex flex-col gap-10 pt-10 py-5 px-5 md:gap-2 xl:px-32'>
      <h3 className='text-center text-3xl font-medium'>Features</h3>
      <div className='justify-between gap-4 flex flex-col md:py-10 xl:grid xl:grid-cols-3'>
        <div className='flex justify-center items-center flex-col gap-2'> 
          <Image priority className='w-14 h-14' src={messageIcon} alt='messageIcon' />
          <h1 className='text-center text-base font-bold'>We are lovers of productive</h1>
          <p className='text-center font-medium text-sm'>Our application has a friendly and simple user interface, so you can enjoy your productivity.</p>
        </div>
        <div className='flex justify-center items-center flex-col gap-2'> 
          <Image priority className='w-14 h-14' src={messageIcon} alt='messageIcon' />
          <h1 className='text-center text-base font-bold'>Start free</h1>
          <p className='text-center font-medium text-sm'>We have a unique plan totally free, register and log in to start enjoying SpecialNotes.</p>
        </div>
        <div className='flex justify-center items-center flex-col gap-2'> 
          <Image priority className='w-14 h-14' src={messageIcon} alt='messageIcon' />
          <h1 className='text-center text-base font-bold'>Constant updates</h1>
          <p className='text-center font-medium text-sm'>Our developers work 24/7 so that SpecialNotes flows in the best way.</p>
        </div>
      </div>
    </section>
  )
}

export default Features