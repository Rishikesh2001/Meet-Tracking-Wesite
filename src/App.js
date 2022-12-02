import { Routes, Route } from 'react-router-dom'
import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpsPage from './pages/NewMeetUps';
import FavouriteMeetUpsPage from './pages/FavouriteMeetUps';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetUpsPage/>} />
        <Route path='/new-meetup' element={<NewMeetUpsPage />} />
        <Route path='/favorites' element={<FavouriteMeetUpsPage />} /> 
      </Routes>
    </Layout>
  );
}

export default App;
