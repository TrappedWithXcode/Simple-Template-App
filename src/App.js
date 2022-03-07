import './App.css';
import WButton from './components/welcomeButton.js';
import Windows from './components/windows.js';

var WelcomeTxt = "Welcome";

//variable for storing a heading
var Nadpis = "Nadpis";

//variables that store text in the pop ups
var Text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis qui distinctio eveniet minus nulla sed. Praesentium totam ducimus error eos commodi iusto nostrum voluptatum quod repellendus sint, modi eius!";
var Text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis qui distinctio eveniet minus nulla sed. Praesentium totam ducimus error eos commodi iusto nostrum voluptatum quod repellendus sint, modi eius!";
var Text3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis qui distinctio eveniet minus nulla sed. Praesentium totam ducimus error eos commodi iusto nostrum voluptatum quod repellendus sint, modi eius!";
var Text4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis qui distinctio eveniet minus nulla sed. Praesentium totam ducimus error eos commodi iusto nostrum voluptatum quod repellendus sint, modi eius!";

//variables storing path to image that will show up in one of the tiles
var img1path= null;
var img2path= null;
var img3path= null;
var img4path= "../placeholder-square.jpg";

function App() {
  return (
    <div className="App">
      <div className="curtains">
        <WButton text={WelcomeTxt}/>
      </div>
      <div className="mainContent">
        <h1>{Nadpis}</h1>
        <div className="center">
          <div className="windowsHolders">
         
            <Windows title="Nadpis" text={Text1} media={img1path}/>
            <Windows title="Nadpis" text={Text2} media={img2path}/>
            <Windows title="Nadpis" text={Text3} media={img3path}/>
            <Windows title="Nadpis" text={Text4} media={img4path}/>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
