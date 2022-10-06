const inputVal0 = document.querySelector(".inputVal0");
const inputVal1 = document.querySelector(".inputVal1");
const btnTransform = document.querySelector(".btnTransform");
const count = document.querySelector(".count");
//query selecting the needed variable

//Adding a function & eventlistener when clicked
btnTransform.addEventListener("click", function () {
  const textInput = inputVal0.value;
  const result = textInput
    //put into lowercase
    .toLowerCase()

    //will split the textInput into an array
    .split(" ")

    //map every value in textInput, at index 0 the textInput value will be upperCase and the rest of them
    //will follow into a sentence
    .map((every) => `${every[0].toUpperCase()}${every.slice(1)}`)

    //will join the array from split method and change , into a space
    .join(" ");

  //when the button clicked, the inputVal1 (textarea) will get a new word from inputVal0
  inputVal1.textContent = result;

  return inputVal1.textContent;
});

//Adding a function and calculate the character count
inputVal0.addEventListener("keyup", function () {
  count.textContent = inputVal0.value.length;
});
