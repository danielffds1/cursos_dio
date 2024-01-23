//aseAuth.ts dentro da pasta src/hooks

import { useContext } from "react";
import { AuthContext } from "../context/auth";

export const useAuth = () => {
    const context =  useContext(AuthContext);

    if(!context){
        throw new Error("Não foi possível encontrar o contexto de autenticação");
    }

    return context;
}