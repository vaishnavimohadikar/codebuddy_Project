import './App.css';
import { Registration } from './component/Registration';

function App() {
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

  return (
    <div className="App">
    <br/>
    <br/>
    <div style={{marginBottom:'20px', fontSize:'24px', fontWeight:'bold', color:'#1d98d1 '}}>Multi step form using React</div>
    <Registration/>
    </div>
  );
}

export default App;
