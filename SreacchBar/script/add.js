let searchImages= async( API, value) => {
   
    try{
        let res =await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=30&client_id=${API}`);
        let data = await res.json();
        //console.log(data);
        return data
    }catch(err){
        console.log(err);
    }
};



//let container=document.getElementById("container")

let append = (data, container) => {
    data.forEach(({alt_description, urls:{small} ,user:{name },likes }) =>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h1=document.createElement("h2");
        
         let p1=document.createElement("h4")
        
       

        let p=document.createElement("div")
        p.setAttribute("class", "pri")
        img.src=small;
        img.setAttribute("class", "img");
        h1.innerText=name;
        
         p1.innerText= `price: ${likes}`;
         p1.setAttribute("class", "h4")
        
        p.append(h1, p1)

        div.append(img,p);
        container.append(div);

    })
}

export {searchImages, append};