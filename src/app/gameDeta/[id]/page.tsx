import { getGameById } from "@/utils ";
import Link from "next/link";


export default async function GameDeta({params}: any) {
     
     const gameD = await getGameById(params);
     
     //console.log(gameD);
       
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            
            <div className="container m-4 p-4">
              <h1 className=" p-3 m-3 rounded bg-orange-500 text-black">title: {gameD.title}</h1>
              <h4 className=" p-3 m-3 rounded bg-orange-500 text-black">
                <Link href={gameD.thumbnail}> thumbnail: {gameD.thumbnail}</Link></h4>
            <p className="text-4xl  bg-orange-500 "> status: {gameD.status} 
            <span className=" p-3 m-3 rounded bg-orange-500 text-black">:{params.id}</span>
             </p>
              <p className=" p-3 m-3 rounded bg-orange-500 text-black">
                short_description: {gameD.short_description}
              </p>
              <h4 className=" p-3 m-3 rounded bg-orange-500 text-black">
              <Link href={gameD.game_url}> game_url: {gameD.game_url}</Link>
              </h4>
              <h4 className=" p-3 m-3 rounded bg-orange-500 text-black">genre: {gameD.genre}</h4>
              <h4 className=" p-3 m-3 rounded bg-orange-500 text-black"> platform: {gameD.platform}</h4>
              <h4 className=" p-3 m-3 rounded bg-orange-500 text-black">publisher : {gameD.publisher}</h4>
              <h4 className=" p-3 m-3 rounded bg-orange-500 text-black">developer : {gameD.developer}</h4>
              <h4 className=" p-3 m-3 rounded bg-orange-500 text-black">release_date : {gameD.release_date}</h4>
              
              <p className="text-4xl  bg-orange-500 ">minimum_system_requirements: {gameD.minimum_system_requirements.processor}</p>
              <p className=" p-3 m-3 rounded bg-orange-500 text-black">
              <Link href={gameD.freetogame_profile_url}>
                freetogame_profile_url : {gameD.freetogame_profile_url} </Link></p>
            
             <h5 className="text-4xl  bg-orange-500 ">
             <Link href={gameD.screenshots[1].image}>
              screenshots: {gameD.screenshots[1].image}</Link></h5>
            
            </div>
            
            </div>
    )
};