<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;sampeginterferon beta-1a&quot;}]"></div>

# sampeginterferon beta-1a

- **generic name:** sampeginterferon beta-1a
- **ATC codes:** `L03AB17`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

It is an approved immunostimulant medicine, given by injection to reduce relapses in relapsing forms of the disease.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Hu_2015_2_reference](drugs/drug_sampeginterferon_beta_1a/SampeginterferonBeta1a_Hu2015v2_reference.md) | — | 2-compartment (no model) | 5 | Hu X et al., Pharmacokinetics, pharmacodynamics, and…, Journal of clinical pharmac… (2015) | [10.1002/jcph.390](https://doi.org/10.1002/jcph.390) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Hu_2017_estimated_value](drugs/drug_sampeginterferon_beta_1a/SampeginterferonBeta1a_Hu2017_estimated_value.md) | — | 1-compartment (no model) | 2 | Hu X et al., Population-Based Pharmacokinetic and Ex…, Journal of clinical pharmac… (2017) | [10.1002/jcph.883](https://doi.org/10.1002/jcph.883) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ mean](drugs/drug_sampeginterferon_beta_1a/SampeginterferonBeta1a_Hu2017_mean.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ nonmem_results_estimated_value](drugs/drug_sampeginterferon_beta_1a/SampeginterferonBeta1a_Hu2017_nonmem_results_estimated_value.md) | — | 1-compartment (no model) | 3 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:10 | 4:38 | 0/4/0 | 0/0/0 | 0/0/0 | 180,992/21,755 | einfracz / qwen3.8-27b | 5 | 5/0 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boyko_2019 | irrelevant | 2 | 0 | The paper is an efficacy/safety clinical trial report for multiple sclerosis; while it mentions a pharmacokinetic analysis was performed, no quantitative PK parameters (CL, V, etc.) are present in the evidence. |
| popPK | Hang_2016 | relevant | 5 | 2 | The paper is a population PK/PD (exposure-response) study for peginterferon beta-1a in humans, but it primarily reports PD parameters (lesion count effects) and references a separate publication for the core PK model parameters (clearance, half-life), with only limited PK values (half-life ~78h) provided in text. |
| popPK | Howley_2014 | irrelevant | 0 | 0 | The paper is a qualitative nursing review focusing on patient education and compliance, reporting no quantitative pharmacokinetic parameters for sampeginterferon_beta_1a. |
| popPK | Zhao_2022 | irrelevant | 2 | 0 | The paper reports Cmax and AUCinf percentages/differences by race, not standard disposition parameters (CL, V, ka, t1/2), and the actual numeric values for these metrics are not present in the text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:08 UTC</sub>
