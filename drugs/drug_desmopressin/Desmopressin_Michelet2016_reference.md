<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01B&quot;,&quot;href&quot;:&quot;atc/H01B.md&quot;},{&quot;label&quot;:&quot;desmopressin&quot;,&quot;href&quot;:&quot;drugs/drug_desmopressin/&quot;},{&quot;label&quot;:&quot;Michelet_2016 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# desmopressin — `Desmopressin_Michelet2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="desmopressin" model-id="Desmopressin_Michelet2016_reference" status="needs_review" stale="false" population="children with nocturnal enuresis" measured-compound="desmopressin" parameterization="apparent" topology="1C"></div>

## Citation
Michelet R, Dossche L, De Bruyne P, Colin P, Boussery K, Vande Walle J et al. Effects of Food and Pharmaceutical Formulation on Desmopressin Pharmacokinetics in Children. Clinical pharmacokinetics 55(9):1159–1170 (2016).
  ·  DOI: [10.1007/s40262-016-0393-4](https://doi.org/10.1007/s40262-016-0393-4)

## Population and dosing

**Population:** children with nocturnal enuresis · condition nocturnal enuresis · age group child · n = &gt;$0.

**Dosing:** 0.12, 0.2 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 1 | equation variable | -4.482 |  |
| population apparent clearance (CL/F) | CL/F | 4892 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — desmopressin: CL/F 4.89e+03 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 1: this record has -4.482, the second reading none; it also differs on 6 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | -4.482 |  |  |  |  | llm (0.6) | tab_1:row2:col2, tab_1:row2:col4 |
| population apparent clearance (CL/F) | `Q27` · CL/F | 4892 | L/h | 0.001359 | m3/s | L/h | boundary (0.8) | Michelet_2016:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'δofv aic' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col1'])
- dropped unlinked row (NIL): '11' — extend the ontology if this is a real PK parameter (source ['tab_1:row5:col1', 'tab_1:row5:col3'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['tab_1:row6:col1'])
- dropped unlinked row (NIL): '17' — extend the ontology if this is a real PK parameter (source ['tab_1:row7:col1'])
- dropped unlinked row (NIL): '21' — extend the ontology if this is a real PK parameter (source ['tab_1:row9:col1'])
- dropped unlinked row (NIL): '23' — extend the ontology if this is a real PK parameter (source ['tab_1:row11:col1'])
- dropped unlinked row (NIL): '27' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col1'])
- dropped unlinked row (NIL): '28' — extend the ontology if this is a real PK parameter (source ['tab_1:row15:col1'])
- dropped unlinked row (NIL): '*e η' — extend the ontology if this is a real PK parameter (source ['Michelet_2016_table_3:row1:col1', 'Michelet_2016_table_3:row1:col2', 'Michelet_2016_table_3:row1:col3'])
- table mostly unlinked (9/10 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q27 ('population apparent clearance (CL/F)'=4892) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=desmopressin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_1:row4:col2 = '-32.237 -27.755 -20.237 34'
- unparsed cell tab_1:row4:col3 = '35%'
- unparsed cell tab_1:row4:col4 = 'Estimation of IIV on F 1 + fixed effects.'
- unparsed cell tab_1:row5:col2 = '-4.482 0'
- unparsed cell tab_1:row5:col5 = 'Fix F 1 (no IV data) to 1.'
- unparsed cell tab_1:row6:col2 = '-32.237 -27.755 -22.237 17'
- unparsed cell tab_1:row6:col3 = '35%'
- unparsed cell tab_1:row6:col4 = 'Estimation of IIV on F 1 + fixed effects.'
- unparsed cell tab_1:row7:col2 = '-35.976 -3.739 -23.976 34'
- unparsed cell tab_1:row7:col3 = '77%'
- unparsed cell tab_1:row7:col4 = 'Estimation of IIV on F 1 and V d + fixed effects.'
- unparsed cell tab_1:row9:col2 = '-49.413 -44.931 -37.413'
- unparsed cell tab_1:row11:col2 = '-70.275 -20.862 -56.275 32'
- unparsed cell tab_1:row11:col3 = '36%'
- unparsed cell tab_1:row13:col2 = '-85.594 -15.319 -69.594 84'
- unparsed cell tab_1:row13:col3 = '56%'
- unparsed cell tab_1:row15:col2 = '-83.954 1.64'
- unparsed cell tab_1:row15:col3 = '-67.954 84'
- unparsed cell tab_1:row15:col4 = '47%'
- unparsed cell tab_1:row15:col5 = 'Put IIV on F1 (lumped) instead of on formulation effect.'
- unparsed cell Michelet_2016_table_3:row1:col4 = '23346 L [13%]'
- unparsed cell Michelet_2016_table_3:row1:col5 = '23345 [17817 -28366]'
- companion parameter table 3 transcribed (3 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[11]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[17]` |  | 15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1]` | -4.482 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[21]` |  | 11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[23]` |  | 21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[27]` |  | 23 | only_one_extracted |
| `gpt-oss-120b` | `parameters[population apparent clearance]` | 4892 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.89e+03 L/h | ['Michelet_2016:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdesmopressin%5D%20Desmopressin_Michelet2016_reference&body=Drug%3A%20desmopressin%0ARecord%3A%20Desmopressin_Michelet2016_reference%0APaper%3A%20Michelet_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_desmopressin/Desmopressin_Michelet2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 09:09 UTC</sub>
