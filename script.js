function addNewWEField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

function generateCV(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;

    let contactField=document.getElementById('contactField').value;
    document.getElementById('contactT').innerHTML=contactField;

    let addressField=document.getElementById('addressField').value;
    document.getElementById('addressT').innerHTML=addressField;

    let fbField=document.getElementById('fbField').value;
    document.getElementById('fbT').innerHTML=fbField;

    let instaField=document.getElementById('instaField').value;
    document.getElementById('instaT').innerHTML=instaField;

    let linkedField=document.getElementById('linkedField').value;
    document.getElementById('linkedT').innerHTML=linkedField;

    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    //we

    let wes=document.getElementsByClassName('weField');
    let str1="";

    for(let e of wes){
        str1=str1+`<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML=str1;

    //aq

    let aqs=document.getElementsByClassName('aqField');
    let str2="";

    for(let a of aqs){
        str2=str2+`<li> ${a.value} </li>`;
    }

    document.getElementById('aqT').innerHTML=str2;

    let file=document.getElementById('imgField').files[0];
    console.log(file);

    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    }

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

}

function printCV(){
    window.print();
}