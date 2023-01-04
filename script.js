let xhr = new XMLHttpRequest();
xhr.open("GET","/data.json");
xhr.send();
list=[];
list2=[];
list5=[];
list6=[];

xhr.onload = () => {
    storeData = JSON.parse(xhr.responseText).Stores;
    //console.log(xhr.response);


    search = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        if (list5!=null){
            for (let p of list5){
                p.remove();
            }
        }

        var m = document.getElementById("search").value;
        console.log(m);
        if(storeData) {
            for(const {pic,title,brand,price} of storeData) {
                if (m == brand || m == title){
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <div class="details"><p class="name3" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button>`);
                    list5.push(Data);
                }
                
            }

        }
        
    }
    var selected = document.getElementsByClassName("product-type")[0].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,category,processor,price} of storeData) {
            if (selected == category){
                const Data = content.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button>`);
                list.push(Data);
            }
            
        }
    }

    
    
    var selected = document.getElementsByClassName("product-type")[1].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,price,category} of storeData) {
            if (selected == category){
                const Data = content2.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button>`);
                list.push(Data);
            }
            
        }
    }
    var selected = document.getElementsByClassName("product-type")[2].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,price,category} of storeData) {
            if (selected == category){
                const Data = content3.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button>`);
                list.push(Data);
            }
            
        }
    }
    var selected = document.getElementsByClassName("product-type")[3].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,price,category} of storeData) {
            if (selected == category){
                const Data = content4.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button>`);
                list.push(Data);
            }
            
        }
    }
    var selected = document.getElementsByClassName("product-type")[4].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,price,category} of storeData) {
            if (selected == category){
                const Data = content5.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button>`);
                list.push(Data);
            }
            
        }
    }
    var selected = document.getElementsByClassName("product-type")[5].id;
    console.log(selected);
    if(storeData) {
        for(const {pic,title,price,category} of storeData) {
            if (selected == category){
                const Data = content6.appendChild(document.createElement('div'));
                Data.className='show-data';
                Data.innerHTML=(`<img class="pic" src="${pic}"> <p class="name" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button>`);
                list.push(Data);
            }
            
        }
    }
    selection1 = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        if (list5!=null){
            for (let p of list5){
                p.remove();
            }
        }
        storeData = JSON.parse(xhr.responseText).Stores;
        if(storeData) {
            for(const {pic,title,price,brand} of storeData) {
                if (brand == "asus"){
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <div class="details"><p class="name3" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button></div>`);
                    list2.push(Data);
                }
                
            }
        }
    }
    selection2 = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        if (list5!=null){
            for (let p of list5){
                p.remove();
            }
        }
        storeData = JSON.parse(xhr.responseText).Stores;
        if(storeData) {
            for(const {pic,title,price,brand} of storeData) {
                if (brand == "dell"){             
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <div class="details"><p class="name3" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button></div>`);
                    list2.push(Data);
                }
                
            }
        }
    }
    selection3 = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        if (list5!=null){
            for (let p of list5){
                p.remove();
            }
        }
        if(storeData) {
            for(const {pic,title,price,brand} of storeData) {
                if (brand == "hp"){
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <div class="details"><p class="name3" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button></div>`);
                    list2.push(Data);
                }
                
            }
        }
    }
    selection4 = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        if (list5!=null){
            for (let p of list5){
                p.remove();
            }
        }
        if(storeData) {
            for(const {pic,title,price,brand} of storeData) {
                if (brand == "acer"){
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <div class="details"><p class="name3" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button></div>`);
                    list2.push(Data);
                }
                
            }
        }
    }
    selection5 = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
        }
        if (list5!=null){
            for (let p of list5){
                p.remove();
            }
        }
        if(storeData) {
            for(const {pic,title,price,brand} of storeData) {
                if (brand == "apple"){
                    const Data = display1.appendChild(document.createElement('div'));
                    Data.className='show-data2';
                    Data.innerHTML=(`<img class="pic" src="${pic}"> <div class="details"><p class="name3" >${title}</p> <p><span>₹</span><span>${price}</span></p> <button>Add to Cart</button></div>`);
                    list2.push(Data);
                }
                
            }
        }
    }
    selection = () =>{
        if (list2!=null){
            for (let p of list2){
                p.remove();
            }
       }
       if (list5!=null){
        for (let p of list5){
            p.remove();
        }
    }
    }   
}

