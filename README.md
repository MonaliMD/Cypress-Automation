# Cypress-Automation
This is my cypress learning repository
--install and create cypress project--
1. Go to inside "Cypress-Automation" folder

2. open your terminal and type "npm init" to initial your package jeson file
at there you can add your package name, description, test command, author and etc

3. Go inside "package.json" file using "cat package.json" command.
this includes all informations about your project dependencies, plugins, scripts you going to execute and etc.
4. then install cypress using "npm install cypress --save-dev" or "sudo npm install cypress --save-dev"  to install cypress locally.
5. use "cat package.json" to see the dependenceis. you can see cypress dependencies there.
6. use command "nano package.json" you can go inside the file and edit it.
Here add this command inside scripts
"open" : $(npm bin)/cypress open" and save the file.

7. then you can run cypress using "npm run open"
