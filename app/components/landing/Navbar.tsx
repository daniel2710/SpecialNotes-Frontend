'use client'
import { useEffect, useState } from "react";
import Button from "@/components/buttons/Button"
import IconNav from "./IconNav";
import confetti from 'canvas-confetti';
import InfoModal from "./modals/InfoModal";
import { FiInfo } from 'react-icons/fi'

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
        <nav className="flex justify-between items-center py-10 px-2 md:py-10 xl:px-32">
            <div className="flex gap-1 items-center">
                <h2 className="text-2xl font-medium md:text-3xl">SpecialNotes</h2>
                <IconNav/>
            </div>
            <div className="flex gap-5 items-center">
                <div className="flex items-center gap-2">
                    <FiInfo onClick={()=>setShowModal(true)} className="w-5 h-5 cursor-pointer" />
                    <Button color="Default" text="Login" type="button" />
                    <Button color="Default" text="Register" type="button" />
                </div>
            </div>
            { showModal && <InfoModal setShowModal={setShowModal} /> }
        </nav>
    )
}

export default Navbar