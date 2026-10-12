<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;azapropazone&quot;}]"></div>

# azapropazone

- **generic name:** azapropazone
- **ATC codes:** `M01AX04`
- **DrugBank:** [DB07402](https://go.drugbank.com/drugs/DB07402) · **PubChem:** [CID 46937068](https://pubchem.ncbi.nlm.nih.gov/compound/46937068)
- **molar mass:** 298.3397 g/mol (C16H18N4O2) — DrugBank
- **groups:** approved, withdrawn

## About

Azapropazone is a non-steroidal anti-inflammatory drug that was used to treat inflammatory and rheumatic conditions. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q368222](https://www.wikidata.org/wiki/Q368222) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:39 | 0:06 | 0/0/0 | 0/1/0 | 0/0/0 | 10,476/641 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Pallapies_1994_TXB2](drugs/drug_azapropazone/pd_Pallapies_1994_TXB2.md) | platelet TXB2 generation ← azapropazone · direct sigmoid Emax (Hill) effect | — | Pallapies D et al., Effects on platelet functions and pharm…, British journal of clinical… (1994) | [10.1111/j.1365-2125.1994.tb04286.x](https://doi.org/10.1111/j.1365-2125.1994.tb04286.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=azapropazone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |

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
| popPK | Brouwers_1994 | irrelevant | 1 | 0 | The paper is a qualitative review of NSAID drug-drug interactions that mentions azapropazone only in the context of being prone to interactions, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Higgens_1984 | irrelevant | 0 | 0 | The study focuses on the uricosuric pharmacodynamic effects of azapropazone (plasma and urinary uric acid levels) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Pallapies_1994 | irrelevant | 1 | 0 | The study focuses on platelet function pharmacodynamics (pharmacology) and reports PK only in the context of correlation (EC50), without providing specific disposition parameters like clearance, volume, or half-life for the drug itself in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
