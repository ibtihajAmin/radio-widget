import { useState } from "react";
import "./App.css";
import Radio from "./Components/Radio";

function App() {
  const channelLists = [
    { id: 1, name: "Putin FM", frequency: "90.5" },
    { id: 2, name: "Dribble FM", frequency: "101.2" },
    { id: 3, name: "Doge FM", frequency: "99.4" },
    { id: 4, name: "Ballads FM", frequency: "87.1" },
    { id: 5, name: "Maximum FM", frequency: "142.4" },
  ];

  const [channels, setChannels] = useState(channelLists);
  return (
    <div className="App">
      <Radio channels={channels}></Radio>
    </div>
  );
}

export default App;
