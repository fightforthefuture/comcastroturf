(function() {
  // Support case-insensitive name searches
  // TODO: IE is missing FormData.prototype.get, polyfill this later?
  if (typeof FormData.prototype.get == 'function') {
    var form = document.querySelector('.search form');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var formData = new FormData(form);

      var url = [
        form.getAttribute('action'),
        '?proceedings_name=',
        formData.get('proceedings_name'),
        '&q=',
        'filers.name:(',
        formData.get('filers_name'),
        ')%20AND%20',
        formData.get('q'),
        '&sort=',
        formData.get('sort')
      ].join('');

      window.open(url);
    });
  }
})();
