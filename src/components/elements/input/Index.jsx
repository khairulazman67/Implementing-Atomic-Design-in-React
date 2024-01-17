import Input from './Input'
import Label from './Label'
const InputForm = (props)=>{
    const {title, placeholder, type, htmlfor, name} = props
    return (
        <div className='mb-6'>
            <Label htmlfor={htmlfor} >{title}</Label>
            <Input placeholder={placeholder} type={type} name={name}></Input>
        </div>
    )
}

export default InputForm