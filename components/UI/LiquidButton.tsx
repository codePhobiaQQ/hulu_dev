import { useEffect, useRef } from "react";
import line from "../../public/assets/svg/line.svg";
import Line from "./Line";

const LiquidButton = () => {
  // const pointsA = [];
  // const pointsB = [];
  // const $canvas: any = null;
  // const context = null;
  // const vars = null;
  // const points = 8;
  // const viscosity = 20;
  // const mouseDist = 70;
  // const damping = 0.05;
  // const showIndicators = false;
  // let mouseX = 0;
  // let mouseY = 0;
  // let relMouseX = 0;
  // let relMouseY = 0;
  // let mouseLastX = 0;
  // let mouseLastY = 0;
  // let mouseDirectionX = 0;
  // let mouseDirectionY = 0;
  // let mouseSpeedX = 0;
  // let mouseSpeedY = 0;
  //
  // function mouseDirection(e) {
  //   if (mouseX < e.pageX) mouseDirectionX = 1;
  //   else if (mouseX > e.pageX) mouseDirectionX = -1;
  //   else mouseDirectionX = 0;
  //
  //   if (mouseY < e.pageY) mouseDirectionY = 1;
  //   else if (mouseY > e.pageY) mouseDirectionY = -1;
  //   else mouseDirectionY = 0;
  //
  //   mouseX = e.pageX;
  //   mouseY = e.pageY;
  //
  //   relMouseX = mouseX - $canvas.offset().left;
  //   relMouseY = mouseY - $canvas.offset().top;
  // }
  //
  // function mouseSpeed() {
  //   mouseSpeedX = mouseX - mouseLastX;
  //   mouseSpeedY = mouseY - mouseLastY;
  //
  //   mouseLastX = mouseX;
  //   mouseLastY = mouseY;
  //
  //   setTimeout(mouseSpeed, 50);
  // }

  const button = useRef<any>(null);
  const canvas = useRef<any>(null);

  const buttonWidth = button.current?.clientWidth;
  const buttonHeight = button.current?.clientHeight;

  // const initButton = () => {
  //   const context = canvas.current.getContext("2d");
  //
  //   const x = buttonHeight / 2;
  //   for (var j = 1; j < points; j++) {
  //     addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
  //   }
  //   addPoints(buttonWidth - buttonHeight / 5, 0);
  //   addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
  //   addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
  //   // eslint-disable-next-line no-var
  //   for (var j = points - 1; j > 0; j--) {
  //     addPoints(x + ((buttonWidth - buttonHeight) / points) * j, buttonHeight);
  //   }
  //   addPoints(buttonHeight / 5, buttonHeight);
  //   addPoints(-buttonHeight / 10, buttonHeight / 2);
  //   addPoints(buttonHeight / 5, 0);
  //   renderCanvas();
  // };
  //
  // function addPoints(x, y) {
  //   pointsA.push(new Point(x, y, 1));
  //   pointsB.push(new Point(x, y, 2));
  // }
  //
  // function Point(x, y, level) {
  //   this.x = this.ix = 50 + x;
  //   this.y = this.iy = 50 + y;
  //   this.vx = 0;
  //   this.vy = 0;
  //   this.cx1 = 0;
  //   this.cy1 = 0;
  //   this.cx2 = 0;
  //   this.cy2 = 0;
  //   this.level = level;
  // }
  //
  // Point.prototype.move = function () {
  //   this.vx += (this.ix - this.x) / (viscosity * this.level);
  //   this.vy += (this.iy - this.y) / (viscosity * this.level);
  //
  //   var dx = this.ix - relMouseX;
  //   var dy = this.iy - relMouseY;
  //   var relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;
  //
  //   // Move x
  //   if (
  //     (mouseDirectionX > 0 && relMouseX > this.x) ||
  //     (mouseDirectionX < 0 && relMouseX < this.x)
  //   ) {
  //     if (relDist > 0 && relDist < 1) {
  //       this.vx = (mouseSpeedX / 4) * relDist;
  //     }
  //   }
  //   this.vx *= 1 - damping;
  //   this.x += this.vx;
  //
  //   // Move y
  //   if (
  //     (mouseDirectionY > 0 && relMouseY > this.y) ||
  //     (mouseDirectionY < 0 && relMouseY < this.y)
  //   ) {
  //     if (relDist > 0 && relDist < 1) {
  //       this.vy = (mouseSpeedY / 4) * relDist;
  //     }
  //   }
  //   this.vy *= 1 - damping;
  //   this.y += this.vy;
  // };
  //
  // function renderCanvas() {
  //   // rAF
  //   let rafID = requestAnimationFrame(renderCanvas);
  //
  //   // Clear scene
  //   context.clearRect(0, 0, $canvas.width(), $canvas.height());
  //   context.fillStyle = "#fff";
  //   context.fillRect(0, 0, $canvas.width(), $canvas.height());
  //
  //   // Move points
  //   for (var i = 0; i <= pointsA.length - 1; i++) {
  //     pointsA[i].move();
  //     pointsB[i].move();
  //   }
  //
  //   // Create dynamic gradient
  //   var gradientX = Math.min(
  //     Math.max(mouseX - $canvas.offset().left, 0),
  //     $canvas.width()
  //   );
  //   var gradientY = Math.min(
  //     Math.max(mouseY - $canvas.offset().top, 0),
  //     $canvas.height()
  //   );
  //   var distance =
  //     Math.sqrt(
  //       Math.pow(gradientX - $canvas.width() / 2, 2) +
  //         Math.pow(gradientY - $canvas.height() / 2, 2)
  //     ) /
  //     Math.sqrt(
  //       Math.pow($canvas.width() / 2, 2) + Math.pow($canvas.height() / 2, 2)
  //     );
  //
  //   var gradient = context.createRadialGradient(
  //     gradientX,
  //     gradientY,
  //     300 + 300 * distance,
  //     gradientX,
  //     gradientY,
  //     0
  //   );
  //   gradient.addColorStop(0, "#102ce5");
  //   gradient.addColorStop(1, "#E406D6");
  //
  //   // Draw shapes
  //   var groups = [pointsA, pointsB];
  //
  //   for (var j = 0; j <= 1; j++) {
  //     var points = groups[j];
  //
  //     if (j == 0) {
  //       // Background style
  //       context.fillStyle = "#1CE2D8";
  //     } else {
  //       // Foreground style
  //       context.fillStyle = gradient;
  //     }
  //
  //     context.beginPath();
  //     context.moveTo(points[0].x, points[0].y);
  //
  //     for (var i = 0; i < points.length; i++) {
  //       var p = points[i];
  //       var nextP = points[i + 1];
  //       var val = 30 * 0.552284749831;
  //
  //       if (nextP != undefined) {
  //         p.cx1 = (p.x + nextP.x) / 2;
  //         p.cy1 = (p.y + nextP.y) / 2;
  //         p.cx2 = (p.x + nextP.x) / 2;
  //         p.cy2 = (p.y + nextP.y) / 2;
  //
  //         context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
  //       } else {
  //         nextP = points[0];
  //         p.cx1 = (p.x + nextP.x) / 2;
  //         p.cy1 = (p.y + nextP.y) / 2;
  //
  //         context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
  //       }
  //     }
  //
  //     // context.closePath();
  //     context.fill();
  //   }
  //
  //   if (showIndicators) {
  //     // Draw points
  //     context.fillStyle = "#000";
  //     context.beginPath();
  //     for (var i = 0; i < pointsA.length; i++) {
  //       var p = pointsA[i];
  //
  //       context.rect(p.x - 1, p.y - 1, 2, 2);
  //     }
  //     context.fill();
  //
  //     // Draw controls
  //     context.fillStyle = "#f00";
  //     context.beginPath();
  //     for (var i = 0; i < pointsA.length; i++) {
  //       var p = pointsA[i];
  //
  //       context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
  //       context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
  //     }
  //     context.fill();
  //   }
  // }

  useEffect(() => {
    // mouseSpeed();
    // initButton();
  }, []);

  return (
    <a ref={button} href="http://waaark.com" className="btn-liquid">
      <span className="inner">Learn more</span>
      <Line />
    </a>
  );
};

export default LiquidButton;