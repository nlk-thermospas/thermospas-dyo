import Ember from 'ember';
/* global fabric */
// No import for Fabric.js, it's a global called `fabric`

var HotTubCanvas = Ember.Component.extend({
  tagName: 'div',
  width: 840 , // this is based on current hot tub images
  height: 648, // this is based on current hot tub images
  attributeBindings: ['width','height'],
  initCanvas: function() {
    var canvas = this.__canvas = new fabric.Canvas('hot-tub-canvas');
    //var backgroundImageUrl = 'test';
    this.set('canvas', canvas);
    this.draw();
  }.on('didInsertElement'),
  // only observe one image url so that the hot tub does not get rendered twice
  draw: function() {
    var canvas = this.get('canvas');

    // wanna clear out the canvas
    canvas.clear().renderAll();

    canvas.setBackgroundColor('#f1f1f2', canvas.renderAll.bind(canvas));

    var cabinetImageUrl = this.get('cabinetImageUrl');
    var shellImageUrl = this.get('shellImageUrl');
    //var backgroundImageUrl = this.get('backgroundImageUrl');
    var hasBackground = true;

    var xLocation = 652;

    fabric.Image.fromURL('/assets/images/logo-blue-solid.png', function(img) {
      var logoImg = img.set({ left: 20, top: 600, angle: 0 }).scale(0.5);
      logoImg.selectable = false;
      canvas.add(logoImg);
      canvas.bringToFront(logoImg);
    });

    function options(top, fontSize, color) {
      return {
        left: xLocation+40,
        top: top,
        fontFamily: 'Open Sans, sans-serif',
        fontSize: fontSize,
        fontWeight: 400,
        selectable: false,
        hasBorders: false,
        fill: color
      };
    }

    var _this = this;

    fabric.Image.fromURL('/assets/images/canvas-my-hot-tub.png', function(img) {
      var mhtImg = img.set({ left: 670, top: 60, angle: 0 }).scale(1);
      mhtImg.selectable = false;
      canvas.add(mhtImg);
      canvas.sendToBack(mhtImg);

      var title = new fabric.Text('My Hot Tub...', options(67, 18, '#ffffff'));

      canvas.add(title);
      canvas.bringToFront(title);

      var htModelText = 'Model\n';
      var htModel = new fabric.Text(htModelText, options(113, 16, '#6e6e6e'));

      canvas.add(htModel);
      canvas.bringToFront(htModel);

      var htModelData = _this.get('modelName');
      var htModelD = new fabric.Text(htModelData, options(136, 13, '#00539A'));

      canvas.add(htModelD);
      canvas.bringToFront(htModelD);

      var htJetsText = '\nJets\n';
      var htJets = new fabric.Text(htJetsText, options(149, 16, '#6e6e6e'));

      canvas.add(htJets);
      canvas.bringToFront(htJets);

      var htJetsData = _this.get('jets') + " jets";
      var htJetsD = new fabric.Text(htJetsData, options(192, 13, '#00539A'));

      canvas.add(htJetsD);
      canvas.bringToFront(htJetsD);

      var htShellText = '\nShell Color\n';
      var htShell = new fabric.Text(htShellText, options(205, 16, '#6e6e6e'));

      canvas.add(htShell);
      canvas.bringToFront(htShell);

      var htShellData = _this.get('shellColor');
      var htShellD = new fabric.Text(htShellData, options(248, 13, '#00539A'));

      canvas.add(htShellD);
      canvas.bringToFront(htShellD);

      var htCabinetText = '\nCabinet Color\n';
      var htCabinet = new fabric.Text(htCabinetText, options(261, 16, '#6e6e6e'));

      canvas.add(htCabinet);
      canvas.bringToFront(htCabinet);

      var htCabinetData = _this.get('cabinetColor');
      var htCabinetD = new fabric.Text(htCabinetData, options(304, 13, '#00539A'));

      canvas.add(htCabinetD);
      canvas.bringToFront(htCabinetD);

      var htOptionsText = '\nOptions\n';
      var htOptions = new fabric.Text(htOptionsText, options(317, 16, '#6e6e6e'));

      canvas.add(htOptions);
      canvas.bringToFront(htOptions);

      var htOptionsData = _this.get('options');
      htOptionsData = htOptionsData.replace(/- /g, "");
      var htOptionsD = new fabric.Text(htOptionsData, options(360, 13, '#00539A'));

      canvas.add(htOptionsD);
      canvas.bringToFront(htOptionsD);

      fabric.Image.fromURL(cabinetImageUrl, function(img) {
        var cabinetImg = img.set({ left: 0, top: 0, angle: 0 }).scale(1);

        fabric.Image.fromURL(shellImageUrl, function(img) {
          var shellImg = img.set({ left: 0, top: 0, angle: 0 }).scale(1);

          var htGroup = new fabric.Group([cabinetImg, shellImg], {left: 340, top: 324});
          htGroup.lockUniScaling=true; // keep scale ratio
          htGroup.hasBorders=false; // set to false to hide the borders
          htGroup.hasControls=false;
          htGroup.selectable=hasBackground; // set to false to hide the borders
          htGroup.setOriginX('center');
          htGroup.setOriginY('center');
          htGroup.lockRotation=true;
          htGroup.hasRotatingPoint=false;
          canvas.add(htGroup);
          canvas.sendToBack(htGroup);

          var scaleControl = $('#scale-control');
          scaleControl.on('input change', function() {
            htGroup.scale(parseFloat(this.value));
            canvas.renderAll();
          });

          function updateControls() {
            scaleControl.value = htGroup.getScaleX();
          }

          canvas.on({
            'object:moving': updateControls,
            'object:scaling': updateControls,
            'object:resizing': updateControls,
            'object:rotating': updateControls
          });
        });
      });
    });


  }.observes('width', 'height', 'shellImageUrl', 'hasBackground'),
  updateBackgroundImage: function(){
    var canvas = this.get('canvas');
    var backgroundImageUrl = this.get('backgroundImageUrl');

    var bgImg = new Image();
    bgImg.src = backgroundImageUrl;

    if(bgImg.height > bgImg.width) {
      var ySize = 840*(bgImg.height/bgImg.width);
      var yPos = Math.round(648-ySize)/2;
      canvas.setBackgroundImage(backgroundImageUrl, canvas.renderAll.bind(canvas), {
        top: yPos,
        height: ySize,
        width: 840
      });
    } else {
      var xSize = 648*(bgImg.width/bgImg.height);
      var xPos = Math.round(840-xSize)/2;
      canvas.setBackgroundImage(backgroundImageUrl, canvas.renderAll.bind(canvas), {
        left: xPos,
        height: 648,
        width: xSize
      });
    }

  }.observes('backgroundImageUrl')
});



export default HotTubCanvas;
