package com.authright.meal.controller;

import com.authright.meal.entity.MenuItem;
import com.authright.meal.repo.MenuItemRepo;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class MenuItemController {
    @Autowired
    MenuItemRepo menuItemRepo;

    @GetMapping("/api/menu_items")
    public List<MenuItem> getMenuItemsFromJson() {
        List<MenuItem> list = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
        try {
            java.util.List<MenuItem> menuItems = mapper.readValue(new File("src/main/resources/menu.json"), new TypeReference<List<MenuItem>>() {
            });
            for (MenuItem menuItem : menuItems) {
//                System.out.println(menuItem);
                list.add(menuItem);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return list;
    }

    // Get All the MenuItem
//    @GetMapping("/api/menu")
//    public Iterable<MenuItem> getMenu() {
//        return menuItemRepo.findAll();
//    }

    @GetMapping("/api/menu_items/{itemId}")
    public MenuItem getMenuItem(@PathVariable String itemId) {
        return menuItemRepo.findById(itemId).get();
    }
}
