import { useState } from "react";

export function Floder({ explorer }) {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} style={{ cursor: "pointer" }}>
          <span style={{ color: "goldenrod", fontWeight: "bold" }}>
            {expand ? "📂" : "📁"} {explorer.name}
          </span>
        </div>
        <div style={{ paddingLeft: 20, display: expand ? "block" : "none" }}>
          {explorer.items.map((exp) => (
            <Floder key={exp.id} explorer={exp} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>📄 {explorer.name}</span>
      </div>
    );
  }
}
