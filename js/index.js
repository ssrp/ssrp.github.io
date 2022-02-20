var flag = false;
var i = 0;
var timeOut;
var speed = 0; //20;
var defaultSpeed = 0; //20;
var betweenSpeed = 0; //100;
var text_animation = false;
var wallpaper_location = ['budapest.jpg', 'capri.jpg', 'manali.jpg', 'restaurant.jpg', 'xincheng.jpg', 'milan.jpg', 'paris.jpg', 'pompeii.jpg', 'nice.jpg', 'accv-perth.jpg', 'bali.jpg', 'bali2.jpg', 'kingspark.jpg', 'nus.jpg', 'paris-seine.JPG', 'paris-seine2.JPG']
var wallpaper_label = ['Budapest, Hungary', 'Capri, Italy', 'Manali, India', 'Manali, India', 'Xincheng, Taiwan', 'Milan, Italy', 'Paris, France', 'Pompeii, Italy', 'Nice, France', 'Perth Convention and Exhibition Centre, Australia', 'Bali, Indonesia', 'Bali, Indonesia', 'Kings Park, Perth, WA', 'National University of Singapore, Singapore', 'Paris, France', 'Paris, France']

// This function is used to pause in between for some millisecondsCur
function pause(milliseconds) {
  var datee = new Date();
  while ((new Date()) - datee <= milliseconds) {  }
}
flag = false;
// This function does the job of printing at the given 'speeed', WHERE(which div), 'text'.
function dynamicprint(speed, where, string) {
  flag = false;
  if(text_animation){
      document.getElementById("inputForm").style.opacity=0;
      timeOut = setInterval(function(){
        i++;
      print = string.substring(0,i);
      if(i == string.length)
        {
        clearInterval(timeOut);flag = true;document.getElementById("inputForm").style.opacity=1; speed = defaultSpeed; 
        }
      document.getElementById("consoleArea").scrollTop = document.getElementById("consoleArea").scrollHeight;
      document.getElementById(where).innerHTML = print;

      if(i % 3000 == 29)
        pause(betweenSpeed); // extra waits
      }, speed);
  }
  else{
    document.getElementById(where).innerHTML = string;
    document.getElementById("consoleArea").scrollTop = document.getElementById("consoleArea").scrollHeight;
    i = string.length;
    flag = true;
  }
}
// this function starts the console
function start()
{
  speed = 1;
  //setTimeout(function(){i = 0; clearInterval(timeOut); dynamicprint(50, "infogames", "");}, 1200);
   dynamicprint(speed, "console", "<font color = 'red'>saiphaye@fakeTerminal:~$</font> cat info_saiphaye.txt<br><h4>Hey there! Welcome to my personal website!</h4><br> I am an Audio AI Engineer and a researcher at Zoom, based out of Singapore. Prior to this, I worked at <font color = 'yellow'>Shopee and Panasonic Industrial Devices Singapore</font>. I also worked at the <font color = 'cyan'>Sound and Music Computing Lab, National University of Singapore</font> where I researched on Computational Sound Scene Analysis. I graduated from <font color = 'red'>Indian Institute of Technology Ropar</font>, India in 2018 where I worked on Face Analytics and Object Detection. I am interested in Machine Learning, specially for music informatics and audiovisual computing. Have a look at my <a href ='./docs/SaiSamarthRPhaye_Resume.pdf' style='color:yellow' target='_blank'>CV</a> for more details.<br><br>I enjoy playing music on any instrument I get my hands on and love to compose new music on my guitar <i>(mostly mellow, to make you cry)</i>. I'd call myself peripatetic and I have stories to tell from over 14 different countries. In my free time, I play badminton, listen to music and read about rationality. <br><br>For now, I have incorporated some commands to play around with this website (type \"help\" for more details).<br><br>NOTE: PLEASE USE THE FULLSCREEN MODE FOR BETTER EXPERIENCE.<br><br>");
  
}

function ReplyBack(x, reply){
    reply = reply.concat("<br><br>");
    var string = document.getElementById("console").innerHTML;
    var default_str = "<font color = 'red'>saiphaye@fakeTerminal:~$</font> " + x + "<br>";
    string = string + default_str;
    i =  i + default_str.length;
    string = string.concat(reply);
    dynamicprint(speed, "console", string);
    document.getElementById("textfield").value = "";
}

function nav_click(x){

  //document.getElementById("background_video").muted=true;
  //document.getElementsByClassName("fullscreen-bg")[0].style.opacity = "0";
  if(x == "about")
  {
    document.getElementById("textfield").value = "about";
    if(flag==true) handle();
  }
  else if(x == "research")
  {
    document.getElementById("textfield").value = "research";
    if(flag == true) handle();
  }
  else if(x == "music")
  {
    if(flag == true) {
      document.getElementById("background_video").muted=false;
      document.getElementById("background_video").play();
      var body = document.body,
      html = document.documentElement;
      var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
      var width = Math.max( body.scrollWidth, body.offsetWidth, 
                       html.clientWidth, html.scrollWidth, html.offsetWidth );
      if(width/height > 720/480)
      {
        console.log('width')
        document.getElementsByClassName("fullscreen-bg")[0].style.width = "100%";
        document.getElementsByClassName("fullscreen-bg")[0].style.height = "auto";
        document.getElementsByClassName("fullscreen-bg")[0].style.top = "0em";
        document.getElementsByClassName("fullscreen-bg")[0].style.left = "0em";
      }
      else
      {
        console.log('height')
        document.getElementsByClassName("fullscreen-bg")[0].style.height = "100%";
        document.getElementsByClassName("fullscreen-bg")[0].style.width = "auto";
        document.getElementsByClassName("fullscreen-bg")[0].style.top = "0em";
        document.getElementsByClassName("fullscreen-bg")[0].style.left = "0em";
      }
      document.getElementsByClassName("fullscreen-bg")[0].style.opacity = "1";
      document.getElementById("textfield").value = "music";
      handle();
    }
  }
  else if(x == "writings")
  {
    document.getElementById("textfield").value = "writings";
    if(flag == true) handle();
  }
  else if(x == "contact")
  {
    document.getElementById("textfield").value = "contact";
    if(flag == true) handle();
  }
  else if(x == "commands")
  {
    document.getElementById("textfield").value = "commands";
    if(flag == true) handle();
  }
}

// this function is called when we submit the text box
function handle(){
  var x = document.getElementById("textfield").value;
  x = x.toLowerCase();
  x = x.replace(/\s+/g,' ').trim();
  if(x == "hi" || x == "hi" || x == "hii" || x == "bonjour" || x == "hello" || x == "hey" || x == "heyy")
  {
    var reply = "Hey there! ^_^ Thank you for visiting my website!";
    ReplyBack(x, reply);
  }
  else if(x == "change bg" || x == "change background" || x == "change wallpaper")
  {
    document.getElementsByClassName("fullscreen-bg")[0].style.opacity = "0";
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
    var reply = "Thank you very much, would love to hear from you! <br>You could send me an <font color = 'yellow'>e-mail at <b><code>&#x70;&#x68;&#x61;&#x79;&#x65;&#x2E;&#x73;&#x61;&#x6D;&#x61;&#x72;&#x74;&#x68;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</code></b></font> with <i>subject</i> \"<b>website feedback</b>\".";
    ReplyBack(x, reply);
  }
  else if(x == "email")
  {
    var reply = "<b><code>&#x70;&#x68;&#x61;&#x79;&#x65;&#x2E;&#x73;&#x61;&#x6D;&#x61;&#x72;&#x74;&#x68;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</code>, <code>&#x32;&#x30;&#x31;&#x34;&#x63;&#x73;&#x62;&#x31;&#x30;&#x32;&#x39;&#x40;&#x69;&#x69;&#x74;&#x72;&#x70;&#x72;&#x2E;&#x61;&#x63;&#x2E;&#x69;&#x6E;</code></b></font>";
    ReplyBack(x, reply);
  }
  else if(x == "about")
  {
    if(defaultSpeed != 0 && defaultSpeed <=30) 
      speed = 10
    var reply = "I was born and raised in Raipur, a city in central India. I completed my Bachelor of Technology in Computer Science and Engineering from <font color = 'yellow'>Indian Institute of Technology Ropar</font> in 2018. Post bachelors, I joined <font color = 'orange'>National University of Singapore</font> as a graduate researcher under the supervision of A/Prof. Wang Ye from NUS and Dr. Emmanouil Benetos from the School of EECS, Queen Mary University of London to work on Computational Sound Scene Analysis. Thereafter, I worked as a <font color = 'yellow'>Machine Learning Engineer at Panasonic Industrial Devices Singapore</font>, where I developed human sensing technologies using machine learning. I spent my time on demographics detection using facial images and developing models deployable on the edge without compromising the performance. I also developed an end-to-end anomaly detection system which runs on a novel ML algorithm for which a provisional patent application is submitted. Currently, I am working with the core ML team at Shopee SG, where my focus is on developing NLP models which shape the backbone of recommendation system at Shopee. Have a look at my <a href ='./docs/SaiSamarthRPhaye_Resume.pdf' style='color:yellow' target='_blank'>Resume</a> for more details. I am interested in Machine Learning, specially for music informatics and audiovisual computing.<br><br>I enjoy playing music on any instrument I get my hands on and love to compose new music on my guitar <i>(mostly mellow, to make you cry)</i>. I'd call myself peripatetic and I have stories to tell from over 14 different countries. In my free time, I play badminton, listen to music and read about rationality.";
    ReplyBack(x, reply);
  }
  else if(x == "unmute")
  {
    document.getElementById("background_video").muted=false;
    document.getElementById("background_video").play();
    var reply = "Unmuted!";
    ReplyBack(x, reply);
  }
  else if(x == "mute")
  {
    document.getElementById("background_video").muted=true;
    var reply = "Muted!";
    ReplyBack(x, reply);
  }
  else if(x == "music")
  {
    var reply = "Having taken to the tabla at a very early age, my diverse musical influences ranging from the the likes of Linkin Park to Michael Jackson, soon I started exploring my creativity on an old acoustic guitar borrowed from an uncle. I found himself spending hours trying to work out new and interesting harmonic progressions; or crafting interesting melodies on the instrument. <br> <br> Playing the guitar became an outlet for everything I wished to express and soon it cultivated in me a burning passion to create my own unique brand of art. <br> <br> During my undergraduate studies at IIT Ropar in India, I performed at numerous musical events and honed my skills in the art of finger-style and improvisational techniques like percussive guitar work. At one point, during a trip to France, I even busked on the streets of Paris, an experience that will stay with me for a lifetime.<br> <br> My passion for music led me to pursue scientific research in the field of Audio Informatics at NUS, Singapore and during this time I also performed with the highly acclaimed NUS Guitar Ensemble. <br> <br> Alongside research, I am inspired to become a singer-songwriter in addition to crafting beautiful instrumental pieces like <a href='https://www.youtube.com/watch?v=58SS6Z-6Ymc' style='color:yellow' target='_blank'>Child's Play</a>.";
    ReplyBack(x, reply);
  }
  else if(x == "contact")
  {
    speed = 1
    var reply = "Thanks for your interest, the best way to contact is via e-mail, following are some options:<br> <ol style='margin-bottom:-2em'><li>Mobile: <b>+65 (0) 9869 3516</b></li><li>e-mail: <b><code>&#x70;&#x68;&#x61;&#x79;&#x65;&#x2E;&#x73;&#x61;&#x6D;&#x61;&#x72;&#x74;&#x68;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</code>, <code>&#x32;&#x30;&#x31;&#x34;&#x63;&#x73;&#x62;&#x31;&#x30;&#x32;&#x39;&#x40;&#x69;&#x69;&#x74;&#x72;&#x70;&#x72;&#x2E;&#x61;&#x63;&#x2E;&#x69;&#x6E;</code></b></li><li>LinkedIn: <b><a href = 'https://www.linkedin.com/in/ssrp/' style='color:yellow' target = '_blank'>ssrp</a></b></li><li>GitHub: <b><a href = 'https://github.com/ssrp/' style='color:yellow' target = '_blank'>ssrp</a></b></li><li>Instagram: <b><a href = \"https://www.instagram.com/_ssrp/\" style='color:yellow' target = \"_blank\">_ssrp</a></b></li><li>YouTube: <b><a href = 'https://www.youtube.com/channel/UCGx6F_XKD2JS-NJQl7liszw' target = '_blank' style='color:yellow'>saiphaye</a></b></li></ol>";
    ReplyBack(x, reply);
  }
  else if(x == "resume" || x == "cv")
  {

    // TO DO
    var reply = "<font color = 'yellow'><a href ='./docs/SaiSamarthRPhaye_Resume.pdf' style='color:yellow' target='_blank'>Here's a PDF version</a></font> of my resume.";
    ReplyBack(x, reply);
  }
  else if(x == "publications" || x == "publication" || x == "research")
  {
    var reply = "<a href = 'https://scholar.google.com/citations?user=Ds047PsAAAAJ&hl=en' style='color:yellow' target='_blank'>Click here</a> to get to my Google Scholar page. I was fortunate to publish my creative ideas in conferences such as IEEE ICASSP, ACCV and IEEE ISM. I have also co-authored a journal article published in Medical Image Analysis. For more details, here's my <font color = 'yellow'><a href ='./docs/SaiSamarthRPhaye_Resume.pdf' style='color:yellow' target='_blank'>Resume</a></font>.";
    ReplyBack(x, reply);
  }
  else if(x == "blog" || x == "writings" || x == "writing")
  {
    var reply = "<h4>#0 <a href ='https://saiphaye.wordpress.com/2017/09/08/people-perception-math/' style='color:yellow' target='_blank'>People. Perception. Math.</a></h4><h4>#1 <a href ='https://saiphaye.wordpress.com/2017/09/22/when-do-i-cry-emotions-are-good/' style='color:yellow' target='_blank'>Emotions are good.</a></h4><h4>#2 <a href ='javascript:void(0);' style='color:yellow' target='_blank'>Traveling Back in Time (theoretically?)</a></h4><h4>#3 <a href ='javascript:void(0);' style='color:yellow' target='_blank'>GRE: an year of mental preparation and three weeks of hard work</a></h4><h4>#4 <a href ='javascript:void(0);' style='color:yellow' target='_blank'>I make music and music makes me, me.</a></h4><br>Please note that <i>only the first blog is active</i> and I am currently compiling other blog posts and integrating them with this website instead of wordpress. Will be released soon.";
    ReplyBack(x, reply);
  }
  else if(x == "open commands" || x == "commands" || x == "help")
  {
    var reply = "Following are some commands you could use: <br> <br><b>about</b>: Find more about me!<br><b>resume</b>: Have a look at my resume!<br><b>blog</b>: View my blogs!<br><b>publications</b>: See some of my interesting research work!<br><b>feedback</b>: Give me a feedback!<br><b>mute/unmute</b>: Mute or unmute the background music!<br><b>contact</b>: Connect with me!<br><b>change background</b>: Change website wallpaper<br><b>toggle textanimation</b>: Turn on/off the text animation<br><b>cool website, how did you pull it off?</b>"; /*<br><b>why should we hire you?</b>*/
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
    var reply = "Thanks for your kind words haha ^_^ I enjoy web-development and I intermittently work on this website whenever I feel like taking a break from research. I plan to add more features for better user interaction (not every person is a nerd who likes consoles). <br><br>Please let me know what other features you would love to see and I'll try my best to get you the best user experience. Write me a feedback at <b><code>&#x70;&#x68;&#x61;&#x79;&#x65;&#x2E;&#x73;&#x61;&#x6D;&#x61;&#x72;&#x74;&#x68;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;</code></b> and I'll get back to you!";
    ReplyBack(x, reply);
  }
  else if(x == "toggle textanimation")
  {
    if(text_animation) text_animation = false;
    else text_animation = true;

    if (defaultSpeed == 0){
      speed = 5;
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
