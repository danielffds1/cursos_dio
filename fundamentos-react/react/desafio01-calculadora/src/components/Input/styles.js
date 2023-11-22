// styled.js dentro da pasta src -> components -> Input
import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    font-family: 'Roboto', Helvetica, sans-serif;

    input {
        width: 100%;
        height: 75px;
        border: none;
        background-color: #AAAAFF;
        font-size: 24px;
        font-family: 'Roboto', Helvetica, sans-serif;
        padding-right: 20px;
        color: #FFFFFF;
        float: right;
        text-align: right;
    }
`
