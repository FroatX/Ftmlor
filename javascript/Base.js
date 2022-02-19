//-----------------------------------
//定义所有Mod组件
let Mod_Object = {
    "Container":["div","Fro-container"],
    "Main":["div","Fro-main"],
    "Middle-Panel":["div","Fro-middle-panel"],
    "Panel":["div","Fro-panel"],
    "Panel-Title":["div","Fro-panel-title"],
    "Panel-Body":["div","Fro-panel-body"],
    "Panel-Footer":["div","Fro-panel-footer"],
    "Header":["div","Fro-header"],
    "Nav":["div","Fro-nav"],
    "Nav-Item":["div","Fro-nav-item"],
    "SideBar-Fixed":["div","Fro-sidebar"],
    "SideBar-Absolute":["div","Fro-sidebar-abs"],
    "SideBar-Vertical":["div","Fro-sidebar-verticle"],
    "SideBar-Item":["div","Fro-sidebar-item"],
    "Button-Full-Round-Border-Large-Pink":["button","Fro-btn-lg-o"],
    "Button-Full-Round-Border-Middle-Pink":["button","Fro-btn-md-o"],
    "Button-Full-Round-Border-Small-Pink":["button","Fro-btn-sm-o"],
    "Button-Full-Round-Border-Large-Blue":["button","Fro-normal-btn-lg-o"],
    "Button-Full-Round-Border-Middle-Blue":["button","Fro-normal-btn-md-o"],
    "Button-Full-Round-Border-Small-Blue":["button","Fro-normal-btn-sm-o"],
    "Button-Full-Round-Border-Large-Red":["button","Fro-danger-btn-lg-o"],
    "Button-Full-Round-Border-Middle-Red":["button","Fro-danger-btn-md-o"],
    "Button-Full-Round-Border-Small-Red":["button","Fro-danger-btn-sm-o"],
    "Button-Full-Round-Border-Large-Green":["button","Fro-yes-btn-lg-o"],
    "Button-Full-Round-Border-Middle-Green":["button","Fro-yes-btn-md-o"],
    "Button-Full-Round-Border-Small-Green":["button","Fro-yes-btn-sm-o"],
    "Button-Full-Round-Border-Large-Gold":["button","Fro-warm-btn-lg-o"],
    "Button-Full-Round-Border-Middle-Gold":["button","Fro-warm-btn-md-o"],
    "Button-Full-Round-Border-Small-Gold":["button","Fro-warm-btn-sm-o"],
    "Button-Full-Round-Border-Large-LightWhite":["button","Fro-primary-btn-lg-o"],
    "Button-Full-Round-Border-Middle-LightWhite":["button","Fro-primary-btn-md-o"],
    "Button-Full-Round-Border-Small-LightWhite":["button","Fro-primary-btn-sm-o"],
    "Button-Full-Square-Border-Large-Pink":["button","Fro-btn-lg"],
    "Button-Full-Square-Border-Middle-Pink":["button","Fro-btn-md"],
    "Button-Full-Square-Border-Small-Pink":["button","Fro-btn-sm"],
    "Button-Full-Square-Border-Large-Blue":["button","Fro-normal-btn-lg"],
    "Button-Full-Square-Border-Middle-Blue":["button","Fro-normal-btn-md"],
    "Button-Full-Square-Border-Small-Blue":["button","Fro-normal-btn-sm"],
    "Button-Full-Square-Border-Large-Red":["button","Fro-danger-btn-lg"],
    "Button-Full-Square-Border-Middle-Red":["button","Fro-danger-btn-md"],
    "Button-Full-Square-Border-Small-Red":["button","Fro-danger-btn-sm"],
    "Button-Full-Square-Border-Large-Green":["button","Fro-yes-btn-lg"],
    "Button-Full-Square-Border-Middle-Green":["button","Fro-yes-btn-md"],
    "Button-Full-Square-Border-Small-Green":["button","Fro-yes-btn-sm"],
    "Button-Full-Square-Border-Large-Gold":["button","Fro-warm-btn-lg"],
    "Button-Full-Square-Border-Middle-Gold":["button","Fro-warm-btn-md"],
    "Button-Full-Square-Border-Small-Gold":["button","Fro-warm-btn-sm"],
    "Button-Full-Square-Border-Large-LightWhite":["button","Fro-primary-btn-lg"],
    "Button-Full-Square-Border-Middle-LightWhite":["button","Fro-primary-btn-md"],
    "Button-Full-Square-Border-Small-LightWhite":["button","Fro-primary-btn-sm"],
    "Button-Empty-Round-Border-Large-Pink":["button","Fro-btn-border-pink-lg-o"],
    "Button-Empty-Round-Border-Middle-Pink":["button","Fro-btn-border-pink-md-o"],
    "Button-Empty-Round-Border-Small-Pink":["button","Fro-btn-border-pink-sm-o"],
    "Button-Empty-Round-Border-Large-Blue":["button","Fro-btn-border-blue-lg-o"],
    "Button-Empty-Round-Border-Middle-Blue":["button","Fro-btn-border-blue-md-o"],
    "Button-Empty-Round-Border-Small-Blue":["button","Fro-btn-border-blue-sm-o"],
    "Button-Empty-Round-Border-Large-Red":["button","Fro-btn-border-red-lg-o"],
    "Button-Empty-Round-Border-Middle-Red":["button","Fro-btn-border-red-md-o"],
    "Button-Empty-Round-Border-Small-Red":["button","Fro-btn-border-red-sm-o"],
    "Button-Empty-Round-Border-Large-Green":["button","Fro-btn-border-green-lg-o"],
    "Button-Empty-Round-Border-Middle-Green":["button","Fro-btn-border-green-md-o"],
    "Button-Empty-Round-Border-Small-Green":["button","Fro-btn-border-green-sm-o"],
    "Button-Empty-Round-Border-Large-Gold":["button","Fro-btn-border-gold-lg-o"],
    "Button-Empty-Round-Border-Middle-Gold":["button","Fro-btn-border-gold-md-o"],
    "Button-Empty-Round-Border-Small-Gold":["button","Fro-btn-border-gold-sm-o"],
    "Button-Empty-Round-Border-Large-LightWhite":["button","Fro-btn-border-LightWhite-lg-o"],
    "Button-Empty-Round-Border-Middle-LightWhite":["button","Fro-btn-border-LightWhite-md-o"],
    "Button-Empty-Round-Border-Small-LightWhite":["button","Fro-btn-border-LightWhite-sm-o"],
    "Button-Empty-Square-Border-Large-Pink":["button","Fro-btn-border-pink-lg"],
    "Button-Empty-Square-Border-Middle-Pink":["button","Fro-btn-border-pink-md"],
    "Button-Empty-Square-Border-Small-Pink":["button","Fro-btn-border-pink-sm"],
    "Button-Empty-Square-Border-Large-Blue":["button","Fro-btn-border-blue-lg"],
    "Button-Empty-Square-Border-Middle-Blue":["button","Fro-btn-border-blue-md"],
    "Button-Empty-Square-Border-Small-Blue":["button","Fro-btn-border-blue-sm"],
    "Button-Empty-Square-Border-Large-Red":["button","Fro-btn-border-red-lg"],
    "Button-Empty-Square-Border-Middle-Red":["button","Fro-btn-border-red-md"],
    "Button-Empty-Square-Border-Small-Red":["button","Fro-btn-border-red-sm"],
    "Button-Empty-Square-Border-Large-Green":["button","Fro-btn-border-green-lg"],
    "Button-Empty-Square-Border-Middle-Green":["button","Fro-btn-border-green-md"],
    "Button-Empty-Square-Border-Small-Green":["button","Fro-btn-border-green-sm"],
    "Button-Empty-Square-Border-Large-Gold":["button","Fro-btn-border-gold-lg"],
    "Button-Empty-Square-Border-Middle-Gold":["button","Fro-btn-border-gold-md"],
    "Button-Empty-Square-Border-Small-Gold":["button","Fro-btn-border-gold-sm"],
    "Button-Empty-Square-Border-Large-LightWhite":["button","Fro-btn-border-LightWhite-lg"],
    "Button-Empty-Square-Border-Middle-LightWhite":["button","Fro-btn-border-LightWhite-md"],
    "Button-Empty-Square-Border-Small-LightWhite":["button","Fro-btn-border-LightWhite-sm"],
    "Button-Disabled-Button-Round-Large":["button","Fro-disabled-btn-lg-o"],
    "Button-Disabled-Button-Round-Middle":["button","Fro-disabled-btn-md-o"],
    "Button-Disabled-Button-Round-Small":["button","Fro-disabled-btn-sm-o"],
    "Button-Disabled-Button-Square-Large":["button","Fro-disabled-btn-lg"],
    "Button-Disabled-Button-Square-Middle":["button","Fro-disabled-btn-md"],
    "Button-Disabled-Button-Square-Small":["button","Fro-disabled-btn-sm"],
    "Button-Group":["div","Fro-btn-group"],
    "Input-Text-Box-Round-Border-Pink":["input","Fro-input-text-Box-o-pink","text"],
    "Input-Text-Box-Round-Border-Red":["input","Fro-input-text-Box-o-red","text"],
    "Input-Text-Box-Round-Border-Blue":["input","Fro-input-text-Box-o-blue","text"],
    "Input-Text-Box-Round-Border-Green":["input","Fro-input-text-Box-o-green","text"],
    "Input-Text-Box-Round-Border-Gold":["input","Fro-input-text-Box-o-gold","text"],
    "Input-Text-Box-Round-Border-LightWhite":["input","Fro-input-text-Box-o-white","text"],
    "Input-Text-Box-Square-Border-Pink":["input","Fro-input-text-Box-pink","text"],
    "Input-Text-Box-Square-Border-Red":["input","Fro-input-text-Box-red","text"],
    "Input-Text-Box-Square-Border-Blue":["input","Fro-input-text-Box-blue","text"],
    "Input-Text-Box-Square-Border-Green":["input","Fro-input-text-Box-green","text"],
    "Input-Text-Box-Square-Border-Gold":["input","Fro-input-text-Box-gold","text"],
    "Input-Text-Box-Square-Border-LightWhite":["input","Fro-input-text-Box-white","text"],
    "Input-Text-Line-Pink":["input","Fro-input-text-Line-pink","text"],
    "Input-Text-Line-Red":["input","Fro-input-text-Line-red","text"],
    "Input-Text-Line-Blue":["input","Fro-input-text-Line-blue","text"],
    "Input-Text-Line-Green":["input","Fro-input-text-Line-green","text"],
    "Input-Text-Line-Gold":["input","Fro-input-text-Line-gold","text"],
    "Input-Text-Line-LightWhite":["input","Fro-input-text-Line-white","text"],
    "Input-Text-Special-SearchBox-Round-Border":["input","Fro-searchBox-o","text"],
    "Input-Text-Special-SearchBox-Square-Border":["input","Fro-searchBox","text"],
    "Input-Text-Special-Textarea":["textarea",""],
    "MSGBox":["div","Fro-msgBox"],
    "Crossrange":["div","Fro-crossrange"],
    "Crossrange-Head":["div","Fro-crossrange-head"],
    "Crossrange-Body":["div","Fro-crossrange-body"],
    "Img-Board":["div","Fro-img-board"],
    "Video-Board":["div","Fro-video-board"],
    "Middle-Board":["div","Fro-middle-board"],
    "Badge-Full-Pink":["span","Fro-badge-pink"],
    "Badge-Full-Red":["span","Fro-badge-red"],
    "Badge-Full-Blue":["span","Fro-badge-blue"],
    "Badge-Full-Green":["span","Fro-badge-green"],
    "Badge-Full-Gold":["span","Fro-badge-gold"],
    "Badge-Full-LightWhite":["span","Fro-badge"],
    "Badge-Empty-Pink":["span","Fro-badge-pink-border"],
    "Badge-Empty-Red":["span","Fro-badge-red-border"],
    "Badge-Empty-Blue":["span","Fro-badge-blue-border"],
    "Badge-Empty-Green":["span","Fro-badge-green-border"],
    "Badge-Empty-Gold":["span","Fro-badge-gold-border"],
    "Badge-Empty-LightWhite":["span","Fro-badge-border"],
    "Icon-star":["i","Fro-icon-star"],
    "Icon-star-o":["i","Fro-icon-star-o"],
    "Icon-heart":["i","Fro-icon-heart"],
    "Icon-heart-o":["i","Fro-icon-heart-o"],
    "Icon-sun":["i","Fro-icon-sun"],
    "Icon-plane":["i","Fro-icon-plane"],
    "Icon-copyright":["i","Fro-icon-copyright"],
    "Icon-correct":["i","Fro-icon-correct"],
    "Icon-correct-bold":["i","Fro-icon-correct-bold"],
    "Icon-wrong":["i","Fro-icon-wrong"],
    "Icon-wrong-bold":["i","Fro-icon-wrong-bold"],
    "Icon-ice":["i","Fro-icon-ice"],
    "Icon-smile":["i","Fro-icon-smile"],
    "Icon-smile-o":["i","Fro-icon-smile-o"],
    "Icon-unsmile":["i","Fro-icon-unsmile"],
    "Icon-mail":["i","Fro-icon-mail"],
    "Icon-telephone":["i","Fro-icon-telephone"],
    "Icon-telephone-bold":["i","Fro-icon-telephone-bold"],
    "Icon-cloud":["i","Fro-icon-cloud"],
    "Icon-umbrella":["i","Fro-icon-umbrella"],
    "Icon-taichi":["i","Fro-icon-taichi"],
    "Icon-cycle":["i","Fro-icon-cycle"],
    "Icon-warning":["i","Fro-icon-warning"],
    "Icon-lightning":["i","Fro-icon-lightning"],
    "Icon-chemical":["i","Fro-icon-chemical"],
    "Icon-moon":["i","Fro-icon-moon"],
    "Icon-man":["i","Fro-icon-man"],
    "Icon-woman":["i","Fro-icon-woman"],
    "Icon-relay":["i","Fro-icon-relay"],
    "Icon-arrow-right":["i","Fro-icon-arrow-right"],
    "Icon-arrow-left":["i","Fro-icon-arrow-left"],
    "Icon-arrow-up":["i","Fro-icon-arrow-up"],
    "Icon-arrow-down":["i","Fro-icon-arrow-down"],
    "Icon-arrow-UpToDown":["i","Fro-icon-arrow-UpToDown"],
    "Icon-arrow-RightToLeft":["i","Fro-icon-arrow-RightToLeft"],
    "Icon-triangle-up":["i","Fro-icon-triangle-up"],
    "Icon-triangle-down":["i","Fro-icon-triangle-down"],
    "Icon-triangle-left":["i","Fro-icon-triangle-left"],
    "Icon-triangle-right":["i","Fro-icon-triangle-right"],
    "Icon-note-quarter":["i","Fro-icon-note-quarter"],
    "Icon-note-quaver":["i","Fro-icon-note-quaver"],
    "Icon-note-quaver-double":["i","Fro-icon-note-quaver-double"],
    "Icon-note-semiquaver":["i","Fro-icon-note-semiquaver"],
};

//定义所有Mod组件个数，用于对Mod name的定义
let Mod_Object_num = {
    "Container":0,
    "Main":0,
    "Middle-Panel":0,
    "Panel":0,
    "Panel-Title":0,
    "Panel-Body":0,
    "Panel-Footer":0,
    "Header":0,
    "Nav":0,
    "Nav-Item":0,
    "SideBar-Fixed":0,
    "SideBar-Absolute":0,
    "SideBar-Vertical":0,
    "SideBar-Item":0,
    "Button-Full-Round-Border-Large-Pink":0,
    "Button-Full-Round-Border-Middle-Pink":0,
    "Button-Full-Round-Border-Small-Pink":0,
    "Button-Full-Round-Border-Large-Blue":0,
    "Button-Full-Round-Border-Middle-Blue":0,
    "Button-Full-Round-Border-Small-Blue":0,
    "Button-Full-Round-Border-Large-Red":0,
    "Button-Full-Round-Border-Middle-Red":0,
    "Button-Full-Round-Border-Small-Red":0,
    "Button-Full-Round-Border-Large-Green":0,
    "Button-Full-Round-Border-Middle-Green":0,
    "Button-Full-Round-Border-Small-Green":0,
    "Button-Full-Round-Border-Large-Gold":0,
    "Button-Full-Round-Border-Middle-Gold":0,
    "Button-Full-Round-Border-Small-Gold":0,
    "Button-Full-Round-Border-Large-LightWhite":0,
    "Button-Full-Round-Border-Middle-LightWhite":0,
    "Button-Full-Round-Border-Small-LightWhite":0,
    "Button-Full-Square-Border-Large-Pink":0,
    "Button-Full-Square-Border-Middle-Pink":0,
    "Button-Full-Square-Border-Small-Pink":0,
    "Button-Full-Square-Border-Large-Blue":0,
    "Button-Full-Square-Border-Middle-Blue":0,
    "Button-Full-Square-Border-Small-Blue":0,
    "Button-Full-Square-Border-Large-Red":0,
    "Button-Full-Square-Border-Middle-Red":0,
    "Button-Full-Square-Border-Small-Red":0,
    "Button-Full-Square-Border-Large-Green":0,
    "Button-Full-Square-Border-Middle-Green":0,
    "Button-Full-Square-Border-Small-Green":0,
    "Button-Full-Square-Border-Large-Gold":0,
    "Button-Full-Square-Border-Middle-Gold":0,
    "Button-Full-Square-Border-Small-Gold":0,
    "Button-Full-Square-Border-Large-LightWhite":0,
    "Button-Full-Square-Border-Middle-LightWhite":0,
    "Button-Full-Square-Border-Small-LightWhite":0,
    "Button-Empty-Round-Border-Large-Pink":0,
    "Button-Empty-Round-Border-Middle-Pink":0,
    "Button-Empty-Round-Border-Small-Pink":0,
    "Button-Empty-Round-Border-Large-Blue":0,
    "Button-Empty-Round-Border-Middle-Blue":0,
    "Button-Empty-Round-Border-Small-Blue":0,
    "Button-Empty-Round-Border-Large-Red":0,
    "Button-Empty-Round-Border-Middle-Red":0,
    "Button-Empty-Round-Border-Small-Red":0,
    "Button-Empty-Round-Border-Large-Green":0,
    "Button-Empty-Round-Border-Middle-Green":0,
    "Button-Empty-Round-Border-Small-Green":0,
    "Button-Empty-Round-Border-Large-Gold":0,
    "Button-Empty-Round-Border-Middle-Gold":0,
    "Button-Empty-Round-Border-Small-Gold":0,
    "Button-Empty-Round-Border-Large-LightWhite":0,
    "Button-Empty-Round-Border-Middle-LightWhite":0,
    "Button-Empty-Round-Border-Small-LightWhite":0,
    "Button-Empty-Square-Border-Large-Pink":0,
    "Button-Empty-Square-Border-Middle-Pink":0,
    "Button-Empty-Square-Border-Small-Pink":0,
    "Button-Empty-Square-Border-Large-Blue":0,
    "Button-Empty-Square-Border-Middle-Blue":0,
    "Button-Empty-Square-Border-Small-Blue":0,
    "Button-Empty-Square-Border-Large-Red":0,
    "Button-Empty-Square-Border-Middle-Red":0,
    "Button-Empty-Square-Border-Small-Red":0,
    "Button-Empty-Square-Border-Large-Green":0,
    "Button-Empty-Square-Border-Middle-Green":0,
    "Button-Empty-Square-Border-Small-Green":0,
    "Button-Empty-Square-Border-Large-Gold":0,
    "Button-Empty-Square-Border-Middle-Gold":0,
    "Button-Empty-Square-Border-Small-Gold":0,
    "Button-Empty-Square-Border-Large-LightWhite":0,
    "Button-Empty-Square-Border-Middle-LightWhite":0,
    "Button-Empty-Square-Border-Small-LightWhite":0,
    "Button-Disabled-Button-Round-Large":0,
    "Button-Disabled-Button-Round-Middle":0,
    "Button-Disabled-Button-Round-Small":0,
    "Button-Disabled-Button-Square-Large":0,
    "Button-Disabled-Button-Square-Middle":0,
    "Button-Disabled-Button-Square-Small":0,
    "Button-Group":0,
    "Input-Text-Box-Round-Border-Pink":0,
    "Input-Text-Box-Round-Border-Red":0,
    "Input-Text-Box-Round-Border-Blue":0,
    "Input-Text-Box-Round-Border-Green":0,
    "Input-Text-Box-Round-Border-Gold":0,
    "Input-Text-Box-Round-Border-LightWhite":0,
    "Input-Text-Box-Square-Border-Pink":0,
    "Input-Text-Box-Square-Border-Red":0,
    "Input-Text-Box-Square-Border-Blue":0,
    "Input-Text-Box-Square-Border-Green":0,
    "Input-Text-Box-Square-Border-Gold":0,
    "Input-Text-Box-Square-Border-LightWhite":0,
    "Input-Text-Line-Pink":0,
    "Input-Text-Line-Red":0,
    "Input-Text-Line-Blue":0,
    "Input-Text-Line-Green":0,
    "Input-Text-Line-Gold":0,
    "Input-Text-Line-LightWhite":0,
    "Input-Text-Special-SearchBox-Round-Border":0,
    "Input-Text-Special-SearchBox-Square-Border":0,
    "Input-Text-Special-Textarea":0,
    "MSGBox":0,
    "Crossrange":0,
    "Crossrange-Head":0,
    "Crossrange-Body":0,
    "Img-Board":0,
    "Video-Board":0,
    "Middle-Board":0,
    "Badge-Full-Pink":0,
    "Badge-Full-Red":0,
    "Badge-Full-Blue":0,
    "Badge-Full-Green":0,
    "Badge-Full-Gold":0,
    "Badge-Full-LightWhite":0,
    "Badge-Empty-Pink":0,
    "Badge-Empty-Red":0,
    "Badge-Empty-Blue":0,
    "Badge-Empty-Green":0,
    "Badge-Empty-Gold":0,
    "Badge-Empty-LightWhite":0,
    "Icon-star":0,
    "Icon-star-o":0,
    "Icon-heart":0,
    "Icon-heart-o":0,
    "Icon-sun":0,
    "Icon-plane":0,
    "Icon-copyright":0,
    "Icon-correct":0,
    "Icon-correct-bold":0,
    "Icon-wrong":0,
    "Icon-wrong-bold":0,
    "Icon-ice":0,
    "Icon-smile":0,
    "Icon-smile-o":0,
    "Icon-unsmile":0,
    "Icon-mail":0,
    "Icon-telephone":0,
    "Icon-telephone-bold":0,
    "Icon-cloud":0,
    "Icon-umbrella":0,
    "Icon-taichi":0,
    "Icon-cycle":0,
    "Icon-warning":0,
    "Icon-lightning":0,
    "Icon-chemical":0,
    "Icon-moon":0,
    "Icon-man":0,
    "Icon-woman":0,
    "Icon-relay":0,
    "Icon-arrow-right":0,
    "Icon-arrow-left":0,
    "Icon-arrow-up":0,
    "Icon-arrow-down":0,
    "Icon-arrow-UpToDown":0,
    "Icon-arrow-RightToLeft":0,
    "Icon-triangle-up":0,
    "Icon-triangle-down":0,
    "Icon-triangle-left":0,
    "Icon-triangle-right":0,
    "Icon-note-quarter":0,
    "Icon-note-quaver":0,
    "Icon-note-quaver-double":0,
    "Icon-note-semiquaver":0,
};

let Mod_define = ["document"]; //所有自定义Tag的列表 可用于其他操作 默认包括Document
//-----------------------------------
let Head_l = {
    "Meta":{
        "Name":{},
        "Http-equiv":{},
        "Scheme":{},
        "Charset":"UTF-8",
        "Icon":"",
    },
    "CSS":["css/Fro UI.css"],
    "JS":["javascript/Jquery.js","javascript/Fro JS.js"],
    "Title":"New Project",
} //用于定义Head标签的对象 将Head标签属性存于此对象中
//-----------------------------------
let wait_add_mod = ""; //等待被创建的Mod组件
let cj_click = false; //判断鼠标是否在工具箱或属性框
let mod_s = "Document"; //被选中的Mod元素，默认为Document
let mod_l = [{
    "Mod_name":"Document",
    "Mod":["document","None"],
    "Attribute":{},
    "Style":{},
    "Info":{
        "Class":"None",
    },
}]; //目前所有已被创建的Mod的列表集合，所有对Mod的操作将在这里面进行(默认定义Document)
let mod_border_change = false; //判断是否显示Mod边框
let all_mod_name = new Array; //一个储存了所有Mod_name的列表
//-----------------------------------
//-----------------------------------
//还原工具箱/属性面板
function HideToolBox(obj){
    if($(obj).attr("title") == "还原工具箱"){
        $(obj).attr({"title":"使用拖动模式"});
        $("#ToolBox").removeClass("Fro-moveBox");
        $("#ToolBox").css({"position":"fixed","height":"100%","top":"0","left":"0","width":"auto"}); //垂直变化
        $("#ToolBox").css({"position":"fixed","height":"100%","top":"0","left":"0","width":"auto"});
    }else{
        $(obj).attr({"title":"还原工具箱"});
        $("#ToolBox").addClass("Fro-moveBox");
        $("#ToolBox").css({"position":"absolute","height":"auto","top":"0","left":"0","width":"200px"}); //垂直变化
    }
}

function HideDefineBox(obj){
    if($(obj).attr("title") == "还原属性面板"){
        $(obj).attr({"title":"使用拖动模式"});
        $("#DefineBox").removeClass("Fro-moveBox");
        $("#DefineBox").css({"position":"fixed","height":"100%","top":"0","right":"0","width":"auto"}); //垂直变化
    }else{
        $(obj).attr({"title":"还原属性面板"});
        $("#DefineBox").addClass("Fro-moveBox");
        $("#DefineBox").css({"position":"absolute","height":"auto","top":"0","right":"0","width":"200px"}); //垂直变化
    }
}

function HideHandleBox(obj){
    if($(obj).attr("title") == "还原操作面板"){
        $(obj).attr({"title":"使用拖动模式"});
        $("#HandleBox").removeClass("Fro-moveBox");
        $("#HandleBox").css({"position":"fixed","height":"100%","top":"0","right":"0","width":"auto"}); //垂直变化
    }else{
        $(obj).attr({"title":"还原操作面板"});
        $("#HandleBox").addClass("Fro-moveBox");
        $("#HandleBox").css({"position":"absolute","height":"auto","top":"0","right":"0","width":"200px"}); //垂直变化
    }
}
//-----------------------------------
function AddMod(mod_type,Add_type=false){
    wait_add = true;
    if(wait_add_mod == mod_type.trim() && Add_type == false){
        $(document.body).css({"cursor":"auto"});
        Fro_Project_Return();
        wait_add_mod = "";
        return;
    } //判断选中的mod是否又被单击 是则取消创建

    wait_add_mod = mod_type.trim();
    if(cj_click == true){
        $(document.body).css({"cursor":"crosshair"});
        return;
    }
    let mod_type1;
    if(wait_add_mod == ""){
        mod_type1 = mod_type.trim();
    }
    else{
        mod_type1 = wait_add_mod;
    }
    //取Mod_name
    let mod = Mod_Object[mod_type1]; //从Mod_Object中取对应Mod_name的默认属性
    Mod_Object_num[mod_type1] += 1; //给该Mod_name已创建元素数量加1
    let mod_n = Mod_Object_num[mod_type1]; //取Mod_name已创建元素数量

    if(Mod_define.includes(mod_type1)){
        mod_l.push({
            "Mod_name":mod_type1 + mod_n,
            "Mod":mod,
            "Attribute":{},
            "Style":{},
            "Info":{
                "Class":"None",
            },
        });
    }
    else{
        mod_l.push({
            "Mod_name":mod_type1 + mod_n, //定义此Mod的name
            "Mod":mod, //定义此Mod的默认属性值
            "Attribute":{}, //定义此Mod的空属性
            "Style":{}, //定义此Mod的样式
            "Info":{
                "Class":mod[1],
            }, //定义此Mod的信息
        });
    } //判断是否为自定义Mod 是则添加默认Info Class = None
    all_mod_name.push(mod_type1 + mod_n);
    //添加Mod至mod_l列表，便于操作
    let wait_mod = ""
    if(mod[2] != undefined){
        wait_mod = "<"+mod[0]+" type='"+mod[2]+"' class='"+mod[1]+" Mod' id='"+mod_type1+mod_n+"' title='"+mod_type1+mod_n+"'>" + "</"+mod[0]+">";
    }else{
        wait_mod = "<"+mod[0]+" class='"+mod[1]+" Mod' id='"+mod_type1+mod_n+"' title='"+mod_type1+mod_n+"'>" + "</"+mod[0]+">";
    }
    if(mod_s == "Document"){
        $("."+mod_s).append(wait_mod);
    }else{
        $(wait_mod).appendTo($("#"+mod_s));
    }
    //创建Mod
    
    mod = [];
    mod_type1 = "";
    mod_n = 0;
    wait_tag = "";
    wait_add_mod = "";
    //重设以上值
}

//-----------------------------------

//-----------------------------------
//单击任意进行判断
window.onload = function(){
    $("#ToolBox").mouseover(function(){
        cj_click = true;
    });
    $("#DefineBox").mouseover(function(){
        cj_click = true;
    });
    $("#HandleBox").mouseover(function(){
        cj_click = true;
    });

    $("#HandleBox").mouseout(function(){
        cj_click = false;
    });
    $("#ToolBox").mouseout(function(){
        cj_click = false;
    });
    $("#DefineBox").mouseout(function(){
        cj_click = false;
    });
    //判断鼠标是否在工具箱或属性框

    load_modInfo(mod_s); //加载Document的信息
    $("#Now_year").text(Fro_getYear());
    load_SourceInfo("CSS");
    load_SourceInfo("JS");
    //载入JS CSS资源
}

$(document).click(function(e){
    let NowTag = $(e.target);
    if(NowTag.hasClass("Mod") || all_mod_name.includes(NowTag.attr("id"))){
        mod_s = NowTag.attr("id");
        if(cj_click == true){
            return;
        }
        if(wait_add_mod != ""){
            AddMod(wait_add_mod,true);
            $(document.body).css({"cursor":"auto"});
        }
    }
    else{
        if(cj_click == true){
            return;
        }
        if(wait_add_mod != ""){
            AddMod(wait_add_mod,true);
            $(document.body).css({"cursor":"auto"});
        }
        else{
            mod_s = "Document";
        }
    }
    Fro_Project_Return();
    //以上是对选中的Mod的创建

    $(".SelectMod").removeClass("SelectMod");
    if(mod_s != "Document"){
        $("#"+mod_s).addClass("SelectMod");
    }
    //以上是给选中Mod添加边框

    load_modInfo(mod_s); //载入以选中Mod的信息
});
//-----------------------------------

//-----------------------------------
Changer = setInterval(()=>{
    $("#ToolBox").mouseover(function(){
        cj_click = true;
    });
    $("#DefineBox").mouseover(function(){
        cj_click = true;
    });
    $("#HandleBox").mouseover(function(){
        cj_click = true;
    });

    $("#HandleBox").mouseout(function(){
        cj_click = false;
    });
    $("#ToolBox").mouseout(function(){
        cj_click = false;
    });
    $("#DefineBox").mouseout(function(){
        cj_click = false;
    });
    //防止出现预览后无法继续创建Mod的Bug.

    if(mod_border_change == false){
        mod_l.forEach(function(mod_child){
            let n_mod_child = mod_child["Mod_name"];
            $("#"+n_mod_child).addClass("Mod");
            $("#ShowMBd").text("关闭Mod边框显示");
        });
    }else{
        mod_l.forEach(function(mod_child){
            let n_mod_child = mod_child["Mod_name"];
            $("#"+n_mod_child).removeClass("Mod");
            $("#ShowMBd").text("打开Mod边框显示");
        });
    }
    //$("#Source-Page-page-body").text($(".Document").html()); //实时更改Source
},100);
//Changer为随时更改
//-----------------------------------
function GetMods(mod_name){
    for(var i in mod_l){
        if(mod_l[i]["Mod_name"] == mod_name){
            return mod_l[i];
        }
    }
}
//获取Mod

function GetMods_index(mod_name){
    for(var i in mod_l){
        if(mod_l[i]["Mod_name"] == mod_name){
            return i;
        }
    }
}
//取Mod在操作列表中的下标
function GetModname_index(mod_name){
    for(var i in mod_l){
        if(all_mod_name[i] == mod_name){
            return i;
        }
    }
}
//取Mod在Mod_name列表中的下标

function ChangeMods(mod_name,project_name,value,project_obj_name = null){
    for(var i in mod_l){
        if(mod_l[i]["Mod_name"] == mod_name){
            let mod1 = mod_l[i];
            if(mod1.hasOwnProperty(project_name) == true){
                if(typeof(mod1[project_name]) == "object" && project_obj_name != ""){
                    mod1[project_name][project_obj_name] = value;
                }
                else{
                    mod1[project_name] = value;
                }
            }
        }
    }
}
//从操作列表中更改Mod的值

function DeleteMod(){
    if(mod_s != "Document"){
        let whe = confirm("确认要删除"+mod_s+"吗？");
        if(whe == true){
            let d_mod_index = GetMods_index(mod_s); //取已选中Mod的在操作列表中的下标
            let d_mod_index2 = GetModname_index(mod_s);
            all_mod_name.splice(d_mod_index2,1); //从Mod_name列表中删除已选中Mod下的子Mod
            mod_l.splice(d_mod_index,1); //从操作列表中删除已选中Mod
            //---------------------------------------------------------
            //删除该Mod下的所有子Mod
            let mod_c_all = $("#"+mod_s).find(".Mod");
            let mod_children_all = new Array;
            if(mod_c_all.length != 0){
                for(let i=0;i<mod_c_all.length;i++){
                    mod_children_all.push($(mod_c_all[i]).attr("id"));
                } //获得该Mod下的所有子Mod
                mod_children_all.forEach(function(mod_child){
                    let d_mod_child_index = GetMods_index(mod_child); //取已选中Mod的子Mod在操作列表中的下标
                    let d_mod_child_index2 = GetModname_index(mod_child);
                    all_mod_name.splice(d_mod_child_index2,1); //从Mod_name列表中删除已选中Mod下的子Mod
                    mod_l.splice(d_mod_child_index,1); //从操作列表中删除已选中Mod下的子Mod
                });
            }
            //---------------------------------------------------------
            $("#"+mod_s).remove(); //删除已选中Mod
            mod_s = "Document"; //设置现在选中Mod为Document
            ClearAllModLoad() //清空载入
        }
    }else{
        alert("未选择Mod或无法对此Mod进行操作!");
    }
}
//删除Mod

function Add_Attribute(){
    let defult_attr = prompt("请输入属性名，这将会定义唯一属性。");
    if(defult_attr == "" || defult_attr == null || defult_attr == undefined){
        return;
    }
    let n_mod1 = GetMods(mod_s);
    let n_mod1_attr_value = n_mod1["Attribute"][defult_attr];
    if(n_mod1_attr_value == undefined){
        n_mod1_attr_value = "None";
    }
    let attr_moudle = "\
    <tr id='"+mod_s+"-attr-"+defult_attr+"'>\
        <td>\
            <p id='"+mod_s+"-attr-"+defult_attr+"-name'>"+defult_attr+"</p>\
        </td>\
        <td>\
            <p id='"+mod_s+"-attr-"+defult_attr+"-value' contenteditable='true' style='border: tomato dashed 2px;'>"+n_mod1_attr_value+"</p>\
        </td>\
        <td style='display:contents;white-space:pre'>\
            <button id='"+mod_s+"-attr-"+defult_attr+"' class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeMods('"+mod_s+"','Attribute',$('#'+$(this).attr('id')+'-value').text(),$('#'+$(this).attr('id')+'-name').text());load_modInfo(mod_s);>保存</button>\
            <button class='Fro-primary-btn-sm' style='width:100%' onclick=$('#"+mod_s+"-attr-"+defult_attr+"').remove()>取消</button>\
        </td>\
    </tr>";
    $(attr_moudle).appendTo($("#attribute-tbody"));
}
//增加Mod属性

function Add_Style(){
    let tips = "";
    if(mod_s == "Document"){
        tips = "(正在对Document进行修改，为更好的设计体验，不会显示样式。)"
    }
    let defult_style = prompt("请输入样式名，这将会定义唯一样式。"+tips);
    if(defult_style == "" || defult_style == null || defult_style == undefined){
        return;
    }
    let n_mod1 = GetMods(mod_s);
    let n_mod1_style_value = n_mod1["Style"][defult_style];
    if(n_mod1_style_value == undefined){
        n_mod1_style_value = "None";
    }
    let style_moudle = "\
    <tr id='"+mod_s+"-style-"+defult_style+"'>\
        <td>\
            <p id='"+mod_s+"-style-"+defult_style+"-name'>"+defult_style+"</p>\
        </td>\
        <td>\
            <p id='"+mod_s+"-style-"+defult_style+"-value' contenteditable='true' style='border: tomato dashed 2px;'>"+n_mod1_style_value+"</p>\
        </td>\
        <td style='display:contents;white-space:pre'>\
            <button id='"+mod_s+"-style-"+defult_style+"' class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeMods('"+mod_s+"','Style',$('#'+$(this).attr('id')+'-value').text(),$('#'+$(this).attr('id')+'-name').text());ChangeModCss();>保存</button>\
            <button class='Fro-primary-btn-sm' style='width:100%' onclick=$('#"+mod_s+"-style-"+defult_style+"').remove()>取消</button>\
        </td>\
    </tr>";
    $(style_moudle).appendTo($("#style-tbody"));
}
//增加Mod样式

function Add_Info(){
    let tips = "";
    if(mod_s == "Document"){
        tips = "(正在对Document进行修改，为更好的设计体验，不会显示样式。)"
    }
    let defult_info = prompt("请输入信息名，这将会定义唯一信息。"+tips);
    if(defult_info == "" || defult_info == null || defult_info == undefined){
        return;
    }
    else if(defult_info == "Tag" || defult_info == "Name")
    {
        return;
    }
    let n_mod2 = GetMods(mod_s);
    let n_mod2_info_value = n_mod2["Info"][defult_info];
    /*if(WhetheDefineMod(mod_s) == false && defult_info == "Class"){
        return;
    } //判断是否为自定义Mod 是则可以修改Class*/
    if(n_mod2_info_value == undefined){
        n_mod2_info_value = "None";
    }
    let info_moudle = "\
    <tr id='"+mod_s+"-info-"+defult_info+"'>\
        <td>\
            <p id='"+mod_s+"-info-"+defult_info+"-name'>"+defult_info+"</p>\
        </td>\
        <td>\
            <p id='"+mod_s+"-info-"+defult_info+"-value' contenteditable='true' style='border: tomato dashed 2px;'>"+n_mod2_info_value+"</p>\
        </td>\
        <td style='display:contents;white-space:pre'>\
            <button id='"+mod_s+"-info-"+defult_info+"' class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeModInfo('"+defult_info+"',$('#'+$(this).attr('id')+'-value').text(),$('#'+$(this).attr('id')+'-name').text());>保存</button>\
            <button class='Fro-primary-btn-sm' style='width:100%' onclick=$('#"+mod_s+"-info-"+defult_info+"').remove()>取消</button>\
        </td>\
    </tr>";
    $(info_moudle).appendTo($("#info-tbody"));
}
//添加Mod自定义信息

function Add_Meta_Name(){
    let defult_meta = prompt("请输入元数据名，这将会定义唯一元数据。");
    if(defult_meta == "" || defult_meta == null || defult_meta == undefined){
        return;
    }
    let n_mod1 = GetMeta("Name");
    let n_mod1_meta_value = n_mod1[defult_meta];
    if(n_mod1_meta_value == undefined){
        n_mod1_meta_value = "None";
    }
    let meta_moudle = "\
    <tr id='Name-meta-"+defult_meta+"'>\
        <td>\
            <p id='Name-meta-"+defult_meta+"-name'>"+defult_meta+"</p>\
        </td>\
        <td>\
            <p id='Name-meta-"+defult_meta+"-value' contenteditable='true' style='border: tomato dashed 2px;'>"+n_mod1_meta_value+"</p>\
        </td>\
        <td style='display:contents;white-space:pre'>\
            <button class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeMeta('Name','"+defult_meta+"',$('#Name-meta-"+defult_meta+"-value').text());load_metaInfo('Name');>保存</button>\
            <button class='Fro-primary-btn-sm' style='width:100%' onclick=$('#Name-meta-"+defult_meta+"').remove()>取消</button>\
        </td>\
    </tr>";
    $(meta_moudle).appendTo($("#meta-Name-tbody"));
}
function Add_Meta_Http_equiv(){
    let defult_meta = prompt("请输入元数据名，这将会定义唯一元数据。");
    if(defult_meta == "" || defult_meta == null || defult_meta == undefined){
        return;
    }
    let n_mod1 = GetMeta("Http-equiv");
    let n_mod1_meta_value = n_mod1[defult_meta];
    if(n_mod1_meta_value == undefined){
        n_mod1_meta_value = "None";
    }
    let meta_moudle = "\
    <tr id='Http-equiv-meta-"+defult_meta+"'>\
        <td>\
            <p id='Http-equiv-meta-"+defult_meta+"-name'>"+defult_meta+"</p>\
        </td>\
        <td>\
            <p id='Http-equiv-meta-"+defult_meta+"-value' contenteditable='true' style='border: tomato dashed 2px;'>"+n_mod1_meta_value+"</p>\
        </td>\
        <td style='display:contents;white-space:pre'>\
            <button class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeMeta('Http-equiv','"+defult_meta+"',$('#Http-equiv-meta-"+defult_meta+"-value').text());load_metaInfo('Http-equiv');>保存</button>\
            <button class='Fro-primary-btn-sm' style='width:100%' onclick=$('#Http-equiv-meta-"+defult_meta+"').remove()>取消</button>\
        </td>\
    </tr>";
    $(meta_moudle).appendTo($("#meta-Http-equiv-tbody"));
}
function Add_Meta_Scheme(){
    let defult_meta = prompt("请输入元数据名，这将会定义唯一元数据。");
    if(defult_meta == "" || defult_meta == null || defult_meta == undefined){
        return;
    }
    let n_mod1 = GetMeta("Scheme");
    let n_mod1_meta_value = n_mod1[defult_meta];
    if(n_mod1_meta_value == undefined){
        n_mod1_meta_value = "None";
    }
    let meta_moudle = "\
    <tr id='Scheme-meta-"+defult_meta+"'>\
        <td>\
            <p id='Scheme-meta-"+defult_meta+"-name'>"+defult_meta+"</p>\
        </td>\
        <td>\
            <p id='Scheme-meta-"+defult_meta+"-value' contenteditable='true' style='border: tomato dashed 2px;'>"+n_mod1_meta_value+"</p>\
        </td>\
        <td style='display:contents;white-space:pre'>\
            <button class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeMeta('Scheme','"+defult_meta+"',$('#Scheme-meta-"+defult_meta+"-value').text());load_metaInfo('Scheme');>保存</button>\
            <button class='Fro-primary-btn-sm' style='width:100%' onclick=$('#Scheme-meta-"+defult_meta+"').remove()>取消</button>\
        </td>\
    </tr>";
    $(meta_moudle).appendTo($("#meta-Scheme-tbody"));
}

function GetMeta(meta_name) {
    return Head_l["Meta"][meta_name];
}

function GetHead(h_type) {
    return Head_l[h_type];
}

function ChangeMeta(meta_name,p_name="",p_value,strType=false) {
    if(strType == true){
        Head_l["Meta"][meta_name] = p_value;
    }else{
        Head_l["Meta"][meta_name][p_name] = p_value;
    }
}

function load_metaInfo(meta_name){
    ClearMetaLoad(meta_name);
    let now_meta = GetMeta(meta_name);
    for(let meta_name1 in now_meta){
        if(now_meta[meta_name1] == undefined){
            continue;
        }
        let meta_moudle = "\
        <tr id='"+meta_name+"-meta-"+meta_name1+"'>\
            <td>\
                <p>"+meta_name1+"</p>\
            </td>\
            <td>\
                <p>"+now_meta[meta_name1]+"</p>\
            </td>\
            <td style='display:contents;white-space:pre;'>\
                <button class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeMeta('"+meta_name+"','"+meta_name1+"',undefined);$('#"+meta_name+"-meta-"+meta_name1+"').remove();load_metaInfo('"+meta_name+"');>删除</button>\
            </td>\
        </tr>";
        $(meta_moudle).appendTo($("#meta-"+meta_name+"-tbody"));
    }
    //载入Meta属性
}
function ClearMetaLoad(meta_name){
    $("#meta-"+meta_name+"-tbody").html("");
}

function ChangeSource(s_type,s_name,s_value) {
    let s_index = Head_l[s_type].indexOf(s_name);
    Head_l[s_type][s_index] = s_value;
}
function ClearSourceLoad(s_name){
    $("#"+s_name+"-tbody").html("");
}
function Add_Source(s_type) {
    let s_value = prompt("请键入资源链接：");
    if(s_value == "" || s_value == null || s_value == undefined){
        return;
    }
    if(Head_l[s_type].includes(s_value)){
        return;
    } //若改资源链接已存在则不进行添加
    Head_l[s_type].push(s_value);
    if(s_type == "CSS"){
        $("head").append("<link rel='stylesheet' type='text/css' href='"+s_value+"'>");
    }
    if(s_type == "JS"){
        $("head").append("<script src='"+s_value+"'>");
    }
    load_SourceInfo(s_type);
}
function load_SourceInfo(s_name){
    ClearSourceLoad(s_name);
    let now_s = GetHead(s_name);
    now_s.forEach(function(s_name1){
        if(s_name1 == undefined){
            return;
        }
        let s_moudle = "\
        <tr id='"+s_name+"-s-"+s_name1+"'>\
            <td>\
                <p>"+s_name1+"</p>\
            </td>\
            <td style='display:contents;white-space:pre;'>\
                <button class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeSource('"+s_name+"','"+s_name1+"',undefined);$('#"+s_name+"-s-"+s_name1+"').remove();load_SourceInfo('"+s_name+"');>删除</button>\
            </td>\
        </tr>";
        $(s_moudle).appendTo($("#"+s_name+"-tbody"));
    });
    //载入Source值
}

function WhetheDefineMod(mod_name){
    let n_mod5 = GetMods(mod_name);
    if(Mod_define.includes(n_mod5["Mod"][0])){
        return true;
    }
    else{
        return false;
    }
}

function ChangeModCss(){
    let n_mod3 = GetMods(mod_s);
    let n_mod3_style = n_mod3["Style"];
    $("#"+mod_s).css(n_mod3_style); //保证一定不会设置到Document;Case:Document attribute is a class.

    load_modInfo(mod_s); //重新加载Mod Info
    //每次添加新样式后 单击保存实时显现新样式
}
function ChangeModInfo(iinfo,info_v,info_n){

    let n_mod4 = GetMods(mod_s);
    let n_mod4_info = n_mod4["Info"];

    if(iinfo == 'Class'){
        $('#'+mod_s).removeClass(n_mod4_info['Class']);
    } //判断是否为Class 是则先删除原先Class
    ChangeMods(mod_s,"Info",info_v,info_n); //后修改Info

    n_mod4 = GetMods(mod_s);
    n_mod4_info = n_mod4["Info"];
    //重取Info
    
    if(n_mod4_info["Text"] != undefined || n_mod4_info["Text"] != null || n_mod4_info["Text"] != ""){
        $("#"+mod_s).text(n_mod4_info["Text"]);
    } //添加Text
    if(n_mod4_info["Class"] != undefined || n_mod4_info["Class"] != null || n_mod4_info["Class"] != ""){
        n_mod4["Mod"][1] = n_mod4_info["Class"];
        $("#"+mod_s).addClass(n_mod4_info["Class"]); //添加Class
        ChangeMods(mod_s,'Attribute',n_mod4_info["Class"],"class"); //添加Attribute Class
    } //添加Class

    load_modInfo(mod_s); //重新加载Mod Info
    //每次添加新信息后 单击保存实时显现新信息
}

function load_modInfo(mod_name){
    ClearAllModLoad();
    let now_mod = GetMods(mod_name);
    let mod_info_tag = now_mod["Mod"][0];
    let mod_info_class = now_mod["Mod"][1];
    if(WhetheDefineMod(mod_name) == true){
        mod_info_class = now_mod["Info"]["Class"];
    }
    let info_moudle = "\
    <tr>\
        <td>\
            Name\
        </td>\
        <td>\
            "+mod_name+"\
        </td>\
        <td>\
            Unable\
        </td>\
    </tr>\
    <tr>\
        <td>\
            Tag\
        </td>\
        <td>\
            "+mod_info_tag+"\
        </td>\
        <td>\
            Unable\
        </td>\
    </tr>\
    <tr>\
        <td>\
            Class\
        </td>\
        <td>\
            "+mod_info_class+"\
        </td>\
        <td>\
            Unable\
        </td>\
    </tr>";
    $("#info-tbody").html(info_moudle);

    let mod_info_all = now_mod["Info"];
    for(let info_name in mod_info_all){
        if(mod_info_all[info_name] == undefined){
            continue;
        }
        else if(info_name == "Class"){
            continue;
        }
        let info_moudle = "\
        <tr id='"+mod_name+"-info-"+info_name+"'>\
            <td>\
                <p>"+info_name+"</p>\
            </td>\
            <td>\
                <p>"+mod_info_all[info_name]+"</p>\
            </td>\
            <td style='display:contents;white-space:pre;'>\
                <button class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeMods('"+mod_name+"','Info',undefined,'"+info_name+"');$('#"+mod_name+"-info-"+info_name+"').remove()>删除</button>\
            </td>\
        </tr>";
        $(info_moudle).appendTo($("#info-tbody"));
    }
    //载入Mod基本信息

    let mod_attribute_all = now_mod["Attribute"];
    for(let attr_name in mod_attribute_all){
        if(mod_attribute_all[attr_name] == undefined){
            continue;
        }
        if(attr_name == "src" && now_mod["Mod"][0] == "img"){
            $("#"+mod_s).attr({"src":mod_attribute_all[attr_name]});
        }
        let attr_moudle = "\
        <tr id='"+mod_name+"-attr-"+attr_name+"'>\
            <td>\
                <p>"+attr_name+"</p>\
            </td>\
            <td>\
                <p>"+mod_attribute_all[attr_name]+"</p>\
            </td>\
            <td style='display:contents;white-space:pre;'>\
                <button class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeMods('"+mod_name+"','Attribute',undefined,'"+attr_name+"');$('#"+mod_name+"-attr-"+attr_name+"').remove()>删除</button>\
            </td>\
        </tr>";
        $(attr_moudle).appendTo($("#attribute-tbody"));
    }
    //载入Mod属性

    let mod_style_all = now_mod["Style"];
    for(let style_name in mod_style_all){
        if(mod_style_all[style_name] == undefined){
            continue;
        }
        let style_moudle = "\
        <tr id='"+mod_name+"-style-"+style_name+"'>\
            <td>\
                <p>"+style_name+"</p>\
            </td>\
            <td>\
                <p>"+mod_style_all[style_name]+"</p>\
            </td>\
            <td style='display:contents;white-space:pre;'>\
                <button class='Fro-primary-btn-sm' style='width:100%' onclick=ChangeMods('"+mod_name+"','Style',undefined,'"+style_name+"');$('#"+mod_name+"-style-"+style_name+"').remove();ChangeModCss();>删除</button>\
            </td>\
        </tr>";
        $(style_moudle).appendTo($("#style-tbody"));
    }
    //载入Mod属性
}
function ClearAllModLoad(){
    $("#info-tbody").html("");
    $("#attribute-tbody").html("");
    $("#style-tbody").html("");
}
//载入Mod信息

function Add_Tag(nr){
    if(nr == ""){
        return;
    }
    if(Mod_Object[nr] != undefined){
        return;
    }
    let new_Project_item = "\
    <div class='Fro-selectBox-option'>\
        <div class='Fro-project-item' onclick='AddMod($(this).text())'>\
            "+nr+"\
        </div>\
    </div>";
    $("#Panel-Html-tag-select-body").prepend(new_Project_item);

    $("#Id-name").text(""); //清空已输入的Tag
    Mod_Object[nr] = [nr,"None"];
    Mod_Object_num[nr] = 0;

    Mod_define.push(nr);
    //在Mod基本组件中添加自定义Tag
}
//添加自定义Tag

function ChangeModBorder(){
    $(".SelectMod").removeClass("SelectMod"); //去掉被选中的Mod边框
    if(mod_border_change == false){
        mod_border_change = true;
    }
    else{
        mod_border_change = false;
    }
} //Mod Border判断

function Surf(){
    let Last_edit = $(".Document").html(); //储存当前操作页

    $("#ToolBox").remove();
    $("#DefineBox").remove();
    $("#HandleBox").remove();
    $(".BG").remove();
    //以上删除多余的操作界面
    $(".SelectMod").removeClass("SelectMod"); //去掉被选中的Mod边框
    mod_l.forEach(function(mod_child){
        let n_mod_child = mod_child["Mod_name"];
        if(n_mod_child != "Document"){
            $("#"+n_mod_child).removeClass("Mod");
            $("#"+n_mod_child).removeAttr("title"); //删除Mod Title
            $("#"+n_mod_child).attr(mod_child["Attribute"]); //添加属性
            if(mod_child["Attribute"]["id"] != n_mod_child){
                $("#"+n_mod_child).removeAttr("id"); //删除Mod Id
            }
        }
    }); //删除所有 有Class Mod标记的Mod

    let Edit_Code = $(".Document").html().trim(); //处理后的页代码
    $(".Document").html(Last_edit); //重新显示Design页的见面

    //View页创建-------------------------------------------------------------
    Fro_Page_Add(".Fro-page-header","#More-Page","View-Page","View","<div id='Html-s'>"+Edit_Code+"</div>",true,false); //添加View分页
    Fro_Page_Change("#View-Page"); //切换至View分页
    let D_m = GetMods("Document");
    $("#Html-s").attr(D_m["Attribute"]); //添加Document属性
    //-----------------------------------------------------------------------
} //预览

function SaveCode() {
    let Last_edit = $(".Document").html().trim(); //储存当前操作页
    let Last_More_p = $("#More-Page-page-body").html().trim(); //储存More页

    //Source页创建-------------------------------------------------------------
    if(mod_border_change == false){
        mod_border_change = "";
    }
    let Code = Last_edit + "/--fgx--/" + JSON.stringify(Mod_Object) + "/--fgx--/" + JSON.stringify(Mod_Object_num) + "/--fgx--/" + Mod_define.join("/fgx/") + "/--fgx--/" + JSON.stringify(mod_l) + "/--fgx--/" + mod_s + "/--fgx--/" + mod_border_change + "/--fgx--/" + all_mod_name.join("fgx") + "/--fgx--/" + Last_More_p + "/--fgx--/" + JSON.stringify(Head_l); 
    $("#Source-Page-page-body").html(window.btoa(window.encodeURIComponent(Code)));
    
    Fro_Page_Change("#Source-Page"); //切换至Source分页
} //保存

function LoadSave(saveCode) {
    if(saveCode == ""){
        return;
    }
    let ago_s = window.decodeURIComponent(atob(saveCode));
    let ago_l = ago_s.split("/--fgx--/");
    Mod_Object = JSON.parse(ago_l[1]);
    Mod_Object_num = JSON.parse(ago_l[2]);
    Mod_define = ago_l[3].split("/fgx/");
    mod_l = JSON.parse(ago_l[4]);
    mod_s = ago_l[5];
    mod_border_change = ago_l[6];
    all_mod_name = ago_l[7].split("/fgx/");
    Head_l = JSON.parse(ago_l[9]);

    $(".Document").html(ago_l[0]);
    $("#More-Page-page-body").html(ago_l[8]);

    $("#Title_Box").val(Head_l["Title"]);
    $("#charSet_Box").val(Head_l["Meta"]["Charset"]);
    $("#Icon_Box").val(Head_l["Meta"]["Icon"]);
    
    $("#HandleBox").html('\
    <div class="Fro-panel-title">\
        <i title="还原操作面板" class="Fro-icon-wrong" style="float: right;cursor: pointer;" onclick="HideHandleBox(this)"></i>\
        <h4>总操作面板</h4>\
    </div>\
    <div class="Fro-panel-body">\
        <button id="ShowMBd" class="Fro-primary-btn-sm" style="width: 100%;" onclick="ChangeModBorder()">关闭Mod边框显示</button>\
        <hr>\
        <button class="Fro-primary-btn-sm" style="width: 100%;" onclick="Surf()">预览</button>\
        <hr>\
        <button class="Fro-primary-btn-sm" style="width: 100%;" onclick="SaveCode()">保存</button>\
        <hr>\
        <button class="Fro-primary-btn-sm" style="width: 100%;" onclick="toHtml()">输出到Html</button>\
        <hr>\
        <button class="Fro-primary-btn-sm" style="width: 100%;" onclick="ModMoveUp()">Mod上移</button>\
        <hr>\
        <button class="Fro-primary-btn-sm" style="width: 100%;" onclick="ModMoveDown()">Mod下移</button>\
    </div>');
    //HandleBox重定义  防止因为版本迭代所带来的问题

    Fro_Page_Change("#Design-Page"); //切换至Design分页
} //载入保存

function toHtml() {
    let Last_edit = $(".Document").html(); //储存当前操作页

    $("#ToolBox").remove();
    $("#DefineBox").remove();
    $("#HandleBox").remove();
    $(".BG").remove();
    //以上删除多余的操作界面
    $(".SelectMod").removeClass("SelectMod"); //去掉被选中的Mod边框
    mod_l.forEach(function(mod_child){
        let n_mod_child = mod_child["Mod_name"];
        if(n_mod_child != "Document"){
            $("#"+n_mod_child).removeClass("Mod");
            $("#"+n_mod_child).removeAttr("title"); //删除Mod Title
            $("#"+n_mod_child).attr(mod_child["Attribute"]); //添加属性
            if(mod_child["Attribute"]["id"] != n_mod_child){
                $("#"+n_mod_child).removeAttr("id"); //删除Mod Id
            }
        }
    }); //删除所有 有Class Mod标记的Mod

    let Edit_Code = $(".Document").html().trim(); //处理后的页代码
    $(".Document").html(Last_edit); //重新显示Design页的见面

    //Html Souce页创建-------------------------------------------------------------
    Fro_Page_Add(".Fro-page-header","#More-Page","Html-Souce-Page","Html Souce","<div id='Html-ss'>"+Edit_Code+"</div>",true,true); //添加Html Souce分页
    Fro_Page_Change("#Html-Souce-Page"); //切换至Html-Souce分页
    let D_m = GetMods("Document");
    $("#Html-ss").attr(D_m["Attribute"]); //添加Document属性
    if(D_m["Attribute"]["id"] == undefined){
        $("#Html-ss").removeAttr("id");
    }
    //-----------------------------------------------------------------------
    Edit_Code = $("#Html-Souce-Page-page-body").html(); //处理后的页代码
    let Body_moudle = Edit_Code.replace("div","body");
    d_index = Body_moudle.lastIndexOf("/div");
    Body_moudle = Body_moudle.substring(0,d_index)+"/body"+Body_moudle.substring(d_index+5)+">";
    //开始构造头部-----------------------------------------------------------------------
    let Head_moudle = "<head>";

    let Head_CSS = GetHead("CSS");
    let Head_JS = GetHead("JS");
    let Head_title = GetHead("Title");
    let Head_meta_Name = GetMeta("Name");
    let Head_meta_HttpEquiv = GetMeta("Http-equiv");
    let Head_meta_Scheme = GetMeta("Scheme");
    let Head_meta_Charset = GetMeta("Charset");
    let Head_meta_Icon = GetMeta("Icon");
    //取出Head_l中的所有属性
    if(Head_meta_Charset != ""){
        let v_sec = "<title>"+Head_title+"</title>";
        Head_moudle += v_sec;
    }
    if(Head_meta_Charset != ""){
        let v_sec = "<meta charset='"+Head_meta_Charset+"'>";
        Head_moudle += v_sec;
    }
    for(let n_v in Head_meta_Name){
        if(Head_meta_Name[n_v] != undefined && Head_meta_Name[n_v] != ""){
            let v_sec = "<meta name='"+n_v+"' content='"+Head_meta_Name[n_v]+"'>";
            Head_moudle += v_sec;
        }
    }
    for(let n_v in Head_meta_HttpEquiv){
        if(Head_meta_HttpEquiv[n_v] != undefined && Head_meta_HttpEquiv[n_v] != ""){
            let v_sec = "<meta http-equiv='"+n_v+"' content='"+Head_meta_HttpEquiv[n_v]+"'>";
            Head_moudle += v_sec;
        }
    }
    for(let n_v in Head_meta_Scheme){
        if(Head_meta_Scheme[n_v] != undefined && Head_meta_Scheme[n_v] != ""){
            let v_sec = "<meta scheme='"+n_v+"' content='"+Head_meta_Scheme[n_v]+"'>";
            Head_moudle += v_sec;
        }
    }
    //构造Meta

    if(Head_meta_Icon != ""){
        let v_sec = "<link rel='shortcut icon' href='"+Head_meta_Icon+"'>";
        Head_moudle += v_sec;
    }
    Head_CSS.forEach(function(path_v){
        if(path_v != undefined && path_v != ""){
            let v_sec = "<link rel='stylesheet' type='text/css' href='"+path_v+"'>";
            Head_moudle += v_sec;
        }
    });
    Head_JS.forEach(function(path_v){
        if(path_v != undefined && path_v != ""){
            let v_sec = "<script src='"+path_v+"'></script>";
            Head_moudle += v_sec;
        }
    });
    Head_moudle += "</head>";
    let Html_moudle = "<html>"+Head_moudle+Body_moudle+"</html>";

    $("#Html-Souce-Page-page-body").text(Html_moudle);
}
//输出Html代码

function ModMoveUp() {
    let bef_mod = $("#"+mod_s).prev();
    if($(bef_mod).hasClass("Mod") == false){
        return;
    }
    $(bef_mod).before($("#"+mod_s));
} //Mod上移
function ModMoveDown() {
    let next_mod = $("#"+mod_s).next();
    if($(next_mod).hasClass("Mod") == false){
        return;
    }
    $(next_mod).after($("#"+mod_s));
} //Mod下移