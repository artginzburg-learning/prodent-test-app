import Holder from 'holderjs';
import { useEffect, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Question({ question }) {
  const imageRef = useRef();

  useEffect(() => {
    Holder.run({
      images: imageRef.current,
    });
  }, [imageRef]);

  return (
    <Card style={{ width: '255px' }}>
      <Card.Img ref={imageRef} variant="top" src="holder.js/100px143?theme=card" />
      <Card.Body>
        <Card.Title>{question.title}</Card.Title>
        <Card.Text>{question.description}</Card.Text>
        <Button>Take a test</Button>
      </Card.Body>
    </Card>
  );
}
