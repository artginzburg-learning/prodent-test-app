import { Container, Button, Pagination } from 'react-bootstrap';

import useLocalStorage from '../../hooks/useLocalStorage';

import Question from './Question/Question';

import './QuestionsList.scss';

const questionsPerPage = 6;

export default function QuestionsList({ questions }) {
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);

  function handlePageClick(e) {
    setCurrentPage(e.target.tabIndex);
  }

  const lastQuestionIndex = currentPage * questionsPerPage;
  const firstQuestionIndex = lastQuestionIndex - questionsPerPage;
  const currentQuestions = questions.slice(firstQuestionIndex, lastQuestionIndex);

  const pageItems = [];
  for (let number = 1; number <= Math.ceil(questions.length / questionsPerPage); number++) {
    const isActive = number === currentPage;
    pageItems.push(
      <Pagination.Item
        tabIndex={number}
        key={number}
        active={isActive}
        onClick={isActive ? null : handlePageClick}
      >
        {number}
      </Pagination.Item>,
    );
  }

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
        {currentQuestions.map((question, questionIndex) => (
          <Question question={question} key={questionIndex} />
        ))}
      </Container>

      <Container style={{ marginTop: '23px' }} fluid>
        <Pagination>
          <Pagination.Prev>Previous</Pagination.Prev>
          {pageItems}
          <Pagination.Next>Next</Pagination.Next>
        </Pagination>
      </Container>
    </Container>
  );
}
