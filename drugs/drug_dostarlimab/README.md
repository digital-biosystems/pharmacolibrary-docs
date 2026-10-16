<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dostarlimab&quot;}]"></div>

# dostarlimab

- **generic name:** dostarlimab
- **ATC codes:** `L01FF07`
- **DrugBank:** [DB15627](https://go.drugbank.com/drugs/DB15627) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Dostarlimab is a monoclonal antibody drug used to treat endometrial cancer. It is an approved PD-1 inhibitor and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q85757472](https://www.wikidata.org/wiki/Q85757472) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:19 | 2:26 | 0/2/0 | 0/0/1 | 0/0/0 | 116,963/7,227 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Kuchimanchi_2025_reference](drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference.md) | — | 3-compartment (no model) | 7 (+3 cov.) | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Melhem_2022_reference](drugs/drug_dostarlimab/Dostarlimab_Melhem2022_reference.md) | — | 3-compartment (no model) | 5 (+3 cov.) | Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022) | [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Kuchimanchi_2025_DOR](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_DOR.md) | duration of response ← dostarlimab · time-to-event model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Kuchimanchi_2025_PFS](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_PFS.md) | progression-free survival ← dostarlimab · time-to-event model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Kuchimanchi_2025_arthralgia](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_arthralgia.md) | arthralgia ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Kuchimanchi_2025_diarrhoea](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_diarrhoea.md) | diarrhoea ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Kuchimanchi_2025_fatigue](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_fatigue.md) | fatigue ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Kuchimanchi_2025_nausea](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_nausea.md) | nausea ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Kuchimanchi_2025_rash](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_rash.md) | rash ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dostarlimab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PDCD1 (antibody), PDCD1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kuchimanchi_2023 | irrelevant | 3 | 0 | The study is a concentration-QT analysis focused on cardiac safety endpoints (QTcF) rather than the determination of standard pharmacokinetic disposition parameters (CL, V, Q) or compartmental modeling. |
| popPK | Shang_2022 | relevant | 4 | 0 | This is a systematic review that includes one dostarlimab PPK study (ref 37), but the specific numeric parameter values for dostarlimab are not present in the provided text or tables (only ranges for all anti-PD-1 mAbs or values for other drugs like nivolumab are listed), likely residing in the unprovided supplementary materials or figures. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:17 UTC</sub>
