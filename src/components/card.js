import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import { useTheme } from '../theme/useTheme';

const useStyles = makeStyles({
  root:{
    maxWidth:275,
    marginLeft:1,
    marginRight:1,
    marginTop: 55,
  },
  title:{
    fontSize:20,
  },
  pos:{
    marginBottom:12,
  }
});

function CharacterCard(){
  const [quote, setQuote] = useState()
  const [character,setCharacter] = useState();
  const classes = useStyles();

  //loads data on load using useEffect useEffect = componentDidMount, componentDidUmount

    useEffect(()=>{
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer UmIbKRo66HRDneRGiXk2'
      }
      const fetchData = async ()=>{
        const rawQuotes = await fetch('https://the-one-api.dev/v2/quote',{headers:headers})
        const quotes = await rawQuotes.json();
        const quote = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
        setQuote(quote.dialog)
        const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
        const characters = await rawCharacters.json();
        const character = characters.docs[0];
        setCharacter(character.name)
      };
        fetchData();

      },[]);

    const refreshPage = (e)=>{
      window.location.reload(false);
      e.preventDefault();
    }

  return(
    <div>
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center">
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title}>One Quote, to rule them all!</Typography>
            </CardContent>
            <CardContent>
              <Typography>{quote}</Typography>
            </CardContent>
            <CardContent>
              <Typography>{character}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" color="primary" onClick={()=>refreshPage()}>
              New Quote!
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>

  );
}
    
export default CharacterCard;