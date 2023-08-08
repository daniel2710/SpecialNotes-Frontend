import Image from 'next/image';
import googlePlayIcon from '../../../public/img/mobile-app-store-badge.svg';
import phone from '../../../public/img/phone.svg';
import introCircle from '../../../public/img/circle-intro.svg';

const Header = () => {
  return (
    <header className="py-5 px-5 xl:px-32 md:flex md:justify-center">
      <div className="flex flex-col gap-5 md:w-1/2 md:justify-center">
        <div className="">
          <h1 className="text-[35px] xl:text-[57px] leading-10 font-normal md:leading-[70px]">Quick notes, meaningful results: discover productivity at its best!</h1>
        </div>
        <div>
          <p className="text-xl">Simplify your life with our notes synced across all your devices.</p>
        </div>
      </div>

      <div className="md:w-1/2 relative">
        <div className='flex justify-center mt-5'>
          <Image className='h-auto w-auto' src={phone} alt='phone' />
        </div>

        <div className='hidden 2xl:block absolute top-[150px] z-[-1]'>
          <Image className='animate-ping ' src={introCircle} alt='intro circle' />
        </div>

        <div className='flex justify-center items-center mt-5'>
          <Image className='w-[150px] h-12' src={googlePlayIcon} alt='mobile-app-store-badge' />
        </div>
      </div>
      
    </header>
  )
}

export default Header