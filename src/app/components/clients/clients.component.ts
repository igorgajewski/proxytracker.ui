import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { ApiService } from '../../services/api/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PaginatorComponent } from '../paginator/paginator.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginatedcomponentComponent } from '../paginatedcomponent/paginatedcomponent.component';

@Component({
  selector: 'app-clients',
  imports: [CommonModule, PaginatorComponent, NgbTooltipModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent extends PaginatedcomponentComponent<Client>{

  deletionOffsetsTooltipMessage: string = "Files will be deleted from server after deletion offset passes, and you will have to unarchive them if needed."
  atlasProductionClientTooltipMessage: string = "If client is integrated with Atlas, proxy files will have Media ID assigned and will be a"

  constructor(private apiService: ApiService, protected override router: Router) {
    super(router);
  }

  ngOnInit() {
    this.apiService.getClients().subscribe((clients: Client[]) => {
      this.items = clients.map((item: any) => {
        return new Client(
          item.id,
          item.name,
          item.ifSourceToArchive,
          item.mp4DeletionOffset,
          item.mpgDeletionOffset,
          item.mpgxDeletionOffset,
          item.mp4xDeletionOffset,
          item.sourceDeletionOffset,
          item.wavDeletionOffset,
          item.docDeletionOffset,
          item.ifAtlasProductionClient,
          item.contact
        );
      })
      .sort((a, b) => a.name.localeCompare(b.name));
      this.updateDisplayedItems();
    });
  }

  
}
