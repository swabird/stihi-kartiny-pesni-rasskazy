const canvas = document.querySelector(".matrix-rain");

if (canvas) {
  const ctx = canvas.getContext("2d");
  const glyphs = "01アイウエオカキクケコサシスセソ<>/{}[]#$%&@";
  const fontSize = 16;
  let width = 0;
  let height = 0;
  let columns = 0;
  let drops = [];

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    columns = Math.ceil(width / fontSize);
    drops = Array.from({ length: columns }, () => Math.random() * -height);
  }

  function draw() {
    ctx.fillStyle = "rgba(5, 8, 7, 0.14)";
    ctx.fillRect(0, 0, width, height);
    ctx.font = `${fontSize}px SFMono-Regular, Consolas, monospace`;

    for (let i = 0; i < columns; i += 1) {
      const text = glyphs[Math.floor(Math.random() * glyphs.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillStyle = Math.random() > 0.985 ? "#dffff0" : "#56ffb7";
      ctx.fillText(text, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i] += 0.42;
    }

    window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  window.requestAnimationFrame(draw);
}
