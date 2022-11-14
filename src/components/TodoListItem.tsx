import React from "react";
import {
  Container,
  Item,
  Button,
  Label,
  CheckBox,
} from "../styles/TodoListItem.styles";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}) => {
  const deleteTodo = (e: any) => {
    removeTodo(todo);
  };

  return (
    <Container>
      <Item>
        <Label
          style={{
            textDecoration: todo.complete ? "line-through" : undefined,
          }}
        >
          {todo.text}
        </Label>
        <Button
          onClick={() => {
            deleteTodo(todo);
          }}
        >
          X
        </Button>{" "}
        <CheckBox
          type="checkbox"
          onChange={() => toggleTodo(todo)}
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />
      </Item>
    </Container>
  );
};
