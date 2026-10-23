<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;febuxostat&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/&quot;},{&quot;label&quot;:&quot;Chen_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Febuxostat_Kamel2022_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Febuxostat_Kamel2022_se_for_the_estimate&quot;,&quot;label&quot;:&quot;Kamel_2022_se_for_the_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_febuxostat/Febuxostat_Kamel2022_se_for_the_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# febuxostat — `Febuxostat_Chen2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> T1/2ka , V and V/F have no unit.

<div class="pk-model-meta" hidden drug="febuxostat" model-id="Febuxostat_Chen2024_reference" status="needs_review" stale="false" population="healthy Chinese adults" measured-compound="febuxostat" parameterization="apparent" topology="3C"></div>

## Citation
Chen W, Jiang B, Ruan Z, Yang D, Hu Y, Lou H. Population pharmacokinetic analysis of febuxostat with high focus on absorption kinetics and food effect. BMC pharmacology & toxicology 25(1):57 (2024).
  ·  DOI: [10.1186/s40360-024-00783-1](https://doi.org/10.1186/s40360-024-00783-1)

## Population and dosing

**Population:** healthy Chinese adults · condition healthy · age group adult · n = &gt;=128.

**Dosing:** 20, 80 mg, oral, single.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| ka1 (h−1) | kabs | 4.02 | h−1 | 11.4 |  |
| F1 | Fab | 0.51 |  | 3.7 | 32.87 (7.24% RSE) |
| Tlag1 (h) | tlag | 0.22 | h | 8.93 |  |
| CL/F (L∙h−1) | CL/F | 6.14 | L∙h−1 | 2.26 | 25.71 (6.44% RSE) |
| Vc/F (L) | V1/F | 10.38 | L | 2.07 | 17.84 (10.6% RSE) |
| Q/F (L∙h−1) | Q/F | 1.93 | L∙h−1 | 4.25 | 37.81 (11.1% RSE) |
| Vp/F (L) | V2/F | 10.22 | L | 3.21 | 24.62 (10.9% RSE) |
| Food_ka1 | t1/2ka | -2.04 |  | 8 |  |
| WT_Vc/F | V | 0.58 |  | 27.9 |  |
| WT_Vp/F | V/F | 1.15 |  | 22.5 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.783). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T1/2ka , V and V/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — febuxostat: kabs 4.02 h−1, Fab 0.51, tlag 0.22 h, CL/F 6.14 L∙h−1, V1/F 10.4 L, Q/F 1.93 L∙h−1, V2/F 10.2 L, t1/2ka -2.04, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has febuxostat, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka1 (h−1) | `Q49` · kabs | 4.02 | h−1 | 0.001117 | 1/s | 1/h | 11.4 | llm (0.6) | Tab3:row1:col1 |  |
| F1 | `Q40` · Fab | 0.51 |  |  |  |  | 3.7 | exact (1) | Tab3:row3:col1 | 32.87 (7.24% RSE) |
| Tlag1 (h) | `Q83` · tlag | 0.22 | h | 792 | s | h | 8.93 | llm (0.6) | Tab3:row4:col1 |  |
| CL/F (L∙h−1) | `Q27` · CL/F | 6.14 | L∙h−1 | 1.706e-06 | m3/s | l/h | 2.26 | exact (1) | Tab3:row6:col1 | 25.71 (6.44% RSE) |
| Vc/F (L) | `Q290` · V1/F | 10.38 | L | 0.01038 | m3 | l | 2.07 | exact (1) | Tab3:row7:col1 | 17.84 (10.6% RSE) |
| Q/F (L∙h−1) | `Q69` · Q/F | 1.93 | L∙h−1 | 5.361e-07 | m3/s | l/h | 4.25 | exact (1) | Tab3:row8:col1 | 37.81 (11.1% RSE) |
| Vp/F (L) | `Q82` · V2/F | 10.22 | L | 0.01022 | m3 | l | 3.21 | exact (1) | Tab3:row9:col1 | 24.62 (10.9% RSE) |
| Food_ka1 | `Q95` · t1/2ka | -2.04 |  |  |  |  | 8 | llm (0.6) | Tab3:row10:col1 |  |
| WT_Vc/F | `Q61` · V | 0.58 |  |  |  |  | 27.9 | llm (0.6) | Tab3:row13:col1 |  |
| WT_Vp/F | `Q76` · V/F | 1.15 |  |  |  |  | 22.5 | llm (0.6) | Tab3:row14:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ka1 (h−1)' routed out of structural estimates ('IIV (CV%) (RSE%)')
- table section iiv: 'ka2 (h−1)' routed out of structural estimates ('IIV (CV%) (RSE%)')
- table section iiv: 'F1' routed out of structural estimates ('IIV (CV%) (RSE%)')
- table section iiv: 'Tlag1 (h)' routed out of structural estimates ('IIV (CV%) (RSE%)')
- table section iiv: 'Tlag2 (h)' routed out of structural estimates ('IIV (CV%) (RSE%)')
- table section iiv: 'CL/F (L∙h−1)' routed out of structural estimates ('IIV (CV%) (RSE%)')
- table section iiv: 'Vc/F (L)' routed out of structural estimates ('IIV (CV%) (RSE%)')
- table section iiv: 'Q/F (L∙h−1)' routed out of structural estimates ('IIV (CV%) (RSE%)')
- table section iiv: 'Vp/F (L)' routed out of structural estimates ('IIV (CV%) (RSE%)')
- dropped duplicate Q49 ('ka2 (h−1)', value '4.34') — already have one for this compound
- dropped duplicate Q83 ('Tlag2 (h)', value '0.92') — already have one for this compound
- dropped duplicate Q49 ('Food_ka2', value '-1.08') — already have one for this compound
- dropped duplicate Q83 ('Food_Tlag1', value '0.73') — already have one for this compound
- dropped unlinked row (NIL): 'Add. (ng/mL)' — extend the ontology if this is a real PK parameter (source ['Tab3:row16:col1'])
- routed 'Prop.' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=febuxostat
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.783 (18/23 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[food_ka1]` | -2.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[wt_vc/f].parameter_id` | Q61 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[wt_vp/f]` | 1.15 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | febuxostat | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | febuxostat | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q27 | pass | 6.14 | 6.14 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row6:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['Tab3:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Tab3:row1:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row8:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  |  |  | ['Tab3:row9:col1'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Tab3:row4:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  |  |  | ['Tab3:row13:col1'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 |  |  |  | ['Tab3:row14:col1'] |
| C5_unit_missing_Q95 | fail | [time] |  |  |  | ['Tab3:row10:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.14 L/h |  |  | ['Tab3:row6:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 10.4 L |  |  | ['Tab3:row7:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 10.2 L |  |  | ['Tab3:row9:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfebuxostat%5D%20Febuxostat_Chen2024_reference&body=Drug%3A%20febuxostat%0ARecord%3A%20Febuxostat_Chen2024_reference%0APaper%3A%20Chen_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_febuxostat/Febuxostat_Chen2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:23 UTC</sub>
