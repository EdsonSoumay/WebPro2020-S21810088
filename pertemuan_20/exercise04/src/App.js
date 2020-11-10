import Header from './components/Header';
import './App.css';
import Hello from './components/Hello';
import Content from './components/Content';
import Nama from './components/Nama';
import Ttl from './components/Ttl';
import Alamat from './components/Alamat';


function App() {
  return( 
    <>
   
  <Header/>
  <Hello/>
  <Nama/>
  <Alamat/>
  <Ttl/>

  <Content/>
  
  
    </>
  );
} 
export default App;
// keterangan : jsx hanya memiliki 1 komponen yang dikembalikan
