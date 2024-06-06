package com.example.accessingdatamysql.Service;

import com.example.accessingdatamysql.entity.Todo;
import com.example.accessingdatamysql.repository.TodoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(Long id){
        return todoRepository.findById(id);
    }

    public Todo createTodo(Todo todo){
        return todoRepository.save(todo);
    }

    public void deleteTodo(Todo todo){
        todoRepository.delete(todo);
    }
}
