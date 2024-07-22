/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react"

function Child1(){
    const data = useContext(Context)

    return(
        <>
            <div>Clild 1: {data.nama}</div>
            <Child2/>
        </>
    ) 
}

function Child2(){
    const data = useContext(Context)

    return(
        <>
            <div>Clild 2: {data.nama}</div>
            <Child3/>
        </>
    ) 
}

function Child3(){
    const data = useContext(Context)

    function clickHandler(){
        if(data.nama == 'Nima'){
            data.setNama('Xaviera Putri');
        }else{
            data.setNama('Nima');
        }
    }
    return(
        <>
            <p>Child 3:  Hello 👋 {data.nama}, your age is {data.usia}. 🎉</p>
            <button onClick={clickHandler}>Change Name</button>
        </>
    )
}

const Context = createContext();

function UseContext(){
    const [nama, setNama] = useState("Xaviera Putri");
    return(
        <>
            <Context.Provider value={{nama, setNama, usia: "23"}}>
                <Child1 name="Nima"/>
            </Context.Provider>
        </>
    )
}

export default UseContext