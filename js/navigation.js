var array = [
  {label:'World Cup', url:'portfolio.html#'},
  {label:'Ricky Ticky Todo', url:'portfolio.html#'},
  {label:'Ricks Reddit Clone', url:'portfolio.html#'},
  {label:'Ricks Guitar Shop', url:'portfolio.html#'},
  {label:'Boise PHP Motors', url:'portfolio.html#'},
  {label:'Boise Bloggr', url:'portfolio.html#'},
  {label:'Product Manager', url:'portfolio.html#'},
  {label:'Snow Maker', url:'portfolio.html#'},

]
var pEl = $.map(array, function(obj, i) {
  return '<li><a class="white-text" href="'+obj.url+'">'+obj.label+'</a></li>';
});

document.write('\
<div class="navbar-fixed">\
  <ul id="portfolioDrop" class="dropdown-content grey darken-4">'+pEl.join("")+'</ul>\
  <ul id="portfolioDrop-mobile" class="dropdown-content dropdown-content-mobile grey darken-4">'+pEl.join("")+'</ul>\
  <nav class="grey darken-4" role="navigation">\
    <div class="nav-wrapper container">\
        <a href="#!" class="brand-logo"> <img class="mylogo" src="images/logo.png" /></a>\
        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>\
        <ul class="right hide-on-med-and-down">\
          <li><a class="white-text" href="index.html#about">ABOUT ME</a></li>\
          <li><a class="white-text" href="index.html#skills">SKILLS</a></li>\
          <li><a class="white-text dropdown-button" href="portfolio.html" data-induration="300" data-outduration="225" data-beloworigin="true" data-hover="true" data-activates="portfolioDrop">PORTFOLIO<i class="material-icons right white-text">arrow_drop_down</i></a></li>\
          <li><a class="white-text" href="Resume.pdf">RESUME</a></li>\
          <li><a class="white-text" href="index.html#contact">CONTACT</a></li>\
        </ul>\
        <ul class="side-nav grey darken-4" id="nav-mobile">\
          <li><a class="white-text" href="index.html#about">ABOUT ME</a></li>\
          <li><a class="white-text" href="index.html#skills">SKILLS</a></li>\
          <li><a class="white-text dropdown-button" href="portfolio.html" data-induration="300" data-outduration="225" data-beloworigin="true" data-activates="portfolioDrop-mobile">PORTFOLIO<i class="material-icons right  white-text">arrow_drop_down</i></a></li>\
          <li><a class="white-text" href="Resume.pdf">RESUME</a></li>\
          <li><a class="white-text" href="index.html#contact">CONTACT</a></li>\
      </ul>\
    </div>\
  </nav>\
</div>\
');
