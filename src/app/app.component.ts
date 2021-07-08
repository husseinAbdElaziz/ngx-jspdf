import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('htmlElement') htmlElement!: ElementRef;

  downloadPdf() {
    const doc = new jspdf();
    const specialElementHandlers = {
      '#editor': function (element: any, renderer: any) {
        return true;
      }
    };
    const content = this.htmlElement.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });
    doc.save('tesName.pdf');
  }
}
