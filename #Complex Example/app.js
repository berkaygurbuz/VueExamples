var app=new Vue({
    el:'#app',
    data:{
        product:'Socks',
        brand:'Jack & Jones',
        selectedVariant:0,
        cart:0,
        details:['%80 cotton','%20 polyster','Gender-neutral'],
        variants:[{
            variantId:1233,
            variantColor:'green',
            variantImage:'./images/vmSocks-green.jpg',
            variantQuantity:10
        },
        {
            variantId:3124,
            variantColor:'blue',
            variantImage:'./images/vmSocks-blue.jpg',
            variantQuantity:0
            
        }        
    ],
    },
    methods:{
        addToCart(){
            this.cart+=1;
        },
        updateProduct(index){
            this.selectedVariant=index;
        }
    },
    computed:{
        title(){
            return this.brand+' '+this.product;
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
})