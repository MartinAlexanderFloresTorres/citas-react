import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    // useState
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});
    
    useEffect( ()=> {
        const obtenerStorage = () => {
            const getPacientes = JSON.parse(localStorage.getItem("pacientes")) ?? []
            setPacientes(getPacientes);
        }
        obtenerStorage()
    }, [])

    useEffect( ()=> {
        if ( pacientes.length > 0 ) {
            localStorage.setItem("pacientes", JSON.stringify(pacientes))
        }
    }, [pacientes])

    const eliminarPaciente = (id) => {
        const PacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id ?? pacienteState)
        setPacientes(PacientesActualizados);
        if (PacientesActualizados.length === 0) {
            localStorage.removeItem("pacientes")   
        }
    }

    return (
        <div className="container mx-auto md:mt-15 mt-10">
            <Header />
            <div className="mt-12 mx-4 md:flex justify-between md:gap-5">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente = {setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente = {eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;
