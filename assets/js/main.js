// Initialize AlpineJS
document.addEventListener('alpine:init', () => {
  // Main
  Alpine.data('main', () => ({
    sidebar: true,
    slidePanel: false,
    userSlidePanel: false,

    init: function () {},
    showModal() {
      this.modal = !this.modal;

      var iframe = document.querySelector('.js-embedFrame') !== null;
      if (iframe) {
        var iframe = document.querySelector('.js-embedFrame');
      }

      iframe.src = 'https://www.youtube.com/embed/Zz6eOVaaelI?autoplay=1';
    },
  }))

});
