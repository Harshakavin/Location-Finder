import {Component} from '@angular/core';

@Component({
  selector: 'chat-bubble',
  templateUrl: 'chatBubble.html'
})
export class ChatBubble {
  users:any;
  constructor() {
    this.users = [
      {
        img: 'build/img/hugh.png',
        position: 'left',
        content: 'Hello from the other side.',
        name: 'Gregory',
        time: '28-Jun-2016 21:53'
      },
      {
        img: 'build/img/hugh.png',
        position: 'right',
        content: 'Hi! How are?',
        name: 'Me',
        time: '28-Jun-2016 21:55'
      },
      {
        img: 'build/img/hugh.png',
        position: 'left',
        content: "This is some really long test that I'm writing here. Let's see how it wraps.",
        name: 'Gregory',
        time: '28-Jun-2016 21:57'
      }
    ];
  }
}
