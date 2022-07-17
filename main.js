function percentage() {
    let a = document.querySelector("#a").value
    let b = document.querySelector("#b").value
    let c = document.querySelector("#c").value
    let d = document.querySelector("#d").value
    let e = document.querySelector("#e").value
    let f = document.querySelector("#f").value
    let g = document.querySelector("#g").value
    let h = document.querySelector("#h").value
    let i = document.querySelector("#i").value
    let j = document.querySelector("#j").value

    a = Number(a)
    b = Number(b)
    c = Number(c)
    d = Number(d)
    e = Number(e)
    f = Number(f)
    g = Number(g)
    h = Number(h)
    i = Number(i)
    j = Number(j)

    let max = 1000;
    document.querySelector("#marks").innerHTML =
        `The Total marks are: ${max}`;
    let add = (a + b + c + d + e + f + g + h + i + j);
    document.querySelector("#addition").innerHTML =
        `The Total of your obtained marks is: ${add}`;
    let ave = (a + b + c + d + e + f + g + h + i + j) / 10;
    document.querySelector("#average").innerHTML =
        `The Average of your obtained marks is: ${ave}`;
    let TotalMarks = 1000;
    let per = (a + b + c + d + e + f + g + h + i + j);
    let total = (per / TotalMarks) * 100;
    document.querySelector("#percentage").innerHTML =
        `The Percentage of your obtained marks is: ${total}%`;
     
        if (total >= 80) {
            document.querySelector("#grade").innerHTML =
                `Your grade is A1, Well done!`;
        } else if (total >= 70) {
            document.querySelector("#grade").innerHTML =
                `Your grade is A, Better!`;
        }else if (total >= 60) {
            document.querySelector("#grade").innerHTML =
                `Your grade is B, Keep it up!`;
        }else if (total >= 50) {
            document.querySelector("#grade").innerHTML =
                `Your grade is C, Good!`;
        }else if (total >= 40) {
            document.querySelector("#grade").innerHTML =
                `Your grade is D, Very bad!`;
        }else{
            document.querySelector("#grade").innerHTML =
                `You are Fail, Work hard!`;
        }
    }


