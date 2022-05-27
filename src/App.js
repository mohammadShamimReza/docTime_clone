import { Route, Routes } from "react-router";
import "./App.css";
import FAQS from "./pages/FAQs/FAQS";
import Doctorsfile from "./pages/Home/forDoctors/Doctorsfile";
import Home from "./pages/Home/Home";
import WorksOfDocTime from "./pages/Home/howDoctimeWork/WorksOfDocTimeFile";
import FormPage from "./pages/Login/FormPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Navigation from "./pages/shared/Navigation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="faqs" element={<FAQS />} />
          <Route path="howdoctime_works" element={<WorksOfDocTime />} />
          <Route path="qualified_Dotor" element={<Doctorsfile />} />
          <Route path="login" element={<Login />}>
            <Route path="formpage" element={<FormPage />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
