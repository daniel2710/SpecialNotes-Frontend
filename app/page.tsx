'use client'
import { useRef } from "react";
import Features from "./components/landing/Features";
import Header from "./components/landing/Header";
import Navbar from "./components/landing/Navbar";
import References from "./components/landing/References";
import { motion } from 'framer-motion';
import { useVariantsCursor } from 'hooks/UX-UI/useVariantsCursor';
import './styles/landing.css';

export default function Home() {
  const ref = useRef(null);
  const { variants, spring, cursorVariant, setCursorVariant } = useVariantsCursor(ref);

  return (
    <main ref={ref}>
      <Navbar/>
      <Header setCursorVariant={setCursorVariant} />
      <Features/>
      <References/>
      <motion.div variants={variants} className="circle z-[90000] fixed top-0 left-0 h-8 w-8 pointer-events-none rounded-[50%]" animate={cursorVariant} transition={spring} />
    </main>
  )
}
