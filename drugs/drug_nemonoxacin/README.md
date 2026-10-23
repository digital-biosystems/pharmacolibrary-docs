<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;nemonoxacin&quot;}]"></div>

# nemonoxacin

- **generic name:** nemonoxacin
- **ATC codes:** `J01MB08`
- **DrugBank:** [DB06600](https://go.drugbank.com/drugs/DB06600) · **PubChem:** not captured
- **molar mass:** 371.437 g/mol (C20H25N3O4) — DrugBank
- **groups:** investigational

## About

Nemonoxacin is a quinolone antibacterial developed as an antibiotic for bacterial infections. It is still investigational and has not been approved for general clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15425793](https://www.wikidata.org/wiki/Q15425793) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nemonoxacin | parent | 371.437 | C20H25N3O4 | DrugBank | — | Chen_2023 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0 | L/h | 0 L/h | Chinese patients with community-acquired pneumonia and healthy subjects | &gt;=100 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2023_bias](drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_bias.md) |
| CL | CL | — | L/h | 10.3 | Chinese patients with community-acquired pneumonia and healthy subjects | &gt;=100 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2023_estimate_based_on_original_dataset](drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_estimate_based_on_original_dataset.md) |
| ka | kabs | 6 | 1/h | 6 1/h | Chinese patients with community-acquired pneumonia and healthy subjects | &gt;=100 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2023_bias](drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_bias.md) |
| ka | kabs | — | 1/h | 2.2 | Chinese patients with community-acquired pneumonia and healthy subjects | &gt;=100 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chen_2023_estimate_based_on_original_dataset](drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_estimate_based_on_original_dataset.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: F, Vd left at base-class defaults</sub> | [Chen_2023_bias](drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_bias.md) | held back | 1-compartment, oral | 6 | Chen Y et al., Integrative population pharmacokinetic/…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.912962](https://doi.org/10.3389/fphar.2023.912962) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q64, Q30, Q77, Q49, Q83 — no S…</sub> | [↳ estimate_based_on_original_dataset](drugs/drug_nemonoxacin/Nemonoxacin_Chen2023_estimate_based_on_original_dataset.md) | — | 1-compartment (no model) | 6 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">mouse</span> | [Li_2021_Log10CFU](drugs/drug_nemonoxacin/pd_Li_2021_Log10CFU.md) | log10 change in CFU per gram lung ← nemonoxacin · direct sigmoid Emax (Hill) effect | — | Li X et al., Pharmacokinetics and Pharmacodynamics o…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.658558](https://doi.org/10.3389/fphar.2021.658558) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:39 | 2:56 | 0/0/2 | 1/0/0 | 0/0/0 | 103,184/6,500 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kang_2019.pdf` | Kang Y et al., Population Pharmacokinetics Study of Ne…, Clinical therapeutics (2019) | popPK | 10 | [10.1016/j.clinthera.2019.01.015](https://doi.org/10.1016/j.clinthera.2019.01.015) | [30819510](https://pubmed.ncbi.nlm.nih.gov/30819510) | The study reports a population PK model for nemonoxacin in humans, but the specific numeric values for CL, V, and Q are not explicitly listed in the provided text (only AUC is given), implying detailed parameters are in the full text or tables not included here. |

<sub>queue written 2026-10-07T12:37:17.470218+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2022 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study focusing on antibacterial efficacy and resistance, not a pharmacokinetic study reporting disposition parameters for nemonoxacin. |
| popPK | Kang_2019 | relevant | 10 | 4 | The study reports a population PK model for nemonoxacin in humans, but the specific numeric values for CL, V, and Q are not explicitly listed in the provided text (only AUC is given), implying detailed parameters are in the full text or tables not included here. |
| popPK | Yuan_2022 | irrelevant | 0 | 0 | The paper is a safety systematic review that discusses pharmacokinetics only to support dose adjustment decisions, without reporting specific quantitative PK parameter values (CL, V, etc.). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 12:37 UTC</sub>
