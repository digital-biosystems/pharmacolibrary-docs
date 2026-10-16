<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;tiratricol&quot;}]"></div>

# tiratricol

- **generic name:** tiratricol
- **ATC codes:** `D11AX08`, `H03AA04`
- **DrugBank:** [DB03604](https://go.drugbank.com/drugs/DB03604) · **PubChem:** [CID 5803](https://pubchem.ncbi.nlm.nih.gov/compound/5803)
- **molar mass:** 621.9323 g/mol (C14H9I3O4) — DrugBank
- **groups:** approved, investigational

## About

Tiratricol is a thyroid hormone preparation used for thyroid conditions such as thyrotoxicosis and thyroid cancer. It is approved and appears to be only narrowly available, with a single authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7809151](https://www.wikidata.org/wiki/Q7809151) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:30 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 8,541/318 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tiratricol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` inducer, `SLC10A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DHODH (inhibitor), THRA (target), THRB (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chen_2024 | not_relevant | 1 | 0 | The paper characterizes transporters that facilitate the uptake of TRIAC (a T3 analog) in cells, but it does not report pharmacogenomic effects of a specific gene variant on the PK or PD parameters of tiratricol. |
| popPK | Gutleb_2005 | irrelevant | 0 | 0 | The paper describes an in vitro bioassay for thyroid hormone receptor activity and does not contain pharmacokinetic data for tiratricol. |
| popPK | Ren_2023 | irrelevant | 0 | 0 | The study focuses on the antiviral mechanism of tiratricol in vitro and in vivo, reporting efficacy metrics (EC50, survival) rather than pharmacokinetic disposition parameters. |
| PGx | Smallridge_1989 | not_relevant | 0 | 0 | The paper studies thyroid hormone resistance and does not mention the drug tiratricol or its PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
