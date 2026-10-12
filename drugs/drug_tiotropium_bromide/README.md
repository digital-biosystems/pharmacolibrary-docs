<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;tiotropium bromide&quot;}]"></div>

# tiotropium bromide

- **generic name:** tiotropium bromide
- **ATC codes:** `R03AL06`, `R03AL10`, `R03BB04`
- **DrugBank:** [DB01409](https://go.drugbank.com/drugs/DB01409) · **PubChem:** [CID 5487427](https://pubchem.ncbi.nlm.nih.gov/compound/5487427)
- **molar mass:** 392.512 g/mol (C19H22NO4S2) — DrugBank
- **groups:** approved, investigational

## About

Tiotropium bromide is an inhaled anticholinergic bronchodilator used for obstructive airway and other lung diseases. It is an approved medicine and is widely used as a maintenance inhalation treatment for breathing disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424316](https://www.wikidata.org/wiki/Q424316) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:09 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 39,510/501 | ollama / glm-5.3-flash | 5 | 0/1 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Singh_2018.pdf` | Singh D et al., The pharmacokinetics, pharmacodynamics…, British journal of clinical… (2018) | popPK | 5 | [10.1111/bcp.13645](https://doi.org/10.1111/bcp.13645) | [29790581](https://pubmed.ncbi.nlm.nih.gov/29790581) | A human PK study of tiotropium (PUR0200 vs HandiHaler) but the abstract gives no numeric PK parameters (Cmax, AUC, CL, t½), which likely appear in tables/figures not provided. |

<sub>queue written 2026-10-07T15:09:01.917703+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calverley_2016 | irrelevant | 0 | 0 | This is a bronchodilator efficacy (FEV1/FVC) comparison of tiotropium devices; no PK disposition parameters (CL, V, ka, half-life, population-PK model) are reported, only a mention that PK profiles were similar. |
| popPK | Keam_2004 | irrelevant | 2 | 2 | A narrative review of tiotropium's clinical efficacy with only scattered descriptive PK values (Cmax, t½, bioavailability) and no compartmental/population-PK parameters. |
| popPK | Maesen_1995 | irrelevant | 2 | 0 | This is a pharmacodynamic (FEV1) dose-response study in COPD patients with no PK disposition parameters reported. |
| popPK | Singh_2018 | relevant | 5 | 2 | A human PK study of tiotropium (PUR0200 vs HandiHaler) but the abstract gives no numeric PK parameters (Cmax, AUC, CL, t½), which likely appear in tables/figures not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
