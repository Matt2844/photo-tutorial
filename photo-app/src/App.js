import './App.css';
import ImageGrid from './components/ImageGrid';
import Title from './components/Title'
import UploadForm from './components/UploadForm';
import NavBar from './components/NavBar';

function App () {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
