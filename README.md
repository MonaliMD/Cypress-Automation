# Cypress-Automation
This is my cypress learning repository
--install and create cypress project--
1. Go inside "Cypress-Automation" folder

2. Open your terminal and type "npm init" to generate your package json file, there you can add your package name, description, test command, author and etc.

3. You can see your package json conteny using "cat package.json" command or you can siply open file using any code editor.this includes all informations about your project dependencies, plugins, scripts you going to execute and etc.

4. Then install cypress using "npm install cypress --save-dev" or "sudo npm install cypress --save-dev"  to install cypress locally.

5. Go inside "package.json"  file, there you can see cypress dependencies.

6. Edit "package.json" with below code.Here add this command inside scripts to open cypress runner.
"open" : $(npm bin)/cypress open" and save the file.

7. Then you open cypress runner using "npm run open"
