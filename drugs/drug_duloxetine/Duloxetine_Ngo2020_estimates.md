<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;duloxetine&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/&quot;},{&quot;label&quot;:&quot;Ngo_2020 \u00b7 estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Duloxetine_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Sharma2000_reference&quot;,&quot;label&quot;:&quot;Sharma_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Sharma2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Shibata2023_reference&quot;,&quot;label&quot;:&quot;Shibata_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Shibata2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Duloxetine_Tianmei2007_reference&quot;,&quot;label&quot;:&quot;Tianmei_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_duloxetine/Duloxetine_Tianmei2007_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# duloxetine — `Duloxetine_Ngo2020_estimates`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">rat</span>

> This record was reviewed on 2026-10-06 22:47 UTC (Rejected), but the paper was screened again on 2026-10-06 22:53 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The duloxetine parent–metabolite model was rejected because 4-hydroxy duloxetine is an unlinked metabolite: the duloxetine-to-4-hydroxy duloxetine conversion edge (Fpm, 0.589) has no usable connection, leaving the metabolite without a path from the dose.

<div class="pk-model-meta" hidden drug="duloxetine" model-id="Duloxetine_Ngo2020_estimates" status="rejected" stale="true" population="Sprague-Dawley rats" measured-compound="duloxetine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Ngo TL, Lee CH, Han N, Back HM, Rhee SJ, Noh K et al. Application of an Inter-Species Extrapolation Method for the Prediction of Drug Interactions between Propolis and Duloxetine in Humans. International journal of molecular sciences 21(5) (2020).
  ·  DOI: [10.3390/ijms21051862](https://doi.org/10.3390/ijms21051862)

## Population and dosing

**Population:** Sprague-Dawley rats · condition healthy · age group adult · n = 18.

**Dosing:** 2800 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Ka | kabs | 1.35 | 1/h |
| Fpm | fm | 0.589 |  |
| CLp | CL | 1.97 | L/h |
| Vp | V2 | 14.6 | L |
| Emax_ CLpm | CLmp | 1.00 |  |
| CLpm/Fp | CLfm | 1.26 | L/h |
| CLm/Fm | CL/F | 12.3 | L/h |
| Vm/Fm | V1/F | 84.2 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.316). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The duloxetine parent–metabolite model was rejected because 4-hydroxy duloxetine is an unlinked metabolite: the duloxetine-to-4-hydroxy duloxetine conversion edge (Fpm, 0.589) has no usable connection, leaving the metabolite without a path from the dose.**

The record describes duloxetine in Sprague-Dawley rats with a presystemic and systemic conversion to 4-hydroxy duloxetine, parameterised with fm 0.589, formation clearance CLfm 1.26 L/h, metabolite CL/F 12.3 L/h and V1/F 84.2 L. The failed check found an unreachable compartment or unlinked metabolite in the model structure, so the metabolite side of the parent–metabolite topology is not connected to the dose. No other failed checks or builder deviations are recorded. Extracted — duloxetine: kabs 1.35 1/h, CL 1.97 L/h, V2 14.6 L; 4-hydroxy duloxetine: fm 0.589, CLmp 1, CL 276, CLfm 1.26 L/h, CL/F 12.3 L/h, V1/F 84.2 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has duloxetine → 4-hydroxy duloxetine (metabolism), the second reading none; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka | `Q49` · kabs | 1.35 | 1/h | 0.000375 | 1/s | 1/h | exact (1) | ijms-21-01862-t002:row2:col2 |
| Fpm | `Q45` · fm | 0.589 |  |  |  |  | exact (1) | ijms-21-01862-t002:row5:col2 |
| CLp | `Q22` · CL | 1.97 | L/h | 5.472e-07 | m3/s | L/h | exact (1) | ijms-21-01862-t002:row6:col2 |
| Vp | `Q64` · V2 | 14.6 | L | 0.0146 | m3 | L | exact (1) | ijms-21-01862-t002:row7:col2 |
| Emax_ CLpm | `Q371` · CLmp | 1.00 |  |  |  |  | llm_corrected (0.6) | ijms-21-01862-t002:row8:col2 |
| CLpm/Fp | `Q370` · CLfm | 1.26 | L/h | 3.5e-07 | m3/s | L/h | exact (1) | ijms-21-01862-t002:row10:col2 |
| CLm/Fm | `Q27` · CL/F | 12.3 | L/h | 3.417e-06 | m3/s | L/h | exact (1) | ijms-21-01862-t002:row11:col2 |
| Vm/Fm | `Q290` · V1/F | 84.2 | L | 0.0842 | m3 | L | exact (1) | ijms-21-01862-t002:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV CLp' routed out of structural estimates ('Inter-individual variability (IIV, %)')
- table section residual_error: 'Prop_p' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: 'Prop_m' routed out of structural estimates ('Residual variability (%)')
- dropped PD-category row 'Emax_ Fpm' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['ijms-21-01862-t002:row3:col2'])
- dropped PD-category row 'IC50_ Fpm' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['ijms-21-01862-t002:row4:col2'])
- dropped duplicate Q371 ('IC50_ CLpm', value '276') — already have one for this compound
- implicit units: 'Ka' → 1/h (from the paper text: "Text states 'Ka was predicted to be 0.697 1/h' for the absorption rate constant.")
- implicit units: 'CLp' → L/h (from the popPK convention: 'No unit stated for CLp; clearances in population PK are conventionally L/h, consistent with human CLDLX/Fp of 55.9 L/h r')
- implicit units: 'Vp' → L (from the paper text: 'Text reports volume of distribution Vp/Fp of DLX as 1022 L, so volumes are in L.')
- implicit units: 'CLpm/Fp' → L/h (from the popPK convention: 'No unit stated; CLpm/Fp is an apparent oral clearance, conventionally L/h, consistent with reported CLDLX/Fp of 55.9 L/h')
- implicit units: 'CLm/Fm' → L/h (from the popPK convention: 'No unit stated; CLm/Fm is apparent clearance of the metabolite, conventionally L/h.')
- implicit units: 'Vm/Fm' → L (from the popPK convention: 'No unit stated; Vm/Fm is an apparent volume of distribution, conventionally L, consistent with Vp/Fp of 1022 L in the te')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=duloxetine
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [1] (site presystemic: 'The metabolism of DLX converted to 4-HD was described by two metabolism pathways, including the first-pass effect and th')
- population split: 'estimates' subgroup of Ngo_2020 (paper reports 2 populations: estimates, predicted value)
- row roles: 6 per-group rows of duloxetine summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 24/24 row label(s) assigned, 45 linked by role; re-tagged parent→4-hydroxy duloxetine ×47
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 3 transcribed (9 record(s))
- unparsed cell Ngo_2020_table_4:row1:col1 = '40 mg'
- unparsed cell Ngo_2020_table_4:row5:col1 = '40 mg'
- unparsed cell Ngo_2020_table_4:row9:col1 = '40 mg'
- companion parameter table 4 transcribed (44 record(s))
- LLM selected parameter table(s) 3, 4
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.316 (6/19 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['duloxetine', '4-hydroxy duloxetine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clm/fm]` |  | 12.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/fm]` | 12.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clp].rse_percent` |  | 22.6 | mismatch |
| `gpt-oss-120b` | `parameters[clpm/fp]` |  | 1.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clpm/fp]` | 1.26 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[emax_ clpm]` | 1.00 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fpm]` |  | 0.589 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fpm]` | 0.589 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].rse_percent` |  | 8.10 | mismatch |
| `gpt-oss-120b` | `parameters[vm/fm]` |  | 84.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/fm]` | 84.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp].rse_percent` |  | 26.4 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['ijms-21-01862-t002:row6:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['ijms-21-01862-t002:row11:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['ijms-21-01862-t002:row12:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['ijms-21-01862-t002:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['ijms-21-01862-t002:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['ijms-21-01862-t002:row7:col2'] |
| C5_unit_missing_Q371 | fail | [length] ** 3 / [time] |  | ['ijms-21-01862-t002:row8:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.97 L/h | ['ijms-21-01862-t002:row6:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 12.3 L/h | ['ijms-21-01862-t002:row11:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 84.2 L | ['ijms-21-01862-t002:row12:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 14.6 L | ['ijms-21-01862-t002:row7:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bduloxetine%5D%20Duloxetine_Ngo2020_estimates&body=Drug%3A%20duloxetine%0ARecord%3A%20Duloxetine_Ngo2020_estimates%0APaper%3A%20Ngo_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_duloxetine/Duloxetine_Ngo2020_estimates%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 22:53 UTC</sub>
