import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from '../calculator/calculator.component';
import { PlayersComponent } from '../players/players.component';
import { TradedatabaseComponent } from '../tradedatabase/tradedatabase.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {
        path: 'calculator',
        component: CalculatorComponent,
    },
    {
        path: 'players',
        component: PlayersComponent,
    },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'tradedatabase',
        component: TradedatabaseComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
