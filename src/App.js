
import './App.css';
import Header from './components/Header';
import NoteEdit from './components/NoteEdit';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
     <Header/>
     <NoteEdit/>
     <NoteList/>
    </div>
  );
}

export default App;
