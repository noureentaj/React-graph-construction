export const basics = {
  on_login,
  setUI,
  unsetUI,
  getUI,
  joinNode,
  generate_relationship_json,
  get_customer_info,
  generate_preview,
  delete_relation
};

async function on_login() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };

  const response = await fetch(
    `http://localhost:11000/login`,
    requestOptions
  );
  const json = await response.json();
  return json;
}

async function setUI(n_id, n_type, title, x, y) {
  console.log(n_id, n_type, title, x, y)
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify([{
      "title": title,
      "x": x,
      "y": y,
      "id": n_id,
      "type": n_type
    }]),
  };

  const response = await fetch(
    `http://localhost:11000/set_UI_visibility_v1`,
    requestOptions
  );
  const json = await response.json();
  console.log(json)
  return json;
}

async function unsetUI(custid) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "cust_id": custid
    }),
  };

  const response = await fetch(
    `http://localhost:11000/delete_UI_visibility_v1`,
    requestOptions
  );
  const json = await response.json();
  console.log(json)
  return json;
}

async function joinNode(relation) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "cust_id": relation.source,
      "update_type": "add",
      "relationship_type": relation.relationship_type,
      "related_cust_id": relation.target
    }),
  };

  const response = await fetch(
    `http://localhost:11000/update_relationship`,
    requestOptions
  );
  const json = await response.json();
  return json;
}

async function getUI() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };

  const response = await fetch(
    `http://localhost:11000/display_ui_visible_nodes`,
    requestOptions
  );
  const json = await response.json();
  return json;
}

async function generate_relationship_json() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };

  const response = await fetch(
    `http://localhost:11000/generate_relationship_json_v1`,
    requestOptions
  );
  const json = await response.json();
  console.log("From generate json service", json)
  return json;
}

async function generate_preview() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };

  const response = await fetch(
    `http://localhost:11000/graph_preview`,
    requestOptions
  );
  const json = await response.json();
  console.log("From generate json service", json)
  return json;
}

async function get_customer_info(customer) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "cust_id": customer
    }),
  };

  const response = await fetch(
    `http://localhost:11000/get_customer_info`,
    requestOptions
  );
  const json = await response.json();
  console.log("From cust info", json)
  return json;
}

async function delete_relation(payload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cust_id: payload.cust_id,
      update_type: "delete",
      relationship_type: payload.relationship_type,
      related_cust_id: payload.related_cust_id
    }),
  };

  return fetch(
    `http://localhost:11000/update_relationship`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data
    });
}

    // var content;
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     "cust_id": viewNode.id
    //   }),
    // };
    // content = fetch(
    //   `http://localhost:11000/get_customer_info`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     let dict = data[viewNode.type][0]
    //     let Address_Line_1 = dict["Address_Line_1"]
    //     let Address_Line_2 = dict["Address_Line_2"]
    //     let zip = dict["ZIP_CD"]
    //     let cust_name = dict["cust_name"]
    //     swal(cust_name, "Address: " + Address_Line_1 + " " + Address_Line_2 + " " + "ZIP :" + zip);
    //   });
