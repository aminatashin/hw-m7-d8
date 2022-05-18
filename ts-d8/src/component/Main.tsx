import React, { FormEvent, useState, useEffect } from "react";
import MusicPage from "./MusicPage";

//--------------------------------------------------------
export interface Music {
  title: string;
  id: number;
  cover_small: string;
  name: string;
}
const Main = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Music[]>([]);

  //--------------------------------------------------------
  useEffect(() => {
    handleFetch();
  }, []);

  //--------------------------------------------------------
  const handleFetch = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search
      );
      if (res.ok) {
        let musicdata = await res.json();

        setResults(musicdata.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //--------------------------------------------------------
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleFetch();
  };

  //--------------------------------------------------------
  console.log("re-rendering... search is", search);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          placeholder={"Search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button>Click</button>
      </form>
      {results.map((music) => (
        <MusicPage key={music.id} musics={music} />
      ))}
    </div>
  );
};

export default Main;
