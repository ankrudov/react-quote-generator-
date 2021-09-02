const getJokes = async ()=>{
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any#');
        const data = await response.json();
        console.log(data)
        return data;
    } catch(err){
        console.log('error found',err)
    }
};

export default getJokes;