# Marvel Comics API

## Description

On this site, as a user you will be able search through comics and characters from Marvel.

## Deployed

https://marvel-comics-project.herokuapp.com/

## Technologies Used

1. react-router-dom

2. styled-components

3. react-player

4. react-horizontal-scroll-menu

## Getting Started

To run this site locally you will need to run do the following in order:

If you want to make changes for pull requests you will need to fork the repo first then run:
```
git clone [your-forked-url]
```

otherwise if you just want to view the code:
```
git clone https://github.com/dguma/marvel-comics-project
```

Move into the new directory with:
```
cd marvel-comics-project
```

install dependencies by running:
```
npm i
```

## Getting your own key

Head over to https://developer.marvel.com/ and click get started and follow instructions on creating and obtaining your own keys.

In the directory you will want to creat a new file called `.env.local` and put your keys in like so:
```
REACT_APP_PUB_KEY=YOUR_PUBLIC_KEY_HERE
REACT_APP_PRIV_KEY=YOUR_PRIVATE_KEY_HERE
```
note: do not change the name of the keys unless you know what you are doing.

Now you can start the server with:
```
npm run start
```

This should open a tab in your browser on localhost port 3000 by default.

## Contribution Guidelines
- Please create issues for bugs.
- Create pull requests for changes to my code if you think you have an improvement.

- Do NOT call api in a loop. Be mindful of the fact there is a 3000 call limit per day.
- Pagination could improve the comics display page and decrease the amount of calls per user.
