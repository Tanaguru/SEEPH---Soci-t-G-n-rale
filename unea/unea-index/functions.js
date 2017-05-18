function MM_preloadImages() { //v3.0
	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
	var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.0
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function afficheMenu(idMenu, idBouton) {
	document.getElementById("menu1").className = "menuoff";
	document.getElementById("menu2").className = "menuoff";
	document.getElementById("menu3").className = "menuoff";
	document.getElementById("menu4").className = "menuoff";
//	document.getElementById("menu5").className = "menuoff";
	document.getElementById("b_societe_a").className = "off";
	document.getElementById("b_produits_a").className = "off";
	document.getElementById("b_partenaires_a").className = "off";
	document.getElementById("b_news_a").className = "off";
//	document.getElementById("b_contact_a").className = "off";
	document.getElementById("cache").className = "cacheoff";

	document.getElementById(idMenu).className = "menus";
	document.getElementById(idBouton).className = "on";
}

function hideMenus() {
	document.getElementById("cache").className = "cacheoff";
	document.getElementById("menu1").className = "menuoff";
	document.getElementById("menu2").className = "menuoff";
	document.getElementById("menu3").className = "menuoff";
	document.getElementById("menu4").className = "menuoff";
//	document.getElementById("menu5").className = "menuoff";
	document.getElementById("b_societe_a").className = "off";
	document.getElementById("b_produits_a").className = "off";
	document.getElementById("b_partenaires_a").className = "off";
	document.getElementById("b_news_a").className = "off";
//	document.getElementById("b_contact_a").className = "off";
}
function afficheCache() {
	document.getElementById("cache").className = "cacheon";
}

/*
* Montre / Cache un div
*/
function DivStatus( nom, numero )
{
	var divID = nom + numero;
	if ( document.getElementById && document.getElementById( divID ) ) // Pour les navigateurs récents
		{
			Pdiv = document.getElementById( divID );
			PcH = true;
		}
	else if ( document.all && document.all[ divID ] ) // Pour les veilles versions
		{
			Pdiv = document.all[ divID ];
			PcH = true;
		}
	else if ( document.layers && document.layers[ divID ] ) // Pour les très veilles versions
		{
			Pdiv = document.layers[ divID ];
			PcH = true;
		}
	else
		{
			
			PcH = false;
		}
	if ( PcH )
		{
			Pdiv.className = ( Pdiv.className == 'cachediv' ) ? '' : 'cachediv';
		}
}
		
/**********************************/
/* function test_email() */
/**********************************/
function test_email (my_email) {
        var new_string = new String(my_email);
        if (!new_string.match('^[-_\.0-9a-zA-Z]{1,}@[-_\.0-9a-zA-Z]{1,}[\.][0-9a-zA-Z]{2,}$')) {
                return false;
        }
        else {
                return true;
        }
    }


/**********************************/
/* function fEnregistrerReaction() */
/**********************************/
function fEnregistrerReaction() {
	var oLogin;
	var oEmail;
	var oMessage;

	oLogin = document.formReaction.textNom;
	oEmail = document.formReaction.textEmail;
	oMessage = document.formReaction.textCommentaire;

	if(oLogin.value == "") {
		alert("Veuillez saisir un pseudo svp.");
		oLogin.focus();
	}
	else if((oMessage.value == "") && (oLogin.value != "unjour")) {
		alert("Quelle est votre réaction ? Veuillez saisir un message svp");
		oMessage.select();
	}
	else if(oEmail.value != ""){
		if (!test_email(oEmail.value))
		{
			alert("Votre email n\'est pas valide");
			oEmail.focus();
		}
		else{
			var oForm = document.getElementById("formReaction");
			document.getElementById("hiddenValider").value=true;
			oForm.submit();
		}
	}
	else{
		var oForm = document.getElementById("formReaction");
		document.getElementById("hiddenValider").value=true;
		oForm.submit();
	}

}

/**********************************/
/* function fEnvoyer() */
/**********************************/
function fEnvoyer() {
	var oPrenom;
	var oEmail;
	var oPrenomAmi;
	var oEmailAmi;
	var oMessage;

	oPrenom = document.formEnvoyer.textPrenom;
	oEmail = document.formEnvoyer.textEmail;
	oPrenomAmi = document.formEnvoyer.textPrenomAmi;
	oEmailAmi = document.formEnvoyer.textEmailAmi;
	oMessage = document.formEnvoyer.textCommentaireAmi;

	if(oPrenom.value == "") {
		alert("Veuillez saisir votre prénom svp.");
		oPrenom.focus();
	}
	else if(oEmail.value == "") {
		alert("Veuillez saisir votre e-mail svp");
		oEmail.select();
	}
	else if (!test_email(oEmail.value))
	{
		alert("Votre email n\'est pas valide");
		oEmail.focus();
	}
	else if(oPrenomAmi.value == "") {
		alert("Veuillez saisir le prénom de votre ami svp");
		oPrenomAmi.select();
	}
	else if(oEmailAmi.value == "") {
		alert("Veuillez saisir l\'e-mail de votre ami svp");
		oEmailAmi.select();
	}
	else if (!test_email(oEmailAmi.value))
	{
		alert("L\'email de votre ami n\'est pas valide");
		oEmailAmi.focus();
	}
	else if(oMessage.value == "") {
		alert("Quel est votre message ? Veuillez saisir un message svp");
		oMessage.select();
	}

	else{
		var oForm = document.getElementById("formEnvoyer");
		document.getElementById("hiddenValider").value=true;
		oForm.submit();
	}

}

/**********************************/
/* function fSupprimerReaction() */
/**********************************/
function fSupprimerReaction(pId) {

	if (confirm("Etes vous sûr de vouloir supprimer ce commentaire ?"))
	{
		var oForm = document.getElementById("formReaction");
		document.getElementById("hiddenSupprimer").value=true;
		document.getElementById("hiddenIDaSupprimer").value=pId;
		oForm.submit();
	}

}

/**********************************/
/* function fReserver() */
/**********************************/
function fReserver() {
	var oEmail;

	oEmail = document.formTelecharg.textEmail;

	if(oEmail.value == "") {
		alert("Veuillez saisir votre e-mail svp");
		oEmail.select();
	}
	else if (!test_email(oEmail.value))
	{
		alert("Votre email n\'est pas valide");
		oEmail.focus();
	}
	else{
		var oForm = document.getElementById("formTelecharg");
		document.getElementById("hiddenValider").value=true;
		oForm.submit();
	}

}

/**********************************/
/* function fEnregistrerReaction() */
/**********************************/
function fEnregistrer(){
	alert("Bientôt disponible...");
}

/**********************************/
/* function ecrireDate() */
/**********************************/
function ecrireDate(){
	datedujour = new Date();
	hdj=datedujour.getHours();
	mdj=datedujour.getMinutes();
	sdj=datedujour.getSeconds();
	date_even = new Date(2008, 8, 21, hdj, mdj, sdj); //janv =0 > decemb =11
	date1=datedujour.getTime();
	date2=date_even.getTime();
	nbrej= date2-date1;
	nbrej= Math.round((Math.round(nbrej)/1000)/60/60/24);
	document.write(" "+nbrej+" Days to the Festival");

}

/**********************************/
/* function Rebour() */
/**********************************/
function Rebour(){
	if (document.getElementById){
		if (document.getElementById("comptarebour"))
		{		
			Maintenant = new Date;
			TempMaintenant = Maintenant.getTime();
			Future = new Date(2008, 8, 21);
			TempFuture = Future.getTime();
			DinaHeure = Math.floor((TempFuture-TempMaintenant)/1000);
			DinaHeure = "" + DinaHeure;
			if (DinaHeure <= 0)
				DinaHeure = "0";
			document.getElementById("comptarebour").innerHTML=" "+DinaHeure+" s to the Festival";
		}

		if (document.getElementById("nbjour"))
		{		
			datedujour = new Date();
			hdj=datedujour.getHours();
			mdj=datedujour.getMinutes();
			sdj=datedujour.getSeconds();
			date_even = new Date(2008, 8, 21, hdj, mdj, sdj); //janv =0 > decemb =11
			date1=datedujour.getTime();
			date2=date_even.getTime();
			nbrej= date2-date1;
			nbrej= Math.round((Math.round(nbrej)/1000)/60/60/24);
			document.getElementById("nbjour").innerHTML=" "+nbrej+" jours avant le GWP Festival";
		}

		if (document.getElementById("dateheurejour"))
		{		
			datedujour = new Date();
			jdj=datedujour.getDate();
			modj=datedujour.getMonth()+1;
			adj=datedujour.getFullYear();
			hdj=datedujour.getHours();
			mdj=datedujour.getMinutes();
			sdj=datedujour.getSeconds();
			document.getElementById("dateheurejour").innerHTML=" "+adj+"/"+jdj+"/"+modj+" "+hdj+":"+mdj+":"+sdj;
		}
	}
	temporebour = setTimeout("Rebour()", 1000)
}
window.onload=Rebour;



/**********************************/
/* BILLETS*/
/**********************************/
// PARAMETRAGE DU SCRIPT
var tjs_delai=20;
var tjs_max=20;
var tjs_mode=0; // 0 - calque toujours en haut de page / 1 - calque en bas

// LE RESTE NE CHANGE PAS
var tjs_hauteur=0;
function PrintCalque(left,top,width,height,contenu) {
	tjs_hauteur=height;
	if ((document.all)||(document.getElementById)) {
		var Z="<DIV id='tomber' style='position:absolute;left:"+left+";top:"+top+";width:"+width+";height:"+height+";z-index:99;'>"+contenu+"</DIV>";
	} else {
		var Z="<LAYER name='tomber' left="+left+" top="+top+" width="+width+" height="+height+">"+contenu+"</LAYER>";
	}
	document.write(Z);
	setTimeout("Start()",tjs_delai);
}
function Start() {
	MoveLayer("tomber",GetTop("tomber"));
	setTimeout("Start()",tjs_delai);
}
function Debug() {
	var obj=document.body
	var Z="";
	for (var i in obj) {
		Z+=i+"="+obj[i]+"\n";
	}
	alert(Z);
}
function MoveLayer(nom,top) {
	if (document.getElementById) { //IE5 et NS6
		document.getElementById(nom).style.top=top;
	}
	if ((document.all)&&(!document.getElementById)) { //IE4 seul
		document.all[nom].style.top=top;
	}
	if (document.layers) { //NS4.X seul
		document.layers[nom].top=top;
	}
}
function GetTop(nom) {
	// Partie 1 : Récupération de la position du calque et de la page
	if (document.getElementById) { //IE5 
		var pos=parseInt(document.getElementById(nom).style.top);
		var wintop=parseInt(document.body.scrollTop);
		var avail=document.body.clientHeight;
	}
	if ((document.getElementById)&&(!document.all)) { //NS6
		var pos=parseInt(document.getElementById(nom).style.top);
		var wintop=parseInt(window.pageYOffset);
		var avail=window.innerHeight;
	}
	if ((document.all)&&(!document.getElementById)) { //IE4 seul
		var pos=parseInt(document.all[nom].style.top);
		var wintop=parseInt(document.body.scrollTop);
		var avail=document.body.clientHeight;
	}
	if (document.layers) { //NS4.X seul
		var pos=parseInt(document.layers[nom].top);
		var wintop=parseInt(window.pageYOffset);
		var avail=window.innerHeight;
	}

	// Partie 2 : Traitement de la position
	if (tjs_mode==0) { // toujours en haut
		var delta=Math.ceil((pos-wintop)/3);
		if (delta>tjs_max) {delta=tjs_max;}
		if (delta<-1*tjs_max) {delta=-1*tjs_max;}
		var top=pos-delta;
	}
	if (tjs_mode==1) {// toujours en bas
		var delta=Math.ceil((pos-(wintop+avail-tjs_hauteur)));
		if (delta>tjs_max) {delta=tjs_max;}
		if (delta<-1*tjs_max) {delta=-1*tjs_max;}
		var top=pos-delta;
	}
	return top;
}



/**********************************/
/* function verifdt() : vérifie le format de la date*/
/**********************************/
function verifdt(verdat){
	
	if(!isValidDate(verdat)){
		return false;
	}
	else{
		return true;
	}

}
function isValidDate(d) {
	var dateRegEx = /^((((0?[1-9]|[12]\d|3[01])[\-\/](0?[13578]|1[02])[\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\-\/](0?[13456789]|1[012])[\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\-\/]0?2[\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\-\/]0?2[\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;
	return d.match(dateRegEx);
}

/**********************************/
/* function recherche() */
/**********************************/
function recherche() {
	var sMot;
	sMot = "";
	if (document.getElementById) { //IE5 et NS6
		sMot = document.getElementById("recherche").value;
	}
	if ((document.all)&&(!document.getElementById)) { //IE4 seul
		sMot = document.all["recherche"].value;
	}
	if (document.layers) { //NS4.X seul
		sMot = document.layers["recherche"].value;
	}
	if (sMot=="")
	{
		alert("Vous devez saisir un mot avant de lancer la recherche.");
	}
	else{
		window.open("adw-manager.php?idRech="+sMot, '_self');
	}
}

/**********************************/
/* function toggle() */
/**********************************/
function toggle(obj) 
{ 
	var el = document.getElementById(obj); 
	if ( el.style.display != "none" ) 
	{
		el.style.display = 'none'; 
	}
	else
	{
		el.style.display = ''; 
	}
}

/**********************************/
/* function testenvoi() */
/**********************************/
function testenvoi(){
	if (verificationFormulaire()){
		SendForm();
	}
}

/**********************************/
/* function SendForm() */
/**********************************/
function SendForm(){
		$('mdp').disabled='disabled';
	new Ajax.Request('FormMDP.php',{
		method: 'post',
		asynchronous: true,
		contentType:  'application/x-www-form-urlencoded',
		encoding:     'UTF-8',
		parameters: { mdp: $F('mdp'),iduser: $F('iduser')},
		onSuccess: function(){MailOK();}, 
		onFailure: function(response){alert(response.responseText+' '+response.status);}
	});
	
	function MailOK(){
		//$('BTsubmit').style.visibility = 'hidden';
		//$('BTsubmit').style.display = 'none';
		alert('Votre mot de passe a bien été mis à jour');
	}
	function MailKO(){
		alert('Problème momentané, veuillez réessayer plus tard...');
	}
}

/**********************************/
/* function verificationFormulaire() */
/**********************************/
function verificationFormulaire()
{
	if ($('mdp').value == "")
	{
		alert("Veuillez saisir votre nouveau mot de passe svp"); 
		return false;
	}
	else{
		return true;
	}
 }



/***********************************************************************************************************/

/** Pop-in **/
function openPopinFunction (idPopin, idContent, onBeforeLoadFunction, onLoadFunction, onBeforeCloseFunction, onCloseFunction) {
	jQuery("#" + idPopin).data("idContentSource", idContent);
	jQuery("#" + idPopin).data("onBeforeLoadFunctionSource", onBeforeLoadFunction);
	jQuery("#" + idPopin).data("onLoadFunctionSource", onLoadFunction);
	jQuery("#" + idPopin).data("onBeforeCloseFunctionSource", onBeforeCloseFunction);
	jQuery("#" + idPopin).data("onCloseFunctionSource", onCloseFunction);
	jQuery("#" + idPopin).overlay({ 
		left: "center",
		top: "center",
		mask: {
			color: '#000000',
			loadSpeed: 200,
			opacity: 0.5
		},
		onBeforeLoad : function () 
		{
			var strOnBeforeLoadFunctionSource = jQuery("#" + idPopin).data("onBeforeLoadFunctionSource")
			if (!strOnBeforeLoadFunctionSource=="") {
				window[strOnBeforeLoadFunctionSource]();
			}
			if (!jQuery("body").hasClass("etape3")) {
				var strIdContentSource = jQuery("#" + idPopin).data("idContentSource")
				//copie popin source -> popin général
				jQuery("#" + idPopin + "Content").html ( jQuery("#" + strIdContentSource).html() );
				//vidage du popin source (pour éviter doublon d'id et double éxécution
				jQuery("#" + strIdContentSource).html ( "" );
			}
		}
		,onLoad : function () 
		{
			var stronLoadFunctionSource = jQuery("#" + idPopin).data("onLoadFunctionSource")
			if (!stronLoadFunctionSource=="") {
				window[stronLoadFunctionSource]();
			}
		}
		,onBeforeClose : function () 
		{
			var stronBeforeCloseFunction = jQuery("#" + idPopin).data("onBeforeCloseFunctionSource")
			if (!stronBeforeCloseFunction=="") {
				window[stronBeforeCloseFunction]();
			}
		}
		,onClose : function () 
		{
			var strOnCloseFunctionSource = jQuery("#" + idPopin).data("onCloseFunctionSource")
			if (!strOnCloseFunctionSource=="") {
				window[strOnCloseFunctionSource]();
			}
			if (!jQuery("body").hasClass("etape3")) {
				var strIdContentSource = jQuery("#" + idPopin).data("idContentSource")
				//recopie popin général -> popin source
				jQuery("#" + strIdContentSource).html ( $("#" + idPopin + "Content" ).html() );
				//vidage du popin général (pour éviter doublon d'id et double éxécution
				jQuery("#" + idPopin + "Content").html ( "" );
			}
		}
	});
	jQuery("#" + idPopin).overlay().load();
}


/** Onglets **/
function showTabContent(tabContentId){
	jQuery(".str_tab-content").animate({
		opacity: 0
	}, 200, function() {
		jQuery(".str_tab-content").hide();
		jQuery("#" + tabContentId).show();
		jQuery("#" + tabContentId).animate({opacity: 1}, 400);
	});
}

/**********************************/
/* function envoiEmailFiche() */
/**********************************/
function envoiEmailFiche(){
	$('btnfiche').disabled='disabled';
	$('btnfiche').style.display='none';
	$('wait').style.display='';
		
	new Ajax.Request('/include/sendAjax.php',{
		method: 'post',
		asynchronous: true,
		contentType:  'application/x-www-form-urlencoded',
		encoding:     'UTF-8',
		parameters: { emailFiche: $F('emailFiche'),idFiche: $F('idFiche'),responsableFiche: $F('responsableFiche'),raisonSocialeFiche: $F('raisonSocialeFiche')}, 
		onSuccess: function(){MailOK();}, 
		onFailure: function(response){alert(response.responseText+' '+response.status);}
	});
	
	function MailOK(){
		alert('Vous allez recevoir un email avec les instructions pour mettre à jour votre fiche.\n\nLe message a bien été envoyé.\nMerci !');
		$('wait').style.display='none';
	}
	function MailKO(){
		alert('Problème momentané, veuillez réessayer plus tard...');
		$('wait').style.display='none';
	}
}




$(document).ready(function(){
	jQuery(".annuaire .ctn_sousnav ul li a").bind("click", function(e) {
		jQuery(".annuaire .ctn_sousnav ul li a").removeClass("on");
		jQuery(this).addClass("on");
	});
});