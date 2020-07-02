let app=new Vue(
{
	el:'#app',
	data :{
		checkedBooks: [],
		bookIsEmpty:'购物车为空',
		books:[
			{id:1,price:80,tdate:'2020-07-01',count:1,name:'java从入门到放弃'},
			{id:2,price:90,tdate:'2020-07-02',count:1,name:'Vue从入门到放弃'},
			{id:3,price:100.01,tdate:'2020-07-03',count:1,name:'mysql从入门到放弃'},
			{id:4,price:70.00,tdate:'2020-07-04',count:1,name:'什么从入门到放弃'},
			]
	},
	computed:{
		total:function(){
			return this.books.reduce((returnVal,nextItem)=>returnVal+nextItem.price*nextItem.count,0)
		},	
	},
	methods:{
		add:function(item,$event){			
			item.count++;			
		},
		minus:function(item,$event){
			item.count--;
		},
		remove:function(index){
			this.books.splice(index,1)
		}
		
	},
	filters: {
		formatPrice: price =>'¥'+ price.toFixed(2)
	}
})




