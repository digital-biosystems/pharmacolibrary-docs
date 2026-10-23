<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;codeine and ibuprofen&quot;}]"></div>

# codeine and ibuprofen

- **generic name:** codeine and ibuprofen
- **ATC codes:** `N02AJ08`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This combination of codeine and ibuprofen is a painkiller used to relieve pain. It is classified as an opioid combined with a non-opioid analgesic and remains in use, though availability may vary by country.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q10417385](https://www.wikidata.org/wiki/Q10417385) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 14:14 | 8:44 | 0/0/0 | 0/0/0 | 0/0/0 | 66,472/3,972 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/2 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 39 matched, 38 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Khan_2018.pdf` | Khan A et al., Prevalence of selected pharmaceuticals…, Environmental monitoring an… (2018) | pd | 4 | [10.1007/s10661-018-6683-6](https://doi.org/10.1007/s10661-018-6683-6) | [29728779](https://www.ncbi.nlm.nih.gov/pubmed/29728779) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-08-27T14:13:22.745487+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype-phenotype classifications (e.g., poor/intermediate metabolizer) and prevalence in a cohort, but does not report measured changes in specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameters for codeine or ibuprofen. |
| PGx | Litonius_2025 | not_relevant | 0 | 0 | The paper analyzes the prevalence of pharmacogenetic variants and drug utilization for cost-benefit modeling, but does not report specific pharmacokinetic or pharmacodynamic parameter changes for codeine or ibuprofen. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper is a retrospective claims analysis assessing the prevalence of dispensing medications with pharmacogenomic biomarkers, not a study measuring the effect of specific genotypes on the pharmacokinetic or pharmacodynamic parameters of codeine and ibuprofen. |
| popPK | Lyngstad_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical efficacy trial measuring pain relief (SPI, NNT) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for codeine or ibuprofen. |
| popPK | Lyngstad_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical trial assessing analgesic efficacy (pain scores) and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for codeine or ibuprofen. |
| PD | Lyngstad_2023 | not_relevant | 0 | 0 | The study is a clinical trial comparing fixed-dose combinations without measuring drug concentrations or fitting a pharmacodynamic model; it reports clinical efficacy endpoints (SPI, SPID) rather than exposure-response or dose-response parameters. |
| popPK | McQuay_1998 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for postoperative analgesia and does not report pharmacokinetic parameters for codeine_and_ibuprofen. |
| PD | McQuay_1998 | not_relevant | 1 | 0 | The paper is a systematic review of clinical trials for postoperative analgesia and does not report primary pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for codeine and ibuprofen. |
| popPK | Rodieux_2018 | irrelevant | 0 | 0 | The paper is a review focused on tramadol pharmacokinetics and safety in children, with codeine and ibuprofen mentioned only as context or comparators, and no quantitative PK parameters for the specific combination drug codeine_and_ibuprofen are reported. |
| PD | Rodieux_2018 | not_relevant | 1 | 0 | The paper is a review of tramadol prescribing in children and discusses codeine only in the context of safety warnings and CYP2D6 metabolism; it does not report any quantitative pharmacodynamic or exposure-response analysis for codeine or ibuprofen. |
| PGx | Rodieux_2018 | not_relevant | 0 | 0 | The paper focuses on tramadol pharmacogenetics and safety in children, not codeine_and_ibuprofen. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
