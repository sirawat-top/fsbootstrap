function filter(){
    
    var filterValue, input, pro,card,h5,p,i;
     input = document.getElementById("search");
     filterValue = input.value.toUpperCase();
     pro = document.getElementById("pro");
     card = pro.getElementsByClassName("card")
        
        for (i = 0 ; i < card.length ; i++){
            h5 = card[i].getElementsByTagName("h5")[0];
            p=card[i].getElementsByTagName("p")[0];
            if(h5.innerHTML.toUpperCase().indexOf(filterValue) > -1||p.innerHTML.toUpperCase().indexOf(filterValue)>-1){
                card[i].style.display = "";
                
            }else{
                card[i].style.display = "none";
            }
        }
    }