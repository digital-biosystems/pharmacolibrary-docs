<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;epinephrine&quot;,&quot;href&quot;:&quot;drugs/drug_epinephrine/&quot;},{&quot;label&quot;:&quot;Frechen_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# epinephrine — `Epinephrine_Frechen2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Reproduces paper, 2026-09-28 14:37 UTC) predates the latest extraction (2026-10-04 01:09 UTC); the status shown comes from the current checks. Every check that could be run on this record passed.

<div class="pk-model-meta" hidden drug="epinephrine" model-id="Epinephrine_Frechen2015_reference" status="needs_review" stale="true" population="healthy volunteers" measured-compound="epinephrine" parameterization="mechanistic" topology="1C"></div>

## Citation
Frechen S, Suleiman AA, Mohammad Nejad Sigaroudi A, Wachall B, Fuhr U. Population pharmacokinetic and pharmacodynamic modeling of epinephrine administered using a mobile inhaler. Drug metabolism and pharmacokinetics 30(6):391–399 (2015).
  ·  DOI: [10.1016/j.dmpk.2015.08.002](https://doi.org/10.1016/j.dmpk.2015.08.002)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = &gt;=9.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| elimination half-life | t1/2z | 4.1 | min |
| Bioavailability after inhalation | Fab | 4.7 | % |
| tvCl (mL/min) | CL | 15.0 | mL/min |
| tvV (L) | V | 410.4 | L |
| tvKa (1/h) | kabs | 1.92 | 1/h |
| ALAG (h) | tlag | 0.0428 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.636). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of alag: this record has 0.0428, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| elimination half-life | `Q57` · t1/2z | 4.1 | min | 246 | s | min | llm (0.6) | Frechen_2015:abstract |
| Bioavailability after inhalation | `Q40` · Fab | 4.7 | % |  |  |  | llm_confirmed (0.6) | Frechen_2015:abstract |
| tvCl (mL/min) | `Q22` · CL | 15.0 | mL/min | 2.5e-07 | m3/s | L/h | review_gapfill (0.7) | Knych_2023:review |
| tvV (L) | `Q61` · V | 410.4 | L | 0.4104 | m3 | L | review_gapfill (0.7) | Knych_2023:review |
| tvKa (1/h) | `Q49` · kabs | 1.92 | 1/h | 0.0005333 | 1/s | 1/h | review_gapfill (0.7) | Knych_2023:review |
| ALAG (h) | `Q83` · tlag | 0.0428 | h | 154.1 | s | h | review_gapfill (0.7) | Yoo_2015:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=epinephrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Knych_2023's review values (primary lacked it)
- gap-filled Q61 (V) from Knych_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Knych_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Yoo_2015's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Frechen_2015_metadata.yaml (2 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.636 (7/11 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag]` | 0.0428 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcl]` | 15.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvka]` | 1.92 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvv]` | 410.4 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Knych_2023:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Knych_2023:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Frechen_2015:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Knych_2023:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Yoo_2015:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 15 | ['Knych_2023:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.9 L/h | ['Knych_2023:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 410 L | ['Knych_2023:review'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=epinephrine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_epinephrine/Epinephrine_Frechen2015_reference/Epinephrine_Frechen2015_reference_modelica.zip" download>Epinephrine_Frechen2015_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_epinephrine/Epinephrine_Frechen2015_reference/Epinephrine_Frechen2015_reference_fmi.zip" download>Epinephrine_Frechen2015_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_epinephrine/Epinephrine_Frechen2015_reference/Epinephrine_Frechen2015_reference_matlab.zip" download>Epinephrine_Frechen2015_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_epinephrine/Epinephrine_Frechen2015_reference/Epinephrine_Frechen2015_reference_matlab_simbio.zip" download>Epinephrine_Frechen2015_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_epinephrine/Epinephrine_Frechen2015_reference/Epinephrine_Frechen2015_reference_sbml.zip" download>Epinephrine_Frechen2015_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_epinephrine/Epinephrine_Frechen2015_reference/Epinephrine_Frechen2015_reference_cellml.zip" download>Epinephrine_Frechen2015_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Frechen S, Suleiman AA, Mohammad Nejad Sigaroudi A, Wachall B, Fuhr U. Population pharmacokinetic and pharmacodynamic modeling of epinephrine administered using a mobile inhaler. Drug metabolism and pharmacokinetics 30(6):391–399 (2015). [doi:10.1016/j.dmpk.2015.08.002](https://doi.org/10.1016/j.dmpk.2015.08.002)

**This record:** Pharmacolibrary v26.09, model `Epinephrine_Frechen2015_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_epinephrine/Epinephrine_Frechen2015_reference>

```bibtex
@misc{pharmacolibrary_EpinephrineFrechen2015reference,
  title  = {{Pharmacolibrary model Epinephrine_Frechen2015_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_epinephrine/Epinephrine_Frechen2015_reference},
  note   = {Parameters from doi:10.1016/j.dmpk.2015.08.002},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepinephrine%5D%20Epinephrine_Frechen2015_reference&body=Drug%3A%20epinephrine%0ARecord%3A%20Epinephrine_Frechen2015_reference%0APaper%3A%20Frechen_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_epinephrine/Epinephrine_Frechen2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 01:09 UTC</sub>
