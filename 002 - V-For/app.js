window.addEventListener('load',()=>{
    window.vue = new Vue({
        el:'#app',
        data:{
            profile:[
                {id:1,name:"Berkay Gürbüz",location:"Turkey"},
                {id:2,name:"Mike Tyson",location:"USA"},
                {id:3,name:"Emir Taha",location:"England"},
            ]
        }

    })
})