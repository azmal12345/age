const formButton = document.getElementById("button");


formButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    let result = document.querySelectorAll(".result");

    result.forEach( (elementShow) => {
        let formText = document.getElementById("text").value;
        elementShow.innerHTML = formText;
    })
    // result.innerHTML =  formText;

    // img function start 
    imgFunction();
    imgFunction2();
    imgFunction3();
    imgFunction4();
    imgFunction5();
    imgFunction6();
    // img function end 
})

// imgae object start 
let imgObj = [
    {id  : 0, img : "imgList1/babayChild1.jpg.jpg"} ,
    {id  : 1, img : "imgList1/babayChild2.jpg.jpg"} ,
    {id  : 2, img : "imgList1/babayChild3.jpg.jpg"} ,
    {id  : 3, img : "imgList1/babayChild4.jpg.jpg"} ,
    {id  : 4, img : "imgList1/babayChild5.jpg.jpg"} ,
    {id  : 5, img : "imgList1/babayChild6.jpg.jpg"} 
];

let imgObj2 = [
    {id : 0, img : "imgList2/children10year1.jpg.jpg"},
    {id : 1, img : "imgList2/children10year2.jpg.jpg"},
    {id : 2, img : "imgList2/children10year3.jpg.jpg"},
    {id : 3, img : "imgList2/children10year4.jpg.jpg"},
    {id : 4, img : "imgList2/children10year5.jpg.jpg"},
    {id : 5, img : "imgList2/children10year6.jpg.jpg"},
    {id : 6, img : "imgList2/children10year7.jpg.jpg"},
    {id : 7, img : "imgList2/children10year8.jpg.jpg"}
];

let imgObj3 = [
    {id : 0, img : "imgList3/childBoy1.jpg.jpg"},
    {id : 1, img : "imgList3/childBoy2.jpg.jpg"},
    {id : 2, img : "imgList3/childBoy3.jpg.jpg"},
    {id : 3, img : "imgList3/childBoy4.jpg.jpg"},
    {id : 4, img : "imgList3/childBoy5.jpg.jpg"},
    {id : 5, img : "imgList3/childBoy6.jpg.jpg"},
    {id : 6, img : "imgList3/childBoy7.jpg.jpg"},
    {id : 7, img : "imgList3/childBoy8.jpg.jpg"},
    {id : 7, img : "imgList3/childBoy9.jpg.jpg"}
]

let imgObj4 = [
    {id : 0, img : "imgList4/youngBoy1.jpg.jpg"},
    {id : 1, img : "imgList4/youngBoy2.jpg.jpg"},
    {id : 2, img : "imgList4/youngBoy3.jpg.jpg"},
    {id : 3, img : "imgList4/youngBoy4.jpg.jpg"},
    {id : 4, img : "imgList4/youngBoy5.jpg.jpg"},
    {id : 5, img : "imgList4/youngBoy6.jpg.jpg"},
    {id : 6, img : "imgList4/youngBoy7.jpg.jpg"}
]

let imgObj5 = [
    {id : 0, img : "imgList5/oldYoung1.jpg.jpg"},
    {id : 1, img : "imgList5/oldYoung2.jpg.jpg"},
    {id : 2, img : "imgList5/oldYoung3.jpg.jpg"},
    {id : 3, img : "imgList5/oldYoung4.jpg.jpg"},
    {id : 4, img : "imgList5/oldYoung5.jpg.jpg"},
    {id : 5, img : "imgList5/oldYoung6.jpg.jpg"},
    {id : 6, img : "imgList5/oldYoung7.jpg.jpg"},
    {id : 7, img : "imgList5/oldYoung8.jpeg.jpeg"}
]

let imgObj6 = [
    {id : 0, img : "imgList6/old1.jpg.jpg"},
    {id : 1, img : "imgList6/old2.jpg.jpg"},
    {id : 2, img : "imgList6/old3.jpg.jpg"},
    {id : 3, img : "imgList6/old4.jpg.jpg"},
    {id : 4, img : "imgList6/old5.jpg.jpg"},
    {id : 5, img : "imgList6/old6.jpg.jpg"}
]



// Image Object end 
let index = Math.floor(Math.random() * imgObj.length);
let index2 = Math.floor(Math.random() * imgObj2.length);
let index3 = Math.floor(Math.random() * imgObj3.length);
let index4 = Math.floor(Math.random() * imgObj4.length);
let index5 = Math.floor(Math.random() * imgObj5.length);
let index6 = Math.floor(Math.random() * imgObj6.length);

// index end 


const imgShow = document.getElementById("imgList1");
const imgShow2 = document.getElementById("imgList2");
const imgShow3 = document.getElementById("imgList3");
const imgShow4 = document.getElementById("imgList4");
const imgShow5 = document.getElementById("imgList5");
const imgShow6 = document.getElementById("imgList6");


const imgFunction = () => {
    let itemList = imgObj[index];
    imgShow.src = itemList.img;
    imgShow.style.height = "170px";
    imgShow.style.border = "2px solid rgb(0,0,0)";
}

const imgFunction2 = () => {
    let itemList1 = imgObj2[index2];
    imgShow2.src = itemList1.img;
    imgShow2.style.height = "170px";
    imgShow2.style.border = "2px solid rgb(0,0,0)";
}

const imgFunction3 = () => {
    let itemList3 = imgObj3[index3];
    imgShow3.src = itemList3.img;
    imgShow3.style.height = "170px";
    imgShow3.style.border = "2px solid rgb(0,0,0)";
}

const imgFunction4 = () => {
    let itemList4 = imgObj4[index4];
    imgShow4.src = itemList4.img;
    imgShow4.style.height = "170px";
    imgShow4.style.border = "2px solid rgb(0,0,0)";
}

const imgFunction5 = () => {
    let itemList5 = imgObj5[index5];
    imgShow5.src = itemList5.img;
    imgShow5.style.height = "170px";
    imgShow5.style.border = "2px solid rgb(0,0,0)";
}

const imgFunction6 = () => {
    let itemList6 = imgObj6[index6];
    imgShow6.src = itemList6.img;
    imgShow6.style.height = "170px";
    imgShow6.style.border = "2px solid rgb(0,0,0)";
}











