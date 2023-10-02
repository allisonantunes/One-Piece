import { Container } from './styles'
import { Nav } from "../../components/Nav"


export function Luffy() {
    return(
        <Container>
            <img className="imagem" src="./src/imagens/personagem-monkey-d-luffy.png" alt="Personagem Monkey D Luffyr" />
            <div className="conteudo">
                <i className="logo"></i>
                <h2 className="nome-personagem">Monkey D Luffyr</h2>
                <p className="descricao">
                    Luffy do Chapéu de Palha", como ficou conhecido, é o protagonista do anime, 
                    e o fundador e capitão da tripulação Piratas do Chapéu de Palha. Desde muito 
                    jovem, tem como seu maior sonho um dia encontrar o lendário tesouro de Gol D. Roger, 
                    para se tornar o novo Rei dos Piratas.
                </p>
            </div>
            <Nav />
        </Container>
    )
}