	$(document).click(function(e){
		e = e || window.event;
		obj = $(e.srcElement || e.target);
		if(e.target.tagName == "A") return;
		if(obj.attr("id") != "succ_msg" || obj.attr("id") != "_succ_msg"){
			if($("#succ_msg").length > 0) $("#succ_msg").hide();
			if($("#_succ_msg").length > 0) $("#_succ_msg").hide();
		}
	});
function savesearch_options(){
	var search_key_type = $('input[name=href_search_type]').val();
	var search_key_str = $('input[name=s]').val();
	var search_key_default = {
		r:'',
		c:'',
		a:'',
		odmin:'',
		odmax:'',
		idmin:'',
		idmax:'',
		pmin:'',
		pmax:'',
		ro:'',
		t:'0'
	}
	if(search_key_type=='rentProperty'){
		search_key_default.ac = '2';
	}else{
		search_key_default.ac = '1,3';
	}
	if(search_key_str==''){
		var search_key_options = {};
	}else{
		var search_key_arr = search_key_str.split('_');
		var search_key_options = {};
		for(var i in search_key_arr){
			var search_key_detail_arr = search_key_arr[i].split('-');
			if(search_key_detail_arr[0]=='t'){
				if(search_key_detail_arr[1]!='4'){
					search_key_options.ac = search_key_default.ac;
				}else{
					search_key_options.ac = '3';
				}
				search_key_options.t = search_key_detail_arr[1];
			}else{
				eval('search_key_options.'+search_key_detail_arr[0]+' = search_key_detail_arr[1];');
			}
		}
	}
	$.extend(search_key_default,search_key_options);
	return search_key_default;
}
function savesearch(){
	if( $("#iconlist li").length > 3 ){
		tb_show(null,ROOT_PATH+"?c=property&a=save_property_search&height=360&width=370&modal=true",false);
	}else{
		//tb_show(null,ROOT_PATH+"?c=usermanager&a=login&height=380&width=370&modal=true",false);
		window.location.href = ROOT_PATH + 'login';
	}
}
function savesearch2(){
	var sousuoname =$("#savesearch_name").val();
	search_key_default = savesearch_options();
	if (sousuoname == ""){
		$("#SaveSearchNameError_msg").show();
		return false;
	}
	if(sousuoname.length>30){
		$("#error_msg").show();
		return false;
	}else{
		$.getJSON(ROOT_PATH+"?c=collect&a=_addToSearch",
				  {
					active:search_key_default.ac,
					sname: sousuoname,
					region:search_key_default.r,
					city: search_key_default.c,
					area: search_key_default.area,
					outdoor_size_min: search_key_default.odmin,
					outdoor_size_max: search_key_default.odmax,
					indoor_size_min: search_key_default.idmin,
					indoor_size_max: search_key_default.idmax,
					min_price: search_key_default.pmin,
					max_price: search_key_default.pmax,
					room:search_key_default.ro,
					search_type:search_key_default.t,
					search_current_ex:$("input[name=search_current_ex]").val()
				  },
				  function(data){
					if(data['result_code']==0) alert('保存名单成功');
					else alert('请先登录');
			});
			tb_remove();
	}
}

function saveFavorite(ID){
	$.getJSON(ROOT_PATH+"?c=collect&a=_addToFavorite&id="+ID, function(data){
		if(data['result_code']==0 || data['result_code']==1){
			juwaiAlert(data['result_code']==0 ? '收藏成功' : '您已经收藏');
			$("#favoritebtn a").css({"background-position":"-37px -20px"});
		}else if(data['result_code'] == 3){
			//window.location.href = ROOT_PATH + 'login';
			tb_show(null,ROOT_PATH+"?c=login&a=popLogin&height=400&width=760&modal=true&popf=saveFavorite("+ID+")",false);
			//return;
		}else {
			alert(languagedata.savefavoritefail);
		}
	})
}

function selected_this(current){
	$(current).parent().children().removeClass('selected');
	$(current).addClass('selected');
}

$(document).ready(function(){

	/*********图片部分AJAX loading*********/

	var property_arr_href = window.location.href;
	var reg = /.*\/(en\/){0,1}(\d+)\.htm/;
	var property_arr = property_arr_href.match(reg);
	propertyid = property_arr[3];
	if($('#panel2').find('span').length>0){
		var callbackfunciton = function(index){
			var id = $(".small_img .detail_scroll_item.selected:first").index()+1;
			if($(".small_img .detail_scroll_item.selected:not('.clone'):first").index()+1 >= $(".small_img .detail_scroll_item:not('.clone')").length){
				id = 0;
			}
			if(api2){
				showBigIMG(id);
			}
		}

	   $('#datail_trigger2').switchable('#panel2 span', {
		   triggerType: 'click',
		   effect: 'scroll',
		   steps: 1,
		   visible: 4,
		   vertical:true,
		   funCallBack: callbackfunciton
		   }).autoplay({
				autoplay: true,
				autopause: true,
				interval: 5
			}).carousel();
     	var api2 = $('#datail_trigger2').switchable();
	    	$('#next2').click(function(){
     		   api2.next();
		    });
	 	    $('#prev2').click(function(){
	        	api2.prev();
		    });
	}
	if($('#panel3').find('span').length>0){
		   $('#datail_trigger3').switchable('#panel3 span', {
		   triggerType: 'click',
		   effect: 'scroll',
		   steps: 5,
		   visible: 5,
		   vertical:true
		   }).carousel();
     	var api3 = $('#datail_trigger3').switchable();
	    	$('#next3').click(function(){
     		   api3.next();
		    });
	 	    $('#prev3').click(function(){
	        	api3.prev();
		    });
	}
	/******************/
	//country_list效果
	var li_height_count = Math.ceil($(".country_list li").length/9)*20;
	$(".country_list").css("height",li_height_count+"px");
	$(".country_list li:last").css("clear","both").css("width","760px");
	// drop_down效果
	$(".drop_down label").click(function(){
		if($(this).attr("ordown") == "open"){
			$(this).parent().find("ul").slideUp("slow",function(){
				$(this).parent().find("label").css("background-position","0px 0px");
				$(this).parent().find("label").attr("ordown",false);
			});
		}else{
			$(this).attr("ordown","open");
			$(this).css("background-position","0px -20px");
			$(this).parent().find("ul li:last").css("background-position","0px -60px");
			$(this).parent().find("ul").slideDown("slow");
		};
	});

	$(".drop_down ul li").hover(function(){
	    $(this).css("text-decoration","underline");
	},function(){
	    $(this).css("text-decoration","none");
	});
	$(".drop_down ul li").click(function(){
		$(this).parent().parent().find("input").val($(this).attr("title"));
		$(this).parent().parent().find("label").html($(this).html());
		$(this).parent().parent().find("label").attr("ordown","close");
		$(this).parent().slideUp("slow",function(){
		    $(this).parent().find("label").css("background-position","0px 0px");
		});
	});
	$("#call_agent_btn").bind("click",function(){
		$('#agent_phone').slideDown();
		$.get(ROOT_PATH+"property&a=show_angent_phone&property_id="+propertyid);
		$("#call_agent_btn").unbind("click");
		$(this).attr("class","");
	});
	$('.checkthickbox').click(function(){
		tb_show(null,$(this).attr('rel'),false);
	});

    /*** floorplan scroll ***/
    if ( $( '#npj-floorplan .list' ).length > 0 ) {
        $( '.floorplan-scrollable-trigger' ).switchable( '#npj-floorplan .list', {
            triggerType: 'click',
            effect: 'scroll',
            steps: 1,
            visible: 3
        }).autoplay({
            autoplay: true,
            autopause: true,
            interval: 5
        }).carousel();

        var floorplanSlider = $( '.floorplan-scrollable-trigger' ).switchable();

        $( '#npj-floorplan #next-btn' ).click(function(){
            floorplanSlider.next();
        });

        $( '#npj-floorplan #prev-btn' ).click(function(){
            floorplanSlider.prev();
        });
    }
})
function showBigIMG(id){
    $(".large_img:eq(0)").find('img').hide();
	$(".large_img:eq(0)").find('div').hide();
	$(".large_img:eq(0)").find('img').eq(id).fadeIn("normal");
	$(".large_img:eq(0)").find('div').eq(id).fadeIn("normal");
}
function showBigIMG2(id){
    $(".large_img:eq(1)").find('img').hide();
	$(".large_img:eq(1)").find('div').hide();
	$(".large_img:eq(1)").find('img').eq(id).fadeIn("normal");
	$(".large_img:eq(1)").find('div').eq(id).fadeIn("normal");
}

function showBigIMG3(ob, num){
	if(showBigIMG3.prototype.suozai_src!=$(ob).attr('msrc')){
		$("#loading_box .img_arr_m").remove();
		$("#jiazai").show();
		var Img = new Image();
		var msrc = $(ob).attr('msrc');
		showBigIMG3.prototype.suozai_src = msrc;
		if(/^https{0,1}:\/\/agentadmin\.juwai\.com.*$/.test(msrc)){
			$("#jiazai").hide();
			if(num == 2) $("#loading_box .large_img_conn").append("<div class='img_arr_m img_error' style='font-size: 48px;height:240px;line-height:240px;width:320px;border-radius:0px'>暂无图片</div>");
			else $("#loading_box .large_img_conn").append("<div class='img_arr_m img_error' style='font-size: 48px;height:266px;line-height:266px;width:354px;border-radius:0px'>暂无图片</div>");
		}else{
			Img.src = msrc;
			Img.alt = ob.alt;
			Img.title = ob.title;
			Img.className = 'img_arr_m';
			Img.id = 'property_'+$(ob).parent().index();
			if(Img.complete){
				if(decodeURI(Img.src)===decodeURI(showBigIMG3.prototype.suozai_src)){
					$("#jiazai").hide();
					$("#loading_box .large_img_conn")[0].appendChild(Img);
				}
			}else{
				Img.onload = function(){
					if(decodeURI(this.src)===decodeURI(showBigIMG3.prototype.suozai_src)){
						$("#jiazai").hide();
						$("#loading_box .large_img_conn")[0].appendChild(Img);
					}
				}
			}
			Img.onerror=function(){
				$("#jiazai").hide();
				if(num == 2) $("#loading_box .large_img_conn").append("<div class='img_arr_m img_error' style='font-size: 48px;height:240px;line-height:240px;width:320px;border-radius:0px'>暂无图片</div>");
				else $("#loading_box .large_img_conn").append("<div class='img_arr_m img_error' style='font-size: 48px;height:266px;line-height:266px;width:354px;border-radius:0px'>暂无图片</div>");
			}
		}
	}
	$(".detail_scroll_item img").removeClass('selected');
	$(ob).addClass('selected');
}

var fish_status = true;
function showBigIMG4(ob){
	if(showBigIMG4.prototype.suozai_src!=$(ob).find("img:first").attr('lsrc') && fish_status){
		fish_status = false;
		//$("#divBannerContent img").not("#jiazai img").remove();
		$("#jiazai").show();
		var id = $(ob).parent().index();
		var Img = new Image();
		Img.src = $(ob).find("img:first").attr('lsrc');
		Img.alt = $(ob).find("img:first")[0].alt;
		Img.title = $(ob).find("img:first")[0].title;
		Img.id = 'property_'+id;
		showBigIMG4.prototype.suozai_src = Img.src;
		if(Img.complete){
			fish_status = true;
			$("#jiazai").hide();
			$("#divBannerContent").append('<div id="img_div_'+id+'" class="img_div"></div>');
			$("#divBannerContent .img_div").not('#img_div_'+id).stop().animate({'left':'-40px','opacity':0},300,function(){$(this).remove()});
			$(Img).appendTo('#img_div_'+id);
			$('#img_div_'+id).css('opacity',0).animate({'opacity':1},300);

			//if(Img.height < 500) Img.style.marginTop = (500 - parseInt(Img.height))/2+'px';
		}else{
			Img.onload = function(){
				fish_status = true;
				if(decodeURI(this.src)===decodeURI(showBigIMG4.prototype.suozai_src)){
					$("#jiazai").hide();
					$("#divBannerContent").append('<div id="img_div_'+id+'" class="img_div"></div>');
					$("#divBannerContent .img_div").not('#img_div_'+id).stop().animate({'left':'-40px','opacity':0},300,function(){$(this).remove()});
					$(Img).appendTo('#img_div_'+id);
					$('#img_div_'+id).css('opacity',0).stop().animate({'opacity':1},300);
					//if(Img.height < 500) Img.style.marginTop = (500 - parseInt(Img.height))/2+'px';
				}
			}
		}
	}
	$(".detail_scroll_item img").removeClass('selected');
	$(ob).addClass('selected');
}

function content1none(){
	$("#content1").css("display","none");
}
function gettabcontent(){
	$(".tab_nav li img").each(function(){
		var src=$(this).attr("src");//.replace('ON.jpg','OFF.jpg')
		var src2=src.replace('ON.jpg','OFF.jpg');//alert(src);
		$(this).attr("src",src2);
		$(this).removeClass("selectedd");
	})
}
/**
  查询js functions
*/

	function contactEnquiry(propertyId, ob, url, type, lang){
		var tel = lang == "en" ? "Phone No." : "电话";
		var email = lang == "en" ? "Email" : "电邮";
		var website = lang == "en" ? "Website" : "网站";
		var title = '';
		switch(type){
			case "phone": title =  tel; break;
			case "email": title =  email; break;
			case "website": title =  website; break;
		}
		$.getJSON(url+"?c=collect&a=phoneEnquiry",
				{propertyId:propertyId,type:type},function(data){
			if(data.result) {
				if(ob.attr("class") != undefined && ob.attr("class").indexOf("user_bg_color") !== -1){
					ob.parent().before('<span style="font-size:12px; font-weight:bold">'+title+':</span><span class="detailleft">'+data.result+'</span>');
					ob.remove();
				}else{
					ob.parent().parent().html("<td width=\"70px\" height=\"30px\"><span style=\"font-size:12px; font-weight:bold\">"+title+":</span></td><td>"+data.result+"</td>");
				}
			}
		})
	}
	function bio_survey(propertyId, url, ob){
		try{
			ga('send', 'event', 'PDP_Righttop_PropertyList', 'click');
		}
		finally{
			logStats(propertyId, 5);
			$("#bioform").submit();
		}
	}
	function bio_survey2(ob, url, id, bio){
		$("#bioform").remove();
		$("body").append('<form action="'+url+bio+'" target="_blank" method="post" id="bioform"></form>');
		$.getJSON(url+"?c=collect&a=bioSurvey",
				{id:id},function(data){
		})
		$("#bioform").submit();
	}

	function contactEnquiry2(ob, url, tool, id, type){
		var title = "";
		switch(type){
			case "phone": title = "电话"; break;
			case "email": title = "电邮"; break;
			case "address": title = "地址"; break;
			case "website": title = "网址"; tool = '<a href="'+tool+'" target="_blank">'+tool+'</a>';break;
		}
		$.getJSON(url+"?c=collect&a=phoneEnquiry",
				{id:id,type:type},function(data){
			if(data.result) ob.replaceWith('<span class="title">'+title+': </span><span class="text">' + tool + '</span>');
		})
	}

    var map;
	var marker;
	var place_arr = new Array(new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array(),new Array());
	var infowindow;
	function get_map_street_canvas(){
		$('#map_street_canvas').html('');
		if($('#map_street_canvas').length>0){
			var map_street_canvas_dom = document.getElementById('map_street_canvas');
			var mylatlng2 =  new google.maps.LatLng(property_LAT,property_LONG);
			 var panoramaOptions = {
				  pov: {
					  heading: 0,
					  pitch: 0,
					  zoom: 0
				  }
			  };
			  var panorama = new  google.maps.StreetViewPanorama(map_street_canvas_dom, panoramaOptions);
			  panorama.setPosition(mylatlng2);
		}

	}


    function attachSecretMessage(marker) {
        google.maps.event.addListener(marker, 'click', function() {
		    var marker = this;
			if(marker.place_content==''){
			    $.get(ROOT_PATH+"placedetail_return.php?reference="+marker.place_reference,
				function(data){
				eval('var detailjson ='+data);
				var detail_content = '';
				if(detailjson.result.url !=undefined && detailjson.result.url!=''){
				    detail_content +="<p><a href='"+detailjson.result.url+"' target='_blank'>"+detailjson.result.name+"</a></p>";
				}else{
				    detail_content +="<p>"+detailjson.result.name+"</p>";
				}
				if(detailjson.result.formatted_address !=undefined && detailjson.result.formatted_address!=''){
				    detail_content +="<p>地址："+detailjson.result.formatted_address+"</p>";
				}
				if(detailjson.result.formatted_phone_number !=undefined && detailjson.result.formatted_phone_number!=''){
				    detail_content +="<p>电话："+detailjson.result.formatted_phone_number+"</p>";
				}
                if(detailjson.result.website !=undefined && detailjson.result.website!=''){
				    detail_content +="<p>网址：<a href='"+detailjson.result.website+"' target='_blank'>"+detailjson.result.website+"</a></p>";
				}
				marker.place_content = detail_content;
				infowindow.content = detail_content;
				infowindow.open(marker.get('map'), marker);
				})
			}else{
			    infowindow.content = marker.place_content;
                infowindow.open(marker.get('map'), marker);
			}

        });
    }
    //******清理所有标签********//
	function map_addAllcheckbox(){
		$('.serchkeyword').attr("allchecked",'true');
		$('.serchkeyword').each(function(){
			if($(this).get(0).checked==false){
				$(this).click();
			}
		});
	}
	function map_addSomecheckbox(){
		$('.serchkeyword').attr("allchecked",'true');
		$('.serchkeyword.init').each(function(){
			if($(this).get(0).checked==false){
				$(this).click();
			}
		});
	}
	function map_clearAllcheckbox(){
	    $('.serchkeyword').attr("checked",false);
        for(var j in place_arr){
		   for(var pj in place_arr[j]){
		       place_arr[j][pj].setMap(null);
		   }
		}
	}

	function newcontactEnquiry(propertyId, ob, type){
		if($(ob).find("span.value").length>0) $(ob).find("span:first").stop().animate({marginTop : -30} , 200);
		else{
			contactAddStats(propertyId, type);
			$(ob).css("cursor", "wait");
			$.getJSON(ROOT_PATH+"?c=collect&a=phoneEnquiry", {propertyId:propertyId,type:type},function(data){
				if(data.result) {
					$(ob).css("cursor", "pointer");
					$(ob).append('<span class="value">'+data.result+'</span>');
					$(ob).find("span:first").stop().animate({marginTop : -30} , 200);
				}
			})
		}
	}

	function newcontactEnquiry2(propertyId, ob, type){
		contactAddStats(propertyId, type);
		try{ga('send', 'event', 'PDP_Righttop_AgentContacts', 'click',{'nonInteraction': 1});}catch(e){}
		if($(ob).find("span.value").length>0){
			return;
		}
		$.getJSON(ROOT_PATH+"?c=collect&a=phoneEnquiry", {propertyId:propertyId,type:type},function(data){
			if(data.result) {
				$(ob).css("cursor", "pointer");
				$(ob).find('span:eq(1)').remove();
				$(ob).append('<span class="value">'+data.result+'</span>');
			}
		})
	}

	function sitemap_survey(propertyId, ob, type){
		contactAddStats(propertyId, type, ob);
		try{ga('send', 'event', 'PDP_Righttop_OfficialWebsite', 'click',{'nonInteraction': 1});}catch(e){}
		ob.target = '_blank';
		ob.href = $("#websiteform").attr('action');
		return true;
	}


	function restorecontactEnquiry(ob){
		$(ob).find("span:first").stop().animate({marginTop : 0} , 200);
	}

	function updateFavorite(id){
		var dom_id = 'save_favorite_'+id;
		var dom = '#'+dom_id;
		var is_cancel = $('#'+dom_id).hasClass("selected") ? 1 : 0;
		var _url =ROOT_PATH + "?c=collect&id="+id;
		if(is_cancel == 0){
			_url += "&a=_addToFavorite";
		}else{
			_url += "&a=_fav_del";
		}
		$.getJSON(_url ,
		function(data){
			if(data['result_code']==0){
				juwaiAlert(is_cancel == 0 ? "收藏成功！":"已取消收藏");
                update_interaction_num('favorite');
				if(is_cancel == 0){
					$('#'+dom_id).addClass("selected");
				}else{
					$('#'+dom_id).removeClass("selected");
				}
				changeStatus(dom);
			}
			else{
				//window.location.href = ROOT_PATH + 'login';
				tb_show(null,ROOT_PATH+"?c=login&a=popLogin&height=400&width=760&modal=true&popf=updateFavorite("+id+")",false);
			}
		});
	}

	function emailShare(id,w,h){
		var url = ROOT_PATH+"?c=property&a=send_detail&propertyID="+id+"&height="+h+"&width="+w+"&modal=true&lang=sc&popf=emailShare("+id+","+w+","+h+")";
		tb_show(null,url,false);
	}

function contactAddStats(propertyID, ctype, ob){
    var type = 0;
    var data = {};
    switch(ctype){
        case 'phone':
            type = 1;
            break;
        case 'email':
            type = 2;
            break;
        case 'address':
            type = 13;
            break;
        case 'website':
            type = 14;
            data = {
                url: $( ob ).data( 'url' ),
                agent_id: $( ob ).data( 'agent-id' )
            };

            break;
    }

    if(!type){
        return ;
    }

    logStats(propertyID, type);
}
function enquiry_ini(){
	$.anchor('j_anchor');
	var hash = window.location.hash;
	if(hash!=''){
		var hast_arr = hash.split('#');
		if(hast_arr.length>1){
			hash = hast_arr[1];
		}else{
			hash = hast_arr[0];
		}
		switch(hash){
			case 'address_enquiry':switch_from_address_textarea();break;
			case 'price_enquiry':switch_from_price_textarea();break;
		}
	}
}

function switch_from_address_textarea() {

	if ($('#enquiry_from_textarea').length>0){
		$('#enquiry_from_textarea').val($('#enquiry_from_textarea').attr('adress_text'));
	}

	$('#enquiry_form_name').focus();
}

function switch_from_price_textarea(){
	if($('#enquiry_from_textarea').length>0){
		$('#enquiry_from_textarea').val($('#enquiry_from_textarea').attr('price_text'));
	}
}

/**
 * get latitude and longitude with yahoo geo.placefinder api. And show it on map.
 * @param propertyLocation
 * @param isShowMap
 * @param qualityValue
 */
function yahooGeo( propertyLocation, isShowMap, qualityValue ) {
    'use strict';

    var jsonpHead, jsonpScript;

    if ( isShowMap === 1 ) {
        $.ajax({
            type: 'POST',
            data: { 'q': 'select * from geo.placefinder where text="' + propertyLocation + '"', 'format': 'json' },
            url: 'https://query.yahooapis.com/v1/public/yql',
            dataType: 'jsonp',
            success: function( geoData ) {
                var isShowMapTmp = 0;
                var results;
                var quality = 0;
                var result = {};
                var key = '';
                var locationIndex, mapLocation;

                if ( geoData.query !== undefined ) {
                    results = geoData.query.results;
                } else {
                    results = null;
                }

                if ( results !== null ) {
                    results = results.Result;

                    if ( results.length === undefined ) {
                        results = [ results ];
                    }

                    for ( key in results ) {
                        result = results[ key ];

                        if ( result.quality > qualityValue && result.quality > quality ) {
                            quality = result.quality;
                            property_LAT = result.latitude;
                            property_LONG = result.longitude;
                            isShowMapTmp = 1;
                            locationIndex = key;
                        }
                    }

                    if ( locationIndex !== undefined ) {
                        mapLocation = results[ locationIndex ];

                        if ( mapLocation.street !== null ) {
                            mapZoom = 12;
                        } else if ( mapLocation.city !== null ) {
                            mapZoom = 8;
                        } else if ( mapLocation.state !== null ) {
                            mapZoom = 7;
                        } else if ( mapLocation.country !== null ) {
                            mapZoom = 4;
                        }
                    }
                }

                showMap = isShowMapTmp;
                show_google_map();
            }
        });

        // jsonp error handle
        jsonpHead = document.head || $( 'head' )[ 0 ] || document.documentElement;
        jsonpScript = $( jsonpHead ).find( 'script' )[ 0 ];
        jsonpScript.onerror = function( event ) {
            showMap = 0;
            show_google_map();
        };
    } else {
        show_google_map();
    }

}

function show_google_map() {
    if ( showMap === 1 ){
        $('#map_banner').hide();
    } else {
        $('#map_banner').show();
    }

    $('.google_map_Left').show();
    var ht = '';
    ht += '<div style="position:relative; z-index:1; background-color: #fff; overflow: hidden;" id="map_canvas"></div>';
    if ( showMap === 1 ) {
        ht += '<div style="position:relative; z-index:0; visibility:hidden; background-color: #fff; overflow: hidden;" id="map_street_canvas"></div>';
    }

    $('.google_map_Left').html(ht);

    var g_m_url = 'http://www.google.cn/maps/api/js?key=AIzaSyDRw--AK-GvpcYL6ezgVOLBIcsjk4ogL5E&callback=asyn_google_map';
    var google_script = document.createElement('script');
    google_script.type = 'text/javascript';
    google_script.src = g_m_url;
    document.body.appendChild(google_script);
}

function asyn_google_map() {
    var uluru = {lat: property_LAT, lng: property_LONG};
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 14,
        center: uluru
    });

    if ( showMap === 1 ) {
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            title: propertyLocation
        });
    }
}

/**
 * Clear the form after user submitted the enquiry form
 *
 * @param {Object} form - jQuery object for the enquiry form.
 */
function clearEnquiryForm( form )
{
    var fields = [ 'name', 'description', 'phone', 'email' ];

    $.each( fields, function (index, name) {
        form.find( "[name='" + name + "']" ).val( '' ).blur();
    });
}
