<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;bimekizumab&quot;}]"></div>

# bimekizumab

- **generic name:** bimekizumab
- **ATC codes:** `L04AC21`
- **DrugBank:** [DB12917](https://go.drugbank.com/drugs/DB12917) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Bimekizumab is a monoclonal antibody used to treat psoriasis. It is an approved interleukin inhibitor authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q60785566](https://www.wikidata.org/wiki/Q60785566) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:59 | 0:10 | 0/0/0 | 0/1/0 | 0/0/0 | 17,927/665 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Liu_2026_PASI_75](drugs/drug_bimekizumab/pd_Liu_2026_PASI_75.md) | PASI 75 ← bimekizumab · direct Emax (saturable) effect | — | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Liu_2026_PASI_90](drugs/drug_bimekizumab/pd_Liu_2026_PASI_90.md) | PASI 90 ← bimekizumab · direct Emax (saturable) effect | — | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bimekizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL17A (antibody), IL17F (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Liu_2026 | irrelevant | 1 | 0 | The paper is a model-based meta-analysis of clinical efficacy (exposure-response) that does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for bimekizumab, but rather uses PK parameters extracted from other sources to predict clinical outcomes. |
| popPK | Oliver_2022 | irrelevant | 3 | 2 | The study is primarily a clinical efficacy and transcriptomic analysis; while it mentions a PK/PD model, it reports only qualitative concentration trends and half-life, with explicit statement that model parameter estimates are in the unprovided combined dataset or supplementary material. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | This is a review of anti-drug antibody (ADA) incidence and immunogenicity, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for bimekizumab. |
| popPK | Ungan_2025 | irrelevant | 0 | 0 | The study is an in-vitro biophysical and structural analysis (crystallography, SV-AUC, MALS) of immune complexes formed by bimekizumab and IL-17A, containing no in-vivo pharmacokinetic parameters such as clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
