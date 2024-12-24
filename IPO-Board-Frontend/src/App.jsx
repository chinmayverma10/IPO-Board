import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeAdmin from "./components/WelcomeAdmin";
import DisplayTable from './components/DisplayTable';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/adminhubhai' element={<WelcomeAdmin />} />
        <Route path='/' element={<DisplayTable />} />
      </Routes>

    </Router>
  );
};

export default App;
