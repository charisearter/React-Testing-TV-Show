# React Testing TV Show

## Advanced Web Applications ➡ Testing React

### Objectives

- use mocks in unit tests
- test asynchronous API calls that are made in a component
- test React components as the props change

### Introduction

As a developer, you will be asked to write tests for the feature you are building, and even sometimes on components and features other developers have built. This project will mimic a situation where you are asked to test someone else's code.

Get the project fired up and start using it as a user would. Try to go through the user sequences for this feature that you think users would go through. Once you have those in mind, you will have an idea of what to test in your application.

### Project Set Up

- [x] Create a forked copy of this project.
- [-] Add your team lead as collaborator on Github. (Nope, no need)
- [x] Clone your OWN version of the repository in your terminal
- [x] CD into the project base directory `cd React-Testing-TV-Show`
- [x] Download project dependencies by running `npm install`
- [x] Start up the app using `npm start`
-- You know the drill by now, do the rest of this --
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.
-- This part is best not to do, if you plan on going back thru the project later on after you gain more knowledge. If you pull request, it will overwrite the main and you won't have the original project any longer. Do it if you have to though. --
- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request** ()
- [-] Add your team lead as a reviewer on the pull-request (Don't have to do this part any longer)
- [-] Your team lead will count the project as complete by merging the branch back into master.(This either)
- [x] Do your magic!

### Instructions and/or completion requirements

Your challenge for this module: write tests for both the `App.js` component and the `Episodesjs` component. Take note of where the state is being managed, where the async call is, and where different data peices are being rendered. Understanding all of this will be important so you know how to test each component.

**Moving the async call**

The async call being inside the component makes it hard to test the asynchronous nature of the component. Let's move the async function into an `/api` directory so we can easily mock that function and make the async tests easier.

[x]1. Create a directory called `/api` in the `src` directory
[x]1. Create a file inside `/api` called `fetchShow.js`
[x]1. Move `fetchShow` into that new file and export it (fetchShow is in the `useEffect` - pay attention to how this was setting state. You will still need to set state in this effect hook the exact same way...)
[x]1. Import `fetchShow` into `App.js` so you can make your async call from your `useEffect` hook.
[x]1. You will need to `return` the `axios.get` call, _and_ the data inside your `.then()`. This is necessary because when you call `fetchShow` in your useEffect, you need to chain off the promise for a new `.then()`, then you need the data to be returned once the promise is resolved
[x]1. Inside your `.then()` in the `useEffect` hook, set your data again.

- Note that you need `axios` in the new file

This should look something like this:

```javascript
// fetchShow.js
export const fetchShow = () => {
  return axios.get
    .then(res => return res) // or res.data, however you want to set that up
}
  
 // App.js
useEffect(() => {
  fetchShow
    .then(res => {
      // set state with the data
    }
}, []);
```

### Stretch goals

- There is an utility function in this project that contains an isolated pure function. Look up how to do `unit tests` with Jest and test that function.

- Look up the `TVMaze` API. Add a dropdown with the titles of some other popular shows. Add the user sequence of choosing a different show to fetch data for different shows.

- Add React Router, and add the functionality to click an episode and navigate to an episode page.

//Not sure what the last error is with the fetchShow at the moment. I have to ask someone, this is the only time I got the error in this project. Never got it the first time I did the complete project. Maybe there was a change. I will do an update video on it later on when I figure it out.