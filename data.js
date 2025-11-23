const database = {
    // ========================================================================
    // BASES NACIONAIS (FEDERAL)
    // ========================================================================
    "nacional": [
        {
            titulo: "MapBiomas Brasil - Coleção 9",
            descricao: "Série histórica de uso e cobertura da terra no Brasil (1985-2023). Essencial para análises temporais e validação de uso consolidado.",
            link: "https://plataforma.brasil.mapbiomas.org/",
            categoria: "Uso do Solo"
        },
        {
            titulo: "SICAR - Cadastro Ambiental Rural (Federal)",
            descricao: "Base federal para consulta pública e download de shapefiles dos imóveis rurais (Sicar/Jedy).",
            link: "https://www.car.gov.br/publico/imoveis/index",
            categoria: "Regularização"
        },
        {
            titulo: "SIGEF - INCRA",
            descricao: "Sistema de Gestão Fundiária. Download de certificações de imóveis rurais (limites precisos georreferenciados).",
            link: "https://sigef.incra.gov.br/consultar/parcelas/",
            categoria: "Fundiário"
        },
        {
            titulo: "INDE - Infraestrutura Nacional de Dados Espaciais",
            descricao: "O catálogo oficial do governo brasileiro. Centraliza dados de diversos ministérios e órgãos federais.",
            link: "https://visualizador.inde.gov.br/",
            categoria: "Metadados/Hub"
        },
        {
            titulo: "BDGEx - IBGE (Exército)",
            descricao: "Banco de Dados Geográficos do Exército. Cartas topográficas, vetores de hidrografia e malha viária oficial.",
            link: "https://bdgex.eb.mil.br/",
            categoria: "Topografia"
        },
        {
            titulo: "ANA - HidroWeb",
            descricao: "Agência Nacional de Águas. Dados de estações fluviométricas, pluviométricas e qualidade da água.",
            link: "https://www.snirh.gov.br/hidroweb/",
            categoria: "Hidrologia"
        },
        {
            titulo: "Embrapa Solos - GeoInfo",
            descricao: "Repositório de dados espaciais de solos (Zonais), zoneamento agrícola de risco climático (ZARC) e aptidão.",
            link: "http://geoinfo.cnps.embrapa.br/",
            categoria: "Pedologia"
        },
        {
            titulo: "INPE - TerraBrasilis",
            descricao: "Dados oficiais de desmatamento (PRODES) e alertas (DETER) para todos os biomas.",
            link: "http://terrabrasilis.dpi.inpe.br/",
            categoria: "Sensoriamento Remoto"
        },
        {
            titulo: "CPRM - GeoSGB",
            descricao: "Serviço Geológico do Brasil. Mapas geológicos, recursos minerais e águas subterrâneas (poços).",
            link: "https://geosgb.cprm.gov.br/",
            categoria: "Geologia"
        },
        {
            titulo: "SNIF - Sistema Nacional de Informações Florestais",
            descricao: "Painel de concessões florestais e inventário florestal nacional.",
            link: "https://snif.florestal.gov.br/pt-br/",
            categoria: "Florestal"
        }
    ],

    // ========================================================================
    // REGIÃO NORTE
    // ========================================================================
    "Acre": [
        {
            titulo: "SEMA-AC - Unidade Central de Geoprocessamento",
            descricao: "Base de dados ambientais e zoneamento ecológico-econômico (ZEE) do Acre.",
            link: "http://sema.ac.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "IMC - Instituto de Mudanças Climáticas",
            descricao: "Dados sobre serviços ambientais e monitoramento climático no Acre.",
            link: "https://imc.ac.gov.br/",
            categoria: "Clima"
        }
    ],
    "Amapá": [
        {
            titulo: "IEPA - Zoneamento Ecológico Econômico",
            descricao: "Instituto de Pesquisas Científicas e Tecnológicas do Amapá. Bases cartográficas do ZEE.",
            link: "http://zee.iepa.ap.gov.br/",
            categoria: "Planejamento"
        },
        {
            titulo: "SEMA-AP - Licenciamento",
            descricao: "Portal de serviços ambientais do estado do Amapá.",
            link: "https://sema.ap.gov.br/",
            categoria: "Estadual"
        }
    ],
    "Amazonas": [
        {
            titulo: "IPAAM - Portal da Transparência",
            descricao: "Instituto de Proteção Ambiental do Amazonas. Dados de licenciamento e autorizações de supressão.",
            link: "http://www.ipaam.am.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "SEDECTI - Base Cartográfica",
            descricao: "Secretaria de Desenvolvimento Econômico. Dados vetoriais de limites e infraestrutura.",
            link: "http://www.sedecti.am.gov.br/",
            categoria: "Economia"
        }
    ],
    "Pará": [
        {
            titulo: "SEMAS-PA - Portal de Análise do CAR",
            descricao: "Sistema oficial para consulta de Cadastro Ambiental Rural no Pará (essencial devido à gestão estadual).",
            link: "https://car.semas.pa.gov.br/#/",
            categoria: "Regularização"
        },
        {
            titulo: "ITERPA - Sicart",
            descricao: "Instituto de Terras do Pará. Consulta de processos fundiários e áreas quilombolas.",
            link: "https://iterpa.pa.gov.br/",
            categoria: "Fundiário"
        },
        {
            titulo: "SIAM - Sistema Integrado de Monitoramento",
            descricao: "Monitoramento ambiental e fiscalização do estado do Pará.",
            link: "https://monitoramento.semas.pa.gov.br/",
            categoria: "Sensoriamento Remoto"
        }
    ],
    "Rondônia": [
        {
            titulo: "GeoRondônia - SEDAM",
            descricao: "Infraestrutura de dados espaciais completa: CAR, unidades de conservação e queimadas.",
            link: "http://geo.sedam.ro.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "SIT - Sistema de Informações Territoriais",
            descricao: "Dados fundiários e de regularização do estado de Rondônia.",
            link: "https://rondonia.ro.gov.br/",
            categoria: "Fundiário"
        }
    ],
    "Roraima": [
        {
            titulo: "FEMARH - Licenciamento",
            descricao: "Fundação Estadual do Meio Ambiente e Recursos Hídricos. Dados de outorga e licenças.",
            link: "http://www.femarh.rr.gov.br/",
            categoria: "Hídrico/Ambiental"
        },
        {
            titulo: "ITERAIMA",
            descricao: "Instituto de Terras e Colonização de Roraima. Dados da malha fundiária estadual.",
            link: "https://www.iteraima.rr.gov.br/",
            categoria: "Fundiário"
        }
    ],
    "Tocantins": [
        {
            titulo: "NATURATINS - Sigam",
            descricao: "Sistema Integrado de Gestão Ambiental. Licenciamento e monitoramento no TO.",
            link: "https://naturatins.to.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "SEPLAN - Zoneamento (ZEE)",
            descricao: "Dados geográficos para planejamento agrícola e zoneamento ecológico do Tocantins.",
            link: "https://seplan.to.gov.br/",
            categoria: "Planejamento"
        }
    ],

    // ========================================================================
    // REGIÃO NORDESTE
    // ========================================================================
    "Alagoas": [
        {
            titulo: "IMA-AL - Gerenciamento Costeiro",
            descricao: "Dados do Instituto do Meio Ambiente de Alagoas, focado em unidades de conservação e costa.",
            link: "https://www2.ima.al.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "Alagoas em Dados",
            descricao: "Portal de estatísticas e geografia da SEPLAG Alagoas.",
            link: "http://dados.al.gov.br/",
            categoria: "Estatística"
        }
    ],
    "Bahia": [
        {
            titulo: "SEIA - Sistema Estadual de Informações Ambientais",
            descricao: "Um dos sistemas mais robustos do país. Consulta de licenças, outorgas e ASV.",
            link: "http://www.seia.ba.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "INEMA - GeoBahia",
            descricao: "Portal de visualização de mapas temáticos, recursos hídricos e monitoramento florestal.",
            link: "http://geobahia.inema.ba.gov.br/",
            categoria: "Geoprocessamento"
        },
        {
            titulo: "SEI - Mapas",
            descricao: "Superintendência de Estudos Econômicos e Sociais. Cartografia histórica e limites municipais.",
            link: "https://www.sei.ba.gov.br/",
            categoria: "Cartografia"
        }
    ],
    "Ceará": [
        {
            titulo: "Ceará Mapas Interativo (IPECE)",
            descricao: "Plataforma completa com dados de infraestrutura, recursos hídricos e limites do Ceará.",
            link: "https://mapas.ipece.ce.gov.br/",
            categoria: "Planejamento"
        },
        {
            titulo: "FUNCEME - Portal Hidrológico",
            descricao: "Referência nacional em meteorologia e recursos hídricos no semiárido.",
            link: "http://www.funceme.br/",
            categoria: "Clima/Água"
        },
        {
            titulo: "SEMACE - Licenciamento",
            descricao: "Consulta de processos de licenciamento ambiental e embargos no CE.",
            link: "https://www.semace.ce.gov.br/",
            categoria: "Estadual"
        }
    ],
    "Maranhão": [
        {
            titulo: "SEMA-MA - SigLA",
            descricao: "Sistema de Licenciamento Ambiental do Maranhão.",
            link: "https://www.sema.ma.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "IMESC - DataGEO",
            descricao: "Instituto Maranhense de Estudos Socioeconômicos e Cartográficos. Base cartográfica oficial.",
            link: "http://imesc.ma.gov.br/",
            categoria: "Cartografia"
        },
        {
            titulo: "Zoneamento Agroecológico (ZAE)",
            descricao: "Dados de aptidão agrícola específicos para o estado do Maranhão.",
            link: "http://www.agricultura.ma.gov.br/",
            categoria: "Agro"
        }
    ],
    "Paraíba": [
        {
            titulo: "AESA - Agência Executiva de Gestão das Águas",
            descricao: "Monitoramento de açudes, chuvas e gestão de bacias hidrográficas na Paraíba.",
            link: "http://www.aesa.pb.gov.br/",
            categoria: "Hídrico"
        },
        {
            titulo: "IDEME - Mapas",
            descricao: "Instituto de Desenvolvimento Municipal e Estadual. Bases cartográficas.",
            link: "https://ideme.pb.gov.br/",
            categoria: "Cartografia"
        }
    ],
    "Pernambuco": [
        {
            titulo: "CONDEPE/FIDEM - Mapas",
            descricao: "Agência Estadual de Planejamento. Aerofotogrametria e base cartográfica de PE.",
            link: "http://www.condepefidem.pe.gov.br/",
            categoria: "Planejamento"
        },
        {
            titulo: "CPRH - Licenciamento",
            descricao: "Agência Estadual de Meio Ambiente. Consulta de licenças e áreas protegidas.",
            link: "http://www.cprh.pe.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "APAC - Agência Pernambucana de Águas e Clima",
            descricao: "Monitoramento hidrometeorológico do estado.",
            link: "https://www.apac.pe.gov.br/",
            categoria: "Clima"
        }
    ],
    "Piauí": [
        {
            titulo: "INTERPI - Regularização Fundiária",
            descricao: "Instituto de Terras do Piauí. Consulta de processos de titulação e assentamentos.",
            link: "http://www.interpi.pi.gov.br/",
            categoria: "Fundiário"
        },
        {
            titulo: "SEMAR - Geoprocessamento",
            descricao: "Secretaria de Meio Ambiente. Dados de recursos hídricos e licenciamento.",
            link: "http://www.semar.pi.gov.br/",
            categoria: "Estadual"
        }
    ],
    "Rio Grande Do Norte": [
        {
            titulo: "IDEMA - Perfil do RN",
            descricao: "Dados socioeconômicos e ambientais, incluindo zoneamento ecológico (ZEE).",
            link: "http://www.idema.rn.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "IGARN - Gestão de Águas",
            descricao: "Instituto de Gestão das Águas do RN. Monitoramento de reservatórios e outorgas.",
            link: "http://www.igarn.rn.gov.br/",
            categoria: "Hídrico"
        }
    ],
    "Sergipe": [
        {
            titulo: "ADEMA - Licenciamento",
            descricao: "Administração Estadual do Meio Ambiente. Serviços online de licenciamento.",
            link: "https://www.adema.se.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "Atlas Digital de Recursos Hídricos",
            descricao: "Base de dados sobre bacias hidrográficas e disponibilidade hídrica em Sergipe.",
            link: "https://semarh.se.gov.br/",
            categoria: "Hídrico"
        }
    ],

    // ========================================================================
    // REGIÃO CENTRO-OESTE
    // ========================================================================
    "DistritoFederal": [
        {
            titulo: "SISDIA - IDE do Distrito Federal",
            descricao: "Sistema Distrital de Informações Ambientais. A mais completa infraestrutura de dados do DF.",
            link: "https://www.sisdia.df.gov.br/",
            categoria: "Geo/Hub"
        },
        {
            titulo: "IBRAM - Brasília Ambiental",
            descricao: "Instituto do Meio Ambiente e dos Recursos Hídricos. Licenciamento e mapas de UCs.",
            link: "http://www.ibram.df.gov.br/",
            categoria: "Estadual"
        }
    ],
    "Goiás": [
        {
            titulo: "SIEG - Sistema Estadual de Geoinformação",
            descricao: "Referência nacional. Dados completos de recursos hídricos, relevo, infraestrutura e imagens.",
            link: "https://sieg.go.gov.br/",
            categoria: "Geo/Hub"
        },
        {
            titulo: "SEMAD - WebOutorga",
            descricao: "Consulta e solicitação de outorga de uso da água em Goiás.",
            link: "https://www.meioambiente.go.gov.br/",
            categoria: "Hídrico"
        },
        {
            titulo: "IMB - Instituto Mauro Borges",
            descricao: "Estatísticas, mapas e estudos socioeconômicos de Goiás.",
            link: "https://www.imb.go.gov.br/",
            categoria: "Estatística"
        }
    ],
    "Mato Grosso": [
        {
            titulo: "SEMA-MT - GeoPortal",
            descricao: "Principal fonte para o CAR estadual (SIMCAR), licenciamento e monitoramento.",
            link: "http://monitoramento.sema.mt.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "IMEA - Dados Agrícolas",
            descricao: "Instituto Mato-grossense de Economia Agropecuária. Dados de safra, clima e mercado.",
            link: "https://www.imea.com.br/",
            categoria: "Economia"
        },
        {
            titulo: "INTERMAT - Terras",
            descricao: "Instituto de Terras de Mato Grosso. Cartografia fundiária e glebas públicas.",
            link: "http://www.intermat.mt.gov.br/",
            categoria: "Fundiário"
        }
    ],
    "Mato Grosso Do Sul": [
        {
            titulo: "IMASUL - SIRIEMA",
            descricao: "Sistema IMASUL de Registros e Informações Estratégicas do Meio Ambiente. Licenciamento online.",
            link: "https://www.imasul.ms.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "GeoMS - Portal de Dados",
            descricao: "Portal de dados geoespaciais do governo do Mato Grosso do Sul.",
            link: "https://www.geoms.ms.gov.br/",
            categoria: "Geo/Hub"
        },
        {
            titulo: "BIOSUL - Dados Bioenergia",
            descricao: "Informações focadas no setor sucroenergético e agrícola do MS.",
            link: "https://biosul.com.br/",
            categoria: "Agro"
        }
    ],

    // ========================================================================
    // REGIÃO SUDESTE
    // ========================================================================
    "Espírito Santo": [
        {
            titulo: "GEOBASES - ES",
            descricao: "Sistema Integrado de Bases Geoespaciais do ES. Ortofotos de alta resolução e cadastro técnico.",
            link: "https://geobases.es.gov.br/",
            categoria: "Geo/Hub"
        },
        {
            titulo: "IDAF - Defesa Agropecuária",
            descricao: "Instituto de Defesa Agropecuária e Florestal. Gestão do CAR e fiscalização.",
            link: "https://idaf.es.gov.br/",
            categoria: "Agro/Florestal"
        },
        {
            titulo: "IEMA - Recursos Hídricos",
            descricao: "Instituto Estadual de Meio Ambiente. Monitoramento da qualidade do ar e águas.",
            link: "https://iema.es.gov.br/",
            categoria: "Estadual"
        }
    ],
    "Minas Gerais": [
        {
            titulo: "IDE-SISEMA (MG)",
            descricao: "Infraestrutura de Dados Espaciais do Sistema Estadual de Meio Ambiente. Base oficial de MG.",
            link: "https://idesisema.meioambiente.mg.gov.br/",
            categoria: "Geo/Hub"
        },
        {
            titulo: "Portal GeoMinas - CODEMGE",
            descricao: "Dados geológicos, aerogeofísica e recursos minerais do estado de MG.",
            link: "http://www.geominas.mg.gov.br/",
            categoria: "Geologia"
        },
        {
            titulo: "IGAM - Mapa de Qualidade das Águas",
            descricao: "Instituto Mineiro de Gestão das Águas. Monitoramento quali-quantitativo.",
            link: "http://igam.mg.gov.br/",
            categoria: "Hídrico"
        }
    ],
    "Rio De Janeiro": [
        {
            titulo: "INEA - Portal Geo",
            descricao: "Instituto Estadual do Ambiente. Mapas de unidades de conservação, faixas marginais e licenciamento.",
            link: "http://www.inea.rj.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "CIDE - Base Territorial",
            descricao: "Fundação Centro Estadual de Estatísticas. Limites municipais e dados censitários detalhados.",
            link: "http://www.cide.rj.gov.br/",
            categoria: "Estatística"
        },
        {
            titulo: "Data.Rio (Capital)",
            descricao: "Se estiver focado na capital, este é o maior portal de dados abertos municipais do país.",
            link: "https://www.data.rio/",
            categoria: "Municipal"
        }
    ],
    "São Paulo": [
        {
            titulo: "DataGEO - SP",
            descricao: "Infraestrutura de Dados Espaciais Ambiental de SP. A mais completa base ambiental estadual.",
            link: "http://datageo.ambiente.sp.gov.br/",
            categoria: "Geo/Hub"
        },
        {
            titulo: "IGC - Instituto Geográfico e Cartográfico",
            descricao: "Base cartográfica oficial do estado, mapas históricos e limites administrativos.",
            link: "http://www.igc.sp.gov.br/",
            categoria: "Cartografia"
        },
        {
            titulo: "IEA - Instituto de Economia Agrícola",
            descricao: "Banco de dados de preços agrícolas, safras e estatísticas rurais de SP.",
            link: "http://www.iea.sp.gov.br/",
            categoria: "Economia"
        },
        {
            titulo: "DAEE - Outorgas",
            descricao: "Departamento de Águas e Energia Elétrica. Consulta de poços e outorgas superficiais.",
            link: "http://www.daee.sp.gov.br/",
            categoria: "Hídrico"
        }
    ],

    // ========================================================================
    // REGIÃO SUL
    // ========================================================================
    "Paraná": [
        {
            titulo: "Portal GeoParaná (IAT)",
            descricao: "Instituto Água e Terra. Dados fundiários, ambientais e o CAR estadual.",
            link: "https://www.iat.pr.gov.br/",
            categoria: "Geo/Hub"
        },
        {
            titulo: "IPARDES - Base Cartográfica",
            descricao: "Instituto Paranaense de Desenvolvimento. Shapefiles de solos, uso da terra e limites.",
            link: "http://www.ipardes.pr.gov.br/",
            categoria: "Planejamento"
        },
        {
            titulo: "IDR-Paraná (Emater/Iapar)",
            descricao: "Dados sobre zoneamento agrícola e pesquisa agropecuária no estado.",
            link: "https://www.idrparana.pr.gov.br/",
            categoria: "Agro"
        }
    ],
    "Santa Catarina": [
        {
            titulo: "SIGSC - Infraestrutura de Dados",
            descricao: "Sistema de Informações Geográficas de SC. Integra dados de diversas secretarias.",
            link: "http://www.sigsc.sc.gov.br/",
            categoria: "Geo/Hub"
        },
        {
            titulo: "Epagri/Ciram",
            descricao: "Referência em monitoramento ambiental e meteorológico. Dados de solos e aptidão agrícola.",
            link: "https://ciram.epagri.sc.gov.br/",
            categoria: "Agro/Clima"
        },
        {
            titulo: "IMA-SC - Licenciamento",
            descricao: "Instituto do Meio Ambiente de Santa Catarina. Consulta de processos LAI/LAP/LAO.",
            link: "https://www.ima.sc.gov.br/",
            categoria: "Estadual"
        }
    ],
    "Rio Grande Do Sul": [
        {
            titulo: "IEDE - RS",
            descricao: "Infraestrutura Estadual de Dados Espaciais. O hub central de geodados gaúcho.",
            link: "https://iede.rs.gov.br/",
            categoria: "Geo/Hub"
        },
        {
            titulo: "FEPAM - Sistemas",
            descricao: "Fundação Estadual de Proteção Ambiental. Licenciamento e monitoramento da qualidade.",
            link: "http://www.fepam.rs.gov.br/",
            categoria: "Estadual"
        },
        {
            titulo: "SEMA-RS - Outorga",
            descricao: "Sistema de Outorga de Água do Rio Grande do Sul (SIOUT).",
            link: "https://www.sema.rs.gov.br/",
            categoria: "Hídrico"
        }
    ]
};