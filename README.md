# Cypress-Automation

## Installation

1. Make a folder call <b>Cypress-Automation</b> in your local computer.

2. Go inside <b>Cypress-Automation</b> folder using your terminal.
```bash
cd Cypress-Automation
```

3. Generate your package JSON file.
```bash
npm init
```
There you can add your <b>package name, description, test command, author,</b> etc.

3. You can see your package JSON content using,
```bash
cat package.json
```
or you can simply open the file using any code editor. this includes all information about your project <b>dependencies, plugins, scripts you going to execute,</b> etc.

4. Then install cypress locally in your computer.
```bash
npm install cypress --save-dev
```
or 
```bash
sudo npm install cypress --save-dev
```
5. Go inside <b>package.json</b>  file, there you can see cypress dependencies.

6. Edit <b>"package.json"</b> with below code.Here add this command inside scripts to open cypress runner.
```bash
"open" : "$(npm bin)/cypress open"
```
7. Then you open cypress runner.
```bash
npm run open
```

