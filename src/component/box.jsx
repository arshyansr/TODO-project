import '../App.css';

function Box() {

    function Data() {
let data = document.getElementById('textinput').value;
let newpara = document.createElement('P');
let delet = document.createElement('button');
delet.innerText="delete";
newpara.innerText=data;
document.getElementById('para').appendChild(newpara);
newpara.appendChild(delet);

newpara.addEventListener("click", function() {
    newpara.classList.toggle("faded");
    });

delet.addEventListener("click", function() {
    newpara.remove();
});
    
}


  return (
    <div className='container bg-white mt-5'>
    <h1 className='pt-3 text-center'>TO DO LIST</h1>

    <div id='para' className='text-dark'>

    </div>


    <div className='text-center mb-3'>
    <input type='text' id='textinput' placeholder='...یچیزی تایپ کن رفیق' className='text-center'></input>
    <button onClick={Data} className='btn bg-danger '>+</button>
    </div>

    </div>
  );
}

export default Box;
