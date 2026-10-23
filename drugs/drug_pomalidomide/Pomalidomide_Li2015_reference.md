<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;pomalidomide&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/&quot;},{&quot;label&quot;:&quot;Li_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pomalidomide_Fau2020_reference&quot;,&quot;label&quot;:&quot;Fau_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/Pomalidomide_Fau2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pomalidomide_Ogasawara2021_reference&quot;,&quot;label&quot;:&quot;Ogasawara_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/Pomalidomide_Ogasawara2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pomalidomide_Papathanasiou2025_reference&quot;,&quot;label&quot;:&quot;Papathanasiou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/Pomalidomide_Papathanasiou2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pomalidomide — `Pomalidomide_Li2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance interaction parameter for pomalidomide lacks a unit, preventing its conversion to SI units.

<div class="pk-model-meta" hidden drug="pomalidomide" model-id="Pomalidomide_Li2015_reference" status="needs_review" stale="false" population="healthy participants and patients with multiple myeloma" measured-compound="pomalidomide" parameterization="apparent" topology="1C"></div>

## Citation
Li Y, Xu Y, Liu L, Wang X, Palmisano M, Zhou S. Population pharmacokinetics of pomalidomide. Journal of clinical pharmacology 55(5):563–572 (2015).
  ·  DOI: [10.1002/jcph.455](https://doi.org/10.1002/jcph.455)

## Population and dosing

**Population:** healthy participants and patients with multiple myeloma · condition healthy / multiple myeloma · age group adult · n = 240.

**Dosing:** 0.5, 10 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| ka, h−1 | kabs | 1.25 | h−1 |  |
| V2/F, L | V2/F | 58.3 | L |  |
| V3/F, L | V3/F | 8.45 | L |  |
| Q/F, L/h | Q/F | 1.01 | L/h |  |
| CL/F, L/h | CL/F | 8.52 | L/h | 0.0599 (None% RSE) |
| Alag1, h | tlag | 0.385 | h |  |
| CL/FMM patient/HNP | CL_ratio | 0.913 |  |  |
| theta_v2_f_weight | theta_v2_f_weight | 0.686 |  |  |
| theta_cl_f_sex | theta_cl_f_sex | -0.234 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.867). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance interaction parameter for pomalidomide lacks a unit, preventing its conversion to SI units.**

The parameter CL/FMM patient/HNP has a value of 0.913 but no associated unit. This omission means the value cannot be converted to standard units for the model. Additionally, a structural check failed with a computed ratio of 3.6634, indicating a potential inconsistency in the model definition. Extracted — pomalidomide: kabs 1.25 h−1, V2/F 58.3 L, V3/F 8.45 L, Q/F 1.01 L/h, CL/F 8.52 L/h, tlag 0.385 h, CL_ratio 0.913.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pomalidomide, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| ka, h−1 | `Q49` · kabs | 1.25 | h−1 | 0.0003472 | 1/s | 1/h | exact (1) | tbl2:row1:col1 |  |
| V2/F, L | `Q82` · V2/F | 58.3 | L | 0.0583 | m3 | l | exact (1) | tbl2:row2:col1 |  |
| V3/F, L | `Q78` · V3/F | 8.45 | L | 0.00845 | m3 | l | exact (1) | tbl2:row3:col1 |  |
| Q/F, L/h | `Q69` · Q/F | 1.01 | L/h | 2.806e-07 | m3/s | l/h | exact (1) | tbl2:row4:col1 |  |
| CL/F, L/h | `Q27` · CL/F | 8.52 | L/h | 2.367e-06 | m3/s | l/h | exact (1) | tbl2:row5:col1 | 0.0599 (None% RSE) |
| Alag1, h | `Q83` · tlag | 0.385 | h | 1386 | s | h | llm (0.6) | tbl2:row6:col1 |  |
| CL/FMM patient/HNP | `Q31` · CL_ratio | 0.913 |  |  |  |  | llm (0.6) | tbl2:row7:col1 |  |
| theta_v2_f_weight | `Q900` · theta_v2_f_weight | 0.686 |  |  |  |  |  | tbl2:row13:col1 |  |
| theta_cl_f_sex | `Q900` · theta_cl_f_sex | -0.234 |  |  |  |  |  | tbl2:row14:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2Ka' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2V2/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ωV2/F: ωCL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2CL/F' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ2(HNP)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ2(MM patients)' routed out of structural estimates ('Residual variability')
- dropped duplicate Q83 ('Alag1MM patient, h', value '0.206') — already have one for this compound
- dropped duplicate Q78 ('V3/FMM patient/HNP', value '8.46') — already have one for this compound
- dropped unlinked row (NIL): 'Q/FMM patient/HNP' — extend the ontology if this is a real PK parameter (source ['tbl2:row10:col1'])
- dropped duplicate Q31 ('V2/FMM patient/HNP', value '1.20') — already have one for this compound
- dropped duplicate Q82 ('Effect of TPT on V2F', value '0.00609') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pomalidomide
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell tbl2:row1:col2 = '1.25 (1.07–1.47)'
- unparsed cell tbl2:row2:col2 = '58.25 (55.79–60.88)'
- unparsed cell tbl2:row3:col2 = '8.48 (7.47–9.40)'
- unparsed cell tbl2:row4:col2 = '1.00 (0.75–1.28)'
- unparsed cell tbl2:row5:col2 = '8.51 (8.04–8.99)'
- unparsed cell tbl2:row6:col2 = '0.38 (0.37–0.40)'
- unparsed cell tbl2:row7:col2 = '0.911 (0.798–1.056)'
- unparsed cell tbl2:row8:col2 = '0.207 (0.177–0.231)'
- unparsed cell tbl2:row9:col2 = '8.38 (5.92–11.80)'
- unparsed cell tbl2:row10:col2 = '3.68 (2.50–5.35)'
- unparsed cell tbl2:row11:col2 = '1.19 (1.07–1.37)'
- unparsed cell tbl2:row12:col2 = '0.00602 (0.0024–0.0103)'
- unparsed cell tbl2:row13:col2 = '0.685 (0.497–0.862)'
- unparsed cell tbl2:row14:col2 = '−0.232 (−0.369 to −0.077)'
- unparsed cell tbl2:row16:col2 = '0.961 (0.652–1.388)'
- unparsed cell tbl2:row17:col2 = '0.0349 (0.0240–0.050)'
- unparsed cell tbl2:row18:col2 = '0.0589 (0.0395–0.0841)'
- unparsed cell tbl2:row19:col2 = '0.164 (0.127–0.213)'
- unparsed cell tbl2:row21:col2 = '0.04 (0.033–0.047)'
- unparsed cell tbl2:row22:col2 = '0.235 (0.192–0.295)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | pomalidomide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pomalidomide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C2_base_Q27 | pass | 8.52 | 8.52 | 1 | 0.05 | footnote reference category |
| C2_base_Q69 | fail | 1.01 | 3.7 | 3.663 | 0.05 | footnote reference category |
| C2_base_Q82 | pass | 58.3 | 58.3 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['tbl2:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['tbl2:row1:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['tbl2:row4:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  |  |  | ['tbl2:row3:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  |  |  | ['tbl2:row2:col1'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['tbl2:row6:col1'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] |  |  |  | ['tbl2:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.52 L/h |  |  | ['tbl2:row5:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 58.3 L |  |  | ['tbl2:row2:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpomalidomide%5D%20Pomalidomide_Li2015_reference&body=Drug%3A%20pomalidomide%0ARecord%3A%20Pomalidomide_Li2015_reference%0APaper%3A%20Li_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pomalidomide/Pomalidomide_Li2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:12 UTC</sub>
