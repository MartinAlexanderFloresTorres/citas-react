import Paciente from "./Paciente";
import Encabezado from "./Encabezado";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
    // Mensaje 1
    const mensaje = {
        titulo: "Listado de Pacientes",
        parrafo: "Administra tus",
        texto: "Pacientes y Citas",
    };

    // Mensaje 2
    const mensaje2 = {
        titulo: "No hay pacientes",
        parrafo: "Comienza agregando a tus",
        texto: "Pacientes",
    };

    // Mostrar pacients
    const mostrarPaciente = pacientes.map((paciente) => {
        return (
            <Paciente
                setPaciente={setPaciente}
                key={paciente.id}
                paciente={paciente}
                eliminarPaciente={eliminarPaciente}
            />
        );
    });

    return (
        <div className="md:w-1/2 lg:w-3/5">
            {pacientes && pacientes.length ? (
                <>
                    <Encabezado mensaje={mensaje} />
                    {mostrarPaciente}
                </>
            ) : (
                <Encabezado mensaje={mensaje2} />
            )}
        </div>
    );
}

export default ListadoPacientes;
