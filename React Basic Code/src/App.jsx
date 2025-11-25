import './App.css'
import Title from './Title.jsx';
import ProductTab from './ProductTab.jsx'
import MsgBox from './MsgBox.jsx';

function Description(){
  return <p>This is a description paragraph.</p>;
}

function App() {
    return (
      <>
      <MsgBox userName = "Sujal" textColor="Yellow"/>
      <MsgBox userName = "SAK076" textColor="LightBlue"/>
      <ProductTab />
      </>
      
    );    
}

export default App;
