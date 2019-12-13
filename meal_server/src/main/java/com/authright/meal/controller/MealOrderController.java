package com.authright.meal.controller;

import com.authright.meal.entity.MealOrder;
import com.authright.meal.repo.MealOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MealOrderController {

    @Autowired
    MealOrderRepo mealOrderRepo;

    @GetMapping("/api/mealOrders")
    public Iterable<MealOrder> getMealOrders() {
        return mealOrderRepo.findAll();
    }

    @GetMapping("/api/mealOrders/{itemId}")
    public MealOrder getMealOrder(@PathVariable String itemId) {
        return mealOrderRepo.findById(itemId).get();
    }

    @PostMapping("/api/mealOrders")
    public MealOrder postMealOrder(@RequestBody MealOrder mealOrder) {
//        System.out.println(mealOrder);
        if (mealOrderRepo.existsById(mealOrder.getItemId())) {
            MealOrder foundMealOrder = mealOrderRepo.findById(mealOrder.getItemId()).get();
            foundMealOrder.setQuantity(mealOrder.getQuantity());
            return mealOrderRepo.save(foundMealOrder);
        } else {
            return mealOrderRepo.save(mealOrder);
        }
    }

}
