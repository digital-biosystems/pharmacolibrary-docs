<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;von Willebrand factor&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/&quot;},{&quot;label&quot;:&quot;Daniel_2026 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;VonWillebrandFactor_Schning2026_reference&quot;,&quot;label&quot;:&quot;Sch\u00f6ning_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Schning2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Valke2024_reference&quot;,&quot;label&quot;:&quot;Valke_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Valke2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Wong2025_reference&quot;,&quot;label&quot;:&quot;Wong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Wong2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Zhu2020_reference&quot;,&quot;label&quot;:&quot;Zhu_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Zhu2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Al2025_final&quot;,&quot;label&quot;:&quot;Al_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# von Willebrand factor — `VonWillebrandFactor_Daniel2026_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:42 UTC (Rejected), but the paper was screened again on 2026-10-05 20:06 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Rejected because the intercompartmental clearance Q of von Willebrand factor is reported as 3290 mL, a volume unit, while an intercompartmental clearance must have units of flow (mL/h), a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="von Willebrand factor" model-id="VonWillebrandFactor_Daniel2026_value" status="rejected" stale="true" population="patients with von Willebrand disease" measured-compound="von Willebrand factor" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Daniel MY, Rauch A, Paris C, Jeanpierre E, Goudemand J, Marichez C et al. Modeling response to high-purity von Willebrand factor: toward tailored dosing during surgery in von Willebrand disease. Blood advances 10(3):903–914 (2026).
  ·  DOI: [10.1182/bloodadvances.2025017898](https://doi.org/10.1182/bloodadvances.2025017898)

## Population and dosing

**Population:** patients with von Willebrand disease · condition von Willebrand disease · age group mixed · n = &gt;=74.

**Dosing:** 50 IU/kg, iv, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| VVWF (mL) | V | 4537 | mL |
| ClVWF (mL/h) | CL | 74.2 | mL/h |
| 𝑄𝑄𝑉𝑉𝑉𝑉𝑉𝑉 (mL) | Q | 3290 | mL |
| Absorption rate constant (kapop) [h−1] | kabs | 0.5 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because the intercompartmental clearance Q of von Willebrand factor is reported as 3290 mL, a volume unit, while an intercompartmental clearance must have units of flow (mL/h), a dimension mismatch on a structural parameter.**

In the two-compartment structure for von Willebrand factor (Alphanate/Humate-P) in patients with von Willebrand disease, Q is defined as the intercompartmental clearance between central and peripheral compartments, but its recorded value 3290 carries the unit mL, which cannot be dimensionally correct for a clearance. The record also reached review without an SI value because the reported unit could not be converted to SI. A second reader further disagreed on several fields, reading the measured analyte as VWF:Ag rather than von Willebrand factor, proposing links between VWF:Ag and factor VIII via interconversion, a baseline VWF of 0.28, and precision values (CL 17.3%, V 7.9%), while doubting the 3290 mL Q and the 0.5 h−1 absorption rate constant; these disagreements remain unresolved. Extracted — von willebrand factor: V 4.54e+03 mL, CL 74.2 mL/h, Q 3.29e+03 mL, kabs 0.5 h−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has von Willebrand factor, the second reading high-purity VWF concentrate; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| VVWF (mL) | `Q61` · V | 4537 | mL | 0.004537 | m3 | ml | llm (0.6) | tbl2:row3:col1 |
| ClVWF (mL/h) | `Q22` · CL | 74.2 | mL/h | 2.061e-08 | m3/s | ml/h | llm (0.6) | tbl2:row4:col1 |
| 𝑄𝑄𝑉𝑉𝑉𝑉𝑉𝑉 (mL) | `Q30` · Q | 3290 | mL |  |  | ml | llm (0.6) | Daniel_2026_table_S4:row10:col2 |
| Absorption rate constant (kapop) [h−1] | `Q49` · kabs | 0.5 | h−1 | 0.0001389 | 1/s | 1/h | review_gapfill (0.7) | Schöning_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'BaselineVWF(IU/mL)' — extend the ontology if this is a real PK parameter (source ['tbl2:row2:col1'])
- dropped unlinked row (NIL): 'BaselineFVIII' — extend the ontology if this is a real PK parameter (source ['tbl2:row5:col1'])
- dropped duplicate Q61 ('VFVIII (mL)', value '4944') — already have one for this compound
- dropped duplicate Q22 ('ClFVIII (mL/h)', value '598.0') — already have one for this compound
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row8:col1'])
- dropped PD-category row 'IC50 (IU/mL)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row9:col1'])
- dropped unlinked row (NIL): 'RVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row10:col1'])
- dropped unlinked row (NIL): 'ClVWF A, B, AB blood group' — extend the ontology if this is a real PK parameter (source ['tbl2:row14:col1'])
- dropped unlinked row (NIL): 'ClVWF O blood group' — extend the ontology if this is a real PK parameter (source ['tbl2:row15:col1'])
- dropped PD-category row 'IC50 VWD type 2N and 3' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row16:col1'])
- dropped PD-category row 'IC50 VWD type 1, 2A/B/M' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row17:col1'])
- dropped unlinked row (NIL): 'RVWF VWD type 1, 2N, 3' — extend the ontology if this is a real PK parameter (source ['tbl2:row18:col1'])
- dropped unlinked row (NIL): 'RVWF VWD type 2A/B/M' — extend the ontology if this is a real PK parameter (source ['tbl2:row19:col1'])
- dropped unlinked row (NIL): 'βpropeptideBaselineVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row27:col1'])
- dropped unlinked row (NIL): 'βBWonVVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row28:col1'])
- dropped unlinked row (NIL): 'βbloodgroupOonClVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row29:col1'])
- dropped unlinked row (NIL): 'βAgeonBaselineVWF' — extend the ontology if this is a real PK parameter (source ['tbl2:row30:col1'])
- dropped PD-category row 'βVWDonIC50 (VWD 2N, 3)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl2:row31:col1'])
- dropped unlinked row (NIL): 'βVWD on RVWF (VWD 2A/B/M)' — extend the ontology if this is a real PK parameter (source ['tbl2:row32:col1'])
- dropped unlinked row (NIL): 'pVWF:Ag' — extend the ontology if this is a real PK parameter (source ['tbl2:row45:col1'])
- dropped unlinked row (NIL): 'aVWF:Ag' — extend the ontology if this is a real PK parameter (source ['tbl2:row46:col1'])
- dropped unlinked row (NIL): 'pVWF:Act' — extend the ontology if this is a real PK parameter (source ['tbl2:row47:col1'])
- dropped unlinked row (NIL): 'aFVIII:C' — extend the ontology if this is a real PK parameter (source ['tbl2:row48:col1'])
- dropped unlinked row (NIL): 'pFVIII:C' — extend the ontology if this is a real PK parameter (source ['tbl2:row49:col1'])
- dropped unlinked row (NIL): '(mL/h)' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row2:col2'])
- dropped unlinked row (NIL): '(mL)' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row3:col2'])
- dropped unlinked row (NIL): '𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉 3 (IU/mL)' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row7:col2'])
- dropped duplicate Q22 ('𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉 (mL/h)', value '447') — already have one for this compound
- dropped duplicate Q61 ('𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉 (mL)', value '193') — already have one for this compound
- unit_dimension_mismatch: '𝑄𝑄𝑉𝑉𝑉𝑉𝑉𝑉 (mL)' → Q30 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: '𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉 (mL/h)' → Q61 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q61 ('𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉 (mL/h)', value '159') — already have one for this compound
- dropped unlinked row (NIL): '𝑉𝑉𝑉𝑉𝑉𝑉𝐹𝐹𝐹𝐹𝐹𝐹 (IU/mL)' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row12:col2'])
- dropped unlinked row (NIL): '𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝐹𝐹𝐹𝐹𝐹𝐹 (IU/mL) 2N,3' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row14:col2'])
- dropped PD-category row '𝐼𝐼𝐶𝐶50 Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Daniel_2026_table_S4:row15:col2'])
- dropped unlinked row (NIL): '𝜔𝜔𝐶𝐶𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row21:col2'])
- dropped unlinked row (NIL): '𝜔𝜔𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row23:col2'])
- dropped unlinked row (NIL): '𝜔𝜔𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝐵𝑉𝑉𝑉𝑉𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row24:col2'])
- dropped unlinked row (NIL): '𝐵𝐵𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row28:col2'])
- dropped unlinked row (NIL): '𝛽𝛽 𝑉𝑉𝑉𝑉𝑉𝑉𝑉𝑉' — extend the ontology if this is a real PK parameter (source ['Daniel_2026_table_S4:row30:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=von Willebrand factor
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- status held at route_to_review — not promoted
- population split: 'value' subgroup of Daniel_2026 (paper reports 4 populations: bauer et al (6), bukkems et al (7), value, will-pk)
- molar mass: none found for 'von_willebrand_factor' — its concentrations stay mass-only
- molar mass: none found for 'von Willebrand factor' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Schöning_2026's review values (primary lacked it)

**Extraction notes:**
- companion parameter table S4 transcribed (66 record(s))
- companion parameter table S5 transcribed (8 record(s))
- LLM selected parameter table(s) 2, S4, S5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['von willebrand factor', 'fviii', 'interconversion']] | [['vwf:ag', 'fviii:c', 'interconversion'], ['vwf:ag', 'vwf:act', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[clvwf o blood group]` |  | 157.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clvwf].rse_percent` |  | 17.3 | mismatch |
| `gpt-oss:120b` | `parameters[qqvvvvvv]` | 3290 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vvwf].rse_percent` |  | 7.9 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | von Willebrand factor | high-purity VWF concentrate | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | von Willebrand factor | VWF:Ag | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl2:row4:col1'] |
| C5_dimension_Q30 | fail | [length] ** 3 | mL | ['Daniel_2026_table_S4:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Schöning_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tbl2:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 74.2 | ['tbl2:row4:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0742 L/h | ['tbl2:row4:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.54 L | ['tbl2:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvon_willebrand_factor%5D%20VonWillebrandFactor_Daniel2026_value&body=Drug%3A%20von_willebrand_factor%0ARecord%3A%20VonWillebrandFactor_Daniel2026_value%0APaper%3A%20Daniel_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_von_willebrand_factor/VonWillebrandFactor_Daniel2026_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 20:06 UTC</sub>
