import styled from 'styled-components';

export const Container = styled.ul`
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
`;