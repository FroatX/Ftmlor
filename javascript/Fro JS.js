window.onload=function(){
    var navBall = $(".Fro-navBall");
    var sideBall = $(".Fro-sideBall");
    var header = $(".Fro-header");
    var sidebar = $(".Fro-sidebar-vertical");

    navBall.click(function(){
        header.css({"display":"block"});
        navBall.css({"display":"none"});

        header.click(function(){
            header.css({"display":"none"});
            navBall.css({"display":"block"});
        });
    });
    //导航自变化定义完成

    sideBall.click(function(){
        sidebar.css({"display":"block"});
        sideBall.css({"display":"none"});

        sidebar.click(function(){
            sidebar.css({"display":"none"});
            sideBall.css({"display":"block"});
        });
    });
    window.onscroll = function() {
        scrollFunction();
    };
 
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            if(sidebar != ""){
                if(sidebar.css("display") != "none"){
                    sidebar.css({"top":"0"});
                }
            }
        } else {
            sidebar.css({"top":""});
        }
    }
    //垂直侧边栏自变化定义完成
}
var w_move = false;
var moveBox

var m_top_o;
var m_left_o;
var m_top;
var m_left;
var m_top_b;
var m_left_b;

var win_height = $(window).height();
var win_width = $(window).width();

$(document).mousedown(function(e){
    try{
        if($(e.target).attr("class").split(" ").includes("Fro-moveBox")){
            moveBox = $(e.target);
            $(moveBox).css({"position":"absolute"});

            w_move = true;
            m_top_o = parseInt(e.pageY);
            m_left_o = parseInt(e.pageX);
            m_top_b = parseInt(moveBox.offset().top);
            m_left_b = parseInt(moveBox.offset().left);
        }
    }
    catch{
        if($(e.target).attr("class") == "Fro-moveBox"){
            moveBox = $(e.target);
            moveBox.css({"position":"absolute"});
    
            w_move = true;
            m_top_o = parseInt(e.pageY);
            m_left_o = parseInt(e.pageX);
            m_top_b = parseInt(moveBox.offset().top);
            m_left_b = parseInt(moveBox.offset().left);
        }
    }
});

$(document).mousemove(function(em){
    if(w_move == true){
        moveBox.css({"top":m_top,"left":m_left,"cursor":"move"});
        m_top = parseInt(em.pageY) - (m_top_o - m_top_b);
        m_left = parseInt(em.pageX) - (m_left_o - m_left_b);
    }
});

$(document).mouseup(function(){
    if(w_move == true){
        w_move = false;
        moveBox.css({"cursor":"default"});
    }
});

//拖动元素定义完成

function Fro_Register_Pop(Pop,Pop_Background = null,Trigger,Pop_Close = null){
    var pop = Pop;
    var pop_b = Pop_Background;
    var pop_c = Pop_Close;
    var ppp = false;
    var pop_b_w = false;
    if(pop_b != null)
    {
        pop_b_w = true;
    }
    $('.Fro-pop').mousemove(function(){
        ppp = true;
    });
    $('.Fro-pop').mouseleave(function(){
        ppp = false;
    });
    if(pop_c != null){
        pop_c.click(function(){
            pop.fadeOut();
            if(pop_b_w == true){
                pop_b.fadeOut();
            }
        });
    }
    $(Trigger).click(function(){
        if(pop_b_w == true){
            pop_b.click(function(){
                if(ppp == false){
                    pop_b.fadeOut();
                }
            });
            $(pop_b).fadeIn();
            $(pop).fadeIn();
        }
        else{
            if($(pop) != ""){
                $(pop).fadeIn();
            }
        }
    });
}
//弹出框元素定义完成
$(document).mousedown(function(e){
    try{
        if($(e.target).attr("class").split(" ").includes("Fro-project-item")){
            $("#Fro-project-item-this").attr({"id":""});
            $(e.target).attr({"id":"Fro-project-item-this"});
        }
    }catch{
        if($(e.target).attr("class") == "Fro-project-item"){
            $("#Fro-project-item-this").attr({"id":""});
            $(e.target).attr({"id":"Fro-project-item-this"});
        }
    }
});
/**
 * @description Return Project-item.
 */
function Fro_Project_Return(){
    $("#Fro-project-item-this").attr({"id":""});
} //还原
//项目组件定义完成

$(document).mousedown(function(e){
    if($(e.target).hasClass("Fro-selectBox") || $(e.target).hasClass("Fro-selectBox-on")){
        let slb = $(e.target);
        let slb_id = "#"+slb.attr("id");
        if($(slb_id+"-select-body").css("display")=="none"){
            $(slb_id+"-select-body").show();
            slb.attr({"class":$(e.target).attr("class").replace("Fro-selectBox","Fro-selectBox-on")});
        }
        else{
            $(slb_id+"-select-body").hide();
            slb.attr({"class":$(e.target).attr("class").replace("Fro-selectBox-on","Fro-selectBox")});
        }
    }
});
//选择组件定义完成

$(document).mousedown(function(e){
    if($(e.target).hasClass("Fro-page-item") || $(e.target).hasClass("Fro-page-item-on")){
        let ptm_on_id = $(".Fro-page-item-on").attr("id");
        $("#"+ptm_on_id+"-page-body").hide();
        $("#"+ptm_on_id).attr({"class":$("#"+ptm_on_id).attr("class").replace("Fro-page-item-on","Fro-page-item")});

        let ptm = $(e.target);
        let ptm_id = "#"+ptm.attr("id");
        last_page = ptm.attr("id");

        $(ptm_id+"-page-body").show();
        ptm.attr({"class":$(e.target).attr("class").replace("Fro-page-item","Fro-page-item-on")});
    }
}); //分页切换

$(document).mousedown(function(e){
    if($(e.target).hasClass("Fro-page-close")){
        let will_close = $(e.target).parent();
        let whe_now_p = false;
        if(will_close.hasClass("Fro-page-item-on")){
            whe_now_p = true;
        }
        let will_close_id = will_close.attr("id");
        $("#"+will_close_id+"-page-body").remove();
        $("#"+will_close_id).remove();

        if(whe_now_p == true){
            let next_page = $(".Fro-page-item")[0];
            if(next_page == undefined){
                return;
            } //当所有页面都被关闭后，就不进行下面操作
            let next_page_id = $(next_page).attr("id");
            $(next_page).attr({"class":$(next_page).attr("class").replace("Fro-page-item","Fro-page-item-on")});
            $("#"+next_page_id+"-page-body").show();
        }
    }
}); //分页关闭

/**
 * @description Creating new page.
 * @param {string} page_header - means the page's header,that is used to show the every pages'head.
 * @param {string} last_page - means the last page's head_name.
 * @param {string} head_name - means the new page's only name.Not the would-be displayed name.
 * @param {string} head_contents - means the would-be displayed head_name.
 * @param {string} body_contents - means the would-be displayed body's contents.
 * @param {boolean} closer - means whether show the closer or not.
 * @param {boolean} body_border - means whether show the page's body-border.
 */
function Fro_Page_Add(page_header,last_page,head_name,head_contents = "New Page",body_contents = "New Page",closer = false,body_border = true) {
    if($("#"+head_name).text() != ""){
        return;
    }
    if(closer == true){
        head_contents += " <span class='Fro-page-close'></span>";
    }
    let p_body = "<div class='Fro-page-body' id='"+head_name+"-page-body'></div>";
    if(body_border == false){
        p_body = "<div class='Fro-page-body' style='border:none;' id='"+head_name+"-page-body'></div>";
    }
    $("<div class='Fro-page-item' id='"+head_name+"'>"+head_contents+"</div>").appendTo($(page_header));
    try{
        $(last_page+"-page-body").after(p_body);
    }catch{
        $(last_page+"-page-body-on").after(p_body);
    }
    $("#"+head_name+"-page-body").html(body_contents);
} //添加分页

/**
 * @description Changing page.
 * @param {string} head_name - means the would-be changed page's name.
 */
function Fro_Page_Change(head_name) {
    let ptm_on_id = $(".Fro-page-item-on").attr("id");
    try{
        $("#"+ptm_on_id+"-page-body").hide();
    }catch{
        $("#"+ptm_on_id+"-page-body-on").hide();
    }
    $("#"+ptm_on_id).attr({"class":$("#"+ptm_on_id).attr("class").replace("Fro-page-item-on","Fro-page-item")});

    $(head_name).attr({"class":$(head_name).attr("class").replace("Fro-page-item","Fro-page-item-on")});
    $(head_name+"-page-body").show();
} //切换分页
//分页框组件定义完成

function Fro_getYear() {
    let fro_date = new Date;
    return fro_date.getFullYear();
}