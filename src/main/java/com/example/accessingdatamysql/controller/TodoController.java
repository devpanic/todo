package com.example.accessingdatamysql.controller;

import com.example.accessingdatamysql.Service.TodoService;
import com.example.accessingdatamysql.User;
import com.example.accessingdatamysql.entity.Todo;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/all")
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @GetMapping("/{id}")
    public Optional<Todo> getTodoById(@PathVariable("id") Long id) {
        return todoService.getTodoById(id);
    }

    @PostMapping
    public ResponseEntity<String> createTodo(@RequestBody Todo todo) {
        todoService.createTodo(todo);
        return ResponseEntity.status(HttpStatus.CREATED).body("saved");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable Long id) {
        return todoService.getTodoById(id).map(todo -> {
                    todoService.deleteTodo(todo);
                    return ResponseEntity.noContent().build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
