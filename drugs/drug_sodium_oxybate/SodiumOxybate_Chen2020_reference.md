<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;sodium oxybate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_oxybate/&quot;},{&quot;label&quot;:&quot;Chen_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium oxybate — `SodiumOxybate_Chen2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Peripheral volume of distribution has an unconvertible unit, and an orphan compartment renders the model structurally invalid.

<div class="pk-model-meta" hidden drug="sodium oxybate" model-id="SodiumOxybate_Chen2020_reference" status="rejected" stale="false" population="children and adults with narcolepsy and healthy adults" measured-compound="sodium oxybate" parameterization="mechanistic" topology="2C"></div>

## Citation
Chen C, Rosen CL, Ruoff C, Boyce LH, Parvataneni R, Zomorodi K et al. Population and Noncompartmental Pharmacokinetics of Sodium Oxybate Support Weight-Based Dosing in Children and Adolescents With Narcolepsy With Cataplexy. Clinical and translational science 13(5):932–940 (2020).
  ·  DOI: [10.1111/cts.12780](https://doi.org/10.1111/cts.12780)

## Population and dosing

**Population:** children and adults with narcolepsy and healthy adults · condition narcolepsy with cataplexy · age group mixed · n = ,n_subjects": "174",.

**Dosing:** 1000, 4500 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vmax (mg/h) | Vmax | 1508 | mg/h |
| Km (mg/L) | Km | 22.0 | mg/L |
| Central compartment volume of distribution (VC) (L) | V1 | 29.5 | L |
| Peripheral volume of distribution (VP) (L)a | V2 | 5.33 | units |
| Ka (h−1) | kabs | 4.12 | h−1 |
| F (NA) | Fab | 1.00 | NA |
| K23 (h−1) | kcomp | 0.0968 | h−1 |
| theta_q319_na_power | theta_q319_na_power | 0.650 |  |
| theta_q319_na_power | theta_q319_na_power | 0.633 |  |
| theta_vmax_na | theta_vmax_na | -0.177 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.684). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Peripheral volume of distribution has an unconvertible unit, and an orphan compartment renders the model structurally invalid.**

The peripheral volume of distribution (5.33) is recorded with an ambiguous unit label that cannot be converted to standard SI units, leaving the parameter dimensionally undefined. Furthermore, the model structure contains an unreachable compartment, meaning part of the distribution pathway has no valid link from the dose administration site. Extracted — sodium oxybate: Vmax 1.51e+03 mg/h, Km 22 mg/L, V1 29.5 L, V2 5.33 units, kabs 4.12 h−1, Fab 1 NA, kcomp 0.0968 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sodium oxybate, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vmax (mg/h) | `Q66` · Vmax | 1508 | mg/h |  |  | mg/h | special_case (0.95) | Chen_2020_table_S4:row1:col1, Chen_2020_table_S4:row1:col4 |
| Km (mg/L) | `Q1` · Km | 22.0 | mg/L |  |  | mg/l | exact (1) | Chen_2020_table_S4:row2:col1, Chen_2020_table_S4:row2:col4 |
| Central compartment volume of distribution (VC) (L) | `Q63` · V1 | 29.5 | L | 0.0295 | m3 | l | llm_confirmed (0.6) | Chen_2020_table_S4:row3:col1, Chen_2020_table_S4:row3:col4 |
| Peripheral volume of distribution (VP) (L)a | `Q64` · V2 | 5.33 | units |  |  | units | boundary_compartment (0.9) | Chen_2020_table_S4:row4:col1, Chen_2020_table_S4:row4:col4 |
| Ka (h−1) | `Q49` · kabs | 4.12 | h−1 | 0.001144 | 1/s | 1/h | exact (1) | Chen_2020_table_S4:row5:col1, Chen_2020_table_S4:row5:col4 |
| F (NA) | `Q40` · Fab | 1.00 | NA |  |  |  | exact (1) | Chen_2020_table_S4:row6:col1, Chen_2020_table_S4:row6:col4 |
| K23 (h−1) | `Q48` · kcomp | 0.0968 | h−1 | 2.689e-05 | 1/s | 1/h | exact (1) | Chen_2020_table_S4:row7:col1, Chen_2020_table_S4:row7:col4 |
| theta_q319_na_power | `Q900` · theta_q319_na_power | 0.650 |  |  |  |  |  | Chen_2020_table_S4:row10:col1, Chen_2020_table_S4:row10:col4 |
| theta_q319_na_power | `Q900` · theta_q319_na_power | 0.633 |  |  |  |  |  | Chen_2020_table_S4:row11:col1, Chen_2020_table_S4:row11:col4 |
| theta_vmax_na | `Q900` · theta_vmax_na | -0.177 |  |  |  |  |  | Chen_2020_table_S4:row12:col1, Chen_2020_table_S4:row12:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter a' — extend the ontology if this is a real PK parameter (source ['cts12780-tbl-0002:row0:col1', 'cts12780-tbl-0002:row0:col2', 'cts12780-tbl-0002:row0:col3'])
- unit_dimension_mismatch: 'Vmax (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Peripheral volume of distribution (VP) (L)a' → Q64 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q48 ('K32 (h−1)', value '0.536') — already have one for this compound
- dropped unlinked row (NIL): 'Food effect on Ka (NA)' — extend the ontology if this is a real PK parameter (source ['Chen_2020_table_S4:row9:col1', 'Chen_2020_table_S4:row9:col4'])
- dropped unlinked row (NIL): 'Pediatric age category (7–17 y) on VC' — extend the ontology if this is a real PK parameter (source ['Chen_2020_table_S4:row13:col1', 'Chen_2020_table_S4:row13:col4'])
- dropped unlinked row (NIL): 'Child age category (7–11 y) on VC' — extend the ontology if this is a real PK parameter (source ['Chen_2020_table_S4:row14:col1', 'Chen_2020_table_S4:row14:col4'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sodium oxybate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Chen_2020_table_S4:row1:col2 = '37.7%'
- unparsed cell Chen_2020_table_S4:row1:col3 = '10.2%'
- unparsed cell Chen_2020_table_S4:row1:col5 = '(1357, 1699)'
- unparsed cell Chen_2020_table_S4:row2:col2 = '41.4%'
- unparsed cell Chen_2020_table_S4:row2:col3 = '24.5%'
- unparsed cell Chen_2020_table_S4:row2:col5 = '(17.74, 26.78)'
- unparsed cell Chen_2020_table_S4:row3:col2 = '11.8%'
- unparsed cell Chen_2020_table_S4:row3:col5 = '(28.35, 30.51)'
- unparsed cell Chen_2020_table_S4:row5:col2 = '47.2%'
- unparsed cell Chen_2020_table_S4:row5:col5 = '(3.57, 4.76)'
- unparsed cell Chen_2020_table_S4:row7:col5 = '(0.0655, 0.1407)'
- unparsed cell Chen_2020_table_S4:row8:col5 = '(0.449, 0.633)'
- unparsed cell Chen_2020_table_S4:row9:col5 = '(−0.741, −0.61)'
- unparsed cell Chen_2020_table_S4:row10:col5 = '(0.506, 0.812)'
- unparsed cell Chen_2020_table_S4:row11:col5 = '(0.434, 0.801)'
- unparsed cell Chen_2020_table_S4:row12:col5 = '(−0.2438, −0.1106)'
- unparsed cell Chen_2020_table_S4:row13:col5 = '(0.0897, 0.3213)'
- unparsed cell Chen_2020_table_S4:row14:col5 = '(−0.518, −0.124)'
- companion parameter table S4 transcribed (28 record(s))
- LLM selected parameter table(s) 2, S4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.684 (13/19 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central compartment volume of distribution (vc)].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[ka].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_kabs_food]` |  | -0.681 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_age]` |  | 0.201 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sodium oxybate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sodium oxybate | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Chen_2020_table_S4:row2:col1', 'Chen_2020_table_S4:row2:col4'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['Chen_2020_table_S4:row7:col1', 'Chen_2020_table_S4:row7:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chen_2020_table_S4:row5:col1', 'Chen_2020_table_S4:row5:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Chen_2020_table_S4:row3:col1', 'Chen_2020_table_S4:row3:col4'] |
| C5_dimension_Q64 | fail | [luminosity] / [length] ** 2 | units | ['Chen_2020_table_S4:row4:col1', 'Chen_2020_table_S4:row4:col4'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | ['Chen_2020_table_S4:row1:col1', 'Chen_2020_table_S4:row1:col4'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 29.5 L | ['Chen_2020_table_S4:row3:col1', 'Chen_2020_table_S4:row3:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_oxybate%5D%20SodiumOxybate_Chen2020_reference&body=Drug%3A%20sodium_oxybate%0ARecord%3A%20SodiumOxybate_Chen2020_reference%0APaper%3A%20Chen_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_oxybate/SodiumOxybate_Chen2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:32 UTC</sub>
