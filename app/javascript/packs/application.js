// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.




require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")



import '@doabit/semantic-ui-sass'
import '@doabit/semantic-ui-sass/src/scss/semantic-ui.scss'
import jquery from 'jquery';

$(document).on('turbolinks:load', function () {
    $('.ui.dropdown')
  .dropdown()
;
})


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//= require semantic_ui/semantic_ui
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .


