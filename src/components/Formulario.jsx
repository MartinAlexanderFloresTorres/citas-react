import { useState, useEffect } from "react";
import Error from "./Error";
import Encabezado from "./Encabezado";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    // useState
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        // llenar el formulario
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return fecha + random;
    };

    // Validar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Array de los campos
        const verificacion = [
            nombre.trim(),
            propietario.trim(),
            email.trim(),
            fecha.trim(),
            sintomas.trim(),
        ];

        // Campos vacios
        if (verificacion.includes("")) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        // Objecto de paciente
        const objetoPaciente = { nombre, propietario, email, fecha, sintomas };

        if (paciente.id) {
            // Editando un registro
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map((pacienteState) => {
                if (pacienteState.id == paciente.id) {
                    return objetoPaciente;
                }
                return pacienteState;
            });

            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            // Agregar un nuevo paciente
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Resetear los useState
        setNombre("");
        setPropietario("");
        setEmail("");
        setFecha("");
        setSintomas("");
        setError(false);
    };

    const mensaje = {
        titulo: "Seguimientos Pacientes",
        parrafo: "Añade Pacientes y",
        texto: "Administralos",
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 relative">
            <Encabezado mensaje={mensaje} />

            <form
                onSubmit={handleSubmit}
                className="sticky top-10 transition-all mb-10 bg-white shadow-md rounded-lg py-10 px-5"
            >
                {error && <Error mensaje="Todo los campos son olbligatorios" />}
                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="mascota"
                    >
                        Nombre Mascota
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="mascota"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre de la mascota"
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="propietario"
                    >
                        Nombre Propietario
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="propietario"
                        type="text"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                        placeholder="Nombre de la propietario"
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="email"
                    >
                        Nombre Email
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingrese el email"
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="fecha"
                    >
                        Fecha Alta
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="fecha"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-700 font-bold uppercase"
                        htmlFor="sintomas"
                    >
                        Nombre sintomas
                    </label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    className="bg-indigo-600 text-white w-full p-3 font-bold uppercase cursor-pointer rounded-md hover:bg-indigo-700 transition-all"
                    type="submit"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
}
export default Formulario;
