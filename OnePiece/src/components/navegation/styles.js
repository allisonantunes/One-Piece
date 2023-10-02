import styled from 'styled-components'

export const Container = styled.section`
    background-color: red;

    .ul {
    position: fixed;
    top: 0;
    right: 0;
    
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 180px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background-color: rgba(0, 0, 0, .3);
}
.botao {
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 50%;
}
.botao img {
    border-radius: 50%;
}
`