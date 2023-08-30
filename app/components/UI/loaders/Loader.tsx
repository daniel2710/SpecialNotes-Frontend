interface Props{
    size?: "small" | "medium"
}
  
const Loader = ({ size = "medium" }: Props) => {
    return (
      <span className={`loading loading-spinner text-rich-black ${size === 'medium' ? 'h-[80px] w-[80px]' : 'h-5 w-5'}`}></span>
    )
}
  
export default Loader