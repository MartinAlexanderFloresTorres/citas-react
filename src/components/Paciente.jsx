function Paciente({ paciente, setPaciente, eliminarPaciente }) {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const eliminar = confirm("¿Deseas eliminar este paciente?");
        if (eliminar) {
            setPaciente({});
            eliminarPaciente(id);
        }
    };

    return (
        <div className="mb-7 shadow-md rounded-lg py-8 px-5 bg-white">
            <div className="font-bold mb-2 text-gray-700 uppercase flex">
                Nombre:
                <div className="ml-2 font-normal normal-case overflow-auto">{nombre}</div>
            </div>

            <div className="font-bold mb-2 text-gray-700 uppercase flex">
                Propietario:
                <div className="ml-2 font-normal normal-case overflow-auto">
                    {propietario}
                </div>
            </div>

            <div className="font-bold mb-2 text-gray-700 uppercase flex">
                Email:
                <div className="ml-2 font-normal normal-case overflow-auto">{email}</div>
            </div>

            <div className="font-bold mb-2 text-gray-700 uppercase flex">
                Fecha Alta:
                <div className="ml-2 font-normal normal-case overflow-auto">{fecha}</div>
            </div>

            <div className="font-bold mb-2 text-gray-700 uppercase flex">
                Sintomas:
                <div className="ml-2 font-normal normal-case  overflow-auto">{sintomas}</div>
            </div>

            <div className="flex flex-wrap gap-5">
                <button
                    className="py-2 md:w-auto w-full px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition-all"
                    type="button"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    className="py-2 md:w-auto w-full px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-all"
                    type="button"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Paciente;
