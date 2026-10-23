<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;quetiapine&quot;,&quot;href&quot;:&quot;drugs/drug_quetiapine/&quot;},{&quot;label&quot;:&quot;Li_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quetiapine_Chen2025_reference&quot;,&quot;label&quot;:&quot;Chen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quetiapine/Quetiapine_Chen2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Fukushi2020_reference&quot;,&quot;label&quot;:&quot;Fukushi_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quetiapine/Quetiapine_Fukushi2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Zhou2015_reference&quot;,&quot;label&quot;:&quot;Zhou_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quetiapine/Quetiapine_Zhou2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Quetiapine_Li2026_reference&quot;,&quot;label&quot;:&quot;Li_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quetiapine/Quetiapine_Li2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quetiapine — `Quetiapine_Li2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="quetiapine" model-id="Quetiapine_Li2024_reference" status="needs_review" stale="false" population="unknown" measured-compound="quetiapine" parameterization="mechanistic" topology="1C"></div>

## Citation
Li X, Sale M, Nieforth K, Bigos KL, Craig J, Wang F et al. pyDarwin: A Machine Learning Enhanced Automated Nonlinear Mixed-Effect Model Selection Toolbox. Clinical pharmacology and therapeutics 115(4):758–773 (2024).
  ·  DOI: [10.1002/cpt.3114](https://doi.org/10.1002/cpt.3114)

## Population and dosing

**Population:** unknown · age group adult.

**Dosing:** 25, 200, 800 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| THETA(1) V2 UNITS = L | V2 | 386 | L | 2.08 (0.16% RSE) |
| THETA(2) CL UNITS = 1/HR | CL | 113 | L/h | 0.57 (1.01% RSE) |
| THETA(3) KA UNITS = L/HR | kabs | 0.915 | 1/h | 1.08 (0.19% RSE) |
| THETA(4) Q UNITS = L/HR | Q | 85.6 | L/h |  |
| THETA(5) V3 UNITS = L | V3 | 1400 | L |  |
| THETA(7) LINEAR | equation variable | 0.0561 |  |  |
| theta_q319_wt_power | theta_q319_wt_power | 2.4 |  |  |
| theta_cl_sex_power | theta_cl_sex_power | -0.0803 |  |  |
| theta_kabs_sex_power | theta_kabs_sex_power | 0.0686 |  |  |
| theta_q319_weight_power | theta_q319_weight_power | 1.53 |  |  |
| volume of distribution (fixed, clozapine published model) | V | 950.0 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — quetiapine: V2 386 L, CL 113 L/h, kabs 0.915 1/h, Q 85.6 L/h, V3 1.4e+03 L, V 950 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[theta(1) v2 units = l].value`: this record has 386, the second reading 633; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| THETA(1) V2 UNITS = L | `Q64` · V2 | 386 | L | 0.386 | m3 | L | llm_confirmed (0.6) | tab_1:row2:col1, Li_2024_table_1:row1:col1 | 2.08 (0.16% RSE) |
| THETA(2) CL UNITS = 1/HR | `Q22` · CL | 113 | L/h | 3.139e-05 | m3/s | L/h | llm_confirmed (0.6) | tab_1:row3:col1, Li_2024_table_1:row2:col1 | 0.57 (1.01% RSE) |
| THETA(3) KA UNITS = L/HR | `Q49` · kabs | 0.915 | 1/h | 0.0002542 | 1/s | 1/h | llm_confirmed (0.6) | tab_1:row4:col1, Li_2024_table_1:row3:col1 | 1.08 (0.19% RSE) |
| THETA(4) Q UNITS = L/HR | `Q30` · Q | 85.6 | L/h | 2.378e-05 | m3/s | L/h | llm (0.6) | tab_1:row5:col1, Li_2024_table_1:row4:col1 |  |
| THETA(5) V3 UNITS = L | `Q77` · V3 | 1400 | L | 1.4 | m3 | L | llm_confirmed (0.6) | tab_1:row6:col1, Li_2024_table_1:row5:col1 |  |
| THETA(7) LINEAR | `Q900` · equation variable | 0.0561 |  |  |  |  | llm (0.6) | tab_1:row8:col1 |  |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 2.4 |  |  |  |  |  | tab_1:row7:col1, Li_2024_table_1:row6:col1 |  |
| theta_cl_sex_power | `Q900` · theta_cl_sex_power | -0.0803 |  |  |  |  |  | tab_1:row10:col1 |  |
| theta_kabs_sex_power | `Q900` · theta_kabs_sex_power | 0.0686 |  |  |  |  |  | tab_1:row11:col1 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 1.53 |  |  |  |  |  | Li_2024_table_1:row7:col1 |  |
| volume of distribution (fixed, clozapine published model) | `Q61` · V | 950.0 | L | 0.95 | m3 | L | review_gapfill (0.7) | Li_2026:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'THETA(1) V2 UNITS = L' routed out of structural estimates ('BSV')
- table section iiv: 'THETA(2) CL UNITS = 1/HR' routed out of structural estimates ('BSV')
- table section iiv: 'THETA(3) KA UNITS = L/HR' routed out of structural estimates ('BSV')
- table section iiv: 'THETA(4) Q UNITS = L/HR' routed out of structural estimates ('BSV')
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'THETA(1) V2 UNITS = L' → L (from the popPK convention: 'No unit stated in text or footnotes; V2 is a volume of distribution, conventionally in L, consistent with value 386.')
- implicit units: 'THETA(2) CL UNITS = 1/HR' → L/h (from the popPK convention: 'No unit stated; CL is clearance, conventionally L/h, consistent with value 113.')
- implicit units: 'THETA(3) KA UNITS = L/HR' → 1/h (from the popPK convention: 'No unit stated; KA is a first-order absorption rate constant, conventionally 1/h, consistent with value 0.915 (the liste')
- implicit units: 'THETA(4) Q UNITS = L/HR' → L/h (from the popPK convention: 'No unit stated; Q is intercompartmental clearance, conventionally L/h, consistent with value 85.6.')
- implicit units: 'THETA(5) V3 UNITS = L' → L (from the popPK convention: 'No unit stated; V3 is a volume of distribution, conventionally in L, consistent with value 1400.')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q64 (THETA(1) V2 UNITS = L); Q22 (THETA(2) CL UNITS = 1/HR); Q30 (THETA(4) Q UNITS = L/HR)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quetiapine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q61 (V) from Li_2026's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 1 transcribed (10 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.556 (10/18 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta(1) v2 units = l].value` | 386 | 633 | mismatch |
| `gpt-oss-120b` | `parameters[theta(2) cl units = 1/hr].value` | 113 | 116 | mismatch |
| `gpt-oss-120b` | `parameters[theta(3) ka units = l/hr].value` | 0.915 | 0.989 | mismatch |
| `gpt-oss-120b` | `parameters[theta(4) q units = l/hr].value` | 85.6 | 90.7 | mismatch |
| `gpt-oss-120b` | `parameters[theta(7) linear]` | 0.0561 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_wt_power]` | 2.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_wt_power]` |  | 1.92 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | 950.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col1', 'Li_2024_table_1:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_1:row5:col1', 'Li_2024_table_1:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row4:col1', 'Li_2024_table_1:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Li_2026:review'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_1:row2:col1', 'Li_2024_table_1:row1:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['tab_1:row6:col1', 'Li_2024_table_1:row5:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 113 | ['tab_1:row3:col1', 'Li_2024_table_1:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 113 L/h | ['tab_1:row3:col1', 'Li_2024_table_1:row2:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 950 L | ['Li_2026:review'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 386 L | ['tab_1:row2:col1', 'Li_2024_table_1:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquetiapine%5D%20Quetiapine_Li2024_reference&body=Drug%3A%20quetiapine%0ARecord%3A%20Quetiapine_Li2024_reference%0APaper%3A%20Li_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quetiapine/Quetiapine_Li2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 17:03 UTC</sub>
