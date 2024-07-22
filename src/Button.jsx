import { useState } from "react";

function Button(){
    const [counter, setCounter] = useState(0);

    let newCounter = 0;

    function clickHandler(){
        newCounter = counter + 1;
        console.log(`Click ${newCounter}`);
        setCounter(newCounter)
    }
    return(
        <button onClick={clickHandler}>{counter} Click 👆</button>
    )
}

export default Button