const next=document.querySelector('.next');
const preview=document.querySelector('.prev');
const tanya=document.querySelector('.tanya');
const john=document.querySelector('.john');
const text1=document.querySelector('.text');
const text2=document.querySelector('.text2');
const author=document.querySelector('.author');
const author2=document.querySelector('.author2');

next.addEventListener("click",()=>{
    tanya.style.display="none";
    text1.style.display="none";
    author.style.display="none";

    john.style.display="block";
    text2.style.display="block";
    author2.style.display="block";
})

preview.addEventListener("click",()=>{
    tanya.style.display="block";
    text1.style.display="block";
    author.style.display="block";

    john.style.display="none";
    text2.style.display="none";
    author2.style.display="none";
})