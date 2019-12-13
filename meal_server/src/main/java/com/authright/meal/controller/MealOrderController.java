package com.authright.meal.controller;

import com.authright.meal.entity.MealOrder;
import com.authright.meal.repo.MealOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

class SuccessResponse {
    private boolean success = true;
}

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
        if (mealOrderRepo.existsById(mealOrder.getItemId())) {
            MealOrder foundMealOrder = mealOrderRepo.findById(mealOrder.getItemId()).get();
            foundMealOrder.setQuantity(mealOrder.getQuantity());
            return mealOrderRepo.save(foundMealOrder);
        } else {
            return mealOrderRepo.save(mealOrder);
        }
    }

    @PostMapping("/api/mealOrders/add")
    public MealOrder addQuantityToMealOrder(@RequestBody MealOrder mealOrder) {
        if (mealOrderRepo.existsById(mealOrder.getItemId())) {
            MealOrder mealOrderFound = mealOrderRepo.findById(mealOrder.getItemId()).get();
            mealOrderFound.setQuantity(mealOrderFound.getQuantity() + mealOrder.getQuantity());
            mealOrderRepo.save(mealOrderFound);
            return mealOrderFound;
        } else {
            return mealOrderRepo.save(mealOrder);
        }
    }

    @DeleteMapping("/api/mealOrders")
    public SuccessResponse deleteMealOrder(@RequestBody MealOrder mealOrder) {
        mealOrderRepo.deleteById(mealOrder.getItemId());
        return new SuccessResponse();
    }



}
