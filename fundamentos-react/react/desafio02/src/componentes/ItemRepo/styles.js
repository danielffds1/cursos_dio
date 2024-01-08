//styles.js dentro da pasta src/componentes/ItemRepo

import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;

    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a{
        font-size: 20px;
        text-decoration: none;
        color: #FAFAFA60;
        &:hover {
            color: #FAFAFA;  // Estilos para o estado de hover
        }
    }

    a.remover{
        color: #FF0000;
        
        &:hover {
            color: #FAFAFA;  // Estilos para o estado de hover
        }

    }

    hr{
        color: #FAFAFA60;
        margin: 20px 0;
    }
`