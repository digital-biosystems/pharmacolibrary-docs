<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07F&quot;,&quot;href&quot;:&quot;atc/A07F.md&quot;},{&quot;label&quot;:&quot;saccharomyces boulardii&quot;}]"></div>

# saccharomyces boulardii

- **generic name:** saccharomyces boulardii
- **ATC codes:** `A07FA02`
- **DrugBank:** [DB11017](https://go.drugbank.com/drugs/DB11017) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Saccharomyces boulardii is a probiotic yeast used to help treat diarrhoea. It is an approved probiotic available as a dietary supplement and medicine in many countries, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q135368](https://www.wikidata.org/wiki/Q135368) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:06 | 3:38 | 0/0/0 | 0/0/0 | 0/0/0 | 444,354/14,127 | einfracz / qwen3.8-27b | 73 | 14/94 | 72/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4112 matched, 328 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_42 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gartiser_2007.pdf` | Gartiser S et al., Anaerobic inhibition and biodegradation…, Chemosphere (2007) | pd | 5 | [10.1016/j.chemosphere.2006.08.040](https://doi.org/10.1016/j.chemosphere.2006.08.040) | [17097129](https://www.ncbi.nlm.nih.gov/pubmed/17097129) | metadata signals extractable PD data (EC50) |
| `Aruoja_2009.pdf` | Aruoja V et al., Toxicity of nanoparticles of CuO, ZnO a…, The Science of the total en… (2009) | pd | 4 | [10.1016/j.scitotenv.2008.10.053](https://doi.org/10.1016/j.scitotenv.2008.10.053) | [19038417](https://www.ncbi.nlm.nih.gov/pubmed/19038417) | metadata signals extractable PD data (EC50) |
| `Belloir_2024.pdf` | Belloir C et al., Modulation of bitter taste receptors by…, Food research international… (2024) | pd | 4 | [10.1016/j.foodres.2024.114596](https://doi.org/10.1016/j.foodres.2024.114596) | [38945612](https://www.ncbi.nlm.nih.gov/pubmed/38945612) | metadata signals extractable PD data (EC50) |
| `Bittner_2015.pdf` | Bittner M et al., Polymer-immobilized ready-to-use recomb…, Chemosphere (2015) | pd | 4 | [10.1016/j.chemosphere.2015.02.063](https://doi.org/10.1016/j.chemosphere.2015.02.063) | [25797899](https://www.ncbi.nlm.nih.gov/pubmed/25797899) | metadata signals extractable PD data (EC50) |
| `Bovee_2004.pdf` | Bovee TF et al., Rapid yeast estrogen bioassays stably e…, The Journal of steroid bioc… (2004) | pd | 4 | [10.1016/j.jsbmb.2004.03.118](https://doi.org/10.1016/j.jsbmb.2004.03.118) | [15276617](https://www.ncbi.nlm.nih.gov/pubmed/15276617) | metadata signals extractable PD data (EC50) |
| `Breinholt_1998.pdf` | Breinholt V et al., Detection of weak estrogenic flavonoids…, Chemical research in toxico… (1998) | pd | 4 | [10.1021/tx970170y](https://doi.org/10.1021/tx970170y) | [9625730](https://www.ncbi.nlm.nih.gov/pubmed/9625730) | metadata signals extractable PD data (EC50) |
| `Bujdáková_1993.pdf` | Bujdáková H et al., Anti-Candida activity of four antifunga…, FEMS microbiology letters (1993) | pd | 4 | [10.1111/j.1574-6968.1993.tb06471.x](https://doi.org/10.1111/j.1574-6968.1993.tb06471.x) | [8224799](https://www.ncbi.nlm.nih.gov/pubmed/8224799) | metadata signals extractable PD data (IC50) |
| `Collins_1995.pdf` | Collins RA et al., A subunit interface mutant of yeast pyr…, The Biochemical journal (1995) | pd | 4 | [10.1042/bj3100117](https://doi.org/10.1042/bj3100117) | [7646433](https://www.ncbi.nlm.nih.gov/pubmed/7646433) | metadata signals extractable PD data (sigmoid) |
| `Colosi_2011.pdf` | Colosi JC et al., A yeast estrogen screen without extract…, Environmental toxicology an… (2011) | pd | 4 | [10.1002/etc.618](https://doi.org/10.1002/etc.618) | [21755530](https://www.ncbi.nlm.nih.gov/pubmed/21755530) | metadata signals extractable PD data (EC50) |
| `Câmara_2019.pdf` | Câmara CRS et al., Histone acetylation increases in respon…, Phytotherapy research : PTR (2019) | pd | 4 | [10.1002/ptr.6222](https://doi.org/10.1002/ptr.6222) | [30375074](https://www.ncbi.nlm.nih.gov/pubmed/30375074) | metadata signals extractable PD data (IC50) |
| `Di_2020.pdf` | Di Francesco A et al., Aureobasidium pullulans volatile organi…, Food microbiology (2020) | pd | 4 | [10.1016/j.fm.2019.103395](https://doi.org/10.1016/j.fm.2019.103395) | [31948636](https://www.ncbi.nlm.nih.gov/pubmed/31948636) | metadata signals extractable PD data (EC50) |
| `Dickinson_2003.pdf` | Dickinson FM, Conformational changes and activation o…, Chemico-biological interact… (2003) | pd | 4 | [10.1016/s0009-2797(02)00201-6](https://doi.org/10.1016/s0009-2797(02)00201-6) | [12604201](https://www.ncbi.nlm.nih.gov/pubmed/12604201) | metadata signals extractable PD data (sigmoid) |
| `Ellis_1992.pdf` | Ellis SW et al., Catalytic activities of human debrisoqu…, Biochemical pharmacology (1992) | pd | 4 | [10.1016/0006-2952(92)90394-x](https://doi.org/10.1016/0006-2952(92)90394-x) | [1510710](https://www.ncbi.nlm.nih.gov/pubmed/1510710) | metadata signals extractable PD data (IC50) |
| `Frydkjær_2017.pdf` | Frydkjær CK et al., Ingestion and Egestion of Microplastics…, Bulletin of environmental c… (2017) | pd | 4 | [10.1007/s00128-017-2186-3](https://doi.org/10.1007/s00128-017-2186-3) | [29027571](https://www.ncbi.nlm.nih.gov/pubmed/29027571) | metadata signals extractable PD data (EC50) |
| `Gerlach_2014.pdf` | Gerlach T et al., Development and assessment of a novel A…, The Science of the total en… (2014) | pd | 4 | [10.1016/j.scitotenv.2014.05.100](https://doi.org/10.1016/j.scitotenv.2014.05.100) | [24927152](https://www.ncbi.nlm.nih.gov/pubmed/24927152) | metadata signals extractable PD data (EC50) |
| `Hill_2006.pdf` | Hill EM et al., Identification and steroid receptor act…, Chemosphere (2006) | pd | 4 | [10.1016/j.chemosphere.2005.12.040](https://doi.org/10.1016/j.chemosphere.2005.12.040) | [16473392](https://www.ncbi.nlm.nih.gov/pubmed/16473392) | metadata signals extractable PD data (EC50) |
| `Holtz_2026.pdf` | Holtz M et al., Engineering biosensors to enhance monot…, Trends in biotechnology (2026) | pd | 4 | [10.1016/j.tibtech.2026.08.011](https://doi.org/10.1016/j.tibtech.2026.08.011) | [42716825](https://www.ncbi.nlm.nih.gov/pubmed/42716825) | metadata signals extractable PD data (EC50) |
| `Huang_2021.pdf` | Huang Y et al., Novel ACE Inhibitory Peptides Derived f…, Journal of agricultural and… (2021) | pd | 4 | [10.1021/acs.jafc.0c06053](https://doi.org/10.1021/acs.jafc.0c06053) | [33593053](https://www.ncbi.nlm.nih.gov/pubmed/33593053) | metadata signals extractable PD data (IC50) |
| `Höger_1985.pdf` | Höger PH et al., Uptake, intracellular activity, and inf…, Antimicrobial agents and ch… (1985) | pd | 4 | [10.1128/AAC.28.5.667](https://doi.org/10.1128/AAC.28.5.667) | [3004324](https://www.ncbi.nlm.nih.gov/pubmed/3004324) | metadata signals extractable PD data (Emax) |
| `Jennings_2019.pdf` | Jennings LK et al., Anti-prion Butenolides and Diphenylprop…, Journal of natural products (2019) | pd | 4 | [10.1021/acs.jnatprod.9b00551](https://doi.org/10.1021/acs.jnatprod.9b00551) | [31436981](https://www.ncbi.nlm.nih.gov/pubmed/31436981) | metadata signals extractable PD data (EC50) |
| `Knight_1993.pdf` | Knight J et al., Effect of lipoxins and other eicosanoid…, Journal of leukocyte biology (1993) | pd | 4 | [10.1002/jlb.54.6.518](https://doi.org/10.1002/jlb.54.6.518) | [8245703](https://www.ncbi.nlm.nih.gov/pubmed/8245703) | metadata signals extractable PD data (EC50) |
| `Laughton_1995.pdf` | Laughton DL et al., The beta-subunit of Caenorhabditis eleg…, Journal of neurochemistry (1995) | pd | 4 | [10.1046/j.1471-4159.1995.64052354.x](https://doi.org/10.1046/j.1471-4159.1995.64052354.x) | [7536811](https://www.ncbi.nlm.nih.gov/pubmed/7536811) | metadata signals extractable PD data (EC50) |
| `Li_2006.pdf` | Li J et al., [Recombinant hPR gene yeast for assessi…, Huan jing ke xue= Huanjing… (2006) | pd | 4 | not captured | [17304841](https://www.ncbi.nlm.nih.gov/pubmed/17304841) | metadata signals extractable PD data (EC50) |
| `Lisandro_2024.pdf` | Lisandro Althaus R et al., Inhibitory action of antibiotics on Klu…, Revista Argentina de microb… (2024) | pd | 4 | [10.1016/j.ram.2023.12.004](https://doi.org/10.1016/j.ram.2023.12.004) | [38472028](https://www.ncbi.nlm.nih.gov/pubmed/38472028) | metadata signals extractable PD data (IC50) |
| `Majorel_2014.pdf` | Majorel C et al., Evidence of nickel (Ni) efflux in Ni-to…, Environmental microbiology… (2014) | pd | 4 | [10.1111/1758-2229.12176](https://doi.org/10.1111/1758-2229.12176) | [25646544](https://www.ncbi.nlm.nih.gov/pubmed/25646544) | metadata signals extractable PD data (EC50) |
| `Mara_2020.pdf` | Mara de Menezes Epifanio N et al., Chemical characterization and in vivo a…, Food & function (2020) | pd | 4 | [10.1039/d0fo00484g](https://doi.org/10.1039/d0fo00484g) | [32462155](https://www.ncbi.nlm.nih.gov/pubmed/32462155) | metadata signals extractable PD data (EC50) |
| `Mei_2024.pdf` | Mei M et al., Development of nanobodies specific to c…, International journal of bi… (2024) | pd | 4 | [10.1016/j.ijbiomac.2024.129208](https://doi.org/10.1016/j.ijbiomac.2024.129208) | [38185298](https://www.ncbi.nlm.nih.gov/pubmed/38185298) | metadata signals extractable PD data (EC50) |
| `Moein_2008.pdf` | Moein MR et al., Flavonoids from Iris songarica and thei…, Planta medica (2008) | pd | 4 | [10.1055/s-2008-1081342](https://doi.org/10.1055/s-2008-1081342) | [18816429](https://www.ncbi.nlm.nih.gov/pubmed/18816429) | metadata signals extractable PD data (IC50) |
| `Nagayoshi_2015.pdf` | Nagayoshi H et al., Benzotriazole ultraviolet stabilizers s…, Environmental science & tec… (2015) | pd | 4 | [10.1021/es503926w](https://doi.org/10.1021/es503926w) | [25383696](https://www.ncbi.nlm.nih.gov/pubmed/25383696) | metadata signals extractable PD data (EC50) |
| `Pei_2005.pdf` | Pei Z et al., Study of real-time lectin-carbohydrate…, Biosensors & bioelectronics (2005) | pd | 4 | [10.1016/j.bios.2004.10.006](https://doi.org/10.1016/j.bios.2004.10.006) | [15967351](https://www.ncbi.nlm.nih.gov/pubmed/15967351) | metadata signals extractable PD data (EC50) |
| `Peter_2004.pdf` | Peter Guengerich F et al., Aryl hydrocarbon receptor response to i…, Archives of biochemistry an… (2004) | pd | 4 | [10.1016/j.abb.2004.01.002](https://doi.org/10.1016/j.abb.2004.01.002) | [15001395](https://www.ncbi.nlm.nih.gov/pubmed/15001395) | metadata signals extractable PD data (EC50) |
| `Piraino_2014.pdf` | Piraino FF et al., Implication of ICP0 translocation and p…, International journal of me… (2014) | pd | 4 | [10.1615/intjmedmushrooms.v16.i6.10](https://doi.org/10.1615/intjmedmushrooms.v16.i6.10) | [25404216](https://www.ncbi.nlm.nih.gov/pubmed/25404216) | metadata signals extractable PD data (EC50) |
| `Pumiglia_1995.pdf` | Pumiglia KM et al., A direct interaction between G-protein…, The Journal of biological c… (1995) | pd | 4 | [10.1074/jbc.270.24.14251](https://doi.org/10.1074/jbc.270.24.14251) | [7782277](https://www.ncbi.nlm.nih.gov/pubmed/7782277) | metadata signals extractable PD data (EC50) |
| `Wu_2002.pdf` | Wu WZ et al., Estrogenic effects from household stoves, Ecotoxicology and environme… (2002) | pd | 4 | [10.1006/eesa.2002.2192](https://doi.org/10.1006/eesa.2002.2192) | [12481859](https://www.ncbi.nlm.nih.gov/pubmed/12481859) | metadata signals extractable PD data (EC50) |
| `Zhang_2023.pdf` | Zhang J et al., Antihypertensive Effect, ACE Inhibitory…, Journal of agricultural and… (2023) | pd | 4 | [10.1021/acs.jafc.3c04819](https://doi.org/10.1021/acs.jafc.3c04819) | [37812565](https://www.ncbi.nlm.nih.gov/pubmed/37812565) | metadata signals extractable PD data (IC50) |
| `Allen_2017.pdf` | Allen CE et al., N-Acetyltransferase 2 Genotype-Dependen…, Drug metabolism and disposi… (2017) | pgx | 8 | [10.1124/dmd.117.078543](https://doi.org/10.1124/dmd.117.078543) | [29018032](https://www.ncbi.nlm.nih.gov/pubmed/29018032) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Bhardwaj_2020.pdf` | Bhardwaj M et al., Conversion of amino acids to aryl/heter…, RSC medicinal chemistry (2020) | pgx | 5 | [10.1039/c9md00451c](https://doi.org/10.1039/c9md00451c) | [33479614](https://www.ncbi.nlm.nih.gov/pubmed/33479614) | metadata signals extractable PGX data (CYP2D6) |
| `Goldstein_1994.pdf` | Goldstein JA et al., Evidence that CYP2C19 is the major (S)-…, Biochemistry (1994) | pgx | 5 | [10.1021/bi00173a017](https://doi.org/10.1021/bi00173a017) | [8110777](https://www.ncbi.nlm.nih.gov/pubmed/8110777) | metadata signals extractable PGX data (CYP2C19) |
| `Krynetski_1995.pdf` | Krynetski EY et al., A single point mutation leading to loss…, Proceedings of the National… (1995) | pgx | 5 | [10.1073/pnas.92.4.949](https://doi.org/10.1073/pnas.92.4.949) | [7862671](https://www.ncbi.nlm.nih.gov/pubmed/7862671) | metadata signals extractable PGX data (TPMT) |
| `Rowland_1994.pdf` | Rowland K et al., Inhibition of CYP2D6 activity by treatm…, British journal of clinical… (1994) | pgx | 5 | [10.1111/j.1365-2125.1994.tb04315.x](https://doi.org/10.1111/j.1365-2125.1994.tb04315.x) | [7946944](https://www.ncbi.nlm.nih.gov/pubmed/7946944) | metadata signals extractable PGX data (CYP2D6) |
| `Sullivan-Klose_1996.pdf` | Sullivan-Klose TH et al., The role of the CYP2C9-Leu359 allelic v…, Pharmacogenetics (1996) | pgx | 5 | [10.1097/00008571-199608000-00007](https://doi.org/10.1097/00008571-199608000-00007) | [8873220](https://www.ncbi.nlm.nih.gov/pubmed/8873220) | metadata signals extractable PGX data (CYP2C9) |
| `Takanashi_2000.pdf` | Takanashi K et al., CYP2C9 Ile359 and Leu359 variants: enzy…, Pharmacogenetics (2000) | pgx | 5 | [10.1097/00008571-200003000-00001](https://doi.org/10.1097/00008571-200003000-00001) | [10761997](https://www.ncbi.nlm.nih.gov/pubmed/10761997) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-07T21:05:09.501781+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ahmed_2015 | not_relevant | 0 | 0 | The paper describes the development of a monoclonal antibody (8H9) and reports in vitro ADCC EC50 values, but it does not report a pharmacodynamic or exposure-response relationship for Saccharomyces boulardii. |
| PGx | Ahmed_2023 | not_relevant | 0 | 0 | The paper investigates novel tamoxifen analogues for cancer and viral infections and does not mention Saccharomyces boulardii or pharmacogenomics. |
| popPK | Algov_2026 | irrelevant | 0 | 0 | The paper describes a platform for discovering tumor-activated protease sensors and biosensors in mouse lung metastasis models, with no mention of saccharomyces_boulardii or pharmacokinetic parameters. |
| PD | Algov_2026 | not_relevant | 0 | 0 | The paper describes a protease substrate discovery platform (PSurf) and tumor detection biosensors, containing no pharmacodynamic or exposure-response analysis for Saccharomyces boulardii. |
| PGx | Allen_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of hydralazine metabolism, not saccharomyces_boulardii. |
| popPK | Almquist_2015 | irrelevant | 0 | 0 | The paper is a cell biology study modeling the nuclear dynamics of the transcription factor Mig1 in yeast (*Saccharomyces cerevisiae*), not a pharmacokinetic study of the probiotic drug *Saccharomyces boulardii*. |
| PGx | Alqassim_2019 | not_relevant | 0 | 0 | The paper studies the toxicology and AhR signaling of chrysenes; it does not involve saccharomyces_boulardii or report any pharmacogenomic effects. |
| popPK | Alves_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of voriconazole, not Saccharomyces boulardii. |
| PGx | Alves_2018 | not_relevant | 0 | 0 | The paper describes plant secondary metabolism and heterologous expression in yeast, not pharmacogenomics or PK/PD of the drug Saccharomyces boulardii. |
| PGx | Amorosi_2021 | not_relevant | 0 | 0 | The paper characterizes CYP2C9 enzyme activity and abundance, but does not report PK/PD parameters for the specific drug 'saccharomyces_boulardii'. |
| PD | Aruoja_2009 | not_relevant | 0 | 0 | The paper studies the toxicity of metal oxide nanoparticles to microalgae and does not mention Saccharomyces boulardii or report any pharmacodynamic parameters for it. |
| popPK | Asano_1995 | irrelevant | 0 | 0 | The paper studies the conformational chemistry of glycosidase inhibitors (nitrogen-in-the-ring sugars) and their antiviral activity, which is unrelated to the pharmacokinetics of the drug saccharomyces_boulardii. |
| PD | Asano_1995 | not_relevant | 0 | 0 | The paper studies nitrogen-in-the-ring sugars (deoxynojirimycin analogues) and does not mention or report any data for Saccharomyces boulardii. |
| popPK | Auchtung_2025 | irrelevant | 0 | 0 | The study examines the effects of antibiotics on gastrointestinal microbiota communities and does not report pharmacokinetic parameters for Saccharomyces boulardii. |
| PD | Auchtung_2025 | not_relevant | 0 | 0 | The paper investigates the effects of antibiotics on gastrointestinal microbiota diversity and composition, not the pharmacodynamic relationship of Saccharomyces boulardii. |
| PD | BRUCE_1958 | not_relevant | 0 | 0 | The paper studies the effects of radiation on yeast (Saccharomyces cerevisiae), not the pharmacodynamics of the probiotic Saccharomyces boulardii. |
| PGx | Barbosa_1991 | not_relevant | 0 | 0 | The paper discusses mutations in the argininosuccinate lyase gene and their effect on enzyme activity, unrelated to Saccharomyces boulardii pharmacokinetics or pharmacodynamics. |
| popPK | Belloir_2024 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PD | Belloir_2024 | not_relevant | 0 | 0 | The paper discusses yeast extracts and bitter taste receptors but does not report any pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| PD | Bertin_2016 | not_relevant | 0 | 0 | The paper reports pharmacological activity (EC50/IC50) for marine cyanobacterial compounds (kalkipyrones), not for the drug Saccharomyces boulardii. |
| PGx | Bhardwaj_2020 | not_relevant | 0 | 0 | The paper uses CYP2D6-expressing yeast as a biocatalyst for chemical synthesis, not as a subject for pharmacogenomic analysis of Saccharomyces boulardii. |
| PD | Bittner_2015 | not_relevant | 0 | 0 | The paper describes a polymer-immobilized yeast assay for detecting endocrine disruptors and does not report any pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| popPK | Bizal_1991 | irrelevant | 0 | 0 | The study measures phagocytosis and lysosome fusion kinetics of yeast particles by macrophages, not the systemic pharmacokinetics of Saccharomyces boulardii as a drug. |
| PGx | Blanco-Touriñán_2020 | not_relevant | 0 | 0 | The paper describes plant biology (Arabidopsis) and has no relevance to Saccharomyces boulardii pharmacology. |
| PD | Bovee_2004 | not_relevant | 0 | 0 | The paper reports dose-response data for estrogenic compounds (e.g., 17beta-estradiol, genistein) in a yeast bioassay, not for the drug saccharomyces boulardii. |
| PD | Bovee_2007 | not_relevant | 0 | 0 | The paper describes a yeast bioassay for androgen detection and does not report any pharmacodynamic or exposure-response data for the drug Saccharomyces boulardii. |
| PD | Bovee_2008 | not_relevant | 0 | 0 | The paper describes a yeast biosensor assay for androgen receptor activity and does not report any pharmacodynamic or exposure-response data for the drug Saccharomyces boulardii. |
| PD | Bovee_2009 | not_relevant | 0 | 0 | The paper describes a yeast bioassay for estrogenic activity and reports EC50 values for 17beta-estradiol, but it does not involve the drug Saccharomyces boulardii. |
| popPK | Braam_2024 | irrelevant | 0 | 0 | The paper investigates protein localization in Saccharomyces cerevisiae, not the pharmacokinetics of Saccharomyces boulardii. |
| PD | Breinholt_1998 | not_relevant | 0 | 0 | The paper focuses on detecting estrogenic flavonoids using yeast and cell assays, and does not report any pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| popPK | Bruguerolle_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of theophylline in rats, not saccharomyces_boulardii. |
| PD | Buckley_2010 | not_relevant | 0 | 0 | The paper reports an environmental toxicology assay (yeast estrogen screen) for wastewater effluent and does not involve the drug Saccharomyces boulardii or any pharmacodynamic modeling. |
| PD | Bujdáková_1993 | not_relevant | 0 | 0 | The paper discusses antifungal benzothiazoles, not Saccharomyces boulardii, and does not report any PD or exposure-response relationship for the target drug. |
| PGx | Bárcena_2019 | not_relevant | 0 | 0 | The paper discusses methionine restriction and progeria in model organisms and yeast (Saccharomyces cerevisiae), but does not investigate Saccharomyces boulardii or any pharmacogenomic effects on PK/PD parameters of the organism. |
| popPK | Calumby_2025 | irrelevant | 0 | 0 | The study investigates Trichoderma afroharzianum, a completely different organism, and does not contain any data for Saccharomyces boulardii. |
| PD | Calumby_2025 | not_relevant | 0 | 0 | The paper studies Trichoderma afroharzianum, not Saccharomyces boulardii. |
| PGx | Castillo_2019 | not_relevant | 0 | 0 | The paper discusses general yeast metabolic modeling and does not report pharmacogenomic effects on PK/PD parameters for the specific drug Saccharomyces boulardii. |
| PD | Catalina-Hernández_2024 | not_relevant | 0 | 0 | The paper focuses on TRPV2 pharmacology and does not mention Saccharomyces boulardii or report any PD parameters for it. |
| popPK | Cazzador_1991 | irrelevant | 0 | 0 | The paper investigates oscillations in yeast continuous cultures using a chemostat model, not the pharmacokinetics of the probiotic *Saccharomyces boulardii* in an animal or human host. |
| PGx | Chang_2020 | not_relevant | 0 | 0 | The study evaluates the efficacy and safety of Saccharomyces boulardii in H. pylori eradication and does not measure or report pharmacokinetic/pharmacodynamic parameters of the probiotic itself. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | The paper describes a yeast two-hybrid screening system for PPARgamma ligands and does not involve saccharomyces_boulardii or pharmacokinetic modeling. |
| PD | Chen_2004 | not_relevant | 0 | 0 | The paper describes a yeast two-hybrid screening system for PPARgamma ligands and does not involve Saccharomyces boulardii or report any pharmacodynamic parameters for it. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for isavuconazole, not saccharomyces_boulardii. |
| PD | Chen_2023 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for isavuconazole, not saccharomyces boulardii, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| PGx | Ching_1995 | not_relevant | 0 | 0 | The paper studies CYP2D6 inhibition by quinidine in yeast and contains no data regarding saccharomyces_boulardii pharmacogenomics. |
| popPK | Coghlan_1992 | irrelevant | 0 | 0 | The paper studies recombinant hemoglobin produced in *Saccharomyces cerevisiae*, not the probiotic *Saccharomyces boulardii*. |
| PD | Coghlan_1992 | not_relevant | 0 | 0 | The paper characterizes recombinant hemoglobin produced in yeast, not the probiotic Saccharomyces boulardii, and reports no drug pharmacodynamics or exposure-response data. |
| popPK | Coimbra_2026 | irrelevant | 0 | 0 | The study investigates nutritional effects on passive immunity in cattle using Saccharomyces cerevisiae fermentation products, not the pharmacokinetics of Saccharomyces boulardii. |
| popPK | Coin_1986 | irrelevant | 0 | 0 | The study investigates the in vitro toxicity of cadmium chloride in rabbit macrophages and does not involve saccharomyces_boulardii or pharmacokinetic parameters. |
| PD | Coin_1986 | not_relevant | 0 | 0 | The paper studies the toxicity of cadmium chloride, not saccharomyces boulardii. |
| PGx | Cole_1989 | not_relevant | 0 | 0 | The paper does not study Saccharomyces boulardii or any pharmacogenomic variants; it focuses on Candida albicans in a murine model. |
| popPK | Collins_1995 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Collins_1995 | not_relevant | 0 | 0 | The paper discusses the biochemical mechanism of a yeast enzyme mutant and is unrelated to the pharmacodynamics of Saccharomyces boulardii. |
| PD | Colosi_2011 | not_relevant | 0 | 0 | The paper describes a yeast bioassay for measuring estrogenic activity in wastewater and does not involve Saccharomyces boulardii or report any pharmacodynamic parameters for a drug. |
| popPK | Cooney_1999 | irrelevant | 0 | 0 | The paper focuses on hyaluronic acid fermentation by Streptococcus zooepidemicus and does not involve saccharomyces_boulardii or its pharmacokinetics. |
| PD | Cui_2026 | not_relevant | 0 | 0 | The paper focuses on the identification and control of a plant disease (Peach Bacterial Shot Hole) and does not contain any pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| PD | Câmara_2019 | not_relevant | 0 | 0 | The paper investigates the effect of ferulic, gallic, and sinapic acids on Candida albicans, not Saccharomyces boulardii. |
| PGx | Dai_2021 | not_relevant | 0 | 0 | The paper investigates the effects of a sunflower extract on urate nephropathy in mice and does not study the pharmacokinetics or pharmacodynamics of Saccharomyces boulardii or any pharmacogenomic effects. |
| popPK | Danhausen_2026 | irrelevant | 0 | 0 | The paper describes a yeast two-hybrid assay for thyroxine detection, which is a diagnostic/biosensor study and does not report pharmacokinetic parameters for Saccharomyces boulardii. |
| PD | Danhausen_2026 | not_relevant | 0 | 0 | The paper describes a yeast-based biosensor assay for detecting thyroxine (T4) and reports dose-response parameters (EC50) for the assay's sensitivity to T4, not a pharmacodynamic relationship for the drug Saccharomyces boulardii. |
| popPK | Daum_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phospholipid transfer in *Saccharomyces cerevisiae* (a different yeast species from *S. boulardii*) and does not report pharmacokinetic parameters. |
| PGx | De_2020 | not_relevant | 0 | 0 | The paper describes metabolic engineering in E. coli for methanol assimilation and does not mention Saccharomyces boulardii or pharmacogenomics. |
| popPK | Denier_2009 | irrelevant | 0 | 0 | The study investigates the endocrine-disrupting effects of heavy metals using a yeast assay and does not involve Saccharomyces boulardii or pharmacokinetic modeling. |
| PD | Denier_2009 | not_relevant | 0 | 0 | The paper studies heavy metals (cadmium, copper, zinc) and does not report any pharmacodynamic data for Saccharomyces boulardii. |
| popPK | Derf_2018 | irrelevant | 0 | 0 | The paper investigates the mechanism of α-synuclein toxicity in yeast (Saccharomyces cerevisiae) using methoxy-stilbene compounds, not the pharmacokinetics of Saccharomyces boulardii. |
| PD | Dervishi_2026 | not_relevant | 0 | 0 | The paper studies triterpenoid saponins in various organisms (including S. cerevisiae, not S. boulardii) and does not report any pharmacodynamic data for Saccharomyces boulardii. |
| popPK | Dharmarajan_2019 | irrelevant | 0 | 0 | The paper focuses on computational methods for single-cell dynamics in yeast and does not involve the drug saccharomyces boulardii or its pharmacokinetics. |
| PD | Di_2020 | not_relevant | 0 | 0 | The paper discusses Aureobasidium pullulans volatile organic compounds for controlling brown rot in stone fruits, not Saccharomyces boulardii or any pharmacodynamic relationship. |
| PD | Dickinson_2003 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of yeast aldehyde dehydrogenase and is unrelated to the pharmacodynamics of Saccharomyces boulardii. |
| popPK | Didier_2026 | irrelevant | 0 | 0 | The paper focuses on drug discovery for Chagas disease using Saccharomyces cerevisiae (not boulardii) chemogenomic data and does not report pharmacokinetic parameters. |
| PD | Didier_2026 | not_relevant | 0 | 0 | The paper reports dose-response curves and EC50 values for small molecule compounds against Trypanosoma cruzi, not for Saccharomyces boulardii. |
| popPK | Dupont_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for anidulafungin, not saccharomyces_boulardii. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | The paper is a safety assessment update for microbial agents (QPS) and does not report any pharmacokinetic parameters for *Saccharomyces boulardii*. |
| PD | EFSA_2026 | not_relevant | 0 | 0 | The paper is a regulatory safety assessment (QPS list update) for microorganisms and contains no pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for Saccharomyces boulardii. |
| popPK | Ebina_1989 | irrelevant | 0 | 0 | The paper investigates electrical impedance changes during yeast growth in batch culture and does not report any pharmacokinetic parameters for Saccharomyces boulardii. |
| PD | Ellis_1992 | not_relevant | 0 | 0 | The paper investigates the catalytic activity of CYP2D6 expressed in yeast, not the pharmacodynamics of Saccharomyces boulardii. |
| PGx | Ellis_1992 | not_relevant | 0 | 0 | The paper reports the expression of a human CYP2D6 gene in yeast for drug metabolism studies, not the pharmacogenomic effect of a human gene variant on a PK/PD parameter for Saccharomyces boulardii. |
| PGx | Elnakib_2021 | not_relevant | 0 | 0 | The paper discusses the synthesis and activity of novel anti-cancer drugs (SERMs) and does not contain any information regarding saccharomyces_boulardii or its pharmacokinetics/pharmacodynamics. |
| PGx | Eugster_1993 | not_relevant | 0 | 0 | The study investigates heterologous expression of CYP enzymes in *Saccharomyces cerevisiae* to model caffeine metabolism, whereas the query asks for pharmacogenomic effects on *Saccharomyces boulardii* (a probiotic). |
| PGx | Fasullo_2017 | not_relevant | 0 | 0 | The paper describes an in vitro genotoxicity assay using yeast expressing CYP3A4, not the pharmacokinetics or pharmacodynamics of the probiotic Saccharomyces boulardii. |
| popPK | Feldman_1982 | irrelevant | 0 | 0 | The paper is an in-vitro biochemical study of yeast hexokinase fluorescence and metal ion effects, containing no pharmacokinetic parameters for Saccharomyces boulardii. |
| PD | Feldman_1982 | not_relevant | 0 | 0 | The paper studies the biochemical effects of metal ions on yeast hexokinase fluorescence and glucose binding, not the pharmacodynamics of Saccharomyces boulardii. |
| PD | Flores-Bocanegra_2015 | not_relevant | 0 | 0 | The paper studies alpha-glucosidase inhibitors from Vauquelinia corymbosa and does not mention or study Saccharomyces boulardii. |
| PGx | Fogel_1982 | not_relevant | 0 | 0 | The paper studies copper resistance in S. cerevisiae, not S. boulardii, and involves metal toxicity rather than a pharmacokinetic or pharmacodynamic parameter of a drug. |
| popPK | Frydkjær_2017 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Frydkjær_2017 | not_relevant | 0 | 0 | The paper studies the effects of microplastics and phenanthrene on Daphnia magna, not the pharmacodynamics of Saccharomyces boulardii. |
| PD | Fu_2007 | not_relevant | 0 | 0 | The paper studies xenoestrogens in fish estrogen receptors using a yeast assay and does not involve Saccharomyces boulardii or report any PD parameters for it. |
| PGx | Fukuda_2022 | not_relevant | 0 | 0 | The paper discusses Saccharomyces cerevisiae (not S. boulardii) and yeast fermentation traits, not a pharmacogenomic effect on drug PK/PD. |
| popPK | Gao_2020 | irrelevant | 0 | 0 | The paper investigates the photodegradation of ethylparaben and its estrogenic effects, completely unrelated to the pharmacokinetics of Saccharomyces boulardii. |
| PD | Gao_2020 | not_relevant | 0 | 0 | The paper investigates the photodegradation of ethylparaben and its estrogenic effects, not the pharmacodynamics of Saccharomyces boulardii. |
| PD | Gartiser_2007 | not_relevant | 0 | 0 | The paper discusses anaerobic inhibition of antibiotics in sewage treatment and does not mention Saccharomyces boulardii or report any pharmacodynamic parameters for it. |
| popPK | Gecili_2022 | irrelevant | 0 | 0 | The paper describes a statistical methodology for proteomics and lung function data in cystic fibrosis and yeast cell cycles, containing no pharmacokinetic data for saccharomyces boulardii. |
| popPK | Gelain_2025 | irrelevant | 0 | 0 | The study focuses on propiconazole resistance in Geotrichum candidum and does not involve Saccharomyces boulardii or pharmacokinetic parameters. |
| PD | Gelain_2025 | not_relevant | 0 | 0 | The paper studies fungicide resistance in a fungus (Geotrichum candidum) and does not involve the drug Saccharomyces boulardii or any pharmacodynamic modeling. |
| popPK | Gellerich_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of mitochondrial bioenergetics and adenine nucleotide diffusion in rat hearts, not a pharmacokinetic study of Saccharomyces boulardii. |
| popPK | Gerhold_2015 | irrelevant | 0 | 0 | The paper is a review of chromatin remodeling complexes in yeast and does not contain any pharmacokinetic data for Saccharomyces boulardii. |
| PD | Gerlach_2014 | not_relevant | 0 | 0 | The paper describes a yeast-based bioassay for detecting androgens in urine and does not report any pharmacodynamic or exposure-response relationship for Saccharomyces boulardii. |
| popPK | Ghosh_2023 | irrelevant | 0 | 0 | The paper is a review of heterocyclic PAHs in the environment and does not involve the drug Saccharomyces boulardii or its pharmacokinetics. |
| PD | Ghosh_2023 | not_relevant | 0 | 0 | The paper is a review of heterocyclic PAHs in the environment and does not mention Saccharomyces boulardii or report any pharmacodynamic parameters for it. |
| PGx | Gilbert_1993 | not_relevant | 0 | 0 | The paper studies yeast biology (estrogen receptor, PDR1) and does not involve the drug Saccharomyces boulardii or human pharmacogenomics. |
| popPK | Goldbeter_1976 | irrelevant | 0 | 0 | The paper is a theoretical mechanistic study of metabolic oscillations in yeast/muscle and does not report pharmacokinetic parameters for the drug Saccharomyces boulardii. |
| PD | Goldbeter_1976 | not_relevant | 0 | 0 | The paper analyzes enzyme cooperativity and metabolic oscillations in yeast, not the pharmacodynamics of Saccharomyces boulardii. |
| PGx | Goldstein_1994 | not_relevant | 0 | 0 | The paper discusses mephenytoin metabolism, not saccharomyces_boulardii. |
| popPK | Habison_1983 | irrelevant | 0 | 0 | The paper describes the purification and kinetic properties of an enzyme (phosphofructokinase) from Aspergillus niger, which is unrelated to the pharmacokinetics of Saccharomyces boulardii. |
| PD | Habison_1983 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of phosphofructokinase from Aspergillus niger and does not involve the drug Saccharomyces boulardii or any pharmacodynamic exposure-response relationship. |
| PD | Hashimoto_2005 | not_relevant | 0 | 0 | The paper evaluates a cell bioassay for detecting estrogenic substances in sediment extracts and does not involve the drug Saccharomyces boulardii or any pharmacodynamic modeling for it. |
| PD | Hassan_2024 | not_relevant | 0 | 0 | The paper studies radiation biodosimetry in yeast, not the pharmacodynamics of the drug Saccharomyces boulardii. |
| popPK | Hengstler_1992 | irrelevant | 0 | 0 | The paper investigates the toxicology and mutagenicity of mycotoxins (rosenonolactone, trichothecin) and contains no data for saccharomyces_boulardii. |
| PD | Hengstler_1992 | not_relevant | 0 | 0 | The paper studies mycotoxins (rosenonolactone, trichothecin), not Saccharomyces boulardii. |
| PD | Hill_2006 | not_relevant | 0 | 0 | The paper discusses the bromination of nonylphenol and steroid receptor activity, which is unrelated to Saccharomyces boulardii or pharmacodynamics. |
| PGx | Hiroi_1998 | not_relevant | 0 | 0 | The paper investigates CYP2D6 metabolism of tyramine, not pharmacogenomics of Saccharomyces boulardii. |
| popPK | Hoetzel_2026 | irrelevant | 0 | 0 | The paper is about synthetic riboswitches and RNA aptamers, containing no pharmacokinetic data for saccharomyces_boulardii. |
| PD | Holtz_2026 | not_relevant | 0 | 0 | The paper focuses on metabolic engineering of yeast for alkaloid production and does not contain any pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| PD | Huang_2021 | not_relevant | 0 | 0 | The paper focuses on ACE inhibitory peptides from yeast hydrolysates and has no content regarding Saccharomyces boulardii or its pharmacodynamics. |
| PD | Huang_2024 | not_relevant | 0 | 0 | The paper focuses on the formulation and biological activity of exopolysaccharides from Sanghuangporus vaninii, not on the pharmacodynamics of Saccharomyces boulardii. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a synthetic biology gene circuit (BioFuse) for timing gene expression in bacteria and does not involve the drug saccharomyces_boulardii or pharmacokinetics. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper describes a synthetic biology gene circuit (BioFuse) for timing gene expression in bacteria and does not involve the drug Saccharomyces boulardii or any pharmacodynamic modeling. |
| popPK | Höger_1985 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Höger_1985 | not_relevant | 0 | 0 | The paper focuses on rifampin and polymorphonuclear leukocytes, with no mention of Saccharomyces boulardii or any pharmacodynamic modeling. |
| popPK | Jabarin_2026 | irrelevant | 0 | 0 | The study investigates the anticancer activity of eravacycline, not the pharmacokinetics of saccharomyces_boulardii. |
| PD | Jabarin_2026 | not_relevant | 0 | 0 | The paper investigates eravacycline, not saccharomyces boulardii. |
| popPK | Jaber_2023 | irrelevant | 0 | 0 | The paper describes a bioassay for screening bisphenols and does not involve the drug Saccharomyces boulardii or any pharmacokinetic modeling. |
| PD | Jaber_2023 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for bisphenols (e.g., BPA) using a yeast bioassay, not for the drug Saccharomyces boulardii. |
| popPK | Jakubczyk_2021 | irrelevant | 0 | 0 | The paper investigates the biological activity of lovage (Levisticum officinale) extracts and hydrolysates, not the pharmacokinetics of saccharomyces_boulardii. |
| PD | Jakubczyk_2021 | not_relevant | 0 | 0 | The paper investigates lovage extracts, not Saccharomyces boulardii, and reports in vitro enzyme inhibition and antimicrobial assays rather than a pharmacodynamic model for the specified drug. |
| popPK | Jena_2026 | irrelevant | 0 | 0 | The study focuses on the computational design of peptide-ligand conjugates for Nipah virus therapy and does not involve saccharomyces_boulardii or pharmacokinetic parameters. |
| PD | Jena_2026 | not_relevant | 0 | 0 | The paper is an in silico study on Nipah virus peptide-ligand conjugates and contains no data, analysis, or mention of Saccharomyces boulardii or any pharmacodynamic/exposure-response relationship. |
| PD | Jennings_2019 | not_relevant | 0 | 0 | The paper reports on anti-prion compounds from an ascidian and does not mention Saccharomyces boulardii or any pharmacodynamic relationship for it. |
| PD | Jerzsele_2014 | not_relevant | 0 | 0 | The paper investigates the antifungal susceptibility of Malassezia pachydermatis to ketoconazole and itraconazole, not the pharmacodynamics of Saccharomyces boulardii. |
| PD | Kagalwala_2025 | not_relevant | 0 | 0 | The paper studies nucleoside analogues in fission yeast (Schizosaccharomyces pombe), not Saccharomyces boulardii. |
| popPK | Kaika_2024 | irrelevant | 0 | 0 | The study investigates magnetic resonance properties (FEXSY) of yeast cells undergoing necrosis, not the pharmacokinetics of Saccharomyces boulardii. |
| PGx | Kamrad_2020 | not_relevant | 0 | 0 | The paper studies natural genetic variants in fission yeast metabolism and stress resistance, not the pharmacokinetics or pharmacodynamics of Saccharomyces boulardii. |
| popPK | Kaul_2002 | irrelevant | 0 | 0 | The paper describes molecular mechanisms of glucocorticoid receptor modulation by Ubc9 and does not involve saccharomyces_boulardii or pharmacokinetic parameters. |
| PD | Kaul_2002 | not_relevant | 0 | 0 | The paper discusses glucocorticoid receptor modulation by Ubc9 and does not mention saccharomyces boulardii or report any pharmacodynamic parameters for it. |
| popPK | Keaton_2008 | irrelevant | 0 | 0 | The paper studies Saccharomyces cerevisiae cell cycle regulation (Swe1p/Mih1p shuttling) and does not report pharmacokinetic parameters for Saccharomyces boulardii. |
| popPK | Kian_2026 | irrelevant | 0 | 0 | The paper describes the synthesis of inorganic nanoparticles and does not study Saccharomyces boulardii pharmacokinetics. |
| PD | Kian_2026 | not_relevant | 0 | 0 | The paper describes the synthesis of inorganic nanoparticles and does not mention Saccharomyces boulardii or report any pharmacodynamic or exposure-response data. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper is an in-vitro endocrine bioassay study of disinfection byproducts and does not involve Saccharomyces boulardii or any pharmacokinetic modeling. |
| PD | Kim_2020 | not_relevant | 0 | 0 | The paper investigates disinfection byproducts (haloacetic acids/amides) and does not mention or study Saccharomyces boulardii. |
| PD | Kimishima_2026 | not_relevant | 0 | 0 | The paper studies the antifungal compound clavatol, not Saccharomyces boulardii, and reports no pharmacodynamic or exposure-response data for the target drug. |
| PGx | Klassen_2004 | not_relevant | 0 | 0 | The paper studies Pichia acaciae and Wingea robertsiae toxins, not Saccharomyces boulardii, and focuses on fundamental cell cycle mechanisms rather than pharmacogenomics. |
| popPK | Knight_1993 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Knight_1993 | not_relevant | 0 | 0 | The paper studies eicosanoids in rainbow trout leukocytes and does not mention saccharomyces boulardii or report any PD parameters for it. |
| PD | Knight_2004 | not_relevant | 0 | 0 | The paper describes a yeast-based environmental toxicity assay and does not report any pharmacodynamic or exposure-response data for the drug Saccharomyces boulardii. |
| PGx | Koletsky_1986 | not_relevant | 0 | 0 | The paper studies cyclophilin distribution in tissues including *Saccharomyces cerevisiae* (not *S. boulardii*) and does not report pharmacogenomic effects on PK/PD parameters of the drug *Saccharomyces boulardii*. |
| popPK | Kopperschläger_1968 | irrelevant | 0 | 0 | The paper describes in-vitro kinetic and molecular properties of yeast phosphofructokinase, not the pharmacokinetics of Saccharomyces boulardii. |
| PD | Kopperschläger_1968 | not_relevant | 0 | 0 | The paper describes the kinetic properties of yeast phosphofructokinase, not the pharmacodynamics of Saccharomyces boulardii. |
| popPK | Krams_2025 | irrelevant | 0 | 0 | The study investigates the behavioral effects of escitalopram on Drosophila melanogaster and does not involve saccharomyces_boulardii or pharmacokinetic parameters. |
| PD | Krams_2025 | not_relevant | 0 | 0 | The paper studies Drosophila behavior and does not involve Saccharomyces boulardii or report any pharmacodynamic parameters. |
| popPK | Krawielitzki_1976 | irrelevant | 0 | 0 | The study focuses on nitrogen metabolism and digestibility in rats, not the pharmacokinetics of saccharomyces_boulardii. |
| PD | Krekels_2011 | not_relevant | 0 | 0 | The paper reports PD parameters for naproxen, not saccharomyces boulardii. |
| popPK | Kreuzberg_1978 | irrelevant | 0 | 0 | The paper studies enzyme kinetics (phosphofructokinase) in *Saccharomyces carlsbergensis* (a different yeast species) and does not report pharmacokinetic parameters for *S. boulardii*. |
| PD | Kreuzberg_1978 | not_relevant | 0 | 0 | The paper studies the enzyme kinetics of phosphofructokinase in Saccharomyces carlsbergensis, not the pharmacodynamics of the probiotic Saccharomyces boulardii. |
| PGx | Kroemer_1993 | not_relevant | 0 | 0 | The paper focuses on the metabolism of verapamil, not saccharomyces_boulardii. |
| PGx | Krynetski_1995 | not_relevant | 0 | 0 | The paper describes the expression of CYP2D6 in yeast to create a drug metabolism model, not the pharmacokinetics or pharmacodynamics of the probiotic Saccharomyces boulardii. |
| PGx | Krynetski_1995_2 | not_relevant | 0 | 0 | The paper reports pharmacogenomics of thiopurines, not Saccharomyces boulardii. |
| PD | Kumrungsee_2016 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of 5'-methylthioadenosine from Candida utilis, not Saccharomyces boulardii. |
| PGx | Lai_2022 | not_relevant | 0 | 0 | The paper does not mention Saccharomyces boulardii or any pharmacogenomic variants affecting its parameters. |
| popPK | Lamberti_2026 | irrelevant | 0 | 0 | The paper describes molecular imaging of mRNA translation in mammalian cells and does not involve saccharomyces_boulardii or pharmacokinetic parameters. |
| PD | Lamberti_2026 | not_relevant | 0 | 0 | The paper focuses on mRNA translation dynamics and ribosome kinetics in HeLa cells, not on the pharmacodynamics of Saccharomyces boulardii. |
| PGx | Langouët_1995 | not_relevant | 0 | 0 | The paper investigates aflatoxin B1 metabolism by CYP1A2/3A4 and GSTs, which is unrelated to Saccharomyces boulardii pharmacokinetics or pharmacodynamics. |
| PD | Laughton_1995 | not_relevant | 0 | 0 | The paper describes the molecular cloning and functional characterization of a nematode receptor in Xenopus oocytes, not the pharmacodynamics of Saccharomyces boulardii. |
| PGx | Le_2016 | not_relevant | 0 | 0 | The paper investigates protein aggregation in yeast and is unrelated to Saccharomyces boulardii pharmacokinetics or pharmacodynamics. |
| PD | Legler_2002 | not_relevant | 0 | 0 | The paper reports in vitro estrogenic activity of sediment compounds and does not mention saccharomyces boulardii or any pharmacodynamic relationship for it. |
| popPK | Leon_2026 | irrelevant | 0 | 0 | The study analyzes oral Candida albicans colonization in infants, not the pharmacokinetics of Saccharomyces boulardii. |
| PD | Li_2006 | not_relevant | 0 | 0 | The paper describes a yeast bioassay for environmental endocrine disrupters and does not involve the drug Saccharomyces boulardii. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Huangqin Tang (HQT) constituents in rats, not Saccharomyces boulardii. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper analyzes glucose signaling pathways in yeast (S. cerevisiae) and does not study the pharmacokinetics or pharmacodynamics of the probiotic drug Saccharomyces boulardii in humans. |
| popPK | Liakopoulos_2022 | irrelevant | 0 | 0 | The paper focuses on the evolution of fluoroquinolone resistance in Streptococcus pneumoniae and models antibiotic pharmacodynamics, containing no data or parameters for saccharomyces_boulardii. |
| PD | Liakopoulos_2022 | not_relevant | 0 | 0 | The paper focuses on fluoroquinolone resistance in Streptococcus pneumoniae and does not mention or analyze Saccharomyces boulardii. |
| PD | Liao_2013 | not_relevant | 0 | 0 | The paper studies the decolorization of azo dyes by Bacillus cereus and reports an EC50 for the dye's toxicity to algae, but it does not involve Saccharomyces boulardii or any pharmacodynamic relationship for that organism. |
| popPK | Lipinski_2023 | irrelevant | 0 | 0 | The paper describes the engineering of NK cell engagers using antibodies and has no relation to the pharmacokinetics of Saccharomyces boulardii. |
| PD | Lipinski_2023 | not_relevant | 0 | 0 | The paper concerns antibody engineering and NK cell killing assays for NKp46/EGFR bispecifics, not Saccharomyces boulardii. |
| PD | Lisandro_2024 | not_relevant | 0 | 0 | The paper discusses the inhibitory action of antibiotics on Kluyveromyces marxianus, not Saccharomyces boulardii, and does not report any pharmacodynamic or exposure-response relationships for the target drug. |
| PD | Liu_2015 | not_relevant | 0 | 0 | The paper studies kokumi peptides from yeast extract, not the probiotic Saccharomyces boulardii, and reports sensory thresholds rather than pharmacodynamic parameters for the specified drug. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The paper focuses on the SPAG6 protein and spermatogenesis in mice, unrelated to saccharomyces boulardii or pharmacokinetics. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper concerns the engineering of CD3-targeting antibodies and does not study Saccharomyces boulardii or pharmacogenomic effects. |
| PD | Liu_2023_2 | not_relevant | 0 | 0 | The paper studies a polysaccharide from Tremella sanguinea, not Saccharomyces boulardii, and reports in vitro antioxidant/prebiotic assays rather than a pharmacodynamic model for the specified drug. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The study analyzes Sargentodoxae Caulis and does not mention Saccharomyces boulardii or any pharmacogenomic analysis. |
| popPK | Llamosi_2016 | irrelevant | 0 | 0 | The paper focuses on gene expression modeling in yeast cells, not the pharmacokinetics of the drug Saccharomyces boulardii. |
| PD | Lodge_1997 | not_relevant | 0 | 0 | The paper studies antifungal inhibitors of Candida albicans Nmt, not Saccharomyces boulardii. |
| PD | Loth_2014 | not_relevant | 0 | 0 | The paper studies the dose-response of a fungal pathogen (Paracoccidioides brasiliensis) in an arthritis model, not the pharmacodynamics of the drug Saccharomyces boulardii. |
| popPK | Lu_2011 | irrelevant | 0 | 0 | The paper describes a statistical method for gene regulatory network identification in yeast and does not report pharmacokinetic parameters for Saccharomyces boulardii. |
| popPK | Luan_2003 | irrelevant | 0 | 0 | The paper describes a statistical method for gene expression clustering and contains no pharmacokinetic data for Saccharomyces boulardii. |
| popPK | Lukáč_2024 | irrelevant | 0 | 0 | The paper studies caffeic acid derivatives, not saccharomyces_boulardii, and reports in vitro activity data only. |
| PD | Lukáč_2024 | not_relevant | 0 | 0 | The paper studies caffeic acid derivatives, not Saccharomyces boulardii. |
| popPK | López-Mirabal_2008 | irrelevant | 0 | 0 | The paper is a review on redox metabolism in the yeast *Saccharomyces cerevisiae*, not a pharmacokinetic study of *Saccharomyces boulardii*. |
| PGx | Ma_2024 | not_relevant | 0 | 0 | The paper studies the effects of Chinese Sumac on uric acid levels in mice and does not involve saccharomyces_boulardii or pharmacogenomic variants. |
| PD | Majorel_2014 | not_relevant | 0 | 0 | The paper studies nickel tolerance mechanisms in a fungus (Pisolithus albus) and yeast, not the pharmacodynamics of the drug Saccharomyces boulardii. |
| popPK | Malik_2010 | irrelevant | 0 | 0 | The paper studies the enzyme kinetics of SIRT1 protein mutants, not the pharmacokinetics of Saccharomyces boulardii. |
| PD | Malik_2010 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic kinetics (Km, EC50, IC50) for SIRT1 protein mutants, not a pharmacodynamic exposure-response relationship for the drug Saccharomyces boulardii. |
| popPK | Mara_2020 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Mara_2020 | not_relevant | 0 | 0 | The paper focuses on parsley extract and does not mention Saccharomyces boulardii or report any pharmacodynamic parameters for it. |
| popPK | Marbà-Ardébol_2018 | irrelevant | 0 | 0 | The paper studies Saccharomyces cerevisiae (baker's yeast) in bioreactors, not the probiotic Saccharomyces boulardii, and contains no pharmacokinetic parameters. |
| PGx | Mardones_2022 | not_relevant | 0 | 0 | The paper focuses on the experimental evolution and ethanol tolerance of Saccharomyces eubayanus, not on saccharomyces_boulardii pharmacogenomics or drug PK/PD parameters. |
| PD | Maruyama_1980 | not_relevant | 0 | 0 | The paper studies the biophysical folding of yeast 5S RNA induced by magnesium binding, not the pharmacodynamics of the probiotic *Saccharomyces boulardii*. |
| popPK | McCallin_2026 | irrelevant | 0 | 0 | The paper is a clinical case series regarding phage therapy and FMT for UTIs, containing no pharmacokinetic data for Saccharomyces boulardii. |
| PD | McCallin_2026 | not_relevant | 0 | 0 | The paper is a clinical case series on phage therapy and FMT for UTIs and does not report any pharmacodynamic or exposure-response analysis for Saccharomyces boulardii. |
| PGx | McGregor_2022 | not_relevant | 0 | 0 | The paper discusses a vaccine against Hepatitis C virus and does not involve saccharomyces_boulardii or pharmacogenomics. |
| PGx | McQuaid_2022 | not_relevant | 0 | 0 | The paper investigates genetic variants of the GINS3 gene in relation to DNA replication and Meier-Gorlin syndrome, with no mention of Saccharomyces boulardii or pharmacokinetic/pharmacodynamic effects. |
| PD | Mei_2024 | not_relevant | 0 | 0 | The paper focuses on the development of nanobodies against Staphylococcus aureus using yeast surface display and does not contain any pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| popPK | Michael_2025 | irrelevant | 0 | 0 | The paper describes a software tool for experimental scheduling and contains no pharmacokinetic data or parameters for Saccharomyces boulardii. |
| PD | Michael_2025 | not_relevant | 0 | 0 | The paper describes a software tool (StaggR) for scheduling experimental workflows and contains no pharmacodynamic data, exposure-response analysis, or mention of Saccharomyces boulardii. |
| PD | Mobinikhaledi_2015 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for synthetic benzimidazole and pyrimidine derivatives, not Saccharomyces boulardii, and does not contain any pharmacokinetic or pharmacodynamic modeling. |
| PD | Moein_2008 | not_relevant | 0 | 0 | The paper discusses flavonoids from Iris songarica, not Saccharomyces boulardii, and does not report any pharmacodynamic or exposure-response data for the specified drug. |
| PD | Moraes_2018 | not_relevant | 0 | 0 | The paper studies naphthoquinones (β-lapachone, etc.) against Candida albicans, not Saccharomyces boulardii. |
| PGx | Munkacsi_2026 | not_relevant | 0 | 0 | The study investigates genetic modifiers of Niemann-Pick type C disease and does not involve the drug saccharomyces_boulardii. |
| PGx | Munkres_1990 | not_relevant | 0 | 0 | The paper studies pharmacogenetics of antioxidants in yeast (Saccharomyces sp.), not the drug Saccharomyces boulardii, and discusses cellular physiology rather than PK/PD parameters of the drug. |
| PGx | Musielak_2021 | not_relevant | 0 | 0 | The paper discusses the role of the KlRho5 gene in yeast morphology and stress response, with no mention of Saccharomyces boulardii or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Nagasawa_1995 | irrelevant | 0 | 0 | The paper studies nitroxyl prodrugs as aldehyde dehydrogenase inhibitors and does not involve saccharomyces_boulardii or its pharmacokinetics. |
| PD | Nagasawa_1995 | not_relevant | 0 | 0 | The paper studies nitroxyl prodrugs (N-hydroxysaccharin) and does not mention or test Saccharomyces boulardii. |
| popPK | Nagayoshi_2015 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Nagayoshi_2015 | not_relevant | 0 | 0 | The paper discusses benzotriazole UV stabilizers and aryl hydrocarbon receptor ligands, not Saccharomyces boulardii or any pharmacodynamic relationship for that organism. |
| PGx | Nelson_2020 | not_relevant | 0 | 0 | The paper studies the effect of yeast fermentate (Saccharomyces cerevisiae) on broiler chicken stress physiology, not the pharmacogenomics of Saccharomyces boulardii. |
| PD | Neuser_2000 | not_relevant | 0 | 0 | The paper characterizes the enzyme pyruvate decarboxylase from Zygosaccharomyces bisporus and does not report any pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| popPK | Ngetich_2026 | irrelevant | 0 | 0 | The paper reports high-throughput screening of novel antimalarial compounds against Plasmodium falciparum and contains no pharmacokinetic data or mention of Saccharomyces boulardii. |
| PD | Ngetich_2026 | not_relevant | 0 | 0 | The paper reports dose-response data (EC50) for novel small-molecule antimalarial compounds, not for Saccharomyces boulardii. |
| PGx | Nisson_1986 | not_relevant | 0 | 0 | The paper reports on a mutation in Saccharomyces cerevisiae affecting mutagenesis susceptibility, not a pharmacogenomic effect on the PK/PD of Saccharomyces boulardii. |
| popPK | Niu_2025 | irrelevant | 0 | 0 | The paper investigates the photochemical transformation and estrogenic activity of parabens in water, which is unrelated to the pharmacokinetics of Saccharomyces boulardii. |
| PD | Niu_2025 | not_relevant | 0 | 0 | The paper investigates the photochemical transformation and estrogenic activity of parabens, not the pharmacodynamics of Saccharomyces boulardii. |
| popPK | Noor_2026 | irrelevant | 0 | 0 | The paper describes a general method for characterizing cellular dynamics in yeast and does not involve the drug Saccharomyces boulardii or its pharmacokinetics. |
| PD | Noor_2026 | not_relevant | 0 | 0 | The paper focuses on metabolic dynamics and compartmental modeling in yeast cells, not on the pharmacodynamics or exposure-response relationships of the drug Saccharomyces boulardii. |
| PGx | Normington_1989 | not_relevant | 0 | 0 | The paper discusses S. cerevisiae and mammalian BiP/KAR2 gene function in protein folding, unrelated to the pharmacogenomics of Saccharomyces boulardii. |
| PGx | Nüske_2020 | not_relevant | 0 | 0 | The paper investigates eIF2B filament formation in yeast during starvation, not the pharmacogenomics of saccharomyces_boulardii or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | OWENS_1965 | irrelevant | 0 | 0 | The paper describes a colorimetric method for determining glutathione and does not study saccharomyces_boulardii pharmacokinetics. |
| PD | OWENS_1965 | not_relevant | 0 | 0 | The paper describes a colorimetric micro-method for determining glutathione and does not mention Saccharomyces boulardii or report any pharmacodynamic or exposure-response data. |
| PGx | Pascual-Ortiz_2021 | not_relevant | 0 | 0 | The paper analyzes inorganic polyphosphate metabolism in fission yeast and does not report pharmacogenomic effects on the PK/PD of saccharomyces_boulardii. |
| popPK | Paulon_2026 | irrelevant | 0 | 0 | The study investigates phenotypic variability in Saccharomyces cerevisiae for industrial bioethanol production, which is a microbiology study not related to the pharmacokinetics of the drug Saccharomyces boulardii. |
| PD | Paulon_2026 | not_relevant | 0 | 0 | The paper studies Saccharomyces cerevisiae (industrial yeast) stress tolerance, not the probiotic Saccharomyces boulardii, and does not report pharmacodynamic parameters for a drug. |
| PD | Pei_2005 | not_relevant | 0 | 0 | The paper describes a biosensor study for lectin-carbohydrate interactions (Con A and yeast mannan) and does not involve the drug Saccharomyces boulardii or any pharmacodynamic modeling of a drug. |
| popPK | Pekar_2021 | irrelevant | 0 | 0 | The paper focuses on cattle-derived antibodies targeting EGFR and their cytotoxicity, with no mention of saccharomyces_boulardii pharmacokinetics. |
| PD | Pekar_2021 | not_relevant | 0 | 0 | The paper describes the generation and characterization of cattle-derived antibodies targeting EGFR, not Saccharomyces boulardii, and does not report pharmacodynamic exposure-response relationships for the queried drug. |
| popPK | Peng_2025 | irrelevant | 0 | 0 | The study investigates the in-vitro cytotoxicity and transporter interactions of puberulic acid (a contaminant in red yeast rice) and does not involve Saccharomyces boulardii or its pharmacokinetics. |
| popPK | Peter_2004 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | Peter_2004 | not_relevant | 0 | 0 | The paper focuses on indigoids and aryl hydrocarbon receptor response, not Saccharomyces boulardii. |
| PD | Piraino_2014 | not_relevant | 0 | 0 | The paper studies the antiviral protein RC28 from a mushroom, not Saccharomyces boulardii, and reports no PD parameters for the target drug. |
| PGx | Powell_2024 | not_relevant | 0 | 0 | The paper focuses on G6PD variants and hemolytic anemia risk, not the pharmacokinetics or pharmacodynamics of Saccharomyces boulardii. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The study focuses on glycine and hepatocyte metabolism in vitro and does not mention or measure saccharomyces_boulardii pharmacokinetics. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of glycine on hepatocyte maturation and does not mention Saccharomyces boulardii or report any pharmacodynamic parameters for it. |
| popPK | Pumiglia_1995 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Pumiglia_1995 | not_relevant | 0 | 0 | The paper discusses molecular interactions between G-protein subunits and Raf-1 kinase, which is unrelated to the pharmacodynamics of Saccharomyces boulardii. |
| popPK | Qiu_2023 | irrelevant | 0 | 0 | The study focuses on the immunological mechanism of an antibody targeting Candida albicans and contains no pharmacokinetic data for Saccharomyces boulardii. |
| PD | Qiu_2023 | not_relevant | 0 | 0 | The paper studies a monoclonal antibody against Candida albicans, not Saccharomyces boulardii, and does not report pharmacodynamic exposure-response relationships for the target drug. |
| PGx | Raguzzini_2021 | not_relevant | 0 | 0 | The study investigates statins and red yeast rice (monacolin K), not Saccharomyces boulardii, and focuses on dietary habits and musculoskeletal pain rather than pharmacogenomics. |
| popPK | Ram_1983 | irrelevant | 0 | 0 | The study investigates enzyme kinetics in Candida albicans, not pharmacokinetic parameters for Saccharomyces boulardii. |
| PD | Ram_1983 | not_relevant | 0 | 0 | The paper describes in situ enzyme assays for Candida albicans and does not mention Saccharomyces boulardii or report any drug pharmacodynamic or exposure-response relationships. |
| popPK | Ramalingam_2024 | irrelevant | 0 | 0 | The paper investigates the antimicrobial and cytotoxic effects of a plant extract on yeast, rather than pharmacokinetic parameters of Saccharomyces boulardii. |
| PD | Ramalingam_2024 | not_relevant | 0 | 0 | The paper investigates the antimicrobial and cytotoxic activity of Caralluma indica seed extract, not Saccharomyces boulardii, and does not report any pharmacodynamic or exposure-response relationships for the target drug. |
| PD | Ramírez-Cota_2021 | not_relevant | 0 | 0 | The paper models microbial growth kinetics and ethanol tolerance (survival/growth limits) for food production, not pharmacodynamic drug effects (e.g., therapeutic response vs. concentration/dose) in a biological system. |
| PGx | Rani_2023 | not_relevant | 0 | 0 | The paper studies proteolytic activity in barley genotypes for brewing purposes and does not mention Saccharomyces boulardii or any pharmacokinetic/pharmacodynamic parameters of this organism. |
| PGx | Razzaq_2021 | not_relevant | 0 | 0 | The paper studies Candida albicans and Saccharomyces cerevisiae, not Saccharomyces boulardii, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Rebeck_2025 | irrelevant | 0 | 0 | The paper describes the efficacy of an engineered probiotic yeast for cancer treatment in mice and does not report pharmacokinetic parameters (CL, V, etc.) for the organism itself. |
| PD | Rebeck_2025 | not_relevant | 0 | 0 | The text describes a proof-of-concept study on an engineered probiotic delivering immune checkpoint inhibitors, reporting qualitative tumor burden and immune profile changes, but contains no pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| PD | Rezhdo_2023 | not_relevant | 0 | 0 | The paper focuses on yeast display strategies for discovering MMP-9 inhibitors and does not involve Saccharomyces boulardii or pharmacodynamic modeling of a drug. |
| PGx | Ribeiro_2022 | not_relevant | 0 | 0 | The paper discusses the TKFC gene variant and fructose metabolism in mice and yeast, but contains no information regarding the pharmacokinetic or pharmacodynamic parameters of Saccharomyces boulardii. |
| popPK | Rjoob_2026 | irrelevant | 0 | 0 | The paper describes a knowledge graph for cardiovascular disease and does not report pharmacokinetic parameters for Saccharomyces boulardii. |
| PD | Rjoob_2026 | not_relevant | 0 | 0 | The paper describes a knowledge graph for gene-disease association prediction and drug repurposing in cardiovascular disease; it does not report any pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| PGx | Rose_1995 | not_relevant | 0 | 0 | The paper studies yeast phospholipase D signaling and meiosis, not the pharmacokinetics or pharmacodynamics of *Saccharomyces boulardii* treatment. |
| PGx | Rowland_1994 | not_relevant | 0 | 0 | The paper investigates the effect of propranolol on CYP2D6 activity, not pharmacogenomic effects on saccharomyces_boulardii. |
| PD | Ryerson_2014 | not_relevant | 0 | 0 | The paper discusses theoretical multisite modification systems and bacterial chemotaxis models, containing no data or analysis regarding Saccharomyces boulardii or any drug pharmacodynamics. |
| PGx | Santos_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of doxorubicin in Saccharomyces cerevisiae, not Saccharomyces boulardii. |
| popPK | Santos_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amphotericin B, not saccharomyces_boulardii. |
| PD | Santos_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and tissue penetration of Amphotericin B, not Saccharomyces boulardii, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Santos_2026 | irrelevant | 0 | 0 | The paper studies clomiphene citrate's antileishmanial and antifungal activities, not the pharmacokinetics of Saccharomyces boulardii. |
| PD | Santos_2026 | not_relevant | 0 | 0 | The paper investigates clomiphene citrate, not Saccharomyces boulardii, and does not report any pharmacodynamic or exposure-response relationships for the target drug. |
| popPK | Sappington_2026 | irrelevant | 0 | 0 | The paper describes protein binder design using RFdiffusion and contains no pharmacokinetic data or information regarding Saccharomyces boulardii. |
| PD | Sappington_2026 | not_relevant | 0 | 0 | The paper describes computational protein binder design and reports binding affinities (Kd) for protein-protein interactions, but contains no pharmacokinetic data, exposure-response analysis, or PD parameters for Saccharomyces boulardii. |
| PGx | Sardi_2018 | not_relevant | 0 | 0 | The paper studies the transcriptomic response of Saccharomyces cerevisiae to alcohols and does not involve Saccharomyces boulardii or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Schupp_2017 | irrelevant | 0 | 0 | The paper is a review of the ecotoxicological properties of methylenedianiline (MDA) and contains no information regarding the pharmacokinetics of Saccharomyces boulardii. |
| PD | Schupp_2017 | not_relevant | 0 | 0 | The paper reviews the ecotoxicology of methylenedianiline (MDA) and does not mention Saccharomyces boulardii or report any pharmacodynamic parameters for it. |
| PD | Schweizer_1995 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship of X-ray irradiation on mitotic recombination in Drosophila, not the pharmacodynamics of Saccharomyces boulardii. |
| PD | Schwimmer_2004 | not_relevant | 0 | 0 | The paper discusses protein engineering of retinoid X receptor (RXR) and reports EC50 values for small molecule ligands (9cRA, LG335), but it does not involve the drug Saccharomyces boulardii. |
| PGx | Seo_2019 | not_relevant | 0 | 0 | The paper discusses GALE mutations and thrombocytopenia, which is unrelated to the pharmacokinetics or pharmacodynamics of Saccharomyces boulardii. |
| popPK | Sewunet_2026 | irrelevant | 0 | 0 | The study focuses on the effect of glasmacinal on gut microbiota and contains no pharmacokinetic data for saccharomyces boulardii. |
| PD | Sewunet_2026 | not_relevant | 0 | 0 | The paper investigates the impact of glasmacinal on the gut microbiome, not Saccharomyces boulardii, and reports ecological diversity metrics rather than pharmacodynamic exposure-response parameters. |
| PGx | Shahroor_2022 | not_relevant | 0 | 0 | The paper concerns a genetic variant in SLC25A36 associated with hyperinsulinism/hyperammonemia syndrome, not pharmacogenomics of Saccharomyces boulardii. |
| PD | Shao_2014 | not_relevant | 0 | 0 | The paper studies the antifungal effects of matrine on Candida albicans, not the pharmacodynamics of Saccharomyces boulardii. |
| popPK | Sheikhi_2025 | irrelevant | 0 | 0 | The study investigates cytotoxicity in Saccharomyces cerevisiae (a different organism) to assess water toxicity, not the pharmacokinetics of Saccharomyces boulardii. |
| PD | Sheikhi_2025 | not_relevant | 0 | 0 | The paper investigates Saccharomyces cerevisiae (not S. boulardii) as a bioassay organism for water toxicity, not as a therapeutic drug. |
| popPK | Shinzawa_2025 | irrelevant | 0 | 0 | The paper is a clinical nephrology study investigating kidney dysfunction associated with red yeast rice (Beni-koji) tablets, not a pharmacokinetic study of Saccharomyces boulardii. |
| popPK | Shuryak_2016 | irrelevant | 0 | 0 | The paper studies microbial population dynamics and radiation resistance, not the pharmacokinetics of Saccharomyces boulardii (or Saccharomyces cerevisiae). |
| PGx | Sienski_2021 | not_relevant | 0 | 0 | The paper focuses on APOE4-mediated lipid homeostasis in glia and yeast, with no mention of saccharomyces_boulardii or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Silva-Mendonça_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of SARS-CoV-2 3CL&lt;sup&gt;pro&lt;/sup&gt; inhibitors and does not study saccharomyces_boulardii or its pharmacokinetics. |
| PD | Silva-Mendonça_2026 | not_relevant | 0 | 0 | The paper focuses on the discovery of SARS-CoV-2 3CLpro inhibitors using computational methods and reports in vitro IC50/Ki values, but contains no data, analysis, or mention of Saccharomyces boulardii or any pharmacodynamic/exposure-response modeling. |
| popPK | Singh_2020 | irrelevant | 0 | 0 | The paper describes a database of heat shock protein modulators and contains no pharmacokinetic data for saccharomyces_boulardii. |
| PD | Singh_2020 | not_relevant | 0 | 0 | The paper describes a database of heat shock protein modulators and does not contain any pharmacodynamic or exposure-response analysis for Saccharomyces boulardii. |
| PGx | Srdič_2022 | not_relevant | 0 | 0 | The paper describes the synthesis of polycyclic aromatic hydrocarbon metabolites using recombinant yeast and human CYP3A4 in a bioreactor, and does not involve Saccharomyces boulardii or human pharmacogenomics. |
| PGx | Stepien_1992 | not_relevant | 0 | 0 | The paper is about yeast genetics (suv3 gene) and has no relation to pharmacogenomics or the drug Saccharomyces boulardii. |
| PGx | Sullivan-Klose_1996 | not_relevant | 0 | 0 | The paper studies CYP2C9 variants and their effect on tolbutamide metabolism, not saccharomyces_boulardii. |
| popPK | Suzuki_2026 | irrelevant | 0 | 0 | The study investigates the effects of perinatal antibiotic exposure on gut microbiome and vaccine response in neonates, containing no pharmacokinetic data for Saccharomyces boulardii. |
| PD | Suzuki_2026 | not_relevant | 0 | 0 | The paper investigates the effects of perinatal antibiotic exposure (ampicillin/amoxicillin-clavulanate) on the gut microbiome and vaccine response, and does not contain any pharmacodynamic or exposure-response analysis for Saccharomyces boulardii. |
| popPK | Swat_2011 | irrelevant | 0 | 0 | The paper is a theoretical review on systems biology and PK-PD platforms, focusing on yeast glycolysis and general modeling concepts, with no specific pharmacokinetic data for saccharomyces boulardii. |
| PGx | Szenfeld_2026 | not_relevant | 0 | 0 | The paper focuses on rapamycin and Saccharomyces cerevisiae (yeast), not Saccharomyces boulardii. |
| PD | Tabibzadeh_2022 | not_relevant | 0 | 0 | The paper studies exopolysaccharides from Hericium coralloides, not Saccharomyces boulardii, and reports no pharmacodynamic or exposure-response relationship for the target drug. |
| PGx | Tai_1993 | not_relevant | 0 | 0 | The paper investigates the metabolism of the toxin 2,3,7,8-tetrachlorodibenzofuran (TCDF) by CYP1A1, not the drug Saccharomyces boulardii. |
| PGx | Takanashi_2000 | not_relevant | 0 | 0 | The paper studies CYP2C9 enzyme kinetics and does not involve saccharomyces_boulardii. |
| PD | Tarhan_2012 | not_relevant | 0 | 0 | The paper studies copper stress in fission yeast (Schizosaccharomyces pombe), not the drug Saccharomyces boulardii. |
| PD | Tchoukouegno_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of Erythrina excelsa, not Saccharomyces boulardii. |
| PD | Thor_2008 | not_relevant | 0 | 0 | The paper discusses M3 muscarinic receptor mutations and atropine pharmacology, not Saccharomyces boulardii. |
| PGx | Tindall_2018 | not_relevant | 0 | 0 | The paper studies a drug transporter from the malaria parasite (Plasmodium falciparum) and its effect on antimalarial drugs in yeast, not the probiotic *Saccharomyces boulardii*. |
| PGx | Tisi_2014 | not_relevant | 0 | 0 | The paper is a general overview of using yeast as a model for studying Ras signaling and does not report on the pharmacokinetics or pharmacodynamics of Saccharomyces boulardii. |
| PGx | Tremblay-Laganière_2024 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the PK of bleomycin, not Saccharomyces boulardii. |
| popPK | Turon_2025 | irrelevant | 0 | 0 | The paper discusses pharmacometrics for malaria and tuberculosis drugs in Africa and does not involve Saccharomyces boulardii. |
| PD | Turon_2025 | not_relevant | 0 | 0 | The paper focuses on pharmacogenomics and PK modeling for malaria and tuberculosis drugs (e.g., artemether, rifampicin) and does not mention or analyze Saccharomyces boulardii. |
| popPK | Uddin_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacological and in-silico properties of Clerodendrum infortunatum extracts and is unrelated to saccharomyces_boulardii pharmacokinetics. |
| PD | Uddin_2026 | not_relevant | 0 | 0 | The paper investigates Clerodendrum infortunatum extracts, not Saccharomyces boulardii, and does not report any pharmacodynamic parameters for the target drug. |
| PGx | Ulery_1991 | not_relevant | 0 | 0 | The paper concerns the genetics of galactose metabolism in yeast, not the pharmacogenomics of Saccharomyces boulardii. |
| popPK | Ullah_2026 | irrelevant | 0 | 0 | The study investigates the cognitive efficacy of yeast extracts in humans and contains no pharmacokinetic data or disposition parameters for Saccharomyces boulardii. |
| PD | Vinggaard_1999 | not_relevant | 0 | 0 | The paper studies pesticides (fenarimol, etc.) and does not mention saccharomyces boulardii. |
| PGx | Visinoni_2024 | not_relevant | 0 | 0 | The study focuses on Saccharomyces cerevisiae and S. kudriavzevii hybrids, not Saccharomyces boulardii, and examines antifungal susceptibility rather than PK/PD parameters of a drug administered to an organism. |
| popPK | Votyakova_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of calcium transport in yeast mitochondria, not a pharmacokinetic study of Saccharomyces boulardii. |
| PD | Votyakova_1993 | not_relevant | 0 | 0 | The paper studies yeast mitochondrial calcium transport regulation by polyamines and magnesium, not the pharmacodynamics of Saccharomyces boulardii. |
| popPK | Wan_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Mahuang Decoction components (e.g., ephedrine) in rats, not Saccharomyces boulardii. |
| PGx | Wang_2008 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenomics and does not discuss Saccharomyces boulardii or specific gene effects on its pharmacokinetics/pharmacodynamics. |
| popPK | Wang_2010 | irrelevant | 0 | 0 | The paper is a review on VHS domain proteins and membrane trafficking, with no data or discussion regarding saccharomyces_boulardii pharmacokinetics. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of SIRT1 on hyperuricemia and does not report pharmacogenomic effects on the PK/PD of Saccharomyces boulardii. |
| PGx | Webb_2018 | not_relevant | 0 | 0 | The paper discusses bio-production of citramalate using engineered E. coli, not pharmacogenomics of Saccharomyces boulardii. |
| popPK | Weidman_1995 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology review regarding Golgi complex transport in yeast, containing no pharmacokinetic data for Saccharomyces boulardii. |
| PD | Weitz_2002 | not_relevant | 0 | 0 | The paper describes a fungal bioassay for environmental toxicity testing of pollutants (3,5-DCP, PCP, Cu, Zn) and does not involve the drug Saccharomyces boulardii or any pharmacodynamic modeling. |
| PD | Weitzel_1985 | not_relevant | 0 | 0 | The paper studies Saccharomyces cerevisiae (baker's yeast) and its response to heat and DNP, not the probiotic Saccharomyces boulardii, and does not report drug PD parameters. |
| popPK | Wen_2026 | irrelevant | 0 | 0 | The paper describes yeast surface display screening of nanobodies for bladder cancer and does not involve the pharmacokinetics of *Saccharomyces boulardii*. |
| PD | Wen_2026 | not_relevant | 0 | 0 | The paper reports an EC50 for a nanobody (Nb-80) binding to Nectin-4, not for Saccharomyces boulardii, and does not describe a pharmacodynamic exposure-response relationship for the specified drug. |
| PGx | Weydemann_1995 | not_relevant | 0 | 0 | The paper reports protein expression in Hansenula polymorpha and does not involve Saccharomyces boulardii or pharmacogenomic effects on PK/PD. |
| PGx | Wildenhain_2015 | not_relevant | 0 | 0 | The paper studies chemical-genetic interactions in yeast deletion strains and does not report pharmacogenomic effects on the PK/PD of *Saccharomyces boulardii*. |
| PGx | Wilson_1995 | not_relevant | 0 | 0 | The paper discusses the structure and function of the Agouti Signaling Protein (ASP) gene and has no relation to saccharomyces_boulardii or its pharmacokinetics/pharmacodynamics. |
| PGx | Wongkittichote_2025 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects on a PK/PD parameter of Saccharomyces boulardii. |
| popPK | Wu_2002 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | Wu_2002 | not_relevant | 0 | 0 | The paper discusses estrogenic effects from household stoves and does not mention Saccharomyces boulardii or report any pharmacodynamic parameters. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The paper investigates a fungal pathogen (Phaeosphaeriopsis obtusispora) and its fungicide sensitivity, which is unrelated to the pharmacokinetics of Saccharomyces boulardii. |
| PD | Wu_2024 | not_relevant | 0 | 0 | The paper characterizes a fungal pathogen (Phaeosphaeriopsis obtusispora) and tests fungicide sensitivity; it does not report pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper focuses on a nanobody for hepatocellular carcinoma and contains no pharmacokinetic data for Saccharomyces boulardii. |
| PD | Wu_2026 | not_relevant | 0 | 0 | The paper focuses on a nanobody for hepatocellular carcinoma and does not mention saccharomyces boulardii or report any pharmacodynamic parameters. |
| popPK | Wutzke_1983 | irrelevant | 0 | 0 | The study uses yeast protein (Saccharomyces cerevisiae) as a stable isotope tracer for nitrogen metabolism, not Saccharomyces boulardii as a drug subject for PK parameter estimation. |
| popPK | Wutzke_1992 | irrelevant | 0 | 0 | The study investigates protein turnover rates in preterm infants using nitrogen tracers, not the pharmacokinetics of saccharomyces boulardii. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The paper describes a diet-induced quail model for uric acid disorders and does not mention Saccharomyces boulardii or pharmacogenomic effects on its PK/PD parameters. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper discusses the biosynthesis of cardenolides in plants and is unrelated to the pharmacokinetics of saccharomyces boulardii. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on the biosynthesis of cardenolides in plants and does not contain any pharmacodynamic or exposure-response data for Saccharomyces boulardii. |
| PGx | Xue_2025 | not_relevant | 0 | 0 | The paper investigates Monascus yellow pigments, not Saccharomyces boulardii, and contains no pharmacogenomic analysis. |
| PGx | Yan_2017 | not_relevant | 0 | 0 | The paper describes enzyme kinetics and screening in recombinant yeast, not pharmacogenomic effects on Saccharomyces boulardii PK/PD parameters. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper reports in vitro binding affinities (Kd) and inhibition constants (IC50) for small molecule probes targeting yeast RNA, which are biophysical parameters, not pharmacodynamic (exposure-response) relationships for a drug in a biological system. |
| popPK | Yee_2024 | irrelevant | 0 | 0 | The paper investigates cryptochrome signaling in songbirds and is unrelated to the pharmacokinetics of saccharomyces_boulardii. |
| PD | Yee_2024 | not_relevant | 0 | 0 | The paper investigates protein-protein interactions (retinol binding protein and cryptochrome) in a biological context and does not involve the drug Saccharomyces boulardii or any pharmacodynamic exposure-response analysis. |
| popPK | Yoshino_1979 | irrelevant | 0 | 0 | The paper describes the purification and in vitro regulatory properties of AMP deaminase from baker's yeast (Saccharomyces cerevisiae) and contains no pharmacokinetic data for Saccharomyces boulardii. |
| PD | Yoshino_1979 | not_relevant | 0 | 0 | The paper describes the purification and enzymatic kinetics of AMP deaminase from baker's yeast (Saccharomyces cerevisiae), not the pharmacodynamics of the probiotic Saccharomyces boulardii. |
| popPK | Yoshino_1980 | irrelevant | 0 | 0 | The study investigates the enzymology of baker's yeast AMP deaminase and contains no pharmacokinetic data for Saccharomyces boulardii. |
| PD | Yoshino_1980 | not_relevant | 0 | 0 | The paper investigates the enzymatic kinetics of baker's yeast AMP deaminase in response to cations, not the pharmacodynamics of the probiotic *Saccharomyces boulardii* in a biological system. |
| PD | Zaghloul_2024 | not_relevant | 0 | 0 | The paper studies an exopolysaccharide from Hortaea werneckii, not Saccharomyces boulardii, and reports in vitro IC50 values rather than a pharmacokinetic/pharmacodynamic model for the specified drug. |
| PGx | Zaret_1990 | not_relevant | 0 | 0 | The paper studies galactose metabolism variants in mouse liver cell lines and has no relation to Saccharomyces boulardii or its pharmacokinetics/pharmacodynamics. |
| PGx | Zhai_2021 | not_relevant | 0 | 0 | The paper focuses on metabolic engineering of the yeast Ogataea polymorpha and promoter characterization, not the pharmacogenomics of Saccharomyces boulardii or its PK/PD parameters. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The paper describes the molecular biology of a mitochondrial enzyme (MNADK) and is unrelated to the pharmacokinetics of the probiotic Saccharomyces boulardii. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | The paper describes a statistical method for gene regulatory networks using yeast data and does not study the pharmacokinetics of saccharomyces_boulardii. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The paper studies HIV protease inhibitors in fission yeast, not the pharmacokinetics of Saccharomyces boulardii. |
| PD | Zhang_2021 | not_relevant | 0 | 0 | The paper studies HIV-1 protease inhibitors in fission yeast and does not mention or test Saccharomyces boulardii. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chromium-enriched yeast (Cr), not the microorganism Saccharomyces boulardii. |
| popPK | Zhang_2023_2 | irrelevant | 0 | 0 | The paper describes a diphtheria toxin-derived immunotoxin targeting PD-1 in mice and is unrelated to the drug Saccharomyces boulardii. |
| PD | Zhang_2023_2 | not_relevant | 0 | 0 | The paper describes a diphtheria toxin-derived immunotoxin targeting PD-1, not Saccharomyces boulardii. |
| PD | Zhang_2023_3 | not_relevant | 0 | 0 | The paper discusses umami peptides from yeast extract, not Saccharomyces boulardii, and does not report any pharmacodynamic or exposure-response relationships for the specified drug. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of coumarin derivatives, not the pharmacokinetics of saccharomyces_boulardii. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper studies coumarin derivatives for antifungal activity, not saccharomyces boulardii. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper studies fluoride transport and dental fluorosis, which is an environmental toxicity response and not the pharmacokinetic or pharmacodynamic effect of the drug Saccharomyces boulardii. |
| popPK | Zhang_2026_2 | irrelevant | 0 | 0 | The paper focuses on protein engineering of glycosyltransferases in E. coli, not pharmacokinetics of Saccharomyces boulardii. |
| PD | Zhang_2026_2 | not_relevant | 0 | 0 | The paper focuses on protein engineering and enzyme kinetics (Michaelis-Menten) for glycosyltransferases, not pharmacodynamics or exposure-response relationships for Saccharomyces boulardii. |
| PD | Zhao_2008 | not_relevant | 0 | 0 | The paper investigates the pharmacological activity of constituents from Turnera diffusa, not Saccharomyces boulardii. |
| PGx | Zhao_2022 | not_relevant | 0 | 0 | The paper investigates the metabolism of alprazolam by CYP3A43 and does not involve saccharomyces_boulardii. |
| popPK | Zomorrodi_2010 | irrelevant | 0 | 0 | The paper discusses a genome-scale metabolic model of S. cerevisiae for gene essentiality predictions, not the pharmacokinetics of the drug S. boulardii. |
| PD | Zydowsky_1992 | not_relevant | 0 | 0 | The paper characterizes yeast cyclophilins and their inhibition by Cyclosporin A, not Saccharomyces boulardii, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| PD | Zysk_1995 | not_relevant | 0 | 0 | The paper studies Saccharomyces cerevisiae (yeast) and estrogen pharmacology, not the probiotic Saccharomyces boulardii, and does not report PD parameters for the target drug. |
| popPK | Šilinskas_2026 | irrelevant | 0 | 0 | The study investigates rumen microbiota and fermentation in dairy cows, using Saccharomyces cerevisiae as a feed additive, but does not measure pharmacokinetic parameters for Saccharomyces boulardii. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
