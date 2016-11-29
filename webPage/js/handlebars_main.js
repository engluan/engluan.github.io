var dataSkills = [
	{value:"30", skillName:"C++"}, 
	{value:"30", skillName:"Agile Scrum"},
	{value:"30", skillName:"C#"}, 
	{value:"30", skillName:"ASP.NET"}, 
	{value:"30", skillName:"HTML"}, 
	{value:"20", skillName:"CSS"},
	{value:"20", skillName:"JavaScript"}, 
];



/*template skills*/
var temp3 = $("#template-3").html();
var template3 = Handlebars.compile(temp3);
$("#skills-replace").html(template3(dataSkills));