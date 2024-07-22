import { useState,  useEffect } from "react";

function Button(){
    const [countLike, setCountLike] = useState(0);
    const [countDisLike, setCountDisLike] = useState(0);
    useEffect(() => {
        console.log(`Like ${countLike} | DisLike ${countDisLike}`)
    },[countDisLike, countLike]);

    return(
        <>
        <button onClick={() => setCountLike(countLike + 1)}>{countLike} Like 👍</button>
        <button onClick={() => setCountDisLike(countDisLike + 1)}>{countDisLike} DisLike 👎</button>
        </>
    )
}

export default Button