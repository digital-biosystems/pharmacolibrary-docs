<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;atogepant&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/&quot;},{&quot;label&quot;:&quot;Schlachter_2026 \u00b7 phase_1_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_2_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_2_modela&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Schlachter_2026_2_MMD&quot;,&quot;label&quot;:&quot;Schlachter_2026_2 \u00b7 MMD&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/pd_Schlachter_2026_2_MMD.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atogepant — `Atogepant_Schlachter2026_phase_1_model`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> T1/2ka  has no unit.

<div class="pk-model-meta" hidden drug="atogepant" model-id="Atogepant_Schlachter2026_phase_1_model" status="needs_review" stale="false" population="healthy participants and patients with migraine" measured-compound="atogepant" parameterization="apparent" topology="2C"></div>

## Citation
Schlachter L, Stodtmann S, Voelkner A, Jonsson F, Lagraauw HM, Boinpally RR. Population Pharmacokinetics of Atogepant for the Prevention of Migraine. Clinical pharmacokinetics 65(1):149–164 (2026).
  ·  DOI: [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5)

## Population and dosing

**Population:** healthy participants and patients with migraine · condition migraine · age group adult.

**Dosing:** 10, 30, 60, 170, 300 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Absorption rate constant [ka (/h)] | kabs | 2.44 | 1/h |
| Apparent clearance healthy participants [CL/F (L/h)] | CL/F | 19.82 | L/h |
| Apparent central volume of distribution [V1/F (L)] | V1/F | 73.52 | L |
| Apparent first intercompartmental clearance [Q/F (L/h)] | Q/F | 2.75 | L/h |
| Apparent first peripheral volume of distribution [V2/F (L)] | V2 | 47.97 | L |
| Lag time [ALAG (h)] | tlag | 0.30 | h |
| female_sex_on_cl_f | female_sex_on_cl_f | -0.19 |  |
| Famotidine pre-treatment on Frel | Frel | -0.15 |  |
| Famotidine pre-treatment on ka | t1/2ka | -0.51 |  |
| theta_kabs_weight_power | theta_kabs_weight_power | -0.41 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T1/2ka  has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — atogepant: kabs 2.44 1/h, CL/F 19.8 L/h, V1/F 73.5 L, Q/F 2.75 L/h, V2 48 L, tlag 0.3 h, Frel -0.15, t1/2ka -0.51.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atogepant, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Absorption rate constant [ka (/h)] | `Q49` · kabs | 2.44 | 1/h | 0.0006778 | 1/s | 1/h | boundary_llm_dim_refused (0.8) | Tab2:row2:col1 |
| Apparent clearance healthy participants [CL/F (L/h)] | `Q27` · CL/F | 19.82 | L/h | 5.506e-06 | m3/s | L/h | llm_confirmed (0.6) | Tab2:row4:col1 |
| Apparent central volume of distribution [V1/F (L)] | `Q290` · V1/F | 73.52 | L | 0.07352 | m3 | L | llm_confirmed (0.6) | Tab2:row6:col1 |
| Apparent first intercompartmental clearance [Q/F (L/h)] | `Q69` · Q/F | 2.75 | L/h | 7.639e-07 | m3/s | L/h | llm_corrected (0.6) | Tab2:row7:col1 |
| Apparent first peripheral volume of distribution [V2/F (L)] | `Q64` · V2 | 47.97 | L | 0.04797 | m3 | L | boundary_compartment (0.9) | Tab2:row8:col1 |
| Lag time [ALAG (h)] | `Q83` · tlag | 0.30 | h | 1080 | s | h | llm_confirmed (0.6) | Tab2:row11:col1 |
| female_sex_on_cl_f | `Q900` · female_sex_on_cl_f | -0.19 |  |  |  |  |  | Tab2:row12:col1 |
| Famotidine pre-treatment on Frel | `Q87` · Frel | -0.15 |  |  |  |  | llm_confirmed (0.6) | Tab2:row13:col1 |
| Famotidine pre-treatment on ka | `Q95` · t1/2ka | -0.51 |  |  |  |  | llm_corrected (0.6) | Tab2:row15:col1 |
| theta_kabs_weight_power | `Q900` · theta_kabs_weight_power | -0.41 |  |  |  |  |  | Tab2:row34:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- covariate level 'Female sex on CL/F' → Q900:female_sex_on_cl_f = -0.19 (linear_fractional on Q27)
- implicit units: 'Absorption rate constant [ka (/h)]' → 1/h (from the paper text: "The paper states 'derived first-order absorption rate constant (ka) was 2.48/h' and defines the relationship 'ka = Fk0/[")
- implicit units: 'Apparent clearance healthy participants [CL/F (L/h)]' → L/h (from the paper text: "The paper explicitly states 'CL/F ... was 22.9 L/h in healthy participants' and the model equation block shows 'CL/F = .")
- implicit units: 'Apparent central volume of distribution [V1/F (L)]' → L (from the paper text: "The paper explicitly states 'The apparent central volume of distribution (V1/F) was 86.1 L'.")
- implicit units: 'Apparent first intercompartmental clearance [Q/F (L/h)]' → L/h (from the popPK convention: 'Intercompartmental clearance (Q) is a flow rate parameter. In population PK, it is standardly expressed in L/h, and the ')
- implicit units: 'Apparent first peripheral volume of distribution [V2/F (L)]' → L (from the popPK convention: 'Volume of distribution (V) is a volumetric parameter. In population PK, it is standardly expressed in L, and the value 4')
- implicit units: 'Lag time [ALAG (h)]' → h (from the paper text: "The paper explicitly states 'lengthened absorption lag time from 0.276 to 0.46 h'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atogepant
- bound model equation to Q40 (Fab): F = 86.1 * (bodyweight/76.8)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- population split: 'phase 1 model' subgroup of Schlachter_2026 (paper reports 3 populations: phase 1 model, phase 2 modela, phase 3 modela)

**Extraction notes:**
- unparsed cell Tab2:row18:col5 = '(−0.669 to −0.654)'
- unparsed cell Tab2:row19:col5 = '(−0.164 to −0.0924)'
- unparsed cell Tab2:row25:col5 = '(−0.305 to −0.266)'
- unparsed cell Tab2:row27:col5 = '(−0.325 to −0.172)'
- unparsed cell Tab2:row29:col5 = '(−0.503 to −0.230)'
- unparsed cell Tab2:row32:col1 = '−0.44/−0.42'
- unparsed cell Tab2:row32:col5 = '(−0.507 to −0.198)'
- LLM selected parameter table(s) 2
- captured model equation F = 86.1 * (bodyweight/76.8)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (12/18 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[famotidine pre-treatment on ka]` | -0.51 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[female_sex_on_cl_f]` | -0.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_sex]` |  | -0.19 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | atogepant | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atogepant | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row8:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row7:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row11:col1'] |
| C5_unit_missing_Q95 | fail | [time] |  | ['Tab2:row15:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19.8 L/h | ['Tab2:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 73.5 L | ['Tab2:row6:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 48 L | ['Tab2:row8:col1'] |

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batogepant%5D%20Atogepant_Schlachter2026_phase_1_model&body=Drug%3A%20atogepant%0ARecord%3A%20Atogepant_Schlachter2026_phase_1_model%0APaper%3A%20Schlachter_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atogepant/Atogepant_Schlachter2026_phase_1_model%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 06:23 UTC</sub>
