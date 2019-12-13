import { get, post, del } from "../api";

export async function getMenu() {
  let json = await get("/api/menu");
  let parsedjson = {};
  for (let i = 0, tem; i < json.length; i++) {
    tem = json[i];
    parsedjson[tem.itemId] = tem;
  }
  return parsedjson;
}

export async function getOrder() {
  let orderItems = await get("/api/order");
  let normalizedOrder = {};
  for (let orderItem of orderItems) {
    let { itemId, quantity } = orderItem;
    normalizedOrder[itemId] = quantity;
  }
  return normalizedOrder;
}

export async function updateOrderItem(itemId, quantity) {
  let json = await post("/api/order", {
    itemId,
    quantity
  });
  return json;
}

// add to existing quantity if order item exist
export async function addOrderItem(itemId, quantity) {
  let json = await post("/api/order/add", {
    itemId,
    quantity
  });
  return json;
}


export async function deleteOrderItem(itemId) {
  let json = await del("/api/order", {
    itemId
  });
  return json;
}
