<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;ethotoin&quot;}]"></div>

# ethotoin

- **generic name:** ethotoin
- **ATC codes:** `N03AB01`
- **DrugBank:** [DB00754](https://go.drugbank.com/drugs/DB00754) · **PubChem:** [CID 3292](https://pubchem.ncbi.nlm.nih.gov/compound/3292)
- **molar mass:** 204.2252 g/mol (C11H12N2O2) — DrugBank
- **groups:** approved

## About

Ethotoin is a hydantoin anticonvulsant used to treat epilepsy, including visual epilepsy. It is an approved antiepileptic, though it is not widely used and is largely a niche option compared with other hydantoin drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4533122](https://www.wikidata.org/wiki/Q4533122) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ethotoin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: NR1I2 (activator), SCN5A (inhibitor), SERPINA7 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:52 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 51,516/617 | einfracz / qwen3.8-27b | 0 | 0/2 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hooper_1992.pdf` | Hooper WD et al., Enantioselective pharmacokinetics of et…, Chirality (1992) | popPK | 10 | [10.1002/chir.530040303](https://doi.org/10.1002/chir.530040303) | [1350205](https://pubmed.ncbi.nlm.nih.gov/1350205) | The paper reports quantitative PK parameters (half-life, AUC ratios) for ethotoin in humans, with specific numeric values for half-life provided in the text. |
| `Troupin_1979.pdf` | Troupin AS et al., Clinical pharmacology of mephenytoin an…, Annals of neurology (1979) | popPK | 7 | [10.1002/ana.410060506](https://doi.org/10.1002/ana.410060506) | [42344](https://pubmed.ncbi.nlm.nih.gov/42344) | Reports half-life and Tmax for ethotoin in humans, but lacks specific Clearance (CL) or Volume (V) values required for comprehensive population PK. |

<sub>queue written 2026-10-07T07:52:04.995328+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carter_1984 | irrelevant | 4 | 0 | The abstract mentions characterizing ethotoin pharmacokinetics in children and finding nonlinearity, but no quantitative parameter values (CL, V, t1/2) are provided in the evidence. |
| popPK | Hall_1987 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of mephenytoin metabolism where ethotoin is used only as a comparator/inhibitor, not as the subject drug for PK characterization. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper studies mephenytoin metabolism and discusses ethotoin only as an inhibitor, not as a drug for which a pharmacogenomic effect is reported. |
| popPK | Ouassaf_2026 | irrelevant | 0 | 0 | The paper is a computational AI framework for drug-drug interaction prediction and contains no original pharmacokinetic parameter measurements or numeric values for ethotoin. |
| PD | Ouassaf_2026 | not_relevant | 0 | 0 | The paper describes an AI-based classification framework for predicting drug-drug interactions and does not report any specific pharmacodynamic or exposure-response data, models, or numeric parameters for ethotoin. |
| popPK | Pressler_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of brivaracetam, not ethotoin. |
| PD | Pressler_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and safety of brivaracetam, not ethotoin, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Watson_1978 | irrelevant | 0 | 0 | The paper describes a gas chromatography method for analyzing drug concentrations in dosage forms and contains no pharmacokinetic parameters or disposition data for ethotoin. |
| PD | Watson_1978 | not_relevant | 0 | 0 | The paper describes a gas chromatography method for analyzing drug concentrations in dosage forms and contains no pharmacodynamic or exposure-response data. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | This is a review of computational approaches for ADMET prediction and does not contain specific pharmacokinetic data for ethotoin. |
| PD | Wu_2020 | not_relevant | 0 | 0 | The paper is a review of computational approaches (ADMET, PBPK, molecular modeling) and does not report specific pharmacodynamic data or exposure-response relationships for ethotoin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
