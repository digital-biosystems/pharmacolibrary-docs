<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;talampicillin&quot;}]"></div>

# talampicillin

- **generic name:** talampicillin
- **ATC codes:** `J01CA15`
- **DrugBank:** [DB13814](https://go.drugbank.com/drugs/DB13814) · **PubChem:** not captured
- **molar mass:** 481.52 g/mol (C24H23N3O6S) — DrugBank
- **groups:** experimental

## About

Talampicillin is an antibiotic belonging to the penicillins with extended spectrum, a class of beta-lactam antibacterials used against bacterial infections. It is currently listed only as an experimental drug, and no marketing authorisation information is available, so its present use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3980350](https://www.wikidata.org/wiki/Q3980350) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Al-Egaily_1978_recurrence](drugs/drug_talampicillin/pd_Al_Egaily_1978_recurrence.md) | recurrence ← talampicillin · model not identified | — | Al-Egaily S et al., Talampicillin and probenecid compared w…, The British journal of vene… (1978) | [10.1136/sti.54.4.243](https://doi.org/10.1136/sti.54.4.243) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Mohanty_1982_Success_rate](drugs/drug_talampicillin/pd_Mohanty_1982_Success_rate.md) | Success rate · model not identified | — | Mohanty KC et al., Treatment of uncomplicated gonorrhoea i…, The British journal of vene… (1982) | [10.1136/sti.58.3.180](https://doi.org/10.1136/sti.58.3.180) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:46 | 0:20 | 0/0/0 | 1/1/0 | 0/0/0 | 20,877/570 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tachibana_1978.pdf` | Tachibana A et al., [Talampicillin hydrochloride: Compariso…, The Japanese journal of ant… (1978) | popPK | 9 | not captured | [246947](https://pubmed.ncbi.nlm.nih.gov/246947) | The study reports pharmacokinetic parameters (AUC, max plasma level ratios, urinary excretion %) for talampicillin in humans, but specific absolute numeric values for clearance or volume are not explicitly listed in the provided abstract. |

<sub>queue written 2026-10-07T10:46:41.365708+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Tachibana_1978 | relevant | 9 | 3 | The study reports pharmacokinetic parameters (AUC, max plasma level ratios, urinary excretion %) for talampicillin in humans, but specific absolute numeric values for clearance or volume are not explicitly listed in the provided abstract. |
| popPK | Yamane_1986 | irrelevant | 2 | 0 | The study reports pharmacokinetic parameters (two and three compartment models) for talampicillin, but the evidence provided contains only a summary of the methodology and no numeric parameter values (CL, V, ka, etc.). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
