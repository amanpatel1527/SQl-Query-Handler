import React from 'react';
import {NavLink} from 'react-router-dom';
import Editor from './Editor';

function Header() {

  const navColor=['#CD5C5C','#F08080','#FA8072','#E9967A','#FFA07A','#FFA500','#FFA500','#7FFFD4'];
  const bodyColor=['#696969','#FFFAF0','#A0522D','#FFEBCD','#6495ED','#87596c','#5F9EA0','#fff'];
  let counter=0,fcnt=0;
  const fonts=["Fantasy,Papyrus","Monospace, Courier New","Cursive,	Brush Script MT","Monospace, Lucida Console","Times New Roman, Times, serif","Arial, Helvetica, sans-serif"];

  function changeTheme()
  {
    const header=document.getElementById("Navbar");
    const footer=document.getElementById("Footer");
    const tab1=document.getElementById("tab1");
    const tab2=document.getElementById("tab2");
    const tab3=document.getElementById("tab3");
    //const headings=document.getElementById("title");
    counter++;
    if(counter>=navColor.length) counter=0;
    header.style.setProperty("background-color", navColor[counter], "important");
    if(counter!==navColor.length-1)
    {
      //header.style.setProperty("text-decoration", "none", "important");
      header.style.setProperty("color", "#fff", "important");
      footer.style.setProperty("color", "#fff", "important");
      tab1.style.setProperty("color","#fff","important");
      tab2.style.setProperty("color","#fff","important");
      tab3.style.setProperty("color","#fff","important");
      //headings.style.setProperty("color","#fff","important");
    }
    else
    {
      header.style.setProperty("color", "#000", "important");
      footer.style.setProperty("color", "#000", "important");
      tab1.style.setProperty("color","#000","important");
      tab2.style.setProperty("color","#000","important");
      tab3.style.setProperty("color","#000","important");
      //headings.style.setProperty("color","#000","important");
    }
    footer.style.setProperty("background-color", navColor[counter], "important");
    document.body.style.backgroundColor=bodyColor[counter];
    console.log("Changing Theme");
  }
  function changeFont()
  {
    if(fcnt>=fonts.length) fcnt=0;
    document.body.style.fontFamily=fonts[fcnt];
    console.log("Current FOnt : "+fonts[fcnt]);
    fcnt++;

  }


  return (
    <>
    <nav id="Navbar" className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid mx-2">
    <NavLink id="tab1" className="navbar-brand" to="/">SQL-Query</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink id="tab2" className="nav-link" to="/tables">Tables</NavLink>
        </li>
        <li className="nav-item">
          <NavLink id="tab3" className="nav-link" to="/docs">Documentation</NavLink>
        </li>
       
      </ul>
        <button className="btn btn-outline-primary me-3" onClick={changeTheme}>Theme</button>
        <button className="btn btn-outline-primary me-3" onClick={changeFont}>Font</button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header;