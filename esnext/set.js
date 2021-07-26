// não aceita repetição/não indexada
const times = new Set()
times.add("Real Madrid")
times.add("Barcelona")
times.add("Vila Real").add("Chelsea").add("Arsenal")
times.add("Manchester City")
times.add("Real Madrid")

console.log(times)
console.log(times.size)
console.log(times.has("real madrid"))
console.log(times.has("Real Madrid"))
times.delete("Manchester City")
console.log(times.has("Manchester City"))

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"]
const nomesSet = new Set(nomes)
console.log(nomesSet)