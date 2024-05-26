import { useState, use, Suspense } from "react";

export const UseExample = () => {
  const [name, setName] = useState("");

  const fetchPokemon = () => {
    if (!name) return Promise.resolve();

    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      if (res.ok) return res.json();
      return { error: true, message: "Pokemon not found" };
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. pikachu"
        />
        <Suspense fallback={<div>Cargando...</div>}>
          <ShowPokemon pokemonPromise={fetchPokemon()} />
        </Suspense>
      </form>
    </div>
  );
};
// pasar una promesa de manera asincrona de forma declarativa a un componente hijo
function ShowPokemon({ pokemonPromise }: { pokemonPromise: Promise<any> }) {
  const pokemon = use(pokemonPromise);

  if (pokemon?.error) {
    return <div>Error: {pokemon.message}</div>;
  }
  if (!pokemon) return null;

  return (
    <div>
      Resultado:
      <article>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>{pokemon.description}</p>
      </article>
    </div>
  );
}
