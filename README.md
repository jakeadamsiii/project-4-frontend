Donative charity fundraising app

To fork and run this app, please bower i, run rails s in the backend and run gulp in the fronted.

###Overview

The aim of the project was build RESTful application of our choosing with a Ruby on Rails backend and an AngularJS frontend. I chose to build a crowdfunding platform, specialising in green charities. The main features of the project were that it had to be user authenticated, have secure routes, and a user could create, edit and delete their profile. The user and projects models had a has many and belongs to relationship. There was also a donation model built for the feature of donating to other users projects. The last feature was that a user could embed a youtube video into their project so that other.

###Technology used

Ruby on Rails
AngularJS
HTML5
SCSS
heroku
Stripe API
git

###Evaluation

In evaluation of the project. It was liberating to have complete free reign over the direction and idea of the project. Although this sometimes meant that one had to be conscious of where the project was at all time and had to be rigorous in hitting deadline. Pair coding in a project like this could have been hugely beneficial as when running in to obstacles they often took longer to deal with than when working in a group. But overall a great experience building a full scale application from the ground up using two separate languages, to then be presented with a good long and well functioning product.

##Challenges
A major challenge was to implement the stripe API with the ruby backend, and finding a way to correctly embed the Youtube videos into the project show pages. The Youtube videos required a directive as to properly render on the page.

##Future additions
I would liked to have had perks or bonuses associated with users that donate a certain amount to a project, similar to kickstarter and indiegogo. These perks would have had to be added to the project model, on donation the amount would need to be determined and the users information then pushed correctly into a predetermined array. Users will then be able to see how many backers there are at each level.  
