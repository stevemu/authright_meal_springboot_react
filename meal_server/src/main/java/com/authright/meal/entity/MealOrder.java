package com.authright.meal.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class MealOrder {
//    @Id
//    @SequenceGenerator(initialValue = 4, name="meal_order_sequence_generator")
//    @GeneratedValue(generator = "meal_order_sequence_generator")
//    private int Id;
    @Id
    private String itemId;
    private int quantity;
//    private String note;

//    public String getNote() {
//        return note;
//    }
//
//    public void setNote(String note) {
//        this.note = note;
//    }

    public MealOrder() {
    }
    public MealOrder(String itemId, int quantity) {
        this.itemId = itemId;
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Meal{" +
                ", itemId='" + itemId + '\'' +
                ", quantity=" + quantity +
                '}';
    }


    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
