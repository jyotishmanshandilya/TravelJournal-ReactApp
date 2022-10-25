import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Card from './components/Card';
import data from './components/data';
function App() {

  const info = data.map((item) => {
    return (
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  });

  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <div className='card--list'>
        {info}
      </div>
    </div>
  );
}

export default App;
