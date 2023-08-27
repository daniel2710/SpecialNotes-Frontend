import { FC, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLButtonElement>{
    text: string;
    color: 'Light' | 'Success' | 'Alert' | 'Default' 
    type: ButtonType
    isLoading?: boolean
}

type ButtonType = 'button' | 'submit' | 'reset'

const Button: FC<Props> = ({ text, color = 'Default', type = 'button', isLoading = false, ...props }) => {
  
    const className = 'text-base rounded-lg font-medium py-1 px-2 md:px-4 md:py-2 xl:text-xl'  
    switch (color) {
        case 'Alert':
            return <button {...props} className={`${className} ${props.disabled ? 'bg-disabled text-white' : 'bg-alert text-white'}`}>{isLoading ? 'loading...' : text}</button>
        
        case 'Success':
            return <button {...props} className={`${className} ${props.disabled ? 'bg-disabled text-white' : 'bg-success text-white'}`}>{isLoading ? 'loading...' : text}</button>
        
        case 'Light':
            return <button {...props} className={`${className} ${props.disabled ? 'bg-disabled text-light' : 'bg-light text-rich-black'}`}>{isLoading ? 'loading...' : text}</button>
    }

    return (
        <button {...props} className={`${className} ${props.disabled ? 'bg-disabled text-white' : 'bg-main text-white hover:bg-hoverdark transition-all duration-200'}`}>{isLoading ? 'loading...' : text}</button>
    )

}

export default Button