import {Component, effect, Input, signal} from '@angular/core';
import {NgbActiveOffcanvas} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {

  @Input() stopId: number | undefined = undefined


  constructor() {}

}
