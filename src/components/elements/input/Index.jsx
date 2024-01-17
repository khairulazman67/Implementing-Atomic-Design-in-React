import Input from './Input'
import Label from './Label'
const InputForm = (props)=>{
    const {title, placeholder, type, htmlfor} = props
    return (
        <div className='mb-6'>
            <Label htmlfor={htmlfor} >{title}</Label>
            <Input placeholder={placeholder} type={type}></Input>
        </div>
    )
}

export default InputForm