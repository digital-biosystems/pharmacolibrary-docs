<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;pafolacianine&quot;}]"></div>

# pafolacianine

- **generic name:** pafolacianine
- **ATC codes:** `V04CX10`
- **DrugBank:** [DB15413](https://go.drugbank.com/drugs/DB15413) · **PubChem:** none
- **molar mass:** 1326.49 g/mol (C61H67N9O17S4) — DrugBank
- **groups:** approved, investigational

## About

Pafolacianine is a diagnostic imaging agent used to help identify ovarian cancer during surgery. It is an approved drug, though it appears to be a niche product rather than one in widespread use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27277759](https://www.wikidata.org/wiki/Q27277759) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pafolacianine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: FOLR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:30 | 1:25 | 0/0/0 | 0/0/0 | 0/0/0 | 42,801/935 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hoogstins_2016.pdf` | Hoogstins CE et al., A Novel Tumor-Specific Agent for Intrao…, Clinical cancer research :… (2016) | popPK | 6 | [10.1158/1078-0432.CCR-15-2640](https://doi.org/10.1158/1078-0432.CCR-15-2640) | [27306792](https://pubmed.ncbi.nlm.nih.gov/27306792) | This is a human PK study of OTL38 (pafolacianine) with blood/skin pharmacokinetics assessed, but no numeric parameter values (CL, V, half-life) appear in the provided evidence. |
| `Mahalingam_2018.pdf` | Mahalingam SM et al., Evaluation of Novel Tumor-Targeted Near…, Journal of medicinal chemis… (2018) | popPK | 6 | [10.1021/acs.jmedchem.8b01115](https://doi.org/10.1021/acs.jmedchem.8b01115) | [30296376](https://pubmed.ncbi.nlm.nih.gov/30296376) | OTL38 (pafolacianine) PK is described with a half-time (&lt;30 min) but detailed quantitative disposition parameters appear to live in figures/supplementary material not provided. |

<sub>queue written 2026-10-07 23:30 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2015 | irrelevant | 2 | 1 | Preclinical mouse imaging comparison of EC17 vs OTL38 (pafolacianine) reporting only signal-to-background ratios and biodistribution, with no quantitative PK parameters (CL, V, half-life); tracer clearance is only shown in a figure. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Hoogstins_2016 | relevant | 6 | 2 | This is a human PK study of OTL38 (pafolacianine) with blood/skin pharmacokinetics assessed, but no numeric parameter values (CL, V, half-life) appear in the provided evidence. |
| popPK | Lehane_2024 | irrelevant | 1 | 0 | Clinical case series of surgical fluorescence imaging with no PK parameters reported. |
| popPK | Mahalingam_2018 | relevant | 6 | 3 | OTL38 (pafolacianine) PK is described with a half-time (&lt;30 min) but detailed quantitative disposition parameters appear to live in figures/supplementary material not provided. |
| popPK | Montaño_2025 | irrelevant | 0 | 0 | This is a fluorophore design/imaging paper; pafolacianine is only mentioned as an approved comparator, with no PK parameters reported. |
| popPK | Pace_2025 | irrelevant | 2 | 1 | Pafolacianine (OTL38) is only a contrast agent used for CTC labeling; no PK model or quantitative disposition parameters (CL, V, ka) for it are reported, and the only half-life mention is a literature citation. |
| popPK | Pace_2026 | irrelevant | 1 | 1 | This is a contrast-agent/CTC imaging study, not a PK study; only a passing mention of a 2–3 h plasma clearance half-life for OTL38 with no CL, V, or model parameters, and no numeric PK values for pafolacianine are present. |
| popPK | Peng_2026 | irrelevant | 0 | 0 | The paper is about a different NIR-II probe (OCTP); pafolacianine (Cytalux) is only a comparator, and no numeric PK parameters appear. |
| popPK | Shum_2016 | irrelevant | 0 | 0 | Surgical case report of OTL38 imaging with no PK disposition parameters (CL, V, half-life, model) reported anywhere. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpafolacianine%5D&body=Drug%3A%20pafolacianine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pafolacianine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
