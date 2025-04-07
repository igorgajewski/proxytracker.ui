import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  imports: [FormsModule, CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  views: string[] = ["Clients", "Proxy", "Audio", "Documents"];
  clients: string[] = [];
  selectedView: string = '';
  selectedClient: string = '';

  constructor(private apiService:ApiService, private router: Router){  }
  ngOnInit(){
    this.getClients()
  }

  getClients(){
    this.apiService.getClients().subscribe({
      next: (res: any[]) => {
        const names = res.map(client => client.name);
        names.sort();
        this.clients = names;
      },
      error: (error:any) => {
        console.log(error)
      }
    })
  }
  onNavigate() {
    if (this.selectedView === 'Clients'){
      this.router.navigate(['/clients'])
    }
    else if (this.selectedView === 'Proxy'){
      this.router.navigate(['/proxy', this.selectedClient])
    }
    }
}
