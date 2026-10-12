<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;toripalimab&quot;}]"></div>

# toripalimab

- **generic name:** toripalimab
- **ATC codes:** `L01FF13`
- **DrugBank:** [DB15043](https://go.drugbank.com/drugs/DB15043) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Toripalimab is a PD-1 inhibitor monoclonal antibody used to treat cancers, including nasopharyngeal carcinoma and esophageal squamous cell carcinoma. It is approved and authorised in the European Union, with further uses still under investigation.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:21 | 2:42 | 0/1/0 | 0/0/1 | 0/0/0 | 82,844/3,378 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.769). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Li_2022_reference](drugs/drug_toripalimab/Toripalimab_Li2022_reference.md) | — | 2-compartment (no model) | 4 | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Li_2022_AEs_leading_to_study_drug_discontinuation](drugs/drug_toripalimab/pd_Li_2022_AEs_leading_to_study_drug_discontinuation.md) | AEs leading to study drug discontinuation ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Li_2022_ORR](drugs/drug_toripalimab/pd_Li_2022_ORR.md) | objective response rate ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Li_2022_PFS](drugs/drug_toripalimab/pd_Li_2022_PFS.md) | progression-free survival ← toripalimab · time-to-event model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Li_2022_grade_3_AEs](drugs/drug_toripalimab/pd_Li_2022_grade_3_AEs.md) | grade ≥ 3 adverse events (AEs) ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Li_2022_treatment_related_grade_3_AEs](drugs/drug_toripalimab/pd_Li_2022_treatment_related_grade_3_AEs.md) | treatment-related grade ≥ 3 AEs ← toripalimab · categorical (graded) response model | — | Li L et al., Flat dose regimen of toripalimab based…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1069818](https://doi.org/10.3389/fphar.2022.1069818) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2020 | irrelevant | 0 | 0 | The study is an immuno-PET imaging evaluation of a radiolabeled toripalimab probe in mice, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:18 UTC</sub>
