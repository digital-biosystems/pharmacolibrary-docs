# digitoxin

- **generic name:** digitoxin
- **ATC codes:** `C01AA04`
- **DrugBank:** [DB01396](https://go.drugbank.com/drugs/DB01396)
- **groups:** approved, withdrawn

## About

**Description.** A cardiac glycoside sometimes used in place of digoxin. It has a longer half-life than digoxin; toxic effects, which are similar to those of digoxin, are longer lasting. (From Martindale, The Extra Pharmacopoeia, 30th ed, p665)

**Indication.** For the treatment and management of congestive cardiac insufficiency, arrhythmias and heart failure.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 04:19 | 5:10 | 0/1/0 | 0/0/0 | 0/0/0 | 19,453/1,877 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Flasch_1979](drugs/drug_digitoxin/Digitoxin_Flasch1979_reference.md) | Flasch H et al., Pharmacokinetics of dihydrodigitoxin in…, Naunyn-Schmiedeberg's archi… (1979) | [10.1007/BF00500279](https://doi.org/10.1007/BF00500279) |

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Flasch_1979.pdf` | Flasch H et al., Pharmacokinetics of dihydrodigitoxin in…, Naunyn-Schmiedeberg's archi… (1979) | popPK | 9 | [10.1007/BF00500279](https://doi.org/10.1007/BF00500279) | [530320](https://pubmed.ncbi.nlm.nih.gov/530320) | The study reports quantitative pharmacokinetic parameters (half-lives and volume of distribution) for digitoxin in cats, with specific numeric values provided in the text. |
| `Ebner_1985.pdf` | Ebner F et al., Diffusion-controlled receptor occupancy…, Journal of molecular and ce… (1985) | pd | 4 | [10.1016/s0022-2828(85)80127-9](https://doi.org/10.1016/s0022-2828(85)80127-9) | [3001323](https://www.ncbi.nlm.nih.gov/pubmed/3001323) | metadata signals extractable PD data (concentration-effect) |
| `Fagoo_1985.pdf` | Fagoo M et al., Interaction of cardiodigin, endogenous…, Biochemical and biophysical… (1985) | pd | 4 | [10.1016/0006-291x(85)90187-1](https://doi.org/10.1016/0006-291x(85)90187-1) | [2990458](https://www.ncbi.nlm.nih.gov/pubmed/2990458) | metadata signals extractable PD data (EC50) |
| `Schneider_1992.pdf` | Schneider J et al., Cardiac effects of R 79595 and its isom…, Naunyn-Schmiedeberg's archi… (1992) | pd | 4 | [10.1007/BF00169014](https://doi.org/10.1007/BF00169014) | [1470228](https://www.ncbi.nlm.nih.gov/pubmed/1470228) | metadata signals extractable PD data (EC50) |
| `Urtizberea_1990.pdf` | Urtizberea M et al., Toxicokinetic-toxicodynamic models desc…, Toxicology in vitro : an in… (1990) | pd | 4 | [10.1016/0887-2333(90)90112-7](https://doi.org/10.1016/0887-2333(90)90112-7) | [20702226](https://www.ncbi.nlm.nih.gov/pubmed/20702226) | metadata signals extractable PD data (Emax) |
| `Gozalpour_2014.pdf` | Gozalpour E et al., Convallatoxin: a new P-glycoprotein sub…, European journal of pharmac… (2014) | pgx | 7 | [10.1016/j.ejphar.2014.09.031](https://doi.org/10.1016/j.ejphar.2014.09.031) | [25264938](https://www.ncbi.nlm.nih.gov/pubmed/25264938) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Dragonas_2008.pdf` | Dragonas C et al., The association of ABCB1 polymorphisms…, European journal of clinica… (2008) | pgx | 5 | [10.1007/s00228-007-0418-x](https://doi.org/10.1007/s00228-007-0418-x) | [18080812](https://www.ncbi.nlm.nih.gov/pubmed/18080812) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-09-09T04:18:06.067601+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Breznock_1975 | not_relevant | 0 | 0 | The study investigates the effect of a drug-drug interaction (phenobarbital) on digitoxin PK, not a pharmacogenomic effect (gene variant/genotype). |
| popPK | Damm_1975 | irrelevant | 1 | 0 | The study is an in-vitro intestinal transport experiment in mice, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for digitoxin. |
| PGx | Dragonas_2008 | not_relevant | 5 | 10 | The study reports a null association between ABCB1 genotype and digitoxin serum concentrations, finding no significant pharmacogenomic effect. |
| popPK | Ebner_1985 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on receptor occupancy and inotropic action, with no evidence of pharmacokinetic parameter reporting for digitoxin. |
| PD | Ebner_1985 | not_relevant | 0 | 0 | The paper discusses the theoretical mechanism of diffusion-controlled receptor occupancy for cardioactive steroids but does not report specific numeric PD parameters or exposure-response data for digitoxin. |
| popPK | Fagoo_1985 | irrelevant | 0 | 0 | The paper focuses on the interaction of cardiodigin with antibodies and does not report pharmacokinetic parameters for digitoxin. |
| PD | Fagoo_1985 | not_relevant | 0 | 0 | The paper focuses on the molecular interaction between cardiodigin and antibodies, not on pharmacodynamic exposure-response modeling or numeric PD parameters for digitoxin. |
| PGx | Gozalpour_2013 | not_relevant | 2 | 5 | The paper investigates the binding affinity of digitoxin to engineered P-glycoprotein mutants in vitro, rather than reporting a pharmacogenomic effect on a PK or PD parameter in humans. |
| PGx | Gozalpour_2014 | not_relevant | 0 | 0 | The paper investigates the transport of convallatoxin by P-glycoprotein and does not report pharmacogenomic effects on the PK/PD of digitoxin. |
| PGx | Gozalpour_2016 | not_relevant | 0 | 0 | The study characterizes P-gp transport of digitoxin in cell lines and vesicles but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| popPK | Haustein_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pengitoxin, not digitoxin, which is only mentioned as a comparator. |
| PGx | Hengstler_1999 | not_relevant | 0 | 0 | The paper reviews interspecies differences in toxicity and metabolism but does not report specific pharmacogenomic effects of gene variants on digitoxin PK/PD parameters. |
| popPK | Hori_1988 | irrelevant | 0 | 0 | The study is a mechanistic investigation of palytoxin-induced potassium efflux in guinea-pig smooth muscle, using digitoxin only as a pharmacological inhibitor rather than as the subject of a pharmacokinetic analysis. |
| PD | Hori_1988 | not_relevant | 1 | 1 | The paper reports a single concentration (10^-5 M) of digitoxin that inhibited the effect, but does not provide a dose-response curve, Emax, or EC50 for digitoxin itself. |
| popPK | Jelliffe_2014 | irrelevant | 2 | 0 | The paper is a review/case series using PK models to guide therapy but does not report original quantitative disposition parameters (CL, V, ka) for digitoxin, only effect compartment concentrations. |
| popPK | McGarry_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of digoxin's effect on calcium channels, with digitoxin mentioned only as a comparator, and no pharmacokinetic parameters are reported. |
| popPK | Pfleger_1975 | relevant | 4 | 5 | The study reports compartmental half-lives and tissue/medium ratios for digitoxin in isolated animal hearts, but lacks standard systemic PK parameters like clearance or volume of distribution. |
| popPK | Schneider_1992 | irrelevant | 0 | 0 | The paper focuses on the cardiac effects of phosphodiesterase III inhibitors (R 79595, etc.) and does not report pharmacokinetic parameters for digitoxin. |
| PD | Schneider_1992 | not_relevant | 0 | 0 | The paper focuses on the cardiac effects of phosphodiesterase III inhibitors (R 79595, etc.) and does not report pharmacodynamic or exposure-response data for digitoxin. |
| popPK | Su_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on antiviral activity and does not report pharmacokinetic parameters for digitoxin. |
| popPK | Urtizberea_1990 | irrelevant | 0 | 0 | The provided evidence contains only the title of a study on digitalis poisoning, with no quantitative pharmacokinetic parameters or data for digitoxin present. |
| popPK | Urtizberea_1991 | irrelevant | 2 | 0 | The study focuses on the relationship between RBC potassium and plasma digitoxin concentrations using an effect compartment model, but does not report standard quantitative disposition parameters (CL, V, ka) for digitoxin. |
| PGx | Yakisich_2017 | not_relevant | 0 | 0 | The paper investigates chemoresistance mechanisms in cancer cells under serum starvation and does not report any pharmacogenomic effects (gene variants) on the PK or PD of digitoxin. |
| PGx | Zeitlin_2017 | not_relevant | 0 | 0 | The study evaluates the safety and efficacy of digitoxin in cystic fibrosis patients but does not report any pharmacogenomic analysis or genotype-stratified effects on pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_digitoxin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
