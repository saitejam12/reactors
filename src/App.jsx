import { useState } from "react";

import "./App.css";
import PostList from "./Components/PostList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="reactors">
      <PostList />
    </div>
  );
}

export default App;
