import { FaInstagramSquare } from "react-icons/fa";
import   { RiTwitterXLine } from "react-icons/ri";
import   { AiFillGithub }    from "react-icons/ai";
import   { BsDiscord  }    from "react-icons/bs";
import   { BiLogoGmail  }    from "react-icons/bi";
import   { FaYoutubeSquare } from "react-icons/fa";
import  Link  from "next/link";

export default function Footer () {
return (
    <footer className="flex  flex-col items-center bg-neutral-900 
    text-center text-white border border-gray-600 
     hover:border-gray-500">
        <div className="container grid grid-cols-3 px-6 pt-6 gap-10">
            <div className="mb-6 flex justify-center">
            <div className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal
             text-white transition duration-150 ease-in-out space-y-3
              hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
              <FaInstagramSquare />
              <RiTwitterXLine />
              <AiFillGithub />
              <BiLogoGmail />
              <BsDiscord />
              <FaYoutubeSquare />
            </div>
            </div>
            

            <div className=" flex flex-col gap-20
             w-full p-4 text-center bg-slate-700" >
            
            <div className="text-white">
              <h1>@G.G Contacts</h1>
              <p>Phone no.: <span>123456789</span></p>
              <p>website: <span>@Games Galaxy</span></p>
            </div>
            <div>
      © {new  Date().getFullYear()} Copyright:
    <Link className="text-white" href="/"
      > Games Galaxy</Link>
      </div>
        </div>

            <div className=" mb-6 mx-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        distinctio earum repellat quaerat voluptatibus placeat nam,
        commodi optio pariatur est quia magnam eum harum corrupti dicta,
        aliquam sequi voluptate quas.
      </p>
    </div>
        
        
        </div>
    </footer>
)
};