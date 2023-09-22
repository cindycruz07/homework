function checkAnswers() {
    let q1 = document.querySelector('input[name="q1"]:checked').value;
    let q2 = document.querySelector('input[name="q2"]:checked').value;
    let q3 = document.querySelector('input[name="q3"]:checked').value;

    let correctAnswers = 0;

    if (q1 === "B") correctAnswers++;
    if (q2 === "B") correctAnswers++;
    if (q3 === "B") correctAnswers++;

    document.getElementById("result").innerText = "You got " + correctAnswers + " out of 3 questions right!";
}