import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body:'https://wallpaperaccess.com/full/815634.jpg',
    fontColor: '#000'
};

export const darkTheme = {
    body: 'https://c4.wallpaperflare.com/wallpaper/174/169/219/art-artwork-cities-detail-wallpaper-preview.jpg',
    fontColor: '#fff'
};

export const GlobalStyles = createGlobalStyle`
    body{
        background-image: url(${props => props.theme.body});
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        min-height:100%;

    }
`