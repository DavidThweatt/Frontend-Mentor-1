const submit = document.getElementsByClassName("RatingBtn");
const rating = document.getElementsByClassName("Rating");
const rateDiv = document.getElementsByClassName("rateContainer");
const submitDiv = document.getElementsByClassName("submitContainer");
const num = document.getElementsByClassName("ratePick");

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", (e) => {
    const current = document.getElementsByClassName("activeRate");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activeRate", "");
    }

    // Add the active class to the current/clicked button
    e.target.className += " activeRate";

    console.log([i]);
    const newNum = document.createTextNode("[i + 1]");
    num.appendChild(newNum);
  });
}

submit[0].addEventListener("click", () => {
  rateDiv[0].style.display = "flex" ? "none" : "flex";
  submitDiv[0].style.display = "none" ? "flex" : "none";
});
