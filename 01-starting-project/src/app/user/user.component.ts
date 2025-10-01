import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Decorator Input, Old way to receive value from parent (props in react)
  
  @Input({ required: true }) user!: User
  @Input({ required: true }) selected!: boolean

  @Output() select = new EventEmitter<string>()
  

  // New feature, with "signal"
  // avatar = input.required<string>();
  // name = input.required<string>();

  
  // output is not a signal, 
  // select = output<string>()  

  // With Signal, use computed
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // }) 

  // Without signal (just Input)
  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
