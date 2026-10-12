<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ponatinib&quot;,&quot;href&quot;:&quot;drugs/drug_ponatinib/&quot;},{&quot;label&quot;:&quot;Hanley_2022 \u00b7 daily_ponatinib_dose&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ponatinib — `Ponatinib_Hanley2022_daily_ponatinib_dose`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume; cavg has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — ponatinib: Cavg 87.2, CL/F 34.3 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of absorption lag time: this record has none, the second reading 3.932; it also differs on 7 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Hanley MJ et al., Population Pharmacokinetics of Ponatini…, Journal of clinical pharmac… (2022)
  ·  DOI: [10.1002/jcph.1990](https://doi.org/10.1002/jcph.1990)

<div class="pk-model-meta" hidden drug="ponatinib" model-id="Ponatinib_Hanley2022_daily_ponatinib_dose" status="needs_review" stale="false" population="healthy volunteers and patients with hematologic malignancies" measured-compound="ponatinib" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CaverageSS &gt; 10.7 ng/mL,a % of patients | `Q71` · Cavg | 87.2 | not captured | not captured | not captured | not captured | llm (0.6) | Hanley_2022_table_2:row5:col1, Hanley_2022_table_2:row5:col2, Hanley_2022_table_2:row5:col3 | — | not captured |
| Ponatinib CL/F | `Q27` · CL/F | 34.28 | L/h | 9.522222222222223e-06 | L/h | not captured | boundary (0.8) | Hanley_2022:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q71 ('CaverageSS &gt; 21.3 ng/mL, b % of patients', value '34.7') — already have one for this compound
- salvaged Q27 ('Ponatinib CL/F'=34.28) from results prose — parameter table was unreadable
- implicit units: 'CaverageSS &gt; 10.7 ng/mL,a % of patients' — the LLM proposed '%', whose dimension does not fit Q71; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ponatinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'daily ponatinib dose' subgroup of Hanley_2022 (paper reports 2 populations: daily ponatinib dose, estimate)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell jcph1990-tbl-0001:row1:col3 = '(4.41‐4.41)'
- unparsed cell jcph1990-tbl-0001:row2:col3 = '(32.01‐36.5)'
- unparsed cell jcph1990-tbl-0001:row3:col1 = '838.6 L'
- unparsed cell jcph1990-tbl-0001:row3:col3 = '(778.8‐899.1)'
- unparsed cell jcph1990-tbl-0001:row4:col3 = '(14.91‐19.98)'
- unparsed cell jcph1990-tbl-0001:row5:col1 = '347.4 L'
- unparsed cell jcph1990-tbl-0001:row5:col3 = '(311.8‐385.6)'
- unparsed cell jcph1990-tbl-0001:row6:col3 = '(3.911‐3.952)'
- unparsed cell jcph1990-tbl-0001:row7:col3 = '(1.199‐1.407)'
- unparsed cell jcph1990-tbl-0001:row8:col1 = '46.61%'
- unparsed cell jcph1990-tbl-0001:row8:col3 = '(39.48‐52.57)'
- unparsed cell jcph1990-tbl-0001:row9:col3 = '(0.4225‐0.8653)'
- unparsed cell jcph1990-tbl-0001:row10:col3 = '(0.2053‐0.8278)'
- unparsed cell jcph1990-tbl-0001:row12:col1 = '14.91% b'
- unparsed cell jcph1990-tbl-0001:row12:col3 = '(13.39‐16.34)'
- unparsed cell jcph1990-tbl-0001:row12:col4 = '13%'
- unparsed cell jcph1990-tbl-0001:row13:col1 = '38.59% b'
- unparsed cell jcph1990-tbl-0001:row13:col3 = '(27.17‐53.74)'
- unparsed cell jcph1990-tbl-0001:row13:col4 = '10%'
- unparsed cell jcph1990-tbl-0001:row15:col1 = '46.85% b'
- unparsed cell jcph1990-tbl-0001:row15:col3 = '(40.56‐53.12)'
- unparsed cell jcph1990-tbl-0001:row15:col4 = '19%'
- unparsed cell jcph1990-tbl-0001:row16:col1 = '48.04% b'
- unparsed cell jcph1990-tbl-0001:row16:col3 = '(42.28‐54.29)'
- unparsed cell jcph1990-tbl-0001:row16:col4 = '6.4%'
- unparsed cell jcph1990-tbl-0001:row17:col1 = '42.33% b'
- unparsed cell jcph1990-tbl-0001:row17:col3 = '(34.09‐49.79)'
- unparsed cell jcph1990-tbl-0001:row17:col4 = '20%'
- unparsed cell jcph1990-tbl-0001:row18:col1 = '63.68%'
- unparsed cell jcph1990-tbl-0001:row18:col3 = '(50.93‐75.26)'
- companion parameter table 2 transcribed (6 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[absorption lag time]` | not captured | 3.932 | only_one_extracted |
| `qwen3.8-27b` | `parameters[caveragess &gt; 10.7 ng/ml,a % of patients]` | 87.2 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ka2]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ponatinib cl/f]` | 34.28 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[q/f]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q78_age]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q78_body_weight]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q71 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Hanley_2022_table_2:row5:col1', 'Hanley_2022_table_2:row5:col2', 'Hanley_2022_table_2:row5:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 34.3 L/h | not captured | not captured | ['Hanley_2022:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ponatinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hanley_2022` / `Hanley_2022::daily_ponatinib_dose`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:23 UTC</sub>
