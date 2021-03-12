import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Task({ tasks, onDelete }) {
  return (
    <>
      <Container>
        {tasks.length > 0
          ? tasks.map(task => (
              <Card key={task.id} variant="dark" className="my-2">
                <Col>
                  <Row className="py-2">
                    <Col>
                      <h3>{task.text}</h3>
                    </Col>
                    <Col align="right">
                      <Button onClick={() => onDelete(task.id)}>X</Button>
                    </Col>
                  </Row>
                  <p>{task.day}</p>
                </Col>
              </Card>
            ))
          : 'No task Found!'}
      </Container>
    </>
  );
}
export default Task;
