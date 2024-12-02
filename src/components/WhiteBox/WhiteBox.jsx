import './WhiteBox.css'

function WhiteBox({children}){
    return (
        <>
            <div className={"whiteBox"}>  {children}</div>
        </>
    )
}

export default WhiteBox;