//npx cypress open //bu kod dashboard açmak için
describe("Amazon sayfasina giris",()=>{
it("Tarayiciyi baslat ve Amazon Sayfasini Ac",()=>{
    //tarayıcıyı başlatır ve amazon sayfasına gider / tek slaşile BaseUrl e gidiyor
    cy.visit("/")
    cy.wait(2000)
    
});

it('cerezleri kabul et',()=>{
    //cerezleri kabul et butonuna tiklar
    cy.xpath("//input[@id='sp-cc-accept']").click();

});

it('Url ve Title kontrol et',()=>{
    //
    cy.url().should('include','amazon');
    cy.title().should('include','Amazon');
    
});

it('Arama kutusuna bisey yaz',()=>{
    //arama butonuna basar
    cy.get('#twotabsearchtextbox').type('iphone14{enter}');
    cy.xpath("//input[@id='sp-cc-accept']").click();
});

it('ana sayfaya geri don',()=>{
    //ilk urun butonuna basar
    //cy.get('.s-result-list .s-result-item').eq(0).click();
    //önceki - sonraki sayfaya geri - ileri gitmek için
    cy.go('back');
    //cy.go('forward');

});

it('Katagori seçim kutusunda Elektronik seç',()=>{
    //katagori seçim kutusunda elektronik seç- dropdown
    cy.get('#searchDropdownBox').select('Elektronik');
    //çerezleri kabul edelim
    cy.xpath("//input[@id='sp-cc-accept']").click();
});


it('Profilim segmesine geç',()=>{
    cy.get('#nav-link-accountList').click();
    
});

it('Bir hesap oluşturun',()=>{
    //Belirtilen metni içeren bir HTML elementini seçer
    cy.contains("Amazon hesabınızı oluşturun").click();
    //should ile assertion yapıyoruz
    cy.get(':nth-child(1) > :nth-child(2) > .a-form-label').should("contain","Ad - Soyad");
    //altta be.visible ile görünüyormu diyoruz boşluklar ignore, eğer have.text deseydik tam olarak metin doğru olmalıydı
    cy.get('[for="ap_email"]').should("be.visible"," Cep telefonu numarası veya e-posta ");
});

})

describe.only("Amazonda ürün arama",()=>{

it ('Ana Sayfayı Ziyaret et',()=>{
    cy.visit("/");
    cy.url().should('include','amazon');
});

it('cerezleri kabul et',()=>{
    //cerezleri kabul et butonuna tiklar
    cy.xpath("//input[@id='sp-cc-accept']").click();

});

it ('Arama kutusunu bul ve ürün adını gir ',()=>{
   const urunAdi="alcatel 2019G";
    //arama butonuna basar
    cy.get('#twotabsearchtextbox').type(urunAdi).type('{enter}');
    cy.xpath("//input[@id='sp-cc-accept']").click();
   
});

it ('Arama sonuclarini dogrula ',()=>{
    const urunAdi="alcatel 2019G";
     cy.wait(2000)
     
     //locate alınırken id ile alınıyorsa # ile başla, değilse . ile başlanır.
    // cy.get('.s-no-outline > .a-size-medium-plus').should('include','Sonuçlar');

 });







})




