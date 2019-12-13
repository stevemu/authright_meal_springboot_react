package com.authright.meal.repo;

import com.authright.meal.entity.MenuItem;
import org.springframework.data.repository.CrudRepository;

public interface MenuItemRepo extends CrudRepository<MenuItem, String> {

}
