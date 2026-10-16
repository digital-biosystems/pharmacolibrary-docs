<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;methantheline&quot;}]"></div>

# methantheline

- **generic name:** methantheline
- **ATC codes:** `A03AB07`
- **DrugBank:** [DB00940](https://go.drugbank.com/drugs/DB00940) · **PubChem:** [CID 4097](https://pubchem.ncbi.nlm.nih.gov/compound/4097)
- **molar mass:** 340.436 g/mol (C21H26NO3) — DrugBank
- **groups:** approved

## About

Methantheline is a synthetic anticholinergic (muscarinic antagonist) used for functional gastrointestinal disorders. It is an approved drug, though it does not appear to have centralised European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6823610](https://www.wikidata.org/wiki/Q6823610) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:57 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 1,772/132 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=methantheline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (unknown), CHRM3 (unknown), CHRM4 (unknown), CHRM5 (target), HRH2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Müller_2012.pdf` | Müller C et al., Relative bioavailability and pharmacody…, European journal of clinica… (2012) | pd | 5 | [10.1007/s00228-012-1286-6](https://doi.org/10.1007/s00228-012-1286-6) | [22527350](https://www.ncbi.nlm.nih.gov/pubmed/22527350) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-10-04T12:57:27.954644+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | DEBRAY_1954 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | DEBRAY_1954 | not_relevant | 0 | 0 | The paper describes the use of methantheline as a pharmacodynamic agent to induce esophageal spasm for radiological diagnosis of hiatal hernias, but it does not report any quantitative exposure-response or dose-response analysis, nor does it provide numeric PD parameters such as Emax or EC50. |
| popPK | Hallek_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition and reactivation, not a pharmacokinetic study reporting disposition parameters for methantheline. |
| popPK | Hough_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of H2-receptor antagonism, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Hough_1981 | not_relevant | 2 | 1 | The text describes qualitative inhibition and competitive antagonism but does not provide numeric PD parameters (e.g., IC50, Ki) or extractable concentration-effect curves for methantheline. |
| popPK | Müller_2012 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
