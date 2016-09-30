import {Component} from '@angular/core';
import { IList } from './list';
import {TabMenuModule, MenuModule,MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})


export class Home {
    
    cities: SelectItem[];

    selectedCity: string;

    constructor() {
        this.cities = [];
        this.cities.push({label:'Select City', value:null});
        this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
        this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
        this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
        this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
        this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
    }


  private items: MenuItem[];
    tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

    public things: Array<{ text: string, value: number }> = [
        { text: "select something", value: 1 },
        { text: "Blog", value: 2 },
        { text: "Frog", value: 3 },
        { text: "Big Fat Frog", value: 4 },
        { text: "Fig", value: 5 },
        { text: "Dig", value: 6 },
        { text: "Logger", value: 7 }, 
        { text: "Log House", value: 8 },
        { text: "Smog", value: 9 }, 
        { text: "Feature Review", value: 10 }, 
        { text: "Flagrant penalty", value: 11 }         
    ];




    thingValue: any = this.things[0];

    thing: IList;
    displayDialog: boolean;

    newThing: boolean;

    selectedThing: IList;
    display: boolean = false;

    clicks: number = 0;




      count() {
        this.clicks++;
    }

      showDialog() {
        this.display = true;
    }

        ngOnInit() {

        
        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New', 
                        icon: 'fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            }
        ];
    }

}
