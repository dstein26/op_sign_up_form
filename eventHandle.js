/*
const form = document.getElementById("myForm");

function showForm()
{
    form.style.transform = 'scaleY(1)';
}
*/

const collapse = document.getElementsByClassName("collapse");

for (let ii = 0; ii < collapse.length; ii++)
{
    collapse[ii].addEventListener("click", function(e)
        {
            const content = this.nextElementSibling;
            if(content.style.maxHeight)
            {
                content.style.maxHeight = null;
                content.style.padding = null;
            }
            else
            {
                content.style.padding = content.getAttribute("padding");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        })
}