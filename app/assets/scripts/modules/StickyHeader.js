import $ from 'jquery';
import  waypoints  from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".showcase__subtitle");
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    var stickyHeaderElement = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function (direction) {
        if (direction == "down") {
          stickyHeaderElement.siteHeader.addClass("site-header--dark");
        }
        else {
          stickyHeaderElement.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }
}

export default StickyHeader;
