import{s as h,a as c,F as te,j as y,r as L,d as de,u as le,T as ce}from"./index-d215b970.js";const me=h.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 52px;

  @media (max-width: 767px) {
margin-bottom: 28px;
margin-top: 22px;

  
}
@media (min-width: 768px) and (max-width: 1279px) {
margin-bottom: 40px;
margin-top: 64px;

`,fe=({title:e})=>c(te,{children:c(me,{children:e})});function W(e){if(e===null||e===!0||e===!1)return NaN;var a=Number(e);return isNaN(a)?a:a<0?Math.ceil(a):Math.floor(a)}function p(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+a.length+" present")}function R(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(t){return typeof t}:R=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function x(e){p(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||R(e)==="object"&&a==="[object Date]"?new Date(e.getTime()):typeof e=="number"||a==="[object Number]"?new Date(e):((typeof e=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function he(e,a){p(2,arguments);var t=x(e).getTime(),n=W(a);return new Date(t+n)}var ve={};function X(){return ve}function ge(e){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()}function A(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(t){return typeof t}:A=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function pe(e){return p(1,arguments),e instanceof Date||A(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function we(e){if(p(1,arguments),!pe(e)&&typeof e!="number")return!1;var a=x(e);return!isNaN(Number(a))}function be(e,a){p(2,arguments);var t=W(a);return he(e,-t)}var ye=864e5;function xe(e){p(1,arguments);var a=x(e),t=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var n=a.getTime(),r=t-n;return Math.floor(r/ye)+1}function B(e){p(1,arguments);var a=1,t=x(e),n=t.getUTCDay(),r=(n<a?7:0)+n-a;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function ae(e){p(1,arguments);var a=x(e),t=a.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(t+1,0,4),n.setUTCHours(0,0,0,0);var r=B(n),i=new Date(0);i.setUTCFullYear(t,0,4),i.setUTCHours(0,0,0,0);var o=B(i);return a.getTime()>=r.getTime()?t+1:a.getTime()>=o.getTime()?t:t-1}function Te(e){p(1,arguments);var a=ae(e),t=new Date(0);t.setUTCFullYear(a,0,4),t.setUTCHours(0,0,0,0);var n=B(t);return n}var Me=6048e5;function Oe(e){p(1,arguments);var a=x(e),t=B(a).getTime()-Te(a).getTime();return Math.round(t/Me)+1}function Q(e,a){var t,n,r,i,o,s,d,l;p(1,arguments);var f=X(),m=W((t=(n=(r=(i=a==null?void 0:a.weekStartsOn)!==null&&i!==void 0?i:a==null||(o=a.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&r!==void 0?r:f.weekStartsOn)!==null&&n!==void 0?n:(d=f.locale)===null||d===void 0||(l=d.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&t!==void 0?t:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=x(e),v=g.getUTCDay(),w=(v<m?7:0)+v-m;return g.setUTCDate(g.getUTCDate()-w),g.setUTCHours(0,0,0,0),g}function ne(e,a){var t,n,r,i,o,s,d,l;p(1,arguments);var f=x(e),m=f.getUTCFullYear(),g=X(),v=W((t=(n=(r=(i=a==null?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:a==null||(o=a.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&r!==void 0?r:g.firstWeekContainsDate)!==null&&n!==void 0?n:(d=g.locale)===null||d===void 0||(l=d.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(m+1,0,v),w.setUTCHours(0,0,0,0);var S=Q(w,a),T=new Date(0);T.setUTCFullYear(m,0,v),T.setUTCHours(0,0,0,0);var D=Q(T,a);return f.getTime()>=S.getTime()?m+1:f.getTime()>=D.getTime()?m:m-1}function Ce(e,a){var t,n,r,i,o,s,d,l;p(1,arguments);var f=X(),m=W((t=(n=(r=(i=a==null?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:a==null||(o=a.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&r!==void 0?r:f.firstWeekContainsDate)!==null&&n!==void 0?n:(d=f.locale)===null||d===void 0||(l=d.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&t!==void 0?t:1),g=ne(e,a),v=new Date(0);v.setUTCFullYear(g,0,m),v.setUTCHours(0,0,0,0);var w=Q(v,a);return w}var Se=6048e5;function De(e,a){p(1,arguments);var t=x(e),n=Q(t,a).getTime()-Ce(t,a).getTime();return Math.round(n/Se)+1}function u(e,a){for(var t=e<0?"-":"",n=Math.abs(e).toString();n.length<a;)n="0"+n;return t+n}var Pe={y:function(a,t){var n=a.getUTCFullYear(),r=n>0?n:1-n;return u(t==="yy"?r%100:r,t.length)},M:function(a,t){var n=a.getUTCMonth();return t==="M"?String(n+1):u(n+1,2)},d:function(a,t){return u(a.getUTCDate(),t.length)},a:function(a,t){var n=a.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(a,t){return u(a.getUTCHours()%12||12,t.length)},H:function(a,t){return u(a.getUTCHours(),t.length)},m:function(a,t){return u(a.getUTCMinutes(),t.length)},s:function(a,t){return u(a.getUTCSeconds(),t.length)},S:function(a,t){var n=t.length,r=a.getUTCMilliseconds(),i=Math.floor(r*Math.pow(10,n-3));return u(i,t.length)}};const C=Pe;var U={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ke={G:function(a,t,n){var r=a.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(a,t,n){if(t==="yo"){var r=a.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return C.y(a,t)},Y:function(a,t,n,r){var i=ne(a,r),o=i>0?i:1-i;if(t==="YY"){var s=o%100;return u(s,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):u(o,t.length)},R:function(a,t){var n=ae(a);return u(n,t.length)},u:function(a,t){var n=a.getUTCFullYear();return u(n,t.length)},Q:function(a,t,n){var r=Math.ceil((a.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(a,t,n){var r=Math.ceil((a.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return u(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(a,t,n){var r=a.getUTCMonth();switch(t){case"M":case"MM":return C.M(a,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(a,t,n){var r=a.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(a,t,n,r){var i=De(a,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):u(i,t.length)},I:function(a,t,n){var r=Oe(a);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):u(r,t.length)},d:function(a,t,n){return t==="do"?n.ordinalNumber(a.getUTCDate(),{unit:"date"}):C.d(a,t)},D:function(a,t,n){var r=xe(a);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):u(r,t.length)},E:function(a,t,n){var r=a.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(a,t,n,r){var i=a.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return u(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(a,t,n,r){var i=a.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return u(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(a,t,n){var r=a.getUTCDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return u(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(a,t,n){var r=a.getUTCHours(),i=r/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(a,t,n){var r=a.getUTCHours(),i;switch(r===12?i=U.noon:r===0?i=U.midnight:i=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(a,t,n){var r=a.getUTCHours(),i;switch(r>=17?i=U.evening:r>=12?i=U.afternoon:r>=4?i=U.morning:i=U.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(a,t,n){if(t==="ho"){var r=a.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return C.h(a,t)},H:function(a,t,n){return t==="Ho"?n.ordinalNumber(a.getUTCHours(),{unit:"hour"}):C.H(a,t)},K:function(a,t,n){var r=a.getUTCHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):u(r,t.length)},k:function(a,t,n){var r=a.getUTCHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):u(r,t.length)},m:function(a,t,n){return t==="mo"?n.ordinalNumber(a.getUTCMinutes(),{unit:"minute"}):C.m(a,t)},s:function(a,t,n){return t==="so"?n.ordinalNumber(a.getUTCSeconds(),{unit:"second"}):C.s(a,t)},S:function(a,t){return C.S(a,t)},X:function(a,t,n,r){var i=r._originalDate||a,o=i.getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return K(o);case"XXXX":case"XX":return k(o);case"XXXXX":case"XXX":default:return k(o,":")}},x:function(a,t,n,r){var i=r._originalDate||a,o=i.getTimezoneOffset();switch(t){case"x":return K(o);case"xxxx":case"xx":return k(o);case"xxxxx":case"xxx":default:return k(o,":")}},O:function(a,t,n,r){var i=r._originalDate||a,o=i.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+J(o,":");case"OOOO":default:return"GMT"+k(o,":")}},z:function(a,t,n,r){var i=r._originalDate||a,o=i.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+J(o,":");case"zzzz":default:return"GMT"+k(o,":")}},t:function(a,t,n,r){var i=r._originalDate||a,o=Math.floor(i.getTime()/1e3);return u(o,t.length)},T:function(a,t,n,r){var i=r._originalDate||a,o=i.getTime();return u(o,t.length)}};function J(e,a){var t=e>0?"-":"+",n=Math.abs(e),r=Math.floor(n/60),i=n%60;if(i===0)return t+String(r);var o=a||"";return t+String(r)+o+u(i,2)}function K(e,a){if(e%60===0){var t=e>0?"-":"+";return t+u(Math.abs(e)/60,2)}return k(e,a)}function k(e,a){var t=a||"",n=e>0?"-":"+",r=Math.abs(e),i=u(Math.floor(r/60),2),o=u(r%60,2);return n+i+t+o}const We=ke;var Z=function(a,t){switch(a){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},re=function(a,t){switch(a){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},$e=function(a,t){var n=a.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Z(a,t);var o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",Z(r,t)).replace("{{time}}",re(i,t))},Ue={p:re,P:$e};const _e=Ue;var Ee=["D","DD"],Ye=["YY","YYYY"];function Fe(e){return Ee.indexOf(e)!==-1}function Ne(e){return Ye.indexOf(e)!==-1}function ee(e,a,t){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(a,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(a,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(a,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(a,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Le={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},He=function(a,t,n){var r,i=Le[a];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const qe=He;function V(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}}var ze={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ie={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Re={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ae={date:V({formats:ze,defaultWidth:"full"}),time:V({formats:Ie,defaultWidth:"full"}),dateTime:V({formats:Re,defaultWidth:"full"})};const Be=Ae;var Qe={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Xe=function(a,t,n,r){return Qe[a]};const Ge=Xe;function F(e){return function(a,t){var n=t!=null&&t.context?String(t.context):"standalone",r;if(n==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=t!=null&&t.width?String(t.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,d=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[d]||e.values[s]}var l=e.argumentCallback?e.argumentCallback(a):a;return r[l]}}var je={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ve={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Je={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ke={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ze={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},et={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},tt=function(a,t){var n=Number(a),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},at={ordinalNumber:tt,era:F({values:je,defaultWidth:"wide"}),quarter:F({values:Ve,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:F({values:Je,defaultWidth:"wide"}),day:F({values:Ke,defaultWidth:"wide"}),dayPeriod:F({values:Ze,defaultWidth:"wide",formattingValues:et,defaultFormattingWidth:"wide"})};const nt=at;function N(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=a.match(r);if(!i)return null;var o=i[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?it(s,function(m){return m.test(o)}):rt(s,function(m){return m.test(o)}),l;l=e.valueCallback?e.valueCallback(d):d,l=t.valueCallback?t.valueCallback(l):l;var f=a.slice(o.length);return{value:l,rest:f}}}function rt(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function it(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function ot(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var r=n[0],i=a.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;var s=a.slice(r.length);return{value:o,rest:s}}}var st=/^(\d+)(th|st|nd|rd)?/i,ut=/\d+/i,dt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},lt={any:[/^b/i,/^(a|c)/i]},ct={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},mt={any:[/1/i,/2/i,/3/i,/4/i]},ft={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ht={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},gt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},pt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},wt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},bt={ordinalNumber:ot({matchPattern:st,parsePattern:ut,valueCallback:function(a){return parseInt(a,10)}}),era:N({matchPatterns:dt,defaultMatchWidth:"wide",parsePatterns:lt,defaultParseWidth:"any"}),quarter:N({matchPatterns:ct,defaultMatchWidth:"wide",parsePatterns:mt,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:N({matchPatterns:ft,defaultMatchWidth:"wide",parsePatterns:ht,defaultParseWidth:"any"}),day:N({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any"}),dayPeriod:N({matchPatterns:pt,defaultMatchWidth:"any",parsePatterns:wt,defaultParseWidth:"any"})};const yt=bt;var xt={code:"en-US",formatDistance:qe,formatLong:Be,formatRelative:Ge,localize:nt,match:yt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Tt=xt;var Mt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ct=/^'([^]*?)'?$/,St=/''/g,Dt=/[a-zA-Z]/;function Pt(e,a,t){var n,r,i,o,s,d,l,f,m,g,v,w,S,T,D,$,_,E;p(2,arguments);var G=String(a),M=X(),P=(n=(r=t==null?void 0:t.locale)!==null&&r!==void 0?r:M.locale)!==null&&n!==void 0?n:Tt,Y=W((i=(o=(s=(d=t==null?void 0:t.firstWeekContainsDate)!==null&&d!==void 0?d:t==null||(l=t.locale)===null||l===void 0||(f=l.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&s!==void 0?s:M.firstWeekContainsDate)!==null&&o!==void 0?o:(m=M.locale)===null||m===void 0||(g=m.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(Y>=1&&Y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var j=W((v=(w=(S=(T=t==null?void 0:t.weekStartsOn)!==null&&T!==void 0?T:t==null||(D=t.locale)===null||D===void 0||($=D.options)===null||$===void 0?void 0:$.weekStartsOn)!==null&&S!==void 0?S:M.weekStartsOn)!==null&&w!==void 0?w:(_=M.locale)===null||_===void 0||(E=_.options)===null||E===void 0?void 0:E.weekStartsOn)!==null&&v!==void 0?v:0);if(!(j>=0&&j<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var H=x(e);if(!we(H))throw new RangeError("Invalid time value");var ie=ge(H),oe=be(H,ie),se={firstWeekContainsDate:Y,weekStartsOn:j,locale:P,_originalDate:H},ue=G.match(Ot).map(function(b){var O=b[0];if(O==="p"||O==="P"){var q=_e[O];return q(b,P.formatLong)}return b}).join("").match(Mt).map(function(b){if(b==="''")return"'";var O=b[0];if(O==="'")return kt(b);var q=We[O];if(q)return!(t!=null&&t.useAdditionalWeekYearTokens)&&Ne(b)&&ee(b,a,String(e)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Fe(b)&&ee(b,a,String(e)),q(oe,b,P.localize,se);if(O.match(Dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return b}).join("");return ue}function kt(e){var a=e.match(Ct);return a?a[1].replace(St,"'"):e}const Wt=h.ul`
  position: absolute;
  width: 120px;

  left: 0px;
  top: 20px;
  padding: 12px;

  background: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  z-index: 1;
`,$t=h.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xxs};
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${e=>e.theme.colors.black};
`,Ut=h.div`
  position: absolute;
  top: 12px;
  right: 13px;
`,_t=h.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.xxs};
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: auto;

  color: ${e=>e.theme.colors.black};
`,Et=h.li`
  margin-bottom: 4px;
`,Yt=({workDays:e})=>{const a=new Date,t=["MN","TU","WE","TH","FR","SA","SU"],n=["SU","MN","TU","WE","TH","FR","SA"];return c("div",{children:e&&c(Wt,{children:y(Et,{children:[t.map(r=>c($t,{style:{color:n[a.getDay()]===r&&"#f59256"},children:r},r)),c(Ut,{children:e&&e.map((r,i)=>y(_t,{style:{color:Pt(new Date,"i")-1===i&&"#f59256"},children:[r&&r.isOpen?r.from:"",r&&r.isOpen&&"-",r&&r.isOpen?r.to:"Closed"]},r._id))})]})})})},Ft=h.div``,Nt=h.ul`
  position: reletive;
`,Lt=h.img`
  width: 158px;
  height: 112px;

  @media ${e=>e.theme.media.mobileMin} and (max-width: 767px) {
    width: 110px;
    height: 78px;
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    width: 120px;
    height: 85px;
  }
`,Ht=h.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.bold};
  font-size: ${e=>e.theme.fontSizes.xm};
  line-height: 27px;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: ${e=>e.theme.colors.active};
  margin-bottom: 16px;
  @media (max-width: 767px) {
    font-size: ${e=>e.theme.fontSizes.xxs};
    line-height: 16px;

    margin-bottom: 12px;
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,qt=h.a`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.bold};
  font-size: ${e=>e.theme.fontSizes.xm};
  line-height: 27px;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #f59256;
  margin-bottom: 16px;
  @media ${e=>e.theme.media.mobileMin} and (max-width: 767px) {
    font-size: ${e=>e.theme.fontSizes.xxs};
    line-height: 16px;
    margin-bottom: 12px;
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    font-size: ${e=>e.theme.fontSizes.s};
    line-height: 22px;
  }
`,z=h.li`
  margin-bottom: 12px;
  max-width: 206px;
  margin-left: 12px;
  position: relative;
  @media ${e=>e.theme.media.mobileMin} and (max-width: 767px) {
    max-width: 150px;
    margin-bottom: 4px;
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    margin-bottom: 4px;
  }
`,zt=h.div`
  display: flex;
`;h.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.s};
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${e=>e.theme.colors.black};

  @media ${e=>e.theme.media.mobileMin} and (max-width: 767px) {
    font-size: ${e=>e.theme.fontSizes.xs};
    line-height: 19px;
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    font-size: ${e=>e.theme.fontSizes.xxs};
    line-height: 16px;
  }
`;const I=h.a`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${e=>e.theme.fontWeights.semiBold};
  font-size: ${e=>e.theme.fontSizes.s};
  line-height: 20px;
  display: flex;
  align-items: center;
  text-decoration-line: none;
  color: ${e=>e.theme.colors.black};


  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    font-size: ${e=>e.theme.fontSizes.xs};
    line-height: 19px;
  }
`,It=({data:e})=>{const{title:a,url:t,addressUrl:n,imageUrl:r,address:i,workDays:o,phone:s,email:d}=e,[l,f]=L.useState(!1),m=()=>{f(!0)},g=()=>{f(!1)},[v,w]=L.useState(!1),S=()=>{w(!0)},T=()=>{w(!1)},[D,$]=L.useState(!1),_=()=>{$(!0)},E=()=>{$(!1)},[G,M]=L.useState(!1),P=()=>{M(!0)},Y=()=>{M(!1)};return y(Ft,{children:[c(Ht,{children:c(qt,{href:t,target:"_blank",children:a})}),y(zt,{children:[c("a",{href:t,target:"_blank",children:c(Lt,{src:r??"https://animals-city.org/wp-content/themes/animals-city/img/logo.svg",alt:a})}),y(Nt,{children:[c(z,{children:y(I,{onMouseOver:m,onMouseOut:g,style:{color:o&&l&&"#f59256"},children:["Time: ",c("br",{}),o&&(o[0].from||o[6].from)?o[0].from||o[6].from:"--------","-",o&&(o[0].to||o[6].to)?o[0].to||o[6].to:"--------",l&&c(Yt,{workDays:o})]})}),c(z,{children:y(I,{href:i&&n,target:"_blank",onMouseOver:S,onMouseOut:T,style:{color:i&&v&&"#f59256"},children:["Address: ",c("br",{})," ",i||"-----------------"]})}),c(z,{children:y(I,{href:d&&`mailto:${d}`,onMouseOver:_,onMouseOut:E,style:{color:d&&D&&"#f59256"},children:["Email: ",c("br",{}),d||"-----------------"]})}),c(z,{children:y(I,{href:s&&`tel:${s}`,onMouseOver:P,onMouseOut:Y,style:{color:s&&G&&"#f59256"},children:["Phone: ",c("br",{}),s||"-----------------"," "]})})]})]})]})},Rt=h.ul`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -16px;
  display: flex;
  flex-wrap: wrap;
`,At=h.li`
  border-radius: 40px;
  background: ${e=>e.theme.colors.white};
  margin: 16px;
  padding: 16px 4px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;

  width: calc(33.3333333333% - 32px);
  @media (min-width: 280px) and (max-width: 767px) {
    width: 100%;
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    width: calc(50% - 32px);
  }
`,Bt=h.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  @media ${e=>e.theme.media.mobileMin} and (max-width: 767px) {
    max-width: 320px;
  }
  @media ${e=>e.theme.media.tablet} and (max-width: 1279px) {
    width: 768px;
  }
`,Qt=e=>{var a,t;return(t=(a=e==null?void 0:e.friends)==null?void 0:a.friendsList[0])==null?void 0:t.sponsors},Xt=()=>{const e=de(Qt),a=le();if(L.useEffect(()=>{a(ce())},[]),!!e)return console.log(e),c(Bt,{children:c(Rt,{children:e.map(t=>c(At,{children:c(It,{data:t})},t._id))})})},jt=()=>y(te,{children:[c(fe,{title:"Our friends"}),c(Xt,{})]});export{jt as default};
