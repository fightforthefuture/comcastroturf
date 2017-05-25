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

  var gutter = document.querySelector('.gutter');

  function openModal(id) {
    // Remove any existing modal content
    while (gutter.firstChild) {
      gutter.removeChild(gutter.firstChild);
    }

    var modal = document.getElementById(id).cloneNode(true);
    modal.classList.remove('hidden');

    modal.querySelector('.close').addEventListener('click', function(e) {
      e.preventDefault();
      gutter.classList.add('hidden');
    });

    gutter.appendChild(modal);
    gutter.classList.remove('hidden');

    return modal;
  }

  function closeModal() {
    gutter.classList.add('hidden');
  }

  // Open modal from button
  document.getElementById('ag-button').addEventListener('click', function(e) {
    e.preventDefault();
    
    var modal = openModal('ag');
    var form = modal.querySelector('form');
      
    // Display after-action thanks content
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var xhr = new XMLHttpRequest();
      var formData = new FormData(form);

      xhr.open(form.getAttribute('method'), form.getAttribute('action'), true);

      xhr.addEventListener('load', function() {
        openModal('thanks');
      });

      xhr.send(formData);
    });
  });

  // Close any modal on escape keyup event
  document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) closeModal()
  });
})();
