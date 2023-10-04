import styled from 'styled-components';

export const Container = styled.div`
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

    .botao {
        transform: ${({ isActive }) => isActive ? 'scale(1.2)' : 'scale(1)'};
        box-shadow: ${({ isActive }) => isActive ? '0 0 10px #d9d9d9' : ''};
    }
`;