<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ceritinib&quot;}]"></div>

# ceritinib

- **generic name:** ceritinib
- **ATC codes:** `L01ED02`, `L01XE`
- **DrugBank:** [DB09063](https://go.drugbank.com/drugs/DB09063) · **PubChem:** [CID 57379345](https://pubchem.ncbi.nlm.nih.gov/compound/57379345)
- **molar mass:** 558.135 g/mol (C28H36ClN5O3S) — DrugBank
- **groups:** approved, investigational

## About

Ceritinib is an ALK inhibitor used to treat non-small-cell lung cancer. It is an approved medicine, authorised in the European Union for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21011233](https://www.wikidata.org/wiki/Q21011233) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Tan_2026_cell_viability](drugs/drug_ceritinib/pd_Tan_2026_cell_viability.md) | cell viability ← ceritinib and ibuprofen · inhibition effect | — | Tan S et al., Ceritinib-ibuprofen synergistic hepatot…, Toxicology (2026) | [10.1016/j.tox.2025.154321](https://doi.org/10.1016/j.tox.2025.154321) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:54 | 0:46 | 0/0/0 | 0/1/0 | 0/0/0 | 38,931/2,477 | openai / gpt-6-luna | 7 | 0/2 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 98 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hong_2017.pdf` | Hong Y et al., Population Pharmacokinetics of Ceritini…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.849](https://doi.org/10.1002/jcph.849) | [27922734](https://pubmed.ncbi.nlm.nih.gov/27922734) | Human population-PK model is described, but numeric PK parameter estimates are not shown. |

<sub>queue written 2026-10-06T22:53:46.390730+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2021 | irrelevant | 0 | 0 | This is a human lorlatinib population-PK study; ceritinib is mentioned only as prior therapy, so no ceritinib parameters are reported. |
| popPK | Gupta_2021 | irrelevant | 0 | 0 | The study reports brigatinib pharmacokinetics; ceritinib is mentioned only as a prior ALK inhibitor, with no ceritinib parameter values. |
| popPK | Hong_2017 | relevant | 10 | 1 | Human population-PK model is described, but numeric PK parameter estimates are not shown. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
