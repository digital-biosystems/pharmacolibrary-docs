<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/&quot;},{&quot;label&quot;:&quot;Oosten_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Bardol2025_reference&quot;,&quot;label&quot;:&quot;Bardol_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bardol2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Bragg1995_reference&quot;,&quot;label&quot;:&quot;Bragg_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Bragg1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Ihmsen2021_reference&quot;,&quot;label&quot;:&quot;Ihmsen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Ihmsen2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_f&quot;,&quot;label&quot;:&quot;Andersen_1986_f&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_f.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_j&quot;,&quot;label&quot;:&quot;Andersen_1986_j&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_j.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Andersen1986_k&quot;,&quot;label&quot;:&quot;Andersen_1986_k&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Andersen1986_k.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Morphine_Juul2016_reference&quot;,&quot;label&quot;:&quot;Juul_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Juul2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# morphine — `Morphine_Oosten2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the absorption half-life was recorded with inverse time units, conflicting with its structural time dimension.

<div class="pk-model-meta" hidden drug="morphine" model-id="Morphine_Oosten2017_reference" status="rejected" stale="false" population="cancer patients" measured-compound="morphine" parameterization="apparent" topology="1C"></div>

## Citation
Oosten AW, Abrantes JA, Jönsson S, Matic M, van Schaik RHN, de Bruijn P et al. A Prospective Population Pharmacokinetic Study on Morphine Metabolism in Cancer Patients. Clinical pharmacokinetics 56(7):733–746 (2017).
  ·  DOI: [10.1007/s40262-016-0471-7](https://doi.org/10.1007/s40262-016-0471-7)

## Population and dosing

**Population:** cancer patients · age group adult · n = &gt;.

**Dosing:** 2, 10, 40 mg/h for continuous subcutaneous morphine, mg for bolus subcutaneous morphine, mg for oral ER morphine, and mg for oral IR morphine, oral, subcutaneous, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t lag, ER (h) | tlag | 0.25 | h |
| k a, SC (h−1) | t1/2ka | 3.96 | h−1 |
| k a, ER (h−1) | kabs | 0.221 | h−1 |
| F oral (%)b | Fab | 0.372 |  |
| CL70kg (L/h)c | CLnorm | 91.9 | L/h |
| V 70kg (L)c | V | 278 | L |
| F m, M6G | fm | 0.104 |  |
| θ 1 b | equation variable | 0.170 |  |
| θ 3 b | n_transit | 0.565 |  |
| CLmet, 70kg (L/h)d | CLm/F | 4.71 | L/h |
| theta_q24_egfr | theta_q24_egfr | 0.0128 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.138). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the absorption half-life was recorded with inverse time units, conflicting with its structural time dimension.**

The parameter for the half-life of the absorption phase (3.96) carries a unit of h−1, which creates a dimension mismatch against the required time dimension. Additionally, the absolute bioavailability (0.372) was extracted as a fraction rather than a percentage, causing the coherence check to flag a double correction for apparent parameters. Extracted — morphine: tlag 0.25 h, t1/2ka 3.96 h−1, kabs 0.221 h−1, Fab 0.372, CLnorm 91.9 L/h, V 278 L, fm 0.104, n_transit 0.565, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading morphine → m3g (metabolism); morphine → m6g (metabolism); it also differs on 24 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t lag, ER (h) | `Q83` · tlag | 0.25 | h | 900 | s | h | llm (0.6) | Tab3:row2:col2 |
| k a, SC (h−1) | `Q95` · t1/2ka | 3.96 | h−1 |  |  | 1/h | llm (0.6) | Tab3:row3:col2 |
| k a, ER (h−1) | `Q49` · kabs | 0.221 | h−1 | 6.139e-05 | 1/s | 1/h | llm (0.6) | Tab3:row5:col2 |
| F oral (%)b | `Q40` · Fab | 0.372 |  | 0.372 |  |  | llm (0.6) | Tab3:row6:col2 |
| CL70kg (L/h)c | `Q354` · CLnorm | 91.9 | L/h | 2.553e-05 | m3/s | l/h | llm (0.6) | Tab3:row7:col2 |
| V 70kg (L)c | `Q61` · V | 278 | L | 0.278 | m3 | l | llm (0.6) | Tab3:row8:col2 |
| F m, M6G | `Q45` · fm | 0.104 |  | 0.104 |  |  | llm (0.6) | Tab3:row11:col2 |
| θ 1 b | `Q900` · equation variable | 0.170 |  | 0.17 |  |  | llm (0.6) | Tab3:row12:col2 |
| θ 3 b | `Q311` · n_transit | 0.565 |  | 0.565 |  |  | llm (0.6) | Tab3:row14:col2 |
| CLmet, 70kg (L/h)d | `Q351` · CLm/F | 4.71 | L/h | 1.308e-06 | m3/s | l/h | llm (0.6) | Tab3:row17:col2 |
| theta_q24_egfr | `Q900` · theta_q24_egfr | 0.0128 |  |  |  |  |  | Tab3:row19:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'k a, all (%CV [η-shrinkage])' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'CL70kg (%CV [η-shrinkage])' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V 70kg (%CV [η-shrinkage])' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'CLM3G (%CV [η-shrinkage])' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'CLM6G (%CV [η-shrinkage])' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Correlation CLM3G−CLM6G e' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V M3G (%CV [η-shrinkage])' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V M6G (%CV [η-shrinkage])' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'θ 1 (%CV [η-shrinkage])' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'θ 3 (%CV [η-shrinkage])' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Morphine (%CV [ε-shrinkage])' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M3G (%CV [ε-shrinkage])' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M6G (%CV [ε-shrinkage])' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Correlation morphine−M3Ge' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Correlation morphine−M6Ge' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Correlation M3G−M6Ge' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'k a, SC (h−1)' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- unit_dimension_mismatch: 'k a, IR (h−1)' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped duplicate Q95 ('k a, IR (h−1)', value '6.00') — already have one for this compound
- dropped unlinked row (NIL): 'F m, M3G' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col2'])
- dropped duplicate Q900 ('θ 2 b', value '0.953') — already have one for this compound
- dropped unlinked row (NIL): 'F 1p, M3G b' — extend the ontology if this is a real PK parameter (source ['Tab3:row15:col2'])
- routed 'F 1p, M6G b' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q61 ('V met, 70kg (L)c', value '25.8') — already have one for this compound
- dropped value-less row: 'CI'
- dropped value-less row: 'CV'
- dropped value-less row: 'eGFR'
- dropped value-less row: 'M3G'
- dropped value-less row: 'M6G'
- dropped value-less row: 'NA'
- dropped value-less row: 'RSE'
- dropped value-less row: 'SIR'
- dropped value-less row: '%RSE'
- NIL: refused to back-fill base 'Fab' from footnote/prose loose number None (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['Tab3:footnote']); the table cell was unparseable — needs review
- covariate effect for Q24 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=morphine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.138 (4/29 fields) | 25 |

<details><summary>25 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['morphine', 'm3g', 'metabolism'], ['morphine', 'm6g', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cl70kg (l/h)c]` |  | 91.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl70kg (l/h)c]` | 91.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clmet, 70kg (l/h)d].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[clmet, 70kg (l/h)d].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[f 1p, m3g b]` |  | 0.355 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f 1p, m6g b]` |  | 0.0631 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f m, m3g]` |  | 0.573 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f m, m6g]` |  | 0.104 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f m, m6g]` | 0.104 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f oral (%)b]` |  | 0.372 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f oral (%)b]` | 0.372 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a, er]` | 0.221 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a, sc]` |  | 3.96 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a, sc]` | 3.96 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag, er]` |  | 0.25 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag, er]` | 0.25 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_egfr]` |  | 0.0128 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q24_egfr]` | 0.0128 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 70kg (l)c]` |  | 278 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 70kg (l)c]` | 278 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v met, 70kg (l)c]` |  | 25.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ 1 b].parameter_id` | Q900 | Q23 | mismatch |
| `gpt-oss-120b` | `parameters[θ 3 b]` | 0.565 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab3:row17:col2'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Tab3:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab3:row8:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab3:row2:col2'] |
| C5_dimension_Q95 | fail | [time] | h−1 (1 / [time]) | ['Tab3:row3:col2'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=0.104 present with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 278 L | ['Tab3:row8:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmorphine%5D%20Morphine_Oosten2017_reference&body=Drug%3A%20morphine%0ARecord%3A%20Morphine_Oosten2017_reference%0APaper%3A%20Oosten_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_morphine/Morphine_Oosten2017_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 10:51 UTC</sub>
