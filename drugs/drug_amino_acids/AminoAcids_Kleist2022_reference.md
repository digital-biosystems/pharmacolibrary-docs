<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05B&quot;,&quot;href&quot;:&quot;atc/B05B.md&quot;},{&quot;label&quot;:&quot;amino acids&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/&quot;},{&quot;label&quot;:&quot;Kleist_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AminoAcids_Krieger2025_reference&quot;,&quot;label&quot;:&quot;Krieger_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Krieger2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Min2025_reference&quot;,&quot;label&quot;:&quot;Min_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Min2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AminoAcids_Thorsted2026_reference&quot;,&quot;label&quot;:&quot;Thorsted_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amino_acids/AminoAcids_Thorsted2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amino acids — `AminoAcids_Kleist2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Needs review), but the paper was screened again on 2026-10-05 22:06 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The homoarginine record was held back because the reference check failed without computing a comparison, and the covariate forms on the clearance and peripheral-volume equations are disputed between readers.

<div class="pk-model-meta" hidden drug="amino acids" model-id="AminoAcids_Kleist2022_reference" status="needs_review" stale="true" population="healthy adults" measured-compound="homoarginine" parameterization="mechanistic" topology="1C"></div>

## Citation
Kleist CJ, Choe CU, Atzler D, Schönhoff M, Böger R, Schwedhelm E et al. Population kinetics of homoarginine and optimized supplementation for cardiovascular risk reduction. Amino acids 54(6):889–896 (2022).
  ·  DOI: [10.1007/s00726-022-03169-x](https://doi.org/10.1007/s00726-022-03169-x)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 20.

**Dosing:** 125 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| θ2 | equation variable | 69.5 |  | 11.1 |
| VD (ml g−1) | V | 0.092 | ml g−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.474). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The homoarginine record was held back because the reference check failed without computing a comparison, and the covariate forms on the clearance and peripheral-volume equations are disputed between readers.**

The reference check returned ratio None, so it is an inconclusive check rather than a demonstrated fault in the model. A second reader disagreed on the covariate forms: this record lists none for the clearance equation CL = θ1 × (IBW/75)^θ7 and lists linear_fractional for the peripheral volume V3 = θ3 × (IBW/75)^θ9, while the second reader lists linear_fractional for clearance and none for V3. Several parameters (θ2 = 69.5, VD = 0.092 ml g−1, and the covariate effects theta_q64_age_power and theta_v3_body_weight) were read by only one reader, with the second reader recording no value. Extracted — homoarginine: V 0.092 ml g−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[clearance, cl = θ1 × (ibw/75)^θ7 [l/h]].covariate_forms`: this record has none, the second reading ['linear_fractional']; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| θ2 | `Q900` · equation variable | 69.5 |  |  |  |  | 11.1 | llm (0.6) | Tab2:row5:col1, Tab2:row5:col3 |
| VD (ml g−1) | `Q61` · V | 0.092 | ml g−1 | 0.00644 | m3 | L |  | review_gapfill (0.7) | Krieger_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Clearance, CL = θ1 × (IBW/75)^θ7 [L/h] | Q22 | llm_confirmed |
| Peripheral volume of distribution, V3 = θ3 × (IBW/75)^θ9 [L] | Q77 | llm_corrected |
| First-order absorption rate constant, ka = θ4 [h−1] | Q49 | llm_confirmed |
| Distribution clearance, Q = θ5 [L/h] | Q30 | llm_confirmed |
| theta_q64_age_power | Q900 |  |
| theta_v3_body_weight | Q900 |  |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'θ1' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col3'])
- dropped value-less row: 'ω12'
- dropped unlinked row (NIL): 'θ3' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1', 'Tab2:row8:col3'])
- dropped duplicate Q900 ('θ4', value '0.924') — already have one for this compound
- dropped duplicate Q900 ('θ5', value '28.2') — already have one for this compound
- dropped PD-category row 'Baseline, BSL = θ6 [µmol/L]' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab2:row13:col1', 'Tab2:row13:col2', 'Tab2:row13:col3'])
- dropped unlinked row (NIL): 'θ6' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1', 'Tab2:row14:col3'])
- dropped value-less row: 'ω32'
- dropped unlinked row (NIL): 'Covariate ideal body weight (IBW) on CL = θ7' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col1', 'Tab2:row16:col2', 'Tab2:row16:col3'])
- dropped unlinked row (NIL): 'θ7' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col1', 'Tab2:row17:col3'])
- dropped unlinked row (NIL): 'Covariate age on V2 = θ8' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col1', 'Tab2:row18:col2', 'Tab2:row18:col3'])
- dropped value-less row: 'θ8'
- dropped unlinked row (NIL): 'θ9' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col1', 'Tab2:row21:col3'])
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Clearance, CL = θ1 × (IBW/75)^θ7 [L/h]); Q30 (Distribution clearance, Q = θ5 [L/h])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=homoarginine
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- Q22 (CL) is equation-defined: value moved to equation-variable 'Clearance, CL = θ1 × (IBW/75)^θ7 [L/h]'; equation kept verbatim
- Q77 (V3) is equation-defined: value moved to equation-variable 'Peripheral volume of distribution, V3 = θ3 × (IBW/75)^θ9 [L]'; equation kept verbatim
- gap-filled Q61 (V) from Krieger_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '3.25, 4.26'
- unparsed cell Tab2:row3:col1 = '0.0225 (ω1: 15.1% CV)'
- unparsed cell Tab2:row3:col2 = '0.00322, 0.0419'
- unparsed cell Tab2:row5:col2 = '54.5, 84.8'
- unparsed cell Tab2:row6:col1 = '0.21 (ω2: 48.3% CV)'
- unparsed cell Tab2:row6:col2 = '0.0342, 0.338'
- unparsed cell Tab2:row8:col2 = '177, 312'
- unparsed cell Tab2:row10:col2 = '0.722, 1.14'
- unparsed cell Tab2:row12:col2 = '24.7, 33.2'
- unparsed cell Tab2:row14:col2 = '2.44, 3.15'
- unparsed cell Tab2:row15:col1 = '0.0799 (ω3: 28.8% CV)'
- unparsed cell Tab2:row15:col2 = '0.0361, 0.123'
- unparsed cell Tab2:row17:col2 = '0.897, 1.99'
- unparsed cell Tab2:row19:col1 = '− 1.86'
- unparsed cell Tab2:row19:col2 = '− 2.54, − 1.20'
- unparsed cell Tab2:row21:col2 = '0.225, 2.43'
- unparsed cell Tab2:row23:col1 = '15.5% CV'
- unparsed cell Tab2:row23:col2 = '0.124, 0.188'
- unparsed cell Tab2:row25:col1 = '25.6% CV'
- unparsed cell Tab2:row25:col2 = '0.237, 0.274'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.474 (9/19 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance, cl = θ1 × (ibw/75)^θ7 [l/h]].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution, v3 = θ3 × (ibw/75)^θ9 [l]].parameter_id` | Q77 | Q64 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_body_weight]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q63_age_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q64_age_power]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q77_body_weight]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_age]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v3_body_weight]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 0.092 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ2]` | 69.5 |  | only_one_extracted |

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
| C2_reference | fail |  |  |  |
| C5_dimension_Q61 | pass | [length] ** 3 / [mass] |  | ['Krieger_2025:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.44 L | ['Krieger_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamino_acids%5D%20AminoAcids_Kleist2022_reference&body=Drug%3A%20amino_acids%0ARecord%3A%20AminoAcids_Kleist2022_reference%0APaper%3A%20Kleist_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amino_acids/AminoAcids_Kleist2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 22:06 UTC</sub>
