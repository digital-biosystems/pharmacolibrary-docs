<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;albendazole&quot;,&quot;href&quot;:&quot;drugs/drug_albendazole/&quot;},{&quot;label&quot;:&quot;Castro_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Albendazole_Algorta2022_reference&quot;,&quot;label&quot;:&quot;Algorta_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_albendazole/Albendazole_Algorta2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Albendazole_Chhonker2023_reference&quot;,&quot;label&quot;:&quot;Chhonker_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_albendazole/Albendazole_Chhonker2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Albendazole_Formentini2001_reference&quot;,&quot;label&quot;:&quot;Formentini_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_albendazole/Albendazole_Formentini2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Albendazole_Fimbo2023_reference&quot;,&quot;label&quot;:&quot;Fimbo_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_albendazole/Albendazole_Fimbo2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# albendazole — `Albendazole_Castro2009_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for albendazole's clearance, volume of distribution, absorption rate constant and absorption lag time; t6_deviations (+1 more).

<div class="pk-model-meta" hidden drug="albendazole" model-id="Albendazole_Castro2009_reference" status="model_quarantined" stale="false" population="patients with neurocysticercosis" measured-compound="albendazole sulfoxide" parameterization="apparent" topology="1C"></div>

## Citation
Castro N, Márquez-Caraveo C, Brundage RC, González-Esquivel D, Suárez AM, Góngora F et al. Population pharmacokinetics of albendazole in patients with neurocysticercosis. International journal of clinical pharmacology and therapeutics 47(11):679–685 (2009).

## Population and dosing

**Population:** patients with neurocysticercosis · condition neurocysticercosis · age group adult · n = 90.

**Dosed compound ≠ measured compound:** dosed albendazole, measured albendazole sulfoxide.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CLm/F | 51.6 | l/h |
| V/F | Vm/F | 4560 | l |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for albendazole's clearance, volume of distribution, absorption rate constant and absorption lag time; t6_deviations (+1 more).**

The model was built, but albendazole's clearance, volume of distribution, absorption rate constant and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — albendazole: CLm/F 51.6 l/h, Vm/F 4.56e+03 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has albendazole sulfoxide, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q351` · CLm/F | 51.6 | l/h | 1.433e-05 | m3/s | l/h | exact (1) | Castro_2009:abstract |
| V/F | `Q367` · Vm/F | 4560 | l | 4.56 | m3 | l | exact (1) | Castro_2009:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '30 mg/kg/day' — extend the ontology if this is a real PK parameter (source ['Castro_2009:abstract'])
- dropped unlinked row (NIL): 'subpopulation 27% of total population' — extend the ontology if this is a real PK parameter (source ['Castro_2009:abstract'])
- dropped value-less row: 'subpopulation remaining'
- metabolite albendazole sulfoxide: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite albendazole sulfoxide: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=albendazole sulfoxide
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 2 linked by role; re-tagged albendazole sulfoxide→parent ×5
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Castro_2009_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (5/10 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` |  | 28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability]` |  | 28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[v/f].parameter_id` | Q367 | Q76 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | albendazole sulfoxide | unknown | mismatch |

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
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Castro_2009:abstract'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Castro_2009:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable | pass | C_central (measured=albendazole sulfoxide) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | skipped |  |  |  | no structural disposition parameters in record |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.5 (5 of 10 compared fields agree, 2 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.5 | cross-check contradicted by a second reader: verdict disputed; agreement 0.5 (5 of 10 compared fields agree, 2 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_albendazole/Albendazole_Castro2009_reference/Albendazole_Castro2009_reference_modelica.zip" download>Albendazole_Castro2009_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_albendazole/Albendazole_Castro2009_reference/Albendazole_Castro2009_reference_fmi.zip" download>Albendazole_Castro2009_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_albendazole/Albendazole_Castro2009_reference/Albendazole_Castro2009_reference_matlab.zip" download>Albendazole_Castro2009_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_albendazole/Albendazole_Castro2009_reference/Albendazole_Castro2009_reference_matlab_simbio.zip" download>Albendazole_Castro2009_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_albendazole/Albendazole_Castro2009_reference/Albendazole_Castro2009_reference_sbml.zip" download>Albendazole_Castro2009_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_albendazole/Albendazole_Castro2009_reference/Albendazole_Castro2009_reference_cellml.zip" download>Albendazole_Castro2009_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Castro N, Márquez-Caraveo C, Brundage RC, González-Esquivel D, Suárez AM, Góngora F et al. Population pharmacokinetics of albendazole in patients with neurocysticercosis. International journal of clinical pharmacology and therapeutics 47(11):679–685 (2009).

**This record:** Pharmacolibrary, model `Albendazole_Castro2009_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_albendazole/Albendazole_Castro2009_reference>

```bibtex
@misc{pharmacolibrary_AlbendazoleCastro2009reference,
  title  = {{Pharmacolibrary model Albendazole_Castro2009_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_albendazole/Albendazole_Castro2009_reference},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balbendazole%5D%20Albendazole_Castro2009_reference&body=Drug%3A%20albendazole%0ARecord%3A%20Albendazole_Castro2009_reference%0APaper%3A%20Castro_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_albendazole/Albendazole_Castro2009_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 17:26 UTC</sub>
