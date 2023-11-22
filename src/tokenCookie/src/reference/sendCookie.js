// res.send(name, value, options)  //used to send cookie
//options 
// httpOnly : true => cookire cannnot be accessed thrugh client-side scripting
//expires : milinsecond


//ex =>  res.cookie('jwt', user.tokens,{maxAge: 3000})