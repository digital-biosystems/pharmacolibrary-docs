<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;satraplatin&quot;}]"></div>

# satraplatin

- **generic name:** satraplatin
- **ATC codes:** `L01XA04`
- **DrugBank:** [DB04996](https://go.drugbank.com/drugs/DB04996) · **PubChem:** [CID 123974](https://pubchem.ncbi.nlm.nih.gov/compound/123974)
- **molar mass:** 500.283 g/mol (C10H22Cl2N2O4Pt) — DrugBank
- **groups:** investigational

## About

Satraplatin is a platinum-based anticancer drug that was investigated for treating prostate cancer. It remains investigational; its marketing application in the European Union was withdrawn, so it is not approved for use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2226212](https://www.wikidata.org/wiki/Q2226212) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:57 | 0:38 | 0/0/0 | 0/1/0 | 0/0/0 | 4,596/463 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Perry_2009_EC50](drugs/drug_satraplatin/pd_Perry_2009_EC50.md) | EC(50) ← satraplatin · direct Emax (saturable) effect | — | Perry J et al., The relative activity of cisplatin, oxa…, Cancer chemotherapy and pha… (2009) | [10.1007/s00280-009-0944-6](https://doi.org/10.1007/s00280-009-0944-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=satraplatin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DNA (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akshintala_2015 | not_relevant | 2 | 2 | The paper evaluates DNA repair gene expression but does not report a pharmacogenomic association with PK/PD parameters; it correlates renal function (creatinine clearance) with PK. |
| popPK | Perry_2009 | irrelevant | 0 | 0 | This is an in vitro mechanistic study assessing drug efficacy and resistance, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for satraplatin. |
| PGx | Vaishampayan_2014 | not_relevant | 0 | 0 | The study reports a pharmacogenomic association (ERCC-1) with clinical outcomes (progression-free survival), but it does not report effects on pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
