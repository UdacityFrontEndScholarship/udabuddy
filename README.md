![](https://user-images.githubusercontent.com/27431066/38867057-815c3ee8-4260-11e8-995f-77e7d9035947.png)

To make a web app for Udacity Alumni interaction. 

# Workflow 

There are two main section of the WebApp.
 
## Landing Page -- Contains info that you can check without login
  
    Landing/Login page     
    About section (Giving details about the WebAPP Udabuddy, for reference see twitter about page)
    Wall of fame (A page displaying works of Alumni or people at Udacity, Like Sebastian Thrun)
    Blog Page (A blog page by Udabuddy users with posts about their amazing work in any field of technology)
    Forum Page (directly ask questions here rather enter udacity forums)
    Developers Page ( Comming soon)

## Dashboard -- Accessible once you are logged in and is divided into four sections : FEED, NAV, DISCOVER, ANALYSE
 	 
    Feed    : Feed will have articles from users you like and popular in community.
    Nav     : This is the link to various pages outside and inside like showcase.
    Discover: This will give you suggestions about new user and like them to get feeds.
    Analyse : This provides statics about where you stand in the community and among your friends. 
	  
	  Inside the dashboard a section called 'Showcase' is provided to build users profile and showcase their projects.
    This would be visible to other users.
	  There would be a message and connect option under each profile.


# How to contribute
	These are designated people :-
		Rahul @oreanroy Landing and About page
		Vamsi @Vamsi Manohar Wall of fame
		Avinash @littlestar642 Blog page
		Parteek @Prateek Forum page
	  Pradeep @psrajput showcase page

	  These are responsible mods and co-mods whom you can contact directly, in case of any issue regarding a page.
    Your PR in any one of this page will be assesed by the responsibe mod and merged if it is worth it.
	  
 

###### App to connect Udacity Alumni and present Scholars

## Prerequisites

You will need the following things properly installed on your computer.

* **[Git](https://git-scm.com/)**
* **[Node.js](https://nodejs.org/)** *(node > v6.x.x)* *(with NPM v5.5.1)*
* **[Bower](https://bower.io/)** - `npm install -g bower`


## Installation

* `fork this repository`
* `git clone <repository-url>` this repository
* `cd udabuddy `
* `npm install`
* `bower install`


## Running / Development

* `node index` / `npm start`
* Visit your app at [http://localhost:3000](http://localhost:3000).


## Deployment from master:
>   https://udbuddy.herokuapp.com/

## Join the development:

* Read [CONTRIBUTING.md](https://github.com/UdacityFrontEndScholarship/udabuddy/blob/master/CONTRIBUTING.md).
* Before you start contributing, run the app on your local machine, get familiar with it and then check for bugs 
or more features.
* If you find any bug or want to add a new feature you have to open a new issue.
* If you would like to work on an existing issue, drop in a comment on the issue.


## Directory Structure:

- `views`: This contains all the frontend files. Write your HTML code here and save it with *.hbs* extension. See 
           homepage for reference.
- `public` - Contains various assets for the app.
  - `css` - contains CSS files.
  - `js` - contains Javascript files.
- `node_modules` - contains all the npm packages installed locally. Dont modify here.
- `package.json` - general info about the project and node packages names.
- `index.js` - the entry point into the app.


