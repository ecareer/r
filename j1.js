document.getElementById("nav").innerHTML='<div class="ab"><div onclick="s(ls)">&#9776;</div><div class="logo">UDYOGA INFO</div><div onclick="s(rs)">&#9776;</div></div><div id="o" onclick="c()"></div><nav id="ls"><a onclick="l(this)">ALL JOBS</a><a onclick="l(this)">STATE GOVT JOBS</a><a onclick="l(this)">CENTRAL GOVT JOBS</a><a onclick="l(this)">BANK JOBS</a><a onclick="l(this)">POLICE JOBS</a><a onclick="l(this)">RAILWAY JOBS</a><a onclick="l(this)">ENGINEERING JOBS</a><a onclick="l(this)">DEFENCE JOBS</a><a onclick="l(this)">TEACHING JOBS</a></nav><nav id="rs"><a href="https://udyogainfonoti.blogspot.com/">NOTIFICATIONS</a><a href="https://udyogainfobooks.blogspot.com/">STUDY MATERIALS</a></nav>';





const ls=document.getElementById("ls");

const rs=document.getElementById("rs");

const o=document.getElementById("o");

function s(sb)
{
    sb.style.display="block";
    o.style.display="block";
}
function c()
{
    ls.style.display="none";
    rs.style.display="none";
    o.style.display="none";
}
function l(ele)
{
    location.href="https://udyogainfo.blogspot.com/search/label/"+ele.innerHTML;
}

document.getElementById("footer").innerHTML=' <div>Developed By Raghu</div><div>Email : udyogainfo@gmail.com</div><br><br><div>from</div><div>ENOUPLUS</div>';
