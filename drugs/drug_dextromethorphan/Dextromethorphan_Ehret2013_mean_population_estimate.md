<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;dextromethorphan&quot;,&quot;href&quot;:&quot;drugs/drug_dextromethorphan/&quot;},{&quot;label&quot;:&quot;Ehret_2013 \u00b7 mean_population_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dextromethorphan — `Dextromethorphan_Ehret2013_mean_population_estimate`

> ## <span class="pk-badge pk-badge--orange" title="molar_mass_missing:dextrorphan: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">Needs review</span>

> The dextromethorphan parent–metabolite model was quarantined because bioavailability (F), clearance (Cl) and absorption lag time (Tlag) were left at library defaults, and the dextrorphan metabolite compartment had no volume, clearance, formation clearance or molar mass.

<div class="pk-model-meta" hidden drug="dextromethorphan" model-id="Dextromethorphan_Ehret2013_mean_population_estimate" status="model_quarantined" stale="false" population="adults with acute post-operative pain (knee ligament surgery) plus healthy volunteers" measured-compound="dextromethorphan" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Ehret GB, Daali Y, Chabert J, Rebsamen M, Wolff A, Forster A et al. Influence of CYP2D6 activity on pre-emptive analgesia by the N-methyl-D-aspartate antagonist dextromethorphan in a randomized controlled trial of acute pain. Pain physician 16(1):45–56 (2013).

## Population and dosing

**Population:** adults with acute post-operative pain (knee ligament surgery) plus healthy volunteers · condition acute post-operative pain · age group adult · n = 44.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka (h-1) | kabs | 2.8 | h-1 |
| t1/2g (h) | tlag | 0.45 | h |
| k12 (h-1) | kfm | 0.074 | h-1 |
| k20 (h-1) | kel | 0.21 | h-1 |
| VDM (l) | V | 627 | l |
| VDOR (l) | V | 1700 | l |

## Caveats

- a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="molar_mass_missing:dextrorphan: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.909). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The dextromethorphan parent–metabolite model was quarantined because bioavailability (F), clearance (Cl) and absorption lag time (Tlag) were left at library defaults, and the dextrorphan metabolite compartment had no volume, clearance, formation clearance or molar mass.**

Although the record lists fitted values for dextromethorphan (kabs 2.8 h-1, tlag 0.45 h, V 627 l) and dextrorphan (kfm 0.074 h-1, kel 0.21 h-1, V 1700 l), the builder substituted defaults for F, Cl and Tlag, so the model was held back rather than published with invented numbers. The metabolite dextrorphan's own V, CL and formation clearance were all 0, and its molar mass was missing, meaning mass conversion from parent to metabolite would be wrong (1 mg per mg instead of molecule-per-molecule). The topology check also failed: a one-compartment enteral structure was obtained where a three-compartment hepatic parent–metabolite structure was expected. The deviations check returned 'defaulted_parameters: not acceptable'. Extracted — dextromethorphan: kabs 2.8 h-1, tlag 0.45 h, V 627 l; dextrorphan: kfm 0.074 h-1, kel 0.21 h-1, V 1.7e+03 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[t1/2g].parameter_id`: this record has Q83, the second reading Q89. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka (h-1) | `Q49` · kabs | 2.8 | h-1 | 0.0007778 | 1/s | 1/h | exact (1) | Ehret_2013_table_p7_1:row0:col1 |
| t1/2g (h) | `Q83` · tlag | 0.45 | h | 1620 | s | h | exact (1) | Ehret_2013_table_p7_1:row1:col1 |
| k12 (h-1) | `Q305` · kfm | 0.074 | h-1 | 2.056e-05 | 1/s | 1/h | exact (1) | Ehret_2013_table_p7_1:row2:col1 |
| k20 (h-1) | `Q47` · kel | 0.21 | h-1 | 5.833e-05 | 1/s | 1/h | exact (1) | Ehret_2013_table_p7_1:row4:col1 |
| VDM (l) | `Q61` · V | 627 | l | 0.627 | m3 | l | llm (0.6) | Ehret_2013_table_p7_1:row5:col1 |
| VDOR (l) | `Q61` · V | 1700 | l | 1.7 | m3 | l | exact (1) | Ehret_2013_table_p7_1:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Cinhib' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ehret_2013_table_p7_1:row3:col1'])
- metabolite volume: 'VDOR (l)' Q63→Q61 for dextrorphan — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (VDM (l)); Q61 (VDOR (l))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dextromethorphan
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [1] (site presystemic: 'First-pass production of other metabolites was neglected. 4) Inhibition by quinidine was modeled so that the DM to DOR b')
- population split: 'mean population estimate' subgroup of Ehret_2013 (paper reports 6 populations: em (n = 8), im (n = 16), mean population estimate, placebo (n = 16), pm (n = 4), um (n = 1))
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 32 linked by role; re-tagged parent→dextrorphan ×12
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_1: grid unusable → re-running vision table extraction for Ehret_2013
- unparsed cell Ehret_2013_table_p7_1:row0:col5 = '2.6 (0.8 - 3.9)'
- unparsed cell Ehret_2013_table_p7_1:row1:col5 = '0.8 (0.5 - 1.2)'
- unparsed cell Ehret_2013_table_p7_1:row2:col5 = '0.041 (0.029 - 0.069)'
- unparsed cell Ehret_2013_table_p7_1:row3:col5 = '0.27 (NA)'
- unparsed cell Ehret_2013_table_p7_1:row4:col5 = '0.51 (0.21 - 1.07)'
- unparsed cell Ehret_2013_table_p7_1:row5:col5 = '961 (585 - 1292)'
- unparsed cell Ehret_2013_table_p7_1:row6:col5 = '3776 (1222 - 6441)'
- unparsed cell Ehret_2013_table_p7_1:row7:col1 = '30%'
- unparsed cell Ehret_2013_table_p7_1:row8:col1 = '24%'
- transposed table Ehret_2013_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Ehret_2013_table_2:row2:col4 = '&lt; 0.001'
- companion parameter table 2 transcribed (14 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t1/2g].parameter_id` | Q83 | Q89 | mismatch |

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
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Ehret_2013_table_p7_1:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Ehret_2013_table_p7_1:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ehret_2013_table_p7_1:row0:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ehret_2013_table_p7_1:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ehret_2013_table_p7_1:row6:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Ehret_2013_table_p7_1:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 627 L | ['Ehret_2013_table_p7_1:row5:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.7e+03 L | ['Ehret_2013_table_p7_1:row6:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_metabolite_built[dextrorphan] |  | fail | own V, CL and formation clearance &gt; 0 | {'V': 0, 'CL': 0, 'formation': 0} | dextrorphan: V, CL, formation not set — the metabolite's compartment would be the template default |
| T3_metabolite_output[dextrorphan] |  | skipped |  |  | the simulation recorded no per-molecule outputs |
| T3_molar_mass[dextrorphan] |  | fail |  | {'MW': 0, 'MW_m1': 0} | a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_rate_constant_conversion |  | pass | k12 (rate_constant) → CL = k·V | no explicit k·V edge found in model | rate constant must not be used raw as a clearance |
| T3_topology_template |  | fail | parent_metabolite_hepatic → PK_3M_3C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdextromethorphan%5D%20Dextromethorphan_Ehret2013_mean_population_estimate&body=Drug%3A%20dextromethorphan%0ARecord%3A%20Dextromethorphan_Ehret2013_mean_population_estimate%0APaper%3A%20Ehret_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dextromethorphan/Dextromethorphan_Ehret2013_mean_population_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:25 UTC</sub>
