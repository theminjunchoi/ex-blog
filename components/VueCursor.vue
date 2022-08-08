<template>
  <span>
    <span class="vueCursor"></span>
    <span class="vueCursor--Small"></span>
  </span>
</template>
<script>
export default {
  props: {
    scaleElement: {},
    dotSize: {
      default: 6
    },
    dotColor: {
      default: "#aaa"
    },
    circleSize: {
      default: 40
    },
    borderColor: {
      default: "#f00"
    }
  },

  mounted() {
    let vueCursor = document.querySelector(".vueCursor");
    let vueCursorSmall = document.querySelector(".vueCursor--Small");
    document.addEventListener("mousemove", e => {
      let scaleElementHovered =
        e.target &&
        (e.target.classList.contains(this.scaleElement) ||
          e.target.closest(`.${this.scaleElement}`));

      vueCursor.style.cssText = `
      transform: translate3d(${e.clientX -
        this.circleSize +
        this.dotSize -
        1}px, ${e.clientY - this.circleSize + this.dotSize - 1}px, 0) scale(${
        scaleElementHovered ? 1 : 0.5
      });
        width: ${this.circleSize * 2}px;
        height: ${this.circleSize * 2}px;
        border-color: ${this.borderColor}
        `;

      vueCursorSmall.style.cssText = `
      transform: translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(${
        scaleElementHovered ? 1 : 0.5
      });
      width: ${this.dotSize * 2}px;
       height: ${this.dotSize * 2}px;
       background-color: ${this.dotColor}`;
    });
  }
};
</script>

<style>
* {
  cursor: none;
}
.vueCursor,
.vueCursor--Small {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  border-radius: 50%;
  pointer-events: none;
  box-sizing: border-box;
  backface-visibility: hidden;
}

.vueCursor {
  transition: transform 100ms;
  border: 1px solid #f00;
}

.vueCursor--Small {
  background-color: #aaa;
}
</style>


