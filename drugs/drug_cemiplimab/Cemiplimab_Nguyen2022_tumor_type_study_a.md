<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;cemiplimab&quot;,&quot;href&quot;:&quot;drugs/drug_cemiplimab/&quot;},{&quot;label&quot;:&quot;Nguyen_2022 \u00b7 tumor_type_study_a&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cemiplimab — `Cemiplimab_Nguyen2022_tumor_type_study_a`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No model has been built from this record yet.**

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of baseline cl at first dose: this record has 0.246, the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Nguyen JH et al., Population pharmacokinetics modeling an…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12855](https://doi.org/10.1002/psp4.12855)

<div class="pk-model-meta" hidden drug="cemiplimab" model-id="Cemiplimab_Nguyen2022_tumor_type_study_a" status="not_modelled" stale="false" population="patients with solid tumors, including recurrent or metastatic cervical cancer" measured-compound="cemiplimab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| volume of distribution (Vss) | `Q61` · V | 5.89 | L | 0.005889999999999999 | L | not captured | exact (1.0) | Nguyen_2022:other_prose | — | not captured |
| baseline CL at first dose | `Q22` · CL | 0.246 | L/day | 2.8472222222222224e-09 | L/h | not captured | review_gapfill (0.7) | Nguyen_2022:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CSCC (study 1540)' — extend the ontology if this is a real PK parameter (source ['Nguyen_2022_table_2:row1:col1', 'Nguyen_2022_table_2:row6:col1', 'Nguyen_2022_table_2:row11:col1', 'Nguyen_2022_table_2:row16:col1', 'Nguyen_2022_table_2:row21:col1', 'Nguyen_2022_table_2:row26:col1', 'Nguyen_2022_table_2:row31:col1', 'Nguyen_2022_table_2:row36:col1'])
- dropped unlinked row (NIL): 'BCC (study 1620)' — extend the ontology if this is a real PK parameter (source ['Nguyen_2022_table_2:row2:col1', 'Nguyen_2022_table_2:row7:col1', 'Nguyen_2022_table_2:row12:col1', 'Nguyen_2022_table_2:row17:col1', 'Nguyen_2022_table_2:row22:col1', 'Nguyen_2022_table_2:row27:col1', 'Nguyen_2022_table_2:row32:col1', 'Nguyen_2022_table_2:row37:col1'])
- dropped unlinked row (NIL): 'NSCLC (study 1624)' — extend the ontology if this is a real PK parameter (source ['Nguyen_2022_table_2:row3:col1', 'Nguyen_2022_table_2:row8:col1', 'Nguyen_2022_table_2:row13:col1', 'Nguyen_2022_table_2:row18:col1', 'Nguyen_2022_table_2:row23:col1', 'Nguyen_2022_table_2:row28:col1', 'Nguyen_2022_table_2:row33:col1', 'Nguyen_2022_table_2:row38:col1'])
- dropped unlinked row (NIL): 'All solid tumors (study 1423)' — extend the ontology if this is a real PK parameter (source ['Nguyen_2022_table_2:row4:col1', 'Nguyen_2022_table_2:row9:col1', 'Nguyen_2022_table_2:row14:col1', 'Nguyen_2022_table_2:row19:col1', 'Nguyen_2022_table_2:row24:col1', 'Nguyen_2022_table_2:row29:col1', 'Nguyen_2022_table_2:row34:col1', 'Nguyen_2022_table_2:row39:col1'])
- dropped value-less row: 'CLALB'
- dropped value-less row: 'CLALTBL'
- dropped value-less row: 'CLBCC'
- dropped value-less row: 'CLCSCC'
- dropped value-less row: 'CLSEX'
- dropped value-less row: 'CLWGTBL'
- dropped value-less row: 'EmaxBCC'
- dropped value-less row: 'T50OTHER'
- dropped value-less row: 'V1ALBBL'
- dropped value-less row: 'V1SEX'
- dropped value-less row: 'VssWGTBL'
- table mostly unlinked (4/4 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q61 ('volume of distribution (Vss)'=5.89) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cemiplimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'tumor type (study) a' subgroup of Nguyen_2022 (paper reports 3 populations: final poppk model, mean (cv%), tumor type (study) a)
- molar mass: none found for 'cemiplimab' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Nguyen_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell psp412855-tbl-0001:row3:col4 = '0.246, 0.262'
- unparsed cell psp412855-tbl-0001:row3:col7 = '0.241, 0.269'
- unparsed cell psp412855-tbl-0001:row4:col4 = '0.606, 0.699'
- unparsed cell psp412855-tbl-0001:row4:col7 = '0.581, 0.728'
- unparsed cell psp412855-tbl-0001:row5:col4 = '3.27, 3.44'
- unparsed cell psp412855-tbl-0001:row5:col7 = '3.27, 3.44'
- unparsed cell psp412855-tbl-0001:row6:col4 = '2.44, 2.60'
- unparsed cell psp412855-tbl-0001:row6:col7 = '2.29, 2.81'
- unparsed cell psp412855-tbl-0001:row7:col4 = '−0.190, −0.157'
- unparsed cell psp412855-tbl-0001:row7:col7 = '−0.232, −0.136'
- unparsed cell psp412855-tbl-0001:row8:col4 = '62.8, 84.7'
- unparsed cell psp412855-tbl-0001:row8:col7 = '46.2, 245'
- unparsed cell psp412855-tbl-0001:row10:col4 = '0.442, 0.637'
- unparsed cell psp412855-tbl-0001:row10:col7 = '0.443, 0.639'
- unparsed cell psp412855-tbl-0001:row11:col4 = '0.401, 0.597'
- unparsed cell psp412855-tbl-0001:row11:col7 = '0.412, 0.569'
- unparsed cell psp412855-tbl-0001:row12:col4 = '−0.172, −0.101'
- unparsed cell psp412855-tbl-0001:row12:col7 = '−0.167, −0.0925'
- unparsed cell psp412855-tbl-0001:row13:col4 = '−0.117, −0.0435'
- unparsed cell psp412855-tbl-0001:row13:col7 = '−0.115, −0.0471'
- unparsed cell psp412855-tbl-0001:row14:col4 = '−0.338, −0.0961'
- unparsed cell psp412855-tbl-0001:row14:col7 = '−0.361, −0.0870'
- unparsed cell psp412855-tbl-0001:row15:col4 = '−1.16, −1.06'
- unparsed cell psp412855-tbl-0001:row15:col7 = '−1.24, −0.984'
- unparsed cell psp412855-tbl-0001:row16:col4 = '−0.105, −0.0411'
- unparsed cell psp412855-tbl-0001:row16:col7 = '−0.108, −0.0370'
- unparsed cell psp412855-tbl-0001:row17:col4 = '−0.256, −0.176'
- unparsed cell psp412855-tbl-0001:row17:col7 = '−0.257, −0.181'
- unparsed cell psp412855-tbl-0001:row18:col4 = '−0.261, −0.160'
- unparsed cell psp412855-tbl-0001:row18:col7 = '−0.261, −0.158'
- unparsed cell psp412855-tbl-0001:row19:col4 = '−1.09, −0.657'
- unparsed cell psp412855-tbl-0001:row19:col7 = '−1.00, −0.517'
- unparsed cell psp412855-tbl-0001:row20:col4 = '−0.608, −0.374'
- unparsed cell psp412855-tbl-0001:row20:col7 = '−0.987, −0.169'
- unparsed cell psp412855-tbl-0001:row22:col4 = '0.240, 0.242 d'
- unparsed cell psp412855-tbl-0001:row22:col7 = '0.227, 0.258 d'
- unparsed cell psp412855-tbl-0001:row24:col4 = '0.0822, 0.0963'
- unparsed cell psp412855-tbl-0001:row24:col7 = '0.0759, 0.101'
- unparsed cell psp412855-tbl-0001:row25:col4 = '0.0681, 0.0737'
- unparsed cell psp412855-tbl-0001:row25:col7 = '0.0459, 0.105'
- companion parameter table 2 transcribed (120 record(s), model stage 'final')
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.571 (4/7 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[baseline cl at first dose]` | 0.246 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[mean (cv%) volume of distribution (vss) of cemiplimab]` | not captured | 5.89 | only_one_extracted |
| `qwen3.8-27b` | `parameters[volume of distribution]` | 5.89 | not captured | only_one_extracted |

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
| C1_half_life_beta | pass | 19.7 | 16.596 | 0.8424 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nguyen_2022:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.246 | not captured | not captured | ['Nguyen_2022:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0103 L/h | not captured | not captured | ['Nguyen_2022:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.89 L | not captured | not captured | ['Nguyen_2022:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped | 19.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 22.3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_cemiplimab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nguyen_2022` / `Nguyen_2022::tumor_type_study_a`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:52 UTC</sub>
