import Link from "next/link";
import Button from "./Button";

export default function Buttons() {

  return (
    <div
    className="
    w-full
    md:flex
    flex-col
    flex
    md:flex-row
    items-center
    justify-center
    space-y-2
    space-x-10
    "
    >
        <Button className="bg-red-700"><Link href={'/parts'} className="font-semibold ">Parts</Link></Button>
        <Button className="bg-red-700"><Link href={'/maintainance'} className="font-semibold ">Maintainance</Link></Button>
        
    </div>
  )   
}