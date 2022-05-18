import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { Music } from "./Main";

interface MusicStyle {
  musics: Music;
}

function MusicPage({ musics }: MusicStyle) {
  return (
    <div>
      <Row>
        <Col md={4} className="mr-2">
          <Card>
            <Card.Img variant="top" src={musics.cover_small} />
            <Card.Body>
              <Card.Title>{musics.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MusicPage;
