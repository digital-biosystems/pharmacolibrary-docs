<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;fentiazac&quot;}]"></div>

# fentiazac

- **generic name:** fentiazac
- **ATC codes:** `M01AB10`, `M02AA14`
- **DrugBank:** [DB13217](https://go.drugbank.com/drugs/DB13217) · **PubChem:** not captured
- **molar mass:** 329.8 g/mol (C17H12ClNO2S) — DrugBank
- **groups:** experimental

## About

Fentiazac is a non-steroidal anti-inflammatory drug developed for pain and inflammation of the musculoskeletal system, available as both oral and topical preparations. It is considered experimental and does not appear to be an approved medicine in major markets such as the European Union, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3742491](https://www.wikidata.org/wiki/Q3742491) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:49 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 14,850/473 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Houin_1993.pdf` | Houin G et al., Pharmacokinetic study of fentiazac and…, Arzneimittel-Forschung (1993) | popPK | 8 | not captured | [8447848](https://pubmed.ncbi.nlm.nih.gov/8447848) | The paper reports PK parameters for fentiazac in the elderly, providing specific values for Cmax and half-life, but lacks explicit numeric values for clearance and volume in the provided evidence. |

<sub>queue written 2026-10-07T00:49:26.180583+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cavrini_1983 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Houin_1993 | relevant | 8 | 3 | The paper reports PK parameters for fentiazac in the elderly, providing specific values for Cmax and half-life, but lacks explicit numeric values for clearance and volume in the provided evidence. |
| popPK | López_1982 | irrelevant | 0 | 0 | This is a clinical efficacy study for acute tendinitis and bursitis that reports only therapeutic outcomes and side effects, with no pharmacokinetic parameters or values for fentiazac. |
| popPK | Molina-López_1983 | irrelevant | 0 | 0 | The study is a clinical efficacy and tolerability comparison of dosing regimens, with no report of pharmacokinetic parameters. |
| popPK | Nagatomi_1984 | irrelevant | 0 | 0 | The paper studies the pharmacological (anti-inflammatory and ulcerogenic) activities of thiazole derivatives, not the pharmacokinetics of fentiazac. |
| popPK | Quattrini_1981 | irrelevant | 3 | 2 | The paper describes a pharmacokinetic study in humans, but the evidence provided in the abstract only contains qualitative descriptions and a ratio of AUCs (30:1), lacking specific quantitative parameter values (CL, V, t1/2, ka) required for extraction. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
