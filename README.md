# Courses dashboard


## Setup
Installation

`npm install`

Running

`npm run dev`

Run tests

`npm run test`

## Component Structure
I've followed the [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) methodolgy where components are split up into Atoms, Molecules, Organsisms, Templates and Page

## Testing
I decided do a small test just to showcase my ability, however it's not the most ideal test as I ended up having tie it to some implementation detail. As a result, I had to use `data-testid` to get hold of the element and check against the `hidden` class. What I hoped I could do was check against the actual text value on screen as the test would then simulate more of what a users see's/does. I'm not 100% sure why that didn't work but it potentially may be due Tailwind and it not been properly supported in the test environment

## Notes
The API was sending duplicated data, I'm not sure if this was an error but I decided to filter them
