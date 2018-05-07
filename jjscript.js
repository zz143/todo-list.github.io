$("#iform").submit(function(event){
	event.preventDefault();
	var item=$("#box").val();
	if(item)
		{
			$("#list").append("<li> <div class='pretty o-success plain'> <input class='checkbox' type='checkbox'/><label style='font-size:22px;'><i class='fa fa-check'></i>&nbsp&nbsp"+item+"&nbsp&nbsp</label></div><a class='delete'></a><hr></li>");
		}
		$(document).on("change",".checkbox",function(){
			if($(this).attr("checked"))
			{
				$(this).removeAttr("checked");
			}
			else
			{
				$(this).attr("checked","checked");
			}
		});
		$(document).on("click",".delete",function(){
			$(this).parent().remove();
		});
});