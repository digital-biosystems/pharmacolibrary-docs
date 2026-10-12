<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;naproxcinod&quot;}]"></div>

# naproxcinod

- **generic name:** naproxcinod
- **ATC codes:** `M01AE18`
- **DrugBank:** [DB06682](https://go.drugbank.com/drugs/DB06682) · **PubChem:** not captured
- **molar mass:** 347.367 g/mol (C18H21NO6) — DrugBank
- **groups:** investigational

## About

Naproxcinod, a nitric oxide–donating derivative of naproxen, was developed as a non-steroidal anti-inflammatory drug for treating inflammatory and rheumatic conditions. It remained investigational and was never marketed; its marketing application in the European Union was withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3335996](https://www.wikidata.org/wiki/Q3335996) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:09 | 2:17 | 0/0/0 | 0/1/0 | 0/0/0 | 29,778/954 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Björnsson_2011_PI](drugs/drug_naproxcinod/pd_Bj_rnsson_2011_PI.md) | pain intensity ← naproxen · direct sigmoid Emax (Hill) effect | — | Björnsson MA et al., Modelling of pain intensity and informa…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03924.x](https://doi.org/10.1111/j.1365-2125.2011.03924.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=naproxcinod).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PTGS1 (modulator), PTGS2 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Björnsson_2011 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic modeling of pain intensity and dropout, modeling naproxen (the active metabolite) rather than providing quantitative population pharmacokinetic parameters for naproxcinod itself. |
| popPK | Pedder_2019 | irrelevant | 0 | 0 | The paper is a statistical methods study on model-based network meta-analysis (MBNMA) for pharmacodynamic time-course models (pain in osteoarthritis) and does not report pharmacokinetic parameters for naproxcinod. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
