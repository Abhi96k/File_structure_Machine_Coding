import { useState } from "react";
import "./styles.css";
import { explorer } from "./data/floderData.js";
import { Floder } from "./componets/Floder.jsx";

export default function App() {
  const [exploreData] = useState(explorer);

  return (
    <div className="app">
      <Floder explorer={exploreData} />
    </div>
  );
}
