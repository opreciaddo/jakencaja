import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private scroller: ViewportScroller){}

  ngOnInit(): void {

    const navEl = document.querySelector('.navbar'); 

    window.addEventListener('scroll', ()=> {
      
      if(window.scrollY >= 75) {
        navEl?.classList.add('navbar-scrolled');
      } else if(window.screenY < 75){
        navEl?.classList.remove('navbar-scrolled');
      }
    });
  }

  toggle(e: HTMLElement){

    const toggleBtn = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.nav-item');
    const website = document.querySelector('app-website');

    let tg = e.getAttribute('aria-expanded');

    if (tg === 'true'){

      navLinks.forEach((l) => {
        l.setAttribute('data-bs-toggle', 'collapse');
        l.setAttribute('data-bs-target', '#navbarNav');
      })

      website?.setAttribute('data-bs-toggle', 'collapse');
      website?.setAttribute('data-bs-target', '#navbarNav');

      navLinks.forEach((l) => { l.addEventListener('click', ()=> {
            l.removeAttribute("data-bs-toggle");
            l.removeAttribute("data-bs-target");
          
            let href = l.children[0].getAttribute('href');
            this.scroller.scrollToAnchor(href!.replace('#', ''));

            website?.removeAttribute('data-bs-toggle');
            website?.removeAttribute('data-bs-target');
          
            navLinks.forEach((l) => { 
              l.removeAttribute("data-bs-toggle");
              l.removeAttribute("data-bs-target");
            });
          });
        }
      );

      website?.addEventListener('click', ()=> {
        website?.removeAttribute('data-bs-toggle');
        website?.removeAttribute('data-bs-target');
        
        navLinks.forEach((l) => { 
          l.removeAttribute("data-bs-toggle");
          l.removeAttribute("data-bs-target");
        });
      })

      toggleBtn!.setAttribute('aria-expanded', 'false')
    }
    else {

      navLinks.forEach((l) => {
        l.removeAttribute('data-bs-toggle');
        l.removeAttribute('data-bs-target');
      });

      website?.removeAttribute('data-bs-toggle');
      website?.removeAttribute('data-bs-target');
    }
  }


}
