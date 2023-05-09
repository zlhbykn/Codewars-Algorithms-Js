solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    let n = (givenMass1/molarMass1)+(givenMass2/molarMass2);
    let nRT = n*0.082*(temp+273.15);
    let nRTV = nRT/volume;
    let P = nRTV;
    return P;
  }