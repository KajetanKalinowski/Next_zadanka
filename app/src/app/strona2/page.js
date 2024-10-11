'use client'

import { useState, useEffect } from "react";
import Menu from "@/components/menu";
export default function Page(){

    const [input, setInput] = useState("")

    useEffect(()=>{
        console.log(input)
    }, [input])

    return(
        <div className="flex justify-center items-center flex-col">
            <input onChange={(e)=>setInput(e.target.value)} placeholder="Zmien tytul"></input>
            {input!="" ? <title>{input}</title> : <title>Next.js</title>}
            <Menu/>
        </div>
        
    )

}