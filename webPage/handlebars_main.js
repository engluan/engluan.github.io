var dataSkills = [
	{idBar:"", value:"30", skillName:"C++"}, 
	{idBar:"", value:"30", skillName:"Agile Scrum"},
	{idBar:"", value:"30", skillName:"C#"}, 
	{idBar:"", value:"30", skillName:"ASP.NET"}, 
	{idBar:"", value:"30", skillName:"HTML"}, 
	{idBar:"", value:"20", skillName:"CSS"},
	{idBar:"", value:"20", skillName:"JavaScript"}, 
];



/*template skills*/
var temp3 = $("#template-3").html();
var template3 = Handlebars.compile(temp3);
$("#skills-replace").html(template3(dataSkills));

$('head style[type="text/css"]').attr('type', 'text/less');
less.refreshStyles();
window.randomize = function() {
	$('.radial-progress').attr('data-progress', Math.floor(Math.random() * 100));
}
setTimeout(window.randomize, 200);
$('.radial-progress').click(window.randomize);
