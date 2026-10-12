<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;pegaspargase&quot;,&quot;href&quot;:&quot;drugs/drug_pegaspargase/&quot;},{&quot;label&quot;:&quot;Kloos_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pegaspargase_Sassen2017_reference&quot;,&quot;label&quot;:&quot;Sassen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pegaspargase/Pegaspargase_Sassen2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pegaspargase — `Pegaspargase_Kloos2021_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**CL and V have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL and V), so that value has no SI equivalent. Extracted — pegaspargase: CL 0.084 L/day/m², V 0.94 L/m².

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has pegaspargase, the second reading PEGasparaginase; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Kloos RQH et al., Individualized dosing guidelines for PE…, Haematologica (2021)
  ·  DOI: [10.3324/haematol.2019.242289](https://doi.org/10.3324/haematol.2019.242289)

<div class="pk-model-meta" hidden drug="pegaspargase" model-id="Pegaspargase_Kloos2021_reference" status="needs_review" stale="false" population="pediatric acute lymphoblastic leukemia patients" measured-compound="pegaspargase" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/day/m²) | `Q22` · CL | 0.084 | L/day/m² | not captured | [l] / [[d] · [m2]] | not captured | exact (1.0) | Kloos_2021_table_p4_1:row1:col3, Kloos_2021_table_p4_1:row1:col4 | — | 19.5 (None% RSE) |
| Vd (L/m²) | `Q61` · V | 0.94 | L/m² | not captured | [l] / [m2] | not captured | exact (1.0) | Kloos_2021_table_p4_1:row2:col3, Kloos_2021_table_p4_1:row2:col4 | — | not captured |
| 1B | `Q900` · equation variable | 1 | not captured | not captured | not captured | not captured | llm (0.6) | Kloos_2021_table_p4_1:row8:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (%)' routed out of structural estimates ('IIV')
- table section iov: 'CL (%)' routed out of structural estimates ('IOV')
- table section residual_error: 'Additional (IU/L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (%)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Kloos_2021_table_p4_1:row0:col1', 'Kloos_2021_table_p4_1:row0:col2'])
- unit_dimension_unknown: 'L/day/m²' (CL)
- unit_dimension_unknown: 'L/m²' (V)
- unit_dimension_unknown: 'L/day/m²/day' (CL)
- dropped duplicate Q22 ('Slope CLind (L/day/m²/day)', value '0.080') — already have one for this compound
- dropped unlinked row (NIL): 'Split point (days)' — extend the ontology if this is a real PK parameter (source ['Kloos_2021_table_p4_1:row4:col3', 'Kloos_2021_table_p4_1:row4:col4'])
- dropped duplicate Q61 ('Fractional increase IV-Vd', value '1.28') — already have one for this compound
- dropped duplicate Q900 ('M', value '0.87') — already have one for this compound
- dropped unlinked row (NIL): 'MRG intens.' — extend the ontology if this is a real PK parameter (source ['Kloos_2021_table_p4_1:row10:col3', 'Kloos_2021_table_p4_1:row10:col4'])
- dropped unlinked row (NIL): 'MRG maint.' — extend the ontology if this is a real PK parameter (source ['Kloos_2021_table_p4_1:row11:col3', 'Kloos_2021_table_p4_1:row11:col4'])
- dropped unlinked row (NIL): 'SRG protocol IV' — extend the ontology if this is a real PK parameter (source ['Kloos_2021_table_p4_1:row12:col3', 'Kloos_2021_table_p4_1:row12:col4'])
- dropped unlinked row (NIL): 'Infection' — extend the ontology if this is a real PK parameter (source ['Kloos_2021_table_p4_1:row13:col3', 'Kloos_2021_table_p4_1:row13:col4'])
- implicit units: 'CL (L/day/m²)' — the LLM proposed 'L/day/m2', whose dimension does not fit Q22; left unset
- implicit units: 'Vd (L/m²)' — the LLM proposed 'L/m2', whose dimension does not fit Q61; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pegaspargase
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'pegaspargase' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Kloos_2021_table_p4_1:row1:col1 = '0.075 (5.2%)'
- unparsed cell Kloos_2021_table_p4_1:row1:col2 = '0.084 (4.4%)'
- unparsed cell Kloos_2021_table_p4_1:row2:col1 = '0.92 (4.7%)'
- unparsed cell Kloos_2021_table_p4_1:row2:col2 = '0.94 (4.5%)'
- unparsed cell Kloos_2021_table_p4_1:row3:col1 = '0.079 (31.5%)'
- unparsed cell Kloos_2021_table_p4_1:row3:col2 = '0.082 (20.5%)'
- unparsed cell Kloos_2021_table_p4_1:row4:col1 = '12.9 (1.1%)'
- unparsed cell Kloos_2021_table_p4_1:row4:col2 = '12.7 (0.2%)'
- unparsed cell Kloos_2021_table_p4_1:row5:col1 = '1.11 (13.4%)'
- unparsed cell Kloos_2021_table_p4_1:row5:col2 = '1.26 (10.2%)'
- unparsed cell Kloos_2021_table_p4_1:row9:col2 = '0.87 (5.2%)'
- unparsed cell Kloos_2021_table_p4_1:row10:col2 = '0.89 (5.2%)'
- unparsed cell Kloos_2021_table_p4_1:row11:col2 = '0.81 (3.9%)'
- unparsed cell Kloos_2021_table_p4_1:row12:col2 = '0.81 (6.5%)'
- unparsed cell Kloos_2021_table_p4_1:row13:col2 = '1.38 (10.5%)'
- unparsed cell Kloos_2021_table_p4_1:row15:col1 = '24.1 (12.8%)'
- unparsed cell Kloos_2021_table_p4_1:row15:col2 = '19.7 (13.2%)'
- unparsed cell Kloos_2021_table_p4_1:row18:col1 = '25.7 (10.1%)'
- unparsed cell Kloos_2021_table_p4_1:row18:col2 = '23.6 (10.3%)'
- unparsed cell Kloos_2021_table_p4_1:row20:col1 = '19.1 (26.2%)'
- unparsed cell Kloos_2021_table_p4_1:row20:col2 = '20.2 (18.2%)'
- unparsed cell Kloos_2021_table_p4_1:row21:col1 = '17.3 (9.2%)'
- unparsed cell Kloos_2021_table_p4_1:row21:col2 = '17.0 (9.2%)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[1b]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | pegaspargase | PEGasparaginase | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | pegaspargase | PEGasparaginase | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 8.5 | 7.757 | 0.9126 | 0.25 | reported t½β |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | L/day/m² | not captured | not captured | ['Kloos_2021_table_p4_1:row1:col3', 'Kloos_2021_table_p4_1:row1:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | L/m² | not captured | not captured | ['Kloos_2021_table_p4_1:row2:col3', 'Kloos_2021_table_p4_1:row2:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.084 | not captured | not captured | ['Kloos_2021_table_p4_1:row1:col3', 'Kloos_2021_table_p4_1:row1:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pegaspargase/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kloos_2021` / `Kloos_2021::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:38 UTC</sub>
