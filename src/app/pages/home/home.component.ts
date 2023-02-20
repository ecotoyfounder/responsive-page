import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService, NewsTitle, SelectedTitles} from "../../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsTitle: NewsTitle[] = [];
  selectedNews: SelectedTitles[] = [];
  isSelected = false;
  state = "on";
  toggler = true;
  search = "";
  error = "";

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.fetchNews();
  }

  onToggle(state: string) {
    this.state = state
    this.toggler = !this.toggler
  }

  refresh() {
    this.router.navigate(['/chats'])
  }

  fetchNews() {
    this.apiService.fetchNews()
      .subscribe(n => {
        this.newsTitle = n.articles.map((t: { title: string; }) => t.title)
      }, error => {
        this.error = error.message
      })
  }

  addSelectedNews($event: any) {

    const title = $event.target.value

    if ($event.target.checked) {
      this.selectedNews.push(title)
    } else {
      this.selectedNews = this.selectedNews.filter(n => n !== title)
    }
  }

}
