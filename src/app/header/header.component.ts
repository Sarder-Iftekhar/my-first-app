import { Component,EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',

})
export class HeaderComponent {
    //@Output() decorator enables listenable from the parent component
    @Output() featureSelected = new EventEmitter<string>(); 
    onSelect(feature: string)
    {
        this.featureSelected.emit(feature);

    }

}