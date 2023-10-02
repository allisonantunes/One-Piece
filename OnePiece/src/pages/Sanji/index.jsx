import { Container } from './styles'
import { Nav } from "../../components/Nav"


export function Sanji() {
    return(
        <Container>
            <img className="imagem" src="./src/imagens/personagem-sanji.png" alt="Personagem Sanji" />
            <div className="conteudo">
                <i className="logo"></i>
                <h2 className="nome-personagem">Sanji</h2>
                <p className="descricao">
                    Também conhecido como "Perna Negra" Sanji, este pirata foi o quinto a integrar 
                    a tripulação de Luffy. Suas ações como pirata lhe renderam a terceira maior 
                    recompensa entre os membros do Chapéu de Palha, além de atuar como cozinheiro 
                    oficial do grupo.
                </p>
            </div>
            <Nav />
        </Container>
    )
}