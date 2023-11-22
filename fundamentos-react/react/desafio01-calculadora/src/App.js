// App.js dentro da pasta src
import React from 'react';
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '' ? '' : prev }${num}`);
  }

  //Função para limpar o console
  const handleOnClear = () => {
    setCurrentNumber('');
    setFirstNumber('');
    setOperation('');
  }

  //Função para somar
  const handleSumNumbers = () => {
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  //Função para subtrair para subtrair
  const handleMinusNumbers = () => {
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-');
    }else{
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }

  //Função para multiplicar
  const handleMultiply = () => {
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('*');
    }else{
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setOperation('');
    }
  }

   //Função para divisão
  const handleDivision = () => {
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/');
    }else{
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  }

    //Função para igual
  const handleEqual = () => {
    if(firstNumber !== '' && operation !== '' && !currentNumber !== '') {
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiply();
          break;
        case '/':
          handleDivision();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="*" onClick={handleMultiply}/>
            <Button label="/" onClick={handleDivision}/>
            <Button label="C" onClick={handleOnClear}/>
          </Row>
        <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={handleMinusNumbers}/> 
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>

          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handleEqual}/>
          </Row>
          
      </Content>
    </Container>
  );
}

export default App;
