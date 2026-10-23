<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tapentadol&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/&quot;},{&quot;label&quot;:&quot;Jo\u0144czyk_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tapentadol — `Tapentadol_Joczyk2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:32 UTC (Needs review), but the paper was screened again on 2026-10-07 05:41 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. AUCt and AUCSS have no unit.

<div class="pk-model-meta" hidden drug="tapentadol" model-id="Tapentadol_Joczyk2022_reference" status="needs_review" stale="true" population="children aged 2 to &lt;7 years with acute pain" measured-compound="tapentadol" parameterization="apparent" topology="general_linear"></div>

## Citation
Jończyk R, Beuter C, Bulawa B, Buller S, Eibl C, Elling C et al. Multiple Dose Pharmacokinetics of Tapentadol Oral Solution for the Treatment of Moderate to Severe Acute Pain in Children Aged 2 to &lt;7 Years. Journal of pain research 15:3103–3114 (2022).
  ·  DOI: [10.2147/JPR.S364902](https://doi.org/10.2147/JPR.S364902)

## Population and dosing

**Population:** children aged 2 to &lt;7 years with acute pain · condition acute pain · age group child.

**Dosing:** 87.5 mg, oral, multiple, every 4 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Cmax,sd (ng/mL) | Cmax | 159.3 | ng/mL | 51.6 |
| Cmin,sd (ng/mL) | Cmin | 22.2 | ng/mL | 72.9 |
| AUCτ,sd (h•ng/mL) | AUCt | 230.7 | h•ng/mL | 34.9 |
| Tapentadol mature CL | CL | 93.7 | L/h |  |
| CL/F | CL/F | 272 | L/h |  |
| V/F | V/F | 1203 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.368). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUCt and AUCSS have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax, Cmin, AUCt and AUCSS), so that value has no SI equivalent. Extracted — tapentadol: Cmax 159 ng/mL, Cmin 22.2 ng/mL, AUCt 231 h•ng/mL, AUCSS 292 h•ng/mL, CL 93.7 L/h, CL/F 272 L/h, V/F 1.2e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tapentadol, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Cmax,sd (ng/mL) | `Q32` · Cmax | 159.3 | ng/mL |  |  | ng/ml | 51.6 | llm_confirmed (0.6) | t0003:row0:col3, t0003:row0:col4, t0003:row0:col5, t0003:row0:col6, t0003:row0:col8, t0003:row0:col9, t0003:row0:col10, t0003:row0:col11, t0003:row0:col13, t0003:row0:col14, t0003:row0:col15, t0003:row0:col16 |
| Cmin,sd (ng/mL) | `Q36` · Cmin | 22.2 | ng/mL |  |  | ng/ml | 72.9 | llm_confirmed (0.6) | t0003:row1:col3, t0003:row1:col4, t0003:row1:col5, t0003:row1:col6, t0003:row1:col8, t0003:row1:col9, t0003:row1:col10, t0003:row1:col11, t0003:row1:col13, t0003:row1:col14, t0003:row1:col15, t0003:row1:col16 |
| AUCτ,sd (h•ng/mL) | `Q19` · AUCt | 230.7 | h•ng/mL |  |  | (h·ng)/ml | 34.9 | llm_confirmed (0.6) | t0003:row2:col3, t0003:row2:col4, t0003:row2:col5, t0003:row2:col6, t0003:row2:col8, t0003:row2:col9, t0003:row2:col10, t0003:row2:col11, t0003:row2:col13, t0003:row2:col14, t0003:row2:col15, t0003:row2:col16 |
| Tapentadol mature CL | `Q22` · CL | 93.7 | L/h | 2.603e-05 | m3/s | L/h |  | boundary (0.8) | Jończyk_2022:other_prose |
| CL/F | `Q27` · CL/F | 272 | L/h | 7.556e-05 | m3/s | L/h |  | exact (1) | Jończyk_2022:other_prose |
| V/F | `Q76` · V/F | 1203 | L | 1.203 | m3 | L |  | exact (1) | Jończyk_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h•ng/mL' (AUCt)
- dropped duplicate Q32 ('Cmax,ss (ng/mL)', value '201.2') — already have one for this compound
- dropped duplicate Q36 ('Cmin,ss (ng/mL)', value '29.3') — already have one for this compound
- dropped duplicate Q19 ('AUCτ,ss (h•ng/mL)', value '292.3') — already have one for this compound
- dropped unlinked row (NIL): 'AF' — extend the ontology if this is a real PK parameter (source ['t0003:row6:col3', 't0003:row6:col4', 't0003:row6:col5', 't0003:row6:col6', 't0003:row6:col8', 't0003:row6:col9', 't0003:row6:col10', 't0003:row6:col11', 't0003:row6:col13', 't0003:row6:col14', 't0003:row6:col15', 't0003:row6:col16'])
- salvaged Q22 ('Tapentadol mature CL'=93.7) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F'=272) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F'=1203) from results prose — parameter table was unreadable
- implicit units: 'AUCτ,sd (h•ng/mL)' — the LLM proposed 'h•ng/mL', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tapentadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 0 linked by role
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table t0003: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.368 (7/19 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tapentadol', 'tapentadol-o-glucuronide', 'metabolism'], ['tapentadol', 'tapentadol-o-sulfate', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[af]` |  | 1.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucτ,sd].parameter_id` | Q19 | Q88 | mismatch |
| `gpt-oss-120b` | `parameters[aucτ,ss]` |  | 292.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 272 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 272 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tapentadol mature cl]` | 93.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tapentadol mature cl]` |  | 93.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 1203 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 1203 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tapentadol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tapentadol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['t0003:row0:col3', 't0003:row0:col4', 't0003:row0:col5', 't0003:row0:col6', 't0003:row0:col8', 't0003:row0:col9', 't0003:row0:col10', 't0003:row0:col11', 't0003:row0:col13', 't0003:row0:col14', 't0003:row0:col15', 't0003:row0:col16'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 |  | ['t0003:row1:col3', 't0003:row1:col4', 't0003:row1:col5', 't0003:row1:col6', 't0003:row1:col8', 't0003:row1:col9', 't0003:row1:col10', 't0003:row1:col11', 't0003:row1:col13', 't0003:row1:col14', 't0003:row1:col15', 't0003:row1:col16'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | h•ng/mL | ['t0003:row2:col3', 't0003:row2:col4', 't0003:row2:col5', 't0003:row2:col6', 't0003:row2:col8', 't0003:row2:col9', 't0003:row2:col10', 't0003:row2:col11', 't0003:row2:col13', 't0003:row2:col14', 't0003:row2:col15', 't0003:row2:col16'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 93.7 L/h | ['Jończyk_2022:other_prose'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 272 L/h | ['Jończyk_2022:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.2e+03 L | ['Jończyk_2022:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btapentadol%5D%20Tapentadol_Joczyk2022_reference&body=Drug%3A%20tapentadol%0ARecord%3A%20Tapentadol_Joczyk2022_reference%0APaper%3A%20Jo%C5%84czyk_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:41 UTC</sub>
