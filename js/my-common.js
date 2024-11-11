let headerHeight=$(".van-nav-bar").outerHeight();var clipboard;function toast(a){a=`<div class="van-toast van-toast--middle van-toast--text" style="z-index: 9999;">
                  <div class="van-toast__text">${a}</div>
                </div>`;$("body").append(a),$(".van-toast--text").delay(1e3).fadeOut(),setTimeout(function(){$(".van-toast--text").remove()},2e3)}function showWarnDialog(a){var i=$("#confirm_dialog").clone().show();i.addClass("confirm-dialog-xxx"),i.find(".swal-text").text(a),$("body").append(i.prop("outerHTML")),$(".confirm-dialog-xxx").show(),$(".swal-button-container").click(function(){$(".confirm-dialog-xxx").remove()})}function showConfirmDialog(a,i,o){$(".van-overlay").show(),$("#common_confirm_dialog2 .van-dialog__header").text(a),$("#common_confirm_dialog2 .van-dialog__content .van-dialog__message").text(i),$("#common_confirm_dialog2").show(),$("#common_confirm_dialog2 .van-dialog__confirm").off("click"),$("#common_confirm_dialog2 .van-dialog__cancel").off("click"),$("#common_confirm_dialog2 .van-dialog__confirm").click(function(){o(),$("#common_confirm_dialog2").hide(),$(".van-overlay").hide()}),$("body").on("click","#common_confirm_dialog2 .van-dialog__cancel",function(){$("#common_confirm_dialog2").hide(),$(".van-overlay").hide()})}function comingSoon(){toast(please_stay_tuned)}function showPageLoading(){$("#page-loading").length||$("body").append(`<div class="loading-mask" id="page-loading" style="z-index: 99999">
                    <div class="loading-box">
                        <div class="loadingio-spinner-ellipsis">
                            <div class="ldio">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>`),$("#page-loading").show()}function hidePageLoading(){$("#page-loading").hide()}function showLoadingDialog(){$("#loading-dialog").length||$("body").append(`  <div class="Loading c-row c-row-middle-center" id="loading-dialog" style="z-index: 8888;">
                            <div class="van-loading van-loading--circular">
                                <span class="van-loading__spinner van-loading__spinner--circular" style="color: rgb(210, 183, 156);">
                                    <svg viewBox="25 25 50 50" class="van-loading__circular">
                                        <circle cx="50" cy="50" r="20" fill="none"></circle>
                                    </svg>
                                </span>
                            </div>
                        </div>`),$("#loading-dialog").show()}function hideLoadingDialog(){$("#loading-dialog").hide()}function getLoadingHtml(){return`<div class="loading">
                <div class="van-loading van-loading--spinner">
                    <span
                        class="van-loading__spinner van-loading__spinner--spinner">
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    </span>
                </div>
            </div>`}function getLoadingHtml2(){return`<div class="more_btn loading">
                <span class="van-loading__spinner van-loading__spinner--circular">
                    <svg viewBox="25 25 50 50" class="van-loading__circular">
                        <circle cx="50" cy="50" r="20" fill="none"></circle>
                    </svg>
                </span>
            </div>`}function getNoDataHtml(){return $(".no-data-text").prop("outerHTML")}function getEmptyHtml(){return $(".template_empty_content").clone().css("display","flex").prop("outerHTML")}function getNoMoreHtml(){return $(".template_no_more").first().clone().css("display","flex").prop("outerHTML")}function getCurrentDate(){var a=new Date;return a.getFullYear()+"-"+String(a.getMonth()+1).padStart(2,"0")+"-"+String(a.getDate()).padStart(2,"0")}function makePostRequest(a,i,o){$.ajax({url:a,type:"POST",data:JSON.stringify(i),contentType:"application/json",dataType:"json",success:o,error:function(a,i,o){hidePageLoading(),500===a.status?toast(sever_error_500):toast("timeout"===i?request_timed_out:lang(request_failed)+"："+i)}})}$(window).scroll(function(){$(window).scrollTop()>headerHeight?($(".van-nav-bar").addClass("sticky"),$(".floatTop").addClass("sticky_bar"),$(".floatbg").addClass("sticky_bar5"),$("#app").css("padding-top",headerHeight)):($(".van-nav-bar").removeClass("sticky"),$(".floatTop").removeClass("sticky_bar"),$(".floatbg").removeClass("sticky_bar5"),$("#app").css("padding-top",0))}),$(".my-copy").length&&((clipboard=new ClipboardJS(".my-copy")).on("success",function(a){toast(copy_succ),a.clearSelection()}),clipboard.on("error",function(a){console.log(a)})),$(".VerificationCode").click(function(){var a=Date.now();let i=$(this).attr("src");0<i.indexOf("?")&&(i=i.substring(0,i.indexOf("?"))),$(this).attr("src",i+"?"+a)}),$("#refresh_balance, .money-refresh-btn").click(function(){let i=$(this);i.addClass("refreshing"),setTimeout(()=>{makePostRequest("/user/balance",{},function(a){i.removeClass("refreshing"),1===a.code?($("#balance_span").text(a.data.balance_format),$("#umoney_balance").text(a.data.balance_usdt_format+" usdt"),$("#ethmoney_balance").text(a.data.balance_eth_format+" eth"),$("#btcmoney_balance").text(a.data.balance_btc_format+" btc")):toast(a.msg)})},1e3)}),$("#refresh_commission").click(function(){let i=$(this);i.addClass("refreshing"),setTimeout(()=>{makePostRequest("/user/commission",{},function(a){i.removeClass("refreshing"),1===a.code?($("#commission_span").text(a.data.commission_format),$("#commission_usdt_span").text(a.data.commission_usdt_format+" usdt")):toast(a.msg)})},1e3)});