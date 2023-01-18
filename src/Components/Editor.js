import React, { useState } from 'react';

function Editor() {

  const [text, setText] = useState("SELECT * FROM USERS;");
  let textArea1 = document.getElementById('textArea1');
  
  let Changed = (event) => {
    setText(event.target.value);
  }
   function tempAlert(msg, duration) {
    var el = document.createElement("div");
    el.setAttribute("style", "padding:5px;position:absolute;top:80%;left:80%;background-color:#8bcca9;");

    el.innerHTML = msg;
    setTimeout(function () {
      el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
  }
  function copyFun() {
    navigator.clipboard.writeText(text);
    tempAlert("Text Copied!!", 2300);
  }
  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  function saveFun() {
    download("MyNotes.txt", text);
    alert("Saved Successfully !!");
  }
  function clearFun() {
    if (window.confirm("Clear All Text?"))
      setText("");
  }


  return (
    <>
      <div className="mb-1 mx-5">
        <h1 className='m-3' id="title" style={{ fontfamily: 'Lucida', textAlign: 'center' }}>SQL-Query Handler</h1>
        <textarea className=" shadow-lg form-control p-3 my-3" style={{ backgroundColor: "#cae9fc" }} value={text} placeholder="Enter Text Here..." id="textArea1" rows="9" onChange={Changed}></textarea>
        <div className='container row mx-auto'>
          <div className='col mt-2'>
            <button className='btn btn-primary' type="button" data-bs-toggle="collapse" data-bs-target="#demoResult" aria-expanded="false" aria-controls="demoResult" style={{ width: '100%' }} >Run SQL</button>
          </div>
          <div className='col mt-2'>
            <button className='btn btn-info' style={{ width: '100%' }} onClick={copyFun}>Copy Text</button>
          </div>
          <div className='col mt-2'>
            <button className='btn btn-success' style={{ width: '100%' }} onClick={saveFun}>Save</button>
          </div>
          <div className='col mt-2'>
            <button className='btn btn-danger' style={{ width: '100%' }} onClick={clearFun}>Clear</button>
          </div>
        </div>
      </div>





      <div className="mb-1 mx-5">
        <h1 className='m-3' id="title" style={{ fontfamily: 'Lucida', textAlign: 'center' }}>Results</h1>
        <div className=" shadow-lg p-3 my-3" style={{ backgroundColor: "#cae9fc" }} placeholder="Results will be Displayed Here..." >
        <div className="collapse" id="demoResult">
        <div className="card card-body m-2">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Aman</td>
                <td>Patel</td>
                <td>@aman12</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Hritik</td>
                <td>Mandloi</td>
                <td>@hritik29</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Vipin</td>
                <td>Lamba</td>
                <td>@Vipin27</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Rohan</td>
                <td>Dhangar</td>
                <td>@Rohan01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>


      




      </div>
    </>
  )
}

export default Editor;