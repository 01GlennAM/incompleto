package com.example;

import com.example.util.JpaUtil;
import jakarta.persistence.EntityManager;

public class Main {
    public static void main(String[] args) {
        EntityManager em = JpaUtil.getEntityManager();
        UserRepository userRepository = new UserRepository();

        try {
            System.out.println("--- Ejecutando enfoque Repository ---");
            User user = new User();
            user.setUsername("JavaPro_" + System.currentTimeMillis());
            userRepository.save(user);
            
            userRepository.findAll().forEach(u -> System.out.println(u.getUsername()));
        } finally {
            em.close();
            JpaUtil.close();
        }
    }
}
