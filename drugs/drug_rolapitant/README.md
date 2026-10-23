<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;rolapitant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rolapitant_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/Rolapitant_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# rolapitant

- **generic name:** rolapitant
- **ATC codes:** `A04AD14`
- **DrugBank:** [DB09291](https://go.drugbank.com/drugs/DB09291) · **PubChem:** [CID 10311306](https://pubchem.ncbi.nlm.nih.gov/compound/10311306)
- **molar mass:** 500.485 g/mol (C25H26F6N2O2) — DrugBank
- **groups:** approved, investigational

## About

Rolapitant is an antiemetic used to prevent nausea and vomiting associated with cancer treatment. It has been approved as a medicine, though its marketing authorisation in the European Union has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76415423](https://www.wikidata.org/wiki/Q76415423) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rolapitant | parent | 500.485 | C25H26F6N2O2 | DrugBank | [10311306](https://pubchem.ncbi.nlm.nih.gov/compound/10311306) | Li_2026, Wang_2019 |
| fosrolapitant | metabolite | 654.497 | C27H29F6N2O8P | PubChem | [163871173](https://pubchem.ncbi.nlm.nih.gov/compound/163871173) | Li_2026 |
| M19 | metabolite | 516.482 | C25H26F6N2O3 | PubChem | [135390916](https://pubchem.ncbi.nlm.nih.gov/compound/135390916) | Wang_2019 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| t½ | t1/2z | 0.42 | h | 0.42 hour | Chinese subjects with impaired or normal liver function | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2026_fosrolapitant](drugs/drug_rolapitant/Rolapitant_Li2026_fosrolapitant.md) |
| t½ | t1/2z | 264.8 | h | 264.80 hour | Chinese subjects with impaired or normal liver function | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2026_rolapitant](drugs/drug_rolapitant/Rolapitant_Li2026_rolapitant.md) |
| t½ | t1/2z | 308.4 | h | 308.36 hour | Chinese subjects with impaired or normal liver function | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2026_healthy_control](drugs/drug_rolapitant/Rolapitant_Li2026_healthy_control.md) |
| t½ | t1/2z | 708.8 | h | 708.81 hour | Chinese subjects with impaired or normal liver function | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2026_moderate_hepatic_impairment](drugs/drug_rolapitant/Rolapitant_Li2026_moderate_hepatic_impairment.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub> | [Li_2026_fosrolapitant](drugs/drug_rolapitant/Rolapitant_Li2026_fosrolapitant.md) | held back | 1-compartment, oral | 6 | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ healthy_control](drugs/drug_rolapitant/Rolapitant_Li2026_healthy_control.md) | — | parent + metabolite (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ moderate_hepatic_impairment](drugs/drug_rolapitant/Rolapitant_Li2026_moderate_hepatic_impairment.md) | — | parent + metabolite (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ rolapitant](drugs/drug_rolapitant/Rolapitant_Li2026_rolapitant.md) | — | parent + metabolite (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub> | [Wang_2019_reference](drugs/drug_rolapitant/Rolapitant_Wang2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Wang X et al., Population Pharmacokinetics of Rolapita…, Clinical pharmacology in dr… (2019) | [10.1002/cpdd.733](https://doi.org/10.1002/cpdd.733) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rolapitant).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TACR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:44 | 8:54 | 4/1/0 | 0/0/0 | 0/0/0 | 117,590/29,684 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 0  ·  needs review 4  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2019.pdf` | Wang X et al., Population Pharmacokinetics of Rolapita…, Clinical pharmacology in dr… (2019) | popPK | 10 | [10.1002/cpdd.733](https://doi.org/10.1002/cpdd.733) | [31418538](https://pubmed.ncbi.nlm.nih.gov/31418538) | The paper reports a population pharmacokinetic model for rolapitant with specific numeric values for clearance, volume of distribution, and intercompartmental clearance provided in the text. |
| `Yu_2017.pdf` | Yu J et al., What Can Be Learned from Recent New Dru…, Drug metabolism and disposi… (2017) | pgx | 8 | [10.1124/dmd.116.073411](https://doi.org/10.1124/dmd.116.073411) | [27821435](https://www.ncbi.nlm.nih.gov/pubmed/27821435) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-04 14:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Barbour_2017 | not_relevant | 0 | 0 | The paper analyzes safety outcomes (adverse events) regarding drug-drug interactions with CYP2D6/BCRP substrates, but does not report pharmacokinetic or pharmacodynamic parameters of rolapitant itself, nor does it stratify by patient genotype. |
| PGx | Davis_2016 | not_relevant | 0 | 0 | The text is a general review of antiemetic therapies and mentions rolapitant's pharmacokinetic properties (half-life, CYP-3A4) but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Deb_2023 | irrelevant | 0 | 0 | The study is an in silico simulation of drug-drug interactions and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for rolapitant. |
| PD | Deb_2023 | not_relevant | 0 | 0 | The paper is an in silico simulation of drug-drug interactions (DDI) focusing on CYP enzyme kinetics (IC50, Ki) and PK parameters (AUC ratios), not pharmacodynamic (PD) exposure-response or dose-response relationships for rolapitant. |
| PGx | Deb_2023 | not_relevant | 0 | 0 | The paper reports in silico drug-drug interaction simulations, not pharmacogenomic effects of gene variants on rolapitant PK/PD. |
| PGx | Glass_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP2D6 inhibition by rolapitant (drug-drug interaction) but does not report any pharmacogenomic effects (gene variants) on rolapitant's PK or PD parameters. |
| PGx | Heo_2017 | not_relevant | 0 | 0 | The paper is a clinical review of rolapitant's efficacy and safety, focusing on its lack of CYP3A4 interactions, but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Rapoport_2017 | not_relevant | 0 | 0 | The paper reports clinical efficacy subanalyses by cancer type and age, but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Rapoport_2017_2 | not_relevant | 0 | 0 | The paper is a review of delayed CINV management and mentions rolapitant's lack of CYP3A4 interaction, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Rapoport_2017_3 | not_relevant | 0 | 0 | The paper is a clinical review of rolapitant's efficacy and safety, with no mention of genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Rapoport_2017_4 | not_relevant | 0 | 0 | The paper is a general review of NK-1 receptor antagonists and does not report any pharmacogenomic effects or gene variant associations for rolapitant. |
| PGx | Syed_2015 | not_relevant | 0 | 0 | The paper is a drug approval summary that discusses general pharmacokinetic properties (half-life, CYP3A4 interaction) but does not report any pharmacogenomic effects or genotype-specific PK/PD parameters. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The study evaluates the effect of rolapitant on the pharmacokinetics of probe drugs (drug-drug interaction) in healthy subjects, not the effect of a gene variant on rolapitant's pharmacokinetics or pharmacodynamics. |
| PGx | Wang_2019_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole, rifampin, midazolam) rather than pharmacogenomic effects based on genetic variants. |
| PGx | Wang_2019_3 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (CYP inhibition) in healthy subjects without stratifying by genotype or reporting pharmacogenomic effects. |
| PGx | Yu_2017 | not_relevant | 0 | 0 | The paper is a systematic review of 2015 NDAs and mentions rolapitant only as a perpetrator of CYP2D6 inhibition, without reporting any pharmacogenomic effects on rolapitant's own PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brolapitant%5D&body=Drug%3A%20rolapitant%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rolapitant/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-04 14:36 UTC</sub>
