import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav>
            <div>
                <ul className="flex justify-between items-center mx-8 my-5 px-8 py-5
                 border border-gray-500 bg-slate-800">
                    <li>
                    <Image src="/games1.jpg"
                        alt="logo"
                        width={170}
                        height={170}
                        />
                    </li>
                    <li className="text-3xl font-bold">
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className="text-3xl font-bold m-2 p-4">
                        <Link href={"/sign-in"}>SignIn</Link>
                    </li>
                    <li className="text-3xl font-bold bg-slate-700  m-2 p-4">
                        <Link href={"/sign-up"}>SignUp</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}