let add = (a,b) => a+ b;
let subtract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;

describe('Unit testing for our aplication', () => {
    describe('Math with positive numbers', () => {
        it('should add positive numbers', () =>{
            expect(add(1,2)).to.eq(3);
        });
        it('should subtract positive numbers', () =>{
            expect(subtract(4,2)).to.eq(2);
        });
        it('should divide positive numbers', () =>{
            expect(divide(4,2)).to.eq(2);
        });
        it('should multiply positive numbers', () =>{
            expect(multiply(4,2)).to.eq(8);
        });
    });
    describe('Math with decimal numbers', () => {
        it('should add decimal numbers', () =>{
            expect(add(2.2 ,2.2)).to.eq(4.4);
           
        });
        it('should subtract decimal numbers', () =>{
            expect(subtract(4.4,2.2)).to.eq(2.2);
        });
    });

});
