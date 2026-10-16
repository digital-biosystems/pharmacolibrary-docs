<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;tiracizine&quot;}]"></div>

# tiracizine

- **generic name:** tiracizine
- **ATC codes:** `C01EB11`
- **DrugBank:** [DB13635](https://go.drugbank.com/drugs/DB13635) · **PubChem:** not captured
- **molar mass:** 367.449 g/mol (C21H25N3O3) — DrugBank
- **groups:** experimental

## About

Tiracizine is a chemical compound that has been described as an antiarrhythmic agent and psychotropic drug, classified under other cardiac preparations. It appears only as an experimental drug, with no authorisation records, so its current use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6586877](https://www.wikidata.org/wiki/Q6586877) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:44 | 0:12 | 0/0/0 | 0/0/0 | 0/0/0 | 883/71 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 5 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berndt_1995.pdf` | Berndt A et al., Day-night variations in the renal excre…, Chronobiology international (1995) | popPK | 6 | [10.3109/07420529509064508](https://doi.org/10.3109/07420529509064508) | [8653799](https://pubmed.ncbi.nlm.nih.gov/8653799) | Reports urinary recovery (Ae) and trends in trough serum levels for tiracizine in humans, but lacks standard PK parameters like clearance (CL) or volume of distribution (V). |
| `Berndt_1994.pdf` | Berndt A et al., Dose dependent tiracizine disposition i…, European journal of drug me… (1994) | pd | 5 | [10.1007/BF03188863](https://doi.org/10.1007/BF03188863) | [7737238](https://www.ncbi.nlm.nih.gov/pubmed/7737238) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-14T23:44:45.984325+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berndt_1994 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Berndt_1995 | relevant | 6 | 2 | Reports urinary recovery (Ae) and trends in trough serum levels for tiracizine in humans, but lacks standard PK parameters like clearance (CL) or volume of distribution (V). |
| popPK | Berndt_1995_2 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
