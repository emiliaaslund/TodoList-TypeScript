import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { Wrapper, Title } from "./styles/App.styles";
import GlobalFonts from "./fonts/fonts";
import GlobalStyle from "./styles/Global";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const toggleTodo = (selectedTodo: Todo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text != todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <GlobalFonts />
        <Title>Welcome to my first typescript todolist</Title>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </Wrapper>
    </div>
  );
}

export default App;
