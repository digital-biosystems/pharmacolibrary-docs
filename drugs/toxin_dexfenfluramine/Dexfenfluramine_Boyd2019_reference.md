<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Dexfenfluramine&quot;,&quot;href&quot;:&quot;drugs/toxin_dexfenfluramine/&quot;},{&quot;label&quot;:&quot;Boyd_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexfenfluramine_Fracasso1988_reference&quot;,&quot;label&quot;:&quot;Fracasso_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dexfenfluramine/Dexfenfluramine_Fracasso1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dexfenfluramine_Richards1989_reference&quot;,&quot;label&quot;:&quot;Richards_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dexfenfluramine/Dexfenfluramine_Richards1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dexfenfluramine_Boyd2019_reference&quot;,&quot;label&quot;:&quot;Boyd_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Dexfenfluramine — `Dexfenfluramine_Boyd2019_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model does not reproduce the paper's peak concentration (Cmax) (paper 6.24e-05, model 0.998); the model does not reproduce the paper's terminal half-life (paper 20.1, model 23.5).

<div class="pk-model-meta" hidden drug="Dexfenfluramine" model-id="Dexfenfluramine_Boyd2019_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="Fenfluramine" parameterization="mechanistic" topology="retention"></div>

## Citation
Boyd B, Smith S, Gammaitoni A, Galer BS, Farfel GM. A phase I, randomized, open-label, single-dose, 3-period crossover study to evaluate the drug-drug interaction between ZX008 (fenfluramine HCl oral solution) and a regimen of stiripentol, clobazam, and valproate in healthy subjects. International journal of clinical pharmacology and therapeutics 57(1):11–19 (2019).
  ·  DOI: [10.5414/CP203276](https://doi.org/10.5414/CP203276)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 26.

**Dosing:** 56 mg, oral, single.

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| tmax (h)b | tmax | 3.0 | h |
| AUC0-t (ng×h/mL) | AUCt | 804 | ng×h/mL |
| terminal half-life | t1/2z | 23.5 | hours |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 6.24e-05, model 0.998); the model does not reproduce the paper's terminal half-life (paper 20.1, model 23.5).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Extracted — dexfenfluramine: tmax 3 h, t1/2z 23.5 hours; Norfenfluramine: AUCt 804 ng×h/mL.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| tmax (h)b | `Q56` · tmax | 3.0 | h | 1.08e+04 | s | h | llm_confirmed (0.6) | Boyd_2019_table_2:row0:col2, Boyd_2019_table_2:row1:col2, Boyd_2019_table_2:row2:col2, Boyd_2019_table_2:row3:col2, Boyd_2019_table_4:row0:col2, Boyd_2019_table_4:row1:col2, Boyd_2019_table_4:row2:col2, Boyd_2019_table_4:row3:col2, Boyd_2019_table_4:row4:col2, Boyd_2019_table_4:row5:col2, Boyd_2019_table_4:row6:col2, Boyd_2019_table_4:row7:col2 |
| AUC0-t (ng×h/mL) | `Q19` · AUCt | 804 | ng×h/mL | 2.894 | m3/s | (h·ng)/ml | exact (1) | Boyd_2019_table_2:row2:col4, Boyd_2019_table_2:row3:col4 |
| terminal half-life | `Q57` · t1/2z | 23.5 | hours | 8.46e+04 | s | h | half_life_rule (0.95) | Boyd_2019:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `retention_function`: 1 pool(s); shares: one pool, A = 1; half-times: pool 1 from ln2 / terminal half-life (Q57)

**Interpretation flags:**
- compound tags: 6 row(s) → Norclobazam (name 6)
- unit_dimension_unknown: 'ng×h/mL' (AUCt)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.8 (source ['Table3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 3 (source ['Table3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 20 (source ['Table3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 25 (source ['Table3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Cmax' from footnote/prose loose number 1 (source ['Table3:footnote']); the table cell was unparseable — needs review
- salvaged Q57 ('terminal half-life'=23.5) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Fenfluramine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles: per-genotype parameters — typical value from the reference group: tmax (h)b, AUC0-t (ng×h/mL)
- row roles: 4 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=noncompartmental; 12/12 row label(s) assigned, 0 linked by role; re-tagged parent→Norfenfluramine ×2, Stiripentol→parent ×2, Fenfluramine→Clobazam ×1, Fenfluramine→Valproate ×2
- review gap-fill skipped: this record measures 'Fenfluramine', not dexfenfluramine — the review values are the parent's

**Extraction notes:**
- table Table3: unknown_column_role
- table Table3: unparsed_numeric_cell
- table Boyd_2019_table_2: ambiguous_numeric_format
- transposed table Boyd_2019_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (22 record(s))
- table Boyd_2019_table_4: ambiguous_numeric_format
- transposed table Boyd_2019_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (38 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q56 | pass | [time] |  | ['Boyd_2019_table_2:row0:col2', 'Boyd_2019_table_2:row1:col2', 'Boyd_2019_table_2:row2:col2', 'Boyd_2019_table_2:row3:col2', 'Boyd_2019_table_4:row0:col2', 'Boyd_2019_table_4:row1:col2', 'Boyd_2019_table_4:row2:col2', 'Boyd_2019_table_4:row3:col2', 'Boyd_2019_table_4:row4:col2', 'Boyd_2019_table_4:row5:col2', 'Boyd_2019_table_4:row6:col2', 'Boyd_2019_table_4:row7:col2'] |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | retainedFraction (measured=Fenfluramine) | retainedFraction |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 pool(s) with their shares and half-times | nPool, A and Tb match the record |  | retention pools emitted as read (nPool, A, Tb) |
| T3_topology_template |  | pass | retention → TK_Retention* | TK_Retention |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 6.24e-05 | 0.9975 | 1.599e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 7.57e-05 | 0.9975 | 1.318e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.64e-05 | 0.9975 | 6.083e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.02e-05 | 0.9975 | 9.78e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 6.24e-05 | 0.9975 | 1.599e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 7.57e-05 | 0.9975 | 1.318e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.64e-05 | 0.9975 | 6.083e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.02e-05 | 0.9975 | 9.78e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00328 | 0.9975 | 304.1 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00369 | 0.9975 | 270.3 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000231 | 0.9975 | 4318 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000216 | 0.9975 | 4618 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.74e-05 | 0.9975 | 1.024e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.48e-05 | 0.9975 | 1.052e+04 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.1 | 0.9975 | 9.976 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.107 | 0.9975 | 9.323 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_beta | reference | pass | 23.5 | 23.5 | 0.9999 | hours→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 20.1 | 23.5 | 1.169 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 22.6 | 23.5 | 1.04 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 23.5 | 23.5 | 0.9999 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 23.5 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 16 | 23.5 | 1.469 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 16.7 | 23.5 | 1.407 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 28.9 | 23.5 | 0.8131 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 25.6 | 23.5 | 0.9179 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 23.5 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 23.5 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 15 | 23.5 | 1.567 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 14.8 | 23.5 | 1.588 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference/Dexfenfluramine_Boyd2019_reference_modelica.zip" download>Dexfenfluramine_Boyd2019_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference/Dexfenfluramine_Boyd2019_reference_fmi.zip" download>Dexfenfluramine_Boyd2019_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/TK_Retention_1.fmu" download>TK_Retention_1.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference/Dexfenfluramine_Boyd2019_reference_matlab.zip" download>Dexfenfluramine_Boyd2019_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference/Dexfenfluramine_Boyd2019_reference_sbml.zip" download>Dexfenfluramine_Boyd2019_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference/Dexfenfluramine_Boyd2019_reference_cellml.zip" download>Dexfenfluramine_Boyd2019_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>TK_Retention_1.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2313 | kg/mol |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 5.6e-05 | kg |
| input | model | `A[1]` | 1 |  |
| input | model | `Tb[1]` | 8.46e+04 |  |
| output | concentration | `retainedFraction` |  | kg/m3 |

## Tested with

- Template `TK_Retention_1`, compiled by OpenModelica Compiler OpenModelica 1.26.3.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Boyd B, Smith S, Gammaitoni A, Galer BS, Farfel GM. A phase I, randomized, open-label, single-dose, 3-period crossover study to evaluate the drug-drug interaction between ZX008 (fenfluramine HCl oral solution) and a regimen of stiripentol, clobazam, and valproate in healthy subjects. International journal of clinical pharmacology and therapeutics 57(1):11–19 (2019). [doi:10.5414/CP203276](https://doi.org/10.5414/CP203276)

**This record:** Pharmacolibrary, model `Dexfenfluramine_Boyd2019_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference>

```bibtex
@misc{pharmacolibrary_DexfenfluramineBoyd2019reference,
  title  = {{Pharmacolibrary model Dexfenfluramine_Boyd2019_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference},
  note   = {Parameters from doi:10.5414/CP203276},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference/Dexfenfluramine_Boyd2019_reference_params.json" metaurl="assets/fmu/TK_Retention_1.vr.json" wasmurl="assets/fmu/TK_Retention_1.js" controlsurl="drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference/Dexfenfluramine_Boyd2019_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `TK_Retention_1` · parameters `Dexfenfluramine_Boyd2019_reference_params.json` · controls `Dexfenfluramine_Boyd2019_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdexfenfluramine%5D%20Dexfenfluramine_Boyd2019_reference&body=Drug%3A%20dexfenfluramine%0ARecord%3A%20Dexfenfluramine_Boyd2019_reference%0APaper%3A%20Boyd_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dexfenfluramine/Dexfenfluramine_Boyd2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 21:07 UTC</sub>
