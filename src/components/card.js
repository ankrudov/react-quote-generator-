import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';



function QuoteCard(){
  const [jokes,setJokes] = useState('');


  //loads data on load using useEffect useEffect = componentDidMount, componentDidUmount
  useEffect(()=>{
    getData();

    //fetch data from API, runs on page load
    async function getData(){
      const response = await fetch('https://v2.jokeapi.dev/joke/Any#');
      const data = await response.json();
      
      //stores data into jokes variable 
      console.log(data)
      setJokes(data);
    }
  },[setJokes]);

  return(
    <div>
      {jokes.type==='single'?
      <div>
        <Card>
          <CardContent>
            <Typography>{jokes.type}</Typography>
          </CardContent>
          <CardContent>
            <Typography>{jokes.joke}</Typography>
          </CardContent>
        </Card>
      </div>:
      <div key={jokes.id}>
      <Card>
        <CardContent>
          <Typography>{jokes.type}</Typography>
        </CardContent>
        <CardContent>
          <Typography>{jokes.setup}</Typography>
        </CardContent>
        <CardContent>
          <Typography>{jokes.delivery}</Typography>
        </CardContent>
      </Card>
    </div>
    }
  </div>
  );

}
    
export default QuoteCard;