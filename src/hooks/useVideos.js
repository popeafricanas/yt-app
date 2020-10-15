import {useState, useEffect} from 'react'
import youtube from '../apis/youtube';
const KEY = 'AIzaSyALCCOtsV2JCK_1RPVttATnXkEg1SihVHM';
const useVideos = (defaultSearchTerm) =>{
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm)
    }, []);

    const search = async (term) => {
        const response = await youtube.get("/search", {
                params: {
                    q: term,
                    part: "snippet",
                    type: "videos",
                    maxResults: 5,
                    key: KEY
                }
            });
        setVideos(response.data.items);
    };
    return  [videos, search]; // or {videos, onTermSubmit}
};

export default useVideos;