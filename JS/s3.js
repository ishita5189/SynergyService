//choose
//buttchoose
//adding a hidden class prod-not-in-use when none of the number matches
const p_img_ele=document.querySelectorAll('.prods');
const p=document.getElementById("pt").dataset.btnNum;
const h=document.getElementById("ht").dataset.btnNum;
const a=document.getElementById("at").dataset.btnNum;
const p1=document.querySelector('#pt');
p1.addEventListener("click",(e)=>{
    const img_active=document.querySelectorAll(`.p-btn--${p}`);
     //hidding all first
     p_img_ele.forEach((curr)=>{curr.classList.add("prod-not-in-use");});
         //now showing the images which have the clicked button attribute
         img_active.forEach((curr)=>{curr.classList.remove("prod-not-in-use");});
});
const ht1=document.querySelector('#ht');
ht1.addEventListener("click",(e)=>{
    const img_active=document.querySelectorAll(`.p-btn--${h}`);
     //hidding all first
     p_img_ele.forEach((curr)=>{curr.classList.add("prod-not-in-use");});
         //now showing the images which have the clicked button attribute
         img_active.forEach((curr)=>{curr.classList.remove("prod-not-in-use");});
});
const at1=document.querySelector('#at');
at1.addEventListener("click",(e)=>{
    const img_active=document.querySelectorAll(`.p-btn--${a}`);
     //hidding all first
     p_img_ele.forEach((curr)=>{curr.classList.add("prod-not-in-use");});
         //now showing the images which have the clicked button attribute
         img_active.forEach((curr)=>{curr.classList.remove("prod-not-in-use");});
});