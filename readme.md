# PLAYMAKERS
A real-time stats aggregator that tracks the statistical performance of the best offensive players on the Green Bay Packers NFL football team.
## Motivation to create this project
I'm a huge Green Bay Packers fan and NFL football fan. I used to spend a lot of time playing fantasy football and have always loved monitoring the statistical performance of players. I have since stopped playing fantasy because it requires too much time to be competitive, but I still enjoy monitoring the performance of my favorite players. This site is a fun, simple and quick way for fans of the team who enjoy tracking stats to come visit and check up on how the players are performing.
## Where to find the app deployed?
https://packerplaymakers.firebaseapp.com/

## Visual Walkthrough
![homepage](https://github.com/colecarroll/playmakers/blob/master/playmakers/public/images/readme-images/homepage.png?raw=true)

The site homepage.

![hovering over a player animation](https://github.com/colecarroll/playmakers/blob/master/playmakers/public/images/readme-images/hoverplayer1.png?raw=true)

When you hover over one of the players that is clickable, an animation for that player will appear, showing a signature play or personality for that player. Here's another example:

![hovering over another player](https://github.com/colecarroll/playmakers/blob/master/playmakers/public/images/readme-images/hoverplayer2.png?raw=true)

Once you click on a player, an iframe box will appear with a picture of the player, a youtube highlight video, a short description about the player, their 2016 stat line and their statistics for the 2017 season.

![clicking on one of the players](https://github.com/colecarroll/playmakers/blob/master/playmakers/public/images/readme-images/playerclicked1.png?raw=true)

Here's a second example of a player clicked:

![clicking on a second player](https://github.com/colecarroll/playmakers/blob/master/playmakers/public/images/readme-images/playerclicked2.png?raw=true)

The app is also responsive. This is how it will display on your mobile device.

![mobile display](https://github.com/colecarroll/playmakers/blob/master/playmakers/public/images/readme-images/mobile1.png?raw=true)

Scrolling down the app:

![mobile display 2](https://github.com/colecarroll/playmakers/blob/master/playmakers/public/images/readme-images/mobile2.png?raw=true)

## Walkthrough video
https://youtu.be/9qpTXqD9DwE

## API used
https://developer.fantasydata.com/documentation

## Features
* CSS animations for each clickable player
* Fancybox jQuery pop-up iframe boxes
* Up to date statistics for each player pulled from statistics API with a javascript fetch
* Pictures, descriptions and highlight videos for each player.
* Mobile and Tablet friendly, responsive design.

##### Note
* At the time of this app's creation, one week of the 2017 season had taken place. Because of the monthly cost of the API used and limited number of get requests allowed by the API, the playmakers site will not be updated as the season progresses.
