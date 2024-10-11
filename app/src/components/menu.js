import Link from "next/link";

export default function Menu(){
    return(
        <div className='flex justify-center gap-5'>
            <Link href='/'>Strona Główna</Link>
            <Link href='/strona1'>Zadanie 1</Link>
            <Link href='/strona2'>Zadanie 2</Link>
            <Link href='/strona3'>Zadanie 3</Link>
            <Link href='/strona4'>Zadanie 4</Link>
            <Link href='/strona5'>Zadanie 5</Link>
        </div>
    )
}