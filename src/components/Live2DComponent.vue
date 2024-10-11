<template>
  <canvas id="canvas"></canvas>

  <q-btn @click="onButtonPressed">try</q-btn>
</template>

<script setup>
const props = defineProps({
  myModel: Object,
  announcement: String,
});

defineOptions({
  name: "Live2DComponent",
  watch: {
    announcement: {
      handler(value) {
        alert(value);
      },
    },
  },
});

// const myModel = "public/models/nina with toggles/nina with toggles.model3.json";
const bubble = "src/assets/speech_bubble.png";

var app = null;
let bubbleSprite = null;

function onButtonPressed() {
  // alert("try");

  // app.stage.addChild(bubble);
  if (bubbleSprite) {
    app.stage.addChildAt(bubbleSprite, 1);
  }

  setTimeout(function () {
    app.stage.removeChildAt(1);
  }, 1500);
}

(async function main() {
  window.PIXI = PIXI;

  console.log(props.myModel);

  const myModel = await PIXI.live2d.Live2DModel.from(props.myModel.model);

  app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window,
    transparent: true,
  });
  app.stage.addChild(myModel);
  myModel.scale.set(props.myModel.scale);
  myModel.x = window.innerWidth * props.myModel.x - 200;
  myModel.y = window.innerHeight * props.myModel.y;
  console.log(myModel.x);
  window.addEventListener("resize", function () {
    myModel.x = window.innerWidth * props.myModel.x - 200;
    myModel.y = window.innerHeight * props.myModel.y;
  });

  const bubbleTexture = PIXI.Texture.from(bubble);
  bubbleSprite = new PIXI.Sprite(bubbleTexture);
  bubbleSprite.x = myModel.x + 400; // Position relative to the model
  bubbleSprite.y = myModel.y;
  bubbleSprite.scale.set(0.3);
})();
</script>
