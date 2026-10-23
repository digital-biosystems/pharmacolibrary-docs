<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;marstacimab&quot;}]"></div>

# marstacimab

- **generic name:** marstacimab
- **ATC codes:** `B02BX11`
- **DrugBank:** [DB17725](https://go.drugbank.com/drugs/DB17725) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Marstacimab, a monoclonal antibody, is used to treat hemophilia A and hemophilia B. It is authorised in the European Union as a systemic hemostatic medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q130351881](https://www.wikidata.org/wiki/Q130351881) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.0188 | L/h | 0.0188 L/h | adolescent and adult participants with hemophilia and healthy volunteers | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Nayak_2026_reference](drugs/drug_marstacimab/Marstacimab_Nayak2026_reference.md) |
| V | V | 8.6 | L | 8.6 L | adolescent and adult participants with hemophilia and healthy volunteers | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Nayak_2026_reference](drugs/drug_marstacimab/Marstacimab_Nayak2026_reference.md) |
| V | V1 | 3.61 | L | 3.61 L | adolescent and adult participants with hemophilia and healthy volunteers | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Nayak_2026_reference](drugs/drug_marstacimab/Marstacimab_Nayak2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Nayak_2026 · V</text><circle cx="517.1" cy="30.0" r="4" fill="#ef6c00"><title>Nayak_2026 · V: 8.6 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Nayak_2026 · V1</text><circle cx="385.1" cy="46.0" r="4" fill="#ef6c00"><title>Nayak_2026 · V1: 3.61 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q32 — no SI value to build from</sub> | [Nayak_2026_reference](drugs/drug_marstacimab/Marstacimab_Nayak2026_reference.md) | — | 3-compartment (no model) | 7 | Nayak S et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01695-5](https://doi.org/10.1007/s40262-026-01695-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 19:07 | 8:21 | 0/0/1 | 0/0/0 | 0/0/0 | 120,728/24,884 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/3 | 5/1 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jin_2026 | irrelevant | 0 | 0 |  |
| popPK | Mahlangu_2023 | irrelevant | 0 | 0 |  |
| popPK | Mahlangu_2025_2 | irrelevant | 0 | 0 |  |
| popPK | Ozelo_2026 | irrelevant | 0 | 0 |  |
| popPK | Peraza_2025 | irrelevant | 0 | 0 |  |
| popPK | Sun_2023 | irrelevant | 0 | 0 |  |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 19:00 UTC</sub>
