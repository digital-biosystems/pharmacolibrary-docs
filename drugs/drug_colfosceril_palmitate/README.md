<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;colfosceril palmitate&quot;}]"></div>

# colfosceril palmitate

- **generic name:** colfosceril palmitate
- **ATC codes:** `R07AA01`
- **DrugBank:** [DB09114](https://go.drugbank.com/drugs/DB09114) · **PubChem:** [CID 452110](https://pubchem.ncbi.nlm.nih.gov/compound/452110)
- **molar mass:** 734.0389 g/mol (C40H80NO8P) — DrugBank
- **groups:** approved, withdrawn

## About

Colfosceril palmitate is a lung surfactant that was used as a pulmonary surfactant, for example in respiratory conditions treated with such agents. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5144764](https://www.wikidata.org/wiki/Q5144764) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Berry_1994_alveolar_arterial_oxygen_gradient](drugs/drug_colfosceril_palmitate/pd_Berry_1994_alveolar_arterial_oxygen_gradient.md) | alveolar-arterial oxygen gradient biomarker turnover ← colfosceril_palmitate | — | Berry DD et al., Comparison of the effect of three doses…, The Journal of pediatrics (1994) | [10.1016/s0022-3476(94)70323-x](https://doi.org/10.1016/s0022-3476(94)70323-x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=colfosceril_palmitate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:41 | 0:20 | 0/0/0 | 1/0/0 | 0/0/0 | 16,266/542 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bahadue_2012 | irrelevant | 0 | 0 | This is a clinical review regarding treatment timing and clinical outcomes (mortality, BPD), not a pharmacokinetic study, and does not report PK parameters for colfosceril palmitate. |
| popPK | Berry_1994 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy (oxygen gradient) of a synthetic surfactant (Exosurf, which contains colfosceril palmitate) but does not report pharmacokinetic parameters. |
| popPK | Dechant_1991 | irrelevant | 0 | 0 | The paper is a clinical review of therapeutic efficacy and tolerability, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for colfosceril palmitate. |
| popPK | Yost_2000 | irrelevant | 0 | 0 | This is a clinical trial review focusing on efficacy outcomes (mortality, pneumothorax) of surfactant treatment, containing no pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
