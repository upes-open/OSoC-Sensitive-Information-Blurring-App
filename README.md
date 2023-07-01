<div align='center'>

## Sensitive Information Blurring App

<img src='https://github.com/upes-open/Git-WorkShop/assets/101355193/b9315c8e-5aaa-438e-ab5a-48b25571dc90' width=100>

![Static Badge](https://img.shields.io/badge/Discord-202020?logo=discord&logoColor=%235865F2&link=http%3A%2F%2Fdiscord.gg%2F2rnWsvkX)    ![Static Badge](https://img.shields.io/badge/Twitter-202020?logo=twitter&logoColor=%231DA1F2&link=https%3A%2F%2Ftwitter.com%2FUpesOpen)    ![Static Badge](https://img.shields.io/badge/Instagram-202020?logo=instagram&logoColor=%23E4405F&link=https%3A%2F%2Fwww.instagram.com%2Fupesopen_%2F)



![GitHub contributors](https://img.shields.io/github/contributors/upes-open/https%3A%2F%2Fgithub.com%2Fupes-open%2FOSoC-Sensitive-Information-Blurring-App) ![GitHub forks](https://img.shields.io/github/forks/upes-open/https%3A%2F%2Fgithub.com%2Fupes-open%2FOSoC-Sensitive-Information-Blurring-App) ![GitHub Repo stars](https://img.shields.io/github/stars/upes-open/https%3A%2F%2Fgithub.com%2Fupes-open%2FOSoC-Sensitive-Information-Blurring-App) ![GitHub issues](https://img.shields.io/github/issues/upes-open/https%3A%2F%2Fgithub.com%2Fupes-open%2FOSoC-Sensitive-Information-Blurring-App)

</div>

### About the Project
The sensitive information detection and blurring web app is designed to analyze images and PDF documents to identify sensitive or personally identifiable information (PII) within them. The app aims to provide a secure and privacy-conscious solution for users who need to share such content while protecting the confidentiality of sensitive data. It offers an automated process that identifies and blurs sensitive information to prevent unauthorized access and maintain data privacy.

The web app will utilize image processing techniques, Optical Character Recognition (OCR), and machine learning algorithms to analyze the uploaded files. It will detect and identify sensitive information such as pictures, credit card numbers, addresses, or any other predefined types of PII.


### Tech Stack

![Static Badge](https://img.shields.io/badge/NodeJS-101010?logo=nodedotjs&logoColor=%23339933)    ![Static Badge](https://img.shields.io/badge/MongoDB-101010?logo=mongodb&logoColor=%2347A248)    ![Static Badge](https://img.shields.io/badge/ReactJS-101010?logo=react&logoColor=%2361DAFB)    ![Static Badge](https://img.shields.io/badge/HTML-101010?logo=html5&logoColor=%23E34F26)    ![Static Badge](https://img.shields.io/badge/JavaScript-101010?logo=javascript&logoColor=%23F7DF1E)    ![Static Badge](https://img.shields.io/badge/Python-101010?logo=python&logoColor=%233776AB)    ![Static Badge](https://img.shields.io/badge/Firebase-101010?logo=firebase&logoColor=%23FFCA28)    ![Static Badge](https://img.shields.io/badge/OpenCV-101010?logo=opencv&logoColor=%235C3EE8)    ![Static Badge](https://img.shields.io/badge/TensorFlow-101010?logo=tensorflow&logoColor=%23FF6F00)



### How to contribute?
#### Forking the repo
The first thing you need to do to be able to contribute to this repo, is to fork this repo. To do this, navigate to the top right of your screen to where it says `fork` and hit the button.

This will prompt you to create a forked repo that is owned by you and not by any one else.

#### Updating forked repo
Updating the forked repo is just like updating any other repo on GitHub using Git.

- First clone the repo by copying its link and using the CLI.
    - To copy its link, navigate to the home page of your repo *(Where its README file is displayed)* and find the `Code` button. Click the button and copy the first link you see.
    - Navigate to your Git bash and type in:
    `git clone <the_link_you_copied>`
    - Once the repo is cloned, a copy of the entire repo will be located as a folder on your computer in the same directory in which the bash was open.

- Once you've added files into that folder, you need the changes made on your computer to reflect in the repo on GitHub. To do this, execute the following commands:

    1. `git add .`
        - `git add` adds files to the tracked list to be committed and then pushed, and the argument it takes is `.` which adds all the currently untracked files into your staging area.
    2. `git commit -m "<your_commit_message_here>"`
        - `git commit` adds those files in the staging area as 'files to be committed' to the repo. The argument it takes is `-m` - which stands for message - and then the message that gives another collaborator information on what the files committed do.
        - Its important to note that you cannot commit without a message. Its just best practice to give meaningful messages in your commits.
    3. `git push`
        - This pushes all the files which were tracked as committed files in the previous step and is the final step to push your files to GitHub for the world (or collaborators to see).

- After you're satisfied with all the changes you've made to your forked repo, you then need to update the main repo from which you forked your repo.
    - You do this by creating a pull request (PR for short).
    - To do this, navigate to the GitHub page of the main repo and select the pull requests tab.
    - Then create a new pull request and enter a meaningful message like we did for commits.
    - After that, just sit tight and wait for a moderator or the repo owner to accept your PR and merge your code with the main repos or a comment from the mod/owner explaining why they didn't approve your PR.

#### Syncing your forked repo
###### Its important to note that before you start working on your forked repo, you want to make sure that your forked repo is up-to-date and is in sync with the main repo.
This is so that you don't step on any toes when you make your changes or you don't make changes and make a PR to find that someone beat you to the punch. You do this by executing the following commands in your Git bash.

###### Pre-requisite step
- `git remote add upstream <parent_github_repo_link>`
    - You get the parent link the same way you got your forked repo link when you cloned it, except you do it on the main/parent repos site.
    - This step is only a one time thing to make sure that you sync your repo w.r.t to the desired repo.

###### Steps
1. `git fetch upstream`
2. `git merge upstream/main` or `git merge upstream/master`
