<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;palbociclib&quot;,&quot;href&quot;:&quot;drugs/drug_palbociclib/&quot;},{&quot;label&quot;:&quot;Marouille_2021 \u00b7 final_final_population_pk_model_with_covariates&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# palbociclib — `Palbociclib_Marouille2021_final_final_population_pk_model_wi`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Palbociclib was held back because its clearance was not estimated: the reported CL/F of 57.13 L/h is assigned to neutrophils (ANC), not palbociclib.

<div class="pk-model-meta" hidden drug="palbociclib" model-id="Palbociclib_Marouille2021_final_final_population_pk_model_wi" status="model_quarantined" stale="false" population="women with HR+/HER2− advanced or metastatic breast cancer" measured-compound="palbociclib" parameterization="apparent" topology="1C"></div>

## Citation
Marouille AL, Petit E, Kaderbhaï C, Desmoulins I, Hennequin A, Mayeur D et al. Pharmacokinetic/Pharmacodynamic Model of Neutropenia in Real-Life Palbociclib-Treated Patients. Pharmaceutics 13(10) (2021).
  ·  DOI: [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708)

## Population and dosing

**Population:** women with HR+/HER2− advanced or metastatic breast cancer · condition advanced or metastatic breast cancer · age group adult · n = 143.

**Dosing:** 75, 100, 125 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cl/F (L/h) | CL/F | 57.13 | L/h |
| V/F (L) | V/F | 1580 | L |
| ka (h−1) | kabs | 0.187 | h−1 |
| Tlag(h) (fix) | tlag | 0.658 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Palbociclib was held back because its clearance was not estimated: the reported CL/F of 57.13 L/h is assigned to neutrophils (ANC), not palbociclib.**

All 4 extracted parameters describe neutrophils (ANC), not palbociclib; palbociclib’s clearance, volume of distribution and absorption lag time therefore had no value, so library placeholders stood in and the model was held back rather than published with invented numbers. The model builder also assumed F=1 and Fm=1 and made no molar correction, using apparent parameterization. Extracted — neutrophils (ANC): CL/F 57.1 L/h, V/F 1.58e+03 L, kabs 0.187 h−1, tlag 0.658 h.

Independently confirmed by `qwen3.8-27b`.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cl/F (L/h) | `Q27` · CL/F | 57.13 | L/h | 1.587e-05 | m3/s | l/h | exact (1) | Marouille_2021_table_3:row2:col3, Marouille_2021_table_3:row2:col4 |
| V/F (L) | `Q76` · V/F | 1580 | L | 1.58 | m3 | l | exact (1) | Marouille_2021_table_3:row5:col3 |
| ka (h−1) | `Q49` · kabs | 0.187 | h−1 | 5.194e-05 | 1/s | 1/h | exact (1) | Marouille_2021_table_3:row6:col3, Marouille_2021_table_3:row6:col4 |
| Tlag(h) (fix) | `Q83` · tlag | 0.658 | h | 2369 | s | h | space_fold (0.95) | Marouille_2021_table_3:row7:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Clcr' routed out of structural estimates ('Interindividual variability in Cl/F was partially explained by Clcr and ALP concentration.')
- table section iiv: 'ALP concentration' routed out of structural estimates ('Interindividual variability in Cl/F was partially explained by Clcr and ALP concentration.')
- dropped unlinked row (NIL): 'Objective Function Value' — extend the ontology if this is a real PK parameter (source ['Marouille_2021_table_3:row0:col3', 'Marouille_2021_table_3:row0:col4'])
- dropped unlinked row (NIL): 'Clcr (med = 71.6 mL/mn) on Cl/F' — extend the ontology if this is a real PK parameter (source ['Marouille_2021_table_3:row3:col3', 'Marouille_2021_table_3:row3:col4'])
- dropped duplicate Q27 ('ALP (med = 88.6 UI/L) on Cl/F', value '-0.14') — already have one for this compound
- unit_dimension_unknown: 'fix' (tlag)
- implicit units: 'Tlag(h) (fix)' → h (from the paper text: 'The parameter is labeled “Tlag(h)” in the provided parameter list; the paper also reports “the lag-time (Tlag: 0.658 h).')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=palbociclib
- model-stage split: 'final population pk model with covariates' is the final model of Marouille_2021 (paper reports 2 stages: final pk/pd model with covariates, final population pk model with covariates); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pharmaceutics-13-01708-t004:row3:col7 = '[2.75–3.16]'
- unparsed cell pharmaceutics-13-01708-t004:row4:col7 = '[0.0009–0.0014]'
- unparsed cell pharmaceutics-13-01708-t004:row5:col7 = '[4.61–6.30]'
- unparsed cell pharmaceutics-13-01708-t004:row6:col7 = '[0.085–0.137]'
- unparsed cell pharmaceutics-13-01708-t004:row7:col7 = '[24.6–33.1]'
- unparsed cell pharmaceutics-13-01708-t004:row8:col7 = '[0.23–0.78]'
- unparsed cell pharmaceutics-13-01708-t004:row9:col7 = '[21.2–34.1]'
- unparsed cell pharmaceutics-13-01708-t004:row10:col7 = '[10.0–33.0]'
- unparsed cell pharmaceutics-13-01708-t004:row11:col7 = '[0.31–0.36]'
- unparsed cell Marouille_2021_table_3:row2:col6 = '[54.19–60.42]'
- unparsed cell Marouille_2021_table_3:row3:col6 = '[0.35–0.57]'
- unparsed cell Marouille_2021_table_3:row4:col6 = '[−0.24–−0.05]'
- unparsed cell Marouille_2021_table_3:row6:col6 = '[0.17–0.19]'
- unparsed cell Marouille_2021_table_3:row8:col6 = '[21.8–37.1]'
- unparsed cell Marouille_2021_table_3:row9:col6 = '[6.46–22.48]'
- companion parameter table 3 transcribed (34 record(s), model stage 'final')
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | confirmed | 1.0 (8/8 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Marouille_2021_table_3:row2:col3', 'Marouille_2021_table_3:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Marouille_2021_table_3:row6:col3', 'Marouille_2021_table_3:row6:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Marouille_2021_table_3:row5:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Marouille_2021_table_3:row7:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 57.1 L/h | ['Marouille_2021_table_3:row2:col3', 'Marouille_2021_table_3:row2:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.58e+03 L | ['Marouille_2021_table_3:row5:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi/Palbociclib_Marouille2021_final_final_population_pk_model_wi_matlab.zip" download>Palbociclib_Marouille2021_final_final_population_pk_model_wi_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi/Palbociclib_Marouille2021_final_final_population_pk_model_wi_matlab_simbio.zip" download>Palbociclib_Marouille2021_final_final_population_pk_model_wi_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi/Palbociclib_Marouille2021_final_final_population_pk_model_wi_sbml.zip" download>Palbociclib_Marouille2021_final_final_population_pk_model_wi_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi/Palbociclib_Marouille2021_final_final_population_pk_model_wi_cellml.zip" download>Palbociclib_Marouille2021_final_final_population_pk_model_wi_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Marouille AL, Petit E, Kaderbhaï C, Desmoulins I, Hennequin A, Mayeur D et al. Pharmacokinetic/Pharmacodynamic Model of Neutropenia in Real-Life Palbociclib-Treated Patients. Pharmaceutics 13(10) (2021). [doi:10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708)

**This record:** Pharmacolibrary v26.09, model `Palbociclib_Marouille2021_final_final_population_pk_model_wi`. <https://pharmacolibrary.github.io/#/drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi>

```bibtex
@misc{pharmacolibrary_PalbociclibMarouille2021finalfinalpopulationpkmodelwi,
  title  = {{Pharmacolibrary model Palbociclib_Marouille2021_final_final_population_pk_model_wi}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi},
  note   = {Parameters from doi:10.3390/pharmaceutics13101708},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpalbociclib%5D%20Palbociclib_Marouille2021_final_final_population_pk_model_wi&body=Drug%3A%20palbociclib%0ARecord%3A%20Palbociclib_Marouille2021_final_final_population_pk_model_wi%0APaper%3A%20Marouille_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:09 UTC</sub>
