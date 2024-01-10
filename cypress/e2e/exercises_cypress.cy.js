describe('Given user search a product ', () => {
    it('should be possible to validate the homepage', () => {
      cy.visit('https://www.amazon.com/?&tag=googleuscol05-20&ref=pd_sl_3bso4tn6l4_e&adgrpid=159179349812&hvpone=&hvptwo=&hvadid=675113330820&hvpos=&hvnetw=g&hvrand=16052300766491876874&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1003669&hvtargid=kwd-2282899823&hydadcr=8637_13668849&language=es_US')
      cy.get('[id=nav-logo-sprites]')
        .should('be.visible')
      
    })
    it('should be possible to search for the desired product', () => {
        cy.visit('https://www.amazon.com/?&tag=googleuscol05-20&ref=pd_sl_3bso4tn6l4_e&adgrpid=159179349812&hvpone=&hvptwo=&hvadid=675113330820&hvpos=&hvnetw=g&hvrand=16052300766491876874&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1003669&hvtargid=kwd-2282899823&hydadcr=8637_13668849&language=es_US')
        cy.get('[id=twotabsearchtextbox]')
          .should('exist')
          .type('book for kids')
          .should('be.visible')
        cy.get('[id=nav-search-submit-button]')
          .click()
          .should('have.value', 'Ir')
      
      })
      it('should be possible to select the desired item', () => {
        cy.visit('https://www.amazon.com/?&tag=googleuscol05-20&ref=pd_sl_3bso4tn6l4_e&adgrpid=159179349812&hvpone=&hvptwo=&hvadid=675113330820&hvpos=&hvnetw=g&hvrand=16052300766491876874&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1003669&hvtargid=kwd-2282899823&hydadcr=8637_13668849&language=es_US')
        cy.get('[id=twotabsearchtextbox]')
          .should('exist')
          .type('book for kids')
          .should('be.visible')
        cy.get('[id=nav-search-submit-button]')
          .click()
          .should('have.value', 'Ir')
        cy.get('[alt="Cooking with the Grinch (Dr. Seuss) (Step into Reading)"]').click()
      
      })
      it('should be possible to add the selected product to the cart', () => {
        cy.visit('https://www.amazon.com/?&tag=googleuscol05-20&ref=pd_sl_3bso4tn6l4_e&adgrpid=159179349812&hvpone=&hvptwo=&hvadid=675113330820&hvpos=&hvnetw=g&hvrand=16052300766491876874&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1003669&hvtargid=kwd-2282899823&hydadcr=8637_13668849&language=es_US')
        cy.get('[id=twotabsearchtextbox]')
          .should('exist')
          .type('book for kids')
          .should('be.visible')
        cy.get('[id=nav-search-submit-button]')
          .click()
          .should('have.value', 'Ir')
        cy.get('[alt="Cooking with the Grinch (Dr. Seuss) (Step into Reading)"]').click()
        cy.get('[id=add-to-cart-button]').click()
        cy.get('[id=add-to-cart-button]').should('not.exist')
    
      })
  });