jQuery(document).ready(function() {
  var quill = new Quill('#editor-container', {
    modules: {
      toolbar: '#toolbar-container'
    },
    placeholder: 'Write your MAN online ',
    theme: 'snow'
  });

//İndirme butonu için
  function indir(){
    var txt;
    var txt_name = prompt("Please enter your man page name:", "MyMan 1");
    var txt_section = prompt("Please enter your man page section name:", "User Commands");
    var txt_updated = prompt("Please enter your man page updated:", "May 2019");
    var txt_bisey = prompt("Please enter your man page bisey:", "GNU coreutils 8.27");
    if (txt_name == null || txt_name == "" || txt_section == null || txt_section == "" || txt_updated == null || txt_updated == "" || txt_bisey == null || txt_bisey == "") {
      alert("boş geçtiğin için çalışmayacak ")
    }
    else {
      txt = ".TH " + txt_name + " \"" + txt_updated + "\" " + txt_bisey + " \"" + txt_section + "\" " + "'\n"
  	  var content = $('.ql-editor').html();
      content = txt + content
  	  document.getElementById("content").value = content;
      console.log(content)
  	  return true
  	  }
    }
	jQuery("#install").on( "click", function() {
  indir(); });

//Yorum satırı eklemenizi sağlar
jQuery(".ql-yorumsatiri").click(function() {
  jQuery(".ql-editor").append(".\\")
});

//Bölümler kısmının eklenmesi
//Name Bölümü ekler
  jQuery(".ql-name").click(function() {
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi > 0){
      alert("Birden Fazla Name eklenemez")
    }else{
      jQuery(".ql-editor").prepend("<strong class='manname'>NAME</strong>\n")
    }
  });
//Synopsis Bölümü ekler
  jQuery(".ql-synopsis").click(function() {
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi == 0){
      alert("Name eklenmeden başka bir bölüm eklenemez")
    }else{
      synopsiskismi = jQuery(".ql-editor .mansynopsis").length
      if(synopsiskismi > 0){
        alert("Birden Fazla Synopsis eklenemez")
      }else{
        jQuery(".ql-editor").append("<strong class='mansynopsis'>SYNOPSIS</strong>\n")
      }
    }
    });

//Description Bölümü ekler
  jQuery(".ql-description").click(function() {
    console.log("description ebesi")
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi == 0){
      alert("Name eklenmeden başka bir bölüm eklenemez")
    }else{
      descriptionkismi = jQuery(".ql-editor .mandescription").length
      if(descriptionkismi > 0){
        alert("Birden Fazla Description eklenemez")
      }else{
        jQuery(".ql-editor").append("<strong class='mandescription'>DESCRIPTION</strong>\n")
      }
    }
    });

//Options Bölümü ekler
  jQuery(".ql-options").click(function() {
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi == 0){
      alert("Name eklenmeden başka bir bölüm eklenemez")
    }else{
      optionskismi = jQuery(".ql-editor .manoptions").length
      if(optionskismi > 0){
        alert("Birden Fazla Options eklenemez")
      }else{
        jQuery(".ql-editor").append("<strong class='manoptions'>OPTIONS</strong>\n")
      }
    }
    });

//Files Bölümü ekler
  jQuery(".ql-files").click(function() {
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi == 0){
      alert("Name eklenmeden başka bir bölüm eklenemez")
    }else{
      fileskismi = jQuery(".ql-editor .manfiles").length
      if(fileskismi > 0){
        alert("Birden Fazla Files eklenemez")
      }else{
        jQuery(".ql-editor").append("<strong class='manfiles'>FILES</strong>\n")
      }
    }
    });

//Environment Bölümü ekler
  jQuery(".ql-environment").click(function() {
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi == 0){
      alert("Name eklenmeden başka bir bölüm eklenemez")
    }else{
      environmentkismi = jQuery(".ql-editor .manenvironment").length
      if(environmentkismi > 0){
        alert("Birden Fazla Environment eklenemez")
      }else{
        jQuery(".ql-editor").append("<strong class='manenvironment'>ENVIRONMENT</strong>\n")
      }
    }
    });

//Diognastics Bölümü ekler
  jQuery(".ql-diognastics").click(function() {
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi == 0){
      alert("Name eklenmeden başka bir bölüm eklenemez")
    }else{
      diognasticskismi = jQuery(".ql-editor .mandiognastics").length
      if(diognasticskismi > 0){
        alert("Birden Fazla Diognastics eklenemez")
      }else{
        jQuery(".ql-editor").append("<strong class='mandiognastics'>DIOGNASTICS</strong>\n")
      }
    }
    });

//Bugs Bölümü ekler
  jQuery(".ql-bugs").click(function() {
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi == 0){
      alert("Name eklenmeden başka bir bölüm eklenemez")
    }else{
      bugskismi = jQuery(".ql-editor .manbugs").length
      if(bugskismi > 0){
        alert("Birden Fazla Bugs eklenemez")
      }else{
        jQuery(".ql-editor").append("<strong class='manbugs'>BUGS</strong>\n")
      }
    }
    });

//Author Bölümü ekler
  jQuery(".ql-author").click(function() {
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi == 0){
      alert("Name eklenmeden başka bir bölüm eklenemez")
    }else{
      authorkismi = jQuery(".ql-editor .manauthor").length
      if(authorkismi > 0){
        alert("Birden Fazla Author eklenemez")
      }else{
        jQuery(".ql-editor").append("<strong class='manauthor'>AUTHOR</strong>\n")
      }
    }
    });

//See Also Bölümü ekler
  jQuery(".ql-seealso").click(function() {
    namekismi = jQuery(".ql-editor .manname").length
    if(namekismi == 0){
      alert("Name eklenmeden başka bir bölüm eklenemez")
    }else{
      seealsokismi = jQuery(".ql-editor .manseealso").length
      if(seealsokismi > 0){
        alert("Birden Fazla See Also eklenemez")
      }else{
        jQuery(".ql-editor").append("<strong class='manseealso'>SEE ALSO</strong>\n")
      }
    }
    });

});
