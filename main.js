const addItem = document.getElementById("btnAdd");
      addItem.addEventListener("click", function(){
         const boxItem = document.getElementById("boxItem").value++;
         const itemOneTotal = document.getElementById("itemOneTotal").innerText;
         const itemOne = parseFloat(itemOneTotal);
         const addItemOne = itemOne + 59;

       
         document.getElementById("itemOneTotal").innerText = addItemOne;

         const subTotal = document.getElementById("subTotal").innerText;
         const totalOne = parseFloat(subTotal);
         const totalValue = totalOne +  59;

         document.getElementById("subTotal").innerText = totalValue;
         document.getElementById("netTotal").innerText = totalValue;

   })

   
   const mninusItem = document.getElementById("btnMinus");
   mninusItem.addEventListener("click", function(){
            const boxItem = document.getElementById("boxItem")
            if(boxItem.value <=0 && minusValue <=0 ){
            boxItem.value = 0;
            minusValue = 0;
         }
         else{
            boxItem.value--;
         };
            const itemOneTotal = document.getElementById("itemOneTotal").innerText;
            const itemOne =  parseFloat(itemOneTotal);
            const minusItemOne = itemOneTotal - 59 ;
            

            document.getElementById("itemOneTotal").innerText = minusItemOne;

            const subTotal = document.getElementById("subTotal").innerText;
            const totalOne = parseFloat(subTotal);
            const minusValue = totalOne - 59  ;

            document.getElementById("subTotal").innerText = minusValue;
            document.getElementById("netTotal").innerText = minusValue;
      

         })
         
 



   //Item 1 Codes

      const btnAdd2 = document.getElementById("btnAdd2");
      btnAdd2.addEventListener("click", function(){
      const boxItem2 = document.getElementById("boxItem2").value++;
      const itemTwoTotal = document.getElementById("itemTwoTotal").innerText;
      const itemTwo = parseFloat(itemTwoTotal);
      const addItemTwo = itemTwo + 1219;

      document.getElementById("itemTwoTotal").innerText = addItemTwo;

         const subTotal = document.getElementById("subTotal").innerText;
         const totalOne = parseFloat(subTotal);
         const totalValue2 = totalOne +  1219;

         document.getElementById("subTotal").innerText = totalValue2;
         document.getElementById("netTotal").innerText = totalValue2;
   })

      const btnMinus2 = document.getElementById("btnMinus2");
      btnMinus2.addEventListener("click", function(){
      const boxItem2 = document.getElementById("boxItem2")
      if(boxItem2.value <=0 && minusValue2 <=0 ){
            boxItem2.value = 0;
            minusValue2 = 0;
         }
         else{
            boxItem2.value--;
         };
      const itemTwoTotal = document.getElementById("itemTwoTotal").innerText;
      const itemTwo = parseFloat(itemTwoTotal);
      const minusItemTwo = itemTwo - 1219;

      document.getElementById("itemTwoTotal").innerText = minusItemTwo;

         const subTotal = document.getElementById("subTotal").innerText;
         const totalOne = parseFloat(subTotal);
         const minusValue2 = totalOne -  1219;

         document.getElementById("subTotal").innerText = minusValue2;
         document.getElementById("netTotal").innerText = minusValue2;

   })

 

   //Remove

   const removeOne = document.getElementById("removeOne");
   removeOne.addEventListener("click", function(){

      const pordOnePrice = document.getElementById("itemOneTotal").innerText;
      const subTotal = document.getElementById("subTotal").innerText;
      const totalOne = parseFloat(subTotal);
      const valOne =  totalOne - pordOnePrice;

      document.getElementById("subTotal").innerText = valOne;
      document.getElementById("netTotal").innerText = valOne;

      const removeCarTwo = document.getElementById("cart1");
      removeCarTwo.style.display="none";

   })

   const removeTwo= document.getElementById("removeTwo");
   removeTwo.addEventListener("click", function(){

      const pordTwoPrice = document.getElementById("itemTwoTotal").innerText;
      const subTotal = document.getElementById("subTotal").innerText;
      const totalTwo = parseFloat(subTotal);
      const valTwo =  totalTwo - pordTwoPrice;

      document.getElementById("subTotal").innerText = valTwo;
      document.getElementById("netTotal").innerText = valTwo;

      const removeCarTwo = document.getElementById("cart2");
      removeCarTwo.style.display="none"  
   })