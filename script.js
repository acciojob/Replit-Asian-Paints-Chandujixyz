//your JS code here. If required.
           const change=document.getElementById("change_button");
            change.addEventListener("click",fun);
            
            function fun(){
                const N=document.getElementById("block_id").value;
                const color=document.getElementById("color_id").value;           
              if(N>=1 && N<=9){
                //yaha vala hissa karta ye ha ki agar pichhli bar kisi box ko colar diya gya hoga to 
                //usko transperent kar dega uske bad naye box me color aayega;
                const item=document.querySelectorAll(".grid-item");
                item.forEach(e=>{
                    e.style.backgroundColor="transparent";
                })
              }else{
                alert("plese select the box no in b/w 1-9")
              }

               // aur ye hissa box ko color deta ha 
                 const selectedItem=document.getElementById(`item-${N}`);//iska id badalta rehta ha N ke hisab se
                 selectedItem.style.backgroundColor=color;

            }
             
            // ab reset button ko jan de dete ha
            const reset=document.getElementById("Reset");
            reset.addEventListener("click",()=>{
             document.querySelectorAll(".grid-item").forEach(item=>{
                item.style.backgroundColor="transparent";
             })

             document.getElementById("block_id").value='';
             document.getElementById("color_id").value='';

            })