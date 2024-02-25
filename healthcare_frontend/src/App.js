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
        }]
  }

  const options = {
    transitions : {
      show : {
        animations : {
          x : {
            from : 0
          },
          y : {
            from : 0
          }
          
        }
      },
      hide: {
        animations: {
          x: {
            to: 0
          },
          y: {
            to: 0
          }
        }
      }
    }
  }
  
  return (
    <div className="App">
      <Navigationbar/>
      <Dashboard 
        chartData={data}
        showOptions = {options}
      />
    </div>
  );
}

export default App;
