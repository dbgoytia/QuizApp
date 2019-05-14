import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrypoint',
  templateUrl: './entrypoint.component.html',
  styleUrls: ['./entrypoint.component.css']
})
export class EntrypointComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goto(pagename:string){
    console.log('Moving to page: ' + pagename);
    this.router.navigate([pagename]);
  }

  @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
        // your click logic
        console.log("Start!");
        this.goto('principal');
    }


}
