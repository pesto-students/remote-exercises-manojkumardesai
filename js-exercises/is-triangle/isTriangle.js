function isTriangle(sideOne, sideTwo, sideThree) {
   return (sideOne + sideTwo <= sideThree) || 
  (sideOne + sideThree <= sideTwo) ||
  (sideTwo + sideThree <= sideOne);
}

export {
  isTriangle
};
