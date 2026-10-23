<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ixekizumab&quot;}]"></div>

# ixekizumab

- **generic name:** ixekizumab
- **ATC codes:** `L04AC13`
- **DrugBank:** [DB11569](https://go.drugbank.com/drugs/DB11569) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ixekizumab is a monoclonal antibody used to treat psoriasis, psoriatic arthritis, axial spondyloarthritis, and juvenile arthritis. It is an approved interleukin inhibitor authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q13574436](https://www.wikidata.org/wiki/Q13574436) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chigutsa_2018_PASI](drugs/drug_ixekizumab/pd_Chigutsa_2018_PASI.md) | Psoriasis Activity and Severity Index [PASI] scores ← ixekizumab · categorical (graded) response model | — | Chigutsa E et al., Exposure-Response Modeling to Character…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1268](https://doi.org/10.1002/jcph.1268) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chigutsa_2018_sPGA](drugs/drug_ixekizumab/pd_Chigutsa_2018_sPGA.md) | static Physician Global Assessment [sPGA] (sPGA(0,1) response) ← ixekizumab · categorical (graded) response model | — | Chigutsa E et al., Exposure-Response Modeling to Character…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1268](https://doi.org/10.1002/jcph.1268) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Liu_2026_PASI75](drugs/drug_ixekizumab/pd_Liu_2026_PASI75.md) | PASI 75 ← ixekizumab · direct sigmoid Emax (Hill) effect | — | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Liu_2026_PASI90](drugs/drug_ixekizumab/pd_Liu_2026_PASI90.md) | PASI 90 ← ixekizumab · direct sigmoid Emax (Hill) effect | — | Liu Y et al., Model-Based Meta-Analysis of IL-17 A In…, Clinical reviews in allergy… (2026) | [10.1007/s12016-025-09123-5](https://doi.org/10.1007/s12016-025-09123-5) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Tham_2014_PASI](drugs/drug_ixekizumab/pd_Tham_2014_PASI.md) | absolute Psoriasis Area and Severity Index (PASI) scores ← ixekizumab · indirect response — drug inhibits the production of absolute Psoriasis Area and Severity Index (PASI) scores | — | Tham LS et al., Population exposure-response model to s…, Journal of clinical pharmac… (2014) | [10.1002/jcph.312](https://doi.org/10.1002/jcph.312) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:58 | 0:49 | 0/0/0 | 0/2/1 | 0/0/0 | 60,067/2,217 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tham_2014.pdf` | Tham LS et al., Population exposure-response model to s…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.312](https://doi.org/10.1002/jcph.312) | [24752880](https://pubmed.ncbi.nlm.nih.gov/24752880) | The paper describes a population pharmacokinetic model for ixekizumab, but the specific numeric parameter values are not provided in the extracted evidence. |

<sub>queue written 2026-10-06T23:57:45.810738+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chigutsa_2018 | irrelevant | 1 | 0 | The study is an exposure-response modeling analysis that characterizes the relationship between drug concentration and efficacy, but it does not report the underlying pharmacokinetic disposition parameters (CL, V, Q, t1/2, or PK model parameters) for ixekizumab. |
| popPK | Deodhar_2021 | irrelevant | 0 | 0 | The paper is a clinical trial analysis of patient-reported outcomes and efficacy, reporting no pharmacokinetic parameters (CL, V, ka) for ixekizumab. |
| popPK | Deodhar_2021_2 | irrelevant | 0 | 0 | The study reports patient-reported outcomes (sleep, work productivity) for ixekizumab in nr-axSpA, not pharmacokinetic parameters. |
| popPK | Deodhar_2021_3 | irrelevant | 0 | 0 | This is a clinical efficacy study of ixekizumab in axial spondyloarthritis that reports patient-reported outcomes and ASAS responses, containing no pharmacokinetic parameters or disposition data. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | This is an exposure-response modeling study using PK parameters extracted from external documents, and no quantitative PK parameter values (CL, V, ka, etc.) for ixekizumab are present in the provided evidence. |
| popPK | Mease_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy analysis of patient-reported outcomes (pain, fatigue, sleep) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life for ixekizumab. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper is a real-world clinical effectiveness study comparing disease activity scores and does not report any pharmacokinetic parameters. |
| popPK | Rodríguez-Fernández_2022 | irrelevant | 2 | 0 | The paper is a review that summarizes PK/PD models for ixekizumab, but the specific quantitative disposition parameters (CL, V) for ixekizumab are not present in the provided text (only EC50 PD parameters are mentioned, and CL/V values are referenced as being in a table not included in the evidence). |
| popPK | Tham_2014 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for ixekizumab, but the specific numeric parameter values are not provided in the extracted evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
