<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03B&quot;,&quot;href&quot;:&quot;atc/G03B.md&quot;},{&quot;label&quot;:&quot;testosterone&quot;,&quot;href&quot;:&quot;drugs/drug_testosterone/&quot;},{&quot;label&quot;:&quot;Bi_2018 \u00b7 bootstrapa&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# testosterone — `Testosterone_Bi2018_bootstrapa`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL/F and V/F have no unit.

<div class="pk-model-meta" hidden drug="testosterone" model-id="Testosterone_Bi2018_bootstrapa" status="needs_review" stale="false" population="healthy male subjects" measured-compound="testosterone" parameterization="apparent" topology="1C"></div>

## Citation
Bi Y, Perry PJ, Ellerby M, Murry DJ. Population Pharmacokinetic/Pharmacodynamic Modeling of Depot Testosterone Cypionate in Healthy Male Subjects. CPT: pharmacometrics & systems pharmacology 7(4):259–268 (2018).
  ·  DOI: [10.1002/psp4.12287](https://doi.org/10.1002/psp4.12287)

## Population and dosing

**Population:** healthy male subjects · age group adult · n = n_subjects.

**Dosing:** 100, 250, 500 mg, sc, multiple, every 168 h.

**Dosed compound ≠ measured compound:** dosed testosterone cypionate, measured testosterone.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F | CL/F | 2.6 | kL/day |
| V/F | V/F | 14.4 | kL |
| ka (absorption rate constant) | kabs | 16.67 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL/F and V/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL/F and V/F), so that value has no SI equivalent. Extracted — testosterone: CL/F 2.6 kL/day, V/F 14.4 kL, kabs 16.7 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has testosterone, the second reading total testosterone; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 2.6 | kL/day |  |  | kL/day | exact (1) | Bi_2018:results_prose |
| V/F | `Q76` · V/F | 14.4 | kL |  |  | kL | exact (1) | Bi_2018:results_prose |
| ka (absorption rate constant) | `Q49` · kabs | 16.67 | h−1 | 0.004631 | 1/s | 1/h | review_gapfill (0.7) | Lee_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CL/F, kL/day'
- dropped value-less row: 'V/F, kL'
- dropped value-less row: 'Ka, day−1'
- dropped value-less row: 'βbase, mg/day'
- dropped value-less row: 'Lambda(λ)' (captured trailing unit 'λ' for child rows)
- dropped value-less row: 'Emax, mg/day'
- dropped value-less row: 'LH50, IU/L'
- dropped value-less row: 'A_0, TC'
- dropped value-less row: 'θBalbumin−V'
- dropped value-less row: 'θCalbumin−V'
- dropped value-less row: 'θBWT−V'
- dropped value-less row: 'θBWT−CL'
- dropped value-less row: 'θCWT−CL'
- salvaged Q27 ('CL/F'=2.6) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F'=14.4) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=testosterone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'bootstrapa' subgroup of Bi_2018 (paper reports 2 populations: bootstrapa, final model)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Lee_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp412287-tbl-0002:row10:col4 = '(−3.56 to −0.842)'
- unparsed cell psp412287-tbl-0002:row11:col4 = '(−0.369 to −0.108)'
- unparsed cell psp412287-tbl-0002:row17:col1 = '9.66% (25.2)'
- unparsed cell psp412287-tbl-0002:row17:col2 = '8.60%'
- unparsed cell psp412287-tbl-0002:row17:col4 = '(2.98%–12.29%)'
- unparsed cell psp412287-tbl-0002:row18:col1 = '37% (14.6)'
- unparsed cell psp412287-tbl-0002:row18:col2 = '35.9%'
- unparsed cell psp412287-tbl-0002:row18:col4 = '(18.3%–51.7%)'
- unparsed cell psp412287-tbl-0002:row19:col1 = '53.9% (42.5)'
- unparsed cell psp412287-tbl-0002:row19:col2 = '52.4%'
- unparsed cell psp412287-tbl-0002:row19:col4 = '(0.54%–87.5%)'
- unparsed cell psp412287-tbl-0002:row20:col1 = '45.3% (16.3)'
- unparsed cell psp412287-tbl-0002:row20:col2 = '43.1%'
- unparsed cell psp412287-tbl-0002:row20:col4 = '(14.5%–66.3%)'
- unparsed cell psp412287-tbl-0002:row21:col1 = '75.9% (25.3)'
- unparsed cell psp412287-tbl-0002:row21:col2 = '72.9%'
- unparsed cell psp412287-tbl-0002:row21:col4 = '(40.0%–99.6%)'
- unparsed cell psp412287-tbl-0002:row22:col1 = '13.6% (49.6)'
- unparsed cell psp412287-tbl-0002:row22:col2 = '13.3%'
- unparsed cell psp412287-tbl-0002:row22:col4 = '(0.14%–21.3%)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[a_0, tc]` |  | 5.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f, kl/day]` |  | 2.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 2.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 16.67 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.785 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f, kl]` |  | 11.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 14.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θbalbumin-v]` |  | 58.7 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | testosterone | total testosterone | mismatch |

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
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lee_2018:review'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | kL/day | ['Bi_2018:results_prose'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 | kL | ['Bi_2018:results_prose'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btestosterone%5D%20Testosterone_Bi2018_bootstrapa&body=Drug%3A%20testosterone%0ARecord%3A%20Testosterone_Bi2018_bootstrapa%0APaper%3A%20Bi_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_testosterone/Testosterone_Bi2018_bootstrapa%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:29 UTC</sub>
