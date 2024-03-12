import { useLogin } from "../hooks/useLogin"

const ProfilePage = ()=>{
    const username = useLogin()
    return (
        <div>
            <h1>Ini Profile</h1>
            <h2>{username}</h2>
        </div>
    )
}

export default ProfilePage