# programming-problems

This is basically just a place for me to put problems I feel like solving for fun. But it doubles as exercises for programmers!

## Download, Fork & Install

```
git clone https://github.com/candyapplecorn/programming-problems.git && \ 
cd programming-problems && \
git checkout -b `whoami` && \
npm install
```

## Instructions

There are two branches, **master** and **answers**. **Master** has problems to be solved in `test/`. The files inside `test/` all have *spec.js* as their file extensions; they're [jest](https://jestjs.io/) tests! Each test will import (in Javascript / Nodejs, *require*) its associated file from the `lib/` folder and then run tests and assertions against the imported code. Your task is to write code in `lib/` to make tests in `test/` pass. Do not edit code inside of `test/`, unless you want to add *additional* tests & assertions.

## Running tests

To run tests, simply type:

```
npm run test --watch
```

The `--watch` flag tells the test runner (_Jest_) to re-run its tests whenever file changes are detected (whenever a file is saved). 

## Answers

There's a branch called [answers](https://github.com/candyapplecorn/programming-problems/tree/answers) which has solutions for each problem. On that branch `npm run test` should pass all tests. To see that branch, simply check it out:

```
git checkout answers && \
npm run test
```

## Git help

Remember, you can see all your **local** branches by typing `git branch`. You can switch to any of those branches by typing `git checkout <branchname>`. You might get an error when trying to check out a branch, saying you need to commit your uncommitted changes, or something similar. If you get this error, simply type `git status` to see all the unadded files and uncommitted changes. Either add and commit them to your current branch with `git add <files>` and then `git commit -m '<message goes here>'`, or temporarily stash them with `git stash`. If you decided to temporarily stash your work, don't forget it's stashed! It won't show up as a commit in your commit history (to see your commit history type `git log`); to get your stashed changes back, simply type `git stash pop`. Again, be careful with `git stash` - it's easy to get mixed up!
