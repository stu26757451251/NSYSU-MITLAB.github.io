var C159='';var E323='';var d197='';var a447='';var E214='';var C283;var H214;var I433;var I126=2000;var H511=0;var H133=0;var E125='#FFF';var f122='#FFF';var H993;var B126={OVER:'over',OUT:'out',CLICK:'click'};var B154={};var C317={classid:'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000',codebase:'http://fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0',allowScriptAccess:'always',quality:'high',wmode:'transparent',align:'middle',type:'application/x-shockwave-flash',pluginspage:'http://adobe.com/go/getflashplayer',Text:{id:'dm_text_',movie:C213+'Type_text_double_B.swf',size:[315,135,315,200]},dText:{id:'dm_dtext_',movie:C213+'Type_text_double_B.swf',size:[315,200,315,200]},Picture:{id:'dm_pic_',movie:C213+'Type_text_pic_D.swf',size:[375,200,375,250]},PictureText:{id:'dm_pictext_',movie:C213+'Type_text_pic_D.swf',size:[375,250,375,250]},Extra:{id:'dm_extra_',movie:C213+'Type_text_full_B.swf',size:[375,200,375,200]}};function E182(_keyword,_format,_ids){B154[_keyword]={Format:_format,IdAry:_ids,HadImpr:0,HadHighlight:0};}function f144(){var B156=d556.body;if(!B156.firstChild)return;C203(B154,function(_keyword){if(I136())return false;H511=0;if(_keyword.length>0&&B156.innerHTML.indexOf(_keyword)>=0){function j200(){if(I136()||B154[_keyword].HadHighlight==1)return false;if(this==null)return;var E195=this.nodeName.toUpperCase();if(/^a|script|textarea|iframe|option$/i.test(E195))return;if(/^span|div$/i.test(E195)){if(this.id==d197)return;if(H133==0){if(this.id==a447)H511=1;if(this.id==E214)H511=0;}}if(this.nodeType==3&&d158()){var I292=this.parentNode;var B303=this.nodeValue;var I467=B303.toLowerCase().indexOf(_keyword.toLowerCase());if(I467>0){var a157=I467+_keyword.length;I292.insertBefore(B276('text',B303.substring(0,I467)),this);I292.insertBefore(B276('span',I168(B303.substring(I467,a157))),this);I292.replaceChild(B276('text',B303.substring(a157)),this);I136(-1);B154[_keyword].HadHighlight=1;return false;}}if(this.firstChild)C203(this.childNodes,j200);}C203(B156.childNodes,j200);}});var E924=[];C203(B154,function(){if(this.HadHighlight==1)E924.push(this.IdAry);});if(E924.length>0)a207(j341+E323+'?str='+E924.join(',')+'&sid='+H126+'&w='+d681);}function C462(_act,_keyword,_e,_obj){if(_act==B126.OVER){H658(_keyword,_obj);}else if(_act==B126.OUT){G170();}else if(_act==B126.CLICK){window.open(encodeURI(B154[_keyword].Format.ACT));}}function H658(_keyword,_obj){a668(C283);var E181=H186();if(I138('DM_MovieDiv_'+_keyword)==null){var H193=[];C203(B154[_keyword].Format,function(_var){if(this==null||!this.length||this.length==0)return;H193.push(_var+'='+encodeURIComponent(this));});var d116Type=G190('&'+H193.join('&'));var d116=C317[d116Type];var G294=d116.size;var I467=d227(_obj,d116.size[0],d116.size[1]);j173(E181,{overflow:'hidden',zIndex:'9999',position:'absolute',top:I467.top+'px',left:I467.left+'px',width:G294[0]+'px',height:G294[1]+'px'});var j937=B276('span',f118(_keyword,d116Type,H193.join('&'),G294[2],G294[3]));E181.innerHTML='';E181.appendChild(j937);H214=setTimeout('a646("'+j341+C159+'?k='+B154[_keyword].IdAry+'&sid='+H126+'&txn=1'+'&w='+d681+'", "'+_keyword+'")',I126);}j173(E181,'display','');}function G190(_testVar){if(/&AP=/.test(_testVar)){if(/&AT=/.test(_testVar))return'Picture';else return'Extra';}else return'Text';}function G170(){C283=setTimeout('d261()',500);}function d261(){var E181=H186();j173(E181,'display','none');E181.innerHTML='';a668(H214);}function a668(_timer){if(_timer&&_timer!=null){clearTimeout(_timer);_timer=null;}}function d227(_obj,_width,_height){var I467={left:-1,top:-1};if(_obj){var I198=_top=0;if(_obj.x){I198+=_obj.x;_top+=_obj.y;}else{var C159=_obj;while(C159&&!/^html|body$/i.test(_obj.tagName)){I198+=C159.offsetLeft;_top+=C159.offsetTop;C159=C159.offsetParent;}}var B156=d556.body;var d175=d556.documentElement;var C126=(d175.offsetHeight==B156.clientHeight?d175:(B156.scrollTop==0?d175:B156)).clientHeight;var E636=(B156.scrollTop==0?d175:B156).scrollTop;I198-=((I198+_width>B156.clientWidth?_width/2:0)+60);_top-=(_height+_obj.offsetHeight+_top)>(E636+C126)?_height:-(_obj.offsetHeight*1.5);I467.left=I198<0?0:I198;I467.top=_top<0?0:_top;}return I467;}function f118(_keyword,d116Type,H193,_width,_height){var d116=C317[d116Type];var E307='<ins id="DM_MovieDiv_'+_keyword+'" onmouseover="H658(\''+_keyword+'\')" onmouseout="G170()">'+'<OBJECT classid="'+C317.classid+'" codebase="'+C317.codebase+'" width="'+_width+'" height="'+_height+'" id="'+d116.id+'" align="'+C317.align+'">'+'<PARAM NAME="allowScriptAccess" VALUE="'+C317.allowScriptAccess+'"/>'+'<PARAM NAME="movie" VALUE="'+d116.movie+'"/>'+'<PARAM NAME="quality" VALUE="'+C317.quality+'"/>'+'<PARAM NAME="wmode" VALUE="'+C317.wmode+'"/>'+'<PARAM NAME="flashvars" VALUE="'+H193+'"/>'+'<embed id="'+d116.id+'" src="'+d116.movie+'" flashvars="'+H193+'" wmode="'+C317.wmode+'" quality="'+C317.quality+'" width="'+_width+'" height="'+_height+'" align="'+C317.align+'" allowScriptAccess="'+C317.allowScriptAccess+'" type="'+C317.type+'" pluginspage="'+C317.pluginspage+'">'+'</OBJECT>'+'</ins>';return E307;}function I168(_keyword){var H168={};C203(B126,function(_e){H168[_e]='C462(\''+this+'\', \''+_keyword+'\', event, this)';});return'<span id="'+d197+'">'+'<span id="word_'+_keyword+'" '+'onmouseover="'+H168.OVER+'" '+'onmouseout="'+H168.OUT+'" '+'onclick="'+H168.CLICK+'" '+'style="text-decoration:underline;border-bottom:'+E125+' 2px dashed;padding-bottom: 1px;color:'+f122+';background-color:transparent;cursor:pointer;">'+_keyword+'</span></span>';}function a646(_target,_keyword){if(B154[_keyword].HadImpr==0){B276('img',null,{src:_target+'&rdm='+Math.random()*5});B154[_keyword].HadImpr=1}}function a207(_target){B276('img',null,{src:_target+'&rdm='+Math.random()*5});}function d158(){return H133==1||H511==1;}function H186(){return I138('DM_MainZone');}function I138(_id){return d556.getElementById(_id);}function I136(_arg){if(_arg&&typeof(_arg)=='number')H993+=_arg;return H993==0;}function j173(_obj,_key,B303){if(_obj&&_key){if(arguments.length==arguments.callee.length){I102(_obj.style,_key,B303);}else{I102(_obj.style,_key);}}return _obj;}function j201(_key){var j197=navigator.userAgent.toLowerCase();if(_key=='msie')return /msie/.test(j197)&&!/opera/.test(j197);if(_key=='moz')return /mozilla/.test(j197)&&!/(compatible|webkit)/.test(j197);if(_key=='safari')return /webkit/.test(j197);}E698=1;