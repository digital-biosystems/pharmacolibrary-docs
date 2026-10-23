<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;canagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/&quot;},{&quot;label&quot;:&quot;Yao_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canagliflozin_Yao2023_reference&quot;,&quot;label&quot;:&quot;Yao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Yao_2023_UGEc&quot;,&quot;label&quot;:&quot;Yao_2023 \u00b7 \u0394UGEc&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/pd_Yao_2023_UGEc.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# canagliflozin — `Canagliflozin_Yao2023_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Reproduces paper, 2026-09-28 14:36 UTC) predates the latest extraction (2026-10-04 22:24 UTC); the status shown comes from the current checks.

<div class="pk-model-meta" hidden drug="canagliflozin" model-id="Canagliflozin_Yao2023_reference" status="extracted" stale="true" population="healthy subjects and patients with T2DM" measured-compound="canagliflozin" parameterization="mechanistic" topology="2C"></div>

## Citation
Yao X, Zhou J, Song L, Ren Y, Hu P, Liu D. A model-based meta analysis study of sodium glucose co-transporter-2 inhibitors. CPT: pharmacometrics & systems pharmacology 12(4):487–499 (2023).
  ·  DOI: [10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934)

## Population and dosing

**Population:** healthy subjects and patients with T2DM · age group adult.

## Model

**Structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference.svg" alt="Canagliflozin_Yao2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h) | CL | 4.25 | L/h | 6.10 | 2.50 (None% RSE) |
| Vc (L) | V1 | 30.6 | L | 9.50 | 9.44 (None% RSE) |
| CLD | Q | 1.37 | L/h | 13.5 | 12.8 (None% RSE) |
| VT (L) | V | 28.3 | L | 26.5 |  |
| K t (h−1) | kel | 4.13 | h−1 | 6.90 |  |
| Fed | Fab | 0.254 |  | 29.8 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.941). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[fed].parameter_id`: this record has Q40, the second reading Q43. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 4.25 | L/h | 1.181e-06 | m3/s | l/h | 6.10 | exact (1) | psp412934-tbl-0001:row2:col2, psp412934-tbl-0001:row2:col3, psp412934-tbl-0001:row11:col2, psp412934-tbl-0001:row11:col3, psp412934-tbl-0001:row18:col2, psp412934-tbl-0001:row18:col3 | 2.50 (None% RSE) |
| Vc (L) | `Q63` · V1 | 30.6 | L | 0.0306 | m3 | l | 9.50 | exact (1) | psp412934-tbl-0001:row3:col2, psp412934-tbl-0001:row3:col3, psp412934-tbl-0001:row12:col2, psp412934-tbl-0001:row12:col3, psp412934-tbl-0001:row19:col2, psp412934-tbl-0001:row19:col3 | 9.44 (None% RSE) |
| CLD | `Q30` · Q | 1.37 | L/h | 3.806e-07 | m3/s | L/h | 13.5 | exact (1) | psp412934-tbl-0001:row4:col2, psp412934-tbl-0001:row4:col3, psp412934-tbl-0001:row13:col2, psp412934-tbl-0001:row13:col3, psp412934-tbl-0001:row20:col2, psp412934-tbl-0001:row20:col3 | 12.8 (None% RSE) |
| VT (L) | `Q61` · V | 28.3 | L | 0.0283 | m3 | l | 26.5 | llm (0.6) | psp412934-tbl-0001:row5:col2, psp412934-tbl-0001:row5:col3, psp412934-tbl-0001:row14:col2, psp412934-tbl-0001:row14:col3, psp412934-tbl-0001:row21:col2, psp412934-tbl-0001:row21:col3 |  |
| K t (h−1) | `Q47` · kel | 4.13 | h−1 | 0.001147 | 1/s | 1/h | 6.90 | llm (0.6) | psp412934-tbl-0001:row6:col2, psp412934-tbl-0001:row6:col3, psp412934-tbl-0001:row15:col2, psp412934-tbl-0001:row15:col3, psp412934-tbl-0001:row22:col2, psp412934-tbl-0001:row22:col3 |  |
| Fed | `Q40` · Fab | 0.254 |  |  |  |  | 29.8 | llm (0.6) | psp412934-tbl-0001:row7:col2, psp412934-tbl-0001:row7:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412934-tbl-0001:row2:col2', 'psp412934-tbl-0001:row2:col3', 'psp412934-tbl-0001:row11:col2', 'psp412934-tbl-0001:row11:col3', 'psp412934-tbl-0001:row18:col2', 'psp412934-tbl-0001:row18:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412934-tbl-0001:row4:col2', 'psp412934-tbl-0001:row4:col3', 'psp412934-tbl-0001:row13:col2', 'psp412934-tbl-0001:row13:col3', 'psp412934-tbl-0001:row20:col2', 'psp412934-tbl-0001:row20:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['psp412934-tbl-0001:row6:col2', 'psp412934-tbl-0001:row6:col3', 'psp412934-tbl-0001:row15:col2', 'psp412934-tbl-0001:row15:col3', 'psp412934-tbl-0001:row22:col2', 'psp412934-tbl-0001:row22:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp412934-tbl-0001:row5:col2', 'psp412934-tbl-0001:row5:col3', 'psp412934-tbl-0001:row14:col2', 'psp412934-tbl-0001:row14:col3', 'psp412934-tbl-0001:row21:col2', 'psp412934-tbl-0001:row21:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412934-tbl-0001:row3:col2', 'psp412934-tbl-0001:row3:col3', 'psp412934-tbl-0001:row12:col2', 'psp412934-tbl-0001:row12:col3', 'psp412934-tbl-0001:row19:col2', 'psp412934-tbl-0001:row19:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.25 | ['psp412934-tbl-0001:row2:col2', 'psp412934-tbl-0001:row2:col3', 'psp412934-tbl-0001:row11:col2', 'psp412934-tbl-0001:row11:col3', 'psp412934-tbl-0001:row18:col2', 'psp412934-tbl-0001:row18:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.25 L/h | ['psp412934-tbl-0001:row2:col2', 'psp412934-tbl-0001:row2:col3', 'psp412934-tbl-0001:row11:col2', 'psp412934-tbl-0001:row11:col3', 'psp412934-tbl-0001:row18:col2', 'psp412934-tbl-0001:row18:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 28.3 L | ['psp412934-tbl-0001:row5:col2', 'psp412934-tbl-0001:row5:col3', 'psp412934-tbl-0001:row14:col2', 'psp412934-tbl-0001:row14:col3', 'psp412934-tbl-0001:row21:col2', 'psp412934-tbl-0001:row21:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 30.6 L | ['psp412934-tbl-0001:row3:col2', 'psp412934-tbl-0001:row3:col3', 'psp412934-tbl-0001:row12:col2', 'psp412934-tbl-0001:row12:col3', 'psp412934-tbl-0001:row19:col2', 'psp412934-tbl-0001:row19:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_output_variable | pass | C_central (measured=canagliflozin) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 3 scholar param(s) emitted or defaulted | 3 covered | all structural parameters accounted for |
| T3_topology_template | pass | 2C → PK_2C* | PK_2C | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.4445 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 1.181e-06 | m3/s |
| input | model | `VdPerKg` | 0.0004371 | m3/kg |
| input | model | `k12` | 1.244e-05 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_2C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Yao X, Zhou J, Song L, Ren Y, Hu P, Liu D. A model-based meta analysis study of sodium glucose co-transporter-2 inhibitors. CPT: pharmacometrics & systems pharmacology 12(4):487–499 (2023). [doi:10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934)

**This record:** Pharmacolibrary v26.09, model `Canagliflozin_Yao2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference>

```bibtex
@misc{pharmacolibrary_CanagliflozinYao2023reference,
  title  = {{Pharmacolibrary model Canagliflozin_Yao2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference},
  note   = {Parameters from doi:10.1002/psp4.12934},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference/Canagliflozin_Yao2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_2C` · parameters `Canagliflozin_Yao2023_reference_params.json` · controls `Canagliflozin_Yao2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcanagliflozin%5D%20Canagliflozin_Yao2023_reference&body=Drug%3A%20canagliflozin%0ARecord%3A%20Canagliflozin_Yao2023_reference%0APaper%3A%20Yao_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 22:24 UTC</sub>
