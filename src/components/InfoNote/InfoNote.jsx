import { useState } from "react"
import { Container } from "../../pages/SignInPage/styled"
import StyledForm from "../StyledForm"
import StyledInput from "../StyledInput"

export default function InfoNote({handleActivity}, activity, index) {

    const [ditch, setDitch] = useState(false)
    const [binder, setBinder] = useState(false)
    const [asphaltLayer, setAsphaltLayer] = useState(false)
    const [milling, setMilling] = useState(false)
    const [clipping, setClipping] = useState(false)

        return (

            <Container>                
                <StyledForm>

                    <h2> medidas da aberuta de vala</h2>

                    <StyledInput
                        placeholder="Digite o comprimento da vala"
                        id="ditchLength"
                        name="ditchLength"
                        type="number"
                        value={activity.ditchLength}
                        required    
                        onChange={(e) => handleActivity(e, index)}
                    ></StyledInput>

                    <StyledInput
                        placeholder="Digite a largura da vala"
                        name="ditchWidth"
                        type="number"
                        value={activity.ditchWidth}
                        required
                        onChange={(e) => handleActivity(e, index)}
                    ></StyledInput>

                    <StyledInput
                        placeholder="Digite a profundidade da vala"
                        name="ditchDepth"
                        type="number"
                        value={activity.ditchDepth}
                        required
                        onChange={handleActivity}
                    ></StyledInput>

                    <h2> medidas do recorte</h2>

                    <StyledInput
                        placeholder="Digite o comprimento do recorte"
                        id="clippingLength"
                        name="clippingLength"
                        type="number"
                        value={activity.clippingLength}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <StyledInput
                        placeholder="Digite a largura do recorte"
                        name="clippingWidth"
                        type="number"
                        value={activity.clippingWidth}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <StyledInput
                        placeholder="Digite a profundidade do recorte"
                        name="clippingDepth"
                        type="number"
                        value={activity.clippingDepth}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <h2> medidas do binder</h2>
                    
                    <StyledInput
                        placeholder="Digite o comprimento do binder"
                        id="binderLength"
                        name="binderLength"
                        type="number"
                        value={activity.binderLength}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <StyledInput
                        placeholder="Digite a largura do binder"
                        name="binderWidth"
                        type="number"
                        value={activity.binderWidth}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <StyledInput
                        placeholder="Digite a profundidade do binder"
                        name="binderDepth"
                        type="number"
                        value={activity.binderDepth}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <h2> medidas da fresa</h2>
                    
                    <StyledInput
                        placeholder="Digite o comprimento da fresa"
                        id="millingLength"
                        name="millingLength"
                        type="number"
                        value={activity.millingLength}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <StyledInput
                        placeholder="Digite a largura da fresa"
                        name="millingWidth"
                        type="number"
                        value={activity.millingWidth}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <StyledInput
                        placeholder="Digite a profundidade da fresa"
                        name="millingDepth"
                        type="number"
                        value={activity.millingDepth}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <h2> medidas da capa</h2>
                    
                    <StyledInput
                        placeholder="Digite o comprimento da capa"
                        id="asphaltLayerLength"
                        name="asphaltLayerLength"
                        type="number"
                        value={activity.asphaltLayerLength}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <StyledInput
                        placeholder="Digite a largura da capa"
                        name="asphaltLayerWidth"
                        type="number"
                        value={activity.asphaltLayerWidth}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                    
                    <StyledInput
                        placeholder="Digite a profundidade da capa"
                        name="asphaltLayerDepth"
                        type="number"
                        value={activity.asphaltLayerDepth}
                        required
                        onChange={handleActivity}
                    ></StyledInput>
                </StyledForm>

                <button>proximo</button>

            </Container >

        )
    }