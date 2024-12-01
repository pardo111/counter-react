import { useState } from "react";

const Counter = () => {

    const [cantidad, setCantidad] = useState(0);
    const [mensaje, setMensaje] = useState("");



    const unoMas = () => {
         setCantidad(cantidad + 1);
        setMensaje("");

    };

    const reiniciar = () => {
        setCantidad(0);
        setMensaje("se reinicio el contador...!!!");
    };

    const unoMenos = () => {
        setCantidad(cantidad>0?cantidad - 1:cantidad);
        setMensaje("");
    };


    return (
        <div className=" bg-[#264d4f] text-white p-0 ">
            <div className="w-screen h-screen  flex flex-col items-center justify-center   p-0">
                <div className="h-1/2 flex flex-col items-center justify-center w-full p-0">
                                    {/* mensajes */}
                    <h1 className="text-9xl py-12">{cantidad}</h1>
                    <h2 className="text-4xl py-12">{mensaje}</h2>
                </div>
                <div className=" flex flex-col md:flex-row flex-wrap">
                                        {/* botones */}

                    <button onClick={unoMas} className="bg-[#741aff] px-0 sm:py-4 sm:px-6 rounded-md mx-6 text-2xl font-bold hover:scale-105 transition duration-300 border border-2 border-solid border-black hover:bg-[#9352FF]">sumar uno </button>
                    <button onClick={unoMenos} className="bg-[#7dcd02] px-0 sm:py-4 sm:px-6 rounded-md mx-6 text-2xl font-bold hover:scale-105 transition duration-300 border border-2 border-solid border-black hover:bg-[#C8FF5C]">restar uno </button>
                    <button onClick={reiniciar} className="bg-[#ff9422] px-0 sm:py-4 sm:px-6 rounded-md mx-6 text-2xl font-bold hover:scale-105 transition duration-300 border border-2 border-solid border-black hover:bg-[#FFB765]">reiniciar </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;