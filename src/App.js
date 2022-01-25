import './css/index.css'
import Navbar from './Comp/Composants/Navbar';
import Display from './Comp/Display';
import Footer from './Comp/Composants/Footer';
import Matrix from './Comp/Composants/Matrix';

function App() {
  return (
    <div>
      <Navbar />
      <Matrix />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
