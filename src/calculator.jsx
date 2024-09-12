import React from 'react';
import Button from './component/button';

const Calculator = () => {
    const [input,setInput] = React.useState('');
    
    const handleCalCulation = (value)=>{
        if(value === "C"){
            setInput('');
        }
        else if(value === "AC"){
           setInput(input.slice(0,-1));
        }
        else if(value === "="){
          let calculate = eval(input);
          let newCalculate = calculate.toString();
          setInput(newCalculate);
        }
        else{
            setInput(input + value);
        }
    }
  return (
    <div className='flex flex-col items-center bg-stone-800 h-screen text-white'>
            <h1 className='text-4xl font-bold my-8'>Calculator</h1>
            <div className='flex flex-col justify-center w-1/3 p-4  bg-gray-900 rounded-lg shadow-lg'>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='w-full h-24 p-2 text-xl bg-gray-800 text-white rounded-lg mb-4 outline-none font-bold'
                    placeholder='0'
                />
                <div className='grid grid-cols-4 gap-2 w-full'>
                    <Button text={7} onClick={() => handleCalCulation('7')} />
                    <Button text={8} onClick={() => handleCalCulation('8')} />
                    <Button text={9} onClick={() => handleCalCulation('9')} />
                    <Button text={'/'} onClick={() => handleCalCulation('/')} className={`bg-orange-500 hover:bg-orange-600`} />
                    <Button text={4} onClick={() => handleCalCulation('4')} />
                    <Button text={5} onClick={() => handleCalCulation('5')} />
                    <Button text={6} onClick={() => handleCalCulation('6')} />
                    <Button text={'*'} onClick={() => handleCalCulation('*')} className={`bg-orange-500 hover:bg-orange-600 font-bold`} />
                    <Button text={1} onClick={() => handleCalCulation('1')} />
                    <Button text={2} onClick={() => handleCalCulation('2')} />
                    <Button text={3} onClick={() => handleCalCulation('3')} />
                    <Button text={'-'} onClick={() => handleCalCulation('-')} className={`bg-orange-500 hover:bg-orange-600`} />
                    <Button text={0} onClick={() => handleCalCulation('0')} />
                    <Button text={'C'} onClick={() => handleCalCulation('C')} />
                    <Button text={'AC'} onClick={() => handleCalCulation('AC')} />
                    <Button text={'+'} onClick={() => handleCalCulation('+')} className={`bg-orange-500 hover:bg-orange-600`} />
                    <Button text={'='} onClick={() => handleCalCulation('=')} className={`bg-orange-500 hover:bg-orange-600 font-extrabold col-span-4`} />
                </div>
            </div>
        </div>
  );
};

export default Calculator;
