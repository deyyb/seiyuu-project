<template>
  <q-page padding>
    <!-- content -->
    <h4>Tik-Tak-Toe</h4>
    <h5>Currently Playing: Player #{{ this.currentPlayer }}</h5>
    <div class="row">
      <div
        class="col-4"
        v-for="btn in buttons"
        :key="btn"
        style="justify-content: center"
      >
        <q-btn
          round
          outline
          :color="btn.btnColor"
          :label="btn.state"
          :disable="btn.disabledBool"
          size="50px"
          @click="handleClick(btn.id)"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageName",
  data() {
    return {
      currentPlayer: 1,
      winningPlayer: 0,
      buttons: [
        {
          id: 0,
          disabledBool: false,
          btnColor: "gray",
          state: 0,
        },
        {
          id: 1,
          disabledBool: false,
          btnColor: "gray",
          state: 0,
        },
        {
          id: 2,
          disabledBool: false,
          btnColor: "gray",
          state: 0,
        },
        {
          id: 3,
          disabledBool: false,
          btnColor: "gray",
          state: 0,
        },
        {
          id: 4,
          disabledBool: false,
          btnColor: "gray",
          state: 0,
        },
        {
          id: 5,
          disabledBool: false,
          btnColor: "gray",
          state: 0,
        },
        {
          id: 6,
          disabledBool: false,
          btnColor: "gray",
          state: 0,
        },
        {
          id: 7,
          disabledBool: false,
          btnColor: "gray",
          state: 0,
        },
        {
          id: 8,
          disabledBool: false,
          btnColor: "gray",
          state: 0,
        },
      ],
    };
  },
  methods: {
    handleClick(id) {
      // console.log(this.buttons[id].disabledBool);

      if (this.currentPlayer == 1) {
        this.buttons[id].state = 1;
        this.currentPlayer = 2;
        this.buttons[id].btnColor = "blue";
      } else {
        this.buttons[id].state = 2;
        this.currentPlayer = 1;
        this.buttons[id].btnColor = "red";
      }

      this.buttons[id].disabledBool = true;
      this.checkWinner();
    },
    checkWinner() {
      // console.log(this.winningPlayer);
      // this.compiledStates = [
      //   // {this.buttons[0].state}

      // ]
      let compiledStates = [
        //horizontals
        [this.buttons[0].state, this.buttons[1].state, this.buttons[2].state],
        [this.buttons[3].state, this.buttons[4].state, this.buttons[5].state],
        [this.buttons[6].state, this.buttons[7].state, this.buttons[8].state],
        //verticals
        [this.buttons[0].state, this.buttons[3].state, this.buttons[6].state],
        [this.buttons[1].state, this.buttons[4].state, this.buttons[7].state],
        [this.buttons[2].state, this.buttons[5].state, this.buttons[8].state],
        //slants
        [this.buttons[0].state, this.buttons[4].state, this.buttons[8].state],
        [this.buttons[2].state, this.buttons[4].state, this.buttons[6].state],
      ];

      for (let i = 0; i < compiledStates.length; i++) {
        // console.log(compiledStates[i][0]);
        // console.log(compiledStates[i][1]);
        // console.log(compiledStates[i][2]);
        if (
          compiledStates[i][0] === compiledStates[i][1] &&
          compiledStates[i][1] === compiledStates[i][2]
        ) {
          this.winningPlayer = compiledStates[i][0];
          if (this.winningPlayer != 0) {
            console.log("here");
            break;
          }
        }
      }
    },
    resetBoard() {
      this.currentPlayer = 1;
      this.winningPlayer = 0;
      for (let btn in this.buttons) {
        this.buttons[btn].disabledBool = false;
        this.buttons[btn].btnColor = "gray";
        this.buttons[btn].state = 0;
      }
    },
  },
  watch: {
    winningPlayer(newVal) {
      console.log(newVal);
      if (this.winningPlayer != 0) {
        alert("Player #" + newVal + " won!");
        this.resetBoard();
      }
    },
  },
};
</script>
