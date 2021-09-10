//setting up local storage for the themes to persists once user chooses

//saving to local storage
export const setToLS = (key,value)=>{
    window.localStorage.setItem(key,JSON.stringify(value))
}

//grab from local storage
export const getFromLS = key =>{
    const value = window.localStorage.getItem(key);

    if(value){
        return JSON.parse(value);
    }
}