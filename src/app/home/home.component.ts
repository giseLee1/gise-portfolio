import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.drawStat();
  }

  //능력치 모형 그려주는 함수
  drawStat() {
    console.log("드로우 함수 실행");

    const canvas = <HTMLCanvasElement>document.getElementById("stat-model");
    console.log(canvas);
    const circle = canvas.getContext("2d");
    //설정 변수
    const geom = {
      x: 100,
      y: 105,
      radius: 100,
      statrAngle: 0,
      endAngle: 360,
      anticlockwise: false
    }
    //나눌 개수
    let part = 6
    //n등분할 부분의 각도
    let eachDeg = 360 / part
    const lineWidth = part <= 8 ? 6 : part <= 16 ? 3 : 1
    for (let i = 0; i <= part; i++) {
      circle.beginPath() // 경로 시작
      circle.lineWidth = lineWidth
      circle.strokeStyle = "rgba(0, 0, 0, 1)"
      //irclearc(x, y, radius, startAngle, endAngle, anticlockwise)
      circle.arc(geom.x, geom.y, geom.radius, this.degToRad(i * eachDeg), this.degToRad(i * eachDeg + eachDeg), geom.anticlockwise)
      circle.lineTo(geom.x, geom.y) // 특정 좌표 위치로 선을 그림
      circle.closePath() // 경로 종료
      circle.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0)`
      circle.fill() // 채우기
      circle.stroke() // 윤곽선 그리기
    }

  }
  // 각도(degree)를 라디안(radian)으로 변환
  degToRad(deg: number) {
    return (Math.PI / 180) * deg;
  }
}
