import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
    body{
        font-family: 'Comme', sans-serif;
        background: lightgreen;
        animation: main 2s;
    }
    @keyframes main {
        from{
            filter: blur(5px);
        transform: translateX(100%);
        }
        to{
            transform: translateX(0%);
        }
    }
`;
export default Global;