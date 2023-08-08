"use client";

import Button from "@/components/buttons/Button"
import IconNav from "./IconNav"
import confetti from 'canvas-confetti';
import { useEffect } from "react";

const Navbar = () => {

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
                <h2 className="text-3xl font-medium">SpecialNotes</h2>
                <IconNav/>
            </div>
            <div className="flex gap-5 items-center">
                <ul className="hidden md:flex gap-2 text-base xl:text-xl items-center">
                    <li>About</li>
                    <li>Feature</li>
                    <li>FAQs</li>
                </ul>
                <div className="flex gap-2">
                    <Button color="Default" text="Login" type="button" />
                    <Button color="Default" text="Register" type="button" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar