/* eslint-disable react/prop-types */
import { memo } from "react"

function CallbackComponent(props){
    console.log(`Brand Component Render`)
    return(
        <>
            <p>Brand: <strong>{props.name}</strong></p>
            <button onClick={props.aksi}>Change Brand</button>
        </>
    )
}

export default memo(CallbackComponent)