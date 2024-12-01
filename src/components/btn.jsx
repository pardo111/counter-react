const Btn =(props)=>{

    const color = "bg-["+props.color+"] px-0 sm:py-4 sm:px-6 rounded-md mx-6 text-2xl font-bold hover:scale-105 transition duration-300 border border-2 border-solid border-black hover:bg-["+props.colorHover+"]"
    return (    
    <button onClick={props.metodo} className={color}>{props.mensaje} </button>
    );
    

};

export default Btn;