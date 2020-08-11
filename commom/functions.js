function jb_finished()
{
    if(main_ret == 179 || main_ret == 0){
		setCookie("JB","DONE",30);
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 6.72越狱漏洞加载完成 ✔"; }, 500);
    } else{
        	setTimeout(function(){document.getElementById("progress").innerHTML="越狱失败,请重启PS4并重复越狱操作!!"; }, 500);
    }
}

function payload_finished()
{
	setCookie("JB","DONE",30);
	setTimeout(function(){document.getElementById("progress").innerHTML="加载完成!!"; }, 3000);
	setTimeout(function(){document.getElementById("progress").innerHTML="PS4 越狱 6.72 Payload 加载完成 ✔"; }, 7000);
}

function SC(x)
{
    return '<script src="'+x+'.js"></scr'+'ipt>';
}

function JB(x)
{
    return SC('jb/'+x);
}

function PAYLOAD(x)
{
    return SC('payloads/'+x);
}

function load_JB()
{	var jbDone=getCookie("JB");
	if (jbDone == "" || jbDone == "START"){
		setCookie("JB","START",30);
		exploit();	
	}else{
		setTimeout(function(){document.getElementById("progress").innerHTML="PS4 6.72越狱漏洞加载完成 ✔"; }, 500);
	}
}

function exploit(){
	if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #003263;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<h1 id="progress" style="margin-top:30px;text-align:center;">运行越狱漏洞!!</h1><hr>'+
			       		'<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miranohb\'); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:28%">Mira UnOfficial</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>更多游戏资源请访问<br>GameKegs.com游戏大桶<br>PS4 6.72越狱破解,8月4日更新<br>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:43%">Bin Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'disableupdates\'); return false" style="width:43%">禁止更新</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'enableupdates\'); return false" style="width:43%">启用更新</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'dumper\'); return false" style="width:43%">Dumper</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'kerneldumper\'); return false" style="width:43%">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'historyblocker\'); return false" style="width:43%">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'todex\'); return false" style="width:43%">To-DEX</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'webrte\'); return false" style="width:43%">WebRTE</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'linuxloader\'); return false" style="width:90%">Linux Loader</a></td>'+
						'</tr>'+
						'</table></div>');
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="运行越狱漏洞!!";</scr'+'ipt>');
	}
	setTimeout(function(){document.write(JB('jb'));}, 500);
}

function load_netcat()
{
	if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #003263;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<h1 id="progress" style="margin-top:30px;text-align:center;">加载中!请稍等!!</h1><hr>'+
			       		'<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miranohb\'); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:28%">Mira UnOfficial</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>更多游戏资源请访问<br>GameKegs.com游戏大桶<br>PS4 6.72越狱破解,8月4日更新<br>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:43%">Bin Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'disableupdates\'); return false" style="width:43%">禁止更新</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'enableupdates\'); return false" style="width:43%">启用更新</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'dumper\'); return false" style="width:43%">Dumper</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'kerneldumper\'); return false" style="width:43%">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'historyblocker\'); return false" style="width:43%">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'todex\'); return false" style="width:43%">To-DEX</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'webrte\'); return false" style="width:43%">WebRTE</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'linuxloader\'); return false" style="width:90%">Linux Loader</a></td>'+
						'</tr>'+
						'</table></div>');
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="加载中!请稍等!!";</scr'+'ipt>');
	}
	setCookie("JB","START",30);
	setTimeout(function(){document.write(PAYLOAD('mira')+PAYLOAD('c-code')+'<script>setCookie("JB","DONE",30);document.getElementById("progress").innerHTML="Awaiting Payload!! Send Payload To Port 9021";</scr'+'ipt>');}, 500);
}

function load_payload(payload)
{	
    if(document.getElementById('table') == null){
		document.write('<style>'+
						'.button {'+
						'  background-color: #003263;'+
						'  border-radius: 5px;'+
						'  color: white;'+
						'  padding: .5em;'+
						'  text-decoration: none;'+
						'  height:100%;'+
						'  display:inline-table;'+
						'}'+
						'.button:focus,'+
						'.button:hover {'+
						'  background-color: #007bff;'+
						'  color: White;'+
						'}'+
						'</style>');
		document.write('<h1 id="progress" style="margin-top:30px;text-align:center;">加载中!请稍等!!</h1><hr>'+
			       		'<div>'+
						'<table id="table" align="center" style="width:600px;margin-top:30px;">'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'mirahen\'); return false" style="width:28%">MIRA + HEN</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miranohb\'); return false" style="width:28%">MIRA No HB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'miraunofficial\'); return false" style="width:28%">Mira UnOfficial</a></td>'+
						'</tr>'+
						'<tr><td><br/></td></tr>'+
						'<tr>'+
						'<td colspan="2" align="center"><h1>更多游戏资源请访问<br>GameKegs.com游戏大桶<br>PS4 6.72越狱破解,8月4日更新<br>Payloads</h1></td>'+
						'</tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'app2usb\'); return false" style="width:43%">App2USB</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_netcat(); return false" style="width:43%">Bin Loader</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'disableupdates\'); return false" style="width:43%">禁止更新</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'enableupdates\'); return false" style="width:43%">启用更新</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'dumper\'); return false" style="width:43%">Dumper</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'kerneldumper\'); return false" style="width:43%">Kernel Dumper</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'restore\'); return false" style="width:43%">Restore</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'historyblocker\'); return false" style="width:43%">History Blocker</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'ftp\'); return false" style="width:43%">FTP</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'backup\'); return false" style="width:43%">BackUp</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'todex\'); return false" style="width:43%">To-DEX</a>&nbsp;'+
						'<a href="#" class="button" onclick="load_payload(\'webrte\'); return false" style="width:43%">WebRTE</a></td>'+
						'</tr><tr><td><br/></td></tr>'+
						'<tr>'+
						'<td align="center" colspan="2"><a href="#" class="button" onclick="load_payload(\'linuxloader\'); return false" style="width:90%">Linux Loader</a></td>'+
						'</tr>'+
						'</table></div>');
	}else{
		document.write('<script>document.getElementById("progress").innerHTML="加载中!请稍等!!";</scr'+'ipt>');
	}
	setCookie("JB","START",30);
	setTimeout(function(){document.write(PAYLOAD('mira')+PAYLOAD(payload)+PAYLOAD('c-code')+'<script>payload_finished();</scr'+'ipt>');}, 500);
}

function getCookie(name) {
  var name = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(name, value, mins) {
  var d = new Date();
  d.setTime(d.getTime() + (mins*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
