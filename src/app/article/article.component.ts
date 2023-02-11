import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  panelOpenState = false;
  selectedValue: string | undefined;

  page_size = 8;
  page_number = 1;
  main_size = 0;

  array = [
    {
      title: 'The Holy Grail',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.001 ETH',
      img: '../../assets/img/Top.png',
      
    },
    {
      title: 'Mirror Glass Efect',
      subtitle: 'Pixart Motion',
      type: 'Open Biding',
      price: '0.005 ETH',
      img: '../../assets/img/unsplash_tZCrFpSNiIQ.png',
    },
    {
      title: 'Neon in Life',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.002 ETH',
      img: '../../assets/img/unsplash_pVq6YhmDPtk.png',
    },
    {
      title: 'Oil Source',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.001 ETH',
      img: '../../assets/img/unsplash_OlTjeydUpQw.png',
    },
    {
      title: 'World Surface',
      subtitle: 'Pixart Motion',
      type: 'Open Binding',
      price: '0.004 ETH',
      img: '../../assets/img/unsplash_8uZPynIu-rQ.png',
    },
    {
      title: 'Infinity Door',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.005 ETH',
      img: '../../assets/img/unsplash_RnCPiXixooY.png',
    },
    {
      title: 'Bi-Conditional Effect',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.002 ETH',
      img: '../../assets/img/unsplash_VS_kFx4yF5g.png',
    },
    {
      title: 'Motion View',
      subtitle: 'Pixart Motion',
      type: 'Open Binding',
      price: '0.009 ETH',
      img: '../../assets/img/unsplash_tMbQpdguDVQ.png',
    },
    {
      title: 'The Holy Grail',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.001 ETH',
      img: '../../assets/img/Top.png',
    },
    {
      title: 'Mirror Glass Efect',
      subtitle: 'Pixart Motion',
      type: 'Open Biding',
      price: '0.005 ETH',
      img: '../../assets/img/unsplash_tZCrFpSNiIQ.png',
    },
    {
      title: 'Neon in Life',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.002 ETH',
      img: '../../assets/img/unsplash_pVq6YhmDPtk.png',
    },
    {
      title: 'Infinity Door',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.005 ETH',
      img: '../../assets/img/unsplash_RnCPiXixooY.png',
    },
    {
      title: 'Bi-Conditional Effect',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.002 ETH',
      img: '../../assets/img/unsplash_VS_kFx4yF5g.png',
    },
    {
      title: 'Motion View',
      subtitle: 'Pixart Motion',
      type: 'Open Binding',
      price: '0.009 ETH',
      img: '../../assets/img/unsplash_tMbQpdguDVQ.png',
    },
    {
      title: 'Oil Source',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.001 ETH',
      img: '../../assets/img/unsplash_OlTjeydUpQw.png',
    },
    {
      title: 'World Surface',
      subtitle: 'Pixart Motion',
      type: 'Open Binding',
      price: '0.004 ETH',
      img: '../../assets/img/unsplash_8uZPynIu-rQ.png',
    },
    {
      title: 'The Holy Grail',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.001 ETH',
      img: '../../assets/img/Top.png',
    },
    {
      title: 'Mirror Glass Efect',
      subtitle: 'Pixart Motion',
      type: 'Open Biding',
      price: '0.005 ETH',
      img: '../../assets/img/unsplash_tZCrFpSNiIQ.png',
    },
    {
      title: 'Neon in Life',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.002 ETH',
      img: '../../assets/img/unsplash_pVq6YhmDPtk.png',
    },
    {
      title: 'Oil Source',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.001 ETH',
      img: '../../assets/img/unsplash_OlTjeydUpQw.png',
    },
    {
      title: 'World Surface',
      subtitle: 'Pixart Motion',
      type: 'Open Binding',
      price: '0.004 ETH',
      img: '../../assets/img/unsplash_8uZPynIu-rQ.png',
    },
    {
      title: 'Infinity Door',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.005 ETH',
      img: '../../assets/img/unsplash_RnCPiXixooY.png',
    },
    {
      title: 'Bi-Conditional Effect',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.002 ETH',
      img: '../../assets/img/unsplash_VS_kFx4yF5g.png',
    },
    {
      title: 'Motion View',
      subtitle: 'Pixart Motion',
      type: 'Open Binding',
      price: '0.009 ETH',
      img: '../../assets/img/unsplash_tMbQpdguDVQ.png',
    },
    {
      title: 'Oil Source',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.001 ETH',
      img: '../../assets/img/unsplash_OlTjeydUpQw.png',
    },
    {
      title: 'World Surface',
      subtitle: 'Pixart Motion',
      type: 'Open Binding',
      price: '0.004 ETH',
      img: '../../assets/img/unsplash_8uZPynIu-rQ.png',
    },
    {
      title: 'Infinity Door',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.005 ETH',
      img: '../../assets/img/unsplash_RnCPiXixooY.png',
    },
    {
      title: 'Bi-Conditional Effect',
      subtitle: 'Pixart Motion',
      type: 'Fixed Price',
      price: '0.002 ETH',
      img: '../../assets/img/unsplash_VS_kFx4yF5g.png',
    },
    {
      title: 'Motion View',
      subtitle: 'Pixart Motion',
      type: 'Open Binding',
      price: '0.009 ETH',
      img: '../../assets/img/unsplash_tMbQpdguDVQ.png',
    },
  ];

  second_arr = this.array;

  constructor(private darkModeService: DarkModeService) {
    this.second_arr = this.paginate(this.array, this.page_size, 1);
    this.main_size = Math.ceil(this.array.length / this.page_size);
  }
  darkMode$ = this.darkModeService.darkMode$;

  onToggle(): void {
    this.darkModeService.toggle();
  }
  paginate(array: any, page_size: number, page_number: number): any {
    this.page_number = page_number;
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  side = 'normal';
  nextPage(i: number, side: string) {
    if (side == 'right') {
      i = i >= this.main_size ? this.main_size - 1 : i++;
    } else if (side == 'left' ) {
      console.log(i)
      i = i<=1 ? 0 : i=i-2;
      console.log(i)
    } 
    this.second_arr = this.paginate(this.array, this.page_size, i + 1);
  }
}
