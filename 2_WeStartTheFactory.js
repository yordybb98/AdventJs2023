function manufacture(gifts, materials) {
    const manufacturableGifts = [];
    const materialSet = new Set(materials);
  
    for (const gift of gifts) {
      if (canManufacture(gift, materialSet)) {
        manufacturableGifts.push(gift);
      }
    }
  
    return manufacturableGifts;
  }
  
  function canManufacture(gift, materials) {
  
    for (const char of gift) {
      if (!materials.has(char)) {
        return false;
      }
    }
  
    return true;
  }

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials));