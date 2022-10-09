const app = Vue.createApp({
    data(){
        return {
            number : 0
        };
    }, 
    computed:{
        result(){
            if(this.number<37){
                return 'not yet there';
            }else if(this.number === 37){
                return this.number;
            } else {
                return 'too much';
            }
        }

    },
    watch:{
result(){
    const that = this;
    setTimeout(function(){
        that.number = 0;
    }, 5000);
}
        
    
    },
    methods:{
        add(num){
            this.number = this.number + num;
        },
        resetInput(value){
            this.number = 0 ;
        }
        
    }
        
});

app.mount('#events');