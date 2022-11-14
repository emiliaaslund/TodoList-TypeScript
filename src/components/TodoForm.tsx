import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Input, Button } from "../styles/TodoForm.styles";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Add a todo"
        value={newTodo}
        onChange={handleChange}
      />
      <Button type="submit" onClick={handleSubmit}>
        Add a todo
      </Button>
      {/* <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addTodo(newTodo);
            setNewTodo("");
          }}
        >
          Add a Todo
        </Button> */}
    </Container>
  );
};
