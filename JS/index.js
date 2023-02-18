
let serial = 0;

// First Card ---------------------------------
document.getElementById('btn-first-card').addEventListener('click', function () {
  serial += 1;
  const titleName = getInnerText('title-first-card');
  const baseValueString = getFieldValue('first-input');
  const baseValue = parseInt(baseValueString);
  const heightValueString = getFieldValue('Second-input');
  const heightValue = parseInt(heightValueString);
  console.log(typeof baseValue, typeof heightValue)
  if (
    isNaN(baseValue) ||
    isNaN(heightValue) ||
    baseValue <= 0 ||
    heightValue <= 0
  ) {
    return alert('Please enter any valid number');
  }
  const area = 0.5 * baseValue * heightValue;

  displayData(titleName, area);
});

// Second Card ---------------------------------
document.getElementById('btn-second-card').addEventListener('click', function () {
  serial += 1;
  const titleName = getInnerText('title-second-card');
  const widthValueString = getFieldValue('first-input-second-card');
  const widthValue = parseInt(widthValueString);
  const lengthValueString = getFieldValue('Second-input-second-card');
  const lengthValue = parseInt(lengthValueString);
  console.log(lengthValue);
  if (
    isNaN(widthValue) ||
    isNaN(lengthValue) ||
    widthValue <= 0 ||
    lengthValue <= 0
  ) {
    return alert('Please enter any valid number');
  }
  const area = widthValue * lengthValue;
  console.log (area)

  displayData(titleName, area);
});

//Third Card --------------------------------------
document.getElementById('btn-third-card').addEventListener('click', function () {
  serial += 1;
  const titleName = getInnerText('title-third-card')
  const baseValue = getInnerText('base-innerText-parallelogram');
  const heightValue = getInnerText('height-Text-parallelogram');
  const area = parseInt(baseValue) * parseInt(heightValue);

  displayData(titleName, area);
});

//Fourth Card --------------------------------------
document.getElementById('btn-fourth-card').addEventListener('click', function () {
  serial += 1;
  const titleName = getInnerText('title-fourth-card')
  const baseValue = getInnerText('base-innerText-rhombus');
  const heightValue = getInnerText('height-innerText-rhombus');
  const area = 0.5 * parseInt(baseValue) * parseInt(heightValue);

  displayData(titleName, area);
});

//Fifth Card --------------------------------------
document.getElementById('btn-fifth-card').addEventListener('click', function () {
  serial += 1;
  const titleName = getInnerText('title-fifth-card')
  const perimetterValue = getInnerText('perimeter-innerText-pentagon');
  const baseValue = getInnerText('base-innerText-pentagon');
  const area = 0.5 * parseInt(perimetterValue) * parseInt(baseValue);

  displayData(titleName, area);
});

//Six Card --------------------------------------
document.getElementById('btn-six-card').addEventListener('click', function () {
  serial += 1;
  const titleName = getInnerText('title-six-card')
  const axis1Value = getInnerText('axis1-innerText-ellipse');
  const axis2Value = getInnerText('axis2-innerText-ellipse');
  console.log(titleName, axis1Value, axis2Value)

  const area = (Math.PI * parseInt(axis1Value) * parseInt(axis2Value)).toFixed(2);

  displayData(titleName, area);
});


// Common functions---------------------------------

// function for getting inner text------------------
function getInnerText(id) {
  const name = document.getElementById(id).innerText;
  return name;
}

// function for getting input field value----------- 
function getFieldValue(id) {
  const value = document.getElementById(id).value;
  return value;
}

// function for display data------------------------
function displayData(nameOfShape, calculation) {
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfShape}</td>
    <td>${calculation + ' cm<sup>2</sup>'}</td>
    <td>
    <button class="btn btn-sm btn-cyan-700 text-xs normal-case px-3" >Covert to m<sup>2</sup></button>
    </td>
  `;
  container.appendChild(tr);
}