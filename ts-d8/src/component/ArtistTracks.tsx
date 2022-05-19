import React from "react";
import { Song } from "./Main";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

interface TrackStyle {
  track: Song;
}

function ArtistTracks({ track }: TrackStyle) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={track.artist.picture_small} />
        <Card.Body>
          <Card.Title>{track.artist.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem></ListGroupItem>
          <ListGroupItem>{track.artist.tracklist}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#"> {track.artist.link}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ArtistTracks;
