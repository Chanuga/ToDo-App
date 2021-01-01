describe('ToDo App Testing', function(){
    it('Visit the URL', function(){
        cy.visit('http://localhost:3000/')
    })
    it('Add an Item to the List', function(){
        cy.get('input[type="text"]').type('Deployment');
        cy.get('.ant-btn').contains('Add to List').click();
    })
    it('Change the Status of ToDo',function(){
        cy.get('.ant-btn').contains('Mark as Procesing').click();
    })
    it('Delete Item from ToDo',function(){
        cy.get('.ant-btn-dangerous').contains('Delete').click()
    })
})