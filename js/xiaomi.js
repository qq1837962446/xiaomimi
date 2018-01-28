//家电
{
    let fon1 = document.querySelectorAll(".fon .wenzi1");
    let lift1 = document.querySelectorAll(".lift");
    fon1.forEach(function (val, index) {
        val.onclick = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("lift")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("lift")
        }
    });
}
//智能
{
    let fon1 = document.querySelectorAll(".zhineng .wenzi1");
    let lift1 = document.querySelectorAll(".zhineng1");
    fon1.forEach(function (val, index) {
        val.onclick = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("zhineng1")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("zhineng1")
        }
    });
}
//搭配
{
    let fon1 = document.querySelectorAll(".dapei .wenzi1");
    let lift1 = document.querySelectorAll(".dapeiwo");
    fon1.forEach(function (val, index) {
        val.onclick = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("dapeiwo")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("dapeiwo")
        }
    });
}
//配件
{
    let fon1 = document.querySelectorAll(".peijianni .wenzi1");
    let lift1 = document.querySelectorAll(".peijiannin");
    fon1.forEach(function (val, index) {
        val.onclick = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("peijiannin")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("peijiannin")
        }
    });
}
//周边
{
    let fon1 = document.querySelectorAll(".zhoubian3 .wenzi1");
    let lift1 = document.querySelectorAll(".zhoubian3");
    fon1.forEach(function (val, index) {
        val.onclick = function () {
            fon1.forEach(function (value, dom) {
                value.classList.remove("wenzi3");
                lift1[dom].classList.remove("zhoubian3")
            });
            val.classList.add("wenzi3");
            lift1[index].classList.add("zhoubian3")
        }
    });
}
//banner
{
    let ban=document.querySelectorAll(".banner-img ul");
    let ban1=document.querySelector(".banner");
    let n=0;
    let dom=function () {
        n++;
        if(n ===ban.length){
            n=0;
        }
        ban.forEach(function (value,index) {
            value.classList.remove("active")
        });
        ban[n].classList.add("active")
    };
    let sj=setInterval(dom,2000);
    ban1.onmouseover=function () {
        clearInterval(sj)
    };
    ban1.onmouseout=function () {
        sj=setInterval(dom,2000);
    };
    let left1=document.querySelector(".left");
    let right1=document.querySelector(".right");
    left1.onclick=function () {
        n--;
        if(n ==-1){
            n = ban.length-1;
        }
        ban.forEach(function (value,index) {
            value.classList.remove("active")
        });
        ban[n].classList.add("active")
    };
    right1.onclick=function () {
        dom()
    }
}
