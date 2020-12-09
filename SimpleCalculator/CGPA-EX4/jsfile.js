var gpas = [];

function myfunction() {
    var s1 = document.getElementById("cr1").value
    var s2 = document.getElementById("cr2").value
    var s3 = document.getElementById("cr3").value
    var s4 = document.getElementById("cr4").value
    var s5 = document.getElementById("cr5").value
    var s6 = document.getElementById("cr6").value
    var s7 = document.getElementById("cr7").value
    var credits = Number(s1) + Number(s2) + Number(s3) + Number(s4) + Number(s5) + Number(s6) + Number(s7)


    var grade1 = (document.getElementById("grade1").value)
    var grade2 = (document.getElementById("grade2").value)
    var grade3 = (document.getElementById("grade3").value)
    var grade4 = (document.getElementById("grade4").value)
    var grade5 = (document.getElementById("grade5").value)
    var grade6 = (document.getElementById("grade6").value)
    var grade7 = (document.getElementById("grade7").value)
    if (grade1 == 0 || grade2 == 0 || grade3 == 0 || grade4 == 0 || grade5 == 0 || grade6 == 0 || grade7 == 0) {
        document.getElementById("gpa").innerHTML = "RA"
        console.log(value)
    }

    if (grade1 == '-' || grade2 == '-' || grade3 == '-' || grade4 == '-' || grade5 == '-' || grade6 == '-' || grade7 == '-') {
        document.getElementById("gpa").innerHTML = "Absent"
        console.log(value)
    }
    var su1 = Number(s1) * (grade1)
    var su2 = Number(s2) * (grade2)
    var su3 = Number(s3) * (grade3)
    var su4 = Number(s4) * (grade4)
    var su5 = Number(s5) * (grade5)
    var su6 = Number(s6) * (grade6)
    var su7 = Number(s7) * (grade7)

    var grades = Number(su1) + Number(su2) + Number(su3) + Number(su4) + Number(su5) + Number(su6) + Number(su7)

    var gpa = Number(grades) / Number(credits)
    gpas.push(gpa);
    var len = gpas.length
    document.getElementById("gpa").innerHTML = `${len}st sem GPA - ${gpa}`


}

function cgpa() {
    var sum =0;
    for(let i=0;i<gpas.length;i++){
        sum+=gpas[i];
    }
    console.log("hdhsds")
    cgpamar = sum/gpas.length;
    document.getElementById("cgpadis").innerHTML = `CGPA - ${cgpamar}`
}