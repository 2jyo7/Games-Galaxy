import axios from 'axios';



export const getGames = async() => {
    const response = await axios({
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',params: {tag: '3d.mmorpg.fantasy.pvp',
      platform: 'pc' },
      headers: {
        'X-RapidAPI-Key': '6591fb0682msh4c5c25fab2bbea7p1b04acjsn28f88eb35d95',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    });

    
    const result = await response.data;
    return result;
    
};

export const getGameById = async({id}: any) => {
  const response = await fetch(`https://www.freetogame.com/api/game?id=${id}`)

  
  const result = await response.json();
  return result;
  
};




