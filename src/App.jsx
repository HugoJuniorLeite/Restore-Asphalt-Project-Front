import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProgressProvider from "./contexts/ProgressContext.jsx"
import UserProvider from "./contexts/UserContext.jsx"
import SignInPage from "./pages/SignInPage/SignInPage.jsx"
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx"
import HomePage from "./pages/MainPage/HomePage.jsx"
import InfoNoteProvider from "./contexts/InfoNoteContext.jsx"

function App() {

  return (

    <BrowserRouter>
      <ProgressProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </UserProvider>
      </ProgressProvider>

    </BrowserRouter>

  )
}

export default App
