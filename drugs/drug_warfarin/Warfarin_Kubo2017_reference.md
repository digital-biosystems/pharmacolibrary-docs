<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Kubo_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Sridharan2021_reference&quot;,&quot;label&quot;:&quot;Sridharan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Sridharan2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Aoyama_2022_INR&quot;,&quot;label&quot;:&quot;Aoyama_2022 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Aoyama_2022_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hirai_2024_PT_INR&quot;,&quot;label&quot;:&quot;Hirai_2024 \u00b7 PT-INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Hirai_2024_PT_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_Kubo2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_Kubo2017_reference" status="needs_review" stale="false" population="African American, Asian and white patients" measured-compound="S-warfarin" parameterization="mechanistic" topology="1C"></div>

## Citation
Kubo K, Ohara M, Tachikawa M, Cavallari LH, Lee MTM, Wen MS et al. Population differences in S-warfarin pharmacokinetics among African Americans, Asians and whites: their influence on pharmacogenetic dosing algorithms. The pharmacogenomics journal 17(6):494–500 (2017).
  ·  DOI: [10.1038/tpj.2016.57](https://doi.org/10.1038/tpj.2016.57)

## Population and dosing

**Population:** African American, Asian and white patients · age group adult · n = &gt;=378.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 7 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| PK estimates: Cp(S) CL(S) (ml h -1 ) c | CL | 285 | mL/h | 39.9 (None% RSE) |
| Vd (l) | V | 17.9 | l | 53.2 (None% RSE) |
| theta_cl_age | theta_cl_age | -0.00484 |  |  |
| theta_cl_weight | theta_cl_weight | 0.561 |  |  |
| theta_cl_sex | theta_cl_sex | 0.896 |  |  |
| theta_cl_cyp2c9 | theta_cl_cyp2c9 | 0.707 |  |  |
| theta_cl_cyp2c9 | theta_cl_cyp2c9 | 0.516 |  |  |
| theta_cl_cyp2c9 | theta_cl_cyp2c9 | 0.661 |  |  |
| theta_cl_race | theta_cl_race | 0.615 |  |  |
| ka (1/h) | kabs | 0.214 | 1/h |  |
| Lag (h) | tlag | 1.29 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.786). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. None of the extracted parameters is warfarin's own; they describe S-warfarin. Extracted — S-warfarin: CL 285 mL/h, V 17.9 l, kabs 0.214 1/h, tlag 1.29 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has S-warfarin, the second reading warfarin; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| PK estimates: Cp(S) CL(S) (ml h -1 ) c | `Q22` · CL | 285 | mL/h | 7.917e-08 | m3/s | L/h | llm_confirmed (0.6) | tab_1:row2:col1, tab_1:row2:col3 | 39.9 (None% RSE) |
| Vd (l) | `Q61` · V | 17.9 | l | 0.0179 | m3 | l | exact (1) | tab_1:row3:col1, tab_1:row3:col3 | 53.2 (None% RSE) |
| theta_cl_age | `Q900` · theta_cl_age | -0.00484 |  |  |  |  |  | tab_1:row4:col1, tab_1:row4:col3 |  |
| theta_cl_weight | `Q900` · theta_cl_weight | 0.561 |  |  |  |  |  | tab_1:row5:col1, tab_1:row5:col3 |  |
| theta_cl_sex | `Q900` · theta_cl_sex | 0.896 |  |  |  |  |  | tab_1:row6:col1, tab_1:row6:col3 |  |
| theta_cl_cyp2c9 | `Q900` · theta_cl_cyp2c9 | 0.707 |  |  |  |  |  | tab_1:row7:col1, tab_1:row7:col3 |  |
| theta_cl_cyp2c9 | `Q900` · theta_cl_cyp2c9 | 0.516 |  |  |  |  |  | tab_1:row8:col1, tab_1:row8:col3 |  |
| theta_cl_cyp2c9 | `Q900` · theta_cl_cyp2c9 | 0.661 |  |  |  |  |  | tab_1:row9:col1, tab_1:row9:col3 |  |
| theta_cl_race | `Q900` · theta_cl_race | 0.615 |  |  |  |  |  | tab_1:row10:col1, tab_1:row10:col3 |  |
| ka (1/h) | `Q49` · kabs | 0.214 | 1/h | 5.944e-05 | 1/s | 1/h | review_gapfill (0.7) | Gomeni_2026:review |  |
| Lag (h) | `Q83` · tlag | 1.29 | h | 4644 | s | h | review_gapfill (0.7) | Gomeni_2026:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- implicit units: 'PK estimates: Cp(S) CL(S) (ml h -1 ) c' → mL/h (from the paper text: "The footnote 'c' in Table 2 explicitly defines the equation for CL(S) with the unit: 'CL(S) (ml h -1 ) = 285 × exp{...}'")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-warfarin
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Gomeni_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Gomeni_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row2:col2 = '267, 303'
- unparsed cell tab_1:row2:col4 = '268, 303'
- unparsed cell tab_1:row3:col2 = '16.2, 19.6'
- unparsed cell tab_1:row3:col4 = '16.3, 19.9'
- unparsed cell tab_1:row4:col2 = '-0.00644, -0.00324'
- unparsed cell tab_1:row4:col4 = '-0.00809, -0.00164'
- unparsed cell tab_1:row5:col2 = '0.440, 0.682'
- unparsed cell tab_1:row5:col4 = '0.339, 0.807'
- unparsed cell tab_1:row6:col2 = '0.809, 0.983'
- unparsed cell tab_1:row6:col4 = '0.809, 0.981'
- unparsed cell tab_1:row7:col2 = '0.612, 0.802'
- unparsed cell tab_1:row7:col4 = '0.613, 0.806'
- unparsed cell tab_1:row8:col2 = '0.439, 0.593'
- unparsed cell tab_1:row8:col4 = '0.441, 0.589'
- unparsed cell tab_1:row9:col2 = '0.535, 0.787'
- unparsed cell tab_1:row9:col4 = '0.543, 0.806'
- unparsed cell tab_1:row10:col2 = '0.520, 0.710'
- unparsed cell tab_1:row10:col4 = '0.523, 0.714'
- unparsed cell tab_1:row12:col2 = '36.5, 43.3'
- unparsed cell tab_1:row12:col4 = '35.5, 43.7'
- unparsed cell tab_1:row13:col2 = '41.7, 64.7'
- unparsed cell tab_1:row13:col4 = '37.7, 63.2'
- unparsed cell tab_1:row14:col2 = '0.0518, 0.0534'
- unparsed cell tab_1:row14:col4 = '0.0460, 0.0600'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.214 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag]` | 1.29 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | S-warfarin | warfarin | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row2:col1', 'tab_1:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gomeni_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_1:row3:col1', 'tab_1:row3:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Gomeni_2026:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 285 | ['tab_1:row2:col1', 'tab_1:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.285 L/h | ['tab_1:row2:col1', 'tab_1:row2:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 17.9 L | ['tab_1:row3:col1', 'tab_1:row3:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_Kubo2017_reference&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_Kubo2017_reference%0APaper%3A%20Kubo_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_Kubo2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-27 11:40 UTC</sub>
