import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatorComponent } from "../paginator/paginator.component";
import { PaginatedcomponentComponent } from '../paginatedcomponent/paginatedcomponent.component';
import { Proxy } from '../../models/proxy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proxylog',
  imports: [PaginatorComponent, CommonModule],
  templateUrl: './proxylog.component.html',
  styleUrl: './proxylog.component.css'
})
export class ProxylogComponent extends PaginatedcomponentComponent<Proxy>{
  clientId!: number;
  
  constructor(private route: ActivatedRoute, protected override router: Router) {
    super(router);
  }

  ngOnInit(): void {
    this.clientId = +this.route.snapshot.paramMap.get('client')!;
  }
}
