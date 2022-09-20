# Pokedex

## About
This application I made for a test challenge for the `Status Invest` company. This app is a mobile application made with React-Native, TypeScript, Expo, and other small libraries. I'm using the [PokeAPI](https://pokeapi.co/) to feed the data.

## Installation
Clone this repository
```
git clone git@github.com:carlosxfelipe/pokedex.git
```

Install all the dependencies
```
cd pokedex && npm install
```
## Running the application
Run with expo using `npm run ios` for the iOS version or `npm run android` for the Android version

## Running tests
I did just a basic test to the evolution button. It tests if the button is clickable.

To run the tests just run the command below:
```
npm run test
```

The result should be something like this:

<img src="https://user-images.githubusercontent.com/85801709/191352189-88033bf4-a7f7-4b70-8517-74a5d58f883a.png" width="500" />


## Screenshots
<img src="https://user-images.githubusercontent.com/85801709/191345450-b0e0c9dc-dc1c-4c7d-bf23-e04a8b02baf8.png" width="300" />
<img src="https://user-images.githubusercontent.com/85801709/191345516-7c17d193-d617-4886-bd66-db29ec07f0ad.png" width="300" />
<img src="https://user-images.githubusercontent.com/85801709/191345565-d099871d-11ad-42c1-a2f6-7c48151b3403.png" width="300" />
<img src="https://user-images.githubusercontent.com/85801709/191345614-58ee3540-a501-41b7-8cc1-79fa1a3ea552.png" width="300" />


# What I would do if I had more time
### 1. I did a lot of inline CSS
Unfortunately, duo the time, I had to put some css stuff inline instead of a directed file, so it would kept the code more organised.

### 2. Fonts
Same excuse again, I didn't care that much for the font, and didn't want the little time I had available to install the `Inter` font. Sorry! :')

### 3. Tests
I just implemented a small test for the button. Usually I like at least 80% coverage for the tests, but I had to rush to finish this at a reasonable time.

### 4. Refactoring
Some piece of code might smell bad. On a real project, I would use a different approach, so the files with logic would be more separate from the visual components.

### 5. Small features that missed
I decided to skip some features, like painting the favorite star when clicked. Also the evolution screen (that was optional) seems to be something very doable, but once again, I didn't have much time these days. 

# Appreciation
I'd like to say thanks to `Leonardo`, `Giovani`, `Chrystyan` and any other fellow that might be involved with the selection process.
