import { Component } from '@angular/core';
import template from './profile-details.component.html';
import { CORE_DIRECTIVES } from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms';
import { CAROUSEL_DIRECTIVES } from 'ng2-bootstrap';

@Component({
    selector: 'profile-details',
    template,
    directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ProfileDetailsComponent {
    public myInterval: number = 5000;
    public noWrapSlides: boolean = false;
    public slides: Array<any> = [];

    public constructor() {
        this.slides.push({
            image: 'resources/V909/IMG_2128.jpg',
            text: 'IMG_2128'
        });
        this.slides.push({
            image: 'resources/V909/IMG_2129.jpg',
            text: 'IMG_2129'
        });
        this.slides.push({
            image: 'resources/V909/IMG_2130.jpg',
            text: 'IMG_2130'
        });
        this.slides.push({
            image: 'resources/V909/IMG_2131.jpg',
            text: 'IMG_2131'
        });
    }
}
