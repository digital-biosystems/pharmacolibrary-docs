<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;diphemanil&quot;}]"></div>

# diphemanil

- **generic name:** diphemanil
- **ATC codes:** `A03AB15`, `A03CA08`
- **DrugBank:** [DB13720](https://go.drugbank.com/drugs/DB13720) · **PubChem:** not captured
- **molar mass:** 278.418 g/mol (C20H24N) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Diphemanil is a synthetic anticholinergic that was used to treat functional gastrointestinal disorders such as peptic ulcer disease, and also asthma. It has been withdrawn and is no longer in human use, though it was once also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27165329](https://www.wikidata.org/wiki/Q27165329) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:26 | 0:37 | 0/0/0 | 0/0/0 | 0/0/0 | 23,199/353 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=diphemanil).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (modulator), CHRM3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chéron_1994.pdf` | Chéron G et al., [Pharmacokinetics of diphemanil methyls…, Archives de pediatrie : org… (1994) | popPK | 9 | not captured | [8087216](https://pubmed.ncbi.nlm.nih.gov/8087216) | The study reports quantitative pharmacokinetic parameters (half-life, renal clearance, Tmax) for diphemanil methylsulfate in infants, with specific numeric values provided in the text. |
| `Vidal_1992.pdf` | Vidal AM et al., Pharmacokinetics of diphemanil methylsu…, European journal of clinica… (1992) | popPK | 8 | [10.1007/BF00265939](https://doi.org/10.1007/BF00265939) | [1623915](https://pubmed.ncbi.nlm.nih.gov/1623915) | The study reports quantitative PK parameters (tmax, half-life, urinary recovery) for diphemanil in humans, but lacks specific values for clearance (CL) or volume of distribution (V). |
| `Vidal_1993.pdf` | Vidal AM et al., Pharmacokinetics of diphemanil methylsu…, European journal of clinica… (1993) | popPK | 8 | [10.1007/BF00315356](https://doi.org/10.1007/BF00315356) | [8405036](https://pubmed.ncbi.nlm.nih.gov/8405036) | The study reports pharmacokinetic parameters for diphemanil in infants, but only the mean half-life (8.6 h) is explicitly provided in the text, while other quantitative parameters like clearance and volume are not listed. |

<sub>queue written 2026-10-04T12:25:43.768986+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guérois_1997 | irrelevant | 0 | 0 | The paper is a clinical case report regarding adverse cardiac effects (heart block) in premature infants and does not report any pharmacokinetic parameters for diphemanil. |
| PD | Guérois_1997 | not_relevant | 1 | 0 | The paper is a case report describing a clinical observation (temporal association between feeding withdrawal and heart block) without providing any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Pariente-Khayat_1996 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Vidal_1993 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for diphemanil in infants, but only the mean half-life (8.6 h) is explicitly provided in the text, while other quantitative parameters like clearance and volume are not listed. |
| popPK | Wilson_2018 | irrelevant | 0 | 0 | The paper describes a computational method (PathFX) for drug safety and efficacy analysis and does not contain any pharmacokinetic data for diphemanil. |
| PD | Wilson_2018 | not_relevant | 0 | 0 | The paper describes a computational method (PathFX) for identifying drug-disease associations via protein interaction networks and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for diphemanil or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
