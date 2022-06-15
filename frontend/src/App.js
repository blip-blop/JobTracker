import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import NavB from "./Components/NavB";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import FindJobs from "./Pages/FindJobs";
import PostJobs from "./Pages/PostJobs";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Reviews from "./Pages/Reviews";
import AdminPanel from "./Pages/AdminPanel";
import JobOffer from "./Pages/JobOffer";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavB />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/post-jobs" element={<PostJobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/job-offer" element={<JobOffer />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
