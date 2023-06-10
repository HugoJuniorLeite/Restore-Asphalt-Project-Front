import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import {useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"
import { useContext } from "react"
import { useState } from "react"
import apiAuth from "../../services/apiAuth"



export default function SignInPage() {
     const [form, setForm] = useState({ email: "", password: "" })
     const [isLoading, setIsLoading] = useState(false)
     const { setUser } = useContext(UserContext)
     const navigate = useNavigate()

     function handleForm(e) {
         setForm({ ...form, [e.target.name]: e.target.value })
     }

     function handleLogin(e) {
         e.preventDefault()
         setIsLoading(true)

         apiAuth.signIn(form)
             .then(res => {
                 const { id, userType, token } = res.data
                 setIsLoading(false)
             setUser({ id, userType, token })
                  localStorage.setItem("token", token)
                 localStorage.setItem("user", JSON.stringify({ id, userType, token }))
                 navigate("/home")
             })
             .catch(err => {
                 setIsLoading(false)
                 alert(err.response.data.message)
             })
     }

    return (
        <Container>
           
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    name="email"
                    placeholder="email"
                    type="email"
                    required
                    disabled={isLoading}
                    value={form.email}
                    onChange={handleForm}
                />
                <StyledInput
                    name="password"
                    placeholder="senha"
                    type="password"
                    required
                    disabled={isLoading}
                    value={form.password}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Entrar"}
                </StyledButton>
            </StyledForm>

            <StyledLink to="/sign-up">
                Não tem uma conta? Cadastre-se!
            </StyledLink>
        </Container>
    )
}