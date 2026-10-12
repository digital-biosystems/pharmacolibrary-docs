<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfalene&quot;}]"></div>

# sulfalene

- **generic name:** sulfalene
- **ATC codes:** `J01ED02`, `P01BF04`
- **DrugBank:** [DB00664](https://go.drugbank.com/drugs/DB00664) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Sulfalene is a long-acting sulfonamide antibiotic that was used as an anti-infective, including for urinary infections and malaria. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6577302](https://www.wikidata.org/wiki/Q6577302) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:55 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 6,300/284 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geĭtman_1982.pdf` | Geĭtman IIa et al., [Sulfalene kinetics in the blood and ce…, Farmakologiia i toksikologi… (1982) | popPK | 5 | not captured | [7128796](https://pubmed.ncbi.nlm.nih.gov/7128796) | The study is a pharmacokinetic investigation of sulfalene in human patients (arachnoiditis) describing kinetic behavior (absorption, elimination, CSF penetration), but the provided evidence contains only qualitative descriptions without any specific numeric parameter values (e.g., CL, V, t1/2). |

<sub>queue written 2026-10-07T10:55:20.773675+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barkakaty_1990 | irrelevant | 0 | 0 | This is a clinical efficacy study for malaria treatment, not a pharmacokinetic study, and it reports no disposition parameters such as clearance, volume, or half-life. |
| popPK | Geĭtman_1982 | relevant | 5 | 0 | The study is a pharmacokinetic investigation of sulfalene in human patients (arachnoiditis) describing kinetic behavior (absorption, elimination, CSF penetration), but the provided evidence contains only qualitative descriptions without any specific numeric parameter values (e.g., CL, V, t1/2). |
| popPK | Krüger-Thiemer_1969 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
