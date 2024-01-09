//styles.js dentro da pasta src/pages/cadastro

import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
    width: 320px;
`

export const TitleCadastro = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;

    width: 320px;

`

export const SubTitleCadastro = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 15px;
    line-height: 25px;
`

export const InformationText = styled.p`
    font-style: normal;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;
`

export const FazerLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;

    span{
        color: #23DD7A;
    }
`
