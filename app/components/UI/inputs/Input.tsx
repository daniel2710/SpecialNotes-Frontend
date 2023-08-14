// import { UseFormRegisterReturn } from 'react-hook-form';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
//   register?: UseFormRegisterReturn;
}

const Input = ({ isError, ...props }: Props) => {
  return (
    <input {...props} className={`bg-white border-none w-full ${isError && 'ring-[1px] ring-alert'} py-2 px-1 rounded-lg outline-none hover:[box-shadow:inset,0,0,0,1px,#535158]`} />
  )
}

export default Input