

function ajax(){
        let lt=[],ln=[];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){     
      if(this.readyState==4&&this.status==200){        
        var response = JSON.parse(this.responseText);          
        for(var i=0;i<20;i++){                  
        if(response[i].population>=2302){                     
         lt[i]=response[i].latlng[0]   
         ln[i]=response[i].latlng[1]    
         
        }   
              }
              for(var i=0;i<20;i++){  
                if(lt[i]==undefined || ln[i]==undefined)    {
                  lt[i]=0;
                  ln[i]=0
                }
              }
              let sum=0;
              for(var j=0;j<20;j++){  
                for(var k=0;k<20;k++){  
                  if(j!=k){
                    dlong = Math.abs(ln[j] - ln[k])
                    dlat =  Math.abs(lt[j] - lt[k])
                    ans = Math.pow(Math.sin(dlat / 2), 2) +
                    Math.cos(lt[j]) * Math.cos(lt[k]) *
                    Math.pow(Math.sin(dlong / 2), 2);
                    R = 6371; 
                    console.log(ans)                  
                    ans = ans * R
                    console.log(ans)
                     sum += ans;
                    console.log(sum)
                  }
                  else{
                    continue
                  }
                }
              }
                            
              document.getElementById("demo").innerHTML += "Latitudes for first 20 Contries with Population less than given value </br></br>";  
      for(var i=0;i<20;i++){ 
        document.getElementById("demo").innerHTML += lt[i] +", ";  
      }
        document.getElementById("demo").innerHTML += "</br></br> Longitudes for first 20 Contries with Population less than given value </br></br>";  
        for(var i=0;i<20;i++){ 
        document.getElementById("demo").innerHTML += ln[i] +","; 
      }

      document.getElementById("demo").innerHTML +="</br></br></br> Distance between Earth points of first 20 countries with population less than given value is = "+ sum;
        //document.getElementById("demo").innerHTML=lat;
        console.log(Array.isArray(lt));        
      }
    }
    xhttp.open("GET","https://cdn.jsdelivr.net/gh/apilayer/restcountries@3dc0fb110cd97bce9ddf27b3e8e1f7fbe115dc3c/src/main/resources/countriesV2.json",true);
    xhttp.send();    
}

      
      
        
        
   
    
    
      