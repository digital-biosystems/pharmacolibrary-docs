<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;cyclopenthiazide&quot;}]"></div>

# cyclopenthiazide

- **generic name:** cyclopenthiazide
- **ATC codes:** `C03AA07`, `C03AB07`, `C03EA07`
- **DrugBank:** [DB13532](https://go.drugbank.com/drugs/DB13532) · **PubChem:** [CID 2904](https://pubchem.ncbi.nlm.nih.gov/compound/2904)
- **molar mass:** 379.87 g/mol (C13H18ClN3O4S2) — DrugBank
- **groups:** approved

## About

Cyclopenthiazide is a thiazide diuretic used to treat high blood pressure (arterial hypertension) and to help the body remove excess fluid. It is an approved medicine, but it is not widely used today and appears mainly in a few national markets rather than across the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3676519](https://www.wikidata.org/wiki/Q3676519) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:19 | 1:04 | 0/0/0 | 0/0/0 | 0/0/0 | 33,258/533 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Krum_1992.pdf` | Krum H et al., Steady-state pharmacokinetics and pharm…, Journal of cardiovascular p… (1992) | pd | 5 | [10.1097/00005344-199209000-00017](https://doi.org/10.1097/00005344-199209000-00017) | [1279292](https://www.ncbi.nlm.nih.gov/pubmed/1279292) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T15:18:48.963015+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anavekar_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clonidine, and cyclopenthiazide is only mentioned as a comparator for blood pressure effects without any PK parameters reported. |
| popPK | Eriksson_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thiazide effects on sodium transport in amphibian and fish bladders, not a pharmacokinetic study of cyclopenthiazide disposition. |
| PD | Eriksson_1987 | not_relevant | 2 | 1 | The paper reports only qualitative observations that cyclopenthiazide reduced short-circuit current at high concentrations (&gt;0.1 mM) and explicitly states that dose-response curves were difficult to obtain, providing no numeric PD parameters or extractable concentration-effect data. |
| popPK | Garrett_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sulfisoxazole, not cyclopenthiazide. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a proteome-wide Mendelian randomization study on lymphoma targets and does not involve cyclopenthiazide or pharmacokinetic parameters. |
| PD | Guo_2025 | not_relevant | 0 | 0 | The paper focuses on Mendelian randomization for lymphoma targets and does not mention cyclopenthiazide or report any pharmacodynamic parameters for it. |
| popPK | Iwaki_1985 | irrelevant | 0 | 0 | The study investigates the renal handling of uric acid and electrolytes in rats treated with thiazide diuretics, not the pharmacokinetic parameters (CL, V, t1/2) of cyclopenthiazide itself. |
| popPK | Krum_1992 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Krum_1992 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of cilazapril, not cyclopenthiazide, and does not report PD parameters for cyclopenthiazide. |
| popPK | Ni_2024 | irrelevant | 0 | 0 | The paper describes a computational method for drug target identification using transcriptomics and does not contain any pharmacokinetic data for cyclopenthiazide. |
| PD | Ni_2024 | not_relevant | 0 | 0 | The paper describes a machine learning method (PertKGE) for identifying compound-protein interactions from transcriptomics and does not report any pharmacodynamic or exposure-response data for cyclopenthiazide. |
| popPK | Sorkin_1987 | irrelevant | 0 | 0 | The paper is a review of nicardipine, and cyclopenthiazide is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Sorkin_1987 | not_relevant | 0 | 0 | The paper is a review of nicardipine and only mentions cyclopenthiazide as a comparator drug without providing any pharmacodynamic data or parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
