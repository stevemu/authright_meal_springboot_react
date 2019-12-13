import { get, post, del } from "../api";

export async function getMenu() {
  let json = await get("/api/menu_items");
  let parsedjson = {};
  for (let i = 0, tem; i < json.length; i++) {
    tem = json[i];
    parsedjson[tem.itemId] = tem;
  }
  return parsedjson;
}

export async function getOrder() {
  let orderItems = await get("/api/mealOrders");
  let normalizedOrder = {};
  for (let orderItem of orderItems) {
    let { itemId, quantity } = orderItem;
    normalizedOrder[itemId] = quantity;
  }
  return normalizedOrder;
}

export async function updateOrderItem(itemId, quantity) {
  let json = await post("/api/mealOrders", {
    itemId,
    quantity
  });
  return json;
}

// add to existing quantity if order item exist
export async function addOrderItem(itemId, quantity) {
  let json = await post("/api/mealOrders/add", {
    itemId,
    quantity
  });
  return json;
}

export async function deleteOrderItem(itemId) {
  try {
    let json = await del("/api/mealOrders", {
      itemId
    });
    return json;
  } catch (error) {
    console.log(error);
  }
}
