document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".case__list__btn");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var text = this.previousElementSibling;
      text.style.overflow = "visible";
      this.style.display = "none";
      text.style.display = "block";
      text.style.webkitBoxOrient = "horizontal";
    });
  });
});


// ターゲットとなる要素を取得
const check = document.querySelector('.recommend__check');

// IntersectionObserverを作成
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // 要素が画面内に入っている場合
        if (entry.isIntersecting) {
          check.classList.add('animate__flash');
        } else {
            // 要素が画面外に出ている場合
            check.classList.remove('animate__flash');
        }
    });
});

// 要素を監視
observer.observe(check);




// 全ての .bounce 要素を取得
const bounces = document.querySelectorAll('.bounce');

// 各要素に対してIntersectionObserverを作成し、監視を開始する
bounces.forEach(bounce => {
    const observerBounce = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // 要素が画面内に入っている場合
            if (entry.isIntersecting) {
                bounce.classList.add('animate__bounceIn');
            } else {
                // 要素が画面外に出ている場合
                bounce.classList.remove('animate__bounceIn');
            }
        });
    });

    observerBounce.observe(bounce);
});