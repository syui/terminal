
$(function() {

if (window.location.protocol == "http:") {
$.get("//ipinfo.io", function (response) {        
	IP = response.ip;
	Hostname = response.hostname;
	Loc = response.loc;
	Country = response.country;
	ifconfig = "{ hint : 'js,cookie = true' }\n{ hint : 'addon = false' }\nYou :\n\tIP : " + IP + ",\n\tHostname : " + Hostname + ",\n\tCountry : " + Country + ",\n\tLoc : " + Loc; 
	username = Country + ":" + IP;
	prompt_origin = "[[b;#d33682;]root]@[[b;#6c71c4;]"+username+"] ~$ ";
if ( navigator.userAgent.indexOf('iPhone') > 0 ){
    ganesha = "\
	\n                 -/+:.          root@user\
	\n                :++++.          OS: iOS\
	\n               /+++/.           \
	\n       .:-::- .+/:-``.::-       \
	\n    .:/++++++/::::/++++++/:`    \
	\n  .:///////////////////////:`   \
	\n  ////////////////////////`     \
	\n -+++++++++++++++++++++++`      \
	\n /++++++++++++++++++++++/       \
	\n /sssssssssssssssssssssss.      \
	\n :ssssssssssssssssssssssss-     \
	\n  osssssssssssssssssssssssso/`  \
	\n  `syyyyyyyyyyyyyyyyyyyyyyyy+`  \
	\n   `ossssssssssssssssssssss/\
	\n     :ooooooooooooooooooo+.\
	\n      `:+oo+/:-..-:/+o+/-\
		";
} else if( navigator.userAgent.indexOf('Macintosh') > 0 ){
    ganesha = "\
	\n                 -/+:.          root@user\
	\n                :++++.          OS: Mac OS X\
	\n               /+++/.           \
	\n       .:-::- .+/:-``.::-       \
	\n    .:/++++++/::::/++++++/:`    \
	\n  .:///////////////////////:`   \
	\n  ////////////////////////`     \
	\n -+++++++++++++++++++++++`      \
	\n /++++++++++++++++++++++/       \
	\n /sssssssssssssssssssssss.      \
	\n :ssssssssssssssssssssssss-     \
	\n  osssssssssssssssssssssssso/`  \
	\n  `syyyyyyyyyyyyyyyyyyyyyyyy+`  \
	\n   `ossssssssssssssssssssss/\
	\n     :ooooooooooooooooooo+.\
	\n      `:+oo+/:-..-:/+o+/-\
		";
} else if( navigator.userAgent.indexOf('Ubuntu') > 0 ){
    ganesha = "\
	\n                          ./+o+-       root@user\
	\n                  yyyyy- -yyyyyy+      OS: Ubuntu\
	\n               ://+//////-yyyyyyo      \
	\n           .++ .:/++++++/-.+sss/`      \
	\n         .:++o:  /++++++++/:--:/-      \
	\n        o:+o+:++.`..```.-/oo+++++/     \
	\n       .:+o:+o/.          `+sssoo+/    \
	\n  .++/+:+oo+o:`             /sssooo.   \
	\n /+++//+:`oo+o               /::--:.\
	\n \+/+o+++`o++o               ++////.\
	\n  .++.o+++oo+:`             /dddhhh.\
	\n       .+.o+oo:.          `oddhhhh+\
	\n        \+.++o+o``-````.:ohdhhhhh+\
	\n         `:o+++ `ohhhhhhhhyo++os:\
	\n           .o:`.syhhhhhhh/.oo++o`\
	\n               /osyyyyyyo++ooo+++/\
	\n                   ````` +oo+++o\:\
	\n                          `oo++.\
    ";
} else if( navigator.userAgent.indexOf('Gentoo') > 0 ){
    ganesha = "\
	\n         -/oyddmdhs+:.                root@user\
	\n     -odNMMMMMMMMNNmhy+-`             OS: Gentoo\
	\n   -yNMMMMMMMMMMMNNNmmdhy+-           \
	\n `omMMMMMMMMMMMMNmdmmmmddhhy/`        \
	\n omMMMMMMMMMMMNhhyyyohmdddhhhdo`      \
	\n.ydMMMMMMMMMMdhs++so/smdddhhhhdm+`    \
	\n oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.   \
	\n  :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh   \
	\n    .:+sydNMMMMMNNNmmmdddhhhhhhmMmy\
	\n       /mMMMMMMNNNmmmdddhhhhhmMNhs:\
	\n    `oNMMMMMMMNNNmmmddddhhdmMNhs+`\
	\n  `sNMMMMMMMMNNNmmmdddddmNMmhs/.\
	\n /NMMMMMMMMNNNNmmmdddmNMNdso:`\
	\n+MMMMMMMNNNNNmmmmdmNMNdso/-\
	\nMNNNNNNNmmmmmNNMmhs+/-`\
	\n/hMMNNNNNNNNMNdhs++/-`\
	\n`/ohdmmddhys+++/:.`\
	\n  `-//////:--.\
    ";
} else if( navigator.userAgent.indexOf('Linux Mint') > 0 ){
    ganesha = "\
	\n                                       root@user\
	\n MMMMMMMMMMMMMMMMMMMMMMMMMmds+.        OS: Linux Mint\
	\n MMm----::-://////////////oymNMd+`     \
	\n MMd      /++                -sNMd:    \
	\n MMNso/`  dMM    `.::-. .-::.` .hMN:   \
	\n ddddMMh  dMM   :hNMNMNhNMNMNh: `NMm   \
	\n     NMm  dMM  .NMN/-+MMM+-/NMN` dMM   \
	\n     NMm  dMM  -MMm  `MMM   dMM. dMM   \
	\n     NMm  dMM  -MMm  `MMM   dMM. dMM\
	\n     NMm  dMM  .mmd  `mmm   yMM. dMM\
	\n     NMm  dMM`  ..`   ...   ydm. dMM\
	\n     hMM- +MMd/-------...-:sdds  dMM\
	\n     -NMm- :hNMNNNmdddddddddy/`  dMM\
	\n      -dMNs-``-::::-------.``    dMM\
	\n       `/dMNmy+/:-------------:/yMMM\
	\n          ./ydNMMMMMMMMMMMMMMMMMMMMM\
	\n             \.MMMMMMMMMMMMMMMMMMM\
    ";
} else if( navigator.userAgent.indexOf('Debian') > 0 ){
    ganesha = "\
	\n         _,met$$$$$gg.           root@user\
	\n      ,g$$$$$$$$$$$$$$$P.        OS: Debian\
	\n    ,g$$P''       '''Y$$.'.      \
	\n   ,$$P'              `$$$.      \
	\n  ',$$P       ,ggs.     `$$b:    \
	\n  `d$$'     ,$P''   .    $$$     \
	\n   $$P      d$'     ,    $$P     \
	\n   $$:      $$.   -    ,d$$'     \
	\n   $$\;      Y$b._   _,d$P'\
	\n   Y$$.    `.`'Y$$$$P''\
	\n   `$$b      '-.__\
	\n    `Y$$\
	\n     `Y$$.\
	\n       `$$b.\
	\n         `Y$$b.\
	\n            `'Y$b._\
	\n                `''''\
    ";
} else if( navigator.userAgent.indexOf('Arch Linux') > 0 && Country !== "JP" ){
    ganesha = "\
	\n                   -`\
	\n                  .o+`                 root@user\
	\n                 `ooo/                 OS: Arch Linux\
	\n                `+oooo:                \
	\n               `+oooooo:               { success : 'access = /2016/01/01/aiebeegh8Gaejo3e'}\
	\n               -+oooooo+:              \
	\n             `/:-:++oooo+:             \
	\n            `/++++/+++++++:            \
	\n           `/++++++++++++++:           \
	\n          `/+++ooooooooooooo/`\
	\n         ./ooosssso++osssssso+`\
	\n        .oossssso-````/ossssss+`\
	\n       -osssssso.      :ssssssso.\
	\n      :osssssss/        osssso+++.\
	\n     /ossssssss/        +ssssooo/-\
	\n   `/ossssso+/:-        -:/+osssso+-\
	\n  `+sso+:-`                 `.-/+oso:\
	\n `++:.                           `-/+/\
	\n .`                                 `/\
    		";
} else if( navigator.userAgent.indexOf('Arch Linux') > 0 ){
    ganesha = "\
	\n                   -`\
	\n                  .o+`                 root@user\
	\n                 `ooo/                 OS: Arch Linux\
	\n                `+oooo:                Country: JP\
	\n               `+oooooo:               { hint : Please access from outside Japan. }\
	\n               -+oooooo+:              \
	\n             `/:-:++oooo+:             \
	\n            `/++++/+++++++:            \
	\n           `/++++++++++++++:           \
	\n          `/+++ooooooooooooo/`\
	\n         ./ooosssso++osssssso+`\
	\n        .oossssso-````/ossssss+`\
	\n       -osssssso.      :ssssssso.\
	\n      :osssssss/        osssso+++.\
	\n     /ossssssss/        +ssssooo/-\
	\n   `/ossssso+/:-        -:/+osssso+-\
	\n  `+sso+:-`                 `.-/+oso:\
	\n `++:.                           `-/+/\
	\n .`                                 `/\
    		";
} else {
    ganesha = "\
	\nroot@user\
	\nOS: ---\
	\n{ hint : 'user-agent = true' }\
  		";
};
}, "jsonp");

} else {

	ganesha = "\
		\nroot@user\
		\nOS: ---\
		\n{ hint : 'ssl = false' }\
	";
	username = "user";
	ifconfig = "{ hint : 'ssl = false' }"
	prompt_origin = "[[b;#d33682;]root]@[[b;#6c71c4;]"+username+"] ~$ ";
};

var about = "\
	     	\n[[b;#d33682;]========= about ==========]\
	     	\n\
	     	\nAuthor : syui\
	     	\nNice to meet you. I am a computer novice.\
	     	\n\
	";
    var pacman_install_message_pre = "\
	\naliased to pacman -S mbahack --noconfirm\
	\nresolving dependencies...\
	\nlooking for conflicting packages...\
	\n\
	\nPackages (1) mbahack-1.0-2\
	\n\
	\nTotal Installed Size:  0.00 MiB\
	\n\
	\n:: Proceed with installation? [Y/n]y\
	\n(1/1) checking keys in keyring                       [#######################] 100%\
	\n(1/1) checking package integrity                     [#######################] 100%\
	\n(1/1) loading package files                          [#######################] 100%\
	\n(1/1) checking for file conflicts                    [#######################] 100%\
	\n(1/1) checking available disk space                  [#######################] 100%\
	\n(1/1) installing mbahack                             [#######################] 100%\
	\nYou can try again using [[b;#d33682;]help].\
	\n ";
    var pacman_install_message_post = "";
    var pacman_start_message_post = "\n\
	\nYou can try again using [[b;#d33682;]pacman -S mbahack].\
	\n \
	\nPress [[b;#859900;]enter (↩)] to install the pacman on this terminal.\
	\n";
    var pacman_update_message_post = "\
	\n:: Synchronizing package databases...\
	\n core is up to date\
	\n extra                                          1765.9 KiB  1796K/s 00:01 [#######################] 100%\
	\n community                                         3.2 MiB  3.10M/s 00:01 [#######################] 100%\
	\n archlinuxfr is up to date\
	\n:: Starting full system upgrade...\
	\n there is nothing to do\
    ";
    var prompt = "[[b;#d33682;]root]@[[b;#6c71c4;]user] ~$ ";
    var nyan_command= prompt + 'curl -sL git.io/nyancat | bash';
    var days_left = Math.round((new Date('2016 01 01') - new Date())/(1000*60*60*24));
    var mbahack_url = "https://syui.github.io/terminal";
    var rsvp_url = "https://mba-hack.github.io/nyancat";
    var venue_address = "\
	\nAccess to the personal site\
    ";

  var os_pre = "\
	\n[[b;#d33682;]========= system ==========]\
  ";
  var system_hint = "\
  	\n{ hint : 'js,cookie = true' }\
  	\n{ hint : 'addon = false' }\
  ";
  var jai_weds_prerita = prompt + 'toilet Please access on Arch Linux' + '\
\n                                                                             \
\n mmmmm  ""#                                                                  \
\n #   "#   #     mmm    mmm    mmm    mmm           mmm    mmm    mmm    mmm  \
\n #mmm#"   #    #"  #  "   #  #   "  #"  #         "   #  #"  "  #"  "  #"  # \
\n #        #    #""""  m"""#   """m  #""""         m"""#  #      #      #"""" \
\n #        "mm  "#mm"  "mm"#  "mmm"  "#mm"         "mm"#  "#mm"  "#mm"  "#mm" \
\n                                                                             \
\n                                                                             \
\n                                                                             \
\n                                             mm                 #            \
\n  mmm    mmm           mmm   m mm            ##    m mm   mmm   # mm         \
\n #   "  #   "         #" "#  #"  #          #  #   #"  " #"  "  #"  #        \
\n  """m   """m         #   #  #   #          #mm#   #     #      #   #        \
\n "mmm"  "mmm"         "#m#"  #   #         #    #  #     "#mm"  #   #        \
\n                                                                             \
\n                                                                             \
\n                                                                             \
\n m        "                                                                  \
\n #      mmm    m mm   m   m  m   m                                           \
\n #        #    #"  #  #   #   #m#                                            \
\n #        #    #   #  #   #   m#m                                            \
\n #mmmmm mm#mm  #   #  "mm"#  m" "m                                           \
\n\
	';
  var os_post = "\
	\n{ hint : Please access on [[b;#cb4b16;]" + "Arch Linux" + "]. }                 \
	\n\
  ";

  var mbahack_help = "\
	Commands: \
	\n\t[[b;#268bd2;]mbahack home]\
	\n\t[[b;#268bd2;]mbahack about]\
	\n\t[[b;#268bd2;]mbahack link]\
	\n\t[[b;#268bd2;]mbahack system]\
	\n\t[[b;#268bd2;]mbahack nyancat]\
  ";


  var link = "\
      \n[[b;#d33682;]========= link ==========]\
      \nicon : https://avatars3.githubusercontent.com/u/1867108\
      \nblog : https://syui.github.io\
      \nslack : https://syui.slack.com\
      \ntwitter : https://twitter.com/syui__\
      \ngithub : https://github.com/syui\
      \ngitlab : https://gitlab.com/u/syui\
      \nqiita : https://qiita.com/syui\
      \nlingr : http://lingr.com/syui\
      \ndocker : https://hub.docker.com/u/syui\
      \nwercker : https://app.wercker.com/syui\
      \nstackshare : https://stackshare.io/syui\
      \nasciinema : https://asciinema.org/~syui\
      \nteratail : https://teratail.com/users/syui\
  ";
  var rsvp = "\
      \nNyan Cat made with HTML5+CSS3 (and JavaScript :T).\
      \nhttps://mba-hack.github.io/nyancat/\
      \n        \
  ";
  var you_are_late = ""
  if (days_left >= 0) {
    you_are_late = ''
  }

  var zsh_start_prompt ="\
      \nThis is the Z Shell configuration function for new users, zsh-newuser-install.\
      \nYou are seeing this message because you have no zsh startup files\
      \n(the files .zshenv, .zprofile, .zshrc, .zlogin in the directory\
      \n~).  This function can help you with a few settings that should\
      \nmake your use of the shell easier.\
      \n\
      \nYou can:\
      \n\
      \n(q)  Quit and do nothing.  The function will be run again next time.\
      \n\
      \n(0)  Exit, creating the file ~/.zshrc containing just a comment.\
      \n     That will prevent this function being run again.\
      \n\
      \n(1)  Continue to the main menu.\
      \n\
      \n[[b;#d33682;]--- Type one of the keys in parentheses --- q]\
  ";

  var greetings = jai_weds_prerita ;
  var pacman_list_empty = '\n*** LOCAL pacmanS ***\n';
  var pacman_list_full = 'ls\
      \nifconfig\
      \nsystem\
      \nzsh\
  ';
var print_pacman = pacman_start_message_post;
    function print_slowly(term, paragraph, callback) {
      var foo, i, lines;
      lines = paragraph.split("\n");
      term.pause();
      i = 0;
      foo = function(lines) {
        return setTimeout((function() {
          if (i < lines.length -1) {
            term.echo(lines[i]);
            i++;
            return foo(lines);
          } else {
            term.resume();
            return callback();
          }
        }), 100);
      };
      return foo(lines);
    };
    function require_command(command_regex, terminal_history) {
      var executed = true;
      $.each(terminal_history, function(index, value){
        if (command_regex.test(value)) {
          executed = true
        }
      });
      return executed;
        
    }
    var pacman_install_regex = /pacman +-S +mbahack */ig;

    // Handle pacman command
    function pacman(inputs, term){
      // No second argument
      if (!inputs[1]) {
        term.echo(print_pacman);
      } else if (inputs[1] === '-S' && inputs[2] === 'mbahack') {
        print_slowly(term, pacman_install_message_pre, function(){
          term.echo(pacman_install_message_post)
        });
      } else if (inputs[1] === '-Syu') {
        print_slowly(term, pacman_update_message_post);
      } else if (inputs[1] === '-V') {
        term.echo('4.2.1');
      } else if (inputs[1] == '-Q') {
        // if history has install mbahack
        term.echo(pacman_list_full);
        // else
        // term.echo(pacman_list_empty)
      } else {
        term.echo(inputs.join(" ") + " is not a valid command")
      }
    }

    // Handle mbahack command
    function mbahack(inputs, term){
      if (!inputs[1]) {
        term.echo(mbahack_help);
      } else if (inputs[1] === "about") {
        term.echo(about);
      } else if (inputs[1] === "link") {
        term.echo(link)
      } else if (inputs[1] === "ifconfig") {
        term.echo(ifconfig)
      } else if (inputs[1] === "system") {
        term.echo(os_pre);
        term.echo("[[;#b58900;]"+ganesha+ "]");
        term.pause();
        setTimeout(function(){
          term.resume();
          //term.echo(jai_weds_prerita);
          term.pause();
          setTimeout(function(){
            term.resume();
            term.echo(os_post);
          }, 400)
        }, 500)
        
      } else if (inputs[1] === "home") {
        term.echo(venue_address);
        term.echo(mbahack_url);
        term.push(function(command, term) {
          if (/y(es){0,1}/.test(command)) {
            window.open(
              mbahack_url,
              '_blank'
            );
          }
          term.pop();
        }, {
          prompt: 'Do you want to open this home in the browser? (yes/no) ',
          greetings: null
        });
      } else if (inputs[1] === "nyancat") {
        term.echo(rsvp)
        term.push(function(command, term) {
          window.open(
              rsvp_url,
              '_blank'
          );
          term.pop();
        }, {
          prompt: 'alternatively send me a browser in a new window when you press [[b;#859900;]enter (↩)]',
          greetings: null
        });
      } else {
        term.error(inputs.join(" ") + " is not a valid command")
      }
    }

    // Main interpreter function
    function interpreter(input, term) {
      var command, inputs;
      inputs = input.split(/ +/)
      command = inputs[0];
      if (command === "pacman") {
        pacman(inputs, term);
      } else if (command === "mbahack" || command === "help") {
        window.terminal = term;
        if (require_command(pacman_install_regex, term.history().data())) {
          mbahack(inputs, term);
        } else {
          term.error('Please install the pacman first by executing\npacman -S mbahack');
        }
      } else if (/(cd)|(cat)/.test(command)) {
        bash(inputs, term);
      } else if (input === "ruby -v"){
        term.echo("2.3.0");
      } else if (/which +mbahack/.test(input)) {
        if (require_command(pacman_install_regex, term.history().data())) {
          term.echo("/usr/bin/mbahack");
        } // else do nothing
      } else if (/which/.test(input)) {
        term.echo("You can try again using [[b;#d33682;]which mbahack].");
      } else if (/zsh/.test(input)) {
        term.echo(zsh_start_prompt);
      } else if (/nyan/.test(input)) {
        term.echo(nyan_command);
      } else if (/whoami/.test(input)) {
        term.echo("root");
      } else if (/toilet mba-hack/.test(input)) {
        term.echo('\
	\n        #                    #                    #     \
	\n mmmmm  #mmm    mmm          # mm    mmm    mmm   #   m \
	\n # # #  #" "#  "   #         #"  #  "   #  #"  "  # m"  \
	\n # # #  #   #  m"""#   """   #   #  m"""#  #      #"#   \
	\n # # #  ##m#"  "mm"#         #   #  "mm"#  "#mm"  #  "m \
	');
      } else if (/toilet/.test(input)) {
        term.echo("You can try again using [[b;#d33682;]toilet mba-hack].");
      } else if (/about/.test(input)) {
        term.echo(about);
      } else if (/link/.test(input)) {
        term.echo(link);
      } else if (/system/.test(input)) {
        term.echo("[[;#b58900;]"+ganesha+ "]"+system_hint);
      } else if (/prompt/.test(input)) {
        term.echo(prompt_origin);
      } else if (/ifconfig/.test(input)) {
        term.echo(ifconfig);
      } else if (/uname -a/.test(input)) {
        term.echo("Linux MacBook-Air 4.4-ARCH x86_64 GNU/Linux");
      } else if (/uname/.test(input)) {
        term.echo("Linux");
      } else if (command.length === 0) {
        // do nothing
	} else if (/ls \/usr\/bin/.test(input)) {
        term.echo(pacman_list_full);
	} else if (/ls/.test(input)) {
        term.echo("You can try again using [[b;#d33682;]ls /usr/bin].");
      } else {
        term.error(command + " is not a valid command");
      }
    }

    // Handle bash commands
    function bash(inputs, term) {
      var argument, echo, insert;

      echo = term.echo;
      insert = term.insert;
      if (!inputs[1]) {
        return console.log("none");
      } else {
        argument = inputs[1];
        if (/^\.\./.test(argument)) {
          return echo("-bash: cd: " + argument + ": Permission denied");
        } else {
          return echo("-bash: cd: " + argument + ": No such file or directory");
        }
      }
    };

    $('#terminal').terminal( interpreter, {
      prompt: prompt,
      name: 'mbahack',
      greetings: greetings,
      height: 600,
      onInit: function(term){
        term.insert("");
        term.history().clear();
      },
      completion: function(term, string, callback){
        callback(['ifconfig',
          'system',
          'ls',
          'pacman']);
      },
      tabcompletion: true
    });

});
