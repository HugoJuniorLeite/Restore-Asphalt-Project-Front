import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProgressProvider from "./contexts/ProgressContext.jsx"
import UserProvider from "./contexts/UserContext.jsx"
import SignInPage from "./pages/SignInPage/SignInPage.jsx"
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx"

function App() {

  return (
    
    <BrowserRouter>
          <ProgressProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
          </UserProvider>
          </ProgressProvider>
    </BrowserRouter>

)
}

export default App
