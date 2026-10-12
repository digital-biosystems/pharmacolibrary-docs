<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;canagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/&quot;},{&quot;label&quot;:&quot;Yao_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canagliflozin_Yao2023_reference&quot;,&quot;label&quot;:&quot;Yao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Yao_2023_UGEc&quot;,&quot;label&quot;:&quot;Yao_2023 \u00b7 \u0394UGEc&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/pd_Yao_2023_UGEc.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# canagliflozin — `Canagliflozin_Yao2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.941). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[fed].parameter_id`: this record has Q40, the second reading Q43. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `curated_candidate` (reviewed 2026-09-28 14:36:24.141684+00:00) predates the upstream re-run (2026-10-04 22:24:09.384131+00:00). Current validate status: `extracted`.

## Citation
Yao X et al., A model-based meta analysis study of so…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934)

<div class="pk-model-meta" hidden drug="canagliflozin" model-id="Canagliflozin_Yao2023_reference" status="extracted" stale="true" population="healthy subjects and patients with T2DM" measured-compound="canagliflozin" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 4.25 | L/h | 1.1805555555555556e-06 | [l] / [h] | 6.10 | exact (1.0) | psp412934-tbl-0001:row2:col2, psp412934-tbl-0001:row2:col3, psp412934-tbl-0001:row11:col2, psp412934-tbl-0001:row11:col3, psp412934-tbl-0001:row18:col2, psp412934-tbl-0001:row18:col3 | — | 2.50 (None% RSE) |
| Vc (L) | `Q63` · V1 | 30.6 | L | 0.030600000000000002 | [l] | 9.50 | exact (1.0) | psp412934-tbl-0001:row3:col2, psp412934-tbl-0001:row3:col3, psp412934-tbl-0001:row12:col2, psp412934-tbl-0001:row12:col3, psp412934-tbl-0001:row19:col2, psp412934-tbl-0001:row19:col3 | — | 9.44 (None% RSE) |
| CLD | `Q30` · Q | 1.37 | L/h | 3.805555555555556e-07 | L/h | 13.5 | exact (1.0) | psp412934-tbl-0001:row4:col2, psp412934-tbl-0001:row4:col3, psp412934-tbl-0001:row13:col2, psp412934-tbl-0001:row13:col3, psp412934-tbl-0001:row20:col2, psp412934-tbl-0001:row20:col3 | — | 12.8 (None% RSE) |
| VT (L) | `Q61` · V | 28.3 | L | 0.028300000000000002 | [l] | 26.5 | llm (0.6) | psp412934-tbl-0001:row5:col2, psp412934-tbl-0001:row5:col3, psp412934-tbl-0001:row14:col2, psp412934-tbl-0001:row14:col3, psp412934-tbl-0001:row21:col2, psp412934-tbl-0001:row21:col3 | — | not captured |
| K t (h−1) | `Q47` · kel | 4.13 | h−1 | 0.0011472222222222222 | [1] / [h] | 6.90 | llm (0.6) | psp412934-tbl-0001:row6:col2, psp412934-tbl-0001:row6:col3, psp412934-tbl-0001:row15:col2, psp412934-tbl-0001:row15:col3, psp412934-tbl-0001:row22:col2, psp412934-tbl-0001:row22:col3 | — | not captured |
| Fed | `Q40` · Fab | 0.254 | not captured | not captured | not captured | 29.8 | llm (0.6) | psp412934-tbl-0001:row7:col2, psp412934-tbl-0001:row7:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k21']

**Interpretation flags:**
- table section iiv: 'CL (L/h)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Vc (L)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'VT (L)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K t (h−1)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'CLD' routed out of structural estimates ('IIV (%)')
- table section iiv: 'FPGbaseline (mg/dL)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Pfmax1 (mg/dL)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Pfmax3 (mg/dL)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Pfmax4 (mg/dL)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K fp (week−1)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'SLOPEfd (mg/dL2)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'HbA1cbaseline (%)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Phmax1 (%)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Phmax3 (%)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Phmax4 (%)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K hp (week−1)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'DIShp (%/100 weeks)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K out (week−1)' routed out of structural estimates ('IIV (%)')
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'Emax (g/(mg/dL))' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row1:col2', 'Yao_2023_table_2:row1:col3'])
- dropped PD-category row 'Dapa‐EC50 (ng/mL·h)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row2:col2', 'Yao_2023_table_2:row2:col3'])
- dropped PD-category row 'Cana‐EC50 (ng/mL·h)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row3:col2', 'Yao_2023_table_2:row3:col3'])
- dropped PD-category row 'Empa‐EC50 (ng/mL·h)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row4:col2', 'Yao_2023_table_2:row4:col3'])
- dropped unlinked row (NIL): 'FPGbaseline (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row8:col2', 'Yao_2023_table_2:row8:col3'])
- dropped unlinked row (NIL): 'Pfmax1 (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row9:col2', 'Yao_2023_table_2:row9:col3'])
- dropped unlinked row (NIL): 'Pfmax2 (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row10:col2', 'Yao_2023_table_2:row10:col3'])
- dropped unlinked row (NIL): 'Pfmax3 (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row11:col2', 'Yao_2023_table_2:row11:col3'])
- dropped unlinked row (NIL): 'Pfmax4 (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row12:col2', 'Yao_2023_table_2:row12:col3'])
- dropped unlinked row (NIL): 'K fp (week−1)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row13:col2', 'Yao_2023_table_2:row13:col3'])
- dropped unlinked row (NIL): 'DISfp (mg/dl/100 weeks)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row14:col2', 'Yao_2023_table_2:row14:col3'])
- dropped PD-category row 'SLOPEfd (mg/dL2)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row15:col2', 'Yao_2023_table_2:row15:col3'])
- dropped unlinked row (NIL): 'HbA1cbaseline (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row17:col2', 'Yao_2023_table_2:row17:col3'])
- dropped unlinked row (NIL): 'Phmax1 (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row18:col2', 'Yao_2023_table_2:row18:col3'])
- dropped unlinked row (NIL): 'Phmax2 (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row19:col2', 'Yao_2023_table_2:row19:col3'])
- dropped unlinked row (NIL): 'Phmax3 (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row20:col2', 'Yao_2023_table_2:row20:col3'])
- dropped unlinked row (NIL): 'Phmax4 (%)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row21:col2', 'Yao_2023_table_2:row21:col3'])
- dropped unlinked row (NIL): 'K hp (week−1)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row22:col2', 'Yao_2023_table_2:row22:col3'])
- dropped unlinked row (NIL): 'DIShp (%/100 weeks)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row23:col2', 'Yao_2023_table_2:row23:col3'])
- dropped PD-category row 'K out (week−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Yao_2023_table_2:row24:col2', 'Yao_2023_table_2:row24:col3'])
- dropped unlinked row (NIL): 'K in2 (%/week)' — extend the ontology if this is a real PK parameter (source ['Yao_2023_table_2:row25:col2', 'Yao_2023_table_2:row25:col3'])
- implicit units: 'CLD' → L/h (from the popPK convention: 'The parameter is an intercompartmental clearance (CLD). In population pharmacokinetic modeling, clearances are conventio')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=canagliflozin

**Extraction notes:**
- unparsed cell Yao_2023_table_2:row17:col1 = 'The estimated population HbA1c baseline level'
- unparsed cell Yao_2023_table_2:row18:col1 = 'Maximal placebo effects on HbA1c in naïve group'
- unparsed cell Yao_2023_table_2:row19:col1 = 'Maximal placebo effects on HbA1c in non‐naïve group'
- unparsed cell Yao_2023_table_2:row20:col1 = 'Maximal placebo effects on HbA1c in add‐on group'
- unparsed cell Yao_2023_table_2:row21:col1 = 'Maximal placebo effects on HbA1c in mixed group'
- unparsed cell Yao_2023_table_2:row22:col1 = 'HbA1c rate constant of placebo effect'
- unparsed cell Yao_2023_table_2:row23:col1 = 'Disease progression rate of HbA1c'
- unparsed cell Yao_2023_table_2:row24:col1 = 'Decrease rate of HbA1c'
- unparsed cell Yao_2023_table_2:row25:col1 = 'Increase rate of HbA1c independent of FPG'
- companion parameter table 2 transcribed (60 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[fed].parameter_id` | Q40 | Q43 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412934-tbl-0001:row2:col2', 'psp412934-tbl-0001:row2:col3', 'psp412934-tbl-0001:row11:col2', 'psp412934-tbl-0001:row11:col3', 'psp412934-tbl-0001:row18:col2', 'psp412934-tbl-0001:row18:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412934-tbl-0001:row4:col2', 'psp412934-tbl-0001:row4:col3', 'psp412934-tbl-0001:row13:col2', 'psp412934-tbl-0001:row13:col3', 'psp412934-tbl-0001:row20:col2', 'psp412934-tbl-0001:row20:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412934-tbl-0001:row6:col2', 'psp412934-tbl-0001:row6:col3', 'psp412934-tbl-0001:row15:col2', 'psp412934-tbl-0001:row15:col3', 'psp412934-tbl-0001:row22:col2', 'psp412934-tbl-0001:row22:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412934-tbl-0001:row5:col2', 'psp412934-tbl-0001:row5:col3', 'psp412934-tbl-0001:row14:col2', 'psp412934-tbl-0001:row14:col3', 'psp412934-tbl-0001:row21:col2', 'psp412934-tbl-0001:row21:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412934-tbl-0001:row3:col2', 'psp412934-tbl-0001:row3:col3', 'psp412934-tbl-0001:row12:col2', 'psp412934-tbl-0001:row12:col3', 'psp412934-tbl-0001:row19:col2', 'psp412934-tbl-0001:row19:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.25 | not captured | not captured | ['psp412934-tbl-0001:row2:col2', 'psp412934-tbl-0001:row2:col3', 'psp412934-tbl-0001:row11:col2', 'psp412934-tbl-0001:row11:col3', 'psp412934-tbl-0001:row18:col2', 'psp412934-tbl-0001:row18:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.25 L/h | not captured | not captured | ['psp412934-tbl-0001:row2:col2', 'psp412934-tbl-0001:row2:col3', 'psp412934-tbl-0001:row11:col2', 'psp412934-tbl-0001:row11:col3', 'psp412934-tbl-0001:row18:col2', 'psp412934-tbl-0001:row18:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 28.3 L | not captured | not captured | ['psp412934-tbl-0001:row5:col2', 'psp412934-tbl-0001:row5:col3', 'psp412934-tbl-0001:row14:col2', 'psp412934-tbl-0001:row14:col3', 'psp412934-tbl-0001:row21:col2', 'psp412934-tbl-0001:row21:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 30.6 L | not captured | not captured | ['psp412934-tbl-0001:row3:col2', 'psp412934-tbl-0001:row3:col3', 'psp412934-tbl-0001:row12:col2', 'psp412934-tbl-0001:row12:col3', 'psp412934-tbl-0001:row19:col2', 'psp412934-tbl-0001:row19:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=canagliflozin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_canagliflozin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yao_2023` / `Yao_2023::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_canagliflozin/models/modelica/Canagliflozin_Yao2023_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_canagliflozin/models/modelica/Canagliflozin_Yao2023_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_canagliflozin/models/modelica/Canagliflozin_Yao2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_modelica.zip" download>Canagliflozin_Yao2023_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_fmi.zip" download>Canagliflozin_Yao2023_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_matlab.zip" download>Canagliflozin_Yao2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_matlab_simbio.zip" download>Canagliflozin_Yao2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_sbml.zip" download>Canagliflozin_Yao2023_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_cellml.zip" download>Canagliflozin_Yao2023_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_2C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference.svg" alt="Canagliflozin_Yao2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Canagliflozin_Yao2023_reference_params.json` · controls `Canagliflozin_Yao2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 22:24 UTC</sub>
