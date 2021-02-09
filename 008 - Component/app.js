window.addEventListener('load',()=>{
    Vue.component('hello',{
        template:'<h1 v-on:click="sayHello()">Hello Component</h1>',
        methods:{
            sayHello(){
                console.log("Hello world!");
            }
        }
    })

    window.vue=new Vue({
        el:'#app'

    })
})