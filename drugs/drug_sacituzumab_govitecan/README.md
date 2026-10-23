<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sacituzumab govitecan&quot;}]"></div>

# sacituzumab govitecan

- **generic name:** sacituzumab govitecan
- **ATC codes:** `L01FX17`
- **DrugBank:** [DB12893](https://go.drugbank.com/drugs/DB12893) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sacituzumab govitecan is an antibody-drug conjugate used to treat breast cancer, including triple-negative breast cancer. It is approved and authorised for use in the European Union, and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q23901469](https://www.wikidata.org/wiki/Q23901469) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| free SN-38 | metabolite | 392.411 | C22H20N2O5 | PubChem | [104842](https://pubchem.ncbi.nlm.nih.gov/compound/104842) | Sathe_2024, Sathe_2025 |
| sacituzumab_govitecan | metabolite | 1601.79 | C76H104N12O24S | PubChem | [91668186](https://pubchem.ncbi.nlm.nih.gov/compound/91668186) | Sathe_2024, Sathe_2025 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.128 | L/h | 0.128 L/h | patients with HR+/HER2− mBC, mTNBC, or other solid tumors | &gt;=789 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_reference](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2025_reference.md) |
| V | V1 | 2.65 | L | 2.650 L | patients with HR+/HER2− mBC, mTNBC, or other solid tumors | &gt;=789 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_reference](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>caveat: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per…</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>blocking: T3_topology_template</sub> | [Sathe_2025_reference](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2025_reference.md) | model (no simulator) | 1-compartment, oral | 13 (+8 cov.) | Sathe AG et al., Sacituzumab Govitecan Population Pharma…, Clinical and translational… (2025) | [10.1111/cts.70291](https://doi.org/10.1111/cts.70291) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Sathe_2024_final](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2024_final.md) | — | general linear (no model) | 8 (+7 cov.) | Sathe AG et al., Population Pharmacokinetics of Sacituzu…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01366-3](https://doi.org/10.1007/s40262-024-01366-3) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ final_final_model_estimatea_rse](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2024_final_final_model_estimatea_r.md) | — | general linear (no model) | 3 (+1 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ untransformed_estimate](drugs/drug_sacituzumab_govitecan/SacituzumabGovitecan_Sathe2024_untransformed_estimate.md) | — | general linear (no model) | 0 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_2_CR](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_CR.md) | complete response ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_2_ORR](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_ORR.md) | objective response rate ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_2_diarrhea](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_diarrhea.md) | diarrhea ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_2_nausea](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_nausea.md) | nausea ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_2_neutropenia](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_neutropenia.md) | neutropenia ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_2_time_to_first_dose_delay](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_time_to_first_dose_delay.md) | time to first dose delay ← sacituzumab govitecan · time-to-event model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_2_time_to_first_dose_reduction](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_time_to_first_dose_reduction.md) | time to first dose reduction ← sacituzumab govitecan · time-to-event model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sathe_2025_2_vomiting](drugs/drug_sacituzumab_govitecan/pd_Sathe_2025_2_vomiting.md) | vomiting ← sacituzumab govitecan · categorical (graded) response model | — | Sathe AG et al., Exposure-Response Analyses of Sacituzum…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3495](https://doi.org/10.1002/cpt.3495) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:03 | 6:42 | 0/3/1 | 0/0/1 | 0/0/0 | 160,561/12,615 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altman_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on carboplatin resistance in TNBC using PDX models and does not report pharmacokinetic parameters for sacituzumab govitecan. |
| popPK | Cherifi_2024 | irrelevant | 2 | 0 | This is a narrative review that describes general PK/PD characteristics qualitatively but does not provide specific quantitative parameter values (CL, V, etc.) for sacituzumab-govitecan. |
| popPK | Papacharisi_2025 | irrelevant | 0 | 0 | The study focuses on novel amanitin-based ADCs (ATACs) and uses sacituzumab govitecan (Trodelvy) only as a comparator agent, not as the subject of the pharmacokinetic analysis. |
| popPK | Sathe_2025_2 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses population PK model predictions but does not report the underlying quantitative PK parameter estimates (CL, V, etc.) for sacituzumab govitecan. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 19:58 UTC</sub>
