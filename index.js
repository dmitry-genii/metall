const headBurger = document.querySelector('.Head__burger');
const headBurgerItem = document.querySelectorAll('.Head__burger-item');
const headListHead = document.querySelector('.Head__listHead')
headBurger.addEventListener('click', function(){
	if(headListHead.style.display === ""){
		headBurger.style.marginTop="10px";
		headBurger.style.marginLeft="5px";
		headBurgerItem[0].style.animation = '0.5s burgerItem forwards'; 
		headBurgerItem[1].style.animation = '0.5s burgerItem forwards'; 
		headBurgerItem[2].style.animation = '0.5s burgerThrid forwards'; 
		headListHead.style.display="block";
	}else{
		headBurgerItem[0].style.animation = ' 0.5s burgerItemRev forwards '; 
		headBurgerItem[1].style.animation = ' 0.5s burgerItemRev forwards'; 
		headBurgerItem[2].style.animation = ' 0.5s burgerThridRev forwards'; 
		headListHead.style.display = "";
		headBurger.style.marginTop="";
		headBurger.style.marginLeft="";
	}
	
})

let btnToBasket = document.querySelectorAll(".popularBlock__catalog_prices-block");
for(let i =0 ; i <btnToBasket.length; i++){
	btnToBasket[i].addEventListener('dblclick', function(){
		location.href='pageBasket/Корзина.html'
			
})
}

let btnToCatalog = document.querySelector(".Head__listHead__menu-items_label");

btnToCatalog.addEventListener('dblclick', function(){
	location.href='catalog/index.html'
})

let Block = document.querySelector('html');

let bottomLine = document.querySelector('.popularBlock__bottom-line')
let bottomLineActive = document.querySelector('.popularBlock__bottom-line-active')

/*bottomLine.addEventListener('mousemove', function(){
	//bottomLineActive.addEventListener('mouseover', function(){
		let ger = event.clientX;
		
		bottomLineActive.style.marginLeft= ger/20 + '%';
		if(bottomLineActive.style.marginLeft.slice(0,2) < 12  || bottomLineActive.style.marginLeft.slice(0,2) < 13 || bottomLineActive.style.marginLeft.slice(0,2) < 14){
			bottomLineActive.style.marginLeft = '';
		}
	//})
	

	if(ger >= 618){
		bottomLineActive.style.marginLeft= 580+ 'px';
	}
	if(ger <= 265){
		bottomLineActive.style.marginLeft= '';
	}
})*/


let BlockHeadFirst = document.querySelector('.Head__banner_all_head');
let headerAll = document.querySelector('.Head');
let menuCatalog = document.querySelectorAll("#menu_catalog");
let menuCatalogItems = document.querySelectorAll("#menu_catalog_items");
let menuLists = document.querySelectorAll('.Head__listHead__menu-items');

menuCatalog[0].addEventListener("click", function(){
	if(menuCatalogItems[0].style.display === ''){
		menuCatalogItems[0].style.display = 'block';

	}else{
		menuCatalogItems[0].style.display = '';
	}
})

menuCatalog[1].addEventListener("click", function(){
	if(menuCatalogItems[1].style.display === ''){
		menuCatalogItems[1].style.display = 'block';
		return
	}else{
		menuCatalogItems[1].style.display = '';
		return
		
	}
})
menuCatalog[0].addEventListener("dblclick", function(){console.log(123)})
menuCatalog[1].addEventListener("dblclick", function(){console.log(123)})

/*
BlockHeadFirst.addEventListener('click' , function(){
		menuCatalogItems[1].style.display = '';
		regions.style.display = '';
		menuCatalogItems[0].style.display = '';
})*/
	



menuLists.forEach(function(list){
	if(list !== menuLists[0] && list !== menuLists[1]){
		list.addEventListener("click", function(){
			menuCatalogItems[0].style.display='';
			menuCatalogItems[1].style.display='';
		})
	}
	list.addEventListener("click", function(){
		if(list === menuLists[0]){
			menuCatalogItems[1].style.display = '';
			regions.style.display = '';
		}
		if(list === menuLists[1]){
			menuCatalogItems[0].style.display = '';
			regions.style.display = '';
		}else{

		}
	})
})

let regionMenu = document.querySelector("#region_menu");
let regions = document.querySelector("#regions");

regionMenu.addEventListener("click", function(){
	if(regions.style.display === ''){
		regions.style.display = 'block';
		menuCatalogItems[0].style.display = '';
		menuCatalogItems[1].style.display = '';
	}else{
		regions.style.display = '';
	}
})


let regionsMyself = document.querySelectorAll("#region_myself");
regionsMyself.forEach(function(item){
	item.addEventListener("click", function(){
		regionMenu.textContent =item.textContent ;	
		regions.style.display = '';
	})
})

let language = document.querySelector("#language");
let masLang = document.querySelectorAll(".Head__menuHead__menu_language-item");
language.addEventListener("click",function(){
	masLang.forEach(function(item){
		if(item.classList[2] !== 'Head__menuHead__menu_language-disabled'){
			item.classList.add("Head__menuHead__menu_language-disabled")
		}else{
			item.classList.remove("Head__menuHead__menu_language-disabled")
		}
	})
})


const bannerHead = document.querySelector(".Head__banner_head");
const sliderItem = document.querySelectorAll(".Head__slider_item_head");
const catalog = document.querySelector('.popularBlock');
const services = document.querySelector('.services');
const stocks = document.querySelector('.stocks');
const news = document.querySelector('.news');
const useful = document.querySelector('.useful');
const parthers = document.querySelector('.parthers');
const menuFooter = document.querySelector('.menu-footer');

const masBlocks = [catalog, bannerHead , services, stocks, news, useful, parthers, menuFooter]

masBlocks.forEach(function(item){
	item.addEventListener('click' , function(){
			menuCatalogItems[1].style.display = '';
			regions.style.display = '';
			menuCatalogItems[0].style.display = '';
	})
	item.addEventListener('mousewheel' , function(){
			menuCatalogItems[1].style.display = '';
			regions.style.display = '';
			menuCatalogItems[0].style.display = '';
	})
})




if (Block.addEventListener) {
       Block.addEventListener("mousewheel", onWheel);
    } else { 
      Block.attachEvent("onmousewheel", onWheel);
}

function scrolling(i,block) {
	if(window.innerWidth >= 500){
		masBlocks.forEach(function(item){
			 item.style.animation="0.3s move_banner_dis forwards";
		})					  
		masBlocks.forEach(function(item){
			item.classList.remove('Head__active_banner');
		})
		block.classList.add('Head__active_banner');			  
		sliderItem.forEach(function(item){
			item.classList.remove("Head__active_slider_item");
			item.style.borderBottom="2px solid black";
			item.style.color="black";
		});
		sliderItem[i].classList.add("Head__active_slider_item");
		block.style.animation="1s move_banner_act forwards"
	
	}
}						

let number =0;
function onWheel(e) {
    let delta = e.deltaY;
    number = number + delta;
    if(number >= 400 || number <= -400){
    	number = 0;
    }
	//CATALOG
    if( 
    	number === -300 && sliderItem[3].classList[2] === "Head__active_slider_item" 
    	||  number === 300 && sliderItem[1].classList[2] === "Head__active_slider_item" 
    ){
    	scrolling(2,catalog)
    }else{
		//STOCKS
	    if(
	     	number === 300 && sliderItem[0].classList[2] === "Head__active_slider_item"
	     	||  number === -300 && sliderItem[2].classList[2] === "Head__active_slider_item"
	    ){		
	    	scrolling(1,stocks)
		}else{
			//FIRST BANNER DEFAULT
				if(
			    	number === -300 && sliderItem[1].classList[2] === "Head__active_slider_item"
			    	||  number === 300 && sliderItem[7].classList[2] === "Head__active_slider_item"
			    ){
			    	scrolling(0,bannerHead);
			    	sliderItem.forEach(function(item){
						item.style.borderBottom="";
						item.style.color="";
					});
			    }else{
				    	//SERVICES		
					if(
				     	number === 300 && sliderItem[2].classList[2] === "Head__active_slider_item"
				     	||  number === -300 && sliderItem[4].classList[2] === "Head__active_slider_item"
				    ){		
				    	scrolling(3,services)
					}else{
					//USEFUL
						if(
				     	number === 300 && sliderItem[4].classList[2] === "Head__active_slider_item"
				     	||  number === -300 && sliderItem[6].classList[2] === "Head__active_slider_item"
						){		
							scrolling(5,useful)
						}else{
							//NEWS
							 if(
					     	number === 300 && sliderItem[3].classList[2] === "Head__active_slider_item"
					     	||  number === -300 && sliderItem[5].classList[2] === "Head__active_slider_item"
							){		
							 	scrolling(4,news);
							 	sliderItem.forEach(function(item){
									item.style.borderBottom="";
									item.style.color="";
								});
							}
							//FOOTER
							if(
					     	number === 300 && sliderItem[6].classList[2] === "Head__active_slider_item"
					     	||  number === -300 && sliderItem[0].classList[2] === "Head__active_slider_item"
							){		
								scrolling(7,menuFooter);
								sliderItem.forEach(function(item){
									item.style.borderBottom="";
									item.style.color="";
								});
							}else{
									//PARTHERS
								if( 
						     	number === 300 && sliderItem[5].classList[2] === "Head__active_slider_item"
						     	||  number === -300 && sliderItem[7].classList[2] === "Head__active_slider_item"
								){		
									scrolling(6,parthers)
								}	
							}
							
						
			    }
				}
				}
		}
	}	
	return number;	
}



/*
//CATALOG
    if( 
    	delta !== 100 && sliderItem[3].classList[2] === "Head__active_slider_item" 
    	||  delta == 100 && sliderItem[1].classList[2] === "Head__active_slider_item" 
    ){
    	scrolling(2,catalog)
    /*
	    masBlocks.forEach(function(item){
     		item.style.animation="0.3s move_banner_dis forwards"
     	})
		
					masBlocks.forEach(function(item){
						item.classList.remove('Head__active_banner');
					})
			catalog.classList.add('Head__active_banner');
		
		sliderItem.forEach(function(item){
				item.classList.remove("Head__active_slider_item");
				item.style.borderBottom="2px solid black";
				item.style.color="black";
		});
		sliderItem[2].classList.add("Head__active_slider_item");
		catalog.style.animation="1s move_banner_act forwards"
    }else{
//STOCKS
	    if(
	     	delta == 100 && sliderItem[0].classList[2] === "Head__active_slider_item"
	     	||  delta !== 100 && sliderItem[2].classList[2] === "Head__active_slider_item"
	    ){		
	     		masBlocks.forEach(function(item){
	     			 item.style.animation="0.3s move_banner_dis forwards"
	     		})
			    
					masBlocks.forEach(function(item){
						item.classList.remove('Head__active_banner');
					})
					stocks.classList.add('Head__active_banner');
			    
				sliderItem.forEach(function(item){
					item.classList.remove("Head__active_slider_item");
					item.style.borderBottom="2px solid black";
					item.style.color="black";
				});
				sliderItem[1].classList.add("Head__active_slider_item");
				stocks.style.animation="1s move_banner_act forwards"
		}else{
    

//FIRST BANNER DEFAULT
	if(
    	delta!==100 && sliderItem[1].classList[2] === "Head__active_slider_item"
    	||  delta == 100 && sliderItem[7].classList[2] === "Head__active_slider_item"
    ){
	    masBlocks.forEach(function(item){
     			 item.style.animation="0.3s move_banner_dis forwards"
     	})
		//setTimeout(()=>{
			masBlocks.forEach(function(item){
				item.classList.remove('Head__active_banner');
			})
			bannerHead.classList.add('Head__active_banner');
		//}, 500)
		sliderItem.forEach(function(item){
			item.classList.remove("Head__active_slider_item");
			item.style.borderBottom="";
			item.style.color="";
		})
		sliderItem[0].classList.add("Head__active_slider_item");
		bannerHead.style.animation="1s move_banner_act forwards";
    }
	
//SERVICES		
	if(
     	delta == 100 && sliderItem[2].classList[2] === "Head__active_slider_item"
     	||  delta !== 100 && sliderItem[4].classList[2] === "Head__active_slider_item"
    ){		
     		masBlocks.forEach(function(item){
     			 item.style.animation="0.3s move_banner_dis forwards";

     		})
		  
					masBlocks.forEach(function(item){
						item.classList.remove('Head__active_banner');
					})
				services.classList.add('Head__active_banner');
		   
			sliderItem.forEach(function(item){
				item.classList.remove("Head__active_slider_item");
				item.style.borderBottom="2px solid black";
				item.style.color="black";
			});
			sliderItem[3].classList.add("Head__active_slider_item");
			services.style.animation="1s move_banner_act forwards"
	
	}else{

//USEFUL
	
	
		if(
     	delta == 100 && sliderItem[4].classList[2] === "Head__active_slider_item"
     	||  delta !== 100 && sliderItem[6].classList[2] === "Head__active_slider_item"
		    ){		
		     		masBlocks.forEach(function(item){
		     			 item.style.animation="0.3s move_banner_dis forwards";

		     		})
				  
							masBlocks.forEach(function(item){
								item.classList.remove('Head__active_banner');
							})
						useful.classList.add('Head__active_banner');
				   
					sliderItem.forEach(function(item){
						item.classList.remove("Head__active_slider_item");
						item.style.borderBottom="2px solid black";
						item.style.color="black";
					});
					sliderItem[5].classList.add("Head__active_slider_item");
					useful.style.animation="1s move_banner_act forwards"
			

		}else{
	



//NEWS
		 if(
     	delta == 100 && sliderItem[3].classList[2] === "Head__active_slider_item"
     	||  delta !== 100 && sliderItem[5].classList[2] === "Head__active_slider_item"
		    ){		
		     		masBlocks.forEach(function(item){
		     			 item.style.animation="0.3s move_banner_dis forwards";

		     		})
				  
							masBlocks.forEach(function(item){
								item.classList.remove('Head__active_banner');
							})
						news.classList.add('Head__active_banner');
				   
					sliderItem.forEach(function(item){
						item.classList.remove("Head__active_slider_item");
						item.style.borderBottom="";
						item.style.color="";
					});
					sliderItem[4].classList.add("Head__active_slider_item");
					news.style.animation="1s move_banner_act forwards"
			

					}
					//FOOTER

						if(
				     	delta == 100 && sliderItem[6].classList[2] === "Head__active_slider_item"
				     	//||  delta !== 100 && sliderItem[5].classList[2] === "Head__active_slider_item"
						    ){		
						     		masBlocks.forEach(function(item){
						     			 item.style.animation="0.3s move_banner_dis forwards";

						     		})
								  
											masBlocks.forEach(function(item){
												item.classList.remove('Head__active_banner');
											})
										menuFooter.classList.add('Head__active_banner');
								   
									sliderItem.forEach(function(item){
										item.classList.remove("Head__active_slider_item");
										item.style.borderBottom="";
										item.style.color="";
									});
									sliderItem[7].classList.add("Head__active_slider_item");
									menuFooter.style.animation="1s move_banner_act forwards"
							

						
								
						}
					//PARTHERS

						if( 
				     	delta == 100 && sliderItem[5].classList[2] === "Head__active_slider_item"
				     	||  delta !== 100 && sliderItem[7].classList[2] === "Head__active_slider_item"
						    ){		
						     		masBlocks.forEach(function(item){
						     			 item.style.animation="0.3s move_banner_dis forwards";

						     		})
								  
											masBlocks.forEach(function(item){
												item.classList.remove('Head__active_banner');
											})
										parthers.classList.add('Head__active_banner');
								  
									sliderItem.forEach(function(item){
										item.classList.remove("Head__active_slider_item");
										item.style.borderBottom="2px solid black";
										item.style.color="black";
									});
									sliderItem[6].classList.add("Head__active_slider_item");
									parthers.style.animation="1s move_banner_act forwards"
							

						
								
						}	
					
				}

			}

			}
		}
	

	

    return number;		
}
*/
