import React, { useState, useEffect } from 'react';
import client from '../client';
import QuestionsList from '../components/questions-list';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.get('/question').then((response) => {
      setQuestions(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? <p>Cargando...</p> : <QuestionsList questions={questions} />}
    </>
  );
};

export default Questions;
