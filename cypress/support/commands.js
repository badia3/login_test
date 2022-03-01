
Cypress.Commands.add('login',(email,password,expectError=false) =>{
    cy.get('.login-link').click()
    //testInput(email) 
        //cy.get('#user_login')
          //.clear()
          //.then(e => { if (email !== '') cy.wrap(e).type(email) });
      
    cy.get('#user_login').type(email)
    cy.get('#user_password').type(password)
    cy.get('#login_button').click()
    if (expectError=false){
        
    }
})

Cypress.Commands.add('login_empty_username',(email,password) =>{
    cy.get('.login-link').click()
    cy.get('#user_login').should('be.empty')
    cy.get('#user_password').type(password)
    cy.get('#login_button').click()
})

Cypress.Commands.add('login_empty_password',(email,password) =>{
    cy.get('.login-link').click()
    cy.get('#user_login').type(email)
    //cy.get('#user_password').should('be.empty')
    cy.get('#login_button').click()
})

Cypress.Commands.add('verifing',(id) =>{
    cy.get(id).should('exist')
    

})
