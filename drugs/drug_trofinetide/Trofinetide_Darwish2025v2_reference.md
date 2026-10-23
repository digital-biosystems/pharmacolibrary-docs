<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;trofinetide&quot;,&quot;href&quot;:&quot;drugs/drug_trofinetide/&quot;},{&quot;label&quot;:&quot;Darwish_2025_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trofinetide_Darwish2025_reference&quot;,&quot;label&quot;:&quot;Darwish_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trofinetide/Trofinetide_Darwish2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trofinetide_Darwish2025v2_reference&quot;,&quot;label&quot;:&quot;Darwish_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trofinetide — `Trofinetide_Darwish2025v2_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The trofinetide two-compartment model was held back because bioavailability F (and Tlag) were left at library defaults instead of the paper's estimate (F1 = 0.832), so the simulated profile is not supported by the paper.

<div class="pk-model-meta" hidden drug="trofinetide" model-id="Trofinetide_Darwish2025v2_reference" status="needs_review" stale="false" population="healthy volunteers and pediatric and adult patients with Rett syndrome, TBI, or fragile X syndrome" measured-compound="trofinetide" parameterization="mechanistic" topology="2C"></div>

## Citation
Darwish M, Passarell J, Maxwell K, Bradley H, Bishop KM, Youakim JM. Population Pharmacokinetics of Trofinetide in a Pediatric Population Aged 2-4 Years with Rett Syndrome. Advances in therapy 42(2):1009–1025 (2025).
  ·  DOI: [10.1007/s12325-024-03058-7](https://doi.org/10.1007/s12325-024-03058-7)

## Population and dosing

**Population:** healthy volunteers and pediatric and adult patients with Rett syndrome, TBI, or fragile X syndrome · condition Rett syndrome (plus healthy volunteers, TBI, fragile X syndrome) · age group mixed · n = 455.

**Dosing:** 2000, 4000, 5000, 6000, 8000, 10000, 12000, 18000, 24000 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 6 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference/Trofinetide_Darwish2025v2_reference.svg" alt="Trofinetide_Darwish2025v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h) | CL | 11.7 | L/h | 1.99 | 0.0182 (None% RSE) |
| Vc (L) | V1 | 25.0 | L | 3.78 | 0.0906 (None% RSE) |
| covariate_exponent_of_age_on_vc | covariate_exponent_of_age_on_vc | 0.556 |  | 7.98 |  |
| Q (L/h) | Q | 1.42 | L/h | 5.97 | 0.355 (None% RSE) |
| Vp (L) | V2 | 35.4 | L | 5.69 | 0.0874 (None% RSE) |
| ka (1/h) | kabs | 0.394 | 1/h | 4.00 |  |
| F1 | Fab | 0.832 |  | 3.59 | 0.04 (None% RSE) |
| theta_q319_weight_power | theta_q319_weight_power | 0.486 |  | 7.40 |  |
| theta_q319_gfr_power | theta_q319_gfr_power | 0.272 |  | 19.9 |  |
| theta_q314_category | theta_q314_category | 0.229 |  | 17.8 |  |
| theta_v1_category | theta_v1_category | 1.16 | L | 20.0 |  |
| theta_v2_category | theta_v2_category | 0.805 | L | 23.4 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.71). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The trofinetide two-compartment model was held back because bioavailability F (and Tlag) were left at library defaults instead of the paper's estimate (F1 = 0.832), so the simulated profile is not supported by the paper.**

The record reports F1 = 0.832 for trofinetide, but the model builder substituted library defaults for F and Tlag rather than the paper's estimates, which alters the simulated absorption profile. In addition, the covariate effects defined in the record (age on Vc, weight and GFR powers on Q, and category effects on Q, V1 and V2) were not exercised: only the reference individual was simulated. A reported unit also could not be converted to SI, so that parameter reached the simulation without an SI value. Extracted — trofinetide: CL 11.7 L/h, V1 25 L, Q 1.42 L/h, V2 35.4 L, kabs 0.394 1/h, Fab 0.832.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trofinetide, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 11.7 | L/h | 3.25e-06 | m3/s | l/h | 1.99 | exact (1) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col4 | 0.0182 (None% RSE) |
| Vc (L) | `Q63` · V1 | 25.0 | L | 0.025 | m3 | l | 3.78 | exact (1) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col4 | 0.0906 (None% RSE) |
| covariate_exponent_of_age_on_vc | `Q900` · covariate_exponent_of_age_on_vc | 0.556 |  |  |  |  | 7.98 |  | Tab2:row8:col1, Tab2:row8:col2 |  |
| Q (L/h) | `Q30` · Q | 1.42 | L/h | 3.944e-07 | m3/s | l/h | 5.97 | exact (1) | Tab2:row10:col1, Tab2:row10:col2, Tab2:row10:col4 | 0.355 (None% RSE) |
| Vp (L) | `Q64` · V2 | 35.4 | L | 0.0354 | m3 | l | 5.69 | exact (1) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col4 | 0.0874 (None% RSE) |
| ka (1/h) | `Q49` · kabs | 0.394 | 1/h | 0.0001094 | 1/s | 1/h | 4.00 | exact (1) | Tab2:row14:col1, Tab2:row14:col2 |  |
| F1 | `Q40` · Fab | 0.832 |  |  |  |  | 3.59 | exact (1) | Tab2:row16:col1, Tab2:row16:col2, Tab2:row16:col4 | 0.04 (None% RSE) |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.486 |  |  |  |  | 7.40 |  | Tab2:row3:col1, Tab2:row3:col2 |  |
| theta_q319_gfr_power | `Q900` · theta_q319_gfr_power | 0.272 |  |  |  |  | 19.9 |  | Tab2:row4:col1, Tab2:row4:col2 |  |
| theta_q314_category | `Q900` · theta_q314_category | 0.229 |  |  |  |  | 17.8 |  | Tab2:row6:col1, Tab2:row6:col2 |  |
| theta_v1_category | `Q900` · theta_v1_category | 1.16 | L |  |  |  | 20.0 |  | Tab2:row9:col1, Tab2:row9:col2 |  |
| theta_v2_category | `Q900` · theta_v2_category | 0.805 | L |  |  |  | 23.4 |  | Tab2:row12:col1, Tab2:row12:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Vc' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Q' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Vp' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'F1' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Healthy subjects' routed out of structural estimates ('Residual variability (exponential)')
- table section residual_error: 'Patients with RTT, TBI or FXS' routed out of structural estimates ('Residual variability (exponential)')
- table section residual_error: 'Minimum value of objective function' routed out of structural estimates ('Residual variability (exponential)')
- dropped value-less row: 'Shift in CL for RTT = 1'
- covariate level 'Covariate exponent of age on Vc' → Q900:covariate_exponent_of_age_on_vc = 0.556 (power on Q22)
- dropped value-less row: 'Shift in Vp for TBI = 1'
- dropped value-less row: 'Shift in ka for FED'
- dropped value-less row: 'Shift in F1 for FED'
- dropped value-less row: 'Shift in F1 for 18 g dose'
- dropped value-less row: 'Shift in F1 for 24 g dose'
- dropped value-less row: 'Shift in F1 for diarrhea'
- NIL: refused to back-fill base 'Frel' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number -0.133 (source ['Tab2:footnote', 'Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number -0.132 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number -0.284 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number -0.148 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.443 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.273 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.235 (source ['Tab2:footnote', 'Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number -0.169 (source ['Tab2:footnote', 'Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.549 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1.15 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka (1/h)' → 1/h (from the popPK convention: 'No unit stated in text or footnotes for ka; first-order absorption rate constants are conventionally in 1/h, consistent ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trofinetide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col3 = '13.6%CV'
- unparsed cell Tab2:row5:col1 = '− 0.146'
- unparsed cell Tab2:row7:col3 = '30.8%CV'
- unparsed cell Tab2:row10:col3 = '65.3%CV'
- unparsed cell Tab2:row11:col3 = '30.2%CV'
- unparsed cell Tab2:row13:col1 = '− 0.753'
- unparsed cell Tab2:row15:col1 = '− 0.0969'
- unparsed cell Tab2:row16:col3 = '20.2%CV'
- unparsed cell Tab2:row17:col1 = '− 0.133'
- unparsed cell Tab2:row18:col1 = '− 0.132'
- unparsed cell Tab2:row19:col1 = '− 0.284'
- unparsed cell Tab2:row20:col1 = '− 0.157'
- unparsed cell Tab2:row28:col3 = '28.1%CV'
- unparsed cell Tab2:row29:col3 = '37.4%CV'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.71 (22/31 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[covariate_exponent_of_age_on_vc]` | 0.556 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_gfr_power]` |  | 0.272 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_category]` | 0.229 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_gfr_power]` | 0.272 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_category]` |  | 0.229 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_age_power]` |  | 0.556 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].covariate_forms` | ['additive_shift'] | ['additive_shift', 'power'] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | trofinetide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trofinetide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row14:col1', 'Tab2:row14:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.7 | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.7 L/h | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 25 L | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 35.4 L | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | pass | C_central (measured=trofinetide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  | 0.009806 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference/Trofinetide_Darwish2025v2_reference_modelica.zip" download>Trofinetide_Darwish2025v2_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference/Trofinetide_Darwish2025v2_reference_fmi.zip" download>Trofinetide_Darwish2025v2_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference/Trofinetide_Darwish2025v2_reference_matlab.zip" download>Trofinetide_Darwish2025v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference/Trofinetide_Darwish2025v2_reference_matlab_simbio.zip" download>Trofinetide_Darwish2025v2_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference/Trofinetide_Darwish2025v2_reference_sbml.zip" download>Trofinetide_Darwish2025v2_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference/Trofinetide_Darwish2025v2_reference_cellml.zip" download>Trofinetide_Darwish2025v2_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3153 | kg/mol |
| input | dosing | `F` | 0.9 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.002 | kg |
| input | model | `Cl` | 3.25e-06 | m3/s |
| input | model | `VdPerKg` | 0.0003571 | m3/kg |
| input | model | `k12` | 1.578e-05 | 1/s |
| input | model | `k21` | 1.114e-05 | 1/s |
| input | model | `ka` | 0.0001094 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Darwish M, Passarell J, Maxwell K, Bradley H, Bishop KM, Youakim JM. Population Pharmacokinetics of Trofinetide in a Pediatric Population Aged 2-4 Years with Rett Syndrome. Advances in therapy 42(2):1009–1025 (2025). [doi:10.1007/s12325-024-03058-7](https://doi.org/10.1007/s12325-024-03058-7)

**This record:** Pharmacolibrary v26.09, model `Trofinetide_Darwish2025v2_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference>

```bibtex
@misc{pharmacolibrary_TrofinetideDarwish2025v2reference,
  title  = {{Pharmacolibrary model Trofinetide_Darwish2025v2_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference},
  note   = {Parameters from doi:10.1007/s12325-024-03058-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2000 mg, single dose, first-order absorption (ka 0.394 /h, F 0.9). Doses in the paper: 2000, 4000, 5000, 6000, 8000, 10000, 12000, 18000, 24000 mg.

<dbs-fmusim paramsurl="drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference/Trofinetide_Darwish2025v2_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference/Trofinetide_Darwish2025v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C_enteral` · parameters `Trofinetide_Darwish2025v2_reference_params.json` · controls `Trofinetide_Darwish2025v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrofinetide%5D%20Trofinetide_Darwish2025v2_reference&body=Drug%3A%20trofinetide%0ARecord%3A%20Trofinetide_Darwish2025v2_reference%0APaper%3A%20Darwish_2025_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:01 UTC</sub>
