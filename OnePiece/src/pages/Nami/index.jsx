import { Container } from './styles'
import { Nav } from "../../components/Nav"


export function Nami() {
    return(
        <Container>
             <img className="imagem" src="./src/imagens/personagem-nami.png" alt="Personagem Nami" />
            <div className="conteudo">
                <i className="logo"></i>
                <h2 className="nome-personagem">Nami</h2>
                <p className="descricao">
                    Uma órfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha. 
                    Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão
                     por desenhar mapas, sonhando em um dia fazer o mapa de todo o mundo.
                </p>
            </div>
            <Nav />
        </Container>
    )
}