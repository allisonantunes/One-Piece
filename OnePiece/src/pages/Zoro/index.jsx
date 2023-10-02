import { Container } from './styles'
import { Nav } from "../../components/Nav"


export function Zoro() {
    return(
        <Container>
            <img className="imagem" src="./src/imagens/personagem-roronoa-zoro.png" alt="Personagem Roronoa Zoro" />
            <div className="conteudo">
                <i className="logo"></i>
                <h2 className="nome-personagem">Roronoa Zoro</h2>
                <p className="descricao">
                    Primeiro pirata (segundo membro se contarmos com Luffy) a se juntar à tripulação 
                    de Piratas do Chapéu de Palha, Zoro aceitou o convite de Luffy após o capitão 
                    salvar sua vida.
                </p>
            </div>
            <Nav />
        </Container>
    )
}