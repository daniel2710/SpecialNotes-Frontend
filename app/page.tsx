import Features from "./components/landing/Features";
import Header from "./components/landing/Header";
import Navbar from "./components/landing/Navbar";
import References from "./components/landing/References";
import './styles/landing.css';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Features/>
      <References/>
    </main>
  )
}
