import avatar from './avatar.png'
import './Avatar.css'

function Avatar(){
    return (
        <>
            <figure>
                <img className={"avatar"} src={avatar} alt={"avatar"}/>
            </figure>
        </>
    )
}

export default Avatar;