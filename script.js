// $(document).ready(function() {
//     const selectElement = $("#selectOptions");
  
//     // Function to fetch data from the server using AJAX
//     function fetchData() {
//       return $.ajax({
//         url: "http://magosdeiliria.ddns.net:5000/ListarDocumentos", // Replace with your actual API endpoint
//         method: "GET",
//         error: function(xhr, status, error) {
//           console.error("Error fetching data:", error);
//         }
//       });
//     }
  
//     // Function to update the select element with fetched data
//     function updateSelectOptions(data) {
//       data.forEach((option) => {
//         const optionElement = $("<option>").val(option).text(option);
//         selectElement.append(optionElement);
//       });
//     }
  
//     // Fetch data and update the select element on page load
//     fetchData().done((data) => updateSelectOptions(data));
//   });

var lista = [
  {
    "TipoServico": "ciclofaixa",
    "DescricaoServico": "Ciclofaixa",
    "Categoria": "transito"
  },
  {
    "TipoServico": "ciclovia",
    "DescricaoServico": "Ciclovia",
    "Categoria": "transito"
  },
  {
    "TipoServico": "ciclovia_ou_ciclofaixa",
    "DescricaoServico": "Ciclovia ou Ciclofaixa",
    "Categoria": "transito"
  },
  {
    "TipoServico": "desobstrucao_da_boca_de_lobo",
    "DescricaoServico": "Desobstrução da Boca de Lobo",
    "Categoria": "limpeza"
  },
  {
    "TipoServico": "lampada_incandescente_queimada",
    "DescricaoServico": "Lâmpada Incandescente Queimada",
    "Categoria": "iluminacao"
  },
  {
    "TipoServico": "lampada_LED_queimada",
    "DescricaoServico": "Lâmpada LED Queimada",
    "Categoria": "iluminacao"
  },
  {
    "TipoServico": "limpeza",
    "DescricaoServico": "Limpeza",
    "Categoria": "limpeza"
  },
  {
    "TipoServico": "lombada",
    "DescricaoServico": "Lombada",
    "Categoria": "transito"
  },
  {
    "TipoServico": "lombada_ou_lombofaixa",
    "DescricaoServico": "Lombada ou Lombofaixa",
    "Categoria": "transito"
  },
  {
    "TipoServico": "lombofaixa",
    "DescricaoServico": "Lombofaixa",
    "Categoria": "transito"
  },
  {
    "TipoServico": "plantio_de_arvore",
    "DescricaoServico": "Plantio de Árvore",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "poda_de_arvore",
    "DescricaoServico": "Poda de Árvore",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "recapeamento",
    "DescricaoServico": "Recapeamento",
    "Categoria": "transito"
  },
  {
    "TipoServico": "recolhimento_de_inserviveis",
    "DescricaoServico": "Recolhimento de Inservíveis",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "recolocacao_de_paralelepipedos",
    "DescricaoServico": "Recolocação de Paralelepípedos",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "remocao_de_arvore",
    "DescricaoServico": "Remoção de Árvore",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "remocao_de_fios_de_eletricidade",
    "DescricaoServico": "Remoção de Fios de Eletricidade",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "reparo_do_braco_do_poste",
    "DescricaoServico": "Reparo do Braço do Poste",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "tampa_da_boca_de_lobo",
    "DescricaoServico": "Tampa da Boca de Lobo",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "tampa_de_poco_de_visita",
    "DescricaoServico": "Tampa de Poço de Visita",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "tapa_buraco",
    "DescricaoServico": "Tapa-buraco",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "troca_de_luz_queimada_em_semafaro_com_numeral",
    "DescricaoServico": "Troca de Luz Queimada em Semáforo com Numeral",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "troca_de_luz_queimada_em_semafaro_sem_numeral",
    "DescricaoServico": "Troca de Luz Queimada em Semáforo sem Numeral",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "valeta_canaleta_pluvial",
    "DescricaoServico": "Valeta Canaleta Pluvial",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "vazamento_de_água_ou_esgoto",
    "DescricaoServico": "Vazamento de Água ou Esgoto",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "vistoria_calcada",
    "DescricaoServico": "Vistoria de Calçada",
    "Categoria": "xxxx"
  },
  {
    "TipoServico": "vistoria_terreno",
    "DescricaoServico": "Vistoria de Terreno",
    "Categoria": "xxxx"
  }
];


function popularSelect(lista) {
  var select = document.getElementById("selectOptions");
  var transito = document.getElementById("transito");
  var limpeza = document.getElementById("limpeza");
  var agua_esgoto = document.getElementById("agua_esgoto");
  var iluminacao = document.getElementById("iluminacao");
  var texto = "";
  lista.forEach(element => {
    switch(element.Categoria) {
      case "transito":
        transito.innerHTML += "<option value='"+ element.TipoServico +"'>"+ element.DescricaoServico +"</option>";
        break;
      case "iluminacao":
        iluminacao.innerHTML += "<option value='"+ element.TipoServico +"'>"+ element.DescricaoServico +"</option>";
        break;
      case "agua_esgoto":
        agua_esgoto.innerHTML += "<option value='"+ element.TipoServico +"'>"+ element.DescricaoServico +"</option>";
        break;
      case "limpeza":
        limpeza.innerHTML += "<option value='"+ element.TipoServico +"'>"+ element.DescricaoServico +"</option>";
        break;
      default:
        break;
    }
    //texto += "<option value='"+ element.TipoServico +"'>"+ element.DescricaoServico +"</option>";
  });
  //select.innerHTML = texto
}

$(document).ready(popularSelect(lista));