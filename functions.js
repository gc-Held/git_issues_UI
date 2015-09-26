var servurl = "http://localhost:9082/"
function populate(data){
	$("#day").text(data.day)
	$("#week").text(data.week)
	$("#more").text(data.longer)
	$("#total").text(data.total)
}

$(document).ready(function(){
$("#go-btn").on("click", function(){
	var repo = $("#repo-link").val();
	vals = repo.split("/"); /*processes the URL to separate parts*/
	
	$.ajax({
		type: "GET",
        crossDomain: "true",
        url : servurl + "list/"+vals[3]+"/owner/"+vals[4]+"/repo/",
        success: function(data) {
        	populate(data);
        }
		});
});
});