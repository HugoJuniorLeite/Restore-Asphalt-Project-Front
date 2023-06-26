
import { Container } from "../../pages/SignInPage/styled";
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
//import StyledLink from "../components/StyledLink"
import {useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"
import { useContext } from "react"
import { useState } from "react"
//import apiAuth from "../../services/apiAuth"
import apiMain from "../../services/apiNote";

export default function AdressNota({bairro}) {
    //  const [form, setForm] = useState({cep:""})
    //  const [isLoading, setIsLoading] = useState(false)
    //  const { setUser } = useContext(UserContext)
    //  const navigate = useNavigate()

     

    //  function handleForm(e) {
    //      setForm({ ...form, [e.target.name]: e.target.value })
    //  }

    //  function handleLogin(e) {
    //      e.preventDefault()
    //      setIsLoading(true)

    //      apiMain.createNote(form)
    //          .then(res => {
    //              const { cep } = res.data
    //              setIsLoading(false)
    //              console.log(res.data)
    //          })
    //          .catch(err => {
    //              setIsLoading(false)
    //              alert(err.response.data.error.message)
    //          })
    //  }

    return (
        <Container>
           <div> {bairro} </div>
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    name="cep"
                    placeholder="cep"
                    type="cep"
                    required
                    disabled={isLoading}
                    value={form.cep}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Criar nota"}
                </StyledButton>
            </StyledForm>
        </Container>
    )
}