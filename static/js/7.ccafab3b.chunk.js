webpackJsonp([7],{104:function(n,e,t){"use strict";t.d(e,"a",function(){return p});var l,i,o=t(6),a=t(0),r=(t.n(a),t(7)),c=t(12),d=r.b.nav(l||(l=o.e(["\n    width: 100%;\n    display: flex;\n    font-size: 15px;\n    padding-left: calc(20px + 40px);\n    padding-right: calc(20px + 40px);\n    height: 50px;\n    border-top: 1px solid #eee;\n    border-bottom: 1px solid #eee;\n    align-items: center;\n\n    justify-content: space-between;\n\n    & > div:nth-child(1) {\n        color: black;\n        display: flex;\n        font-weight: bold;\n\n        & > span {\n            margin: 0 7px 0 7px;\n        }\n\n        & > a {\n            text-decoration: none;\n            color: black;\n\n            &:hover {\n                border-bottom: 0.2px solid black;\n            }\n        }\n    }\n\n    & > div:nth-child(2) {\n        display: flex;\n        align-items: center;\n        & > div {\n            width: 1px;\n            height: 17px;\n            margin: 0 15px;\n            background-color: black;\n        }\n    }\n"],["\n    width: 100%;\n    display: flex;\n    font-size: 15px;\n    padding-left: calc(20px + 40px);\n    padding-right: calc(20px + 40px);\n    height: 50px;\n    border-top: 1px solid #eee;\n    border-bottom: 1px solid #eee;\n    align-items: center;\n\n    justify-content: space-between;\n\n    & > div:nth-child(1) {\n        color: black;\n        display: flex;\n        font-weight: bold;\n\n        & > span {\n            margin: 0 7px 0 7px;\n        }\n\n        & > a {\n            text-decoration: none;\n            color: black;\n\n            &:hover {\n                border-bottom: 0.2px solid black;\n            }\n        }\n    }\n\n    & > div:nth-child(2) {\n        display: flex;\n        align-items: center;\n        & > div {\n            width: 1px;\n            height: 17px;\n            margin: 0 15px;\n            background-color: black;\n        }\n    }\n"]))),m=r.b.a(i||(i=o.e(["\n    display: flex;\n    color: black;\n    align-items: center;\n    text-decoration: none;\n\n    & > div {\n        font-size: 14px;\n        font-weight: bold;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 2.07;\n        letter-spacing: normal;\n\n        margin-right: 8px;\n    }\n\n    & > img {\n        width: 19px;\n        height: 19px;\n    }\n"],["\n    display: flex;\n    color: black;\n    align-items: center;\n    text-decoration: none;\n\n    & > div {\n        font-size: 14px;\n        font-weight: bold;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 2.07;\n        letter-spacing: normal;\n\n        margin-right: 8px;\n    }\n\n    & > img {\n        width: 19px;\n        height: 19px;\n    }\n"]))),p=function(n){return a.createElement(m,{href:n.link},a.createElement("div",{onClick:n.onClick},n.children),a.createElement("img",{src:t(105),alt:""}))};e.b=function(n){return a.createElement(d,null,a.createElement("div",null,n.list.map(function(e,t){return t===n.list.length-1?a.createElement("div",null,e.name):a.createElement(a.Fragment,null,a.createElement(c.b,{to:e.link},e.name),a.createElement("span",null,">"))})),a.createElement("div",null,n.children))}},105:function(n,e){n.exports="data:image/png;base64,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"},106:function(n,e,t){"use strict";var l,i,o=t(6),a=t(7),r=Object(a.c)(l||(l=o.e(["\nfrom { width: 0 }\n  to { width: 100% }\n"],["\nfrom { width: 0 }\n  to { width: 100% }\n"]))),c=a.b.div(i||(i=o.e(["\n    position: relative;\n    margin-bottom: 59px;\n    width: 100%;\n    line-height: 0.85;\n    & > img {\n        width: 100%;\n    }\n    & > div.desc {\n        position: absolute;\n        top: 47px;\n        left: 16%;\n        white-space: nowrap;\n        overflow: hidden;\n\n        & > h1 {\n            width: fit-content;\n            font-size: 44px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        & > h2 {\n            width: fit-content;\n            font-size: 24px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        &.typing {\n            & > * {\n                animation-fill-mode: forwards;\n                animation: "," 2s steps(40, end);\n            }\n            & > *:nth-child(2) {\n                animation-delay: 2s;\n            }\n            & > *:nth-child(3) {\n                animation-delay: 4s;\n            }\n        }\n    }\n"],["\n    position: relative;\n    margin-bottom: 59px;\n    width: 100%;\n    line-height: 0.85;\n    & > img {\n        width: 100%;\n    }\n    & > div.desc {\n        position: absolute;\n        top: 47px;\n        left: 16%;\n        white-space: nowrap;\n        overflow: hidden;\n\n        & > h1 {\n            width: fit-content;\n            font-size: 44px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        & > h2 {\n            width: fit-content;\n            font-size: 24px;\n            font-weight: bold;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: normal;\n            letter-spacing: normal;\n            color: #000000;\n        }\n\n        &.typing {\n            & > * {\n                animation-fill-mode: forwards;\n                animation: "," 2s steps(40, end);\n            }\n            & > *:nth-child(2) {\n                animation-delay: 2s;\n            }\n            & > *:nth-child(3) {\n                animation-delay: 4s;\n            }\n        }\n    }\n"])),r);e.a=c},189:function(n,e,t){n.exports=t.p+"static/media/joyland-banner.69928aa6.png"},190:function(n,e,t){n.exports=t.p+"static/media/img1.6545c606.png"},191:function(n,e,t){n.exports=t.p+"static/media/img2.ffbbee43.png"},97:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l,i,o=t(6),a=t(0),r=(t.n(a),t(104)),c=t(106),d=t(7),m=d.b.div(l||(l=o.e(["\n    width: 100%;\n    padding-bottom: 200px;\n    font-size: 14px;\n"],["\n    width: 100%;\n    padding-bottom: 200px;\n    font-size: 14px;\n"]))),p=d.b.div(i||(i=o.e(["\n    padding: 0 15%;\n    & > div {\n        display: flex;\n        margin-bottom: 60px;\n        & > div:nth-child(1) {\n            width: calc(20% - 45px);\n            margin-right: 45px;\n            font-size: 18px;\n        }\n        & > div:nth-child(2) {\n            width: 80%;\n            line-height: 1.71;\n            font-size: 14px;\n\n            & > p:nth-child(1) {\n                font-style: normal;\n                font-stretch: normal;\n                line-height: normal;\n                letter-spacing: normal;\n\n                &.title {\n                    font-size: 32px;\n                    font-weight: bold;\n\n                    margin-bottom: 34px;\n                }\n\n                &.subTitle {\n                    font-size: 22px;\n                    font-weight: bold;\n\n                    margin-bottom: 10px;\n                }\n            }\n        }\n    }\n"],["\n    padding: 0 15%;\n    & > div {\n        display: flex;\n        margin-bottom: 60px;\n        & > div:nth-child(1) {\n            width: calc(20% - 45px);\n            margin-right: 45px;\n            font-size: 18px;\n        }\n        & > div:nth-child(2) {\n            width: 80%;\n            line-height: 1.71;\n            font-size: 14px;\n\n            & > p:nth-child(1) {\n                font-style: normal;\n                font-stretch: normal;\n                line-height: normal;\n                letter-spacing: normal;\n\n                &.title {\n                    font-size: 32px;\n                    font-weight: bold;\n\n                    margin-bottom: 34px;\n                }\n\n                &.subTitle {\n                    font-size: 22px;\n                    font-weight: bold;\n\n                    margin-bottom: 10px;\n                }\n            }\n        }\n    }\n"]))),h=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return o.c(e,n),e.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement(r.b,{list:[{name:"\ud648",link:"/"},{name:"\ube0c\ub79c\ub4dc",link:"/brand/"},{name:"\uc870\uc774\ub79c\ub4dc",link:"/joyland"}]},a.createElement(r.a,{link:"#"},"Joyland \ud648\ud398\uc774\uc9c0 \ubc14\ub85c\uac00\uae30")),a.createElement(m,null,a.createElement(c.a,null,a.createElement("img",{src:t(189),alt:""}),a.createElement("div",{className:"desc typing"},a.createElement("h1",{lang:"en"},"Joyland"),a.createElement("h2",null,"\uc5b8\uc5b4\uc640 \ubb38\ud654\ub85c \uc0ac\ub78c\uc744 \uc787\ub2e4"))),a.createElement(p,null,a.createElement("div",null,a.createElement("div",null),a.createElement("div",null,a.createElement("p",{className:"title"},"\ud3b8\uc548\ud558\uace0 \uc7ac\ubbf8\uc788\uac8c \ubc30\uc6b0\ub294 \uc601\uc5b4\ud68c\ud654"),a.createElement("img",{src:t(190),style:{width:"90%",height:467,backgroundColor:"#e6e6e6",marginBottom:34},alt:""}),a.createElement("p",null,"\uc8fc\uc2dd\ud68c\uc0ac \uc720\ub2c8\uc5b8\ud50c\ub808\uc774\uc2a4\uc758 \ud22c\uc790\ub97c \ubc1b\uc544 \ubb38\uc744 \uc5f0 \uae00\ub85c\ubc8c\uceec\uccd0 \ube0c\ub79c\ub4dc \uc870\uc774\ub79c\ub4dc \uc789\uae00\ub9ac\uc2dc\uce74\ud398. \ub2f9\uc0b0\uc5ed 3\ubc88 \ucd9c\uad6c\uc5d0 \uc704\uce58\ud55c \ub3d9\ud654\ube4c\ub529 2\uce35\uc73c\ub85c \ub4e4\uc5b4\uc11c\uc790, \uc720\ub2c8\ud06c\ud55c \uacf5\uac04\uc774 \ub208\uc55e\uc5d0 \ud3bc\uccd0\uc84c\ub2e4. \ud55c \ub208\uc5d0 \ub2e4 \ub4e4\uc5b4\uc624\uc9c0 \uc54a\ub294 \ub113\uc740 \uce74\ud398, \ud0c1 \ud2b8\uc778 \uc804\ub9dd, \ubaa8\ub358 \ud504\ub80c\uce58\ud55c \ud14c\uc774\ube14\uacfc \uc758\uc790\ub4e4.. \ucee4\ud53c \ud55c\uc794\uc529\uc744 \ud14c\uc774\ube14\uc5d0 \ub193\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc0bc\uc0bc\uc624\uc624 \ubaa8\uc5ec\uc11c \uc990\uac81\uac8c \uc6c3\uace0 \ub5a0\ub4dc\ub294\ub370, \ubc14\ub85c \uc601\uc5b4\uc600\ub2e4. \uc870\uc774\ub79c\ub4dc\ub294 \uc601\uc5b4\ud68c\ud654\ub77c\ub294 \ucde8\ubbf8\uc640 \ubaa9\ud45c\ub97c \uac00\uc9c4 \uc0ac\ub78c\ub4e4\uc774 \ubaa8\uc5ec\uc11c, \uba64\ubc84\uc778 \u2018\uc870\uc774\ub79c\ub354\u2019\uac00 \ub418\uace0, \uba64\ubc84\ub4e4\ub07c\ub9ac \ub9cc\ub098 \uc601\uc5b4\ub85c \uc0ac\uad50\ubaa8\uc784\ub3c4 \ud558\uace0 \uc601\uc5b4\ub85c \ub300\ud654\ub3c4 \ud558\ub294 \ucee4\ubba4\ub2c8\ud2f0 \ub77c\uc6b4\uc9c0 \uce74\ud398\uc774\ub2e4. \ub9c8\uc7ac\uc601(Joey) \ub300\ud45c\ub97c \ub9cc\ub098 \uc870\uc774\ub79c\ub4dc\uc758 \ube0c\ub79c\ub4dc \uc2a4\ud1a0\ub9ac\ub97c \ub4e4\uc5b4\ubd24\ub2e4."))),a.createElement("div",null,a.createElement("div",null,a.createElement("img",{src:t(191),style:{width:"100%",height:"auto",backgroundColor:"#e6e6e6",marginBottom:34},alt:""})),a.createElement("div",null,a.createElement("p",{className:"subTitle"},"Q. \ube0c\ub79c\ub4dc\uc758 \uba54\uc778 \uc2a4\ud1a0\ub9ac \ubc0f \uacc4\uae30?"),a.createElement("p",null,"\uce90\ub098\ub2e4 \uc2dc\ubbfc\uad8c\uc790\uc600\ub358 \ub9c8\uc7ac\uc601\ub300\ud45c(Joey)\ub294 \ud55c\uad6d\uc5d0 \ub3cc\uc544\uc628 \ud6c4 \ud559\uc6d0\uc5d0\uc11c \uc601\uc5b4\ub97c \uac00\ub974\ucce4\ub2e4. \uadf8\ub7f0\ub370, \ub9c9\uc0c1 \ud559\uc0dd\ub4e4\uc744 \uac00\ub974\uccd0\ubcf4\ub2c8 \ub300\ub2e4\uc218\uc758 \ud559\uc0dd\ub4e4\uc774 \uc601\uc5b4\ub97c \uc2dc\ud5d8\uc744 \uc704\ud55c \ud559\ubb38\uc73c\ub85c \uc778\uc2dd\ud558\uace0 \uc788\uc5c8\ub2e4. \uc774\ub7ec\ud55c \uc0dd\uac01\uc740 \uc790\uc5f0\uc2a4\ub808 \ub3c5\ud574, \ub4e3\uae30\uc5d0\ub9cc \ud3b8\uc911\ub41c \ud559\uc2b5\uc73c\ub85c \uc774\uc5b4\uc84c\uace0 \uc601\uc5b4\ud68c\ud654\uc5d0 \ub300\ud55c \uc5b4\ub824\uc6c0\uc73c\ub85c \uc5f0\uacb0\ub418\uc5c8\ub2e4. \uc870\uc774\ub294 \ud55c\uad6d\uc758 \uc601\uc5b4 \ud559\uc2b5\ubb38\ud654\uc5d0 \uc2e4\uc99d\uc744 \ub290\ub07c\ub358 \ucc28\uc5d0 \uac19\uc740 \uc5b4\ub824\uc6c0\uc744 \uacaa\ub358 \uc544\ub098\uc6b4\uc11c \uc81c\ub2c8\ub97c \ub9cc\ub098\uac8c \ub418\uc5c8\ub2e4. \uadf8\ub9ac\uace0 \uc81c\ub2c8\uc758 \uc5b4\ub824\uc6c0\uc744 \ub4e3\uace0 \ub098\uc11c\ub294 \uae30\uc874\uc758 \ubc29\uc2dd\uacfc\ub294 \ub2e4\ub978 \ubc29\uc2dd\uc73c\ub85c \uc81c\ub2c8\uc758 \uc601\uc5b4 \uc2e4\ub825\uc744 \ud5a5\uc0c1\uc2dc\ucf1c \uc8fc\uae30\ub85c \ub9c8\uc74c \uba39\uc5c8\ub2e4. \uc870\uc774\ub294 \uc81c\ub2c8\uc5d0\uac8c \uc790\uc2e0\uc758 \uc678\uad6d\uc778 \uce5c\uad6c\ub4e4\uc744 \uc18c\uac1c\uc2dc\ucf1c\uc90c\uc73c\ub85c\uc368 \uadf8\ub4e4\uacfc \ub300\ud654\ud558\ub294 \ud658\uacbd\uc744 \ub9cc\ub4e4\uc5b4 \uc8fc\uc5c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 \ubb34\uac70\uc6b4 \ud559\uc2b5 \ubd84\uc704\uae30\uc5d0\uc11c \ubc97\uc5b4\ub098 \uc601\uc5b4\ud68c\ud654\ub97c \uc990\uac81\uac8c \uc774\uc57c\uae30\ud558\uace0 \uc0c8\ub85c\uc6b4 \uc0ac\ub78c\uc744 \ub9cc\ub098\ub294 \uae0d\uc815\uc801\uc778 \uc218\ub2e8\uc73c\ub85c \uc778\uc2dd\ud558\uac8c \ud588\ub2e4. \uadf8 \uacb0\uacfc \uc81c\ub2c8\ub294 \uc9e7\uc740 \uae30\uac04\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \ube44\uc57d\uc801\uc778 \ubc1c\uc804\uc744 \uc774\ub904\ub0c8\ub2e4. \uc774 \uacbd\ud5d8\uc744 \ud1a0\ub300\ub85c \uc870\uc774\uc640 \uc81c\ub2c8\ub294 \uc601\uc5b4 \ud68c\ud654\uc5d0 \uad00\uc2ec\uc774 \uc788\ub294 \uc0ac\ub78c\ub4e4\ub07c\ub9ac \ubaa8\uc5ec \uc774\uc57c\uae30\ud558\ub294 \ucee4\ubba4\ub2c8\ud2f0 \uacf5\uac04\uc744 \ub9cc\ub4e4\uc5b4\uc57c\uaca0\ub2e4\uace0 \uc0dd\uac01\ud588\uace0 \uadf8 \uacb0\uacfc \uc870\uc774\ub79c\ub4dc\uac00 \ud0c4\uc0dd\ud558\uc600\ub2e4."))),a.createElement("div",{style:{marginTop:"-20px"}},a.createElement("div",null),a.createElement("div",null,a.createElement("p",{className:"subTitle"},"Q. \ud55c\uad6d \uc0ac\ub78c\ub4e4\uc758 \uc601\uc5b4?"),a.createElement("p",null,"\ud55c\uad6d\uc5d0\uc11c \uc601\uc5b4\ub97c \ubc30\uc6b0\ub824\uace0 \ud560 \ub54c \uc0ac\ub78c\ub4e4\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ud559\uc6d0, \uc628\ub77c\uc778 \uac15\uc758, \ubbf8\ub4dc \uc2dc\uccad\uc744 \uc704\uc8fc\ub85c \ud558\ub354\ub77c. \uc138 \uac00\uc9c0\uc758 \ucde8\uc57d\uc810\uc744 \ubd84\uc11d\ud558\uae30 \uc2dc\uc791\ud588\ub2e4. \ud559\uc6d0\uc740 \ube60\uc9c0\uba74 \ubcf4\ucda9\uc774 \uc5b4\ub835\uace0, \uc815\ud574\uc9c4 \uc2dc\uac04\uc5d0 \uac00\uc57c\ud558\uae30 \ub54c\ubb38\uc5d0 \ubc14\uc05c \ud604\ub300\uc778\ub4e4\uc5d0\uac8c\ub294 \ub9de\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\ub2e4. \uc628\ub77c\uc778 \uac15\uc758\ub294 \ub4e4\uc744 \ub54c\ub9cc \uc774\ud574\uac00 \ub420 \ubfd0 \uc0ac\uc2e4\uc0c1 \ub9d0\uc744 \ud558\uc9c0 \ubabb \ud558\ub294 \uacbd\uc6b0\uac00 \ub2e4\ubc18\uc218\uc600\uace0, \ubbf8\ub4dc \uc5ed\uc2dc \uc2e4\uc0dd\ud65c\uc5d0 \uc4f0\uae30 \uc88b\uc740 \ub2e4\ucc44\ub85c\uc6b4 \ud45c\ud604\ub4e4\uc774 \ub9ce\uc9c0\ub9cc \uc815\ud655\ud788 \uadf8 \uc0c1\ud669\uc774 \ub418\uc9c0 \uc54a\ub294 \uc774\uc0c1 \uc4f0\uae30 \uc5b4\ub835\ub2e4\ub294 \ud310\ub2e8\uc774 \uc788\uc5c8\ub2e4.",a.createElement("br",null),a.createElement("br",null),"\ubb3c\ub860 \uc704\uc758 3\uac00\uc9c0 \ubc29\ubc95\uc744 \ud1b5\ud574\uc11c\ub3c4 \uc2a4\ud53c\ud0b9 \uc2e4\ub825\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \uc0ac\ub78c\ub3c4 \uc788\ub2e4. \uadf8\ub7ec\ub098 \ub300\ub2e4\uc218\ub294 \ub0b4\uac00 \uc601\uc5b4\ub85c \ub9d0\uc744 \uac78\uc5c8\uc744 \ub54c\ub294 \ubc84\ud37c\ub9c1\uc774 \uac78\ub9ac\uae30 \uc77c\uc464\uc600\ub2e4. \uacb0\uad6d \ub9d0\uc744 \ud558\uae30 \uc704\ud55c \ub9ac\ub529, \ub9d0\uc744 \ud558\uae30 \uc704\ud55c \ub9ac\uc2a4\ub2dd\uc774 \ud544\uc694\ud558\ub2e4\ub294 \uac78 \uae68\ub2eb\uace0 \ub098\uc11c, \uc81c\ub2c8\uc5d0\uac8c \uc2dc\ub3c4\ud55c \ud559\uc2b5 \ubc29\uc2dd\uc744 \uad6c\uccb4\ud654\ud558\uba74\uc11c \ucca0\uc800\ud788 \uc2a4\ud53c\ud0b9\uc5d0 \ucd08\uc810\uc744 \ub9de\ucd98 \ucee4\ub9ac\ud058\ub7fc\uc744 \uc9dc\uae30 \uc2dc\uc791\ud588\ub2e4."))),a.createElement("div",null,a.createElement("div",null),a.createElement("div",null,a.createElement("p",{className:"subTitle"},"Q. \uc870\uc774\ub79c\ub4dc \uc2a4\ud53c\ud0b9 \ucee4\ub9ac\ud058\ub7fc?"),a.createElement("p",null,"\ucc45\uacfc \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ub0b4\uc6a9\uc758 \uc644\uc131\ub3c4\ub97c \ub192\uc774\uae30 \uc704\ud574 MIT\uacf5\ub300 \uc5f0\uad6c\uc9c4, \uad6d\ub0b4 \uc601\ubb38\ud559 \ubc15\uc0ac\uc640 \ud611\uc5c5\ud588\ub2e4. \uae34 \uc5f0\uad6c \ub05d\uc5d0 \u2018\uc601\uc5b4 \uc2a4\ud53c\ud0b9\u2019\uc5d0 \ucd5c\uc801\ud654\ub41c \uc870\uc774\ub79c\ub4dc\ub9cc\uc758 \uad50\uc7ac\uc640 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud588\uace0 \uc2e4\uc81c \uba64\ubc84\ub4e4\uc774 \ub2e8\uae30\uac04\uc5d0 \ud070 \ud6a8\uacfc\ub97c \ubcf4\uace0 \uc788\ub2e4"))),a.createElement("div",null,a.createElement("div",null),a.createElement("div",null,a.createElement("p",{className:"subTitle"},"Q. \ub2e4\ub978 \uc601\uc5b4 \uad00\ub828 \ud559\uc6d0 \ud639\uc740 \uce74\ud398\uc640\uc758 \ucc28\ubcc4\uc131?"),a.createElement("p",null,"\uc870\uc774\ub79c\ub4dc\ub294 \uc2a4\ud53c\ud0b9 \uc2e4\ub825\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud55c \uc804\ub7b5\uc73c\ub85c \ud06c\uac8c 2\uac00\uc9c0 \ucc28\ubcc4\uc810\uc744 \ub450\uc5c8\ub2e4. \ubc14\ub85c \uce5c\ubc00\uac10 \ud615\uc131\uacfc \uc811\uadfc\uc131\uc774\ub2e4. \ud0c0 \uc789\uae00\ub9ac\uc2dc \uce74\ud398\ub97c \ub2f5\uc0ac\ud574\ubcf4\uba74\uc11c \uacf5\ud1b5\uc801\uc73c\ub85c \ub290\ub080 \ubb38\uc81c\ub294 \ubaa8\ub4e0 \ub300\ud654\uac00 \uad50\uacfc\uc11c\uc801\uc774\uc5c8\ub2e4. \ub610\ud55c \uc601\uc5b4\ud68c\ud654 \ucd08\ubcf4\uc778 \uc0ac\ub78c\ub4e4\uc740 \ucee4\ubba4\ub2c8\ud2f0\ub97c \ud3ed \ub113\uac8c \ud65c\uc6a9\ud558\uc9c0 \ubabb\ud558\uace0 \uc18c\uc678\ub418\uae30 \uc77c\uc464\uc600\ub2e4. \uadf8\ub798\uc11c \uc870\uc774\ub79c\ub4dc\ub294 \ub9f4\ubc84\uc27d \uc81c\ub3c4\ub97c \ud1b5\ud574 \ub9f4\ubc84\ub4e4\uc774 \uc790\uc5f0\uc2a4\ub7fd\uac8c \uce5c\ubd84\uc744 \uc313\ub3c4\ub85d \ud55c \ud6c4 \uc11c\ub85c\uc758 \uc77c\uc0c1\uc801\uc778 \uc774\uc57c\uae30\ub97c \uc601\uc5b4\ub85c \ub300\ud654\ud558\ub3c4\ub85d \uc720\ub3c4\ud558\uace0 \uc788\ub2e4. \uc0c8\ub85c\uc6b4 \uc0ac\ub78c\uc744 \ub9cc\ub098\uace0 \ub610 \uc11c\ub85c\uc758 \uc77c\uc0c1, \ubb38\ud654\ub97c \uacf5\uc720\ud558\uba74\uc11c \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc601\uc5b4\ub85c \ub300\ud654\ud560 \uc218 \uc788\ub294 \ud658\uacbd\uc744 \uc870\uc131\ud574\uc900\ub2e4.",a.createElement("br",null),a.createElement("br",null),"\ub610 \ub2e4\ub978 \ucc28\ubcc4\uc810\uc740 \uc811\uadfc\uc131\uc774\ub2e4. \uc870\uc774\ub79c\ub4dc\ub9cc\uc758 \uc601\uc5b4 \ud559\uc2b5 \uad50\uc7ac\uc778 \u2018\uc2a4\ud53c\ud0b9 \uac00\uc774\ub4dc\u2019\uc640 \uc2a4\ub9c8\ud2b8\ud3f0 \uc571 \u2019\uc870\uc774 \ud328\uc2a4\u2019\ub97c \ud1b5\ud574 \uc5b8\uc81c \uc5b4\ub514\uc11c\ub098 \uc2a4\ud53c\ud0b9 \ud559\uc2b5\uc774 \uac00\ub2a5\ud558\uac8c \ub9cc\ub4e4\uc5c8\ub2e4. \uc989, \ud559\uc6d0\uc5d0\uc11c\ub9cc \uc774\ub904\uc9c0\ub358 \ud559\uc2b5\uc744 \uc2dc\uac04\uacfc \uc7a5\uc18c\uc5d0 \uad6c\uc560\ubc1b\uc9c0 \uc54a\uace0 \uc2a4\uc2a4\ub85c \uc790\uc720\ub86d\uac8c \ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc774\ub2e4."))),a.createElement("div",null,a.createElement("div",null),a.createElement("div",null,a.createElement("p",{className:"subTitle"},"Q. \uc870\uc774\ub79c\ub4dc \uc774\uc6a9\ubc29\ubc95?"),a.createElement("p",null,"\uba64\ubc84\uc27d\uc744 \uad6c\ub9e4\ud558\uc5ec \uc870\uc774\ub79c\ub4dc \uba64\ubc84\uac00 \ub418\uba74 \uc870\uc774\ub79c\ub4dc\uc758 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4. \uba64\ubc84\uc27d\uc740 1,3,6\uac1c\uc6d4 \ub610\ub294 1\ub144 \ub2e8\uc704\ub85c \uad6c\ub9e4\ud560 \uc218 \uc788\ub2e4. \ub610\ud55c \ud68c\uc6d0\ub4e4\uc5d0\uac8c \uc870\uc774\ub79c\ub4dc\uc548\uc5d0\uc11c \ud1b5\uc6a9\ub418\ub294 \ud3ec\uc778\ud2b8\ub97c \uba64\ubc84\uc27d \uae30\uac04\uc5d0 \ub9de\uac8c \uc9c0\uae09\ud55c\ub2e4. \uc774 \ud3ec\uc778\ud2b8\ub294 \ud578\ub4dc\ud3f0 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ud1b5\ud574 \uc870\uc774\ub79c\ub4dc \uc548\uc5d0\uc11c \ud604\uae08\ucc98\ub7fc \uc774\uc6a9 \uac00\ub2a5\ud558\ub2e4. \uc989, \ud578\ub4dc\ud3f0 \ub9cc \uc788\uc73c\uba74 \uc870\uc774\ub79c\ub4dc\uc758 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub97c \uc9c0\uac11 \uc5c6\uc774\ub3c4 \ud3b8\ub9ac\ud558\uac8c \uc774\uc6a9\ud560 \uc218 \uc788\ub294 \uac83\uc774\ub2e4."))),a.createElement("div",null,a.createElement("div",null),a.createElement("div",null,a.createElement("p",{className:"subTitle"},"Q. \uc55e\uc73c\ub85c\uc758 \uc870\uc774\ub79c\ub4dc?"),a.createElement("p",null,"\u2018\uc601\uc5b4\ud68c\ud654\ub97c \ud558\uace0\uc2f6\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc601\uc5b4\ub85c \ub9d0\ud558\uace0 \ubb38\ud654\ub97c \ub098\ub204\ub294 \ubb38\ud654\uacf5\uac04\uc744 \uc81c\uacf5\ud55c\ub2e4\u2019 \ub294 \ucca0\ud559\ub97c \ubc14\ud0d5\uc73c\ub85c \ube0c\ub79c\ub4dc\ub97c \ud655\uc7a5\uc2dc\ud0a4\ub294 \uac83\uc774 \uc6b0\ub9ac\uc758 \uad81\uadf9\uc801\uc778 \ubaa9\ud45c\uc774\ub2e4. \ud5a5\ud6c4 5\ub144 \ub0b4\ub85c\ub294 \uc774 \ubb38\ud654\uc640 \uc2dc\uc2a4\ud15c\uc744 \ud574\uc678\ub85c\uae4c\uc9c0 \uc218\ucd9c\ud55c\ub2e4\ub294 \uacc4\ud68d\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4."))),a.createElement("div",null,a.createElement("div",null),a.createElement("div",null,a.createElement("p",{className:"subTitle"},"Q. \uc870\uc774\ub79c\ub4dc\uc758 \uad81\uadf9\uc801\uc778 \ubbf8\uc158?"),a.createElement("p",null,"\uc870\uc774\ub79c\ub4dc\ub294 \ub2e8\uc21c\ud788 \uc601\uc5b4\ud68c\ud654\ub97c \ubc30\uc6b0\ub294 \uac83\uc744 \ub118\uc5b4\uc11c, \u2018\uc5b8\uc5b4\uc640 \ubb38\ud654\ub85c \uc0ac\ub78c\uc744 \uc787\ub294\ub2e4\u2019\ub294 \ubb38\ud654\uc801 \uc811\uadfc\uc73c\ub85c \ubbf8\uc158\uc744 \uc124\uc815\ud588\ub2e4. \uc5b8\uc5b4\ub97c \ud559\ubb38\uc73c\ub85c \ubc1b\uc544\ub4e4\uc774\uae30 \uc774\uc804\uc5d0 \ub9d0\ud558\uae30 \uc704\ud55c \uc218\ub2e8\uc73c\ub85c, \uc778\uac04\uad00\uacc4\ub97c \ud3ed\ub113\uac8c \ud558\ub294 \ub9e4\uac1c\uccb4\ub85c \uc0dd\uac01\ud558\ub294 \uac83\uc774\ub2e4.",a.createElement("br",null),a.createElement("br",null),"\uc601\uc5b4\ub97c \uc810\uc218\ud654\ud558\uae30 \ubc14\uc05c \ud55c\uad6d\uc758 \uc601\uc5b4\ubb38\ud654 \uc790\uccb4\ub97c \ubc14\uafb8\uace0, \uc601\uc5b4\uac00 \uc0ac\ub78c\uc744 \uc774\uc5b4\uc8fc\ub294 \uc990\uac70\uc6b4 \uc218\ub2e8\uc73c\ub85c \uc778\uc2dd\ub420 \uc218 \uc788\ub3c4\ub85d \uc870\uc774\ub79c\ub4dc\uc758 \uc774\ub984\uc744 \uac78\uace0 \ucd5c\uc120\uc744 \ub2e4\ud574 \ub178\ub825\ud560 \uac83\uc774\ub2e4."))))))},e}(a.Component);e.default=h}});
//# sourceMappingURL=7.ccafab3b.chunk.js.map