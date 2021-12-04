// document.cookie="name=amrit;max-age=3"   //max-age=3 means after 3 second cookies 
                                         //will be removed

                        
// document.cookie="name=amrit;max-age=3;secure" //secure means now cookies only be accesses through https protocol

document.cookie="name=amrit pal;max-age=3;secure;samesite=strict"

// samesite = strict is used so as to prevent CSRF(cross site request forgery)
// attack 

// When we send a request  to a site then cookies are sent along
// with it and if a bad site gets access to our cookies then it can
// perform a transaction on our behalf so to prevent these transactions 
// we use samesite=strict 
// So that the destination site gets to know the domain from which cookies are 
// registered, and if cookies are coming from different site, then no transaction 
// should be performed. 
