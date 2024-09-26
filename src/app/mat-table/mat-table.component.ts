import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Cidade {
  codigo: string;
  descricao: string;
}

const DADOS: Cidade[] = [
  { codigo: '30100-000', descricao: 'Código postal de Belo Horizonte' },
  { codigo: '30200-000', descricao: 'Código postal de Contagem' },
  { codigo: '30300-000', descricao: 'Código postal de Uberlândia' },
  { codigo: '30400-000', descricao: 'Código postal de Juiz de Fora' },
  { codigo: '30500-000', descricao: 'Código postal de Governador Valadares' },
  { codigo: '30600-000', descricao: 'Código postal de Betim' },
  { codigo: '30700-000', descricao: 'Código postal de Montes Claros' },
  { codigo: '30800-000', descricao: 'Código postal de Ipatinga' },
  { codigo: '30900-000', descricao: 'Código postal de Sete Lagoas' },
  { codigo: '31000-000', descricao: 'Código postal de Divinópolis' },
  { codigo: '31100-000', descricao: 'Código postal de Uberaba' },
  { codigo: '31200-000', descricao: 'Código postal de Pouso Alegre' },
  { codigo: '31300-000', descricao: 'Código postal de Varginha' },
  { codigo: '31400-000', descricao: 'Código postal de Itabira' },
  { codigo: '31500-000', descricao: 'Código postal de Barbacena' },
  { codigo: '31600-000', descricao: 'Código postal de Patos de Minas' },
  { codigo: '31700-000', descricao: 'Código postal de Lavras' },
  { codigo: '31800-000', descricao: 'Código postal de Teófilo Otoni' },
  { codigo: '31900-000', descricao: 'Código postal de Sabará' },
  { codigo: '32000-000', descricao: 'Código postal de Araxá' },
  { codigo: '32100-000', descricao: 'Código postal de Almenara' },
  { codigo: '32200-000', descricao: 'Código postal de Andradas' },
  { codigo: '32300-000', descricao: 'Código postal de Araguari' },
  { codigo: '32400-000', descricao: 'Código postal de Barão de Cocais' },
  { codigo: '32500-000', descricao: 'Código postal de Bom Despacho' },
  { codigo: '32600-000', descricao: 'Código postal de Capitólio' },
  { codigo: '32700-000', descricao: 'Código postal de Carmo do Cajuru' },
  { codigo: '32800-000', descricao: 'Código postal de Cataguases' },
  { codigo: '32900-000', descricao: 'Código postal de Cláudio' },
  { codigo: '33000-000', descricao: 'Código postal de Congonhas' },
  { codigo: '33100-000', descricao: 'Código postal de Conselheiro Lafaiete' },
  { codigo: '33200-000', descricao: 'Código postal de Diamantina' },
  { codigo: '33300-000', descricao: 'Código postal de Espinosa' },
  { codigo: '33400-000', descricao: 'Código postal de Extrema' },
  { codigo: '33500-000', descricao: 'Código postal de Formiga' },
  { codigo: '33600-000', descricao: 'Código postal de Guaxupé' },
  { codigo: '33700-000', descricao: 'Código postal de Ibirité' },
  { codigo: '33800-000', descricao: 'Código postal de Igarapé' },
  { codigo: '33900-000', descricao: 'Código postal de Itajubá' },
  { codigo: '34000-000', descricao: 'Código postal de Itamarandiba' },
  { codigo: '34100-000', descricao: 'Código postal de Itambacuri' },
  { codigo: '34200-000', descricao: 'Código postal de Ituiutaba' },
  { codigo: '34300-000', descricao: 'Código postal de Itaúna' },
  { codigo: '34400-000', descricao: 'Código postal de Janaúba' },
  { codigo: '34500-000', descricao: 'Código postal de Januária' },
  { codigo: '34600-000', descricao: 'Código postal de João Monlevade' },
  { codigo: '34700-000', descricao: 'Código postal de Lagoa da Prata' },
  { codigo: '34800-000', descricao: 'Código postal de Leopoldina' },
  { codigo: '34900-000', descricao: 'Código postal de Manhuaçu' },
  { codigo: '35000-000', descricao: 'Código postal de Mariana' },
  { codigo: '35100-000', descricao: 'Código postal de Mário Campos' },
  { codigo: '35200-000', descricao: 'Código postal de Matozinhos' },
  { codigo: '35300-000', descricao: 'Código postal de Moeda' },
  { codigo: '35400-000', descricao: 'Código postal de Muriaé' },
  { codigo: '35500-000', descricao: 'Código postal de Nova Lima' },
  { codigo: '35600-000', descricao: 'Código postal de Nova Serrana' },
  { codigo: '35700-000', descricao: 'Código postal de Oliveira' },
  { codigo: '35800-000', descricao: 'Código postal de Pará de Minas' },
  { codigo: '35900-000', descricao: 'Código postal de Paracatu' },
  { codigo: '36000-000', descricao: 'Código postal de Passos' },
  { codigo: '36100-000', descricao: 'Código postal de Pirapora' },
  { codigo: '36200-000', descricao: 'Código postal de Poços de Caldas' },
  { codigo: '36300-000', descricao: 'Código postal de Ponte Nova' },
  { codigo: '36400-000', descricao: 'Código postal de Resplendor' },
  { codigo: '36500-000', descricao: 'Código postal de Rio Pardo de Minas' },
  { codigo: '36600-000', descricao: 'Código postal de Santa Luzia' },
  { codigo: '36700-000', descricao: 'Código postal de São João del-Rei' },
  { codigo: '36800-000', descricao: 'Código postal de São Sebastião do Paraíso' },
  { codigo: '36900-000', descricao: 'Código postal de Três Corações' },
  { codigo: '37000-000', descricao: 'Código postal de Unaí' }
];

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['codigo', 'descricao'];
  dataSource!: MatTableDataSource<Cidade>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    // Inicializando o dataSource com os dados
    this.dataSource = new MatTableDataSource<Cidade>(DADOS);
  }

  ngAfterViewInit() {
    // Associando o paginator após a inicialização da view
    this.dataSource.paginator = this.paginator;
  }

  aplicarFiltro(event: Event) {
  const filtroValor = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filtroValor.trim().toLowerCase();
  }
} 
