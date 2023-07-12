# Contributing to Accessible Web Dev

## Languages

This project is built with Next.JS, Typescript and CSS modules.

## Pre-requisites (these need to be installed on your machine)

[Node.js](https://nodejs.org/en/)  
[Yarn Package Manager](https://yarnpkg.com/)  

## Available packages

Icons - [React Icons Documentation]( https://react-icons.github.io/react-icons)  
Code Snippets - [React Syntax Highlighter Documentation](https://github.com/react-syntax-highlighter/react-syntax-highlighter)  
Translations - [next-i18next Documentation](https://next.i18next.com/)  
Storybook - [Storybook Documentation](https://storybook.js.org/)

## How to contribute

1.  Look through [Pre-existing issues](https://github.com/AccessibleForAll/AccessibleWebDev/issues) or [Raise a new issue](https://github.com/AccessibleForAll/AccessibleWebDev/issues/new/choose) and ask to be assigned. Pull requests made without a corresponding issue will likely be closed.
2. Please check the [coding standards](https://github.com/AccessibleForAll/AccessibleWebDev/blob/main/CODING_STANDARDS.md) page before start contributing.
3.  [Fork](https://github.com/AccessibleForAll/AccessibleWebDev/fork) the project
4.  Clone the project:
    ```bash
    git clone https://github.com/<your-github-username>/AccessibleWebDev
    ```
5.  Navigate to the project directory:
    ```bash
    cd AccessibleWebDev
    ```
6.  Set the upstream repository:
    ```bash
    git remote add upstream https://github.com/AccessibleForAll/AccessibleWebDev.git
    ```
7.  Install dependencies:
    ```bash
    yarn install
    ```
8.  Create a new branch:
    ```bash
    git checkout -b <YourBranchName>
    ```
9.  To run the whole project locally:
    ```bash
    yarn dev
    ```
    If you are making an isolated component and wish to run storybook locally instead of the whole website run this instead of `yarn dev`:
    ```bash
    yarn storybook
    ```

10.  Make your changes
11. Stage your changes:
    ```bash
    git add <NameOfFileChanged>
    ```
12. Commit your changes and provide a meaningful commit message:
    
    Unsure how to write a meaningful commit message? Check out this article about [How to Write a Good Git Commit Message](https://blog.ossph.org/how-to-write-a-good-git-commit-message/#:~:text=To%20set%20up%20a%20Git,t%20meet%20the%20specified%20format.)
    ```bash
    git commit -m "<Your commit message here>"
    ```
13. Push your commits to your local repository
    ```bash
    git push origin <YourBranchName>
    ```
14. Create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
15. Wait for maintainers to review your pull request and suggest any changes

**Congratulations!** You made a contribution to the Accessible For All Community!

## Questions?

If at any time you need help with contributing, please reach out to the [maintainers](https://github.com/AccessibleForAll/Support/blob/main/README.md#our-maintainers)
