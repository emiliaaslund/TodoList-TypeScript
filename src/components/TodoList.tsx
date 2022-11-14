import React from "react";
import { List } from "../styles/TodoList.styles";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
};
