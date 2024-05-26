import { use } from "react";
import { UserContext } from "./user";

export const UserContextExample = () => {
  // la bentaja de use sobre useContext es que nos permite usaralo de forma condicional y no necesariamente en el nivel mas alto de la jerarquía de componentes admeas de simplificar la lectura del codigo y tener menos reglas a diferencia de useContext
  const { name, isLogged, updateUser } = use(UserContext);

  return (
    <div>
      {isLogged && (
        <>
          <p>Hi, {name}</p>
          <button onClick={() => updateUser({ name: null, isLogged: false })}>
            Logout
          </button>
        </>
      )}

      {!isLogged && (
        <>
          <p>Welcome</p>
          <button
            onClick={() => updateUser({ name: "Danfelogar", isLogged: true })}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};
