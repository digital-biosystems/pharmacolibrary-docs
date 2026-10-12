<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;rucaparib&quot;,&quot;href&quot;:&quot;drugs/drug_rucaparib/&quot;},{&quot;label&quot;:&quot;Liao_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rucaparib — `Rucaparib_Liao2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (Cmax, AUCt, AUC∞ and AUClast), so that value has no SI equivalent. Extracted — rucaparib: Cmax 3.17 ng/mL, AUCt 63 ng·h/mL, AUC∞ 1.52e+05 h·ng/mL, t1/2z 7.8 h, AUClast 52.9 ng·h/mL, Ct 1.15e+03 ng/mL, CL 11.4 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rucaparib, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Liao M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-022-01157-8](https://doi.org/10.1007/s40262-022-01157-8)

<div class="pk-model-meta" hidden drug="rucaparib" model-id="Rucaparib_Liao2022_reference" status="needs_review" stale="false" population="patients with cancer" measured-compound="rucaparib" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 3.17 | ng/mL | not captured | [ng] / [ml] | 30 | exact (1.0) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row9:col2, Tab2:row9:col3, Tab2:row13:col2, Tab2:row13:col3, Tab2:row19:col2, Tab2:row19:col3, Tab2:row35:col2, Tab2:row41:col2 | — | not captured |
| AUC0–72h (ng·h/mL) | `Q19` · AUCt | 63.0 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | 61 | llm (0.6) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row14:col2, Tab2:row14:col3, Tab2:row20:col2, Tab2:row20:col3 | — | not captured |
| AUC0–inf (h ng·h/mL) | `Q17` · AUC∞ | 152000 | h·ng/mL | not captured | h·ng/mL | 76 | exact (1.0) | Tab2:row5:col2, Tab2:row5:col3 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 7.8 | h | 28080.0 | [h] | 78 | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row16:col2, Tab2:row16:col3, Tab2:row22:col2, Tab2:row22:col3 | — | not captured |
| AUC0–last (ng·h/mL) | `Q74` · AUClast | 52.9 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | 57.4 | exact (1.0) | Tab2:row36:col2, Tab2:row42:col2 | — | not captured |
| 480 mg BID | `Q75` · Ct | 1150 | ng/mL | not captured | [ng] / [ml] | not captured | llm (0.6) | Liao_2022_table_1:row14:col2, Liao_2022_table_1:row14:col3 | — | not captured |
| The mean (CV%) urinary clearance of total 14C-rucaparib was | `Q22` · CL | 11.4 | L/h | 3.1666666666666667e-06 | L/h | not captured | boundary (0.8) | Liao_2022:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h ng·h/mL' (AUC∞)
- dropped value-less row: 'tmax (h)' (captured trailing unit 'h' for child rows)
- dropped duplicate Q19 ('AUC0–96h (h*ng/mL)', value '30200') — already have one for this compound
- dropped duplicate Q17 ('AUC0–inf (ng·h/mL)', value '66.5') — already have one for this compound
- dropped duplicate Q32 ('Cmax (pg/mL)', value '1860') — already have one for this compound
- dropped duplicate Q19 ('AUC0–72h (pg·h/mL)', value '25900') — already have one for this compound
- dropped unlinked row (NIL): '40 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row0:col2', 'Liao_2022_table_1:row0:col3'])
- dropped unlinked row (NIL): '80 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row2:col2', 'Liao_2022_table_1:row2:col3', 'Liao_2022_table_1:row2:col5'])
- dropped unlinked row (NIL): '160 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row4:col2', 'Liao_2022_table_1:row4:col3', 'Liao_2022_table_1:row4:col5'])
- dropped unlinked row (NIL): '300 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row6:col2', 'Liao_2022_table_1:row6:col3', 'Liao_2022_table_1:row6:col5'])
- dropped unlinked row (NIL): '500 mg QD' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row8:col2', 'Liao_2022_table_1:row8:col3', 'Liao_2022_table_1:row8:col5'])
- dropped unlinked row (NIL): '240 mg BID' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row10:col2', 'Liao_2022_table_1:row10:col3'])
- dropped unlinked row (NIL): '360 mg BID' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row12:col2', 'Liao_2022_table_1:row12:col3'])
- dropped unlinked row (NIL): '600 mg BID' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row16:col2', 'Liao_2022_table_1:row16:col3'])
- dropped unlinked row (NIL): '840 mg BID' — extend the ontology if this is a real PK parameter (source ['Liao_2022_table_1:row18:col2', 'Liao_2022_table_1:row18:col3'])
- salvaged Q22 ('The mean (CV%) urinary clearance of total 14C-rucaparib was'=11.4) from results prose — parameter table was unreadable
- implicit units: 'AUC0–inf (h ng·h/mL)' → h·ng/mL (from the paper text: "The provided parameters list contains the parenthetical text '(h ng·h/mL)' following the parameter name, which indicates")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rucaparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row3:col4 = '0.99 (0.90–1.08)'
- unparsed cell Tab2:row4:col4 = '2.26 (1.93–2.65)'
- unparsed cell Tab2:row5:col4 = '2.55 (2.12–3.08)'
- unparsed cell Tab2:row7:col2 = '0.5 (0.3, 2.0)'
- unparsed cell Tab2:row7:col3 = '1.0 (0.5, 2.0)'
- unparsed cell Tab2:row9:col4 = '1.05 (0.99–1.12)'
- unparsed cell Tab2:row10:col4 = '1.49 (1.40–1.58)'
- unparsed cell Tab2:row11:col2 = '1.0 (0.5, 3.0)'
- unparsed cell Tab2:row11:col3 = '1.5 (0.5, 3.0)'
- unparsed cell Tab2:row13:col4 = '1.09 (0.93–1.27)'
- unparsed cell Tab2:row14:col4 = '1.55 (1.32–1.83)'
- unparsed cell Tab2:row15:col4 = '1.55 (1.32–1.83)'
- unparsed cell Tab2:row17:col2 = '2.0 (1.0, 3.0)'
- unparsed cell Tab2:row17:col3 = '2.0 (2.0, 3.0)'
- unparsed cell Tab2:row19:col4 = '1.13 (0.95–1.36)'
- unparsed cell Tab2:row20:col4 = '1.39 (1.14–1.68)'
- unparsed cell Tab2:row21:col4 = '1.38 (1.13–1.69)'
- unparsed cell Tab2:row23:col2 = '0.5 (0.3, 1.0)'
- unparsed cell Tab2:row23:col3 = '0.5 (0.2, 2.0)'
- unparsed cell Tab2:row25:col4 = '0.96 (0.84–1.10)'
- unparsed cell Tab2:row26:col4 = '1.20 (1.12–1.29)'
- unparsed cell Tab2:row27:col2 = '1.0 (0.5, 3.0)'
- unparsed cell Tab2:row27:col3 = '1.0 (0.5, 3.0)'
- unparsed cell Tab2:row29:col2 = '13.0 (116)d'
- unparsed cell Tab2:row29:col3 = '18.1 (107)e'
- unparsed cell Tab2:row29:col4 = '1.29 (1.07–1.55)'
- unparsed cell Tab2:row30:col2 = '145 (95.9)d'
- unparsed cell Tab2:row30:col3 = '200 (95.9)e'
- unparsed cell Tab2:row30:col4 = '1.34 (1.16–1.54)'
- unparsed cell Tab2:row31:col2 = '145 (94.0)e'
- unparsed cell Tab2:row31:col3 = '210 (93.0)e'
- unparsed cell Tab2:row31:col4 = '1.35 (1.17–1.57)'
- unparsed cell Tab2:row32:col2 = '17.5 (64.4)e'
- unparsed cell Tab2:row32:col3 = '16.6 (51.8)e'
- unparsed cell Tab2:row33:col2 = '1.5 (0.5, 4.0)d'
- unparsed cell Tab2:row33:col3 = '2.0 (0.5, 6.0)e'
- unparsed cell Tab2:row35:col3 = '0.0784 (59.7)d'
- unparsed cell Tab2:row35:col4 = '1.09 (0.94–1.27)'
- unparsed cell Tab2:row36:col3 = '1.15 (43.8)d'
- unparsed cell Tab2:row36:col4 = '1.43 (1.15–1.77)'
- unparsed cell Tab2:row37:col2 = '0.962 (28.4)f'
- unparsed cell Tab2:row37:col3 = '1.41 (35.1)g'
- unparsed cell Tab2:row38:col2 = '15.9 (40.9)e'
- unparsed cell Tab2:row38:col3 = '24.8 (63.4)e'
- unparsed cell Tab2:row39:col2 = '1.00 (0.5, 2.0)'
- unparsed cell Tab2:row39:col3 = '1.50 (1.0, 47.5)d'
- unparsed cell Tab2:row41:col3 = '3.43 (47.3)d'
- unparsed cell Tab2:row41:col4 = '1.19 (1.00–1.42)'
- unparsed cell Tab2:row42:col3 = '77.5 (51.5)d'
- unparsed cell Tab2:row42:col4 = '1.56 (1.33–1.83)'
- unparsed cell Tab2:row43:col2 = '64.0 (53.0)i'
- unparsed cell Tab2:row43:col3 = '102 (40.6)j'
- unparsed cell Tab2:row44:col2 = '38.5 (38.5)e'
- unparsed cell Tab2:row44:col3 = '46.6 (40.4)k'
- unparsed cell Tab2:row45:col2 = '1.51 (1.0, 4.0)'
- unparsed cell Tab2:row45:col3 = '1.50 (1.0, 47.5)d'
- unparsed cell Liao_2022_table_1:row0:col4 = '2.5 (1–4)'
- unparsed cell Liao_2022_table_1:row0:col5 = '915a'
- unparsed cell Liao_2022_table_1:row2:col4 = '1.5 (1–2.5)'
- unparsed cell Liao_2022_table_1:row4:col4 = '4.0 (4–6.05)'
- unparsed cell Liao_2022_table_1:row6:col4 = '2.5 (1–4.08)'
- unparsed cell Liao_2022_table_1:row8:col4 = '4 (4–4)'
- unparsed cell Liao_2022_table_1:row10:col4 = '6 (4.05–6)'
- unparsed cell Liao_2022_table_1:row10:col5 = '2800c'
- unparsed cell Liao_2022_table_1:row12:col4 = '3.23 (1.5–6)'
- unparsed cell Liao_2022_table_1:row12:col5 = '4860 (58)d'
- unparsed cell Liao_2022_table_1:row14:col4 = '2.5 (1.5–4)'
- unparsed cell Liao_2022_table_1:row14:col5 = '8810 (63)e'
- unparsed cell Liao_2022_table_1:row16:col4 = '4 (2.42–10)'
- unparsed cell Liao_2022_table_1:row16:col5 = '7200 (66)f'
- unparsed cell Liao_2022_table_1:row18:col4 = '4 (2.5–8)'
- unparsed cell Liao_2022_table_1:row18:col5 = '13,200a'
- companion parameter table 1 transcribed (34 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (12/18 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[240 mg bid]` | not captured | 219 | only_one_extracted |
| `gpt-oss-120b` | `parameters[40 mg qd]` | not captured | 129 | only_one_extracted |
| `gpt-oss-120b` | `parameters[480 mg bid]` | 1150 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[the mean (cv%) urinary clearance of total 14c-rucaparib was]` | 11.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rucaparib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rucaparib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row20:col2', 'Tab2:row20:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row35:col2', 'Tab2:row41:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row22:col2', 'Tab2:row22:col3'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row36:col2', 'Tab2:row42:col2'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Liao_2022_table_1:row14:col2', 'Liao_2022_table_1:row14:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 11.4 | not captured | not captured | ['Liao_2022:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.4 L/h | not captured | not captured | ['Liao_2022:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_rucaparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Liao_2022` / `Liao_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:39 UTC</sub>
