let tableData = document.querySelector('#tData');
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
        let {img , prodactName , price , invintory , code} = item
        tableData.innerHTML+= `
        <tr>
        <td><img src="${img}"></td>
        <td>${prodactName}</td>
        <td>${price}</td>
        <td>${invintory}</td>
        <td>${code}</td>
        </tr>
        `
        }
       )}
    );