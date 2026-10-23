<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;bemarituzumab&quot;}]"></div>

# bemarituzumab

- **generic name:** bemarituzumab
- **ATC codes:** `L01FX39`
- **DrugBank:** [DB16105](https://go.drugbank.com/drugs/DB16105) · **PubChem:** not captured
- **groups:** investigational

## About

Bemarituzumab is an investigational monoclonal antibody being studied as an anticancer treatment. It is not yet approved and remains in clinical development.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.01379 | L/h | 0.331 L/day | phase 1 patients with solid tumors, including gastric and gastroesophageal junction adenocarcinoma | 75 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Xiang_2020_reference](drugs/drug_bemarituzumab/Bemarituzumab_Xiang2020_reference.md) |
| CL | CL | — | L/h | 4.03 µg/day | patients from phase 1 to phase 2 trials | 173 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Xiang_2021_reference](drugs/drug_bemarituzumab/Bemarituzumab_Xiang2021_reference.md) |
| V | V1 | 3.38 | L | 3.38 L | patients from phase 1 to phase 2 trials | 173 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Xiang_2021_reference](drugs/drug_bemarituzumab/Bemarituzumab_Xiang2021_reference.md) |
| V | V1 | 3.43 | L | 3.43 L | phase 1 patients with solid tumors, including gastric and gastroesophageal junction adenocarcinoma | 75 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Xiang_2020_reference](drugs/drug_bemarituzumab/Bemarituzumab_Xiang2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Xiang_2021 · V1</text><circle cx="375.1" cy="30.0" r="4" fill="#ef6c00"><title>Xiang_2021 · V1: 3.38 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Xiang_2020 · V1</text><circle cx="377.4" cy="46.0" r="4" fill="#78909c"><title>Xiang_2020 · V1: 3.43 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Xiang_2021_reference](drugs/drug_bemarituzumab/Bemarituzumab_Xiang2021_reference.md) | — | 2-compartment (no model) | 4 | Xiang H et al., Covariate effects and population pharma…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04333-y](https://doi.org/10.1007/s00280-021-04333-y) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Xiang_2020_reference](drugs/drug_bemarituzumab/Bemarituzumab_Xiang2020_reference.md) | — | 2-compartment (no model) | 4 | Xiang H et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04139-4](https://doi.org/10.1007/s00280-020-04139-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:11 | 3:54 | 2/0/0 | 0/0/0 | 0/0/0 | 44,880/26,624 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:08 UTC</sub>
