<template>
  <div class="css-secrets">
    <h1>CSS SECRETS</h1>
    <h2>CSS SECRETS</h2>
    <h3>CSS SECRETS</h3>
    <h4>CSS SECRETS</h4>
    <h5>CSS SECRETS</h5>
    <h6>CSS SECRETS</h6>
    <section class="css1-translucent-borders">
      <!-- <img src="@/assets/gakki.jpg" alt=""> -->
      <div class="css1-translucent-borders-box">
        <h3>
          01 Translucent borders
        </h3>
        <p>Use background-clip: padding-box</p>
      </div>
    </section>
    <section class="css2-multiple-borders">
      <!-- <img src="@/assets/gakki.jpg" alt=""> -->
      <div class="css2-multiple-borders-box-shadow">
        <h3>
          02 Multiple borders
        </h3>
        <p class="strong">First You can use box-shadow</p>
      </div>
      <div class="css2-multiple-borders-outline">
        <h3>
          02 Multiple borders
        </h3>
        <p>Second You can use outline</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'css-secrets',
};
</script>

<style lang="scss" scoped>
.css-secrets {
  font-size: 16px;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .css1-translucent-borders {
    width: 100%;
    height: 30vh;
    background: plum;
    .css1-translucent-borders-box {
      border: 10px solid rgba(238, 224, 224, 0.5);
      background: white;
      background-clip: padding-box;
      // Other Code
      width: 20rem;
      height: 6rem;
      margin: auto;
    }
  }
  .css2-multiple-borders {
    width: 100%;
    height: 40vh;
    background: palegreen;
    .css2-multiple-borders-box-shadow {
      background: white;
      box-shadow: 0 0 0 10px #655,
                0 0 0 15px deeppink,
                0 0 0 20px blue,
                0 0 0 25px orange,
                0 2px 5px 30px rgba(0,0,0,.6);
      // Other Code
      width: 20rem;
      height: 6rem;
      margin: auto;
    }
    .css2-multiple-borders-outline {
      background: white;
      border: 5px solid #655;
      outline: 5px solid deeppink;
      // Other Code
      width: 20rem;
      height: 6rem;
      margin: auto;
    }
  }
}
</style>
