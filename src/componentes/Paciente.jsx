import usePacientes from "../hooks/usePacientes";

const Paciente = ({paciente}) => {
    const {setEdicion, eliminarPaciente} = usePacientes()

    const {email, fecha, nombre, propietario, sintomas, _id} = paciente

    const formatearFecha = (fecha) =>{
        const nuevaFecha = new Date(fecha);
        return new Intl.DateTimeFormat("es-MX", {dateStyle: "long"}).format(nuevaFecha);
    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-indigo-800 my-2">Nombre: {""}
            <span className="font-normal normal-case text-gray-500">{nombre}</span>
        </p>
        <p className="font-bold uppercase text-indigo-800 my-2">Propietario: {""}
            <span className="font-normal normal-case text-gray-500">{propietario}</span>
        </p>
        <p className="font-bold uppercase text-indigo-800 my-2">Email Contacto: {""}
            <span className="font-normal normal-case text-gray-500">{email}</span>
        </p>
        <p className="font-bold uppercase text-indigo-800 my-2">Fecha de Alta: {""}
            <span className="font-normal normal-case text-gray-500">{formatearFecha(fecha)}</span>
        </p>
        <p className="font-bold uppercase text-indigo-800 my-2">Sintomas: {""}
            <span className="font-normal normal-case text-gray-500">{sintomas}</span>
        </p>
        
        <div className="flex justify-between my-5">
            <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:cursor-pointer hover:bg-gray-300 hover:text-indigo-700 text-white uppercase font-bold rounded-lg" onClick={e =>setEdicion(paciente)}>
               Editar 
            </button>

            <button
            type="button"
            className="py-2 px-10 bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white uppercase font-bold rounded-lg"
            onClick={e =>eliminarPaciente(_id)}>
               Eliminar 
            </button>
        </div>
 
    </div>
  )
}

export default Paciente;