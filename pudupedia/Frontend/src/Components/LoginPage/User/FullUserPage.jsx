import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotifPage from "./UserPageRoutes/NotifTab";
import UserPage from "./UserPage";
import FavesPage from "./UserPageRoutes/FavesTab";
import HistoryPage from "./UserPageRoutes/HistoryTab";
import SettingsPage from "./UserPageRoutes/SettingsTab";
import HelpPage from "./UserPageRoutes/HelpTab";
import ProfilePage from "./UserPageRoutes/testPage";
import Header from "../../LandingPage/Header/header";
import NavBar from "../../LandingPage/Navbar/newNavbar";


export default function FullUserPage() {
  return (
    <BrowserRouter>
    <Header/>
    <Navbar/>
      <Routes>
          <Route path="/" element={<UserPage/>}/>
          <Route path="notifs" element={<NotifPage />} />
          <Route path="faves" element={<FavesPage />}/>
          <Route path="editfaves" element={<ProfilePage />}/>
          <Route path="history" element={<HistoryPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="help" element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FullUserPage />);