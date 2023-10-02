import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: #000000;
    overflow: hidden;
}
main::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 80vw;
    
    background: linear-gradient(-233deg, #000 40%, rgba(0, 0, 0, 0) 65%) no-repeat;
}
`
/* export const Container = styled.main`
 content: "";
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 80vw;
    
    background: linear-gradient(-233deg, #000 40%, rgba(0, 0, 0, 0) 65%) no-repeat;
` */
