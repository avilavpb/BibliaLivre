# Erratas da VPB sobre a Bíblia Livre

Este fork **não é a Bíblia Livre**. É uma versão derivada, mantida pela VPB, da Bíblia Livre (BLIVRE), Copyright © Diego Santos, Mario Sérgio e Marco Teles, versão 2025.1.0 (commit a315a15), https://sites.google.com/site/biblialivre/ , sob a Licença Creative Commons Atribuição 3.0 Brasil (https://creativecommons.org/licenses/by/3.0/br/). A Bíblia Livre não endossa estas alterações.

Norma: a autoridade é o original (NT: Textus Receptus, Scrivener 1894; AT: texto massorético tradicional, Ben Chayyim/Bomberg 1524-25). Quando o original é claro, segue-se a leitura dada a ele pela KJV (1769). Não se consultam ARA, ACF ou NVI durante o trabalho.

Os textos da branch `vpb` trazem as alterações; a branch `master` acompanha o original (remote `upstream` = blivre/BibliaLivre).

| Ref. | Bíblia Livre 2025.1.0 | VPB | Original | KJV | Motivo |
|---|---|---|---|---|---|
| Jó 39.27 | "a água voa alto" | "a águia voa alto" | נֶשֶׁר | "the eagle" | Erro de digitação (Almeida 1819: "aguia") |
| Mt 24.28 | "os abutres" | "as águias" | ἀετοί (TR, Majoritário e Crítico) | "the eagles" | Fidelidade ao original |
| Lc 17.37 | "os abutres" | "as águias" | ἀετοί | "the eagles" | Fidelidade ao original |
| Pv 30.17 | "os filhotes de abutre" | "os filhotes de águia" | בְנֵי־נָשֶׁר | "the young eagles" | Fidelidade ao original |

Arquivos alterados nas quatro correções acima (commit 805bc66): `textos/f4/geral`, `textos/f4/tr` e `textos/f4/n4`. A partir da rodada seguinte, as correções são feitas apenas para a versão TR (`textos/f4/geral` + regeneração de `textos/f4/tr`); `textos/f4/n4` não é mais alterado.

## Camada 1 – correções mecânicas (rodada de 2026-11)

Varredura automática de toda a Bíblia na versão TR (`textos/f4/tr`). Todas as correções foram feitas em `textos/f4/geral` e `textos/f4/tr` foi regenerado com `conversores/inclusao_condicional.js` (marcadores `tr`, `trnc`); `textos/f4/n4` **não** foi alterado nesta rodada. Os livros do AT em `tr` continuam idênticos a `geral` (exceto Deuteronômio e Salmos, que têm marcadores próprios).

Total: 898 correções.

- **Lc 4.8** – `tr/luc.txt` estava desatualizado em relação a `geral` ("está" → "está escrito:"); corrigido pela regeneração.

### Marcadores condicionais/blocos malformados (afetavam o texto TR) (27)

- **At 2.38** – Marcador malformado "{n4: vossos}" fazia a versão TR perder o fim do versículo ("pecados; e recebereis o dom do Espírito Santo.")
- **Cl 2.2** – Versão TR terminava em "e de" (faltava "Cristo."); TR: καὶ τοῦ Χριστοῦ
- **Mt 14.22** – Marcador malformado "{tr:seus}" apagava "seus" na TR (TR: τοὺς μαθητὰς αὐτοῦ)
- **Mc 10.46** – Marcador "{tn|rp}" (erro de digitação) apagava ", mendigando" na TR (TR: προσαιτῶν)
- **Mc 14.70** – Chave solta "}" aparecia no texto
- **Rm 16.20** – Chave solta "}" aparecia no texto
- **Jo 9.9** – Marcador "{tr|pr}" corrigido para "{tr|rp}" (sem efeito no texto TR)
- **Ef 3.6** – Marcador "{tnrc}" corrigido para "{trnc}": a nota de rodapé voltava a aparecer na TR
- **Rm 5.1** – Linha de nota do N4 sem marcador vazava para o texto TR ("temosRP, TR, NA e SBL: temos")
- **Mt 5.44** – Continuação de nota do N4 sem marcador vazava para o texto TR ("perseguem”. Comparar com Lucas 6:27,28")
- **Lc 14.4** – Nota de rodapé sem fechamento (\fn em vez de \*fn)
- **Lc 7.28** – Fechamento de nota malformado ("*fn"): o resto do versículo ("maior que João…") era engolido pela nota
- **Lc 21.1** – Fechamento de acréscimo malformado ("*added")
- **Lc 6.7** – Marcador com espaço sobrando
- **Lc 22.8** – Marcadores com espaço sobrando
- **Mt 9.10** – Marcadores com espaço sobrando
- **Sl 144.14** – Marcadores de acréscimo/nota trocados (nota aberta duas vezes, acréscimo sem fechamento)
- **Lc 9.56** – Continuação de nota do N4 sem marcador vazava para o texto TR
- **Mt 27.35** – Continuação de nota RP/N4 sem marcador vazava para o texto TR
- **Mt 27.35** – Linha de nota sem marcador (sem efeito na TR)
- **Mt 13.11** – Linha de nota sem marcador (sem efeito na TR)
- **Mt 14.25** – Linha de nota sem marcador (sem efeito na TR)
- **Mt 21.14** – Linha de nota sem marcador (sem efeito na TR)
- **Lc 10.42** – Fechamento de nota com marcador trocado (sem efeito na TR)
- **Mt 3.11** – Abertura de nota malformada (sem efeito na TR)
- **Jo 9.20** – Marcador {n4} separado da linha: a TR saía "Então seusSeus pais"; agora TR "Seus pais lhes responderam" (TR sem οὖν)
- **Mc 12.36** – Versão TR truncada: a linha TR ("Porque o") perdeu o trecho comum que ficou só na linha N4; TR: Αὐτὸς γὰρ Δαβὶδ εἶπεν ἐν τῷ πνεύματι τῷ ἁγίῳ

### Versículo vazio (1)

- **At 28.29** – Versículo vazio na TR (a nota dizia que o N4 não o contém, mas o texto TR não existia). Texto da Almeida 1819 atualizado: "E avendo elle dito isto, foraõ-se os Judeos, tendo entre si grande contenda." TR: καὶ ταῦτα αὐτοῦ εἰπόντος ἀπῆλθον οἱ Ἰουδαῖοι πολλὴν ἔχοντες ἐν ἑαυτοῖς συζήτησιν

### Versificação (1)

- **Mc 5.18** – Faltava o marcador do versículo 19 (o texto do v. 19 estava colado ao v. 18)

### Versículos truncados completados (4)

- **Dt 5.14** – Versículo truncado ("como" → "como tu."); hebr. כָּמוֹךָ
- **1Rs 12.32** – Versículo truncado; completado conforme o hebraico (וְהֶעֱמִיד... אֶת־כֹּהֲנֵי הַבָּמוֹת אֲשֶׁר עָשָׂה) e a Almeida 1819 ("estabeleceo sacerdotes dos altos, que fizera")
- **2Cr 28.9** – Versículo truncado; completado conforme o hebraico (וַתַּהַרְגוּ־בָם בְּזַעַף עַד לַשָּׁמַיִם הִגִּיעַ) e a Almeida 1819 ("e vós com tanta ira os matastes, que até os ceos tem chegado")
- **2Cr 8.14** – Versículo truncado; completado conforme o hebraico (בְּשַׁעַר וָשָׁעַר כִּי כֵן מִצְוַת דָּוִיד אִישׁ־הָאֱלֹהִים) e a Almeida 1819 ("a cada porta: porque tal era o mandado de David, o varaõ de Deus")

### Palavras duplicadas (53)

- **1Cr 5.1** – Palavra duplicada: "de de seu pai" → "de seu pai"
- **Am 1.5** – Palavra duplicada: "cetro de de Bete" → "cetro de Bete"
- **Esd 2.34** – Palavra duplicada: "filhos de de Jericó" → "filhos de Jericó"
- **Is 65.5** – Palavra duplicada: "aproximes de de mim" → "aproximes de mim"
- **Ez 28.2** – Palavra duplicada: "trono de de Deus" → "trono de Deus"
- **1Rs 1.51** – Palavra duplicada: "Eis que que" → "Eis que"
- **1Rs 3.21** – Palavra duplicada: "eis que que" → "eis que"
- **1Rs 11.31** – Palavra duplicada: "Eis que que" → "Eis que"
- **1Rs 13.3** – Palavra duplicada: "eis que que" → "eis que"
- **2Cr 9.6** – Palavra duplicada: "eis que que" → "eis que"
- **Jr 6.10** – Palavra duplicada: "Eis que que" → "Eis que"
- **Jr 7.20** – Palavra duplicada: "Eis que que" → "Eis que"
- **Jr 9.7** – Palavra duplicada: "Eis que que" → "Eis que"
- **2Cr 22.9** – Palavra duplicada: "para para" → "para"
- **2Pd 1.14** – Palavra duplicada: "do meu meu" → "do meu"
- **Am 6.10** – Palavra duplicada: "da da casa" → "da casa"
- **Ap 2.8** – Palavra duplicada: "diz o o primeiro" → "diz o primeiro"
- **At 5.14** – Palavra duplicada: "dos que que criam" → "dos que criam"
- **At 10.7** – Palavra duplicada: "E e quando" → "E quando"
- **At 14.16** – Palavra duplicada: "os os gentios" → "os gentios"
- **At 21.27** – Palavra duplicada: "quase quase" → "quase"
- **Dn 5.16** – Palavra duplicada: "puderes puderes" → "puderes"
- **Dn 8.27** – Palavra duplicada: "do do rei" → "do rei"
- **Esd 6.10** – Palavra duplicada: "ao ao Deus" → "ao Deus"
- **Ex 2.19** – Palavra duplicada ("as as" → "às")
- **Ez 8.4** – Palavra duplicada: "a a glória" → "a glória"
- **Ez 17.18** – Palavra duplicada: "todas todas" → "todas"
- **Ez 47.9** – Palavra duplicada: "este este" → "este"
- **Gl 2.2** – Palavra duplicada: "eu eu" → "eu"
- **Hab 1.14** – Palavra duplicada: "como como" → "como"
- **Is 1.25** – Palavra duplicada: "minha minha" → "minha"
- **Is 8.5** – Palavra duplicada: "a a falar" → "a falar"
- **Is 43.9** – Palavra duplicada: "isto isto" → "isto"
- **Is 58.4** – Palavra duplicada: "vossa vossa" → "vossa"
- **Is 66.14** – Palavra duplicada: "do do SENHOR" → "do SENHOR"
- **Jr 14.9** – Palavra duplicada: "de nós nós" → "de nós"
- **Jr 17.16** – Palavra duplicada: "ser ser" → "ser"
- **Jó 2.1** – Palavra duplicada: "e e Satanás" → "e Satanás"
- **Jó 13.11** – Palavra duplicada: "sobre sobre" → "sobre"
- **Jó 20.2** – Palavra duplicada: "meus meus" → "meus"
- **Jo 9.40** – Palavra duplicada: "dos dos fariseus" → "dos fariseus"
- **Jz 20.42** – Palavra duplicada; "cidade" → "cidades" (hebr. מֵהֶעָרִים)
- **Lc 11.8** – Palavra duplicada: "seu seu" → "seu"
- **Lc 20.31** – Palavra duplicada; "semm" → "sem"
- **Ne 2.12** – Palavra duplicada: "ser o o em" → "ser o em"
- **Nm 16.33** – Palavra duplicada; "a a terra" → "e a terra" (hebr. וַתְּכַס עֲלֵיהֶם הָאָרֶץ)
- **Prv 22.1** – Palavra duplicada: "o o ouro" → "o ouro"
- **Prv 23.25** – "te te" → "que te" (hebr. יוֹלַדְתֶּךָ)
- **Sl 104.25** – Palavra duplicada: "há há" → "há"
- **Ef 5.13** – Palavra duplicada: "o que se se torna" → "o que se torna"
- **1Rs 21.26** – Palavra duplicada: "após o os ídolos" → "após os ídolos"
- **Ap 21.1** – Palavra duplicada: "passaram; e e" → "passaram; e"
- **Jó 15.13** – Palavra duplicada (acréscimo "tais" + "tais")

### Ortografia e troca de palavras (115)

- **1Cr 2.7** – Ortografia: "maldiçãos" → "maldições"
- **1Cr 2.19** – Ortografia: "tmou" → "tomou"
- **1Cr 18.10** – Ortografia: "utensílos" → "utensílios"
- **1Cr 19.6** – Ortografia: "carruragens" → "carruagens"
- **1Cr 19.11** – Ortografia: "pôes" → "pões"
- **1Cr 24.10** – Ortografia: "sétiam" → "sétima"
- **1Rs 8.37** – Ortografia: "herra" → "terra"
- **1Rs 8.50** – Ortografia: "teem" → "têm"
- **1Rs 11.23** – Ortografia: "fugído" → "fugido"
- **1Sm 23.13** – Ortografia: "sairam" → "saíram"
- **1Ts 4.11** – Ortografia: "trantando" → "tratando"
- **2Cr 1.17** – Ortografia: "trziam" → "traziam"
- **2Cr 22.7** – Ortografia: "destruíção" → "destruição"
- **2Cr 36.10** – Ortografia: "utensílos" → "utensílios"
- **2Cr 36.21** – Ortografia: "ruina" → "ruína"
- **2Rs 9.27** – Ortografia: "siguiu" → "seguiu"
- **2Sm 7.12** – Ortografia: "establecerei" → "estabelecerei"
- **2Sm 13.15** – Ortografia: "aborrecimiento" → "aborrecimento"
- **2Sm 16.9** – Ortografia: "almadiçoa" → "amaldiçoa"
- **2Sm 16.10** – Ortografia: "almadiçoasse" → "amaldiçoasse"
- **2Sm 16.10** – Ortografia: "almadiçoa" → "amaldiçoa"
- **2Tm 2.16** – Ortografia: "inútes" → "inúteis"
- **2Tm 3.3** – Ortografia: "dominio" → "domínio"
- **At 1.12** – Ortografia: "disstância" → "distância"
- **At 19.18** – Ortografia: "declararando" → "declarando"
- **At 22.23** – Ortografia: "lançavm" → "lançavam"
- **Ec 5.11** – Ortografia: "cosomem" → "consomem"
- **Ec 8.13** – Ortografia: "diane" → "diante"
- **Ez 31.12** – Ortografia: "terrivel" → "terrível"
- **Gn 17.17** – Ortografia: "nasceráfilho" → "nascerá filho"
- **Gn 17.17** – Ortografia: "postrou" → "prostrou"
- **Is 59.17** – Ortografia: "vestu" → "vestiu"
- **Jr 29.14** – Ortografia: "restauarei" → "restaurarei"
- **Jr 29.19** – Ortografia: "próem" → "porém"
- **Jr 39.5** – Ortografia: "plancíes" → "planícies"
- **Jó 20.18** – Ortografia: "comério" → "comércio"
- **Jó 20.23** – Ortografia: "vendre" → "ventre"
- **Jo 3.12** – Ortografia: "creedes" → "credes"
- **Jo 7.25** – Ortografia: "dizam" → "diziam"
- **Jo 8.52** – Ortografia: "disserams" → "disseram"
- **Jo 14.5** – Ortografia: "diss" → "disse"
- **Jo 14.7** – Ortografia: "conheceríes" → "conheceríeis"
- **Jo 14.8** – Ortografia: "suficente" → "suficiente"
- **Jo 18.31** – Ortografia: "julguai" → "julgai"
- **Js 6.14** – Ortografia: "rodeararm" → "rodearam"
- **Js 7.15** – Ortografia: "porquae" → "porque"
- **Js 19.9** – Ortografia: "escessiva" → "excessiva"
- **Jz 2.18** – Ortografia: "gemideles" → "gemido deles"
- **Jz 3.19** – Ortografia: "sairam" → "saíram"
- **Jz 13.24** – Ortografia: "creceu" → "cresceu"
- **Lc 3.1** – Ortografia: "tetraca" → "tetrarca"
- **Lc 9.40** – Ortografia: "exupulsassem" → "expulsassem"
- **Lc 11.32** – Ortografia: "aquie" → "aqui"
- **Lc 12.26** – Ortografia: "tends" → "tendes"
- **Lc 18.4** – Ortografia: "ningúem" → "ninguém"
- **Lc 21.14** – Ortografia: "võs" → "vós"
- **Lc 21.19** – Ortografia: "perserverança" → "perseverança"
- **Lc 24.12** – Ortografia: "lençois" → "lençóis"
- **Mc 2.19** – Ortografia: "dissem" → "disse"
- **Mc 14.53** – Ortografia: "runiram" → "reuniram"
- **Mt 5.33** – Ortografia: "ouvstes" → "ouvistes"
- **Mt 14.3** – Ortografia: "acorrrentado" → "acorrentado"
- **Mt 14.16** – Ortografia: "ncessário" → "necessário"
- **Mt 16.9** – Ortografia: "levanstastes" → "levantastes"
- **Mt 21.24** – Ortografia: "dise" → "disse"
- **Mt 21.30** – Ortografia: "respdondendo" → "respondendo"
- **Mt 21.39** – Ortografia: "agarrarando" → "agarrando"
- **Mt 23.15** – Ortografia: "rodeiais" → "rodeais"
- **Mt 26.45** – Ortografia: "durmi" → "dormi"
- **Na 2.7** – Ortografia: "descobarta" → "descoberta"
- **Ne 5.17** – Ortografia: "ns nações" → "nações"
- **Ne 13.15** – Ortografia: "presnas" → "prensas"
- **Nm 14.22** – Ortografia: "obeceram" → "obedeceram"
- **Nm 22.17** – Ortografia: "almaldiçoa" → "amaldiçoa"
- **Rm 8.36** – Ortografia: "entreges" → "entregues"
- **Sl 31.7** – Ortografia: "jubiliarei" → "jubilarei"
- **Sl 32.2** – Ortografia: "abribui" → "atribui"
- **Sl 37.25** – Ortografia: "medigar" → "mendigar"
- **Sl 50.16** – Ortografia: "preverso" → "perverso"
- **Sl 55.23** – Ortografia: "decer" → "descer"
- **Sl 68.9** – Ortografia: "quuando" → "quando"
- **Sl 68.33** – Ortografia: "antinguidade" → "antiguidade"
- **Sl 78.55** – Ortografia: "distribuissem" → "distribuíssem"
- **Sl 94.19** – Ortografia: "mulitdão" → "multidão"
- **Sl 105.22** – Ortografia: "sabeoria" → "sabedoria"
- **Sl 109.12** – Ortografia: "misercórdia" → "misericórdia"
- **Sl 123.3** – Ortografia: "misercórdia" → "misericórdia"
- **Sl 137.3** – Ortografia: "operessores" → "opressores"
- **Sf 3.20** – Ortografia: "resutaurar" → "restaurar"
- **Zc 7.1** – Ortografia: "noquarto" → "no quarto"
- **Zc 7.13** – Ortografia: "tamb~em" → "também"
- **Nm 15.5** – Troca de palavra: "veio" → "vinho" (hebr. וְיַיִן)
- **Cl 2.2** – Concordância: "da pleno" → "do pleno"
- **Dt 5.14** – Concordância: "tua boi/asno" → "teu"
- **Dt 5.14** – Concordância: "tua peregrino" → "teu"
- **At 25.5** – Ortografia: "com [igo]" → "[comigo]"
- **1Cr 1.11** – Nome duplicado ("aos leabeus, aos leabeus")
- **1Cr 23.13** – Ortografia: "bendisessem" → "bendissessem"
- **At 7.59** – Ortografia: "clavama" → "clamava"
- **1Sm 4.3** – Ortografia: "campamento" → "acampamento"
- **Prv 11.15** – Palavra faltando: "aquele odeia" → "aquele que odeia"
- **Gn 49.11** – Troca de palavra: "veio" → "vinho" (hebr. בַּיַּיִן)
- **Gn 19.26** – Erro de digitação: "sai" → "sal" (hebr. מֶלַח)
- **Ap 6.1** – Erro de digitação: "Coreiro" → "Cordeiro"
- **Am 9.14** – Erro de digitação: "Isarael" → "Israel"
- **Sl 68.27** – Grafia: "Nafitali" → "Naftali"
- **Os 1.1** – Grafia: "Joeroboão" → "Jeroboão"
- **Mc 7.31** – Grafia: "Galilea" → "Galileia"
- **Jr 13.26** – Grafia: "Asim" → "Assim"
- **1Cr 15.10** – Grafia: "Amidadabe" → "Aminadabe"
- **At 13.2** – Grafia: "Espirito" → "Espírito"
- **Jr 48.36** – Grafia: "de Moab;" → "de Moabe;"
- **1Sm 20.6** – Grafia: "Rogo-me muito" → "Rogou-me muito"
- **Sl 72.19** – Grafia: "Amem, e amém" → "Amém, e amém"
- **Jo 6.7** – Grafia: "Felipe" → "Filipe"

### Concordância de gênero (65)

- **2Cr 6.2** – Concordância de gênero: "uma lugar" → "um lugar"
- **2Cr 6.10** – Concordância de gênero: "um casa" → "uma casa"
- **Ex 15.7** – Concordância de gênero: "tua poder" → "teu poder"
- **Dt 15.9** – Concordância de gênero: "tua olho" → "teu olho"
- **Jo 15.2** – Concordância de gênero: "o que da fruto" → "o que dá fruto"
- **Ap 13.5** – Concordância de gênero: "dada um boca" → "dada uma boca"
- **Gn 45.12** – Concordância de gênero: "meu boca" → "minha boca"
- **Prv 11.11** – Concordância de gênero: "Pelo bênção" → "Pela bênção"
- **Est 2.8** – Concordância de gênero: "seu lei" → "sua lei"
- **Jr 44.23** – Concordância de gênero: "seu lei" → "sua lei"
- **Nm 35.25** – Concordância de gênero: "à seu cidade" → "à sua cidade"
- **Zc 6.3** – Concordância de gênero: "na quarto" → "na quarta"
- **Lm 2.9** – Concordância de gênero: "sua rei" → "seu rei"
- **Is 10.12** – Concordância de gênero: "da rei" → "do rei"
- **Dt 29.27** – Concordância de gênero: "nesta livro" → "neste livro"
- **1Cr 11.11** – Concordância de gênero: "de um vez" → "de uma vez"
- **Nm 28.29** – Concordância de gênero: "uma décimo" → "um décimo"
- **Nm 29.4** – Concordância de gênero: "uma décimo" → "um décimo"
- **Ez 20.8** – Concordância de gênero: "meu ira" → "minha ira"
- **Lm 2.22** – Concordância de gênero: "do ira" → "da ira"
- **1Cr 16.35** – Concordância de gênero: "tua santo" → "teu santo"
- **Nm 7.55** – Concordância de gênero: "seu oferta" → "sua oferta"
- **Sf 3.18** – Concordância de gênero: "uma peso" → "um peso"
- **Ex 29.37** – Concordância de gênero: "qualquer um coisa" → "qualquer coisa"
- **Nm 23.3** – Concordância de gênero: "qualquer um coisa" → "qualquer coisa"
- **Lv 7.27** – Concordância de gênero: "Qualquer um pessoa" → "Qualquer pessoa"
- **Lv 17.15** – Concordância de gênero: "qualquer um pessoa" → "qualquer pessoa"
- **Lv 26.30** – Concordância de gênero: "meu alma" → "minha alma"
- **Dn 11.12** – Concordância de gênero: "aquele multidão" → "aquela multidão"
- **Jr 6.18** – Concordância de gênero: "o multidão" → "ó multidão"
- **Ex 39.9** – Concordância de gênero: "sua comprimento" → "seu comprimento"
- **Lv 25.6** – Concordância de gênero: "a tua criado, e a tua estrangeiro" → "o teu criado, e o teu estrangeiro"
- **Jó 24.20** – Concordância de gênero: "um árvore" → "uma árvore"
- **1Sm 24.11** – Concordância de gênero: "tua manto" → "teu manto"
- **1Sm 28.17** – Concordância de gênero: "a tua companheiro" → "a teu companheiro"
- **Lv 23.10** – Concordância de gênero: "seu colheita" → "sua colheita"
- **Am 5.11** – Concordância de gênero: "um carga" → "uma carga"
- **Lv 18.10** – Concordância de gênero: "seu nudez" → "sua nudez"
- **Jó 36.18** – Concordância de gênero: "da furor" → "do furor"
- **Ne 2.8** – Concordância de gênero: "um carta" → "uma carta"
- **Am 3.5** – Concordância de gênero: "o ave" → "a ave"
- **Jó 7.5** – Concordância de gênero: "meu pele" → "minha pele"
- **Hab 1.15** – Concordância de gênero: "seu rede" → "sua rede"
- **Ex 36.12** – Concordância de gênero: "um cortina" → "uma cortina"
- **Ez 1.28** – Concordância de gênero: "o aparência" → "a aparência"
- **Ez 10.9** – Concordância de gênero: "o aparência" → "a aparência"
- **Jó 2.7** – Concordância de gênero: "até a topo" → "até o topo"
- **Jó 29.10** – Concordância de gênero: "apegavam a céu" → "apegavam ao céu"
- **2Rs 8.22** – Concordância de gênero: "sob a domínio" → "sob o domínio"
- **2Cr 29.22** – Concordância de gênero: "tomaram a sangue, e espargiram-na" → "tomaram o sangue, e espargiram-no"
- **Ez 24.21** – Concordância de gênero: "a orgulho" → "o orgulho"
- **Dn 2.21** – Concordância de gênero: "a conhecimento" → "o conhecimento"
- **1Rs 9.22** – Concordância de gênero: "sua cavaleiros" → "seus cavaleiros"
- **1Rs 18.32** – Concordância de gênero: "uma sulco" → "um sulco"
- **2Rs 10.25** – Concordância de gênero: "aos de seu guarda" → "aos de sua guarda"
- **Am 1.13** – Concordância de gênero: "pelo quarta" → "pela quarta"
- **Ap 9.18** – Concordância de gênero: "pela fogo" → "pelo fogo"
- **Dn 4.27** – Concordância de gênero: "uma prolongamento" → "um prolongamento"
- **Ex 10.26** – Concordância de gênero: "uma casco" → "um casco"
- **Jr 20.4** – Concordância de gênero: "pelo espada" → "pela espada"
- **Jr 27.11** – Concordância de gênero: "em seu terra" → "em sua terra"
- **Lv 15.25** – Concordância de gênero: "seu imundícia" → "sua imundícia"
- **Nm 19.13** – Concordância de gênero: "seu impureza" → "sua impureza"
- **Nm 24.21** – Concordância de gênero: "tua ninho" → "teu ninho"
- **Ob 1.3** – Concordância de gênero: "teu alta morada" → "tua alta morada"

### Pontuação e espaços dentro da linha (389)

Correções sem efeito no sentido (espaço duplo, espaço antes de pontuação, falta de espaço após vírgula/ponto, ",," etc.). Versículos: 1Co 12.15, 1Co 12.16, 1Co 12.21, 1Co 12.5, 1Co 8.1, 1Cr 10.4, 1Cr 11.19, 1Cr 11.5, 1Cr 11.6, 1Cr 14.10, 1Cr 14.11, 1Rs 1.47, 1Rs 2.8, 2Co 5.9, 2Co 6.2, 2Cr 20.9, 2Cr 5.9, 2Rs 8.10, Ag 1.2, Ag 1.9, Am 2.11, Am 6.10, Ap 22.20, At 11.27, At 14.14, At 14.6, At 16.9, At 17.18, At 17.27, At 19.15, At 20.18, At 20.9, At 21.34, At 21.37, At 22.13, At 22.26, At 22.27, At 22.4, At 26.1, At 27.7, At 9.6, Ct 1.4, Ct 3.1, Ct 5.1, Ct 5.2, Ct 5.4, Ct 6.13, Dn 11.10, Dn 3.11, Dn 3.26, Dn 9.24, Dn 9.7, Dt 33.13, Dt 33.6, Ec 1.10, Ec 7.1, Ec 7.27, Ef 4.6, Esd 3.11, Esd 5.3, Est 1.6, Est 2.20, Est 6.3, Ez 11.16, Ez 11.17, Ez 11.5, Ez 12.23, Ez 12.28, Ez 13.10, Ez 13.18, Ez 13.7, Ez 13.8, Ez 14.17, Ez 14.18, Ez 14.20, Ez 14.4, Ez 14.6, Ez 16.3, Ez 16.30, Ez 16.43, Ez 16.48, Ez 16.6, Ez 17.12, Ez 17.16, Ez 17.3, Ez 17.9, Ez 18.19, Ez 18.23, Ez 18.25, Ez 18.29, Ez 18.3, Ez 18.30, Ez 18.32, Ez 19.14, Ez 20.27, Ez 20.29, Ez 20.3, Ez 20.30, Ez 20.31, Ez 20.33, Ez 20.40, Ez 20.47, Ez 20.49, Ez 20.5, Ez 21.28, Ez 21.3, Ez 21.7, Ez 21.9, Ez 22.28, Ez 22.3, Ez 24.21, Ez 24.3, Ez 26.5, Ez 28.2, Ez 28.9, Ez 29.17, Ez 29.3, Ez 3.26, Ez 3.27, Ez 30.2, Ez 30.6, Ez 33.10, Ez 33.13, Ez 33.14, Ez 33.20, Ez 33.25, Ez 33.27, Ez 33.6, Ez 33.8, Ez 35.11, Ez 35.3, Ez 35.6, Ez 35.7, Ez 36.13, Ez 36.2, Ez 36.22, Ez 36.3, Ez 36.32, Ez 37.11, Ez 37.12, Ez 37.16, Ez 37.3, Ez 37.4, Ez 37.9, Ez 38.14, Ez 38.18, Ez 38.21, Ez 38.3, Ez 39.1, Ez 39.17, Ez 39.8, Ez 43.19, Ez 43.23, Ez 44.12, Ez 44.6, Ez 45.3, Ez 45.9, Ez 46.3, Ez 5.11, Ez 6.11, Ez 6.3, Ez 8.1, Ez 8.12, Ez 8.17, Ez 9.9, Flm 1.18, Fp 1.1, Fp 4.18, Gl 1.7, Gl 4.28, Gn 32.17, Gn 50.26, Gn 7.16, Hb 2.8, Hb 5.3, Is 10.28, Is 10.4, Is 20.6, Is 21.1, Is 21.13, Is 21.17, Is 21.9, Is 22.1, Is 22.25, Is 23.1, Is 29.11, Is 29.12, Is 29.21, Is 3.10, Is 3.11, Is 30.1, Is 30.10, Is 30.17, Is 31.5, Is 33.10, Is 33.4, Is 34.15, Is 36.18, Is 36.4, Is 36.7, Is 37.1, Is 37.10, Is 37.3, Is 37.6, Is 38.1, Is 38.5, Is 38.8, Is 39.3, Is 39.4, Is 39.8, Is 40.6, Is 41.21, Is 41.4, Is 42.5, Is 43.26, Is 43.6, Is 44.26, Is 44.28, Is 44.5, Is 44.6, Is 45.10, Is 45.14, Is 45.18, Is 45.24, Is 45.9, Is 47.10, Is 49.9, Is 52.5, Is 56.3, Is 57.19, Is 58.3, Is 59.21, Is 59.9, Is 6.11, Is 6.12, Is 6.8, Is 65.7, Is 65.8, Is 65.9, Is 66.2, Is 66.20, Is 66.9, Is 8.19, Is 8.20, Is 8.9, Jn 1.11, Jn 4.9, Jo 17.12, Jo 8.9, Jr 10.24, Jr 11.16, Jr 2.14, Jr 2.8, Jr 27.1, Jr 3.22, Jr 3.5, Jr 32.41, Jr 33.10, Jr 39.9, Jr 47.3, Jr 48.1, Jr 48.8, Jr 49.1, Jr 49.28, Jr 49.7, Jr 5.5, Jr 7.10, Jr 9.11, Js 13.6, Jz 18.17, Jz 7.19, Jó 1.7, Jó 11.10, Jó 19.28, Jó 19.7, Jó 2.2, Jó 21.28, Jó 21.4, Jó 21.6, Jó 22.29, Jó 24.15, Jó 24.24, Jó 28.14, Jó 31.14, Jó 31.18, Jó 35.3, Jó 37.6, Jó 38.4, Jó 6.22, Jó 6.23, Jó 7.4, Mc 1.2, Mq 2.11, Mq 2.7, Mq 5.10, Mq 7.10, Mt 22.21, Mt 27.32, Mt 3.6, Na 2.13, Na 3.5, Na 3.7, Ne 1.11, Ne 11.4, Ne 12.24, Ne 12.8, Ne 13.6, Ne 2.19, Ne 5.13, Ne 5.7, Ne 6.7, Ne 6.9, Ne 9.18, Nm 8.14, Os 1.10, Os 1.2, Os 10.8, Os 2.1, Os 2.21, Os 2.23, Prv 10.1, Prv 24.12, Prv 24.24, Prv 25.7, Prv 28.24, Prv 30.9, Prv 31.2, Prv 31.23, Prv 7.12, Prv 9.4, Rm 12.19, Sf 1.10, Sf 3.7, Sf 3.8, Tg 2.11, Zc 1.14, Zc 1.16, Zc 1.17, Zc 1.19, Zc 1.21, Zc 1.3, Zc 1.4, Zc 1.9, Zc 11.5, Zc 11.6, Zc 12.4, Zc 13.2, Zc 13.3, Zc 13.6, Zc 13.7, Zc 13.8, Zc 13.9, Zc 3.10, Zc 3.4, Zc 3.9, Zc 4.13, Zc 4.2, Zc 4.5, Zc 4.6, Zc 5.2, Zc 5.4, Zc 5.6, Zc 8.14, Zc 8.17, Zc 8.21, Zc 8.23, Zc 8.6, Zc 9.8.

### Espaço faltando na junção de linhas (palavras coladas no texto de linha única) (241)

Correções sem efeito no sentido (espaço duplo, espaço antes de pontuação, falta de espaço após vírgula/ponto, ",," etc.). Versículos: 1Co 13.10, 1Co 2.8, 1Cr 18.4, 1Cr 21.17, 1Jo 3.14, 1Sm 2.33, 1Sm 2.6, 1Sm 3.17, 1Sm 4.7, 1Tm 1.17, 1Tm 6.21, 1Ts 4.10, 1Ts 5.28, 2Co 13.14, 2Co 4.4, 2Co 4.5, 2Co 4.6, 2Co 4.8, 2Cr 18.10, 2Cr 18.11, 2Cr 18.14, 2Cr 18.2, 2Cr 18.3, 2Cr 18.5, 2Cr 18.7, 2Cr 18.9, 2Cr 19.10, 2Cr 19.11, 2Cr 19.6, 2Cr 19.7, 2Cr 19.8, 2Cr 20.1, 2Cr 20.2, 2Cr 20.6, 2Cr 6.10, 2Cr 6.13, 2Cr 6.14, 2Cr 6.15, 2Cr 6.16, 2Cr 6.18, 2Cr 6.19, 2Cr 6.20, 2Cr 6.21, 2Cr 6.22, 2Cr 6.23, 2Cr 6.27, 2Cr 6.8, 2Cr 7.7, 2Pd 2.8, 2Rs 5.11, 2Rs 5.18, 2Rs 5.19, 2Rs 5.7, 2Rs 8.12, 2Sm 23.1, 2Sm 23.18, 2Sm 23.19, 2Sm 23.23, 2Sm 23.24, 2Sm 23.3, 2Sm 23.4, 2Sm 23.5, 2Tm 2.15, 2Tm 2.21, 2Tm 4.22, 2Ts 3.18, Ap 1.8, Ap 10.1, Ap 19.21, Ap 19.9, Ap 2.14, At 12.22, At 20.9, At 22.30, At 5.41, Ct 1.4, Ct 2.10, Dt 32.8, Ec 5.8, Ef 4.6, Ef 5.31, Ef 5.9, Ef 6.24, Ex 33.12, Ex 33.13, Ex 33.14, Ex 33.15, Ex 33.16, Ex 33.17, Ex 33.19, Ez 26.2, Ez 48.34, Flm 1.25, Fp 3.20, Fp 4.23, Gl 3.17, Gl 6.18, Hb 10.25, Hb 10.9, Hb 12.28, Hb 13.19, Hb 13.25, Hb 3.16, Hb 3.9, Is 15.5, Is 17.14, Is 22.17, Is 23.1, Is 24.15, Is 25.11, Is 28.25, Is 30.17, Is 33.18, Is 37.24, Is 37.29, Is 38.10, Is 5.14, Is 51.1, Is 53.10, Is 53.8, Is 57.3, Is 59.4, Is 59.8, Is 65.17, Jd 1.25, Jo 1.45, Jo 12.4, Jo 21.15, Jo 21.20, Jo 5.3, Jo 8.18, Jo 8.44, Jo 8.9, Joel 1.13, Joel 2.20, Jr 10.18, Jr 25.31, Jr 40.5, Jr 6.20, Js 7.19, Jó 1.5, Jó 11.17, Jó 11.18, Jó 31.33, Lc 10.42, Lc 11.36, Lc 11.37, Lc 13.18, Lc 17.1, Lc 22.52, Lc 3.26, Lc 3.27, Lc 3.29, Lc 3.31, Lc 3.32, Lc 3.33, Lc 5.2, Lc 6.1, Lc 6.30, Lc 7.28, Lc 7.29, Lc 7.42, Lc 9.56, Lv 13.58, Lv 2.5, Lv 20.19, Mc 1.43, Mc 12.36, Mc 13.7, Mc 2.2, Mc 3.2, Mc 3.5, Mc 8.17, Ml 4.1, Mt 10.26, Mt 13.35, Mt 13.54, Mt 13.56, Mt 14.25, Mt 18.28, Mt 2.12, Mt 2.7, Mt 2.9, Mt 21.23, Mt 22.33, Mt 22.39, Mt 23.23, Mt 24.6, Mt 25.20, Mt 27.58, Na 2.8, Nm 11.11, Nm 11.32, Ob 1.19, Rm 10.6, Rm 10.7, Rm 10.8, Rm 15.29, Rm 16.24, Rm 4.9, Rt 2.18, Sl 10.15, Sl 106.4, Sl 118.2, Sl 118.29, Sl 118.3, Sl 119.49, Sl 119.78, Sl 119.96, Sl 139.12, Sl 141.5, Sl 141.8, Sl 49.18, Sl 49.4, Sl 57.1, Sl 59.12, Sl 60.4, Sl 63.11, Sl 64.6, Sl 77.15, Sl 80.1, Sl 80.10, Sl 84.3, Sl 87.4, Sl 87.7, Sl 89.50, Sl 94.17, Tt 3.15.

### Espaço (1)

Correções sem efeito no sentido (espaço duplo, espaço antes de pontuação, falta de espaço após vírgula/ponto, ",," etc.). Versículos: Mc 5.19.

### Camada 1 – complemento (3)

- **Flm 1.25** – Erro de digitação: "Cirsto" → "Cristo"
- **1Rs 16.29** – Divisão de versículos: "E reinou Acabe filho de Onri sobre Israel em Samaria vinte e dois anos" estava no v. 30; passou para o v. 29, como no hebraico e na KJV
- **Jo 1.18** – Grafia: "Ningúem" → "Ninguém"

## Camada 2 – variantes (omissões e acréscimos em relação ao original)

Comparação automática de cada versículo da BL TR com o TR de Scrivener 1894 (presença de κύριος/Ἰησοῦς/Χριστός/θεός × Senhor/Jesus/Cristo/Deus, e razão de comprimento BL × grego e BL × KJV com os versículos vizinhos), seguida de revisão manual. No NT, as correções entram em `textos/f4/geral` como linha `{tr}` nova, com a linha antiga marcada `{rp|n4}`, para não alterar a geração do N4/RP. No AT a base é comum.

Total: 13 correções.

- **Lc 18.29** – Faltava "por causa do Reino de Deus" (TR ἕνεκεν τῆς βασιλείας τοῦ θεοῦ; KJV "for the kingdom of God’s sake")
- **Lc 19.11** – Faltava "de Deus" (TR ἡ βασιλεία τοῦ θεοῦ; KJV "the kingdom of God")
- **Lc 19.20** – Faltava o vocativo "Senhor" (TR κύριε; KJV "Lord")
- **At 13.21** – Faltava o sujeito "Deus" (TR ὁ θεὸς; KJV "God gave")
- **2Co 1.20** – Faltava "de Deus" (TR ἐπαγγελίαι θεοῦ; KJV "the promises of God")
- **2Co 1.21** – Faltava "em Cristo" (TR εἰς Χριστὸν; KJV "in Christ")
- **Gl 3.11** – Faltava "diante de Deus" (TR παρὰ τῷ θεῷ; KJV "in the sight of God")
- **1Ts 1.9** – Faltava "a Deus" (TR ἐπεστρέψατε πρὸς τὸν θεὸν; KJV "ye turned to God")
- **2Ts 1.2** – Faltava "Deus" (TR ἀπὸ θεοῦ πατρὸς ἡμῶν; KJV "from God our Father")
- **1Tm 1.14** – Acréscimo "Jesus Cristo" sem base no original (TR ἡ χάρις τοῦ κυρίου ἡμῶν; KJV "the grace of our Lord")
- **Gn 18.10** – Omissão de oração inteira: faltava "E Sara escutava à porta da tenda, que estava atrás dele" (hebr. וְשָׂרָה שֹׁמַעַת פֶּתַח הָאֹהֶל וְהוּא אַחֲרָיו; KJV "And Sarah heard it in the tent door, which was behind him"; Almeida 1819 "e ouvia o Sara á porta da tenda, que estava atras delle")
- **2Cr 12.1** – Omissão: faltava "e se havia fortalecido" (hebr. וּכְחֶזְקָתוֹ; KJV "and had strengthened himself"; Almeida 1819 "e avendo se fortalecido")
- **Lc 12.24** – Omissão de oração: faltava "Quanto mais valeis vós do que as aves?" (TR πόσῳ μᾶλλον ὑμεῖς διαφέρετε τῶν πετεινῶν; KJV "how much more are ye better than the fowls?"; Almeida 1819 "quanto mais valeis vósoutros que as aves?"); também "tem" → "têm"

### Camada 1 – complemento 2 (3)

- **Sl 59.12** – Palavra sobrando: "[Pelo] do pecado" → "[Pelo] pecado" (hebr. חַטַּאת־פִּימוֹ)
- **Js 13.5** – Erro de digitação: "o pdo monte" → "ao pé do monte" (hebr. תַּחַת הַר־חֶרְמוֹן; KJV "under mount Hermon")
- **Ez 39.27** – Conjugação: "Quando eu trouxé-los" → "Quando eu os trouxer" (paralelo a "e os juntar")

## Rodada 5 – decisões de Marcelo (22/11/2026)

### Aplicadas

- **Mc 12.27** – Decisão de Marcelo: repetir "Deus" como no grego (TR οὐκ ἔστιν ὁ θεὸς νεκρῶν ἀλλὰ θεὸς ζώντων; KJV "He is not the God of the dead, but the God of the living")
- **1Jo 3.16** – Decisão de Marcelo: acrescentado "de Deus" em itálico (Scrivener 1894 traz τοῦ θεοῦ; a KJV 1769 imprime "of God" em itálico, porque a palavra falta na maioria das edições do TR)
- **Is 14.12** – Decisão de Marcelo: seguir a KJV ("O Lucifer, son of the morning"); hebr. הֵילֵל בֶּן־שָׁחַר; "filho da alva" como na Almeida 1819

### Itálico (acréscimos do tradutor)

Marcação usada: o bloco `\added` … `\*added` do formato f4, com cada marcador em sua própria linha. A Bíblia Livre já o usa para as palavras que o seu FAQ chama de "palavras entre [colchetes]", e o `conversores/convert_to_usfm.js` o converte em `\add …\add*` do USFM (palavra acrescentada, exibida em itálico). A mesma marcação foi usada acima em 1Jo 3.16.

50 versículos do Anexo A do relatório 4 receberam itálico no nome que não tem correspondente no grego (Scrivener 1894). Os demais casos do anexo não são acréscimos e ficaram como estavam. Eles traduzem outra palavra grega ("senhores" = δεσπόται; "deuses" = θεοί; "temente a Deus" = θεοσεβής; "odeiam a Deus" = θεοστυγεῖς; "Vem, Senhor" = μαρὰν ἀθά etc.), já têm nota explicativa (Rm 3.25) ou já tinham sido corrigidos (1Tm 1.14). No NT, o texto novo entra numa linha `{tr}` e a linha antiga fica marcada `{rp|n4}`.

- **Mt 4.4** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Mc 5.40** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 5.18** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 5.27** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 7.20** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 8.42** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 9.10** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 9.21** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 9.37** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 10.26** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 10.28** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 11.17** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 11.37** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 11.53** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 12.14** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 13.17** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 13.31** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 14.1** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 14.4** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 14.16** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 14.25** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 17.11** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 17.16** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 18.27** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 18.29** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 20.23** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 22.2** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 22.6** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 22.34** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 23.32** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 23.49** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Lc 24.25** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 2.21** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 4.30** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 4.39** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 7.3** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 7.32** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 7.50** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 9.22** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 11.3** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 13.24** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 13.28** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **Jo 20.7** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **At 3.16** – "Jesus" sem correspondente no grego (TR tem pronome ou sujeito implícito): marcado como acréscimo (itálico)
- **At 5.41** – "de Jesus" (grego αὐτοῦ) já era itálico no N4 e passa a ser itálico também na TR (marcador {n4} → {tr|n4} nas linhas do \added)
- **1Co 1.6** – "Jesus" sem correspondente no grego (TR τοῦ Χριστοῦ): marcado como acréscimo (itálico)
- **Jo 21.20** – Segunda ocorrência de "Jesus" (grego αὐτοῦ, "dele"): marcada como acréscimo (itálico)
- **Lc 19.22** – "seu senhor" sem correspondente no grego (TR λέγει δὲ αὐτῷ): marcado como acréscimo (itálico)
- **Hb 3.2** – "de Deus" sem correspondente no grego (TR ἐν ὅλῳ τῷ οἴκῳ αὐτοῦ, "em toda a sua casa"): marcado como acréscimo (itálico); a troca por "sua casa" depende de decisão
- **Hb 3.5** – "de Deus" sem correspondente no grego (TR ἐν ὅλῳ τῷ οἴκῳ αὐτοῦ, "em toda a sua casa"): marcado como acréscimo (itálico); a troca por "sua casa" depende de decisão

### Mantidos conforme o Códice de Leningrado (decisão registrada, texto sem mudança)

- **Is 10.16** – mantém "o Senhor DEUS dos exércitos" (WLC הָאָדוֹן יְהוָה צְבָאוֹת; segundo J. D. Price, Bomberg lê "o Senhor, o Senhor dos exércitos", como a KJV "the Lord, the Lord of hosts").
- **1Rs 20.38** – mantém "com um véu sobre os olhos" (WLC בָּאֲפֵר עַל־עֵינָיו; Bomberg בָּאֵפֶר, "com cinza"; KJV "with ashes upon his face").

### Normalização de espaços (conversor)

`conversores/singleLineUSFM.js` ganhou a função `normalizeSpaces`, aplicada a cada versículo da saída USFM de linha única. Ela junta espaços duplos e tira o espaço antes de pontuação; os rótulos de Cantares ficam "Ele:". Também cola a chamada de nota `\f +` à palavra anterior, tira o espaço final de dentro do `\add` e corrige "acusá -lo" para "acusá-lo". Os arquivos f4 não foram editados para isso. Na saída TR completa, depois da mudança, sobram 0 espaços antes de pontuação e 0 espaços duplos fora das referências `\rq`.

### Camada 1 – complemento 3 (1)

- **Am 9.11** – Concordância de gênero: "seus brechas" → "suas brechas"

## Rodada 6 – decisões de Marcelo (22/11/2026)

- **Mc 12.27** – Decisão de Marcelo: sem artigo nas duas vezes ("Ele não é Deus de mortos, mas sim, Deus de vivos"); TR οὐκ ἔστιν ὁ θεὸς νεκρῶν ἀλλὰ θεὸς ζώντων
- **Mq 5.2** – Decisão de Marcelo: "desde a antiguidade, desde os dias da eternidade" (hebr. מִקֶּדֶם מִימֵי עוֹלָם; KJV "from of old, from everlasting"; Almeida 1819 "desdantigo, desdos dias da eternidade")
- **Dn 9.26** – Decisão de Marcelo: "o Messias será cortado, mas não para si mesmo" (hebr. יִכָּרֵת מָשִׁיחַ וְאֵין לוֹ; KJV "shall Messiah be cut off, but not for himself")
- **Hb 3.2** – Decisão de Marcelo: "em toda a sua casa" (TR ἐν ὅλῳ τῷ οἴκῳ αὐτοῦ; KJV "in all his house"); sai o itálico "de Deus" e, na TR, a nota "lit. sua casa", que deixou de ser necessária
- **Hb 3.5** – Decisão de Marcelo: "em toda a sua casa" (TR ἐν ὅλῳ τῷ οἴκῳ αὐτοῦ; KJV "in all his house"); sai o itálico "de Deus"
- **Jz 10.11** – Decisão de Marcelo: reestruturado como o hebraico (הֲלֹא מִמִּצְרַיִם…, elíptico) e a KJV ("[Did] not [I deliver you] from the Egyptians…"), com "vos livrei eu" em itálico
- **Jz 10.12** – Decisão de Marcelo: incluído "vos oprimiram" (hebr. לָחֲצוּ אֶתְכֶם; KJV "did oppress you")
- **Pv 8.15–16** – sem mudança: os dois versículos já começam com "Por meio de mim". A variante final continua como "juízes justos" (Leningrado, צֶדֶק) e fica pendente de decisão (Ben Chayyim/KJV: "juízes da terra", אֶרֶץ).
- **At 7.45; Hb 4.8** – mantém "Josué", sem nota (decisão de Marcelo).
- **Nome divino (conversor)** – `conversores/convert_to_usfm.js`: nos livros do AT, SENHOR e DEUS (Tetragrama) saem como `\nd SENHOR\nd*` / `\nd DEUS\nd*`, que os leitores USFM exibem em versalete. O texto f4 não muda. No NT não se aplica, e a inscrição "AO DEUS DESCONHECIDO" (At 17.23) fica fora. Saída TR conferida: 6.543 SENHOR e 311 DEUS marcados, 0 no NT. "EU-SOU" (20 ocorrências, também YHWH) ficou sem marcação, aguardando decisão.

- Dn 9.26: "destruirá à cidade" → "destruirá a cidade" (crase indevida; objeto direto).

## Pronomes divinos em maiúscula (decisão de Marcelo, 22/11/2026)

### Convenção

- Pronomes que se referem a Deus (Pai, Filho, Espírito) passam a começar com maiúscula: Ele, Lhe, Seu/Sua/Seus/Suas, Si, Consigo, Tu, Te, Ti, Teu/Tua…, Contigo, Me, Mim, Meu/Minha…, Comigo.
- Oblíquos enclíticos: maiúscula só no pronome (adorá-Lo, segui-Lo, acusando-O, disse-Lhe, dá-Te, lembra-Te, Mostrai-Me).
- Contrações, pelo mesmo princípio (maiúscula só no pronome): dEle, nEle. **Confirmado por Marcelo (22/11/2026).**
- "eu" e "nós/nos/nosso" ficam em minúscula. **Decisão de Marcelo (22/11/2026).**
- Pronome oblíquo átono "o" antes do verbo, quando divino, também vai em maiúscula: "Deus O ungiu", "O levou". **Decisão de Marcelo (22/11/2026).** É tratado como explicado em "Segunda passada no NT", abaixo.
- Só a TR muda. No NT, cada linha alterada vira `{rp|n4}`(original) + `{tr}`(nova), ou perde o marcador `tr` se já tinha um. As saídas RP e N4 foram conferidas e são idênticas às de antes.

### Método

- A referência para decidir *quais* pronomes são divinos é a LSV (Literal Standard Version, © 2020 Covenant Press, CC BY-SA 4.0, eBible.org). Nenhum texto dela foi copiado. A NKJV não pôde ser usada em escala: os termos do BibleGateway proíbem copiar e baixar e limitam citações a 250 versículos.
- O alinhamento é por versículo e por pessoa gramatical (1ª, 2ª, 3ª). A aplicação automática só acontece quando todas estas condições valem:
  1. A LSV tem pronome divino em maiúscula fora de início de frase ou citação. Depois de ponto, aspas, dois-pontos, vírgula, travessão ou "||", a maiúscula é ambígua e não conta.
  2. Não há, no mesmo versículo da LSV, pronome da mesma pessoa em minúscula.
  3. Não há outro referente compatível: it/its para ele/o; she/her/it para lhe; her/its/their para seu/sua.
  4. O número de candidatos na BL é compatível. Na 3ª pessoa, fica entre o total de Him/His/Himself e o total incluindo He. Na 1ª e 2ª, não passa o número de referências divinas.
- Cada versículo alterado foi conferido: a visão TR nova tem de ser igual à antiga com só aqueles pronomes em maiúscula.
- Listas: `pronomes-divinos/<bloco>-aplicados.tsv` (antes/depois) e `pronomes-divinos/<bloco>-pendentes.md` (casos para revisão).

### Blocos aplicados

- **Evangelhos**: 994 versículos, 1.552 pronomes. Ficam 771 versículos para revisão (`pronomes-divinos/evangelhos-pendentes.md`).
- **Atos**: 59 versículos, 86 pronomes. Ficam 64 versículos para revisão (`pronomes-divinos/atos-pendentes.md`).
- **Epístolas paulinas e Hebreus**: 194 versículos, 266 pronomes. Ficam 129 versículos para revisão (`pronomes-divinos/paulinas-pendentes.md`).
- **Epístolas gerais e Apocalipse**: 100 versículos, 152 pronomes. Ficam 86 versículos para revisão (`pronomes-divinos/gerais-pendentes.md`, com 1Pd 3.18).

### Segunda passada no NT: "o" proclítico e critério mais estrito (22/11/2026)

- **Como o "o" proclítico é detectado:** o etiquetador morfossintático spaCy `pt_core_news_md` tem de marcar o "o" como pronome e a palavra seguinte como verbo. Além disso, a palavra anterior tem de ser que/não/se/já/nunca/também/quem/ninguém/nem, ou o verbo tem de estar em forma finita. A LSV confirma o referente divino pelas mesmas condições de antes.
- **Contagem por função:** passou a separar o sujeito ("ele" livre, contado contra "He") dos demais pronomes (o, lhe, seu, dele, "ele" depois de preposição etc., contados contra Him/His/Himself). "si mesmos" (plural) nunca é tratado como divino.
- **Revisão do que já tinha sido aplicado:** 34 versículos com 3ª pessoa já aplicada não passam no critério novo e voltaram à minúscula na 3ª pessoa. Lista em `pronomes-divinos/nt-revertidos.tsv`. Entre eles há erros reais, como Lc 9.26 "dele o Filho do homem se envergonhará", Lc 18.9 "si mesmos" e Mc 6.51 "entre si". Outros podem estar certos (Jo 3.16, Ap 7.15) e ficam para revisão.
- **Aplicados:** 111 versículos, 182 pronomes, sendo 128 "O" proclíticos e 54 outros pronomes que estavam travados só pela contagem. Lista em `pronomes-divinos/nt-procliticos-aplicados.tsv`.
- **Pendentes do NT, refeitos sobre o texto atual:** 1.090 versículos (Evangelhos 792, Atos 70, Paulinas 141, Gerais/Ap 87).

### Mq 5.2: "saídas" mantido

- **Mq 5.2** – Decisão de Marcelo: mantém "suas saídas" (hebr. וּמוֹצָאֹתָיו), sem nota.

### Antigo Testamento (22/11/2026)

- Mesmo método e mesmas convenções da segunda passada no NT. Também no AT as linhas alteradas viram `{rp|n4}`(original) + `{tr}`(nova), então a saída N4/RP não muda e a marcação `\nd` de SENHOR/DEUS continua no conversor.
- **Pentateuco** (AT): 332 versículos, 499 pronomes. Ficam 385 versículos para revisão (`pronomes-divinos/pentateuco-pendentes.md`).
- **Livros históricos (Josué–Ester)** (AT): 305 versículos, 582 pronomes. Ficam 440 versículos para revisão (`pronomes-divinos/historicos-pendentes.md`).
- **Livros poéticos (Jó–Cantares)** (AT): 907 versículos, 1420 pronomes. Ficam 1098 versículos para revisão (`pronomes-divinos/poeticos-pendentes.md`).
- **Profetas maiores (Isaías–Daniel)** (AT): 704 versículos, 1145 pronomes. Ficam 694 versículos para revisão (`pronomes-divinos/maiores-pendentes.md`).
- **Profetas menores (Oseias–Malaquias)** (AT): 190 versículos, 268 pronomes. Ficam 161 versículos para revisão (`pronomes-divinos/menores-pendentes.md`).

### Mq 5.4: concordância (decisão de Marcelo, 22/11/2026)

- **Mq 5.4** – "E eles se levantará" → "E Ele se levantará" (só TR). Os verbos hebraicos estão no singular (וְעָמַד וְרָעָה, qal perf. 3ª masc. sing.). "Ele" vai em maiúscula porque o referente é o governante do v. 2, como "Seu Deus" e "Ele será engrandecido" no mesmo versículo. O resto do versículo foi conferido: "e eles habitarão" está correto (וְיָשָׁבוּ, 3ª masc. pl.) e "governará" concorda com o sujeito singular.

### Jo 16.14: marcação de itálico (só TR)

- **Jo 16.14** – Na fonte, o primeiro `\added` não fechava ("do [que é Meu, e [o]…"), o que deixava a TR com 4.846 aberturas e 4.845 fechamentos de itálico. Corrigido na TR para "do [que é Meu], e [o] anunciará" (TR ἐκ τοῦ ἐμοῦ λήψεται καὶ ἀναγγελεῖ ὑμῖν). O texto não muda, só o itálico.

### Fim de itálico com pontuação na mesma linha (só TR)

- **Mc 14.29** e **Lc 11.48** – A linha `\*added` trazia junto a pontuação final ("”." e "."). O conversor USFM fecha o itálico e descarta o resto da linha, então a pontuação sumia na saída. A pontuação passou para uma linha própria na TR. O texto não muda.

### Revisão manual dos pendentes (22/11/2026)

Pedido de Marcelo: revisão versículo a versículo, com julgamento. Para cada pronome candidato, o referente é decidido no contexto, com a LSV como referência (maiúscula = divino). Só se aplica quando o referente é certo, com as convenções aprovadas. Durante a revisão também foram corrigidos erros da passada automática (ex.: "entre Si" de referentes humanos). Os arquivos `pronomes-divinos/revisao-<livro>.tsv` e `revisao-<livro>-duvidosos.md` substituem, para cada livro revisto, a lista `*-pendentes.md` correspondente.

- **Mateus**: 132 versículos, 222 pronomes alterados na revisão manual; 6 casos anotados (`pronomes-divinos/revisao-mat-duvidosos.md`).
- **Correções da passada automática** (referentes humanos que tinham ficado em maiúscula): Mt 4.8 "levou consigo" (o diabo); Mt 22.15 "entre si" (os fariseus); Mc 4.36 "O levaram consigo" (os discípulos; também "o" → "O", que é Jesus); Lc 7.49 "entre si"; 2Co 5.15 "para si"; Jó 30.11 "de si".
- **Marcos**: 126 versículos, 205 pronomes alterados na revisão manual; 4 casos anotados (`pronomes-divinos/revisao-mrk-duvidosos.md`).
- **Lucas**: 183 versículos, 278 pronomes alterados na revisão manual; 4 casos anotados (`pronomes-divinos/revisao-luk-duvidosos.md`).
- **João**: 158 versículos, 265 pronomes alterados na revisão manual; 7 casos anotados (`pronomes-divinos/revisao-jhn-duvidosos.md`).
- **Atos**: 39 versículos, 59 pronomes alterados na revisão manual; 6 casos anotados (`pronomes-divinos/revisao-act-duvidosos.md`).
- **Romanos**: 18 versículos, 29 pronomes alterados na revisão manual; 0 casos anotados (`pronomes-divinos/revisao-rom-duvidosos.md`).
- **1Coríntios**: 7 versículos, 12 pronomes alterados na revisão manual; 0 casos anotados (`pronomes-divinos/revisao-1co-duvidosos.md`).
- **2Coríntios**: 4 versículos, 5 pronomes alterados na revisão manual; 1 casos anotados (`pronomes-divinos/revisao-2co-duvidosos.md`).
- **Gálatas**: 1 versículos, 1 pronomes alterados na revisão manual; 1 casos anotados (`pronomes-divinos/revisao-gal-duvidosos.md`).
- **Efésios**: 7 versículos, 11 pronomes alterados na revisão manual; 0 casos anotados (`pronomes-divinos/revisao-eph-duvidosos.md`).
- **Filipenses**: 5 versículos, 13 pronomes alterados na revisão manual; 0 casos anotados (`pronomes-divinos/revisao-php-duvidosos.md`).
- **Colossenses**: 5 versículos, 6 pronomes alterados na revisão manual; 2 casos anotados (`pronomes-divinos/revisao-col-duvidosos.md`).
- **1Tessalonicenses**: 1 versículos, 1 pronomes alterados na revisão manual; 1 casos anotados (`pronomes-divinos/revisao-1th-duvidosos.md`).
- **2Tessalonicenses**: 0 versículos, 0 pronomes alterados na revisão manual; 1 casos anotados (`pronomes-divinos/revisao-2th-duvidosos.md`).
- **1Timóteo**: 1 versículos, 2 pronomes alterados na revisão manual; 1 casos anotados (`pronomes-divinos/revisao-1ti-duvidosos.md`).
- **2Timóteo**: 5 versículos, 10 pronomes alterados na revisão manual; 0 casos anotados (`pronomes-divinos/revisao-2ti-duvidosos.md`).
- **Tito**: 1 versículos, 2 pronomes alterados na revisão manual; 0 casos anotados (`pronomes-divinos/revisao-tit-duvidosos.md`).
- **Hebreus**: 47 versículos, 82 pronomes alterados na revisão manual; 5 casos anotados (`pronomes-divinos/revisao-heb-duvidosos.md`).
- **Tiago**: 3 versículos, 5 pronomes alterados na revisão manual; 0 casos anotados (`pronomes-divinos/revisao-jas-duvidosos.md`).
- **1Pedro**: 8 versículos, 11 pronomes alterados na revisão manual; 0 casos anotados (`pronomes-divinos/revisao-1pe-duvidosos.md`).
- **2Pedro**: 1 versículos, 4 pronomes alterados na revisão manual; 0 casos anotados (`pronomes-divinos/revisao-2pe-duvidosos.md`).
- **1João**: 17 versículos, 33 pronomes alterados na revisão manual; 3 casos anotados (`pronomes-divinos/revisao-1jn-duvidosos.md`).
- **2João**: 1 versículos, 1 pronomes alterados na revisão manual; 1 casos anotados (`pronomes-divinos/revisao-2jn-duvidosos.md`).
