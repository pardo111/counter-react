import { useState } from "react";
import Btn from './btn';

const Counter = () => {

    const [cantidad, setCantidad] = useState(0);
    const [mensaje, setMensaje] = useState("");



    const unoMas = () => {
         setCantidad(cantidad + 1);
        setMensaje("");

    };

    const reiniciar = () => {
        setCantidad(0);
        if(cantidad !=0 ) { setMensaje("se reinicio el contador...!!!");}
       
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
                    <Btn color="#741aff" colorHover="#9352FF" mensaje="sumar uno" metodo={unoMas}/>
                    <Btn color="#7dcd02" colorHover="#C8FF5C" mensaje="restar uno " metodo={unoMenos}/>
                    <Btn color="#ff9422" colorHover="#FFB765" mensaje="reiniciar" metodo={reiniciar}/>
                    </div>
            </div>
        </div>
    );
};

export default Counter; 