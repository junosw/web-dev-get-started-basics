# Web dev basics

The audience for this project is people that are interested in web development (or software development in general), have no-to-little academic or professional experience and are looking for a way to get started.

There are of course approximately a billion resources for this kind of information on the web but primarily because there are so many sources of information, it is often overwhelming to determine what is the "best" or "right" way to get going. I'm a software developer myself with twenty years experience developing with numerous technologies and languages and this is my way of presenting "how to get started". It is intended for my family, friends and acquantances that have expressed any interest in learning how to be a software developer so that they can avoid the problem of feeling overwhelmed and hence never getting started and finding out if software dev is a good fit for them.

There are many great ways someone could find out if software dev is a good fit for them - this is just one way. I believe the approach outlined below is a good approach for a couple of reasons:

1. Often people with no-to-little experience are not sure if they will be able to sustain an interst in software dev - they want to find out.  In this situation, starting at on "real dev things" is key - you will get to see what it is really like to do what software developers do with a small investment of your time. This tutorial introduces some keys tools and technologies developers use every day and using them right away is the best way to find out if you are interested in continuing down the path.

2. This approach is straightforward, technically simple and can be done in small pieces to get working the basics of what any dev must know... in general. Depending on what languages you may end up working with, the details may be different and of course there are thousands of tools and platforms available to do dev work with. But in general, if you find _this particular_ process painful or uninteresting, software dev may not be for you.

With that preamble out of the way, hopefully this helps bootstrap your first dev project... the first of many!

# Step 1
Step 1 to any good dev project is to create a code repo.  There are lots of good reasons to use a code repo - [here's a link to a generic overview](https://www.atlassian.com/git/tutorials/what-is-version-control) if you're interested in learning more. The basic reason you would want to use a code repo is just to have a safe place to store your code in the cloud that is accessible from any device i.e. you don't have to worry about losing your project and to enable you to easily work with others.

There are lots of tools out you can use for a code repo (aka source control) but one prolific industry standard is Git [(wikipedia link)](https://en.wikipedia.org/wiki/Git).  Git is awesome and there's a very nice web application that most people use with it - GitHub (github.com).  Both Git and GitHub are free... these are powerful tools with lots to learn but they are also very easy to use for the basics so don't get lost in the details. The goal is to just setup one code repo :)   Here are the steps:

## Set up the code repo
1. Install Git on your local machine.  [Instructions for most OS can be found here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Create an account on GitHub
3. Create a directory on your local machine where you want to keep your code
4. (Optional) Setup security... basically, the goal is to connect your local machine to your GitHub account.  There are two ways you can authenticate with GitHub - username and password or SSH key.  SSH key is the most convenient over time but is likely the more difficult only because most people aren't familiar with using SSH keys :)  [Here are the instructions on how to do this](https://help.github.com/en/articles/connecting-to-github-with-ssh) or you can just skip this and use your username and password initially to get started. You can always setup an SSH key later if you find yourself getting tired of entering username/pw.
5. This particular repo is a "starter project". Clone this repo from GitHub into that local directory that you created in step 3. Here's how to clone:
    1. From the command line in the project directory you created, using Git...
        1. it looks like this if you want to auth with username/pw: `git clone https://github.com/junosw/web-dev-get-started-basics.git`
        2. If using SSH, this is the command:  `git clone git@github.com:junosw/web-dev-get-started-basics.git`
Just FYI, "junosw" is my GitHub username.

If successful, at this point you have a local dev machine directory with code that you've sync'd from a code repo in GitHub! This is real developer stuff  :)  ...most every developer in the real world starts a project this way, whether a personal project or when joining a new company.  So let's go to Step 2 - do something with a real project.

# Step 2

First thing you need is a code editor... think, "Microsoft Word" but for code. There are tons of editors out there, many are free.  A fairly popular one that I use that is free is VSCode.  You can get that [here](https://code.visualstudio.com/) or explore others and find one you want to try out.

## Do something with the code
1. Get code editor
2. Open the code directory from step 1.3 above in the editor.  In VSCode this is just a matter of "Open folder" then browse to the directory you created, where the code is.
3. At this point you should be looking at this starter project
4. A couple notes on the project files/folders:
    1. "src" is very common shorthand for "the directory where the source code is at"
    2. This is a very basic web page and a basic folder structure.  Any project is free to organize the code however they like but typically people use expected conventions so that other developers can find things easily. 
    3. My use of "index" for file names is just a generic convention for "the starting point file".  Typically a web project would have many files with specific, meaningful names.
    4. The "templates", "styles" and "scripts" are the three building blocks of pretty much every web site.
    5. [JQuery](https://jquery.com/) is a [library](https://en.wikipedia.org/wiki/JavaScript_library#:~:text=A%20JavaScript%20library%20is%20a,and%20other%20web%2Dcentric%20technologies.) that provides a bunch of basic functionality - you can see I'm using it here to change the image on button click (in `src/scripts/index.js`)
5. Run the app! - this is an important step in any dev project - get the thing running locally.  For this project, this is drop-dead simple - just open `src/templates/index.html` in your browser and you'll see the web page I've made.
6. Modify the code - using your code editor, open that same file and feel free to modify the html.  You can also modify `styles/index.css` or `scripts/index.js` to change the css style or javascript respectively. Each of these three technologies, HTML, CSS and Javascript are deep topics in and of themselves but you can see in this project that I've done something very basic and you can Google each thing I've added to learn more.
    1. Once you've changed something, just refresh the page in the browser to see the change
    2. A very basic change to test this would be to just change "Web Dev Getting Started" to say something else

# Next steps

Learn more! ...or not :)

If you've followed all the steps, gotten this far and are _excited_ about what you're doing, good news - you might have the soul of a software developer! You should choose the most interesting thing you have encountered and start learning more about it. If that feels overwhelming, choose from the list below!

If you're not excited and this whole process was boring or cumbersome, you could try some of things I've listed just below but ultimately software dev may not be for you... but try anyway - you may get excited still cuz it is real awesome ;)

## Some ideas for more changes within this project
1. Add a new button (e.g. "Click me 2") that changes another set of images next to the current one.
2. Take the two button-image sets and put borders around them and make them look nice on desktop and mobile.
3. (Design oriented) Make the whole page prettier.
4. (Tech oriented) Write an [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started) call to pull content from https://www.google.com and display it in this page.

From here, find good learning resources and just play around or figure out a real thing you want to build then find specific tools/packages/etc to build what you want.  I'm happy to help with either of those or some other way you might want to go :)   

Good luck and let me know if you have any questions or trouble getting something working!
