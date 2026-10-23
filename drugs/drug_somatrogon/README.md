<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;somatrogon&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Somatrogon_Wang2025_previous_nonmem_model_estimates&quot;,&quot;label&quot;:&quot;Wang_2025_previous_nonmem_model_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# somatrogon

- **generic name:** somatrogon
- **ATC codes:** `H01AC08`
- **DrugBank:** [DB14960](https://go.drugbank.com/drugs/DB14960) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Somatrogon is a long-acting growth hormone analogue used to treat growth disorders in children. It is authorised in the European Union as a newer medicine, and is also still under investigation for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q110220159](https://www.wikidata.org/wiki/Q110220159) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Wang_2025_previous_nonmem_model_estimates** — <span class="pk-badge pk-badge--orange">Needs review</span> pediatric participants. [Run it in the simulator](drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md?tab=Simulation) · [record](drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.472 | L/h | 0.472 L/h | pediatric participants | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2025_previous_nonmem_model_estimates](drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md) |
| V | V/F | 2.37 | L | 2.37 L | pediatric participants | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2025_previous_nonmem_model_estimates](drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md) |
| V | V1/F | 10.9 | L | 10.9 L | pediatric participants | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2025_previous_nonmem_model_estimates](drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md) |
| ka | kabs | 0.313 | 1/h | 0.313 1/h | pediatric participants | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2025_previous_nonmem_model_estimates](drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Wang_2025 · V/F</text><circle cx="255.6" cy="30.0" r="4" fill="#ef6c00"><title>Wang_2025 · V/F: 2.37 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wang_2025 · V1/F</text><circle cx="371.5" cy="46.0" r="4" fill="#ef6c00"><title>Wang_2025 · V1/F: 10.9 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): k21</sub> | [Wang_2025_previous_nonmem_model_estimates](drugs/drug_somatrogon/Somatrogon_Wang2025_previous_nonmem_model_estimates.md) | ▶ model + simulator | 2-compartment, oral | 6 (+3 cov.) | Wang Y et al., Implementing a Bayesian approach using…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13279](https://doi.org/10.1002/psp4.13279) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ nonmem_focei_estimates_previous_analysis](drugs/drug_somatrogon/Somatrogon_Wang2025_nonmem_focei_estimates_previous_analysis.md) | — | 1-compartment (no model) | 0 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:21 | 0:48 | 0/1/1 | 0/0/0 | 0/0/0 | 27,196/619 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 1 matched, 1 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:21 UTC</sub>
