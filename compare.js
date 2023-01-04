let xhr = new XMLHttpRequest();
xhr.open("GET","/data.json");
xhr.send();
list6=[];

xhr.onload = () => {
    storeData = JSON.parse(xhr.responseText).Stores;

    ValidateBrandSelection = () =>{
        if (list6!=null){
            for (let p of list6){
                p.remove();
            }
        }

        if(storeData) {
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                    var lapBrand = document.getElementById('f1').children;
                    for(i=0;i<lapBrand.length;i++){
                        if(lapBrand[i].checked && lapBrand[i].name == model){   
    
                                const lapData = space1.appendChild(document.createElement('div'));
                                  lapData.className='Lap-Data';
        
                                lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                        <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                        <p class="name2">${graphics}</p>`);
                                list6.push(lapData);
                            
                    }
                    
                }
                
            }
            

            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f2').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            console.log(list6.length);
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f3').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f4').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f5').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f6').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f7').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f8').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f9').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f10').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f11').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f12').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f13').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f14').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }
            for(const {pic,title,category,price,model,RAM,processor,battery,storage,graphics} of storeData) {
                var lapBrand = document.getElementById('f15').children;
                for(i=0;i<lapBrand.length;i++){
                    if(lapBrand[i].checked && lapBrand[i].name == model){   

                            const lapData = space1.appendChild(document.createElement('div'));
                              lapData.className='Lap-Data';
    
                            lapData.innerHTML=(`<img class="pic2" src="${pic}"> <p class="name2" >${title}</p> <p class="name2" >${model}</p> <p class="name2"><span>₹</span><span>${price}</span></p>
                                                    <p class="name2">${RAM}</p><p class="name2">${processor}</p><p class="name2">${battery}</p> <p class="name2">${category}</p> <p class="name2">${storage}</p>
                                                    <p class="name2">${graphics}</p>`);
                            list6.push(lapData);
                        
                    }   
                
                }
            
            }

             
        }
    }
    

}