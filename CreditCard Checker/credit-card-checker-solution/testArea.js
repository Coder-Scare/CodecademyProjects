const toNumber = string => {
    const cardNum = [];
    for (let i = 0; i < string.length; i++) {
      const converter = parseInt(string[i], 10);
      cardNum.push(converter);
    }
    return cardNum;
  }
  
  //Test toNumber function
  const card2 ='5795593392134643'; //Invalid
  
  const convertCard2 = toNumber(card2);
  console.log(convertCard2);