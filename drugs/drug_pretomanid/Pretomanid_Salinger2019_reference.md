<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;pretomanid&quot;,&quot;href&quot;:&quot;drugs/drug_pretomanid/&quot;},{&quot;label&quot;:&quot;Salinger_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pretomanid — `Pretomanid_Salinger2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.474). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl∼induc: this record has 1.35, the second reading none; it also differs on 9 more fields. That field does not shape the model.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Salinger DH et al., Population Pharmacokinetics of the Anti…, Antimicrobial agents and ch… (2019)
  ·  DOI: [10.1128/AAC.00907-19](https://doi.org/10.1128/AAC.00907-19)

<div class="pk-model-meta" hidden drug="pretomanid" model-id="Pretomanid_Salinger2019_reference" status="rejected" stale="false" population="healthy subjects and subjects with drug-sensitive, multidrug-resistant, or extensively drug-resistant pulmonary tuberculosis" measured-compound="pretomanid" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 11 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F1 (fixed) | `Q40` · Fab | 1 | fixed | not captured | [fixed] | not captured | exact (1.0) | T1:row2:col1 | — | not captured |
| F1∼FASTED | `Q41` · FG | 0.513 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | T1:row3:col1 | — | not captured |
| F1∼DOSE&FASTED | `Q1` · Km | -0.264 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | T1:row4:col1 | — | not captured |
| F1∼BDQ*MOX*PZA | `Q900` · equation variable | 1.25 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | T1:row7:col1 | — | not captured |
| F1∼HIV | `Q34` · Css | 0.789 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | T1:row9:col1 | — | not captured |
| KA, h−1 | `Q49` · kabs | 1.38 | h−1 | 0.0003833333333333333 | [1] / [h] | not captured | exact (1.0) | T1:row12:col1 | — | not captured |
| KA∼FASTED | `Q95` · t1/2ka | 0.482 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | T1:row13:col1 | — | not captured |
| MTT, h | `Q81` · MTT | 1.25 | h | not captured | [h] | not captured | exact (1.0) | T1:row16:col1 | — | not captured |
| CL, liters/h | `Q22` · CL | 3.30 | liters/h | 9.166666666666666e-07 | [l] / [h] | not captured | exact (1.0) | T1:row20:col1 | — | not captured |
| CL∼INDUC | `Q354` · CLnorm | 1.35 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | T1:row31:col1 | — | not captured |
| V2, liters | `Q64` · V2 | 90.4 | liters | 0.09040000000000001 | [l] | not captured | exact (1.0) | T1:row35:col1 | — | not captured |
| IOC F1 | `Q44` · fe | 0.0412 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | T1:row60:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.795 | not captured | not captured | not captured | not captured | not captured (not captured) | T1:row48:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'fixed' (Fab)
- dropped unlinked row (NIL): 'F1∼FED&1,000 mg' — extend the ontology if this is a real PK parameter (source ['T1:row5:col1'])
- dropped duplicate Q40 ('F1∼MOX*PZA', value '0.925') — already have one for this compound
- dropped duplicate Q40 ('F1∼EFV', value '1.24') — already have one for this compound
- unit_dimension_unknown: 'ref=5' (equation variable)
- dropped duplicate Q900 ('F1∼TBIL (ref=5)', value '0.0880') — already have one for this compound
- dropped unlinked row (NIL): 'F1∼NIX' — extend the ontology if this is a real PK parameter (source ['T1:row11:col1'])
- dropped duplicate Q49 ('KA∼DOSE', value '-0.128') — already have one for this compound
- dropped duplicate Q49 ('KA∼NC5', value '0.186') — already have one for this compound
- dropped duplicate Q81 ('MTT∼FASTED', value '0.311') — already have one for this compound
- dropped duplicate Q81 ('MTT∼DOSE&FASTED', value '-0.155') — already have one for this compound
- unit_dimension_unknown: 'fixed' (CL)
- dropped duplicate Q22 ('CL∼WT (fixed)', value '0.75') — already have one for this compound
- dropped duplicate Q22 ('SS CL, liters/h', value '0.175') — already have one for this compound
- dropped duplicate Q22 ('CL∼HS', value '1.16') — already have one for this compound
- dropped duplicate Q22 ('CL∼MOX', value '0.967') — already have one for this compound
- dropped duplicate Q900 ('CL∼MOX*PZA', value '0.733') — already have one for this compound
- dropped duplicate Q22 ('CL∼MDR, TI/NR MDR, or XDR', value '1.15') — already have one for this compound
- dropped duplicate Q22 ('CL∼BDQ*MOX*PZA', value '1.32') — already have one for this compound
- dropped duplicate Q22 ('CL∼EFV', value '2.17') — already have one for this compound
- dropped duplicate Q22 ('CL∼LPVR', value '1.14') — already have one for this compound
- dropped duplicate Q22 ('CL∼HIV', value '0.842') — already have one for this compound
- dropped duplicate Q22 ('CL∼FEMALE', value '0.837') — already have one for this compound
- unit_dimension_unknown: 'ref=35' (CL)
- dropped duplicate Q22 ('CL∼ALB (ref=35)', value '0.200') — already have one for this compound
- dropped duplicate Q22 ('CL NIX WK ≥ 6, liters/h', value '0.466') — already have one for this compound
- unit_dimension_unknown: 'fixed' (V2)
- dropped duplicate Q64 ('V2∼WT (fixed)', value '1') — already have one for this compound
- dropped duplicate Q64 ('V2∼DOSE', value '0.111') — already have one for this compound
- dropped duplicate Q64 ('V2∼MDR or TI/NR MDR', value '1.44') — already have one for this compound
- dropped duplicate Q64 ('V2∼XDR', value '1.75') — already have one for this compound
- dropped duplicate Q40 ('F1 Var∼NIX', value '0.919') — already have one for this compound
- dropped duplicate Q81 ('MTT Var∼NC3', value '-0.645') — already have one for this compound
- dropped duplicate Q64 ('Box-Cox V2 non-NIX', value '9.55') — already have one for this compound
- dropped duplicate Q64 ('Box-Cox V2 NIX', value '26.0') — already have one for this compound
- dropped unlinked row (NIL): 'Box-Cox CL non-NIX' — extend the ontology if this is a real PK parameter (source ['T1:row44:col1'])
- dropped duplicate Q22 ('Box-Cox CL NIX', value '2.78') — already have one for this compound
- dropped unlinked row (NIL): 'F1∼dose/fasted' — extend the ontology if this is a real PK parameter (source ['T1:row51:col1'])
- dropped duplicate Q22 ('CL', value '0.0373') — already have one for this compound
- dropped duplicate Q64 ('V2', value '0.00892') — already have one for this compound
- dropped duplicate Q49 ('KA', value '0.309') — already have one for this compound
- dropped duplicate Q81 ('KA-MTT', value '0.0649') — already have one for this compound
- dropped duplicate Q81 ('MTT', value '0.593') — already have one for this compound
- dropped duplicate Q49 ('KA-F1', value '-0.0339') — already have one for this compound
- dropped duplicate Q81 ('MTT-F1', value '0.00391') — already have one for this compound
- dropped duplicate Q40 ('F1', value '0.0227') — already have one for this compound
- dropped duplicate Q22 ('IOC F1-CL', value '0.0101') — already have one for this compound
- dropped duplicate Q22 ('IOC CL', value '0.0185') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pretomanid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T1:row3:col2 = '0.485 to 0.541'
- unparsed cell T1:row4:col2 = '−0.302 to −0.226'
- unparsed cell T1:row5:col2 = '−0.148 to 0.142'
- unparsed cell T1:row6:col2 = '0.848 to 1.00'
- unparsed cell T1:row7:col2 = '1.04 to 1.46'
- unparsed cell T1:row8:col2 = '1.03 to 1.45'
- unparsed cell T1:row9:col2 = '0.721 to 0.856'
- unparsed cell T1:row10:col2 = '0.0495 to 0.126'
- unparsed cell T1:row11:col2 = '1.28 to 1.80'
- unparsed cell T1:row12:col2 = '1.25 to 1.52'
- unparsed cell T1:row13:col2 = '0.453 to 0.511'
- unparsed cell T1:row14:col2 = '−0.158 to −0.0990'
- unparsed cell T1:row15:col2 = '0.150 to 0.221'
- unparsed cell T1:row16:col2 = '1.14 to 1.35'
- unparsed cell T1:row17:col2 = '0.293 to 0.329'
- unparsed cell T1:row18:col2 = '−0.187 to −0.123'
- unparsed cell T1:row20:col2 = '3.14 to 3.46'
- unparsed cell T1:row22:col2 = '0.135 to 0.214'
- unparsed cell T1:row23:col2 = '1.09 to 1.23'
- unparsed cell T1:row24:col2 = '0.902 to 1.03'
- unparsed cell T1:row25:col2 = '0.663 to 0.804'
- unparsed cell T1:row26:col2 = '1.04 to 1.27'
- unparsed cell T1:row27:col2 = '1.12 to 1.51'
- unparsed cell T1:row28:col2 = '1.89 to 2.45'
- unparsed cell T1:row29:col2 = '1.10 to 1.18'
- unparsed cell T1:row30:col2 = '0.779 to 0.905'
- unparsed cell T1:row31:col2 = '1.24 to 1.46'
- unparsed cell T1:row32:col2 = '0.808 to 0.867'
- unparsed cell T1:row33:col2 = '0.0789 to 0.322'
- unparsed cell T1:row34:col2 = '0.285 to 0.646'
- unparsed cell T1:row35:col2 = '85.8 to 94.9'
- unparsed cell T1:row37:col2 = '0.0845 to 0.137'
- unparsed cell T1:row38:col2 = '1.24 to 1.64'
- unparsed cell T1:row39:col2 = '1.39 to 2.11'
- unparsed cell T1:row40:col2 = '0.558 to 1.28'
- unparsed cell T1:row41:col2 = '−1.06 to −0.226'
- unparsed cell T1:row42:col2 = '2.25 to 16.9'
- unparsed cell T1:row43:col2 = '−8.54 to 60.5'
- unparsed cell T1:row44:col2 = '0.733 to 1.99'
- unparsed cell T1:row45:col2 = '1.36 to 4.20'
- unparsed cell T1:row46:col2 = '0.506 to 0.589'
- unparsed cell T1:row47:col2 = '5.84 to 17.2'
- unparsed cell T1:row48:col2 = '0.789 to 0.800'
- unparsed cell T1:row51:col2 = '0.018 to 0.0368'
- unparsed cell T1:row52:col2 = '0.029 to 0.0455'
- unparsed cell T1:row53:col2 = '0.0018 to 0.016'
- unparsed cell T1:row54:col2 = '0.252 to 0.366'
- unparsed cell T1:row55:col2 = '0.00363 to 0.126'
- unparsed cell T1:row56:col2 = '0.475 to 0.71'
- unparsed cell T1:row57:col2 = '−0.0509 to −0.0168'
- unparsed cell T1:row58:col2 = '−0.0184 to 0.0262'
- unparsed cell T1:row59:col2 = '0.0136 to 0.0319'
- unparsed cell T1:row60:col2 = '0.0362 to 0.0462'
- unparsed cell T1:row61:col2 = '0.00697 to 0.0132'
- unparsed cell T1:row62:col2 = '0.0155 to 0.0214'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.474 (9/19 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl∼induc]` | 1.35 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1∼bdq*mox*pza]` | 1.25 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1∼dose&fasted]` | -0.264 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1∼efv]` | not captured | 1.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1∼fasted]` | 0.513 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1∼hiv]` | 0.789 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ioc f1]` | 0.0412 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka∼fasted]` | 0.482 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q316_weight_power]` | not captured | 0.795 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power]` | 0.795 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row20:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row12:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T1:row35:col1'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['T1:row4:col1'] |
| C5_unit_missing_Q34 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['T1:row9:col1'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row31:col1'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['T1:row13:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.3 | not captured | not captured | ['T1:row20:col1'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.3 L/h | not captured | not captured | ['T1:row20:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 90.4 L | not captured | not captured | ['T1:row35:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_pretomanid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Salinger_2019` / `Salinger_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-13 11:18 UTC</sub>
