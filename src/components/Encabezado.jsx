function Encabezado({mensaje}) {
    const { titulo, parrafo, texto } = mensaje
    return (
        <>
            <h2 className="text-center font-black text-xl uppercase">{titulo}</h2>
            <p className="text-center font-medium text-base mt-1 mb-10">
                {parrafo}
                <span className="text-indigo-600 font-bold"> {texto}</span>
            </p>
        </>
    );
}
export default Encabezado;
