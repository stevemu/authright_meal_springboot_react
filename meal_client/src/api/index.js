export async function get(url, token = null) {
  let res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    let err = "error for " + url
    throw err;
  }

  let j = await res.json();
  return j;
}

export async function post(url, body, token = null) {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    let err = "error for " + url
    throw err
    ;
  }
  let json = await res.json();
  return json;
}

export async function put(url, body, token = null) {
  let res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    let err = "error for " + url
    throw err;
  }
  let json = await res.json();
  return json;
}

export async function del(url, body = {}, token = null) {
  let res = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}
