<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Haloperidol&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/&quot;},{&quot;label&quot;:&quot;Alasmari_2022 \u00b7 reported_value_s_reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Haloperidol_Franken2017_reference&quot;,&quot;label&quot;:&quot;Franken_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Franken2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Johnson2016_reference&quot;,&quot;label&quot;:&quot;Johnson_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Johnson2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Holley1983_reference&quot;,&quot;label&quot;:&quot;Holley_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Holley1983_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_base&quot;,&quot;label&quot;:&quot;Li_2022_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_base.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_final&quot;,&quot;label&quot;:&quot;Li_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Haloperidol_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_haloperidol/Haloperidol_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Haloperidol — `Haloperidol_Alasmari2022_reported_value_s_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q1 unit µmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3; Q66 unit pmol/min/mg ([substance] / [time] / [mass]) vs [mass] / [time].

<div class="pk-model-meta" hidden drug="Haloperidol" model-id="Haloperidol_Alasmari2022_reported_value_s_reference" status="rejected" stale="false" population="adult healthy, psychotic otherwise healthy, and tuberculosis patients (including rifampicin co-treatment)" measured-compound="haloperidol" parameterization="mechanistic" topology="1C"></div>

## Citation
Alasmari MS, Alasmari F, Alasmari AF, Alshamsan A, Alsanea S, Rasool MF et al. Development and Evaluation of a Physiologically Based Pharmacokinetic Model for Predicting Haloperidol Exposure in Healthy and Disease Populations. Pharmaceutics 14(9) (2022).
  ·  DOI: [10.3390/pharmaceutics14091795](https://doi.org/10.3390/pharmaceutics14091795)

## Population and dosing

**Population:** adult healthy, psychotic otherwise healthy, and tuberculosis patients (including rifampicin co-treatment) · condition healthy and disease populations (psychosis, tuberculosis with and without rifampicin) · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight | MW | 376 | g/mol |
| GFR fraction | CLR | 1 |  |
| Km * | Km | 64 | µmol/L |
| Vmax | Vmax | 210 | pmol/min/mg |
| Reductase content in liver cytosol | equation variable | 75 | pmol/mg |
| clearance (CL) | CL | 1.02 | CL |
| ratio of predicted half-life between control and rifampicin groups | t1/2z | 0.4 |  |
| Vd (L) | V | 1260.0 | L |
| Ka (h -1 ) | kabs | 1.37 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q1 unit µmol/L ([substance] / [length] ** 3) vs [mass] / [length] ** 3; Q66 unit pmol/min/mg ([substance] / [time] / [mass]) vs [mass] / [time].**

A reported unit could not be converted (Km, Vmax, equation variable and CL), so that value has no SI equivalent. Extracted — haloperidol: MW 376 g/mol, CLR 1, Km 64 µmol/L, Vmax 210 pmol/min/mg, CL 1.02 CL, t1/2z 0.4, V 1.26e+03 L, kabs 1.37 h -1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of clearance: this record has none, the second reading 1.02; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight | `Q374` · MW | 376 | g/mol | 0.376 |  | g/(m·ol) | exact (1) | pharmaceutics-14-01795-t002:row2:col3 |
| GFR fraction | `Q26` · CLR | 1 |  |  |  |  | llm (0.6) | pharmaceutics-14-01795-t002:row14:col3 |
| Km * | `Q1` · Km | 64 | µmol/L |  |  | (µM·ol)/l | llm_confirmed (0.6) | pharmaceutics-14-01795-t002:row17:col3, pharmaceutics-14-01795-t002:row20:col3, pharmaceutics-14-01795-t002:row23:col3, pharmaceutics-14-01795-t002:row27:col3, pharmaceutics-14-01795-t002:row32:col3, pharmaceutics-14-01795-t002:row37:col3, pharmaceutics-14-01795-t002:row42:col3 |
| Vmax | `Q66` · Vmax | 210 | pmol/min/mg |  |  | pM/(min·mg) | special_case (0.95) | pharmaceutics-14-01795-t002:row18:col3, pharmaceutics-14-01795-t002:row21:col3, pharmaceutics-14-01795-t002:row24:col3, pharmaceutics-14-01795-t002:row28:col3, pharmaceutics-14-01795-t002:row33:col3, pharmaceutics-14-01795-t002:row38:col3, pharmaceutics-14-01795-t002:row43:col3 |
| Reductase content in liver cytosol | `Q900` · equation variable | 75 | pmol/mg |  |  | pM/mg | llm (0.6) | pharmaceutics-14-01795-t002:row25:col3 |
| clearance (CL) | `Q22` · CL | 1.02 | CL |  |  | CL | exact (1) | Alasmari_2022:other_prose |
| ratio of predicted half-life between control and rifampicin groups | `Q57` · t1/2z | 0.4 |  |  |  | h | toxin_unit_relink (0.85) | Alasmari_2022:other_prose |
| Vd (L) | `Q61` · V | 1260.0 | L | 1.26 | m3 | L | review_gapfill (0.7) | Franken_2017:review |
| Ka (h -1 ) | `Q49` · kabs | 1.37 | h -1 | 0.0003806 | 1/s | 1/h | review_gapfill (0.7) | Johnson_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Molecular weight'; source reconciliation required
- table representations disagree for 'Intestinal permeability'; source reconciliation required
- table representations disagree for 'GFR fraction'; source reconciliation required
- table representations disagree for 'Km *'; source reconciliation required
- table representations disagree for 'Vmax'; source reconciliation required
- table representations disagree for 'Reductase content in liver cytosol'; source reconciliation required
- table representations disagree for 'Content in liver microsome'; source reconciliation required
- dropped unlinked row (NIL): 'Intestinal permeability' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01795-t002:row8:col3'])
- unit_dimension_mismatch: 'Km *' → Q1 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vmax' → Q66 (unit '[substance] / [time] / [mass]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'Content in liver microsome' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01795-t002:row29:col3', 'pharmaceutics-14-01795-t002:row34:col3', 'pharmaceutics-14-01795-t002:row39:col3'])
- dropped value-less row: 'fu.inc'
- dropped value-less row: 'ISEF'
- dropped value-less row: 'V'
- dropped value-less row: 'GFR'
- dropped value-less row: '4-FBPA'
- dropped value-less row: 'HPP+'
- dropped value-less row: 'HLM'
- salvaged Q22 ('clearance (CL)'=1.02) from results prose — parameter table was unreadable
- salvaged Q57 ('ratio of predicted half-life between control and rifampicin groups'=0.4) from results prose — parameter table was unreadable
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 278)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=haloperidol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'reported value(s) (reference)' subgroup of Alasmari_2022 (paper reports 3 populations: input value, reported value(s) (reference), value)
- row roles (LLM): model_class=pbpk; 0/33 row label(s) assigned, 0 linked by role
- molar mass: none found for 'reduced haloperidol' — its concentrations stay mass-only
- gap-filled Q61 (V) from Franken_2017's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Johnson_2016's review values (primary lacked it)

**Extraction notes:**
- table pharmaceutics-14-01795-t002: missing_unit_binding
- table pharmaceutics-14-01795-t002: unparsed_numeric_cell
- table pharmaceutics-14-01795-t002: representations disagree; selected evidence retained, not merged
- companion parameter table 5 transcribed (10 record(s))
- table Alasmari_2022_table_6: conflicting_units
- companion parameter table 6 transcribed (90 record(s))
- LLM selected parameter table(s) 3, 4, 5, 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.571 (8/14 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clearance]` |  | 1.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` | 1.02 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[gfr fraction].parameter_id` | Q26 | Q44 | mismatch |
| `gpt-oss:120b` | `parameters[ratio of half-life]` |  | 0.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ratio of predicted half-life between control and rifampicin groups]` | 0.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[reductase content in liver cytosol]` | 75 |  | only_one_extracted |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | µmol/L ([substance] / [length] ** 3) | ['pharmaceutics-14-01795-t002:row17:col3', 'pharmaceutics-14-01795-t002:row20:col3', 'pharmaceutics-14-01795-t002:row23:col3', 'pharmaceutics-14-01795-t002:row27:col3', 'pharmaceutics-14-01795-t002:row32:col3', 'pharmaceutics-14-01795-t002:row37:col3', 'pharmaceutics-14-01795-t002:row42:col3'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['pharmaceutics-14-01795-t002:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Johnson_2016:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Franken_2017:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | pmol/min/mg ([substance] / [time] / [mass]) | ['pharmaceutics-14-01795-t002:row18:col3', 'pharmaceutics-14-01795-t002:row21:col3', 'pharmaceutics-14-01795-t002:row24:col3', 'pharmaceutics-14-01795-t002:row28:col3', 'pharmaceutics-14-01795-t002:row33:col3', 'pharmaceutics-14-01795-t002:row38:col3', 'pharmaceutics-14-01795-t002:row43:col3'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | CL | ['Alasmari_2022:other_prose'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] |  | ['pharmaceutics-14-01795-t002:row14:col3'] |
| C5_unit_missing_Q57 | fail | [time] |  | ['Alasmari_2022:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.02 | ['Alasmari_2022:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.26e+03 L | ['Franken_2017:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhaloperidol%5D%20Haloperidol_Alasmari2022_reported_value_s_reference&body=Drug%3A%20haloperidol%0ARecord%3A%20Haloperidol_Alasmari2022_reported_value_s_reference%0APaper%3A%20Alasmari_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_haloperidol/Haloperidol_Alasmari2022_reported_value_s_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 18:44 UTC</sub>
