import { RefObject, useRef } from "react";

const Input = ({ inputRef }: { inputRef: RefObject<HTMLInputElement> }) => {
  return <input ref={inputRef} placeholder="Ej. Danfelogar" type="text" />;
};

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>();

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* con esto simulamos un lazyLoad declarativo que nada mas renderizar este componente quiero que me cargue el css correspondiente para evitar cargarlo en el head de la página */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
      />
      <form style={{ marginTop: 12 }}>
        <Input inputRef={inputRef as RefObject<HTMLInputElement>} />
      </form>
      <button type="submit" onClick={focusInput}>
        Focus input
      </button>
    </div>
  );
};
