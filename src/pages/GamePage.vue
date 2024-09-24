<template>
  <q-page>
    <q-page-container v-touch-pan.prevent.mouse="handlePan">
      <div class="q-pa-md">
        <canvas ref="ballCanvas" width="800" height="400"></canvas>
      </div>
    </q-page-container>
    <q-btn label="Start Animation" @click="startAnimation" class="q-mt-md" />
    <q-btn label="Next Frame" @click="updateBall" class="q-mt-md" />
    {{ maxdx }} {{ maxdy }}
    <!-- <img width="100" height="100" src="src/assets/pokeball.png" /> -->

    <div v-show="panning" class="touch-signal">
      <q-icon name="touch_app" />
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "BallAnimation",
  setup() {
    const info = ref(null);
    const panning = ref(false);
    const maxdx = ref(0);
    const maxdy = ref(0);
    const img = new Image(100, 100);
    img.src = "src/assets/pokeball.png";

    return {
      info,
      panning,
      maxdx,
      maxdy,
      img,

      handlePan({ evt, ...newInfo }) {
        info.value = newInfo;

        // native Javascript event
        console.log(info.value.delta);

        if (Math.abs(info.value.delta.x) > Math.abs(maxdx.value)) {
          maxdx.value = info.value.delta.x;
        }

        if (Math.abs(info.value.delta.y) > Math.abs(maxdy.value)) {
          maxdy.value = info.value.delta.y;
        }

        if (info.value.delta)
          if (newInfo.isFirst) {
            maxdx.value = 0;
            maxdy.value = 0;
            panning.value = true;
          } else if (newInfo.isFinal) {
            console.log(maxdx.value);
            console.log(maxdy.value);
            panning.value = false;
            // startAnimation;
          }
      },
    };
  },
  data() {
    return {
      ball: {
        x: 400,
        y: 350,
        radius: 30,
        dx: 0,
        dy: 0,
        gravity: 0.5,
        damping: 0.8,
        ground: 380, // Adjusted ground value for 400px height canvas
        angle: 0,
      },
      ctx: null, // Will hold the 2D context of the canvas
      isAnimating: false, // Track animation state
      // maxdx: 0,
      // maxdy: 0,
    };
  },
  mounted() {
    this.initCanvas();
    this.drawBall(); // Set up the canvas when the component mounts
  },
  methods: {
    // Initialize the canvas and context
    initCanvas() {
      const canvas = this.$refs.ballCanvas;
      this.ctx = canvas.getContext("2d");
      this.ball.ground = canvas.height - this.ball.radius; // Ground relative to canvas height
    },

    // Draw the ball on the canvas
    drawBall() {
      // this.ctx.clearRect(0, 0, 800, 400); // Clear the canvas before each frame
      // this.ctx.beginPath();
      // this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
      // this.ctx.fillStyle = "blue";
      // this.ctx.fill();
      // this.ctx.closePath();
      this.ctx.clearRect(0, 0, 800, 400); // Clear the canvas before each frame
      // this.ctx.rotate(this.ball.angle);
      // Ensure the image is loaded only once

      if (this.img.complete) {
        // Draw the preloaded image
        this.ctx.drawImage(
          this.img,
          this.ball.x - this.ball.radius,
          this.ball.y - this.ball.radius,
          this.ball.radius * 2,
          this.ball.radius * 2
        );
      } else {
        // In case the image hasn't loaded yet, you can optionally handle this case (e.g., show a placeholder)
        this.img.onload = () => {
          this.ctx.drawImage(
            img,
            this.ball.x - this.ball.radius,
            this.ball.y - this.ball.radius,
            this.ball.radius * 2,
            this.ball.radius * 2
          );
        };
      }
    },

    // Update ball position and handle collision with ground
    updateBall() {
      this.ball.angle += 1;
      this.ball.radius -= 0.1;
      this.ball.ground -= 0.5;
      if (this.ball.radius < 15) {
        this.ball.radius = 15;
        this.ball.ground = 285;
      }
      this.ball.x += this.ball.dx;
      this.ball.y += this.ball.dy;
      this.ball.dy += this.ball.gravity;

      // If ball hits the ground, bounce it
      if (this.ball.y + this.ball.radius >= this.ball.ground) {
        this.ball.y = this.ball.ground - this.ball.radius;
        this.ball.dy = -this.ball.dy * this.ball.damping;
      }

      // Stop horizontal movement if ball hits left or right edge
      if (
        this.ball.x + this.ball.radius >= 800 ||
        this.ball.x - this.ball.radius <= 0
      ) {
        this.ball.dx = -this.ball.dx;
      }

      this.drawBall(); // Redraw the ball with updated position
    },

    // Main animation loop
    animate() {
      if (!this.isAnimating) return; // Stop animation if flag is false
      this.updateBall();
      requestAnimationFrame(this.animate); // Keep the animation loop running
    },

    // Start the animation when the button is clicked
    startAnimation() {
      this.ball.dx = this.maxdx / 10;
      this.ball.dy = this.maxdy / 2;
      console.log(this.ball);
      this.isAnimating = true;
      this.animate(); // Begin the animation loop

      setTimeout(() => {
        this.isAnimating = false;

        setTimeout(() => {
          this.resetBall();
        }, 1000);
      }, 1000);
    },

    resetBall() {
      this.ball.x = 400;
      this.ball.y = 350;
      this.ball.radius = 30;
      this.ball.dx = 0;
      this.ball.dy = 0;
      this.ball.gravity = 0.5;
      this.ball.damping = 0.8;
      this.ball.ground = 380;
      this.drawBall();
    },
  },
  watch: {
    maxdx(newVal) {
      this.startAnimation();
    },
  },
};
</script>

<style scoped>
canvas {
  border: 1px solid black;
  display: block;
  margin: 0 auto;
}
</style>
