import  $ from  'jquery';
import  waypoints  from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elm, offset) {
    this.itemsToReveal = elm;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createRevealWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createRevealWaypoints() {
    var revealOffset = this;
    this.itemsToReveal.each(function() {
      var revealItem = this;
      new Waypoint({
        element: revealItem,
        handler: function() {
          $(revealItem).addClass("reveal-item--is-visible");
        },
        offset: revealOffset.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
