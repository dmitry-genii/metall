const headBurger = document.querySelector('.Head__burger');
const headBurgerItem = document.querySelectorAll('.Head__burger-item');
const headListHead = document.querySelector('.Head__listHead')
headBurger.addEventListener('click', function(){
	if(headListHead.style.display === ""){
		headBurger.style.marginTop="140px";
		headBurger.style.marginLeft="325px";
		headBurgerItem[0].style.animation = '0.5s burgerItem forwards'; 
		headBurgerItem[1].style.animation = '0.5s burgerItem forwards'; 
		headBurgerItem[2].style.animation = '0.5s burgerThrid forwards'; 
		headListHead.style.display="block";
		headListHead.style.marginTop="110px";
	}else{
		headBurgerItem[0].style.animation = ' 0.5s burgerItemRev forwards '; 
		headBurgerItem[1].style.animation = ' 0.5s burgerItemRev forwards'; 
		headBurgerItem[2].style.animation = ' 0.5s burgerThridRev forwards'; 
		headListHead.style.display = "";
		headBurger.style.marginTop="";
		headBurger.style.marginLeft="";
	}
	
})



let btnToCatalog = document.querySelector(".Head__listHead__menu-items_label");

btnToCatalog.addEventListener('dblclick', function(){
	location.href='../catalog/index.html'
})



let Block = document.querySelector('html');


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

let pageBasketCont = document.querySelector('#content');
let pageBasketFot = document.querySelector('#footer');

pageBasketFot.addEventListener('click' , function(){
	menuCatalogItems[1].style.display = '';
	regions.style.display = '';
	menuCatalogItems[0].style.display = '';
})

pageBasketCont.addEventListener('click' , function(){
	menuCatalogItems[1].style.display = '';
	regions.style.display = '';
	menuCatalogItems[0].style.display = '';
})

const masProducts = document.querySelectorAll('.contentBasket-block__info-all-profucts_table_content-name-product')
let quantityProducts = document.querySelectorAll('#quantity');
let priceProductsOne = document.querySelectorAll('#price_of_one');
let priceProductsAll = document.querySelectorAll('#price_of_all');
let priceNds = document.getElementById('price_Nds');
let priceTotal = document.getElementById('price_Total');
let priceALL = document.getElementById('price_All');



//priceProductAll.textContent = +(priceProductOne.textContent.slice(0,-2)) * +(quantityProduct.textContent) + ' ₽';
for(let i = 0 ; i<masProducts.length; i++){
	if(quantityProducts[i].childNodes[1].value != 0){
		priceALL.textContent = 0;
		priceProductsAll[i].textContent = +(priceProductsOne[i].textContent.slice(0,-2)) * +(quantityProducts[i].childNodes[1].value) + ' ₽';
		for(let e = 0 ; e<priceProductsAll.length; e++){			
			priceALL.textContent = +(priceALL.textContent) + +(priceProductsAll[e].textContent.slice(0,-2))
		}	
		priceNds.textContent = Math.round(priceALL.textContent*0.16)+ ' ₽';
		priceALL.textContent = priceALL.textContent + ' ₽';
		priceTotal.textContent = priceALL.textContent;
	}
	quantityProducts[i].addEventListener('input',function(){
		if(quantityProducts[i].childNodes[1].value < 0){
			quantityProducts[i].childNodes[1].value = 0;
			if(+(priceALL.textContent.slice(0,-2)) !== 0){
			}else{
				priceNds.textContent = 0 + ' ₽';
				priceALL.textContent = 0 + ' ₽';
				priceTotal.textContent = priceALL.textContent;
			}	
		}else{
				priceALL.textContent = 0;
				priceProductsAll[i].textContent = +(priceProductsOne[i].textContent.slice(0,-2)) * +(quantityProducts[i].childNodes[1].value) + ' ₽';
				for(let e = 0 ; e<priceProductsAll.length; e++){			
					priceALL.textContent = +(priceALL.textContent) + +(priceProductsAll[e].textContent.slice(0,-2))
				}	
				priceNds.textContent = Math.round(priceALL.textContent*0.16)+ ' ₽';
				priceALL.textContent = priceALL.textContent + ' ₽';
				priceTotal.textContent = priceALL.textContent;
			
		}
	})
	
	
}


alert('click KeyZ')



document.addEventListener('keydown', function(event) {
 	if (event.code == 'KeyZ') {
     	let container  = document.getElementById('container');
     	container.innerHTML = `
     				<p class="contentBasket-block__info-none">В вашей корзине пока нет товаров.</p>
					<a href="../catalog/index.html" class="contentBasket-block__info__btn-catalog">В каталог</a>
				`;
    }
});


