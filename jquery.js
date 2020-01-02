$(document).ready(function(){
	$("form").submit(function(){
		var name=$("#un").val();
		var pwd=$("#pwd").val();
		var email=$("eml").val();
		var namePresent=true;
	  	var pwdPresent=true;
	  	var emailPresent=true;
	  	if(name==null || name.length<0)
	  		namePresent=false;
	  	if(pwd==null || pwd.length<=0)
		  pwdPresent=false;
		if(email==null || email.length<=0)
		  emailPresent=false;
		if(!namePresent || !pwdPresent || !emailPresent)
		  {
		   $("#mem").html("* marked fields are mandatory");
		   return false;		  
		  }
	});

	$("#un").keyup(function(){
		var name=$("#un").val();
		for(i=0;i<name.length;i++)
		  {
		    var ch=name.charAt(i);
		    //alert(ch);
		    if( (ch <= 'Z' && ch >='A') || (ch <= 'z' && ch >='a'))
		    	{
		      	$("#ne").html("");
		    	}
		  
		    else
		    	{
		    	$("#ne").html("Invalid Character");
		    	}
		  }
	});
});