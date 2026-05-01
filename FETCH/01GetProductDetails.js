const url = "https://fakestoreapi.com/products";
const option = {
  method: "GET",
};
const productDiv = document.querySelector("#productList");
var tableValue = `<table>
            <tr>
            <th>title</title>
            <th>price</th>
            <th>image</th>
           
            </tr>
       `;
fetch(url, option)
  .then((response) => response.json())
  .then((data) => {
    data.map(
      (value) =>
        (tableValue += `
        <tr>
        <td>${value.title}</td>
        <td>${value.price}</td>
        <td><img src = ${value?.image} height=100 width100</td>
        </tr>`),
    );
    tableValue += `</tabel>`;
    productDiv.innerHTML = tableValue;
  })
  .catch((error) => console.log(error));
