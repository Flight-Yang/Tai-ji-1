let html = document.querySelector("#demo");
let style = document.querySelector("#style");

let string= `/*你好，我是Flight yang,是一名前端新人
 *接下来我演示下前端功底
 *首先我要准备一个div
 */
#div1{
    border:1px solid red;
    width:200px;
    height:200px;

}
/*接下来我把 div 变成一个八卦圆
 *注意看好了
 *首先，把 div 变成一个圆
 */
#div1{
    border-radius:50%;
    /*加一个阴影*/
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
 *一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*在加上两个风火轮*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

`;

let string2="";
let n = 0;



let step = ()=>{
    setTimeout(()=>{
        if(string[n] === '\n'){
            //如果是回车，就不照搬，换成换成换行符
            string2 += '<br>';
        }else if(string[n] === ' '){
            //如果是空格，就还是空格
            string2 += '&nbsp';
        }else{
            //如果不是回车，就照搬
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if(n<string.length-1){
            //如果n不是最后一个就继续
            n +=1;
            console.log(n);
            step();
        };
    },10);
};


step();


