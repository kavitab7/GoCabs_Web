import { Route, Routes } from "react-router-dom";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import { CaptainProtectWrapper } from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Start from "./pages/Start";

function App() {
  return (
    <div >
      <Routes >
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />

        <Route path="/user/logout" element={<UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>} />

        <Route path="'/captain/logout" element={<CaptainProtectWrapper>
          <CaptainLogout />
        </CaptainProtectWrapper>} />
      </Routes>
    </div>
  );
}

export default App;
