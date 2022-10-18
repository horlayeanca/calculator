import { useState } from "react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operator = ["/", "*", "+", "-", "."];
  const updateCalc = (value) => {
    if (
      (operator.includes(value) && calc === "") ||
      (operator.includes(value) && operator.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!operator.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          className="text-2xl text-black p-4 cursor-pointer border-none appearance-none rounded-full outline-none hover:bg-slate-600 duration-500 hover:text-white flex-1"
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const solution = () => {
    setCalc(eval(calc).toString());
  };

  const deletePrevious = () => {
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className="bg-white">
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md bg-stone-300 rounded-lg overflow-hidden shadow-xl mx-3">
          <div className="p-4 text-right bg-white text-black text-3xl font-light rounded-lg border-8 border-stone-300">
            {calc || "0"}
          </div>
          <div className="grid grid-flow-col gap-2 mx-2 my-2">
            <button
              onClick={() => updateCalc("/")}
              className="text-2xl text-black p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400 hover:text-white"
            >
              /
            </button>
            <button
              onClick={() => updateCalc("*")}
              className="text-2xl text-black p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400 hover:text-white"
            >
              *
            </button>
            <button
              onClick={() => updateCalc("+")}
              className="text-2xl text-black p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400 hover:text-white"
            >
              +
            </button>
            <button
              onClick={() => updateCalc("-")}
              className="text-2xl text-black p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400 hover:text-white"
            >
              -
            </button>

            <button
              onClick={deletePrevious}
              className="text-2xl text-black p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400 hover:text-white"
            >
              DEL
            </button>
          </div>
          <div className="text-2xl text-white cursor-pointer border-none appearance-none outline-none grid grid-cols-3 gap-3 mx-2 my-2">
            {createDigits()}
            <button
              onClick={() => updateCalc("0")}
              className="text-2xl text-black p-4 rounded-full cursor-pointer border-none appearance-none outline-none hover:bg-slate-600 duration-500 hover:text-white"
            >
              0
            </button>
            <button
              onClick={() => updateCalc(".")}
              className="text-2xl text-black p-4 rounded-full cursor-pointer border-none appearance-none outline-none hover:bg-slate-600 duration-500 hover:text-white"
            >
              .
            </button>
            <button
              onClick={solution}
              className="text-2xl text-black p-4 rounded-full cursor-pointer border-none appearance-none outline-none hover:bg-slate-600 duration-500 hover:text-white"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
