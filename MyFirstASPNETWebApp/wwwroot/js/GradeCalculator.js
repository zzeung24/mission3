/* Grade calculator with alert */

$("#btnSend").click(function () {
    var FinalGrade = Math.round((($("#assignments").val() * 0.55) +
        ($("#groupproject").val() * 0.05) +
        ($("#quizzes").val() * 0.1) +
        ($("#exams").val() * 0.2) +
        ($("#intex").val() * 0.1)) * 100) / 100;

    var LetterGrade = ""
    if (FinalGrade >= 93) {
        LetterGrade = "A";
    }
    else if (FinalGrade >= 90) {
        LetterGrade = "A-";
    }
    else if (FinalGrade >= 87) {
        LetterGrade = "B+";
    }
    else if (FinalGrade >= 83) {
        LetterGrade = "B";
    }
    else if (FinalGrade >= 80) {
        LetterGrade = "B-";
    }
    else if (FinalGrade >= 77) {
        LetterGrade = "C+";
    }
    else if (FinalGrade >= 73) {
        LetterGrade = "C";
    }
    else if (FinalGrade >= 70) {
        LetterGrade = "C-";
    }
    else if (FinalGrade >= 67) {
        LetterGrade = "D+";
    }
    else if (FinalGrade >= 63) {
        LetterGrade = "D";
    }
    else if (FinalGrade >= 60) {
        LetterGrade = "D-";
    }
    else {
        LetterGrade = "F";
    }

    alert(
    "Final Grade: " + FinalGrade +
    ", Letter Grade: " + LetterGrade);

})
