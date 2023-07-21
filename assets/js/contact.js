const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("next");
    });
});
prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("prev");
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input").forEach((input) => {
        const { name, value } = input;
        inputs.push({ name, value });
    });
    console.log(inputs);
    form.reset();
});

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = steps.indexOf(active);
    steps[index].classList.remove("active");
    if (btn === "next") {
        index++;
    } else if (btn === "prev") {
        index--;
    }
    steps[index].classList.add("active");
}


// button
const submit = document.getElementById("submitbt");
const input1 = document.getElementById("firstName");
const input2 = document.getElementById("lastName");
const input3 = document.getElementById("email");
const input4 = document.getElementById("phone");
const input5 = document.getElementById("country");
const input6 = document.getElementById("City");
const input7 = document.getElementById("postCode");



input1,input2,input3,input4,input5,input6,input7.addEventListener('keyup', (e) => {
    const value = e.currentTarget.value;

    submit.disabled = false;

    if(value===""){
        submit.disabled = true;
    }
})


// numberonly

function numberonly(input){
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num,"");
}
