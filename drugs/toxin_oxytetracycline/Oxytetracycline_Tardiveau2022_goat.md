<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Oxytetracycline&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/&quot;},{&quot;label&quot;:&quot;Tardiveau_2022 \u00b7 goat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxytetracycline_Tardiveau2022_cow&quot;,&quot;label&quot;:&quot;Tardiveau_2022_cow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Tardiveau2022_goat&quot;,&quot;label&quot;:&quot;Tardiveau_2022_goat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Oxytetracycline_Uno2002_hemolymph&quot;,&quot;label&quot;:&quot;Uno_2002_hemolymph&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Uno2002_hemolymph.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Uno2002_muscle&quot;,&quot;label&quot;:&quot;Uno_2002_muscle&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Uno2002_muscle.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Oxytetracycline — `Oxytetracycline_Tardiveau2022_goat`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00043, model 0.997).

<div class="pk-model-meta" hidden drug="Oxytetracycline" model-id="Oxytetracycline_Tardiveau2022_goat" status="needs_review" stale="false" population="dairy cows and goats (lactating)" measured-compound="Oxytetracycline" parameterization="mechanistic" topology="retention"></div>

## Citation
Tardiveau J, LeRoux-Pullen L, Gehring R, Touchais G, Chotard-Soutif MP, Mirfendereski H et al. A physiologically based pharmacokinetic (PBPK) model exploring the blood-milk barrier in lactating species - A case study with oxytetracycline administered to dairy cows and goats. Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association 161:112848 (2022).
  ·  DOI: [10.1016/j.fct.2022.112848](https://doi.org/10.1016/j.fct.2022.112848)

## Population and dosing

**Population:** dairy cows and goats (lactating) · condition healthy lactating · age group adult.

**Dosed compound ≠ measured compound:** dosed Oxytetracycline hydrochloride, measured Oxytetracycline.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Udder extracellular water pH * | Kp | 7.42 |  |
| Udder extracellular water fraction * | fu_tissue | 0.445 |  |
| Udder intracellular magnesium (g/L) * | equation variable | 0.02411 | g/L |
| Intramuscular bioavailability * | Fab | 0.9217 |  |
| Dose fraction excreted unchanged in urine | kexcr | 0.8518 | 1/h |
| elimination half-life in milk | t1/2z | 7.9 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.214). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00043, model 0.997).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (equation variable), so that value has no SI equivalent. Extracted — oxytetracycline: Kp 7.42, fu_tissue 0.445, Fab 0.922, kexcr 0.852 1/h, t1/2z 7.9 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Oxytetracycline hydrochloride, the second reading oxytetracycline; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Udder extracellular water pH * | `Q410` · Kp | 7.42 |  |  |  |  | llm (0.6) | Tardiveau_2022_table_1:row4:col4 |
| Udder extracellular water fraction * | `Q413` · fu_tissue | 0.445 |  |  |  |  | llm (0.6) | Tardiveau_2022_table_1:row8:col4 |
| Udder intracellular magnesium (g/L) * | `Q900` · equation variable | 0.02411 | g/L |  |  | g/l | llm (0.6) | Tardiveau_2022_table_1:row15:col4 |
| Intramuscular bioavailability * | `Q40` · Fab | 0.9217 |  |  |  |  | llm_confirmed (0.6) | Tardiveau_2022_table_1:row24:col4 |
| Dose fraction excreted unchanged in urine | `Q50` · kexcr | 0.8518 | 1/h | 0.0002366 | 1/s | 1/h | llm_corrected (0.6) | Tardiveau_2022_table_1:row27:col4 |
| elimination half-life in milk | `Q57` · t1/2z | 7.9 | h | 2.844e+04 | s | h | toxin_unit_relink (0.85) | Tardiveau_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| PAMPA permeability (cm/s) * | Q412 | llm |

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / elimination half-life in milk (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Alveolar fraction *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row1:col4'])
- dropped unlinked row (NIL): 'Blood cell pH *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row2:col4'])
- dropped unlinked row (NIL): 'Plasma pH *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row3:col4'])
- dropped unlinked row (NIL): 'Udder intracellular water pH *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row5:col4'])
- dropped unlinked row (NIL): 'Milk pH *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row6:col4'])
- dropped unlinked row (NIL): 'Udder vascular fraction*' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row7:col4'])
- dropped unlinked row (NIL): 'Udder intracellular water fraction *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row9:col4'])
- dropped unlinked row (NIL): 'Plasma albumin (g/L) *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row12:col4'])
- dropped unlinked row (NIL): 'Udder extracellular albumin (g/L) *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row13:col4'])
- dropped unlinked row (NIL): 'pKa of acid function *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row20:col4'])
- dropped unlinked row (NIL): 'pKa of basic function *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row21:col4'])
- dropped duplicate Q410 ('Partition coefficient between octanol and water *', value '-4.5414') — already have one for this compound
- dropped duplicate Q410 ('Partition coefficient', value '0.8919') — already have one for this compound
- dropped unlinked row (NIL): 'Capillary radius (mm) *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row36:col4'])
- dropped unlinked row (NIL): 'Udder blood flow fraction to lobules *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row37:col4'])
- salvaged Q57 ('elimination half-life in milk'=7.9) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Oxytetracycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'goat' subgroup of Tardiveau_2022 (paper reports 3 populations: bw (kg), cow, goat)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table Tardiveau_2022_table_2: unparsed_numeric_cell
- table Tardiveau_2022_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (54 record(s))
- LLM selected parameter table(s) 1
- LLM region Tardiveau_2022:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.214 (3/14 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | 0.9217 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[dose fraction excreted unchanged in urine]` | 0.8518 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life in milk]` | 7.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` |  | 7.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[external evaluation4]` |  | 56 | only_one_extracted |
| `gpt-oss:120b` | `parameters[intramuscular bioavailability *]` | 0.9217 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[pampa permeability (cm/s) *]` |  |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[udder extracellular water fraction *]` | 0.445 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[udder extracellular water ph *]` | 7.42 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[udder intracellular magnesium (g/l) *]` | 0.02411 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Oxytetracycline hydrochloride | oxytetracycline | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q412 | pass | [length] / [time] |  | ['Tardiveau_2022_table_1:row38:col4'] |
| C5_dimension_Q50 | pass | 1 / [time] |  | ['Tardiveau_2022_table_1:row27:col4'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Oxytetracycline) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.00043 | 0.9972 | 2319 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 19 | 0.9972 |  | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.00252 | 0.9972 | 395.7 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 12 | 0.9972 |  | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.00427 | 0.9972 | 233.5 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 6 | 0.9972 |  | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_t_half_beta | reference | pass | 7.9 | 7.9 | 1 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 7.4 | 7.9 | 1.068 | hours→SI vs simulated h |
| T1_t_half_beta | reference | pass | 9.8 | 7.9 | 0.8061 | hours→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat/Oxytetracycline_Tardiveau2022_goat_modelica.zip" download>Oxytetracycline_Tardiveau2022_goat_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat/Oxytetracycline_Tardiveau2022_goat_fmi.zip" download>Oxytetracycline_Tardiveau2022_goat_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat/Oxytetracycline_Tardiveau2022_goat_matlab.zip" download>Oxytetracycline_Tardiveau2022_goat_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat/Oxytetracycline_Tardiveau2022_goat_sbml.zip" download>Oxytetracycline_Tardiveau2022_goat_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat/Oxytetracycline_Tardiveau2022_goat_cellml.zip" download>Oxytetracycline_Tardiveau2022_goat_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4604 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.001 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 2.844e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Tardiveau J, LeRoux-Pullen L, Gehring R, Touchais G, Chotard-Soutif MP, Mirfendereski H et al. A physiologically based pharmacokinetic (PBPK) model exploring the blood-milk barrier in lactating species - A case study with oxytetracycline administered to dairy cows and goats. Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association 161:112848 (2022). [doi:10.1016/j.fct.2022.112848](https://doi.org/10.1016/j.fct.2022.112848)

**This record:** Pharmacolibrary, model `Oxytetracycline_Tardiveau2022_goat`. <https://pharmacolibrary.github.io/#/drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat>

```bibtex
@misc{pharmacolibrary_OxytetracyclineTardiveau2022goat,
  title  = {{Pharmacolibrary model Oxytetracycline_Tardiveau2022_goat}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat},
  note   = {Parameters from doi:10.1016/j.fct.2022.112848},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat/Oxytetracycline_Tardiveau2022_goat_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat/Oxytetracycline_Tardiveau2022_goat_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Oxytetracycline_Tardiveau2022_goat_params.json` · controls `Oxytetracycline_Tardiveau2022_goat_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxytetracycline%5D%20Oxytetracycline_Tardiveau2022_goat&body=Drug%3A%20oxytetracycline%0ARecord%3A%20Oxytetracycline_Tardiveau2022_goat%0APaper%3A%20Tardiveau_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 10:52 UTC</sub>
