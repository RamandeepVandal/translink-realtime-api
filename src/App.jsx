import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./screen/Homepage";
import { StopEstimatePage } from "./screen/StopEstimatePage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/stop-estimate" element={<StopEstimatePage />} />
      </Routes>
    </Router>
  )
}

export default App
