// index.js dentro da pasta src -> components -> Input

import React from 'react';
import { InputContainer } from './styles';

const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;
  