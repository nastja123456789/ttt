<template>
  <div class="build">
    <div class="map">
      <div class="cab-search">
        <div id="cab-search-form">

          <input
              type="text"
              id="cab-num"
              class="form-control"
              v-model="value"
              placeholder="Что вы ищите?"
          />
        </div>
        <div class="nav-keyboard">
          <KeyBoard @pressed="value = $event" :selfValue="value"></KeyBoard>
        </div>
      </div>
      <div class="floor-change">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group-vertical btn-group-toggle mr-4" role="group" aria-label="First group">
            <button v-on:click="move=!move" class="btn btn-secondary floor-num btn-lg "></button>
            <button v-on:click="showSelect('9a')" value="9a" class="btn btn-secondary floor-num btn-lg ">9a</button>
            <button v-on:click="showSelect('8a')" value="8a" class="btn btn-secondary floor-num btn-lg">8a</button>
            <button v-on:click="showSelect('7a')" value="7a" class="btn btn-secondary floor-num btn-lg">7a</button>
            <div class="btn-group" role="group">

              <button v-on:click="showSelect('6')" value="6" class="btn btn-secondary floor-num btn-lg">6</button>
              <button v-on:click="showSelect('6a')" value="6a" class="btn btn-secondary floor-num btn-lg">6a</button>

            </div>
            <div class="btn-group" role="group">
              <button v-on:click="showSelect('5')" value="5" class="btn btn-secondary floor-num btn-lg">5</button>
              <button v-on:click="showSelect('5a')" value="5a" class="btn btn-secondary floor-num btn-lg">5a</button>
            </div>

            <div class="btn-group" role="group">
              <button v-on:click="showSelect('4')" value="4" class="btn btn-secondary floor-num btn-lg">4</button>
              <button v-on:click="showSelect('4a')" value="4a" class="btn btn-secondary floor-num btn-lg">4a</button>
            </div>
            <div class="btn-group" role="group">
              <button v-on:click="showSelect('3')" value="3" class="btn btn-secondary floor-num btn-lg">3</button>
              <button v-on:click="showSelect('3a')" value="3a" class="btn btn-secondary floor-num btn-lg">3a</button>
            </div>
            <div class="btn-group" role="group">
              <button v-on:click="showSelect('2')" value="2" class="btn btn-secondary floor-num btn-lg">2</button>
              <button v-on:click="showSelect('2a')" value="2a" class="btn btn-secondary floor-num btn-lg">2a</button>
            </div>
            <button v-on:click="showSelect('1')" value="1" class="btn btn-secondary floor-num btn-lg">1</button>
            <button v-on:click="showSelect('0')" value="0" class="btn btn-secondary floor-num btn-lg">0</button>
          </div>

        </div>
      </div>


      <button type="button"  class="but1" >Домой </button>
      <button type="button" id="stop-animation" class="btn btn-outline-dark btn-lg">Остановить</button>

      <div class="section" id="section3">

        <div class="floor-change">
          <div id="news-slider">
            <PathFinder v-bind:homeDot="homeDot"  v-bind:destDot="destDot"> </PathFinder>
            <p>{{value}}</p>

            <svg v-if="showState['0']"  xmlns:dc="http://purl.org/dc/elements/1.1/"
                 xmlns:cc="http://creativecommons.org/ns#"
                 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:svg="http://www.w3.org/2000/svg"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                 xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                 width="1602.0731"
                 height="1490"
                 viewBox="0 0 1602.0731 1490"
                 version="1.1"
                 id="svg8"
                 inkscape:version="0.92.4 (5da689c313, 2019-01-14)"
                 sodipodi:docname="floor0.svg">
              <defs
                  id="defs2">
                <symbol
                    id="Coffeeshop">
                  <title
                      id="title1080">Coffeeshop</title>
                  <g
                      id="g1086"
                      style="fill-rule:evenodd;stroke:none">
                    <path
                        id="path1082"
                        d="m 20,45 a 5,5 0 0 0 5,5 h 22 a 5,5 0 0 0 5,-5 v -1 h 1 A 10,10 0 0 0 53,24 H 20 Z M 52,28 v 12 h 1 a 6,6 0 0 0 0,-12 z"
                        inkscape:connector-curvature="0" />
                    <path
                        id="path1084"
                        d="m 8,52 a 6,6 0 0 0 6,6 h 44 a 6,6 0 0 0 6,-6 z"
                        inkscape:connector-curvature="0" />
                  </g>
                </symbol>
                <symbol
                    id="FirstAid">
                  <title
                      id="title364">First Aid</title>
                  <path
                      id="path366"
                      style="stroke:none"
                      d="M 44,13 V 28 H 59 V 44 H 44 V 59 H 28 V 44 H 13 V 28 H 28 V 13 Z"
                      inkscape:connector-curvature="0" />
                </symbol>
                <symbol
                    id="FirstAid_Inv">
                  <title
                      id="title374">First Aid</title>
                  <rect
                      id="rect376"
                      style="stroke:#ffffff"
                      ry="6"
                      height="71"
                      width="71"
                      y="0.5"
                      x="0.5" />
                  <path
                      id="path378"
                      style="fill:#ffffff;stroke:none"
                      d="M 44,13 V 28 H 59 V 44 H 44 V 59 H 28 V 44 H 13 V 28 H 28 V 13 Z"
                      inkscape:connector-curvature="0" />
                </symbol>
                <symbol
                    id="CoatCheck">
                  <title
                      id="title260">Coat Check</title>
                  <path
                      inkscape:connector-curvature="0"
                      d="m 9.525,8.2020833 6.614583,3.8364587 a 0.92604167,0.92604167 0 0 1 -0.396875,1.719791 H 3.3072917 A 0.92604167,0.92604167 0 0 1 2.9104167,12.038542 L 9.525,8.2020833 v -0.79375 A 1.0583333,1.0583333 0 0 0 8.9958333,6.50875 1.4552083,1.4552083 0 1 1 10.980208,5.2916667"
                      style="fill:none;stroke-width:1.05833328;stroke-linecap:round"
                      id="path262" />
                </symbol>
                <symbol
                    id="Restaurant">
                  <title
                      id="title920">Restaurant</title>
                  <g
                      style="stroke:none"
                      id="g926">
                    <path
                        style="stroke-width:0.26458332"
                        inkscape:connector-curvature="0"
                        d="m 7.9375,7.9375 v 8.73125 a 0.79375,0.79375 0 0 1 -1.5875,0 V 7.9375 A 1.0583333,1.0583333 0 0 1 5.2916667,6.8791667 v -4.7625 a 0.26458333,0.26458333 0 0 1 0.5291666,0 V 5.8208333 H 6.35 V 2.1166667 a 0.26458335,0.26458335 0 0 1 0.5291667,0 V 5.8208333 H 7.4083333 V 2.1166667 a 0.26458335,0.26458335 0 0 1 0.5291667,0 V 5.8208333 H 8.4666667 V 2.1166667 a 0.26458333,0.26458333 0 0 1 0.5291666,0 v 4.7625 A 1.0583333,1.0583333 0 0 1 7.9375,7.9375 Z"
                        id="path922" />
                    <path
                        style="stroke-width:0.26458332"
                        inkscape:connector-curvature="0"
                        d="m 13.229167,16.66875 a 0.79375,0.79375 0 0 1 -1.5875,0 v -5.291667 h -0.79375 V 3.0427083 a 1.190625,1.190625 0 0 1 2.38125,0 z"
                        id="path924" />
                  </g>
                </symbol>
                <symbol
                    id="Campfire">
                  <title
                      id="title2585">Campfire</title>
                  <g
                      style="stroke:none"
                      id="g2599">
                    <path
                        style="stroke-width:0.26458332"
                        inkscape:connector-curvature="0"
                        d="M 3.175,13.361458 H 1.7197917 v 2.778125 c 0,0.926042 0.79375,1.521354 1.7197916,1.521354 H 15.610417 c 0.926041,0 1.719791,-0.595312 1.719791,-1.521354 V 13.361458 H 15.875 V 15.875 c 0,0.264583 -0.264583,0.529167 -0.529167,0.529167 H 3.7041667 C 3.4395833,16.404167 3.175,16.139583 3.175,15.875 Z"
                        id="path2587" />
                    <path
                        style="stroke-width:0.26458332"
                        inkscape:connector-curvature="0"
                        d="M 8.5989583,14.089062 4.7625,15.345833 v -2.116666 l 0.6945312,-0.231511 z"
                        id="path2589" />
                    <path
                        style="stroke-width:0.26458332"
                        inkscape:connector-curvature="0"
                        d="m 14.2875,15.213542 v -2.116667 l -9.525,-3.175 v 2.116667 z"
                        id="path2591" />
                    <path
                        style="stroke-width:0.26458332"
                        inkscape:connector-curvature="0"
                        d="M 10.31875,11.046354 14.2875,9.6903646 V 11.90625 l -0.661458,0.23151 z"
                        id="path2593" />
                    <path
                        style="stroke-width:0.26458332"
                        inkscape:connector-curvature="0"
                        d="M 7.0114583,9.921875 C 6.6145833,9.525 4.4979167,7.0114583 6.746875,4.7625 8.5989583,2.9104167 8.73125,1.5875 8.0697917,0.79375 c 0,0 4.6302083,1.8520833 1.9843753,6.35 C 9.525,7.9375 8.4666667,8.8635417 8.9958333,10.583333 Z"
                        id="path2595" />
                    <path
                        style="stroke-width:0.26458332"
                        inkscape:connector-curvature="0"
                        d="M 9.7895833,10.517187 C 9.6572917,10.186458 9.2604167,9.3927083 10.583333,7.8052083 c 0.79375,-0.9260416 0.926042,-2.1166666 1.058334,-2.6458333 0,0 2.38125,1.3229167 0.06615,4.6963542 z"
                        id="path2597" />
                  </g>
                </symbol>
                <rect
                    x="0"
                    width="128"
                    style="opacity:0.2"
                    height="128"
                    id="SVGID_2_"
                    y="0" />
                <radialGradient
                    id="SVGID_4_"
                    cx="115.8793"
                    cy="66.055901"
                    gradientUnits="userSpaceOnUse"
                    r="28.287399"
                    gradientTransform="matrix(0.26458333,0,0,0.26458333,-15.629556,-298.56125)">
                  <stop
                      offset="1.733897e-03"
                      style="stop-color:#A3A3A3"
                      id="stop291" />
                  <stop
                      offset="0.1847"
                      style="stop-color:#B7B7B7"
                      id="stop293" />
                  <stop
                      offset="0.5159"
                      style="stop-color:#D5D5D5"
                      id="stop295" />
                  <stop
                      offset="0.7993"
                      style="stop-color:#E7E7E7"
                      id="stop297" />
                  <stop
                      offset="1"
                      style="stop-color:#EEEEEE"
                      id="stop299" />
                </radialGradient>
                <radialGradient
                    id="SVGID_3_"
                    cx="15.1709"
                    cy="65.8125"
                    gradientUnits="userSpaceOnUse"
                    r="36.0965"
                    gradientTransform="matrix(0.26458333,0,0,0.26458333,-15.629556,-298.56125)">
                  <stop
                      offset="0"
                      style="stop-color:#A8A8A8"
                      id="stop272" />
                  <stop
                      offset="0.1684"
                      style="stop-color:#BFBFBF"
                      id="stop274" />
                  <stop
                      offset="0.4001"
                      style="stop-color:#D9D9D9"
                      id="stop276" />
                  <stop
                      offset="0.6095"
                      style="stop-color:#E9E9E9"
                      id="stop278" />
                  <stop
                      offset="0.7755"
                      style="stop-color:#EEEEEE"
                      id="stop280" />
                </radialGradient>
              </defs>
              <sodipodi:namedview
                  id="base"
                  pagecolor="#ffffff"
                  bordercolor="#666666"
                  borderopacity="1.0"
                  inkscape:pageopacity="0.0"
                  inkscape:pageshadow="2"
                  inkscape:zoom="4"
                  inkscape:cx="858.04365"
                  inkscape:cy="964.83894"
                  inkscape:document-units="mm"
                  inkscape:current-layer="svg8"
                  showgrid="false"
                  inkscape:snap-grids="false"
                  inkscape:snap-to-guides="true"
                  inkscape:snap-others="true"
                  inkscape:object-nodes="true"
                  inkscape:snap-nodes="true"
                  inkscape:snap-global="false"
                  inkscape:snap-bbox="true"
                  inkscape:window-width="1920"
                  inkscape:window-height="1017"
                  inkscape:window-x="-8"
                  inkscape:window-y="-8"
                  inkscape:window-maximized="1" />
              <filter
                  id="dropShadow"
                  height="1.3">
                <feGaussianBlur
                    in="SourceAlpha"
                    stdDeviation="3"
                    id="feGaussianBlur6" />
                <!-- stdDeviation is how much to blur -->
                <feOffset
                    dx="10"
                    dy="10"
                    result="offsetblur"
                    id="feOffset8" />
                <!-- how much to offset -->
                <feComponentTransfer
                    id="feComponentTransfer12">
                  <feFuncA
                      type="linear"
                      slope="0.5"
                      id="feFuncA10" />
                  <!-- slope is the opacity of the shadow -->
                </feComponentTransfer>
                <feMerge
                    id="feMerge18">
                  <feMergeNode
                      id="feMergeNode14" />
                  <!-- this contains the offset blurred image -->
                  <feMergeNode
                      in="SourceGraphic"
                      id="feMergeNode16" />
                  <!-- this contains the element that the filter is applied to -->
                </feMerge>
              </filter>
              <metadata
                  id="metadata5">
                <rdf:RDF>
                  <cc:Work
                      rdf:about="">
                    <dc:format>image/svg+xml</dc:format>
                    <dc:type
                        rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                    <dc:title />
                  </cc:Work>
                </rdf:RDF>
              </metadata>
              <path
                  d="m 867.34766,521.48242 0.74218,124.64063 c -1.71537,94.50685 -27.45667,156.32249 -55.5,215.00781 l -7.88281,-4.68359 -54.56641,72.02343 -18.61328,17.95703 c -17.15368,15.74371 -34.45891,31.08144 -52.62109,44.11915 l 52.66016,77.68162 -5.41407,45.4492 v 372.0118 h 403.30076 c 42.4009,-92.3636 103.0324,-124.0447 167.3907,-143.3165 l -1.6133,-415.70503 h -0.1914 v 0.004 l -53.252,0.0879 v -64.52735 c 24.6715,-23.83674 44.4525,-50.9453 52.8555,-83.59375 v -0.0254 h 0.014 l -0.3476,-89.69531 c -3e-4,-10e-4 3e-4,-0.003 0,-0.004 -12.9021,-45.68926 -32.5891,-75.14463 -48.8066,-93.23828 v -26.64062 z"
                  id="path120"
                  class="building"
                  inkscape:connector-curvature="0"
                  sodipodi:nodetypes="ccccccccccccccccccccccccc" />
              <path
                  inkscape:connector-curvature="0"
                  id="path80"
                  d="M 96.4082,1.2929 V 419.22339 L 1601.3547,619.30667 V 76.2332 H 942.56489 v 42.5192 H 706.92413 V 1.2929 Z"
                  class="building" />
              <path
                  class="void"
                  sodipodi:nodetypes="cccccccccc"
                  inkscape:connector-curvature="0"
                  id="path672"
                  d="M 430.33249,373.42654 V 195.4098 h 295.26999 l -0.038,-122.7184 V 0 H 0 v 397.28543 c 76.40494,28.77701 221.2421,38.01843 308.91996,50.28931 l -1.43681,-76.15237 z" />
              <g
                  id="eat0-2"
                  class="room">
                <path
                    class="study"
                    d="M 725.56421,373.42654 H 430.33242 V 195.4098 h 295.26999 z"
                    id="path47474"
                    inkscape:connector-curvature="0" />
                <circle
                    id="circle247"
                    r="29.237732"
                    cy="286.67169"
                    cx="576.16956"
                    class="icon"
                    style="stroke:none" />
                <path
                    inkscape:connector-curvature="0"
                    d="m 544.44139,250.80307 c -0.0771,-1.63461 -0.4472,-2.3748 -1.118,-2.3748 -0.7402,0 -1.1103,0.74019 -1.1874,2.3748 l -0.88669,13.06137 c 0,0.74019 -0.4472,1.26451 -1.0409,1.26451 -0.5166,0 -0.9638,-0.51659 -0.9638,-1.26451 l -1.0409,-13.06137 c -0.14649,-1.70399 -0.43949,-2.3748 -1.11029,-2.3748 -0.67081,0 -1.0409,0.67081 -1.1103,2.3748 l -1.0409,13.06137 c -0.14649,0.74019 -0.5937,1.26451 -1.0409,1.26451 -0.4472,0 -0.88669,-0.51659 -1.0409,-1.26451 l -0.80959,-13.06137 c -0.14649,-1.63461 -0.4472,-2.3748 -1.18739,-2.3748 -0.7402,0 -1.04091,0.74019 -1.1874,2.3748 -0.3701,6.45358 -1.1874,12.90715 -1.1874,23.30075 0,2.37478 0.7402,4.30238 2.1512,5.42039 l 2.6755,2.1512 c 0.6708,0.5166 1.11029,1.41098 1.04089,2.89137 l -1.07945,36.78619 c -0.0308,2.13578 1.68857,3.89375 3.82435,3.89375 2.14348,0 3.86289,-1.76569 3.82434,-3.90917 l -1.15655,-36.77077 c -0.0771,-1.48808 0.37009,-2.45188 1.0409,-2.96848 l 2.66779,-2.07409 c 1.41099,-1.11029 2.22829,-3.115 2.22829,-5.42039 -0.008,-10.38588 -0.82501,-16.84717 -1.2645,-23.30075 z"
                    id="path283"
                    class="icon"
                    style="stroke:none" />
                <path
                    inkscape:connector-curvature="0"
                    d="m 619.46332,285.10651 v -33.52469 c 0,-2.81429 -0.8173,-3.57762 -2.43648,-2.51358 -4.11734,2.70632 -8.1036,15.87566 -8.1036,32.00575 0,5.9447 5.8753,5.14282 6.13745,6.9162 l -1.81964,33.55555 c -0.0308,2.13578 1.7117,3.89375 3.84748,3.89375 2.14348,0 3.50822,-1.76569 3.46966,-3.90917 z"
                    id="path302"
                    class="icon"
                    style="stroke:none" />
              </g>
              <g
                  id="eat0-1"
                  class="room">
                <path
                    d="m 1073.9243,374.95054 v -74.1128 h 19.6881 V 72.6914 H 725.56421 v 300.73514 z"
                    id="path656"
                    inkscape:connector-curvature="0"
                    class="study" />
                <circle
                    id="circle247-1"
                    r="29.23773"
                    cy="224.27354"
                    cx="913.32434"
                    class="icon"
                    style="stroke:none" />
                <path
                    inkscape:connector-curvature="0"
                    d="m 881.59615,188.4049 c -0.0771,-1.6346 -0.4472,-2.3748 -1.118,-2.3748 -0.7402,0 -1.1103,0.7402 -1.1874,2.3748 l -0.88669,13.0614 c 0,0.7402 -0.4472,1.2645 -1.0409,1.2645 -0.5166,0 -0.9638,-0.5166 -0.9638,-1.2645 l -1.0409,-13.0614 c -0.14649,-1.704 -0.43949,-2.3748 -1.11029,-2.3748 -0.67081,0 -1.0409,0.6708 -1.1103,2.3748 l -1.0409,13.0614 c -0.14649,0.7402 -0.5937,1.2645 -1.0409,1.2645 -0.4472,0 -0.88669,-0.5166 -1.0409,-1.2645 l -0.80959,-13.0614 c -0.14649,-1.6346 -0.4472,-2.3748 -1.18739,-2.3748 -0.7402,0 -1.04091,0.7402 -1.1874,2.3748 -0.3701,6.4536 -1.1874,12.9072 -1.1874,23.3008 0,2.3747 0.7402,4.3023 2.1512,5.4203 l 2.6755,2.1512 c 0.6708,0.5166 1.11029,1.411 1.04089,2.8914 l -1.07945,36.78622 c -0.0308,2.1358 1.68857,3.8938 3.82435,3.8938 2.14348,0 3.86289,-1.7657 3.82434,-3.9092 l -1.15655,-36.77082 c -0.0771,-1.4881 0.37009,-2.4519 1.0409,-2.9685 l 2.66779,-2.0741 c 1.41099,-1.1103 2.22829,-3.115 2.22829,-5.4203 -0.008,-10.3859 -0.82501,-16.8472 -1.2645,-23.3008 z"
                    id="path283-7"
                    class="icon"
                    style="stroke:none" />
                <path
                    inkscape:connector-curvature="0"
                    d="M 956.61808,222.70832 V 189.1836 c 0,-2.8142 -0.8173,-3.5776 -2.43648,-2.5135 -4.11734,2.7063 -8.1036,15.8756 -8.1036,32.0057 0,5.94472 5.8753,5.14282 6.13746,6.91622 l -1.81965,33.5556 c -0.0308,2.1358 1.7117,3.8937 3.84748,3.8937 2.14348,0 3.50822,-1.7657 3.46967,-3.9091 z"
                    id="path302-9"
                    class="icon"
                    style="stroke:none" />
              </g>
              <path
                  class="void"
                  sodipodi:nodetypes="ccccccccc"
                  inkscape:connector-curvature="0"
                  id="path670"
                  d="m 1073.9244,370.01083 v -72.90159 h 19.688 V 72.6914 h 508.4608 v 550.37293 l -300.299,-43.47829 4.3105,-210.219 z" />
              <path
                  class="void"
                  sodipodi:nodetypes="ccccc"
                  inkscape:connector-curvature="0"
                  id="path664"
                  d="m 536.29925,415.60511 v 62.03425 l -46.70026,-5.91508 v -56.13385 z" />
              <g
                  id="tlt0"
                  class="room">
                <path
                    d="m 536.29918,477.63936 v -62.03425 h 135.78106 v 18.31967 h 76.8708 l 0.17981,72.1284 z"
                    id="path662"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="ccccccc"
                    class="toilet" />
                <path
                    inkscape:connector-curvature="0"
                    d="m 616.75162,478.94516 v -21.70995 h -4.342 v -15.92069 c 0,-3.18412 2.6052,-5.78938 5.78934,-5.78938 h 8.684 c 3.18414,0 5.78934,2.60526 5.78934,5.78938 v 15.92069 h -4.342 v 21.70995 z m 36.18335,0 v -17.36801 h 8.684 l -7.35246,-22.0863 c -0.81047,-2.37365 -3.01044,-3.96571 -5.49986,-3.96571 h -0.34736 c -2.48942,0 -4.71831,1.59206 -5.49987,3.96571 l -7.35246,22.0863 h 8.68401 v 17.36801 z m -30.39401,-46.31465 c 3.21308,0 5.78934,-2.57626 5.78934,-5.78937 0,-3.213 -2.57626,-5.78926 -5.78934,-5.78926 -3.21309,0 -5.78934,2.57626 -5.78934,5.78926 0,3.21311 2.57625,5.78937 5.78934,5.78937 z m 26.05201,0 c 3.21307,0 5.78934,-2.57626 5.78934,-5.78937 0,-3.213 -2.57627,-5.78926 -5.78934,-5.78926 -3.21309,0 -5.78934,2.57626 -5.78934,5.78926 0,3.21311 2.57625,5.78937 5.78934,5.78937 z"
                    id="path1043"
                    class="icon" />
              </g>
              <path
                  class="void"
                  sodipodi:nodetypes="ccccc"
                  inkscape:connector-curvature="0"
                  id="path668"
                  d="m 748.9511,433.92478 h 120.69432 l 0.19197,88.28956 -120.70667,-16.16116 z" />
              <g
                  id="lft0"
                  class="room">
                <path
                    d="M 1012.7902,434.6432 V 542.04677 L 912.93006,530.01326 912.75025,434.6432 Z"
                    id="path666"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="ccccc"
                    class="stair" />
                <path
                    id="path4927"
                    d="m 947.3493,453.11754 12.43813,12.43795 h -9.32851 v 12.43795 h -6.21904 v -12.43795 h -9.32848 l 12.4379,-12.43795 m 31.09508,24.8759 -12.43809,-12.43795 h 9.32855 v -12.43795 h 6.219 v 12.43795 h 9.32851 l -12.43797,12.43795 m -31.09508,6.21903 h 31.09508 a 6.2189944,6.2189944 0 0 1 6.21893,6.21904 v 18.65698 a 6.2189944,6.2189944 0 0 1 -6.21893,6.21891 H 947.3493 a 6.2189944,6.2189944 0 0 1 -6.21889,-6.21891 v -18.65698 a 6.2189944,6.2189944 0 0 1 6.21889,-6.21904 m 0,6.21904 v 18.65698 h 31.09508 v -18.65698 z"
                    inkscape:connector-curvature="0"
                    class="icon" />
              </g>
              <g
                  id="gar0"
                  class="room">
                <path
                    d="m 1072.7813,656.63577 c 26.5713,-15.68553 56.4833,-22.01716 96.5198,0 56.6835,44.7088 49.3694,114.30834 0,150.87559 -34.4708,19.5884 -67.1279,21.04077 -97.5358,0 l -20.8279,35.0519 v 55.37184 h 137.1596 c 151.5634,-75.61538 126.7651,-223.22677 57.4038,-302.25917 v -26.73342 l -194.5634,-22.85994 v 78.04129 z"
                    id="path630"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="cccccccccccc"
                    class="study" />
                <path
                    inkscape:connector-curvature="0"
                    d="m 1283.2278,745.98841 h -0.037 c 2.7555,1.57979 4.5925,4.55568 4.5925,7.9357 a 9.184833,9.184833 0 0 1 -9.1849,9.18483 h -55.109 a 9.184833,9.184833 0 0 1 -9.1848,-9.18483 c 0,-3.38002 1.837,-6.35591 4.5924,-7.9357 h -0.037 l 28.5097,-16.45922 c 0,0 0,-3.15958 3.6739,-6.83352 3.674,0 7.3479,-3.30654 7.3479,-7.34786 a 7.3478664,7.3478664 0 0 0 -7.3479,-7.34787 7.3478664,7.3478664 0 0 0 -7.3478,7.34787 h -7.3479 a 14.695733,14.695733 0 0 1 14.6957,-14.69573 14.695733,14.695733 0 0 1 14.6958,14.69573 c 0,6.83351 -4.6659,12.56485 -11.0218,14.21812 l 28.5097,16.42248 m -59.7382,9.77266 v 0 h 55.109 v 0 c 0.6246,0 1.2492,-0.33065 1.5798,-0.91848 0.5144,-0.91848 0.2572,-1.98392 -0.6613,-2.49827 l -28.473,-16.45923 -28.473,16.45923 c -0.9184,0.51435 -1.1756,1.57979 -0.6613,2.49827 0.3307,0.58783 0.9553,0.91848 1.5798,0.91848 z"
                    id="path148"
                    class="icon"
                    style="stroke:none" />
              </g>
              <path
                  class="void"
                  sodipodi:nodetypes="ccccccc"
                  inkscape:connector-curvature="0"
                  id="path632"
                  d="m 1241.7862,926.75986 -1.4368,57.83273 c -0.6802,14.52642 -7.4621,22.95101 -20.1158,25.50391 l -135.4218,0.3592 c -12.3385,-2.2975 -27.9377,-15.83534 -33.7658,-33.40645 v -50.10966 z" />
              <g
                  id="str0-up"
                  class="room">
                <path
                    d="m 925.62026,745.56211 7.11203,-41.14789 -30.73402,-48.25987 -33.78182,-3.30199 -2.54002,36.0679 -3.81002,28.44792 -12.69997,53.84786 -16.76393,47.75187 -19.81196,42.1639 27.4319,17.27195 24.89199,-51.81588 14.73197,-43.17988 11.17599,-41.14789 4.06396,-18.79594 c 13.24014,1.37497 22.89903,9.91244 30.7339,22.09794 z"
                    id="path596"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="ccccccccccccccc"
                    class="stair" />
                <path
                    id="path4900"
                    d="m 897.34057,680.40697 v 7.65932 h -7.65931 v 7.65932 h -7.6594 v 7.6594 h -7.65932 v 5.74451 h 13.40384 v -7.6594 h 7.65939 v -7.65932 h 7.65932 v -7.65932 h 7.65932 v -5.74451 z"
                    inkscape:connector-curvature="0"
                    class="icon" />
              </g>
              <path
                  class="void"
                  sodipodi:nodetypes="cccccc"
                  inkscape:connector-curvature="0"
                  id="path626"
                  d="m 743.90247,935.99467 34.84325,34.12486 c 33.12418,19.51652 60.86875,8.8603 82.97732,-33.40643 l 20.11573,-32.32886 -77.13142,-47.93761 z" />
              <path
                  class="void"
                  sodipodi:nodetypes="cccccccc"
                  inkscape:connector-curvature="0"
                  id="path622"
                  d="m 678.90556,990.54618 c 18.44836,-13.18005 35.63995,-28.11957 52.40475,-43.65663 l 35.24236,37.19091 c 6.10941,11.69549 10.77631,24.02214 11.49473,38.07614 l -0.71846,38.0763 -34.48406,0.7183 -11.49473,6.4658 z" />
              <rect
                  class="void"
                  y="1347.5139"
                  x="726.83429"
                  height="68.579811"
                  width="141.73155"
                  id="rect604" />
              <rect
                  class="void"
                  y="1426.7616"
                  x="935.62177"
                  height="58.8792"
                  width="145.28755"
                  id="rect610"
                  style="stroke-width:0.96491838" />
              <rect
                  class="void"
                  y="1282.49"
                  x="935.62177"
                  height="67.055779"
                  width="145.28763"
                  id="rect612" />
              <rect
                  class="void"
                  y="1138.2184"
                  x="1080.8478"
                  height="218.15575"
                  width="72.213776"
                  id="rect616" />
              <rect
                  class="void"
                  y="1124.325"
                  x="1227.777"
                  height="164.51784"
                  width="68.968178"
                  id="rect618" />
              <g
                  id="lft0-a"
                  class="room">
                <path
                    d="m 935.62169,1282.4901 v -107.1878 l 38.09987,-37.0839 h 107.12614 l 0.062,144.2717 z"
                    id="path614"
                    inkscape:connector-curvature="0"
                    sodipodi:nodetypes="cccccc"
                    class="stair" />
                <path
                    id="path4927-5"
                    d="m 995.98565,1180.1587 12.43815,12.4379 h -9.32853 v 12.438 h -6.21905 v -12.438 h -9.32847 l 12.4379,-12.4379 m 31.09505,24.8759 -12.4381,-12.438 h 9.3286 v -12.4379 h 6.219 v 12.4379 h 9.3285 l -12.438,12.438 m -31.09505,6.219 h 31.09505 a 6.2189944,6.2189944 0 0 1 6.219,6.2191 v 18.657 a 6.2189944,6.2189944 0 0 1 -6.219,6.2189 h -31.09505 a 6.2189944,6.2189944 0 0 1 -6.21889,-6.2189 v -18.657 a 6.2189944,6.2189944 0 0 1 6.21889,-6.2191 m 0,6.2191 v 18.657 h 31.09505 v -18.657 z"
                    inkscape:connector-curvature="0"
                    class="icon" />
              </g>
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="391.95453"
                  cx="565.65973"
                  id="dot0-1"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="390.7218"
                  cx="633.69543"
                  id="dot0-2"
                  class="dot" />
              <rect
                  class="void"
                  y="1416.0938"
                  x="726.83429"
                  height="69.548531"
                  width="141.7316"
                  id="rect600"
                  style="stroke-width:0.98889166" />
              <g
                  id="act0"
                  class="room">
                <rect
                    id="rect606"
                    width="141.73152"
                    height="103.21305"
                    x="726.83423"
                    y="1244.3009"
                    class="study" />
                <path
                    id="path1063"
                    d="m 823.31448,1285.4639 c -5.22442,-0.9316 -10.1701,-3.4019 -14.10942,-7.3351 -3.9351,-3.9372 -6.4027,-8.8801 -7.33096,-14.1057 5.28982,-3.314 12.95823,-2.1402 18.26963,3.1695 5.3079,5.3096 6.48094,12.9793 3.17075,18.2713 z m -3.65026,3.651 c -5.01766,-1.4023 -9.72133,-4.0041 -13.58314,-7.862 -3.85759,-3.8618 -6.45996,-8.5654 -7.85534,-13.581 -3.30946,5.292 -2.13584,12.9578 3.16958,18.2672 5.31154,5.3073 12.97499,6.483 18.2689,3.1758 z m -21.00925,23.5168 c -6.59939,0 -11.31793,4.1242 -15.48149,7.7616 -4.59993,4.0216 -8.58705,7.5085 -14.45313,5.7005 -1.16066,-0.8547 -1.19504,-1.5532 -1.20801,-1.7904 -0.0822,-1.5884 1.84225,-3.7196 2.78741,-4.5051 0.11656,-0.095 0.18286,-0.2244 0.27407,-0.3406 1.54895,0.5392 3.32854,0.2277 4.56948,-1.0099 l 30.04914,-24.7357 c -2.48537,-1.055 -4.85375,-2.5823 -6.91819,-4.6495 -2.06779,-2.0669 -3.59051,-4.4379 -4.64378,-6.9186 l -24.73324,30.0519 c -1.10033,1.1002 -1.41957,2.6228 -1.11971,4.0378 -0.0928,0.056 -0.19655,0.082 -0.28281,0.1517 -0.47266,0.3883 -4.60183,3.9006 -4.39683,8.1246 0.0734,1.4851 0.72079,3.6291 3.40242,5.4243 l 0.52875,0.2583 c 1.71972,0.574 3.32243,0.8241 4.82868,0.8241 5.87687,0 10.26087,-3.831 14.22424,-7.2963 3.92432,-3.4306 7.63271,-6.6707 12.57314,-6.6707 11.38788,0 20.2028,12.2026 20.29314,12.3229 0.70315,1.0057 2.08906,1.2295 3.07706,0.523 0.99689,-0.7039 1.22943,-2.0808 0.52628,-3.0764 -0.41015,-0.5787 -10.209,-14.1875 -23.89662,-14.1875 z"
                    inkscape:connector-curvature="0"
                    class="icon"
                    style="stroke:none" />
              </g>
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="394.09979"
                  cx="701.73114"
                  id="dot0-3"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="396.11615"
                  cx="766.7431"
                  id="dot0-4"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="396.24518"
                  cx="828.58105"
                  id="dot0-5"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="398.03613"
                  cx="892.00598"
                  id="dot0-6-1"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="399.7522"
                  cx="952.48212"
                  id="dot0-7"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="404.19171"
                  cx="1006.6105"
                  id="dot0-8"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="408.33099"
                  cx="1059.377"
                  id="dot0-9"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="562.78107"
                  cx="1029.9529"
                  id="dot0-12"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="619.85815"
                  cx="1022.5646"
                  id="dot0-13"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="677.38556"
                  cx="1022.5857"
                  id="dot0-14"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="626.60254"
                  cx="976.15656"
                  id="dot0-6-8"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="660.26086"
                  cx="929.52319"
                  id="dot0-6-6"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="733.17596"
                  cx="1020.9448"
                  id="dot0-15"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="797.96265"
                  cx="1013.2562"
                  id="dot0-16"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="859.20001"
                  cx="993.39734"
                  id="dot0-17"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="921.19873"
                  cx="969.30304"
                  id="dot0-18"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="982.06085"
                  cx="949.36908"
                  id="dot0-19"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="1039.749"
                  cx="923.46259"
                  id="dot0-20"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="1092.4509"
                  cx="902.39215"
                  id="dot0-21"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="1133.7872"
                  cx="937.93768"
                  id="dot0-27"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="1146.5792"
                  cx="876.78589"
                  id="dot0-22"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="1201.7043"
                  cx="836.81134"
                  id="dot0-28"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="1204.4821"
                  cx="899.4856"
                  id="dot0-23"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="1269.7191"
                  cx="903.74213"
                  id="dot0-24"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="1331.8573"
                  cx="905.35022"
                  id="dot0-25"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="1390.9718"
                  cx="905.22119"
                  id="dot0-26"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="456.48694"
                  cx="1047.5281"
                  id="dot0-10"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="505.77924"
                  cx="1038.853"
                  id="dot0-11"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="454.27704"
                  cx="893.68909"
                  id="dot0-6-2"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="508.78076"
                  cx="892.04816"
                  id="dot0-6-3"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="566.53326"
                  cx="899.55371"
                  id="dot0-6-4"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="588.44006"
                  cx="944.99652"
                  id="dot0-6-7"
                  class="dot" />
              <circle
                  r="10.057859"
                  inkscape:label="#path76-01-76-073"
                  cy="616.87653"
                  cx="906.14789"
                  id="dot0-6-5"
                  class="dot" />
              <g
                  id="tlt0-a"
                  class="room">
                <rect
                    id="rect608"
                    width="145.28761"
                    height="77.215782"
                    x="935.6217"
                    y="1349.5459"
                    class="toilet" />
                <path
                    class="icon"
                    id="path1043-8"
                    d="m 989.6897,1416.8931 v -21.71 h -4.342 v -15.9207 c 0,-3.1841 2.6052,-5.7893 5.78934,-5.7893 h 8.684 c 3.18416,0 5.78936,2.6052 5.78936,5.7893 v 15.9207 h -4.342 v 21.71 z m 36.1834,0 v -17.368 h 8.684 l -7.3525,-22.0863 c -0.8105,-2.3737 -3.0104,-3.9657 -5.4999,-3.9657 h -0.3473 c -2.4894,0 -4.7183,1.592 -5.4999,3.9657 l -7.3524,22.0863 h 8.684 v 17.368 z m -30.39406,-46.3147 c 3.21308,0 5.78936,-2.5762 5.78936,-5.7893 0,-3.213 -2.57628,-5.7893 -5.78936,-5.7893 -3.21309,0 -5.78934,2.5763 -5.78934,5.7893 0,3.2131 2.57625,5.7893 5.78934,5.7893 z m 26.05206,0 c 3.213,0 5.7893,-2.5762 5.7893,-5.7893 0,-3.213 -2.5763,-5.7893 -5.7893,-5.7893 -3.2131,0 -5.7894,2.5763 -5.7894,5.7893 0,3.2131 2.5763,5.7893 5.7894,5.7893 z"
                    inkscape:connector-curvature="0" />
              </g>
              <path
                  id="here"
                  d="m -14.471012,1408.2702 a 27.066928,27.066928 0 0 0 -12.96905,13.1445 31.958542,31.958542 0 0 0 2.88479,33.263 l 24.90951006,35.7465 24.88462994,-35.7465 a 30.930049,30.930049 0 0 0 6.14586,-18.6885 c 0,-21.9748 -22.5767696,-38.5307 -45.85574,-27.719 z m 15.25172006,38.1294 A 11.313424,11.313424 0 1 1 12.069098,1435.0861 11.313424,11.313424 0 0 1 0.78070806,1446.3996 Z"
                  inkscape:connector-curvature="0"
                  style="fill:#ffa500;stroke-width:0.91964149" />
            </svg>
            <svg v-if="move" xmlns:dc="http://purl.org/dc/elements/1.1/"
                 xmlns:cc="http://creativecommons.org/ns#"
                 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                 xmlns:svg="http://www.w3.org/2000/svg"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                 xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                 width="1602.0731" height="1490" viewBox="0 0 1602.0731 1490" version="1.1" id="svg">
              <path id="here" d="m -14.471012,1408.2702 a 27.066928,27.066928 0 0 0 -12.96905,13.1445 31.958542,31.958542 0 0 0 2.88479,33.263 l 24.90951006,35.7465 24.88462994,-35.7465 a 30.930049,30.930049 0 0 0 6.14586,-18.6885 c 0,-21.9748 -22.5767696,-38.5307 -45.85574,-27.719 z m 15.25172006,38.1294 A 11.313424,11.313424 0 1 1 12.069098,1435.0861 11.313424,11.313424 0 0 1 0.78070806,1446.3996 Z" style="fill:#ffa500;stroke-width:0.91964149"/>
            </svg>

            <svg v-if="showState['1']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="2336" height="1651" viewBox="0 0 2336 1651">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6">
                <symbol id="Coffeeshop">
                  <title id="title1080">Coffeeshop</title>
                  <g style="stroke:none;fill-rule:evenodd" id="g1086">
                    <path d="m 20,45 a 5,5 0 0 0 5,5 l 22,0 a 5,5 0 0 0 5,-5 l 0,-1 1,0 a 10,10 0 0 0 0,-20 l -33,0 z M 52,28 l 0,12 1,0 a 6,6 0 0 0 0,-12 z" id="path1082"/>
                    <path d="m 8,52 a 6,6 0 0 0 6,6 l 44,0 a 6,6 0 0 0 6,-6 z" id="path1084"/>
                  </g>
                </symbol>
                <symbol id="FirstAid">
                  <title id="title364">First Aid</title>
                  <path d="m 44,13 0,15 15,0 0,16 -15,0 0,15 -16,0 0,-15 -15,0 0,-16 15,0 0,-15 z" style="stroke:none" id="path366"/>
                </symbol>
                <symbol id="FirstAid_Inv">
                  <title id="title374">First Aid</title>
                  <rect x="0.5" y="0.5" width="71" height="71" ry="6" style="stroke:white" id="rect376"/>
                  <path d="m 44,13 0,15 15,0 0,16 -15,0 0,15 -16,0 0,-15 -15,0 0,-16 15,0 0,-15 z" style="fill:white;stroke:none" id="path378"/>
                </symbol>
              </defs>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur6"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset8"/>

                <feComponentTransfer id="feComponentTransfer12">
                  <feFuncA type="linear" slope="0.5" id="feFuncA10"/>

                </feComponentTransfer>
                <feMerge id="feMerge18">
                  <feMergeNode id="feMergeNode14"/>

                  <feMergeNode id="feMergeNode16"/>

                </feMerge>
              </filter>
              <path d="m 2123,218.99998 h -706 v -77 H 158.0001 c 70.2368,252.3892 221.2525,377.0216 422,423 l 1542.9999,212 z" id="path80" class="building" style="fill:#ffffff"/>
              <g id="str1-left" class="room">
                <path class="stair" id="path4811" d="m 230.0001,141.99998 h -72 c 19.4205,69.1971 45.7633,133.4802 83,192 l 57.7901,-39 c -31.348,-43.6753 -53.8829,-95.658 -68.7901,-153 z"/>
                <path class="icon" id="stairs-46" d="m 231.05266,209.94738 v 10.52631 H 220.52624 V 231 H 210 v 10.52631 h -10.52634 v 7.89473 h 18.421 V 238.89473 H 228.421 v -10.5263 h 10.52624 v -10.52632 h 10.52642 v -7.89473 z"/>
              </g>
              <g id="cab101" class="room">
                <path class="study" id="path117" d="m 382.0001,141.99998 v 201 h -48 c -49.4503,-61.2068 -85.1629,-127.7969 -104,-201 z"/>
                <text xml:space="preserve" x="287" y="250" id="text250" class="cab-num"><tspan id="tspan248" x="287" y="250">101</tspan></text>
              </g>
              <g id="cab102" class="room">
                <path class="study" id="path115" d="m 528.0001,141.99998 v 201 h -146 v -201 z"/>
                <text class="cab-num" id="text250-6" y="250" x="418.23047" xml:space="preserve"><tspan y="250" x="418.23047" id="tspan248-9">102</tspan></text>
              </g>
              <g id="cab103" class="room">
                <path class="study" id="path113" d="m 671.0001,141.99998 v 186 h -143 v -186 z"/>
                <text xml:space="preserve" x="563.40039" y="250" id="text250-6-1" class="cab-num"><tspan id="tspan248-9-3" x="563.40039" y="250">103</tspan></text>
              </g>
              <g id="cab104" class="room">
                <path class="study" id="path111" d="m 817.0001,141.99998 v 186 h -146 v -186 z"/>
                <text xml:space="preserve" x="707.90039" y="250" id="text250-6-12" class="cab-num"><tspan id="tspan248-9-7" x="707.90039" y="250">104</tspan></text>
              </g>
              <g id="cab105" class="room">
                <path class="study" id="path109" d="m 962.0001,141.99998 v 186 h -145 v -186 z"/>
                <text class="cab-num" id="text250-6-12-5" y="250" x="853.38208" xml:space="preserve"><tspan y="250" x="853.38208" id="tspan248-9-7-4">105</tspan></text>
              </g>
              <g id="cab106" class="room">
                <path class="study" id="path107" d="m 1106.0001,141.99998 v 186 h -144 v -186 z"/>
                <text class="cab-num" id="text250-6-12-4" y="250" x="996.68689" xml:space="preserve"><tspan y="250" x="996.68689" id="tspan248-9-7-7">106</tspan></text>
              </g>
              <g id="cab107" class="room">
                <path class="study" id="path105" d="m 1254.0001,141.99998 v 186 h -148 v -186 z"/>
                <text class="cab-num" id="text250-6-12-50" y="250" x="1143.058" xml:space="preserve"><tspan y="250" x="1143.058" id="tspan248-9-7-73">107</tspan></text>
              </g>
              <g id="str1-top" class="room">
                <path class="stair" id="path4809" d="m 1417,218.99998 h -162.9999 v -77 H 1417 Z"/>
                <path class="icon" id="stairs-1" d="M 1340,153.36843 V 166 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 v -12.63157 h 12.6315 V 162.8421 h 12.6317 v -9.47367 z"/>
              </g>
              <g id="cof1" class="room">
                <path class="study" id="path150" d="M 1539,219 V 443 H 1322 V 219 Z"/>
                <use id="use4939" xlink:href="#Coffeeshop" x="1392" y="331" width="100%" height="100%" class="icon" transform="translate(0,-41.719299)"/>
              </g>
              <g id="lib1" class="room">
                <path class="study" id="path152" d="m 1539,219 v 184 h 53 v 40 h 238 V 219 Z"/>
                <path id="path241" d="m 1714.5173,315.39376 c -0.4671,-0.62397 -1.1252,-1.10268 -1.9732,-1.43703 0.046,0.78028 -0.017,1.41537 -0.1669,1.90602 l -10.0271,32.98933 c -0.1787,0.57927 -0.5688,1.04158 -1.1698,1.38706 -0.6018,0.3457 -1.2257,0.51839 -1.8719,0.51839 h -30.8503 c -2.6737,0 -4.2779,-0.77876 -4.8128,-2.33966 -0.223,-0.60175 -0.2116,-1.08045 0.033,-1.43705 0.2451,-0.33448 0.6686,-0.502 1.2704,-0.502 h 29.0455 c 2.0724,0 3.5039,-0.38458 4.2952,-1.15338 0.7917,-0.76881 1.588,-2.47923 2.3898,-5.13053 l 9.1582,-30.28263 c 0.4901,-1.64883 0.2897,-3.09735 -0.6019,-4.34487 -0.8915,-1.24751 -2.1614,-1.87162 -3.8103,-1.87162 h -25.4356 c -0.2895,0 -0.858,0.1 -1.7047,0.30065 l 0.033,-0.10068 c -0.624,-0.13336 -1.1531,-0.19458 -1.5879,-0.18395 -0.4342,0.0125 -0.8355,0.13964 -1.203,0.38508 -0.3676,0.24513 -0.6631,0.50667 -0.8858,0.78507 -0.2228,0.27863 -0.4402,0.63521 -0.6517,1.06955 -0.2113,0.43492 -0.3899,0.83612 -0.5348,1.20375 -0.145,0.36757 -0.3121,0.75776 -0.5012,1.17045 -0.1896,0.41221 -0.373,0.75195 -0.5514,1.01922 -0.133,0.1783 -0.3228,0.41222 -0.5682,0.70197 -0.2448,0.28962 -0.4454,0.546 -0.6016,0.7688 -0.1551,0.22279 -0.2563,0.42332 -0.3006,0.60174 -0.046,0.20033 -0.022,0.49557 0.068,0.88577 0.087,0.38962 0.1219,0.67351 0.1,0.85192 -0.087,0.84664 -0.3956,1.92162 -0.9191,3.22556 -0.5233,1.30369 -0.9973,2.24541 -1.4205,2.82442 -0.087,0.1112 -0.3339,0.36201 -0.7352,0.7521 -0.4013,0.38983 -0.6462,0.72933 -0.7351,1.01896 -0.087,0.11134 -0.094,0.42346 -0.017,0.93589 0.078,0.51276 0.1066,0.86901 0.083,1.06954 -0.089,0.7578 -0.3674,1.7604 -0.8356,3.00838 -0.4681,1.24764 -0.9359,2.2728 -1.4041,3.07487 -0.068,0.13349 -0.2558,0.38962 -0.5681,0.76881 -0.3117,0.37895 -0.5014,0.69095 -0.5682,0.9354 -0.046,0.17827 -0.039,0.49028 0.018,0.93586 0.057,0.44557 0.05,0.77969 -0.018,1.00234 -0.178,0.84621 -0.5125,1.86613 -1.0027,3.05849 -0.4902,1.19155 -0.9915,2.21218 -1.5043,3.05802 -0.133,0.22313 -0.3176,0.48527 -0.5513,0.78565 -0.2339,0.30041 -0.4176,0.56253 -0.5515,0.7852 -0.1329,0.2228 -0.2229,0.4567 -0.2673,0.70197 -0.022,0.13377 0.017,0.35097 0.1011,0.6522 0.087,0.30041 0.1233,0.53994 0.1,0.71882 -0.024,0.31164 -0.068,0.7243 -0.1329,1.23708 -0.068,0.51196 -0.1011,0.81235 -0.1011,0.90134 -0.4902,1.3374 -0.4681,2.75246 0.068,4.24603 0.624,1.73712 1.7322,3.20307 3.3255,4.39498 1.5931,1.19236 3.2476,1.78767 4.9635,1.78767 h 30.8506 c 1.4479,0 2.8129,-0.48479 4.0941,-1.45356 1.2813,-0.96946 2.1339,-2.16664 2.5566,-3.5936 l 9.1913,-30.28184 c 0.4908,-1.60481 0.2904,-3.04195 -0.6015,-4.31207 z m -35.5629,0.0668 0.702,-2.13935 c 0.087,-0.28964 0.2726,-0.54031 0.5513,-0.75193 0.2786,-0.21134 0.5628,-0.31752 0.8525,-0.31752 h 20.3223 c 0.3119,0 0.5343,0.10553 0.6682,0.31752 0.1329,0.21176 0.1567,0.46229 0.068,0.75193 l -0.7028,2.13935 c -0.089,0.28975 -0.2722,0.53982 -0.5517,0.75206 -0.2787,0.21134 -0.5624,0.31704 -0.8519,0.31704 h -20.3218 c -0.3119,0 -0.5347,-0.10539 -0.6685,-0.31704 -0.1329,-0.21224 -0.1551,-0.46231 -0.068,-0.75206 z m -2.7741,8.5566 0.702,-2.13901 c 0.087,-0.28962 0.2728,-0.54029 0.5513,-0.75193 0.2786,-0.21179 0.5623,-0.31751 0.8525,-0.31751 h 20.3215 c 0.3121,0 0.5352,0.10538 0.6686,0.31751 0.1329,0.21175 0.1552,0.46231 0.068,0.75193 l -0.7017,2.13901 c -0.087,0.28962 -0.2728,0.54052 -0.5513,0.75195 -0.2789,0.21178 -0.5625,0.31748 -0.8526,0.31748 h -20.3215 c -0.3117,0 -0.5346,-0.10538 -0.6683,-0.31748 -0.133,-0.21143 -0.1551,-0.46233 -0.068,-0.75195 z" style="fill-rule:evenodd;stroke:none" class="icon"/>
              </g>
              <g id="cab110" class="room">
                <path class="study" id="path146" d="M 2123,219 V 396 H 1892.625 L 1893,219 Z"/>
                <text class="cab-num" id="text250-6-12-50-9-9" y="322.45166" x="1974.3428" xml:space="preserve"><tspan y="322.45166" x="1974.3428" id="tspan248-9-7-73-5-0">110</tspan></text>
              </g>
              <g id="cab111" class="room">
                <path class="study" id="path148" d="M 2123,396 V 517 H 1976 V 396 Z"/>
                <text class="cab-num" id="text250-6-12-50-9-2" y="473.56433" x="2011.911" xml:space="preserve"><tspan y="473.56433" x="2011.911" id="tspan248-9-7-73-5-5">111</tspan></text>
              </g>
              <g id="str1-right" class="room">
                <path class="stair" id="path3847" d="m 2122.9308,583.34183 -147.1172,-10e-6 V 517.0762 h 147.169 z"/>
                <path class="icon" id="stairs-4" d="m 2052.6317,525.73686 v 12.63157 H 2040 V 551 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 v -12.63157 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z"/>
              </g>
              <g id="cab112" class="room">
                <path class="study" id="path142" d="M 2122.9308,583.34183 H 1887 v 161.31442 l 236,32.34373 z"/>
                <text class="cab-num" id="text250-6-12-50-9-4" y="686.54352" x="1972.0133" xml:space="preserve"><tspan y="686.54352" x="1972.0133" id="tspan248-9-7-73-5-1">112</tspan></text>
              </g>
              <g id="cab125" class="room">
                <path class="study" id="path119" d="m 357.1017,462.90618 50.8984,-66.9062 h 124 v 156 c -56.728,-17.3228 -115.192,-44.2946 -174.8984,-89.0938 z"/>
                <text xml:space="preserve" x="424.23352" y="470.65311" id="text250-6-5" class="cab-num"><tspan id="tspan248-9-8" x="424.23352" y="470.65311">125</tspan></text>
              </g>
              <g id="cab124" class="room">
                <path class="study" id="path121" d="m 532.0001,395.99998 h 146 v 182.4375 l -98,-13.4375 c -16.2126,-3.9638 -32.5313,-7.7431 -48,-13 z"/>
                <text xml:space="preserve" x="565.40747" y="469.19601" id="text250-6-3" class="cab-num"><tspan id="tspan248-9-74" x="565.40747" y="469.19601">124</tspan></text>
              </g>
              <g id="cab123" class="room">
                <path class="study" id="path127" d="M 678.0001,395.99998 H 810 v 201 l -131.9999,-18.5625 z"/>
                <text xml:space="preserve" x="708.49243" y="470.25668" id="text250-6-2" class="cab-num"><tspan id="tspan248-9-9" x="708.49243" y="470.25668">123</tspan></text>
              </g>
              <path d="m 810,396 v 63 h 102.1865 v -63 z" id="path131" class="void"/>
              <g id="cab121" class="room">
                <path class="study" id="path129" d="M 810,459 H 965 V 617.76777 L 810,597 Z"/>
                <text xml:space="preserve" x="852.08179" y="544.14929" id="text250-6-4" class="cab-num"><tspan id="tspan248-9-39" x="852.08179" y="544.14929">121</tspan></text>
              </g>
              <g id="tlt1" class="room">
                <path class="toilet" id="path118" d="m 965,459 h 142 v 56 h 91 v 69 h 80 v 77 L 965,617.76777 Z"/>
                <path d="m 1066.4706,602.17646 v -26.47057 h -5.2941 v -19.41176 c 0,-3.88235 3.1765,-7.05882 7.0588,-7.05882 h 10.5883 c 3.8824,0 7.0588,3.17647 7.0588,7.05882 v 19.41176 h -5.2941 v 26.47057 z m 44.1176,0 V 581 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.89412 -3.6706,-4.83529 -6.7059,-4.83529 h -0.4236 c -3.0353,0 -5.7528,1.94117 -6.7058,4.83529 L 1089.4118,581 H 1100 v 21.17646 z m -37.0587,-56.47057 c 3.9175,0 7.0588,-3.14116 7.0588,-7.05882 0,-3.91764 -3.1413,-7.05882 -7.0588,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z m 31.7647,0 c 3.9177,0 7.0587,-3.14116 7.0587,-7.05882 0,-3.91764 -3.141,-7.05882 -7.0587,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z" id="wc" class="icon"/>
              </g>
              <g id="str1-bottom" class="room">
                <path class="stair" id="path141" d="m 1278.0001,583.99992 v 76.84376 L 1394,676.82812 V 584 Z"/>
                <path d="m 1345.7896,606.26318 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 H 1330 V 641 h 12.6316 v -12.63157 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z" id="stairs" class="icon"/>
              </g>
              <g id="lft1" class="room">
                <path class="stair" id="path4805" d="m 1394,584 v 92.82812 l 148.0001,20.17175 v -113 z"/>
                <path d="M 1456.6666,601 1470,614.33334 h -10 v 13.33333 h -6.6667 v -13.33333 h -10 L 1456.6666,601 M 1490,627.66667 1476.6666,614.33334 h 10 V 601 h 6.6667 v 13.33334 h 10 L 1490,627.66667 m -33.3334,6.66667 H 1490 A 6.6666667,6.6666667 0 0 1 1496.6666,641 v 20 A 6.6666667,6.6666667 0 0 1 1490,667.66667 h -33.3334 A 6.6666667,6.6666667 0 0 1 1450,661 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.66666 m 0,6.66666 v 20 H 1490 v -20 z" id="path4958" class="icon"/>
              </g>
              <path d="M 1542.0001,583.99987 1542,697 l 45,6.47691 V 584 Z" id="path138" class="void"/>
              <g id="cab113" class="room">
                <path class="study" id="path140" d="M 1830,736.73437 V 579.125 h -71.875 V 727 Z"/>
                <text class="cab-num" id="text250-6-12-50-9-7" y="662.70471" x="1761.082" xml:space="preserve"><tspan y="662.70471" x="1761.082" id="tspan248-9-7-73-5-79">113</tspan></text>
              </g>
              <path d="M 1830,736.73437 1394,677 v 129 c -1.7524,92.9797 -28.0486,153.7985 -56.6967,211.5355 L 1263,975 c -31.2611,59.0661 -77.4721,97.0735 -128,129 l 27.0568,46.5 11.0043,-6.5536 L 1249,1266 v 366 h 412 c 43.3154,-90.8711 105.2537,-122.0397 171,-141 z" id="path120" class="building" style="fill:#ffffff"/>
              <path d="m 1394,677 148,20 v 32 c -58.5066,35.94581 -60.065,52.61688 -78.5,75 H 1394 Z" id="path126" class="void"/>
              <g id="str1-down" class="room">
                <path class="stair" id="path124" d="M 1337.3033,1017.5355 1406.25,1060.25 1463.5,928 V 804 H 1394 c 0.5056,73.05056 -19.7454,144.09862 -56.6967,213.5355 z"/>
                <path class="icon" id="stairs-16" d="m 1423.158,898.89475 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 V 933.63157 H 1420 V 921 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z"/>
              </g>
              <path d="M 1401.8136,1526 V 1384 H 1249 v 142 z" id="path156" class="void"/>
              <g id="str1-a" class="room">
                <path class="stair" id="path4829" d="m 1401.8136,1526 v 106 h -152.8135 v -106 z"/>
                <path class="icon" id="stairs-6" d="m 1337.2039,1556.2635 v 12.6315 h -12.6318 v 12.6311 h -12.6314 v 12.6318 h -12.6315 v 9.4736 h 22.105 V 1591 h 12.6318 v -12.6311 h 12.6317 v -12.6318 h 12.6315 v -9.4736 z"/>
              </g>
              <g id="lft1-a" class="room">
                <path class="stair" id="path4827" d="m 1612,1459 h -141 v -110 l 37,-37 h 104 z"/>
                <path class="icon" id="lift-0" d="m 1526.2328,1352.6978 13.3334,13.3334 h -10 v 13.3333 h -6.6667 v -13.3333 h -10 l 13.3333,-13.3334 m 33.3334,26.6667 -13.3334,-13.3333 h 10 v -13.3334 h 6.6667 v 13.3334 h 10 l -13.3333,13.3333 m -33.3334,6.6667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.6666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.6667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.6667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.6666 m 0,6.6666 v 20 h 33.3334 v -20 z"/>
              </g>
              <g id="tlt1-a" class="room">
                <path class="toilet" id="path4825" d="m 1612,1536 v -77 h -141 v 77 z"/>
                <path class="icon" id="wc-7" d="m 1517.8799,1532.8799 v -26.4706 h -5.2941 v -19.4117 c 0,-3.8824 3.1765,-7.0588 7.0588,-7.0588 h 10.5883 c 3.8824,0 7.0588,3.1764 7.0588,7.0588 v 19.4117 h -5.2941 v 26.4706 z m 44.1176,0 v -21.1765 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.8941 -3.6706,-4.8352 -6.7059,-4.8352 h -0.4236 c -3.0353,0 -5.7528,1.9411 -6.7058,4.8352 l -8.9647,26.9294 h 10.5882 v 21.1765 z m -37.0587,-56.4706 c 3.9175,0 7.0588,-3.1411 7.0588,-7.0588 0,-3.9176 -3.1413,-7.0588 -7.0588,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z m 31.7647,0 c 3.9177,0 7.0587,-3.1411 7.0587,-7.0588 0,-3.9176 -3.141,-7.0588 -7.0587,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z"/>
              </g>
              <g id="med1" class="room">
                <path class="study" id="path158" d="m 1471,1536 v 96 h 141 v -96 z"/>
                <text class="cab-num" id="text250-6-12-50-9-93" y="1573.1398" x="1502.2645" xml:space="preserve"><tspan y="1573.1398" x="1502.2645" id="tspan248-9-7-73-5-11">134</tspan></text>
                <use height="100%" width="100%" y="1567" x="1504" xlink:href="#FirstAid" id="use5031" class="icon"/>
              </g>
              <path d="m 1711,1459 h 49 v -146 h 72 v 178 c -84.3994,22.2916 -139.3819,71.111 -171,141 h -49 v -173 z" id="path44" class="void"/>
              <path d="m 1282.8136,457.0762 h -34 v 10 h 34 z" id="path3849" class="void"/>
              <circle id="path136" cx="1647.375" cy="901.125" r="88" class="void"/>
              <path d="m 1612,1366 h 103 v 93 h -103 z" id="path160" class="void"/>
              <path d="m 1831,1088 h -222 v 152 h 222.4258 z" id="path164" class="void"/>
              <path d="m 1609,1240 v -174 h -47 c -12.623,-0.3872 -22.8874,3.3755 -23,25 v 149 z" id="path166" class="void"/>
              <circle class="dot" id="dot1-28" cx="295.0228" cy="347.18207" r="10"/>
              <circle class="dot" id="dot1-27" cx="348" cy="368.44363" r="10"/>
              <circle class="dot" id="dot1-26" cx="404" cy="369.85782" r="10"/>
              <circle class="dot" id="dot1-25" cx="464.58578" cy="369.85782" r="10"/>
              <circle class="dot" id="dot1-24" cx="523.17157" cy="367.85782" r="10"/>
              <circle class="dot" id="dot1-23" cx="585.17157" cy="365.6152" r="10"/>
              <circle class="dot" id="dot1-22" cx="647.17157" cy="366.20102" r="10"/>
              <circle class="dot" id="dot1-21" cx="714.58575" cy="365.95834" r="10"/>
              <circle class="dot" id="dot1-20" cx="776" cy="365.71573" r="10"/>
              <circle class="dot" id="dot1-19" cx="842" cy="365.71567" r="10"/>
              <circle class="dot" id="dot1-18" cx="910.22955" cy="367.43683" r="10"/>
              <circle class="dot" id="dot1-17-1" cx="980.94025" cy="369.66226" r="10"/>
              <circle class="dot" id="dot1-16-1" cx="1045.994" cy="371.8876" r="10"/>
              <circle class="dot" id="dot1-15" cx="1105.391" cy="369.26733" r="10"/>
              <circle class="dot" id="dot1-14" cx="1167.6165" cy="368.66431" r="10"/>
              <circle class="dot" id="dot1-13-2" cx="1233.5355" cy="367.89951" r="10"/>
              <circle class="dot" id="dot1-13-3" cx="1284.2427" cy="332.34311" r="10"/>
              <circle class="dot" id="dot1-13-4" cx="1290.5858" cy="256.58575" r="10"/>
              <circle class="dot" id="dot1-11" cx="1304.989" cy="500.1933" r="10"/>
              <circle class="dot" id="dot1-13-1" cx="1195.0895" cy="428.06137" r="10"/>
              <circle class="dot" id="dot1-12" cx="1230.891" cy="497.51208" r="10"/>
              <circle class="dot" id="dot1-10" cx="1373.9319" cy="499.5903" r="10"/>
              <circle class="dot" id="dot1-9-1" cx="1434.6655" cy="500.23218" r="10"/>
              <circle class="dot" id="dot1-8" cx="1495.9657" cy="500.24994" r="10"/>
              <circle class="dot" id="dot1-7-1" cx="1555.9038" cy="500.16577" r="10"/>
              <circle class="dot" id="dot1-6" cx="1608.5907" cy="500.49994" r="10"/>
              <circle class="dot" id="dot1-5-1" cx="1668.547" cy="500.72726" r="10"/>
              <circle class="dot" id="dot1-4" cx="1728.5441" cy="499.06058" r="10"/>
              <circle class="dot" id="dot1-3-1" cx="1788.7157" cy="497.99994" r="10"/>
              <circle class="dot" id="dot1-2" cx="1855.1255" cy="497.16556" r="10"/>
              <circle class="dot" id="dot1-1-1" cx="1928.4229" cy="495.97916" r="10"/>
              <circle class="dot" id="dot1-1-2" cx="1936.7109" cy="433.75131" r="10"/>
              <circle class="dot" id="dot1-1-3" cx="1937.3517" cy="555.41418" r="10"/>
              <circle class="dot" id="dot1-5-2" cx="1670.4241" cy="558.00494" r="10"/>
              <circle class="dot" id="dot1-5-3" cx="1672.3015" cy="617.99994" r="10"/>
              <circle class="dot" id="dot1-5-4" cx="1663.473" cy="675.99994" r="10"/>
              <circle class="dot" id="dot1-7-2" cx="1565.7715" cy="433.79462" r="10"/>
              <circle class="dot" id="dot1-7-3" cx="1553.4087" cy="557.37921" r="10"/>
              <circle class="dot" id="dot1-9-2" cx="1393.6116" cy="563.39337" r="10"/>
              <circle class="dot" id="dot1-16-2" cx="1039.9281" cy="430.68155" r="10"/>
              <circle class="dot" id="dot1-17-2" cx="940.93311" cy="431.68658" r="10"/>
              <circle class="dot" id="dot1-3-2" cx="1791.3951" cy="556.27344" r="10"/>
              <circle class="dot" id="dot1-a1" cx="1625.6399" cy="733.16913" r="10"/>
              <circle class="dot" id="dot1-a2" cx="1583.6018" cy="781.66656" r="10"/>
              <circle class="dot" id="dot1-a3" cx="1543.2269" cy="834.63599" r="10"/>
              <circle class="dot" id="dot1-a4" cx="1518.7563" cy="901.11133" r="10"/>
              <circle class="dot" id="dot1-a5" cx="1498.0934" cy="969.20074" r="10"/>
              <circle class="dot" id="dot1-a6" cx="1477.4052" cy="1034.1436" r="10"/>
              <circle class="dot" id="dot1-a7-1" cx="1470.6387" cy="1109.3495" r="10"/>
              <circle class="dot" id="dot1-a8" cx="1469.2734" cy="1178.7471" r="10"/>
              <circle class="dot" id="dot1-a9" cx="1470.1814" cy="1250.3895" r="10"/>
              <circle class="dot" id="dot1-a10" cx="1469.2737" cy="1312.7437" r="10"/>
              <circle class="dot" id="dot1-a11" cx="1440.2822" cy="1373.5549" r="10"/>
              <circle class="dot" id="dot1-a12" cx="1438.4485" cy="1435.3357" r="10"/>
              <circle class="dot" id="dot1-a13" cx="1436.358" cy="1495.4948" r="10"/>
              <circle class="dot" id="dot1-a14" cx="1433.0657" cy="1560.1989" r="10"/>
              <circle class="dot" id="dot1-a7-2" cx="1418.1534" cy="1089.8071" r="10"/>
              <circle class="dot" id="dot1-a7-3" cx="1361.0862" cy="1058.8925" r="10"/>
              <path
                  id="here"
                  d="m -13.050276,1563.1804 a 29.432041,29.432041 0 0 0 -14.10229,14.2932 34.751085,34.751085 0 0 0 3.13688,36.1695 l 27.0862004,38.8699 27.0589396,-38.8699 a 33.632722,33.632722 0 0 0 6.6829,-20.3215 c 0,-23.8948 -24.54944,-41.8977 -49.86263,-30.1412 z m 16.5845004,41.4612 a 12.301993,12.301993 0 1 1 12.2747096,-12.302 12.301993,12.301993 0 0 1 -12.2747096,12.302 z"
                  inkscape:connector-curvature="0"
                  style="fill:#ffa500" />
            </svg>
            <svg v-if="showState['2']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg68" width="1966" height="635" viewBox="0 0 1966 635">
              <defs id="defs154"/>
              <metadata id="metadata74">

              </metadata>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur6"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset8"/>

                <feComponentTransfer id="feComponentTransfer12">
                  <feFuncA type="linear" slope="0.5" id="feFuncA10"/>

                </feComponentTransfer>
                <feMerge id="feMerge18">
                  <feMergeNode id="feMergeNode14"/>

                  <feMergeNode id="feMergeNode16"/>

                </feMerge>
              </filter>
              <path d="m 1965.0002,77.000001 h -706 V 7.000001e-7 H 1.965e-4 C 70.236996,252.3893 221.2527,377.0216 422.0002,423 l 1543,212 z" id="path80" class="building" style="fill:#ffffff"/>
              <g id="str2-left" class="room">
                <path class="stair" id="path179" d="M 72.0002,0 H 2.005e-4 C 19.4207,69.1971 45.7635,133.4801 83.0002,192 l 57.7901,-39 C 97.63451,83.51183 87.28778,51.14322 72.0002,0 Z"/>
                <path d="M 73.73384,74.55235 V 85.07866 H 63.20742 V 95.60497 H 52.68118 v 10.52631 H 42.15484 v 7.89473 h 18.421 V 103.4997 H 71.10218 V 92.9734 H 81.62842 V 82.44708 h 10.52642 v -7.89473 z" id="stairs-46" class="icon"/>
              </g>
              <g id="cab201" class="room">
                <path class="study" d="m 224.0002,0 v 201 h -48 C 126.5499,139.7933 90.8373,73.2032 72.0002,0 Z" id="path30"/>
                <text class="cab-num" id="text250" y="100" x="130.80693" xml:space="preserve"><tspan y="100" x="130.80693" id="tspan248">201</tspan></text>
              </g>
              <g id="cab202" class="room">
                <path class="study" d="m 370.0002,0 v 201 h -146 V 0 Z" id="path35"/>
                <text xml:space="preserve" x="255.23776" y="100" id="text250-3" class="cab-num"><tspan id="tspan248-9" x="255.23776" y="100">202</tspan></text>
              </g>
              <g id="cab203" class="room">
                <path class="study" d="m 513.0002,0 v 186 h -143 V 0 Z" id="path40"/>
                <text class="cab-num" id="text250-3-8" y="100" x="417.15305" xml:space="preserve"><tspan y="100" x="417.15305" id="tspan248-9-4">203</tspan></text>
              </g>
              <g id="cab204" class="room">
                <path class="study" d="m 659.0002,0 v 186 h -146 V 0 Z" id="path45"/>
                <text xml:space="preserve" x="550.59723" y="100" id="text250-3-8-3" class="cab-num"><tspan id="tspan248-9-4-3" x="550.59723" y="100">204</tspan></text>
              </g>
              <g id="cab205" class="room">
                <path class="study" d="M 804.00025,0 V 186 H 659.0002 V 0 Z" id="path50"/>
                <text xml:space="preserve" x="697.05103" y="100" id="text250-3-8-7" class="cab-num"><tspan id="tspan248-9-4-1" x="697.05103" y="100">205</tspan></text>
              </g>
              <g id="cab206" class="room">
                <path class="study" d="M 948.00021,0 V 186 H 804.00025 V 0 Z" id="path55"/>
                <text xml:space="preserve" x="838.92102" y="100" id="text250-3-8-9" class="cab-num"><tspan id="tspan248-9-4-2" x="838.92102" y="100">206</tspan></text>
              </g>
              <g id="cab207" class="room">
                <path class="study" d="M 1096.0002,0 V 186 H 948.00021 V 0 Z" id="path61"/>
                <text xml:space="preserve" x="987.23309" y="100" id="text250-3-8-4" class="cab-num"><tspan id="tspan248-9-4-0" x="987.23309" y="100">207</tspan></text>
              </g>
              <g id="str2-top" class="room">
                <path class="stair" id="path163" d="m 1259.0002,77 h -163 V 0 h 163 z"/>
                <path d="m 1188.7339,13.23656 v 12.63157 h -12.6317 V 38.4997 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 V 47.97338 h 12.6316 V 35.34181 h 12.6315 V 22.71023 h 12.6317 v -9.47367 z" id="stairs-1" class="icon"/>
              </g>
              <g id="cab208" class="room">
                <path class="study" id="path103" d="M 1384.0002,77.000001 V 262 h -217 V 77.000001 Z"/>
                <text class="cab-num" id="text250-3-8-4-3" y="181.88708" x="1242.3943" xml:space="preserve"><tspan y="181.88708" x="1242.3943" id="tspan248-9-4-0-5">208</tspan></text>
              </g>
              <g id="cab209" class="room">
                <path class="study" id="path101" d="m 1453.0002,77.000001 h -69 V 262 h 69 z"/>
                <text class="cab-num" id="text250-3-8-4-5" y="181.34955" x="1385.0273" xml:space="preserve"><tspan y="181.34955" x="1385.0273" id="tspan248-9-4-0-50">209</tspan></text>
              </g>
              <g id="cab210" class="room">
                <path class="study" id="path99" d="m 1675.0002,77.000001 h -222 V 262 h 222 z"/>
                <text class="cab-num" id="text250-3-8-4-8" y="180.85556" x="1523.2061" xml:space="preserve"><tspan y="180.85556" x="1523.2061" id="tspan248-9-4-0-0">210</tspan></text>
              </g>
              <g id="cab211" class="room">
                <path class="study" id="path97" d="m 1965.0002,77.000001 h -226 V 256 h 226 z"/>
                <text class="cab-num" id="text250-3-8-4-2" y="180.85556" x="1820.2806" xml:space="preserve"><tspan y="180.85556" x="1820.2806" id="tspan248-9-4-0-1">211</tspan></text>
              </g>
              <g id="cab213" class="room">
                <path class="study" id="path137" d="m 1965.0002,256 v 120 h -150 V 256 Z"/>
                <text class="cab-num" id="text250-3-8-4-35" y="327.73276" x="1852.2046" xml:space="preserve"><tspan y="327.73276" x="1852.2046" id="tspan248-9-4-0-65">213</tspan></text>
              </g>
              <g id="str2-right" class="room">
                <path class="stair" id="path151" d="m 1965.0002,376 h -150 v 65 h 150 z"/>
                <path d="m 1898.7339,383.23656 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 v -12.63157 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z" id="stairs-4" class="icon"/>
              </g>
              <g id="cab212" class="room">
                <path class="study" id="path135" d="m 1965.0002,441 v 194 l -231,-31.7099 1,-162.2901 z"/>
                <text class="cab-num" id="text250-3-8-4-4" y="520.97394" x="1816.1458" xml:space="preserve"><tspan y="520.97394" x="1816.1458" id="tspan248-9-4-0-4">212</tspan></text>
              </g>
              <g id="cab224" class="room">
                <path class="study" id="path119" d="M 199.1018,320.9063 250.0002,254 h 124 v 156 c -56.728,-17.3227 -115.192,-44.2946 -174.8984,-89.0937 z"/>
                <text class="cab-num" id="text250-3-8-4-0" y="331.1799" x="265.45844" xml:space="preserve"><tspan y="331.1799" x="265.45844" id="tspan248-9-4-0-00">224</tspan></text>
              </g>
              <g id="cab223" class="room">
                <path class="study" id="path121" d="M 374,254 H 520 V 436.4375 L 422,423 c -16.2126,-3.9638 -32.5313,-7.743 -48,-13 z"/>
                <text class="cab-num" id="text250-3-8-4-01" y="331.1799" x="408.02069" xml:space="preserve"><tspan y="331.1799" x="408.02069" id="tspan248-9-4-0-2">223</tspan></text>
              </g>
              <g id="cab222" class="room">
                <path class="study" id="path127" d="m 520.0002,254 h 136 v 201 l -136,-18.5625 z"/>
                <text class="cab-num" id="text250-3-8-4-00" y="332.8038" x="553.83075" xml:space="preserve"><tspan y="332.8038" x="553.83075" id="tspan248-9-4-0-25">222</tspan></text>
              </g>
              <path d="m 656.0002,254 v 63 h 110.00005 v -63 z" id="path131" class="void"/>
              <g id="cab214" class="room">
                <path class="study" id="path133" d="m 1441.0002,439 v 124 l 235,32.302 V 439 Z"/>
                <text class="cab-num" id="text250-3-8-4-9" y="520.97388" x="1523.7086" xml:space="preserve"><tspan y="520.97388" x="1523.7086" id="tspan248-9-4-0-6">214</tspan></text>
              </g>
              <g id="cab220" class="room">
                <path class="study" id="path129" d="M 656.0002,317 H 845.00021 V 481 L 656.0002,455 Z"/>
                <text class="cab-num" id="text250-3-8-4-03" y="393.70001" x="714.72699" xml:space="preserve"><tspan y="393.70001" x="714.72699" id="tspan248-9-4-0-255">220</tspan></text>
              </g>
              <g id="tlt2" class="room">
                <path class="toilet" id="path139" d="m 845.00021,317 h 194.99999 v 125 h 80 v 76.84383 L 845.00021,481 Z"/>
                <path class="icon" id="wc" d="M 916.98448,434.97027 V 408.4997 h -5.2941 v -19.41176 c 0,-3.88235 3.1765,-7.05882 7.0588,-7.05882 h 10.5883 c 3.8824,0 7.0588,3.17647 7.0588,7.05882 v 19.41176 h -5.2941 v 26.47057 z m 44.1176,0 v -21.17646 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.89412 -3.6706,-4.83529 -6.7059,-4.83529 h -0.4236 c -3.0353,0 -5.7528,1.94117 -6.7058,4.83529 l -8.9647,26.9294 h 10.5882 v 21.17646 z m -37.0587,-56.47057 c 3.9175,0 7.0588,-3.14116 7.0588,-7.05882 0,-3.91764 -3.1413,-7.05882 -7.0588,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z m 31.7647,0 c 3.9177,0 7.0587,-3.14116 7.0587,-7.05882 0,-3.91764 -3.141,-7.05882 -7.0587,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z"/>
              </g>
              <g id="str2-bottom" class="room">
                <path class="stair" id="path114" d="m 1120.0002,441.99997 v 76.84368 l 120,16.5477 v -93.39138 z"/>
                <path class="icon" id="stairs" d="m 1186.6287,459.02603 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 v -12.63157 h 12.6315 V 468.4997 h 12.6317 v -9.47367 z"/>
              </g>
              <g id="lft2" class="room">
                <path class="stair" id="path130" d="m 1240.0002,442.00002 v 93.3914 l 144,19.6086 v -113 z"/>
                <path class="icon" id="lift" d="m 1292.7688,460.16636 13.3334,13.33334 h -10 v 13.33333 h -6.6667 V 473.4997 h -10 l 13.3333,-13.33334 m 33.3334,26.66667 -13.3334,-13.33333 h 10 v -13.33334 h 6.6667 v 13.33334 h 10 l -13.3333,13.33333 m -33.3334,6.66667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.66666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.66667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.66667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.66666 m 0,6.66666 v 20 h 33.3334 v -20 z"/>
              </g>
              <path d="m 1676.0002,302 v 21 h -169 v -21 z" id="path46" class="void"/>
              <path d="m 1392.0002,302 v 21 h -225 v -21 z" id="path48" class="void"/>
              <circle class="dot" id="dot2-30" cx="140.79623" cy="215.38596" r="10"/>
              <circle class="dot" id="dot2-29" cx="198.14592" cy="221.96582" r="10"/>
              <circle class="dot" id="dot2-28" cx="253.35849" cy="223.67401" r="10"/>
              <circle class="dot" id="dot2-27" cx="316.69055" cy="223.75829" r="10"/>
              <circle class="dot" id="dot2-26" cx="377.02261" cy="222.09033" r="10"/>
              <circle class="dot" id="dot2-25" cx="436.7308" cy="222.17461" r="10"/>
              <circle class="dot" id="dot2-24" cx="498.43896" cy="222.88277" r="10"/>
              <circle class="dot" id="dot2-23" cx="565.64276" cy="220.71924" r="10"/>
              <circle class="dot" id="dot2-22" cx="625.72699" cy="219.17961" r="10"/>
              <circle class="dot" id="dot2-21" cx="684.81128" cy="217.63998" r="10"/>
              <circle class="dot" id="dot2-20" cx="741.64777" cy="216.10036" r="10"/>
              <circle class="dot" id="dot2-19-1" cx="802.47552" cy="218.39429" r="10"/>
              <circle class="dot" id="dot2-17-1" cx="924.26282" cy="222.5298" r="10"/>
              <circle class="dot" id="dot2-16" cx="980.67993" cy="224.23798" r="10"/>
              <circle class="dot" id="dot2-15" cx="1041.759" cy="224.5701" r="10"/>
              <circle class="dot" id="dot2-14-1" cx="1087.8486" cy="259.65378" r="10"/>
              <circle class="dot" id="dot2-13" cx="1132.0985" cy="300.32574" r="10"/>
              <circle class="dot" id="dot2-12" cx="1178.01" cy="349.00909" r="10"/>
              <circle class="dot" id="dot2-11-1" cx="1232.7496" cy="360.46078" r="10"/>
              <circle class="dot" id="dot2-10" cx="1291.7854" cy="368.24512" r="10"/>
              <circle class="dot" id="dot2-9" cx="1345.1108" cy="378.28238" r="10"/>
              <circle class="dot" id="dot2-8" cx="1408.8087" cy="385.64755" r="10"/>
              <circle class="dot" id="dot2-7-1" cx="1465.6453" cy="388.7699" r="10"/>
              <circle class="dot" id="dot2-6" cx="1519.2339" cy="386.81094" r="10"/>
              <circle class="dot" id="dot2-5" cx="1574.4464" cy="384.01315" r="10"/>
              <circle class="dot" id="dot2-4" cx="1629.6591" cy="387.1355" r="10"/>
              <circle class="dot" id="dot2-3" cx="1692.7814" cy="387.4295" r="10"/>
              <circle class="dot" id="dot2-2" cx="1746.1604" cy="387.72348" r="10"/>
              <circle class="dot" id="dot2-1-2" cx="1783.0314" cy="359.79465" r="10"/>
              <circle class="dot" id="dot2-1-1" cx="1787.7373" cy="421.34668" r="10"/>
              <circle class="dot" id="dot2-7-2" cx="1426.7559" cy="337.53671" r="10"/>
              <circle class="dot" id="dot2-7-3" cx="1425.2251" cy="277.84613" r="10"/>
              <circle class="dot" id="dot2-7-5" cx="1497.6766" cy="278.0499" r="10"/>
              <circle class="dot" id="dot2-14-2" cx="1126.0995" cy="216.20184" r="10"/>
              <circle class="dot" id="dot2-14-3" cx="1130.3484" cy="160.62355" r="10"/>
              <circle class="dot" id="dot2-14-4" cx="1132.0565" cy="110.28266" r="10"/>
              <circle class="dot" id="dot2-18" cx="862.55463" cy="222.4785" r="10"/>
              <circle class="dot" id="dot2-1-3" cx="1784.2407" cy="285.93683" r="10"/>
              <circle class="dot" id="dot2-11-2" cx="1250.0175" cy="413.48645" r="10"/>
              <circle class="dot" id="dot2-17-2" cx="921.16504" cy="287.73077" r="10"/>
              <circle class="dot" id="dot2-19-2" cx="799.37262" cy="286.7756" r="10"/>
              <circle class="dot" id="dot2-7-4" cx="1357.0212" cy="274.00089" r="10"/>
              <path id="here" d="m -14.170741,546.96015 a 29.432041,29.432041 0 0 0 -14.10229,14.29322 34.751085,34.751085 0 0 0 3.13688,36.1695 L 1.9500493,636.2928 29.008989,597.42287 a 33.632722,33.632722 0 0 0 6.6829,-20.32148 c 0,-23.89478 -24.54944,-41.8977 -49.86263,-30.14124 z M 2.4137593,588.4214 A 12.301993,12.301993 0 1 1 14.688469,576.11941 12.301993,12.301993 0 0 1 2.4137593,588.4214 Z" style="fill:#ffa500"/>
            </svg>
            <svg v-if="showState['2a']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg68" width="583" height="538" viewBox="0 0 583 538">
              <metadata id="metadata74">

              </metadata>
              <defs id="defs72"/>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur6"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset8"/>

                <feComponentTransfer id="feComponentTransfer12">
                  <feFuncA type="linear" slope="0.5" id="feFuncA10"/>

                </feComponentTransfer>
                <feMerge id="feMerge18">
                  <feMergeNode id="feMergeNode14"/>

                  <feMergeNode id="feMergeNode16"/>

                </feMerge>
              </filter>
              <path d="M 583,0 H 221 v 147 h -72 v 72 H 0 v 319 h 412 c 37.4361,-82.2087 99.0375,-120.9277 171,-141 z" id="path93" class="building" style="fill:#ffffff"/>
              <g id="cab2a26" class="room">
                <path class="study" id="path4815" d="M 221,0 V 147 H 441 V 0 Z"/>
                <text style="font-size:40px" xml:space="preserve" x="296.05072" y="90" id="text27-7" class="cab-num"><tspan id="tspan25-4" x="296.05072" y="90">226</tspan></text>
              </g>
              <g id="cab2a25" class="room">
                <path class="study" id="path4817" d="M 583,0 H 441 v 147 h 142 z"/>
                <text id="text27" y="90" class="cab-num" x="474.23447" xml:space="preserve"><tspan y="90" x="474.23447" id="tspan25">225</tspan></text>
              </g>
              <g id="cab2a34" class="room">
                <path class="study" id="path4819" d="M 149,219 V 369 H 0 V 219 Z"/>
                <text xml:space="preserve" x="36.061413" y="305.65686" id="text27-7-2" class="cab-num"><tspan id="tspan25-4-8" x="36.061413" y="305.65686">234</tspan></text>
              </g>
              <g id="cab2a33" class="room">
                <path class="study" id="path4821" d="m 0,436 h 149 v 76 H 0 Z"/>
                <text xml:space="preserve" x="34.747707" y="489.19238" id="text27-7-5" class="cab-num"><tspan id="tspan25-4-1" x="34.747707" y="489.19238">233</tspan></text>
              </g>
              <g id="str2a" class="room">
                <path class="stair" id="path4829" d="m 149,512 v 26 H 0 v -26 z"/>
                <path d="m 79.13629,515.42534 v 4.8 h -4.8001 v 4.7999 h -4.7999 v 4.8001 h -4.8 v 3.6 h 8.3999 v -4.8 h 4.8001 v -4.7999 h 4.8 v -4.8001 h 4.8 v -3.6 z" id="stairs-6" class="icon"/>
              </g>
              <g id="lft2a" class="room">
                <path class="stair" id="path200" d="M 363,365 H 222 V 255 l 37,-37 h 104 z"/>
                <path d="m 278.88163,258.86629 13.3334,13.3334 h -10 v 13.3333 h -6.6667 v -13.3333 h -10 l 13.3333,-13.3334 m 33.3334,26.6667 -13.3334,-13.3333 h 10 v -13.3334 h 6.6667 v 13.3334 h 10 l -13.3333,13.3333 m -33.3334,6.6667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.6666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.6667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.6667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.6666 m 0,6.6666 v 20 h 33.3334 v -20 z" id="lift-0" class="icon"/>
              </g>
              <g id="tlt2a" class="room">
                <path class="toilet" id="path4825" d="M 363,442 V 365 H 222 v 77 z"/>
                <path d="m 268.36507,438.5441 v -26.4706 h -5.2941 v -19.4117 c 0,-3.8824 3.1765,-7.0588 7.0588,-7.0588 h 10.5883 c 3.8824,0 7.0588,3.1764 7.0588,7.0588 v 19.4117 h -5.2941 v 26.4706 z m 44.1176,0 v -21.1765 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.8941 -3.6706,-4.8352 -6.7059,-4.8352 h -0.4236 c -3.0353,0 -5.7528,1.9411 -6.7058,4.8352 l -8.9647,26.9294 h 10.5882 v 21.1765 z m -37.0587,-56.4706 c 3.9175,0 7.0588,-3.1411 7.0588,-7.0588 0,-3.9176 -3.1413,-7.0588 -7.0588,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z m 31.7647,0 c 3.9177,0 7.0587,-3.1411 7.0587,-7.0588 0,-3.9176 -3.141,-7.0588 -7.0587,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z" id="wc-7" class="icon"/>
              </g>
              <g id="cab2a32" class="room">
                <path class="study" id="path4823" d="m 198,538 v -96 h 165 v 96 z"/>
                <text xml:space="preserve" x="242.11314" y="503.02588" id="text27-7-0" class="cab-num"><tspan id="tspan25-4-0" x="242.11314" y="503.02588">232</tspan></text>
              </g>
              <g id="cab2a28" class="room">
                <path class="study" id="path4831" d="m 363,365 h 99 v -88 h -99 z"/>
                <text xml:space="preserve" x="373.42685" y="335.76093" id="text27-7-9" class="cab-num"><tspan id="tspan25-4-5" x="373.42685" y="335.76093">228</tspan></text>
              </g>
              <path d="m 462,365 h 49 V 219 h 72 V 397 C 498.6005,419.2916 443.6181,468.111 412,538 H 363 V 365 Z" id="path44" class="void"/>
              <circle id="dot2a-11" cx="176.81058" cy="513.98352" r="10" class="dot"/>
              <circle id="dot2a-10" cx="176.71007" cy="462.56931" r="10" class="dot"/>
              <circle id="dot2a-9" cx="183.17455" cy="404.59012" r="10" class="dot"/>
              <circle id="dot2a-8" cx="186.10347" cy="339.03378" r="10" class="dot"/>
              <circle id="dot2a-7" cx="186.81058" cy="273.98352" r="10" class="dot"/>
              <circle id="dot2a-6" cx="226.81058" cy="223.98352" r="10" class="dot"/>
              <circle id="dot2a-5" cx="281.15372" cy="188.32666" r="10" class="dot"/>
              <circle id="dot2a-4" cx="344.68927" cy="186.81195" r="10" class="dot"/>
              <circle id="dot2a-3" cx="399.63901" cy="186.91245" r="10" class="dot"/>
              <circle id="dot2a-2-1" cx="456.81058" cy="183.98352" r="10" class="dot"/>
              <circle id="dot2a-1" cx="523.27509" cy="183.27641" r="10" class="dot"/>
              <circle id="dot2a-2-2" cx="468.93188" cy="242.06679" r="10" class="dot"/>
              <circle id="dot2a-2-3" cx="483.98215" cy="306.30585" r="10" class="dot"/>
            </svg>
            <svg v-if="showState['3']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="1966" height="635" viewBox="0 0 1966 635">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6"/>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur6"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset8"/>

                <feComponentTransfer id="feComponentTransfer12">
                  <feFuncA type="linear" slope="0.5" id="feFuncA10"/>

                </feComponentTransfer>
                <feMerge id="feMerge18">
                  <feMergeNode id="feMergeNode14"/>

                  <feMergeNode id="feMergeNode16"/>

                </feMerge>
              </filter>
              <path d="m 1964.9999,77 h -706 V 0 H 0 c 70.2368,252.3892 221.2525,377.0216 422,423 l 1542.9999,212 z" id="path80" class="building" style="fill:#ffffff"/>
              <g id="str3-left" class="room">
                <path class="stair" id="path152" d="M 72,0 H 0 c 19.4205,69.1971 45.7633,133.4802 83,192 l 57.7901,-39 C 116.08932,108.47027 88.58836,57.1259 72,0 Z"/>
                <path class="icon" id="stairs-46" d="M 71.9999,58.47371 V 69.00002 H 61.47348 V 79.52633 H 50.94724 V 90.05264 H 40.4209 v 7.89473 h 18.421 V 87.42106 H 69.36824 V 76.89476 H 79.89448 V 66.36844 H 90.4209 v -7.89473 z"/>
              </g>
              <g id="cab301" class="room">
                <path class="study" id="path185" d="M 224,0 V 201 H 176 C 126.5497,139.7932 90.8371,73.2031 72,0 Z"/>
                <text xml:space="preserve" x="134.89772" y="100" id="text250" class="cab-num"><tspan id="tspan248" x="134.89772" y="100">301</tspan></text>
              </g>
              <g id="cab302" class="room">
                <path class="study" id="path192" d="M 370,0 V 201 H 224 V 0 Z"/>
                <text xml:space="preserve" x="260.87585" y="100" id="text250-5" class="cab-num"><tspan id="tspan248-9" x="260.87585" y="100">302</tspan></text>
              </g>
              <g id="cab303" class="room">
                <path class="study" id="path209" d="M 513,0 V 186 H 370 V 0 Z"/>
                <text xml:space="preserve" x="399.57254" y="100" id="text250-8" class="cab-num"><tspan id="tspan248-7" x="399.57254" y="100">303</tspan></text>
              </g>
              <g id="cab304" class="room">
                <path class="study" id="path224" d="M 659,0 V 186 H 513 V 0 Z"/>
                <text xml:space="preserve" x="549.60809" y="100" id="text250-2" class="cab-num"><tspan id="tspan248-5" x="549.60809" y="100">304</tspan></text>
              </g>
              <g id="cab305" class="room">
                <path class="study" id="path239" d="M 804,0 V 186 H 659 V 0 Z"/>
                <text xml:space="preserve" x="696.31519" y="100" id="text250-9" class="cab-num"><tspan id="tspan248-8" x="696.31519" y="100">305</tspan></text>
              </g>
              <g id="cab306" class="room">
                <path class="study" id="path254" d="M 948,0 V 186 H 804 V 0 Z"/>
                <text xml:space="preserve" x="837.19391" y="100" id="text250-0" class="cab-num"><tspan id="tspan248-76" x="837.19391" y="100">306</tspan></text>
              </g>
              <g id="cab307" class="room">
                <path class="study" id="path269" d="M 1096,0 V 186 H 948 V 0 Z"/>
                <text xml:space="preserve" x="983.10809" y="100" id="text250-02" class="cab-num"><tspan id="tspan248-0" x="983.10809" y="100">307</tspan></text>
              </g>
              <g id="str3-top" class="room">
                <path class="stair" id="path130" d="M 1258.9999,77 H 1096 V 0 h 162.9999 z"/>
                <path class="icon" id="stairs-1" d="m 1182.7895,14.2632 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 V 49.00002 h 12.6316 V 36.36845 h 12.6315 V 23.73687 h 12.6317 V 14.2632 Z"/>
              </g>
              <g id="cab308" class="room">
                <path class="study" id="path103" d="m 1383.9999,77 v 223.07622 h -217 V 77 Z"/>
                <text class="cab-num" id="text250-82" y="200" x="1245.1094" xml:space="preserve"><tspan y="200" x="1245.1094" id="tspan248-84">308</tspan></text>
              </g>
              <g id="cab309" class="room">
                <path class="study" id="path101" d="m 1463.8135,77 h -79.8136 v 223.07622 h 79.8136 z"/>
                <text class="cab-num" id="text250-83" y="200" x="1390.1179" xml:space="preserve"><tspan y="200" x="1390.1179" id="tspan248-2">309</tspan></text>
              </g>
              <g id="cab310" class="room">
                <path class="study" id="path3833" d="m 1463.8135,76.94097 210.293,0.069 0.01,223.06625 H 1463.815 Z"/>
                <text class="cab-num" id="text250-24" y="200" x="1529.6643" xml:space="preserve"><tspan y="200" x="1529.6643" id="tspan248-51">310</tspan></text>
              </g>
              <g id="cab311" class="room">
                <path class="study" id="path3835" d="m 1674.1065,77.01 69.707,0.0662 v 243 h -69.6797 l -0.019,-20 z"/>
                <text xml:space="preserve" x="1680.1178" y="200" id="text250-85" class="cab-num"><tspan id="tspan248-25" x="1680.1178" y="200">311</tspan></text>
              </g>
              <g id="cab312" class="room">
                <path class="study" id="path3837" d="M 1743.8135,77.07622 1964.9999,77 l -0.1864,243.07622 h -221 z"/>
                <g id="g173">
                  <text xml:space="preserve" x="1820.3512" y="200" id="text250-6" class="cab-num"><tspan id="tspan248-3" x="1820.3512" y="200">312</tspan></text>
                </g>
              </g>
              <g id="cab325" class="room">
                <path class="study" id="path119" d="M 199.1016,320.9062 250,254 H 374 V 410 C 317.272,392.6772 258.808,365.7054 199.1016,320.9062 Z"/>
                <text class="cab-num" id="text250-9-7" y="330" x="267.67737" xml:space="preserve"><tspan y="330" x="267.67737" id="tspan248-8-5">325</tspan></text>
              </g>
              <g id="cab324" class="room">
                <path class="study" id="path121" d="M 374,254 H 520 V 436.4375 L 422,423 c -16.2126,-3.9638 -32.5313,-7.7431 -48,-13 z"/>
                <text class="cab-num" id="text250-9-6" y="330" x="412.42609" xml:space="preserve"><tspan y="330" x="412.42609" id="tspan248-8-2">324</tspan></text>
              </g>
              <g id="cab323" class="room">
                <path class="study" id="path127" d="M 520,254 H 663.8135 V 455 L 520,436.4375 Z"/>
                <text class="cab-num" id="text250-9-5" y="330" x="553.13318" xml:space="preserve"><tspan y="330" x="553.13318" id="tspan248-8-28">323</tspan></text>
              </g>
              <path style="stroke-width:1.00310659" d="m 663.8135,254 v 63.39205 H 766 V 254 Z" id="path131" class="void"/>
              <g id="cab321" class="room">
                <path class="study" id="path165" d="M 845,316.99998 V 254.02125 L 766,254 v 63.00002 H 663.8135 V 455 L 845,481 Z" style="stroke-width:1.00109851"/>
                <text xml:space="preserve" x="714.94043" y="391.87494" id="text250-9-60-2" class="cab-num"><tspan id="tspan248-8-57-9" x="714.94043" y="391.87494">321</tspan></text>
              </g>
              <g id="tlt3" class="room">
                <path class="toilet" id="path139" d="m 845,317 h 195 v 125 h 80 v 76.8437 L 845,481 Z"/>
                <path d="m 907.8822,435.47059 v -26.47057 h -5.2941 v -19.41176 c 0,-3.88235 3.1765,-7.05882 7.0588,-7.05882 h 10.5883 c 3.8824,0 7.0588,3.17647 7.0588,7.05882 v 19.41176 h -5.2941 v 26.47057 z m 44.1176,0 v -21.17646 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.89412 -3.6706,-4.83529 -6.7059,-4.83529 h -0.4236 c -3.0353,0 -5.7528,1.94117 -6.7058,4.83529 l -8.9647,26.9294 h 10.5882 v 21.17646 z m -37.0587,-56.47057 c 3.9175,0 7.0588,-3.14116 7.0588,-7.05882 0,-3.91764 -3.1413,-7.05882 -7.0588,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z m 31.7647,0 c 3.9177,0 7.0587,-3.14116 7.0587,-7.05882 0,-3.91764 -3.141,-7.05882 -7.0587,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z" id="wc" class="icon"/>
              </g>
              <g id="str3-bottom" class="room">
                <path class="stair" id="path106" d="m 1120,442 v 76.84376 l 120,16.5476 V 442 Z"/>
                <path d="m 1186.9999,461.36845 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 V 483.4737 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z" id="stairs" class="icon"/>
              </g>
              <g id="lft3" class="room">
                <path class="stair" id="path94" d="m 1240,441.99994 v 93.39141 l 144,19.60859 v -113 z"/>
                <path d="m 1298.6665,459.00002 13.3334,13.33334 h -10 v 13.33333 h -6.6667 v -13.33333 h -10 l 13.3333,-13.33334 m 33.3334,26.66667 -13.3334,-13.33333 h 10 v -13.33334 h 6.6667 v 13.33334 h 10 l -13.3333,13.33333 m -33.3334,6.66667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.66666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.66667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.66667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.66666 m 0,6.66666 v 20 h 33.3334 v -20 z" id="lift" class="icon"/>
              </g>
              <path d="m 1384,441.99989 v 113 l 56.5267,7.97328 0.2868,-120.89695 z" id="path3839" class="void"/>
              <g id="cab315" class="room">
                <path class="study" id="path3841" d="m 1440.8135,442.07622 h 50.5313 v 127.8086 l -50.8219,-6.91165 z"/>
                <text transform="rotate(90)" class="cab-num" id="text250-29" y="-1452.4921" x="465" xml:space="preserve"><tspan y="-1452.4921" x="465" id="tspan248-1">315</tspan></text>
              </g>
              <g id="cab314" class="room">
                <path class="study" id="path3843" d="m 1491.3487,569.88482 v -157.8086 h 285.4609 v 197 z"/>
                <text class="cab-num" id="text250-27" y="520" x="1598.6628" xml:space="preserve"><tspan y="520" x="1598.6628" id="tspan248-71">314</tspan></text>
              </g>
              <g id="str3-right" class="room">
                <path class="stair" id="path118" d="m 1964.9309,441.34185 -147.1172,-1e-5 v -66.26562 h 147.169 z"/>
                <path class="icon" id="stairs-4" d="m 1899.6316,383.73688 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 V 418.4737 h 12.6316 v -12.63157 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z"/>
              </g>
              <g id="cab313" class="room">
                <path class="study" id="path3845" d="M 1776.8135,609.07622 1964.9999,635 l -0.069,-193.65815 -188.1172,0.009 z"/>
                <text class="cab-num" id="text250-06" y="520" x="1835.8416" xml:space="preserve"><tspan y="520" x="1835.8416" id="tspan248-97">313</tspan></text>
              </g>
              <path d="m 1124.8135,315.07622 h -34 v 10 h 34 z" id="path3849" class="void"/>
              <circle class="dot" id="dot3-1-1" cx="1781.4308" cy="351.49753" r="10"/>
              <circle class="dot" id="dot3-11-4" cx="1132.1299" cy="94.435471" r="10"/>
              <circle class="dot" id="dot3-11-3" cx="1130.8069" cy="154.35144" r="10"/>
              <circle class="dot" id="dot3-11-2" cx="1111.548" cy="218.30406" r="10"/>
              <circle class="dot" id="dot3-25" cx="145.87906" cy="213.68312" r="10"/>
              <circle class="dot" id="dot3-24" cx="215.28069" cy="230.28667" r="10"/>
              <circle class="dot" id="dot3-23" cx="283.81738" cy="229.19225" r="10"/>
              <circle class="dot" id="dot3-22" cx="357.59601" cy="226.56293" r="10"/>
              <circle class="dot" id="dot3-21" cx="423.71155" cy="222.70699" r="10"/>
              <circle class="dot" id="dot3-20" cx="490.71561" cy="221.0134" r="10"/>
              <circle class="dot" id="dot3-19" cx="559.14532" cy="221.62358" r="10"/>
              <circle class="dot" id="dot3-18" cx="632.13696" cy="220.35478" r="10"/>
              <circle class="dot" id="dot3-17" cx="705.12866" cy="220.4175" r="10"/>
              <circle class="dot" id="dot3-16" cx="774.3103" cy="219.42082" r="10"/>
              <circle class="dot" id="dot3-15" cx="835.85425" cy="220.92712" r="10"/>
              <circle class="dot" id="dot3-14-1" cx="902.42969" cy="236.02382" r="10"/>
              <circle class="dot" id="dot3-13" cx="972.88141" cy="244.98257" r="10"/>
              <circle class="dot" id="dot3-12" cx="1051.499" cy="251.23196" r="10"/>
              <circle class="dot" id="dot3-11-1" cx="1116.7001" cy="286.2128" r="10"/>
              <circle class="dot" id="dot3-10" cx="1166.7156" cy="330.82843" r="10"/>
              <circle class="dot" id="dot3-9-1" cx="1230.545" cy="355.42609" r="10"/>
              <circle class="dot" id="dot3-8" cx="1305.8958" cy="356.05389" r="10"/>
              <circle class="dot" id="dot3-7" cx="1372.9111" cy="356.80939" r="10"/>
              <circle class="dot" id="dot3-6-1" cx="1439.0598" cy="354.87198" r="10"/>
              <circle class="dot" id="dot3-5" cx="1506.6228" cy="358.57706" r="10"/>
              <circle class="dot" id="dot3-4" cx="1579.6145" cy="362.33496" r="10"/>
              <circle class="dot" id="dot3-3" cx="1650.3251" cy="365.0322" r="10"/>
              <circle class="dot" id="dot3-2" cx="1718.7548" cy="363.04211" r="10"/>
              <circle class="dot" id="dot3-6-2" cx="1438.3613" cy="415.08859" r="10"/>
              <circle class="dot" id="dot3-9-2" cx="1230.1255" cy="423.89465" r="10"/>
              <circle class="dot" id="dot3-14-2" cx="899.72705" cy="289.45627" r="10"/>
              <circle class="dot" id="dot3-1-2" cx="1792.5533" cy="394.49841" r="10"/>
            </svg>
            <svg v-if="showState['3a']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="582.99988" height="563.92383" viewBox="0 0 582.99988 563.92383">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6"/>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur6"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset8"/>

                <feComponentTransfer id="feComponentTransfer12">
                  <feFuncA type="linear" slope="0.5" id="feFuncA10"/>

                </feComponentTransfer>
                <feMerge id="feMerge18">
                  <feMergeNode id="feMergeNode14"/>

                  <feMergeNode id="feMergeNode16"/>

                </feMerge>
              </filter>
              <path d="m 582.84475,18.9375 -362,-19 0.1864,172.9238 -68.1864,1.0762 v 70.9238 H 0.03125 v 319 h 411.9999 c 37.4362,-82.2087 99.0376,-120.9277 171,-141 z" id="path93" class="building" style="fill:#ffffff"/>
              <path d="M 220.9307,0.9062 221.1171,173.83 152.8135,174 v 70.9238 L 2.9307,244.9058 c 129.2856,-32.9907 214.7446,-147.5493 218,-244 z" id="path3853" class="void"/>
              <g id="cab3a29" class="room">
                <path class="study" id="path3861" d="m 221.1796,173.83003 54.79015,0.0938 -0.0625,-171.0041531 -55,-2.982177 z"/>
                <text transform="rotate(90)" id="text32" class="cab-num" y="-233.95497" x="53.386719" xml:space="preserve"><tspan y="-233.95497" x="53.386719" id="tspan30">329</tspan></text>
              </g>
              <g id="cab3a28" class="room">
                <path class="study" id="path4815" d="M 275.90725,2.9196769 V 173.9238 l 159.92188,-0.0716 -0.0156,-162.584685 z"/>
                <text id="text32-64" class="cab-num" y="110" x="315.2598" xml:space="preserve"><tspan y="110" x="315.2598" id="tspan30-08">328</tspan></text>
              </g>
              <g id="cab3a27" class="room">
                <path class="study" id="path3863" d="m 511.95238,173.71137 -76.12325,0.14083 -0.0156,-162.6335 77,4.332499 z"/>
                <text id="text32-88" class="cab-num" y="110" x="442" xml:space="preserve"><tspan y="110" x="442" id="tspan30-7">327</tspan></text>
              </g>
              <g id="cab3a26" class="room">
                <path class="study" id="path4817" d="m 582.9066,19.040756 -70.0931,-3.538156 -0.86112,158.20877 71.06315,0.0156 z"/>
                <text id="text32-6" class="cab-num" y="110" x="514" xml:space="preserve"><tspan y="110" x="514" id="tspan30-3">326</tspan></text>
              </g>
              <g id="cab3a38" class="room">
                <path class="study" id="path4819" d="M 152.8135,244.9238 V 339 H 0 v -94.0762 z"/>
                <text id="text32-5" class="cab-num" y="307.53473" x="38.914108" xml:space="preserve"><tspan y="307.53473" x="38.914108" id="tspan30-0">338</tspan></text>
              </g>
              <g id="cab3a37" class="room">
                <path class="study" id="path3859" d="M 152.7666,339.1446 0,338.9998 l 5e-4,58 h 152.8073 z"/>
                <text id="text32-7" class="cab-num" y="381.42383" x="37.499893" xml:space="preserve"><tspan y="381.42383" x="37.499893" id="tspan30-4">337</tspan></text>
              </g>
              <g id="cab3a36" class="room">
                <path class="study" id="path4821" d="m 0,449 h 152.8135 v 88.9238 H 0 Z"/>
                <text id="text32-31" class="cab-num" y="509.80099" x="37.02459" xml:space="preserve"><tspan y="509.80099" x="37.02459" id="tspan30-85">336</tspan></text>
              </g>
              <g id="str3a" class="room">
                <path class="stair" id="path4829" d="m 152.8135,537.9238 v 26 H 0 v -26 z"/>
                <path class="icon" id="stairs-6" d="m 78.718659,540.97372 v 4.8 h -4.8001 v 4.7999 h -4.7999 v 4.8001 h -4.8 v 3.6 h 8.3999 v -4.8 h 4.8001 v -4.7999 h 4.8 v -4.8001 h 4.799996 v -3.6 z"/>
              </g>
              <g id="lft3a" class="room">
                <path class="stair" id="path4827" d="m 362.9463,390.8528 h -141 v -110 l 37,-37 h 104 z"/>
                <path class="icon" id="lift-0" d="m 276.97752,284.86499 13.3334,13.3334 h -10 v 13.3333 h -6.6667 v -13.3333 h -10 l 13.3333,-13.3334 m 33.3334,26.6667 -13.3334,-13.3333 h 10 v -13.3334 h 6.6667 v 13.3334 h 10 l -13.3333,13.3333 m -33.3334,6.6667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.6666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.6667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.6667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.6666 m 0,6.6666 v 20 h 33.3334 v -20 z"/>
              </g>
              <g id="tlt3a" class="room">
                <path class="toilet" id="path4825" d="m 362.9999,467.9238 v -77 h -141 v 77 z"/>
                <path class="icon" id="wc-7" d="m 272.23155,463.64446 v -26.4706 h -5.2941 v -19.4117 c 0,-3.8824 3.1765,-7.0588 7.0588,-7.0588 h 10.5883 c 3.8824,0 7.0588,3.1764 7.0588,7.0588 v 19.4117 h -5.2941 v 26.4706 z m 44.1176,0 v -21.1765 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.8941 -3.6706,-4.8352 -6.7059,-4.8352 h -0.4236 c -3.0353,0 -5.7528,1.9411 -6.7058,4.8352 l -8.9647,26.9294 h 10.5882 v 21.1765 z m -37.0587,-56.4706 c 3.9175,0 7.0588,-3.1411 7.0588,-7.0588 0,-3.9176 -3.1413,-7.0588 -7.0588,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z m 31.7647,0 c 3.9177,0 7.0587,-3.1411 7.0587,-7.0588 0,-3.9176 -3.141,-7.0588 -7.0587,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z"/>
              </g>
              <g id="cab3a34" class="room">
                <path class="study" id="path4823-9" d="M 237.8135,517.92383 V 467.9238 h 125.1864 v 50.00003 z"/>
                <text id="text32-3" class="cab-num" y="506.61703" x="261.80789" xml:space="preserve"><tspan y="506.61703" x="261.80789" id="tspan30-8">334</tspan></text>
              </g>
              <g id="cab3a35" class="room">
                <path class="study" id="path4823" d="M 237.8135,563.9238 V 517.92383 H 362.9999 V 563.9238 Z"/>
                <text id="text32-1" class="cab-num" y="554.8064" x="261.48251" xml:space="preserve"><tspan y="554.8064" x="261.48251" id="tspan30-9">335</tspan></text>
              </g>
              <path d="m 362.9999,324 h 79.8136 v -80.0762 l -79.8672,-0.071 z" id="path4831" class="void"/>
              <g id="cab3a30" class="room">
                <path class="study" id="path3857" d="m 442.8135,324 h -79.8136 v 66.9238 h 99.8136 V 304 h -20 z"/>
                <text id="text32-8" class="cab-num" y="370.30713" x="373.65945" xml:space="preserve"><tspan y="370.30713" x="373.65945" id="tspan30-6">330</tspan></text>
              </g>
              <path d="m 461.9999,390.9238 h 49 v -146 h 72 v 178 c -84.3994,22.2916 -139.3819,71.111 -171,141 h -49 v -173 z" id="path44" class="void"/>
              <DotTest> </DotTest>
              <circle class="dot" id="dot3a-12" cx="192.5" cy="535.42383" r="10"/>
              <circle class="dot" id="dot3a-11" cx="188.5" cy="480.92383" r="10"/>
              <circle class="dot" id="dot3a-10" cx="186.5" cy="423.42383" r="10"/>
              <circle class="dot" id="dot3a-9" cx="186.5" cy="363.42383" r="10"/>
              <circle class="dot" id="dot3a-8" cx="189" cy="304.42383" r="10"/>
              <circle class="dot" id="dot3a-7" cx="218" cy="251.92383" r="10"/>
              <circle class="dot" id="dot3a-6" cx="251.5" cy="211.92383" r="10"/>
              <circle class="dot" id="dot3a-5" cx="305" cy="208.42383" r="10"/>
              <circle class="dot" id="dot3a-4" cx="361.5" cy="207.42383" r="10"/>
              <circle class="dot" id="dot3a-3" cx="417" cy="206.92383" r="10"/>
              <circle class="dot" id="dot3a-2-1" cx="474.5" cy="205.92383" r="10"/>
              <circle class="dot" id="dot3a-1" cx="530.5" cy="204.92383" r="10"/>
              <circle class="dot" id="dot3a-2-2" cx="480.5" cy="265.42383" r="10"/>
              <circle class="dot" id="dot3a-2-3" cx="484" cy="324.92383" r="10"/>
            </svg>
            <svg v-if="showState['4']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="1966" height="635" viewBox="0 0 1966 635" enable-background="new">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6">
                <pattern y="0" x="0" height="6" width="6" patternUnits="userSpaceOnUse" id="EMFhbasepattern"/>
              </defs>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur7"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset9"/>

                <feComponentTransfer id="feComponentTransfer13">
                  <feFuncA type="linear" slope="0.5" id="feFuncA11"/>

                </feComponentTransfer>
                <feMerge id="feMerge19">
                  <feMergeNode id="feMergeNode15"/>

                  <feMergeNode id="feMergeNode17"/>

                </feMerge>
              </filter>
              <path d="m 1965.1696,76.42293 h -706 v -77 H 0.1697 c 70.2368,252.3892 221.2525,377.0216 422,423 l 1542.9999,212 z" id="path80" class="building" style="fill:#ffffff"/>
              <g id="str4-left" class="room" transform="translate(1e-4,1)">
                <path class="stair" id="path4811" d="M 71.9999,-1 H -9.9999997e-5 C 19.4204,68.1971 45.7632,132.4802 82.9999,191 L 140.79,152 C 109.442,108.3247 86.9071,56.342 71.9999,-1 Z"/>
                <path class="icon" id="stairs-46" d="M 74.63156,70.57895 V 81.10526 H 64.10514 V 91.63157 H 53.5789 v 10.52631 H 43.05256 v 7.89473 h 18.421 V 99.5263 H 71.9999 V 89 H 82.52614 V 78.47368 h 10.52642 v -7.89473 z"/>
              </g>
              <g id="cab401" class="room">
                <path class="study" id="path117" d="M 224,0 V 201 H 176 C 126.5497,139.7932 90.8371,73.2031 72,0 Z"/>
                <text xml:space="preserve" x="130.31519" y="100" id="text250" class="cab-num"><tspan id="tspan248" x="130.31519" y="100">401</tspan></text>
              </g>
              <g id="cab402" class="room">
                <path class="study" id="path115" d="M 370,0 V 201 H 224 V 0 Z"/>
                <text class="cab-num" id="text250-6" y="100" x="259.57108" xml:space="preserve"><tspan y="100" x="259.57108" id="tspan248-3">402</tspan></text>
              </g>
              <g id="cab403" class="room">
                <path class="study" id="path113" d="M 513,0 V 186 H 370 V 0 Z"/>
                <text xml:space="preserve" x="403.97202" y="100" id="text250-6-6" class="cab-num"><tspan id="tspan248-3-2" x="403.97202" y="100">403</tspan></text>
              </g>
              <g id="cab404" class="room">
                <path class="study" id="path111" d="M 659,0 V 186 H 513 V 0 Z"/>
                <text class="cab-num" id="text250-6-6-1" y="100" x="545.62134" xml:space="preserve" style="font-size:40px"><tspan y="100" x="545.62134" id="tspan248-3-2-2">404</tspan></text>
              </g>
              <g id="cab405" class="room">
                <path class="study" id="path109" d="M 804,0 V 186 H 659 V 0 Z"/>
                <text xml:space="preserve" x="693.64825" y="100" id="text250-6-6-1-5" class="cab-num"><tspan id="tspan248-3-2-2-7" x="693.64825" y="100">405</tspan></text>
              </g>
              <g id="cab406" class="room">
                <path class="study" id="path107" d="M 948,0 V 186 H 804 V 0 Z"/>
                <text class="cab-num" id="text250-6-6-1-5-9" y="100" x="838.54407" xml:space="preserve"><tspan y="100" x="838.54407" id="tspan248-3-2-2-7-9">406</tspan></text>
              </g>
              <g id="cab407" class="room">
                <path class="study" id="path105" d="M 1096,0 V 186 H 948 V 0 Z"/>
                <text xml:space="preserve" x="984.28174" y="100" id="text250-6-6-1-5-9-2" class="cab-num"><tspan id="tspan248-3-2-2-7-9-1" x="984.28174" y="100">407</tspan></text>
              </g>
              <g id="str4-top" class="room">
                <path class="stair" id="path4809" d="M 1258.9999,77 H 1096 V 0 h 162.9999 z"/>
                <path class="icon" id="stairs-1" d="m 1174.6316,13.73686 v 12.63157 h -12.6317 V 39 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 V 48.47368 h 12.6316 V 35.84211 h 12.6315 V 23.21053 h 12.6317 v -9.47367 z"/>
              </g>
              <g id="cab408" class="room">
                <path class="study" id="path103" d="m 1383.9999,76.99997 v 223.07622 h -217 V 76.99997 Z"/>
                <text class="cab-num" id="text250-6-6-1-5-9-2-4" y="200" x="1243.37" xml:space="preserve"><tspan y="200" x="1243.37" id="tspan248-3-2-2-7-9-1-2">408</tspan></text>
              </g>
              <g id="cab409" class="room">
                <path class="study" id="path101" d="m 1480.8741,76.94097 -96.8742,0.059 v 223.07625 h 96.8742 z"/>
                <text class="cab-num" id="text250-6-6-1-5-9-2-6" y="200" x="1395.8" xml:space="preserve"><tspan y="200" x="1395.8" id="tspan248-3-2-2-7-9-1-8">409</tspan></text>
              </g>
              <g id="cab410" class="room">
                <path class="study" id="path3833" d="m 1480.8741,76.94097 198.1629,0.0499 -0.047,222.00919 -198.1159,1.07616 z"/>
                <text class="cab-num" id="text250-6-6-1-5-9-2-3" y="200" x="1544.0879" xml:space="preserve"><tspan y="200" x="1544.0879" id="tspan248-3-2-2-7-9-1-24">410</tspan></text>
              </g>
              <g id="cab411" class="room">
                <path class="study" id="path3835" d="m 1679.0371,76.99083 90.8014,0.0854 v 243 l -90.776,0.0191 -0.017,-20.00315 z"/>
                <text class="cab-num" id="text250-6-6-1-5-9-2-94" y="200" x="1687.0204" xml:space="preserve"><tspan y="200" x="1687.0204" id="tspan248-3-2-2-7-9-1-6">411</tspan></text>
              </g>
              <g id="cab412" class="room">
                <path class="study" id="path3837" d="M 1769.8385,77.07622 1964.9999,77 l -0.1645,243.07622 h -194.9969 z"/>
                <text class="cab-num" id="text250-6-6-1-5-9-2-9" y="200" x="1830.1611" xml:space="preserve"><tspan y="200" x="1830.1611" id="tspan248-3-2-2-7-9-1-83">412</tspan></text>
              </g>
              <g id="str4-right" class="room">
                <path class="stair" id="path3847" d="M 1964.9999,434.00002 1822.0844,434 v -63.40698 h 142.9658 z"/>
                <path class="icon" id="stairs-4" d="m 1902.5264,376.89475 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 V 399 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z"/>
              </g>
              <g id="cab424" class="room">
                <path class="study" id="path119" d="M 199.1016,320.9062 250,254 H 374 V 410 C 317.272,392.6772 258.808,365.7054 199.1016,320.9062 Z"/>
                <text class="cab-num" id="text250-6-6-8" y="325" x="268.41565" xml:space="preserve"><tspan y="325" x="268.41565" id="tspan248-3-2-9">424</tspan></text>
              </g>
              <g id="cab423" class="room">
                <path class="study" id="path121" d="M 374,254 H 520 V 436.4375 L 422,423 c -16.2126,-3.9638 -32.5313,-7.7431 -48,-13 z"/>
                <text class="cab-num" id="text250-6-6-7" y="325" x="406.29791" xml:space="preserve"><tspan y="325" x="406.29791" id="tspan248-3-2-8">423</tspan></text>
              </g>
              <g id="cab422" class="room">
                <path class="study" id="path127" d="M 520,254 H 663.8135 L 663.9999,456.22658 520,436.4375 Z"/>
                <text class="cab-num" id="text250-6-6-79" y="325" x="553.97913" xml:space="preserve"><tspan y="325" x="553.97913" id="tspan248-3-2-7">422</tspan></text>
              </g>
              <g id="cab421" class="room">
                <path class="study" id="path131" d="m 663.8135,254 v 63 H 766 v -63 z"/>
                <text class="cab-num" id="text250-6-6-2" y="300" x="677.51825" xml:space="preserve"><tspan y="300" x="677.51825" id="tspan248-3-2-5">421</tspan></text>
              </g>
              <g id="cab420" class="room">
                <path class="study" id="path124" d="m 765.9999,254.00002 h 80 v 227.20703 l -182,-24.94141 L 663.8135,317 H 766 Z"/>
                <text class="cab-num" id="text250-6-6-4" y="383.32739" x="717.11273" xml:space="preserve"><tspan y="383.32739" x="717.11273" id="tspan248-3-2-6">420</tspan></text>
              </g>
              <g id="tlt4" class="room">
                <path class="toilet" id="path139" d="m 845.9999,317.20705 h 195 v 125 h 80 v 76.8437 l -275,-37.8437 z"/>
                <path d="M 922.5881,435.47057 V 409 h -5.2941 v -19.41176 c 0,-3.88235 3.1765,-7.05882 7.0588,-7.05882 h 10.5883 c 3.8824,0 7.0588,3.17647 7.0588,7.05882 V 409 h -5.2941 v 26.47057 z m 44.1176,0 v -21.17646 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.89412 -3.6706,-4.83529 -6.7059,-4.83529 h -0.4236 c -3.0353,0 -5.7528,1.94117 -6.7058,4.83529 l -8.9647,26.9294 h 10.5882 v 21.17646 z M 929.647,379 c 3.9175,0 7.0588,-3.14116 7.0588,-7.05882 0,-3.91764 -3.1413,-7.05882 -7.0588,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z m 31.7647,0 c 3.9177,0 7.0587,-3.14116 7.0587,-7.05882 0,-3.91764 -3.141,-7.05882 -7.0587,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z" id="wc" class="icon"/>
              </g>
              <g id="str4-bottom" class="room">
                <path class="stair" id="path141" d="m 1120,442 v 76.84376 l 120,16.5476 V 442 Z"/>
                <path d="m 1192.5264,456.89475 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 V 479 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z" id="stairs" class="icon"/>
              </g>
              <g id="lft4" class="room">
                <path class="stair" id="path4805" d="m 1240,441.99994 v 93.39141 l 144,19.60859 v -113 z"/>
                <path d="m 1298.6665,459 13.3334,13.33334 h -10 v 13.33333 h -6.6667 v -13.33333 h -10 L 1298.6665,459 m 33.3334,26.66667 -13.3334,-13.33333 h 10 V 459 h 6.6667 v 13.33334 h 10 l -13.3333,13.33333 m -33.3334,6.66667 h 33.3334 A 6.6666667,6.6666667 0 0 1 1338.6665,499 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.66667 h -33.3334 A 6.6666667,6.6666667 0 0 1 1291.9999,519 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.66666 m 0,6.66666 v 20 h 33.3334 v -20 z" id="lift" class="icon"/>
              </g>
              <path d="m 1384,441.99989 v 113 l 56.5267,7.97328 0.2868,-120.89695 z" id="path3839" class="void"/>
              <g id="cab414" class="room" transform="translate(0.1697,-0.57707)">
                <path class="study" id="path122" d="m 1679.9999,434.00002 v 161.82875 l -88,-12.09455 v -148.7342 -1 z"/>
                <text class="cab-num" id="text250-6-6-1-5-9-2-9-3" y="520" x="1597.7311" xml:space="preserve"><tspan y="520" x="1597.7311" id="tspan248-3-2-2-7-9-1-83-9">414</tspan></text>
              </g>
              <path d="m 1124.8135,315.07622 h -34 v 10 h 34 z" id="path3849" class="void"/>
              <circle class="dot" id="dot4-11" cx="1183.3981" cy="337.47311" r="10"/>
              <circle class="dot" id="dot4-10-1" cx="1252.0359" cy="343.38483" r="10"/>
              <circle class="dot" id="dot4-9" cx="1311.4795" cy="349.09195" r="10"/>
              <circle class="dot" id="dot4-8" cx="1374.0531" cy="351.31372" r="10"/>
              <circle class="dot" id="dot4-7-1" cx="1430.5212" cy="352.72794" r="10"/>
              <circle class="dot" id="dot4-6" cx="1487.9941" cy="352.32596" r="10"/>
              <circle class="dot" id="dot4-5" cx="1553.3459" cy="354.84927" r="10"/>
              <circle class="dot" id="dot4-4" cx="1621.6304" cy="355.4559" r="10"/>
              <circle class="dot" id="dot4-3-1" cx="1682.5383" cy="358.38483" r="10"/>
              <circle class="dot" id="dot4-2" cx="1741.4292" cy="362.52698" r="10"/>
              <circle class="dot" id="dot4-1-1" cx="1794.5592" cy="348.89093" r="10"/>
              <circle class="dot" id="dot4-12" cx="1138.3478" cy="298.43079" r="10"/>
              <circle class="dot" id="dot4-13-1" cx="1110.4838" cy="249.20464" r="10"/>
              <circle class="dot" id="dot4-14" cx="1047.0739" cy="238.3701" r="10"/>
              <circle class="dot" id="dot4-15" cx="989.84949" cy="229.79042" r="10"/>
              <circle class="dot" id="dot4-16-1" cx="922.8374" cy="219.30513" r="10"/>
              <circle class="dot" id="dot4-17" cx="855.97339" cy="219.18382" r="10"/>
              <circle class="dot" id="dot4-18" cx="797.97339" cy="218.18382" r="10"/>
              <circle class="dot" id="dot4-13-2" cx="1125.5089" cy="194.2635" r="10"/>
              <circle class="dot" id="dot4-13-3" cx="1130.5592" cy="124.5686" r="10"/>
              <circle class="dot" id="dot4-19" cx="735.97339" cy="216.68382" r="10"/>
              <circle class="dot" id="dot4-20" cx="681.47339" cy="218.18382" r="10"/>
              <circle class="dot" id="dot4-21" cx="625.47339" cy="219.18382" r="10"/>
              <circle class="dot" id="dot4-22" cx="565.47339" cy="219.68382" r="10"/>
              <circle class="dot" id="dot4-23" cx="509.47342" cy="219.68382" r="10"/>
              <circle class="dot" id="dot4-24" cx="451.47342" cy="221.18382" r="10"/>
              <circle class="dot" id="dot4-25" cx="394.97342" cy="222.18382" r="10"/>
              <circle class="dot" id="dot4-26" cx="337.85211" cy="222.47673" r="10"/>
              <circle class="dot" id="dot4-27" cx="274.57391" cy="223.89091" r="10"/>
              <circle class="dot" id="dot4-28" cx="210.53838" cy="223.61275" r="10"/>
              <circle class="dot" id="dot4-29" cx="150.10081" cy="201.84068" r="10"/>
              <circle class="dot" id="dot4-16-2" cx="922.23669" cy="285.35544" r="10"/>
              <circle class="dot" id="dot4-10-2" cx="1241.0234" cy="414.04172" r="10"/>
              <circle class="dot" id="dot4-1-2" cx="1789.3077" cy="402.52701" r="10"/>
              <circle class="dot" id="dot4-3-2" cx="1659.8691" cy="413.42648" r="10"/>
              <circle class="dot" id="dot4-7-2" cx="1422.2367" cy="420.91177" r="10"/>
              <g id="cab413" class="room">
                <path id="path10635" d="m 1680.1696,433.42295 284.5,0.4531 0.5,200.54688 -285,-39.17123 z" class="study"/>
                <text xml:space="preserve" x="1795.9995" y="520" id="text250-6-6-1-5-9-2-92" class="cab-num"><tspan id="tspan248-3-2-2-7-9-1-4" x="1795.9995" y="520">413</tspan></text>
              </g>
            </svg>
            <svg v-if="showState['4a']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="582.99988" height="563.92389" viewBox="0 0 582.99988 563.92389">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6">
                <pattern y="0" x="0" height="6" width="6" patternUnits="userSpaceOnUse" id="EMFhbasepattern"/>
              </defs>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur7"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset9"/>

                <feComponentTransfer id="feComponentTransfer13">
                  <feFuncA type="linear" slope="0.5" id="feFuncA11"/>

                </feComponentTransfer>
                <feMerge id="feMerge19">
                  <feMergeNode id="feMergeNode15"/>

                  <feMergeNode id="feMergeNode17"/>

                </feMerge>
              </filter>
              <path d="M 582.8135,19.0001 531.3048,16.2966 530.9644,16.2786 220.8135,0 l 0.1864,172.9239 -68.1864,1.0762 v 70.9238 H 0 v 319 h 411.9999 c 37.4362,-82.2087 99.0376,-120.9277 171,-141 z" id="path93" class="building" style="fill:#ffffff"/>
              <path d="m 220.9307,0.9063 0.0692,172.0176 -68.1864,1.0762 v 70.9238 L 2.9307,244.9059 c 129.2856,-32.9907 214.7446,-147.5493 218,-244 z" id="path3853" class="void"/>
              <g id="cab4a28" class="room">
                <path class="study" id="path4815" d="m 220.8135,1e-4 0.1582,173 160.5184,-0.076 -0.6766,-164.3693 z"/>
                <text id="text32-3" class="cab-num" y="110" x="260.12393" xml:space="preserve"><tspan y="110" x="260.12393" id="tspan30-7">428</tspan></text>
              </g>
              <g id="cab4a27" class="room">
                <path class="study" id="path128" d="M 381.4901,172.9241 472.8632,172.8067 472.9694,13.1505 380.783,8.465 Z"/>
                <text xml:space="preserve" x="389.6268" y="110" id="text32-77" class="cab-num"><tspan id="tspan30-8" x="389.6268" y="110">427</tspan></text>
              </g>
              <g id="cab4a26" class="room">
                <path class="study" id="path126" d="M 530.3272,172.9239 H 472.9999 V 13.2403 l 58,3.1523 v 156.5313 z"/>
                <text transform="rotate(90)" id="text32-7" class="cab-num" y="-488.96732" x="60" xml:space="preserve"><tspan y="-488.96732" x="60" id="tspan30-5">426</tspan></text>
              </g>
              <g id="cab4a25" class="room">
                <path class="study" id="path4817" d="m 582.9308,19.0001 -51.9309,-2.5212 v 156.445 h 52 z"/>
                <text transform="rotate(90)" id="text32" class="cab-num" y="-543.6955" x="60" xml:space="preserve"><tspan y="-543.6955" x="60" id="tspan30">425</tspan></text>
              </g>
              <g id="cab4a35" class="room">
                <path class="study" id="path4819" d="M 152.7083,245.0291 V 395.1449 H 0.1052 V 245.0291 Z"/>
                <text id="text32-6" class="cab-num" y="335.84567" x="38.192909" xml:space="preserve"><tspan y="335.84567" x="38.192909" id="tspan30-81">435</tspan></text>
              </g>
              <g id="cab4a34" class="room">
                <path class="study" id="path4821" d="m 0,449.0001 h 152.8135 v 88.9238 H 0 Z"/>
                <text id="text32-8" class="cab-num" y="511.51324" x="36.778698" xml:space="preserve"><tspan y="511.51324" x="36.778698" id="tspan30-6">434</tspan></text>
              </g>
              <g id="str4a" class="room">
                <path class="stair" id="path4829" d="m 152.8135,537.9239 v 26 H 0 v -26 z"/>
                <path class="icon" id="stairs-6" d="m 78.939374,541.50333 v 4.8 h -4.8001 v 4.7999 h -4.7999 v 4.8001 h -4.8 v 3.6 h 8.3999 v -4.8 h 4.8001 v -4.7999 h 4.8 v -4.8001 h 4.8 v -3.6 z"/>
              </g>
              <g id="lft4a" class="room">
                <path class="stair" id="path4827" d="m 362.9999,390.9239 h -141 v -110 l 37,-37 h 104 z"/>
                <path class="icon" id="lift-0" d="m 277.91606,284.683 13.3334,13.3334 h -10 v 13.3333 h -6.6667 v -13.3333 h -10 l 13.3333,-13.3334 m 33.3334,26.6667 -13.3334,-13.3333 h 10 V 284.683 h 6.6667 v 13.3334 h 10 l -13.3333,13.3333 m -33.3334,6.6667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.6666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.6667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.6667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.6666 m 0,6.6666 v 20 h 33.3334 v -20 z"/>
              </g>
              <g id="tlt4a" class="room">
                <path class="toilet" id="path4825" d="m 362.9999,467.9239 v -77 h -141 v 77 z"/>
                <path class="icon" d="m 268.68232,464.29506 v -26.4798 h -5.28 v -19.3599 c 0,-3.92 3.2,-7.0399 7.0399,-7.0399 h 10.64 c 3.8399,0 7.0399,3.1199 7.0399,7.0399 v 19.3599 h -5.2799 v 26.4798 z m 44.1596,0 v -21.1199 h 10.56 l -8.96,-26.9598 c -0.96,-2.8799 -3.68,-4.7999 -6.7199,-4.7999 h -0.4 c -3.04,0 -5.76,1.92 -6.72,4.7999 l -8.9599,26.9598 h 10.5599 v 21.1199 z m -37.1197,-56.4796 c 3.92,0 7.12,-3.12 7.12,-7.04 0,-3.9199 -3.2,-7.0399 -7.12,-7.0399 -3.92,0 -7.0399,3.12 -7.0399,7.0399 0,3.92 3.1199,7.04 7.0399,7.04 z m 31.7598,0 c 3.9199,0 7.1199,-3.12 7.1199,-7.04 0,-3.9199 -3.2,-7.0399 -7.1199,-7.0399 -3.84,0 -7.04,3.12 -7.04,7.0399 0,3.92 3.12,7.04 7.04,7.04 z" id="path418"/>
              </g>
              <g id="cab4a33" class="room">
                <path class="study" id="path4823" d="m 202.1475,563.9239 v -96 h 160.8524 v 96 z"/>
                <text id="text32-4" class="cab-num" y="528.68842" x="248.91074" xml:space="preserve"><tspan y="528.68842" x="248.91074" id="tspan30-43">433</tspan></text>
              </g>
              <path d="m 362.9999,302.9239 h 79.8136 v -59.0187 l -79.8672,-0.052 z" id="path4831" class="void"/>
              <path d="m 442.8135,243.9052 h 28.16146 l 0.0312,59.02491 h -28.19261 z" id="path118" style="stroke-width:1.01273692" class="void"/>
              <g id="cab4a29" class="room">
                <path class="study" id="path130" d="m 362.9999,302.9239 v 88 h 103.3969 v -88 z"/>
                <text id="text32-1" class="cab-num" y="361.81833" x="375.48285" xml:space="preserve"><tspan y="361.81833" x="375.48285" id="tspan30-9">429</tspan></text>
              </g>
              <path d="m 461.9999,390.9239 h 49 v -146 h 72 v 178 c -84.3994,22.2916 -139.3819,71.111 -171,141 h -49 v -173 z" id="path44" class="void"/>
              <circle class="dot" id="dot4a-12" cx="179.25157" cy="536.70026" r="10"/>
              <circle class="dot" id="dot4a-11" cx="178.19092" cy="482.6066" r="10"/>
              <circle class="dot" id="dot4a-10" cx="187.3833" cy="421.08832" r="10"/>
              <circle class="dot" id="dot4a-9" cx="183.14066" cy="360.27713" r="10"/>
              <circle class="dot" id="dot4a-8" cx="187.3833" cy="300.1731" r="10"/>
              <circle class="dot" id="dot4a-7" cx="222.73865" cy="249.96848" r="10"/>
              <circle class="dot" id="dot4a-6" cx="270.8219" cy="208.95627" r="10"/>
              <circle class="dot" id="dot4a-5" cx="329.51178" cy="206.83496" r="10"/>
              <circle class="dot" id="dot4a-4" cx="383.95898" cy="206.12785" r="10"/>
              <circle class="dot" id="dot4a-3" cx="441.23465" cy="204.71364" r="10"/>
              <circle class="dot" id="dot4a-2-1" cx="494.97473" cy="204.00653" r="10"/>
              <circle class="dot" id="dot4a-1" cx="546.59351" cy="202.59233" r="10"/>
              <circle class="dot" id="dot4a-2-2" cx="492.85342" cy="257.74664" r="10"/>
              <circle class="dot" id="dot4a-2-3" cx="491.43921" cy="315.02231" r="10"/>
            </svg>

            <svg v-if="showState['5']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="1966" height="635" viewBox="0 0 1966 635">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6"/>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur6"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset8"/>

                <feComponentTransfer id="feComponentTransfer12">
                  <feFuncA type="linear" slope="0.5" id="feFuncA10"/>

                </feComponentTransfer>
                <feMerge id="feMerge18">
                  <feMergeNode id="feMergeNode14"/>

                  <feMergeNode id="feMergeNode16"/>

                </feMerge>
              </filter>
              <path d="m 1964.9999,77 h -706 V 0 H 0 c 70.2368,252.3892 221.2525,377.0216 422,423 l 1542.9999,212 z" id="path80" class="building" style="fill:#ffffff"/>
              <g id="str5-left" class="room">
                <path class="stair" id="path4811" d="m 71.9999,2e-5 h -72 c 19.4205,69.1971 45.7633,133.4802 83,192 l 58.40882,-39.22097 C 110.06072,109.10375 86.9071,57.34202 71.9999,2e-5 Z"/>
                <path class="icon" id="stairs-46" d="M 72.52632,67.94738 V 78.47369 H 61.9999 V 89 H 51.47366 V 99.52631 H 40.94732 v 7.89473 h 18.421 V 96.89473 H 69.89466 V 86.36843 H 80.4209 V 75.84211 h 10.52642 v -7.89473 z"/>
              </g>
              <g id="cab501" class="room">
                <path d="m 71.9999,2e-5 h 298 v 279 c -148.927,-20.41693 -246.2676,-94.78769 -298,-279 z" id="path68" class="study"/>
                <text xml:space="preserve" x="225.87498" y="142.9704" id="text250-3-9" class="cab-num"><tspan id="tspan248-9-9" x="225.87498" y="142.9704">501</tspan></text>
              </g>
              <g id="cab502" class="room">
                <path d="m 369.9999,2e-5 h 150 v 129 h -150 z" id="path70" class="study"/>
                <text xml:space="preserve" x="406.89435" y="76.502373" id="text250-3-8" class="cab-num"><tspan id="tspan248-9-3" x="406.89435" y="76.502373">502</tspan></text>
              </g>
              <g id="cab503" class="room">
                <path class="study" id="path117" d="m 519.9999,129.00002 v 105 h -65 v -105 z"/>
                <text transform="rotate(90)" xml:space="preserve" x="140.83524" y="-473.28558" id="text250-3-6" class="cab-num"><tspan id="tspan248-9-0" x="140.83524" y="-473.28558">503</tspan></text>
              </g>
              <g id="cab504" class="room">
                <path class="study" id="path119" d="m 519.9999,2e-5 h 221 v 306 H 520.41411 Z"/>
                <text class="cab-num" id="text250-3" y="170" x="590.3512" xml:space="preserve"><tspan y="170" x="590.3512" id="tspan248-9">504</tspan></text>
              </g>
              <g id="cab505" class="room">
                <path class="study" id="path121" d="m 740.9999,2e-5 v 306 h 120 v -306 z"/>
                <text xml:space="preserve" x="763.27612" y="170.56839" id="text250-3-5" class="cab-num"><tspan id="tspan248-9-4" x="763.27612" y="170.56839">505</tspan></text>
              </g>
              <g id="cab506" class="room">
                <path class="study" id="path123" d="m 860.9999,2e-5 v 306 h 236 v -306 z"/>
                <text class="cab-num" id="text250-3-2" y="170" x="938.15942" xml:space="preserve"><tspan style="font-size:40px" y="170" x="938.15942" id="tspan248-9-7">506</tspan></text>
              </g>
              <g id="str5-top" class="room">
                <path class="stair" id="path4809" d="m 1258.9999,77 -162,2e-5 v -77 l 162,-2e-5 z"/>
                <path class="icon" id="stairs-1" d="m 1180.1579,16.89475 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 V 51.63157 h 12.6316 V 39 h 12.6315 V 26.36842 h 12.6317 v -9.47367 z"/>
              </g>
              <g id="cab408" class="room">
                <path class="study" id="path103" d="m 1389.9999,77 2,242.00002 h -225 V 77 Z"/>
                <text xml:space="preserve" x="1243.5277" y="200" id="text250-3-89" class="cab-num"><tspan id="tspan248-9-5" x="1243.5277" y="200">408</tspan></text>
              </g>
              <g id="cab410" class="room">
                <path class="study" id="path3833" d="m 1389.9999,77 290.117,0.01 1.883,241.99005 h -290 z"/>
                <text xml:space="preserve" x="1501.3546" y="200" id="text250-3-4" class="cab-num"><tspan id="tspan248-9-94" x="1501.3546" y="200">410</tspan></text>
              </g>
              <g id="cab412" class="room">
                <path class="study" id="path3837" d="m 1680.1169,77.00997 284.883,-0.01 -0.1864,243.07622 -282.8136,-1.0762 z"/>
                <text xml:space="preserve" x="1789.6567" y="200" id="text250-3-26" class="cab-num"><tspan id="tspan248-9-38" x="1789.6567" y="200">412</tspan></text>
              </g>
              <g id="tlt5" class="room">
                <path class="toilet" id="path139" d="m 849.2426,359.00002 197.7573,1.66382 V 442 H 1120 v 76.8437 L 846.9999,481.70711 Z"/>
                <path d="M 929.5934,457.21957 V 430.749 h -5.2941 v -19.41176 c 0,-3.88235 3.1765,-7.05882 7.0588,-7.05882 h 10.5883 c 3.8824,0 7.0588,3.17647 7.0588,7.05882 V 430.749 h -5.2941 v 26.47057 z m 44.1176,0 v -21.17646 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.89412 -3.6706,-4.83529 -6.7059,-4.83529 h -0.4236 c -3.0353,0 -5.7528,1.94117 -6.7058,4.83529 l -8.9647,26.9294 h 10.5882 v 21.17646 z M 936.6523,400.749 c 3.9175,0 7.0588,-3.14116 7.0588,-7.05882 0,-3.91764 -3.1413,-7.05882 -7.0588,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z m 31.7647,0 c 3.9177,0 7.0587,-3.14116 7.0587,-7.05882 0,-3.91764 -3.141,-7.05882 -7.0587,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z" id="wc" class="icon"/>
              </g>
              <g id="str5-bottom" class="room">
                <path class="stair" id="path141" d="m 1120,442 v 76.84376 l 124.75,16.5476 L 1244.625,442 Z"/>
                <path d="m 1189.0087,456.35654 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 v -12.63157 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z" id="stairs" class="icon"/>
              </g>
              <g id="lft5" class="room">
                <path class="stair" id="path4805" d="M 1244.625,441.99994 V 536.0163 L 1384,554.99989 v -113 z"/>
                <path d="m 1298.6665,462.33333 13.3334,13.33334 h -10 V 489 h -6.6667 v -13.33333 h -10 l 13.3333,-13.33334 M 1331.9999,489 1318.6665,475.66667 h 10 v -13.33334 h 6.6667 v 13.33334 h 10 L 1331.9999,489 m -33.3334,6.66667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.66666 v 20 A 6.6666667,6.6666667 0 0 1 1331.9999,529 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.66667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.66666 m 0,6.66666 v 20 h 33.3334 v -20 z" id="lift" class="icon"/>
              </g>
              <path d="m 1383.9999,442 10e-5,113.20439 60.9999,8.2653 V 442.00522 Z" id="path3839" class="void" style="stroke-width:0.98785418"/>
              <g id="str5-right" class="room">
                <path class="stair" id="path3847" d="m 1964.9999,439.00002 -142.9308,-1e-5 v -65 l 142.9826,1.0762 z"/>
                <path class="icon" id="stairs-4" d="m 1905.1579,381.89475 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 V 404 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z"/>
              </g>
              <g id="cab413" class="room">
                <path class="study" id="path129" d="m 1964.9999,439.00002 -0.069,196 -282.931,-39 v -157 h 140 v 0 z"/>
                <text xml:space="preserve" x="1787.8334" y="529.60199" id="text250-3-0" class="cab-num"><tspan id="tspan248-9-49" x="1787.8334" y="529.60199">413</tspan></text>
              </g>
              <circle id="dot5-4" class="dot" cx="1714.0071" cy="347.76602" r="10"/>
              <circle id="dot5-5" class="dot" cx="1651.7644" cy="350.37259" r="10"/>
              <circle id="dot5-6" class="dot" cx="1593.2411" cy="350.02945" r="10"/>
              <circle id="dot5-7" class="dot" cx="1531.6675" cy="349.36398" r="10"/>
              <circle id="dot5-8" class="dot" cx="1472.5583" cy="348.77823" r="10"/>
              <circle id="dot5-13" class="dot" cx="1179.1151" cy="346.8848" r="10"/>
              <circle id="dot5-15" class="dot" cx="1049.8301" cy="342.38303" r="10"/>
              <circle id="dot5-16" class="dot" cx="990.18359" cy="340.41425" r="10"/>
              <circle id="dot5-17" class="dot" cx="931.48694" cy="339.70712" r="10"/>
              <circle id="dot5-14-1" class="dot" cx="1118.8301" cy="345.02084" r="10"/>
              <circle id="dot5-1" class="dot" cx="1919.6637" cy="349.76599" r="10"/>
              <circle id="dot5-2" class="dot" cx="1849.6638" cy="347.68628" r="10"/>
              <circle id="dot5-3" class="dot" cx="1784.1284" cy="346.57364" r="10"/>
              <circle id="dot5-18" class="dot" cx="865.07446" cy="337.78683" r="10"/>
              <circle id="dot5-19" class="dot" cx="799.0365" cy="338.55029" r="10"/>
              <circle id="dot5-22" class="dot" cx="583.99988" cy="343.50003" r="10"/>
              <circle id="dot5-24-1" class="dot" cx="432.29459" cy="337.32593" r="10"/>
              <circle id="dot5-24-3" class="dot" cx="415.99991" cy="205.00002" r="10"/>
              <circle id="dot5-25" class="dot" cx="363.99991" cy="331.00003" r="10"/>
              <circle id="dot5-26" class="dot" cx="293.49991" cy="314.00003" r="10"/>
              <circle id="dot5-27" class="dot" cx="228.99989" cy="285.00003" r="10"/>
              <circle id="dot5-9-1" class="dot" cx="1415.5583" cy="347.27823" r="10"/>
              <circle id="dot5-10" class="dot" cx="1354.5583" cy="347.77823" r="10"/>
              <circle id="dot5-12-1" class="dot" cx="1236.5583" cy="346.77823" r="10"/>
              <circle id="dot5-11" class="dot" cx="1289.5583" cy="348.27823" r="10"/>
              <circle id="dot5-14-2" class="dot" cx="1127.0145" cy="295.66299" r="10"/>
              <circle id="dot5-14-3" class="dot" cx="1130.642" cy="237.89699" r="10"/>
              <circle id="dot5-14-4" class="dot" cx="1130.8136" cy="166.38228" r="10"/>
              <circle id="dot5-14-5" class="dot" cx="1134.4496" cy="105.7721" r="10"/>
              <circle id="dot5-20" class="dot" cx="728.99988" cy="340.00003" r="10"/>
              <circle id="dot5-21" class="dot" cx="660.49988" cy="339.00003" r="10"/>
              <circle id="dot5-23" class="dot" cx="504.84482" cy="339.03555" r="10"/>
              <circle class="dot" id="dot5-24-2" cx="431.69229" cy="272.55029" r="10"/>
              <circle class="dot" id="dot5-28" cx="176.49989" cy="236.50002" r="10"/>
              <circle class="dot" id="dot5-29" cx="136.49989" cy="192.50002" r="10"/>
              <circle class="dot" id="dot5-12-2" cx="1244.4999" cy="414.50003" r="10"/>
              <circle class="dot" id="dot5-9-2" cx="1416.4999" cy="416.50003" r="10"/>
            </svg>
            <svg v-if="showState['5a']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="583.00031" height="563.92383" viewBox="0 0 583.00031 563.92383">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6"/>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur6"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset8"/>

                <feComponentTransfer id="feComponentTransfer12">
                  <feFuncA type="linear" slope="0.5" id="feFuncA10"/>

                </feComponentTransfer>
                <feMerge id="feMerge18">
                  <feMergeNode id="feMergeNode14"/>

                  <feMergeNode id="feMergeNode16"/>

                </feMerge>
              </filter>
              <path d="m 582.8139,19 -362,-19 0.1864,172.9238 L 152.8139,174 v 70.9238 H 4e-4 v 319 h 411.9999 c 37.4362,-82.2087 99.0376,-120.9277 171,-141 z" id="path93" class="building" style="fill:#ffffff"/>
              <path d="M 220.9311,0.9062 221.1175,173.83 152.8139,174 v 70.9238 L 2.9311,244.9058 c 129.2856,-32.9907 214.7446,-147.5493 218,-244 z" id="path3853" class="void"/>
              <g id="cab5a13" class="room">
                <path class="study" id="path3861" d="m 221.1175,173.83 h 65 L 286.14664,3.4360359 220.8139,0 Z"/>
                <text transform="rotate(90)" id="text32-1" class="cab-num" y="-241.20157" x="52.500801" xml:space="preserve"><tspan y="-241.20157" x="52.500801" id="tspan30-1">513</tspan></text>
              </g>
              <g id="cab5a14" class="room">
                <path class="study" id="path4815" d="M 286.14664,3.4360359 286.1175,173.83 446.0003,172.9238 445.9691,11.7988 Z"/>
                <text id="text32-6" class="cab-num" y="100" x="338.50552" xml:space="preserve"><tspan y="100" x="338.50552" id="tspan30-8">514</tspan></text>
              </g>
              <g id="cab5a12" class="room">
                <path class="study" id="path4817" d="m 582.907,19 -136.93795,-7.2012 0.0312,161.125 h 137 z"/>
                <text id="text32" class="cab-num" y="100" x="475.56528" xml:space="preserve"><tspan y="100" x="475.56528" id="tspan30">512</tspan></text>
              </g>
              <g id="cab5a22" class="room">
                <path class="study" id="path4819" d="M 152.8143,244.9234 V 467.6742 H 0 V 244.9234 Z"/>
                <text id="text32-81" class="cab-num" y="375.95328" x="37.278049" xml:space="preserve"><tspan y="375.95328" x="37.278049" id="tspan30-4">522</tspan></text>
              </g>
              <g id="cab5a21" class="room">
                <path class="study" id="path4821" d="m 4e-4,467.9238 h 152.8135 v 70 H 4e-4 Z"/>
                <text id="text32-12" class="cab-num" y="516.9726" x="40.106476" xml:space="preserve"><tspan y="516.9726" x="40.106476" id="tspan30-65">521</tspan></text>
              </g>
              <g id="str5a" class="room">
                <path class="stair" id="path4829" d="m 152.8139,537.9238 v 26 H 4e-4 v -26 z"/>
                <path class="icon" id="stairs-6" d="m 78.378779,542 v 4.8 h -4.8001 v 4.7999 h -4.7999 V 556.4 h -4.8 v 3.6 h 8.3999 v -4.8 h 4.8001 v -4.7999 h 4.8 V 545.6 h 4.8 V 542 Z"/>
              </g>
              <g id="lft5a" class="room">
                <path class="stair" id="path4827" d="m 362.9467,390.8531 h -141 v -110 l 37,-37 h 104 z"/>
                <path class="icon" id="lift-0" d="m 279.6669,288.92383 13.3334,13.3334 h -10 v 13.3333 h -6.6667 v -13.3333 h -10 l 13.3333,-13.3334 m 33.3334,26.6667 -13.3334,-13.3333 h 10 v -13.3334 h 6.6667 v 13.3334 h 10 l -13.3333,13.3333 m -33.3334,6.6667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.6666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.6667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.6667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.6666 m 0,6.6666 v 20 h 33.3334 v -20 z"/>
              </g>
              <g id="tlt5a" class="room">
                <path class="toilet" id="path4825" d="m 363.0003,467.9238 v -77 h -141 v 77 z"/>
                <path class="icon" id="wc-7" d="m 266.88939,463.68116 v -26.4706 h -5.2941 v -19.4117 c 0,-3.8824 3.1765,-7.0588 7.0588,-7.0588 h 10.5883 c 3.8824,0 7.0588,3.1764 7.0588,7.0588 v 19.4117 h -5.2941 v 26.4706 z m 44.1176,0 v -21.1765 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.8941 -3.6706,-4.8352 -6.7059,-4.8352 h -0.4236 c -3.0353,0 -5.7528,1.9411 -6.7058,4.8352 l -8.9647,26.9294 h 10.5882 v 21.1765 z m -37.0587,-56.4706 c 3.9175,0 7.0588,-3.1411 7.0588,-7.0588 0,-3.9176 -3.1413,-7.0588 -7.0588,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z m 31.7647,0 c 3.9177,0 7.0587,-3.1411 7.0587,-7.0588 0,-3.9176 -3.141,-7.0588 -7.0587,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z"/>
              </g>
              <g id="cab5a19" class="room">
                <path class="study" id="path137" d="m 200.0003,545.9238 v -78 h 22 0 41 v 78 z" style="stroke-width:0.91581094"/>
                <text transform="rotate(90)" id="text32-0" class="cab-num" y="-216.29459" x="469.30988" xml:space="preserve"><tspan y="-216.29459" x="469.30988" id="tspan30-7">519</tspan></text>
              </g>
              <g id="cab5a20" class="room">
                <path class="study" id="path135" d="m 200.0003,563.9238 h 163 v -96 h -100 v 78 h -63 z"/>
                <text id="text32-61" class="cab-num" y="527.88428" x="276.28015" xml:space="preserve"><tspan y="527.88428" x="276.28015" id="tspan30-6">520</tspan></text>
              </g>
              <path d="m 363.0003,304 h 79.8136 v -60.0939 l -79.8672,-0.053 z" id="path4831" class="void"/>
              <path d="m 442.8139,304 36.1864,-0.0762 v -60 l -36.1864,-0.018 z" id="path133" class="void"/>
              <g id="cab5a15" class="room">
                <path class="study" id="path131" d="m 363.0003,304 v 86.9238 h 102 v -87 h -102 z"/>
                <text id="text32-8" class="cab-num" y="358.78885" x="374.56799" xml:space="preserve"><tspan y="358.78885" x="374.56799" id="tspan30-12">515</tspan></text>
              </g>
              <path d="m 462.0003,390.9238 h 49 v -146 h 72 v 178 c -84.3994,22.2916 -139.3819,71.111 -171,141 h -49 v -173 z" id="path44" class="void"/>
              <circle class="dot" id="dot5a-10" cx="175.5" cy="536.92383" r="10"/>
              <circle class="dot" id="dot5a-9" cx="179.60513" cy="479.93497" r="10"/>
              <circle class="dot" id="dot5a-8" cx="184.55487" cy="420.12378" r="10"/>
              <circle class="dot" id="dot5a-7" cx="186.67619" cy="359.31259" r="10"/>
              <circle class="dot" id="dot5a-6" cx="191.41884" cy="297.673" r="10"/>
              <circle class="dot" id="dot5a-5" cx="226.20311" cy="245.5542" r="10"/>
              <circle class="dot" id="dot5a-4" cx="283.78635" cy="214.02728" r="10"/>
              <circle class="dot" id="dot5a-3" cx="355.00314" cy="211.78465" r="10"/>
              <circle class="dot" id="dot5a-2" cx="422.97119" cy="212.49176" r="10"/>
              <circle class="dot" id="dot5a-1-1" cx="493.56052" cy="213.19887" r="10"/>
              <circle class="dot" id="dot5a-1-2" cx="494.26764" cy="271.88873" r="10"/>
              <circle class="dot" id="dot5a-1-3" cx="490.02499" cy="329.87149" r="10"/>
            </svg>
            <svg v-if="showState['6']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="1966" height="635.07928" viewBox="0 0 1966 635.07928">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6">

              </defs>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur7"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset9"/>

                <feComponentTransfer id="feComponentTransfer13">
                  <feFuncA type="linear" slope="0.5" id="feFuncA11"/>

                </feComponentTransfer>
                <feMerge id="feMerge19">
                  <feMergeNode id="feMergeNode15"/>

                  <feMergeNode id="feMergeNode17"/>

                </feMerge>
              </filter>
              <path d="m 1964.9998,77.07928 h -706 v -77 H 0 c 70.2368,252.3892 221.2525,377.0216 422,423 l 1542.9998,212 z" id="path80" class="building" style="fill:#ffffff"/>
              <g id="str6-left" class="room">
                <path class="stair" id="path103" d="M 6.03e-4,0.07964 C 18.0728,66.504964 44.3292,127.76135 78.073,184.28881 l 54.1436,-37.93159 C 102.7933,103.57182 79.7271,56.21934 65.0248,3.6e-4 Z"/>
                <path d="m 65.881779,62.7877 v 9.47368 h -9.47378 v 9.47367 h -9.47362 v 9.47368 h -9.4737 v 7.10526 h 16.5789 v -9.47368 h 9.4737 v -9.47368 h 9.47362 v -9.47368 h 9.47378 V 62.7877 Z" id="stairs-40" class="icon"/>
              </g>
              <g id="cab501" class="room">
                <path class="study" id="path220" d="M 366.77723,0.15686417 367.35133,270.76551 C 212.39033,271.26488 104.86595,153.14568 64.488946,0 Z"/>
                <text style="font-size:40px" class="cab-num" id="text250-1" y="121.61053" x="208.95703" xml:space="preserve"><tspan y="121.61053" x="208.95703" id="tspan248-3">501</tspan></text>
              </g>
              <g id="cab504" class="room" transform="matrix(1,0,0,0.99685037,0,4.9406414e-4)">
                <path class="study" id="path194" d="M 733.54248,0.15686417 V 311.22512 H 367.39518 L 366.87098,0.15686417 Z"/>
                <text xml:space="preserve" x="511.08215" y="200" id="text250" class="cab-num" style="font-size:40px"><tspan id="tspan248" x="511.08215" y="200">504</tspan></text>
              </g>
              <g id="cab506" class="room">
                <path class="study" id="path3936" d="M 1096.7505,0.15686417 V 310.24537 H 733.54248 V 0.15686417 Z"/>
                <text class="cab-num" id="text250-2" y="200" x="875.59998" xml:space="preserve" style="font-size:40px"><tspan y="200" x="875.59998" id="tspan248-8">506</tspan></text>
              </g>
              <g id="str6-top" class="room">
                <path class="stair" id="path91" d="M 1259.7503,77.156864 H 1096.7505 V 0.15686417 h 162.9998 z"/>
                <path d="m 1184.3977,11.580378 v 12.63157 H 1171.766 V 36.84352 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 V 46.3172 h 12.6316 V 33.68563 h 12.6315 V 21.054048 h 12.6317 v -9.47367 z" id="stairs-4" class="icon"/>
              </g>
              <g id="tlt6" class="room">
                <path class="toilet" id="path139" d="M 883.9328,370.01038 1040,369.57293 v 63.22665 l 80,0.0933 v 86.0301 L 884.6531,486.50985 Z"/>
                <path d="m 945.44465,468.65623 v -26.47057 h -5.2941 V 422.7739 c 0,-3.88235 3.1765,-7.05882 7.0588,-7.05882 h 10.5883 c 3.8824,0 7.0588,3.17647 7.0588,7.05882 v 19.41176 h -5.2941 v 26.47057 z m 44.1176,0 v -21.17646 h 10.58835 l -8.96475,-26.9294 c -0.9882,-2.89412 -3.6706,-4.83529 -6.7059,-4.83529 h -0.4236 c -3.0353,0 -5.7528,1.94117 -6.7058,4.83529 l -8.9647,26.9294 h 10.5882 v 21.17646 z m -37.0587,-56.47057 c 3.9175,0 7.0588,-3.14116 7.0588,-7.05882 0,-3.91764 -3.1413,-7.05882 -7.0588,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z m 31.7647,0 c 3.9177,0 7.0587,-3.14116 7.0587,-7.05882 0,-3.91764 -3.141,-7.05882 -7.0587,-7.05882 -3.9177,0 -7.0589,3.14118 -7.0589,7.05882 0,3.91766 3.1412,7.05882 7.0589,7.05882 z" id="wc" class="icon"/>
              </g>
              <g id="str6-bottom" class="room">
                <path class="stair" id="path77" d="m 1120,432.89288 v 86.03014 l 119.9999,16.51926 v -102.5494 z"/>
                <path d="m 1186.103,452.20606 v 12.63157 h -12.6317 v 12.63157 h -12.6315 v 12.63157 h -12.6316 v 9.47368 h 22.1052 v -12.63157 h 12.6316 v -12.63157 h 12.6315 v -12.63158 h 12.6317 v -9.47367 z" id="stairs" class="icon"/>
              </g>
              <path d="m 1383.9999,555.17255 580.9999,79.90673 V 77.07936 H 1162.0115 V 331.6963 h 132.6992 v 96.14102 5.12326 l 89.2892,-0.0677 z" id="path222" class="void"/>
              <g id="lft6" class="room">
                <path class="stair" id="path115" d="m 1239.9999,433.13603 v 102.30625 l 144,19.97342 V 433.13603 Z"/>
                <path d="m 1292.3235,452.04984 13.3334,13.33334 h -10 v 13.33333 h -6.6667 v -13.33333 h -10 l 13.3333,-13.33334 m 33.3334,26.66667 -13.3334,-13.33333 h 10 v -13.33334 h 6.6667 v 13.33334 h 10 l -13.3333,13.33333 m -33.3334,6.66667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.66666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.66667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.66667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.66666 m 0,6.66666 v 20 h 33.3334 v -20 z" id="lift" class="icon"/>
              </g>
              <circle class="dot" id="dot6-1" cx="1238.1235" cy="396.33472" r="10"/>
              <circle class="dot" id="dot6-2" cx="1177.6548" cy="368.56848" r="10"/>
              <circle class="dot" id="dot6-3-1" cx="1117.835" cy="345.01562" r="10"/>
              <circle class="dot" id="dot6-3-2" cx="1123.0031" cy="275.60144" r="10"/>
              <circle class="dot" id="dot6-3-3" cx="1125.4639" cy="197.60132" r="10"/>
              <circle class="dot" id="dot6-3-4" cx="1128.6318" cy="120.18726" r="10"/>
              <circle class="dot" id="dot6-4" cx="1056.4208" cy="341.72632" r="10"/>
              <circle class="dot" id="dot6-5" cx="983.59235" cy="341.02283" r="10"/>
              <circle class="dot" id="dot6-6" cx="915.59235" cy="339.85486" r="10"/>
              <circle class="dot" id="dot6-7" cx="841.75946" cy="340.72662" r="10"/>
              <circle class="dot" id="dot6-8" cx="768.92749" cy="342.1409" r="10"/>
              <circle class="dot" id="dot6-9" cx="696.09552" cy="342.14087" r="10"/>
              <circle class="dot" id="dot6-10" cx="616.19244" cy="345.67645" r="10"/>
              <circle class="dot" id="dot6-11" cx="544.0675" cy="340.72665" r="10"/>
              <circle class="dot" id="dot6-12" cx="475.47815" cy="336.48404" r="10"/>
              <circle class="dot" id="dot6-13" cx="405.47461" cy="340.72665" r="10"/>
              <circle class="dot" id="dot6-14" cx="338.29947" cy="327.99872" r="10"/>
              <circle class="dot" id="dot6-15" cx="276.0741" cy="294.05759" r="10"/>
              <circle class="dot" id="dot6-16" cx="223.74818" cy="263.65204" r="10"/>
              <circle class="dot" id="dot6-17" cx="174.95775" cy="231.83221" r="10"/>
              <circle class="dot" id="dot6-18" cx="132.53136" cy="192.94138" r="10"/>
            </svg>
            <svg v-if="showState['6a']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="582.99982" height="563.92389" viewBox="0 0 582.99982 563.92389">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6">

              </defs>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur7"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset9"/>

                <feComponentTransfer id="feComponentTransfer13">
                  <feFuncA type="linear" slope="0.5" id="feFuncA11"/>

                </feComponentTransfer>
                <feMerge id="feMerge19">
                  <feMergeNode id="feMergeNode15"/>

                  <feMergeNode id="feMergeNode17"/>

                </feMerge>
              </filter>
              <path d="m 582.8133,19 -362,-19 0.1865,172.9238 L 152.8133,174 v 70.9238 H 0 v 319.0001 h 411.9998 c 37.4361,-82.2087 99.0375,-120.9277 171,-141 z" id="path93" class="building" style="fill:#ffffff"/>
              <path d="M 220.8133,0 220.9998,172.9238 153.0391,174 v 70.9238 L 4.2453,244.9058 C 132.5916,211.9151 217.5814,96.4507 220.8133,0 Z" id="path3853" class="void"/>
              <g id="cab6a07" class="room">
                <path class="study" id="path4815" d="M 220.8187,0.02845 220.9998,172.9238 405.4371,172.999 404.8284,9.7383 Z"/>
                <text id="text30-9" class="cab-num" y="110" x="276.9321" xml:space="preserve"><tspan y="110" x="276.9321" id="tspan28-2">607</tspan></text>
              </g>
              <g id="cab6a06" class="room">
                <path class="study" id="path4817" d="M 582.7448,19.0752 404.8284,9.7383 405.4371,172.999 h 177.5408 z"/>
                <text id="text30" class="cab-num" y="110" x="455.37677" xml:space="preserve"><tspan y="110" x="455.37677" id="tspan28">606</tspan></text>
              </g>
              <g id="cab6a14" class="room">
                <path class="study" id="path4819" d="M 152.9498,245.0305 V 443.2424 H 0.0853 V 245.0305 Z"/>
                <text id="text30-6" class="cab-num" y="357.83783" x="37.930046" xml:space="preserve"><tspan y="357.83783" x="37.930046" id="tspan28-91">614</tspan></text>
              </g>
              <g id="cab6a13" class="room">
                <path style="stroke-width:1.09690511" class="study" id="path4821" d="m 0.0171,443.2424 h 152.9327 v 94.6667 H 0.0171 Z"/>
                <text id="text30-0" class="cab-num" y="507.74448" x="37.930035" xml:space="preserve"><tspan y="507.74448" x="37.930035" id="tspan28-12">613</tspan></text>
              </g>
              <g id="str6a" class="room">
                <path class="stair" id="path4829" d="m 153.1476,537.9091 v 26.0148 H 0.0171 v -26.0148 z"/>
                <path class="icon" id="stairs-2" d="m 79.657939,540.54711 v 5.2632 h -5.2633 v 5.2632 h -5.2631 v 5.2631 h -5.2631 v 3.9474 h 9.2105 v -5.2631 h 5.2631 v -5.2633 h 5.2631 v -5.2631 h 5.263299 v -3.9474 z"/>
              </g>
              <g id="lft6a" class="room">
                <path class="stair" id="path4827" d="M 368.2,390.8979 H 223.3897 V 278.6553 L 261.3895,240.901 H 368.2 Z"/>
                <path class="icon" id="lift-0" d="m 282.43949,281.94193 13.3334,13.3334 h -10 v 13.3333 h -6.6667 v -13.3333 h -10 l 13.3333,-13.3334 m 33.3334,26.6667 -13.3334,-13.3333 h 10 v -13.3334 h 6.6667 v 13.3334 h 10 l -13.3333,13.3333 m -33.3334,6.6667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.6666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.6667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.6667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.6666 m 0,6.6666 v 20 h 33.3334 v -20 z"/>
              </g>
              <g id="tlt6a" class="room">
                <path class="toilet" id="path4825" d="M 368.2,463.0244 V 390.8979 H 223.2884 v 72.1265 z"/>
                <path d="m 277.86855,453.34254 v -22.0588 h -4.4118 v -16.1765 c 0,-3.2353 2.6471,-5.8823 5.8823,-5.8823 h 8.8236 c 3.2353,0 5.8824,2.647 5.8824,5.8823 v 16.1765 h -4.4118 v 22.0588 z m 36.7646,0 v -17.647 h 8.8236 l -7.4706,-22.4412 c -0.8235,-2.4118 -3.0588,-4.0294 -5.5882,-4.0294 h -0.353 c -2.5294,0 -4.794,1.6176 -5.5882,4.0294 l -7.4706,22.4412 h 8.8235 v 17.647 z m -30.8822,-47.0588 c 3.2646,0 5.8823,-2.6176 5.8823,-5.8824 0,-3.2646 -2.6177,-5.8823 -5.8823,-5.8823 -3.2648,0 -5.8824,2.6177 -5.8824,5.8823 0,3.2648 2.6176,5.8824 5.8824,5.8824 z m 26.4706,0 c 3.2647,0 5.8822,-2.6176 5.8822,-5.8824 0,-3.2646 -2.6175,-5.8823 -5.8822,-5.8823 -3.2648,0 -5.8825,2.6177 -5.8825,5.8823 0,3.2648 2.6177,5.8824 5.8825,5.8824 z" id="wc-8" class="icon"/>
              </g>
              <g id="cab6a12" class="room">
                <path class="study" id="path4823" d="M 201.9852,563.9239 V 461.9717 h 166.1802 v 101.9522 z"/>
                <text id="text30-7" class="cab-num" y="526.12921" x="247.23364" xml:space="preserve"><tspan y="526.12921" x="247.23364" id="tspan28-1">612</tspan></text>
              </g>
              <path d="m 368.3422,298.5549 h 75.7785 v -57.7303 l -75.8294,-0.051 z" id="path4831" class="void"/>
              <path d="m 444.1207,240.8246 h 34.8866 v 57.613 l -34.8866,0.1173 z" id="path226" class="void"/>
              <g id="cab6a08" class="room">
                <path class="study" id="path228" d="m 368.3276,298.5549 -0.1276,92.343 h 99.4254 l 0.035,-92.4603 z"/>
                <text id="text30-4" class="cab-num" y="357.83783" x="378.75549" xml:space="preserve"><tspan y="357.83783" x="378.75549" id="tspan28-9">608</tspan></text>
              </g>
              <path d="m 464.8409,390.9239 h 47.8494 V 244.9238 h 70.3095 v 178.0001 c -82.4178,22.2916 -140.3909,71.111 -171.2666,141 h -43.5678 v -173 z" id="path44" class="void"/>
              <circle class="dot" id="dot6a-1" cx="549.42194" cy="206.12785" r="10"/>
              <circle class="dot" id="dot6a-2-1" cx="496.38895" cy="208.24918" r="10"/>
              <circle class="dot" id="dot6a-2-2" cx="495.68185" cy="266.23193" r="10"/>
              <circle class="dot" id="dot6a-2-3" cx="494.26764" cy="321.38629" r="10"/>
              <circle class="dot" id="dot6a-3" cx="443.35593" cy="207.54207" r="10"/>
              <circle class="dot" id="dot6a-4" cx="387.49454" cy="210.3705" r="10"/>
              <circle class="dot" id="dot6a-5" cx="330.21884" cy="211.78471" r="10"/>
              <circle class="dot" id="dot6a-6" cx="272.94321" cy="213.90602" r="10"/>
              <circle class="dot" id="dot6a-7" cx="231.93102" cy="246.43295" r="10"/>
              <circle class="dot" id="dot6a-8" cx="192.33305" cy="281.08121" r="10"/>
              <circle class="dot" id="dot6a-9" cx="188.79752" cy="336.2355" r="10"/>
              <circle class="dot" id="dot6a-10" cx="186.67619" cy="387.14716" r="10"/>
              <circle class="dot" id="dot6a-11" cx="183.84776" cy="440.8873" r="10"/>
              <circle class="dot" id="dot6a-12" cx="179.60512" cy="497.45584" r="10"/>
              <circle class="dot" id="dot6a-13" cx="176.7767" cy="546.95331" r="10"/>
            </svg>
            <svg v-if="showState['7a']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg2" width="584.00006" height="564.95074" viewBox="0 0 584.00006 564.95074">
              <metadata id="metadata8">

              </metadata>
              <defs id="defs6"/>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur7"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset9"/>

                <feComponentTransfer id="feComponentTransfer13">
                  <feFuncA type="linear" slope="0.5" id="feFuncA11"/>

                </feComponentTransfer>
                <feMerge id="feMerge19">
                  <feMergeNode id="feMergeNode15"/>

                  <feMergeNode id="feMergeNode17"/>

                </feMerge>
              </filter>
              <path style="fill:#ffffff" d="m 583.3135,19.526961 -362,-18.99999985 0.1864,172.92379885 -68.1864,1.0762 v 70.9238 H 0.5 v 319 h 411.9999 c 37.4362,-82.2087 99.0376,-120.9277 171,-141 z" id="path93" class="building"/>
              <path d="m 221.4307,1.4331611 0.0692,172.0175989 -68.1864,1.0762 v 70.9238 l -149.8828,-0.018 c 129.2856,-32.9907 214.7446,-147.549299 218,-243.9999989 z" id="path3853" class="void"/>
              <g id="cab7a07" class="room">
                <path class="study" id="path4815" d="m 221.3191,0.53286115 0.1808,172.91789885 88.1763,-0.01 -0.372,-168.1850989 z"/>
                <text xml:space="preserve" x="226.11586" y="104.25459" class="cab-num" id="text390-4"><tspan id="tspan388-4" x="226.11586" y="104.25459">707</tspan></text>
              </g>
              <g id="cab7a06" class="room">
                <path class="study" id="path120" d="m 309.3042,5.2599611 65.1957,3.4252 V 173.45076 h -64.625 z"/>
                <text transform="rotate(90)" xml:space="preserve" x="53.564163" y="-325.75613" class="cab-num" id="text390-7"><tspan id="tspan388-7" x="53.564163" y="-325.75613">706</tspan></text>
              </g>
              <g id="cab7a05" class="room">
                <path class="study" id="path122" d="m 374.4999,173.45076 61.8136,2e-4 V 11.745661 L 374.4999,8.5839611 Z"/>
                <text transform="rotate(90)" xml:space="preserve" x="54.618607" y="-389.07217" class="cab-num" id="text390-3"><tspan id="tspan388-9" x="54.618607" y="-389.07217">705</tspan></text>
              </g>
              <g id="cab7a04" class="room">
                <path class="study" id="path124" d="m 436.3135,173.45096 87.6708,-2e-4 V 16.450761 l -87.6708,-4.7051 z"/>
                <text xml:space="preserve" x="440.31631" y="112.99178" class="cab-num" id="text390-1"><tspan id="tspan388-5" x="440.31631" y="112.99178">704</tspan></text>
              </g>
              <g id="cab7a03" class="room">
                <path class="study" id="path126" d="m 523.9843,173.45076 h 59.4138 l -0.085,-153.923799 -59.3292,-3.0762 z"/>
                <text transform="rotate(90)" xml:space="preserve" x="58.085526" y="-539.995" class="cab-num" id="text390"><tspan id="tspan388" x="58.085526" y="-539.995">703</tspan></text>
              </g>
              <g id="cab7a15" class="room">
                <path class="study" id="path4819" d="m 153.3135,245.45076 v 58 H 0.5 v -58 z"/>
                <text xml:space="preserve" x="37.080833" y="289.39706" class="cab-num" id="text390-47"><tspan id="tspan388-82" x="37.080833" y="289.39706">715</tspan></text>
              </g>
              <g id="cab7a14" class="room">
                <path class="study" id="path128" d="m 153.3135,303.45076 v 150 H 0.5 v -150 z"/>
                <text xml:space="preserve" x="39.37368" y="390.3558" class="cab-num" id="text390-8"><tspan id="tspan388-8" x="39.37368" y="390.3558">714</tspan></text>
              </g>
              <g id="cab7a13" class="room">
                <path class="study" id="path4821" d="m 0.5,453.45076 h 152.8135 v 85 H 0.5 Z"/>
                <text xml:space="preserve" x="38.323509" y="509.20346" class="cab-num" id="text390-5"><tspan id="tspan388-93" x="38.323509" y="509.20346">713</tspan></text>
              </g>
              <g id="str7a" class="room">
                <path class="stair" id="path4829" d="m 153.3135,538.45076 v 26 H 0.5 v -26 z"/>
                <path d="m 82,541.95074 v 4.8 h -4.8001 v 4.7999 H 72.4 v 4.8001 h -4.8 v 3.6 h 8.3999 v -4.8 H 80.8 v -4.7999 h 4.8 v -4.8001 h 4.8 v -3.6 z" id="stairs-6" class="icon"/>
              </g>
              <g id="lft7a" class="room">
                <path class="stair" id="path4827" d="m 363.4999,391.45076 h -141 v -110 l 37,-37 h 104 z"/>
                <path d="m 277.3333,288.61739 13.3334,13.3334 h -10 v 13.3333 H 274 v -13.3333 h -10 l 13.3333,-13.3334 m 33.3334,26.6667 -13.3334,-13.3333 h 10 v -13.3334 H 314 v 13.3334 h 10 l -13.3333,13.3333 m -33.3334,6.6667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.6666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.6667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.6667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.6666 m 0,6.6666 v 20 h 33.3334 v -20 z" id="lift-0" class="icon"/>
              </g>
              <path d="m 363.4999,304.52696 h 79.8136 v -60.0939 l -79.8136,0.0177 z" id="path4831" class="void"/>
              <path d="m 443.3135,244.43306 h 29.9914 v 60.0641 l -9.9914,0.03 h -20 z" id="path41" class="void"/>
              <g id="cab7a08" class="room">
                <path class="study" id="path3857" d="m 443.3135,304.52696 h -79.8136 v 86.9238 h 99.8136 v -86.9238 z"/>
                <text xml:space="preserve" x="374.90128" y="361.90134" class="cab-num" id="text390-73"><tspan id="tspan388-97" x="374.90128" y="361.90134">708</tspan></text>
              </g>
              <g id="tlt7a" class="room">
                <path class="toilet" id="path4825" d="m 363.4999,468.45076 v -77 h -141 v 77 z"/>
                <path d="m 267.2941,464.24484 v -26.4706 H 262 v -19.4117 c 0,-3.8824 3.1765,-7.0588 7.0588,-7.0588 h 10.5883 c 3.8824,0 7.0588,3.1764 7.0588,7.0588 v 19.4117 h -5.2941 v 26.4706 z m 44.1176,0 v -21.1765 H 322 l -8.9647,-26.9294 c -0.9882,-2.8941 -3.6706,-4.8352 -6.7059,-4.8352 h -0.4236 c -3.0353,0 -5.7528,1.9411 -6.7058,4.8352 l -8.9647,26.9294 h 10.5882 v 21.1765 z m -37.0587,-56.4706 c 3.9175,0 7.0588,-3.1411 7.0588,-7.0588 0,-3.9176 -3.1413,-7.0588 -7.0588,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z m 31.7647,0 c 3.9177,0 7.0587,-3.1411 7.0587,-7.0588 0,-3.9176 -3.141,-7.0588 -7.0587,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z" id="wc-7" class="icon"/>
              </g>
              <g id="cab7a12" class="room">
                <path class="study" id="path4823" d="m 222.4999,564.45076 v -96 h 141 v 96 z"/>
                <text xml:space="preserve" x="256.11234" y="528.83441" class="cab-num" id="text390-38"><tspan id="tspan388-70" x="256.11234" y="528.83441">712</tspan></text>
              </g>
              <path d="m 462.4999,391.45076 h 49 v -146 h 72 v 178 c -84.3994,22.2916 -139.3819,71.111 -171,141 h -49 v -173 z" id="path44" class="void"/>
              <ellipse style="fill:none" id="path136" cx="183.99989" cy="478.45078" rx="7.5" ry="15"/>
              <circle class="dot" id="dot7a-13" cx="181.78017" cy="498.77402" r="10"/>
              <circle class="dot" id="dot7a-12" cx="181.28017" cy="444.43515" r="10"/>
              <circle class="dot" id="dot7a-11" cx="181.43703" cy="388.9205" r="10"/>
              <circle class="dot" id="dot7a-10" cx="182.68398" cy="338.83469" r="10"/>
              <circle class="dot" id="dot7a-9" cx="183.78029" cy="289.98276" r="10"/>
              <circle class="dot" id="dot7a-8" cx="218.6692" cy="256.80344" r="10"/>
              <circle class="dot" id="dot7a-7" cx="254.07729" cy="224.12325" r="10"/>
              <circle class="dot" id="dot7a-6" cx="299.88675" cy="205.46638" r="10"/>
              <circle class="dot" id="dot7a-5" cx="352.96219" cy="202.66304" r="10"/>
              <circle class="dot" id="dot7a-4" cx="412.20914" cy="202.24886" r="10"/>
              <circle class="dot" id="dot7a-3-1" cx="473.89285" cy="202.78877" r="10"/>
              <circle class="dot" id="dot7a-3-2" cx="493.10342" cy="251.79915" r="10"/>
              <circle class="dot" id="dot7a-3-3" cx="490.71951" cy="308.38242" r="10"/>
              <circle class="dot" id="dot7a-2" cx="522.78015" cy="202.274" r="10"/>
              <circle class="dot" id="dot7a-14" cx="180.99989" cy="548.95074" r="10"/>
              <circle class="dot" id="dot7a-1" cx="569.49988" cy="203.95076" r="10"/>
            </svg>
            <svg v-if="showState['8a']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg86" width="582.99988" height="563.92371" viewBox="0 0 582.99988 563.92371">
              <metadata id="metadata92">

              </metadata>
              <defs id="defs90"/>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur7"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset9"/>

                <feComponentTransfer id="feComponentTransfer13">
                  <feFuncA type="linear" slope="0.5" id="feFuncA11"/>

                </feComponentTransfer>
                <feMerge id="feMerge19">
                  <feMergeNode id="feMergeNode15"/>

                  <feMergeNode id="feMergeNode17"/>

                </feMerge>
              </filter>
              <path d="m 582.81348,19 -362,-19 0.1864,172.9237 -68.1864,1.0762 v 70.9238 H 0 v 319 h 411.99988 c 37.4362,-82.2087 99.0376,-120.9277 171,-141 z" id="path93" class="building" style="fill:#ffffff"/>
              <path d="m 220.93068,0.9062 0.069,172.0175 -68.1864,1.0762 v 70.9238 L 2.93051,244.9047 C 132.21608,211.9149 217.67508,97.3563 220.93048,0.9056 Z" id="path3853" class="void"/>
              <g id="cab8a02" class="room">
                <path class="study" id="path4815" d="m 220.81348,1e-4 0.1864,172.9237 179.5972,-0.017 -0.7567,-163.3906 z"/>
                <text class="cab-num" id="text218-4" y="105.64309" x="271.19806" xml:space="preserve"><tspan y="105.64309" x="271.19806" id="tspan216-9">802</tspan></text>
              </g>
              <g id="cab8a01" class="room">
                <path class="study" id="path126" d="m 400.04058,172.9237 h 182.9302 L 582.70788,19 399.84038,9.5162 Z"/>
                <text id="text218" y="109.39373" x="453.45706" xml:space="preserve" class="cab-num"><tspan y="109.39373" x="453.45706" id="tspan216">801</tspan></text>
              </g>
              <g id="cab8a10" class="room">
                <path class="study" id="path4819" d="m 152.81348,244.9237 v 58 H 0 v -58 z"/>
                <text class="cab-num" id="text218-62" y="287.56943" x="37.098015" xml:space="preserve"><tspan y="287.56943" x="37.098015" id="tspan216-0">810</tspan></text>
              </g>
              <g id="cab8a09" class="room">
                <path class="study" id="path128" d="m 152.81348,302.9237 v 150 H 0 v -150 z"/>
                <text class="cab-num" id="text218-69" y="391.01169" x="38.72337" xml:space="preserve"><tspan y="391.01169" x="38.72337" id="tspan216-3">809</tspan></text>
              </g>
              <g id="cab8a08" class="room">
                <path class="study" id="path4821" d="m 0,452.9237 h 152.81348 v 85 H 0 Z"/>
                <text class="cab-num" id="text218-1" y="507.60712" x="38.163876" xml:space="preserve"><tspan y="507.60712" x="38.163876" id="tspan216-5">808</tspan></text>
              </g>
              <g id="str8a" class="room">
                <path class="stair" id="path4829" d="m 152.81348,537.9237 v 26 H 0 v -26 z"/>
                <path style="opacity:1" d="m 78.2754,540.7734 v 4.8 h -4.8001 v 4.7999 h -4.7999 v 4.8001 h -4.8 v 3.6 h 8.3999 v -4.8 h 4.8001 v -4.7999 h 4.79998 v -4.8001 h 4.8 v -3.6 z" id="stairs-6" class="icon"/>
              </g>
              <g id="lft8a" class="room">
                <path class="stair" id="path4827" d="m 362.99988,390.9237 h -141 v -110 l 37,-37 h 104 z"/>
                <path d="m 279.76455,284.4823 13.3334,13.3334 h -10 v 13.3333 h -6.6667 v -13.3333 h -10 l 13.3333,-13.3334 m 33.3334,26.6667 -13.3334,-13.3333 h 10 v -13.3334 h 6.6667 v 13.3334 h 10 l -13.3333,13.3333 m -33.3334,6.6667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.6666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.6667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.6667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.6666 m 0,6.6666 v 20 h 33.3334 v -20 z" id="lift-0" class="icon"/>
              </g>
              <path d="m 362.99988,303.9999 h 79.8136 V 243.906 l -79.8136,0.019 z" id="path4831" class="void"/>
              <path d="m 442.81348,243.906 h 29.9914 v 60.0641 l -9.9914,0.03 h -20 z" id="path41" class="void"/>
              <g id="cab8a03" class="room">
                <path class="study" id="path3857" d="m 442.81348,303.9999 h -79.8136 v 86.9238 h 99.8136 v -86.9238 z"/>
                <text class="cab-num" id="text218-6" y="359.51978" x="374.48291" xml:space="preserve"><tspan y="359.51978" x="374.48291" id="tspan216-90">803</tspan></text>
              </g>
              <g id="tlt8a" class="room">
                <path class="toilet" id="path4825" d="m 362.99988,467.9237 v -77 h -141 v 77 z"/>
                <path d="m 268.82662,464.4975 v -26.4706 h -5.2941 v -19.4117 c 0,-3.8824 3.1765,-7.0588 7.0588,-7.0588 h 10.5883 c 3.8824,0 7.0588,3.1764 7.0588,7.0588 v 19.4117 h -5.2941 v 26.4706 z m 44.1176,0 V 443.321 h 10.5883 l -8.9647,-26.9294 c -0.9882,-2.8941 -3.6706,-4.8352 -6.7059,-4.8352 h -0.4236 c -3.0353,0 -5.7528,1.9411 -6.7058,4.8352 l -8.9647,26.9294 h 10.5882 v 21.1765 z m -37.0587,-56.4706 c 3.9175,0 7.0588,-3.1411 7.0588,-7.0588 0,-3.9176 -3.1413,-7.0588 -7.0588,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z m 31.7647,0 c 3.9177,0 7.0587,-3.1411 7.0587,-7.0588 0,-3.9176 -3.141,-7.0588 -7.0587,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z" id="wc-7" class="icon"/>
              </g>
              <g id="cab8a07" class="room">
                <path class="study" id="path4823" d="m 221.99988,563.9237 v -96 h 141 v 96 z"/>
                <text class="cab-num" id="text218-6-2" y="528.03156" x="257.2186" xml:space="preserve">
              <tspan y="528.03156" x="257.2186" id="tspan216-90-1" >807</tspan>
            </text>
              </g>
              <path d="m 461.99988,390.9237 h 49 v -146 h 72 v 178 c -84.3994,22.2916 -139.3819,71.111 -171,141 h -49 v -173 z" id="path44" class="void"/>
              <ellipse style="opacity:1;fill:none;stroke-width:0.99999994" id="path136" cx="183.49989" cy="477.92383" rx="7.5" ry="15"/>
              <circle class="dot" id="dot8a-13" cx="181.28017" cy="498.24707" r="10"/>
              <circle class="dot" id="dot8a-12" cx="180.78017" cy="443.9082" r="10"/>
              <circle class="dot" id="dot8a-11" cx="180.93703" cy="388.39355" r="10"/>
              <circle class="dot" id="dot8a-10" cx="182.18398" cy="338.30774" r="10"/>
              <circle class="dot" id="dot8a-9" cx="183.28029" cy="289.45581" r="10"/>
              <circle class="dot" id="dot8a-8" cx="218.1692" cy="256.27649" r="10"/>
              <circle class="dot" id="dot8a-7" cx="253.57729" cy="223.59631" r="10"/>
              <circle class="dot" id="dot8a-6" cx="299.38672" cy="204.93945" r="10"/>
              <circle class="dot" id="dot8a-5" cx="352.46216" cy="202.13611" r="10"/>
              <circle class="dot" id="dot8a-4" cx="411.70911" cy="201.72192" r="10"/>
              <circle class="dot" id="dot8a-3-1" cx="473.39282" cy="202.26184" r="10"/>
              <circle class="dot" id="dot8a-3-2" cx="492.60352" cy="251.27222" r="10"/>
              <circle class="dot" id="dot8a-3-3" cx="490.21948" cy="307.85547" r="10"/>
              <circle class="dot" id="dot8a-2" cx="522.28015" cy="201.74707" r="10"/>
              <circle class="dot" id="dot8a-14" cx="180.49989" cy="548.42383" r="10"/>
              <circle class="dot" id="dot8a-1" cx="568.99988" cy="203.42383" r="10"/>

              <path id="here" v-if="move" d="m -16.12079,474.59105 a 29.432041,29.432041 0 0 0 -14.102291,14.29322 34.751085,34.751085 0 0 0 3.13688,36.1695 L 0,563.9237 27.05894,525.05377 a 33.632722,33.632722 0 0 0 6.6829,-20.32148 c 0,-23.89478 -24.54944,-41.8977 -49.86263,-30.14124 z M 0.46371,516.0523 A 12.301993,12.301993 0 1 1 12.73842,503.75031 12.301993,12.301993 0 0 1 0.46371,516.0523 Z" style="fill:#ffa500"/>

            </svg>
            <svg v-if="showState['9a']" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg10" width="584.00012" height="564.95074" viewBox="0 0 584.00012 564.95074">
              <metadata id="metadata16">

              </metadata>
              <defs id="defs14"/>

              <filter id="dropShadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" id="feGaussianBlur7"/>

                <feOffset dx="10" dy="10" result="offsetblur" id="feOffset9"/>

                <feComponentTransfer id="feComponentTransfer13">
                  <feFuncA type="linear" slope="0.5" id="feFuncA11"/>

                </feComponentTransfer>
                <feMerge id="feMerge19">
                  <feMergeNode id="feMergeNode15"/>

                  <feMergeNode id="feMergeNode17"/>

                </feMerge>
              </filter>
              <path d="m 583.31354,19.526961 -362,-18.99999985 0.1864,172.92379885 -68.18644,1.0762 v 70.9238 H 0.5 v 319 h 411.99994 c 37.4362,-82.2087 99.0376,-120.9277 171,-141 z" id="path93" class="building" style="fill:#ffffff"/>
              <path d="m 221.43074,1.4331611 0.069,172.0175989 -68.18644,1.0762 v 70.9238 H 0.5 C 129.7856,212.46006 218.17514,97.883461 221.43054,1.4327611 Z" id="path3853" class="void"/>
              <g id="cab9a04" class="room" style="font-size:40px" transform="matrix(1.0015255,0,0,0.99479079,-0.45528134,0.0021623)">
                <path class="study" id="path310" d="m 298.44194,4.4622765 -77.0112,-4.04718799 0.1864,173.94177149 76.8248,-0.0211 z" style="stroke-width:1.00293934"/>
                <text id="text390-7" class="cab-num" y="102.33125" x="220.86328" xml:space="preserve"><tspan y="102.33125" x="220.86328" id="tspan388-3">904</tspan></text>
              </g>
              <path d="M 371.18954,8.3137961 298.44193,4.4622765 V 173.42977 l 72.74761,0.025 z" id="path308" class="void" style="stroke-width:1.00026238"/>
              <g id="cab9a02" class="room" transform="matrix(1,0,0,0.99454549,0,0.04546028)">
                <path class="study" id="path306" d="M 441.50444,12.069299 371.18954,8.3344396 V 174.36036 l 70.3149,-0.0503 z" style="stroke-width:1.00293934"/>
                <text id="text390-8" class="cab-num" y="105.25745" x="370.59555" xml:space="preserve"><tspan y="105.25745" x="370.59555" id="tspan388-1">902</tspan></text>
              </g>
              <g id="cab9a01" class="room" transform="matrix(1.0039494,0,0,0.99441686,-1.7436786,0.06738459)">
                <path class="study" id="path304" d="M 583.46521,174.28461 583.31354,19.526961 441.50444,12.069299 V 174.31056 Z" style="stroke-width:1.00252604"/>
                <text id="text390" class="cab-num" y="111.66631" x="478.52872" xml:space="preserve"><tspan y="111.66631" x="478.52872" id="tspan388">901</tspan></text>
              </g>
              <g id="cab9a12" class="room">
                <path class="study" id="path4819" d="m 153.3135,245.45076 v 58 H 0.5 v -58 z"/>
                <text id="text390-0" class="cab-num" y="287.54727" x="36.02739" xml:space="preserve"><tspan y="287.54727" x="36.02739" id="tspan388-9">912</tspan></text>
              </g>
              <g id="cab9a11" class="room">
                <path class="study" id="path128" d="m 153.3135,303.4508 v 150 H 0.5 v -150 z"/>
                <text id="text390-1" class="cab-num" y="391.1384" x="40.623585" xml:space="preserve"><tspan y="391.1384" x="40.623585" id="tspan388-0">911</tspan></text>
              </g>
              <g id="cab9a10" class="room">
                <path class="study" id="path4821" d="m 0.5,453.4508 h 152.8135 v 85 H 0.5 Z"/>
                <text id="text390-71" class="cab-num" y="509.85397" x="38.166447" xml:space="preserve"><tspan y="509.85397" x="38.166447" id="tspan388-46">910</tspan></text>
              </g>
              <g id="str9a" class="room">
                <path class="stair" id="path4829" d="m 153.3135,538.45076 v 26 H 0.5 v -26 z"/>
                <path d="m 77.297944,541.98701 v 4.8 h -4.8001 v 4.7999 h -4.7999 v 4.8001 h -4.8 v 3.6 h 8.3999 v -4.8 h 4.8001 v -4.7999 h 4.8 v -4.8001 h 4.8 v -3.6 z" id="stairs-6" class="icon"/>
              </g>
              <g id="lft9a" class="room">
                <path class="stair" id="path4827" d="m 363.49994,391.45076 h -141 v -110 l 37,-37 h 104 z"/>
                <path d="m 277.3333,287.61739 13.3334,13.3334 h -10 v 13.3333 H 274 v -13.3333 h -10 l 13.3333,-13.3334 m 33.3334,26.6667 -13.3334,-13.3333 h 10 v -13.3334 H 314 v 13.3334 h 10 l -13.3333,13.3333 m -33.3334,6.6667 h 33.3334 a 6.6666667,6.6666667 0 0 1 6.6666,6.6666 v 20 a 6.6666667,6.6666667 0 0 1 -6.6666,6.6667 h -33.3334 a 6.6666667,6.6666667 0 0 1 -6.6666,-6.6667 v -20 a 6.6666667,6.6666667 0 0 1 6.6666,-6.6666 m 0,6.6666 v 20 h 33.3334 v -20 z" id="lift-0" class="icon"/>
              </g>
              <path d="m 363.49994,304.52696 h 79.8136 v -60.0939 l -79.8136,0.018 z" id="path4831" class="void"/>
              <path d="m 443.31354,244.43306 h 29.9914 v 60.0641 l -9.9914,0.03 h -20 z" id="path41" class="void"/>
              <g id="cab9a05" class="room">
                <path class="study" id="path3857" d="m 443.31354,304.52696 h -79.8136 v 86.9238 h 99.81361 v -86.9238 z"/>
                <text id="text390-6" class="cab-num" y="360.02573" x="375.08499" xml:space="preserve"><tspan y="360.02573" x="375.08499" id="tspan388-2">905</tspan></text>
              </g>
              <g id="tlt9a" class="room">
                <path class="toilet" id="path4825" d="m 363.49994,468.45076 v -77 h -141 v 77 z"/>
                <path d="m 269.2941,464.24484 v -26.4706 H 264 v -19.4117 c 0,-3.8824 3.1765,-7.0588 7.0588,-7.0588 h 10.5883 c 3.8824,0 7.0588,3.1764 7.0588,7.0588 v 19.4117 h -5.2941 v 26.4706 z m 44.1176,0 v -21.1765 H 324 l -8.9647,-26.9294 c -0.9882,-2.8941 -3.6706,-4.8352 -6.7059,-4.8352 h -0.4236 c -3.0353,0 -5.7528,1.9411 -6.7058,4.8352 l -8.9647,26.9294 h 10.5882 v 21.1765 z m -37.0587,-56.4706 c 3.9175,0 7.0588,-3.1411 7.0588,-7.0588 0,-3.9176 -3.1413,-7.0588 -7.0588,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z m 31.7647,0 c 3.9177,0 7.0587,-3.1411 7.0587,-7.0588 0,-3.9176 -3.141,-7.0588 -7.0587,-7.0588 -3.9177,0 -7.0589,3.1412 -7.0589,7.0588 0,3.9177 3.1412,7.0588 7.0589,7.0588 z" id="wc-7" class="icon"/>
              </g>
              <g id="cab9a09" class="room">
                <path class="study" id="path4823" d="m 222.49994,564.45076 v -96 h 141 v 96 z"/>
                <text id="text390-4" class="cab-num" y="529.29462" x="253.44966" xml:space="preserve"><tspan y="529.29462" x="253.44966" id="tspan388-4">909</tspan></text>
              </g>
              <path d="m 462.49994,391.45076 h 49 v -146 h 72 v 178 c -84.3994,22.2916 -139.3819,71.111 -171,141 h -49 v -173 z" id="path44" class="void"/>
              <ellipse style="fill:none" id="path136" cx="183.99992" cy="478.45081" rx="7.5" ry="15"/>
              <circle class="dot" id="dot9a-13" cx="181.7802" cy="498.77405" r="10"/>
              <circle class="dot" id="dot9a-12" cx="181.2802" cy="444.43518" r="10"/>
              <circle class="dot" id="dot9a-11" cx="181.43706" cy="388.92041" r="10"/>
              <circle class="dot" id="dot9a-10" cx="182.68401" cy="338.83459" r="10"/>
              <circle class="dot" id="dot9a-9" cx="183.78032" cy="289.98267" r="10"/>
              <circle class="dot" id="dot9a-8" cx="218.66924" cy="256.80334" r="10"/>
              <circle class="dot" id="dot9a-7" cx="254.07726" cy="224.12317" r="10"/>
              <circle class="dot" id="dot9a-6" cx="299.88672" cy="205.46631" r="10"/>
              <circle class="dot" id="dot9a-5" cx="352.96216" cy="202.66296" r="10"/>
              <circle class="dot" id="dot9a-4" cx="412.20911" cy="202.24878" r="10"/>
              <circle class="dot" id="dot9a-3" cx="473.89282" cy="202.7887" r="10"/>
              <circle class="dot" id="dot9a-2" cx="493.10339" cy="251.79907" r="10"/>
              <circle class="dot" id="dot9a-1" cx="490.71948" cy="308.38232" r="10"/>
              <circle class="dot" id="dot9a-14" cx="180.99992" cy="548.95081" r="10"/>
            </svg>


          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import KeyBoard from "@/components/other/KeyBoard";
import DotTest from "./dottest.vue"
import PathFinder from './pathfinder.vue';
export default {
  name: "navigation",
  components: {KeyBoard, PathFinder, DotTest},
  data() {
    return {
      homeDot: 'dot3-11-2',
      destDot: '',
      value: '',
      move: false,
      showState : {
        "0": false,
        "1": false,
        "2": false,
        "2a": false,
        "3": false,
        "3a": false,
        "4": false,
        "4a": false,
        "5": false,
        "5a": false,
        "6": false,
        "6a": false,
        "7a": false,
        "8a": false,
        "9a": false},
      cabFloorMatch : {
        "1":  ["101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "121", "123", "124", "125", "134"],
        "2":  ["201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "220", "222", "223", "224"],
        "2a": ["225", "226", "228", "232", "233", "234"],
        "3":  ["301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "321", "322", "323", "324", "325"],
        "3a": ["326", "327", "328", "329", "330", "334", "335", "336", "337", "338"],
        "4":  ["401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "420", "421", "422", "423", "424"],
        "4a": ["425", "426", "427", "428", "429", "433", "434", "435"],
        "5":  ["501", "502", "503", "504", "505", "506", "408", "410", "412", "413"],
        "5a": ["512", "513", "514", "515", "519", "520", "521", "522"],
        "6":  ["501", "504", "506"],
        "6a": ["606", "607", "608", "612", "613", "614"],
        "7a": ["703", "704", "705", "706", "707", "708", "712", "713", "714"],
        "8a": ["801", "802", "803", "807", "808", "809", "810"],
        "9a": ["901", "902", "903", "904", "905", "909", "910", "911", "912"]}
    };
  },
  methods: {
    showSelect(id) {
      for (var item in this.showState) {
        if (item === id) {
          continue;
        }
        this.showState[item]= false

      }
      this.showState[id] = !this.showState[id]
    },
    roomNumValidate(room) {

      for (var floor in this.cabFloorMatch) {

        for (var cab in this.cabFloorMatch[floor]){

          if (room === this.cabFloorMatch[floor][cab] )
            return ('cab' + floor +  room.slice(1))

        }

      }
      this.value = ''
      return (-1)
    }

  },
  watch: {
    value: function () {
      if (this.value.length===3)
        this.destDot=this.roomNumValidate(this.value)
      console.log(this.homeDot,this.destDot)
    }
  }
}
</script>

<style >
.build{
margin-top: 500px;
}
#svg8 here anime {
  targets: '.motion-path-demo .el';
  translateX: path('x');
  translateY: path('y');
  rotate: path('angle');
  easing: 'linear';
  duration: 2000;
  loop: true
}
.cab-search {
  targets: "#cab-num";
  borderColor: red;
  color: red;
  duration: 500;
  easing: 'easeInOutQuad';
}
body{
  margin: 0;
  padding: 0;
}
.map{
  position: relative;
  text-align: center;
  margin-top: 300px;
  padding-right: 1650px;
}
svg{
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  width: 50%;
  margin-top: 100px;
  margin-left: 150px;
}
.big{
  fill: white;
}
.part{
  stroke: #000;
  stroke-width:10px;
}
.big:hover {
  opacity: .6;
}
.room{
  fill: aqua;
  opacity: .3;
}
.room:hover{
  opacity: .6;
}
.toilet{
  fill: rgb(233, 7, 233);
  opacity: .3;
}
.toilet:hover{
  opacity: .6;
}
.stair{
  fill: rgb(233, 9, 9);
  opacity: .3;
}
.stair:hover{
  opacity: .6;
}
.lift{
  fill: rgb(255, 231, 12);
  opacity: .3;
}
.lift:hover{
  opacity: .6;
}
.building{
  opacity:1;
  fill:#ffffff;
  fill-opacity:1;
  stroke:#000000;
  stroke-width:1;
  stroke-opacity:1;
}
.study{
  opacity:1;
  fill:rgb(127,188,226);
  stroke:#000000;
  stroke-width:1;
  stroke-linecap:butt;
  stroke-linejoin:miter;
  stroke-miterlimit:4;
  stroke-dasharray:none;
  stroke-dashoffset:0;
  stroke-opacity:1;
}
.free{
  fill:rgb(60, 179, 113);
}
.toilet{
  opacity:1;
  fill:rgb(244,132,132);
  stroke:#000000;
  stroke-width:1;
  stroke-linecap:butt;
  stroke-linejoin:miter;
  stroke-miterlimit:4;
  stroke-dasharray:none;
  stroke-dashoffset:0;
  stroke-opacity:1;
}
.stair{
  opacity:1;
  fill: rgb(255, 241, 109);
  stroke:#000000;
  stroke-width:1;
  stroke-linecap:butt;
  stroke-linejoin:miter;
  stroke-miterlimit:4;
  stroke-opacity:1;
}
.void{
  opacity:1;
  fill:rgb(182,179,159);
  stroke:#000000;
  stroke-width:1;
  stroke-linecap:butt;
  stroke-linejoin:miter;
  stroke-miterlimit:4;
  stroke-dasharray:none;
  stroke-dashoffset:0;
  stroke-opacity:1;
}
.mnblck{
  opacity:1;
  fill:#ffffff;
  fill-opacity:0.5;
  stroke:#000000;
  stroke-width:1;
  stroke-linecap:butt;
  stroke-linejoin:miter;
  stroke-miterlimit:4;
  stroke-dasharray:none;
  stroke-dashoffset:0;
  stroke-opacity:1;
}
.dot{
  opacity:0;
  fill:red;
  fill-opacity:1;
  stroke:#000000;
}
.cab-num{
  font-style:normal;
  font-weight:normal;
  font-size:40px;
  line-height:1.25;
  font-family:sans-serif;
  letter-spacing:0px;
  word-spacing:0px;
  fill:#fff;
  fill-opacity:1;
  stroke: none;
}
.icon{
  fill:#ffffff;
  stroke:#000000;
}
#stop-animation{
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}
.nav-keyboard {
  position: absolute;
  left: 75%;
}
.but1{
  position: absolute;
  left: 600px;
}
</style>
