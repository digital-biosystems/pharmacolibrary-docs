<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;savolitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Savolitinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_savolitinib/Savolitinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# savolitinib

- **generic name:** savolitinib
- **ATC codes:** `L01EP03`
- **DrugBank:** [DB12048](https://go.drugbank.com/drugs/DB12048) · **PubChem:** [CID 68289010](https://pubchem.ncbi.nlm.nih.gov/compound/68289010)
- **molar mass:** 345.37 g/mol (C17H15N9) — DrugBank
- **groups:** investigational

## About

Savolitinib is a protein kinase inhibitor that targets the c-Met pathway and is being investigated for several types of cancer. The specific routes of administration are not detailed in the provided facts. It has received conditional approval for these indications in China.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27254463](https://www.wikidata.org/wiki/Q27254463), [Wikipedia](https://en.wikipedia.org/wiki/Savolitinib?oldid=1330499087) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| savolitinib | parent | 345.37 | C17H15N9 | DrugBank | [68289010](https://pubchem.ncbi.nlm.nih.gov/compound/68289010) | Jones_2023 |
| AZ5104 | metabolite | 485.592 | C27H31N7O2 | PubChem | [71496460](https://pubchem.ncbi.nlm.nih.gov/compound/71496460) | Jones_2023 |
| osimertinib | metabolite | 499.619 | C28H33N7O2 | PubChem | [71496458](https://pubchem.ncbi.nlm.nih.gov/compound/71496458) | Jones_2023 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_t_half_terminal</sub> | [Jones_2023_reference](drugs/drug_savolitinib/Savolitinib_Jones2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 (+1 cov.) | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2021_pMET](drugs/drug_savolitinib/pd_Jones_2021_pMET.md) | pMET ← savolitinib · direct sigmoid Emax (Hill) effect | — | Jones RDO et al., A pharmacokinetic-pharmacodynamic model…, British journal of pharmaco… (2021) | [10.1111/bph.15301](https://doi.org/10.1111/bph.15301) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Schalkwijk_2021_QTcF](drugs/drug_savolitinib/pd_Schalkwijk_2021_QTcF.md) | QTcF ← active moiety · direct linear effect | — | Schalkwijk S et al., Parent and Metabolite Concentration-QT…, The AAPS journal (2021) | [10.1208/s12248-021-00573-1](https://doi.org/10.1208/s12248-021-00573-1) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_TGI](drugs/drug_savolitinib/pd_Jones_2023_TGI.md) | Tumor Volume biomarker turnover ← pMET, pEGFR | — | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_pEGFR](drugs/drug_savolitinib/pd_Jones_2023_pEGFR.md) | pEGFR biomarker turnover ← osimertinib | — | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_pMET](drugs/drug_savolitinib/pd_Jones_2023_pMET.md) | pMET biomarker turnover ← savolitinib | — | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:27 | 0:19 | 0/1/0 | 5/0/0 | 0/0/0 | 6,481/2,640 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schalkwijk_2021.pdf` | Schalkwijk S et al., Parent and Metabolite Concentration-QT…, The AAPS journal (2021) | popPK | 5 | [10.1208/s12248-021-00573-1](https://doi.org/10.1208/s12248-021-00573-1) | [33733338](https://pubmed.ncbi.nlm.nih.gov/33733338) | The study reports exposure-response (QT modeling) parameters (EC50, Emax) and hERG potencies rather than standard PK disposition parameters like clearance (CL) or volume (V) for savolitinib. |

<sub>queue written 2026-11-24 03:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gavine_2015 | irrelevant | 0 | 0 | The study focuses on anti-tumor efficacy in PDX models and reports no population pharmacokinetic parameters (CL, V, etc.) for savolitinib. |
| PGx | Gavine_2015 | not_relevant | 0 | 0 | The paper is a preclinical study demonstrating efficacy in c-MET amplified tumor models but does not report pharmacogenomic effects of human genetic variants on the pharmacokinetics or pharmacodynamics of the drug. |
| popPK | Gu_2019 | relevant | 9 | 2 | The paper describes preclinical PK/PD modeling for savolitinib, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text, likely residing in the full text or supplementary figures. |
| PGx | Gu_2019 | not_relevant | 0 | 0 | The paper describes general preclinical PK/PD profiling in animals and humans without mentioning any genetic variants or pharmacogenomic effects. |
| popPK | Jones_2021 | relevant | 6 | 0 | The paper develops a population PK/PD model for savolitinib in mice, but the specific quantitative parameter values (CL, V, etc.) are not present in the extracted text. |
| PGx | Jones_2021 | not_relevant | 0 | 0 | The paper describes a PK/PD model for savolitinib in preclinical xenograft models but does not investigate or report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| PGx | Jones_2023 | not_relevant | 0 | 0 | The paper describes preclinical PK/PD in a mouse model and does not report pharmacogenomic effects (gene variants/genotypes) on savolitinib. |
| popPK | Schalkwijk_2021 | irrelevant | 5 | 2 | The study reports exposure-response (QT modeling) parameters (EC50, Emax) and hERG potencies rather than standard PK disposition parameters like clearance (CL) or volume (V) for savolitinib. |
| PGx | Schalkwijk_2021 | not_relevant | 0 | 0 | The paper describes exposure-response (PK/PD) modeling for QT prolongation but does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsavolitinib%5D&body=Drug%3A%20savolitinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_savolitinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 16:45 UTC</sub>
