<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;brolucizumab&quot;}]"></div>

# brolucizumab

- **generic name:** brolucizumab
- **ATC codes:** `S01LA06`
- **DrugBank:** [DB14864](https://go.drugbank.com/drugs/DB14864) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Brolucizumab is an antineovascularisation eye medicine (a monoclonal antibody) used to treat wet macular degeneration. It is an approved drug and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25326694](https://www.wikidata.org/wiki/Q25326694) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:17 | 0:46 | 0/2/0 | 0/0/0 | 0/0/0 | 51,272/3,287 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nagaoka_2025_aflibercept](drugs/drug_brolucizumab/Brolucizumab_Nagaoka2025_aflibercept.md) | — | 1-compartment (no model) | 0 | Nagaoka K et al., Comparative Pharmacokinetic Analysis of…, International journal of mo… (2025) | [10.3390/ijms26020556](https://doi.org/10.3390/ijms26020556) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nagaoka_2025_brolucizumab](drugs/drug_brolucizumab/Brolucizumab_Nagaoka2025_brolucizumab.md) | — | 1-compartment (no model) | 0 | Nagaoka K et al., Comparative Pharmacokinetic Analysis of…, International journal of mo… (2025) | [10.3390/ijms26020556](https://doi.org/10.3390/ijms26020556) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=brolucizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: VEGFA (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agostini_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy analysis comparing visual acuity outcomes (ETDRS letters) rather than a pharmacokinetic study reporting disposition parameters. |
| popPK | Mulyukov_2026 | relevant | 3 | 2 | The paper uses a population PK/PD model and QSP simulations for brolucizumab in humans, but the primary focus is on dosing regimen efficacy (BCVA/CSFT) rather than reporting detailed quantitative PK parameter estimates (like CL or V) which are referenced as being from a separate analysis or supplementary material. |
| popPK | Sil_2024 | irrelevant | 0 | 0 | The study analyzes OCT radiomic features to predict treatment response and does not report any pharmacokinetic parameters for brolucizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:16 UTC</sub>
