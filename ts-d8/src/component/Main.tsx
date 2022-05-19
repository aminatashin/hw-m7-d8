import React, { FormEvent, useState } from "react";
import MusicPage from "./MusicPage";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//--------------------------------------------------------
export interface SongsResponse {
  data: Song[];
}

export interface Song {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: TitleVersion;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: Artist;
  album: Album;
  type: DatumType;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: AlbumType;
}

export enum AlbumType {
  Album = "album",
}

export interface Artist {
  id: number;
  name: Name;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: ArtistType;
}

export enum Name {
  Metallica = "Metallica",
}

export enum ArtistType {
  Artist = "artist",
}

export enum TitleVersion {
  Empty = "",
  Remastered = "(Remastered)",
  Remastered2021 = "(Remastered 2021)",
}

export enum DatumType {
  Track = "track",
}

// --------------------------------------------------------
const Main = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Song[]>([]);

  //--------------------------------------------------------
  //   useEffect(() => {
  //     handleFetch();
  //   }, []);

  //--------------------------------------------------------
  const handleFetch = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search
      );
      if (res.ok) {
        let musicdata = (await res.json()) as SongsResponse;
        console.log(musicdata.data);

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
      <Row>
        {results.map((music) => (
          <Col md={3}>
            <Link to={"/" + music.id}>
              <MusicPage key={music.id} songs={music} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
