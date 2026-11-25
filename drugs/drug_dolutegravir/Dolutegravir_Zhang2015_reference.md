<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;dolutegravir&quot;,&quot;href&quot;:&quot;drugs/drug_dolutegravir/&quot;},{&quot;label&quot;:&quot;Zhang_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dolutegravir_Kengo2023_reference&quot;,&quot;label&quot;:&quot;Kengo_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dolutegravir/Dolutegravir_Kengo2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dolutegravir — `Dolutegravir_Zhang2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL has no unit.

<div class="pk-model-meta" hidden drug="dolutegravir" model-id="Dolutegravir_Zhang2015_reference" status="needs_review" stale="false" population="HIV-infected treatment-naive patients" measured-compound="dolutegravir" parameterization="apparent" topology="1C"></div>

## Citation
Zhang J, Hayes S, Sadler BM, Minto I, Brandt J, Piscitelli S et al. Population pharmacokinetics of dolutegravir in HIV-infected treatment-naive patients. British journal of clinical pharmacology 80(3):502–514 (2015).
  ·  DOI: [10.1111/bcp.12639](https://doi.org/10.1111/bcp.12639)

## Population and dosing

**Population:** HIV-infected treatment-naive patients · condition HIV infection · age group adult.

**Dosing:** 2, 10, 25, 50 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (l h–1)† | CL/F | 0.901 | l h–1 | 2.11 |
| V/F (l)‡ | V/F | 17.4 | l | 2.49 |
| ka (h–1) | kabs | 2.24 | h–1 | 15.4 |
| ALAG (h) | tlag | 0.263 | h | 32.7 |
| CL ∼ SMOKING | CL | 1.16 |  | 2.45 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — dolutegravir: CL/F 0.901 l h–1, V/F 17.4 l, kabs 2.24 h–1, tlag 0.263 h, CL 1.16.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f: this record has none, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (l h–1)† | `Q27` · CL/F | 0.901 | l h–1 | 2.503e-07 | m3/s | l/h | 2.11 | space_fold (0.95) | tbl3:row2:col1 |
| V/F (l)‡ | `Q76` · V/F | 17.4 | l | 0.0174 | m3 | l | 2.49 | space_fold (0.95) | tbl3:row3:col1 |
| ka (h–1) | `Q49` · kabs | 2.24 | h–1 | 0.0006222 | 1/s | 1/h | 15.4 | exact (1) | tbl3:row4:col1 |
| ALAG (h) | `Q83` · tlag | 0.263 | h | 946.8 | s | h | 32.7 | exact (1) | tbl3:row5:col1 |
| CL ∼ SMOKING | `Q22` · CL | 1.16 |  |  |  |  | 2.45 | llm_confirmed (0.6) | tbl3:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2CL' routed out of structural estimates ('Inter-individual or inter-occasion variability CV%‖')
- table section iiv: 'ω2V' routed out of structural estimates ('Inter-individual or inter-occasion variability CV%‖')
- table section iiv: 'ω2ka' routed out of structural estimates ('Inter-individual or inter-occasion variability CV%‖')
- table section iiv: 'ω2IOV-CL' routed out of structural estimates ('Inter-individual or inter-occasion variability CV%‖')
- table section residual_error: 'σ2prop' routed out of structural estimates ('Residual variability CV% Median 95% CI')
- dropped duplicate Q27 ('CL/F ∼ proof-of-concept', value '1.35') — already have one for this compound
- dropped unlinked row (NIL): 'F ∼ 10 mg§' — extend the ontology if this is a real PK parameter (source ['tbl3:row7:col1'])
- dropped duplicate Q27 ('CL/F ∼ WT', value '0.438') — already have one for this compound
- dropped duplicate Q76 ('V/F ∼ WT', value '0.768') — already have one for this compound
- dropped unlinked row (NIL): 'F ∼ GENDER§' — extend the ontology if this is a real PK parameter (source ['tbl3:row10:col1'])
- dropped duplicate Q22 ('CL ∼ AGE', value '0.193') — already have one for this compound
- dropped unlinked row (NIL): 'CL ∼ BILIRUBIN' — extend the ontology if this is a real PK parameter (source ['tbl3:row13:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=dolutegravir

**Extraction notes:**
- table tbl3: unspecified_interval_bound
- table tbl3: unparsed_numeric_cell
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f ∼ 10 mg]` |  | 1.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tbl3:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tbl3:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tbl3:row3:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['tbl3:row5:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['tbl3:row11:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.901 L/h | ['tbl3:row2:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 17.4 L | ['tbl3:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_modelica.zip" download>Dolutegravir_Zhang2015_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_fmi.zip" download>Dolutegravir_Zhang2015_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_matlab.zip" download>Dolutegravir_Zhang2015_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_matlab_simbio.zip" download>Dolutegravir_Zhang2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_sbml.zip" download>Dolutegravir_Zhang2015_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference/Dolutegravir_Zhang2015_reference_cellml.zip" download>Dolutegravir_Zhang2015_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Zhang J, Hayes S, Sadler BM, Minto I, Brandt J, Piscitelli S et al. Population pharmacokinetics of dolutegravir in HIV-infected treatment-naive patients. British journal of clinical pharmacology 80(3):502–514 (2015). [doi:10.1111/bcp.12639](https://doi.org/10.1111/bcp.12639)

**This record:** Pharmacolibrary, model `Dolutegravir_Zhang2015_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference>

```bibtex
@misc{pharmacolibrary_DolutegravirZhang2015reference,
  title  = {{Pharmacolibrary model Dolutegravir_Zhang2015_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference},
  note   = {Parameters from doi:10.1111/bcp.12639},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdolutegravir%5D%20Dolutegravir_Zhang2015_reference&body=Drug%3A%20dolutegravir%0ARecord%3A%20Dolutegravir_Zhang2015_reference%0APaper%3A%20Zhang_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dolutegravir/Dolutegravir_Zhang2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 13:10 UTC</sub>
