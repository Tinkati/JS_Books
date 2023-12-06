//создать меню из массива category файл massiv.js
$(document).ready(function(){
	for(var i=0; i<category.length;i++){
		var li=document.createElement('li');
li.innerHTML=('<a href="#" onClick="myContent(`'+category[i] +'`)" >'+category[i]+'</a>');
		document.getElementById("menu").appendChild(li);
	}//for
});

//функция вывода списка данных по ссылке из навигации
//val - название категории
function myContent(val){

	var header='<h2>'+val+'</h2>'; //строим заголовок - название категории
	var text='';
	var controll=false;
	for(var i=0; i<books.length;i++){
		if (val==books[i].classname){ //если нашли название категории в массиве books
			text+='<div style="float:left;">';
			text+='<img src="images/'+books[i].image+'" style="margin:10px;">';//картинка
			text+='<p>'+books[i].name+'</p>';
			text+='<p><a href="#" onClick="Detail(\''+books[i].name +	'\')">Подробнее...</a></p>';//ссылка на  просмотр одной записи
			text+='</div>';
			controll=true;//найдены записи
	}//if
}//for

if(controll==true)
	$("#content").html(header+text);
else
	$("#content").html(header+"Данных нет");

};//function
//-----функция вывода просмотра одной записи
//item - надвание категории, передано в ссылке
function Detail(item){

	var text='';
	var controll=false;//найдена запись?
	for(var i=0; i<books.length;i++){
		if(item==books[i].name){//если нашли название категории в массиве animals
			var header='<h2>'+books[i].classname+': '+books[i].name+'</h2>';//строим заголовок
			text+='<div style="float:left">';
			text+='<img src="images/'+books[i].image+'" style="margin:10px;">';//картинка
			text+='<p>'+books[i].description+'</p>';//описание
			text+='<p><a href="#" onClick="myContent(\''+books[i].classname +'\')">Back categories</a></p>';//ссылка возврат к категории
			text+='</div>';
			controll=true;//найдена запись!
		}//if
	}//for
	if(controll==true)
		$("#content").html(header+text);//вывод на страницу
	else
		$("#content").html(header+"Данных нет");
}
 