Vue.component('product',{
    props:{
        premium:{
            type:Boolean,
            required:true
        }
    },
    template:` 
    <div class="product">
            
    <div class="product-image">
        <img :src="image"/>
    </div>

    <div class="product-info">
        <h2>{{title}}</h2>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock!</p>
        <p>Shipping : {{shipping}} </p>


        <ul>
            <li  v-for="detail in details">
                {{detail}}
            </li>
        </ul>

        <div class="color-box" 
        v-for="(variant,index) in variants" 
        :key="variant.variantId"
        :style="{backgroundColor:variant.variantColor}"
        @mouseover="updateProduct(index)">
        
        </div>

        <button v-on:click="addToCart"
        :disabled="!inStock"
        :class="{disabledButton:!inStock}"
        >Add to cart</button>


        <div>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul v-else>
            <li v-for="(review, index) in reviews" :key="index">
              <p>{{ review.name }}</p>
              <p>Rating:{{ review.rating }}</p>
              <p>{{ review.review }}</p>
            </li>
        </ul>
    </div>
        <product-review @review-submitted="addReview"> </product-review>

    </div>

</div>
    `,
    data(){
        return {
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
        reviews:[],
        }
    }, methods:{
        addToCart(){
            this.$emit('add-to-cart',
            this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index){
            this.selectedVariant=index;
        },
        addReview(productReview){
            this.reviews.push(productReview);
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
        },
        shipping(){
            if(this.premium){
                return "Free";
            }
            else{
                return "$ 2.99";
            }
        }
    }
});

Vue.component('product-review',{
    template:`
    <form class="review-form" @submit.prevent="onSubmit">

    <p class="error" v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name">
        </p>
        
        <p>
          <label for="review">Review:</label>      
          <textarea id="review" v-model="review"></textarea>
        </p>
        
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>
            
        <p>
          <input type="submit" value="Submit">  
        </p>    
    </form>
    
    `,
    data(){
        return {
            name:null,
            review:null,
            rating:null,
            errors:[]
        }
    },
    methods:{
        onSubmit(){
            this.errors=[];
            if(this.name && this.review && this.rating){
                let productReview={
                    name:this.name,
                    review:this.review,
                    rating:this.rating,
                }
                this.$emit('review-submitted',productReview)
                this.name=null;
                this.review=null;
                this.rating=null;
            }else{
                if(!this.name) this.errors.push("Name required.");
                if(!this.review) this.errors.push("Review required.");
                if(!this.rating) this.errors.push("Rating required.");
            }
        }
    }

})

var app=new Vue({
    el:'#app',
    data:{
        premium:true,
        cart:[],
    },
    methods:{
        updateCart(id){
            this.cart.push(id);
        }
    }
})