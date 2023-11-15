function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
     
}
Square.prototype.isSquare = function(a,b,c,d) {
        
        if(a==b && b==c && c==d){
            return true
        }
        return false
}
const isSquare1 = new Square(1,1,1,1);
console.log(isSquare1.isSquare())