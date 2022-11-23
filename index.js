function introduction(name){
return "Hi, my name is Samip ${name}." 
return "Hi, my name is Aki ${name}."   
}
  function introductionWithLanguage(name, language){
    return "Hi my name is" + name +" and I am learning to program in" +language 
  }  
function introductionWithLanguageOptional(name, language = "javascript"){
    return "Hi my name is " + name + " and I am learning to program in" + language
}