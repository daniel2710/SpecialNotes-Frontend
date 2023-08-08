import Image from 'next/image';
import messageIcon from '../../../public/icons/message.svg';

const Features = () => {
  return (
    <section className='flex flex-col gap-10 mt-10 py-5 px-5 md:gap-2 xl:px-32'>
      <h3 className='text-center text-3xl font-medium'>Features</h3>
      <div className='flex flex-col gap-8 md:flex-row md:py-10'>
        <div className='flex flex-col gap-2'> 
          <Image className='m-auto w-14 h-14' src={messageIcon} alt='messageIcon' />
          <h1 className='text-center text-base font-bold'>Share notes with friends</h1>
          <p className='text-center font-medium text-sm'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>
        <div className='flex flex-col gap-2'> 
          <Image className='m-auto w-14 h-14' src={messageIcon} alt='messageIcon' />
          <h1 className='text-center text-base font-bold'>Auto Completion</h1>
          <p className='text-center font-medium text-sm'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>
        <div className='flex flex-col gap-2'> 
          <Image className='m-auto w-14 h-14' src={messageIcon} alt='messageIcon' />
          <h1 className='text-center text-base font-bold'>Manage your notes with friends</h1>
          <p className='text-center font-medium text-sm'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>
      </div>
    </section>
  )
}

export default Features