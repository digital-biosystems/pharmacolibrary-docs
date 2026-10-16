<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/&quot;},{&quot;label&quot;:&quot;Stepniewska_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amodiaquine_Ding2024_nonmem_estimates_rse_a&quot;,&quot;label&quot;:&quot;Ding_2024_nonmem_estimates_rse_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_estimates_rse_a.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amodiaquine — `Amodiaquine_Stepniewska2009_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model available in **Models**; browser simulation unavailable.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The model was built but has not been simulated yet; the covariate scenarios were not simulated (+1 more).**

The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is amodiaquine's own; they describe dihydroartemisinin and desethylamodiaquine. Extracted — dihydroartemisinin: kabs 4.27 h -1, CL 0.616 L kg-1 h-1, V1/F 2.13 L kg-1; desethylamodiaquine: kabs 0.13 h-1, CLm/F 0.61 L kg-1 h-1, Q 0.68 L kg-1 h-1, V1/F 35.4 L kg-1, V2/F 87.9 L kg-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl/f: this record has 0.610, the second reading none; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `amodiaquine`, measured `desethylamodiaquine`.

## Citation
Stepniewska K et al., Population pharmacokinetics of artesuna…, Malaria journal (2009)
  ·  DOI: [10.1186/1475-2875-8-200](https://doi.org/10.1186/1475-2875-8-200)

<div class="pk-model-meta" hidden drug="amodiaquine" model-id="Amodiaquine_Stepniewska2009_reference" status="not_simulated" stale="false" population="children with acute malaria" measured-compound="desethylamodiaquine" parameterization="apparent" topology="general_linear"></div>

**Model structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** CLm/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h -1) | `Q49` · kabs | 4.271 | h -1 | 0.001186388888888889 | [1] / [h] | not captured | exact (1.0) | T4:row2:col1 | — | not captured |
| CL/F1 (L kg-1 h-1) | `Q22` · CL | 0.616 | L kg-1 h-1 | 1.1977777777777778e-05 | [l] / [[h] · [kg]] | not captured | exact (1.0) | T4:row3:col1, T4:row14:col1 | — | not captured |
| V/F (L kg-1) | `Q290` · V1/F | 2.134 | L kg-1 | 0.14938 | [l] / [kg] | not captured | exact (1.0) | T4:row5:col1, T4:row16:col1 | — | not captured |
| Ka (h-1) | `Q49` · kabs | 0.13 | h-1 | 3.611111111111111e-05 | [1] / [h] | not captured | exact (1.0) | T4:row13:col1, Stepniewska_2009_table_3:row0:col1 | — | not captured |
| CL/F (L kg-1 h-1) | `Q351` · CLm/F | 0.610 | L kg-1 h-1 | 1.1861111111111111e-05 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Stepniewska_2009_table_3:row1:col1 | — | not captured |
| Q (L kg-1 h-1) | `Q30` · Q | 0.680 | L kg-1 h-1 | 1.3222222222222223e-05 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Stepniewska_2009_table_3:row2:col1 | — | not captured |
| Vcentral/F (L kg-1) | `Q290` · V1/F | 35.4 | L kg-1 | 2.478 | [l] / [kg] | not captured | exact (1.0) | Stepniewska_2009_table_3:row3:col1 | — | not captured |
| Vperipheral/F (L kg-1) | `Q82` · V2/F | 87.9 | L kg-1 | 6.1530000000000005 | [l] / [kg] | not captured | exact (1.0) | Stepniewska_2009_table_3:row4:col1 | — | not captured |
| theta_q27_category | `Q900` · theta_q27_category | 0.662 | not captured | not captured | not captured | not captured | not captured (not captured) | T4:row4:col1, T4:row15:col1 | — | not captured |
| theta_q76_age | `Q900` · theta_q76_age | 0.063 | not captured | not captured | not captured | not captured | not captured (not captured) | T4:row6:col1, T4:row17:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table representations disagree for 'Ka (h -1)'; source reconciliation required
- table representations disagree for 'CL/F1 (L kg-1 h-1)'; source reconciliation required
- table representations disagree for 'Increase in CL/F due to the 3rd dose period'; source reconciliation required
- table representations disagree for 'V/F (L kg-1)'; source reconciliation required
- table representations disagree for 'Effect of Age on V/F'; source reconciliation required
- table representations disagree for 'σ (ng/mL)'; source reconciliation required
- table representations disagree for 'Ka (h-1)'; source reconciliation required
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- metabolite desethylamodiaquine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=desethylamodiaquine
- topology: 2 first-order transfer(s) across 2 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 11 linked by role; re-tagged dihydroartemisinin→desethylamodiaquine ×6
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T4: conflicting_units
- table T4: unbound_uncertainty
- table T4: unparsed_numeric_cell
- table T4: representations disagree; selected evidence retained, not merged
- table Stepniewska_2009_table_3: conflicting_units
- table Stepniewska_2009_table_3: unbound_uncertainty
- table Stepniewska_2009_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (7 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (4/24 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f1]` | not captured | 0.616 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f1]` | 0.616 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 0.610 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 0.610 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | 2.587 | 2.091 | mismatch |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | 2.091 | 2.587 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 0.13 | 4.271 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 4.271 | 0.13 | mismatch |
| `gpt-oss-120b` | `parameters[q]` | 0.680 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | not captured | 0.680 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_category]` | not captured | 0.662 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_category]` | 0.662 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_age]` | not captured | 0.063 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q76_age]` | 0.063 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 2.134 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 2.134 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcentral/f]` | 35.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcentral/f]` | not captured | 35.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vperipheral/f]` | 87.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vperipheral/f]` | not captured | 87.9 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T4:row3:col1', 'T4:row14:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T4:row5:col1', 'T4:row16:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Stepniewska_2009_table_3:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Stepniewska_2009_table_3:row2:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Stepniewska_2009_table_3:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T4:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T4:row13:col1', 'Stepniewska_2009_table_3:row0:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Stepniewska_2009_table_3:row4:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 43.1 L/h | not captured | not captured | ['T4:row3:col1', 'T4:row14:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 149 L | not captured | not captured | ['T4:row5:col1', 'T4:row16:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.48e+03 L | not captured | not captured | ['Stepniewska_2009_table_3:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 6.15e+03 L | not captured | not captured | ['Stepniewska_2009_table_3:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 7 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V1/F', 'V1/F', 'V2/F'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_amodiaquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Stepniewska_2009` / `Stepniewska_2009::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_amodiaquine/models/modelica/Amodiaquine_Stepniewska2009_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_amodiaquine/models/modelica/Amodiaquine_Stepniewska2009_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference/Amodiaquine_Stepniewska2009_reference_modelica.zip" download>Amodiaquine_Stepniewska2009_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference/Amodiaquine_Stepniewska2009_reference_matlab.zip" download>Amodiaquine_Stepniewska2009_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference/Amodiaquine_Stepniewska2009_reference_matlab_simbio.zip" download>Amodiaquine_Stepniewska2009_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference/Amodiaquine_Stepniewska2009_reference_sbml.zip" download>Amodiaquine_Stepniewska2009_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amodiaquine/Amodiaquine_Stepniewska2009_reference/Amodiaquine_Stepniewska2009_reference_cellml.zip" download>Amodiaquine_Stepniewska2009_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 17:50 UTC</sub>
