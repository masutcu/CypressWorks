describe("Ürün ara, fiyata göre sırala ve Sepete ekle", function() {

    before(()=>{
        //Etsy web sitesine gidilir
        cy.visit("https://etsy.com");
       
       // cy.contains("Accepter").click()
       cy.url().should('include','https://www.etsy.com/');

    });

    it('Sayfanın en altına in',()=>{
        cy.scrollTo("bottom");
        cy.get(':nth-child(3) > .wt-hide-xs').should('contain','About');
        
        cy.contains('About').should('be.visible')
        cy.wait(1000)

    });


it('Ürün ara',()=>{
    cy.scrollTo("top");
    cy.get('#global-enhancements-search-query').type('bracelet{enter}')
    
});

it('Filtrele kısmı seçeneklerinin çalıştığını doğrula',()=>{
   
    
    //Her bir silalama seçeneği için kontrol et ve görünürlüğünü doğrula
    
        cy.get('#sortby > .wt-menu__trigger').click()
        cy.wait(3000)
         //sıralama seçeneklerini tanımla
        const siralamaSecenekleri=['Relevancy','Lowest Price','Highest Price','Top Customer Reviews','Most Recent']
    
        siralamaSecenekleri.forEach((secenek)=>{
        cy.get('#sortby > .wt-menu__body a')
    .contains(secenek)
    .should('be.visible')
    .then(()=>{
        cy.log('"${secenek}" siralama seçeneği görülür.');

    });
    });

});
it('sepet alanına gir',()=>{

    cy.scrollTo("top");
    cy.get(':nth-child(3) > .wt-tooltip').click()

});

});