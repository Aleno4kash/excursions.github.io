
function go()
{
	window.setInterval(slider,9000);
}
function slider()
{
	var obj=document.getElementById("banner");	
	var arr=["images/2.png","images/3.png","images/1.png"]; 
 var i=parseInt(obj.value,10);
	if(i<arr.length)
		obj.src=arr[i];
	else
		{
			obj.value=0;
			var i=parseInt(obj.value,10);
			obj.src=arr[i];
		}

	obj.value=1+parseInt(obj.value,10);


}