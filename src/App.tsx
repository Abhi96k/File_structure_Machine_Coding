import { useState } from "react";
import "./styles.css";
import { explorer } from "./data/floderData";

import { Floder } from "./componets/Floder";

export default function App() {
  const [exploreData, setExploreData] = useState(explorer);
  return (
    <div className="App">
      <Floder explorer={exploreData} />
    </div>
  );
}
