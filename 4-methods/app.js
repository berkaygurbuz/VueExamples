window.addEventListener('load',()=>{
    window.vue=new Vue({
        el:'#app',
        data:{
            message:'Hello World!'
        },
        methods:{
            reverseMessage(){
                this.message=this.message
                .split("")
                .reverse()
                .join("");
            }
        }

    })

})