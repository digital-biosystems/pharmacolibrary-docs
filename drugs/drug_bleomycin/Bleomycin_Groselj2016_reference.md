<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;bleomycin&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/&quot;},{&quot;label&quot;:&quot;Groselj_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bleomycin_Kramer1978_group_i&quot;,&quot;label&quot;:&quot;Kramer_1978_group_i&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Kramer1978_iii&quot;,&quot;label&quot;:&quot;Kramer_1978_iii&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_iii.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Wilde2007_reference&quot;,&quot;label&quot;:&quot;Wilde_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Wilde2007_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Zhao2025_reference&quot;,&quot;label&quot;:&quot;Zhao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Zhao2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Groselj2016_reference&quot;,&quot;label&quot;:&quot;Groselj_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Groselj2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Bleomycin_Kramer1978_ii&quot;,&quot;label&quot;:&quot;Kramer_1978_ii&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_ii.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bleomycin — `Bleomycin_Groselj2016_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="bleomycin" model-id="Bleomycin_Groselj2016_reference" status="not_modelled" stale="false" population="elderly cancer patients" measured-compound="bleomycin" parameterization="apparent" topology="1C"></div>

## Citation
Groselj A, Krzan M, Kosjek T, Bosnjak M, Sersa G, Cemazar M. Bleomycin pharmacokinetics of bolus bleomycin dose in elderly cancer patients treated with electrochemotherapy. Cancer chemotherapy and pharmacology 77(5):939–947 (2016).
  ·  DOI: [10.1007/s00280-016-3004-z](https://doi.org/10.1007/s00280-016-3004-z)

## Population and dosing

**Population:** elderly cancer patients · condition cancer · age group elderly · n = $24.

**Dosing:** 23000, 30000 IU, iv, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_bleomycin/Bleomycin_Groselj2016_reference/Bleomycin_Groselj2016_reference.svg" alt="Bleomycin_Groselj2016_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| apparent volume of distribution (Vd) | V/F | 12.98 | l |
| total body clearance (CL) | CL | 300 | ml/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model has been built from this record yet.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bleomycin, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| apparent volume of distribution (Vd) | `Q76` · V/F | 12.98 | l | 0.01298 | m3 | L | exact (1) | Groselj_2016:other_prose |
| total body clearance (CL) | `Q22` · CL | 300 | ml/min | 5e-06 | m3/s | L/h | boundary (0.8) | Groselj_2016:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- column 'pr' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'cr' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'patient unable to' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'visit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Tumor size; long-' — extend the ontology if this is a real PK parameter (source ['Groselj_2016_table_1:row1:col3', 'Groselj_2016_table_1:row1:col4', 'Groselj_2016_table_1:row1:col6', 'Groselj_2016_table_1:row1:col8', 'Groselj_2016_table_1:row1:col10', 'Groselj_2016_table_1:row1:col13', 'Groselj_2016_table_1:row1:col15', 'Groselj_2016_table_1:row1:col17', 'Groselj_2016_table_1:row1:col19', 'Groselj_2016_table_1:row1:col20', 'Groselj_2016_table_1:row1:col24', 'Groselj_2016_table_1:row1:col26', 'Groselj_2016_table_1:row1:col27', 'Groselj_2016_table_1:row1:col30', 'Groselj_2016_table_1:row1:col31', 'Groselj_2016_table_1:row1:col32'])
- dropped unlinked row (NIL): 'Number' — extend the ontology if this is a real PK parameter (source ['Groselj_2016_table_1:row3:col3', 'Groselj_2016_table_1:row3:col6', 'Groselj_2016_table_1:row3:col8', 'Groselj_2016_table_1:row3:col10', 'Groselj_2016_table_1:row3:col13', 'Groselj_2016_table_1:row3:col15', 'Groselj_2016_table_1:row3:col17', 'Groselj_2016_table_1:row3:col19', 'Groselj_2016_table_1:row3:col27', 'Groselj_2016_table_1:row3:col30', 'Groselj_2016_table_1:row3:col32', 'Groselj_2016_table_1:row3:col33', 'Groselj_2016_table_1:row3:col34'])
- dropped unlinked row (NIL): 'Age (years)' — extend the ontology if this is a real PK parameter (source ['Groselj_2016_table_1:row5:col3', 'Groselj_2016_table_1:row5:col6', 'Groselj_2016_table_1:row5:col8', 'Groselj_2016_table_1:row5:col10', 'Groselj_2016_table_1:row5:col13', 'Groselj_2016_table_1:row5:col15', 'Groselj_2016_table_1:row5:col17', 'Groselj_2016_table_1:row5:col19', 'Groselj_2016_table_1:row5:col27', 'Groselj_2016_table_1:row5:col30', 'Groselj_2016_table_1:row5:col32', 'Groselj_2016_table_1:row5:col33', 'Groselj_2016_table_1:row5:col34'])
- salvaged Q76 ('apparent volume of distribution (Vd)'=12.98) from results prose — parameter table was unreadable
- salvaged Q22 ('total body clearance (CL)'=300) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=bleomycin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Groselj_2016_table_1: unbound_uncertainty
- table Groselj_2016_table_1: ambiguous_numeric_format
- table Groselj_2016_table_1: unknown_column_role
- table Groselj_2016_table_1: missing_label
- table Groselj_2016_table_1: ragged_grid

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 12.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` |  | 12.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 300 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` |  | 300 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | bleomycin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bleomycin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 18 L/h | ['Groselj_2016:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 13 L | ['Groselj_2016:other_prose'] |

**Reviewer per-scenario checks:**

| check | status | obtained | note |
|---|---|---|---|
| T0_analyte_identity | pass |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  | no covariate effects in record |
| T3_apparent_invariant | pass | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | skipped |  | no emitted model to inspect (engineer build absent) |
| T6_deviations | pass |  | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_bleomycin/Bleomycin_Groselj2016_reference/Bleomycin_Groselj2016_reference_modelica.zip" download>Bleomycin_Groselj2016_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_bleomycin/Bleomycin_Groselj2016_reference/Bleomycin_Groselj2016_reference_fmi.zip" download>Bleomycin_Groselj2016_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_bleomycin/Bleomycin_Groselj2016_reference/Bleomycin_Groselj2016_reference_matlab.zip" download>Bleomycin_Groselj2016_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_bleomycin/Bleomycin_Groselj2016_reference/Bleomycin_Groselj2016_reference_matlab_simbio.zip" download>Bleomycin_Groselj2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_bleomycin/Bleomycin_Groselj2016_reference/Bleomycin_Groselj2016_reference_sbml.zip" download>Bleomycin_Groselj2016_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_bleomycin/Bleomycin_Groselj2016_reference/Bleomycin_Groselj2016_reference_cellml.zip" download>Bleomycin_Groselj2016_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 1.416 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 5e-06 | m3/s |
| input | model | `VdPerKg` | 0.0001854 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Groselj A, Krzan M, Kosjek T, Bosnjak M, Sersa G, Cemazar M. Bleomycin pharmacokinetics of bolus bleomycin dose in elderly cancer patients treated with electrochemotherapy. Cancer chemotherapy and pharmacology 77(5):939–947 (2016). [doi:10.1007/s00280-016-3004-z](https://doi.org/10.1007/s00280-016-3004-z)

**This record:** Pharmacolibrary, model `Bleomycin_Groselj2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_bleomycin/Bleomycin_Groselj2016_reference>

```bibtex
@misc{pharmacolibrary_BleomycinGroselj2016reference,
  title  = {{Pharmacolibrary model Bleomycin_Groselj2016_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_bleomycin/Bleomycin_Groselj2016_reference},
  note   = {Parameters from doi:10.1007/s00280-016-3004-z},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_bleomycin/Bleomycin_Groselj2016_reference/Bleomycin_Groselj2016_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_bleomycin/Bleomycin_Groselj2016_reference/Bleomycin_Groselj2016_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Bleomycin_Groselj2016_reference_params.json` · controls `Bleomycin_Groselj2016_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbleomycin%5D%20Bleomycin_Groselj2016_reference&body=Drug%3A%20bleomycin%0ARecord%3A%20Bleomycin_Groselj2016_reference%0APaper%3A%20Groselj_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bleomycin/Bleomycin_Groselj2016_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 08:42 UTC</sub>
