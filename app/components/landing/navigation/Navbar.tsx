'use client'
import { useEffect, useState } from "react";
import Button from "@/components/UI/buttons/Button"
import confetti from 'canvas-confetti';
import InfoModal from "../modals/InfoModal";
import { FiInfo } from 'react-icons/fi'
import Link from "next/link";

const Navbar = () => {
    const [ showModal, setShowModal ] = useState(false)

    useEffect(()=>{
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 1 }  
        });
    }, [])

    return (
        <nav className="bg-rich-black flex justify-between items-center py-10 px-2 md:py-10 xl:px-32">
            <div className="flex gap-1 items-center">
                <h2 className="text-light text-2xl font-medium md:text-3xl">SpecialNotes</h2>
            </div>
            <div className="flex gap-5 items-center">
                <div className="flex items-center gap-2">
                    <FiInfo onClick={()=>setShowModal(true)} className="w-5 h-5 cursor-pointer text-light" />
                    <Link prefetch href='/signin'>  
                        <Button color="Light" text="Sign In" type="button" />
                    </Link>
                    <Link prefetch href='/signup'>
                        <Button color="Light" text="Sign Up" type="button" />
                    </Link>
                </div>
            </div>
            { showModal && <InfoModal setShowModal={setShowModal} /> }
        </nav>
    )
}

export default Navbar