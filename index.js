document.querySelector(".btn-task").onclick = () => {
    if (document.querySelector('.input-area').value.length == 0) {
        alert("Enter task")
    } else {

        document.querySelector(".tasks").innerHTML +=
            `<div>
        <span class="addedtsks"> ${document.querySelector(".input-area").value}</span>
        <i class="fa-solid fa-trash-can del"></i>
        </div>
        `
        document.querySelector(".input-area").value=""
    }
    var elem = document.querySelectorAll(".del");
    console.log(elem)
    for (var i = 0; i < elem.length; i++) {
        elem[i].onclick = function () {
            this.parentNode.remove();
        }
    }
    // document.querySelector(".addedtsks").value.onclick.setAttribute("id","completed")
}