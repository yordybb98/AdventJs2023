function findFirstRepeated(gifts) {
    const map = new Set()
    for(const gift of gifts){
        if(map.has(gift)){
            return gift
        }
        else{
            map.add(gift)
        }
    }
    return -1
  }
  

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)