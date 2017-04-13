// Language template
 var dataLanguage = [
	{idBar:"myBar1", value:"70", languageName:"English"}, 
 	{idBar:"myBar2", value:"100", languageName:"Portuguese"},
];

var lang = $("#template-language").html();
var language = Handlebars.compile(lang);
$("#language-replace").html(language(dataLanguage));

// Skill template 
var dataSkills = [
	{idBar:"myBar1", value:"50", skillName:"Agile Scrum"}, 
 	{idBar:"myBar2", value:"40", skillName:"C++"},
 	{idBar:"myBar3", value:"30", skillName:"C#"}, 
 	{idBar:"myBar4", value:"30", skillName:"ASP.NET"}, 
 	{idBar:"myBar5", value:"30", skillName:"HTML"}, 
 	{idBar:"myBar6", value:"30", skillName:"CSS"},
 	{idBar:"myBar7", value:"30", skillName:"JavaScript"}, 
 	{idBar:"myBar8", value:"30", skillName:"BDD"},
 	{idBar:"myBar9", value:"30", skillName:"Cucumber"},
 	{idBar:"myBar10", value:"30", skillName:"Page Object Model"},
 	{idBar:"myBar11", value:"30", skillName:"Webdriver"},
 	{idBar:"myBar12", value:"20", skillName:"Java"},
 	{idBar:"myBar13", value:"10", skillName:"Ruby"}
];

var ski = $("#template-skill").html();
var skill = Handlebars.compile(ski);
$("#skill-replace").html(skill(dataSkills));



// Portifolio template 
var dataPortfolioModal = [
		{	
			idModal:"portfolioModal1",
			title: "Workshop .Net", 
			legend:"Slides explain some caracteristics of .Net", 
			picture:"img/portfolio/bricks.gif", 
			description:
			"Worked about 3 months with this tecnology in job rotation at Avenue Code, I made a apresentation about some fundamental topics, like what´s MVC (Model, View and controller), some caracteristics of C# (statements and loops) and other topic of ASP.NET.",
			strongPhrase:"Here it's a apresentation about some concepts of .Net.", 
			textLink1:"You can see all the apresentation here", 
			link1:"https://1drv.ms/p/s!ArRP0d6_IBiFhCcp-BhxTDKWZuxn", 
			titleLink1:"All about .Net Fundamentals", 
			textLink2:"",
			link2:"", 
			titleLink2:"", 
			date:"Date: September 2016", 
			enterprise:"Enterprise: Avenue Code", 
			category:"Category: .NET Tecnology"
	},
		

		{
			idModal:"portfolioModal2",
			title: "Workshop UI", 
			legend:"Slides explain some caracteristics of UI", 
			picture:"img/portfolio/ui.jpg", 
			description:"Three months working with these beautiful technologies (HTML, CSS and JavaScript) passed quickly, so i separated some points that i learned and make some slides with them.", 
			strongPhrase:"Here it's a apresentation about some concepts of UI", 
			textLink1:"You can see all the apresentation here", 
			link1:"https://docs.google.com/presentation/d/1dcCHxySh5LSe7DLIowxD9ZOVxfzV7eN-xBHQKYwKEk8/edit?usp=sharing", 
			titleLink1:"Workshop UI", 
			textLink2:"",
			link2:"", 
			titleLink2:"", 
			date:"Date: December 2016", 
			enterprise:"Enterprise: Avenue Code", 
			category:"Category: UI tecnologies"
	},

		{
			idModal:"portfolioModal3",
			title: "Microprocessor recorder", 
			legend:"Recorder 8051's family microprocessor from atmel.", 
			picture:"img/portfolio/electronic.jpg", 
			description:"With this recorder you can work with: AT89S8252/ AT89S8253/ AT89S51/ AT89S52/ AT89S53/ ATMEGA 8/ ATMEGA 85X5" , 
			strongPhrase:"", 
			textLink1:"Here you can see all the assembly scheme and list of material that i used to build the recorder.", 
			link1:"https://drive.google.com/open?id=0BwC7hQP6-guzaDBaczNtZUJQdm8", 
			titleLink1:"Microprocessor recorder schemes", 
			textLink2:"Also you can make download of software called GRAVA 3.0 ATMEL by Eng. Rafael B. Ferrari to recorder the microprocessor, here.",
			link2:"http://rafaelbf.tripod.com/arquivos/Grava-v31.zip", 
			titleLink2:"Download of program Grava 3.0", 
			date:"November 2016", 
			enterprise:"", 
			category:""
	},

		{
			idModal:"portfolioModal4",
			title: "Workshop QA", 
			legend:"Slides explain some caracteristics of QA", 
			picture:"img/portfolio/quality.png", 
			description:"Three months working with these beautiful Behavior-driven development (BDD) passed quickly, so i separated some points that i learned and make some slides with them.", 
			strongPhrase:"Here it's a apresentation about some concepts of Quality Assurance", 
			textLink1:"You can see all the apresentation here", 
			link1:"https://docs.google.com/a/avenuecode.com/presentation/d/1SvEm9UyZlhXa9boE7ByPWkckzpBXbSLImuA8POV0aBk/edit?usp=sharing", 
			titleLink1:"Workshop QA", 
			textLink2:"",
			link2:"", 
			titleLink2:"", 
			date:"Date: April 2017", 
			enterprise:"Enterprise: Avenue Code", 
			category:"Category: QA tecnologies"
	}
]


var port = $("#template-portfolio").html();
var portfolioModal = Handlebars.compile(port);
$("#portfolio-replace").html(portfolioModal(dataPortfolioModal));
