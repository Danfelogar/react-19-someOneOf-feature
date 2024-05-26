import { ReactNode, createContext, useCallback, useState } from "react";

export const UserContext = createContext({ name: null, isLogged: false });

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  const updateUser = useCallback(
    ({ name, isLogged }: { name: string; isLogged: boolean }) => {
      setName(name);
      setIsLogged(isLogged);
    },
    []
  );

  return (
    // a futuro se puede quitar el provider
    <UserContext.Provider value={{ name, isLogged, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
