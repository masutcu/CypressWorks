describe("Cimri Site Testi",()=>{
/*
beforeEach(()=>{
    //her test öncesinde hepsi burada sitesine gidecek
    cy.visit("https://www.cimri.com.tr")

});

*/


/*
afterEach(()=>{
    //her test sonrasında çalışacak sayfayı yenileyecek
    cy.reload();
});
*/
it('Anasayfaya gidilir',()=>{
    cy.visit("https://www.cimri.com.tr");
    

});

it('Anasayfanın açıldığı doğrulanmalıdır',()=>{
    

    cy.url().should('eq',"https://www.cimri.com/");
    cy.title().should('include','Cimri');

});

it('Arama yapalım ve dogrulayalım',()=>{
    
    const expectedText='Asus reg zephyrus';
    

    cy.get('.SearchBox_searchBarPlaceholder__bWMWC').click();

    cy.get('#search-input').type(expectedText);

    cy.wait(2000);
    cy.contains('reg zephyrus').click({force:true});
    
    });







})