import { useState } from "react";

const Increase = () => {
  const [Number, setNumber] = useState(0);
  // Number (first variable)==> Read Only value (you can't this variable value)
  // setNumber (second variable)==> write only value (if you want to change Number varibale's value use setNumber)

  function IncreaseNum() {
    setNumber(Number + 1);
  }

  function DecreaseNum() {
    if (Number > 0) return setNumber(Number - 1);
  }

  // self task:
  // create btn jump5 ==> incearse number with 5
  //            descrease5 ==> decrease number with 5
  // Reset btn

  return (
    <>
      <section>
        <h1 className="text-center text-3xl font-extrabold mt-10">
          Usestate : Change Data (Variable ne Define kara mate and value chagne
          karva mate)
        </h1>
        <p className="text-center mt-5 font-bold text-2xl">
          Increase And Decrease Number
        </p>
        <div className="w-72 h-72 text-9xl px-4 py-2 bg-[#222] rounded-xl text-[#555] font-bold flex items-center justify-center mx-auto mt-10">
          {Number}
        </div>

        <div className="flex items-center justify-center mt-5 gap-6">
          <button
            className="bg-orange-500 font-bold px-8 py-4 rounded-xl  active:scale-95 active:bg-orange-400"
            onClick={IncreaseNum}
          >
            Increase
          </button>
          <button
            className="bg-orange-500 font-bold px-8 py-4 rounded-xl  active:scale-95 active:bg-orange-400"
            onClick={DecreaseNum}
          >
            Decrease
          </button>
        </div>
      </section>
    </>
  );
};

export default Increase;
