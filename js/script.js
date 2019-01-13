

var i=1;
var sliders=document.getElementsByClassName("slider");
window.setInterval(StartSlider,5000);
var len=sliders.length;

function StartSlider()
{
	if(i==len)
		i=0;
	if(i==0)
	{
		sliders[len-1].style.display="none";
		sliders[i].style.display="block";
	}
	else
	{
		sliders[i-1].style.display="none";
		sliders[i].style.display="block";
	}
	i++;

	
	
}
