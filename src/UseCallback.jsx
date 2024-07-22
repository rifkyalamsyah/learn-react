import { useCallback, useState } from "react";
import CallbackComponent from "./CallbackComponent";

function UseCallback(){
    const [name, setName] = useState("Nike");

    const handlerName = useCallback(() => {
        let channelName = '';
        if(name == 'Nike'){
        channelName = 'Adidas';
        }else{
        channelName = 'Nike';
        }
        setName(channelName);
        console.log(`setname run ${name}`);
    }, [name]);

    return(
        <>
        <CallbackComponent name={name} aksi={handlerName}/>
        </>
    )
}

export default UseCallback