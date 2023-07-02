import { NgModule } from "@angular/core";
import { AuthComponent } from "../auth/auth.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared.module";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: AuthComponent }]),
        CommonModule,
        FormsModule,
        SharedModule
    ]
})
export class AuthModule { }