<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;aripiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/&quot;},{&quot;label&quot;:&quot;Wang_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aripiprazole — `Aripiprazole_Wang2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:23 UTC (Needs review), but the paper was screened again on 2026-10-06 15:02 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Only clearance was extracted — no volume; cL/F and CL have no unit.

<div class="pk-model-meta" hidden drug="aripiprazole" model-id="Aripiprazole_Wang2022_reference" status="needs_review" stale="true" population="subjects with schizophrenia (oral and AOM dosing)" measured-compound="aripiprazole" parameterization="apparent" topology="2C"></div>

## Citation
Wang X, Raoufinia A, Bihorel S, Passarell J, Mallikaarjun S, Phillips L. Population Pharmacokinetic Modeling and Exposure-Response Analysis for Aripiprazole Once Monthly in Subjects With Schizophrenia. Clinical pharmacology in drug development 11(2):150–164 (2022).
  ·  DOI: [10.1002/cpdd.1022](https://doi.org/10.1002/cpdd.1022)

## Population and dosing

**Population:** subjects with schizophrenia (oral and AOM dosing) · condition schizophrenia · age group adult.

**Dosing:** 300, 400 mg, im, multiple, every 672 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** Q2/F, Q3/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Ka: oral first‐order absorption rate (1/h) | kabs | 0.540 | 1/h | 65.88 (None% RSE) |
| Vc/F: central volume (L) | V1/F | 8.8 | L |  |
| Q1/F: intercompartmental CL/F (L/h) | Q3/F | 0.591 | L/h |  |
| Vp1/F: peripheral volume (L) | V2/F | 118 | L |  |
| Q2/F: second intercompartmental CL/F (L/h) | Q2/F | 28.8 | L/h |  |
| Vp2/F: second peripheral volume (L) | V3/F | 134 | L |  |
| R1: infusion rate of oral dose into depot compartment (mg/h) | R1 | 9.33 | mg/h |  |
| F2: relative bioavailability for AOM | Frel | 4.9 |  |  |
| theta_q27_em | theta_q27_em | 4.0 |  |  |
| theta_q27_pm | theta_q27_pm | 6.9 |  |  |
| theta_q27_cyp2d6 | theta_q27_cyp2d6 | -0.511 |  |  |
| theta_q27_cyp3a4 | theta_q27_cyp3a4 | -0.237 |  |  |
| theta_kabs_im | theta_kabs_im | 5.3 |  |  |
| theta_kabs_bmi_power | theta_kabs_bmi_power | 11.5 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.909). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; cL/F and CL have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL/F and CL), so that value has no SI equivalent. Extracted — aripiprazole: CL/F 24 % lower, CL 42 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of minimum value of the objective function = 48892.907: this record has none, the second reading none; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Ka: oral first‐order absorption rate (1/h) | `Q49` · kabs | 0.540 | 1/h | 0.00015 | 1/s | 1/h | llm_confirmed (0.6) | cpdd1022-tbl-0001:row2:col1 | 65.88 (None% RSE) |
| Vc/F: central volume (L) | `Q290` · V1/F | 8.8 | L | 0.0088 | m3 | l | llm_corrected (0.6) | cpdd1022-tbl-0001:row7:col1, cpdd1022-tbl-0001:row7:col2 |  |
| Q1/F: intercompartmental CL/F (L/h) | `Q309` · Q3/F | 0.591 | L/h | 1.642e-07 | m3/s | l/h | llm_corrected (0.6) | cpdd1022-tbl-0001:row8:col1 |  |
| Vp1/F: peripheral volume (L) | `Q82` · V2/F | 118 | L | 0.118 | m3 | l | llm_corrected (0.6) | cpdd1022-tbl-0001:row9:col1 |  |
| Q2/F: second intercompartmental CL/F (L/h) | `Q80` · Q2/F | 28.8 | L/h | 8e-06 | m3/s | l/h | llm_corrected (0.6) | cpdd1022-tbl-0001:row10:col1 |  |
| Vp2/F: second peripheral volume (L) | `Q78` · V3/F | 134 | L | 0.134 | m3 | l | llm_corrected (0.6) | cpdd1022-tbl-0001:row11:col1 |  |
| R1: infusion rate of oral dose into depot compartment (mg/h) | `Q307` · R1 | 9.33 | mg/h |  |  | mg/h | llm_confirmed (0.6) | cpdd1022-tbl-0001:row12:col1 |  |
| F2: relative bioavailability for AOM | `Q87` · Frel | 4.9 |  |  |  |  | llm_confirmed (0.6) | cpdd1022-tbl-0001:row14:col1, cpdd1022-tbl-0001:row14:col2 |  |
| theta_q27_em | `Q900` · theta_q27_em | 4.0 |  |  |  |  |  | cpdd1022-tbl-0001:row3:col1, cpdd1022-tbl-0001:row3:col2 |  |
| theta_q27_pm | `Q900` · theta_q27_pm | 6.9 |  |  |  |  |  | cpdd1022-tbl-0001:row4:col1, cpdd1022-tbl-0001:row4:col2 |  |
| theta_q27_cyp2d6 | `Q900` · theta_q27_cyp2d6 | -0.511 |  |  |  |  |  | cpdd1022-tbl-0001:row5:col1 |  |
| theta_q27_cyp3a4 | `Q900` · theta_q27_cyp3a4 | -0.237 |  |  |  |  |  | cpdd1022-tbl-0001:row6:col1 |  |
| theta_kabs_im | `Q900` · theta_kabs_im | 5.3 |  |  |  |  |  | cpdd1022-tbl-0001:row13:col1, cpdd1022-tbl-0001:row13:col2 |  |
| theta_kabs_bmi_power | `Q900` · theta_kabs_bmi_power | 11.5 |  |  |  |  |  | cpdd1022-tbl-0001:row15:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Minimum value of the objective function = 48892.907 | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Ka: oral first‐order absorption rate (1/h)' routed out of structural estimates ('Magnitude of Interindividual Variability (%CV)')
- table section iiv: 'CL/F: clearance for EM (L/h)' routed out of structural estimates ('Magnitude of Interindividual Variability (%CV)')
- table section iiv: 'Vc/F: central volume (L)' routed out of structural estimates ('Magnitude of Interindividual Variability (%CV)')
- table section iiv: 'IM Ka: AOM first‐order absorption rate (1/h)' routed out of structural estimates ('Magnitude of Interindividual Variability (%CV)')
- table section iiv: 'Minimum value of the objective function = 48892.907' routed out of structural estimates ('Magnitude of Interindividual Variability (%CV)')
- dropped unlinked row (NIL): 'Phase 1 RV (%CV)' — extend the ontology if this is a real PK parameter (source ['cpdd1022-tbl-0001:row17:col1', 'cpdd1022-tbl-0001:row17:col2'])
- dropped unlinked row (NIL): 'Phase 3 RV (%CV)' — extend the ontology if this is a real PK parameter (source ['cpdd1022-tbl-0001:row18:col1', 'cpdd1022-tbl-0001:row18:col2'])
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['cpdd1022-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['cpdd1022-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'shrinkage' from footnote/prose loose number 7.3 (source ['cpdd1022-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'shrinkage' from footnote/prose loose number 52.2 (source ['cpdd1022-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'shrinkage' from footnote/prose loose number 8.2 (source ['cpdd1022-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate im for shrinkage from footnote/prose kept as documentation only (['cpdd1022-tbl-0001:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.901 (source ['cpdd1022-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'im'/'' on Q49 — ambiguous identity (two shifts cannot share one category)
- implicit units: 'Ka: oral first‐order absorption rate (1/h)' → 1/h (from the paper text: "Table 1 lists 'Ka: oral first‐order absorption rate (1/h) = 0.540', explicitly stating the unit 1/h.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=aripiprazole
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpdd1022-tbl-0001:row15:col1 = '‐0.975'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.909 (20/22 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[minimum value of the objective function = 48892.907]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1/f: intercompartmental cl/f].parameter_id` | Q309 | Q69 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cpdd1022-tbl-0001:row7:col1', 'cpdd1022-tbl-0001:row7:col2'] |
| C5_dimension_Q307 | pass | [mass] / [time] |  | ['cpdd1022-tbl-0001:row12:col1'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] |  | ['cpdd1022-tbl-0001:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpdd1022-tbl-0001:row2:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['cpdd1022-tbl-0001:row11:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['cpdd1022-tbl-0001:row10:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cpdd1022-tbl-0001:row9:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.8 L | ['cpdd1022-tbl-0001:row7:col1', 'cpdd1022-tbl-0001:row7:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 118 L | ['cpdd1022-tbl-0001:row9:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baripiprazole%5D%20Aripiprazole_Wang2022_reference&body=Drug%3A%20aripiprazole%0ARecord%3A%20Aripiprazole_Wang2022_reference%0APaper%3A%20Wang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aripiprazole/Aripiprazole_Wang2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 15:02 UTC</sub>
