import { useContext } from "react";
import  PacientesContext  from "../contest/PacientesProvider";

const usePacientes = () =>{
    return useContext(PacientesContext);
}

export default usePacientes;