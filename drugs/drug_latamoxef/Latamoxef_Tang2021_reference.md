<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;latamoxef&quot;,&quot;href&quot;:&quot;drugs/drug_latamoxef/&quot;},{&quot;label&quot;:&quot;Tang_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# latamoxef — `Latamoxef_Tang2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; q2 has no unit.

<div class="pk-model-meta" hidden drug="latamoxef" model-id="Latamoxef_Tang2021_reference" status="needs_review" stale="false" population="neonates" measured-compound="latamoxef" parameterization="mechanistic" topology="1C"></div>

## Citation
Tang BH, Guan Z, Allegaert K, Wu YE, Manolis E, Leroux S et al. Drug Clearance in Neonates: A Combination of Population Pharmacokinetic Modelling and Machine Learning Approaches to Improve Individual Prediction. Clinical pharmacokinetics 60(11):1435–1448 (2021).
  ·  DOI: [10.1007/s40262-021-01033-x](https://doi.org/10.1007/s40262-021-01033-x)

## Population and dosing

**Population:** neonates · condition healthy · age group neonate · n = ,
  "condition": "healthy",
  "species": "human",
  "compounds": [
    {
      "name": "latamoxef",
      "role": "parent",
      "dosed": "yes",
      "measured": "yes",
      "has_parameters": "yes"
    },
    {
      "name": "vancomycin",
      "role": "parent",
      "dosed": "yes",
      "measured": "yes",
      "has_parameters": "yes"
    },
    {
      "name": "cefepime",
      "role": "parent",
      "dosed": "yes",
      "measured": "yes",
      "has_parameters": "yes"
    },
    {
      "name": "azlocillin",
      "role": "parent",
      "dosed": "yes",
      "measured": "yes",
      "has_parameters": "yes"
    },
    {
      "name": "ceftazidime",
      "role": "parent",
      "dosed": "yes",
      "measured": "yes",
      "has_parameters": "yes"
    },
    {
      "name": "amoxicillin",
      "role": "parent",
      "dosed": "yes",
      "measured": "yes",
      "has_parameters": "yes"
    }
  ],
  "links": []
}.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θ1 | equation variable | 0.863 |  |
| θ2 | Q2 | 0.544 |  |
| Total Clearance (mL/min) | CL | 87 | mL/min |
| Renal Clearance (mL/min) | CLR | 66 | mL/min |
| θCL | θCL | 0.0680 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; q2 has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — latamoxef: Q2 0.544, CL 87 mL/min, CLR 66 mL/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has latamoxef, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θ1 | `Q900` · equation variable | 0.863 |  |  |  |  | llm (0.6) | tab_0:row16:col2, tab_0:row16:col3, tab_0:row16:col4, tab_0:row16:col5, tab_0:row16:col6, tab_0:row16:col7 |
| θ2 | `Q99` · Q2 | 0.544 |  |  |  |  | llm (0.6) | tab_0:row18:col2, tab_0:row18:col3, tab_0:row18:col4, tab_0:row18:col5, tab_0:row18:col6, tab_0:row18:col7 |
| Total Clearance (mL/min) | `Q22` · CL | 87 | mL/min | 1.45e-06 | m3/s | ml/min | exact (1) | Tang_2021_table_2:row0:col4 |
| Renal Clearance (mL/min) | `Q26` · CLR | 66 | mL/min | 1.1e-06 | m3/s | ml/min | exact (1) | Tang_2021_table_2:row1:col4 |
| θCL | `Q900` · θCL | 0.0680 | mL/min | 1.133e-09 | m3/s |  |  | tab_0:row14:col2, tab_0:row14:col3, tab_0:row14:col4, tab_0:row14:col5, tab_0:row14:col6, tab_0:row14:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| θCL | Q22 | llm_confirmed |
| Fage | Q40 | llm |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Patients' — extend the ontology if this is a real PK parameter (source ['tab_0:row2:col2', 'tab_0:row2:col3', 'tab_0:row2:col4', 'tab_0:row2:col5', 'tab_0:row2:col6', 'tab_0:row2:col7'])
- dropped unlinked row (NIL): 'Samples' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col2', 'tab_0:row3:col3', 'tab_0:row3:col4', 'tab_0:row3:col5', 'tab_0:row3:col6', 'tab_0:row3:col7'])
- dropped unlinked row (NIL): 'Fsize' — extend the ontology if this is a real PK parameter (source ['tab_0:row15:col2', 'tab_0:row15:col3', 'tab_0:row15:col4', 'tab_0:row15:col5', 'tab_0:row15:col6', 'tab_0:row15:col7'])
- dropped duplicate Q900 ('θ3', value '0.214') — already have one for this compound
- dropped unlinked row (NIL): 'FRF' — extend the ontology if this is a real PK parameter (source ['tab_0:row20:col2', 'tab_0:row20:col3', 'tab_0:row20:col4', 'tab_0:row20:col5'])
- dropped unlinked row (NIL): 'θ4' — extend the ontology if this is a real PK parameter (source ['tab_0:row21:col2', 'tab_0:row21:col3'])
- dropped duplicate Q900 ('θ5', value '0.666') — already have one for this compound
- unit inherited for CL (Q22): 'mL/min' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=latamoxef
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q22 (CL): CL = 5.9*(CW/70)^0.75*(PMA/3
- Q22 (CL) is equation-defined: value moved to equation-variable 'θCL'; equation kept verbatim
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table Tang_2021_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tang_2021_table_2:row0:col6 = '~300'
- unparsed cell Tang_2021_table_2:row1:col6 = '~166'
- companion parameter table 2 transcribed (10 record(s))
- captured model equation CL = 5.9*(CW/70)^0.75*(PMA/3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fage]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[frf]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ1]` | 0.863 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ2]` | 0.544 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcl]` | 0.0680 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θcl]` |  | 0.0680 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | latamoxef | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | latamoxef | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tang_2021_table_2:row0:col4'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Tang_2021_table_2:row1:col4'] |
| C5_unit_missing_Q99 | fail | [length] ** 3 / [time] |  | ['tab_0:row18:col2', 'tab_0:row18:col3', 'tab_0:row18:col4', 'tab_0:row18:col5', 'tab_0:row18:col6', 'tab_0:row18:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 87 | ['Tang_2021_table_2:row0:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.22 L/h | ['Tang_2021_table_2:row0:col4'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blatamoxef%5D%20Latamoxef_Tang2021_reference&body=Drug%3A%20latamoxef%0ARecord%3A%20Latamoxef_Tang2021_reference%0APaper%3A%20Tang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_latamoxef/Latamoxef_Tang2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:31 UTC</sub>
