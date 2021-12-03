Vue.config.devtools = true;


const app = new Vue(
    {
        el: '#root',
        data: {
            currentActive: 0,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    image: 'img/05.jpg',
                    title: 'paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ],
            
            test: null
            
            
        },
        methods: {
            next: function() {
                if (this.currentActive < this.slides.length -1) {
                    this.currentActive++;
                }else{
                    this.currentActive = 0;
                }
            },
            previous: function() {
                if (this.currentActive > 0) {
                    this.currentActive--;
                }else{
                    this.currentActive = this.slides.length -1;
                }
            },
            selectImage: function(index){
                this.currentActive = index
            },
            autoScroller: function(){
                
                
                this.test = setInterval(() => {
                    if (this.currentActive < this.slides.length -1) {
                        this.currentActive++;
                    }else{
                        this.currentActive = 0;
                    }
                },3000);
                
                
            },
            stopScroller: function(){
                clearInterval(this.test)
            }
            
        },
        mounted(){
            this.autoScroller()
        },
        
        
    }
);

