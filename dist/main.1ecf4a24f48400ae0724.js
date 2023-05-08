/*! For license information please see main.1ecf4a24f48400ae0724.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      578: (t, e, r) => {
        r.d(e, { Z: () => q });
        var o = r(81),
          i = r.n(o),
          a = r(645),
          n = r.n(a),
          s = r(667),
          l = r.n(s),
          d = new URL(r(770), r.b),
          m = new URL(r(199), r.b),
          p = new URL(r(204), r.b),
          c = new URL(r(931), r.b),
          b = new URL(r(486), r.b),
          g = new URL(r(609), r.b),
          f = new URL(r(469), r.b),
          h = new URL(r(122), r.b),
          u = new URL(r(144), r.b),
          v = new URL(r(217), r.b),
          x = new URL(r(956), r.b),
          w = new URL(r(460), r.b),
          y = new URL(r(740), r.b),
          k = new URL(r(254), r.b),
          _ = new URL(r(647), r.b),
          z = new URL(r(692), r.b),
          A = n()(i()),
          E = l()(d),
          C = l()(m),
          T = l()(p),
          j = l()(c),
          O = l()(b),
          L = l()(g),
          S = l()(f),
          D = l()(h),
          I = l()(u),
          $ = l()(v),
          M = l()(x),
          N = l()(w),
          P = l()(y),
          B = l()(k),
          R = l()(_),
          H = l()(z);
        A.push([
          t.id,
          '/*!\n * Bootstrap  v5.2.3 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-black: #000;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-gray-100: #f8f9fa;--bs-gray-200: #e9ecef;--bs-gray-300: #dee2e6;--bs-gray-400: #ced4da;--bs-gray-500: #adb5bd;--bs-gray-600: #6c757d;--bs-gray-700: #495057;--bs-gray-800: #343a40;--bs-gray-900: #212529;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-primary-rgb: 13, 110, 253;--bs-secondary-rgb: 108, 117, 125;--bs-success-rgb: 25, 135, 84;--bs-info-rgb: 13, 202, 240;--bs-warning-rgb: 255, 193, 7;--bs-danger-rgb: 220, 53, 69;--bs-light-rgb: 248, 249, 250;--bs-dark-rgb: 33, 37, 41;--bs-white-rgb: 255, 255, 255;--bs-black-rgb: 0, 0, 0;--bs-body-color-rgb: 33, 37, 41;--bs-body-bg-rgb: 255, 255, 255;--bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family: var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight: 400;--bs-body-line-height: 1.5;--bs-body-color: #212529;--bs-body-bg: #fff;--bs-border-width: 1px;--bs-border-style: solid;--bs-border-color: #dee2e6;--bs-border-color-translucent: rgba(0, 0, 0, 0.175);--bs-border-radius: 0.375rem;--bs-border-radius-sm: 0.25rem;--bs-border-radius-lg: 0.5rem;--bs-border-radius-xl: 1rem;--bs-border-radius-2xl: 2rem;--bs-border-radius-pill: 50rem;--bs-link-color: #0d6efd;--bs-link-hover-color: #0a58ca;--bs-code-color: #d63384;--bs-highlight-bg: #fff3cd}*,*::before,*::after{box-sizing:border-box}@media(prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr{margin:1rem 0;color:inherit;border:0;border-top:1px solid;opacity:.25}h6,.h6,h5,.h5,h4,.h4,h3,.h3,h2,.h2,h1,.h1{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:calc(1.375rem + 1.5vw)}@media(min-width: 1200px){h1,.h1{font-size:2.5rem}}h2,.h2{font-size:calc(1.325rem + 0.9vw)}@media(min-width: 1200px){h2,.h2{font-size:2rem}}h3,.h3{font-size:calc(1.3rem + 0.6vw)}@media(min-width: 1200px){h3,.h3{font-size:1.75rem}}h4,.h4{font-size:calc(1.275rem + 0.3vw)}@media(min-width: 1200px){h4,.h4{font-size:1.5rem}}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{text-decoration:underline dotted;cursor:help;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small,.small{font-size:0.875em}mark,.mark{padding:.1875em;background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:0.75em;line-height:0;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}a{color:var(--bs-link-color);text-decoration:underline}a:hover{color:var(--bs-link-hover-color)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:0.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:0.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:0.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}thead,tbody,tfoot,tr,td,th{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none !important}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button:not(:disabled),[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + 0.3vw);line-height:inherit}@media(min-width: 1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none !important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:0.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:0.875em;color:#6c757d}.blockquote-footer::before{content:"— "}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid var(--bs-border-color);border-radius:.375rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:0.875em;color:#6c757d}.container,.container-fluid,.container-xxl,.container-xl,.container-lg,.container-md,.container-sm{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-right:auto;margin-left:auto}@media(min-width: 576px){.container-sm,.container{max-width:540px}}@media(min-width: 768px){.container-md,.container-sm,.container{max-width:720px}}@media(min-width: 992px){.container-lg,.container-md,.container-sm,.container{max-width:960px}}@media(min-width: 1200px){.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1140px}}@media(min-width: 1400px){.container-xxl,.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1320px}}.row{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(-1*var(--bs-gutter-y));margin-right:calc(-0.5*var(--bs-gutter-x));margin-left:calc(-0.5*var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x: 0}.g-0,.gy-0{--bs-gutter-y: 0}.g-1,.gx-1{--bs-gutter-x: 0.25rem}.g-1,.gy-1{--bs-gutter-y: 0.25rem}.g-2,.gx-2{--bs-gutter-x: 0.5rem}.g-2,.gy-2{--bs-gutter-y: 0.5rem}.g-3,.gx-3{--bs-gutter-x: 1rem}.g-3,.gy-3{--bs-gutter-y: 1rem}.g-4,.gx-4{--bs-gutter-x: 1.5rem}.g-4,.gy-4{--bs-gutter-y: 1.5rem}.g-5,.gx-5{--bs-gutter-x: 3rem}.g-5,.gy-5{--bs-gutter-y: 3rem}@media(min-width: 576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x: 0}.g-sm-0,.gy-sm-0{--bs-gutter-y: 0}.g-sm-1,.gx-sm-1{--bs-gutter-x: 0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y: 0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x: 0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y: 0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x: 1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y: 1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x: 1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y: 1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x: 3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y: 3rem}}@media(min-width: 768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x: 0}.g-md-0,.gy-md-0{--bs-gutter-y: 0}.g-md-1,.gx-md-1{--bs-gutter-x: 0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y: 0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x: 0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y: 0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x: 1rem}.g-md-3,.gy-md-3{--bs-gutter-y: 1rem}.g-md-4,.gx-md-4{--bs-gutter-x: 1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y: 1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x: 3rem}.g-md-5,.gy-md-5{--bs-gutter-y: 3rem}}@media(min-width: 992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x: 0}.g-lg-0,.gy-lg-0{--bs-gutter-y: 0}.g-lg-1,.gx-lg-1{--bs-gutter-x: 0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y: 0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x: 0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y: 0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x: 1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y: 1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x: 1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y: 1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x: 3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y: 3rem}}@media(min-width: 1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x: 0}.g-xl-0,.gy-xl-0{--bs-gutter-y: 0}.g-xl-1,.gx-xl-1{--bs-gutter-x: 0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y: 0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x: 0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y: 0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x: 1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y: 1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x: 1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y: 1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x: 3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y: 3rem}}@media(min-width: 1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x: 0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y: 0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x: 0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y: 0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x: 0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y: 0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x: 1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y: 1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x: 1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y: 1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x: 3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y: 3rem}}.table{--bs-table-color: var(--bs-body-color);--bs-table-bg: transparent;--bs-table-border-color: var(--bs-border-color);--bs-table-accent-bg: transparent;--bs-table-striped-color: var(--bs-body-color);--bs-table-striped-bg: rgba(0, 0, 0, 0.05);--bs-table-active-color: var(--bs-body-color);--bs-table-active-bg: rgba(0, 0, 0, 0.1);--bs-table-hover-color: var(--bs-body-color);--bs-table-hover-bg: rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:var(--bs-table-color);vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:2px solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-striped-columns>:not(caption)>tr>:nth-child(even){--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg: var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-color: #000;--bs-table-bg: #cfe2ff;--bs-table-border-color: #bacbe6;--bs-table-striped-bg: #c5d7f2;--bs-table-striped-color: #000;--bs-table-active-bg: #bacbe6;--bs-table-active-color: #000;--bs-table-hover-bg: #bfd1ec;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color: #000;--bs-table-bg: #e2e3e5;--bs-table-border-color: #cbccce;--bs-table-striped-bg: #d7d8da;--bs-table-striped-color: #000;--bs-table-active-bg: #cbccce;--bs-table-active-color: #000;--bs-table-hover-bg: #d1d2d4;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color: #000;--bs-table-bg: #d1e7dd;--bs-table-border-color: #bcd0c7;--bs-table-striped-bg: #c7dbd2;--bs-table-striped-color: #000;--bs-table-active-bg: #bcd0c7;--bs-table-active-color: #000;--bs-table-hover-bg: #c1d6cc;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color: #000;--bs-table-bg: #cff4fc;--bs-table-border-color: #badce3;--bs-table-striped-bg: #c5e8ef;--bs-table-striped-color: #000;--bs-table-active-bg: #badce3;--bs-table-active-color: #000;--bs-table-hover-bg: #bfe2e9;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color: #000;--bs-table-bg: #fff3cd;--bs-table-border-color: #e6dbb9;--bs-table-striped-bg: #f2e7c3;--bs-table-striped-color: #000;--bs-table-active-bg: #e6dbb9;--bs-table-active-color: #000;--bs-table-hover-bg: #ece1be;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color: #000;--bs-table-bg: #f8d7da;--bs-table-border-color: #dfc2c4;--bs-table-striped-bg: #eccccf;--bs-table-striped-color: #000;--bs-table-active-bg: #dfc2c4;--bs-table-active-color: #000;--bs-table-hover-bg: #e5c7ca;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color: #000;--bs-table-bg: #f8f9fa;--bs-table-border-color: #dfe0e1;--bs-table-striped-bg: #ecedee;--bs-table-striped-color: #000;--bs-table-active-bg: #dfe0e1;--bs-table-active-color: #000;--bs-table-hover-bg: #e5e6e7;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color: #fff;--bs-table-bg: #212529;--bs-table-border-color: #373b3e;--bs-table-striped-bg: #2c3034;--bs-table-striped-color: #fff;--bs-table-active-bg: #373b3e;--bs-table-active-color: #fff;--bs-table-hover-bg: #323539;--bs-table-hover-color: #fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media(max-width: 575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(0.375rem + 1px);padding-bottom:calc(0.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.875rem}.form-text{margin-top:.25rem;font-size:0.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-0.375rem -0.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:rgba(0,0,0,0);border:solid rgba(0,0,0,0);border-width:1px 0}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px);padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-0.25rem -0.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-0.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + 0.75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:calc(1.5em + 0.75rem + 2px);padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0 !important;border-radius:.375rem}.form-control-color::-webkit-color-swatch{border-radius:.375rem}.form-control-color.form-control-sm{height:calc(1.5em + 0.5rem + 2px)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + 2px)}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(0.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(' +
            E +
            ');background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:0.875rem;border-radius:.25rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.5rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);appearance:none;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(' +
            C +
            ")}.form-check-input:checked[type=radio]{background-image:url(" +
            T +
            ")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(" +
            j +
            ")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(" +
            O +
            ");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(" +
            L +
            ")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(" +
            S +
            ")}.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:rgba(0,0,0,0);appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;width:100%;height:100%;padding:1rem .75rem;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:1px solid rgba(0,0,0,0);transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media(prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control::placeholder,.form-floating>.form-control-plaintext::placeholder{color:rgba(0,0,0,0)}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown),.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill,.form-floating>.form-control-plaintext:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-control-plaintext~label,.form-floating>.form-select~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control-plaintext~label{border-width:1px 0}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select,.input-group>.form-floating{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus,.input-group>.form-floating:focus-within{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.375rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.375rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + 0.75rem);background-image:url(" +
            D +
            ');background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754}.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"],.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url(' +
            E +
            "),url(" +
            D +
            ");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-control-color:valid,.form-control-color.is-valid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.was-validated .input-group>.form-control:not(:focus):valid,.input-group>.form-control:not(:focus).is-valid,.was-validated .input-group>.form-select:not(:focus):valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.input-group>.form-floating:not(:focus-within).is-valid{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.375rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + 0.75rem);background-image:url(" +
            I +
            ');background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545}.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"],.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url(' +
            E +
            "),url(" +
            I +
            ');background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-control-color:invalid,.form-control-color.is-invalid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.was-validated .input-group>.form-control:not(:focus):invalid,.input-group>.form-control:not(:focus).is-invalid,.was-validated .input-group>.form-select:not(:focus):invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.input-group>.form-floating:not(:focus-within).is-invalid{z-index:4}.btn{--bs-btn-padding-x: 0.75rem;--bs-btn-padding-y: 0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight: 400;--bs-btn-line-height: 1.5;--bs-btn-color: #212529;--bs-btn-bg: transparent;--bs-btn-border-width: 1px;--bs-btn-border-color: transparent;--bs-btn-border-radius: 0.375rem;--bs-btn-hover-border-color: transparent;--bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity: 0.65;--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn-check+.btn:hover{color:var(--bs-btn-color);background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked+.btn,:not(.btn-check)+.btn:active,.btn:first-child:active,.btn.active,.btn.show{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus-visible,:not(.btn-check)+.btn:active:focus-visible,.btn:first-child:active:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn:disabled,.btn.disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color: #fff;--bs-btn-bg: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0b5ed7;--bs-btn-hover-border-color: #0a58ca;--bs-btn-focus-shadow-rgb: 49, 132, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0a58ca;--bs-btn-active-border-color: #0a53be;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #0d6efd;--bs-btn-disabled-border-color: #0d6efd}.btn-secondary{--bs-btn-color: #fff;--bs-btn-bg: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #5c636a;--bs-btn-hover-border-color: #565e64;--bs-btn-focus-shadow-rgb: 130, 138, 145;--bs-btn-active-color: #fff;--bs-btn-active-bg: #565e64;--bs-btn-active-border-color: #51585e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #6c757d;--bs-btn-disabled-border-color: #6c757d}.btn-success{--bs-btn-color: #fff;--bs-btn-bg: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #157347;--bs-btn-hover-border-color: #146c43;--bs-btn-focus-shadow-rgb: 60, 153, 110;--bs-btn-active-color: #fff;--bs-btn-active-bg: #146c43;--bs-btn-active-border-color: #13653f;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #198754;--bs-btn-disabled-border-color: #198754}.btn-info{--bs-btn-color: #000;--bs-btn-bg: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #31d2f2;--bs-btn-hover-border-color: #25cff2;--bs-btn-focus-shadow-rgb: 11, 172, 204;--bs-btn-active-color: #000;--bs-btn-active-bg: #3dd5f3;--bs-btn-active-border-color: #25cff2;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #0dcaf0;--bs-btn-disabled-border-color: #0dcaf0}.btn-warning{--bs-btn-color: #000;--bs-btn-bg: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffca2c;--bs-btn-hover-border-color: #ffc720;--bs-btn-focus-shadow-rgb: 217, 164, 6;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffcd39;--bs-btn-active-border-color: #ffc720;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #ffc107;--bs-btn-disabled-border-color: #ffc107}.btn-danger{--bs-btn-color: #fff;--bs-btn-bg: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #bb2d3b;--bs-btn-hover-border-color: #b02a37;--bs-btn-focus-shadow-rgb: 225, 83, 97;--bs-btn-active-color: #fff;--bs-btn-active-bg: #b02a37;--bs-btn-active-border-color: #a52834;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #dc3545;--bs-btn-disabled-border-color: #dc3545}.btn-light{--bs-btn-color: #000;--bs-btn-bg: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #d3d4d5;--bs-btn-hover-border-color: #c6c7c8;--bs-btn-focus-shadow-rgb: 211, 212, 213;--bs-btn-active-color: #000;--bs-btn-active-bg: #c6c7c8;--bs-btn-active-border-color: #babbbc;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #f8f9fa;--bs-btn-disabled-border-color: #f8f9fa}.btn-dark{--bs-btn-color: #fff;--bs-btn-bg: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #424649;--bs-btn-hover-border-color: #373b3e;--bs-btn-focus-shadow-rgb: 66, 70, 73;--bs-btn-active-color: #fff;--bs-btn-active-bg: #4d5154;--bs-btn-active-border-color: #373b3e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #212529;--bs-btn-disabled-border-color: #212529}.btn-outline-primary{--bs-btn-color: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0d6efd;--bs-btn-hover-border-color: #0d6efd;--bs-btn-focus-shadow-rgb: 13, 110, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0d6efd;--bs-btn-active-border-color: #0d6efd;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0d6efd;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0d6efd;--bs-gradient: none}.btn-outline-secondary{--bs-btn-color: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #6c757d;--bs-btn-hover-border-color: #6c757d;--bs-btn-focus-shadow-rgb: 108, 117, 125;--bs-btn-active-color: #fff;--bs-btn-active-bg: #6c757d;--bs-btn-active-border-color: #6c757d;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #6c757d;--bs-gradient: none}.btn-outline-success{--bs-btn-color: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #198754;--bs-btn-hover-border-color: #198754;--bs-btn-focus-shadow-rgb: 25, 135, 84;--bs-btn-active-color: #fff;--bs-btn-active-bg: #198754;--bs-btn-active-border-color: #198754;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #198754;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #198754;--bs-gradient: none}.btn-outline-info{--bs-btn-color: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #0dcaf0;--bs-btn-hover-border-color: #0dcaf0;--bs-btn-focus-shadow-rgb: 13, 202, 240;--bs-btn-active-color: #000;--bs-btn-active-bg: #0dcaf0;--bs-btn-active-border-color: #0dcaf0;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0dcaf0;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0dcaf0;--bs-gradient: none}.btn-outline-warning{--bs-btn-color: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffc107;--bs-btn-hover-border-color: #ffc107;--bs-btn-focus-shadow-rgb: 255, 193, 7;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffc107;--bs-btn-active-border-color: #ffc107;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #ffc107;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #ffc107;--bs-gradient: none}.btn-outline-danger{--bs-btn-color: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #dc3545;--bs-btn-hover-border-color: #dc3545;--bs-btn-focus-shadow-rgb: 220, 53, 69;--bs-btn-active-color: #fff;--bs-btn-active-bg: #dc3545;--bs-btn-active-border-color: #dc3545;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #dc3545;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #dc3545;--bs-gradient: none}.btn-outline-light{--bs-btn-color: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #f8f9fa;--bs-btn-hover-border-color: #f8f9fa;--bs-btn-focus-shadow-rgb: 248, 249, 250;--bs-btn-active-color: #000;--bs-btn-active-bg: #f8f9fa;--bs-btn-active-border-color: #f8f9fa;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #f8f9fa;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #f8f9fa;--bs-gradient: none}.btn-outline-dark{--bs-btn-color: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #212529;--bs-btn-hover-border-color: #212529;--bs-btn-focus-shadow-rgb: 33, 37, 41;--bs-btn-active-color: #fff;--bs-btn-active-bg: #212529;--bs-btn-active-border-color: #212529;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #212529;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #212529;--bs-gradient: none}.btn-link{--bs-btn-font-weight: 400;--bs-btn-color: var(--bs-link-color);--bs-btn-bg: transparent;--bs-btn-border-color: transparent;--bs-btn-hover-color: var(--bs-link-hover-color);--bs-btn-hover-border-color: transparent;--bs-btn-active-color: var(--bs-link-hover-color);--bs-btn-active-border-color: transparent;--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-border-color: transparent;--bs-btn-box-shadow: none;--bs-btn-focus-shadow-rgb: 49, 132, 253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-lg,.btn-group-lg>.btn{--bs-btn-padding-y: 0.5rem;--bs-btn-padding-x: 1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius: 0.5rem}.btn-sm,.btn-group-sm>.btn{--bs-btn-padding-y: 0.25rem;--bs-btn-padding-x: 0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius: 0.25rem}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media(prefers-reduced-motion: reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media(prefers-reduced-motion: reduce){.collapsing.collapse-horizontal{transition:none}}.dropup,.dropend,.dropdown,.dropstart,.dropup-center,.dropdown-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid rgba(0,0,0,0);border-bottom:0;border-left:.3em solid rgba(0,0,0,0)}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex: 1000;--bs-dropdown-min-width: 10rem;--bs-dropdown-padding-x: 0;--bs-dropdown-padding-y: 0.5rem;--bs-dropdown-spacer: 0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color: #212529;--bs-dropdown-bg: #fff;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-border-radius: 0.375rem;--bs-dropdown-border-width: 1px;--bs-dropdown-inner-border-radius: calc(0.375rem - 1px);--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y: 0.5rem;--bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-dropdown-link-color: #212529;--bs-dropdown-link-hover-color: #1e2125;--bs-dropdown-link-hover-bg: #e9ecef;--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-item-padding-x: 1rem;--bs-dropdown-item-padding-y: 0.25rem;--bs-dropdown-header-color: #6c757d;--bs-dropdown-header-padding-x: 1rem;--bs-dropdown-header-padding-y: 0.5rem;position:absolute;z-index:var(--bs-dropdown-zindex);display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position: start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position: end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media(min-width: 576px){.dropdown-menu-sm-start{--bs-position: start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position: end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 768px){.dropdown-menu-md-start{--bs-position: start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position: end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 992px){.dropdown-menu-lg-start{--bs-position: start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position: end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1200px){.dropdown-menu-xl-start{--bs-position: start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position: end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1400px){.dropdown-menu-xxl-start{--bs-position: start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position: end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid rgba(0,0,0,0);border-bottom:.3em solid;border-left:.3em solid rgba(0,0,0,0)}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid rgba(0,0,0,0);border-right:0;border-bottom:.3em solid rgba(0,0,0,0);border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:""}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid rgba(0,0,0,0);border-right:.3em solid;border-bottom:.3em solid rgba(0,0,0,0)}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:rgba(0,0,0,0);border:0}.dropdown-item:hover,.dropdown-item:focus{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:rgba(0,0,0,0)}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:0.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color: #dee2e6;--bs-dropdown-bg: #343a40;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color: #dee2e6;--bs-dropdown-link-hover-color: #fff;--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-header-color: #adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:.375rem}.btn-group>:not(.btn-check:first-child)+.btn,.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn,.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn~.btn,.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x: 1rem;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-link-color);--bs-nav-link-hover-color: var(--bs-link-hover-color);--bs-nav-link-disabled-color: #6c757d;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media(prefers-reduced-motion: reduce){.nav-link{transition:none}}.nav-link:hover,.nav-link:focus{color:var(--bs-nav-link-hover-color)}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width: 1px;--bs-nav-tabs-border-color: #dee2e6;--bs-nav-tabs-border-radius: 0.375rem;--bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;--bs-nav-tabs-link-active-color: #495057;--bs-nav-tabs-link-active-bg: #fff;--bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(-1*var(--bs-nav-tabs-border-width));background:none;border:var(--bs-nav-tabs-border-width) solid rgba(0,0,0,0);border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(-1*var(--bs-nav-tabs-border-width));border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius: 0.375rem;--bs-nav-pills-link-active-color: #fff;--bs-nav-pills-link-active-bg: #0d6efd}.nav-pills .nav-link{background:none;border:0;border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-fill>.nav-link,.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified>.nav-link,.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x: 0;--bs-navbar-padding-y: 0.5rem;--bs-navbar-color: rgba(0, 0, 0, 0.55);--bs-navbar-hover-color: rgba(0, 0, 0, 0.7);--bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);--bs-navbar-active-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-padding-y: 0.3125rem;--bs-navbar-brand-margin-end: 1rem;--bs-navbar-brand-font-size: 1.25rem;--bs-navbar-brand-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);--bs-navbar-nav-link-padding-x: 0.5rem;--bs-navbar-toggler-padding-y: 0.25rem;--bs-navbar-toggler-padding-x: 0.75rem;--bs-navbar-toggler-font-size: 1.25rem;--bs-navbar-toggler-icon-bg: url(' +
            $ +
            ");--bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);--bs-navbar-toggler-border-radius: 0.375rem;--bs-navbar-toggler-focus-width: 0.25rem;--bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid,.navbar>.container-sm,.navbar>.container-md,.navbar>.container-lg,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x: 0;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-navbar-color);--bs-nav-link-hover-color: var(--bs-navbar-hover-color);--bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .show>.nav-link,.navbar-nav .nav-link.active{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}.navbar-text a,.navbar-text a:hover,.navbar-text a:focus{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:rgba(0,0,0,0);border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media(prefers-reduced-motion: reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height, 75vh);overflow-y:auto}@media(min-width: 576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-dark{--bs-navbar-color: rgba(255, 255, 255, 0.55);--bs-navbar-hover-color: rgba(255, 255, 255, 0.75);--bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);--bs-navbar-active-color: #fff;--bs-navbar-brand-color: #fff;--bs-navbar-brand-hover-color: #fff;--bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);--bs-navbar-toggler-icon-bg: url(" +
            M +
            ")}.card{--bs-card-spacer-y: 1rem;--bs-card-spacer-x: 1rem;--bs-card-title-spacer-y: 0.5rem;--bs-card-border-width: 1px;--bs-card-border-color: var(--bs-border-color-translucent);--bs-card-border-radius: 0.375rem;--bs-card-box-shadow: ;--bs-card-inner-border-radius: calc(0.375rem - 1px);--bs-card-cap-padding-y: 0.5rem;--bs-card-cap-padding-x: 1rem;--bs-card-cap-bg: rgba(0, 0, 0, 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg: #fff;--bs-card-img-overlay-padding: 1rem;--bs-card-group-margin: 0.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.card-title{margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{margin-top:calc(-0.5*var(--bs-card-title-spacer-y));margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-bottom:calc(-1*var(--bs-card-cap-padding-y));margin-left:calc(-0.5*var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-left:calc(-0.5*var(--bs-card-cap-padding-x))}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-top,.card-img-bottom{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media(min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.accordion{--bs-accordion-color: #212529;--bs-accordion-bg: #fff;--bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;--bs-accordion-border-color: var(--bs-border-color);--bs-accordion-border-width: 1px;--bs-accordion-border-radius: 0.375rem;--bs-accordion-inner-border-radius: calc(0.375rem - 1px);--bs-accordion-btn-padding-x: 1.25rem;--bs-accordion-btn-padding-y: 1rem;--bs-accordion-btn-color: #212529;--bs-accordion-btn-bg: var(--bs-accordion-bg);--bs-accordion-btn-icon: url(" +
            N +
            ");--bs-accordion-btn-icon-width: 1.25rem;--bs-accordion-btn-icon-transform: rotate(-180deg);--bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;--bs-accordion-btn-active-icon: url(" +
            P +
            ');--bs-accordion-btn-focus-border-color: #86b7fe;--bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-accordion-body-padding-x: 1.25rem;--bs-accordion-body-padding-y: 1rem;--bs-accordion-active-color: #0c63e4;--bs-accordion-active-bg: #e7f1ff}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}@media(prefers-reduced-motion: reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(-1*var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed)::after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button::after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:"";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}@media(prefers-reduced-motion: reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:var(--bs-accordion-btn-focus-border-color);outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button,.accordion-flush .accordion-item .accordion-button.collapsed{border-radius:0}.breadcrumb{--bs-breadcrumb-padding-x: 0;--bs-breadcrumb-padding-y: 0;--bs-breadcrumb-margin-bottom: 1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color: #6c757d;--bs-breadcrumb-item-padding-x: 0.5rem;--bs-breadcrumb-item-active-color: #6c757d;display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x: 0.75rem;--bs-pagination-padding-y: 0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color: var(--bs-link-color);--bs-pagination-bg: #fff;--bs-pagination-border-width: 1px;--bs-pagination-border-color: #dee2e6;--bs-pagination-border-radius: 0.375rem;--bs-pagination-hover-color: var(--bs-link-hover-color);--bs-pagination-hover-bg: #e9ecef;--bs-pagination-hover-border-color: #dee2e6;--bs-pagination-focus-color: var(--bs-link-hover-color);--bs-pagination-focus-bg: #e9ecef;--bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-pagination-active-color: #fff;--bs-pagination-active-bg: #0d6efd;--bs-pagination-active-border-color: #0d6efd;--bs-pagination-disabled-color: #6c757d;--bs-pagination-disabled-bg: #fff;--bs-pagination-disabled-border-color: #dee2e6;display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}.page-link.active,.active>.page-link{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.page-link.disabled,.disabled>.page-link{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x: 1.5rem;--bs-pagination-padding-y: 0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius: 0.5rem}.pagination-sm{--bs-pagination-padding-x: 0.5rem;--bs-pagination-padding-y: 0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius: 0.25rem}.badge{--bs-badge-padding-x: 0.65em;--bs-badge-padding-y: 0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight: 700;--bs-badge-color: #fff;--bs-badge-border-radius: 0.375rem;display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg: transparent;--bs-alert-padding-x: 1rem;--bs-alert-padding-y: 1rem;--bs-alert-margin-bottom: 1rem;--bs-alert-color: inherit;--bs-alert-border-color: transparent;--bs-alert-border: 1px solid var(--bs-alert-border-color);--bs-alert-border-radius: 0.375rem;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{--bs-alert-color: #084298;--bs-alert-bg: #cfe2ff;--bs-alert-border-color: #b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{--bs-alert-color: #41464b;--bs-alert-bg: #e2e3e5;--bs-alert-border-color: #d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{--bs-alert-color: #0f5132;--bs-alert-bg: #d1e7dd;--bs-alert-border-color: #badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{--bs-alert-color: #055160;--bs-alert-bg: #cff4fc;--bs-alert-border-color: #b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{--bs-alert-color: #664d03;--bs-alert-bg: #fff3cd;--bs-alert-border-color: #ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{--bs-alert-color: #842029;--bs-alert-bg: #f8d7da;--bs-alert-border-color: #f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{--bs-alert-color: #636464;--bs-alert-bg: #fefefe;--bs-alert-border-color: #fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{--bs-alert-color: #141619;--bs-alert-bg: #d3d3d4;--bs-alert-border-color: #bcbebf}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{--bs-progress-height: 1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg: #e9ecef;--bs-progress-border-radius: 0.375rem;--bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);--bs-progress-bar-color: #fff;--bs-progress-bar-bg: #0d6efd;--bs-progress-bar-transition: width 0.6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}@media(prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media(prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color: #212529;--bs-list-group-bg: #fff;--bs-list-group-border-color: rgba(0, 0, 0, 0.125);--bs-list-group-border-width: 1px;--bs-list-group-border-radius: 0.375rem;--bs-list-group-item-padding-x: 1rem;--bs-list-group-item-padding-y: 0.5rem;--bs-list-group-action-color: #495057;--bs-list-group-action-hover-color: #495057;--bs-list-group-action-hover-bg: #f8f9fa;--bs-list-group-action-active-color: #212529;--bs-list-group-action-active-bg: #e9ecef;--bs-list-group-disabled-color: #6c757d;--bs-list-group-disabled-bg: #fff;--bs-list-group-active-color: #fff;--bs-list-group-active-bg: #0d6efd;--bs-list-group-active-border-color: #0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>.list-group-item::before{content:counters(section, ".") ". ";counter-increment:section}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}.list-group-item-action:active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(-1*var(--bs-list-group-border-width));border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}@media(min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:rgba(0,0,0,0) url(' +
            B +
            ') center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close:disabled,.btn-close.disabled{pointer-events:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{--bs-toast-zindex: 1090;--bs-toast-padding-x: 0.75rem;--bs-toast-padding-y: 0.5rem;--bs-toast-spacing: 1.5rem;--bs-toast-max-width: 350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg: rgba(255, 255, 255, 0.85);--bs-toast-border-width: 1px;--bs-toast-border-color: var(--bs-border-color-translucent);--bs-toast-border-radius: 0.375rem;--bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-toast-header-color: #6c757d;--bs-toast-header-bg: rgba(255, 255, 255, 0.85);--bs-toast-header-border-color: rgba(0, 0, 0, 0.05);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{--bs-toast-zindex: 1090;position:absolute;z-index:var(--bs-toast-zindex);width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}.toast-header .btn-close{margin-right:calc(-0.5*var(--bs-toast-padding-x));margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex: 1055;--bs-modal-width: 500px;--bs-modal-padding: 1rem;--bs-modal-margin: 0.5rem;--bs-modal-color: ;--bs-modal-bg: #fff;--bs-modal-border-color: var(--bs-border-color-translucent);--bs-modal-border-width: 1px;--bs-modal-border-radius: 0.5rem;--bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-modal-inner-border-radius: calc(0.5rem - 1px);--bs-modal-header-padding-x: 1rem;--bs-modal-header-padding-y: 1rem;--bs-modal-header-padding: 1rem 1rem;--bs-modal-header-border-color: var(--bs-border-color);--bs-modal-header-border-width: 1px;--bs-modal-title-line-height: 1.5;--bs-modal-footer-gap: 0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color: var(--bs-border-color);--bs-modal-footer-border-width: 1px;position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0, -50px)}@media(prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin)*2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin)*2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex: 1050;--bs-backdrop-bg: #000;--bs-backdrop-opacity: 0.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y)*.5) calc(var(--bs-modal-header-padding-x)*.5);margin:calc(-0.5*var(--bs-modal-header-padding-y)) calc(-0.5*var(--bs-modal-header-padding-x)) calc(-0.5*var(--bs-modal-header-padding-y)) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap)*.5)}@media(min-width: 576px){.modal{--bs-modal-margin: 1.75rem;--bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width: 300px}}@media(min-width: 992px){.modal-lg,.modal-xl{--bs-modal-width: 800px}}@media(min-width: 1200px){.modal-xl{--bs-modal-width: 1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header,.modal-fullscreen .modal-footer{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media(max-width: 575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header,.modal-fullscreen-sm-down .modal-footer{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media(max-width: 767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header,.modal-fullscreen-md-down .modal-footer{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media(max-width: 991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header,.modal-fullscreen-lg-down .modal-footer{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media(max-width: 1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header,.modal-fullscreen-xl-down .modal-footer{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media(max-width: 1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header,.modal-fullscreen-xxl-down .modal-footer{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex: 1080;--bs-tooltip-max-width: 200px;--bs-tooltip-padding-x: 0.5rem;--bs-tooltip-padding-y: 0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color: #fff;--bs-tooltip-bg: #000;--bs-tooltip-border-radius: 0.375rem;--bs-tooltip-opacity: 0.9;--bs-tooltip-arrow-width: 0.8rem;--bs-tooltip-arrow-height: 0.4rem;z-index:var(--bs-tooltip-zindex);display:block;padding:var(--bs-tooltip-arrow-height);margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow::before{position:absolute;content:"";border-color:rgba(0,0,0,0);border-style:solid}.bs-tooltip-top .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow{bottom:0}.bs-tooltip-top .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-top-color:var(--bs-tooltip-bg)}.bs-tooltip-end .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow{left:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-end .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-right-color:var(--bs-tooltip-bg)}.bs-tooltip-bottom .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow{top:0}.bs-tooltip-bottom .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}.bs-tooltip-start .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow{right:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-start .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex: 1070;--bs-popover-max-width: 276px;--bs-popover-font-size:0.875rem;--bs-popover-bg: #fff;--bs-popover-border-width: 1px;--bs-popover-border-color: var(--bs-border-color-translucent);--bs-popover-border-radius: 0.5rem;--bs-popover-inner-border-radius: calc(0.5rem - 1px);--bs-popover-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-popover-header-padding-x: 1rem;--bs-popover-header-padding-y: 0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: ;--bs-popover-header-bg: #f0f0f0;--bs-popover-body-padding-x: 1rem;--bs-popover-body-padding-y: 1rem;--bs-popover-body-color: #212529;--bs-popover-arrow-width: 1rem;--bs-popover-arrow-height: 0.5rem;--bs-popover-arrow-border: var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}.popover .popover-arrow::before,.popover .popover-arrow::after{position:absolute;display:block;content:"";border-color:rgba(0,0,0,0);border-style:solid;border-width:0}.bs-popover-top>.popover-arrow,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow{bottom:calc(-1*(var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-end>.popover-arrow,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow{left:calc(-1*(var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before{left:0;border-right-color:var(--bs-popover-arrow-border)}.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-bottom>.popover-arrow,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow{top:calc(-1*(var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{border-width:0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-bottom .popover-header::before,.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(-0.5*var(--bs-popover-arrow-width));content:"";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}.bs-popover-start>.popover-arrow,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow{right:calc(-1*(var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before{right:0;border-left-color:var(--bs-popover-arrow-border)}.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media(prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-start),.active.carousel-item-end{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-end),.active.carousel-item-start{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end{z-index:1;opacity:1}.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{z-index:0;opacity:0;transition:opacity 0s .6s}@media(prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity .15s ease}@media(prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(' +
            R +
            ")}.carousel-control-next-icon{background-image:url(" +
            H +
            ')}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid rgba(0,0,0,0);border-bottom:10px solid rgba(0,0,0,0);opacity:.5;transition:opacity .6s ease}@media(prefers-reduced-motion: reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-prev-icon,.carousel-dark .carousel-control-next-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}.spinner-grow,.spinner-border{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}@keyframes spinner-border{to{transform:rotate(360deg) /* rtl:ignore */}}.spinner-border{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-border-width: 0.25em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:rgba(0,0,0,0)}.spinner-border-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem;--bs-spinner-border-width: 0.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem}@media(prefers-reduced-motion: reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed: 1.5s}}.offcanvas,.offcanvas-xxl,.offcanvas-xl,.offcanvas-lg,.offcanvas-md,.offcanvas-sm{--bs-offcanvas-zindex: 1045;--bs-offcanvas-width: 400px;--bs-offcanvas-height: 30vh;--bs-offcanvas-padding-x: 1rem;--bs-offcanvas-padding-y: 1rem;--bs-offcanvas-color: ;--bs-offcanvas-bg: #fff;--bs-offcanvas-border-width: 1px;--bs-offcanvas-border-color: var(--bs-border-color-translucent);--bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)}@media(max-width: 575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 575.98px)and (prefers-reduced-motion: reduce){.offcanvas-sm{transition:none}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-sm.showing,.offcanvas-sm.show:not(.hiding){transform:none}.offcanvas-sm.showing,.offcanvas-sm.hiding,.offcanvas-sm.show{visibility:visible}}@media(min-width: 576px){.offcanvas-sm{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 767.98px)and (prefers-reduced-motion: reduce){.offcanvas-md{transition:none}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-md.showing,.offcanvas-md.show:not(.hiding){transform:none}.offcanvas-md.showing,.offcanvas-md.hiding,.offcanvas-md.show{visibility:visible}}@media(min-width: 768px){.offcanvas-md{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 991.98px)and (prefers-reduced-motion: reduce){.offcanvas-lg{transition:none}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-lg.showing,.offcanvas-lg.show:not(.hiding){transform:none}.offcanvas-lg.showing,.offcanvas-lg.hiding,.offcanvas-lg.show{visibility:visible}}@media(min-width: 992px){.offcanvas-lg{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1199.98px)and (prefers-reduced-motion: reduce){.offcanvas-xl{transition:none}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xl.showing,.offcanvas-xl.show:not(.hiding){transform:none}.offcanvas-xl.showing,.offcanvas-xl.hiding,.offcanvas-xl.show{visibility:visible}}@media(min-width: 1200px){.offcanvas-xl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1399.98px)and (prefers-reduced-motion: reduce){.offcanvas-xxl{transition:none}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xxl.showing,.offcanvas-xxl.show:not(.hiding){transform:none}.offcanvas-xxl.showing,.offcanvas-xxl.hiding,.offcanvas-xxl.show{visibility:visible}}@media(min-width: 1400px){.offcanvas-xxl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}.offcanvas{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media(prefers-reduced-motion: reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.showing,.offcanvas.show:not(.hiding){transform:none}.offcanvas.showing,.offcanvas.hiding,.offcanvas.show{visibility:visible}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y)*.5) calc(var(--bs-offcanvas-padding-x)*.5);margin-top:calc(-0.5*var(--bs-offcanvas-padding-y));margin-right:calc(-0.5*var(--bs-offcanvas-padding-x));margin-bottom:calc(-0.5*var(--bs-offcanvas-padding-y))}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn::before{display:inline-block;content:""}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{mask-image:linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);mask-size:200% 100%;animation:placeholder-wave 2s linear infinite}@keyframes placeholder-wave{100%{mask-position:-200% 0%}}.clearfix::after{display:block;clear:both;content:""}.text-bg-primary{color:#fff !important;background-color:RGBA(13, 110, 253, var(--bs-bg-opacity, 1)) !important}.text-bg-secondary{color:#fff !important;background-color:RGBA(108, 117, 125, var(--bs-bg-opacity, 1)) !important}.text-bg-success{color:#fff !important;background-color:RGBA(25, 135, 84, var(--bs-bg-opacity, 1)) !important}.text-bg-info{color:#000 !important;background-color:RGBA(13, 202, 240, var(--bs-bg-opacity, 1)) !important}.text-bg-warning{color:#000 !important;background-color:RGBA(255, 193, 7, var(--bs-bg-opacity, 1)) !important}.text-bg-danger{color:#fff !important;background-color:RGBA(220, 53, 69, var(--bs-bg-opacity, 1)) !important}.text-bg-light{color:#000 !important;background-color:RGBA(248, 249, 250, var(--bs-bg-opacity, 1)) !important}.text-bg-dark{color:#fff !important;background-color:RGBA(33, 37, 41, var(--bs-bg-opacity, 1)) !important}.link-primary{color:#0d6efd !important}.link-primary:hover,.link-primary:focus{color:#0a58ca !important}.link-secondary{color:#6c757d !important}.link-secondary:hover,.link-secondary:focus{color:#565e64 !important}.link-success{color:#198754 !important}.link-success:hover,.link-success:focus{color:#146c43 !important}.link-info{color:#0dcaf0 !important}.link-info:hover,.link-info:focus{color:#3dd5f3 !important}.link-warning{color:#ffc107 !important}.link-warning:hover,.link-warning:focus{color:#ffcd39 !important}.link-danger{color:#dc3545 !important}.link-danger:hover,.link-danger:focus{color:#b02a37 !important}.link-light{color:#f8f9fa !important}.link-light:hover,.link-light:focus{color:#f9fafb !important}.link-dark{color:#212529 !important}.link-dark:hover,.link-dark:focus{color:#1a1e21 !important}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:""}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio: 100%}.ratio-4x3{--bs-aspect-ratio: 75%}.ratio-16x9{--bs-aspect-ratio: 56.25%}.ratio-21x9{--bs-aspect-ratio: 42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:sticky;top:0;z-index:1020}.sticky-bottom{position:sticky;bottom:0;z-index:1020}@media(min-width: 576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 768px){.sticky-md-top{position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:sticky;bottom:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border:0 !important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:""}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:1px;min-height:1em;background-color:currentcolor;opacity:.25}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.float-start{float:left !important}.float-end{float:right !important}.float-none{float:none !important}.opacity-0{opacity:0 !important}.opacity-25{opacity:.25 !important}.opacity-50{opacity:.5 !important}.opacity-75{opacity:.75 !important}.opacity-100{opacity:1 !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.overflow-visible{overflow:visible !important}.overflow-scroll{overflow:scroll !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-grid{display:grid !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}.d-none{display:none !important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15) !important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175) !important}.shadow-none{box-shadow:none !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.top-0{top:0 !important}.top-50{top:50% !important}.top-100{top:100% !important}.bottom-0{bottom:0 !important}.bottom-50{bottom:50% !important}.bottom-100{bottom:100% !important}.start-0{left:0 !important}.start-50{left:50% !important}.start-100{left:100% !important}.end-0{right:0 !important}.end-50{right:50% !important}.end-100{right:100% !important}.translate-middle{transform:translate(-50%, -50%) !important}.translate-middle-x{transform:translateX(-50%) !important}.translate-middle-y{transform:translateY(-50%) !important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-0{border:0 !important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-top-0{border-top:0 !important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-end-0{border-right:0 !important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-bottom-0{border-bottom:0 !important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-start-0{border-left:0 !important}.border-primary{--bs-border-opacity: 1;border-color:rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important}.border-secondary{--bs-border-opacity: 1;border-color:rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important}.border-success{--bs-border-opacity: 1;border-color:rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important}.border-info{--bs-border-opacity: 1;border-color:rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important}.border-warning{--bs-border-opacity: 1;border-color:rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important}.border-danger{--bs-border-opacity: 1;border-color:rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important}.border-light{--bs-border-opacity: 1;border-color:rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important}.border-dark{--bs-border-opacity: 1;border-color:rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important}.border-white{--bs-border-opacity: 1;border-color:rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important}.border-1{--bs-border-width: 1px}.border-2{--bs-border-width: 2px}.border-3{--bs-border-width: 3px}.border-4{--bs-border-width: 4px}.border-5{--bs-border-width: 5px}.border-opacity-10{--bs-border-opacity: 0.1}.border-opacity-25{--bs-border-opacity: 0.25}.border-opacity-50{--bs-border-opacity: 0.5}.border-opacity-75{--bs-border-opacity: 0.75}.border-opacity-100{--bs-border-opacity: 1}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.mw-100{max-width:100% !important}.vw-100{width:100vw !important}.min-vw-100{min-width:100vw !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mh-100{max-height:100% !important}.vh-100{height:100vh !important}.min-vh-100{min-height:100vh !important}.flex-fill{flex:1 1 auto !important}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.justify-content-evenly{justify-content:space-evenly !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}.order-first{order:-1 !important}.order-0{order:0 !important}.order-1{order:1 !important}.order-2{order:2 !important}.order-3{order:3 !important}.order-4{order:4 !important}.order-5{order:5 !important}.order-last{order:6 !important}.m-0{margin:0 !important}.m-1{margin:.25rem !important}.m-2{margin:.5rem !important}.m-3{margin:1rem !important}.m-4{margin:1.5rem !important}.m-5{margin:3rem !important}.m-auto{margin:auto !important}.mx-0{margin-right:0 !important;margin-left:0 !important}.mx-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-3{margin-right:1rem !important;margin-left:1rem !important}.mx-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-5{margin-right:3rem !important;margin-left:3rem !important}.mx-auto{margin-right:auto !important;margin-left:auto !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-0{margin-top:0 !important}.mt-1{margin-top:.25rem !important}.mt-2{margin-top:.5rem !important}.mt-3{margin-top:1rem !important}.mt-4{margin-top:1.5rem !important}.mt-5{margin-top:3rem !important}.mt-auto{margin-top:auto !important}.me-0{margin-right:0 !important}.me-1{margin-right:.25rem !important}.me-2{margin-right:.5rem !important}.me-3{margin-right:1rem !important}.me-4{margin-right:1.5rem !important}.me-5{margin-right:3rem !important}.me-auto{margin-right:auto !important}.mb-0{margin-bottom:0 !important}.mb-1{margin-bottom:.25rem !important}.mb-2{margin-bottom:.5rem !important}.mb-3{margin-bottom:1rem !important}.mb-4{margin-bottom:1.5rem !important}.mb-5{margin-bottom:3rem !important}.mb-auto{margin-bottom:auto !important}.ms-0{margin-left:0 !important}.ms-1{margin-left:.25rem !important}.ms-2{margin-left:.5rem !important}.ms-3{margin-left:1rem !important}.ms-4{margin-left:1.5rem !important}.ms-5{margin-left:3rem !important}.ms-auto{margin-left:auto !important}.p-0{padding:0 !important}.p-1{padding:.25rem !important}.p-2{padding:.5rem !important}.p-3{padding:1rem !important}.p-4{padding:1.5rem !important}.p-5{padding:3rem !important}.px-0{padding-right:0 !important;padding-left:0 !important}.px-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-3{padding-right:1rem !important;padding-left:1rem !important}.px-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-5{padding-right:3rem !important;padding-left:3rem !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-0{padding-top:0 !important}.pt-1{padding-top:.25rem !important}.pt-2{padding-top:.5rem !important}.pt-3{padding-top:1rem !important}.pt-4{padding-top:1.5rem !important}.pt-5{padding-top:3rem !important}.pe-0{padding-right:0 !important}.pe-1{padding-right:.25rem !important}.pe-2{padding-right:.5rem !important}.pe-3{padding-right:1rem !important}.pe-4{padding-right:1.5rem !important}.pe-5{padding-right:3rem !important}.pb-0{padding-bottom:0 !important}.pb-1{padding-bottom:.25rem !important}.pb-2{padding-bottom:.5rem !important}.pb-3{padding-bottom:1rem !important}.pb-4{padding-bottom:1.5rem !important}.pb-5{padding-bottom:3rem !important}.ps-0{padding-left:0 !important}.ps-1{padding-left:.25rem !important}.ps-2{padding-left:.5rem !important}.ps-3{padding-left:1rem !important}.ps-4{padding-left:1.5rem !important}.ps-5{padding-left:3rem !important}.gap-0{gap:0 !important}.gap-1{gap:.25rem !important}.gap-2{gap:.5rem !important}.gap-3{gap:1rem !important}.gap-4{gap:1.5rem !important}.gap-5{gap:3rem !important}.font-monospace{font-family:var(--bs-font-monospace) !important}.fs-1{font-size:calc(1.375rem + 1.5vw) !important}.fs-2{font-size:calc(1.325rem + 0.9vw) !important}.fs-3{font-size:calc(1.3rem + 0.6vw) !important}.fs-4{font-size:calc(1.275rem + 0.3vw) !important}.fs-5{font-size:1.25rem !important}.fs-6{font-size:1rem !important}.fst-italic{font-style:italic !important}.fst-normal{font-style:normal !important}.fw-light{font-weight:300 !important}.fw-lighter{font-weight:lighter !important}.fw-normal{font-weight:400 !important}.fw-bold{font-weight:700 !important}.fw-semibold{font-weight:600 !important}.fw-bolder{font-weight:bolder !important}.lh-1{line-height:1 !important}.lh-sm{line-height:1.25 !important}.lh-base{line-height:1.5 !important}.lh-lg{line-height:2 !important}.text-start{text-align:left !important}.text-end{text-align:right !important}.text-center{text-align:center !important}.text-decoration-none{text-decoration:none !important}.text-decoration-underline{text-decoration:underline !important}.text-decoration-line-through{text-decoration:line-through !important}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-break{word-wrap:break-word !important;word-break:break-word !important}.text-primary{--bs-text-opacity: 1;color:rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important}.text-secondary{--bs-text-opacity: 1;color:rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important}.text-success{--bs-text-opacity: 1;color:rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important}.text-info{--bs-text-opacity: 1;color:rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important}.text-warning{--bs-text-opacity: 1;color:rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important}.text-danger{--bs-text-opacity: 1;color:rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important}.text-light{--bs-text-opacity: 1;color:rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important}.text-dark{--bs-text-opacity: 1;color:rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important}.text-black{--bs-text-opacity: 1;color:rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important}.text-white{--bs-text-opacity: 1;color:rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important}.text-body{--bs-text-opacity: 1;color:rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important}.text-muted{--bs-text-opacity: 1;color:#6c757d !important}.text-black-50{--bs-text-opacity: 1;color:rgba(0,0,0,.5) !important}.text-white-50{--bs-text-opacity: 1;color:rgba(255,255,255,.5) !important}.text-reset{--bs-text-opacity: 1;color:inherit !important}.text-opacity-25{--bs-text-opacity: 0.25}.text-opacity-50{--bs-text-opacity: 0.5}.text-opacity-75{--bs-text-opacity: 0.75}.text-opacity-100{--bs-text-opacity: 1}.bg-primary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important}.bg-secondary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important}.bg-success{--bs-bg-opacity: 1;background-color:rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important}.bg-info{--bs-bg-opacity: 1;background-color:rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important}.bg-warning{--bs-bg-opacity: 1;background-color:rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important}.bg-danger{--bs-bg-opacity: 1;background-color:rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important}.bg-light{--bs-bg-opacity: 1;background-color:rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important}.bg-dark{--bs-bg-opacity: 1;background-color:rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important}.bg-black{--bs-bg-opacity: 1;background-color:rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important}.bg-white{--bs-bg-opacity: 1;background-color:rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important}.bg-body{--bs-bg-opacity: 1;background-color:rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important}.bg-transparent{--bs-bg-opacity: 1;background-color:rgba(0,0,0,0) !important}.bg-opacity-10{--bs-bg-opacity: 0.1}.bg-opacity-25{--bs-bg-opacity: 0.25}.bg-opacity-50{--bs-bg-opacity: 0.5}.bg-opacity-75{--bs-bg-opacity: 0.75}.bg-opacity-100{--bs-bg-opacity: 1}.bg-gradient{background-image:var(--bs-gradient) !important}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.pe-none{pointer-events:none !important}.pe-auto{pointer-events:auto !important}.rounded{border-radius:var(--bs-border-radius) !important}.rounded-0{border-radius:0 !important}.rounded-1{border-radius:var(--bs-border-radius-sm) !important}.rounded-2{border-radius:var(--bs-border-radius) !important}.rounded-3{border-radius:var(--bs-border-radius-lg) !important}.rounded-4{border-radius:var(--bs-border-radius-xl) !important}.rounded-5{border-radius:var(--bs-border-radius-2xl) !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:var(--bs-border-radius-pill) !important}.rounded-top{border-top-left-radius:var(--bs-border-radius) !important;border-top-right-radius:var(--bs-border-radius) !important}.rounded-end{border-top-right-radius:var(--bs-border-radius) !important;border-bottom-right-radius:var(--bs-border-radius) !important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius) !important;border-bottom-left-radius:var(--bs-border-radius) !important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius) !important;border-top-left-radius:var(--bs-border-radius) !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media(min-width: 576px){.float-sm-start{float:left !important}.float-sm-end{float:right !important}.float-sm-none{float:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-grid{display:grid !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}.d-sm-none{display:none !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.justify-content-sm-evenly{justify-content:space-evenly !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}.order-sm-first{order:-1 !important}.order-sm-0{order:0 !important}.order-sm-1{order:1 !important}.order-sm-2{order:2 !important}.order-sm-3{order:3 !important}.order-sm-4{order:4 !important}.order-sm-5{order:5 !important}.order-sm-last{order:6 !important}.m-sm-0{margin:0 !important}.m-sm-1{margin:.25rem !important}.m-sm-2{margin:.5rem !important}.m-sm-3{margin:1rem !important}.m-sm-4{margin:1.5rem !important}.m-sm-5{margin:3rem !important}.m-sm-auto{margin:auto !important}.mx-sm-0{margin-right:0 !important;margin-left:0 !important}.mx-sm-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-sm-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-sm-3{margin-right:1rem !important;margin-left:1rem !important}.mx-sm-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-sm-5{margin-right:3rem !important;margin-left:3rem !important}.mx-sm-auto{margin-right:auto !important;margin-left:auto !important}.my-sm-0{margin-top:0 !important;margin-bottom:0 !important}.my-sm-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-sm-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-sm-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-sm-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-sm-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-sm-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-sm-0{margin-top:0 !important}.mt-sm-1{margin-top:.25rem !important}.mt-sm-2{margin-top:.5rem !important}.mt-sm-3{margin-top:1rem !important}.mt-sm-4{margin-top:1.5rem !important}.mt-sm-5{margin-top:3rem !important}.mt-sm-auto{margin-top:auto !important}.me-sm-0{margin-right:0 !important}.me-sm-1{margin-right:.25rem !important}.me-sm-2{margin-right:.5rem !important}.me-sm-3{margin-right:1rem !important}.me-sm-4{margin-right:1.5rem !important}.me-sm-5{margin-right:3rem !important}.me-sm-auto{margin-right:auto !important}.mb-sm-0{margin-bottom:0 !important}.mb-sm-1{margin-bottom:.25rem !important}.mb-sm-2{margin-bottom:.5rem !important}.mb-sm-3{margin-bottom:1rem !important}.mb-sm-4{margin-bottom:1.5rem !important}.mb-sm-5{margin-bottom:3rem !important}.mb-sm-auto{margin-bottom:auto !important}.ms-sm-0{margin-left:0 !important}.ms-sm-1{margin-left:.25rem !important}.ms-sm-2{margin-left:.5rem !important}.ms-sm-3{margin-left:1rem !important}.ms-sm-4{margin-left:1.5rem !important}.ms-sm-5{margin-left:3rem !important}.ms-sm-auto{margin-left:auto !important}.p-sm-0{padding:0 !important}.p-sm-1{padding:.25rem !important}.p-sm-2{padding:.5rem !important}.p-sm-3{padding:1rem !important}.p-sm-4{padding:1.5rem !important}.p-sm-5{padding:3rem !important}.px-sm-0{padding-right:0 !important;padding-left:0 !important}.px-sm-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-sm-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-sm-3{padding-right:1rem !important;padding-left:1rem !important}.px-sm-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-sm-5{padding-right:3rem !important;padding-left:3rem !important}.py-sm-0{padding-top:0 !important;padding-bottom:0 !important}.py-sm-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-sm-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-sm-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-sm-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-sm-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-sm-0{padding-top:0 !important}.pt-sm-1{padding-top:.25rem !important}.pt-sm-2{padding-top:.5rem !important}.pt-sm-3{padding-top:1rem !important}.pt-sm-4{padding-top:1.5rem !important}.pt-sm-5{padding-top:3rem !important}.pe-sm-0{padding-right:0 !important}.pe-sm-1{padding-right:.25rem !important}.pe-sm-2{padding-right:.5rem !important}.pe-sm-3{padding-right:1rem !important}.pe-sm-4{padding-right:1.5rem !important}.pe-sm-5{padding-right:3rem !important}.pb-sm-0{padding-bottom:0 !important}.pb-sm-1{padding-bottom:.25rem !important}.pb-sm-2{padding-bottom:.5rem !important}.pb-sm-3{padding-bottom:1rem !important}.pb-sm-4{padding-bottom:1.5rem !important}.pb-sm-5{padding-bottom:3rem !important}.ps-sm-0{padding-left:0 !important}.ps-sm-1{padding-left:.25rem !important}.ps-sm-2{padding-left:.5rem !important}.ps-sm-3{padding-left:1rem !important}.ps-sm-4{padding-left:1.5rem !important}.ps-sm-5{padding-left:3rem !important}.gap-sm-0{gap:0 !important}.gap-sm-1{gap:.25rem !important}.gap-sm-2{gap:.5rem !important}.gap-sm-3{gap:1rem !important}.gap-sm-4{gap:1.5rem !important}.gap-sm-5{gap:3rem !important}.text-sm-start{text-align:left !important}.text-sm-end{text-align:right !important}.text-sm-center{text-align:center !important}}@media(min-width: 768px){.float-md-start{float:left !important}.float-md-end{float:right !important}.float-md-none{float:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-grid{display:grid !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}.d-md-none{display:none !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.justify-content-md-evenly{justify-content:space-evenly !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}.order-md-first{order:-1 !important}.order-md-0{order:0 !important}.order-md-1{order:1 !important}.order-md-2{order:2 !important}.order-md-3{order:3 !important}.order-md-4{order:4 !important}.order-md-5{order:5 !important}.order-md-last{order:6 !important}.m-md-0{margin:0 !important}.m-md-1{margin:.25rem !important}.m-md-2{margin:.5rem !important}.m-md-3{margin:1rem !important}.m-md-4{margin:1.5rem !important}.m-md-5{margin:3rem !important}.m-md-auto{margin:auto !important}.mx-md-0{margin-right:0 !important;margin-left:0 !important}.mx-md-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-md-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-md-3{margin-right:1rem !important;margin-left:1rem !important}.mx-md-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-md-5{margin-right:3rem !important;margin-left:3rem !important}.mx-md-auto{margin-right:auto !important;margin-left:auto !important}.my-md-0{margin-top:0 !important;margin-bottom:0 !important}.my-md-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-md-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-md-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-md-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-md-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-md-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-md-0{margin-top:0 !important}.mt-md-1{margin-top:.25rem !important}.mt-md-2{margin-top:.5rem !important}.mt-md-3{margin-top:1rem !important}.mt-md-4{margin-top:1.5rem !important}.mt-md-5{margin-top:3rem !important}.mt-md-auto{margin-top:auto !important}.me-md-0{margin-right:0 !important}.me-md-1{margin-right:.25rem !important}.me-md-2{margin-right:.5rem !important}.me-md-3{margin-right:1rem !important}.me-md-4{margin-right:1.5rem !important}.me-md-5{margin-right:3rem !important}.me-md-auto{margin-right:auto !important}.mb-md-0{margin-bottom:0 !important}.mb-md-1{margin-bottom:.25rem !important}.mb-md-2{margin-bottom:.5rem !important}.mb-md-3{margin-bottom:1rem !important}.mb-md-4{margin-bottom:1.5rem !important}.mb-md-5{margin-bottom:3rem !important}.mb-md-auto{margin-bottom:auto !important}.ms-md-0{margin-left:0 !important}.ms-md-1{margin-left:.25rem !important}.ms-md-2{margin-left:.5rem !important}.ms-md-3{margin-left:1rem !important}.ms-md-4{margin-left:1.5rem !important}.ms-md-5{margin-left:3rem !important}.ms-md-auto{margin-left:auto !important}.p-md-0{padding:0 !important}.p-md-1{padding:.25rem !important}.p-md-2{padding:.5rem !important}.p-md-3{padding:1rem !important}.p-md-4{padding:1.5rem !important}.p-md-5{padding:3rem !important}.px-md-0{padding-right:0 !important;padding-left:0 !important}.px-md-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-md-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-md-3{padding-right:1rem !important;padding-left:1rem !important}.px-md-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-md-5{padding-right:3rem !important;padding-left:3rem !important}.py-md-0{padding-top:0 !important;padding-bottom:0 !important}.py-md-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-md-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-md-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-md-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-md-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-md-0{padding-top:0 !important}.pt-md-1{padding-top:.25rem !important}.pt-md-2{padding-top:.5rem !important}.pt-md-3{padding-top:1rem !important}.pt-md-4{padding-top:1.5rem !important}.pt-md-5{padding-top:3rem !important}.pe-md-0{padding-right:0 !important}.pe-md-1{padding-right:.25rem !important}.pe-md-2{padding-right:.5rem !important}.pe-md-3{padding-right:1rem !important}.pe-md-4{padding-right:1.5rem !important}.pe-md-5{padding-right:3rem !important}.pb-md-0{padding-bottom:0 !important}.pb-md-1{padding-bottom:.25rem !important}.pb-md-2{padding-bottom:.5rem !important}.pb-md-3{padding-bottom:1rem !important}.pb-md-4{padding-bottom:1.5rem !important}.pb-md-5{padding-bottom:3rem !important}.ps-md-0{padding-left:0 !important}.ps-md-1{padding-left:.25rem !important}.ps-md-2{padding-left:.5rem !important}.ps-md-3{padding-left:1rem !important}.ps-md-4{padding-left:1.5rem !important}.ps-md-5{padding-left:3rem !important}.gap-md-0{gap:0 !important}.gap-md-1{gap:.25rem !important}.gap-md-2{gap:.5rem !important}.gap-md-3{gap:1rem !important}.gap-md-4{gap:1.5rem !important}.gap-md-5{gap:3rem !important}.text-md-start{text-align:left !important}.text-md-end{text-align:right !important}.text-md-center{text-align:center !important}}@media(min-width: 992px){.float-lg-start{float:left !important}.float-lg-end{float:right !important}.float-lg-none{float:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-grid{display:grid !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}.d-lg-none{display:none !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.justify-content-lg-evenly{justify-content:space-evenly !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}.order-lg-first{order:-1 !important}.order-lg-0{order:0 !important}.order-lg-1{order:1 !important}.order-lg-2{order:2 !important}.order-lg-3{order:3 !important}.order-lg-4{order:4 !important}.order-lg-5{order:5 !important}.order-lg-last{order:6 !important}.m-lg-0{margin:0 !important}.m-lg-1{margin:.25rem !important}.m-lg-2{margin:.5rem !important}.m-lg-3{margin:1rem !important}.m-lg-4{margin:1.5rem !important}.m-lg-5{margin:3rem !important}.m-lg-auto{margin:auto !important}.mx-lg-0{margin-right:0 !important;margin-left:0 !important}.mx-lg-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-lg-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-lg-3{margin-right:1rem !important;margin-left:1rem !important}.mx-lg-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-lg-5{margin-right:3rem !important;margin-left:3rem !important}.mx-lg-auto{margin-right:auto !important;margin-left:auto !important}.my-lg-0{margin-top:0 !important;margin-bottom:0 !important}.my-lg-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-lg-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-lg-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-lg-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-lg-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-lg-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-lg-0{margin-top:0 !important}.mt-lg-1{margin-top:.25rem !important}.mt-lg-2{margin-top:.5rem !important}.mt-lg-3{margin-top:1rem !important}.mt-lg-4{margin-top:1.5rem !important}.mt-lg-5{margin-top:3rem !important}.mt-lg-auto{margin-top:auto !important}.me-lg-0{margin-right:0 !important}.me-lg-1{margin-right:.25rem !important}.me-lg-2{margin-right:.5rem !important}.me-lg-3{margin-right:1rem !important}.me-lg-4{margin-right:1.5rem !important}.me-lg-5{margin-right:3rem !important}.me-lg-auto{margin-right:auto !important}.mb-lg-0{margin-bottom:0 !important}.mb-lg-1{margin-bottom:.25rem !important}.mb-lg-2{margin-bottom:.5rem !important}.mb-lg-3{margin-bottom:1rem !important}.mb-lg-4{margin-bottom:1.5rem !important}.mb-lg-5{margin-bottom:3rem !important}.mb-lg-auto{margin-bottom:auto !important}.ms-lg-0{margin-left:0 !important}.ms-lg-1{margin-left:.25rem !important}.ms-lg-2{margin-left:.5rem !important}.ms-lg-3{margin-left:1rem !important}.ms-lg-4{margin-left:1.5rem !important}.ms-lg-5{margin-left:3rem !important}.ms-lg-auto{margin-left:auto !important}.p-lg-0{padding:0 !important}.p-lg-1{padding:.25rem !important}.p-lg-2{padding:.5rem !important}.p-lg-3{padding:1rem !important}.p-lg-4{padding:1.5rem !important}.p-lg-5{padding:3rem !important}.px-lg-0{padding-right:0 !important;padding-left:0 !important}.px-lg-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-lg-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-lg-3{padding-right:1rem !important;padding-left:1rem !important}.px-lg-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-lg-5{padding-right:3rem !important;padding-left:3rem !important}.py-lg-0{padding-top:0 !important;padding-bottom:0 !important}.py-lg-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-lg-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-lg-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-lg-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-lg-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-lg-0{padding-top:0 !important}.pt-lg-1{padding-top:.25rem !important}.pt-lg-2{padding-top:.5rem !important}.pt-lg-3{padding-top:1rem !important}.pt-lg-4{padding-top:1.5rem !important}.pt-lg-5{padding-top:3rem !important}.pe-lg-0{padding-right:0 !important}.pe-lg-1{padding-right:.25rem !important}.pe-lg-2{padding-right:.5rem !important}.pe-lg-3{padding-right:1rem !important}.pe-lg-4{padding-right:1.5rem !important}.pe-lg-5{padding-right:3rem !important}.pb-lg-0{padding-bottom:0 !important}.pb-lg-1{padding-bottom:.25rem !important}.pb-lg-2{padding-bottom:.5rem !important}.pb-lg-3{padding-bottom:1rem !important}.pb-lg-4{padding-bottom:1.5rem !important}.pb-lg-5{padding-bottom:3rem !important}.ps-lg-0{padding-left:0 !important}.ps-lg-1{padding-left:.25rem !important}.ps-lg-2{padding-left:.5rem !important}.ps-lg-3{padding-left:1rem !important}.ps-lg-4{padding-left:1.5rem !important}.ps-lg-5{padding-left:3rem !important}.gap-lg-0{gap:0 !important}.gap-lg-1{gap:.25rem !important}.gap-lg-2{gap:.5rem !important}.gap-lg-3{gap:1rem !important}.gap-lg-4{gap:1.5rem !important}.gap-lg-5{gap:3rem !important}.text-lg-start{text-align:left !important}.text-lg-end{text-align:right !important}.text-lg-center{text-align:center !important}}@media(min-width: 1200px){.float-xl-start{float:left !important}.float-xl-end{float:right !important}.float-xl-none{float:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-grid{display:grid !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}.d-xl-none{display:none !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.justify-content-xl-evenly{justify-content:space-evenly !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}.order-xl-first{order:-1 !important}.order-xl-0{order:0 !important}.order-xl-1{order:1 !important}.order-xl-2{order:2 !important}.order-xl-3{order:3 !important}.order-xl-4{order:4 !important}.order-xl-5{order:5 !important}.order-xl-last{order:6 !important}.m-xl-0{margin:0 !important}.m-xl-1{margin:.25rem !important}.m-xl-2{margin:.5rem !important}.m-xl-3{margin:1rem !important}.m-xl-4{margin:1.5rem !important}.m-xl-5{margin:3rem !important}.m-xl-auto{margin:auto !important}.mx-xl-0{margin-right:0 !important;margin-left:0 !important}.mx-xl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xl-auto{margin-right:auto !important;margin-left:auto !important}.my-xl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xl-0{margin-top:0 !important}.mt-xl-1{margin-top:.25rem !important}.mt-xl-2{margin-top:.5rem !important}.mt-xl-3{margin-top:1rem !important}.mt-xl-4{margin-top:1.5rem !important}.mt-xl-5{margin-top:3rem !important}.mt-xl-auto{margin-top:auto !important}.me-xl-0{margin-right:0 !important}.me-xl-1{margin-right:.25rem !important}.me-xl-2{margin-right:.5rem !important}.me-xl-3{margin-right:1rem !important}.me-xl-4{margin-right:1.5rem !important}.me-xl-5{margin-right:3rem !important}.me-xl-auto{margin-right:auto !important}.mb-xl-0{margin-bottom:0 !important}.mb-xl-1{margin-bottom:.25rem !important}.mb-xl-2{margin-bottom:.5rem !important}.mb-xl-3{margin-bottom:1rem !important}.mb-xl-4{margin-bottom:1.5rem !important}.mb-xl-5{margin-bottom:3rem !important}.mb-xl-auto{margin-bottom:auto !important}.ms-xl-0{margin-left:0 !important}.ms-xl-1{margin-left:.25rem !important}.ms-xl-2{margin-left:.5rem !important}.ms-xl-3{margin-left:1rem !important}.ms-xl-4{margin-left:1.5rem !important}.ms-xl-5{margin-left:3rem !important}.ms-xl-auto{margin-left:auto !important}.p-xl-0{padding:0 !important}.p-xl-1{padding:.25rem !important}.p-xl-2{padding:.5rem !important}.p-xl-3{padding:1rem !important}.p-xl-4{padding:1.5rem !important}.p-xl-5{padding:3rem !important}.px-xl-0{padding-right:0 !important;padding-left:0 !important}.px-xl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xl-0{padding-top:0 !important}.pt-xl-1{padding-top:.25rem !important}.pt-xl-2{padding-top:.5rem !important}.pt-xl-3{padding-top:1rem !important}.pt-xl-4{padding-top:1.5rem !important}.pt-xl-5{padding-top:3rem !important}.pe-xl-0{padding-right:0 !important}.pe-xl-1{padding-right:.25rem !important}.pe-xl-2{padding-right:.5rem !important}.pe-xl-3{padding-right:1rem !important}.pe-xl-4{padding-right:1.5rem !important}.pe-xl-5{padding-right:3rem !important}.pb-xl-0{padding-bottom:0 !important}.pb-xl-1{padding-bottom:.25rem !important}.pb-xl-2{padding-bottom:.5rem !important}.pb-xl-3{padding-bottom:1rem !important}.pb-xl-4{padding-bottom:1.5rem !important}.pb-xl-5{padding-bottom:3rem !important}.ps-xl-0{padding-left:0 !important}.ps-xl-1{padding-left:.25rem !important}.ps-xl-2{padding-left:.5rem !important}.ps-xl-3{padding-left:1rem !important}.ps-xl-4{padding-left:1.5rem !important}.ps-xl-5{padding-left:3rem !important}.gap-xl-0{gap:0 !important}.gap-xl-1{gap:.25rem !important}.gap-xl-2{gap:.5rem !important}.gap-xl-3{gap:1rem !important}.gap-xl-4{gap:1.5rem !important}.gap-xl-5{gap:3rem !important}.text-xl-start{text-align:left !important}.text-xl-end{text-align:right !important}.text-xl-center{text-align:center !important}}@media(min-width: 1400px){.float-xxl-start{float:left !important}.float-xxl-end{float:right !important}.float-xxl-none{float:none !important}.d-xxl-inline{display:inline !important}.d-xxl-inline-block{display:inline-block !important}.d-xxl-block{display:block !important}.d-xxl-grid{display:grid !important}.d-xxl-table{display:table !important}.d-xxl-table-row{display:table-row !important}.d-xxl-table-cell{display:table-cell !important}.d-xxl-flex{display:flex !important}.d-xxl-inline-flex{display:inline-flex !important}.d-xxl-none{display:none !important}.flex-xxl-fill{flex:1 1 auto !important}.flex-xxl-row{flex-direction:row !important}.flex-xxl-column{flex-direction:column !important}.flex-xxl-row-reverse{flex-direction:row-reverse !important}.flex-xxl-column-reverse{flex-direction:column-reverse !important}.flex-xxl-grow-0{flex-grow:0 !important}.flex-xxl-grow-1{flex-grow:1 !important}.flex-xxl-shrink-0{flex-shrink:0 !important}.flex-xxl-shrink-1{flex-shrink:1 !important}.flex-xxl-wrap{flex-wrap:wrap !important}.flex-xxl-nowrap{flex-wrap:nowrap !important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xxl-start{justify-content:flex-start !important}.justify-content-xxl-end{justify-content:flex-end !important}.justify-content-xxl-center{justify-content:center !important}.justify-content-xxl-between{justify-content:space-between !important}.justify-content-xxl-around{justify-content:space-around !important}.justify-content-xxl-evenly{justify-content:space-evenly !important}.align-items-xxl-start{align-items:flex-start !important}.align-items-xxl-end{align-items:flex-end !important}.align-items-xxl-center{align-items:center !important}.align-items-xxl-baseline{align-items:baseline !important}.align-items-xxl-stretch{align-items:stretch !important}.align-content-xxl-start{align-content:flex-start !important}.align-content-xxl-end{align-content:flex-end !important}.align-content-xxl-center{align-content:center !important}.align-content-xxl-between{align-content:space-between !important}.align-content-xxl-around{align-content:space-around !important}.align-content-xxl-stretch{align-content:stretch !important}.align-self-xxl-auto{align-self:auto !important}.align-self-xxl-start{align-self:flex-start !important}.align-self-xxl-end{align-self:flex-end !important}.align-self-xxl-center{align-self:center !important}.align-self-xxl-baseline{align-self:baseline !important}.align-self-xxl-stretch{align-self:stretch !important}.order-xxl-first{order:-1 !important}.order-xxl-0{order:0 !important}.order-xxl-1{order:1 !important}.order-xxl-2{order:2 !important}.order-xxl-3{order:3 !important}.order-xxl-4{order:4 !important}.order-xxl-5{order:5 !important}.order-xxl-last{order:6 !important}.m-xxl-0{margin:0 !important}.m-xxl-1{margin:.25rem !important}.m-xxl-2{margin:.5rem !important}.m-xxl-3{margin:1rem !important}.m-xxl-4{margin:1.5rem !important}.m-xxl-5{margin:3rem !important}.m-xxl-auto{margin:auto !important}.mx-xxl-0{margin-right:0 !important;margin-left:0 !important}.mx-xxl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xxl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xxl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xxl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xxl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xxl-auto{margin-right:auto !important;margin-left:auto !important}.my-xxl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xxl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xxl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xxl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xxl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xxl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xxl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xxl-0{margin-top:0 !important}.mt-xxl-1{margin-top:.25rem !important}.mt-xxl-2{margin-top:.5rem !important}.mt-xxl-3{margin-top:1rem !important}.mt-xxl-4{margin-top:1.5rem !important}.mt-xxl-5{margin-top:3rem !important}.mt-xxl-auto{margin-top:auto !important}.me-xxl-0{margin-right:0 !important}.me-xxl-1{margin-right:.25rem !important}.me-xxl-2{margin-right:.5rem !important}.me-xxl-3{margin-right:1rem !important}.me-xxl-4{margin-right:1.5rem !important}.me-xxl-5{margin-right:3rem !important}.me-xxl-auto{margin-right:auto !important}.mb-xxl-0{margin-bottom:0 !important}.mb-xxl-1{margin-bottom:.25rem !important}.mb-xxl-2{margin-bottom:.5rem !important}.mb-xxl-3{margin-bottom:1rem !important}.mb-xxl-4{margin-bottom:1.5rem !important}.mb-xxl-5{margin-bottom:3rem !important}.mb-xxl-auto{margin-bottom:auto !important}.ms-xxl-0{margin-left:0 !important}.ms-xxl-1{margin-left:.25rem !important}.ms-xxl-2{margin-left:.5rem !important}.ms-xxl-3{margin-left:1rem !important}.ms-xxl-4{margin-left:1.5rem !important}.ms-xxl-5{margin-left:3rem !important}.ms-xxl-auto{margin-left:auto !important}.p-xxl-0{padding:0 !important}.p-xxl-1{padding:.25rem !important}.p-xxl-2{padding:.5rem !important}.p-xxl-3{padding:1rem !important}.p-xxl-4{padding:1.5rem !important}.p-xxl-5{padding:3rem !important}.px-xxl-0{padding-right:0 !important;padding-left:0 !important}.px-xxl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xxl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xxl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xxl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xxl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xxl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xxl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xxl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xxl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xxl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xxl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xxl-0{padding-top:0 !important}.pt-xxl-1{padding-top:.25rem !important}.pt-xxl-2{padding-top:.5rem !important}.pt-xxl-3{padding-top:1rem !important}.pt-xxl-4{padding-top:1.5rem !important}.pt-xxl-5{padding-top:3rem !important}.pe-xxl-0{padding-right:0 !important}.pe-xxl-1{padding-right:.25rem !important}.pe-xxl-2{padding-right:.5rem !important}.pe-xxl-3{padding-right:1rem !important}.pe-xxl-4{padding-right:1.5rem !important}.pe-xxl-5{padding-right:3rem !important}.pb-xxl-0{padding-bottom:0 !important}.pb-xxl-1{padding-bottom:.25rem !important}.pb-xxl-2{padding-bottom:.5rem !important}.pb-xxl-3{padding-bottom:1rem !important}.pb-xxl-4{padding-bottom:1.5rem !important}.pb-xxl-5{padding-bottom:3rem !important}.ps-xxl-0{padding-left:0 !important}.ps-xxl-1{padding-left:.25rem !important}.ps-xxl-2{padding-left:.5rem !important}.ps-xxl-3{padding-left:1rem !important}.ps-xxl-4{padding-left:1.5rem !important}.ps-xxl-5{padding-left:3rem !important}.gap-xxl-0{gap:0 !important}.gap-xxl-1{gap:.25rem !important}.gap-xxl-2{gap:.5rem !important}.gap-xxl-3{gap:1rem !important}.gap-xxl-4{gap:1.5rem !important}.gap-xxl-5{gap:3rem !important}.text-xxl-start{text-align:left !important}.text-xxl-end{text-align:right !important}.text-xxl-center{text-align:center !important}}@media(min-width: 1200px){.fs-1{font-size:2.5rem !important}.fs-2{font-size:2rem !important}.fs-3{font-size:1.75rem !important}.fs-4{font-size:1.5rem !important}}@media print{.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-grid{display:grid !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}.d-print-none{display:none !important}}body{background-color:salmon}',
          "",
        ]);
        const q = A;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  o &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (r += t(e)),
                  o && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (t, r, o, i, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var n = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (n[l] = !0);
                }
              for (var d = 0; d < t.length; d++) {
                var m = [].concat(t[d]);
                (o && n[m[0]]) ||
                  (void 0 !== a &&
                    (void 0 === m[5] ||
                      (m[1] = "@layer"
                        .concat(m[5].length > 0 ? " ".concat(m[5]) : "", " {")
                        .concat(m[1], "}")),
                    (m[5] = a)),
                  r &&
                    (m[2]
                      ? ((m[1] = "@media "
                          .concat(m[2], " {")
                          .concat(m[1], "}")),
                        (m[2] = r))
                      : (m[2] = r)),
                  i &&
                    (m[4]
                      ? ((m[1] = "@supports ("
                          .concat(m[4], ") {")
                          .concat(m[1], "}")),
                        (m[4] = i))
                      : (m[4] = "".concat(i))),
                  e.push(m));
              }
            }),
            e
          );
        };
      },
      667: (t) => {
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                e.hash && (t += e.hash),
                /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                  ? '"'.concat(
                      t.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : t)
              : t
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var e = [];
        function r(t) {
          for (var r = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === t) {
              r = o;
              break;
            }
          return r;
        }
        function o(t, o) {
          for (var a = {}, n = [], s = 0; s < t.length; s++) {
            var l = t[s],
              d = o.base ? l[0] + o.base : l[0],
              m = a[d] || 0,
              p = "".concat(d, " ").concat(m);
            a[d] = m + 1;
            var c = r(p),
              b = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== c) e[c].references++, e[c].updater(b);
            else {
              var g = i(b, o);
              (o.byIndex = s),
                e.splice(s, 0, { identifier: p, updater: g, references: 1 });
            }
            n.push(p);
          }
          return n;
        }
        function i(t, e) {
          var r = e.domAPI(e);
          return (
            r.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                r.update((t = e));
              } else r.remove();
            }
          );
        }
        t.exports = function (t, i) {
          var a = o((t = t || []), (i = i || {}));
          return function (t) {
            t = t || [];
            for (var n = 0; n < a.length; n++) {
              var s = r(a[n]);
              e[s].references--;
            }
            for (var l = o(t, i), d = 0; d < a.length; d++) {
              var m = r(a[d]);
              0 === e[m].references && (e[m].updater(), e.splice(m, 1));
            }
            a = l;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, r) {
          var o = (function (t) {
            if (void 0 === e[t]) {
              var r = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              e[t] = r;
            }
            return e[t];
          })(t);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(r);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, r) => {
        t.exports = function (t) {
          var e = r.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (r) {
              !(function (t, e, r) {
                var o = "";
                r.supports && (o += "@supports (".concat(r.supports, ") {")),
                  r.media && (o += "@media ".concat(r.media, " {"));
                var i = void 0 !== r.layer;
                i &&
                  (o += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (o += r.css),
                  i && (o += "}"),
                  r.media && (o += "}"),
                  r.supports && (o += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(o, t, e.options);
              })(e, t, r);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      204: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";
      },
      609: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";
      },
      469: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";
      },
      486: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";
      },
      144: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";
      },
      254: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";
      },
      740: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";
      },
      460: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";
      },
      647: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";
      },
      692: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";
      },
      770: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";
      },
      931: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";
      },
      199: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";
      },
      217: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";
      },
      956: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";
      },
      122: (t) => {
        t.exports =
          "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";
      },
    },
    e = {};
  function r(o) {
    var i = e[o];
    if (void 0 !== i) return i.exports;
    var a = (e[o] = { id: o, exports: {} });
    return t[o](a, a.exports, r), a.exports;
  }
  (r.m = t),
    (r.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return r.d(e, { a: e }), e;
    }),
    (r.d = (t, e) => {
      for (var o in e)
        r.o(e, o) &&
          !r.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.b = document.baseURI || self.location.href),
    (r.nc = void 0),
    (() => {
      var t = {};
      r.r(t),
        r.d(t, {
          afterMain: () => M,
          afterRead: () => D,
          afterWrite: () => B,
          applyStyles: () => X,
          arrow: () => ct,
          auto: () => y,
          basePlacements: () => k,
          beforeMain: () => I,
          beforeRead: () => L,
          beforeWrite: () => N,
          bottom: () => v,
          clippingParents: () => A,
          computeStyles: () => ht,
          createPopper: () => Ut,
          createPopperBase: () => Wt,
          createPopperLite: () => Xt,
          detectOverflow: () => Lt,
          end: () => z,
          eventListeners: () => vt,
          flip: () => St,
          hide: () => $t,
          left: () => w,
          main: () => $,
          modifierPhases: () => R,
          offset: () => Mt,
          placements: () => O,
          popper: () => C,
          popperGenerator: () => Ft,
          popperOffsets: () => Nt,
          preventOverflow: () => Pt,
          read: () => S,
          reference: () => T,
          right: () => x,
          start: () => _,
          top: () => u,
          variationPlacements: () => j,
          viewport: () => E,
          write: () => P,
        });
      const e = (...t) => t.every((t) => "number" == typeof t && !isNaN(t));
      var o = r(379),
        i = r.n(o),
        a = r(795),
        n = r.n(a),
        s = r(569),
        l = r.n(s),
        d = r(565),
        m = r.n(d),
        p = r(216),
        c = r.n(p),
        b = r(589),
        g = r.n(b),
        f = r(578),
        h = {};
      (h.styleTagTransform = g()),
        (h.setAttributes = m()),
        (h.insert = l().bind(null, "head")),
        (h.domAPI = n()),
        (h.insertStyleElement = c()),
        i()(f.Z, h),
        f.Z && f.Z.locals && f.Z.locals;
      var u = "top",
        v = "bottom",
        x = "right",
        w = "left",
        y = "auto",
        k = [u, v, x, w],
        _ = "start",
        z = "end",
        A = "clippingParents",
        E = "viewport",
        C = "popper",
        T = "reference",
        j = k.reduce(function (t, e) {
          return t.concat([e + "-" + _, e + "-" + z]);
        }, []),
        O = [].concat(k, [y]).reduce(function (t, e) {
          return t.concat([e, e + "-" + _, e + "-" + z]);
        }, []),
        L = "beforeRead",
        S = "read",
        D = "afterRead",
        I = "beforeMain",
        $ = "main",
        M = "afterMain",
        N = "beforeWrite",
        P = "write",
        B = "afterWrite",
        R = [L, S, D, I, $, M, N, P, B];
      function H(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      function q(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function F(t) {
        return t instanceof q(t).Element || t instanceof Element;
      }
      function W(t) {
        return t instanceof q(t).HTMLElement || t instanceof HTMLElement;
      }
      function U(t) {
        return (
          "undefined" != typeof ShadowRoot &&
          (t instanceof q(t).ShadowRoot || t instanceof ShadowRoot)
        );
      }
      const X = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
          var e = t.state;
          Object.keys(e.elements).forEach(function (t) {
            var r = e.styles[t] || {},
              o = e.attributes[t] || {},
              i = e.elements[t];
            W(i) &&
              H(i) &&
              (Object.assign(i.style, r),
              Object.keys(o).forEach(function (t) {
                var e = o[t];
                !1 === e
                  ? i.removeAttribute(t)
                  : i.setAttribute(t, !0 === e ? "" : e);
              }));
          });
        },
        effect: function (t) {
          var e = t.state,
            r = {
              popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(e.elements.popper.style, r.popper),
            (e.styles = r),
            e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow),
            function () {
              Object.keys(e.elements).forEach(function (t) {
                var o = e.elements[t],
                  i = e.attributes[t] || {},
                  a = Object.keys(
                    e.styles.hasOwnProperty(t) ? e.styles[t] : r[t]
                  ).reduce(function (t, e) {
                    return (t[e] = ""), t;
                  }, {});
                W(o) &&
                  H(o) &&
                  (Object.assign(o.style, a),
                  Object.keys(i).forEach(function (t) {
                    o.removeAttribute(t);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function Y(t) {
        return t.split("-")[0];
      }
      var V = Math.max,
        K = Math.min,
        Q = Math.round;
      function G() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
              .map(function (t) {
                return t.brand + "/" + t.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function Z() {
        return !/^((?!chrome|android).)*safari/i.test(G());
      }
      function J(t, e, r) {
        void 0 === e && (e = !1), void 0 === r && (r = !1);
        var o = t.getBoundingClientRect(),
          i = 1,
          a = 1;
        e &&
          W(t) &&
          ((i = (t.offsetWidth > 0 && Q(o.width) / t.offsetWidth) || 1),
          (a = (t.offsetHeight > 0 && Q(o.height) / t.offsetHeight) || 1));
        var n = (F(t) ? q(t) : window).visualViewport,
          s = !Z() && r,
          l = (o.left + (s && n ? n.offsetLeft : 0)) / i,
          d = (o.top + (s && n ? n.offsetTop : 0)) / a,
          m = o.width / i,
          p = o.height / a;
        return {
          width: m,
          height: p,
          top: d,
          right: l + m,
          bottom: d + p,
          left: l,
          x: l,
          y: d,
        };
      }
      function tt(t) {
        var e = J(t),
          r = t.offsetWidth,
          o = t.offsetHeight;
        return (
          Math.abs(e.width - r) <= 1 && (r = e.width),
          Math.abs(e.height - o) <= 1 && (o = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: r, height: o }
        );
      }
      function et(t, e) {
        var r = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (r && U(r)) {
          var o = e;
          do {
            if (o && t.isSameNode(o)) return !0;
            o = o.parentNode || o.host;
          } while (o);
        }
        return !1;
      }
      function rt(t) {
        return q(t).getComputedStyle(t);
      }
      function ot(t) {
        return ["table", "td", "th"].indexOf(H(t)) >= 0;
      }
      function it(t) {
        return ((F(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement;
      }
      function at(t) {
        return "html" === H(t)
          ? t
          : t.assignedSlot || t.parentNode || (U(t) ? t.host : null) || it(t);
      }
      function nt(t) {
        return W(t) && "fixed" !== rt(t).position ? t.offsetParent : null;
      }
      function st(t) {
        for (
          var e = q(t), r = nt(t);
          r && ot(r) && "static" === rt(r).position;

        )
          r = nt(r);
        return r &&
          ("html" === H(r) || ("body" === H(r) && "static" === rt(r).position))
          ? e
          : r ||
              (function (t) {
                var e = /firefox/i.test(G());
                if (/Trident/i.test(G()) && W(t) && "fixed" === rt(t).position)
                  return null;
                var r = at(t);
                for (
                  U(r) && (r = r.host);
                  W(r) && ["html", "body"].indexOf(H(r)) < 0;

                ) {
                  var o = rt(r);
                  if (
                    "none" !== o.transform ||
                    "none" !== o.perspective ||
                    "paint" === o.contain ||
                    -1 !== ["transform", "perspective"].indexOf(o.willChange) ||
                    (e && "filter" === o.willChange) ||
                    (e && o.filter && "none" !== o.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      function lt(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function dt(t, e, r) {
        return V(t, K(e, r));
      }
      function mt(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
      }
      function pt(t, e) {
        return e.reduce(function (e, r) {
          return (e[r] = t), e;
        }, {});
      }
      const ct = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            r = t.state,
            o = t.name,
            i = t.options,
            a = r.elements.arrow,
            n = r.modifiersData.popperOffsets,
            s = Y(r.placement),
            l = lt(s),
            d = [w, x].indexOf(s) >= 0 ? "height" : "width";
          if (a && n) {
            var m = (function (t, e) {
                return mt(
                  "number" !=
                    typeof (t =
                      "function" == typeof t
                        ? t(
                            Object.assign({}, e.rects, {
                              placement: e.placement,
                            })
                          )
                        : t)
                    ? t
                    : pt(t, k)
                );
              })(i.padding, r),
              p = tt(a),
              c = "y" === l ? u : w,
              b = "y" === l ? v : x,
              g =
                r.rects.reference[d] +
                r.rects.reference[l] -
                n[l] -
                r.rects.popper[d],
              f = n[l] - r.rects.reference[l],
              h = st(a),
              y = h
                ? "y" === l
                  ? h.clientHeight || 0
                  : h.clientWidth || 0
                : 0,
              _ = g / 2 - f / 2,
              z = m[c],
              A = y - p[d] - m[b],
              E = y / 2 - p[d] / 2 + _,
              C = dt(z, E, A),
              T = l;
            r.modifiersData[o] =
              (((e = {})[T] = C), (e.centerOffset = C - E), e);
          }
        },
        effect: function (t) {
          var e = t.state,
            r = t.options.element,
            o = void 0 === r ? "[data-popper-arrow]" : r;
          null != o &&
            ("string" != typeof o ||
              (o = e.elements.popper.querySelector(o))) &&
            et(e.elements.popper, o) &&
            (e.elements.arrow = o);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function bt(t) {
        return t.split("-")[1];
      }
      var gt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function ft(t) {
        var e,
          r = t.popper,
          o = t.popperRect,
          i = t.placement,
          a = t.variation,
          n = t.offsets,
          s = t.position,
          l = t.gpuAcceleration,
          d = t.adaptive,
          m = t.roundOffsets,
          p = t.isFixed,
          c = n.x,
          b = void 0 === c ? 0 : c,
          g = n.y,
          f = void 0 === g ? 0 : g,
          h = "function" == typeof m ? m({ x: b, y: f }) : { x: b, y: f };
        (b = h.x), (f = h.y);
        var y = n.hasOwnProperty("x"),
          k = n.hasOwnProperty("y"),
          _ = w,
          A = u,
          E = window;
        if (d) {
          var C = st(r),
            T = "clientHeight",
            j = "clientWidth";
          C === q(r) &&
            "static" !== rt((C = it(r))).position &&
            "absolute" === s &&
            ((T = "scrollHeight"), (j = "scrollWidth")),
            (i === u || ((i === w || i === x) && a === z)) &&
              ((A = v),
              (f -=
                (p && C === E && E.visualViewport
                  ? E.visualViewport.height
                  : C[T]) - o.height),
              (f *= l ? 1 : -1)),
            (i !== w && ((i !== u && i !== v) || a !== z)) ||
              ((_ = x),
              (b -=
                (p && C === E && E.visualViewport
                  ? E.visualViewport.width
                  : C[j]) - o.width),
              (b *= l ? 1 : -1));
        }
        var O,
          L = Object.assign({ position: s }, d && gt),
          S =
            !0 === m
              ? (function (t, e) {
                  var r = t.x,
                    o = t.y,
                    i = e.devicePixelRatio || 1;
                  return { x: Q(r * i) / i || 0, y: Q(o * i) / i || 0 };
                })({ x: b, y: f }, q(r))
              : { x: b, y: f };
        return (
          (b = S.x),
          (f = S.y),
          l
            ? Object.assign(
                {},
                L,
                (((O = {})[A] = k ? "0" : ""),
                (O[_] = y ? "0" : ""),
                (O.transform =
                  (E.devicePixelRatio || 1) <= 1
                    ? "translate(" + b + "px, " + f + "px)"
                    : "translate3d(" + b + "px, " + f + "px, 0)"),
                O)
              )
            : Object.assign(
                {},
                L,
                (((e = {})[A] = k ? f + "px" : ""),
                (e[_] = y ? b + "px" : ""),
                (e.transform = ""),
                e)
              )
        );
      }
      const ht = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
          var e = t.state,
            r = t.options,
            o = r.gpuAcceleration,
            i = void 0 === o || o,
            a = r.adaptive,
            n = void 0 === a || a,
            s = r.roundOffsets,
            l = void 0 === s || s,
            d = {
              placement: Y(e.placement),
              variation: bt(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: i,
              isFixed: "fixed" === e.options.strategy,
            };
          null != e.modifiersData.popperOffsets &&
            (e.styles.popper = Object.assign(
              {},
              e.styles.popper,
              ft(
                Object.assign({}, d, {
                  offsets: e.modifiersData.popperOffsets,
                  position: e.options.strategy,
                  adaptive: n,
                  roundOffsets: l,
                })
              )
            )),
            null != e.modifiersData.arrow &&
              (e.styles.arrow = Object.assign(
                {},
                e.styles.arrow,
                ft(
                  Object.assign({}, d, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  })
                )
              )),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-placement": e.placement,
            }));
        },
        data: {},
      };
      var ut = { passive: !0 };
      const vt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            r = t.instance,
            o = t.options,
            i = o.scroll,
            a = void 0 === i || i,
            n = o.resize,
            s = void 0 === n || n,
            l = q(e.elements.popper),
            d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return (
            a &&
              d.forEach(function (t) {
                t.addEventListener("scroll", r.update, ut);
              }),
            s && l.addEventListener("resize", r.update, ut),
            function () {
              a &&
                d.forEach(function (t) {
                  t.removeEventListener("scroll", r.update, ut);
                }),
                s && l.removeEventListener("resize", r.update, ut);
            }
          );
        },
        data: {},
      };
      var xt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function wt(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return xt[t];
        });
      }
      var yt = { start: "end", end: "start" };
      function kt(t) {
        return t.replace(/start|end/g, function (t) {
          return yt[t];
        });
      }
      function _t(t) {
        var e = q(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function zt(t) {
        return J(it(t)).left + _t(t).scrollLeft;
      }
      function At(t) {
        var e = rt(t),
          r = e.overflow,
          o = e.overflowX,
          i = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + i + o);
      }
      function Et(t) {
        return ["html", "body", "#document"].indexOf(H(t)) >= 0
          ? t.ownerDocument.body
          : W(t) && At(t)
          ? t
          : Et(at(t));
      }
      function Ct(t, e) {
        var r;
        void 0 === e && (e = []);
        var o = Et(t),
          i = o === (null == (r = t.ownerDocument) ? void 0 : r.body),
          a = q(o),
          n = i ? [a].concat(a.visualViewport || [], At(o) ? o : []) : o,
          s = e.concat(n);
        return i ? s : s.concat(Ct(at(n)));
      }
      function Tt(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        });
      }
      function jt(t, e, r) {
        return e === E
          ? Tt(
              (function (t, e) {
                var r = q(t),
                  o = it(t),
                  i = r.visualViewport,
                  a = o.clientWidth,
                  n = o.clientHeight,
                  s = 0,
                  l = 0;
                if (i) {
                  (a = i.width), (n = i.height);
                  var d = Z();
                  (d || (!d && "fixed" === e)) &&
                    ((s = i.offsetLeft), (l = i.offsetTop));
                }
                return { width: a, height: n, x: s + zt(t), y: l };
              })(t, r)
            )
          : F(e)
          ? (function (t, e) {
              var r = J(t, !1, "fixed" === e);
              return (
                (r.top = r.top + t.clientTop),
                (r.left = r.left + t.clientLeft),
                (r.bottom = r.top + t.clientHeight),
                (r.right = r.left + t.clientWidth),
                (r.width = t.clientWidth),
                (r.height = t.clientHeight),
                (r.x = r.left),
                (r.y = r.top),
                r
              );
            })(e, r)
          : Tt(
              (function (t) {
                var e,
                  r = it(t),
                  o = _t(t),
                  i = null == (e = t.ownerDocument) ? void 0 : e.body,
                  a = V(
                    r.scrollWidth,
                    r.clientWidth,
                    i ? i.scrollWidth : 0,
                    i ? i.clientWidth : 0
                  ),
                  n = V(
                    r.scrollHeight,
                    r.clientHeight,
                    i ? i.scrollHeight : 0,
                    i ? i.clientHeight : 0
                  ),
                  s = -o.scrollLeft + zt(t),
                  l = -o.scrollTop;
                return (
                  "rtl" === rt(i || r).direction &&
                    (s += V(r.clientWidth, i ? i.clientWidth : 0) - a),
                  { width: a, height: n, x: s, y: l }
                );
              })(it(t))
            );
      }
      function Ot(t) {
        var e,
          r = t.reference,
          o = t.element,
          i = t.placement,
          a = i ? Y(i) : null,
          n = i ? bt(i) : null,
          s = r.x + r.width / 2 - o.width / 2,
          l = r.y + r.height / 2 - o.height / 2;
        switch (a) {
          case u:
            e = { x: s, y: r.y - o.height };
            break;
          case v:
            e = { x: s, y: r.y + r.height };
            break;
          case x:
            e = { x: r.x + r.width, y: l };
            break;
          case w:
            e = { x: r.x - o.width, y: l };
            break;
          default:
            e = { x: r.x, y: r.y };
        }
        var d = a ? lt(a) : null;
        if (null != d) {
          var m = "y" === d ? "height" : "width";
          switch (n) {
            case _:
              e[d] = e[d] - (r[m] / 2 - o[m] / 2);
              break;
            case z:
              e[d] = e[d] + (r[m] / 2 - o[m] / 2);
          }
        }
        return e;
      }
      function Lt(t, e) {
        void 0 === e && (e = {});
        var r = e,
          o = r.placement,
          i = void 0 === o ? t.placement : o,
          a = r.strategy,
          n = void 0 === a ? t.strategy : a,
          s = r.boundary,
          l = void 0 === s ? A : s,
          d = r.rootBoundary,
          m = void 0 === d ? E : d,
          p = r.elementContext,
          c = void 0 === p ? C : p,
          b = r.altBoundary,
          g = void 0 !== b && b,
          f = r.padding,
          h = void 0 === f ? 0 : f,
          w = mt("number" != typeof h ? h : pt(h, k)),
          y = c === C ? T : C,
          _ = t.rects.popper,
          z = t.elements[g ? y : c],
          j = (function (t, e, r, o) {
            var i =
                "clippingParents" === e
                  ? (function (t) {
                      var e = Ct(at(t)),
                        r =
                          ["absolute", "fixed"].indexOf(rt(t).position) >= 0 &&
                          W(t)
                            ? st(t)
                            : t;
                      return F(r)
                        ? e.filter(function (t) {
                            return F(t) && et(t, r) && "body" !== H(t);
                          })
                        : [];
                    })(t)
                  : [].concat(e),
              a = [].concat(i, [r]),
              n = a[0],
              s = a.reduce(function (e, r) {
                var i = jt(t, r, o);
                return (
                  (e.top = V(i.top, e.top)),
                  (e.right = K(i.right, e.right)),
                  (e.bottom = K(i.bottom, e.bottom)),
                  (e.left = V(i.left, e.left)),
                  e
                );
              }, jt(t, n, o));
            return (
              (s.width = s.right - s.left),
              (s.height = s.bottom - s.top),
              (s.x = s.left),
              (s.y = s.top),
              s
            );
          })(F(z) ? z : z.contextElement || it(t.elements.popper), l, m, n),
          O = J(t.elements.reference),
          L = Ot({
            reference: O,
            element: _,
            strategy: "absolute",
            placement: i,
          }),
          S = Tt(Object.assign({}, _, L)),
          D = c === C ? S : O,
          I = {
            top: j.top - D.top + w.top,
            bottom: D.bottom - j.bottom + w.bottom,
            left: j.left - D.left + w.left,
            right: D.right - j.right + w.right,
          },
          $ = t.modifiersData.offset;
        if (c === C && $) {
          var M = $[i];
          Object.keys(I).forEach(function (t) {
            var e = [x, v].indexOf(t) >= 0 ? 1 : -1,
              r = [u, v].indexOf(t) >= 0 ? "y" : "x";
            I[t] += M[r] * e;
          });
        }
        return I;
      }
      const St = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            r = t.options,
            o = t.name;
          if (!e.modifiersData[o]._skip) {
            for (
              var i = r.mainAxis,
                a = void 0 === i || i,
                n = r.altAxis,
                s = void 0 === n || n,
                l = r.fallbackPlacements,
                d = r.padding,
                m = r.boundary,
                p = r.rootBoundary,
                c = r.altBoundary,
                b = r.flipVariations,
                g = void 0 === b || b,
                f = r.allowedAutoPlacements,
                h = e.options.placement,
                z = Y(h),
                A =
                  l ||
                  (z !== h && g
                    ? (function (t) {
                        if (Y(t) === y) return [];
                        var e = wt(t);
                        return [kt(t), e, kt(e)];
                      })(h)
                    : [wt(h)]),
                E = [h].concat(A).reduce(function (t, r) {
                  return t.concat(
                    Y(r) === y
                      ? (function (t, e) {
                          void 0 === e && (e = {});
                          var r = e,
                            o = r.placement,
                            i = r.boundary,
                            a = r.rootBoundary,
                            n = r.padding,
                            s = r.flipVariations,
                            l = r.allowedAutoPlacements,
                            d = void 0 === l ? O : l,
                            m = bt(o),
                            p = m
                              ? s
                                ? j
                                : j.filter(function (t) {
                                    return bt(t) === m;
                                  })
                              : k,
                            c = p.filter(function (t) {
                              return d.indexOf(t) >= 0;
                            });
                          0 === c.length && (c = p);
                          var b = c.reduce(function (e, r) {
                            return (
                              (e[r] = Lt(t, {
                                placement: r,
                                boundary: i,
                                rootBoundary: a,
                                padding: n,
                              })[Y(r)]),
                              e
                            );
                          }, {});
                          return Object.keys(b).sort(function (t, e) {
                            return b[t] - b[e];
                          });
                        })(e, {
                          placement: r,
                          boundary: m,
                          rootBoundary: p,
                          padding: d,
                          flipVariations: g,
                          allowedAutoPlacements: f,
                        })
                      : r
                  );
                }, []),
                C = e.rects.reference,
                T = e.rects.popper,
                L = new Map(),
                S = !0,
                D = E[0],
                I = 0;
              I < E.length;
              I++
            ) {
              var $ = E[I],
                M = Y($),
                N = bt($) === _,
                P = [u, v].indexOf(M) >= 0,
                B = P ? "width" : "height",
                R = Lt(e, {
                  placement: $,
                  boundary: m,
                  rootBoundary: p,
                  altBoundary: c,
                  padding: d,
                }),
                H = P ? (N ? x : w) : N ? v : u;
              C[B] > T[B] && (H = wt(H));
              var q = wt(H),
                F = [];
              if (
                (a && F.push(R[M] <= 0),
                s && F.push(R[H] <= 0, R[q] <= 0),
                F.every(function (t) {
                  return t;
                }))
              ) {
                (D = $), (S = !1);
                break;
              }
              L.set($, F);
            }
            if (S)
              for (
                var W = function (t) {
                    var e = E.find(function (e) {
                      var r = L.get(e);
                      if (r)
                        return r.slice(0, t).every(function (t) {
                          return t;
                        });
                    });
                    if (e) return (D = e), "break";
                  },
                  U = g ? 3 : 1;
                U > 0 && "break" !== W(U);
                U--
              );
            e.placement !== D &&
              ((e.modifiersData[o]._skip = !0),
              (e.placement = D),
              (e.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Dt(t, e, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: t.top - e.height - r.y,
            right: t.right - e.width + r.x,
            bottom: t.bottom - e.height + r.y,
            left: t.left - e.width - r.x,
          }
        );
      }
      function It(t) {
        return [u, x, v, w].some(function (e) {
          return t[e] >= 0;
        });
      }
      const $t = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (t) {
            var e = t.state,
              r = t.name,
              o = e.rects.reference,
              i = e.rects.popper,
              a = e.modifiersData.preventOverflow,
              n = Lt(e, { elementContext: "reference" }),
              s = Lt(e, { altBoundary: !0 }),
              l = Dt(n, o),
              d = Dt(s, i, a),
              m = It(l),
              p = It(d);
            (e.modifiersData[r] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: d,
              isReferenceHidden: m,
              hasPopperEscaped: p,
            }),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": m,
                "data-popper-escaped": p,
              }));
          },
        },
        Mt = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (t) {
            var e = t.state,
              r = t.options,
              o = t.name,
              i = r.offset,
              a = void 0 === i ? [0, 0] : i,
              n = O.reduce(function (t, r) {
                return (
                  (t[r] = (function (t, e, r) {
                    var o = Y(t),
                      i = [w, u].indexOf(o) >= 0 ? -1 : 1,
                      a =
                        "function" == typeof r
                          ? r(Object.assign({}, e, { placement: t }))
                          : r,
                      n = a[0],
                      s = a[1];
                    return (
                      (n = n || 0),
                      (s = (s || 0) * i),
                      [w, x].indexOf(o) >= 0 ? { x: s, y: n } : { x: n, y: s }
                    );
                  })(r, e.rects, a)),
                  t
                );
              }, {}),
              s = n[e.placement],
              l = s.x,
              d = s.y;
            null != e.modifiersData.popperOffsets &&
              ((e.modifiersData.popperOffsets.x += l),
              (e.modifiersData.popperOffsets.y += d)),
              (e.modifiersData[o] = n);
          },
        },
        Nt = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (t) {
            var e = t.state,
              r = t.name;
            e.modifiersData[r] = Ot({
              reference: e.rects.reference,
              element: e.rects.popper,
              strategy: "absolute",
              placement: e.placement,
            });
          },
          data: {},
        },
        Pt = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function (t) {
            var e = t.state,
              r = t.options,
              o = t.name,
              i = r.mainAxis,
              a = void 0 === i || i,
              n = r.altAxis,
              s = void 0 !== n && n,
              l = r.boundary,
              d = r.rootBoundary,
              m = r.altBoundary,
              p = r.padding,
              c = r.tether,
              b = void 0 === c || c,
              g = r.tetherOffset,
              f = void 0 === g ? 0 : g,
              h = Lt(e, {
                boundary: l,
                rootBoundary: d,
                padding: p,
                altBoundary: m,
              }),
              y = Y(e.placement),
              k = bt(e.placement),
              z = !k,
              A = lt(y),
              E = "x" === A ? "y" : "x",
              C = e.modifiersData.popperOffsets,
              T = e.rects.reference,
              j = e.rects.popper,
              O =
                "function" == typeof f
                  ? f(Object.assign({}, e.rects, { placement: e.placement }))
                  : f,
              L =
                "number" == typeof O
                  ? { mainAxis: O, altAxis: O }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
              S = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement]
                : null,
              D = { x: 0, y: 0 };
            if (C) {
              if (a) {
                var I,
                  $ = "y" === A ? u : w,
                  M = "y" === A ? v : x,
                  N = "y" === A ? "height" : "width",
                  P = C[A],
                  B = P + h[$],
                  R = P - h[M],
                  H = b ? -j[N] / 2 : 0,
                  q = k === _ ? T[N] : j[N],
                  F = k === _ ? -j[N] : -T[N],
                  W = e.elements.arrow,
                  U = b && W ? tt(W) : { width: 0, height: 0 },
                  X = e.modifiersData["arrow#persistent"]
                    ? e.modifiersData["arrow#persistent"].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  Q = X[$],
                  G = X[M],
                  Z = dt(0, T[N], U[N]),
                  J = z
                    ? T[N] / 2 - H - Z - Q - L.mainAxis
                    : q - Z - Q - L.mainAxis,
                  et = z
                    ? -T[N] / 2 + H + Z + G + L.mainAxis
                    : F + Z + G + L.mainAxis,
                  rt = e.elements.arrow && st(e.elements.arrow),
                  ot = rt
                    ? "y" === A
                      ? rt.clientTop || 0
                      : rt.clientLeft || 0
                    : 0,
                  it = null != (I = null == S ? void 0 : S[A]) ? I : 0,
                  at = P + et - it,
                  nt = dt(b ? K(B, P + J - it - ot) : B, P, b ? V(R, at) : R);
                (C[A] = nt), (D[A] = nt - P);
              }
              if (s) {
                var mt,
                  pt = "x" === A ? u : w,
                  ct = "x" === A ? v : x,
                  gt = C[E],
                  ft = "y" === E ? "height" : "width",
                  ht = gt + h[pt],
                  ut = gt - h[ct],
                  vt = -1 !== [u, w].indexOf(y),
                  xt = null != (mt = null == S ? void 0 : S[E]) ? mt : 0,
                  wt = vt ? ht : gt - T[ft] - j[ft] - xt + L.altAxis,
                  yt = vt ? gt + T[ft] + j[ft] - xt - L.altAxis : ut,
                  kt =
                    b && vt
                      ? (function (t, e, r) {
                          var o = dt(t, e, r);
                          return o > r ? r : o;
                        })(wt, gt, yt)
                      : dt(b ? wt : ht, gt, b ? yt : ut);
                (C[E] = kt), (D[E] = kt - gt);
              }
              e.modifiersData[o] = D;
            }
          },
          requiresIfExists: ["offset"],
        };
      function Bt(t, e, r) {
        void 0 === r && (r = !1);
        var o,
          i,
          a = W(e),
          n =
            W(e) &&
            (function (t) {
              var e = t.getBoundingClientRect(),
                r = Q(e.width) / t.offsetWidth || 1,
                o = Q(e.height) / t.offsetHeight || 1;
              return 1 !== r || 1 !== o;
            })(e),
          s = it(e),
          l = J(t, n, r),
          d = { scrollLeft: 0, scrollTop: 0 },
          m = { x: 0, y: 0 };
        return (
          (a || (!a && !r)) &&
            (("body" !== H(e) || At(s)) &&
              (d =
                (o = e) !== q(o) && W(o)
                  ? { scrollLeft: (i = o).scrollLeft, scrollTop: i.scrollTop }
                  : _t(o)),
            W(e)
              ? (((m = J(e, !0)).x += e.clientLeft), (m.y += e.clientTop))
              : s && (m.x = zt(s))),
          {
            x: l.left + d.scrollLeft - m.x,
            y: l.top + d.scrollTop - m.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function Rt(t) {
        var e = new Map(),
          r = new Set(),
          o = [];
        function i(t) {
          r.add(t.name),
            []
              .concat(t.requires || [], t.requiresIfExists || [])
              .forEach(function (t) {
                if (!r.has(t)) {
                  var o = e.get(t);
                  o && i(o);
                }
              }),
            o.push(t);
        }
        return (
          t.forEach(function (t) {
            e.set(t.name, t);
          }),
          t.forEach(function (t) {
            r.has(t.name) || i(t);
          }),
          o
        );
      }
      var Ht = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function qt() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect);
        });
      }
      function Ft(t) {
        void 0 === t && (t = {});
        var e = t,
          r = e.defaultModifiers,
          o = void 0 === r ? [] : r,
          i = e.defaultOptions,
          a = void 0 === i ? Ht : i;
        return function (t, e, r) {
          void 0 === r && (r = a);
          var i,
            n,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Ht, a),
              modifiersData: {},
              elements: { reference: t, popper: e },
              attributes: {},
              styles: {},
            },
            l = [],
            d = !1,
            m = {
              state: s,
              setOptions: function (r) {
                var i = "function" == typeof r ? r(s.options) : r;
                p(),
                  (s.options = Object.assign({}, a, s.options, i)),
                  (s.scrollParents = {
                    reference: F(t)
                      ? Ct(t)
                      : t.contextElement
                      ? Ct(t.contextElement)
                      : [],
                    popper: Ct(e),
                  });
                var n,
                  d,
                  c = (function (t) {
                    var e = Rt(t);
                    return R.reduce(function (t, r) {
                      return t.concat(
                        e.filter(function (t) {
                          return t.phase === r;
                        })
                      );
                    }, []);
                  })(
                    ((n = [].concat(o, s.options.modifiers)),
                    (d = n.reduce(function (t, e) {
                      var r = t[e.name];
                      return (
                        (t[e.name] = r
                          ? Object.assign({}, r, e, {
                              options: Object.assign({}, r.options, e.options),
                              data: Object.assign({}, r.data, e.data),
                            })
                          : e),
                        t
                      );
                    }, {})),
                    Object.keys(d).map(function (t) {
                      return d[t];
                    }))
                  );
                return (
                  (s.orderedModifiers = c.filter(function (t) {
                    return t.enabled;
                  })),
                  s.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      r = t.options,
                      o = void 0 === r ? {} : r,
                      i = t.effect;
                    if ("function" == typeof i) {
                      var a = i({ state: s, name: e, instance: m, options: o });
                      l.push(a || function () {});
                    }
                  }),
                  m.update()
                );
              },
              forceUpdate: function () {
                if (!d) {
                  var t = s.elements,
                    e = t.reference,
                    r = t.popper;
                  if (qt(e, r)) {
                    (s.rects = {
                      reference: Bt(e, st(r), "fixed" === s.options.strategy),
                      popper: tt(r),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (t) {
                        return (s.modifiersData[t.name] = Object.assign(
                          {},
                          t.data
                        ));
                      });
                    for (var o = 0; o < s.orderedModifiers.length; o++)
                      if (!0 !== s.reset) {
                        var i = s.orderedModifiers[o],
                          a = i.fn,
                          n = i.options,
                          l = void 0 === n ? {} : n,
                          p = i.name;
                        "function" == typeof a &&
                          (s =
                            a({ state: s, options: l, name: p, instance: m }) ||
                            s);
                      } else (s.reset = !1), (o = -1);
                  }
                }
              },
              update:
                ((i = function () {
                  return new Promise(function (t) {
                    m.forceUpdate(), t(s);
                  });
                }),
                function () {
                  return (
                    n ||
                      (n = new Promise(function (t) {
                        Promise.resolve().then(function () {
                          (n = void 0), t(i());
                        });
                      })),
                    n
                  );
                }),
              destroy: function () {
                p(), (d = !0);
              },
            };
          if (!qt(t, e)) return m;
          function p() {
            l.forEach(function (t) {
              return t();
            }),
              (l = []);
          }
          return (
            m.setOptions(r).then(function (t) {
              !d && r.onFirstUpdate && r.onFirstUpdate(t);
            }),
            m
          );
        };
      }
      var Wt = Ft(),
        Ut = Ft({ defaultModifiers: [vt, Nt, ht, X, Mt, St, Pt, ct, $t] }),
        Xt = Ft({ defaultModifiers: [vt, Nt, ht, X] });
      const Yt = "transitionend",
        Vt = (t) => {
          let e = t.getAttribute("data-bs-target");
          if (!e || "#" === e) {
            let r = t.getAttribute("href");
            if (!r || (!r.includes("#") && !r.startsWith("."))) return null;
            r.includes("#") &&
              !r.startsWith("#") &&
              (r = `#${r.split("#")[1]}`),
              (e = r && "#" !== r ? r.trim() : null);
          }
          return e;
        },
        Kt = (t) => {
          const e = Vt(t);
          return e && document.querySelector(e) ? e : null;
        },
        Qt = (t) => {
          const e = Vt(t);
          return e ? document.querySelector(e) : null;
        },
        Gt = (t) => {
          t.dispatchEvent(new Event(Yt));
        },
        Zt = (t) =>
          !(!t || "object" != typeof t) &&
          (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        Jt = (t) =>
          Zt(t)
            ? t.jquery
              ? t[0]
              : t
            : "string" == typeof t && t.length > 0
            ? document.querySelector(t)
            : null,
        te = (t) => {
          if (!Zt(t) || 0 === t.getClientRects().length) return !1;
          const e =
              "visible" === getComputedStyle(t).getPropertyValue("visibility"),
            r = t.closest("details:not([open])");
          if (!r) return e;
          if (r !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== r) return !1;
            if (null === e) return !1;
          }
          return e;
        },
        ee = (t) =>
          !t ||
          t.nodeType !== Node.ELEMENT_NODE ||
          !!t.classList.contains("disabled") ||
          (void 0 !== t.disabled
            ? t.disabled
            : t.hasAttribute("disabled") &&
              "false" !== t.getAttribute("disabled")),
        re = (t) => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
          }
          return t instanceof ShadowRoot
            ? t
            : t.parentNode
            ? re(t.parentNode)
            : null;
        },
        oe = () => {},
        ie = (t) => {
          t.offsetHeight;
        },
        ae = () =>
          window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
            ? window.jQuery
            : null,
        ne = [],
        se = () => "rtl" === document.documentElement.dir,
        le = (t) => {
          var e;
          (e = () => {
            const e = ae();
            if (e) {
              const r = t.NAME,
                o = e.fn[r];
              (e.fn[r] = t.jQueryInterface),
                (e.fn[r].Constructor = t),
                (e.fn[r].noConflict = () => ((e.fn[r] = o), t.jQueryInterface));
            }
          }),
            "loading" === document.readyState
              ? (ne.length ||
                  document.addEventListener("DOMContentLoaded", () => {
                    for (const t of ne) t();
                  }),
                ne.push(e))
              : e();
        },
        de = (t) => {
          "function" == typeof t && t();
        },
        me = (t, e, r = !0) => {
          if (!r) return void de(t);
          const o =
            ((t) => {
              if (!t) return 0;
              let { transitionDuration: e, transitionDelay: r } =
                window.getComputedStyle(t);
              const o = Number.parseFloat(e),
                i = Number.parseFloat(r);
              return o || i
                ? ((e = e.split(",")[0]),
                  (r = r.split(",")[0]),
                  1e3 * (Number.parseFloat(e) + Number.parseFloat(r)))
                : 0;
            })(e) + 5;
          let i = !1;
          const a = ({ target: r }) => {
            r === e && ((i = !0), e.removeEventListener(Yt, a), de(t));
          };
          e.addEventListener(Yt, a),
            setTimeout(() => {
              i || Gt(e);
            }, o);
        },
        pe = (t, e, r, o) => {
          const i = t.length;
          let a = t.indexOf(e);
          return -1 === a
            ? !r && o
              ? t[i - 1]
              : t[0]
            : ((a += r ? 1 : -1),
              o && (a = (a + i) % i),
              t[Math.max(0, Math.min(a, i - 1))]);
        },
        ce = /[^.]*(?=\..*)\.|.*/,
        be = /\..*/,
        ge = /::\d+$/,
        fe = {};
      let he = 1;
      const ue = { mouseenter: "mouseover", mouseleave: "mouseout" },
        ve = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll",
        ]);
      function xe(t, e) {
        return (e && `${e}::${he++}`) || t.uidEvent || he++;
      }
      function we(t) {
        const e = xe(t);
        return (t.uidEvent = e), (fe[e] = fe[e] || {}), fe[e];
      }
      function ye(t, e, r = null) {
        return Object.values(t).find(
          (t) => t.callable === e && t.delegationSelector === r
        );
      }
      function ke(t, e, r) {
        const o = "string" == typeof e,
          i = o ? r : e || r;
        let a = Ee(t);
        return ve.has(a) || (a = t), [o, i, a];
      }
      function _e(t, e, r, o, i) {
        if ("string" != typeof e || !t) return;
        let [a, n, s] = ke(e, r, o);
        if (e in ue) {
          const t = (t) =>
            function (e) {
              if (
                !e.relatedTarget ||
                (e.relatedTarget !== e.delegateTarget &&
                  !e.delegateTarget.contains(e.relatedTarget))
              )
                return t.call(this, e);
            };
          n = t(n);
        }
        const l = we(t),
          d = l[s] || (l[s] = {}),
          m = ye(d, n, a ? r : null);
        if (m) return void (m.oneOff = m.oneOff && i);
        const p = xe(n, e.replace(ce, "")),
          c = a
            ? (function (t, e, r) {
                return function o(i) {
                  const a = t.querySelectorAll(e);
                  for (let { target: n } = i; n && n !== this; n = n.parentNode)
                    for (const s of a)
                      if (s === n)
                        return (
                          Te(i, { delegateTarget: n }),
                          o.oneOff && Ce.off(t, i.type, e, r),
                          r.apply(n, [i])
                        );
                };
              })(t, r, n)
            : (function (t, e) {
                return function r(o) {
                  return (
                    Te(o, { delegateTarget: t }),
                    r.oneOff && Ce.off(t, o.type, e),
                    e.apply(t, [o])
                  );
                };
              })(t, n);
        (c.delegationSelector = a ? r : null),
          (c.callable = n),
          (c.oneOff = i),
          (c.uidEvent = p),
          (d[p] = c),
          t.addEventListener(s, c, a);
      }
      function ze(t, e, r, o, i) {
        const a = ye(e[r], o, i);
        a && (t.removeEventListener(r, a, Boolean(i)), delete e[r][a.uidEvent]);
      }
      function Ae(t, e, r, o) {
        const i = e[r] || {};
        for (const a of Object.keys(i))
          if (a.includes(o)) {
            const o = i[a];
            ze(t, e, r, o.callable, o.delegationSelector);
          }
      }
      function Ee(t) {
        return (t = t.replace(be, "")), ue[t] || t;
      }
      const Ce = {
        on(t, e, r, o) {
          _e(t, e, r, o, !1);
        },
        one(t, e, r, o) {
          _e(t, e, r, o, !0);
        },
        off(t, e, r, o) {
          if ("string" != typeof e || !t) return;
          const [i, a, n] = ke(e, r, o),
            s = n !== e,
            l = we(t),
            d = l[n] || {},
            m = e.startsWith(".");
          if (void 0 === a) {
            if (m) for (const r of Object.keys(l)) Ae(t, l, r, e.slice(1));
            for (const r of Object.keys(d)) {
              const o = r.replace(ge, "");
              if (!s || e.includes(o)) {
                const e = d[r];
                ze(t, l, n, e.callable, e.delegationSelector);
              }
            }
          } else {
            if (!Object.keys(d).length) return;
            ze(t, l, n, a, i ? r : null);
          }
        },
        trigger(t, e, r) {
          if ("string" != typeof e || !t) return null;
          const o = ae();
          let i = null,
            a = !0,
            n = !0,
            s = !1;
          e !== Ee(e) &&
            o &&
            ((i = o.Event(e, r)),
            o(t).trigger(i),
            (a = !i.isPropagationStopped()),
            (n = !i.isImmediatePropagationStopped()),
            (s = i.isDefaultPrevented()));
          let l = new Event(e, { bubbles: a, cancelable: !0 });
          return (
            (l = Te(l, r)),
            s && l.preventDefault(),
            n && t.dispatchEvent(l),
            l.defaultPrevented && i && i.preventDefault(),
            l
          );
        },
      };
      function Te(t, e) {
        for (const [r, o] of Object.entries(e || {}))
          try {
            t[r] = o;
          } catch (e) {
            Object.defineProperty(t, r, { configurable: !0, get: () => o });
          }
        return t;
      }
      const je = new Map(),
        Oe = {
          set(t, e, r) {
            je.has(t) || je.set(t, new Map());
            const o = je.get(t);
            o.has(e) || 0 === o.size
              ? o.set(e, r)
              : console.error(
                  `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                    Array.from(o.keys())[0]
                  }.`
                );
          },
          get: (t, e) => (je.has(t) && je.get(t).get(e)) || null,
          remove(t, e) {
            if (!je.has(t)) return;
            const r = je.get(t);
            r.delete(e), 0 === r.size && je.delete(t);
          },
        };
      function Le(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
          return JSON.parse(decodeURIComponent(t));
        } catch (e) {
          return t;
        }
      }
      function Se(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
      }
      const De = {
        setDataAttribute(t, e, r) {
          t.setAttribute(`data-bs-${Se(e)}`, r);
        },
        removeDataAttribute(t, e) {
          t.removeAttribute(`data-bs-${Se(e)}`);
        },
        getDataAttributes(t) {
          if (!t) return {};
          const e = {},
            r = Object.keys(t.dataset).filter(
              (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
            );
          for (const o of r) {
            let r = o.replace(/^bs/, "");
            (r = r.charAt(0).toLowerCase() + r.slice(1, r.length)),
              (e[r] = Le(t.dataset[o]));
          }
          return e;
        },
        getDataAttribute: (t, e) => Le(t.getAttribute(`data-bs-${Se(e)}`)),
      };
      class Ie {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error(
            'You have to implement the static method "NAME", for each component!'
          );
        }
        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }
        _configAfterMerge(t) {
          return t;
        }
        _mergeConfigObj(t, e) {
          const r = Zt(e) ? De.getDataAttribute(e, "config") : {};
          return {
            ...this.constructor.Default,
            ...("object" == typeof r ? r : {}),
            ...(Zt(e) ? De.getDataAttributes(e) : {}),
            ...("object" == typeof t ? t : {}),
          };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
          for (const o of Object.keys(e)) {
            const i = e[o],
              a = t[o],
              n = Zt(a)
                ? "element"
                : null == (r = a)
                ? `${r}`
                : Object.prototype.toString
                    .call(r)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
            if (!new RegExp(i).test(n))
              throw new TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${n}" but expected type "${i}".`
              );
          }
          var r;
        }
      }
      class $e extends Ie {
        constructor(t, e) {
          super(),
            (t = Jt(t)) &&
              ((this._element = t),
              (this._config = this._getConfig(e)),
              Oe.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          Oe.remove(this._element, this.constructor.DATA_KEY),
            Ce.off(this._element, this.constructor.EVENT_KEY);
          for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, e, r = !0) {
          me(t, e, r);
        }
        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t, this._element)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }
        static getInstance(t) {
          return Oe.get(Jt(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
          return (
            this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
          );
        }
        static get VERSION() {
          return "5.2.3";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
          return `${t}${this.EVENT_KEY}`;
        }
      }
      const Me = (t, e = "hide") => {
          const r = `click.dismiss${t.EVENT_KEY}`,
            o = t.NAME;
          Ce.on(document, r, `[data-bs-dismiss="${o}"]`, function (r) {
            if (
              (["A", "AREA"].includes(this.tagName) && r.preventDefault(),
              ee(this))
            )
              return;
            const i = Qt(this) || this.closest(`.${o}`);
            t.getOrCreateInstance(i)[e]();
          });
        },
        Ne = ".bs.alert",
        Pe = `close${Ne}`,
        Be = `closed${Ne}`;
      class Re extends $e {
        static get NAME() {
          return "alert";
        }
        close() {
          if (Ce.trigger(this._element, Pe).defaultPrevented) return;
          this._element.classList.remove("show");
          const t = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
          this._element.remove(), Ce.trigger(this._element, Be), this.dispose();
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Re.getOrCreateInstance(this);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      Me(Re, "close"), le(Re);
      const He = '[data-bs-toggle="button"]';
      class qe extends $e {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active")
          );
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = qe.getOrCreateInstance(this);
            "toggle" === t && e[t]();
          });
        }
      }
      Ce.on(document, "click.bs.button.data-api", He, (t) => {
        t.preventDefault();
        const e = t.target.closest(He);
        qe.getOrCreateInstance(e).toggle();
      }),
        le(qe);
      const Fe = {
          find: (t, e = document.documentElement) =>
            [].concat(...Element.prototype.querySelectorAll.call(e, t)),
          findOne: (t, e = document.documentElement) =>
            Element.prototype.querySelector.call(e, t),
          children: (t, e) =>
            [].concat(...t.children).filter((t) => t.matches(e)),
          parents(t, e) {
            const r = [];
            let o = t.parentNode.closest(e);
            for (; o; ) r.push(o), (o = o.parentNode.closest(e));
            return r;
          },
          prev(t, e) {
            let r = t.previousElementSibling;
            for (; r; ) {
              if (r.matches(e)) return [r];
              r = r.previousElementSibling;
            }
            return [];
          },
          next(t, e) {
            let r = t.nextElementSibling;
            for (; r; ) {
              if (r.matches(e)) return [r];
              r = r.nextElementSibling;
            }
            return [];
          },
          focusableChildren(t) {
            const e = [
              "a",
              "button",
              "input",
              "textarea",
              "select",
              "details",
              "[tabindex]",
              '[contenteditable="true"]',
            ]
              .map((t) => `${t}:not([tabindex^="-"])`)
              .join(",");
            return this.find(e, t).filter((t) => !ee(t) && te(t));
          },
        },
        We = ".bs.swipe",
        Ue = `touchstart${We}`,
        Xe = `touchmove${We}`,
        Ye = `touchend${We}`,
        Ve = `pointerdown${We}`,
        Ke = `pointerup${We}`,
        Qe = { endCallback: null, leftCallback: null, rightCallback: null },
        Ge = {
          endCallback: "(function|null)",
          leftCallback: "(function|null)",
          rightCallback: "(function|null)",
        };
      class Ze extends Ie {
        constructor(t, e) {
          super(),
            (this._element = t),
            t &&
              Ze.isSupported() &&
              ((this._config = this._getConfig(e)),
              (this._deltaX = 0),
              (this._supportPointerEvents = Boolean(window.PointerEvent)),
              this._initEvents());
        }
        static get Default() {
          return Qe;
        }
        static get DefaultType() {
          return Ge;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          Ce.off(this._element, We);
        }
        _start(t) {
          this._supportPointerEvents
            ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
            : (this._deltaX = t.touches[0].clientX);
        }
        _end(t) {
          this._eventIsPointerPenTouch(t) &&
            (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            de(this._config.endCallback);
        }
        _move(t) {
          this._deltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const t = Math.abs(this._deltaX);
          if (t <= 40) return;
          const e = t / this._deltaX;
          (this._deltaX = 0),
            e &&
              de(
                e > 0 ? this._config.rightCallback : this._config.leftCallback
              );
        }
        _initEvents() {
          this._supportPointerEvents
            ? (Ce.on(this._element, Ve, (t) => this._start(t)),
              Ce.on(this._element, Ke, (t) => this._end(t)),
              this._element.classList.add("pointer-event"))
            : (Ce.on(this._element, Ue, (t) => this._start(t)),
              Ce.on(this._element, Xe, (t) => this._move(t)),
              Ce.on(this._element, Ye, (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
          return (
            this._supportPointerEvents &&
            ("pen" === t.pointerType || "touch" === t.pointerType)
          );
        }
        static isSupported() {
          return (
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0
          );
        }
      }
      const Je = ".bs.carousel",
        tr = ".data-api",
        er = "next",
        rr = "prev",
        or = "left",
        ir = "right",
        ar = `slide${Je}`,
        nr = `slid${Je}`,
        sr = `keydown${Je}`,
        lr = `mouseenter${Je}`,
        dr = `mouseleave${Je}`,
        mr = `dragstart${Je}`,
        pr = `load${Je}${tr}`,
        cr = `click${Je}${tr}`,
        br = "carousel",
        gr = "active",
        fr = ".active",
        hr = ".carousel-item",
        ur = fr + hr,
        vr = { ArrowLeft: ir, ArrowRight: or },
        xr = {
          interval: 5e3,
          keyboard: !0,
          pause: "hover",
          ride: !1,
          touch: !0,
          wrap: !0,
        },
        wr = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          pause: "(string|boolean)",
          ride: "(boolean|string)",
          touch: "boolean",
          wrap: "boolean",
        };
      class yr extends $e {
        constructor(t, e) {
          super(t, e),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = Fe.findOne(
              ".carousel-indicators",
              this._element
            )),
            this._addEventListeners(),
            this._config.ride === br && this.cycle();
        }
        static get Default() {
          return xr;
        }
        static get DefaultType() {
          return wr;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(er);
        }
        nextWhenVisible() {
          !document.hidden && te(this._element) && this.next();
        }
        prev() {
          this._slide(rr);
        }
        pause() {
          this._isSliding && Gt(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(
              () => this.nextWhenVisible(),
              this._config.interval
            ));
        }
        _maybeEnableCycle() {
          this._config.ride &&
            (this._isSliding
              ? Ce.one(this._element, nr, () => this.cycle())
              : this.cycle());
        }
        to(t) {
          const e = this._getItems();
          if (t > e.length - 1 || t < 0) return;
          if (this._isSliding)
            return void Ce.one(this._element, nr, () => this.to(t));
          const r = this._getItemIndex(this._getActive());
          if (r === t) return;
          const o = t > r ? er : rr;
          this._slide(o, e[t]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
          return (t.defaultInterval = t.interval), t;
        }
        _addEventListeners() {
          this._config.keyboard &&
            Ce.on(this._element, sr, (t) => this._keydown(t)),
            "hover" === this._config.pause &&
              (Ce.on(this._element, lr, () => this.pause()),
              Ce.on(this._element, dr, () => this._maybeEnableCycle())),
            this._config.touch &&
              Ze.isSupported() &&
              this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (const t of Fe.find(".carousel-item img", this._element))
            Ce.on(t, mr, (t) => t.preventDefault());
          const t = {
            leftCallback: () => this._slide(this._directionToOrder(or)),
            rightCallback: () => this._slide(this._directionToOrder(ir)),
            endCallback: () => {
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval
                )));
            },
          };
          this._swipeHelper = new Ze(this._element, t);
        }
        _keydown(t) {
          if (/input|textarea/i.test(t.target.tagName)) return;
          const e = vr[t.key];
          e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
          return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
          if (!this._indicatorsElement) return;
          const e = Fe.findOne(fr, this._indicatorsElement);
          e.classList.remove(gr), e.removeAttribute("aria-current");
          const r = Fe.findOne(
            `[data-bs-slide-to="${t}"]`,
            this._indicatorsElement
          );
          r && (r.classList.add(gr), r.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const t = this._activeElement || this._getActive();
          if (!t) return;
          const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
          this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
          if (this._isSliding) return;
          const r = this._getActive(),
            o = t === er,
            i = e || pe(this._getItems(), r, o, this._config.wrap);
          if (i === r) return;
          const a = this._getItemIndex(i),
            n = (e) =>
              Ce.trigger(this._element, e, {
                relatedTarget: i,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(r),
                to: a,
              });
          if (n(ar).defaultPrevented) return;
          if (!r || !i) return;
          const s = Boolean(this._interval);
          this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(a),
            (this._activeElement = i);
          const l = o ? "carousel-item-start" : "carousel-item-end",
            d = o ? "carousel-item-next" : "carousel-item-prev";
          i.classList.add(d),
            ie(i),
            r.classList.add(l),
            i.classList.add(l),
            this._queueCallback(
              () => {
                i.classList.remove(l, d),
                  i.classList.add(gr),
                  r.classList.remove(gr, d, l),
                  (this._isSliding = !1),
                  n(nr);
              },
              r,
              this._isAnimated()
            ),
            s && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return Fe.findOne(ur, this._element);
        }
        _getItems() {
          return Fe.find(hr, this._element);
        }
        _clearInterval() {
          this._interval &&
            (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
          return se() ? (t === or ? rr : er) : t === or ? er : rr;
        }
        _orderToDirection(t) {
          return se() ? (t === rr ? or : ir) : t === rr ? ir : or;
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = yr.getOrCreateInstance(this, t);
            if ("number" != typeof t) {
              if ("string" == typeof t) {
                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                  throw new TypeError(`No method named "${t}"`);
                e[t]();
              }
            } else e.to(t);
          });
        }
      }
      Ce.on(document, cr, "[data-bs-slide], [data-bs-slide-to]", function (t) {
        const e = Qt(this);
        if (!e || !e.classList.contains(br)) return;
        t.preventDefault();
        const r = yr.getOrCreateInstance(e),
          o = this.getAttribute("data-bs-slide-to");
        return o
          ? (r.to(o), void r._maybeEnableCycle())
          : "next" === De.getDataAttribute(this, "slide")
          ? (r.next(), void r._maybeEnableCycle())
          : (r.prev(), void r._maybeEnableCycle());
      }),
        Ce.on(window, pr, () => {
          const t = Fe.find('[data-bs-ride="carousel"]');
          for (const e of t) yr.getOrCreateInstance(e);
        }),
        le(yr);
      const kr = ".bs.collapse",
        _r = `show${kr}`,
        zr = `shown${kr}`,
        Ar = `hide${kr}`,
        Er = `hidden${kr}`,
        Cr = `click${kr}.data-api`,
        Tr = "show",
        jr = "collapse",
        Or = "collapsing",
        Lr = `:scope .${jr} .${jr}`,
        Sr = '[data-bs-toggle="collapse"]',
        Dr = { parent: null, toggle: !0 },
        Ir = { parent: "(null|element)", toggle: "boolean" };
      class $r extends $e {
        constructor(t, e) {
          super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
          const r = Fe.find(Sr);
          for (const t of r) {
            const e = Kt(t),
              r = Fe.find(e).filter((t) => t === this._element);
            null !== e && r.length && this._triggerArray.push(t);
          }
          this._initializeChildren(),
            this._config.parent ||
              this._addAriaAndCollapsedClass(
                this._triggerArray,
                this._isShown()
              ),
            this._config.toggle && this.toggle();
        }
        static get Default() {
          return Dr;
        }
        static get DefaultType() {
          return Ir;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let t = [];
          if (
            (this._config.parent &&
              (t = this._getFirstLevelChildren(
                ".collapse.show, .collapse.collapsing"
              )
                .filter((t) => t !== this._element)
                .map((t) => $r.getOrCreateInstance(t, { toggle: !1 }))),
            t.length && t[0]._isTransitioning)
          )
            return;
          if (Ce.trigger(this._element, _r).defaultPrevented) return;
          for (const e of t) e.hide();
          const e = this._getDimension();
          this._element.classList.remove(jr),
            this._element.classList.add(Or),
            (this._element.style[e] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0);
          const r = `scroll${e[0].toUpperCase() + e.slice(1)}`;
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(Or),
                this._element.classList.add(jr, Tr),
                (this._element.style[e] = ""),
                Ce.trigger(this._element, zr);
            },
            this._element,
            !0
          ),
            (this._element.style[e] = `${this._element[r]}px`);
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) return;
          if (Ce.trigger(this._element, Ar).defaultPrevented) return;
          const t = this._getDimension();
          (this._element.style[t] = `${
            this._element.getBoundingClientRect()[t]
          }px`),
            ie(this._element),
            this._element.classList.add(Or),
            this._element.classList.remove(jr, Tr);
          for (const t of this._triggerArray) {
            const e = Qt(t);
            e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
          }
          (this._isTransitioning = !0),
            (this._element.style[t] = ""),
            this._queueCallback(
              () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(Or),
                  this._element.classList.add(jr),
                  Ce.trigger(this._element, Er);
              },
              this._element,
              !0
            );
        }
        _isShown(t = this._element) {
          return t.classList.contains(Tr);
        }
        _configAfterMerge(t) {
          return (t.toggle = Boolean(t.toggle)), (t.parent = Jt(t.parent)), t;
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal")
            ? "width"
            : "height";
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          const t = this._getFirstLevelChildren(Sr);
          for (const e of t) {
            const t = Qt(e);
            t && this._addAriaAndCollapsedClass([e], this._isShown(t));
          }
        }
        _getFirstLevelChildren(t) {
          const e = Fe.find(Lr, this._config.parent);
          return Fe.find(t, this._config.parent).filter((t) => !e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
          if (t.length)
            for (const r of t)
              r.classList.toggle("collapsed", !e),
                r.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
          const e = {};
          return (
            "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each(function () {
              const r = $r.getOrCreateInstance(this, e);
              if ("string" == typeof t) {
                if (void 0 === r[t])
                  throw new TypeError(`No method named "${t}"`);
                r[t]();
              }
            })
          );
        }
      }
      Ce.on(document, Cr, Sr, function (t) {
        ("A" === t.target.tagName ||
          (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
          t.preventDefault();
        const e = Kt(this),
          r = Fe.find(e);
        for (const t of r) $r.getOrCreateInstance(t, { toggle: !1 }).toggle();
      }),
        le($r);
      const Mr = "dropdown",
        Nr = ".bs.dropdown",
        Pr = ".data-api",
        Br = "ArrowUp",
        Rr = "ArrowDown",
        Hr = `hide${Nr}`,
        qr = `hidden${Nr}`,
        Fr = `show${Nr}`,
        Wr = `shown${Nr}`,
        Ur = `click${Nr}${Pr}`,
        Xr = `keydown${Nr}${Pr}`,
        Yr = `keyup${Nr}${Pr}`,
        Vr = "show",
        Kr = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Qr = `${Kr}.${Vr}`,
        Gr = ".dropdown-menu",
        Zr = se() ? "top-end" : "top-start",
        Jr = se() ? "top-start" : "top-end",
        to = se() ? "bottom-end" : "bottom-start",
        eo = se() ? "bottom-start" : "bottom-end",
        ro = se() ? "left-start" : "right-start",
        oo = se() ? "right-start" : "left-start",
        io = {
          autoClose: !0,
          boundary: "clippingParents",
          display: "dynamic",
          offset: [0, 2],
          popperConfig: null,
          reference: "toggle",
        },
        ao = {
          autoClose: "(boolean|string)",
          boundary: "(string|element)",
          display: "string",
          offset: "(array|string|function)",
          popperConfig: "(null|object|function)",
          reference: "(string|element|object)",
        };
      class no extends $e {
        constructor(t, e) {
          super(t, e),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu =
              Fe.next(this._element, Gr)[0] ||
              Fe.prev(this._element, Gr)[0] ||
              Fe.findOne(Gr, this._parent)),
            (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
          return io;
        }
        static get DefaultType() {
          return ao;
        }
        static get NAME() {
          return Mr;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (ee(this._element) || this._isShown()) return;
          const t = { relatedTarget: this._element };
          if (!Ce.trigger(this._element, Fr, t).defaultPrevented) {
            if (
              (this._createPopper(),
              "ontouchstart" in document.documentElement &&
                !this._parent.closest(".navbar-nav"))
            )
              for (const t of [].concat(...document.body.children))
                Ce.on(t, "mouseover", oe);
            this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.add(Vr),
              this._element.classList.add(Vr),
              Ce.trigger(this._element, Wr, t);
          }
        }
        hide() {
          if (ee(this._element) || !this._isShown()) return;
          const t = { relatedTarget: this._element };
          this._completeHide(t);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }
        _completeHide(t) {
          if (!Ce.trigger(this._element, Hr, t).defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
              for (const t of [].concat(...document.body.children))
                Ce.off(t, "mouseover", oe);
            this._popper && this._popper.destroy(),
              this._menu.classList.remove(Vr),
              this._element.classList.remove(Vr),
              this._element.setAttribute("aria-expanded", "false"),
              De.removeDataAttribute(this._menu, "popper"),
              Ce.trigger(this._element, qr, t);
          }
        }
        _getConfig(t) {
          if (
            "object" == typeof (t = super._getConfig(t)).reference &&
            !Zt(t.reference) &&
            "function" != typeof t.reference.getBoundingClientRect
          )
            throw new TypeError(
              `${Mr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
            );
          return t;
        }
        _createPopper() {
          if (void 0 === t)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let e = this._element;
          "parent" === this._config.reference
            ? (e = this._parent)
            : Zt(this._config.reference)
            ? (e = Jt(this._config.reference))
            : "object" == typeof this._config.reference &&
              (e = this._config.reference);
          const r = this._getPopperConfig();
          this._popper = Ut(e, this._menu, r);
        }
        _isShown() {
          return this._menu.classList.contains(Vr);
        }
        _getPlacement() {
          const t = this._parent;
          if (t.classList.contains("dropend")) return ro;
          if (t.classList.contains("dropstart")) return oo;
          if (t.classList.contains("dropup-center")) return "top";
          if (t.classList.contains("dropdown-center")) return "bottom";
          const e =
            "end" ===
            getComputedStyle(this._menu)
              .getPropertyValue("--bs-position")
              .trim();
          return t.classList.contains("dropup") ? (e ? Jr : Zr) : e ? eo : to;
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar");
        }
        _getOffset() {
          const { offset: t } = this._config;
          return "string" == typeof t
            ? t.split(",").map((t) => Number.parseInt(t, 10))
            : "function" == typeof t
            ? (e) => t(e, this._element)
            : t;
        }
        _getPopperConfig() {
          const t = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              { name: "offset", options: { offset: this._getOffset() } },
            ],
          };
          return (
            (this._inNavbar || "static" === this._config.display) &&
              (De.setDataAttribute(this._menu, "popper", "static"),
              (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
            {
              ...t,
              ...("function" == typeof this._config.popperConfig
                ? this._config.popperConfig(t)
                : this._config.popperConfig),
            }
          );
        }
        _selectMenuItem({ key: t, target: e }) {
          const r = Fe.find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          ).filter((t) => te(t));
          r.length && pe(r, e, t === Rr, !r.includes(e)).focus();
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = no.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
        static clearMenus(t) {
          if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
          const e = Fe.find(Qr);
          for (const r of e) {
            const e = no.getInstance(r);
            if (!e || !1 === e._config.autoClose) continue;
            const o = t.composedPath(),
              i = o.includes(e._menu);
            if (
              o.includes(e._element) ||
              ("inside" === e._config.autoClose && !i) ||
              ("outside" === e._config.autoClose && i)
            )
              continue;
            if (
              e._menu.contains(t.target) &&
              (("keyup" === t.type && "Tab" === t.key) ||
                /input|select|option|textarea|form/i.test(t.target.tagName))
            )
              continue;
            const a = { relatedTarget: e._element };
            "click" === t.type && (a.clickEvent = t), e._completeHide(a);
          }
        }
        static dataApiKeydownHandler(t) {
          const e = /input|textarea/i.test(t.target.tagName),
            r = "Escape" === t.key,
            o = [Br, Rr].includes(t.key);
          if (!o && !r) return;
          if (e && !r) return;
          t.preventDefault();
          const i = this.matches(Kr)
              ? this
              : Fe.prev(this, Kr)[0] ||
                Fe.next(this, Kr)[0] ||
                Fe.findOne(Kr, t.delegateTarget.parentNode),
            a = no.getOrCreateInstance(i);
          if (o)
            return t.stopPropagation(), a.show(), void a._selectMenuItem(t);
          a._isShown() && (t.stopPropagation(), a.hide(), i.focus());
        }
      }
      Ce.on(document, Xr, Kr, no.dataApiKeydownHandler),
        Ce.on(document, Xr, Gr, no.dataApiKeydownHandler),
        Ce.on(document, Ur, no.clearMenus),
        Ce.on(document, Yr, no.clearMenus),
        Ce.on(document, Ur, Kr, function (t) {
          t.preventDefault(), no.getOrCreateInstance(this).toggle();
        }),
        le(no);
      const so = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        lo = ".sticky-top",
        mo = "padding-right",
        po = "margin-right";
      class co {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const t = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - t);
        }
        hide() {
          const t = this.getWidth();
          this._disableOverFlow(),
            this._setElementAttributes(this._element, mo, (e) => e + t),
            this._setElementAttributes(so, mo, (e) => e + t),
            this._setElementAttributes(lo, po, (e) => e - t);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, mo),
            this._resetElementAttributes(so, mo),
            this._resetElementAttributes(lo, po);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"),
            (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, r) {
          const o = this.getWidth();
          this._applyManipulationCallback(t, (t) => {
            if (t !== this._element && window.innerWidth > t.clientWidth + o)
              return;
            this._saveInitialAttribute(t, e);
            const i = window.getComputedStyle(t).getPropertyValue(e);
            t.style.setProperty(e, `${r(Number.parseFloat(i))}px`);
          });
        }
        _saveInitialAttribute(t, e) {
          const r = t.style.getPropertyValue(e);
          r && De.setDataAttribute(t, e, r);
        }
        _resetElementAttributes(t, e) {
          this._applyManipulationCallback(t, (t) => {
            const r = De.getDataAttribute(t, e);
            null !== r
              ? (De.removeDataAttribute(t, e), t.style.setProperty(e, r))
              : t.style.removeProperty(e);
          });
        }
        _applyManipulationCallback(t, e) {
          if (Zt(t)) e(t);
          else for (const r of Fe.find(t, this._element)) e(r);
        }
      }
      const bo = "backdrop",
        go = "show",
        fo = `mousedown.bs.${bo}`,
        ho = {
          className: "modal-backdrop",
          clickCallback: null,
          isAnimated: !1,
          isVisible: !0,
          rootElement: "body",
        },
        uo = {
          className: "string",
          clickCallback: "(function|null)",
          isAnimated: "boolean",
          isVisible: "boolean",
          rootElement: "(element|string)",
        };
      class vo extends Ie {
        constructor(t) {
          super(),
            (this._config = this._getConfig(t)),
            (this._isAppended = !1),
            (this._element = null);
        }
        static get Default() {
          return ho;
        }
        static get DefaultType() {
          return uo;
        }
        static get NAME() {
          return bo;
        }
        show(t) {
          if (!this._config.isVisible) return void de(t);
          this._append();
          const e = this._getElement();
          this._config.isAnimated && ie(e),
            e.classList.add(go),
            this._emulateAnimation(() => {
              de(t);
            });
        }
        hide(t) {
          this._config.isVisible
            ? (this._getElement().classList.remove(go),
              this._emulateAnimation(() => {
                this.dispose(), de(t);
              }))
            : de(t);
        }
        dispose() {
          this._isAppended &&
            (Ce.off(this._element, fo),
            this._element.remove(),
            (this._isAppended = !1));
        }
        _getElement() {
          if (!this._element) {
            const t = document.createElement("div");
            (t.className = this._config.className),
              this._config.isAnimated && t.classList.add("fade"),
              (this._element = t);
          }
          return this._element;
        }
        _configAfterMerge(t) {
          return (t.rootElement = Jt(t.rootElement)), t;
        }
        _append() {
          if (this._isAppended) return;
          const t = this._getElement();
          this._config.rootElement.append(t),
            Ce.on(t, fo, () => {
              de(this._config.clickCallback);
            }),
            (this._isAppended = !0);
        }
        _emulateAnimation(t) {
          me(t, this._getElement(), this._config.isAnimated);
        }
      }
      const xo = ".bs.focustrap",
        wo = `focusin${xo}`,
        yo = `keydown.tab${xo}`,
        ko = "backward",
        _o = { autofocus: !0, trapElement: null },
        zo = { autofocus: "boolean", trapElement: "element" };
      class Ao extends Ie {
        constructor(t) {
          super(),
            (this._config = this._getConfig(t)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null);
        }
        static get Default() {
          return _o;
        }
        static get DefaultType() {
          return zo;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
            Ce.off(document, xo),
            Ce.on(document, wo, (t) => this._handleFocusin(t)),
            Ce.on(document, yo, (t) => this._handleKeydown(t)),
            (this._isActive = !0));
        }
        deactivate() {
          this._isActive && ((this._isActive = !1), Ce.off(document, xo));
        }
        _handleFocusin(t) {
          const { trapElement: e } = this._config;
          if (t.target === document || t.target === e || e.contains(t.target))
            return;
          const r = Fe.focusableChildren(e);
          0 === r.length
            ? e.focus()
            : this._lastTabNavDirection === ko
            ? r[r.length - 1].focus()
            : r[0].focus();
        }
        _handleKeydown(t) {
          "Tab" === t.key &&
            (this._lastTabNavDirection = t.shiftKey ? ko : "forward");
        }
      }
      const Eo = ".bs.modal",
        Co = `hide${Eo}`,
        To = `hidePrevented${Eo}`,
        jo = `hidden${Eo}`,
        Oo = `show${Eo}`,
        Lo = `shown${Eo}`,
        So = `resize${Eo}`,
        Do = `click.dismiss${Eo}`,
        Io = `mousedown.dismiss${Eo}`,
        $o = `keydown.dismiss${Eo}`,
        Mo = `click${Eo}.data-api`,
        No = "modal-open",
        Po = "show",
        Bo = "modal-static",
        Ro = { backdrop: !0, focus: !0, keyboard: !0 },
        Ho = {
          backdrop: "(boolean|string)",
          focus: "boolean",
          keyboard: "boolean",
        };
      class qo extends $e {
        constructor(t, e) {
          super(t, e),
            (this._dialog = Fe.findOne(".modal-dialog", this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new co()),
            this._addEventListeners();
        }
        static get Default() {
          return Ro;
        }
        static get DefaultType() {
          return Ho;
        }
        static get NAME() {
          return "modal";
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
          this._isShown ||
            this._isTransitioning ||
            Ce.trigger(this._element, Oo, { relatedTarget: t })
              .defaultPrevented ||
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(No),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
          this._isShown &&
            !this._isTransitioning &&
            (Ce.trigger(this._element, Co).defaultPrevented ||
              ((this._isShown = !1),
              (this._isTransitioning = !0),
              this._focustrap.deactivate(),
              this._element.classList.remove(Po),
              this._queueCallback(
                () => this._hideModal(),
                this._element,
                this._isAnimated()
              )));
        }
        dispose() {
          for (const t of [window, this._dialog]) Ce.off(t, Eo);
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new vo({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          });
        }
        _initializeFocusTrap() {
          return new Ao({ trapElement: this._element });
        }
        _showElement(t) {
          document.body.contains(this._element) ||
            document.body.append(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0);
          const e = Fe.findOne(".modal-body", this._dialog);
          e && (e.scrollTop = 0),
            ie(this._element),
            this._element.classList.add(Po),
            this._queueCallback(
              () => {
                this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  Ce.trigger(this._element, Lo, { relatedTarget: t });
              },
              this._dialog,
              this._isAnimated()
            );
        }
        _addEventListeners() {
          Ce.on(this._element, $o, (t) => {
            if ("Escape" === t.key)
              return this._config.keyboard
                ? (t.preventDefault(), void this.hide())
                : void this._triggerBackdropTransition();
          }),
            Ce.on(window, So, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }),
            Ce.on(this._element, Io, (t) => {
              Ce.one(this._element, Do, (e) => {
                this._element === t.target &&
                  this._element === e.target &&
                  ("static" !== this._config.backdrop
                    ? this._config.backdrop && this.hide()
                    : this._triggerBackdropTransition());
              });
            });
        }
        _hideModal() {
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              document.body.classList.remove(No),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                Ce.trigger(this._element, jo);
            });
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (Ce.trigger(this._element, To).defaultPrevented) return;
          const t =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            e = this._element.style.overflowY;
          "hidden" === e ||
            this._element.classList.contains(Bo) ||
            (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(Bo),
            this._queueCallback(() => {
              this._element.classList.remove(Bo),
                this._queueCallback(() => {
                  this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog),
            this._element.focus());
        }
        _adjustDialog() {
          const t =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            r = e > 0;
          if (r && !t) {
            const t = se() ? "paddingLeft" : "paddingRight";
            this._element.style[t] = `${e}px`;
          }
          if (!r && t) {
            const t = se() ? "paddingRight" : "paddingLeft";
            this._element.style[t] = `${e}px`;
          }
        }
        _resetAdjustments() {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
          return this.each(function () {
            const r = qo.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === r[t])
                throw new TypeError(`No method named "${t}"`);
              r[t](e);
            }
          });
        }
      }
      Ce.on(document, Mo, '[data-bs-toggle="modal"]', function (t) {
        const e = Qt(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
          Ce.one(e, Oo, (t) => {
            t.defaultPrevented ||
              Ce.one(e, jo, () => {
                te(this) && this.focus();
              });
          });
        const r = Fe.findOne(".modal.show");
        r && qo.getInstance(r).hide(), qo.getOrCreateInstance(e).toggle(this);
      }),
        Me(qo),
        le(qo);
      const Fo = ".bs.offcanvas",
        Wo = ".data-api",
        Uo = `load${Fo}${Wo}`,
        Xo = "show",
        Yo = "showing",
        Vo = "hiding",
        Ko = ".offcanvas.show",
        Qo = `show${Fo}`,
        Go = `shown${Fo}`,
        Zo = `hide${Fo}`,
        Jo = `hidePrevented${Fo}`,
        ti = `hidden${Fo}`,
        ei = `resize${Fo}`,
        ri = `click${Fo}${Wo}`,
        oi = `keydown.dismiss${Fo}`,
        ii = { backdrop: !0, keyboard: !0, scroll: !1 },
        ai = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          scroll: "boolean",
        };
      class ni extends $e {
        constructor(t, e) {
          super(t, e),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners();
        }
        static get Default() {
          return ii;
        }
        static get DefaultType() {
          return ai;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
          this._isShown ||
            Ce.trigger(this._element, Qo, { relatedTarget: t })
              .defaultPrevented ||
            ((this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new co().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Yo),
            this._queueCallback(
              () => {
                (this._config.scroll && !this._config.backdrop) ||
                  this._focustrap.activate(),
                  this._element.classList.add(Xo),
                  this._element.classList.remove(Yo),
                  Ce.trigger(this._element, Go, { relatedTarget: t });
              },
              this._element,
              !0
            ));
        }
        hide() {
          this._isShown &&
            (Ce.trigger(this._element, Zo).defaultPrevented ||
              (this._focustrap.deactivate(),
              this._element.blur(),
              (this._isShown = !1),
              this._element.classList.add(Vo),
              this._backdrop.hide(),
              this._queueCallback(
                () => {
                  this._element.classList.remove(Xo, Vo),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    this._config.scroll || new co().reset(),
                    Ce.trigger(this._element, ti);
                },
                this._element,
                !0
              )));
        }
        dispose() {
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }
        _initializeBackDrop() {
          const t = Boolean(this._config.backdrop);
          return new vo({
            className: "offcanvas-backdrop",
            isVisible: t,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: t
              ? () => {
                  "static" !== this._config.backdrop
                    ? this.hide()
                    : Ce.trigger(this._element, Jo);
                }
              : null,
          });
        }
        _initializeFocusTrap() {
          return new Ao({ trapElement: this._element });
        }
        _addEventListeners() {
          Ce.on(this._element, oi, (t) => {
            "Escape" === t.key &&
              (this._config.keyboard
                ? this.hide()
                : Ce.trigger(this._element, Jo));
          });
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = ni.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      Ce.on(document, ri, '[data-bs-toggle="offcanvas"]', function (t) {
        const e = Qt(this);
        if (
          (["A", "AREA"].includes(this.tagName) && t.preventDefault(), ee(this))
        )
          return;
        Ce.one(e, ti, () => {
          te(this) && this.focus();
        });
        const r = Fe.findOne(Ko);
        r && r !== e && ni.getInstance(r).hide(),
          ni.getOrCreateInstance(e).toggle(this);
      }),
        Ce.on(window, Uo, () => {
          for (const t of Fe.find(Ko)) ni.getOrCreateInstance(t).show();
        }),
        Ce.on(window, ei, () => {
          for (const t of Fe.find(
            "[aria-modal][class*=show][class*=offcanvas-]"
          ))
            "fixed" !== getComputedStyle(t).position &&
              ni.getOrCreateInstance(t).hide();
        }),
        Me(ni),
        le(ni);
      const si = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ]),
        li = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        di =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        mi = (t, e) => {
          const r = t.nodeName.toLowerCase();
          return e.includes(r)
            ? !si.has(r) ||
                Boolean(li.test(t.nodeValue) || di.test(t.nodeValue))
            : e.filter((t) => t instanceof RegExp).some((t) => t.test(r));
        },
        pi = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        ci = {
          allowList: pi,
          content: {},
          extraClass: "",
          html: !1,
          sanitize: !0,
          sanitizeFn: null,
          template: "<div></div>",
        },
        bi = {
          allowList: "object",
          content: "object",
          extraClass: "(string|function)",
          html: "boolean",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          template: "string",
        },
        gi = {
          entry: "(string|element|function|null)",
          selector: "(string|element)",
        };
      class fi extends Ie {
        constructor(t) {
          super(), (this._config = this._getConfig(t));
        }
        static get Default() {
          return ci;
        }
        static get DefaultType() {
          return bi;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content)
            .map((t) => this._resolvePossibleFunction(t))
            .filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(t) {
          return (
            this._checkContent(t),
            (this._config.content = { ...this._config.content, ...t }),
            this
          );
        }
        toHtml() {
          const t = document.createElement("div");
          t.innerHTML = this._maybeSanitize(this._config.template);
          for (const [e, r] of Object.entries(this._config.content))
            this._setContent(t, r, e);
          const e = t.children[0],
            r = this._resolvePossibleFunction(this._config.extraClass);
          return r && e.classList.add(...r.split(" ")), e;
        }
        _typeCheckConfig(t) {
          super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
          for (const [e, r] of Object.entries(t))
            super._typeCheckConfig({ selector: e, entry: r }, gi);
        }
        _setContent(t, e, r) {
          const o = Fe.findOne(r, t);
          o &&
            ((e = this._resolvePossibleFunction(e))
              ? Zt(e)
                ? this._putElementInTemplate(Jt(e), o)
                : this._config.html
                ? (o.innerHTML = this._maybeSanitize(e))
                : (o.textContent = e)
              : o.remove());
        }
        _maybeSanitize(t) {
          return this._config.sanitize
            ? (function (t, e, r) {
                if (!t.length) return t;
                if (r && "function" == typeof r) return r(t);
                const o = new window.DOMParser().parseFromString(
                    t,
                    "text/html"
                  ),
                  i = [].concat(...o.body.querySelectorAll("*"));
                for (const t of i) {
                  const r = t.nodeName.toLowerCase();
                  if (!Object.keys(e).includes(r)) {
                    t.remove();
                    continue;
                  }
                  const o = [].concat(...t.attributes),
                    i = [].concat(e["*"] || [], e[r] || []);
                  for (const e of o) mi(e, i) || t.removeAttribute(e.nodeName);
                }
                return o.body.innerHTML;
              })(t, this._config.allowList, this._config.sanitizeFn)
            : t;
        }
        _resolvePossibleFunction(t) {
          return "function" == typeof t ? t(this) : t;
        }
        _putElementInTemplate(t, e) {
          if (this._config.html) return (e.innerHTML = ""), void e.append(t);
          e.textContent = t.textContent;
        }
      }
      const hi = new Set(["sanitize", "allowList", "sanitizeFn"]),
        ui = "fade",
        vi = "show",
        xi = ".modal",
        wi = "hide.bs.modal",
        yi = "hover",
        ki = "focus",
        _i = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: se() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: se() ? "right" : "left",
        },
        zi = {
          allowList: pi,
          animation: !0,
          boundary: "clippingParents",
          container: !1,
          customClass: "",
          delay: 0,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          html: !1,
          offset: [0, 0],
          placement: "top",
          popperConfig: null,
          sanitize: !0,
          sanitizeFn: null,
          selector: !1,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          title: "",
          trigger: "hover focus",
        },
        Ai = {
          allowList: "object",
          animation: "boolean",
          boundary: "(string|element)",
          container: "(string|element|boolean)",
          customClass: "(string|function)",
          delay: "(number|object)",
          fallbackPlacements: "array",
          html: "boolean",
          offset: "(array|string|function)",
          placement: "(string|function)",
          popperConfig: "(null|object|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          selector: "(string|boolean)",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
        };
      class Ei extends $e {
        constructor(e, r) {
          if (void 0 === t)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          super(e, r),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = null),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners(),
            this._config.selector || this._fixTitle();
        }
        static get Default() {
          return zi;
        }
        static get DefaultType() {
          return Ai;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled &&
            ((this._activeTrigger.click = !this._activeTrigger.click),
            this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          clearTimeout(this._timeout),
            Ce.off(this._element.closest(xi), wi, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") &&
              this._element.setAttribute(
                "title",
                this._element.getAttribute("data-bs-original-title")
              ),
            this._disposePopper(),
            super.dispose();
        }
        show() {
          if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const t = Ce.trigger(
              this._element,
              this.constructor.eventName("show")
            ),
            e = (
              re(this._element) || this._element.ownerDocument.documentElement
            ).contains(this._element);
          if (t.defaultPrevented || !e) return;
          this._disposePopper();
          const r = this._getTipElement();
          this._element.setAttribute("aria-describedby", r.getAttribute("id"));
          const { container: o } = this._config;
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (o.append(r),
              Ce.trigger(
                this._element,
                this.constructor.eventName("inserted")
              )),
            (this._popper = this._createPopper(r)),
            r.classList.add(vi),
            "ontouchstart" in document.documentElement)
          )
            for (const t of [].concat(...document.body.children))
              Ce.on(t, "mouseover", oe);
          this._queueCallback(
            () => {
              Ce.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                (this._isHovered = !1);
            },
            this.tip,
            this._isAnimated()
          );
        }
        hide() {
          if (
            this._isShown() &&
            !Ce.trigger(this._element, this.constructor.eventName("hide"))
              .defaultPrevented
          ) {
            if (
              (this._getTipElement().classList.remove(vi),
              "ontouchstart" in document.documentElement)
            )
              for (const t of [].concat(...document.body.children))
                Ce.off(t, "mouseover", oe);
            (this._activeTrigger.click = !1),
              (this._activeTrigger[ki] = !1),
              (this._activeTrigger[yi] = !1),
              (this._isHovered = null),
              this._queueCallback(
                () => {
                  this._isWithActiveTrigger() ||
                    (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute("aria-describedby"),
                    Ce.trigger(
                      this._element,
                      this.constructor.eventName("hidden")
                    ));
                },
                this.tip,
                this._isAnimated()
              );
          }
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          return (
            this.tip ||
              (this.tip = this._createTipElement(
                this._newContent || this._getContentForTemplate()
              )),
            this.tip
          );
        }
        _createTipElement(t) {
          const e = this._getTemplateFactory(t).toHtml();
          if (!e) return null;
          e.classList.remove(ui, vi),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
          const r = ((t) => {
            do {
              t += Math.floor(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          })(this.constructor.NAME).toString();
          return (
            e.setAttribute("id", r),
            this._isAnimated() && e.classList.add(ui),
            e
          );
        }
        setContent(t) {
          (this._newContent = t),
            this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
          return (
            this._templateFactory
              ? this._templateFactory.changeContent(t)
              : (this._templateFactory = new fi({
                  ...this._config,
                  content: t,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass
                  ),
                })),
            this._templateFactory
          );
        }
        _getContentForTemplate() {
          return { ".tooltip-inner": this._getTitle() };
        }
        _getTitle() {
          return (
            this._resolvePossibleFunction(this._config.title) ||
            this._element.getAttribute("data-bs-original-title")
          );
        }
        _initializeOnDelegatedTarget(t) {
          return this.constructor.getOrCreateInstance(
            t.delegateTarget,
            this._getDelegateConfig()
          );
        }
        _isAnimated() {
          return (
            this._config.animation ||
            (this.tip && this.tip.classList.contains(ui))
          );
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(vi);
        }
        _createPopper(t) {
          const e =
              "function" == typeof this._config.placement
                ? this._config.placement.call(this, t, this._element)
                : this._config.placement,
            r = _i[e.toUpperCase()];
          return Ut(this._element, t, this._getPopperConfig(r));
        }
        _getOffset() {
          const { offset: t } = this._config;
          return "string" == typeof t
            ? t.split(",").map((t) => Number.parseInt(t, 10))
            : "function" == typeof t
            ? (e) => t(e, this._element)
            : t;
        }
        _resolvePossibleFunction(t) {
          return "function" == typeof t ? t.call(this._element) : t;
        }
        _getPopperConfig(t) {
          const e = {
            placement: t,
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements,
                },
              },
              { name: "offset", options: { offset: this._getOffset() } },
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              {
                name: "arrow",
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: (t) => {
                  this._getTipElement().setAttribute(
                    "data-popper-placement",
                    t.state.placement
                  );
                },
              },
            ],
          };
          return {
            ...e,
            ...("function" == typeof this._config.popperConfig
              ? this._config.popperConfig(e)
              : this._config.popperConfig),
          };
        }
        _setListeners() {
          const t = this._config.trigger.split(" ");
          for (const e of t)
            if ("click" === e)
              Ce.on(
                this._element,
                this.constructor.eventName("click"),
                this._config.selector,
                (t) => {
                  this._initializeOnDelegatedTarget(t).toggle();
                }
              );
            else if ("manual" !== e) {
              const t =
                  e === yi
                    ? this.constructor.eventName("mouseenter")
                    : this.constructor.eventName("focusin"),
                r =
                  e === yi
                    ? this.constructor.eventName("mouseleave")
                    : this.constructor.eventName("focusout");
              Ce.on(this._element, t, this._config.selector, (t) => {
                const e = this._initializeOnDelegatedTarget(t);
                (e._activeTrigger["focusin" === t.type ? ki : yi] = !0),
                  e._enter();
              }),
                Ce.on(this._element, r, this._config.selector, (t) => {
                  const e = this._initializeOnDelegatedTarget(t);
                  (e._activeTrigger["focusout" === t.type ? ki : yi] =
                    e._element.contains(t.relatedTarget)),
                    e._leave();
                });
            }
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
            Ce.on(this._element.closest(xi), wi, this._hideModalHandler);
        }
        _fixTitle() {
          const t = this._element.getAttribute("title");
          t &&
            (this._element.getAttribute("aria-label") ||
              this._element.textContent.trim() ||
              this._element.setAttribute("aria-label", t),
            this._element.setAttribute("data-bs-original-title", t),
            this._element.removeAttribute("title"));
        }
        _enter() {
          this._isShown() || this._isHovered
            ? (this._isHovered = !0)
            : ((this._isHovered = !0),
              this._setTimeout(() => {
                this._isHovered && this.show();
              }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
          clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
          const e = De.getDataAttributes(this._element);
          for (const t of Object.keys(e)) hi.has(t) && delete e[t];
          return (
            (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }
        _configAfterMerge(t) {
          return (
            (t.container =
              !1 === t.container ? document.body : Jt(t.container)),
            "number" == typeof t.delay &&
              (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
          );
        }
        _getDelegateConfig() {
          const t = {};
          for (const e in this._config)
            this.constructor.Default[e] !== this._config[e] &&
              (t[e] = this._config[e]);
          return (t.selector = !1), (t.trigger = "manual"), t;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), (this._popper = null)),
            this.tip && (this.tip.remove(), (this.tip = null));
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Ei.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      le(Ei);
      const Ci = {
          ...Ei.Default,
          content: "",
          offset: [0, 8],
          placement: "right",
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          trigger: "click",
        },
        Ti = { ...Ei.DefaultType, content: "(null|string|element|function)" };
      class ji extends Ei {
        static get Default() {
          return Ci;
        }
        static get DefaultType() {
          return Ti;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return {
            ".popover-header": this._getTitle(),
            ".popover-body": this._getContent(),
          };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = ji.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      le(ji);
      const Oi = ".bs.scrollspy",
        Li = `activate${Oi}`,
        Si = `click${Oi}`,
        Di = `load${Oi}.data-api`,
        Ii = "active",
        $i = "[href]",
        Mi = ".nav-link",
        Ni = `${Mi}, .nav-item > ${Mi}, .list-group-item`,
        Pi = {
          offset: null,
          rootMargin: "0px 0px -25%",
          smoothScroll: !1,
          target: null,
          threshold: [0.1, 0.5, 1],
        },
        Bi = {
          offset: "(number|null)",
          rootMargin: "string",
          smoothScroll: "boolean",
          target: "element",
          threshold: "array",
        };
      class Ri extends $e {
        constructor(t, e) {
          super(t, e),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
              "visible" === getComputedStyle(this._element).overflowY
                ? null
                : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0,
            }),
            this.refresh();
        }
        static get Default() {
          return Pi;
        }
        static get DefaultType() {
          return Bi;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
              ? this._observer.disconnect()
              : (this._observer = this._getNewObserver());
          for (const t of this._observableSections.values())
            this._observer.observe(t);
        }
        dispose() {
          this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
          return (
            (t.target = Jt(t.target) || document.body),
            (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
            "string" == typeof t.threshold &&
              (t.threshold = t.threshold
                .split(",")
                .map((t) => Number.parseFloat(t))),
            t
          );
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll &&
            (Ce.off(this._config.target, Si),
            Ce.on(this._config.target, Si, $i, (t) => {
              const e = this._observableSections.get(t.target.hash);
              if (e) {
                t.preventDefault();
                const r = this._rootElement || window,
                  o = e.offsetTop - this._element.offsetTop;
                if (r.scrollTo)
                  return void r.scrollTo({ top: o, behavior: "smooth" });
                r.scrollTop = o;
              }
            }));
        }
        _getNewObserver() {
          const t = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin,
          };
          return new IntersectionObserver((t) => this._observerCallback(t), t);
        }
        _observerCallback(t) {
          const e = (t) => this._targetLinks.get(`#${t.target.id}`),
            r = (t) => {
              (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
                this._process(e(t));
            },
            o = (this._rootElement || document.documentElement).scrollTop,
            i = o >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = o;
          for (const a of t) {
            if (!a.isIntersecting) {
              (this._activeTarget = null), this._clearActiveClass(e(a));
              continue;
            }
            const t =
              a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (i && t) {
              if ((r(a), !o)) return;
            } else i || t || r(a);
          }
        }
        _initializeTargetsAndObservables() {
          (this._targetLinks = new Map()),
            (this._observableSections = new Map());
          const t = Fe.find($i, this._config.target);
          for (const e of t) {
            if (!e.hash || ee(e)) continue;
            const t = Fe.findOne(e.hash, this._element);
            te(t) &&
              (this._targetLinks.set(e.hash, e),
              this._observableSections.set(e.hash, t));
          }
        }
        _process(t) {
          this._activeTarget !== t &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = t),
            t.classList.add(Ii),
            this._activateParents(t),
            Ce.trigger(this._element, Li, { relatedTarget: t }));
        }
        _activateParents(t) {
          if (t.classList.contains("dropdown-item"))
            Fe.findOne(
              ".dropdown-toggle",
              t.closest(".dropdown")
            ).classList.add(Ii);
          else
            for (const e of Fe.parents(t, ".nav, .list-group"))
              for (const t of Fe.prev(e, Ni)) t.classList.add(Ii);
        }
        _clearActiveClass(t) {
          t.classList.remove(Ii);
          const e = Fe.find(`${$i}.${Ii}`, t);
          for (const t of e) t.classList.remove(Ii);
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Ri.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      Ce.on(window, Di, () => {
        for (const t of Fe.find('[data-bs-spy="scroll"]'))
          Ri.getOrCreateInstance(t);
      }),
        le(Ri);
      const Hi = ".bs.tab",
        qi = `hide${Hi}`,
        Fi = `hidden${Hi}`,
        Wi = `show${Hi}`,
        Ui = `shown${Hi}`,
        Xi = `click${Hi}`,
        Yi = `keydown${Hi}`,
        Vi = `load${Hi}`,
        Ki = "ArrowLeft",
        Qi = "ArrowRight",
        Gi = "ArrowUp",
        Zi = "ArrowDown",
        Ji = "active",
        ta = "fade",
        ea = "show",
        ra = ":not(.dropdown-toggle)",
        oa =
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        ia = `.nav-link${ra}, .list-group-item${ra}, [role="tab"]${ra}, ${oa}`,
        aa = `.${Ji}[data-bs-toggle="tab"], .${Ji}[data-bs-toggle="pill"], .${Ji}[data-bs-toggle="list"]`;
      class na extends $e {
        constructor(t) {
          super(t),
            (this._parent = this._element.closest(
              '.list-group, .nav, [role="tablist"]'
            )),
            this._parent &&
              (this._setInitialAttributes(this._parent, this._getChildren()),
              Ce.on(this._element, Yi, (t) => this._keydown(t)));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const t = this._element;
          if (this._elemIsActive(t)) return;
          const e = this._getActiveElem(),
            r = e ? Ce.trigger(e, qi, { relatedTarget: t }) : null;
          Ce.trigger(t, Wi, { relatedTarget: e }).defaultPrevented ||
            (r && r.defaultPrevented) ||
            (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
          t &&
            (t.classList.add(Ji),
            this._activate(Qt(t)),
            this._queueCallback(
              () => {
                "tab" === t.getAttribute("role")
                  ? (t.removeAttribute("tabindex"),
                    t.setAttribute("aria-selected", !0),
                    this._toggleDropDown(t, !0),
                    Ce.trigger(t, Ui, { relatedTarget: e }))
                  : t.classList.add(ea);
              },
              t,
              t.classList.contains(ta)
            ));
        }
        _deactivate(t, e) {
          t &&
            (t.classList.remove(Ji),
            t.blur(),
            this._deactivate(Qt(t)),
            this._queueCallback(
              () => {
                "tab" === t.getAttribute("role")
                  ? (t.setAttribute("aria-selected", !1),
                    t.setAttribute("tabindex", "-1"),
                    this._toggleDropDown(t, !1),
                    Ce.trigger(t, Fi, { relatedTarget: e }))
                  : t.classList.remove(ea);
              },
              t,
              t.classList.contains(ta)
            ));
        }
        _keydown(t) {
          if (![Ki, Qi, Gi, Zi].includes(t.key)) return;
          t.stopPropagation(), t.preventDefault();
          const e = [Qi, Zi].includes(t.key),
            r = pe(
              this._getChildren().filter((t) => !ee(t)),
              t.target,
              e,
              !0
            );
          r &&
            (r.focus({ preventScroll: !0 }), na.getOrCreateInstance(r).show());
        }
        _getChildren() {
          return Fe.find(ia, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((t) => this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
          this._setAttributeIfNotExists(t, "role", "tablist");
          for (const t of e) this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
          t = this._getInnerElement(t);
          const e = this._elemIsActive(t),
            r = this._getOuterElement(t);
          t.setAttribute("aria-selected", e),
            r !== t && this._setAttributeIfNotExists(r, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
          const e = Qt(t);
          e &&
            (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id &&
              this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
        }
        _toggleDropDown(t, e) {
          const r = this._getOuterElement(t);
          if (!r.classList.contains("dropdown")) return;
          const o = (t, o) => {
            const i = Fe.findOne(t, r);
            i && i.classList.toggle(o, e);
          };
          o(".dropdown-toggle", Ji),
            o(".dropdown-menu", ea),
            r.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, r) {
          t.hasAttribute(e) || t.setAttribute(e, r);
        }
        _elemIsActive(t) {
          return t.classList.contains(Ji);
        }
        _getInnerElement(t) {
          return t.matches(ia) ? t : Fe.findOne(ia, t);
        }
        _getOuterElement(t) {
          return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = na.getOrCreateInstance(this);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      Ce.on(document, Xi, oa, function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
          ee(this) || na.getOrCreateInstance(this).show();
      }),
        Ce.on(window, Vi, () => {
          for (const t of Fe.find(aa)) na.getOrCreateInstance(t);
        }),
        le(na);
      const sa = ".bs.toast",
        la = `mouseover${sa}`,
        da = `mouseout${sa}`,
        ma = `focusin${sa}`,
        pa = `focusout${sa}`,
        ca = `hide${sa}`,
        ba = `hidden${sa}`,
        ga = `show${sa}`,
        fa = `shown${sa}`,
        ha = "hide",
        ua = "show",
        va = "showing",
        xa = { animation: "boolean", autohide: "boolean", delay: "number" },
        wa = { animation: !0, autohide: !0, delay: 5e3 };
      class ya extends $e {
        constructor(t, e) {
          super(t, e),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners();
        }
        static get Default() {
          return wa;
        }
        static get DefaultType() {
          return xa;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          Ce.trigger(this._element, ga).defaultPrevented ||
            (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(ha),
            ie(this._element),
            this._element.classList.add(ua, va),
            this._queueCallback(
              () => {
                this._element.classList.remove(va),
                  Ce.trigger(this._element, fa),
                  this._maybeScheduleHide();
              },
              this._element,
              this._config.animation
            ));
        }
        hide() {
          this.isShown() &&
            (Ce.trigger(this._element, ca).defaultPrevented ||
              (this._element.classList.add(va),
              this._queueCallback(
                () => {
                  this._element.classList.add(ha),
                    this._element.classList.remove(va, ua),
                    Ce.trigger(this._element, ba);
                },
                this._element,
                this._config.animation
              )));
        }
        dispose() {
          this._clearTimeout(),
            this.isShown() && this._element.classList.remove(ua),
            super.dispose();
        }
        isShown() {
          return this._element.classList.contains(ua);
        }
        _maybeScheduleHide() {
          this._config.autohide &&
            (this._hasMouseInteraction ||
              this._hasKeyboardInteraction ||
              (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay)));
        }
        _onInteraction(t, e) {
          switch (t.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = e;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = e;
          }
          if (e) return void this._clearTimeout();
          const r = t.relatedTarget;
          this._element === r ||
            this._element.contains(r) ||
            this._maybeScheduleHide();
        }
        _setListeners() {
          Ce.on(this._element, la, (t) => this._onInteraction(t, !0)),
            Ce.on(this._element, da, (t) => this._onInteraction(t, !1)),
            Ce.on(this._element, ma, (t) => this._onInteraction(t, !0)),
            Ce.on(this._element, pa, (t) => this._onInteraction(t, !1));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = ya.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      Me(ya), le(ya);
      const ka = new (class {
          constructor() {
            this.error = document.querySelector("#error");
          }
          tampilkanErrorPenjumlahan = (t, r) => {
            const o = t.reduce(
              (t, o, i) => (e(r[i]) ? t + "" : t + `${o} itu bukan angka! `),
              "Silahkan masukkan angka yang benar: "
            );
            this.error.classList.remove("d-none"), (this.error.innerText = o);
          };
          sembunyikanError = () => this.error.classList.add("d-none");
        })(),
        _a = new (class {
          constructor() {
            (this.operand1 = document.querySelector("#operand1")),
              (this.operand2 = document.querySelector("#operand2")),
              (this.tombolTambah = document.querySelector("#tombol-tambah")),
              (this.hasil = document.querySelector("#hasil"));
          }
          getInput() {
            return [this.operand1.value, this.operand2.value];
          }
          setResult(t, e) {
            this.hasil.innerText = t + e;
          }
          onClick(t) {
            this.tombolTambah.addEventListener("click", t);
          }
        })(),
        za = new (class {
          constructor() {
            (this.tombolJokes = document.querySelector("#jokes-receh")),
              (this.modalBody = document.querySelector(".modal-body"));
          }
          setModal(t) {
            this.modalBody.innerHTML = t;
          }
          onClick(t) {
            this.tombolJokes.addEventListener("click", t);
          }
        })();
      alert("Hallo Ivan❤️"),
        ((t, r, o) => {
          t.sembunyikanError(),
            r.onClick(() => {
              t.sembunyikanError();
              const o = r.getInput(),
                i = ((...t) => t.map((t) => parseInt(t)))(...o);
              if (e(...i)) {
                const [t, e] = i;
                r.setResult(t, e);
              } else r.setResult(""), t.tampilkanErrorPenjumlahan(o, i);
            }),
            o.onClick(() => {
              fetch("https://candaan-api.vercel.app/api/text/random")
                .then((t) => t.json())
                .then((t) => {
                  o.setModal(t.data);
                });
            });
        })(ka, _a, za);
    })();
})();
