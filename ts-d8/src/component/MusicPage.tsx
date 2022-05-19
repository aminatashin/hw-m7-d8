import { Card } from "react-bootstrap";
import { Song } from "./Main";

interface MusicStyle {
  songs: Song;
}

const MusicPage = ({ songs }: MusicStyle) => {
  console.log(songs);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={songs.album.cover_small} />
        <Card.Body>
          <Card.Title>{songs.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MusicPage;
