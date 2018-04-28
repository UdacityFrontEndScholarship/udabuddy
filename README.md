![](https://user-images.githubusercontent.com/27431066/38867057-815c3ee8-4260-11e8-995f-77e7d9035947.png)

To make a web app for Udacity Alumni interaction. 

# Workflow  

Please reference this picture to understand the flow of the app.
![](http://res.cloudinary.com/dvxx5f4hr/image/upload/v1524759367/1-Home_dyuujq.png)

These are the main sections of the WebApp.
 
## Landing Page -- Contains info that you can check without login
  
    - Signup/Login Firebase Buttons    
    - About Us     : Giving details about the WebAPP Udabuddy, for reference see twitter about page
    - Wall of fame : A page displaying works of Alumni or people at Udacity, Like Sebastian Thrun(only a demo page here)
    - Blog Page    : A blog page by Udabuddy users with posts about their amazing work in any field of technology(only a demo page here)

    Please note that both the blog page and the wall of fame page here will have all there links redirected to the intermidiate signup/signin page.

## Dashboard -- Accessible once you are logged in 
 	 
    Job Feed  : Job feed will have posts related to job openings particular to your interests.
    Menu items: This segment contains buttons that control the beahviour of how the dashboard is rendered.
    Community updates: This will be a continuous feed that updates every time there is a post in the community activity.
    Graphs    : This provides statics about where you stand in the community and among your friends. 
	  
	Dashobard contains links to all other pages of the app including the showcase,the wall of fame,the forum and the blog page.

## Showcase- Show your projects and your blogs to the whole world,all at one place.

## Forum- Talk to the community and see what is everyone upto.

## Blog- Write out your creativity and let others also know what you learnt.

## About Us- Know what is Udabuddy and how it can change your lives.

## Wall of Fame- See people having amazing projects which are liked most by the community.

## Weekly updates- A feed for the community events and updates and what all changes were brought about in the previous week.

# How to contribute
	These are designated people :-
		Rahul @oreanroy Landing and About page
		Vamsi @Vamsi Manohar Wall of fame
		Avinash @littlestar642 Blog page
		Parteek @Prateek Forum page
	  Pradeep @psrajput showcase page

	  These are responsible mods and co-mods whom you can contact directly, in case of any issue regarding a page.
    Your PR in any one of this page will be assesed by the responsibe mod and merged if it is worth it.

## Color Pallete
- ![#33b5e5](https://placehold.it/15/33b5e5/000000?text=+) `#33b5e5`
- ![#06caba](https://placehold.it/15/06caba/000000?text=+) `#06caba`
- ![#f49b89](https://placehold.it/15/f49b89/000000?text=+) `#f49b89`
- ![#4caac3](https://placehold.it/15/4caac3/000000?text=+) `#4caac3`
- ![#02ccba](https://placehold.it/15/02ccba/000000?text=+) `#02ccba`
- ![#888ec9](https://placehold.it/15/888ec9/000000?text=+) `#888ec9`
- ![#59a4c4](https://placehold.it/15/59a4c4/000000?text=+) `#59a4c4`
	  

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


Note : These features are subject to change as per the requirements.
