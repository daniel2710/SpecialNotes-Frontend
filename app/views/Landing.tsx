'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import { useVariantsCursor } from '@/hooks/UX-UI/useVariantsCursor';
import Navbar from '@/components/landing/navigation/Navbar';
import Header from '@/components/landing/Header';
import Features from '@/components/landing/Features';
import References from '@/components/landing/References';
import '../styles/landing.css';

const Landing = () => {
    const ref = useRef(null);
    const { variants, spring, cursorVariant, setCursorVariant } = useVariantsCursor(ref);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
        <main ref={ref}>
            <Navbar/>  
            <Header setCursorVariant={setCursorVariant} />
            <Features/>
            <References/>
            <div className="hidden xl:block">
            <motion.div variants={variants} className="circle z-[90000] fixed top-0 left-0 h-8 w-8 pointer-events-none rounded-[50%]" animate={cursorVariant} transition={spring} />
            </div>
        </main>
        </motion.div>
    )
}

export default Landing