let serial = 0;

// First Card ---------------------------------
document.getElementById('btn-first-card').addEventListener('click',function(){
  serial +=1;
//   const TitleName = document.getElementById('title-first-card').innerText;
    const titleName = getInnerText('title-first-card');
    const baseValue = getFieldValue('first-input');
    const heightValue = getFieldValue('Second-input');
    const area = 0.5*baseValue*heightValue;
    // console.log(area)

    displayData(titleName,area);
    
  
})

// Common functions---------------------------------

// function for getting inner text. 
function getInnerText(id){
    const name = document.getElementById(id).innerText;
    return name;
}

// function for getting input field value. 
function getFieldValue(id){
    const value = document.getElementById(id).value;
    return value;
} 

// function for display data.
function displayData(nameOfShape, calculation){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfShape}</td>
    <td>${calculation}</td>
    <td>
    <button class="btn btn-sm btn-cyan-700" >Covert to m <sup>2</sup></button>
    </td>
    `;
    container.appendChild(tr);
    // document.getElementById().innerText = serial
}