import { useState } from "react";
import ChildComponent from "./ChildComponent";

function Memo(){
    const [name, setName] = useState("NIMA");

    function handlerName(){
        let channelName = '';
        if(name == 'NIMA'){
        channelName = 'WPU';
        }else{
        channelName = 'NIMA';
        }
        setName(channelName);
        console.log(`setname run ${name}`);
    }

    return(
        <>
        <ChildComponent name={name}/>
        <button onClick={handlerName}>Change Channel</button>
        </>
    )
}

export default Memo