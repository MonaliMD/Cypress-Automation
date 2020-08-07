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
```javascript
"open" : "$(npm bin)/cypress open"
```
7. Then you open cypress runner.
```bash
npm run open
```

## Understand the concept and write very frist Cypress test
```javascript
describe ('test suit description', () => {
  it('test name', () => {
  
    cy.visit('url')
    cy.get('css selector of the element').type('text')
    cy.get('css selector of the element').should('validate the behavior')
    
  })
})
```
<b>describe:</b> can be use as test suite(group of tests).

  <b>describe : first parameter</b> string, can provide test suite name.
  <b>describe : second parameter</b> function.
  
<b>it:</b> test case.

  <b>it : first parameter</b> string, can provide test name.
  <b>it : second parameter</b> call back function, which we write the implementation of the test.
  
<b>cy:</b> cypress object.

<b>visit:</b> function navigate to given url.

<b>get:</b> function expect the css selector of the element, and returns the web content. then can perform action on the element using below cypress fuctions.

```bash
type() 
```

```bash
click()
```

same way can find the eassertion(validate the behavior) on a element using below cypress fuctions.

```bash
should() 
```

```bash
expect()
```
