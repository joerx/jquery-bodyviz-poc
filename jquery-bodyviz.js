(function($) {

  var myFunc = function() {console.log('not yet...')};
  var vizFrame = $('<iframe id="my-frame" src="frame.html"></iframe>')
    
  vizFrame.load(function() {
    myFunc = vizFrame[0].contentWindow.myFunc;
  });

  $.fn.extend({
    bodyviz: function() {
      this.html(vizFrame);
      return {
        update: function (msg) {myFunc(msg)}
      }
    }
  });

})(jQuery);
