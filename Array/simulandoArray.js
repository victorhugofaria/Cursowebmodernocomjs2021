const quaseArray = {0: "Rafael", 1: "Beatriz", 2:"Fabiana"}
console.log(quaseArray)
Object.defineProperty(quaseArray, "toString", {
    value: function() {return Object.values(this)},
    enumerble: false
})

console.log(quaseArray[0])
const meuArray = ["Rafael", "Beatriz", "Fabiana"]
console.log(meuArray)
console.log(quaseArray.toString(), meuArray)