getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET',"/5.json")
    request.onreadystatechange =()=>{
        if(request.readyState===4 && request.status ===200){
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name

        }
    };
    request.send()
};
getXML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', "/4.xml")
    request.onreadystatechange = () =>{
        if(request.readyState ===4 && request.status ===200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
            
        }
    };
    request.send()
};


getHTML.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open('GET',"/3.html")
    request.onload =() =>{
        // 创建 html 标签
        const div = document.createElement('div')
        // 填写 html 内容
        div.innerHTML=request.response
        // 插到身体里
        document.body.appendChild(div)
    };
    request.onerror =()=>{
        console.log("失败了");
    }
    request.send(); 
};
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js');
    request.onload = ()=>{
        console.log(request.response)
        // 创建 js 标签
        const script =document.createElement('js')
        // 填写 js 内容
        script.innerHTML = request.response
        // 插到头里面
        document.head.appendChild(script)
    };
    request.onerror =() =>{
        console.log("失败了");
    };
    request.send(); 
}

getCSS.onclick = ()=>{
    const request =new XMLHttpRequest()
    request.open('GET', '/style.css');
    request.onload = ()=>{
    console.log('request.response')
    console.log(request.response)

    // 创建style标签
    const style = document.createElement('style')
    // 填写 style 内容
    style.innerHTML = request.response
    // 插到头里面
    document.head.appendChild(style)
};
request.onerror =() =>{
    console.log("失败了");
};
request.send();
};

