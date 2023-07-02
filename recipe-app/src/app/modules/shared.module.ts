import { NgModule } from "@angular/core";
import { AlertComponent } from "../shared/others/alert/alert.component";
import { PlaceholderDirective } from "../shared/others/placeholder/placeholder.directive";
import { DropdownDirective } from "../shared/dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AlertComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ]
})
export class SharedModule { }