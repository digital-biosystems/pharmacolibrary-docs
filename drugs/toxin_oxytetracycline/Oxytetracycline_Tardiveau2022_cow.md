<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Oxytetracycline&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/&quot;},{&quot;label&quot;:&quot;Tardiveau_2022 \u00b7 cow&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxytetracycline_Tardiveau2022_cow&quot;,&quot;label&quot;:&quot;Tardiveau_2022_cow&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Oxytetracycline_Tardiveau2022_goat&quot;,&quot;label&quot;:&quot;Tardiveau_2022_goat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_goat.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Uno2002_hemolymph&quot;,&quot;label&quot;:&quot;Uno_2002_hemolymph&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Uno2002_hemolymph.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxytetracycline_Uno2002_muscle&quot;,&quot;label&quot;:&quot;Uno_2002_muscle&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxytetracycline/Oxytetracycline_Uno2002_muscle.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Oxytetracycline — `Oxytetracycline_Tardiveau2022_cow`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> Qb has no unit.

<div class="pk-model-meta" hidden drug="Oxytetracycline" model-id="Oxytetracycline_Tardiveau2022_cow" status="needs_review" stale="false" population="dairy cows and goats (lactating)" measured-compound="Oxytetracycline" parameterization="mechanistic" topology="retention"></div>

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
**Parameters:** 8 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Plasma pH * | equation variable | 7.42 |  |
| Udder extracellular water fraction * | fu_tissue | 0.445 |  |
| Partition coefficient between octanol and water * | Kp | -4.5414 |  |
| Fraction unbound in plasma * | fu | 0.8115 |  |
| Intramuscular bioavailability * | Fab | 0.8816 |  |
| Total plasma clearance (L/h/kg) * | CLnorm | 0.094 | L/h/kg |
| Dose fraction excreted unchanged in urine | kexcr | 0.8518 | 1/h |
| Udder blood flow fraction to lobules * | Qb | 0.9822 |  |
| elimination half-life in milk | t1/2z | 7.9 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.188). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Qb has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — oxytetracycline: fu_tissue 0.445, Kp -4.54, fu 0.811, Fab 0.882, CLnorm 0.094 L/h/kg, kexcr 0.852 1/h, Qb 0.982, t1/2z 7.9 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Oxytetracycline hydrochloride, the second reading oxytetracycline; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Plasma pH * | `Q900` · equation variable | 7.42 |  | 7.42 |  |  | llm (0.6) | Tardiveau_2022_table_1:row3:col3 |
| Udder extracellular water fraction * | `Q413` · fu_tissue | 0.445 |  |  |  |  | llm (0.6) | Tardiveau_2022_table_1:row8:col3 |
| Partition coefficient between octanol and water * | `Q410` · Kp | -4.5414 |  |  |  |  | llm_confirmed (0.6) | Tardiveau_2022_table_1:row22:col3 |
| Fraction unbound in plasma * | `Q46` · fu | 0.8115 |  | 0.8115 |  |  | llm_confirmed (0.6) | Tardiveau_2022_table_1:row23:col3 |
| Intramuscular bioavailability * | `Q40` · Fab | 0.8816 |  |  |  |  | llm_confirmed (0.6) | Tardiveau_2022_table_1:row24:col3 |
| Total plasma clearance (L/h/kg) * | `Q354` · CLnorm | 0.094 | L/h/kg | 1.828e-06 | m3/s | l/(h·kg) | llm_corrected (0.6) | Tardiveau_2022_table_1:row26:col3 |
| Dose fraction excreted unchanged in urine | `Q50` · kexcr | 0.8518 | 1/h | 0.0002366 | 1/s | 1/h | llm_corrected (0.6) | Tardiveau_2022_table_1:row27:col3 |
| Udder blood flow fraction to lobules * | `Q54` · Qb | 0.9822 |  |  |  |  | llm_confirmed (0.6) | Tardiveau_2022_table_1:row37:col3 |
| elimination half-life in milk | `Q57` · t1/2z | 7.9 | h | 2.844e+04 | s | h | toxin_unit_relink (0.85) | Tardiveau_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / elimination half-life in milk (Q57)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Alveolar fraction *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row1:col3'])
- dropped unlinked row (NIL): 'Blood cell pH *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row2:col3'])
- dropped unlinked row (NIL): 'Udder extracellular water pH *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row4:col3'])
- dropped unlinked row (NIL): 'Udder intracellular water pH *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row5:col3'])
- dropped unlinked row (NIL): 'Milk pH *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row6:col3'])
- dropped unlinked row (NIL): 'Udder vascular fraction*' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row7:col3'])
- dropped unlinked row (NIL): 'Udder intracellular water fraction *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row9:col3'])
- dropped unlinked row (NIL): 'Plasma albumin (g/L) *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row12:col3'])
- dropped unlinked row (NIL): 'Udder extracellular albumin (g/L) *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row13:col3'])
- dropped unlinked row (NIL): 'Udder intracellular magnesium (g/L) *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row15:col3'])
- dropped unlinked row (NIL): 'pKa of acid function *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row20:col3'])
- dropped unlinked row (NIL): 'pKa of basic function *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row21:col3'])
- dropped duplicate Q410 ('Partition coefficient', value '0.9019') — already have one for this compound
- dropped unlinked row (NIL): 'Capillary radius (mm) *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row36:col3'])
- dropped unlinked row (NIL): 'PAMPA permeability (cm/s) *' — extend the ontology if this is a real PK parameter (source ['Tardiveau_2022_table_1:row38:col3'])
- salvaged Q57 ('elimination half-life in milk'=7.9) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Oxytetracycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'cow' subgroup of Tardiveau_2022 (paper reports 3 populations: bw (kg), cow, goat)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C5 dimensioned parameter(s) without a unit: Q54 — no SI value to build from)

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
| `gpt-oss:120b` | not confirmed | 0.188 (3/16 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | 0.8816 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[dose fraction excreted unchanged in urine]` | 0.8518 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life in milk]` | 7.9 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` |  | 7.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[external evaluation4]` |  | 56 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fraction unbound in plasma *]` | 0.8115 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[intramuscular bioavailability *]` | 0.8816 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[partition coefficient between octanol and water *]` | -4.5414 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[plasma ph *]` | 7.42 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[total plasma clearance (l/h/kg) *]` | 0.094 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[udder blood flow fraction to lobules *]` | 0.9822 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[udder extracellular water fraction *]` | 0.445 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Oxytetracycline hydrochloride | oxytetracycline | mismatch |

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
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['Tardiveau_2022_table_1:row26:col3'] |
| C5_dimension_Q50 | pass | 1 / [time] |  | ['Tardiveau_2022_table_1:row27:col3'] |
| C5_unit_missing_Q54 | fail | [length] ** 3 / [time] |  | ['Tardiveau_2022_table_1:row37:col3'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow/Oxytetracycline_Tardiveau2022_cow_modelica.zip" download>Oxytetracycline_Tardiveau2022_cow_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow/Oxytetracycline_Tardiveau2022_cow_fmi.zip" download>Oxytetracycline_Tardiveau2022_cow_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow/Oxytetracycline_Tardiveau2022_cow_matlab.zip" download>Oxytetracycline_Tardiveau2022_cow_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow/Oxytetracycline_Tardiveau2022_cow_sbml.zip" download>Oxytetracycline_Tardiveau2022_cow_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow/Oxytetracycline_Tardiveau2022_cow_cellml.zip" download>Oxytetracycline_Tardiveau2022_cow_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
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

**This record:** Pharmacolibrary, model `Oxytetracycline_Tardiveau2022_cow`. <https://pharmacolibrary.github.io/#/drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow>

```bibtex
@misc{pharmacolibrary_OxytetracyclineTardiveau2022cow,
  title  = {{Pharmacolibrary model Oxytetracycline_Tardiveau2022_cow}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow},
  note   = {Parameters from doi:10.1016/j.fct.2022.112848},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<span class="pk-missing">This model was built from a record that validation left at <b>needs review</b>: its values are not yet confirmed. See the record's blocking checks before relying on the curve.</span>

<dbs-fmusim paramsurl="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow/Oxytetracycline_Tardiveau2022_cow_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow/Oxytetracycline_Tardiveau2022_cow_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Oxytetracycline_Tardiveau2022_cow_params.json` · controls `Oxytetracycline_Tardiveau2022_cow_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxytetracycline%5D%20Oxytetracycline_Tardiveau2022_cow&body=Drug%3A%20oxytetracycline%0ARecord%3A%20Oxytetracycline_Tardiveau2022_cow%0APaper%3A%20Tardiveau_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxytetracycline/Oxytetracycline_Tardiveau2022_cow%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 10:52 UTC</sub>
