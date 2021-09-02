import DenseAppBar from './components/header';
import QuoteCard from './components/card';
import {createTheme, ThemeProvider } from '@material-ui/core/styles'; //using material uis themes

function App() {
  return (
    <div>
      <DenseAppBar/>
      <QuoteCard/>
    </div>
  );
}

export default App;
