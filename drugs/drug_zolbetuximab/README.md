<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;zolbetuximab&quot;}]"></div>

# zolbetuximab

- **generic name:** zolbetuximab
- **ATC codes:** `L01FX31`
- **DrugBank:** [DB15118](https://go.drugbank.com/drugs/DB15118) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Zolbetuximab is a monoclonal antibody used to treat stomach and esophageal cancers. It is an authorised medicine in the European Union and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17107865](https://www.wikidata.org/wiki/Q17107865) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:22 | 3:10 | 0/0/3 | 0/0/1 | 0/0/0 | 75,691/4,426 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Yamada_2025_2_reference](drugs/drug_zolbetuximab/Zolbetuximab_Yamada2025v2_reference.md) | — | 1-compartment (no model) | 1 | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Yang_2025_first_dose_800_mg_m2](drugs/drug_zolbetuximab/Zolbetuximab_Yang2025_first_dose_800_mg_m2.md) | — | 1-compartment (no model) | 6 | Yang J et al., Clinical Pharmacology Profile of the Cl…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01552-x](https://doi.org/10.1007/s40262-025-01552-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Yang_2025_steady_state_600_mg_m2_q3w](drugs/drug_zolbetuximab/Zolbetuximab_Yang2025_steady_state_600_mg_m2_q3w.md) | — | 1-compartment (no model) | 6 | Yang J et al., Clinical Pharmacology Profile of the Cl…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01552-x](https://doi.org/10.1007/s40262-025-01552-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Yamada_2025_2_GITX](drugs/drug_zolbetuximab/pd_Yamada_2025_2_GITX.md) | combined gastrointestinal toxicity (nausea, vomiting, and abdominal pain) grade ≥ 3 ← zolbetuximab · categorical (graded) response model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Yamada_2025_2_IRR](drugs/drug_zolbetuximab/pd_Yamada_2025_2_IRR.md) | infusion-related reactions ← zolbetuximab · categorical (graded) response model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Yamada_2025_2_OS](drugs/drug_zolbetuximab/pd_Yamada_2025_2_OS.md) | overall survival ← zolbetuximab · time-to-event model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Yamada_2025_2_PFS](drugs/drug_zolbetuximab/pd_Yamada_2025_2_PFS.md) | progression-free survival ← zolbetuximab · time-to-event model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Yamada_2025_2_nausea_and_vomiting_grade_3](drugs/drug_zolbetuximab/pd_Yamada_2025_2_nausea_and_vomiting_grade_3.md) | nausea and vomiting grade ≥ 3 ← zolbetuximab · categorical (graded) response model | — | Yamada A et al., Population PK and Exposure-Response Ana…, Clinical and translational… (2025) | [10.1111/cts.70280](https://doi.org/10.1111/cts.70280) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=zolbetuximab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CLDN18 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lordick_2021 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (quality of life) from the FAST trial and does not contain any pharmacokinetic parameters or models for zolbetuximab. |
| popPK | Yamada_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of 5-FU and oxaliplatin to assess drug-drug interactions, not the pharmacokinetic parameters of zolbetuximab itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:20 UTC</sub>
