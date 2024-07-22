import { useRef } from "react"

function UseRef(){
    const message = useRef(null);
    const displayMessage = useRef(null);

    function clickHandler(){
        console.log(message.current.value);
        displayMessage.current.innerHTML = message.current.value;

        displayMessage.current.style.padding = "16px";
        displayMessage.current.style.marginTop = "16px";
        displayMessage.current.style.borderRadius = "6px";
        displayMessage.current.style.backgroundColor = "#e8e8e8";
        displayMessage.current.style.color = "#101010";
        displayMessage.current.style.fontWeight = "bold";
    }

    return(
    <>
        <div>
            <input type="text" ref={message} placeholder="Send Message" />
        </div>
        <div>
            <button onClick={clickHandler}>Generate text</button>
        </div>
        <div ref={displayMessage}></div>
    </>
    )
}

export default UseRef