import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-bar',
  imports: [MatIconModule,FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
@Input() Search = 'initial'
@Output() SearchChange = new EventEmitter<string>();
  @Output() searchButoonClicked = new EventEmitter();
  searchClick(){
    this.searchButoonClicked.emit()
  }
  updateSearch(value: string){
    this.SearchChange.emit(value);
  }
}
