import { FC, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLButtonElement>{
    text: string;
    color: 'White' | 'Success' | 'Alert' | 'Default' 
    type: ButtonType
    isLoading?: boolean
}

type ButtonType = 'button' | 'submit' | 'reset'

const Button: FC<Props> = ({ text, color = 'Default', type = 'button', isLoading = false, ...props }) => {
  
    const className = 'text-base rounded-lg font-medium py-2 px-2 md:px-5 xl:text-xl'  
    switch (color) {
        case 'Alert':
            return <button {...props} className={`${className} ${props.disabled ? 'bg-disabled text-white' : 'bg-alert text-white'}`}>{isLoading ? 'loading...' : text}</button>
        
        case 'Success':
            return <button {...props} className={`${className} ${props.disabled ? 'bg-disabled text-white' : 'bg-success text-white'}`}>{isLoading ? 'loading...' : text}</button>
        
        case 'White':
            return <button {...props} className={`${className} ${props.disabled ? 'bg-disabled text-white' : 'bg-white text-black'}`}>{isLoading ? 'loading...' : text}</button>
    }

    return (
        <button {...props} className={`${className} ${props.disabled ? 'bg-disabled text-white' : 'bg-black text-white'}`}>{isLoading ? 'loading...' : text}</button>
    )

}

export default Button