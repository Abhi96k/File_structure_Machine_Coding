import { useState } from "react";
import { explorer as initialData } from "./data/floderData";
import { Floder } from "./componets/Floder";
import useTraversTree from "./hooks/use-traverse-tree";

export default function App() {
  const [exploreData, setExploreData] = useState(initialData);
  const { insertNode } = useTraversTree();

  const handleAddNode = (folderId, name, isFolder) => {
    const newTree = insertNode(exploreData, folderId, name, isFolder);
    setExploreData({ ...newTree });
  };

  return (
    <div className="App">
      <Floder explorer={exploreData} onAdd={handleAddNode} />
    </div>
  );
}
