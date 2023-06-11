import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import apiAuth from "../../services/apiAuth"
//import { Container } from "./styled"

export default function SignUpPage() {
    const [form, setForm] = useState({ email: "", password: "", userType: ""})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSignUp(e) {
        e.preventDefault()
        setIsLoading(true)

      
     await apiAuth.signUp(form)
        .then(res => {
            setIsLoading(false)
            navigate("/")
        })
        .catch(err => {
            setIsLoading(false)
            alert(err.response.data.error.message)
        })
    }

    return (
        <Container>
            <StyledForm onSubmit={handleSignUp}>
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
                <StyledInput
                    name="userType"
                    placeholder="tipo de usuário"
                    type="text"
                    required
                    disabled={isLoading}
                    value={form.userType}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Cadastrar"}
                </StyledButton>
            </StyledForm>

            <StyledLink to="/">
                Já tem uma conta? Faça login!
            </StyledLink>
        </Container>
    )
}