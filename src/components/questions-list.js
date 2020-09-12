import React from 'react';
import { Card, Button } from 'react-bootstrap';
import * as Icons from 'react-icons/di';

const QuestionsList = (props) => {
  return (
    <>
      {props.questions?.map((question) => {
        {
          /* const Icon = Icons[question.icon]; */
        }
        return (
          <Card key={question.id}>
            <Card.Header>{/* <Icon /> */}</Card.Header>
            <Card.Body>
              <Card.Title>{question.title}</Card.Title>
              <Card.Text>{question.description}</Card.Text>
              <Button variant="primary">Ver pregunta</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default QuestionsList;
