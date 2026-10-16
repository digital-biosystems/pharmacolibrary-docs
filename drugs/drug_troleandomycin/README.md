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
| 2026-10-13 12:10 | 9:07 | 0/0/0 | 0/0/0 | 0/0/0 | 93,517/6,012 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=troleandomycin).

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
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 477 matched, 168 returned
- **screened:** 4  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_46 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
| `Kappers_2001.pdf` | Kappers WA et al., Diazinon is activated by CYP2C19 in hum…, Toxicology and applied phar… (2001) | pd | 4 | [10.1006/taap.2001.9294](https://doi.org/10.1006/taap.2001.9294) | [11708902](https://www.ncbi.nlm.nih.gov/pubmed/11708902) | metadata signals extractable PD data (IC50) |
| `Madan_2007.pdf` | Madan A et al., In vitro metabolism of indiplon and an…, Xenobiotica; the fate of fo… (2007) | pd | 4 | [10.1080/00498250701433054](https://doi.org/10.1080/00498250701433054) | [17620220](https://www.ncbi.nlm.nih.gov/pubmed/17620220) | metadata signals extractable PD data (IC50) |
| `Pan_1998.pdf` | Pan LP et al., In-vitro characterization of the cytoch…, Pharmacogenetics (1998) | pd | 4 | [10.1097/00008571-199810000-00003](https://doi.org/10.1097/00008571-199810000-00003) | [9825830](https://www.ncbi.nlm.nih.gov/pubmed/9825830) | metadata signals extractable PD data (IC50) |
| `Peng_2004.pdf` | Peng WX et al., [Mechanism of mono-hydroxylation of dai…, Yao xue xue bao = Acta phar… (2004) | pd | 4 | not captured | [15696928](https://www.ncbi.nlm.nih.gov/pubmed/15696928) | metadata signals extractable PD data (IC50) |
| `Sanchez_2004.pdf` | Sanchez RI et al., Cytochrome P450 3A4 is the major enzyme…, Drug metabolism and disposi… (2004) | pd | 4 | [10.1124/dmd.104.000216](https://doi.org/10.1124/dmd.104.000216) | [15304427](https://www.ncbi.nlm.nih.gov/pubmed/15304427) | metadata signals extractable PD data (IC50) |
| `Schmider_1997.pdf` | Schmider J et al., Biotransformation of mestranol to ethin…, Journal of clinical pharmac… (1997) | pd | 4 | [10.1002/j.1552-4604.1997.tb04781.x](https://doi.org/10.1002/j.1552-4604.1997.tb04781.x) | [9089421](https://www.ncbi.nlm.nih.gov/pubmed/9089421) | metadata signals extractable PD data (Emax) |
| `Sutton_1997.pdf` | Sutton D et al., Role of CYP3A4 in human hepatic diltiaz…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9223567](https://www.ncbi.nlm.nih.gov/pubmed/9223567) | metadata signals extractable PD data (IC50) |
| `Tassaneeyakul_1994.pdf` | Tassaneeyakul W et al., Caffeine metabolism by human hepatic cy…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90304-2](https://doi.org/10.1016/0006-2952(94)90304-2) | [8204093](https://www.ncbi.nlm.nih.gov/pubmed/8204093) | metadata signals extractable PD data (IC50) |
| `Tuvesson_2005.pdf` | Tuvesson H et al., Cytochrome P450 3A4 is the major enzyme…, Drug metabolism and disposi… (2005) | pd | 4 | [10.1124/dmd.104.002238](https://doi.org/10.1124/dmd.104.002238) | [15764719](https://www.ncbi.nlm.nih.gov/pubmed/15764719) | metadata signals extractable PD data (IC50) |
| `Venkatakrishnan_1998.pdf` | Venkatakrishnan K et al., Kinetic characterization and identifica…, The Journal of pharmacy and… (1998) | pd | 4 | [10.1111/j.2042-7158.1998.tb06859.x](https://doi.org/10.1111/j.2042-7158.1998.tb06859.x) | [9600717](https://www.ncbi.nlm.nih.gov/pubmed/9600717) | metadata signals extractable PD data (IC50) |
| `Wang_1999.pdf` | Wang H et al., Demethylation capacity of human fetal a…, Zhongguo yao li xue bao = A… (1999) | pd | 4 | not captured | [10452125](https://www.ncbi.nlm.nih.gov/pubmed/10452125) | metadata signals extractable PD data (concentration-effect) |
| `Wright_1994.pdf` | Wright MC et al., Induction of the cytochrome P450 3A sub…, Biochemical and biophysical… (1994) | pd | 4 | [10.1006/bbrc.1994.1797](https://doi.org/10.1006/bbrc.1994.1797) | [8003039](https://www.ncbi.nlm.nih.gov/pubmed/8003039) | metadata signals extractable PD data (emax) |
| `Wu_1998.pdf` | Wu ZL et al., Clomipramine N-demethylation metabolism…, Zhongguo yao li xue bao = A… (1998) | pd | 4 | not captured | [10375803](https://www.ncbi.nlm.nih.gov/pubmed/10375803) | metadata signals extractable PD data (IC50) |
| `Xia_2002.pdf` | Xia XY et al., In vitro metabolic characteristics of c…, Acta pharmacologica Sinica (2002) | pd | 4 | not captured | [11978200](https://www.ncbi.nlm.nih.gov/pubmed/11978200) | metadata signals extractable PD data (IC50) |
| `Zhao_1997.pdf` | Zhao XJ et al., Metabolic interactions of selected anti…, British journal of clinical… (1997) | pd | 4 | [10.1046/j.1365-2125.1997.t01-1-00619.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00619.x) | [9384469](https://www.ncbi.nlm.nih.gov/pubmed/9384469) | metadata signals extractable PD data (IC50) |
| `Zhao_1998.pdf` | Zhao XJ et al., Mutual inhibition between quinine and e…, Drug metabolism and disposi… (1998) | pd | 4 | not captured | [9456308](https://www.ncbi.nlm.nih.gov/pubmed/9456308) | metadata signals extractable PD data (IC50) |
| `Zhao_2005.pdf` | Zhao P et al., Evaluation of time-dependent inactivati…, Drug metabolism and disposi… (2005) | pd | 4 | [10.1124/dmd.104.002832](https://doi.org/10.1124/dmd.104.002832) | [15743977](https://www.ncbi.nlm.nih.gov/pubmed/15743977) | metadata signals extractable PD data (IC50) |
| `Jangra_2025.pdf` | Jangra A et al., An in-depth review of PPARγ modulators…, Drug metabolism reviews (2025) | pgx | 8 | [10.1080/03602532.2025.2508152](https://doi.org/10.1080/03602532.2025.2508152) | [40406962](https://www.ncbi.nlm.nih.gov/pubmed/40406962) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Li_2013.pdf` | Li Y et al., The CYP2B6*6 allele significantly alter…, Drug metabolism and disposi… (2013) | pgx | 8 | [10.1124/dmd.113.051631](https://doi.org/10.1124/dmd.113.051631) | [23550066](https://www.ncbi.nlm.nih.gov/pubmed/23550066) | metadata signals extractable PGX data (CYP2B6*6, PK/PD-context) |
| `Liu_2000.pdf` | Liu XQ et al., Enzyme kinetics and inhibition of nimod…, Acta pharmacologica Sinica (2000) | pgx | 8 | not captured | [11501176](https://www.ncbi.nlm.nih.gov/pubmed/11501176) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Evans_2003.pdf` | Evans DC et al., Eletriptan metabolism by human hepatic…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.7.861](https://doi.org/10.1124/dmd.31.7.861) | [12814962](https://www.ncbi.nlm.nih.gov/pubmed/12814962) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Huang_1998.pdf` | Huang Z et al., 16Alpha-hydroxylation of estrone by hum…, Carcinogenesis (1998) | pgx | 7 | [10.1093/carcin/19.5.867](https://doi.org/10.1093/carcin/19.5.867) | [9635876](https://www.ncbi.nlm.nih.gov/pubmed/9635876) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Klees_2005.pdf` | Klees TM et al., Metabolism of alfentanil by cytochrome…, Drug metabolism and disposi… (2005) | pgx | 7 | [10.1124/dmd.104.002709](https://doi.org/10.1124/dmd.104.002709) | [15557344](https://www.ncbi.nlm.nih.gov/pubmed/15557344) | metadata signals extractable PGX data (cyp3a, PK/PD-context) |
| `Ledirac_2000.pdf` | Ledirac N et al., Effects of macrolide antibiotics on CYP…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [11095572](https://www.ncbi.nlm.nih.gov/pubmed/11095572) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mitra_1995.pdf` | Mitra AK et al., Metabolism of dapsone to its hydroxylam…, Clinical pharmacology and t… (1995) | pgx | 7 | [10.1016/0009-9236(95)90176-0](https://doi.org/10.1016/0009-9236(95)90176-0) | [7586950](https://www.ncbi.nlm.nih.gov/pubmed/7586950) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Nadin_1999.pdf` | Nadin L et al., Participation of CYP2C8 in retinoic aci…, Biochemical pharmacology (1999) | pgx | 7 | [10.1016/s0006-2952(99)00192-6](https://doi.org/10.1016/s0006-2952(99)00192-6) | [10484078](https://www.ncbi.nlm.nih.gov/pubmed/10484078) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Nebot_2010.pdf` | Nebot N et al., Participation of CYP2C8 and CYP3A4 in t…, British journal of pharmaco… (2010) | pgx | 7 | [10.1111/j.1476-5381.2010.00946.x](https://doi.org/10.1111/j.1476-5381.2010.00946.x) | [20977456](https://www.ncbi.nlm.nih.gov/pubmed/20977456) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Pea_2001.pdf` | Pea F et al., Pharmacokinetic aspects of treating inf…, Clinical pharmacokinetics (2001) | pgx | 7 | [10.2165/00003088-200140110-00004](https://doi.org/10.2165/00003088-200140110-00004) | [11735605](https://www.ncbi.nlm.nih.gov/pubmed/11735605) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Projean_2003.pdf` | Projean D et al., Identification of CYP3A4 and CYP2C8 as…, Xenobiotica; the fate of fo… (2003) | pgx | 7 | [10.1080/0049825031000121608](https://doi.org/10.1080/0049825031000121608) | [12936704](https://www.ncbi.nlm.nih.gov/pubmed/12936704) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Renwick_1998.pdf` | Renwick AB et al., Metabolism of Zaleplon by human hepatic…, Xenobiotica; the fate of fo… (1998) | pgx | 7 | [10.1080/004982598239452](https://doi.org/10.1080/004982598239452) | [9604298](https://www.ncbi.nlm.nih.gov/pubmed/9604298) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Selvakumar_2014.pdf` | Selvakumar S et al., Expression and characterization of cyno…, Drug metabolism and disposi… (2014) | pgx | 7 | [10.1124/dmd.113.055491](https://doi.org/10.1124/dmd.113.055491) | [24335510](https://www.ncbi.nlm.nih.gov/pubmed/24335510) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Suzuki_2003.pdf` | Suzuki A et al., CYP isoforms involved in the metabolism…, Drug metabolism and pharmac… (2003) | pgx | 7 | [10.2133/dmpk.18.104](https://doi.org/10.2133/dmpk.18.104) | [15618724](https://www.ncbi.nlm.nih.gov/pubmed/15618724) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Wang_1997.pdf` | Wang JS et al., Effect of troleandomycin on the pharmac…, British journal of clinical… (1997) | pgx | 7 | [10.1046/j.1365-2125.1997.00649.x](https://doi.org/10.1046/j.1365-2125.1997.00649.x) | [9278210](https://www.ncbi.nlm.nih.gov/pubmed/9278210) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chasserot-Golaz_1993.pdf` | Chasserot-Golaz S et al., Biotransformation of 17 beta-hydroxy-11…, Biochemical pharmacology (1993) | pgx | 5 | [10.1016/0006-2952(93)90654-f](https://doi.org/10.1016/0006-2952(93)90654-f) | [8267660](https://www.ncbi.nlm.nih.gov/pubmed/8267660) | metadata signals extractable PGX data (CYP3A) |
| `Gupta_2004.pdf` | Gupta RP et al., CYP3A4 is a human microsomal vitamin D…, Journal of bone and mineral… (2004) | pgx | 5 | [10.1359/JBMR.0301257](https://doi.org/10.1359/JBMR.0301257) | [15005856](https://www.ncbi.nlm.nih.gov/pubmed/15005856) | metadata signals extractable PGX data (CYP3A4) |

<sub>queue written 2026-10-13T12:09:17.969206+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alvarez_1992 | irrelevant | 0 | 0 | Troleandomycin is used only as an in-vitro inhibitor to reverse T-cell proliferation, not as the subject of a pharmacokinetic study. |
| PGx | Araya_1999 | not_relevant | 0 | 0 | The paper uses troleandomycin as a CYP3A4 inhibitor to study bile acid metabolism, not to assess the pharmacokinetics or pharmacodynamics of troleandomycin itself in relation to genetic variants. |
| popPK | Arlotto_1987 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic study on enzyme induction (cytochrome P-450 and UDP-GT) in rats, not a pharmacokinetic study reporting disposition parameters for troleandomycin. |
| popPK | Aueviriyavit_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A inactivation kinetics, not a pharmacokinetic study reporting disposition parameters for troleandomycin. |
| popPK | Baldwin_2003 | irrelevant | 0 | 0 | Troleandomycin is used only as a CYP3A inhibitor in an in vitro cell culture assay, not as the subject drug for PK parameter estimation. |
| PGx | Benet_2003 | not_relevant | 0 | 0 | The paper discusses transporter-enzyme interactions and uses troleandomycin as a CYP3A4 inhibitor in rat perfusion studies, but does not report pharmacogenomic effects (gene variants) on troleandomycin's PK/PD. |
| PGx | Benet_2004 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction where troleandomycin inhibits CYP3A4, but does not report any genetic variant or genotype affecting troleandomycin's pharmacokinetics. |
| PGx | Beulz-Riché_2005 | not_relevant | 0 | 0 | The paper focuses on the metabolism of vinorelbine by CYP isoenzymes; troleandomycin is only mentioned as a specific inhibitor used to block CYP3A4, not as the study drug. |
| popPK | Biagini_2006 | irrelevant | 0 | 0 | This is an in vitro hepatotoxicity study measuring cytotoxicity (EC50) and not reporting pharmacokinetic disposition parameters for troleandomycin. |
| PGx | Bohets_2000 | not_relevant | 0 | 0 | The paper investigates cisapride metabolism and drug-drug interactions (inhibitors like troleandomycin), but does not report any pharmacogenomic effects (gene variants) on the PK/PD of troleandomycin itself. |
| popPK | Caraco_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of codeine metabolism where troleandomycin is used only as a CYP3A4 inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Chan_2000 | not_relevant | 0 | 0 | The paper reports in vitro CYP3A4 inactivation kinetics of resveratrol and troleandomycin but does not report any pharmacogenomic effect (gene variant/genotype) on the PK or PD of troleandomycin. |
| PGx | Chasserot-Golaz_1993 | not_relevant | 0 | 0 | The paper investigates the metabolism of RU486 using troleandomycin only as a CYP3A inhibitor, not to study the effect of a genetic variant on troleandomycin's PK/PD. |
| PGx | Cheng_2016 | not_relevant | 0 | 0 | The paper uses troleandomycin as a CYP3A4 inhibitor to study vitamin D metabolism and does not report pharmacogenomic effects on troleandomycin's PK or PD. |
| PGx | Cribb_1995 | not_relevant | 0 | 0 | The paper focuses on sulfamethoxazole metabolism and mentions troleandomycin only as an inhibitor of sulfamethoxazole hydroxylamine reduction, not as the drug whose PK/PD is being analyzed for genetic effects. |
| popPK | Dellas_1982 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PGx | Desta_1998 | not_relevant | 0 | 0 | The paper focuses on the metabolism of pimozide and mentions troleandomycin only as a CYP3A inhibitor in an in vitro assay, without reporting any pharmacogenomic effects on troleandomycin's PK or PD. |
| PGx | Diaz_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of 3-methylindole in porcine liver microsomes and uses troleandomycin only as a chemical inhibitor to identify CYP enzymes; it does not report pharmacogenomic effects on the PK/PD of troleandomycin itself. |
| popPK | Eadie_2001 | irrelevant | 0 | 0 | The paper is a review of drug interactions involving migraine-specific agents, where troleandomycin is mentioned only as a macrolide that inhibits ergot metabolism, not as the subject of a PK study. |
| popPK | Echizen_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of disopyramide metabolism where troleandomycin is used only as a CYP3A4 inhibitor, not as the subject drug for PK parameter estimation. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on antipsychotics and mentions troleandomycin only in a list of CYP3A4 inhibitors, with no PK parameters for troleandomycin. |
| PGx | Evans_2003 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of eletriptan, mentioning troleandomycin only as a CYP3A4 inhibitor, and does not report pharmacogenomic effects on troleandomycin. |
| popPK | Faucette_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2B6 induction where troleandomycin serves only as a non-inducer comparator, not as the subject of a pharmacokinetic analysis. |
| PGx | Faucette_2004 | not_relevant | 0 | 0 | The paper focuses on CYP2B6 regulation by inducers and does not mention troleandomycin or its pharmacokinetics/pharmacodynamics. |
| popPK | Fowler_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 mutagenesis and enzyme kinetics, not a pharmacokinetic study of troleandomycin disposition. |
| popPK | Fujimaki_2001 | irrelevant | 0 | 0 | The study is an in-vitro metabolism investigation of nefiracetam where troleandomycin is used only as an inhibitory probe, and no PK parameters for troleandomycin are reported. |
| PGx | Ganesan_2009 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics/toxicity of primaquine, using troleandomycin only as a CYP3A4 inhibitor, and does not report pharmacogenomic effects on PK/PD parameters of troleandomycin. |
| PGx | Gantenbein_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of bupivacaine, not troleandomycin; troleandomycin is only mentioned as a CYP3A inhibitor. |
| PGx | Gorski_1999 | not_relevant | 0 | 0 | The study focuses on alprazolam metabolism and uses troleandomycin only as a chemical inhibitor, not as the drug of interest for pharmacogenomics. |
| popPK | Greenblatt_2011_2 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| popPK | Grogan_1990 | irrelevant | 0 | 0 | The study focuses on the induction of a cytochrome P-450 enzyme by troleandomycin in vitro, not on the pharmacokinetic disposition of the drug itself. |
| PGx | Gupta_2004 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as a vitamin D 25-hydroxylase and mentions troleandomycin only as a known inhibitor of CYP3A4, without reporting any pharmacogenomic effects on troleandomycin's PK or PD parameters. |
| PGx | Gélisse_2007 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction between clarithromycin and carbamazepine, with no mention of troleandomycin or pharmacogenomic factors. |
| PGx | Hamaoka_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of midazolam by CYP isoforms; troleandomycin is used only as a chemical inhibitor and no pharmacogenomic effect of a gene variant on troleandomycin's PK/PD is reported. |
| PGx | Honda_2011 | not_relevant | 0 | 0 | The paper uses troleandomycin as a tool inhibitor to study CYP3A metabolism of cholesterol, rather than reporting a pharmacogenomic effect on troleandomycin's own PK or PD. |
| PGx | Huang_1998 | not_relevant | 0 | 0 | The paper investigates the metabolism of estrone by CYP3A4/5 and uses troleandomycin only as a non-specific inhibitor to confirm enzyme identity; it does not report pharmacogenomic effects on troleandomycin's PK or PD. |
| PGx | Huang_2000 | not_relevant | 0 | 0 | The paper discusses the role of CYP enzymes in the metabolism of cyclophosphamide and ifosfamide; troleandomycin is only used as an inhibitor to block CYP3A4 activity and is not the subject of a pharmacogenomic study. |
| PGx | Jangra_2025 | not_relevant | 0 | 0 | The paper discusses troleandomycin only as an inhibitor of rosiglitazone metabolism, not as the subject of a pharmacogenomic study. |
| popPK | Jin_2011 | irrelevant | 0 | 0 | The study focuses on the metabolism of fingolimod, and troleandomycin is only mentioned as a negative control inhibitor with no PK parameters reported for it. |
| PGx | Jin_2011 | not_relevant | 0 | 0 | The paper concerns the pharmacogenomics of fingolimod metabolism, not troleandomycin. |
| popPK | Jonkman_1984 | irrelevant | 0 | 0 | The paper is a review of drug interactions affecting theophylline pharmacokinetics, where troleandomycin is mentioned only as a co-administered drug that reduces theophylline clearance, not as the subject of PK analysis. |
| popPK | Jurima-Romet_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of terfenadine metabolism where troleandomycin acts only as an inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Jurima-Romet_1994 | not_relevant | 0 | 10 | The paper reports in vitro CYP3A4 inhibition of terfenadine by troleandomycin, but does not report a pharmacogenomic effect (gene variant changing drug response). |
| popPK | Jönsson_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of budesonide metabolism where troleandomycin is used only as a CYP3A inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Jönsson_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of budesonide, not troleandomycin, and does not report pharmacogenomic effects on troleandomycin PK/PD. |
| popPK | Kappers_2001 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of diazinon by CYP enzymes, using troleandomycin only as a CYP3A4 inhibitor, and reports no pharmacokinetic parameters for troleandomycin. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions among antiepileptic drugs and does not mention troleandomycin. |
| popPK | Kenny_2006 | irrelevant | 1 | 0 | Troleandomycin is used as a co-administered inhibitor to study midazolam pharmacokinetics, not as the subject drug for which disposition parameters are reported. |
| popPK | Kerbusch_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ifosfamide, not troleandomycin. |
| popPK | Kharasch_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of alfentanil, using troleandomycin only as a CYP3A4 inhibitor to modulate enzyme activity, not as the subject drug. |
| popPK | Kharasch_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levo-alpha-acetylmethadol (LAAM), using troleandomycin only as a CYP3A inhibitor to modulate LAAM metabolism, not as the subject drug. |
| PGx | Klees_2005 | not_relevant | 0 | 0 | The paper studies alfentanil metabolism and mentions troleandomycin only as an inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Koyama_2002 | not_relevant | 0 | 0 | The paper investigates the metabolism of rebamipide, not troleandomycin, and does not report pharmacogenomic effects on troleandomycin PK/PD. |
| popPK | Kuip_2017 | irrelevant | 0 | 0 | The paper is a review of fentanyl pharmacokinetics, not a study of troleandomycin. |
| popPK | Kumar_1996 | irrelevant | 0 | 0 | The study focuses on the metabolism of ritonavir in vitro, and troleandomycin is only mentioned as a comparator inhibitor, not the subject drug. |
| PGx | Kumar_1996 | not_relevant | 0 | 0 | The paper focuses on the metabolism of ritonavir and its inhibitory effects on CYP enzymes; troleandomycin is only mentioned as a standard inhibitor control and no pharmacogenomic effects on troleandomycin PK/PD are reported. |
| PGx | Ledirac_2000 | not_relevant | 0 | 0 | The paper investigates interspecies differences in drug-induced enzyme induction (PK parameter) but does not examine the influence of human genetic variants or genotypes (pharmacogenomics) on these effects. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving troleandomycin and carbamazepine but does not report any pharmacogenomic effects (gene variants) on troleandomycin's PK or PD parameters. |
| PGx | Li_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of ketamine metabolism, not troleandomycin. |
| PGx | Ling_1995 | not_relevant | 0 | 0 | The paper focuses on the metabolism of terfenadine and does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of troleandomycin. |
| PGx | Liu_2000 | not_relevant | 0 | 0 | The paper studies the metabolism of nimodipine and mentions troleandomycin only as a CYP3A inhibitor, not as the drug of interest for a pharmacogenomic effect. |
| popPK | Ludden_1985 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for troleandomycin itself. |
| popPK | Madan_2007 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of indiplon, with troleandomycin used only as a CYP3A4/5 inhibitor probe, not as the subject drug for PK parameter estimation. |
| PGx | Maier-Salamon_2014 | not_relevant | 0 | 0 | The paper investigates the metabolism of 9-aminocamptothecin and uses troleandomycin solely as a CYP3A4 inhibitor, not as the subject of pharmacogenomic analysis. |
| PGx | Martin_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of fenfluramine and norfenfluramine, not troleandomycin, and does not report pharmacogenomic effects. |
| PGx | Matsunaga_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of cannabinoids (THC metabolites) and the role of CYP3A4, using troleandomycin only as an inhibitor to confirm enzyme identity; it does not report pharmacogenomic effects on the PK/PD of troleandomycin itself. |
| PGx | McGinnity_2006 | not_relevant | 0 | 0 | The paper evaluates time-dependent CYP450 inhibition by troleandomycin in vitro but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | McGinnity_2009 | irrelevant | 0 | 0 | The study is an in vitro CYP3A4 induction assessment where troleandomycin is used only as a negative control/prototypic compound, not as the subject of a pharmacokinetic study. |
| popPK | Michalets_2000 | irrelevant | 0 | 0 | The paper is a review of drug interactions with cisapride, and troleandomycin is mentioned only as a CYP3A4 inhibitor/comparator, with no PK parameters reported for it. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with cisapride, not pharmacogenomic effects. |
| PGx | Mitra_1995 | not_relevant | 0 | 0 | The paper investigates dapsone metabolism and identifies troleandomycin only as a mechanism-based inhibitor of dapsone hydroxylation, without reporting any pharmacogenomic effects of troleandomycin itself. |
| PGx | Nadin_1999 | not_relevant | 0 | 0 | The paper investigates the metabolism of retinoic acid, not troleandomycin, which is only mentioned as a CYP3A inhibitor. |
| popPK | Naritomi_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay for CYP450 inhibition and does not report pharmacokinetic disposition parameters for troleandomycin. |
| PGx | Nebot_2010 | not_relevant | 0 | 0 | The paper focuses on the metabolism of imatinib, not troleandomycin. |
| PGx | Newton_1995 | not_relevant | 0 | 0 | The paper uses troleandomycin as a CYP3A4 inhibitor probe to study enzyme specificity, not to report pharmacogenomic effects on troleandomycin's own PK/PD parameters. |
| PGx | OGallagher_2021 | not_relevant | 0 | 0 | The paper discusses troleandomycin in the introduction to justify the hypothesis about CYP3A4 inhibition but does not study it; the study focuses on grapefruit juice and beetroot juice. |
| popPK | Pan_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of haloperidol metabolism where troleandomycin is used only as a CYP3A4 inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Pea_2001 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving troleandomycin as a CYP3A4 inhibitor, but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Peng_2003 | irrelevant | 0 | 0 | The study investigates the metabolism of daidzein in vitro, using troleandomycin only as a CYP3A4 inhibitor probe, and does not report pharmacokinetic parameters for troleandomycin. |
| PGx | Peng_2003 | not_relevant | 0 | 0 | The paper investigates the metabolism of daidzein, not troleandomycin, and does not report pharmacogenomic effects on troleandomycin's PK or PD. |
| popPK | Peng_2004 | irrelevant | 0 | 0 | The study investigates the metabolism of daidzein in vitro, using troleandomycin only as a CYP3A4 inhibitor probe, and does not report pharmacokinetic parameters for troleandomycin. |
| PGx | Projean_2003 | not_relevant | 0 | 0 | The study focuses on the metabolism of morphine, not troleandomycin, which is only used as a tool inhibitor. |
| PGx | Raeissi_1997 | not_relevant | 0 | 0 | The paper investigates the metabolism of terfenadine and the inhibitory effect of troleandomycin, but does not report pharmacogenomic variants affecting troleandomycin's PK/PD. |
| PGx | Renwick_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of zaleplon and mentions troleandomycin only as a mechanism-based inhibitor of CYP3A4, not reporting any pharmacogenomic effects on troleandomycin's PK/PD. |
| PGx | Renwick_2000 | not_relevant | 0 | 0 | The paper studies the metabolism of 7-benzyloxy-4-trifluoromethyl-coumarin (BFC), not troleandomycin; troleandomycin is only mentioned as a CYP3A4 inhibitor. |
| popPK | Rodvold_1999 | irrelevant | 0 | 0 | The paper is a review of clarithromycin pharmacokinetics and only mentions troleandomycin as a comparator for drug interactions, providing no PK parameters for troleandomycin. |
| PGx | Rougée_2023 | not_relevant | 0 | 0 | The paper investigates the effect of allosteric modulators on CYP3A4 inhibition by troleandomycin in vitro, not the effect of a gene variant or genotype on troleandomycin's PK/PD. |
| PGx | Roy_1995 | not_relevant | 0 | 0 | The paper studies the oxidative metabolism of O6-benzylguanine and only mentions troleandomycin as an enzyme inhibitor, without reporting any pharmacogenomic effects of troleandomycin itself. |
| PGx | Royer_1996 | not_relevant | 0 | 0 | The paper investigates the metabolism of docetaxel and troleandomycin is mentioned only as a CYP3A inhibitor, not as the primary drug for which a pharmacogenomic effect is reported. |
| popPK | Sanchez_2004 | irrelevant | 0 | 0 | The study focuses on the metabolism of aprepitant, and troleandomycin is used only as a non-specific CYP3A4 inhibitor in in-vitro experiments, not as the subject drug for PK parameter estimation. |
| popPK | Schmider_1997 | irrelevant | 0 | 0 | The study investigates the in vitro biotransformation of mestranol using troleandomycin only as a CYP3A inhibitor, not as the subject drug for PK modeling. |
| PGx | Selvakumar_2014 | not_relevant | 0 | 0 | The paper characterizes CYP3A4 expression in cynomolgus monkeys and uses troleandomycin only as a probe inhibitor, not as a substrate to assess pharmacogenomic effects on its PK/PD. |
| popPK | Sutton_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of diltiazem metabolism and CYP3A4 inhibition, where troleandomycin is used only as a positive control inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Suzuki_2003 | not_relevant | 0 | 0 | The study focuses on clarithromycin metabolism and mentions troleandomycin only as a CYP3A4 inhibitor, reporting no pharmacogenomic effects on troleandomycin. |
| popPK | Tassaneeyakul_1994 | irrelevant | 0 | 0 | The study focuses on caffeine metabolism by CYP450 isoforms, and troleandomycin is only used as a CYP3A inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Tassaneeyakul_1994 | not_relevant | 0 | 0 | The paper focuses on caffeine metabolism and CYP isoform contributions; troleandomycin is mentioned only as a CYP3A inhibitor for validation, not as the subject of a pharmacogenomic study. |
| PGx | Thummel_1993 | not_relevant | 0 | 0 | The study investigates acetaminophen metabolism and uses troleandomycin merely as a CYP3A4 inhibitor to dissect enzyme contributions; it does not report any pharmacogenomic effect on troleandomycin's own pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tonini_1999 | not_relevant | 0 | 0 | The paper discusses troleandomycin only as a drug interaction inhibitor of cisapride metabolism and does not report pharmacogenomic effects on troleandomycin's PK or PD. |
| popPK | Tuvesson_2005 | irrelevant | 0 | 0 | The study investigates the metabolism of laquinimod in vitro, using troleandomycin only as a CYP3A4 inhibitor, and does not report pharmacokinetic parameters for troleandomycin. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (theophylline with troleandomycin) rather than pharmacogenomic (gene variant) effects on troleandomycin's own PK/PD. |
| popPK | Venkatakrishnan_1998 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of adinazolam, using troleandomycin only as a CYP 3A4 inhibitor, and does not report pharmacokinetic parameters for troleandomycin itself. |
| popPK | Wang_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-450 demethylation capacity where troleandomycin is used only as a stimulant/comparator, not as the subject of a pharmacokinetic parameter estimation. |
| PGx | Wang_2000 | not_relevant | 0 | 0 | The paper investigates the metabolic pathway of lidocaine and mentions troleandomycin only as an inhibitor of that process, rather than studying troleandomycin's own pharmacokinetics or pharmacogenomics. |
| popPK | Wright_1994 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on enzyme induction, containing no pharmacokinetic parameters (CL, V, t1/2) for troleandomycin. |
| popPK | Wu_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of clomipramine metabolism where troleandomycin is used only as a CYP450 inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Wu_1998 | not_relevant | 0 | 0 | The paper studies the metabolism of clomipramine, using troleandomycin only as a CYP3A4 inhibitor in vitro, and does not report pharmacogenomic effects on troleandomycin's PK or PD. |
| popPK | Xia_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2A6 where troleandomycin is used only as a probe inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper uses troleandomycin as a tool compound (mechanism-based inhibitor) to characterize CYP enzymes, rather than studying it as the substrate whose PK/PD is affected by genetic variants. |
| PGx | Zhang_1997 | not_relevant | 0 | 0 | The paper investigates the metabolism of quinine and uses troleandomycin only as a CYP3A inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Zhao_1997 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| popPK | Zhao_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 inhibition where troleandomycin is used only as a probe inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Zhao_1998 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of quinine and etoposide metabolism by troleandomycin, but does not report any pharmacogenomic effect (gene variant/genotype) on the PK or PD of troleandomycin itself. |
| popPK | Zhao_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A inactivation kinetics, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for troleandomycin. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper focuses on vinblastine metabolism and mentions troleandomycin only as a CYP3A inhibitor for mechanistic evidence, not for a pharmacogenomic effect on troleandomycin's PK/PD. |
| popPK | de_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study of antiplasmodial activity (IC50) and does not report pharmacokinetic parameters for troleandomycin. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 inhibition but does not report any pharmacogenomic effects of gene variants on troleandomycin PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
