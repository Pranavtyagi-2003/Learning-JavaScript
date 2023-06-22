function x() {
  for (let i = 0; i <= 5; i++) {
    function close(val) {
      setTimeout(() => {
        console.log(val);
      }, i * 1000);
    }
    close(i);
  }
}
x();
