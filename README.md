# Brixton Local

A web app to support local businesses during the COVID-19 crisis using Gatsby and Google Sheets API

Brixton Local is a website that brings together all the businesses still operating during the lockdown and providing additional services such as delivery, restaurants/cafes now selling fruit+veg or people moving their businesses online such as fitness classes.

It started life as a crowd sourced Google spreadsheet and this is where all the entry information is stored. The website is currently live at https://www.brixtonlocal.life/.

It has been widely shared and as it grows and in order for other areas to use it, we will use the Google Sheets API to pull the data from the spreadsheet. This enables individual businesses to update their entries in a constantly changing situation (for example their weekly delivery slots) and to make new business additions easier. This API is not that easy to add on to the current Hugo site, so we will rebuild using a node server and React frontend.

Analytics show that the majority of the users are on mobile (most people are getting the link through WhatsApp and Facebook), so we will use a mobile first approach.

As a user I need to:

- Navigate through all entries easily
- Search by category
- Search by specific tag
- Get clear information on each individual business
- Easily get to the About page

It would be good to have the landing page have a random order of entries every time a user opens it because from analytics some people are just clicking on things that start with A & B because it's currently presented alphabetically!
