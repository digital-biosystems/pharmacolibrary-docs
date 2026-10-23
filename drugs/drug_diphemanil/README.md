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

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:26 | 0:37 | 0/0/0 | 0/0/0 | 0/0/0 | 23,199/353 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
