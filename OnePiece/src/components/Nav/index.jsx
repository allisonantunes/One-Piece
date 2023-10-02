import { Container } from "./styles"
import { AiOutlineHome } from 'react-icons/ai'
import { ButtonLink } from "../ButtonLink";


export function Nav() {
    
    return(
        <Container>
            <ButtonLink to='/'
                style={({ isActive }) => {return {color: isActive ? "#FF5C00" : '#7D7373',}}}
            title={<AiOutlineHome />}
            />
        </Container>
    )
}