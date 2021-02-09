window.addEventListener('load',()=>{
    window.vue=new Vue({
        el:'#app',
        data:{
            counter:0
        },
        methods:{
            HelloVue(){
                alert("Hello Vue!");
            }
        }

    })

})