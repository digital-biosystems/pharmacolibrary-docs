<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;nedosiran&quot;}]"></div>

# nedosiran

- **generic name:** nedosiran
- **ATC codes:** `A16AX25`
- **DrugBank:** [DB17635](https://go.drugbank.com/drugs/DB17635) · **PubChem:** none
- **groups:** approved, investigational

## About

Nedosiran is a small interfering RNA medication used to treat primary hyperoxaluria. It is an approved prescription drug, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123420884](https://www.wikidata.org/wiki/Q123420884) and the WHO ATC classification; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | — | L/h | 0.969 | patients with primary hyperoxaluria type 1 (PH1) and healthy volunteers | &gt;=148 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zhang_2025_reference](drugs/drug_nedosiran/Nedosiran_Zhang2025_reference.md) |
| CL | CL/F | 6.1 | L/h | 6.10 L/h | patients with primary hyperoxaluria type 1 (PH1) and healthy volunteers | &gt;=148 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zhang_2025_reference](drugs/drug_nedosiran/Nedosiran_Zhang2025_reference.md) |
| V | V | — | L | 0.174 | patients with primary hyperoxaluria type 1 (PH1) and healthy volunteers | &gt;=148 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zhang_2025_reference](drugs/drug_nedosiran/Nedosiran_Zhang2025_reference.md) |
| V | V1/F | 148 | L | 148 L | patients with primary hyperoxaluria type 1 (PH1) and healthy volunteers | &gt;=148 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zhang_2025_reference](drugs/drug_nedosiran/Nedosiran_Zhang2025_reference.md) |
| ka | kabs | 0.212 | 1/h | 0.212 1/h | patients with primary hyperoxaluria type 1 (PH1) and healthy volunteers | &gt;=148 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zhang_2025_reference](drugs/drug_nedosiran/Nedosiran_Zhang2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q66, Q22, Q61 — no SI value to buil…</sub> | [Zhang_2025_reference](drugs/drug_nedosiran/Nedosiran_Zhang2025_reference.md) | — | 3-compartment (no model) | 10 | Zhang S et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01540-1](https://doi.org/10.1007/s40262-025-01540-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hoppe_2022_Uox](drugs/drug_nedosiran/pd_Hoppe_2022_Uox.md) | 24-hour urinary oxalate excretion ← nedosiran · indirect response — drug inhibits the production of 24-hour urinary oxalate excretion | — | Hoppe B et al., Safety, pharmacodynamics, and exposure-…, Kidney international (2022) | [10.1016/j.kint.2021.08.015](https://doi.org/10.1016/j.kint.2021.08.015) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhang_2024_24_h_U_ox](drugs/drug_nedosiran/pd_Zhang_2024_24_h_U_ox.md) | 24-h urinary oxalate ← nedosiran · indirect response — drug inhibits the production of 24-h urinary oxalate | — | Zhang S et al., Nedosiran population pharmacokinetic an…, British journal of clinical… (2024) | [10.1111/bcp.16194](https://doi.org/10.1111/bcp.16194) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhang_2025_Uox_Cr](drugs/drug_nedosiran/pd_Zhang_2025_Uox_Cr.md) | spot urine oxalate-to-creatinine ratio ← nedosiran · indirect response — drug inhibits the production of spot urine oxalate-to-creatinine ratio | — | Zhang S et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01540-1](https://doi.org/10.1007/s40262-025-01540-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nedosiran).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: LDHA (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:54 | 1:00 | 1/0/0 | 3/0/0 | 0/0/0 | 89,074/2,822 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Amrite_2023.pdf` | Amrite A et al., Safety, Pharmacokinetics, and Exposure-…, Clinical pharmacology in dr… (2023) | pd | 5 | [10.1002/cpdd.1320](https://doi.org/10.1002/cpdd.1320) | [37605486](https://www.ncbi.nlm.nih.gov/pubmed/37605486) | metadata signals extractable PD data (Exposure-Response) |

<sub>queue written 2026-10-07 17:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amrite_2023 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PGx | Gupta_2022 | not_relevant | 0 | 0 | The paper mentions nedosiran as a therapy in PH1 but does not report any pharmacogenomic effect of gene variants on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hoppe_2022 | relevant | 7 | 2 | The study develops a population PK model for nedosiran and reports qualitative PK metrics (half-life range, linear PK), but specific numeric parameter values (CL, V, Q, theta) are referenced in Supplementary Table S6 which is not provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnedosiran%5D&body=Drug%3A%20nedosiran%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nedosiran/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 17:53 UTC</sub>
