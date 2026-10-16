<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10B&quot;,&quot;href&quot;:&quot;atc/V10B.md&quot;},{&quot;label&quot;:&quot;rhenium (186Re) etidronic acid&quot;}]"></div>

# rhenium (186Re) etidronic acid

- **generic name:** rhenium (186Re) etidronic acid
- **ATC codes:** `V10BX03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Rhenium etidronic acid is a radiopharmaceutical used to relieve pain from cancer that has spread to the bone. It is classified among bone-seeking pain palliation radiopharmaceuticals, used mainly in nuclear medicine for this purpose.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:48 | 0:54 | 0/0/0 | 0/0/0 | 0/0/0 | 10,127/810 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Buffa_2003.pdf` | Buffa FM et al., A model-based method for the prediction…, European journal of nuclear… (2003) | popPK | 5 | [10.1007/s00259-003-1197-y](https://doi.org/10.1007/s00259-003-1197-y) | [12761596](https://pubmed.ncbi.nlm.nih.gov/12761596) | The study reports pharmacokinetic parameters (whole-body retention, absorbed dose) for 186Re-HEDP in humans, but the specific numeric PK parameter values (clearances, volumes, half-lives) are not present in the provided text. |

<sub>queue written 2026-10-14T19:48:06.582587+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buffa_2003 | relevant | 5 | 1 | The study reports pharmacokinetic parameters (whole-body retention, absorbed dose) for 186Re-HEDP in humans, but the specific numeric PK parameter values (clearances, volumes, half-lives) are not present in the provided text. |
| popPK | De_1997 | irrelevant | 2 | 0 | The abstract mentions pharmacokinetics but provides no quantitative parameters, and the drug is identified as HEDP (hydroxyethylidene diphosphonate) rather than the target etidronic acid. |
| popPK | Ketring_1987 | irrelevant | 1 | 0 | The study examines 186Re-HEDP (technetium analog), not rhenium_186re_etidronic_acid, and contains no quantitative PK parameters. |
| popPK | Kothari_2001 | irrelevant | 0 | 0 | The paper reports on a different chemical entity (186Re-CTMP) and is not a population pharmacokinetic study for rhenium_186re_etidronic_acid. |
| popPK | Ogawa_2005 | irrelevant | 0 | 0 | The study focuses on a different drug, rhenium-186-MAG3-HBP, using 186Re-HEDP only as a comparator, and reports qualitative biodistribution data rather than quantitative PK parameters for the subject drug rhenium_186re_etidronic_acid. |
| popPK | Uehara_2007 | irrelevant | 3 | 0 | The study describes qualitative pharmacokinetic comparisons (blood clearance, bone accumulation) for a specific 186Re-BP (CpTR-Gly-APD) but does not report quantitative compartmental PK parameters (CL, V, t1/2) or specific numeric values in the provided text. |
| popPK | Weininger_1984 | irrelevant | 3 | 1 | The paper describes preliminary in vivo biodistribution and imaging studies without reporting quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | de_1992 | irrelevant | 0 | 0 | The study investigates 186Re-HEDP (hydroxyethylene diphosphonate), not the target drug rhenium-186-re_etidronic_acid (186Re-ETID). |
| popPK | van_1997 | irrelevant | 1 | 0 | The paper studies 186Re-HEDP (a different drug) rather than 186Re-etidronic acid, and reports radiation doses rather than specific PK parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
