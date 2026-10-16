<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;pegloticase&quot;}]"></div>

# pegloticase

- **generic name:** pegloticase
- **ATC codes:** `M04AX02`
- **DrugBank:** [DB09208](https://go.drugbank.com/drugs/DB09208) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pegloticase is an enzyme-based medicine used to treat gout. It is approved and used for chronic gout that does not respond to standard therapy, mainly in the United States; a product was withdrawn in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7160794](https://www.wikidata.org/wiki/Q7160794) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:25 | 0:01 | 0/0/0 | 0/1/0 | 0/0/0 | 3,128/279 | einfracz / qwen3.8-27b | 7 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Yue_2008_2_urate](drugs/drug_pegloticase/pd_Yue_2008_2_urate.md) | uric acid ← pegloticase · direct Emax (saturable) effect | — | Yue CS et al., Population pharmacokinetic and pharmaco…, Journal of clinical pharmac… (2008) | [10.1177/0091270008317589](https://doi.org/10.1177/0091270008317589) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pegloticase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: Uric acid (metabolizer), Uric acid (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yue_2008_2.pdf` | Yue CS et al., Population pharmacokinetic and pharmaco…, Journal of clinical pharmac… (2008) | popPK | 10 | [10.1177/0091270008317589](https://doi.org/10.1177/0091270008317589) | [18420531](https://pubmed.ncbi.nlm.nih.gov/18420531) | The paper describes a population PK/PD model for pegloticase but provides no numeric parameter values (CL, V, etc.) in the extracted evidence. |

<sub>queue written 2026-10-07T03:25:46.429241+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Yue_2008_2 | relevant | 10 | 0 | The paper describes a population PK/PD model for pegloticase but provides no numeric parameter values (CL, V, etc.) in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
