<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;talazoparib&quot;,&quot;href&quot;:&quot;drugs/drug_talazoparib/&quot;},{&quot;label&quot;:&quot;Guo_2022 \u00b7 moderate_hepatic&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# talazoparib — `Talazoparib_Guo2022_moderate_hepatic`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Qb and CL/F have no unit.

<div class="pk-model-meta" hidden drug="talazoparib" model-id="Talazoparib_Guo2022_moderate_hepatic" status="needs_review" stale="false" population="patients with advanced solid tumours and varying degrees of hepatic impairment" measured-compound="talazoparib" parameterization="apparent" topology="1C"></div>

## Citation
Guo C, Yu Y, Chakrabarti J, Piha-Paul SA, Moroose R, Plotka A et al. Evaluation of pharmacokinetics and safety of talazoparib in patients with advanced cancer and varying degrees of hepatic impairment. British journal of clinical pharmacology 88(7):3392–3403 (2022).
  ·  DOI: [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294)

## Population and dosing

**Population:** patients with advanced solid tumours and varying degrees of hepatic impairment · condition advanced solid tumours and hepatic impairment · age group adult · n = /&gt;. 37.

**Dosing:** 0.5 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Other | equation variable | 0 |  |
| Bile duct | Qb | 0 |  |
| Interindividual variance of CL/F in model #3 | CL/F | 44.7 | % |
| CL u /F (L/h) | CL | 16.57 | L/h |
| -θV2/F (L) | V2/F | 188.816 | L |
| θ ka (h À1 ) | kabs | 5.351 | h À1 |
| -θQ/F (L/h) | Q/F | 52.897 | L/h |
| -θTLAG (h) | tlag | 0.422 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.267). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Qb and CL/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL/F), so that value has no SI equivalent. Extracted — talazoparib: Qb 0, CL/F 44.7 %, CL 16.6 L/h, V2/F 189 L, kabs 5.35 h À1, Q/F 52.9 L/h, tlag 0.422 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of -θq/f: this record has 52.897, the second reading none; it also differs on 10 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Other | `Q900` · equation variable | 0 |  |  |  |  | llm (0.6) | tab_0:row11:col3 |
| Bile duct | `Q54` · Qb | 0 |  |  |  |  | llm (0.6) | tab_0:row19:col3 |
| Interindividual variance of CL/F in model #3 | `Q27` · CL/F | 44.7 | % |  |  | % | boundary (0.8) | Guo_2022:results_prose |
| CL u /F (L/h) | `Q22` · CL | 16.57 | L/h | 4.603e-06 | m3/s | L/h | boundary (0.8) | Guo_2022:other_prose |
| -θV2/F (L) | `Q82` · V2/F | 188.816 | L | 0.1888 | m3 | L | boundary (0.8) | Guo_2022:other_prose |
| θ ka (h À1 ) | `Q49` · kabs | 5.351 | h À1 | 0.001486 | 1/s | 1/h | boundary (0.8) | Guo_2022:other_prose |
| -θQ/F (L/h) | `Q69` · Q/F | 52.897 | L/h | 1.469e-05 | m3/s | L/h | boundary (0.8) | Guo_2022:other_prose |
| -θTLAG (h) | `Q83` · tlag | 0.422 | h | 1519 | s | h | boundary (0.8) | Guo_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Mean (SD)' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col3'])
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col3'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col3'])
- dropped unlinked row (NIL): 'White' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col3'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col3'])
- dropped unlinked row (NIL): 'Breast' — extend the ontology if this is a real PK parameter (source ['tab_0:row15:col3'])
- dropped unlinked row (NIL): 'Colorectal' — extend the ontology if this is a real PK parameter (source ['tab_0:row16:col3'])
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['tab_0:row17:col3'])
- dropped unlinked row (NIL): 'Pancreas' — extend the ontology if this is a real PK parameter (source ['tab_0:row18:col3'])
- dropped unlinked row (NIL): 'Other a' — extend the ontology if this is a real PK parameter (source ['tab_0:row20:col3'])
- dropped duplicate Q900 ('0', value '0') — already have one for this compound
- dropped duplicate Q900 ('1', value '3') — already have one for this compound
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_0:row24:col3'])
- salvaged Q27 ('Interindividual variance of CL/F in model #3'=44.7) from results prose — parameter table was unreadable
- salvaged Q22 ('CL u /F (L/h)'=16.57) from results prose — parameter table was unreadable
- salvaged Q82 ('-θV2/F (L)'=188.816) from results prose — parameter table was unreadable
- salvaged Q49 ('θ ka (h À1 )'=5.351) from results prose — parameter table was unreadable
- salvaged Q69 ('-θQ/F (L/h)'=52.897) from results prose — parameter table was unreadable
- salvaged Q83 ('-θTLAG (h)'=0.422) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=talazoparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'moderate hepatic' subgroup of Guo_2022 (paper reports 6 populations: all patients, estimate, mild hepatic, moderate hepatic, normal hepatic, severe hepatic)

**Extraction notes:**
- companion parameter table S6 transcribed (56 record(s))
- LLM selected parameter table(s) S6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[-θq/f]` | 52.897 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[-θtlag]` | 0.422 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[-θv2/f]` | 188.816 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[0]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bile duct]` | 0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl u /f]` | 16.57 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[interindividual variance of cl/f in model #3]` | 44.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[liver]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[other]` | 0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ ka]` | 5.351 |  | only_one_extracted |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | % | ['Guo_2022:results_prose'] |
| C5_unit_missing_Q54 | fail | [length] ** 3 / [time] |  | ['tab_0:row19:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.6 L/h | ['Guo_2022:other_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 189 L | ['Guo_2022:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btalazoparib%5D%20Talazoparib_Guo2022_moderate_hepatic&body=Drug%3A%20talazoparib%0ARecord%3A%20Talazoparib_Guo2022_moderate_hepatic%0APaper%3A%20Guo_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_talazoparib/Talazoparib_Guo2022_moderate_hepatic%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 21:44 UTC</sub>
