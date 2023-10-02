import { Container } from "./styles"
import { ButtonLink } from "../ButtonLink";

import tripulacaoLuffy  from '../../imagens/tripulacao-luffy.png'
import tripulacaoChopper  from '../../imagens/tripulacao-chopper.png'
import tripulacaoZoro  from '../../imagens/tripulacao-zoro.png'
import tripulacaoNami  from '../../imagens/tripulacao-nami.png'
import tripulacaoSanji  from '../../imagens/tripulacao-sanji.png'



export function Nav() {
    
    return(
        <Container>
            <ButtonLink to='/'
                style={({ isActive }) => {return {transform: isActive ? 'scale(1.2)' : 'scale(1)', boxshadow: isActive ? '0 0 10px #d9d9d9' : '' }}}
                title={<img src={tripulacaoChopper} /> }
            />

            <ButtonLink to='/zoro'
                style={({ isActive }) => {return {transform: isActive ? 'scale(1.2)' : 'scale(1)'}}}
                title={<img src={tripulacaoZoro} /> }
            />

            <ButtonLink to='/luffy'
                style={({ isActive }) => {return {transform: isActive ? 'scale(1.2)' : 'scale(1)'}}}
                title={<img src={tripulacaoLuffy} /> }
            />

            <ButtonLink to='/nami'
                style={({ isActive }) => {return {transform: isActive ? 'scale(1.2)' : 'scale(1)'}}}
                title={<img src={tripulacaoNami} /> }
            />

            <ButtonLink to='/sanji'
                style={({ isActive }) => {return {transform: isActive ? 'scale(1.2)' : 'scale(1)'}}}
                title={<img src={tripulacaoSanji} /> }
            />
            
        </Container>
    )
}