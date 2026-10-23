<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;alpelisib&quot;}]"></div>

# alpelisib

- **generic name:** alpelisib
- **ATC codes:** `L01EM03`, `L01XE`
- **DrugBank:** [DB12015](https://go.drugbank.com/drugs/DB12015) · **PubChem:** [CID 56649450](https://pubchem.ncbi.nlm.nih.gov/compound/56649450)
- **molar mass:** 441.47 g/mol (C19H22F3N5O2S) — DrugBank
- **groups:** approved, investigational

## About

Alpelisib is a cancer medicine used to treat breast cancer. It is an approved drug authorised in the European Union, where it is also being studied for certain genetic growth disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27074391](https://www.wikidata.org/wiki/Q27074391) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:30 | 0:44 | 0/0/0 | 0/0/0 | 0/0/0 | 31,862/2,501 | openai / gpt-6-luna | 6 | 0/1 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 96 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gajewska_2020.pdf` | Gajewska M et al., Physiologically Based Pharmacokinetic M…, The AAPS journal (2020) | popPK | 9 | [10.1208/s12248-020-00511-7](https://doi.org/10.1208/s12248-020-00511-7) | [33070288](https://pubmed.ncbi.nlm.nih.gov/33070288) | The human alpelisib PBPK/popPK model is relevant, but numeric CL/V estimates are not shown in the provided evidence. |

<sub>queue written 2026-10-06T21:30:28.052719+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gajewska_2020 | relevant | 9 | 1 | The human alpelisib PBPK/popPK model is relevant, but numeric CL/V estimates are not shown in the provided evidence. |
| popPK | Marbury_2023 | relevant | 9 | 2 | This is a human alpelisib PK study, but numeric CL/F and Vz/F values are absent from the supplied evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
