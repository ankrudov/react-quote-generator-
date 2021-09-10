import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import { useTheme } from "./useTheme";
import { getFromLS  } from '../utils/storage';
import Button from '@material-ui/core/Button';



const Container = styled.ul`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;
    padding: 10px;
`;

//get data from local storage
export default (props)=>{
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const { setMode } = useTheme();

    const themeSwitcher = selectedTheme =>{
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(()=>{
        setThemes(_.keys(data));
    },[data]);

    useEffect(()=>{
        props.newTheme && 
            updateButton(props.newTheme);
    },[props.newTheme])

    const updateButton = theme =>{
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const themeButton = props =>{
        return(
            <Button
                onClick={(theme) => themeSwitcher(props.theme)}
            >
                {props.theme.name}
            </Button>
        );
    }
    return(
        <div>
            <Container>
            {themes.length > 0 && 
                themes.map(theme=> (
                    <themeButton theme={data[theme]} key={data[theme].id}/>
                ))
            }
            </Container>
        </div>
    );

}