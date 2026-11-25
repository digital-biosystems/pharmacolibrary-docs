<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;propranolol&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/&quot;},{&quot;label&quot;:&quot;Marques_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propranolol_Takechi2018_reference&quot;,&quot;label&quot;:&quot;Takechi_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propranolol/Propranolol_Takechi2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propranolol — `Propranolol_Marques2026_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="propranolol" model-id="Propranolol_Marques2026_reference" status="not_simulated" stale="false" population="virtual patients" measured-compound="propranolol" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Marques L, Vale N. Model-Based Virtual Clinical Trial Reveals Renal Impairment and Body Size as Key Determinants of Pharmacokinetic Variability and Drug-Drug Interaction Risk in Propranolol Therapy. Pharmaceutics 18(6) (2026).
  ·  DOI: [10.3390/pharmaceutics18060636](https://doi.org/10.3390/pharmaceutics18060636)

## Population and dosing

**Population:** virtual patients · condition renal impairment · age group adult.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka (h−1) | kabs | 2.17 | h−1 | 4.85 |
| V1 (L) | V1 | 12.07 | L | 42.3 |
| Q (L/h) | Q | 1.07 | L/h | 11.7 |
| V2 (L) | V2 | 9.27 | L | 19.2 |
| Cl (L/h) | CL | 28.93 | L/h | 6.45 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was built but has not been simulated yet; x1_cross_check.**

Extracted — propranolol: kabs 2.17 h−1, V1 12.1 L, Q 1.07 L/h, V2 9.27 L, CL 28.9 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has omeprazole → hydroxy-omeprazole (metabolism); omeprazole → omeprazole sulphone (metabolism); omeprazole → 5'-o-desmethylomeprazole (metabolism), the second reading omeprazole → hydroxy-omeprazole (metabolism); omeprazole → omeprazole sulphone (metabolism); omeprazole → 5'-o-desmethylomeprazole (metabolism) …; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) | `Q49` · kabs | 2.17 | h−1 | 0.0006028 | 1/s | 1/h | 4.85 | exact (1) | pharmaceutics-18-00636-t008:row2:col1 |
| V1 (L) | `Q63` · V1 | 12.07 | L | 0.01207 | m3 | l | 42.3 | exact (1) | pharmaceutics-18-00636-t008:row3:col1 |
| Q (L/h) | `Q30` · Q | 1.07 | L/h | 2.972e-07 | m3/s | l/h | 11.7 | exact (1) | pharmaceutics-18-00636-t008:row4:col1 |
| V2 (L) | `Q64` · V2 | 9.27 | L | 0.00927 | m3 | l | 19.2 | exact (1) | pharmaceutics-18-00636-t008:row5:col1 |
| Cl (L/h) | `Q22` · CL | 28.93 | L/h | 8.036e-06 | m3/s | l/h | 6.45 | exact (1) | pharmaceutics-18-00636-t008:row6:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V1 (L)); Q30 (Q (L/h)); Q64 (V2 (L)); Q22 (Cl (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=propranolol
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 5 linked by role
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 8

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (3/15 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['omeprazole', 'hydroxy-omeprazole', 'metabolism'], ['omeprazole', 'omeprazole sulphone', 'metabolism'], ['omeprazole', "5'-o-desmethylomeprazole", 'metabolism']] | [['omeprazole', 'hydroxy-omeprazole', 'metabolism'], ['omeprazole', 'omeprazole sulphone', 'metabolism'], ['omeprazole', "5'-o-desmethylomeprazole", 'metabolism'], ['omeprazole', 'carboxy-omeprazole', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[auc0-t (ug.h/ml) / observed value]` |  | 0.033 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t (ug.h/ml) / predicted value]` |  | 0.037 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 28.93 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax (ug/ml) / fe]` |  | 1.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax (ug/ml) / observed value]` |  | 0.016 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose regimen]` |  | 0.037 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 2.17 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 1.07 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax (h) / observed value]` |  | 2.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 12.07 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 9.27 |  | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-18-00636-t008:row6:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-18-00636-t008:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-18-00636-t008:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-18-00636-t008:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-18-00636-t008:row5:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28.93 | ['pharmaceutics-18-00636-t008:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28.9 L/h | ['pharmaceutics-18-00636-t008:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 12.1 L | ['pharmaceutics-18-00636-t008:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 9.27 L | ['pharmaceutics-18-00636-t008:row5:col1'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_param_coverage | pass | 5 scholar param(s) emitted or defaulted | 5 covered |  | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_topology_template | pass | general_linear → PK_General_Linear* | PK_General_Linear |  | engineer template must match the scholar topology |
| T6_deviations | pass |  |  |  | no engineer deviations to adjudicate |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.2 (3 of 15 compared fields agree, 11 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.2 | cross-check contradicted by a second reader: verdict disputed; agreement 0.2 (3 of 15 compared fields agree, 11 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_propranolol/Propranolol_Marques2026_reference/Propranolol_Marques2026_reference_modelica.zip" download>Propranolol_Marques2026_reference_modelica.zip</a> <span class="pk-size">(4.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_propranolol/Propranolol_Marques2026_reference/Propranolol_Marques2026_reference_matlab.zip" download>Propranolol_Marques2026_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_propranolol/Propranolol_Marques2026_reference/Propranolol_Marques2026_reference_matlab_simbio.zip" download>Propranolol_Marques2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_propranolol/Propranolol_Marques2026_reference/Propranolol_Marques2026_reference_sbml.zip" download>Propranolol_Marques2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_propranolol/Propranolol_Marques2026_reference/Propranolol_Marques2026_reference_cellml.zip" download>Propranolol_Marques2026_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Marques L, Vale N. Model-Based Virtual Clinical Trial Reveals Renal Impairment and Body Size as Key Determinants of Pharmacokinetic Variability and Drug-Drug Interaction Risk in Propranolol Therapy. Pharmaceutics 18(6) (2026). [doi:10.3390/pharmaceutics18060636](https://doi.org/10.3390/pharmaceutics18060636)

**This record:** Pharmacolibrary, model `Propranolol_Marques2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_propranolol/Propranolol_Marques2026_reference>

```bibtex
@misc{pharmacolibrary_PropranololMarques2026reference,
  title  = {{Pharmacolibrary model Propranolol_Marques2026_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_propranolol/Propranolol_Marques2026_reference},
  note   = {Parameters from doi:10.3390/pharmaceutics18060636},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropranolol%5D%20Propranolol_Marques2026_reference&body=Drug%3A%20propranolol%0ARecord%3A%20Propranolol_Marques2026_reference%0APaper%3A%20Marques_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propranolol/Propranolol_Marques2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-22 12:33 UTC</sub>
