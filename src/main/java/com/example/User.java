package com.example;

import jakarta.persistence.*;

@Entity
@Table(name = "users") // Nombre de la tabla en la DB
public class User {

    @Id // Define la llave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremental
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private String username;
    private String email;

    public User() {} // Constructor vacío obligatorio para Hibernate

    public User(Long id, String username, String email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    // Getters y Setters...
}

