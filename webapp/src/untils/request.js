const headers=new Headers({
    "Accept":"application/json",
    "Content-Type":"application/json",
});

const handleResponse=(url,response)=>{
    if(response.status===200){
        return response.json();
    }else{
        console.error(`Response failed .Url=${url}`);
        return Promise.reject({error:{message:'Response failed due to server error'}});
    }
}

export const get=(url)=>{
    return fetch(url,{
        method:'GET',
        headers:headers,
    }).then(response=>{
        handleResponse(url,response);
    }).catch(error=>{
        console.error(`Response failed. Url=${url}. Message=${error}`);
        return Promise.reject({error:{message:'Response failed'}});
    })
}

export const  post=(url,data)=>{
    return fetch(url,{
        method:'POST',
        headers:headers,
        body:data,
    }).then(response=>{
        handleResponse(url,response);
    }).catch(error=>{
        console.error(`Response failed. Url=${url}. Message=${error}`);
        return Promise.reject({error:{message:'Response failed'}});
    })
}

