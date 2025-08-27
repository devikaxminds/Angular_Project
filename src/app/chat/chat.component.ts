import { Component, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  
  messages: Message[] = [
    { id: 1, text: 'Hello there!', sender: 'John', timestamp: new Date() },
    { id: 2, text: 'Hi! How are you?', sender: 'Alice', timestamp: new Date() },
    { id: 3, text: 'I am doing great, thanks!', sender: 'John', timestamp: new Date() }
  ];
  
  newMessage: string = '';
  currentUser: string = 'You';

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      if (this.scrollContainer) {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message: Message = {
        id: this.messages.length + 1,
        text: this.newMessage.trim(),
        sender: this.currentUser,
        timestamp: new Date()
      };
      
      this.messages.push(message);
      this.newMessage = '';
    }
  }
}
