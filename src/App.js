import Holder from 'holderjs';

import Header from './components/Header/Header';
import QuestionsList from './components/QuestionsList/QuestionsList';

Holder.addTheme('card', {
  bg: '#868e96',
  fg: '#dee2e6',
  size: 16,
  fontweight: 'normal',
  text: 'Images cap',
});

const questions = [
  {
    title: 'Base question',
    description: 'First question',
  },
  {
    title: 'Multiple var. question',
    description: 'This question has several correct answers.',
  },
  {
    title: 'Multiple var. question',
    description: 'This question has several correct answers.',
  },
  {
    title: 'Multiple var. question',
    description: 'This question has several correct answers.',
  },
  {
    title: 'Passed question',
    description: 'Passed question example',
  },
  {
    title: 'Failed question',
    description: 'Failed question example',
  },
  // {
  //   title: 'Placeholder',
  //   description: 'Descriptive placeholder.',
  // },
];

export default function App() {
  return (
    <>
      <Header />
      <main style={{ margin: '68px 88px' }}>
        <QuestionsList questions={questions} />
      </main>
    </>
  );
}
