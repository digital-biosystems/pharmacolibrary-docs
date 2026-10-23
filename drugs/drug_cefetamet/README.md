<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefetamet&quot;}]"></div>

# cefetamet

- **generic name:** cefetamet
- **ATC codes:** `J01DD10`
- **DrugBank:** [DB13504](https://go.drugbank.com/drugs/DB13504) · **PubChem:** not captured
- **molar mass:** 397.42 g/mol (C14H15N5O5S2) — DrugBank
- **groups:** investigational

## About

Cefetamet is a third-generation cephalosporin antibiotic developed for treating bacterial infections. It is considered investigational and does not appear to be an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1083757](https://www.wikidata.org/wiki/Q1083757) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Li_2014_reference](drugs/drug_cefetamet/Cefetamet_Li2014_reference.md) | — | 1-compartment (no model) | 0 | Li CZ et al., [Phase I clinical trial on the safety o…, Sichuan da xue xue bao. Yi… (2014) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:35 | 0:43 | 0/1/0 | 0/0/0 | 0/0/0 | 37,851/1,732 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Blouin_1990.pdf` | Blouin RA et al., Influence of antacid and ranitidine on…, Antimicrobial agents and ch… (1990) | popPK | 10 | [10.1128/AAC.34.9.1744](https://doi.org/10.1128/AAC.34.9.1744) | [1981000](https://pubmed.ncbi.nlm.nih.gov/1981000) | The study is a relevant PK interaction trial for cefetamet in humans, but the provided text contains only qualitative results (e.g., "no significant differences") and design details, with no specific numeric parameter values for clearance, volume, or half-life. |
| `Li_2014.pdf` | Li CZ et al., [Phase I clinical trial on the safety o…, Sichuan da xue xue bao. Yi… (2014) | popPK | 9 | not captured | [25286691](https://pubmed.ncbi.nlm.nih.gov/25286691) | The study reports quantitative PK parameters (Cmax, AUC, half-life) and a two-compartment model for cefetamet in humans, though specific clearance or volume values are not explicitly listed in the text. |
| `Li_2016.pdf` | Li C et al., Using Monte Carlo simulation to determi…, Journal of chemotherapy (Fl… (2016) | popPK | 9 | [10.1179/1973947814Y.0000000214](https://doi.org/10.1179/1973947814Y.0000000214) | [25252727](https://pubmed.ncbi.nlm.nih.gov/25252727) | The study reports quantitative PK parameters (Cmax, AUC, t1/2) for cefetamet in humans, which allows for derivation of clearance and volume, although specific CL and V values are not explicitly listed. |

<sub>queue written 2026-10-07T10:34:30.045929+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blouin_1990 | relevant | 10 | 1 | The study is a relevant PK interaction trial for cefetamet in humans, but the provided text contains only qualitative results (e.g., "no significant differences") and design details, with no specific numeric parameter values for clearance, volume, or half-life. |
| popPK | Mahmood_2020 | relevant | 6 | 2 | The study includes cefetamet as one of ten drugs to model clearance in children, but specific numeric parameter values for cefetamet are in supplementary material not provided. |
| popPK | van_1995 | irrelevant | 0 | 0 | The study is an in-vitro microbiology assessment of antibacterial activity and intracellular concentrations, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:34 UTC</sub>
