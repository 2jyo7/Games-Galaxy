import Image from 'next/image';
import { getGames } from "@/utils ";
import Link from 'next/link';
import { useParams } from 'next/navigation';



export default async function GamesDisplay () {
  const games = await getGames();
   

   return (
      <>
        <div className="flex flex-wrap justify-center h-full w-full m-10 
         p-10 space-x-3 space-y-3">
              {
                games.map((game: any) => (<div key={game.id}  className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                  <Image
                   src={"/games.jpg"}         //"/thumbnail.jpg"
                   alt='thumbnail'
                   width={300}
                   height={150}
                  />
                  <h2 className="text-purple-700">{game.title}</h2>
                  <p className='text-pink-600'>{game.genre}</p>
                  <p className='text-green-700'>{game.platform}</p>
                   <p className='flex text-slate-700 '>
                    <Link href={game.freetogame_profile_url}>freetogame_profile_url</Link>
                   </p>
                  <div className="card-actions justify-end">
                    <Link href={`/gameDeta/${game.id}`}>
                      <span className='text-purple-600'>Show More</span>
                    </Link>
                  </div>
                </div>
              </div>))
              }
        </div>
        
      </>
    )
}