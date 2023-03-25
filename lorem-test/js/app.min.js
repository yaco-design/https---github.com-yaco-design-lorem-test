// select 

$('select').each(function () {
  let $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  let $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  let $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (let i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
    //if ($this.children('option').eq(i).is(':selected')){
    //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
    //}
  }

  let $listItems = $list.children('li');

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.select-styled.active').not(this).each(function () {
      $(this).removeClass('active').next('ul.select-options').hide();
    });
    $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});

// range-input
let range = document.querySelector('.range-input input');

let rangeValue = function () {
  let newValue = range.value;
  let target = document.querySelector('.range-input .range-value');
  target.innerHTML = newValue;
}

range.addEventListener("input", rangeValue);


// styky header

jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() > 100) {
    jQuery('.site-header').addClass("fixed-header");
  } else {
    jQuery('.site-header').removeClass("fixed-header");
  }
});


// mobile burger

jQuery('.burger-button').click(function () {
  jQuery('.header-menu').addClass("show");
  jQuery('body').addClass("body-hidden");
});

jQuery('.burger-close-button').click(function () {
  jQuery('.header-menu').removeClass("show");
  jQuery('body').removeClass("body-hidden");
});