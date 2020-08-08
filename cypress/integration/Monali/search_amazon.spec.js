//< reference types = "cypress" / >
describe("Search and add to cart", () => {
    it("search a head set", () => {
        cy.visit("https://www.amazon.com/")
        cy.get("#twotabsearchtextbox[name='field-keywords']").type("sony headphones")
        cy.get("span#nav-search-submit-text.nav-search-submit-text.nav-sprite").click()
        cy.wait(5000)
        cy.get("div[data-asin='B07VGZQJXC'] h2 a.a-link-normal.a-text-normal").click()
        cy.get("#add-to-cart-button").click()
        cy.get("a#nav-cart").click()
    })
})