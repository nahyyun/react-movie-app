import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.REACT_APP_API_KEY,
    }
});

const NowPlayingMovie = async() => {
    let Data = [];
    try{
        for(let i = 1; i <6; i++){
            const res = await instance.get('/movie/now_playing',{
                params: {
                    page: i
                }
            })
            Data.push(res.data.results);
        }
        return Data;
    }catch(error){
        console.log(error)
    }
} 
const UpcomingMovie = async() => {
    let Data = [];
    try{
        for(let i = 1; i <4; i++){
            const res = await instance.get('/movie/upcoming',{
                params: {
                    region: 'US',
                    page: i
                }
            })
            Data.push(res.data.results);
        }
        return Data;
    }catch(error){
        console.log(error);
    }
}

const getDetail = async(id) => {
    try{
        const res = await instance.get(`/movie/${id}`)
        return res.data;
    }catch(error){
        console.log(error);
    }
}

export { NowPlayingMovie, UpcomingMovie, getDetail };
