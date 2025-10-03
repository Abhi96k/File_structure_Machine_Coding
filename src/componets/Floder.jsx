import { useState } from "react";

export function Floder({ explorer, onAdd }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: true,
    });
    setExpand(true);
  };

  const handleNewFile = (e) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: false,
    });
    setExpand(true);
  };

  const onAddItem = (e) => {
    if (e.key === "Enter" && e.target.value) {
      onAdd(explorer.id, e.target.value, showInput.isFolder); // 🔥 update tree
      setShowInput({ ...showInput, visible: false });
      e.target.value = "";
    }
  };

  if (explorer.isFolder) {
    return (
      <div className="folder-container">
        <div className="folder-header" onClick={() => setExpand(!expand)}>
          <span className="folder-icon">
            {expand ? "📂" : "📁"} {explorer.name}
          </span>
          <div className="action-buttons">
            <button onClick={handleNewFolder}>Folder+</button>
            <button onClick={handleNewFile}>File+</button>
          </div>
        </div>

        <div className={`folder-children ${expand ? "expanded" : "collapsed"}`}>
          {showInput.visible && (
            <div className="input-wrapper">
              <span>{showInput.isFolder ? "📂" : "📄"}</span>
              <input
                autoFocus
                type="text"
                placeholder={`New ${showInput.isFolder ? "Folder" : "File"}`}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={onAddItem}
              />
            </div>
          )}

          {explorer.items.map((exp) => (
            <Floder key={exp.id} explorer={exp} onAdd={onAdd} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file-item">
        <span>📄 {explorer.name}</span>
      </div>
    );
  }
}
