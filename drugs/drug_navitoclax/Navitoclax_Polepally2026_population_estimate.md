<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;navitoclax&quot;,&quot;href&quot;:&quot;drugs/drug_navitoclax/&quot;},{&quot;label&quot;:&quot;Polepally_2026 \u00b7 population_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# navitoclax — `Navitoclax_Polepally2026_population_estimate`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.417). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — navitoclax: kel 0.000259 1/day, kabs 4.7 1/day, tlag 0.0479 day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of correction_factor_for_baseline_plt_count: this record has 0.813, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Polepally AR et al., Semi-Mechanistic PK/PD Modeling of Plat…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70260](https://doi.org/10.1002/psp4.70260)

<div class="pk-model-meta" hidden drug="navitoclax" model-id="Navitoclax_Polepally2026_population_estimate" status="needs_review" stale="false" population="patients with myelofibrosis" measured-compound="navitoclax" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| correction_factor_for_baseline_plt_count | `Q900` · correction_factor_for_baseline_plt_count | 0.813 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470260-tbl-0003:row1:col1 | — | not captured |
| 𝜆, LAMBDA (1/day) | `Q47` · kel | 0.000259 | 1/day | 2.9976851851851852e-09 | 1/h | not captured | llm_corrected (0.6) | psp470260-tbl-0003:row7:col1 | — | not captured |
| theta_q321_sex | `Q900` · theta_q321_sex | 1.81 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470260-tbl-0003:row8:col1 | — | not captured |
| ka (1/day) | `Q49` · kabs | 4.7 | 1/day | 5.4398148148148144e-05 | 1/h | not captured | review_gapfill (0.7) | Polepally_2026:review | — | not captured |
| t lag (day) | `Q83` · tlag | 0.0479 | day | 4138.5599999999995 | h | not captured | review_gapfill (0.7) | Polepally_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Correction factor for baseline PLT count' → Q900:correction_factor_for_baseline_plt_count = 0.813 (additive_shift on the model)
- dropped PD-category row 'Navitoclax slope (L/mg)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470260-tbl-0003:row2:col1'])
- dropped PD-category row 'ɣ, GAMMA' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470260-tbl-0003:row3:col1'])
- dropped PD-category row 'Kout (1/day)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470260-tbl-0003:row4:col1'])
- dropped PD-category row 'EC50RUX (mg/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470260-tbl-0003:row5:col1'])
- dropped PD-category row 'E max,RUX' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470260-tbl-0003:row6:col1'])
- covariate effect for Q321 has no base parameter row (kept as unattached equation-variable)
- implicit units: '𝜆, LAMBDA (1/day)' → 1/day (from the paper text: "The parameter identifier provided in the prompt explicitly contains the unit: '𝜆, LAMBDA (1/day)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=navitoclax
- population split: 'population estimate' subgroup of Polepally_2026 (paper reports 2 populations: navitoclax, population estimate)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Polepally_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Polepally_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp470260-tbl-0003:row1:col3 = '(0.772, 0.856)'
- unparsed cell psp470260-tbl-0003:row2:col3 = '(0.422, 0.572)'
- unparsed cell psp470260-tbl-0003:row3:col3 = '(5.92, 6.04)'
- unparsed cell psp470260-tbl-0003:row4:col3 = '(0.128, 0.128)'
- unparsed cell psp470260-tbl-0003:row5:col3 = '(0.0369, 0.126)'
- unparsed cell psp470260-tbl-0003:row7:col3 = '(0.000245, 0.000272)'
- unparsed cell psp470260-tbl-0003:row8:col3 = '(0.685, 4.76)'
- unparsed cell psp470260-tbl-0003:row9:col3 = '(0.0853, 0.0901)'
- unparsed cell psp470260-tbl-0003:row10:col3 = '(−10.7, 22.8)'
- unparsed cell Polepally_2026_table_4:row1:col3 = '(126, 147)'
- unparsed cell Polepally_2026_table_4:row2:col3 = '(6.10, 70.5)'
- unparsed cell Polepally_2026_table_4:row3:col3 = '(0.600, 8.80)'
- unparsed cell Polepally_2026_table_4:row4:col3 = '(30.0, 125)'
- unparsed cell Polepally_2026_table_4:row5:col3 = '(46.7, 110)'
- unparsed cell Polepally_2026_table_4:row6:col3 = '(0.0452, 0.0506)'
- unparsed cell Polepally_2026_table_4:row7:col3 = '(−0.259, −0.0842)'
- unparsed cell Polepally_2026_table_4:row8:col3 = '(0.112, 0.144)'
- unparsed cell Polepally_2026_table_4:row9:col3 = '(0.00000293, 0.0000108)'
- companion parameter table 4 transcribed (18 record(s))
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.417 (5/12 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[correction_factor_for_baseline_plt_count]` | 0.813 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 4.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[population naive effect on e prog]` | not captured | -1.88 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag]` | 0.0479 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q321_sex].rse_percent` | not captured | 52.6 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q324_category]` | not captured | 0.813 | only_one_extracted |
| `gpt-oss-120b` | `parameters[λ, lambda]` | 0.000259 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp470260-tbl-0003:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Polepally_2026:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Polepally_2026:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_navitoclax/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Polepally_2026` / `Polepally_2026::population_estimate`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:07 UTC</sub>
