/* 01 - FizzBuzz */

/* 02 - domainName
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet*/

// ---> mySolution
function domainName(url) {
  const validDomainNameRegExp = /[a-z-_]+.com/gi;
  const httpRegex = /https?:\/\/(www)?\.?/gi

  if(url.match(validDomainNameRegExp)) {
   const urlArr =  url.split(".com")
    return urlArr[0].replace(httpRegex, "")
  } else {
    console.log("Error: unvalid url")
  }
}