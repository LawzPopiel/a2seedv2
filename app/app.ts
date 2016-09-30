import {Component} from '@angular/core';
import {TabMenuModule,MenuItem} from 'primeng/primeng';

@Component({
  selector   : 'app',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

    private items: MenuItem[];
    
    private activeItem: MenuItem;

    ngOnInit() {
        this.items = [
            {label: 'PXD Home', icon: '', routerLink: ['/'] },
            {label: 'Guide', icon: '', routerLink: ['/about']},
            {label: 'http rxjs', icon: '', routerLink: ['/github', 'angular']},
            {label: 'w3s Ideas', icon: '', routerLink: ['/ideas']},
            {label: 'Test - Available', icon: '', routerLink: ['/test']}
        ];
        
        this.activeItem = this.items[2];
    }

}
