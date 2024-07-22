/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react"

function ButtonLikes(){
    const [likeCounter, setLikeCounter] = useState(0);
    const [subscribeCounter, setSubscribeCounter] = useState(0);
    
    function likeMessage(){
        console.log(`Like rendered`);
        return(likeCounter < 5) ? 'like < 5' : 'Nice! Like > 5'
    }

    const displayLikeMessage = useMemo(() => likeMessage(), [likeCounter]);

    return(
        <>
            <p>
            <button onClick={() => setLikeCounter(likeCounter + 1)}>{likeCounter} Likes 👍</button> 
            {displayLikeMessage}
            </p>
            <p>
            <button onClick={() => setSubscribeCounter(subscribeCounter + 1)}>{subscribeCounter} Subscribe ▶️</button> 
            </p>
        </>
    )
}

export default ButtonLikes