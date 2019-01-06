(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,n,o){e.exports={Layout:"Layout_Layout__3S65s"}},120:function(e,n,o){e.exports={ChartContainer:"Chart_ChartContainer__F5i6B"}},132:function(e,n,o){e.exports={Instructions:"Instructions_Instructions__1gfdE"}},133:function(e,n,o){e.exports={ListLabel:"ListLabel_ListLabel__1HgyC"}},134:function(e,n,o){e.exports={SearchFilters:"SearchFilters_SearchFilters__1r0Zh"}},135:function(e,n,o){e.exports={ResultsTable:"DegreeAnalyzer_ResultsTable__1vQNb"}},136:function(e,n,o){e.exports=o(291)},141:function(e,n,o){},291:function(e,n,o){"use strict";o.r(n);var a=o(1),i=o.n(a),r=o(53),l=o.n(r),t=(o(141),o(54)),c=o(55),m=o(65),s=o(56),g=o(66),d=o(118),u=o.n(d),h=function(e){return i.a.createElement("main",{className:u.a.Layout},e.children)},p=function(e){return e.children},S=o(67),f=o.n(S),y=function(e){return i.a.createElement("div",{className:f.a.Banner},i.a.createElement("div",{className:f.a.BannerTitle},"Graduate Employment Survey 2018"),i.a.createElement("div",{className:f.a.BannerSubtitle},i.a.createElement("p",null,"Salary and employment rate of local university graduates by degree."),i.a.createElement("p",null,"Data from the Ministry of Education.")))},U=o(295),N=o(296),E=o(281),T=o(40),B=o(282),C=o(293),H=o(292),v=o(280),M=o(119),A=o.n(M),I=o(44),w=o.n(I),_=function(e){return null!=e.payload[0]?i.a.createElement("div",{className:w.a.Tooltip},i.a.createElement("div",{className:w.a.TooltipHeading},e.payload[0].payload.school),i.a.createElement("span",{className:w.a.TooltipText},e.payload[0].payload.degree),i.a.createElement("div",{className:w.a.TooltipHeading},e.payload[0].payload.employment,"% | $",e.payload[0].payload.mean)):i.a.createElement(A.a,e)},b=o(120),D=o.n(b),F=["#FFA600","#FF3366","#17CF17","#00E3F6","#0F4D65"],L=function(e){return i.a.createElement("div",{className:D.a.ChartContainer},i.a.createElement(U.a,{aspect:1.4},i.a.createElement(N.a,{margin:{top:10,right:10,bottom:0,left:-15}},i.a.createElement(E.a,{type:"number",domain:["dataMin","dataMax"],ticks:[50,60,70,80,90,100],dataKey:"employment",name:"Employment Rate",unit:"%",padding:{left:30,right:10}},i.a.createElement(T.a,{value:"Full-Time Employment Rate",offset:10,position:"top"})),i.a.createElement(B.a,{type:"number",domain:["dataMin","dataMax"],ticks:[2e3,3e3,4e3,5e3],dataKey:"mean",name:"Mean Monthly Salary",padding:{left:0,right:0}},i.a.createElement(T.a,{value:"Salary",offset:-15,angle:90,position:"insideRight"})),i.a.createElement(C.a,{cursor:{strokeDasharray:"3 3"},content:i.a.createElement(_,null)}),i.a.createElement(H.a,{name:"A school",data:e.chartData,fill:"#8884d8"},e.chartData.map(function(e,n){return i.a.createElement(v.a,{key:"cell-".concat(n),fill:(o=e.school,"NUS"===o?F[0]:"NTU"===o?F[1]:"SMU"===o?F[2]:"SIT"===o?F[3]:F[4])});var o})))))},x=o(132),O=o.n(x),P=function(e){return i.a.createElement("div",{className:O.a.Instructions},e.children)},k=o(30),j=o.n(k),G=function(e){return i.a.createElement("div",{className:j.a.ListHeaders},i.a.createElement("div",{className:j.a.col,style:{flex:5}},"Degree"),i.a.createElement("div",{className:j.a.col,style:{flex:2}},"Full-Time Employment Rate"),i.a.createElement("div",{className:j.a.col,style:{flex:4}},i.a.createElement("div",{style:{width:"100%"}},"Basic Monthly Salary"),i.a.createElement("div",{style:{display:"flex",width:"100%"}},i.a.createElement("div",{className:j.a.subHeading},"Mean "),i.a.createElement("div",{className:j.a.subHeading},"Median"))))},R=o(84),Y=o(37),W=o.n(Y),z=function(e){return i.a.createElement("div",{className:W.a.ListItemRow},i.a.createElement("div",{className:W.a.ListItemCol,style:{flex:5}},e.data.degree),i.a.createElement("div",{className:W.a.ListItemCol,style:{flex:2}},e.data.employment),i.a.createElement("div",{className:W.a.ListItemCol,style:{flex:2}},e.data.mean),i.a.createElement("div",{className:W.a.ListItemCol,style:{flex:2}},e.data.median))},K=o(133),J=o.n(K),Q=function(e){return i.a.createElement("div",{className:J.a.ListLabel},e.children)},X=function(e){var n=[];return i.a.createElement("div",null,e.items.map(function(e){return-1===n.indexOf(e.group)?(n.push(e.group),i.a.createElement(p,{key:e.degree},i.a.createElement(Q,null,e.group),i.a.createElement(z,{data:Object(R.a)({},e)}))):i.a.createElement(z,{key:e.degree,data:Object(R.a)({},e)})}))},$=o(69),Z=o.n($),q=function(e){return i.a.createElement("div",{className:Z.a.SearchContainer},i.a.createElement("input",{className:Z.a.SearchBar,type:"text",onChange:e.changed,onKeyPress:e.keypress,placeholder:"e.g. Business"}),i.a.createElement("svg",{className:Z.a.SearchBarIcon},i.a.createElement("svg",{viewBox:"0 0 100 100"},i.a.createElement("title",null,"icon-search"),i.a.createElement("path",{d:"M80.65 66.78a33.55 33.55 0 0 1-47.44-47.44 33.55 33.55 0 1 1 47.44 47.44zm6.73-54.16a43.06 43.06 0 0 0-65.32 55.71L2 88.39A6.8 6.8 0 0 0 11.61 98l20.06-20.06a43.06 43.06 0 0 0 55.71-65.32z"}))))},V=o(134),ee=o.n(V),ne=o(70),oe=o.n(ne),ae=function(e){var n=[oe.a.SearchFilter],o=function(){return e.add(e.children)};return e.active&&(n=[oe.a.SearchFilter,oe.a.active],o=function(){return e.remove(e.children)}),i.a.createElement("li",{className:n.join(" "),onClick:o},e.children,i.a.createElement("div",{style:{background:e.color,width:"9px",height:"9px","border-radius":" 50%",margin:"5px auto 0px"}}))},ie=function(e){return i.a.createElement("ul",{className:ee.a.SearchFilters},i.a.createElement(ae,{add:e.addFilter,remove:e.removeFilter,active:-1!==e.filters.indexOf("NUS"),color:F[0]},"NUS"),i.a.createElement(ae,{add:e.addFilter,remove:e.removeFilter,active:-1!==e.filters.indexOf("NTU"),color:F[1]},"NTU"),i.a.createElement(ae,{add:e.addFilter,remove:e.removeFilter,active:-1!==e.filters.indexOf("SMU"),color:F[2]},"SMU"),i.a.createElement(ae,{add:e.addFilter,remove:e.removeFilter,active:-1!==e.filters.indexOf("SIT"),color:F[3]},"SIT"),i.a.createElement(ae,{add:e.addFilter,remove:e.removeFilter,active:-1!==e.filters.indexOf("SUTD"),color:F[4]},"SUTD"))},re={NUS:[{degree:"Bachelor of Arts",employment:61.9,mean:3005,median:3e3,group:"NUS - Faculty of Arts & Social Sciences",school:"NUS"},{degree:"Bachelor of Arts (Hons)",employment:66.7,mean:3309,median:3300,group:"NUS - Faculty of Arts & Social Sciences",school:"NUS"},{degree:"Bachelor of Social Science",employment:74.7,mean:3365,median:3300,group:"NUS - Faculty of Arts & Social Sciences",school:"NUS"},{degree:"Bachelor of Dental Surgery",employment:100,mean:4124,median:4050,group:"NUS - Faculty Of Dentistry",school:"NUS"},{degree:"Bachelor of Engineering (Biomedical Engineering)",employment:81.3,mean:3215,median:3200,group:"NUS - Faculty Of Engineering",school:"NUS"},{degree:"Bachelor of Engineering (Chemical Engineering)",employment:81.3,mean:3550,median:3500,group:"NUS - Faculty Of Engineering",school:"NUS"},{degree:"Bachelor of Engineering (Civil Engineering)",employment:90.9,mean:3361,median:3300,group:"NUS - Faculty Of Engineering",school:"NUS"},{degree:"Bachelor of Engineering (Electrical Engineering)",employment:86.5,mean:3529,median:3500,group:"NUS - Faculty Of Engineering",school:"NUS"},{degree:"Bachelor of Engineering (Engineering Science)",employment:64.7,mean:3783,median:3600,group:"NUS - Faculty Of Engineering",school:"NUS"},{degree:"Bachelor of Engineering (Environmental Engineering)",employment:71.2,mean:3425,median:3100,group:"NUS - Faculty Of Engineering",school:"NUS"},{degree:"Bachelor of Engineering (Industrial and Systems Engineering)",employment:89.9,mean:3905,median:3725,group:"NUS - Faculty Of Engineering",school:"NUS"},{degree:"Bachelor of Engineering (Materials Science And Engineering)",employment:86,mean:3269,median:3200,group:"NUS - Faculty Of Engineering",school:"NUS"},{degree:"Bachelor of Laws",employment:92.3,mean:4958,median:5e3,group:"NUS - Faculty of Law",school:"NUS"},{degree:"Bachelor of Applied Science (Hons)",employment:50,mean:3186,median:3075,group:"NUS - Faculty of Science",school:"NUS"},{degree:"Bachelor of Science",employment:54.5,mean:3053,median:3e3,group:"NUS - Faculty of Science",school:"NUS"},{degree:"Bachelor of Science (Hons)",employment:69.3,mean:3340,median:3200,group:"NUS - Faculty of Science",school:"NUS"},{degree:"Bachelor of Science (Pharmacy)",employment:94.5,mean:3473,median:3500,group:"NUS - Faculty of Science",school:"NUS"},{degree:"Bachelor of Business Administration",employment:87.3,mean:3770,median:3400,group:"NUS Business School",school:"NUS"},{degree:"Bachelor of Business Administration (Hons)",employment:93.6,mean:4272,median:3725,group:"NUS Business School",school:"NUS"},{degree:"Bachelor of Business Administration (Accountancy)",employment:94.4,mean:3396,median:3e3,group:"NUS Business School",school:"NUS"},{degree:"Bachelor of Business Administration (Accountancy) (Hons)",employment:100,mean:3689,median:3100,group:"NUS Business School",school:"NUS"},{degree:"Bachelor of Computing (Computer Science)",employment:89.4,mean:4510,median:4200,group:"NUS - School of Computing",school:"NUS"},{degree:"Bachelor of Computing (Information Systems)",employment:91.8,mean:4061,median:4e3,group:"NUS - School of Computing",school:"NUS"},{degree:"Bachelor of Science (Business Analytics)",employment:97.6,mean:4114,median:3810,group:"NUS - School of Computing",school:"NUS"},{degree:"Bachelor of Arts (Architecture)",employment:86.4,mean:4037,median:4e3,group:"NUS - School of Design and Environment",school:"NUS"},{degree:"Bachelor of Arts (Industrial Design)",employment:60,mean:3034,median:2890,group:"NUS - School of Design and Environment",school:"NUS"},{degree:"Bachelor of Science (Project and Facilities Management)",employment:81.7,mean:3105,median:3e3,group:"NUS - School of Design and Environment",school:"NUS"},{degree:"Bachelor of Science (Real Estate)",employment:88.7,mean:3090,median:3e3,group:"NUS - School of Design and Environment",school:"NUS"},{degree:"Bachelor of Medicine And Bachelor Of Surgery",employment:100,mean:4367,median:4500,group:"NUS - Yong Loo Lin School (Medicine)",school:"NUS"},{degree:"Bachelor of Science (Nursing)",employment:97.4,mean:3165,median:3200,group:"NUS - Yong Loo Lin School (Medicine)",school:"NUS"},{degree:"Bachelor of Science (Nursing) (Hons)",employment:89.8,mean:3280,median:3300,group:"NUS - Yong Loo Lin School (Medicine)",school:"NUS"},{degree:"Bachelor of Music",employment:26.7,mean:2298,median:2025,group:"NUS - YST Conservatory Of Music",school:"NUS"},{degree:"Bachelor of Arts with Honours (Yale-NUS)",employment:76.6,mean:3812,median:3500,group:"Yale-NUS College",school:"NUS"},{degree:"Bachelor of Science with Honours (Yale-NUS)",employment:75,mean:4362,median:4083,group:"Yale-NUS College",school:"NUS"},{degree:"Bachelor of Engineering (Computer Engineering)",employment:84.7,mean:4010,median:3600,group:"NUS - Multi-Disciplinary Programme",school:"NUS"},{degree:"Bachelor of Science with Honours",employment:62.3,mean:3297,median:3200,group:"NUS - Multi-Disciplinary Programme",school:"NUS"}],NTU:[{degree:"Bachelor of Accountancy (Hons)",employment:94.5,mean:3121,median:3e3,group:"NTU - College of Business (Nanyang Business School)",school:"NTU"},{degree:"Double Degree in Bachelor of Accountancy (Hons) and Bachelor of Business (Hons)",employment:94.3,mean:3830,median:3500,group:"NTU - College of Business (Nanyang Business School)",school:"NTU"},{degree:"Bachelor of Business (Hons)",employment:80.8,mean:3530,median:3300,group:"NTU - College of Business (Nanyang Business School)",school:"NTU"},{degree:"Double Degree in Bachelor of Business (Hons) and Bachelor of Engineering (Hons) (Computer Science)",employment:95,mean:5036,median:4750,group:"NTU - College of Business (Nanyang Business School)",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Aerospace Engineering)",employment:75,mean:3645,median:3492,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Bioengineering)",employment:65.2,mean:3326,median:3200,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Chemical And Biomolecular Engineering)",employment:75.3,mean:3326,median:3200,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Civil Engineering)",employment:96.9,mean:3373,median:3300,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Computer Engineering)",employment:87.8,mean:3667,median:3600,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Computer Science)",employment:86.7,mean:4078,median:3750,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Electrical & Electronic Engineering)",employment:85,mean:3532,median:3500,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Environmental Engineering)",employment:64.1,mean:3538,median:3475,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Information Engineering & Media)",employment:78.7,mean:3685,median:3677,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Science (Hons) (Maritime Studies)",employment:92.2,mean:3279,median:3200,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Materials Engineering)",employment:75.6,mean:3288,median:3200,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Mechanical Engineering)",employment:74.9,mean:3422,median:3300,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Fine Arts (Hons)",employment:54,mean:2862,median:2800,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Chinese",employment:67.7,mean:3119,median:3300,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Communication Studies (Hons)",employment:62.2,mean:3134,median:3e3,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Economics",employment:75.5,mean:3286,median:3200,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in English",employment:50.8,mean:3042,median:3e3,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in History",employment:68.4,mean:3206,median:3100,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Linguistics And Multilingual Studies",employment:60,mean:3042,median:3e3,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Psychology",employment:59.2,mean:3107,median:3107,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Public Policy And Global Affairs",employment:66.7,mean:3353,median:3300,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Sociology",employment:62.1,mean:3263,median:3200,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Double Degree in Bachelor of Science (Hons) in Biomedical Sciences and Bachelor of Medicine (Chinese Medicine)",employment:80,mean:2722,median:2928,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Biological Sciences",employment:62.6,mean:3177,median:3100,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Chemistry & Biological Chemistry",employment:51.1,mean:3035,median:3e3,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Mathematical Sciences",employment:79.5,mean:3517,median:3400,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Mathematics & Economics",employment:83.1,mean:3504,median:3290,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Physics/Applied Physics",employment:61.8,mean:3367,median:3300,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) (Sport Science & Management)",employment:48.6,mean:3372,median:3285,group:"NTU - Sport Science and Management",school:"NTU"},{degree:"Bachelor of Arts (Hons) (Education)",employment:100,mean:3489,median:3600,group:"National Institute of Education (NIE)",school:"NTU"},{degree:"Bachelor of Science (Hons) (Education)",employment:100,mean:3610,median:3603,group:"National Institute of Education (NIE)",school:"NTU"}],SMU:[{degree:"Accountancy",employment:96.6,mean:3569,median:3e3,group:"SMU - School of Accountancy",school:"SMU"},{degree:"Accountancy (Cum Laude and above)",employment:97.8,mean:4037,median:3200,group:"SMU - School of Accountancy",school:"SMU"},{degree:"Business Management",employment:85.7,mean:3862,median:3475,group:"SMU - School of Business",school:"SMU"},{degree:"Business Management (Cum Laude and above)",employment:92,mean:4364,median:3880,group:"SMU - School of Business",school:"SMU"},{degree:"Economics",employment:82.6,mean:4013,median:3600,group:"SMU - School of Economics",school:"SMU"},{degree:"Economics (Cum Laude and above)",employment:90.5,mean:4591,median:4e3,group:"SMU - School of Economics",school:"SMU"},{degree:"Information Systems Management",employment:91.3,mean:3922,median:3905,group:"SMU - School of Information Systems",school:"SMU"},{degree:"Information Systems Management (Cum Laude and above)",employment:94.1,mean:4211,median:4334,group:"SMU - School of Information Systems",school:"SMU"},{degree:"Social Sciences",employment:78,mean:3344,median:3250,group:"SMU - School of Social Sciences",school:"SMU"},{degree:"Social Sciences (Cum Laude and above)",employment:81.8,mean:3810,median:3600,group:"SMU - School of Social Sciences",school:"SMU"},{degree:"Law",employment:94,mean:4778,median:4500,group:"SMU - School of Social Sciences",school:"SMU"},{degree:"Law (Cum Laude and above)",employment:97.9,mean:5163,median:5450,group:"SMU - School of Social Sciences",school:"SMU"}],SIT:[{degree:"Bachelor of Arts in Game Design",employment:92.3,mean:3040,median:3e3,group:"DigiPen Institute of Technology",school:"SIT"},{degree:"Bachelor of Fine Arts in Digital Arts & Animation",employment:69.2,mean:2859,median:2825,group:"DigiPen Institute of Technology",school:"SIT"},{degree:"Bachelor of Science in Computer Science & Game Design",employment:100,mean:3232,median:3250,group:"DigiPen Institute of Technology",school:"SIT"},{degree:"Bachelor of Science in Computer Science in Real- Time Interactive Simulation",employment:90.6,mean:3898,median:3800,group:"DigiPen Institute of Technology",school:"SIT"},{degree:"Bachelor of Arts with Honours in Communication Design",employment:68.5,mean:2819,median:2600,group:"The Glasgow School of Art",school:"SIT"},{degree:"Bachelor of Arts with Honours in Interior Design",employment:87.2,mean:2818,median:2700,group:"The Glasgow School of Art",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Chemical Engineering",employment:62.1,mean:3061,median:3100,group:"Newcastle University",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Electrical Power Engineering",employment:88.9,mean:3191,median:3200,group:"Newcastle University",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Marine Engineering",employment:88.5,mean:3461,median:3300,group:"Newcastle University",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Mechanical Design & Manufacturing Engineering",employment:85.7,mean:3063,median:3e3,group:"Newcastle University",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Naval Architecture",employment:95.5,mean:3451,median:3300,group:"Newcastle University",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Offshore Engineering",employment:86.7,mean:3792,median:3300,group:"Newcastle University",school:"SIT"},{degree:"Bachelor of Science with Honours in Food & Human Nutrition",employment:79.1,mean:2784,median:2600,group:"Newcastle University",school:"SIT"},{degree:"Bachelor of Science in Chemical Engineering",employment:74.1,mean:3061,median:3e3,group:"Technische Universita\u0308t Mu\u0308nchen",school:"SIT"},{degree:"Bachelor of Science in Electrical Engineering & Information Technology",employment:82.8,mean:3504,median:3175,group:"Technische Universita\u0308t Mu\u0308nchen",school:"SIT"},{degree:"Bachelor of Professional Studies in Culinary Arts Management",employment:54.4,mean:2357,median:2300,group:"The Culinary Institute of America",school:"SIT"},{degree:"Bachelor in Science (Occupational Therapy) ",employment:97.1,mean:3217,median:3250,group:"Singapore Institute of Technology - Trinity College Dublin / Trinity College Dublin",school:"SIT"},{degree:"Bachelor in Science (Physiotherapy)",employment:96.8,mean:3483,median:3350,group:"Singapore Institute of Technology - Trinity College Dublin / Trinity College Dublin",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Aeronautical Engineering",employment:65.6,mean:3367,median:3100,group:"University of Glasgow",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Aerospace Systems",employment:52.5,mean:3207,median:3125,group:"University of Glasgow",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Mechanical Design Engineering",employment:87.9,mean:3608,median:3100,group:"University of Glasgow",school:"SIT"},{degree:"Bachelor of Engineering with Honours in Mechatronics",employment:86.5,mean:3412,median:3050,group:"University of Glasgow",school:"SIT"},{degree:"Bachelor of Science with Honours in Computing Science",employment:85.9,mean:3633,median:3600,group:"University of Glasgow",school:"SIT"},{degree:"Bachelor of Science with Honours in Nursing Practice",employment:96.5,mean:3507,median:3400,group:"University of Manchester",school:"SIT"},{degree:"Bachelor of Arts with Honours in Criminology and Security",employment:69.5,mean:3759,median:3800,group:"University of Liverpool",school:"SIT"},{degree:"Bachelor of Science in Early Childhood Education",employment:92.9,mean:2883,median:2900,group:"Wheelock College",school:"SIT"},{degree:"Bachelor of Accountancy with Honours",employment:92.1,mean:3073,median:3050,group:"Singapore Institute of Technology",school:"SIT"},{degree:" Bachelor of Hospitality Business with Honours",employment:84.2,mean:2713,median:2700,group:"Singapore Institute of Technology",school:"SIT"}],SUTD:[{degree:"Bachelor of Engineering (Engineering Product Development)",employment:87.3,mean:3594,median:3600,group:"SUTD",school:"SUTD"},{degree:"Bachelor of Engineering (Information Systems Technology and Design)",employment:100,mean:4146,median:4e3,group:"SUTD",school:"SUTD"},{degree:"Bachelor of Engineering (Engineering Systems and Design)",employment:85.4,mean:3856,median:3800,group:"SUTD",school:"SUTD"}]},le=[{degree:"Bachelor of Accountancy (Hons)",employment:94.5,mean:3121,median:3e3,group:"NTU - College of Business (Nanyang Business School)",school:"NTU"},{degree:"Double Degree in Bachelor of Accountancy (Hons) and Bachelor of Business (Hons)",employment:94.3,mean:3830,median:3500,group:"NTU - College of Business (Nanyang Business School)",school:"NTU"},{degree:"Bachelor of Business (Hons)",employment:80.8,mean:3530,median:3300,group:"NTU - College of Business (Nanyang Business School)",school:"NTU"},{degree:"Double Degree in Bachelor of Business (Hons) and Bachelor of Engineering (Hons) (Computer Science)",employment:95,mean:5036,median:4750,group:"NTU - College of Business (Nanyang Business School)",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Aerospace Engineering)",employment:75,mean:3645,median:3492,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Bioengineering)",employment:65.2,mean:3326,median:3200,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Chemical And Biomolecular Engineering)",employment:75.3,mean:3326,median:3200,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Civil Engineering)",employment:96.9,mean:3373,median:3300,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Computer Engineering)",employment:87.8,mean:3667,median:3600,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Computer Science)",employment:86.7,mean:4078,median:3750,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Electrical & Electronic Engineering)",employment:85,mean:3532,median:3500,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Environmental Engineering)",employment:64.1,mean:3538,median:3475,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Information Engineering & Media)",employment:78.7,mean:3685,median:3677,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Science (Hons) (Maritime Studies)",employment:92.2,mean:3279,median:3200,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Materials Engineering)",employment:75.6,mean:3288,median:3200,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Engineering (Hons) (Mechanical Engineering)",employment:74.9,mean:3422,median:3300,group:"NTU - College of Engineering",school:"NTU"},{degree:"Bachelor of Fine Arts (Hons)",employment:54,mean:2862,median:2800,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Chinese",employment:67.7,mean:3119,median:3300,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Communication Studies (Hons)",employment:62.2,mean:3134,median:3e3,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Economics",employment:75.5,mean:3286,median:3200,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in English",employment:50.8,mean:3042,median:3e3,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in History",employment:68.4,mean:3206,median:3100,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Linguistics And Multilingual Studies",employment:60,mean:3042,median:3e3,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Psychology",employment:59.2,mean:3107,median:3107,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Public Policy And Global Affairs",employment:66.7,mean:3353,median:3300,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Bachelor of Arts (Hons) in Sociology",employment:62.1,mean:3263,median:3200,group:"NTU - College of Humanities, Arts & Social Sciences",school:"NTU"},{degree:"Double Degree in Bachelor of Science (Hons) in Biomedical Sciences and Bachelor of Medicine (Chinese Medicine)",employment:80,mean:2722,median:2928,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Biological Sciences",employment:62.6,mean:3177,median:3100,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Chemistry & Biological Chemistry",employment:51.1,mean:3035,median:3e3,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Mathematical Sciences",employment:79.5,mean:3517,median:3400,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Mathematics & Economics",employment:83.1,mean:3504,median:3290,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) in Physics/Applied Physics",employment:61.8,mean:3367,median:3300,group:"NTU - College of Sciences",school:"NTU"},{degree:"Bachelor of Science (Hons) (Sport Science & Management)",employment:48.6,mean:3372,median:3285,group:"NTU - Sport Science and Management",school:"NTU"},{degree:"Bachelor of Arts (Hons) (Education)",employment:100,mean:3489,median:3600,group:"National Institute of Education (NIE)",school:"NTU"},{degree:"Bachelor of Science (Hons) (Education)",employment:100,mean:3610,median:3603,group:"National Institute of Education (NIE)",school:"NTU"},{degree:"Accountancy",employment:96.6,mean:3569,median:3e3,group:"SMU - School of Accountancy",school:"SMU"},{degree:"Accountancy (Cum Laude and above)",employment:97.8,mean:4037,median:3200,group:"SMU - School of Accountancy",school:"SMU"},{degree:"Business Management",employment:85.7,mean:3862,median:3475,group:"SMU - School of Business",school:"SMU"},{degree:"Business Management (Cum Laude and above)",employment:92,mean:4364,median:3880,group:"SMU - School of Business",school:"SMU"},{degree:"Economics",employment:82.6,mean:4013,median:3600,group:"SMU - School of Economics",school:"SMU"},{degree:"Economics (Cum Laude and above)",employment:90.5,mean:4591,median:4e3,group:"SMU - School of Economics",school:"SMU"},{degree:"Information Systems Management",employment:91.3,mean:3922,median:3905,group:"SMU - School of Information Systems",school:"SMU"},{degree:"Information Systems Management (Cum Laude and above)",employment:94.1,mean:4211,median:4334,group:"SMU - School of Information Systems",school:"SMU"},{degree:"Social Sciences",employment:78,mean:3344,median:3250,group:"SMU - School of Social Sciences",school:"SMU"},{degree:"Social Sciences (Cum Laude and above)",employment:81.8,mean:3810,median:3600,group:"SMU - School of Social Sciences",school:"SMU"},{degree:"Law",employment:94,mean:4778,median:4500,group:"SMU - School of Social Sciences",school:"SMU"},{degree:"Law (Cum Laude and above)",employment:97.9,mean:5163,median:5450,group:"SMU - School of Social Sciences",school:"SMU"}],te=o(135),ce=o.n(te),me=re,se=function(e){function n(){var e,o;Object(t.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(o=Object(m.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(i)))).state={input:"",filters:["NTU","SMU"],filteredItems:le},o.filterData=function(e,n,o){var a=[];return n.forEach(function(n){a=a.concat(e[n])}),a.filter(function(e){return e.degree.toLowerCase().indexOf(o)>-1})},o.addFilterHandler=function(e){var n=o.state.filters;if(-1===n.indexOf(e)){n.push(e);var a=o.state.input,i=o.filterData(me,n,a);o.setState({filters:n,filteredItems:i})}},o.removeFilterHandler=function(e){var n=o.state.filters;if(-1!==n.indexOf(e)){n.splice(n.indexOf(e),1);var a=o.state.input,i=o.filterData(me,n,a);o.setState({filters:n,filteredItems:i})}},o.textChangedHandler=function(e){var n=e.target.value.toLowerCase(),a=o.state.filters,i=o.filterData(me,a,n);o.setState({input:n,filteredItems:i})},o.keyPressHandler=function(e){"Enter"===e.key&&e.target.blur()},o}return Object(g.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(y,null),i.a.createElement(L,{chartData:this.state.filteredItems}),i.a.createElement(P,null,"Select the one or more schools to view."),i.a.createElement(ie,{addFilter:this.addFilterHandler,removeFilter:this.removeFilterHandler,filters:this.state.filters}),i.a.createElement(P,null,"Use the search box to narrow down the results."),i.a.createElement(q,{changed:function(n){return e.textChangedHandler(n)},keypress:function(n){return e.keyPressHandler(n)}}),i.a.createElement("div",{className:ce.a.ResultsTable},i.a.createElement(G,null),i.a.createElement(X,{items:this.state.filteredItems})))}}]),n}(a.Component),ge=function(e){function n(){return Object(t.a)(this,n),Object(m.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(g.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h,null,i.a.createElement(se,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,n,o){e.exports={ListHeaders:"ListHeaders_ListHeaders__1Sgyh",col:"ListHeaders_col__3Mv0-",subHeading:"ListHeaders_subHeading__2y07S"}},37:function(e,n,o){e.exports={ListItemRow:"ListItem_ListItemRow__3Qlpn",ListItemCol:"ListItem_ListItemCol__3vFgB"}},44:function(e,n,o){e.exports={Tooltip:"CustomTooltipContent_Tooltip__Il6Xr",TooltipHeading:"CustomTooltipContent_TooltipHeading__3w8tR",TooltipText:"CustomTooltipContent_TooltipText__3FIej"}},67:function(e,n,o){e.exports={Banner:"Banner_Banner__sDT22",BannerTitle:"Banner_BannerTitle__7fE8W",BannerSubtitle:"Banner_BannerSubtitle__12gCw"}},69:function(e,n,o){e.exports={SearchContainer:"SearchBar_SearchContainer__3p3hG",SearchBar:"SearchBar_SearchBar__2wYix",SearchBarIcon:"SearchBar_SearchBarIcon__Trsuh"}},70:function(e,n,o){e.exports={SearchFilter:"SearchFilter_SearchFilter__2Xp05",active:"SearchFilter_active__NcMwa"}}},[[136,2,1]]]);
//# sourceMappingURL=main.cf39dc2b.chunk.js.map