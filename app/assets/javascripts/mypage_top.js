$(function(){
  function buildTodoHTML(){
    // メッセージが入ってきた時の準備。
    // var todoHTML = `<a class='todo-list' href='/'>
    //                   <div class='todo-icon'>
    //                     <img alt="mercari" height="48px" width="48px" src="/assets/mercari_icon-7a7c8e1a1ab8a650b4a1db1481b099374f422183a68b592d380a2c37fc3d91ff.png">
    //                   </div>
    //                   <li class='list'>
    //                     田中さんから「アウター」の取引メッセージがあります。返信をお願いします。
    //                   </li>
    //                   <span class='notice-timing'>７日前</span>
    //                   <i class='fas fa-chevron-right right-arrow'></i>
    //                 </a>`
    // return todoHTML;
    var todoHTML = `<div class='no-item-icon'></div>
                        <div class='no-item-text'>現在、やることリストはありません</div>`
    return todoHTML;
  }

  function buildNoticeHTML(){
    var noticeHTML = `<a class='notice-list' href='/'>
                        <div class='notice-list__icon'>
                          <img alt="mercari" height="48px" width="48px" src="/assets/mercari_icon-7a7c8e1a1ab8a650b4a1db1481b099374f422183a68b592d380a2c37fc3d91ff.png">
                        </div>
                        <li class='notice-list__list'>
                          事務局から個別メッセージ「ログイン通知」
                        </li>
                        <i class='far fa-clock notice-list__clock'></i>
                        <span class='notice-list__timing'>6日前</span>
                        <i class='fas fa-chevron-right notice-list__right-arrow'></i>
                      </a>
                      <a class='notice-list' href='/'>
                        <div class='notice-list__icon'>
                          <img alt="mercari" height="48px" width="48px" src="/assets/mercari_icon-7a7c8e1a1ab8a650b4a1db1481b099374f422183a68b592d380a2c37fc3d91ff.png">
                        </div>
                        <li class='notice-list__list'>
                          事務局から個別メッセージ「ログイン通知」
                        </li>
                        <i class='far fa-clock notice-list__clock'></i>
                        <span class='notice-list__timing'>6日前</span>
                        <i class='fas fa-chevron-right notice-list__right-arrow'></i>
                      </a>`
    return noticeHTML;
  }

  function buildDuringHTML() {
    var duringHTML = `<div class='no-item-icon'></div>
                        <div class='no-item-text'>取引中の商品がありません</div>`
    return duringHTML;
  }

  function buildPastHTML() {
    var pastHTML = `<div class='no-item-icon'></div>
                      <div class='no-item-text'>過去に取引した商品がありません</div>`
    return pastHTML;
  }

  $(document).on("click",".todo", function() {
    var html = buildTodoHTML();
    $(".notice").removeClass('active');
    $(".notice").addClass('inactive');
    $(".todo").removeClass('inactive');
    $(".todo").addClass('active');
    $(".notice-box").empty();
    $(".todo-box").append(html).css('display', 'block');
    console.log("success");
  });
  $(document).on("click", ".notice", function() {
    var html = buildNoticeHTML();
    $(".todo").removeClass('active');
    $(".todo").addClass('inactive');
    $(".notice").removeClass('inactive');
    $(".notice").addClass('active');
    $(".todo-box").empty();
    $(".notice-box").append(html).css('display', 'block');
    console.log("success");
  });
  $(document).on("click", ".during-trading", function() {
    var html = buildDuringHTML();
    $(".past-trading").removeClass('active');
    $(".past-trading").addClass('inactive');
    $(".during-trading").removeClass('inactive');
    $(".during-trading").addClass('active');
    $(".bought-detail").empty();
    $(".bought-detail").append(html).css('display', 'block');
    console.log("success");
  });
  $(document).on("click", ".past-trading", function() {
    var html = buildPastHTML();
    $(".during-trading").removeClass('active');
    $(".during-trading").addClass('inactive');
    $(".past-trading").removeClass('inactive');
    $(".past-trading").addClass('active');
    $(".bought-detail").empty();
    $(".bought-detail").append(html).css('display', 'block');
    console.log("success");
  });
})
