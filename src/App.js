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
          className="text-xl text-white p-4 cursor-pointer border-none appearance-none rounded-full outline-none hover:bg-slate-600 duration-500 flex-1"
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
    <div className="bg-emerald-100">
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md bg-gradient-to-b from-lime-500 to-cyan-500 rounded-lg overflow-hidden shadow-xl">
          <div className="p-4 text-right to-emerald-700 text-black text-3xl font-light rounded-lg border-8 border-slate-500">
            {calc || "0"}
          </div>
          <div className="grid grid-flow-col">
            <button
              onClick={() => updateCalc("/")}
              className="text-xl text-white p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400"
            >
              /
            </button>
            <button
              onClick={() => updateCalc("*")}
              className="text-xl text-white p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400"
            >
              *
            </button>
            <button
              onClick={() => updateCalc("+")}
              className="text-xl text-white p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400"
            >
              +
            </button>
            <button
              onClick={() => updateCalc("-")}
              className="text-xl text-white p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400"
            >
              -
            </button>

            <button
              onClick={deletePrevious}
              className="text-xl text-white p-4 cursor-pointer border-none rounded-full appearance-none outline-none duration-500 hover:bg-slate-400"
            >
              DEL
            </button>
          </div>
          <div className="text-xl text-white cursor-pointer border-none appearance-none outline-none grid grid-cols-3">
            {createDigits()}
            <button
              onClick={() => updateCalc("0")}
              className="text-xl text-white p-4 cursor-pointer border-none appearance-none outline-none hover:bg-slate-600 duration-500"
            >
              0
            </button>
            <button
              onClick={() => updateCalc(".")}
              className="text-xl text-white p-4 cursor-pointer border-none appearance-none outline-none hover:bg-slate-600 duration-500"
            >
              .
            </button>
            <button
              onClick={solution}
              className="text-xl text-white p-4 cursor-pointer border-none appearance-none outline-none hover:bg-slate-600 duration-500"
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
