import styled from "styled-components";
import imagemLogo from '../../imagens/one-piece-logo.png'

export const Container = styled.div`
    // display: none;
    height: 100vh;

.imagem {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.conteudo {
    position: absolute;
    top: 0;
    left: 120px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    max-width: 380px;
    z-index: 1;
}
.nome-personagem {
    color: #ffffff;
    font-size: 48px;
    font-family: 'Secular One', sans-serif;
    font-weight: 400;
    margin-bottom: 20px;
}
.descricao {
    color: #ffffff;
    font-family: 'Rubik', sans-serif;
    line-height: 24px;
}
.logo{
    background-image: url(${imagemLogo});
    background-size: cover;
    height: 100px;
    width: 230px;
    margin-bottom: 35px;
}
`