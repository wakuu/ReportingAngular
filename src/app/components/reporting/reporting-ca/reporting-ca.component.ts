import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reporting-ca',
    templateUrl: './reporting-ca.component.html',
    styleUrls: ['./reporting-ca.component.css']
})
export class ReportingCaComponent implements OnInit {

    constructor() { }

    sales: any[];
    ca: any[];

    ngOnInit() {
        this.sales = [
            {brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
            {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
            {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
            {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
            {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
            {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
            {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
            {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
            {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
            {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
        ];

        this.ca = [
            {
                date: '2017-01',
                revenu: {
                    BIL: 13585.00,
                    taliko: null,
                    MSF: null,
                    EN: null
                },
                charge: {
                    facture: {
                        CHR: -1600.00,
                        PLEXCOFO: -6000.00,
                        BAC: null,
                        ICV: null,
                        AHEAD: null
                    },
                    frais: -237.41
                }
            },
            {
                date: '2017-02',
                revenu: {
                    BIL: null,
                    taliko: 2170.92,
                    MSF: 3660.00,
                    EN: null
                },
                charge: {
                    facture: {
                        CHR: -1600.00,
                        PLEXCOFO: -6000.00,
                        BAC: -3960.00,
                        ICV: null,
                        AHEAD: null
                    },
                    frais: -1391.02
                }
            },
            {
                date: '2017-03',
                revenu: {
                    BIL: null,
                    taliko: 2800.00,
                    MSF: null,
                    EN: null
                },
                charge: {
                    facture: {
                        CHR: -3300.00,
                        PLEXCOFO: -7200.00,
                        BAC: -6435.00,
                        ICV: null,
                        AHEAD: null
                    },
                    frais: -2790.82
                }
            },
            {
                date: '2017-04',
                revenu: {
                    BIL: 12850.00,
                    taliko: 22270.00,
                    MSF: null,
                    EN: 2400.00
                },
                charge: {
                    facture: {
                        CHR: -5600.00,
                        PLEXCOFO: -8200.00,
                        BAC: null,
                        ICV: null,
                        AHEAD: null
                    },
                    frais: -3674.52
                }
            },
            {
                date: '2017-05',
                revenu: {
                    BIL: 18050.00,
                    taliko: 21930.00,
                    MSF: null,
                    EN: null
                },
                charge: {
                    facture: {
                        CHR: -5300.00,
                        PLEXCOFO: -8200.00,
                        BAC: -8910.00,
                        ICV: null,
                        AHEAD: null
                    },
                    frais: -4773.00
                }
            },
        ];
    }
}
