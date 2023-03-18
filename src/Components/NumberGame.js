import React, { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import { Transition } from '@headlessui/react';
import { BeatLoader } from 'react-spinners';

function NumberGame() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState(0);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleGuessChange(event) {
    setGuess(event.target.value);
  }

  function handleGuessSubmit(event) {
    event.preventDefault();
    const guessInt = parseInt(guess, 10);
    setIsLoading(true);
    setTimeout(() => {
      if (guessInt === number) {
        setMessage('You win!');
      } 
      else if(guessInt >100 || guessInt<1){
        setMessage('The Number is Always beteween 1 and 100 ');
      }
      else if (guessInt < number) {
        setMessage('Try again! Your guess was too low.');
      }
     else {
        setMessage('Try again! Your guess was too high.');
      }
      setGuess('');
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg px-6 py-4">
        <h1 className="text-4xl font-bold mb-4">Guess the Number Game</h1>
        <p className="  mb-4">Guess a the hidden Number , the hidden Number is always between 1 and 100</p>
        <form onSubmit={handleGuessSubmit} className="flex flex-col items-center ">
        <input type="number" value={guess} onChange={handleGuessChange} className=" w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mr-4" />
        <button type="submit" className=" w-full mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            {isLoading ? (
              <BeatLoader size={10} color={'#ffffff'} />
            ) : (
              'Guess'
            )}
          </button>
        </form>
        <Transition
          show={message !== ''}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div ref={ref} className="mt-4 flex items-center">
              {message === 'You win!' ? (
                <AiOutlineCheckCircle className="text-green-500 text-3xl mr-2" />
              ) : (
                <FiAlertCircle className="text-red-500 text-3xl mr-2" />
              )}
              <p className="text-xl">{message}</p>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}

export default NumberGame;
