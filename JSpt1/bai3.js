function grade(physics, chemistry, biology, mathematics, computer){
    averageScore = ((physics + chemistry + biology + mathematics  + computer) / 50) * 100
    if (averageScore >= 90) {
        console.log("Grade A")
    } else if (averageScore >= 80){
        console.log("Grade B")
    } else if (averageScore >= 70) {
        console.log("Grade C")
    } else if (averageScore >= 60){
        console.log("Grade D")
    }else if (averageScore >= 40){
        console.log("Grade E")
    }else {
        console.log("Grade F")
    }
}
grade(10, 9.5, 9.2, 10, 9)