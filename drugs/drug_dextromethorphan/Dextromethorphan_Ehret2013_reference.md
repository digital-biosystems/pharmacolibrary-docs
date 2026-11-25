<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;dextromethorphan&quot;,&quot;href&quot;:&quot;drugs/drug_dextromethorphan/&quot;},{&quot;label&quot;:&quot;Ehret_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dextromethorphan_Kukanich2004_reference&quot;,&quot;label&quot;:&quot;Kukanich_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dextromethorphan/Dextromethorphan_Kukanich2004_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dextromethorphan — `Dextromethorphan_Ehret2013_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> No value for dextromethorphan's bioavailability, clearance and absorption lag time; the covariate scenarios were not simulated (+3 more).

<div class="pk-model-meta" hidden drug="dextromethorphan" model-id="Dextromethorphan_Ehret2013_reference" status="model_quarantined" stale="false" population="adults with acute post-operative pain" measured-compound="dextromethorphan" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Ehret GB, Daali Y, Chabert J, Rebsamen M, Wolff A, Forster A et al. Influence of CYP2D6 activity on pre-emptive analgesia by the N-methyl-D-aspartate antagonist dextromethorphan in a randomized controlled trial of acute pain. Pain physician 16(1):45–56 (2013).

## Population and dosing

**Population:** adults with acute post-operative pain · condition acute post-operative pain · age group adult · n = 44.

**Dosing:** 50 mg, oral, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| ka (h-1) | kabs | 2.8 | h-1 | 124 (None% RSE) |
| t1/2g (h) | t1/2γ | 0.45 | h | 5 (None% RSE) |
| k12 (h-1) | kfm | 0.074 | h-1 | 53 (None% RSE) |
| k20 (h-1) | kel | 0.21 | h-1 | 70 (None% RSE) |
| VDM (l) | V | 627 | l | 20 (None% RSE) |
| VDOR (l) | V | 1700 | l | 63 (None% RSE) |
| theta_q22_em | theta_q22_em | 0.36 |  |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.917). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for dextromethorphan's bioavailability, clearance and absorption lag time; the covariate scenarios were not simulated (+3 more).**

The model was built, but dextromethorphan's bioavailability, clearance and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — dextromethorphan: kabs 2.8 h-1, t1/2γ 0.45 h, V 627 l; dextrorphan: kfm 0.074 h-1, kel 0.21 h-1, V 1.7e+03 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[t1/2g].parameter_id`: this record has Q89, the second reading Q57. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| ka (h-1) | `Q49` · kabs | 2.8 | h-1 | 0.0007778 | 1/s | 1/h | exact (1) | Ehret_2013_table_p7_1:row0:col1, Ehret_2013_table_p7_1:row0:col5 | 124 (None% RSE) |
| t1/2g (h) | `Q89` · t1/2γ | 0.45 | h | 1620 | s | h | llm (0.6) | Ehret_2013_table_p7_1:row1:col1, Ehret_2013_table_p7_1:row1:col5 | 5 (None% RSE) |
| k12 (h-1) | `Q305` · kfm | 0.074 | h-1 | 2.056e-05 | 1/s | 1/h | exact (1) | Ehret_2013_table_p7_1:row2:col1, Ehret_2013_table_p7_1:row2:col5 | 53 (None% RSE) |
| k20 (h-1) | `Q47` · kel | 0.21 | h-1 | 5.833e-05 | 1/s | 1/h | exact (1) | Ehret_2013_table_p7_1:row4:col1, Ehret_2013_table_p7_1:row4:col5 | 70 (None% RSE) |
| VDM (l) | `Q61` · V | 627 | l | 0.627 | m3 | l | llm (0.6) | Ehret_2013_table_p7_1:row5:col1, Ehret_2013_table_p7_1:row5:col5 | 20 (None% RSE) |
| VDOR (l) | `Q61` · V | 1700 | l | 1.7 | m3 | l | exact (1) | Ehret_2013_table_p7_1:row6:col1, Ehret_2013_table_p7_1:row6:col5 | 63 (None% RSE) |
| theta_q22_em | `Q900` · theta_q22_em | 0.36 |  |  |  |  |  | Ehret_2013_table_2:row6:col1, Ehret_2013_table_2:row6:col4, Ehret_2013_table_2:row6:col6 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ka (h-1)' routed out of structural estimates ('Interindividual variability (CV, %)')
- table section iiv: 't1/2g (h)' routed out of structural estimates ('Interindividual variability (CV, %)')
- table section iiv: 'k12 (h-1)' routed out of structural estimates ('Interindividual variability (CV, %)')
- table section iiv: 'k20 (h-1)' routed out of structural estimates ('Interindividual variability (CV, %)')
- table section iiv: 'VDM (l)' routed out of structural estimates ('Interindividual variability (CV, %)')
- table section iiv: 'VDOR (l)' routed out of structural estimates ('Interindividual variability (CV, %)')
- column 'literature values mean (range) c' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Cinhib' — extend the ontology if this is a real PK parameter (source ['Ehret_2013_table_p7_1:row3:col1'])
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- metabolite volume: 'VDOR (l)' Q63→Q61 for dextrorphan — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (VDM (l)); Q61 (VDOR (l))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dextromethorphan
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [1] (site presystemic: 'First-pass production of other metabolites was neglected. 4) Inhibition by quinidine was modeled so that the DM to DOR b')
- pharmacogenetic covariate 'theta_q22_em' (em) — PGx domain
- row roles: per-genotype parameters — typical value from the reference group: EM (n = 8)
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 18 linked by role; re-tagged parent→dextrorphan ×10, parent→quinidine ×1
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Ehret_2013_table_p7_1: unbound_uncertainty
- table Ehret_2013_table_p7_1: unparsed_numeric_cell
- table Ehret_2013_table_2: multiple_interval_summaries
- table Ehret_2013_table_2: ragged_grid
- companion parameter table 2 transcribed (35 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.917 (11/12 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t1/2g].parameter_id` | Q89 | Q57 | mismatch |

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
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Ehret_2013_table_p7_1:row2:col1', 'Ehret_2013_table_p7_1:row2:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Ehret_2013_table_p7_1:row4:col1', 'Ehret_2013_table_p7_1:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ehret_2013_table_p7_1:row0:col1', 'Ehret_2013_table_p7_1:row0:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ehret_2013_table_p7_1:row5:col1', 'Ehret_2013_table_p7_1:row5:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ehret_2013_table_p7_1:row6:col1', 'Ehret_2013_table_p7_1:row6:col5'] |
| C5_dimension_Q89 | pass | [time] |  | ['Ehret_2013_table_p7_1:row1:col1', 'Ehret_2013_table_p7_1:row1:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 627 L | ['Ehret_2013_table_p7_1:row5:col1', 'Ehret_2013_table_p7_1:row5:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.7e+03 L | ['Ehret_2013_table_p7_1:row6:col1', 'Ehret_2013_table_p7_1:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_rate_constant_conversion |  | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_topology_template |  | fail | parent_metabolite_hepatic → PK_3M_3C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.917 (11 of 12 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.917 | cross-check contradicted by a second reader: verdict disputed; agreement 0.917 (11 of 12 compared fields agree); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_t_half_terminal | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdextromethorphan%5D%20Dextromethorphan_Ehret2013_reference&body=Drug%3A%20dextromethorphan%0ARecord%3A%20Dextromethorphan_Ehret2013_reference%0APaper%3A%20Ehret_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dextromethorphan/Dextromethorphan_Ehret2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:53 UTC</sub>
