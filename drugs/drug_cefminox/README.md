<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefminox&quot;}]"></div>

# cefminox

- **generic name:** cefminox
- **ATC codes:** `J01DC12`
- **DrugBank:** [DB09062](https://go.drugbank.com/drugs/DB09062) · **PubChem:** not captured
- **molar mass:** 519.57 g/mol (C16H21N7O7S3) — DrugBank
- **groups:** experimental

## About

Cefminox is a second-generation cephalosporin antibiotic used to treat bacterial infections. It is not an approved medicine and remains an experimental drug, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057239](https://www.wikidata.org/wiki/Q5057239) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:11 | 0:21 | 0/0/0 | 1/0/0 | 0/0/0 | 21,459/373 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Hirabayashi_1985_Clinical_efficacy_excellent_good_poor](drugs/drug_cefminox/pd_Hirabayashi_1985_Clinical_efficacy_excellent_good_poor.md) | Clinical efficacy (excellent/good/poor) ← cefminox · stimulation effect | — | Hirabayashi K et al., [Basic and clinical studies on cefminox…, The Japanese journal of ant… (1985) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Itoh_1985.pdf` | Itoh K et al., [Basic and clinical studies on cefminox…, The Japanese journal of ant… (1985) | popPK | 6 | not captured | [3930793](https://pubmed.ncbi.nlm.nih.gov/3930793) | The study models cefminox in pelvic exudate (human) and reports concentration-time data points and AUC, but lacks explicit standard disposition parameters like clearance (CL) or volume (V) in the text. |

<sub>queue written 2026-10-07T11:11:31.080967+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Itoh_1985 | irrelevant | 6 | 2 | The study models cefminox in pelvic exudate (human) and reports concentration-time data points and AUC, but lacks explicit standard disposition parameters like clearance (CL) or volume (V) in the text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
