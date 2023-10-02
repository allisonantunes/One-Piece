import { Container } from './styles'
import { Nav } from "../../components/Nav"


export function Chopper() {
    return(
        <Container>
            <img className="imagem" src="./src/imagens/personagem-tony-chopper.png" alt="Personagem Tony Chopper" />
            <div className="conteudo">
                <i className="logo"></i>
                <h2 className="nome-personagem">Tony Chopper</h2>
                <p className="descricao">
                    Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar 
                    como humanos após comer a fruta Hito Hito no Mi. Chopper é um valioso 
                    membro da tripulação dos Piratas do Chapéu de Palha, atuando como médico da tripulação.
                </p>
            </div>
            <Nav />
        </Container>
    )
}