var flag = false;
var i = 0;
var timeOut;
var speed = 20;
var defaultSpeed = 20;
var betweenSpeed = 100;
var wallpaper_location = ['budapest.jpg', 'capri.jpg', 'manali.jpg', 'restaurant.jpg', 'xincheng.jpg', 'milan.jpg', 'paris.jpg', 'pompeii.jpg', 'nice.jpg', 'accv-perth.jpg', 'bali.jpg', 'bali2.jpg', 'kingspark.jpg', 'nus.jpg', 'paris-seine.JPG', 'paris-seine2.JPG']
var wallpaper_label = ['Budapest, Hungary', 'Capri, Italy', 'Manali, India', 'Manali, India', 'Xincheng, Taiwan', 'Milan, Italy', 'Paris, France', 'Pompeii, Italy', 'Nice, France', 'Perth Convention and Exhibition Centre, Australia', 'Bali, Indonesia', 'Bali, Indonesia', 'Kings Park, Perth, WA', 'National University of Singapore, Singapore', 'Paris, France', 'Paris, France']

// This function is used to pause in between for some milliseconds
function pause(milliseconds) {
  var datee = new Date();
  while ((new Date()) - datee <= milliseconds) {  }
}
flag = false;
// This function does the job of printing at the given 'speeed', WHERE(which div), 'text'.
function dynamicprint(speed, where, string) {
  flag = false;
  document.getElementById("inputForm").style.opacity=0;
  timeOut = setInterval(function(){
    i++;
  print = string.substring(0,i);
  if(i == string.length)
    {
    clearInterval(timeOut);flag = true;document.getElementById("inputForm").style.opacity=1; speed = defaultSpeed}
  document.getElementById("consoleArea").scrollTop = document.getElementById("consoleArea").scrollHeight;
  document.getElementById(where).innerHTML = print;

  if(i %30 == 29)
    pause(betweenSpeed); // extra waits
  }, speed);
}
// this function starts the console
function start()
{
  speed = 15
  //setTimeout(function(){i = 0; clearInterval(timeOut); dynamicprint(50, "infogames", "");}, 1200);
   dynamicprint(speed, "console", "<font color = 'red'>saiphaye@fakeTerminal:~$</font> cat info_website.txt<br><h4>Hey there! Welcome to my personal website!</h4><br>I am currently a research intern in Sound and Music Computing Lab at National University of Singapore. Under the supervision of Prof. Ye Wang, I am researching full-time on developing novel <font color = 'yellow'>Deep Learning methods for Acoustic Scene Classification</font>. My research interests include <font color = 'red'>Deep Learning, Computer Vision and Multimedia Processing</font>. <br> <br>Currently the website is under construction and hence, the console UI. Still, I have added some commands to access my records and also to play around with the website (type \"help\" for more details).<br><br>NOTE: PLEASE USE THE FULLSCREEN MODE (F11 on Chrome) FOR BETTER EXPERIENCE.<br><br>");
  //setTimeout(function(){document.getElementById("textform").style.opacity = 1; document.getElementById("textform").style.display = "inline-block"; }, 10);
  
}

function ReplyBack(x, reply){
    reply = reply.concat("<br><br>");
    var string = document.getElementById("console").innerHTML;
    var lolwa = "<font color = 'red'>saiphaye@fakeTerminal:~$</font> " + x + "<br>";
    string = string.concat(lolwa);
    console.log(i)
    i = i + lolwa.length;
    console.log(i)
    string = string.concat(reply);
    dynamicprint(speed, "console", string);
    document.getElementById("textfield").value = "";
}

// this function is called when we submit the text box
function handle(){
  var x = document.getElementById("textfield").value;
  x = x.toLowerCase();
  x = x.replace(/\s+/g,' ').trim();
  if(x == "hi" || x == "hi" || x == "hii" || x == "bonjour" || x == "hello" || x == "hey" || x == "heyy")
  {
    var reply = "Hey there! ^_^ Hope you are having a great time exploring my website!";
    ReplyBack(x, reply);
  }
  else if(x == "change background" || x == "change wallpaper")
  {
    ind = Math.floor((Math.random() * wallpaper_location.length));
    // SET WALLPAPER wallpaper_location[ind]
    $("#body").fadeOut(200, //Speed
                     function () { //On fadeOut complete
                            $("#body").css("background-image", "url(../images/"+wallpaper_location[ind] + ")") //Change BG
                                   .fadeIn(); //FadeIn
                     });
    var reply = "Here you go! This one was captured in " + wallpaper_label[ind] + ".";
    ReplyBack(x, reply);
  }
  else if(x == "feedback" || x == "give feedback")
  {
    var reply = "Thank you very much, would love to hear from you! <br>You could send me an <font color = 'yellow'><i>e-mail</i> at <b><code>&#x70;&#x68;&#x61;&#x79;&#x65;&#x2E;&#x73;&#x61;&#x6D;&#x61;&#x72;&#x74;&#x68;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</code></b></font> with <i>subject</i> \"<b>website feedback</b>\".";
    ReplyBack(x, reply);
  }
  else if(x == "contact")
  {
    speed = 1
    var reply = "Thanks for your interest, the best way to contact is via e-mail, following are some options:<br> <ol><li>Mobile: <b>+65 (0) 9869 3516</b></li><li>e-mail: <b><code>&#x70;&#x68;&#x61;&#x79;&#x65;&#x2E;&#x73;&#x61;&#x6D;&#x61;&#x72;&#x74;&#x68;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</code>, <code>&#x32;&#x30;&#x31;&#x34;&#x63;&#x73;&#x62;&#x31;&#x30;&#x32;&#x39;&#x40;&#x69;&#x69;&#x74;&#x72;&#x70;&#x72;&#x2E;&#x61;&#x63;&#x2E;&#x69;&#x6E;</code></b></li><li>LinkedIn: <b><a href = 'https://www.linkedin.com/in/ssrp/' style='color:yellow' target = '_blank'>ssrp</a></b></li><li>GitHub: <b><a href = 'https://github.com/ssrp/' style='color:yellow' target = '_blank'>ssrp</a></b></li><li>Instagram: <b><a href = \"https://www.instagram.com/_ssrp/\" style='color:yellow' target = \"_blank\">_ssrp</a></b></li><li>YouTube: <b><a href = 'https://www.youtube.com/channel/UCGx6F_XKD2JS-NJQl7liszw' target = '_blank' style='color:yellow'>geekoguitarist</a></b></li></ol>";
    ReplyBack(x, reply);
  }
  else if(x == "resume" || x == "cv")
  {

    // TO DO
    var reply = "<font color = 'yellow'><a href ='./docs/1PageResume.pdf' style='color:yellow' target='_blank'>Here's the PDF version</a></font> of my one-page resume. The website version is currently under development.";
    ReplyBack(x, reply);
  }
  else if(x == "about")
  {
    if(defaultSpeed != 0 && defaultSpeed <=30) 
      speed = 30
    var reply = "I was born and raised in Raipur, a city in central India. I have completed my Bachelor of Technology in Computer Science major from <font color = 'yellow'>Indian Institute of Technology Ropar</font> in 2018. After bachelors, I joined <font color = 'orange'>National University of Singapore</font> as a research intern under the supervision of A/Prof. Wang Ye from NUS and Dr. Emmanouil Benetos (in collaboration) from the School of EECS, Queen Mary University of London. My current work is based on exploring novel deep learning methods for Acoustic Scene Classification, which is a hot topic in Signal Processing Community. In general, my research interests include <font color = '#bb88bb'>Deep Learning, Computer Vision and Multimedia Processing</font>. I have a predilection for the whole process of research, beginning with defining a problem statement, formulating and validating hypotheses, and finally logging everything. <br><br>Other than research, I am interested in <font color = 'yellow'>composing music</font> (being a guitarist) and playing badminton. Currently, I am a part of the NUS Guitar Ensemble where I am learning and filling the gaps in my understanding and I hope to become a connoisseur of music in the following years. I also like to travel and have travelled over <font color = 'red'>16 different countries in the last two years</font>.";
    ReplyBack(x, reply);
  }
  else if(x == "publications" || x == "publication")
  {
    var reply = "<a href = 'https://scholar.google.com/citations?user=Ds047PsAAAAJ&hl=en' style='color:yellow' target='_blank'>Click here</a> to get to my Google Scholar page. I have two accepted papers (IEEE ISM 2017, ACCV 2018) and one under review (ICASSP 2019). More details found on my Resume.";
    ReplyBack(x, reply);
  }
  else if(x == "blog")
  {
    var reply = "Thanks for your interest! I am still developing this part and it should be done by 30th January 2019. I have already compiled some blog-posts though, will be live soon.";
    ReplyBack(x, reply);
  }
  else if(x == "open commands" || x == "commands" || x == "help")
  {
    var reply = "Following are some commands you could use: <br> <br><b>about</b>: Find more about me!<br><b>resume</b>: Have a look at my resume!<br><b>blog</b>: Visit my blog!<br><b>publications</b>: See some of my cool research work!<br><b>feedback</b>: Give me a feedback!<br><b>contact</b>: Connect with me!<br><b>change background</b>: Change website wallpaper<br><b>toggle textanimation</b>: Turn on/off the text animation<br><b>cool website, how did you pull it off?</b>"; /*<br><b>why should we hire you?</b>*/
    ReplyBack(x, reply);
  }
  else if(x == "why should we hire you?")
  {
    var reply = "<b>Looking forward to the conversation</b>!";
    ReplyBack(x, reply);
  }
  else if(x == "cool website, how did you pull it off?" || x == "cool website")
  {
    speed = 10;
    var reply = "Thanks for your kind words. I am still developing the website in the free time and I plan to add more features for better user interaction (not every person is a nerd who likes consoles). I developed this in a few hours and haven't updated the website since (if you still see this text, it holds true). <br><br>Please let me know what more features you would love to see (I know there's definitely including more GUI). Write me a feedback and I'll get back to you!";
    ReplyBack(x, reply);
  }
  else if(x == "toggle textanimation")
  {
    if (defaultSpeed == 0){
      speed = 20;
      defaultSpeed = 20;
      betweenSpeed = 100;
    }
    else{
      speed = 0;
      defaultSpeed = 0;
      betweenSpeed = 0;
    }
    var reply = "Done!";
    ReplyBack(x, reply);
  }
  else if(x == "exit")
  {
    window.close();
  }
  else
  {
    var reply = x + ": command not found. Use \"commands\" or \"help\" to see the possible commands.";
    ReplyBack(x, reply);
  }
}


$("#textfield").keyup(function(event) {
    if (event.keyCode === 13) {
        if(flag == true)
          handle();
    }
});
