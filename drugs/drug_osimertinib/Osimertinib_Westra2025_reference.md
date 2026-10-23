<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;osimertinib&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/&quot;},{&quot;label&quot;:&quot;Westra_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Osimertinib_Rodier2022_reference&quot;,&quot;label&quot;:&quot;Rodier_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Westra2025_reference&quot;,&quot;label&quot;:&quot;Westra_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Westra2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Osimertinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# osimertinib — `Osimertinib_Westra2025_reference`

> ## <span class="pk-badge pk-badge--green">Reproduces paper</span>

<div class="pk-model-meta" hidden drug="osimertinib" model-id="Osimertinib_Westra2025_reference" status="curated_candidate" stale="false" population="patients with NSCLC in the OSIBOOST cohort" measured-compound="osimertinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Westra N, Kruithof PD, Croes S, van Geel RMJM, Hendriks LEL, Touw DJ et al. Osimertinib Cost Minimization in Non-Small Cell Lung Cancer (NSCLC) Treatment: Hypothesis Generation for a Population Pharmacokinetic Approach for Equivalent Dose Optimization of Osimertinib in Combination with Cobicistat. Journal of clinical pharmacology 65(12):1687–1698 (2025).
  ·  DOI: [10.1002/jcph.70085](https://doi.org/10.1002/jcph.70085)

## Population and dosing

**Population:** patients with NSCLC in the OSIBOOST cohort · condition NSCLC · age group adult · n = 11.

**Dosed compound ≠ measured compound:** dosed osimertinib and cobicistat, measured osimertinib.

## Model

**Structure:** parent–metabolite model: parent with 1 compartment(s); metabolite AZ5104: 1 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference.svg" alt="Osimertinib_Westra2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| Ka (/h) b | kabs | 0.24 | 1/h |
| V/F osimertinib (L) b | V/F | 966 | L |
| V/F AZ5104 (L) b | V1/F | 181 | L |
| CL/F osimertinib (L/h) b | CL/F | 19.0 | L/h |
| CL/F AZ5104 (L/h) b | CL/F | 46.3 | L/h |
| GMR AUC0‐144h [90% CI] | AUC ratio | 1 | DL 1 |
| GMR Cmax [90% CI] | Cmax_ratio | 1 | DL 1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.357). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (AUC ratio and Cmax_ratio), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has osimertinib and cobicistat, the second reading osimertinib; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Ka (/h) b | `Q49` · kabs | 0.24 | 1/h | 6.667e-05 | 1/s | 1/h | space_fold (0.95) | jcph70085-tbl-0002:row2:col1 |
| V/F osimertinib (L) b | `Q76` · V/F | 966 | L | 0.966 | m3 | L | llm_confirmed (0.6) | jcph70085-tbl-0002:row3:col2 |
| V/F AZ5104 (L) b | `Q290` · V1/F | 181 | L | 0.181 | m3 | L | exact (1) | jcph70085-tbl-0002:row4:col2 |
| CL/F osimertinib (L/h) b | `Q27` · CL/F | 19.0 | L/h | 5.278e-06 | m3/s | L/h | llm_confirmed (0.6) | jcph70085-tbl-0002:row5:col2 |
| CL/F AZ5104 (L/h) b | `Q27` · CL/F | 46.3 | L/h | 1.286e-05 | m3/s | L/h | exact (1) | jcph70085-tbl-0002:row6:col2 |
| GMR AUC0‐144h [90% CI] | `Q21` · AUC ratio | 1 | DL 1 |  |  | dl1 | llm (0.6) | Westra_2025_table_3:row4:col1, Westra_2025_table_3:row10:col1 |
| GMR Cmax [90% CI] | `Q33` · Cmax_ratio | 1 | DL 1 |  |  | dl1 | llm_corrected (0.6) | Westra_2025_table_3:row5:col1, Westra_2025_table_3:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Covariance a' routed out of structural estimates ('BSV on CL/F osimertinib')
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q27 ('Effect of cobicistat on CL/F', value '0.694') — already have one for this compound
- unit_dimension_unknown: 'DL 1' (AUC ratio)
- unit_dimension_unknown: 'DL 1' (Cmax_ratio)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1 (source ['jcph70085-tbl-0002:footnote', 'jcph70085-tbl-0002:footnote', 'jcph70085-tbl-0002:footnote']); the table cell was unparseable — needs review
- implicit units: 'Ka (/h) b' → 1/h (from the popPK convention: 'The text identifies Ka as an absorption rate constant but states no unit. First-order absorption rate constants are conv')
- implicit units: 'V/F osimertinib (L) b' → L (from the popPK convention: 'The table footnote defines V/F as apparent volume of distribution but states no unit. Volumes are conventionally express')
- implicit units: 'V/F AZ5104 (L) b' → L (from the popPK convention: 'The table footnote defines V/F as apparent volume of distribution but states no unit. Volumes are conventionally express')
- implicit units: 'CL/F osimertinib (L/h) b' → L/h (from the popPK convention: 'The table footnote defines CL/F as apparent clearance but states no unit. Clearances are conventionally expressed in L/h')
- implicit units: 'CL/F AZ5104 (L/h) b' → L/h (from the popPK convention: 'The table footnote defines CL/F as apparent clearance but states no unit. Clearances are conventionally expressed in L/h')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=osimertinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 5 linked by role; re-tagged AZ5104→osimertinib ×8
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph70085-tbl-0002:row3:col1 = '990 (29%)'
- unparsed cell jcph70085-tbl-0002:row3:col3 = '669‐1859'
- unparsed cell jcph70085-tbl-0002:row4:col1 = '184 (48.5%)'
- unparsed cell jcph70085-tbl-0002:row4:col3 = '65‐7547'
- unparsed cell jcph70085-tbl-0002:row5:col1 = '19.0 (8.5%)'
- unparsed cell jcph70085-tbl-0002:row5:col3 = '16.1‐22.6'
- unparsed cell jcph70085-tbl-0002:row6:col1 = '47.3 (7.8%)'
- unparsed cell jcph70085-tbl-0002:row6:col3 = '31.1‐55.4'
- unparsed cell jcph70085-tbl-0002:row7:col1 = '0.704 (3.5%)'
- unparsed cell jcph70085-tbl-0002:row7:col3 = '0.639‐0.743'
- unparsed cell jcph70085-tbl-0002:row8:col1 = '0.178 (10.6%)'
- unparsed cell jcph70085-tbl-0002:row8:col3 = '0.142‐0.216'
- unparsed cell Westra_2025_table_3:row4:col2 = '1.43 [1.40‐1.46]'
- unparsed cell Westra_2025_table_3:row4:col3 = '0.96 [0.94‐0.98]'
- unparsed cell Westra_2025_table_3:row4:col4 = '0.73 [0.71‐0.74]'
- unparsed cell Westra_2025_table_3:row5:col2 = '1.39 [1.37‐1.42]'
- unparsed cell Westra_2025_table_3:row5:col3 = '1.06 [1.04‐1.08]'
- unparsed cell Westra_2025_table_3:row5:col4 = '0.79 [0.78‐0.81]'
- unparsed cell Westra_2025_table_3:row10:col2 = '1.0 [0.99‐1.03]'
- unparsed cell Westra_2025_table_3:row10:col3 = '0.67 [0.66‐0.68]'
- unparsed cell Westra_2025_table_3:row10:col4 = '0.51 [0.50‐0.52]'
- unparsed cell Westra_2025_table_3:row11:col2 = '0.9 [0.97‐1.01]'
- unparsed cell Westra_2025_table_3:row11:col3 = '0.74 [0.73‐0.76]'
- unparsed cell Westra_2025_table_3:row11:col4 = '0.56 [0.55‐0.57]'
- companion parameter table 3 transcribed (4 record(s))
- LLM selected parameter table(s) 3
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.357 (5/14 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl/f osimertinib (l/h) b]` |  | 19.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f osimertinib (l/h) b]` | 19.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[gmr auc0‐144h [90% ci]]` | 1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[gmr cmax [90% ci]]` | 1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka (/h) b]` |  | 0.24 | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka (/h) b]` | 0.24 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v/f osimertinib (l) b]` |  | 966 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v/f osimertinib (l) b]` | 966 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | osimertinib and cobicistat | osimertinib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph70085-tbl-0002:row5:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph70085-tbl-0002:row6:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['jcph70085-tbl-0002:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph70085-tbl-0002:row2:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['jcph70085-tbl-0002:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19 L/h | ['jcph70085-tbl-0002:row5:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 46.3 L/h | ['jcph70085-tbl-0002:row6:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 181 L | ['jcph70085-tbl-0002:row4:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 966 L | ['jcph70085-tbl-0002:row3:col2'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_metabolite_built[AZ5104] | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.181, 'CL': 1.2861111111111112e-05, 'formation': 5.277777777777778e-06} | AZ5104 = compartment M1 with its own numbers |
| T3_metabolite_output[AZ5104] | pass |  | 2.508e-05 | C_M1 (AZ5104) must rise above 0 when the parent is dosed |
| T3_molar_mass[AZ5104] | pass |  | {'MW': 0.49961900000000004, 'MW_m1': 0.48559199999999997} | formation is molecule-for-molecule |
| T3_output_variable | pass | C_central (measured=osimertinib) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_modelica.zip" download>Osimertinib_Westra2025_reference_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_fmi.zip" download>Osimertinib_Westra2025_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_matlab.zip" download>Osimertinib_Westra2025_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_sbml.zip" download>Osimertinib_Westra2025_reference_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_cellml.zip" download>Osimertinib_Westra2025_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 8e-05 | kg |
| input | model | `CL1` | 0 | m3/s |
| input | model | `CLm1` | 1.286e-05 | m3/s |
| input | model | `MW` | 0.4996 |  |
| input | model | `MW_m1` | 0.4856 |  |
| input | model | `Vd1` | 0.966 |  |
| input | model | `Vd1m1` | 0.181 | m3 |
| input | model | `ka` | 6.667e-05 | 1/s |
| input | model | `q1_m11` | 5.278e-06 | m3/s |
| output | concentration | `central.C` |  | kg/m3 |
| output | concentration | `C_M1` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_3M_9C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- Parent–metabolite exports (MATLAB, SBML, CellML) are checked against OpenModelica, Octave and roadrunner to 1e-5 in the generator's test suite (`test/test_three_m_formats.py`).

## How to cite

**Source paper** (the parameters are its): Westra N, Kruithof PD, Croes S, van Geel RMJM, Hendriks LEL, Touw DJ et al. Osimertinib Cost Minimization in Non-Small Cell Lung Cancer (NSCLC) Treatment: Hypothesis Generation for a Population Pharmacokinetic Approach for Equivalent Dose Optimization of Osimertinib in Combination with Cobicistat. Journal of clinical pharmacology 65(12):1687–1698 (2025). [doi:10.1002/jcph.70085](https://doi.org/10.1002/jcph.70085)

**This record:** Pharmacolibrary v26.09, model `Osimertinib_Westra2025_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_osimertinib/Osimertinib_Westra2025_reference>

```bibtex
@misc{pharmacolibrary_OsimertinibWestra2025reference,
  title  = {{Pharmacolibrary model Osimertinib_Westra2025_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_osimertinib/Osimertinib_Westra2025_reference},
  note   = {Parameters from doi:10.1002/jcph.70085},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 80 mg, single dose, first-order absorption (ka 0.24 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 80 mg oral (L01EB04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Osimertinib_Westra2025_reference_params.json` · controls `Osimertinib_Westra2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bosimertinib%5D%20Osimertinib_Westra2025_reference&body=Drug%3A%20osimertinib%0ARecord%3A%20Osimertinib_Westra2025_reference%0APaper%3A%20Westra_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_osimertinib/Osimertinib_Westra2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:49 UTC</sub>
