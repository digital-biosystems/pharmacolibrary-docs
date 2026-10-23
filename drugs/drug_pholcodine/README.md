<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;pholcodine&quot;}]"></div>

# pholcodine

- **generic name:** pholcodine
- **ATC codes:** `R05DA08`
- **DrugBank:** [DB09209](https://go.drugbank.com/drugs/DB09209) · **PubChem:** [CID 5311356](https://pubchem.ncbi.nlm.nih.gov/compound/5311356)
- **molar mass:** 398.4953 g/mol (C23H30N2O4) — DrugBank
- **groups:** approved, illicit

## About

Pholcodine is an opium-derivative cough suppressant that also has pain-relieving properties. It is an approved medicine, used as a cough suppressant in respiratory preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3124290](https://www.wikidata.org/wiki/Q3124290) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Elmansi_2022_Fluorescence](drugs/drug_pholcodine/pd_Elmansi_2022_Fluorescence.md) | fluorescence intensity biomarker turnover ← pholcodine | — | Elmansi H et al., Determination of pholcodine alone or in…, Scientific reports (2022) | [10.1038/s41598-022-13194-1](https://doi.org/10.1038/s41598-022-13194-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:01 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 10,438/323 | einfracz / qwen3.8-27b | 2 | 0/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Findlay_1986.pdf` | Findlay JW et al., Comparative disposition of codeine and…, British journal of clinical… (1986) | popPK | 7 | [10.1111/j.1365-2125.1986.tb02881.x](https://doi.org/10.1111/j.1365-2125.1986.tb02881.x) | [3741728](https://pubmed.ncbi.nlm.nih.gov/3741728) | The paper describes a PK study of pholcodine with specific compartmental models and half-lives, but the evidence provided does not list the numeric values for clearance (CL), volume (V), or intercompartmental clearance (Q). |

<sub>queue written 2026-10-07T21:01:48.033139+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Findlay_1986 | relevant | 7 | 0 | The paper describes a PK study of pholcodine with specific compartmental models and half-lives, but the evidence provided does not list the numeric values for clearance (CL), volume (V), or intercompartmental clearance (Q). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
