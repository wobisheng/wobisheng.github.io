(function(){
	SStatus = true;
	explo_Status = false;
    var stage, textStage, form, input;
    var circles, textPixels, textFormed;
    var offsetX, offsetY, text;
    var colors_list = [['#eeeeee', '#00adb5', '#393e46', '#222831'], ['#6a2c70', '#b83b5e', '#f08a5d', '#f9ed69'], ['#95e1d3', '#eaffd0', '#fce38a', '#f38181'], ['#eaeaea', '#ff2e63', '#252a34', '#08d9d6'], ['#fc5185', '#f5f5f5', '#3fc1c9', '#364f6b'], ['#ffffd2', '#fcbad3', '#aa96da', '#a8d8ea'], ['#71c9ce', '#a6e3e9', '#cbf1f5', '#e3fdfd'], ['#40514e', '#11999e', '#30e3ca', '#e4f9f5'], ['#8785a2', '#f6f6f6', '#ffe2e2', '#ffc7c7'], ['#112d4e', '#3f72af', '#dbe2ef', '#f9f7f7'], ['#abedd8', '#46cdcf', '#3d84a8', '#48466d'], ['#ffde7d', '#f6416c', '#f8f3d4', '#00b8a9'], ['#53354a', '#903749', '#e84545', '#2b2e4a'], ['#61c0bf', '#bbded6', '#fae3d9', '#ffb6b9'], ['#311d3f', '#522546', '#88304e', '#e23e57'], ['#a5dee5', '#e0f9b5', '#fefdca', '#ffcfdf'], ['#14ffec', '#0d7377', '#323232', '#212121'], ['#ffaaa5', '#ffd3b6', '#dcedc1', '#a8e6cf'], ['#cca8e9', '#c3bef0', '#cadefc', '#defcf9'], ['#3e4149', '#444f5a', '#ff9999', '#ffc8c8'], ['#ff165d', '#ff9a00', '#f6f7d7', '#3ec1d3'], ['#355c7d', '#6c5b7b', '#c06c84', '#f67280'], ['#521262', '#6639a6', '#3490de', '#6fe7dd'], ['#ffd460', '#f07b3f', '#ea5455', '#2d4059'], ['#99ddcc', '#f6f6f6', '#ffe2e2', '#bad7df'], ['#edb1f1', '#d59bf6', '#9896f1', '#8ef6e4'], ['#cabbe9', '#ffcef3', '#fdfdfd', '#a1eafb'], ['#c4edde', '#7ac7c4', '#f73859', '#384259'], ['#ff5722', '#eeeeee', '#00adb5', '#303841'], ['#ff8c94', '#ffaaa6', '#ffd3b5', '#dcedc2'], ['#283c63', '#928a97', '#fbe8d3', '#f85f73'], ['#1e2022', '#52616b', '#c9d6df', '#f0f5f9'], ['#fecea8', '#ff847c', '#e84a5f', '#2a363b'], ['#ff7e67', '#fafafa', '#a2d5f2', '#07689f'], ['#e8ffe8', '#a6fff2', '#74f9ff', '#00e0ff'], ['#a56cc1', '#a6acec', '#ace7ef', '#cefff1'], ['#ff9de2', '#8c82fc', '#b693fe', '#7effdb'], ['#f57170', '#f5f5f5', '#10ddc2', '#15b7b9'], ['#625772', '#f9a1bc', '#fefaec', '#a9eee6'], ['#769fcd', '#b9d7ea', '#d6e6f2', '#f7fbfc'], ['#ffaaa5', '#ffd3b6', '#fdffab', '#a8e6cf'], ['#0dceda', '#6ef3d6', '#c6fce5', '#ebfffa'], ['#878ecd', '#b9bbdf', '#dde7f2', '#dff4f3'], ['#f25d9c', '#b61aae', '#590d82', '#0c056d'], ['#d7fbe8', '#9df3c4', '#62d2a2', '#1fab89'], ['#a6d0e4', '#f9ffea', '#ffecda', '#d4a5a5'], ['#fbafaf', '#f2c6b4', '#f3e8cb', '#99e1e5'], ['#fc85ae', '#9e579d', '#574b90', '#303a52'], ['#eeeeee', '#d72323', '#3a4750', '#303841'], ['#dbedf3', '#f73859', '#404b69', '#283149'], ['#c5e3f6', '#fc5c9c', '#fccde2', '#fcefee'], ['#ed8d8d', '#8d6262', '#4d4545', '#393232'], ['#004a7c', '#005691', '#e8f1f5', '#fafafa'], ['#ffc93c', '#ff9a3c', '#ff6f3c', '#155263'], ['#7e6bc4', '#c79ecf', '#d6c8ff', '#fef0ff'], ['#fa4659', '#f0fff3', '#c6f1e7', '#11cbd7'], ['#f5c7f7', '#a393eb', '#5e63b6', '#27296d'], ['#fff5a5', '#ffaa64', '#ff8264', '#ff6464'], ['#537780', '#11d3bc', '#55e9bc', '#fffcca'], ['#7098da', '#6eb6ff', '#90f2ff', '#e0fcff'], ['#625772', '#f38181', '#fefaec', '#a9eee6'], ['#e3e3e3', '#f95959', '#455d7a', '#233142'], ['#c86b85', '#e6a4b4', '#f3d7ca', '#f5eee6'], ['#ffbd39', '#e61c5d', '#930077', '#3a0088'], ['#f76b8a', '#fcfefe', '#eaf6f6', '#66bfbf'], ['#bfcfff', '#c8e7ed', '#ffffc2', '#ffa5a5'], ['#f3f798', '#eab4f8', '#fcc8f8', '#c7f5fe'], ['#d9faff', '#00bbf0', '#005792', '#00204a'], ['#f5f5f5', '#d3d4d8', '#3fbac2', '#4d606e'], ['#6c5b7c', '#c06c84', '#f67280', '#f8b595'], ['#f2f4c3', '#ffdcf5', '#fdc7ff', '#c7f3ff'], ['#aedefc', '#fff6f6', '#ffdfdf', '#fb929e'], ['#7c7575', '#b8b0b0', '#dfd3d3', '#fbf0f0'], ['#e67a7a', '#ffebb7', '#fff4e1', '#9ddcdc'], ['#d2ecf9', '#1891ac', '#1f5f8b', '#253b6e'], ['#f67280', '#c06c84', '#6c5b7b', '#35477d'], ['#8971d0', '#7dace4', '#95e8d7', '#adf7d1'], ['#649dad', '#66c6ba', '#a4e5d9', '#c8f4de'], ['#163172', '#1e56a0', '#d6e4f0', '#f6f6f6'], ['#fbac91', '#fbe1b6', '#7fdfd4', '#a7efe9'], ['#fecea8', '#ff847b', '#e84a5f', '#2a363b'], ['#4a266a', '#7f4a88', '#de95ba', '#ffd9e8'], ['#a7ff83', '#17b978', '#086972', '#071a52'], ['#ff7c38', '#e03e36', '#b80d57', '#700961'], ['#2f9296', '#46b7b9', '#87dfd6', '#dff5f2'], ['#c0ffc2', '#fdffba', '#ffeab6', '#f69d9d'], ['#537791', '#c1c0b9', '#f7f6e7', '#e7e6e1'], ['#8f8787', '#ebcbae', '#f9f9f9', '#a6e4e7'], ['#f2bbbb', '#ed93cb', '#ca82f8', '#a1d9ff'], ['#ba52ed', '#ff99fe', '#a4f6f9', '#e4fffe'], ['#00fff5', '#00adb5', '#393e46', '#222831'], ['#eeeeee', '#4ecca3', '#393e46', '#232931'], ['#1f4e5f', '#79a8a9', '#aacfd0', '#f4f7f7'], ['#355c7d', '#c06c84', '#f67280', '#f8b195'], ['#f8ecfd', '#c264fe', '#a82ffc', '#7a08fa'], ['#80d6ff', '#edf798', '#fab57a', '#f06868'], ['#70a1d7', '#a1de93', '#f7f48b', '#f47c7c'], ['#2eb872', '#a3de83', '#feffe4', '#fa4659'], ['#756c83', '#f38181', '#b9e1dc', '#fbfbfb'], ['#d988bc', '#ffa8b8', '#ffd2a5', '#ffffc1'], ['#427996', '#645c84', '#a2738c', '#eaafaf'], ['#ff8260', '#ff4057', '#900048', '#240041'], ['#34495e', '#5da0a2', '#aacfd0', '#f4f7f7'], ['#29252c', '#33425b', '#d8e9f0', '#f33535'], ['#f19584', '#fea386', '#f6e4c4', '#29c6cd'], ['#f1c40f', '#34495e', '#ecf0f1', '#3498db'], ['#eeeeee', '#00adb5', '#3a4750', '#303841'], ['#ea0599', '#9a0f98', '#6a0572', '#39065a'], ['#ffcee4', '#fb90b7', '#d01257', '#0f1021'], ['#048998', '#3bb4c1', '#e3e3e3', '#f6f5f5'], ['#4797b1', '#c5ecbe', '#f7f3ce', '#ffdede'], ['#403f48', '#596c68', '#95a792', '#e3d9ca'], ['#0245a3', '#8fbaf3', '#bdf1f6', '#f2fcfc'], ['#ffc300', '#ec610a', '#a40a3c', '#6b0848'], ['#ac73ff', '#aca8ff', '#9de5ff', '#d5fdff'], ['#56132a', '#741938', '#c61951', '#f64662'], ['#eafff7', '#afffdf', '#49beb7', '#fc345c'], ['#685454', '#ea8a8a', '#ebd5d5', '#f2f2f2'], ['#f7e9e3', '#ffc0c2', '#6dc9c8', '#0e3150'], ['#00eaff', '#1f8ea3', '#284184', '#020438'], ['#7e80ff', '#ebc6ff', '#fbeeff', '#c7ffff'], ['#f6c7c7', '#fd94b4', '#ff467e', '#f12b6b'], ['#00c9b1', '#005d6c', '#00043c', '#ffa3ac'], ['#264e86', '#0074e4', '#74dbef', '#eff0f4'], ['#1d2786', '#6a65d8', '#ffcdcd', '#ffe6eb'], ['#3d6cb9', '#00d1ff', '#00fff0', '#fafaf6'], ['#fe9797', '#dd5b82', '#913175', '#560764'], ['#34495e', '#22313f', '#8dc6ff', '#e4f1fe'], ['#474744', '#2994b2', '#fffbe0', '#ffb400'], ['#616161', '#8aae92', '#c4e3cb', '#f4f9f4'], ['#163a5f', '#1d566e', '#21aba5', '#45eba5'], ['#a3f7bf', '#29a19c', '#435055', '#27323a'], ['#ffe8d5', '#fdb87d', '#ff8364', '#ff4d4d'], ['#f6fcae', '#d89fff', '#c7f5ff', '#ffabe5'], ['#1a3c40', '#144d53', '#307672', '#e4eddb'], ['#7c73e6', '#c4c1e0', '#ffe9e3', '#fafafa'], ['#f56262', '#fca180', '#ffd480', '#fffe9f'], ['#f8b195', '#f67280', '#c06c84', '#6c567b'], ['#59606d', '#70acb1', '#c6f1e7', '#f0fff3'], ['#454553', '#4aa0d5', '#d8e9f0', '#eb586f'], ['#470031', '#971549', '#cf455c', '#ff9898'], ['#e7e7de', '#008891', '#00587a', '#0f3057'], ['#6e5773', '#d45d79', '#ea9085', '#e9e2d0'], ['#ff89c0', '#e3ffc3', '#6df1cc', '#2fc5cc'], ['#cffdf8', '#65c0ba', '#216583', '#f76262'], ['#95e1d3', '#d6f7ad', '#fce38a', '#f38181'], ['#6892d5', '#79d1c3', '#c9fdd7', '#f8fcfb'], ['#ecf2f9', '#c8d9eb', '#f0d9da', '#f9ecec'], ['#ffd6d6', '#fca7a7', '#fc624d', '#18587a'], ['#8a1253', '#c51350', '#e8751a', '#fda403'], ['#fff8b5', '#b5ff7d', '#52d681', '#00ad7c'], ['#3090a1', '#7bcecc', '#fef8e6', '#bc5148'], ['#8a79af', '#d38cad', '#ffd2a5', '#ffffc1'], ['#dbedf3', '#00818a', '#404b69', '#283149'], ['#fde9c9', '#fcc29a', '#13829b', '#29d2e4'], ['#fcb2bf', '#cf56a1', '#8b2f97', '#511e78'], ['#eeeeee', '#0092ca', '#393e46', '#222831'], ['#3d0240', '#137083', '#b7b7b7', '#fae3e3'], ['#bb5a5a', '#e79e85', '#eaceb4', '#f2e9d0'], ['#ccffec', '#ffdede', '#ffe8cf', '#fdfdc4'], ['#020205', '#e43a19', '#f2f4f7', '#111f4d'], ['#e3eff3', '#cde3eb', '#6e828a', '#143a52'], ['#476269', '#40a798', '#f1f1f1', '#f5e1da'], ['#9efcb4', '#f5fc9e', '#fddd8a', '#fd9191'], ['#3b4a6b', '#22b2da', '#f0d43a', '#f23557'], ['#f60c86', '#fff6a2', '#9feed1', '#11cbd7'], ['#fcd2c2', '#ffbbbb', '#0b3846', '#294a66'], ['#03414d', '#72dfd0', '#a0f6d2', '#e6f8f6'], ['#d7f8f7', '#bee4d2', '#fab2ac', '#eda1c1'], ['#353940', '#3e92a3', '#dfe0d4', '#ff5335'], ['#5a92af', '#86c1d4', '#9cd9de', '#d9f9f4'], ['#e8ffc1', '#9ef5cf', '#51dacf', '#0278ae'], ['#1f4e5f', '#0881a3', '#f4e7d3', '#f9f8ed'], ['#efd510', '#f2910a', '#e94822', '#2c2d34'], ['#04f2d5', '#01a7a3', '#04837b', '#015051'], ['#ffe084', '#ffc057', '#f98b60', '#ea5959'], ['#6c737e', '#7393a7', '#b5cfd8', '#e8ecf1'], ['#141010', '#680747', '#c3195d', '#f70776'], ['#ea5455', '#f6f6f6', '#ffb400', '#2d4059'], ['#e8d5b7', '#f9b248', '#fc3a52', '#0e2431'], ['#ffc4d0', '#f7ddde', '#fbe8e7', '#fcf5ee'], ['#f6f6f6', '#ee2b47', '#2c2e3e', '#34374c'], ['#eeeeee', '#f6c90e', '#3a4750', '#303841'], ['#5c8d89', '#74b49b', '#a7d7c5', '#d3f6d1'], ['#ff5733', '#c70039', '#900c3f', '#581845'], ['#fde9c9', '#ea5455', '#2d4059', '#343434'], ['#757a79', '#9ba6a5', '#aeccc6', '#bbe9db'], ['#512e67', '#c54c82', '#ff6699', '#fafafa'], ['#1a0841', '#4f9da6', '#ffad5a', '#ff5959'], ['#f7f7f7', '#93deff', '#606470', '#323643'], ['#ffffdf', '#3a718c', '#5ea3a6', '#f0bebe'], ['#ffbbe1', '#fc7fb6', '#dd356e', '#b80257'], ['#476268', '#40a798', '#f1f1f1', '#f5e1da'], ['#ff5126', '#fcedda', '#b6d7de', '#daebee'], ['#fbd0f5', '#f7f680', '#94f6f2', '#d7aef3'], ['#0f4137', '#12776f', '#f9c7cf', '#e7f5f2'], ['#f6318c', '#fff2be', '#a0eecc', '#36d1c4'], ['#ff8364', '#ffb677', '#ffd98e', '#6bd5e1'], ['#ebf7fd', '#a5def1', '#36506c', '#233142'], ['#f2855e', '#d7eef2', '#f6f6e9', '#194769'], ['#2e3a87', '#1972a4', '#2cc4cb', '#73f7dd'], ['#f6f6f6', '#fc3c3c', '#0f4471', '#083358'], ['#fc5185', '#fce38a', '#3fc1c9', '#364f6b'], ['#b30753', '#e41655', '#280f34', '#bff4ed'], ['#919190', '#c4eada', '#fcf3ca', '#ef7b7b'], ['#ffacac', '#e45a84', '#583c87', '#3e1e68'], ['#f05941', '#be3144', '#872341', '#2f1b41'], ['#ececda', '#ff304f', '#0e2f56', '#118df0'], ['#ffedb2', '#ffbf87', '#ff9867', '#ff4545'], ['#555273', '#65799b', '#b6d5e1', '#e2eff1'], ['#233b6e', '#415f9d', '#d3d6db', '#eff0f4'], ['#4a4a4a', '#ffcd38', '#ffdd67', '#f3f3f3'], ['#27253d', '#326765', '#7da87b', '#f5f5c6'], ['#596e79', '#c7b198', '#dfd3c3', '#f0ece2'], ['#6ef7c8', '#5cc1b3', '#757882', '#ff6473'], ['#ffd8d8', '#e99b9b', '#50595c', '#302939'], ['#4ba2ac', '#50c9ba', '#9ee6cf', '#f0eec9'], ['#283e56', '#1989ac', '#fef4e8', '#970747'], ['#f1bbd5', '#a12559', '#5f1854', '#3b0944'], ['#957dad', '#d291bc', '#fec8d8', '#ffdfd3'], ['#52575d', '#41444b', '#dfd8c8', '#cabfab'], ['#ffcab0', '#ffebbb', '#fdffcd', '#e0ffcd'], ['#ffe98a', '#c84771', '#61105e', '#280b45'], ['#5c2626', '#b74242', '#ea7362', '#ffd6b6'], ['#a6aa9c', '#f7d3ba', '#e6e7e5', '#f5efe3'], ['#48466d', '#0081c6', '#46cdcf', '#abedd8'], ['#ffbe00', '#e6e6d4', '#1c819e', '#005874'], ['#eeeeee', '#fd7014', '#393e46', '#222831'], ['#3f4b83', '#41a4c3', '#58d5d3', '#f8d5f0'], ['#ffaded', '#c768ff', '#7045ff', '#83ffe1'], ['#be3144', '#303841', '#3a4750', '#d3d6db'], ['#fd5f00', '#f6f6e9', '#005792', '#13334c'], ['#122d42', '#3e6b89', '#3dd2cc', '#cbf9da'], ['#ea4961', '#f5827d', '#fcceaa', '#9bb899'], ['#6730ec', '#7984ee', '#a9d2ff', '#d2f6fc'], ['#eae7e7', '#f9f8eb', '#76b39d', '#155e63'], ['#f8b500', '#5c636e', '#393e46', '#f7f7f7'], ['#623448', '#973961', '#d62b70', '#ff006c'], ['#0f0766', '#59057b', '#ab0e86', '#e01171'], ['#bdc3c7', '#ecf0f1', '#34495e', '#2c3e50'], ['#5782bb', '#64d7d6', '#fffeec', '#c4aff0'], ['#f9f9f9', '#ff7a8a', '#113a5d', '#062743'], ['#fff8d2', '#fffbf3', '#ffd7e9', '#eb89b5'], ['#2c3e50', '#2980b9', '#33cccc', '#ecf0f1'], ['#1d242b', '#0077c0', '#c7eeff', '#fafafa'], ['#0d3446', '#176d81', '#71adb5', '#d8dfe2'], ['#fd367e', '#932b77', '#4e1184', '#0e1555'], ['#5e616a', '#e8aa8c', '#e2dcd5', '#f9f3e6'], ['#ec625f', '#313131', '#414141', '#525252'], ['#21e6c1', '#278ea5', '#1f4287', '#071e3d'], ['#e14594', '#7045af', '#2b3595', '#182952'], ['#f9c4aa', '#fee4a6', '#d2e1c8', '#f7f4e3'], ['#e9b5d2', '#951556', '#561050', '#35013f'], ['#3b577d', '#44679f', '#c0d9e5', '#ddf5f7'], ['#f5eded', '#d72323', '#3e3636', '#000000'], ['#390050', '#5a5d9d', '#6bc5d2', '#e1f5f2'], ['#f3ffb9', '#a6ed8e', '#1aa59a', '#1b5a7a'], ['#ff0592', '#fc5bb6', '#ffbee3', '#fff6fb'], ['#ff7844', '#a64942', '#53354a', '#1b1f3a'], ['#fa7f7f', '#f8fba2', '#a0e4b0', '#c2fcd9'], ['#aaffc7', '#5fcc9c', '#215b63', '#232855'], ['#94f3e4', '#37aa9c', '#333f44', '#1a1a1b'], ['#ffb6ff', '#db97ff', '#a100ff', '#9ffbfb'], ['#ac005d', '#f85959', '#ff9f68', '#feff89'], ['#facf5a', '#f95959', '#455d7a', '#233142'], ['#6356e5', '#55b3f3', '#90eee1', '#f3f6f6'], ['#ff7070', '#965f8a', '#4f5e7f', '#4ac6b7'], ['#203562', '#3e588f', '#c0c5cd', '#e3e8f8'], ['#8c54a1', '#aea1ea', '#b2ebf9', '#fafbd4'], ['#ffd6a4', '#fde9df', '#fffdfb', '#0881a3'], ['#fdffe7', '#c9fdd7', '#99f0ca', '#8c7676'], ['#e8ffc1', '#a5ecd7', '#51adcf', '#0278ae'], ['#83b271', '#abcb89', '#d2ea9b', '#e7f0d2'], ['#0de2ea', '#0f81c7', '#06648c', '#015668'], ['#ff8ba0', '#e41f7b', '#86003c', '#000000'], ['#77abb7', '#476d7c', '#254b62', '#1d3e53'], ['#f4fa9c', '#f469a9', '#ba53de', '#88bef5'], ['#dbedf3', '#da0463', '#404b69', '#283149'], ['#264e86', '#5e88fc', '#74dbef', '#afffff'], ['#65c6c4', '#408ab4', '#34699a', '#113f67'], ['#b8dff0', '#7971ea', '#3e4e88', '#1a2c5b'], ['#eb55bf', '#b292ea', '#8bdbf5', '#f1ffd9'], ['#494949', '#fffdf6', '#ece8d9', '#faf6e9'], ['#fbffb1', '#ffccfc', '#ffa8ec', '#eb76ff'], ['#2c2c2c', '#ff5f5f', '#83ffe6', '#fcfcfc'], ['#40514e', '#11999e', '#30e3ca', '#f3f6f6'], ['#226b80', '#35b0ab', '#c5f0a4', '#faffb8'], ['#ff4273', '#ff9d76', '#fffde1', '#1fffff'], ['#97ecc5', '#00dbe7', '#01aac1', '#00649f'], ['#fbb901', '#e62a76', '#774898', '#00a8b5'], ['#fff1bc', '#6a9c78', '#c4e3cb', '#f9f8ed'], ['#6789ba', '#7ec0e4', '#f02a71', '#14103b'], ['#41228e', '#7b3b8c', '#a94caf', '#f54ea2'], ['#4f323b', '#6e5773', '#ea9085', '#e9e2d0'], ['#1e6262', '#2d767f', '#b4f1f1', '#ecfffb'], ['#ffcebb', '#de88a5', '#655989', '#7a9eaf'], ['#52524e', '#9a9b94', '#d4d6c8', '#e9e9e5'], ['#ffcdcd', '#ffe6eb', '#005792', '#d1f4fa'], ['#fbead1', '#f5d9d9', '#fceaea', '#5ba19b'], ['#efecec', '#62929a', '#5c5757', '#363434'], ['#fc5185', '#364f6b', '#43dde6', '#f0f0f0'], ['#346473', '#25a55f', '#9bdf46', '#e9f679'], ['#8ff5d2', '#fcffc9', '#faf885', '#f79486'], ['#f8d99b', '#f8a79b', '#e45171', '#002c6a'], ['#2e383f', '#07617d', '#ececeb', '#f9a828'], ['#f5c8bd', '#ffe3b0', '#f5ffcb', '#a9eca2'], ['#2552ac', '#597fca', '#5ac8d8', '#f1f4f6'], ['#630a10', '#911f27', '#f7d098', '#fcf0c8'], ['#295e6a', '#dfeff0', '#f6f6f6', '#c2faf1'], ['#fecea8', '#ff847c', '#f03861', '#45171d'], ['#ff7f50', '#404969', '#bde4f4', '#e0fcff'], ['#ffe4b3', '#9dd3cc', '#fa8383', '#ca3e6b'], ['#ede862', '#fa9856', '#f27370', '#22559c'], ['#fdf6f6', '#a5e9e1', '#388186', '#2e2b2b'], ['#3532a7', '#646ecb', '#b793e6', '#eae7ed'], ['#543a3a', '#c2cfd8', '#e1eeff', '#fafafa'], ['#38c6bd', '#2fe1d6', '#97ffcf', '#fffb97'], ['#e5a5ff', '#7b6cf6', '#5432d3', '#241e92'], ['#3f7b70', '#265a5c', '#113c4a', '#dddddd'], ['#ceddef', '#5893d4', '#1f3c88', '#070d59'], ['#127780', '#068b80', '#0ea47a', '#15eda3'], ['#7a57d1', '#4fc1e9', '#5be7c4', '#f5f7fa'], ['#ffa06f', '#ffd6a0', '#acbd86', '#28544b'], ['#393939', '#ff7f5b', '#d2ebcd', '#fffcef'], ['#7fffd6', '#3ad3cd', '#0a3442', '#104455'], ['#132238', '#364e68', '#98ccd3', '#ebf0f6'], ['#eeeeee', '#7aa5d2', '#47555e', '#303841'], ['#2a363b', '#eb4a5f', '#ff847c', '#feceab'], ['#33030d', '#5a082d', '#9d0b28', '#ff004d'], ['#fff1c5', '#c38b8b', '#b0757c', '#9b5d73'], ['#fd5959', '#f0b775', '#fffdc1', '#2e94b9'], ['#555151', '#57a99a', '#76dbd1', '#ecf4f3'], ['#1d97c1', '#53c7f0', '#87e0ff', '#ffffe3'], ['#812d58', '#ba6476', '#f0a28e', '#f5d7a1'], ['#fea096', '#f25292', '#59569d', '#eeeeee'], ['#f2f2f0', '#11bfae', '#456173', '#1b3c59'], ['#3a0077', '#8983f3', '#a5f2e7', '#fffcea'], ['#520556', '#8b104e', '#ca431d', '#ff9900'], ['#132f2b', '#196b69', '#28cc9e', '#ddfee4'], ['#ff8b8b', '#ff5151', '#0f4392', '#000249'], ['#1bb5ec', '#4df4ff', '#f7fed4', '#ff5ab0'], ['#f5ebeb', '#3ab1c8', '#2772db', '#070f4e'], ['#8d6ec8', '#88a6e5', '#a6dfde', '#e4f5e5'], ['#2a2438', '#352f44', '#5c5470', '#dbd8e3'], ['#835af1', '#7fa6ee', '#6fe7db', '#b8f7d4'], ['#eeeeee', '#ff5722', '#393e46', '#222831'], ['#466c95', '#5dae8b', '#f6f49d', '#ff7676'], ['#eeeeee', '#ff5722', '#2d4059', '#222831'], ['#44d9e6', '#3dc4d0', '#393c83', '#2a2b5f'], ['#fdfdcb', '#f4aeba', '#ec729c', '#c54c82'], ['#fcd78e', '#f9f296', '#41eecb', '#20decb'], ['#7e6752', '#61b292', '#aed09e', '#f4eec0'], ['#5c715e', '#b6cdbd', '#ddeedf', '#f2f9f1'], ['#8ea1f0', '#82c7eb', '#a5f0e4', '#f5fac8'], ['#f5cd6d', '#f7e590', '#dafdff', '#b9f9ff'], ['#bcdbdf', '#40a8c4', '#235784', '#f7aa00'], ['#ff3757', '#ff715a', '#ffa974', '#ffde74'], ['#a6e3e9', '#cbf1f5', '#defcfc', '#ffe6eb'], ['#6e60a0', '#4e90a4', '#3ec8ac', '#83e4b5'], ['#99cda9', '#d1e9d2', '#e5f4e7', '#f1fdf3'], ['#ffff9d', '#ffb480', '#f18a9b', '#a26ea1'], ['#ffded5', '#acbdc5', '#52686a', '#314a52'], ['#35d0ba', '#fefed5', '#ffcd3c', '#ff9234'], ['#ffe869', '#fffbcb', '#ed5485', '#57d1c9'], ['#7d7d7d', '#c5c5c5', '#fed9ca', '#ffefe0'], ['#2e383f', '#07617d', '#f9a828', '#ececeb'], ['#ef255f', '#fccf4d', '#49beb7', '#085f63'], ['#e8d3ff', '#c6cfff', '#deecff', '#f3f8ff'], ['#494953', '#6a7efc', '#edf2f6', '#ff5656'], ['#3c3c3c', '#11999e', '#6decb9', '#f4f4f4'], ['#e23e57', '#555273', '#65799b', '#e2eff1'], ['#2b2024', '#a80038', '#fd0054', '#fbf9fa'], ['#e0e7e9', '#a3c6c4', '#6c7a89', '#354649'], ['#880e4f', '#ad1457', '#f06292', '#f48fb1'], ['#1e1548', '#ff2e4c', '#fcd77f', '#2e99b0'], ['#fdc57b', '#fbf2d5', '#7fa99b', '#394a51'], ['#430f58', '#6643b5', '#8594e4', '#d5def5'], ['#f9f9f9', '#c4ffdd', '#113a5d', '#062743'], ['#00ffcc', '#0cca98', '#5e366a', '#331940'], ['#4ef037', '#128494', '#00b7c2', '#ecfeff'], ['#305973', '#ef7e56', '#ded5c4', '#f9f9f9'], ['#6088bb', '#12cc94', '#9ef4e6', '#f1f6f5'], ['#f5edf7', '#bb99cd', '#643579', '#3d1860'], ['#f2f2b0', '#eec2c2', '#d7acd4', '#bae5d5'], ['#084a83', '#539ddb', '#c6e5f3', '#ffffe7'], ['#583131', '#fc6e5e', '#e3f3f7', '#b0dedb'], ['#1a3263', '#f5564e', '#fab95b', '#e8e2db'], ['#7874f2', '#8e98f5', '#b1cbfa', '#dfe2fe'], ['#c9f0d6', '#f2ffdf', '#ffec85', '#ffca61'], ['#a6e3e9', '#cbf1f5', '#defcfc', '#ffe6eb'], ['#5c8d89', '#74b49b', '#a7d7c5', '#f4f9f4'], ['#fecea8', '#ff847c', '#e84a5f', '#45171d'], ['#ff6c00', '#a0204c', '#23103a', '#282d4f'], ['#488b8f', '#5ea3a3', '#add2c9', '#faf9f9'], ['#ffb997', '#f67e7d', '#843b62', '#0b032d'], ['#f96b85', '#ffd478', '#fffd88', '#b2e672'], ['#36622b', '#729d39', '#c6e377', '#fbfad3'], ['#d8d7c3', '#7db9b3', '#166678', '#0e2e3b'], ['#004a7c', '#005691', '#cdcdcd', '#f2f2f2'], ['#fce4b0', '#eaa3fc', '#f8b3eb', '#faa9e0'], ['#01352c', '#61b390', '#bad8b6', '#e1eacd'], ['#393737', '#4d6de3', '#c7eeff', '#f1fcfd'], ['#fb9a40', '#fbd341', '#f1ffab', '#a3f3eb'], ['#9ff9c1', '#00f3e4', '#00bebe', '#006c9a'], ['#261d1d', '#aa236d', '#f21368', '#f49393'], ['#fdb44b', '#00bbf0', '#005792', '#00204a'], ['#a3f7bf', '#00adb5', '#5d5d5d', '#423737'], ['#415865', '#7a9eb1', '#ffe1b6', '#f9f8eb'], ['#363540', '#505458', '#e4dcef', '#ee0e51'], ['#0c4b8e', '#189bfa', '#5acfd6', '#d2fafb'], ['#ffd2bb', '#ff8b6a', '#df0054', '#480032'], ['#f3f3f3', '#ffdd7e', '#23b1a5', '#e95280'], ['#0d1b4c', '#3f6699', '#78c2c3', '#f3ecc8'], ['#c2dbc1', '#f6f6e3', '#df6a6a', '#6c5070'], ['#4d3664', '#bab5f6', '#cfcbf1', '#e1ffcf'], ['#f2f2f2', '#f96d00', '#393e46', '#222831'], ['#557669', '#669b7c', '#ebebeb', '#f2d1a8'], ['#d7eaea', '#acdbdf', '#9692af', '#69779b'], ['#ffe981', '#65daf7', '#75c2f6', '#448ef6'], ['#e2ded3', '#857671', '#4e413b', '#ff6d24'], ['#f3ecc8', '#f73859', '#283149', '#404b69'], ['#7cbd1e', '#bceb3c', '#f1f864', '#fcf9f9'], ['#f9fcc9', '#e889e5', '#d17ae5', '#baf5f0'], ['#edf9fc', '#d1f4fa', '#53cde2', '#005792'], ['#446878', '#13445a', '#fef4e8', '#970747'], ['#d86eff', '#ff8ab4', '#ffd6a6', '#fbffe0'], ['#8c7676', '#fdffe7', '#c9fdd7', '#99f0ca'], ['#ff5722', '#edebca', '#faf9f0', '#121435'], ['#4993fa', '#9dc6ff', '#a0e4f1', '#f1fafb'], ['#e1f6f4', '#7db9b3', '#166678', '#2e3837'], ['#d7c1e0', '#876a96', '#584f84', '#38486f'], ['#272e4f', '#2c365d', '#ff5e3a', '#f2f2f0'], ['#4a4de7', '#7ea6f4', '#a0e4f1', '#f1fafb'], ['#00334e', '#145374', '#5588a3', '#e8e8e8'], ['#efdfbf', '#ffc0d0', '#ffe0e0', '#fffafa'], ['#ffebd3', '#264e70', '#679186', '#ffb4ac'], ['#393e46', '#00adb5', '#ece8d9', '#f8b500'], ['#eeeeee', '#ea9215', '#3a4750', '#303841'], ['#292725', '#c40018', '#e9290f', '#ff6107'], ['#fffcbf', '#1fdedb', '#317ae1', '#1333a6'], ['#ffe2ff', '#efb1ff', '#742dd2', '#481380'], ['#113f67', '#226597', '#87c0cd', '#f3f9fb'], ['#89c4ff', '#fffa62', '#ffcf7f', '#ff9090'], ['#ffb383', '#ff9171', '#ec185d', '#bb2253'], ['#5c8d89', '#74b49b', '#a7d7c5', '#f9f8eb'], ['#f4eeee', '#9ef5cf', '#51dacf', '#0c4762'], ['#fef8dd', '#f6dec4', '#aa3763', '#300532'], ['#fd6378', '#f9b8be', '#50666b', '#2e3b3e'], ['#fed8a7', '#07a4b5', '#c9eff9', '#f9fcfd'], ['#b1bed5', '#bfd8d5', '#dfdfdf', '#f4f3f3'], ['#1f4e5f', '#4d727e', '#79a8a9', '#f4f7f7'], ['#f6e9e9', '#e16428', '#272121', '#363333'], ['#301781', '#615dec', '#76e2f4', '#f4f4ec'], ['#f48db4', '#c9356c', '#ff347f', '#fafafa'], ['#555574', '#3a3a59', '#ef3f61', '#db3b61'], ['#1e549f', '#2e79ba', '#5fc9f3', '#081f37'], ['#ffd7f1', '#d87ca1', '#b94e8a', '#7d156d'], ['#ea4c4c', '#f1c550', '#fff9e0', '#a1c45a'], ['#014955', '#1687a7', '#e4d1d3', '#dd0a35'], ['#c3b4d2', '#87a8d0', '#b9ceeb', '#deecfc'], ['#fff200', '#f5f5f5', '#d6e6f2', '#303481'], ['#ffd00c', '#fc5050', '#d1e9ea', '#415f77'], ['#34222e', '#e2434b', '#f9bf8f', '#fee9d7'], ['#434343', '#f7c873', '#faebcd', '#f8f8f8'], ['#febe7e', '#ec7263', '#a75265', '#57385c'], ['#98ded3', '#f0e3c4', '#eccfd1', '#de5b7b'], ['#b6fff9', '#273952', '#38556a', '#4c6983'], ['#fde3f0', '#f6a9ce', '#9e3668', '#691a40'], ['#f59292', '#ece8e5', '#838ed9', '#657dc4'], ['#060608', '#2470a0', '#a696c8', '#fad3cf'], ['#543e5c', '#cca2e1', '#ffc2e9', '#fff0f8'], ['#ff5d6e', '#2eb872', '#a3de83', '#feffea'], ['#fcdc74', '#91ceff', '#0060ca', '#090089'], ['#dbf094', '#6ce6dd', '#6acafc', '#8e9fe6'], ['#f59d2a', '#ee7738', '#2c3d4f', '#34495d'], ['#f7b236', '#e7455f', '#d80e70', '#5628b4'], ['#f9c535', '#e04462', '#334854', '#efecea'], ['#fffa9d', '#41c5d3', '#09a8fa', '#626eef'], ['#891180', '#cb22d7', '#eea1eb', '#fff6f6'], ['#f2f2f2', '#f96d00', '#5c636e', '#393e46'], ['#4b586e', '#43405d', '#574e6d', '#dddddd'], ['#feff89', '#ff9f68', '#f85959', '#7c203a'], ['#001f52', '#a10054', '#ff8d68', '#ffecba'], ['#1abb9c', '#5f1854', '#3b0944', '#f7f7f7'], ['#346357', '#1dad9b', '#9bf4d5', '#fcffc1'], ['#f3f3f3', '#303841', '#3a4750', '#2185d5'], ['#60316e', '#4b6289', '#29a19c', '#a3f7bf'], ['#900d0d', '#cf1b1b', '#fd2e2e', '#fffbcc'], ['#351f39', '#726a95', '#a0c1b8', '#f4e8c1'], ['#291f71', '#c82586', '#4eeaf6', '#f7f7f8'], ['#fde8cb', '#ff9797', '#b72a67', '#360982'], ['#9870fc', '#add1fc', '#b7f5de', '#dffcb5'], ['#bdbdd7', '#8787a3', '#46466e', '#dd105e'], ['#f67280', '#c06c84', '#6c5b7b', '#35477d'], ['#4756ca', '#3186b2', '#0fc9e7', '#fcfcfc'], ['#ffd700', '#115173', '#053f5e', '#022c43'], ['#3dc7be', '#364857', '#334252', '#f75940'], ['#373331', '#fff3e1', '#29cdb5', '#9bf4d5'], ['#810075', '#c238b5', '#e1addc', '#fff5db'], ['#cc99f9', '#dec8ed', '#f5fac7', '#89f8ce'], ['#a7d129', '#616f39', '#3e432e', '#000000'], ['#daf4f5', '#c4dce0', '#abcecf', '#80a3a2'], ['#7bc7fa', '#76e3ff', '#fbff64', '#ff8fe5'], ['#ffebeb', '#ff8585', '#ff5757', '#ff007b'], ['#84c69b', '#2f8886', '#28475c', '#1a2f4b'], ['#ff5c5c', '#ffc77f', '#ffe5b9', '#ffbdd4'], ['#f6ca97', '#fb9696', '#ea2ba2', '#be0eaa'], ['#ffff8f', '#ec9e69', '#d56073', '#7a4579'], ['#f0fbff', '#acdcee', '#475053', '#2e94b9'], ['#f7e9e3', '#ffc0c2', '#23a393', '#20716a'], ['#f0efe2', '#e3e2c3', '#5fbdb0', '#3c9099'], ['#fce38a', '#02c39a', '#028090', '#003459'], ['#f18c8e', '#f0b7a4', '#f1d1b5', '#305f72'], ['#ffcccc', '#fb7777', '#ff0000', '#05004e'], ['#12d3cf', '#67eaca', '#b0f4e6', '#fcf9ec'], ['#fcffc8', '#d5fffb', '#7cdfff', '#e9007f'], ['#272637', '#474168', '#626f92', '#f9c4ac'], ['#539092', '#8bcfcc', '#aee8e6', '#f5fac8'], ['#d7fbf6', '#48e0e4', '#e40475', '#0e0220'], ['#0f0a3c', '#07456f', '#009f9d', '#cdffeb']];
	var colors = colors_list[Math.floor(Math.random() * colors_list.length)]
    var date = Math.round(new Date());
    date = ((date/1000)-1575561600)/(24*3600);
	var r= 6 + Math.random()*10;
	function print_color()
	{
		console.log(colors)
	}
    function init() {
        initStages();
        initText();
        initCircles();
        animate();
    }
	
    // Init Canvas
    function initStages() {
        offsetX = (window.innerWidth-600)/2;
        offsetY = (window.innerHeight-200)/2;
        textStage = new createjs.Stage("text");
        textStage.canvas.width = 900;
        textStage.canvas.height = 300;

        stage = new createjs.Stage("stage");
        stage.canvas.width = window.innerWidth;
        stage.canvas.height = window.innerHeight;
    }


    function initText() {
        text = new createjs.Text("t", "120px 'Source Sans Pro'", "#eee");
        text.textAlign = 'center';
        text.x = 500;
    }

    function initCircles() {
        circles = [];
        for(var i=0; i<1000; i++) {
            var circle = new createjs.Shape();
            var x = window.innerWidth*Math.random();
            var y = window.innerHeight*Math.random();
            var color = colors[Math.floor(i%colors.length)];
            var alpha = 0.2 + Math.random()*1;
            circle.alpha = alpha;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);
        }
    }


    // animating circles
    function animate() {
        stage.update();
        requestAnimationFrame(animate);
    }

    function tweenCircle(c, dir) {
        if(c.tween) c.tween.kill();
        if(dir == 'in') {
            c.tween = TweenLite.to(c, 0.8, {x: c.originX, y: c.originY, ease:Quad.easeInOut, alpha: 1, radius: 8, scaleX: 0.4, scaleY: 0.4, onComplete: function() {
				if(SStatus){
					c.movement = 'jiggle';
				}
				else{
					c.movement = 'float';
				}
                tweenCircle(c);
            }});
        } else if(dir == 'out') {
            c.tween = TweenLite.to(c, 0.8, {x: window.innerWidth*Math.random(), y: window.innerHeight*Math.random(), ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5, scaleX: 0.5, scaleY: 0.5, onComplete: function() {
                c.movement = 'float';
                tweenCircle(c);
            }});
        } else {
            if(c.movement == 'float') {
				if(SStatus){
					c.tween = TweenLite.to(c, 5 + Math.random()*3.5, {x: c.x + -100 + Math.random()*200, y: c.y + -100 + Math.random()*200, ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
				}
				else{
					c.tween = TweenLite.to(c, 1 + Math.random()*3.5, {x: c.x +100+ Math.random()*200, y: c.y + -100 + Math.random()*200, ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
				}
            } else {
                c.tween = TweenLite.to(c, 0.05, {x: c.originX + Math.random()*2, y: c.originY + Math.random()*2, ease:Quad.easeInOut,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            }
        }
    }

    function formText() {
		if (explo_Status){
			for(var i=textPixels.length , l=circles.length; i<l; i++) {
				tweenCircle(circles[i], 'out');
			}
		}
        for(var i= 0, l=textPixels.length; i<l; i++) {
            circles[i].originX = offsetX + textPixels[i].x;
            circles[i].originY = offsetY + textPixels[i].y;
            tweenCircle(circles[i], 'in');
        }
		
        textFormed = true;
        if(textPixels.length < circles.length) {
            for(var j = textPixels.length; j<circles.length-textPixels.length/2; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.4, {alpha: 0.1});
            }
        }
    }

    function explode() {
        if(textPixels.length < circles.length) {
            for(var j = textPixels.length; j<circles.length; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.5, {alpha: 1});
            }
        }
    }
    function createText(t) {
        var fontSize = 860/(t.length);
        if (fontSize > 160) fontSize = 160;
        text.text = t;
        text.font = "900 "+fontSize+"px 'Source Sans Pro'";
        text.textAlign = 'center';
        text.x = 300;
        text.y = (172-fontSize)/2;
        textStage.addChild(text);
        textStage.update();

        var ctx = document.getElementById('text').getContext('2d');
        var pix = ctx.getImageData(0,0,600,200).data;
        textPixels = [];
        for (var i = pix.length; i >= 0; i -= 4) {
            if (pix[i] != 0) {
                var x = (i / 4) % 600;
                var y = Math.floor(Math.floor(i/600)/4);

                if((x && x%8 == 0) && (y && y%8 == 0)) textPixels.push({x: x, y: y});
            }
        }

        formText();

    }


    window.onload = function() { 
	init();
	createText("Hola");
	setTimeout(function (){
		createText("MY...");},2000);
	setTimeout(function (){
		createText("Little");},4500);
	setTimeout(function (){
		explo_Status = true;
		createText("Princess");},7000);
	setTimeout(function (){
		createText("Time");},9000);
	setTimeout(function (){
		createText("Has");},10500);
	setTimeout(function (){
		createText("Passed");},12000);
	setTimeout(function (){
		createText(parseInt(date/1000).toString(10));},13500);
	setTimeout(function (){
		explo_Status = false;
		createText(parseInt(date/100).toString(10));},14500);
	setTimeout(function (){
		createText(parseInt(date/10).toString(10));},15500);
	setTimeout(function (){
		createText(parseInt(date).toString(10));},16500);
	setTimeout(function (){
		createText(parseInt(date).toString(10)+'days');},17500);
	setTimeout(function (){
		explo_Status = false;
		createText("偲&明");},19500);
	setTimeout(function (){
		SStatus = false;
		createText("偲&明");},20500);
	};
})();