document.addEventListener("DOMContentLoaded",function()
{
    const modal=document.getElementById("modal");
const btn=document.getElementById("workingtimes");
const span=document.getElementsByClassName("close")[0];
const dropdown=document.getElementById("hoursdropdown");
const list=document.getElementById("hourslist");
btn.onclick=function()
{
    modal.style.display="block";
    document.body.classList.add("modalopen")
}
span.onclick=function()
{
    modal.style.display="none";
    document.body.classList.remove("modalopen")
} 
window.onclick=function(event) 
{
    if(event.target==modal)
    {
        modal.style.display="none"
    }
}
hoursdropdown.onclick=function(event)
{
    event.stopPropagation();
    if(hourslist.style.display=="block")
    {
        hourslist.style.display="none"
    }
    else{
        hourslist.style.display="block"
    }
}
})