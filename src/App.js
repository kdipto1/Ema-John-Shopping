import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';


const student1 = { name: "rafique", marks: 79, result: "A+" };
function App() {
  console.log(student1.mark + 1);
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
