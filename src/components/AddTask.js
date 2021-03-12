import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function AddTask({ onHandle }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  let [id, setId] = useState(0);
  return (
    <Container align="center" className="py-5">
      <Row>
        <Col>To-Do List</Col>
        <Col>
          <Button>Add Task</Button>
        </Col>
      </Row>
      <Form className="py-3" style={{ width: '50%', textAlign: 'left' }}>
        <Form.Group controlId="Task">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Task"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="Date">
          <Form.Label>date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter task date"
            value={day}
            onChange={e => setDay(e.target.value)}
          />
        </Form.Group>

        <Button
          className="btn-block"
          onClick={() => {
            setId(id + 1);
            onHandle(text, day, id);
          }}
        >
          Add Task
        </Button>
      </Form>
    </Container>
  );
}

export default AddTask;
