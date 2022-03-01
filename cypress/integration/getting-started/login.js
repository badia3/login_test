

beforeEach('Loading',function(){
    cy.fixture("data").then((data)=>{
        this.key = data
    })
    cy.visit('')
   
})
afterEach(() => {

    cy.screenshot({ clip: { x: 0, y: 200, width: 1880, height: 730 } })

  })

it('login test successfuly',function(){
    
    cy.login(this.key.email,this.key.password)
    cy.verifing(this.key.id_header)
    
})

it('login test failed case mobile/email is wrong',function(){

cy.login(this.key.wrong_user_name,this.key.password)
cy.verifing(this.key.id_login_error)

})


it('login test failed case password is wrong',function(){
    
    cy.login(this.key.email,this.key.wrong_password)
    cy.verifing(this.key.id_error_register)
    })
    

it('login test failed mobile/email is empty',function(){
        
        cy.login_empty_username('',this.key.password)
        cy.verifing(this.key.id_login_error)

        })    

it('login test failed password is empty',function(){
    
    cy.login_empty_password(this.key.email,'') 
    cy.verifing(this.key.id_password_error)

    })

        
it('login test failed case password not valid',function(){
    
    cy.login(this.key.email,this.key.invalid_password)
    cy.verifing(this.key.id_password_error)

    })       
