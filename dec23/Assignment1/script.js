console.log("dec_23 Assignment No 2")
//Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks. 
var g_class = {
	'students': [{
		'name': 'Ujjwal',
		'marks': 80,
	  },
	  {
		'name': 'Anshul',
		'marks': 89,
	  },
	  {
		'name': 'Lasya',
		'marks': 77,
	  },
	  {
		'name': 'Ayush',
		'marks': 70,
	  },
	  {
	   'name': 'Gourav',
	   'marks': 90,
	  },
	  {
	   'name': 'Niladri',
	   'marks': 85,
	  },
	  {
	   'name': 'Ugrasen',
	   'marks': 87,
	  }
	],
  };
  
  for(var i = 0;i<g_class.students.length;i= i+1){
	//  console.log(g_class.students.length);
	if(g_class.students[i].marks>=80){
		 console.log(g_class.students[i].name,"marks: " + g_class.students[i].marks)
	
	}
	
  }
 
  