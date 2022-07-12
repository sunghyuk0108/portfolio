    //마우스 포인트 시작
    const ball = document.querySelector("#mouse_pointer");

    let mouseX = 0;
    let mouseY = 0;
    
    let ballX = 0;
    let ballY = 0;
    
    let speed = 0.1;
    
    function animate(){
      
      let distX = mouseX - ballX;
      let distY = mouseY - ballY;
      
      
      ballX = ballX + (distX * speed);
      ballY = ballY + (distY * speed);
      
      ball.style.left = ballX + 15 + "px";
      ball.style.top = ballY + 20 + "px";
      
      requestAnimationFrame(animate);
    }
    animate();
    
    document.addEventListener("mousemove", function(event){
        mouseX = event.pageX;
        mouseY = event.pageY;
      })
    //마우스 포인트 끝