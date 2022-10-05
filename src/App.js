// Imported components
import Loading from './Loading';
import Tours from './Tours';

// Extras
import { useEffect, useState } from 'react';
import './App.css';
const url = 'https://course-api.com/react-tours-project';


// Component function
function App() {
  // hooks
  const [loading, isLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // event handlers
  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  // fetch function
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setTours(toursData)
      isLoading(false)
    } catch (error) {
      isLoading(true)
      console.log(error)
    }
  }

  // useEffect
  useEffect(() => {
    fetchTours()
  }, []);

  // Returned html (loading)
  if(loading) {
    return <Loading />;
  }
  // Returned html (default)
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );

}

export default App;
