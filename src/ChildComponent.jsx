/* eslint-disable react/prop-types */
import { memo } from "react"

function ChildComponent(props){
    console.log(`Child Component Render`)
    return(
        <>
            <p>Channel YT: <strong>{props.name}</strong></p>
        </>
    )
}

export default memo(ChildComponent)