<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;reproterol&quot;}]"></div>

# reproterol

- **generic name:** reproterol
- **ATC codes:** `R03AC15`, `R03AK05`, `R03CC14`
- **DrugBank:** [DB12846](https://go.drugbank.com/drugs/DB12846) · **PubChem:** [CID 25654](https://pubchem.ncbi.nlm.nih.gov/compound/25654)
- **molar mass:** 389.412 g/mol (C18H23N5O5) — DrugBank
- **groups:** investigational

## About

Reproterol is a selective beta-2 adrenergic agonist that acts as a bronchodilator for obstructive airway diseases such as asthma. It is considered investigational in DrugBank and has no European Union marketing authorisation, so it is not widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1292703](https://www.wikidata.org/wiki/Q1292703) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:18 | 0:12 | 0/0/0 | 1/0/0 | 0/0/0 | 12,705/540 | ollama / glm-5.3-flash | 2 | 1/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Foster_1991_sGaw](drugs/drug_reproterol/pd_Foster_1991_sGaw.md) | specific airways conductance (log sGaw) increase against background bronchoconstriction ← reproterol · direct linear effect | — | Foster RW et al., A method for bioassay of potency and ef…, British journal of clinical… (1991) | [10.1111/j.1365-2125.1991.tb05561.x](https://doi.org/10.1111/j.1365-2125.1991.tb05561.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Patchett_1985 | irrelevant | 0 | 0 | This is a pharmacodynamic dose-response study of bronchodilation (FEV1/PEFR) with no PK parameters (CL, V, ka, half-life, or PK model) for reproterol. |
| popPK | Susanna_1990 | irrelevant | 0 | 0 | Reproterol is only a co-administered bronchoprotective agent in a pharmacodynamic adenosine challenge study; no PK parameters or numeric disposition values are reported. |
| popPK | Zimmer_2000 | irrelevant | 0 | 0 | Isolated working rat heart pharmacodynamic/toxicity study of beta-agonists; no PK disposition parameters for reproterol are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
