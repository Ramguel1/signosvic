let vdia=document.querySelector("#vdia");
let mes = document.querySelector("#mes");
let fecha = document.querySelector("#fecha");

let dia= document.querySelector("#dia");
let ima= document.querySelector("#ima");

 

dia.oninput=()=> dibujar();
mes.onchange=()=> dibujar();



const dibujar=()=>{
    let d=parseInt(dia.value)
    vdia.innerHTML=d;
   
   
    let mess=mes.value;
    
    
    fecha.innerHTML="<img src='si.gif' height=30px width>"
    setTimeout(()=>{
  
     fecha.textContent=d+" de "+mess;
      
      
  spinner.innerHTML=""
      
    },1000);

 

  if(d>=21 && mess=="Enero" || d<=19 && mess=="Febrero"){
ima.innerHTML="<img src='acua.jpeg' height=200px width=200px>"
  }
  else if(d>=20 && mess=="Febrero" || d<=20 && mess=="Marzo"){
    ima.innerHTML="<img src='pi.jpeg' height=200px width=200px>"
      }
      else if(d>=21 && mess=="Marzo" || d<=20 && mess=="Abril"){
        ima.innerHTML="<img src='ari.jpg'height=200px width=200px>"
          }
          else if(d>=21 && mess=="Abril" || d<=20 && mess=="Mayo"){
            ima.innerHTML="<img src='ta.jpg'height=200px width=200px>"
              }
              else  if(d>=21 && mess=="Mayo" || d<=20 && mess=="Junio"){
                ima.innerHTML="<img src='gem.jpeg'height=200px width=200px>"
                  }
                  else  if(d>=21 && mess=="Junio" || d<=22 && mess=="Julio"){
                    ima.innerHTML="<img src='can.webp'height=200px width=200px>"
                      }
                      else if(d>=23 && mess=="Julio" || d<=23 && mess=="Agosto"){
                        ima.innerHTML="<img src='leo.jpeg'height=200px width=200px>"
                          }
                          else  if(d>=24 && mess=="Agosto" || d<=22 && mess=="Septiembre"){
                            ima.innerHTML="<img src='vir.jpg'height=200px width=200px>"
                              }
                              else  if(d>=23 && mess=="Septiembre" || d<=23 && mess=="Octubre"){
                                ima.innerHTML="<img src='lib.jpeg'height=200px width=200px>"
                                  }
                                  else  if(d>=24 && mess=="Octubre" || d<=22 && mess=="Noviembre"){
                                    ima.innerHTML="<img src='esc.jpg'height=200px width=200px>"
                                      }
                                      else  if(d>=23 && mess=="Noviembre" || d<=21 && mess=="Diciembre"){
                                        ima.innerHTML="<img src='sag.jpg'height=200px width=200px>"
                                          }
                                          else  if(d>=22 && mess=="Diciembre" || d<=20 && mess=="Enero"){
                                            ima.innerHTML="<img src='cap.jpeg'height=200px width=200px>"
                                              }
                                              else{
                                                ima.innerHTML="<img src=''>"
                                              }
                                            
  
                                            ima.style.transform=" rotateY(-180deg)";
                                            ima.style.transition="all 0.5s linear";
                                            ima.style.transitionStyle="preserve-3d";
                                            ima.style.backfaceVisibility
                                          
                                            setTimeout(()=>{
                                              ima.style.transform=" rotateY(0deg)";
                                              ima.style.transition="all 0.5s linear";
                                          ima.src=ima
                                            },200)
  
}

