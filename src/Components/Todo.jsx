    import React, { useState } from "react";
    import { pokemonData } from "./pokemonData";

    const Todo = () => {
    const [search, setSearch] = useState("");

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    const filterPokemon = pokemonData.filter((poke) => {
        return poke.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="text-center">
        <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search..."
            className="px-7 py-4 rounded-2xl border border-black mt-10"
        />
        <div className="mt-10">
            {filterPokemon.length > 0 ? (
            <div className="grid grid-cols-3 gap-6 justify-items-center">
            {filterPokemon.map((poke) => (
                <div
                key={poke.id}
                className="w-48 p-4 border rounded-xl shadow-md text-center"
                >
                <img
                    src={poke.image}
                    alt={poke.name}
                    className="w-24 h-24 mx-auto"
                />

                <h3 className="mt-3 text-lg font-semibold">
                    {poke.name}
                </h3>
                </div>
            ))}
            </div>
        ) : (
            <h2 className="text-2xl text-red-500 font-bold">
            No Pokémon Found
            </h2>
        )}
            </div>

        
        </div>
    );
    };

    export default Todo;