import sushi_data from "./sushi_data.js";
const units = ["貫", "半本", "本"];

// Construct the おしながき table
$(document).ready(() => {
  sushi_data.forEach((cat, i) => {
    const input = `
      <div class=input-group>
        <input class=form-control type=number min=0 max=999>
        <div class=input-group-append>
          <span class="input-group-text unit">${units[i]}</span>
        </div>
      </div>`;

    $(`#category${i}`).append($(cat.map(x =>
      `<tr>
        <td>${x.name}</td>';
        <td>${x.price}円</td>
        <td>${input}</td>
      </tr>`
    ).join()));
  });
})

$(document).on("change", "input", () => {
  // Extract order info
  const orders = sushi_data.map((cat, i) => {
    const order = [];
    $(`#category${i} input`).each((i, x) => {
      if(x.value > 0){
        order.push([i, x.value]);
      }
    });
    return order;
  });

  // Update order string
  $("#order").text(orders.map((order, i) =>
    order.map(([j, n]) => `${sushi_data[i][j].name} ${n} ${units[i]}`)
  ).flat().join("，"));

  const trivial_price = orders.reduce((p, order, i) =>
    order.reduce((q, [j, n]) => q + sushi_data[i][j].price * n, p), 0
  );
  $("#trivial-price").text(`単品注文時の合計金額は ${trivial_price.toLocaleString()} 円です．`);
})
