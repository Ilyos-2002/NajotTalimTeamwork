import { Route, Routes } from "react-router";
import {Contents} from './Components/Contents/Contents'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Contents />} />
    </Routes>
  );
}

export default App;
