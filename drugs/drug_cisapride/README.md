<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;cisapride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisapride_Preechagoon1999_reference&quot;,&quot;label&quot;:&quot;Preechagoon_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisapride/Cisapride_Preechagoon1999_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# cisapride

- **generic name:** cisapride
- **ATC codes:** `A03FA02`
- **DrugBank:** [DB00604](https://go.drugbank.com/drugs/DB00604) · **PubChem:** [CID 6917698](https://pubchem.ncbi.nlm.nih.gov/compound/6917698)
- **molar mass:** 465.945 g/mol (C23H29ClFN3O4) — DrugBank
- **groups:** approved, withdrawn

## About

Cisapride is a gastrointestinal propulsive drug that was used for constipation, gastroesophageal reflux disease, indigestion, and gastroparesis. It has been withdrawn from the market and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425295](https://www.wikidata.org/wiki/Q425295) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cisapride | parent | 465.945 | C23H29ClFN3O4 | DrugBank | [6917698](https://pubchem.ncbi.nlm.nih.gov/compound/6917698) | Michiels_1987, Preechagoon_1999 |

## Start here

> **Preechagoon_1999_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> young infants with gastro-oesophageal reflux disease, n = &gt;=49. [Run it in the simulator](drugs/drug_cisapride/Cisapride_Preechagoon1999_reference.md?tab=Simulation) · [record](drugs/drug_cisapride/Cisapride_Preechagoon1999_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.538 | L/h | 0.538 L/h | young infants with gastro-oesophageal reflux disease | &gt;=49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Preechagoon_1999_reference](drugs/drug_cisapride/Cisapride_Preechagoon1999_reference.md) |
| V | V/F | 21.9 | L | 21.9 l | young infants with gastro-oesophageal reflux disease | &gt;=49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Preechagoon_1999_reference](drugs/drug_cisapride/Cisapride_Preechagoon1999_reference.md) |
| ka | kabs | 2.58 | 1/h | 2.58 h-1 | young infants with gastro-oesophageal reflux disease | &gt;=49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Preechagoon_1999_reference](drugs/drug_cisapride/Cisapride_Preechagoon1999_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>stale — current check: Not simulated</sub> | [Preechagoon_1999_reference](drugs/drug_cisapride/Cisapride_Preechagoon1999_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Preechagoon Y et al., Population pharmacokinetics of enterall…, British journal of clinical… (1999) | [10.1046/j.1365-2125.1999.00068.x](https://doi.org/10.1046/j.1365-2125.1999.00068.x) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Michiels_1987_reference](drugs/drug_cisapride/Cisapride_Michiels1987_reference.md) | — | 1-compartment (no model) | 3 | Michiels M et al., Pharmacokinetics and tissue distributio…, Arzneimittel-Forschung (1987) | — |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Odoul_2002_reference](drugs/drug_cisapride/Cisapride_Odoul2002_reference.md) | — | 1-compartment (no model) | 0 | Odoul F et al., Population pharmacokinetics of cisaprid…, European journal of clinica… (2002) | [10.1007/s00228-002-0504-z](https://doi.org/10.1007/s00228-002-0504-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Kim_2016_Kv](drugs/drug_cisapride/pd_Kim_2016_Kv.md) | Kv current amplitude ← cisapride · direct sigmoid Emax (Hill) effect | — | Kim HW et al., Cisapride, a selective serotonin 5-HT4-…, Biochemical and biophysical… (2016) | [10.1016/j.bbrc.2016.08.140](https://doi.org/10.1016/j.bbrc.2016.08.140) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Nolan_2006_RT](drugs/drug_cisapride/pd_Nolan_2006_RT.md) | RT interval ← cisapride · direct sigmoid Emax (Hill) effect | — | Nolan ER et al., A novel predictive pharmacokinetic/phar…, Journal of pharmacological… (2006) | [10.1016/j.vascn.2005.02.003](https://doi.org/10.1016/j.vascn.2005.02.003) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Webster_2001_MAPD](drugs/drug_cisapride/pd_Webster_2001_MAPD.md) | monophasic action potential duration ← cisapride · direct Emax (saturable) effect | — | Webster R et al., Pharmacokinetic/pharmacodynamic assessm…, Xenobiotica; the fate of fo… (2001) | [10.1080/00498250110054632](https://doi.org/10.1080/00498250110054632) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cisapride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C8` substrate, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2A (target), HTR3A (target), HTR4 (target), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:47 | 7:40 | 1/2/0 | 3/0/0 | 0/0/0 | 128,253/19,291 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 128 matched, 57 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_16 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Michiels_1987.pdf` | Michiels M et al., Pharmacokinetics and tissue distributio…, Arzneimittel-Forschung (1987) | popPK | 10 | not captured | [3435588](https://pubmed.ncbi.nlm.nih.gov/3435588) | The abstract provides specific quantitative pharmacokinetic parameters (clearance, volume of distribution, bioavailability, half-life) for cisapride in rats, rabbits, and dogs. |
| `Odoul_2002.pdf` | Odoul F et al., Population pharmacokinetics of cisaprid…, European journal of clinica… (2002) | popPK | 10 | [10.1007/s00228-002-0504-z](https://doi.org/10.1007/s00228-002-0504-z) | [12451427](https://pubmed.ncbi.nlm.nih.gov/12451427) | The paper reports a population pharmacokinetic model for cisapride in neonates with explicit numeric values for V/F and CL/F in the abstract. |
| `Preechagoon_1999.pdf` | Preechagoon Y et al., Population pharmacokinetics of enterall…, British journal of clinical… (1999) | popPK | 10 | [10.1046/j.1365-2125.1999.00068.x](https://doi.org/10.1046/j.1365-2125.1999.00068.x) | [10594470](https://pubmed.ncbi.nlm.nih.gov/10594470) | The paper reports a population pharmacokinetic model for cisapride in infants with explicit numeric values for CL/F, V/F, and Ka. |
| `Corsi_1991.pdf` | Corsi M et al., Pharmacological analysis of 5-hydroxytr…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12494.x](https://doi.org/10.1111/j.1476-5381.1991.tb12494.x) | [1797331](https://www.ncbi.nlm.nih.gov/pubmed/1797331) | metadata signals extractable PD data (EC50) |
| `Desta_2002.pdf` | Desta Z et al., The gastroprokinetic and antiemetic dru…, Drug metabolism and disposi… (2002) | pgx | 8 | [10.1124/dmd.30.3.336](https://doi.org/10.1124/dmd.30.3.336) | [11854155](https://www.ncbi.nlm.nih.gov/pubmed/11854155) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Ereshefsky_2000.pdf` | Ereshefsky L et al., Review of the pharmacokinetics, pharmac…, Depression and anxiety (2000) | pgx | 8 | [10.1002/1520-6394(2000)12:1+&lt;30::aid-da4&gt;3.0.co;2-g](https://doi.org/10.1002/1520-6394(2000)12:1+<30::aid-da4>3.0.co;2-g) | [11098412](https://www.ncbi.nlm.nih.gov/pubmed/11098412) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Alderman_2005.pdf` | Alderman J, Coadministration of sertraline with cis…, Clinical therapeutics (2005) | pgx | 7 | [10.1016/j.clinthera.2005.07.013](https://doi.org/10.1016/j.clinthera.2005.07.013) | [16154484](https://www.ncbi.nlm.nih.gov/pubmed/16154484) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Andersson_2001.pdf` | Andersson T et al., Drug interaction studies with esomepraz…, Clinical pharmacokinetics (2001) | pgx | 7 | [10.2165/00003088-200140070-00004](https://doi.org/10.2165/00003088-200140070-00004) | [11510629](https://www.ncbi.nlm.nih.gov/pubmed/11510629) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Desta_2000.pdf` | Desta Z et al., Interaction of cisapride with the human…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10859153](https://www.ncbi.nlm.nih.gov/pubmed/10859153) | metadata signals extractable PGX data (CYP450s, PK/PD-context) |
| `Furuta_2001.pdf` | Furuta S et al., Inhibition of drug metabolism in human…, Xenobiotica; the fate of fo… (2001) | pgx | 7 | [10.1080/00498250110035615](https://doi.org/10.1080/00498250110035615) | [11334262](https://www.ncbi.nlm.nih.gov/pubmed/11334262) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Furuta_2004.pdf` | Furuta S et al., Drug-drug interactions of Z-338, a nove…, European journal of pharmac… (2004) | pgx | 7 | [10.1016/j.ejphar.2004.06.040](https://doi.org/10.1016/j.ejphar.2004.06.040) | [15306208](https://www.ncbi.nlm.nih.gov/pubmed/15306208) | metadata signals extractable PGX data (UGT1A9, PK/PD-context) |
| `Gross_1999.pdf` | Gross AS et al., Influence of grapefruit juice on cisapr…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1016/S0009-9236(99)70133-5](https://doi.org/10.1016/S0009-9236(99)70133-5) | [10223776](https://www.ncbi.nlm.nih.gov/pubmed/10223776) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kearns_2003.pdf` | Kearns GL et al., Cisapride disposition in neonates and i…, Clinical pharmacology and t… (2003) | pgx | 7 | [10.1016/S0009-9236(03)00225-X](https://doi.org/10.1016/S0009-9236(03)00225-X) | [14534518](https://www.ncbi.nlm.nih.gov/pubmed/14534518) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mushiroda_2000.pdf` | Mushiroda T et al., The involvement of flavin-containing mo…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10997945](https://www.ncbi.nlm.nih.gov/pubmed/10997945) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Simard_2001.pdf` | Simard C et al., Study of the drug-drug interaction betw…, European journal of clinica… (2001) | pgx | 7 | [10.1007/s002280100298](https://doi.org/10.1007/s002280100298) | [11497338](https://www.ncbi.nlm.nih.gov/pubmed/11497338) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T13:41:03.799410+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alderman_2005 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (sertraline and cisapride) in a general population, not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Andersson_2001 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction (esomeprazole inhibiting CYP2C19) affecting cisapride PK, not a pharmacogenomic effect based on a gene variant or genotype. |
| PGx | Arayne_2005 | not_relevant | 0 | 0 | The paper discusses grapefruit juice-drug interactions and mentions cisapride only as a potential victim drug, without reporting any pharmacogenomic effects or specific PK/PD data for cisapride. |
| PGx | Bailey_1998 | not_relevant | 0 | 0 | The paper discusses grapefruit juice-drug interactions and mentions cisapride only as a potential candidate for interaction, without reporting any pharmacogenomic effects or specific PK/PD data for cisapride. |
| popPK | Corsi_1991 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Corsi_1991 | not_relevant | 0 | 0 | The paper analyzes the effects of 5-hydroxytryptamine (5-HT) on human isolated urinary bladder, not cisapride. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and only mentions cisapride as a contraindicated interacting drug, providing no pharmacokinetic parameters for cisapride. |
| PD | Cvetkovic_2003 | not_relevant | 1 | 0 | The paper is a review of lopinavir/ritonavir and mentions cisapride only as a contraindicated drug interaction, providing no pharmacodynamic or exposure-response data for cisapride. |
| popPK | Deneer_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flecainide, with cisapride used only as a co-administered prokinetic agent. |
| PGx | Desta_2000 | not_relevant | 2 | 5 | The paper characterizes CYP450 isoforms involved in cisapride metabolism using in vitro systems (HLMs and recombinant CYPs) but does not report a pharmacogenomic effect (genotype-to-phenotype) on a PK or PD parameter in humans. |
| PGx | Desta_2001 | not_relevant | 0 | 0 | The paper investigates stereoselective metabolism and enantiomer interactions in vitro but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Desta_2002 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of metoclopramide, not cisapride. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 drug interactions and mentions cisapride only as a substrate associated with QT prolongation, without reporting any quantitative pharmacokinetic parameters. |
| PD | Dresser_2000 | not_relevant | 1 | 0 | The text is a general review of CYP3A4 drug interactions and mentions cisapride only in the context of QT prolongation risks, without providing any specific pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Dubois_2016 | irrelevant | 2 | 0 | Cisapride is used as a comparator/probe compound in a PK-PD study focused on QT prolongation and hERG binding, not as the subject of a disposition parameter analysis. |
| PGx | Ereshefsky_2000 | not_relevant | 0 | 0 | The paper focuses on venlafaxine pharmacokinetics and only mentions cisapride as an example of a drug with high CYP3A4 interaction potential, without reporting any pharmacogenomic effects on cisapride's PK or PD parameters. |
| PGx | Flockhart_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A inhibitors) for cisapride, not pharmacogenomic effects of gene variants on its PK/PD. |
| PGx | Furuta_2001 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition by omeprazole/cimetidine) rather than pharmacogenomic effects of gene variants on cisapride PK/PD. |
| PGx | Furuta_2004 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and metabolic pathways (CYP/UGT inhibition) but does not report any pharmacogenomic effects (gene variants) on cisapride's PK or PD parameters. |
| PGx | Gross_1999 | not_relevant | 0 | 0 | The study investigates the effect of grapefruit juice (a food interaction) on cisapride pharmacokinetics, not the effect of a gene variant or genotype. |
| PGx | Hennessy_2008 | not_relevant | 0 | 0 | The study examines the association between cisapride and ventricular arrhythmia in a general population, without reporting any pharmacogenomic effects on PK or PD parameters. |
| PGx | Katoh_2003 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (mosapride and erythromycin) in healthy volunteers and does not report any pharmacogenomic effects or genetic variants. |
| PGx | Kearns_2003 | not_relevant | 0 | 0 | The study investigates developmental ontogeny of CYP3A4 in neonates and infants, not the effect of specific genetic variants or genotypes on pharmacokinetics. |
| popPK | Kempf_2014 | irrelevant | 0 | 0 | The study measures lower esophageal sphincter pressure (pharmacodynamics) rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of cisapride's effect on potassium channels, not a pharmacokinetic study. |
| popPK | Koutsoviti-Papadopoulou_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cisapride's effect on guinea pig gall bladder motility, reporting EC50/IC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Lee-Montiel_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions using isogenic hiPSCs and does not report pharmacogenomic effects of gene variants on cisapride PK/PD. |
| popPK | Lennox_2025 | irrelevant | 0 | 0 | Cisapride is used only as a positive control in an in vitro hERG assay for imetelstat, not as the subject of a pharmacokinetic study. |
| popPK | Linnik_1991 | irrelevant | 0 | 0 | The study is a pharmacological investigation of serotonergic mechanisms and receptor binding (Ki, EC50) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Lowry_2003 | not_relevant | 0 | 0 | The study evaluates cisapride as a CYP3A4 probe in healthy adults but does not report pharmacogenomic effects (gene variants) on its PK/PD parameters. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP3A4 inhibition and QT prolongation) but does not report pharmacogenomic effects of gene variants on cisapride PK or PD. |
| PGx | Mushiroda_2000 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (enzyme inhibition) rather than pharmacogenomic effects of gene variants on cisapride PK/PD. |
| popPK | Nolan_2006 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (QT/RT prolongation) and PK/PD modeling of repolarization, not the quantitative disposition parameters (CL, V, ka) of cisapride itself. |
| PGx | Paakkari_2002 | not_relevant | 0 | 0 | The paper discusses general cardiotoxicity and CYP3A4 interactions but does not report specific pharmacogenomic effects of gene variants on cisapride PK or PD parameters. |
| popPK | Qiu_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meranzin hydrate and ferulic acid, using cisapride only as a comparator for pharmacodynamic effects (gastric emptying/intestinal transit) without reporting cisapride PK parameters. |
| PGx | Simard_2001 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between simvastatin and cisapride, not a pharmacogenomic effect involving gene variants. |
| popPK | Taniyama_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms (5-HT receptors) in guinea pig ileum, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Thomas_1998 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cisapride-diltiazem) causing QT prolongation, not a pharmacogenomic effect based on a gene variant or genotype. |
| PGx | Walker_1999 | not_relevant | 0 | 0 | The paper reports on the risk of cardiac arrhythmias associated with cisapride use and drug interactions, but does not investigate the impact of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Webster_2001 | irrelevant | 2 | 0 | The study is a pharmacodynamic assessment of QT prolongation (MAPD) in dogs, reporting ED50 values rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for cisapride. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 13:41 UTC</sub>
