<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;bempedoic acid&quot;,&quot;href&quot;:&quot;drugs/drug_bempedoic_acid/&quot;},{&quot;label&quot;:&quot;Jadhav_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bempedoic acid — `BempedoicAcid_Jadhav2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.944), gpt-oss:120b (not confirmed, agreement 0.789). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has bempedoic acid, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Jadhav SB et al., Population pharmacokinetic and pharmaco…, Journal of pharmacokinetics… (2023)
  ·  DOI: [10.1007/s10928-023-09864-w](https://doi.org/10.1007/s10928-023-09864-w)

<div class="pk-model-meta" hidden drug="bempedoic acid" model-id="BempedoicAcid_Jadhav2023_reference" status="extracted" stale="false" population="healthy subjects and patients with dyslipidemia" measured-compound="bempedoic acid" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 4 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 0.755 | L/h | 2.0972222222222223e-07 | [l] / [h] | 2.6 | exact (1.0) | Jadhav_2023_table_2:row0:col1, Jadhav_2023_table_2:row0:col2 | — | 29.7 (None% RSE) |
| Vc/F, L | `Q290` · V1/F | 19.1 | L | 0.019100000000000002 | [l] | 6.9 | exact (1.0) | Jadhav_2023_table_2:row1:col1, Jadhav_2023_table_2:row1:col2 | — | 100 (None% RSE) |
| Ka, h−1 | `Q49` · kabs | 1.41 | h−1 | 0.00039166666666666663 | [1] / [h] | 5.6 | exact (1.0) | Jadhav_2023_table_2:row2:col1, Jadhav_2023_table_2:row2:col2 | — | 73.9 (None% RSE) |
| K23, h−1 | `Q48` · kcomp | 0.184 | h−1 | 5.111111111111111e-05 | [1] / [h] | 8.3 | exact (1.0) | Jadhav_2023_table_2:row3:col1, Jadhav_2023_table_2:row3:col2 | — | not captured |
| egfr | `Q900` · egfr | 0.574 | not captured | not captured | not captured | 6.3 | not captured (not captured) | Jadhav_2023_table_2:row12:col1, Jadhav_2023_table_2:row12:col2 | — | not captured |
| age | `Q900` · age | 0.743 | not captured | not captured | not captured | 15.9 | not captured (not captured) | Jadhav_2023_table_2:row16:col1, Jadhav_2023_table_2:row16:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'PD proportional, %' routed out of structural estimates ('Residual errora')
- table section residual_error: 'PD additive, g/dL' routed out of structural estimates ('Residual errora')
- table section iiv: 'Imax' routed out of structural estimates ('IIV, %CV')
- table section iiv: 'Baseline LDL-C' routed out of structural estimates ('IIV, %CV')
- table section residual_error: 'Serial PK sampling' routed out of structural estimates ('Residual errora, %')
- table section residual_error: 'Sparse PK sampling' routed out of structural estimates ('Residual errora, %')
- table section iiv: 'CL/F' routed out of structural estimates ('IIV, %CV')
- table section iiv: 'Vc/F' routed out of structural estimates ('IIV, %CV')
- table section iiv: 'Ka' routed out of structural estimates ('IIV, %CV')
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row2:col1', 'Tab3:row2:col2'])
- dropped PD-category row 'IC50, µg/mL' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row3:col1', 'Tab3:row3:col2'])
- dropped unlinked row (NIL): 'Baseline LDL-C, mg/dL' — extend the ontology if this is a real PK parameter (source ['Tab3:row4:col1', 'Tab3:row4:col2'])
- dropped unlinked row (NIL): 'TURN, h' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col1', 'Tab3:row5:col2'])
- dropped unlinked row (NIL): 'Ezetimibe' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col1', 'Tab3:row7:col2', 'Jadhav_2023_table_2:row13:col2'])
- dropped value-less row: 'Low-intensity statin'
- dropped value-less row: 'Moderate-intensity statin'
- dropped value-less row: 'High-intensity statin'
- dropped unlinked row (NIL): 'Female sex' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1', 'Tab3:row11:col2', 'Jadhav_2023_table_2:row7:col2', 'Jadhav_2023_table_2:row15:col2'])
- dropped unlinked row (NIL): 'Body weight' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col1', 'Tab3:row12:col2', 'Jadhav_2023_table_2:row8:col1', 'Jadhav_2023_table_2:row8:col2', 'Jadhav_2023_table_2:row17:col1', 'Jadhav_2023_table_2:row17:col2'])
- dropped value-less row: 'Black race'
- dropped value-less row: 'Statin prior therapy'
- dropped unlinked row (NIL): 'HeFH' — extend the ontology if this is a real PK parameter (source ['Tab3:row19:col1', 'Tab3:row19:col2'])
- dropped value-less row: 'T2DM'
- dropped value-less row: 'Ezetimibe prior therapy'
- dropped duplicate Q48 ('K32, h−1', value '0.156') — already have one for this compound
- dropped value-less row: 'Food on Ka'
- dropped value-less row: 'Hyperlipidemia'
- covariate level 'eGFR' → Q900:egfr = 0.574 (power on Q27)
- covariate level 'Age' → Q900:age = 0.743 (power on Q27)
- dropped value-less row: 'Simvastatin'
- dropped unlinked row (NIL): 'Atorvastatin' — extend the ontology if this is a real PK parameter (source ['Jadhav_2023_table_2:row20:col1', 'Jadhav_2023_table_2:row20:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=bempedoic acid
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row2:col3 = '(0.314, 0.386)'
- unparsed cell Tab3:row3:col3 = '(2.07, 4.26)'
- unparsed cell Tab3:row4:col3 = '(141, 145)'
- unparsed cell Tab3:row5:col3 = '(70.2, 101)'
- unparsed cell Tab3:row7:col3 = '(0.114, 0.266)'
- unparsed cell Tab3:row8:col1 = '− 0.238'
- unparsed cell Tab3:row8:col3 = '(− 0.325, − 0.150)'
- unparsed cell Tab3:row9:col1 = '− 0.302'
- unparsed cell Tab3:row9:col3 = '(− 0.346, − 0.257)'
- unparsed cell Tab3:row10:col1 = '− 0.424'
- unparsed cell Tab3:row10:col3 = '(− 0.461, − 0.387)'
- unparsed cell Tab3:row11:col3 = '(0.137, 0.269)'
- unparsed cell Tab3:row12:col3 = '(0.410, 0.679)'
- unparsed cell Tab3:row13:col1 = '− 0.240'
- unparsed cell Tab3:row13:col3 = '(− 0.330, − 0.150)'
- unparsed cell Tab3:row14:col1 = '− 0.373'
- unparsed cell Tab3:row14:col3 = '(− 0.525, − 0.222)'
- unparsed cell Tab3:row16:col1 = '− 0.159'
- unparsed cell Tab3:row16:col3 = '(− 0.191, − 0.128)'
- unparsed cell Tab3:row17:col1 = '− 0.268'
- unparsed cell Tab3:row17:col3 = '(− 0.282, − 0.253)'
- unparsed cell Tab3:row18:col1 = '− 0.293'
- unparsed cell Tab3:row18:col3 = '(− 0.307, − 0.279)'
- unparsed cell Tab3:row19:col3 = '(0.0316, 0.103)'
- unparsed cell Tab3:row20:col1 = '− 0.0661'
- unparsed cell Tab3:row20:col3 = '(− 0.0830, − 0.0492)'
- unparsed cell Tab3:row21:col1 = '− 0.0596'
- unparsed cell Tab3:row21:col3 = '(− 0.0917, − 0.0274)'
- unparsed cell Tab3:row22:col1 = '− 0.296'
- unparsed cell Tab3:row22:col3 = '(− 0.345, − 0.247)'
- unparsed cell Tab3:row24:col3 = '(15.0, 15.6)'
- unparsed cell Tab3:row25:col3 = '(3.24, 4.64)'
- unparsed cell Tab3:row27:col3 = '(40.8, 45.3)'
- unparsed cell Tab3:row28:col3 = '(23.4, 24.5)'
- unparsed cell Jadhav_2023_table_2:row0:col3 = '(0.716, 0.794)'
- unparsed cell Jadhav_2023_table_2:row1:col3 = '(16.5, 21.7)'
- unparsed cell Jadhav_2023_table_2:row2:col3 = '(1.25, 1.56)'
- unparsed cell Jadhav_2023_table_2:row3:col3 = '(0.154, 0.215)'
- unparsed cell Jadhav_2023_table_2:row4:col3 = '(0.143, 0.169)'
- unparsed cell Jadhav_2023_table_2:row5:col1 = '− 0.777'
- unparsed cell Jadhav_2023_table_2:row5:col3 = '(− 0.799, − 0.754)'
- unparsed cell Jadhav_2023_table_2:row7:col1 = '− 0.127'
- unparsed cell Jadhav_2023_table_2:row7:col3 = '(− 0.169, − 0.0846)'
- unparsed cell Jadhav_2023_table_2:row8:col3 = '(0.493, 0.727)'
- unparsed cell Jadhav_2023_table_2:row9:col1 = '− 0.143'
- unparsed cell Jadhav_2023_table_2:row9:col3 = '(− 0.194, − 0.0924)'
- unparsed cell Jadhav_2023_table_2:row10:col1 = '− 0.0945'
- unparsed cell Jadhav_2023_table_2:row10:col3 = '(− 0.147, − 0.0416)'
- unparsed cell Jadhav_2023_table_2:row11:col1 = '− 0.177'
- unparsed cell Jadhav_2023_table_2:row11:col3 = '(− 0.235, − 0.119)'
- unparsed cell Jadhav_2023_table_2:row12:col3 = '(0.503, 0.645)'
- unparsed cell Jadhav_2023_table_2:row13:col1 = '− 0.0934'
- unparsed cell Jadhav_2023_table_2:row13:col3 = '(− 0.146, − 0.0413)'
- unparsed cell Jadhav_2023_table_2:row15:col1 = '− 0.0895'
- unparsed cell Jadhav_2023_table_2:row15:col3 = '(− 0.148, − 0.0308)'
- unparsed cell Jadhav_2023_table_2:row16:col3 = '(0.511, 0.976)'
- unparsed cell Jadhav_2023_table_2:row17:col3 = '(0.557, 1.32)'
- unparsed cell Jadhav_2023_table_2:row18:col1 = '− 0.154'
- unparsed cell Jadhav_2023_table_2:row18:col3 = '(− 0.242, − 0.0654)'
- unparsed cell Jadhav_2023_table_2:row20:col3 = '(0.0886, 0.195)'
- unparsed cell Jadhav_2023_table_2:row22:col3 = '(31.2, 32.6)'
- unparsed cell Jadhav_2023_table_2:row23:col3 = '(52.9, 55.7)'
- unparsed cell Jadhav_2023_table_2:row25:col3 = '(27.7, 31.5)'
- unparsed cell Jadhav_2023_table_2:row26:col3 = '(93.9, 106)'
- unparsed cell Jadhav_2023_table_2:row27:col3 = '(65.8, 81.2)'
- companion parameter table 2 transcribed (35 record(s), model stage 'final')
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.944 (17/18 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.789 (15/19 fields) | 4 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[turn]` | not captured | 85.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[hefh]` | not captured | 0.0671 | only_one_extracted |
| `gpt-oss:120b` | `parameters[turn]` | not captured | 85.8 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | bempedoic acid | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | bempedoic acid | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jadhav_2023_table_2:row0:col1', 'Jadhav_2023_table_2:row0:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jadhav_2023_table_2:row1:col1', 'Jadhav_2023_table_2:row1:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Jadhav_2023_table_2:row3:col1', 'Jadhav_2023_table_2:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Jadhav_2023_table_2:row2:col1', 'Jadhav_2023_table_2:row2:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.755 L/h | not captured | not captured | ['Jadhav_2023_table_2:row0:col1', 'Jadhav_2023_table_2:row0:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 19.1 L | not captured | not captured | ['Jadhav_2023_table_2:row1:col1', 'Jadhav_2023_table_2:row1:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_bempedoic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jadhav_2023` / `Jadhav_2023::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:51 UTC</sub>
