import { Card, Button } from 'react-bootstrap';

export default function Question({ question }) {
  return (
    <Card style={{ width: '255px' }}>
      <Card.Img variant="top" src="holder.js/100px143?theme=card" />
      <Card.Body>
        <Card.Title>{question.title}</Card.Title>
        <Card.Text>{question.description}</Card.Text>
        <Button>Take a test</Button>
      </Card.Body>
    </Card>
  );
}
