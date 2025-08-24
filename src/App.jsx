import GlobalStyle from "./GlobalStyles.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <Router>
        <GlobalStyle />  
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
