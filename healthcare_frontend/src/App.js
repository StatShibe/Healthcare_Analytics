import Navigationbar from "./components/navigationbar"
import Dashboard from "./components/dashboard";
import './App.css';



function App() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          borderColor: "black"
        }]
  }
  
  return (
    <div className="App">
      <Navigationbar/>
      <Dashboard 
        chartData={data}
      />
    </div>
  );
}

export default App;
