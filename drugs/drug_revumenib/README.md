<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;revumenib&quot;}]"></div>

# revumenib

- **generic name:** revumenib
- **ATC codes:** `L01XX87`
- **DrugBank:** [DB18515](https://go.drugbank.com/drugs/DB18515) · **PubChem:** not captured
- **molar mass:** 630.82 g/mol (C32H47FN6O4S) — DrugBank
- **groups:** approved, investigational

## About

It is an approved drug, mainly used in specialist cancer care, and is also being studied for other uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:52 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 10,586/455 | einfracz / qwen3.8-27b | 4 | 3/1 | 3/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=revumenib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` inhibitor/substrate, `SLC22A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` substrate, `SLC22A6` substrate, `SLC22A8` substrate, `SLC47A1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MEN1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arellano_2025 | not_relevant | 0 | 0 | The paper reports clinical efficacy of revumenib in NPM1-mutated AML but does not report how a gene variant affects a specific PK or PD parameter. |
| PGx | Hou_2026 | not_relevant | 0 | 0 | The paper investigates NPM1c biology and gene expression but does not mention revumenib or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Issa_2026 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes for a drug combination but contains no data on pharmacokinetic parameters or genetic variants affecting drug disposition. |
| PGx | Ma_2026 | not_relevant | 0 | 0 | The text is a general review of menin inhibitors in AML focusing on mechanisms and clinical pharmacology, but it does not report pharmacogenomic effects on the PK or PD of revumenib. |
| PGx | Ray_2025 | not_relevant | 0 | 0 | The paper is a review of treatment approaches for KMT2A-r B-ALL and mentions revumenib only as an approved agent, without reporting any pharmacogenomic data or PK/PD parameter changes driven by gene variants. |
| PGx | Shimamoto_2026 | not_relevant | 0 | 0 | The paper investigates mechanisms of action and predictive biomarkers for efficacy (PD) but does not report how genetic variants alter the pharmacokinetics (PK) or pharmacodynamics (PD) of revumenib. |
| PGx | Simio_2026 | not_relevant | 2 | 0 | The text is a general review of menin inhibitors mentioning CYP3A4 metabolism and clinical outcomes but does not report specific pharmacogenomic effects of gene variants on PK/PD parameters for revumenib. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | unknown_2025_2 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
