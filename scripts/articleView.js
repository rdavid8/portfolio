
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
    l = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);


      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {

    } else {

    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {

};

articleView.handleMainNav = function() {

  $('.main-nav').on();

  $('.main-nav .tab:first').click();

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); 

};


$();
