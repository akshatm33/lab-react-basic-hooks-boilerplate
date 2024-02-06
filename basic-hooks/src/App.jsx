import React, { useState, createContext } from "react";
import "./App.css";
import UseContext from "./components/UseContext";

export const ToggleTheme = createContext();

function App() {
  const colors = ["black",  "grey"];
  const [themeIndex, setThemeIndex] = useState(0);
  const [state, setState] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [contentMessage, setContentMessage] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % colors.length);
    setState(!state);
    setExpanded(false); 
  };

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleContent = () => {
    alert("Content Button Clicked");

    if (expanded) {
      setContentMessage("");
      setExpanded(false);
    } else {
      setContentMessage(
        `A large part of Spider-Man's personality is knowing the power he holds and the responsibility that comes with that power. However, this doesn't mean he has to be independent and bear the weight of the world on his shoulders. The message in Into the Spider-Verse is about relying on others, and the fact that even Spider-Man needs other people.`
      );
      setExpanded(true);
    }
  };

  return (
    <ToggleTheme.Provider value={state}>
      <div id="toggle" onClick={handleToggle}>
        <button>Toggle</button>
      </div>

      <div
        className={`content ${state ? "plain" : "blur"} ${expanded ? "expanded" : ""}`}
        id="change"
        style={{ backgroundColor: colors[themeIndex] }}
      >
        <UseContext handleLike={handleLike} />
        <div id="message">{contentMessage}</div>
        <button onClick={handleContent}>Content</button>
        <div id="number">{likeCount}</div>
        <button onClick={handleLike}>Like</button>
      </div>
    </ToggleTheme.Provider>
  );
}

export default App;