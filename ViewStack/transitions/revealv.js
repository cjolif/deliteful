define(function(){ return '\
.-d-view-stack-revealv {\
  -moz-transition-property: none;\
  -webkit-transition-property: none;\
  transition-property: none;\
  -moz-transition-duration: 0s;\
  -webkit-transition-duration: 0s;\
  transition-duration: 0s;\
}\
.-d-view-stack-revealv.-d-view-stack-transition {\
  -webkit-transition-property: -webkit-transform;\
  transition-property: transform;\
  -moz-transition-duration: 0.4s;\
  -webkit-transition-duration: 0.4s;\
  transition-duration: 0.4s;\
}\
.-d-view-stack-revealv.-d-view-stack-out {\
  -webkit-transform: translate3d(0px, 0%, 0px) !important;\
  transform: translate3d(0px, 0%, 0px) !important;\
}\
.-d-view-stack-revealv.-d-view-stack-out.-d-view-stack-transition {\
  -webkit-transform: translate3d(0px, -100%, 0px) !important;\
  transform: translate3d(0px, -100%, 0px) !important;\
}\
.-d-view-stack-revealv.-d-view-stack-out.-d-view-stack-reverse.-d-view-stack-transition {\
  -webkit-transform: translate3d(0px, 100%, 0px) !important;\
  transform: translate3d(0px, 100%, 0px) !important;\
}\
.-d-view-stack-revealv.-d-view-stack-in {\
  z-index: -100;\
  -webkit-transform: translate3d(0px, 0%, -1px) !important;\
  transform: translate3d(0px, 0%, -1px) !important;\
}\
.-d-view-stack-revealv.-d-view-stack-in.-d-view-stack-transition {\
  -webkit-transform: translate3d(0px, 0%, 0px) !important;\
  transform: translate3d(0px, 0%, 0px) !important;\
}\
.dj_android.dj_tablet .-d-view-stack-revealv.-d-view-stack-transition {\
  -moz-transition-duration: 0.6s;\
  -webkit-transition-duration: 0.6s;\
  transition-duration: 0.6s;\
  -moz-transition-timing-function: linear;\
  -webkit-transition-timing-function: linear;\
  transition-timing-function: linear;\
}\
'; } );
