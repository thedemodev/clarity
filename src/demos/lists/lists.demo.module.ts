/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';

import {ListsUlDemo} from "./lists-ul";
import {ListsOlDemo} from "./lists-ol";
import {ListsUnstyledDemo} from "./lists-unstyled";
import {ListsCompactDemo} from "./lists-compact";
import {ListsMixedDemo} from "./lists-mixed";
import {ListsInCardsDemo} from "./lists-in-cards";
import {OldListsInCardsDemo} from "./old-lists-in-cards";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forRoot(),
    ],
    declarations: [
        ListsUlDemo,
        ListsOlDemo,
        ListsUnstyledDemo,
        ListsCompactDemo,
        ListsMixedDemo,
        ListsInCardsDemo,
        OldListsInCardsDemo
    ],
    exports: [
        ListsUlDemo,
        ListsOlDemo,
        ListsUnstyledDemo,
        ListsCompactDemo,
        ListsMixedDemo,
        ListsInCardsDemo
    ]
})
export default class ListsDemoModule {
}
