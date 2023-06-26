import { Container } from "../SignInPage/styled";
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"
import { useContext } from "react"
import { useState } from "react"
import apiNote from "../../services/apiNote";
import InfoNote from "../../components/InfoNote/InfoNote";

export default function HomePage() {
    const [form, setForm] = useState({ cep: "", number: "", qttDicth: "" })
    const [adress, setAdress] = useState([])
    const [numberForm, setNumberForm] = useState([])
    const [activity, setActivity] = useState([{}])
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    let data = []

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })

        if (!form.cep || !form.number || form.cep.length < 8) {
            setAdress({ cep: "", number: "" })
        }
    }
    function handleCep(e) {
        e.preventDefault()
        setIsLoading(true)

        for (let i = 0; i < form.qttDicth; i++) {
            data.push(
                {
                    ditchLength: "", ditchWidth: "", ditchDepth: "",
                    binderLength: "", binderWidth: "", binderDepth: "",
                    asphaltLayerLength: "", asphaltLayerWidth: "", asphaltLayerDepth: "",
                    millingLength: "", millingWidth: "", millingDepth: "",
                    clippingLength: "", clippingWidth: "", clippingDepth: ""
                }
            )
        }
        setNumberForm(data)

        apiNote.getCep(form.cep)
            .then(res => {
                setAdress(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.error.message)
            })
    }

    function handleActivity(e, index) {
        const { name, value } = e.target;
        const updatedActivity = [...activity];
        updatedActivity[index] = { ...updatedActivity[index], [name]: value };
        setActivity(updatedActivity);
    }

    function createNote(adress) {

        const logradouro = { cep: adress.cep, logradouro: adress.logradouro, numero: form.number, complemento: adress.complemento, bairro: adress.bairro, cidade: adress.localidade, estado: adress.uf }

        apiNote.createNote(logradouro, user.token)
            .then(res => {
                setIsLoading(false)
                navigate("/info")
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.error.message)
            })
    }

    return (
        <Container>

            <StyledForm onSubmit={handleCep}>
                <StyledInput
                    name="cep"
                    placeholder="digite o cep do endereço"
                    type="cep"
                    required
                    disabled={isLoading}
                    value={form.cep}
                    onChange={handleForm}
                />

                {form.cep.length >= 8 &&
                    <StyledInput
                        name="number"
                        placeholder="digite o numeral do endereço"
                        type="number"
                        required
                        disabled={isLoading}
                        value={form.number}
                        onChange={handleForm}
                    />
                }

                {form.number &&
                    <StyledInput
                        name="qttDicth"
                        placeholder="DIgite a quantidade de valas"
                        type="number"
                        required
                        disabled={isLoading}
                        value={form.qttDicth}
                        onChange={handleForm}
                    />
                }

                <StyledButton type="submit" disabled={!form.cep || !form.number || !form.qttDicth ? true : isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Pesquisar endereço"}
                </StyledButton>

            </StyledForm>

            {!adress.logradouro ?
                (<div></div>)
                :
                <>

                    {numberForm.map((f, index) => (
                        <InfoNote
                            handleActivity={(e) => handleActivity(e, index)}
                            activity={activity[index]}
                            index={index}
                            key={index}
                        />
                    ))}

                    <div>{adress.logradouro}, {form.number} - {adress.bairro}</div>
                    <div>{adress.localidade} - {adress.uf}, {adress.cep}</div>
                    <StyledButton onClick={() => createNote(adress)} disabled={isLoading}>
                        {isLoading ? (
                            <ThreeDots width={50} height={50} color="#FFFFFF" />
                        ) : "Criar nota"}
                    </StyledButton>
                </>
            }

        </Container>
    )
}