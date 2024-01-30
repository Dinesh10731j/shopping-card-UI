
const Title = document.querySelector("#title");
const Title2 = document.querySelector("#title2");
const Title3 = document.querySelector("#title3");
const Quantity = document.querySelector("#quantity");
const Quantity2 = document.querySelector("#quantity2");
const Quantity3 = document.querySelector("#quantity3")

const productPrice = document.querySelector("#price");
const imageThumbnail = document.querySelector("#imagethumbnail");
const productPrice2 = document.querySelector("#price2");
const productPrice3 = document.querySelector("#price3");

const imageThumbnail2 = document.querySelector("#imagethumbnail2");
const imageThumbnail3 = document.querySelector("#imagethumbnail3");
const priceProducts = document.querySelector("#price-products");
const discountD = document.querySelector("#discount-d");
const totalAmount= document.querySelector("#total-amount");
const chargeAmount = document.querySelector("#charge-amount");

console.log(parseInt(priceProducts.innerHTML)+1)





let Counter = 0;

const decreQtn = () =>{
if(Counter > 0){
  Quantity.innerHTML=  Counter--;
}
}

const increQtn = () =>{

    if(Counter <= 25){
        Quantity.innerHTML = Counter++;
    }

}


const decreQtn2 = () =>{
    if(Counter > 0){
      Quantity2.innerHTML=  Counter--;
    }
    }

    const increQtn2 = () =>{

        if(Counter <= 25){
            Quantity2.innerHTML = Counter++;
        }
    
    }
    
   
    const decreQtn3 = () =>{
        if(Counter > 0){
          Quantity3.innerHTML=  Counter--;
        }
        }
    
        const increQtn3 = () =>{
    
            if(Counter <= 25){
                Quantity3.innerHTML = Counter++;
            }
        
        }
        
       
    



const displayTitle = (title) => {
    
    Title.innerHTML = title;
}

const displayThumbnail = (thumbnail)=>{
    imageThumbnail.src =thumbnail;

}

const displayPrice = (price)=>{
    productPrice.innerHTML =`$${price}`
}


const displayTitle2 = (title) => {
    
    Title2.innerHTML = title;
}

const displayThumbnail2 = (thumbnail)=>{
    imageThumbnail2.src =thumbnail;

}

const displayPrice2 = (price)=>{
    productPrice2.innerHTML =`$${price}`
}


const displayTitle3 = (title) => {
    
    Title3.innerHTML = title;
}

const displayThumbnail3 = (thumbnail)=>{
    imageThumbnail3.src =thumbnail;

}

const displayPrice3 = (price)=>{
    productPrice3.innerHTML =`$${price}`
}







const getUserData = async () => {
    const Url = "https://dummyjson.com/carts";
    const data = await fetch(Url);
    const response = await data.json();

    displayTitle(
        response.carts[0].products[0].title
        );

        displayThumbnail(response.carts[0].products[0].thumbnail);


        displayPrice(response.carts[0].products[0].price);

        

        displayTitle2(
            response.carts[0].products[2].title
            );
    
            displayThumbnail2(response.carts[0].products[2].thumbnail);
    
    
            displayPrice2(response.carts[0].products[2].price);



            displayTitle3(
                response.carts[0].products[4].title
                );
        
                displayThumbnail3(response.carts[0].products[4].thumbnail);
        
        
                displayPrice3(response.carts[0].products[4].price);
}

//initial call
getUserData()