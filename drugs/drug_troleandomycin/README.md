<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;troleandomycin&quot;}]"></div>

# troleandomycin

- **generic name:** troleandomycin
- **ATC codes:** `J01FA08`
- **DrugBank:** [DB13179](https://go.drugbank.com/drugs/DB13179) · **PubChem:** [CID 202225](https://pubchem.ncbi.nlm.nih.gov/compound/202225)
- **molar mass:** 813.9684 g/mol (C41H67NO15) — DrugBank
- **groups:** approved

## About

Troleandomycin is a macrolide antibiotic used against bacterial infections such as staphylococcal infections, gonorrhea, chlamydia, Legionnaires' disease, and campylobacteriosis. It is an approved drug, but it is not authorised in the European Union and appears to be little used today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1087499](https://www.wikidata.org/wiki/Q1087499) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:43 | 8:15 | 0/0/0 | 0/1/0 | 0/0/0 | 164,636/5,795 | einfracz / qwen3.8-27b | 4 | 1/2 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Jurima-Romet_1994_terfenadine_metabolism](drugs/drug_troleandomycin/pd_Jurima_Romet_1994_terfenadine_metabolism.md) | terfenadine metabolism ← troleandomycin · inhibition effect | — | Jurima-Romet M et al., Terfenadine metabolism in human liver.…, Drug metabolism and disposi… (1994) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=troleandomycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP3A43 (inducer), NR1I2 (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 477 matched, 112 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_28 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kharasch_2005.pdf` | Kharasch ED et al., Paradoxical role of cytochrome P450 3A…, Clinical pharmacokinetics (2005) | pd | 5 | [10.2165/00003088-200544070-00005](https://doi.org/10.2165/00003088-200544070-00005) | [15966756](https://www.ncbi.nlm.nih.gov/pubmed/15966756) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Echizen_2000.pdf` | Echizen H et al., Identification of CYP3A4 as the enzyme…, Drug metabolism and disposi… (2000) | pd | 4 | not captured | [10901704](https://www.ncbi.nlm.nih.gov/pubmed/10901704) | metadata signals extractable PD data (IC50) |
| `Faucette_2004.pdf` | Faucette SR et al., Regulation of CYP2B6 in primary human h…, Drug metabolism and disposi… (2004) | pd | 4 | [10.1124/dmd.32.3.348](https://doi.org/10.1124/dmd.32.3.348) | [14977870](https://www.ncbi.nlm.nih.gov/pubmed/14977870) | metadata signals extractable PD data (EC50) |
| `Fowler_2002.pdf` | Fowler SM et al., CYP3A4 active site volume modification…, Drug metabolism and disposi… (2002) | pd | 4 | [10.1124/dmd.30.4.452](https://doi.org/10.1124/dmd.30.4.452) | [11901100](https://www.ncbi.nlm.nih.gov/pubmed/11901100) | metadata signals extractable PD data (IC50) |
| `Fujimaki_2001.pdf` | Fujimaki Y et al., Nefiracetam metabolism by human liver m…, The Journal of pharmacy and… (2001) | pd | 4 | [10.1211/0022357011776144](https://doi.org/10.1211/0022357011776144) | [11428655](https://www.ncbi.nlm.nih.gov/pubmed/11428655) | metadata signals extractable PD data (sigmoid) |
| `Greenblatt_2011.pdf` | Greenblatt DJ et al., Mechanism of cytochrome P450-3A inhibit…, The Journal of pharmacy and… (2011) | pd | 4 | [10.1111/j.2042-7158.2010.01202.x](https://doi.org/10.1111/j.2042-7158.2010.01202.x) | [21235585](https://www.ncbi.nlm.nih.gov/pubmed/21235585) | metadata signals extractable PD data (IC50) |
| `Grogan_1990.pdf` | Grogan WM et al., Corticosterone 6 beta-hydroxylase in A6…, The American journal of phy… (1990) | pd | 4 | [10.1152/ajpcell.1990.258.3.C480](https://doi.org/10.1152/ajpcell.1990.258.3.C480) | [2316635](https://www.ncbi.nlm.nih.gov/pubmed/2316635) | metadata signals extractable PD data (EC50) |
| `Jurima-Romet_1994.pdf` | Jurima-Romet M et al., Terfenadine metabolism in human liver.…, Drug metabolism and disposi… (1994) | pd | 4 | not captured | [7895601](https://www.ncbi.nlm.nih.gov/pubmed/7895601) | metadata signals extractable PD data (IC50) |
| `Jönsson_1995.pdf` | Jönsson G et al., Budesonide is metabolized by cytochrome…, Drug metabolism and disposi… (1995) | pd | 4 | not captured | [7720517](https://www.ncbi.nlm.nih.gov/pubmed/7720517) | metadata signals extractable PD data (IC50) |
| `Pan_1998.pdf` | Pan LP et al., In-vitro characterization of the cytoch…, Pharmacogenetics (1998) | pd | 4 | [10.1097/00008571-199810000-00003](https://doi.org/10.1097/00008571-199810000-00003) | [9825830](https://www.ncbi.nlm.nih.gov/pubmed/9825830) | metadata signals extractable PD data (IC50) |
| `Sanchez_2004.pdf` | Sanchez RI et al., Cytochrome P450 3A4 is the major enzyme…, Drug metabolism and disposi… (2004) | pd | 4 | [10.1124/dmd.104.000216](https://doi.org/10.1124/dmd.104.000216) | [15304427](https://www.ncbi.nlm.nih.gov/pubmed/15304427) | metadata signals extractable PD data (IC50) |
| `Schmider_1997.pdf` | Schmider J et al., Biotransformation of mestranol to ethin…, Journal of clinical pharmac… (1997) | pd | 4 | [10.1002/j.1552-4604.1997.tb04781.x](https://doi.org/10.1002/j.1552-4604.1997.tb04781.x) | [9089421](https://www.ncbi.nlm.nih.gov/pubmed/9089421) | metadata signals extractable PD data (Emax) |
| `Sutton_1997.pdf` | Sutton D et al., Role of CYP3A4 in human hepatic diltiaz…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9223567](https://www.ncbi.nlm.nih.gov/pubmed/9223567) | metadata signals extractable PD data (IC50) |
| `Tassaneeyakul_1994.pdf` | Tassaneeyakul W et al., Caffeine metabolism by human hepatic cy…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90304-2](https://doi.org/10.1016/0006-2952(94)90304-2) | [8204093](https://www.ncbi.nlm.nih.gov/pubmed/8204093) | metadata signals extractable PD data (IC50) |
| `Venkatakrishnan_1998.pdf` | Venkatakrishnan K et al., Kinetic characterization and identifica…, The Journal of pharmacy and… (1998) | pd | 4 | [10.1111/j.2042-7158.1998.tb06859.x](https://doi.org/10.1111/j.2042-7158.1998.tb06859.x) | [9600717](https://www.ncbi.nlm.nih.gov/pubmed/9600717) | metadata signals extractable PD data (IC50) |
| `Wright_1994.pdf` | Wright MC et al., Induction of the cytochrome P450 3A sub…, Biochemical and biophysical… (1994) | pd | 4 | [10.1006/bbrc.1994.1797](https://doi.org/10.1006/bbrc.1994.1797) | [8003039](https://www.ncbi.nlm.nih.gov/pubmed/8003039) | metadata signals extractable PD data (emax) |
| `Wu_1998.pdf` | Wu ZL et al., Clomipramine N-demethylation metabolism…, Zhongguo yao li xue bao = A… (1998) | pd | 4 | not captured | [10375803](https://www.ncbi.nlm.nih.gov/pubmed/10375803) | metadata signals extractable PD data (IC50) |
| `Xia_2002.pdf` | Xia XY et al., In vitro metabolic characteristics of c…, Acta pharmacologica Sinica (2002) | pd | 4 | not captured | [11978200](https://www.ncbi.nlm.nih.gov/pubmed/11978200) | metadata signals extractable PD data (IC50) |
| `Zhao_1997.pdf` | Zhao XJ et al., Metabolic interactions of selected anti…, British journal of clinical… (1997) | pd | 4 | [10.1046/j.1365-2125.1997.t01-1-00619.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00619.x) | [9384469](https://www.ncbi.nlm.nih.gov/pubmed/9384469) | metadata signals extractable PD data (IC50) |
| `Ledirac_2000.pdf` | Ledirac N et al., Effects of macrolide antibiotics on CYP…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [11095572](https://www.ncbi.nlm.nih.gov/pubmed/11095572) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mitra_1995.pdf` | Mitra AK et al., Metabolism of dapsone to its hydroxylam…, Clinical pharmacology and t… (1995) | pgx | 7 | [10.1016/0009-9236(95)90176-0](https://doi.org/10.1016/0009-9236(95)90176-0) | [7586950](https://www.ncbi.nlm.nih.gov/pubmed/7586950) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Projean_2003.pdf` | Projean D et al., Identification of CYP3A4 and CYP2C8 as…, Xenobiotica; the fate of fo… (2003) | pgx | 7 | [10.1080/0049825031000121608](https://doi.org/10.1080/0049825031000121608) | [12936704](https://www.ncbi.nlm.nih.gov/pubmed/12936704) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Renwick_1998.pdf` | Renwick AB et al., Metabolism of Zaleplon by human hepatic…, Xenobiotica; the fate of fo… (1998) | pgx | 7 | [10.1080/004982598239452](https://doi.org/10.1080/004982598239452) | [9604298](https://www.ncbi.nlm.nih.gov/pubmed/9604298) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Suzuki_2003.pdf` | Suzuki A et al., CYP isoforms involved in the metabolism…, Drug metabolism and pharmac… (2003) | pgx | 7 | [10.2133/dmpk.18.104](https://doi.org/10.2133/dmpk.18.104) | [15618724](https://www.ncbi.nlm.nih.gov/pubmed/15618724) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Wang_1997.pdf` | Wang JS et al., Effect of troleandomycin on the pharmac…, British journal of clinical… (1997) | pgx | 7 | [10.1046/j.1365-2125.1997.00649.x](https://doi.org/10.1046/j.1365-2125.1997.00649.x) | [9278210](https://www.ncbi.nlm.nih.gov/pubmed/9278210) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chasserot-Golaz_1993.pdf` | Chasserot-Golaz S et al., Biotransformation of 17 beta-hydroxy-11…, Biochemical pharmacology (1993) | pgx | 5 | [10.1016/0006-2952(93)90654-f](https://doi.org/10.1016/0006-2952(93)90654-f) | [8267660](https://www.ncbi.nlm.nih.gov/pubmed/8267660) | metadata signals extractable PGX data (CYP3A) |

<sub>queue written 2026-10-07T11:41:12.335843+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Araya_1999 | not_relevant | 0 | 0 | The paper uses troleandomycin as a CYP3A4 inhibitor to study bile acid metabolism, not to assess the pharmacokinetics or pharmacodynamics of troleandomycin itself in relation to genetic variants. |
| PGx | Benet_2004 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction where troleandomycin inhibits CYP3A4, but does not report any genetic variant or genotype affecting troleandomycin's pharmacokinetics. |
| PGx | Beulz-Riché_2005 | not_relevant | 0 | 0 | The paper focuses on the metabolism of vinorelbine by CYP isoenzymes; troleandomycin is only mentioned as a specific inhibitor used to block CYP3A4, not as the study drug. |
| popPK | Biagini_2006 | irrelevant | 0 | 0 | This is an in vitro hepatotoxicity study measuring cytotoxicity (EC50) and not reporting pharmacokinetic disposition parameters for troleandomycin. |
| PGx | Bohets_2000 | not_relevant | 0 | 0 | The paper investigates cisapride metabolism and drug-drug interactions (inhibitors like troleandomycin), but does not report any pharmacogenomic effects (gene variants) on the PK/PD of troleandomycin itself. |
| PGx | Chasserot-Golaz_1993 | not_relevant | 0 | 0 | The paper investigates the metabolism of RU486 using troleandomycin only as a CYP3A inhibitor, not to study the effect of a genetic variant on troleandomycin's PK/PD. |
| PGx | Cheng_2016 | not_relevant | 0 | 0 | The paper uses troleandomycin as a CYP3A4 inhibitor to study vitamin D metabolism and does not report pharmacogenomic effects on troleandomycin's PK or PD. |
| PGx | Cribb_1995 | not_relevant | 0 | 0 | The paper focuses on sulfamethoxazole metabolism and mentions troleandomycin only as an inhibitor of sulfamethoxazole hydroxylamine reduction, not as the drug whose PK/PD is being analyzed for genetic effects. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on antipsychotics and mentions troleandomycin only in a list of CYP3A4 inhibitors, with no PK parameters for troleandomycin. |
| popPK | Faucette_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2B6 induction where troleandomycin serves only as a non-inducer comparator, not as the subject of a pharmacokinetic analysis. |
| popPK | Fujimaki_2001 | irrelevant | 0 | 0 | The study is an in-vitro metabolism investigation of nefiracetam where troleandomycin is used only as an inhibitory probe, and no PK parameters for troleandomycin are reported. |
| PGx | Ganesan_2009 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics/toxicity of primaquine, using troleandomycin only as a CYP3A4 inhibitor, and does not report pharmacogenomic effects on PK/PD parameters of troleandomycin. |
| PGx | Gorski_1999 | not_relevant | 0 | 0 | The study focuses on alprazolam metabolism and uses troleandomycin only as a chemical inhibitor, not as the drug of interest for pharmacogenomics. |
| popPK | Grogan_1990 | irrelevant | 0 | 0 | The study focuses on the induction of a cytochrome P-450 enzyme by troleandomycin in vitro, not on the pharmacokinetic disposition of the drug itself. |
| PGx | Gélisse_2007 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction between clarithromycin and carbamazepine, with no mention of troleandomycin or pharmacogenomic factors. |
| PGx | Hamaoka_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of midazolam by CYP isoforms; troleandomycin is used only as a chemical inhibitor and no pharmacogenomic effect of a gene variant on troleandomycin's PK/PD is reported. |
| PGx | Honda_2011 | not_relevant | 0 | 0 | The paper uses troleandomycin as a tool inhibitor to study CYP3A metabolism of cholesterol, rather than reporting a pharmacogenomic effect on troleandomycin's own PK or PD. |
| PGx | Huang_2000 | not_relevant | 0 | 0 | The paper discusses the role of CYP enzymes in the metabolism of cyclophosphamide and ifosfamide; troleandomycin is only used as an inhibitor to block CYP3A4 activity and is not the subject of a pharmacogenomic study. |
| PGx | Jin_2011 | not_relevant | 0 | 0 | The paper concerns the pharmacogenomics of fingolimod metabolism, not troleandomycin. |
| PGx | Jurima-Romet_1994 | not_relevant | 0 | 10 | The paper reports in vitro CYP3A4 inhibition of terfenadine by troleandomycin, but does not report a pharmacogenomic effect (gene variant changing drug response). |
| popPK | Kerbusch_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ifosfamide, not troleandomycin. |
| PGx | Koyama_2002 | not_relevant | 0 | 0 | The paper investigates the metabolism of rebamipide, not troleandomycin, and does not report pharmacogenomic effects on troleandomycin PK/PD. |
| popPK | Kuip_2017 | irrelevant | 0 | 0 | The paper is a review of fentanyl pharmacokinetics, not a study of troleandomycin. |
| PGx | Ledirac_2000 | not_relevant | 0 | 0 | The paper investigates interspecies differences in drug-induced enzyme induction (PK parameter) but does not examine the influence of human genetic variants or genotypes (pharmacogenomics) on these effects. |
| PGx | Ling_1995 | not_relevant | 0 | 0 | The paper focuses on the metabolism of terfenadine and does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of troleandomycin. |
| PGx | Maier-Salamon_2014 | not_relevant | 0 | 0 | The paper investigates the metabolism of 9-aminocamptothecin and uses troleandomycin solely as a CYP3A4 inhibitor, not as the subject of pharmacogenomic analysis. |
| PGx | Matsunaga_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of cannabinoids (THC metabolites) and the role of CYP3A4, using troleandomycin only as an inhibitor to confirm enzyme identity; it does not report pharmacogenomic effects on the PK/PD of troleandomycin itself. |
| popPK | McGinnity_2009 | irrelevant | 0 | 0 | The study is an in vitro CYP3A4 induction assessment where troleandomycin is used only as a negative control/prototypic compound, not as the subject of a pharmacokinetic study. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with cisapride, not pharmacogenomic effects. |
| PGx | Mitra_1995 | not_relevant | 0 | 0 | The paper investigates dapsone metabolism and identifies troleandomycin only as a mechanism-based inhibitor of dapsone hydroxylation, without reporting any pharmacogenomic effects of troleandomycin itself. |
| PGx | OGallagher_2021 | not_relevant | 0 | 0 | The paper discusses troleandomycin in the introduction to justify the hypothesis about CYP3A4 inhibition but does not study it; the study focuses on grapefruit juice and beetroot juice. |
| PGx | Peng_2003 | not_relevant | 0 | 0 | The paper investigates the metabolism of daidzein, not troleandomycin, and does not report pharmacogenomic effects on troleandomycin's PK or PD. |
| PGx | Projean_2003 | not_relevant | 0 | 0 | The study focuses on the metabolism of morphine, not troleandomycin, which is only used as a tool inhibitor. |
| PGx | Raeissi_1997 | not_relevant | 0 | 0 | The paper investigates the metabolism of terfenadine and the inhibitory effect of troleandomycin, but does not report pharmacogenomic variants affecting troleandomycin's PK/PD. |
| PGx | Renwick_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of zaleplon and mentions troleandomycin only as a mechanism-based inhibitor of CYP3A4, not reporting any pharmacogenomic effects on troleandomycin's PK/PD. |
| PGx | Roy_1995 | not_relevant | 0 | 0 | The paper studies the oxidative metabolism of O6-benzylguanine and only mentions troleandomycin as an enzyme inhibitor, without reporting any pharmacogenomic effects of troleandomycin itself. |
| PGx | Royer_1996 | not_relevant | 0 | 0 | The paper investigates the metabolism of docetaxel and troleandomycin is mentioned only as a CYP3A inhibitor, not as the primary drug for which a pharmacogenomic effect is reported. |
| popPK | Schmider_1997 | irrelevant | 0 | 0 | The study investigates the in vitro biotransformation of mestranol using troleandomycin only as a CYP3A inhibitor, not as the subject drug for PK modeling. |
| PGx | Suzuki_2003 | not_relevant | 0 | 0 | The study focuses on clarithromycin metabolism and mentions troleandomycin only as a CYP3A4 inhibitor, reporting no pharmacogenomic effects on troleandomycin. |
| PGx | Tassaneeyakul_1994 | not_relevant | 0 | 0 | The paper focuses on caffeine metabolism and CYP isoform contributions; troleandomycin is mentioned only as a CYP3A inhibitor for validation, not as the subject of a pharmacogenomic study. |
| PGx | Thummel_1993 | not_relevant | 0 | 0 | The study investigates acetaminophen metabolism and uses troleandomycin merely as a CYP3A4 inhibitor to dissect enzyme contributions; it does not report any pharmacogenomic effect on troleandomycin's own pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tonini_1999 | not_relevant | 0 | 0 | The paper discusses troleandomycin only as a drug interaction inhibitor of cisapride metabolism and does not report pharmacogenomic effects on troleandomycin's PK or PD. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (theophylline with troleandomycin) rather than pharmacogenomic (gene variant) effects on troleandomycin's own PK/PD. |
| PGx | Wang_2000 | not_relevant | 0 | 0 | The paper investigates the metabolic pathway of lidocaine and mentions troleandomycin only as an inhibitor of that process, rather than studying troleandomycin's own pharmacokinetics or pharmacogenomics. |
| popPK | Wright_1994 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on enzyme induction, containing no pharmacokinetic parameters (CL, V, t1/2) for troleandomycin. |
| PGx | Wu_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of clomipramine, using troleandomycin only as a CYP3A4 inhibitor in vitro, and does not report pharmacogenomic effects on troleandomycin's PK or PD. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper uses troleandomycin as a tool compound (mechanism-based inhibitor) to characterize CYP enzymes, rather than studying it as the substrate whose PK/PD is affected by genetic variants. |
| PGx | Zhao_1998 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of quinine and etoposide metabolism by troleandomycin, but does not report any pharmacogenomic effect (gene variant/genotype) on the PK or PD of troleandomycin itself. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper focuses on vinblastine metabolism and mentions troleandomycin only as a CYP3A inhibitor for mechanistic evidence, not for a pharmacogenomic effect on troleandomycin's PK/PD. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 inhibition but does not report any pharmacogenomic effects of gene variants on troleandomycin PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
