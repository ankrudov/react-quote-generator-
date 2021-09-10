import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as themes from './theme/schema.json';
import { setToLS} from './utils/storage';

//grabbing theme information from the themes schema and saving it under the key all themes
const Index = ()=>{
  setToLS('all-themes',themes.default);
  return(
    <App/>
  )
}
ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
