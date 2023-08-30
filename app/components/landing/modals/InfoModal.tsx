import { FC } from 'react'
import Button from '@/components/UI/buttons/Button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link';
import ColFlag from '@/components/UI/ColFlag';

export interface Props{
  setShowModal: (value: boolean) => void;
}

const InfoModal: FC<Props> = ({ setShowModal }) => {

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="bg-rich-black text-light rounded-lg p-6 w-[700px] transform transition-all ease-out duration-300 mx-2">
            <div className='flex gap-2 items-center'>
              <ColFlag/> 
              <h4 className=' text-main font-medium'>Developed and marketed by: <span className='font-semibold'>Daniel De Avila</span></h4>
            </div>
            <div className='flex flex-col gap-2 mt-3'>
              <Link href='https://github.com/daniel2710' target='_blank' className='flex items-center gap-2 w-fit'>
                <AiFillGithub className='w-10 h-10' />
                <p>Daniel2710</p>
              </Link>
              <Link href='https://www.linkedin.com/in/daniel-de-avila/' target='_blank' className='flex items-center gap-2 w-fit'>
                <AiFillLinkedin className='w-10 h-10' />
                <p>Daniel De Avila</p>
              </Link>
            </div>
            <div className="mt-2">
              <p>&copy; 2023 SpecialNotes. All rights reserved.</p>
            </div>
            <div className="mt-4">
              <Button onClick={()=>setShowModal(false)} color="Light" text="Close" type="button" />
            </div>
          </div>
      </div>
  )
}

export default InfoModal