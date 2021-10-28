import { Container, Button } from 'react-bootstrap';

import Question from './Question/Question';

import './QuestionsList.scss';

export default function QuestionsList({ questions }) {
  return (
    <Container as="section" className="questionslist">
      <Container
        style={{ marginBottom: '39px' }}
        className="d-flex justify-content-between align-items-center"
        fluid
      >
        <h1 className="questionslist__title">Questions list</h1>
        <Button>Add new question</Button>
      </Container>
      <Container fluid className="d-flex align-items-start flex-wrap" style={{ gap: '43px' }}>
        {questions.map((question, questionIndex) => (
          <Question question={question} key={questionIndex} />
        ))}
      </Container>
    </Container>
  );
}
