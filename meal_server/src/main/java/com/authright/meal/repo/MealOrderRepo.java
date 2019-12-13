package com.authright.meal.repo;

import com.authright.meal.entity.MealOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(collectionResourceRel = "order", path = "order")
public interface MealOrderRepo extends CrudRepository<MealOrder, String> {
//    List<MealOrder> findByItemId(@Param("itemId") String itemId);
}
