package com.authright.meal.controller;

import com.authright.meal.entity.MenuItem;
import com.authright.meal.repo.MenuItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RestController
public class MenuItemController {
    @Autowired
    MenuItemRepo menuItemRepo;

    // Get All the MenuItem
    @GetMapping("/api/Menu")
    public Iterable<MenuItem> getMenu() {
        return menuItemRepo.findAll();
    }

    @GetMapping("/api/Menu/{itemId}")
    public MenuItem getMenuItem(@PathVariable String itemId) {
        return menuItemRepo.findById(itemId).get();
    }
}
