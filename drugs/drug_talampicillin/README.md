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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:46 | 0:20 | 0/0/0 | 1/1/0 | 0/0/0 | 20,877/570 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Al-Egaily_1978_recurrence](drugs/drug_talampicillin/pd_Al_Egaily_1978_recurrence.md) | recurrence ← talampicillin · model not identified | — | Al-Egaily S et al., Talampicillin and probenecid compared w…, The British journal of vene… (1978) | [10.1136/sti.54.4.243](https://doi.org/10.1136/sti.54.4.243) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | [Mohanty_1982_Success_rate](drugs/drug_talampicillin/pd_Mohanty_1982_Success_rate.md) | Success rate · model not identified | — | Mohanty KC et al., Treatment of uncomplicated gonorrhoea i…, The British journal of vene… (1982) | [10.1136/sti.58.3.180](https://doi.org/10.1136/sti.58.3.180) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
