webpackJsonp([11],{104:function(n,e,t){"use strict";t.d(e,"a",function(){return h});var l,i,o=t(6),r=t(0),a=(t.n(r),t(7)),c=t(18),m=a.b.nav(l||(l=o.e(["\n    width: 100%;\n    display: flex;\n    font-size: 12px;\n    padding-left: calc(20px + 40px);\n    padding-right: calc(20px + 40px);\n    height: 50px;\n    border-top: 1px solid #eee;\n    border-bottom: 1px solid #eee;\n    align-items: center;\n\n    justify-content: space-between;\n\n    & > div:nth-child(1) {\n        color: black;\n        display: flex;\n        font-weight: bold;\n\n        & > span {\n            margin: 0 7px 0 7px;\n            font-weight: 100;\n        }\n\n        & > a {\n            text-decoration: none;\n            color: black;\n            font-weight: 100;\n\n            &:hover {\n                border-bottom: 0.2px solid black;\n            }\n        }\n\n        & > div {\n            font-weight: 100;\n        }\n    }\n\n    & > div:nth-child(2) {\n        display: flex;\n        align-items: center;\n        & > div {\n            width: 1px;\n            height: 17px;\n            margin: 0 15px;\n            background-color: black;\n        }\n    }\n"],["\n    width: 100%;\n    display: flex;\n    font-size: 12px;\n    padding-left: calc(20px + 40px);\n    padding-right: calc(20px + 40px);\n    height: 50px;\n    border-top: 1px solid #eee;\n    border-bottom: 1px solid #eee;\n    align-items: center;\n\n    justify-content: space-between;\n\n    & > div:nth-child(1) {\n        color: black;\n        display: flex;\n        font-weight: bold;\n\n        & > span {\n            margin: 0 7px 0 7px;\n            font-weight: 100;\n        }\n\n        & > a {\n            text-decoration: none;\n            color: black;\n            font-weight: 100;\n\n            &:hover {\n                border-bottom: 0.2px solid black;\n            }\n        }\n\n        & > div {\n            font-weight: 100;\n        }\n    }\n\n    & > div:nth-child(2) {\n        display: flex;\n        align-items: center;\n        & > div {\n            width: 1px;\n            height: 17px;\n            margin: 0 15px;\n            background-color: black;\n        }\n    }\n"]))),d=a.b.a(i||(i=o.e(["\n    display: flex;\n    color: black;\n    align-items: center;\n    text-decoration: none;\n\n    & > div {\n        font-size: 14px;\n        font-weight: bold;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 2.07;\n        letter-spacing: normal;\n\n        margin-right: 8px;\n    }\n\n    & > img {\n        width: 19px;\n        height: 19px;\n    }\n"],["\n    display: flex;\n    color: black;\n    align-items: center;\n    text-decoration: none;\n\n    & > div {\n        font-size: 14px;\n        font-weight: bold;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 2.07;\n        letter-spacing: normal;\n\n        margin-right: 8px;\n    }\n\n    & > img {\n        width: 19px;\n        height: 19px;\n    }\n"]))),h=function(n){return r.createElement(d,{href:n.link},r.createElement("div",{onClick:n.onClick},n.children),r.createElement("img",{src:t(105),alt:""}))};e.b=function(n){return r.createElement(m,null,r.createElement("div",null,n.list.map(function(e,t){return t===n.list.length-1?r.createElement("div",null,e.name):r.createElement(r.Fragment,null,r.createElement(c.b,{to:e.link},e.name),r.createElement("span",null,">"))})),r.createElement("div",null,n.children))}},105:function(n,e){n.exports="data:image/png;base64,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"},106:function(n,e,t){"use strict";var l,i,o=t(6),r=t(7),a=Object(r.c)(l||(l=o.e(["\nfrom { width: 0 }\n  to { width: 100% }\n"],["\nfrom { width: 0 }\n  to { width: 100% }\n"]))),c=r.b.div(i||(i=o.e(["\n    position: relative;\n    margin-bottom: 59px;\n    width: 100%;\n    line-height: 0.85;\n    & > img {\n        width: 100%;\n    }\n    & > div.desc {\n        position: absolute;\n        top: 47px;\n        left: 16%;\n        white-space: nowrap;\n        overflow: hidden;\n\n        & > h1 {\n            width: fit-content;\n            font-size: 44px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        & > h2 {\n            width: fit-content;\n            font-size: 24px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        &.typing {\n            & > * {\n                animation-fill-mode: forwards;\n                animation: "," 2s steps(40, end);\n            }\n            & > *:nth-child(2) {\n                animation-delay: 2s;\n            }\n            & > *:nth-child(3) {\n                animation-delay: 4s;\n            }\n        }\n    }\n"],["\n    position: relative;\n    margin-bottom: 59px;\n    width: 100%;\n    line-height: 0.85;\n    & > img {\n        width: 100%;\n    }\n    & > div.desc {\n        position: absolute;\n        top: 47px;\n        left: 16%;\n        white-space: nowrap;\n        overflow: hidden;\n\n        & > h1 {\n            width: fit-content;\n            font-size: 44px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        & > h2 {\n            width: fit-content;\n            font-size: 24px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        &.typing {\n            & > * {\n                animation-fill-mode: forwards;\n                animation: "," 2s steps(40, end);\n            }\n            & > *:nth-child(2) {\n                animation-delay: 2s;\n            }\n            & > *:nth-child(3) {\n                animation-delay: 4s;\n            }\n        }\n    }\n"])),a);e.a=c},139:function(n,e,t){n.exports=t.p+"static/media/culture-banner.b0294521.png"},140:function(n,e,t){n.exports=t.p+"static/media/culture01.de4470f4.png"},89:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l,i,o=t(6),r=t(0),a=(t.n(r),t(104)),c=t(7),m=t(106),d=c.b.div(l||(l=o.e(["\n    width: 100%;\n    padding-bottom: 200px;\n    font-size: 14px;\n"],["\n    width: 100%;\n    padding-bottom: 200px;\n    font-size: 14px;\n"]))),h=c.b.div(i||(i=o.e(["\n    padding: 0 15%;\n    & > div {\n        display: flex;\n        margin-bottom: 60px;\n        & > div:nth-child(1) {\n            width: calc(20% - 45px);\n            margin-right: 45px;\n\n            font-size: 18px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: 1.61;\n            letter-spacing: normal;\n            color: #000000;\n        }\n        & > div:nth-child(2) {\n            width: 80%;\n            & > h1 {\n                margin-bottom: 2px;\n                font-size: 32px;\n                font-weight: bold;\n                font-style: normal;\n                font-stretch: normal;\n                line-height: normal;\n                letter-spacing: normal;\n                color: #000000;\n            }\n\n            & > p {\n                font-size: 14px;\n                font-weight: normal;\n                font-style: normal;\n                font-stretch: normal;\n                line-height: 1.71;\n                letter-spacing: normal;\n            }\n        }\n    }\n"],["\n    padding: 0 15%;\n    & > div {\n        display: flex;\n        margin-bottom: 60px;\n        & > div:nth-child(1) {\n            width: calc(20% - 45px);\n            margin-right: 45px;\n\n            font-size: 18px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: 1.61;\n            letter-spacing: normal;\n            color: #000000;\n        }\n        & > div:nth-child(2) {\n            width: 80%;\n            & > h1 {\n                margin-bottom: 2px;\n                font-size: 32px;\n                font-weight: bold;\n                font-style: normal;\n                font-stretch: normal;\n                line-height: normal;\n                letter-spacing: normal;\n                color: #000000;\n            }\n\n            & > p {\n                font-size: 14px;\n                font-weight: normal;\n                font-style: normal;\n                font-stretch: normal;\n                line-height: 1.71;\n                letter-spacing: normal;\n            }\n        }\n    }\n"]))),p=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return o.c(e,n),e.prototype.render=function(){return r.createElement(r.Fragment,null,r.createElement(a.b,{list:[{name:"\ud648",link:"/"},{name:"\uc720\ub2c8\uc628",link:"/union/"},{name:"\ubb38\ud654",link:"/culture/"}]}),r.createElement(d,null,r.createElement(m.a,null,r.createElement("img",{src:t(139),alt:""})),r.createElement(h,null,r.createElement("div",null,r.createElement("div",null,"\uc720\ub2c8\uc5b8 \uc870\uc9c1 \ubb38\ud654"),r.createElement("div",null,r.createElement("h1",{style:{marginBottom:34}},"\uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\ub294 3C\uc758 \uc120\uc21c\ud658\uc744 \uac15\uc870\ud569\ub2c8\ub2e4."),r.createElement("p",null,"\uc6b0\ub9ac\ub294 \uae30\uc5c5\uacfc \uad6c\uc131\uc6d0, \uad6c\uc131\uc6d0\uacfc \uad6c\uc131\uc6d0\uac04\uc758 \uc218\ud3c9\uc801 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ubb38\ud654\ub97c \uc9c0\ud5a5\ud569\ub2c8\ub2e4. ",r.createElement("br",null),"\ub204\uad6c\ub098 \uc790\uc720\ub86d\uac8c \uc544\uc774\ub514\uc5b4\ub97c \ub0bc \uc218 \uc788\uace0, \ubaa8\ub4e0 \uad6c\uc131\uc6d0\ub4e4\uc740 \ubaa8\ub4e0 \uc758\uacac\uc744 \uc874\uc911\ud558\uace0 \uacf5\uac10\ud558\uace0\uc790 \ub178\ub825\ud569\ub2c8\ub2e4.",r.createElement("br",null),"\uc774\ub7ec\ud55c \ubc30\uacbd\uc5d0\ub294 \uad6c\uc131\uc6d0\uac04\uc758 '\uacf5\uac10'\uc774 \uc790\ub9ac\ud558\uae30\uc5d0 \uac00\ub2a5\ud55c \uc720\ub2c8\uc5b8\ud53c\ud50c\ub9cc\uc758 \uc758\uacac \uacf5\uc720 \ubb38\ud654\uc785\ub2c8\ub2e4.",r.createElement("br",null),"\uc6b0\ub9ac\ub294 \uad6c\uc131\uc6d0 \uac1c\uc778\uc758 \ucee4\ub9ac\uc5b4 \uacc4\ubc1c \ubb38\ud654\ub97c \uc9c0\ud5a5\ud569\ub2c8\ub2e4.",r.createElement("br",null),"\uc6b0\ub9ac\ub294 \uad6c\uc131\uc6d0\ub4e4 \ubaa8\ub450\uac00 \uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\uc758 \uc778\uc7ac\ub85c\ub9cc \uc778\uc815\ubc1b\uae30\ubcf4\ub2e4",r.createElement("br",null),"\uadf8\uac00 \uc788\uc5b4 \ube5b\uc774 \ub098\ub294 \uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\uac00 \ub418\uae38 \ubc14\ub78d\ub2c8\ub2e4.",r.createElement("br",null),"\ub530\ub77c\uc11c \uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\ub294 \uc790\uae30\uacc4\ubc1c\uc774 \ucde8\ubbf8\uc778 \uc5f4\uc815 \ud53c\ud50c\uc744 \uc778\uc7ac\uc0c1\uc73c\ub85c \uc0bc\uace0 \uc788\uc2b5\ub2c8\ub2e4.",r.createElement("br",null),"\uc6b0\ub9ac\ub294 \ub2a5\ub825\uc5d0 \ub530\ub978 \ubcf4\uc0c1\ubcf4\ub2e4 \uacf5\uac10\uc5d0 \ub530\ub978 \ubcf4\uc0c1 \ubb38\ud654\ub97c \uc9c0\ud5a5\ud569\ub2c8\ub2e4. ",r.createElement("br",null),"\ub2a5\ub825\uc740 \uad00\uc810\uc5d0 \ub530\ub77c \ub2e4\ub974\uac8c \ud3c9\uac00\ub418\uae30\ub3c4 \ud569\ub2c8\ub2e4.",r.createElement("br",null),"\uace0\ub85c, \uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\ub294 \uad6c\uc131\uc6d0 \uac04\uc758 \uacf5\uac10\uc744 \ubcf4\uc0c1\uae30\uc900\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4.",r.createElement("br",null),"\uc774\ub7ec\ud55c 3C\uc758 \uc120\uc21c\ud658\uc744 \ubc14\ud0d5\uc73c\ub85c \uc6b0\ub9ac\ub294 \uc720\ub2c8\uc5b8\ud53c\ud50c\uc774 \uc6c3\uc73c\uba70 \uc77c\ud558\ub294 ",r.createElement("br",null),"\ub530\ub73b\ud55c \uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \ub098\uac00\uace0 \uc788\uc2b5\ub2c8\ub2e4.",r.createElement("br",null)))),r.createElement("div",null,r.createElement("div",null),r.createElement("div",null,r.createElement("img",{src:t(140),style:{width:"50%"}}))),r.createElement("div",null,r.createElement("div",null),r.createElement("div",null,r.createElement("h1",{lang:"en"},"Culture"),r.createElement("p",null,"\uc6b0\ub9ac\ub294 \uae30\uc5c5\uacfc \uad6c\uc131\uc6d0, \uad6c\uc131\uc6d0\uacfc \uad6c\uc131\uc6d0\uac04\uc758 \uc218\ud3c9\uc801 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ubb38\ud654\ub97c \uc9c0\ud5a5\ud569\ub2c8\ub2e4. ",r.createElement("br",null)," \uc8fc 1\ud68c \ubaa8\ub4e0 \uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\uc758 \uad6c\uc131\uc6d0\uc774 \ubaa8\uc5ec \ud68c\uc0ac \uc804\uccb4 \ud504\ub85c\uc81d\ud2b8\ub97c \uacf5\uc720\ud558\ub294 \uac83\uc740 \ubb3c\ub860 ",r.createElement("br",null),"\ub9e4\uc8fc \uc218\uc2dc\ub85c \ub300\ud45c-\uad6c\uc131\uc6d0, \ud300 \ub9ac\ub354\uc640 \ud314\ub85c\uc6cc \uac04\uc758 1:1 \uc18c\ud1b5\uc744 \ud1b5\ud574 \uc9c1\uae09\uc758 \uacbd\uacc4\ub97c \ud5c8\ubb3c\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),r.createElement("div",null,r.createElement("div",null),r.createElement("div",null,r.createElement("h1",{lang:"en"},"Career"),r.createElement("p",null,"\uc6b0\ub9ac\ub294 \uad6c\uc131\uc6d0 \uac1c\uc778\uc758 \ucee4\ub9ac\uc5b4 \uacc4\ubc1c \ubb38\ud654\ub97c \uc9c0\ud5a5\ud569\ub2c8\ub2e4.",r.createElement("br",null),"\uba64\ubc84 \uac01\uc790\uac00 \uc790\uc2e0\uc744 \ube0c\ub79c\ub529\ud558\uace0, \ub300\uccb4 \ubd88\uac00\ud55c \uc778\uc7ac\ub85c \uc131\uc7a5\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4. ",r.createElement("br",null),"\u2018\uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\u2019\uc758 \uc778\uc7ac\uc0c1\uc740 \uc790\uae30\uacc4\ubc1c\uc774 \ucde8\ubbf8\uc778 \uc5f4\uc815 \ud53c\ud50c\uc785\ub2c8\ub2e4.",r.createElement("br",null),"\uc790\uae30 \uc131\uc7a5\uc744 \uc6d0\ud558\ub294 \uba64\ubc84\uc5d0\uac8c\ub294 \uc5b8\uc81c\ub4e0 \uc790\uae30\uacc4\ubc1c \ud734\uac00\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",r.createElement("br",null),"\ub610\ud55c \uc5c5\ubb34\uc5d0 \uc9c0\uce5c \uba64\ubc84\uc5d0\uac8c\ub294 \ub9ac\ud504\ub808\uc26c \ud734\uac00\ub97c \uc81c\uacf5\ud574 \uad6c\uc131\uc6d0\ub4e4\uc758 \u2018\uc6cc\ud0b9&\ub77c\uc774\ud504 \ubc38\ub7f0\uc2a4 \ub77c\uc774\ud504\u2019\ub97c \uc9c0 \uc6d0\ud569\ub2c8\ub2e4.",r.createElement("br",null)))),r.createElement("div",null,r.createElement("div",null),r.createElement("div",null,r.createElement("h1",{lang:"en"},"Compensation"),r.createElement("p",null,"\uc6b0\ub9ac\ub294 \uacf5\uac10\uc5d0 \ub530\ub978 \ubcf4\uc0c1 \ubb38\ud654\ub97c \uc9c0\ud5a5\ud569\ub2c8\ub2e4. ",r.createElement("br",null),"\uad6c\uc131\uc6d0\uc758 \ub2a5\ub825\uc744 \uc218\uce58\ub85c, \uc131\uacfc\ub85c \ud310\ub2e8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",r.createElement("br",null),"\ub2e4\ub978 \uad6c\uc131\uc6d0\ub4e4\uc758 \uacf5\uac10\uc744 \uc5bc\ub9c8\ub9cc\ud07c \ubd88\ub7ec\uc77c\uc73c\ucf30\ub290\ub0d0\ub97c \uae30\uc900\uc73c\ub85c \ubcf4\uc0c1\uae30\uc900\uc73c\ub85c \uc124\uc815\ud574, \uc77c\uc758 \ub2a5\ub825\uce58\ub97c \ucd5c\ub300\ud55c \ub04c\uc5b4\uc62c\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4. ",r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),"\uc774\ub7ec\ud55c 3C\uc758 \uc120\uc21c\ud658\uc744 \ubc14\ud0d5\uc73c\ub85c \uc6b0\ub9ac\ub294 \uc720\ub2c8\uc5b8\ud53c\ud50c\uc774 \uc6c3\uc73c\uba70 \uc77c\ud558\ub294 ",r.createElement("br",null),"\ub530\ub73b\ud55c \uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \ub098\uac00\uace0 \uc788\uc2b5\ub2c8\ub2e4."))))))},e}(r.Component);e.default=p}});
//# sourceMappingURL=11.66a07ba1.chunk.js.map