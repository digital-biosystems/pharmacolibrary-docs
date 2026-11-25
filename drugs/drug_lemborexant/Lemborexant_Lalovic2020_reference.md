<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;lemborexant&quot;,&quot;href&quot;:&quot;drugs/drug_lemborexant/&quot;},{&quot;label&quot;:&quot;Lalovic_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lemborexant — `Lemborexant_Lalovic2020_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> No value for lemborexant's volume of distribution; the covariate scenarios were not simulated (+2 more).

<div class="pk-model-meta" hidden drug="lemborexant" model-id="Lemborexant_Lalovic2020_reference" status="model_quarantined" stale="false" population="subjects with insomnia disorder" measured-compound="lemborexant" parameterization="apparent" topology="1C"></div>

## Citation
Lalovic B, Majid O, Aluri J, Landry I, Moline M, Hussein Z. Population Pharmacokinetics and Exposure-Response Analyses for the Most Frequent Adverse Events Following Treatment With Lemborexant, an Orexin Receptor Antagonist, in Subjects With Insomnia Disorder. Journal of clinical pharmacology 60(12):1642–1654 (2020).
  ·  DOI: [10.1002/jcph.1683](https://doi.org/10.1002/jcph.1683)

## Population and dosing

**Population:** subjects with insomnia disorder · condition insomnia disorder · age group mixed.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 3 covariate effects.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 22.7 | L/h | 0.252 | 48.1 (3.68% RSE) |
| V2/F (L) | V2/F | 9.09 | L | 0.0909 | 142 (23.2% RSE) |
| Q3/F (L/h) | Q3/F | 32.1 | L/h | 0.0417 | 56.8 (17.2% RSE) |
| V3/F (L) | V3/F | 278 | L | 0.0156 | 82.0 (15.0% RSE) |
| Q4/F (L/h) | Q/F | 31.0 | L/h | 0.0997 |  |
| D1, capsule (h) | D1 | 0.467 | h |  | 167 (None% RSE) |
| Ka, capsule (h−1) | kabs | 0.532 | h−1 |  | 43.8 (None% RSE) |
| ALAG1 (h) | tlag | 0.403 | h |  |  |
| f1_food | f1_food | 1.21 |  |  |  |
| theta_cl_f_bmi_power | theta_cl_f_bmi_power | -0.428 |  | 12.9 |  |
| theta_kabs_food_ka | theta_kabs_food_ka | 0.695 |  |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.84). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for lemborexant's volume of distribution; the covariate scenarios were not simulated (+2 more).**

The model was built, but lemborexant's volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — lemborexant: CL/F 22.7 L/h, V2/F 9.09 L, Q3/F 32.1 L/h, V3/F 278 L, Q/F 31 L/h, D1 0.467 h, kabs 0.532 h−1, tlag 0.403 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].covariate_forms`: this record has ['linear_fractional', 'power'], the second reading ['power']; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 22.7 | L/h | 6.306e-06 | m3/s | l/h | 0.252 | exact (1) | jcph1683-tbl-0002:row1:col1 | 48.1 (3.68% RSE) |
| V2/F (L) | `Q82` · V2/F | 9.09 | L | 0.00909 | m3 | l | 0.0909 | exact (1) | jcph1683-tbl-0002:row5:col1 | 142 (23.2% RSE) |
| Q3/F (L/h) | `Q309` · Q3/F | 32.1 | L/h | 8.917e-06 | m3/s | l/h | 0.0417 | exact (1) | jcph1683-tbl-0002:row6:col1 | 56.8 (17.2% RSE) |
| V3/F (L) | `Q78` · V3/F | 278 | L | 0.278 | m3 | l | 0.0156 | exact (1) | jcph1683-tbl-0002:row7:col1 | 82.0 (15.0% RSE) |
| Q4/F (L/h) | `Q69` · Q/F | 31.0 | L/h | 8.611e-06 | m3/s | l/h | 0.0997 | llm (0.6) | jcph1683-tbl-0002:row8:col1 |  |
| D1, capsule (h) | `Q310` · D1 | 0.467 | h | 1681 | s | h |  | llm_confirmed (0.6) | jcph1683-tbl-0002:row10:col1 | 167 (None% RSE) |
| Ka, capsule (h−1) | `Q49` · kabs | 0.532 | h−1 | 0.0001478 | 1/s | 1/h |  | llm_confirmed (0.6) | jcph1683-tbl-0002:row13:col1 | 43.8 (None% RSE) |
| ALAG1 (h) | `Q83` · tlag | 0.403 | h | 1451 | s | h |  | llm (0.6) | jcph1683-tbl-0002:row16:col1 |  |
| f1_food | `Q900` · f1_food | 1.21 |  |  |  |  |  |  | jcph1683-tbl-0002:row17:col1 |  |
| theta_cl_f_bmi_power | `Q900` · theta_cl_f_bmi_power | -0.428 |  |  |  |  | 12.9 |  | jcph1683-tbl-0002:row2:col1 |  |
| theta_kabs_food_ka | `Q900` · theta_kabs_food_ka | 0.695 |  |  |  |  |  |  | jcph1683-tbl-0002:row15:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V2/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Q3/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V3/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Q4/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V4/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'D1' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Ka' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'F1' routed out of structural estimates ('Interindividual variability (%CV)')
- table section residual_error: 'Proportional (TAD &gt; 3 h), % CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive (TAD &gt;3 h), ng/mL' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (TAD ≤ 3 h), % CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive (TAD ≤3 h), ng/mL' routed out of structural estimates ('Residual variability')
- dropped 'CL/F, ALP' → Q27 = -0.118: a clearance of -0.118 is not a parameter value (source ['jcph1683-tbl-0002:row3:col1'])
- dropped duplicate Q27 ('CL/F, elderly', value '0.739') — already have one for this compound
- dropped unlinked row (NIL): 'V4/F (L)' — extend the ontology if this is a real PK parameter (source ['jcph1683-tbl-0002:row9:col1'])
- dropped duplicate Q310 ('D1, tablet', value '0.254') — already have one for this compound
- dropped duplicate Q310 ('D1, nighttime dosing', value '2.33') — already have one for this compound
- dropped duplicate Q49 ('Ka, tablet', value '1.12') — already have one for this compound
- covariate level 'F1, food' → Q900:f1_food = 1.21 (linear_fractional on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lemborexant
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count

**Extraction notes:**
- table jcph1683-tbl-0002: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.84 (21/25 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional', 'power'] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[f1_food]` | 1.21 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_food_f1]` |  | 1.21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` |  | 783 | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph1683-tbl-0002:row1:col1'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] |  | ['jcph1683-tbl-0002:row6:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['jcph1683-tbl-0002:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph1683-tbl-0002:row13:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['jcph1683-tbl-0002:row8:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['jcph1683-tbl-0002:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['jcph1683-tbl-0002:row5:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph1683-tbl-0002:row16:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.7 L/h | ['jcph1683-tbl-0002:row1:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 9.09 L | ['jcph1683-tbl-0002:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.84 (21 of 25 compared fields agree, 3 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.84 | cross-check contradicted by a second reader: verdict disputed; agreement 0.84 (21 of 25 compared fields agree, 3 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_cmax | reference | skipped | 27 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 0.5 |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blemborexant%5D%20Lemborexant_Lalovic2020_reference&body=Drug%3A%20lemborexant%0ARecord%3A%20Lemborexant_Lalovic2020_reference%0APaper%3A%20Lalovic_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lemborexant/Lemborexant_Lalovic2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:51 UTC</sub>
