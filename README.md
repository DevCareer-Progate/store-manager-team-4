Welcome to master branch

This branch is for final deployment

There is a set of rules to follow while working: Please remember this categories of commit:

feature => use feat
chore => use ch
bug => use bg
For a feature: git commit -m "feat: implement user sign up

For a bug: git commit -m "bg: fix redirect"

For a chore: git commit -m "ch: update docs to include api endpoints

Note: For every feature, bug or chore, you must create a new branch.

Example of a feature? User Sign up: Branch naming convention follow this pattern: feat/user-signup (- - - lower case and separated by dashes)

Example of a bug? Sign up page routing typo: Branch naming convention follow this pattern: bg/signup-typo

Example of a chore? Update Read Me: Branch naming convention follow this pattern: branch naming: ch/update-readme

Once you are assigned a task on trello, create a branch on your local git and only push to that branch. If you push to any other branch.

To get started:

Click on fork, scroll up. It is by the right top corner

Click on clone or download and copy the url link there

Head to your terminal.

git clone pasteTheUrlYouJustCopied

cd store-manager-frontend

Note: you will be on the UI branch automatically. We are not to work on this branch

To create and also move to another branch

Step 6: To start your work, work the directory that contains the project files. cd strore-manager-frontend

Step 7: git remote add upstream https://github.com/DevCareer-Progate/store-manager-frontend.git

Run: git checkout -b <nameOfBranch>

Don’t forget the naming convention of branch.

Note: should be replaced with the feature you are working on (i.e feat/login-page), use hypen when you will normally use space

For example,

git checkout -b feat/sign-page-design white_check_mark

git checkout -b feat/sign page design x

Branch can either be: feature or bug or chore

Now, once done writing code and you have tested it and everything is working fine.

Run: git add . Run: git commit -m "feat: design signup component"

Note: when writing commit message, use present-tense

DO:

git commit -m "feat/design signup component" white_check_mark

git commit -m "bug/fix login page header bug" white_check_mark

DON’T:

git commit -m "feat/designed login page" x

git commit -m "bug/fixed login page header bug" x

git push origin feat/signup-component-design - (Note how it ends with a branch).

Creating Pull requests

PR === Pull request

When making a PR, your PR is expected to have the following:

What is the task completed ?
What the PR actually does ?
How can this PR be manually tested ?
Any background contexts? (maybe something a tester might not notice and be useful for testing)
Screenshots (of your implementation - a web page, a mobile app screen or an API payload)
The Pull Request Template: PR Title: Task completed (descibe the task)
Testing Describe how to test the changes you’ve made. For example, if you added a logout button to the timeline page:
Visit localhost:8000/timeline and click on the logout button.
Additional Information

ScreenShots Screenshots are needed for all frontend works and live link to test.

Pull Request Example: Changes Add Landing Page Component Use Live Server On VS Code

Gracias and Happy Coding !!!