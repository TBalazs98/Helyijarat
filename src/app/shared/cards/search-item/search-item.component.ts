import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() searchItem: any;

  public isCollapsed = true;

  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }

}
