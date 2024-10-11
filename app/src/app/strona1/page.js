'use client'
import Menu from "@/components/menu";
import { useState } from "react";

export default function Page(){

    const [numb, setNumb] = useState(0)
    const zmien = ()=>{
        setNumb(numb+1)
    }

    return(
        <div className="flex justify-center items-center flex-col">
            <h1>{numb}</h1>
            <button onClick={zmien}>+1</button>
            <Menu/>
        </div>
    )

}