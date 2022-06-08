let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/*你好,我是一名前端新人泽帅
*接下来我要展示一下我前端功底
*首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/** 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先把 div 变成一个圆
 **/
#div1{
    border-radius : 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border : none;
}
/** 八卦是阴阳形成的
 *  分别代表一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/** 接下来我将融入两个神秘的能量球
 **/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius: 50%;
}
`; 
let n = -1     
console.log(string.length)  
let string2 = ''       //定义一个新字符串
let step = ()=>{
    setTimeout(()=>{
        n = n + 1
        console.log(string[n])
        if(string[n] === '\n'){       
            string2 += '<br>'
        }else if(string[n] ===' '){
            string2 += '&nbsp'         
        }
        else { string2 += string[n]  }
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,9999)
        html.scrollTo(0,9999)
        n+1<string.length ? step() :{}    
    },0)
}
step()  //执行


