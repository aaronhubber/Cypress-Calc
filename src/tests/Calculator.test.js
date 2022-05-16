import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it("should add numbers together to change total", () =>{
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const add = container.getByTestId("operator-add");
    const equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual("5");
  })

  it("should subtract numbers together to change running total", () =>{
    const button2 = container.getByTestId("number2")
    const button4 = container.getByTestId('number4');
    const subtract = container.getByTestId("operator-subtract");
    const equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(subtract);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual("2");
    })

  it("should multiply numbers together to change running total", () =>{
  const button2 = container.getByTestId("number2")
  const button4 = container.getByTestId('number4');
  const multiply = container.getByTestId("operator-multiply");
  const equals = container.getByTestId("operator-equals");
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button2);
  fireEvent.click(multiply);
  fireEvent.click(button4);
  fireEvent.click(equals);
  expect(runningTotal.textContent).toEqual("8");
  })

  it("should divide a number by another number to change running total", () =>{
    const button9 = container.getByTestId("number9")
    const button3 = container.getByTestId('number3');
    const divide = container.getByTestId("operator-divide");
    const equals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button9);
    fireEvent.click(divide);
    fireEvent.click(button3);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual("3");
    })

    it("should show that multiple button clicks form a new running total", () =>{
      const button9 = container.getByTestId("number9")
      const button3 = container.getByTestId('number3');
      const runningTotal = container.getByTestId('running-total');
      fireEvent.click(button9);
      fireEvent.click(button3);
      expect(runningTotal.textContent).toEqual("93");
      })

    it("should divide a number by another number to change running total", () =>{
      const button9 = container.getByTestId("number9")
      const add = container.getByTestId("operator-add");
      const button3 = container.getByTestId('number3');
      const divide = container.getByTestId("operator-divide");
      const button2 = container.getByTestId("number2")
      const equals = container.getByTestId("operator-equals");
      const runningTotal = container.getByTestId('running-total');
      fireEvent.click(button9);
      fireEvent.click(add);
      fireEvent.click(button3);
      fireEvent.click(divide);
      fireEvent.click(button2);
      fireEvent.click(equals);
      expect(runningTotal.textContent).toEqual("6");
      })

      it("should clear the running total", () =>{
        const button9 = container.getByTestId("number9")
        const button3 = container.getByTestId('number3');
        const button1 = container.getByTestId('number1');
        const equals = container.getByTestId("operator-equals");
        const add = container.getByTestId("operator-add");
        const runningTotal = container.getByTestId('running-total');
        const clear = container.getByTestId('clear');
        fireEvent.click(button9);
        fireEvent.click(add)
        fireEvent.click(button3);
        fireEvent.click(clear)
        fireEvent.click(add)
        fireEvent.click(button1)
        fireEvent.click(equals)
        expect(runningTotal.textContent).toEqual("10");
        })
  

})

