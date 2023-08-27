import Layout from "@/components/layout/Layout"
import Home from "@/views/home/Home"

const page = () => {
  return (
    <Layout content={<Home/>} />  
  )
}

export default page