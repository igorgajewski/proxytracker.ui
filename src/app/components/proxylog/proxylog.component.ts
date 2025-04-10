import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatorComponent } from "../paginator/paginator.component";
import { PaginatedcomponentComponent } from '../paginatedcomponent/paginatedcomponent.component';
import { Proxy } from '../../models/proxy';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proxylog',
  imports: [PaginatorComponent, CommonModule, FormsModule],
  templateUrl: './proxylog.component.html',
  styleUrl: './proxylog.component.css'
})
export class ProxylogComponent extends PaginatedcomponentComponent<Proxy>{
  clientName!: string;
  showSourceFileInfo:boolean = true;
  showMp4Info:boolean = true;
  showMp4xInfo:boolean = true;
  showMpgInfo:boolean = true;
  showMpgxInfo:boolean = true;
  
  constructor(private route: ActivatedRoute, protected override router: Router, private apiService: ApiService) {
    super(router);
  }

  ngOnInit(): void {
    this.clientName = this.route.snapshot.paramMap.get('client')!;

    this.apiService.getProxies().subscribe((proxies: Proxy[]) => {
      this.items = proxies.map((item: any) => {
        return new Proxy(
          item.id,
          item.filename,
          item.subfolder,
          item.atlasMediaId,
          item.ar,
          item.fps,
          item.bitc,
          item.audioConfig,
          item.duration,
          item.extension,
          item.arrivalDate,
          item.deletionDate
        )
      })
    })
    this.updateDisplayedItems();
  }
}
