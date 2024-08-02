const cars=document.querySelector(".cars")



function getCar(){
    
    fetch(`https://664459266c6a6565870a0015.mockapi.io/all`)
    .then((res) =>{
    return res.json(); 
    })
     .then((data)=>{
data.forEach(el => {
    const block=document.createElement("div");
    block.classList.add("auto-block");


    const img=document.createElement("img");
    img.classList.add("img");
    img.src=`${el.image}`
    block.append(img);


const marka=document.createElement("h2");
marka.classList.add("marka");
marka.innerHTML=`marka : ${el.marka}`
block.append(marka);

const price=document.createElement("h2");
price.classList.add("price");
    price.innerHTML=`price : ${el.price}`
block.append(price);

const productName=document.createElement("h2");
productName.classList.add("productName");
productName.innerHTML=`productName : ${el.productName}`
block.append(productName);


const  productType=document.createElement("h2");
productType.classList.add("productType");
productType.innerHTML=`  ${el.productType}`
block.append( productType);


const quantity=document.createElement("h2");
quantity.classList.add("quantity");
quantity.innerHTML=` quantity : ${el.quantity}`
block.append( quantity);




cars.append(block);
console.log(data);
});
    })
    .catch((error) =>{
        console.log(error);
    })
}




getCar()