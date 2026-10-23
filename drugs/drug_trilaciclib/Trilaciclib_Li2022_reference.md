<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;trilaciclib&quot;,&quot;href&quot;:&quot;drugs/drug_trilaciclib/&quot;},{&quot;label&quot;:&quot;Li_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trilaciclib_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trilaciclib/Trilaciclib_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trilaciclib — `Trilaciclib_Li2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The trilaciclib–topotecan record was held back because the simulated topotecan profile fails to reproduce the paper's Cmax (2.44e-05 vs 9.99e-05), tmax (0.5 vs 3.84 h) and terminal half-life, and the absorption rate constant ka was defaulted rather than taken from the paper.

<div class="pk-model-meta" hidden drug="trilaciclib" model-id="Trilaciclib_Li2022_reference" status="needs_review" stale="false" population="patients with extensive-stage small-cell lung cancer" measured-compound="topotecan" parameterization="apparent" topology="1C"></div>

## Citation
Li C, Horton JK, Sale M, Curd L, Goti V, Tao W et al. Pharmacokinetic Drug-Drug Interaction Studies Between Trilaciclib and Midazolam, Metformin, Rifampin, Itraconazole, and Topotecan in Healthy Volunteers and Patients with Extensive-Stage Small-Cell Lung Cancer. Clinical drug investigation 42(8):679–692 (2022).
  ·  DOI: [10.1007/s40261-022-01179-x](https://doi.org/10.1007/s40261-022-01179-x)

## Population and dosing

**Population:** patients with extensive-stage small-cell lung cancer · condition extensive-stage small-cell lung cancer · age group adult · n = 114.

**Dosing:** 200, 240, 280 mg/m2, iv, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_trilaciclib/Trilaciclib_Li2022_reference/Trilaciclib_Li2022_reference.svg" alt="Trilaciclib_Li2022_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 77.4 | L/h |
| Vz/F (L) | V/F | 635 | L |
| CL (L/h) | CL | 175 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The trilaciclib–topotecan record was held back because the simulated topotecan profile fails to reproduce the paper's Cmax (2.44e-05 vs 9.99e-05), tmax (0.5 vs 3.84 h) and terminal half-life, and the absorption rate constant ka was defaulted rather than taken from the paper.**

Simulated as the paper dosed it, the model's peak concentration for topotecan differs from the reported value by more than the tolerance (paper 2.44e-05, model 9.99e-05), and the time of the peak also differs (paper 0.5, model 3.84 h); the terminal half-life likewise falls outside tolerance (paper 5.68, model 5.69). The absorption rate constant ka (and a lag time) was left at library defaults instead of estimates from this paper, which the record flags as not acceptable, and the absorption input was invented rather than reported. The parameterization is apparent (F=1, Fm=1, no molar correction) with first-order depot input, so clearance and volume are CL/F = 77.4 L/h and V/F = 635 L alongside a reported CL of 175 L/h. Extracted — topotecan: CL/F 77.4 L/h, V/F 635 L, CL 175 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has topotecan, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 77.4 | L/h | 2.15e-05 | m3/s | L/h | exact (1) | Li_2022:other_prose |
| Vz/F (L) | `Q76` · V/F | 635 | L | 0.635 | m3 | L | exact (1) | Li_2022:other_prose |
| CL (L/h) | `Q22` · CL | 175 | L/h | 4.861e-05 | m3/s | L/h | exact (1) | Li_2022:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Cmax (ng/mL) | Q32 | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped unlinked row (NIL): 'Midazolam alone (N = 25)' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col6', 'Tab2:row2:col7', 'Tab2:row2:col8'])
- dropped unlinked row (NIL): 'Trilaciclib + midazolam (N = 23)' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col1', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row3:col8'])
- dropped unlinked row (NIL): 'Metformin alone (N = 25)' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col1', 'Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5', 'Tab2:row5:col6', 'Tab2:row5:col7', 'Tab2:row5:col8'])
- dropped unlinked row (NIL): 'Trilaciclib and metformin (N = 23)' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col1', 'Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5', 'Tab2:row6:col6', 'Tab2:row6:col7', 'Tab2:row6:col8'])
- dropped unlinked row (NIL): 'Trilaciclib alone (N = 24)' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_3:row1:col1', 'Li_2022_table_3:row1:col3', 'Li_2022_table_3:row1:col4', 'Li_2022_table_3:row1:col5', 'Li_2022_table_3:row1:col6'])
- dropped unlinked row (NIL): 'Trilaciclib + rifampin (N = 24)' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_3:row2:col1', 'Li_2022_table_3:row2:col3', 'Li_2022_table_3:row2:col4', 'Li_2022_table_3:row2:col5', 'Li_2022_table_3:row2:col6'])
- dropped unlinked row (NIL): 'Trilaciclib alone (N = 18)' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_4:row1:col4', 'Li_2022_table_4:row1:col5', 'Li_2022_table_4:row1:col6'])
- dropped unlinked row (NIL): 'Trilaciclib + itraconazole (N = 17)' — extend the ontology if this is a real PK parameter (source ['Li_2022_table_4:row2:col1', 'Li_2022_table_4:row2:col3', 'Li_2022_table_4:row2:col4', 'Li_2022_table_4:row2:col5', 'Li_2022_table_4:row2:col6'])
- dropped value-less row: 'Ae'
- dropped value-less row: 'AUC0–48'
- dropped value-less row: 'AUC0–inf'
- dropped value-less row: 'AUC0–last'
- dropped value-less row: 'CI'
- dropped value-less row: 'CLR'
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'Cmax'
- dropped value-less row: 'CV'
- dropped value-less row: 'Fe'
- dropped value-less row: 'GMR'
- dropped value-less row: 't1/2'
- dropped value-less row: 'tmax'
- dropped value-less row: 'Vz/F'
- dropped value-less row: 'a'
- table mostly unlinked (8/9 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q27 ('CL/F (L/h)'=77.4) from results prose — parameter table was unreadable
- salvaged Q76 ('Vz/F (L)'=635) from results prose — parameter table was unreadable
- salvaged Q22 ('CL (L/h)'=175) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=topotecan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none of 1 PubChem candidate(s) is 'topotecan' (LLM) — left in mass units
- molar mass: none found for 'topotecan' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab2:row2:col2 = '0.50 (0.25–1.50)'
- unparsed cell Tab2:row3:col2 = '0.50 (0.25–2.00)'
- unparsed cell Tab2:row5:col2 = '2.50 (1.50–5.00)'
- unparsed cell Tab2:row6:col2 = '3.00 (2.50–4.00)'
- unparsed cell Li_2022_table_3:row1:col2 = '0.42 (0.25–0.50)'
- unparsed cell Li_2022_table_3:row2:col2 = '0.50 (0.25–0.50)'
- companion parameter table 3 transcribed (13 record(s))
- unparsed cell Li_2022_table_4:row1:col1 = '1769.8 (43.9)b'
- unparsed cell Li_2022_table_4:row1:col2 = '0.40 (0.25–0.50)b'
- unparsed cell Li_2022_table_4:row1:col3 = '3071.9 (16.3)b'
- unparsed cell Li_2022_table_4:row2:col2 = '0.48 (0.40–0.48)'
- companion parameter table 4 transcribed (11 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.273 (3/11 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl - trilaciclib alone]` |  | 175 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 77.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 77.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 175 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 635 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` |  | 635 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | topotecan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | topotecan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 5.68 | 5.687 | 1.001 | 0.25 | reported t½β |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['Tab2:row1:col2', 'Tab2:row1:col3', 'Tab2:row1:col4', 'Tab2:row1:col5', 'Li_2022_table_3:row0:col2', 'Li_2022_table_3:row0:col3', 'Li_2022_table_3:row0:col4', 'Li_2022_table_4:row0:col2', 'Li_2022_table_4:row0:col3', 'Li_2022_table_4:row0:col4'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 175 L/h |  |  | ['Li_2022:other_prose'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 77.4 L/h |  |  | ['Li_2022:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 635 L |  |  | ['Li_2022:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=topotecan) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 2.44e-05 | 9.99e-05 | 4.094 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.03e-05 | 9.99e-05 | 4.921 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 8.34e-07 | 9.99e-05 | 119.8 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.001647 | 9.99e-05 | 0.0607 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.002962 | 9.99e-05 | 0.0337 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.811e-06 | 9.99e-05 | 55.17 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.001603 | 9.99e-05 | 0.0623 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.001284 | 9.99e-05 | 0.0778 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 8.01e-07 | 9.99e-05 | 124.7 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00177 | 9.99e-05 | 0.0564 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.001275 | 9.99e-05 | 0.0784 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 0.711 | 9.99e-05 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_t_half_terminal | reference | pass | 5.68 | 5.689 | 1.002 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 6.17 | 5.689 | 0.9221 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 5.689 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 9.66 | 5.689 | 0.589 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 7.58 | 5.689 | 0.7506 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 5.689 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 10.1 | 5.689 | 0.5633 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 9.35 | 5.689 | 0.6085 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 9.115 | 5.689 | 0.6242 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 9.07 | 5.689 | 0.6273 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 5.689 |  | non-numeric value |
| T1_tmax | reference | fail | 0.5 | 3.836 | 7.671 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 3.836 | 7.671 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 3.836 |  | non-numeric value |
| T1_tmax | reference | fail | 2.5 | 3.836 | 1.534 | h→SI vs simulated h |
| T1_tmax | reference | fail | 3 | 3.836 | 1.279 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 3.836 |  | non-numeric value |
| T1_tmax | reference | fail | 0.42 | 3.836 | 9.133 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 3.836 | 7.671 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 3.836 |  | non-numeric value |
| T1_tmax | reference | fail | 0.4 | 3.836 | 9.589 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.48 | 3.836 | 7.991 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 3.836 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_trilaciclib/Trilaciclib_Li2022_reference/Trilaciclib_Li2022_reference_modelica.zip" download>Trilaciclib_Li2022_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_trilaciclib/Trilaciclib_Li2022_reference/Trilaciclib_Li2022_reference_fmi.zip" download>Trilaciclib_Li2022_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trilaciclib/Trilaciclib_Li2022_reference/Trilaciclib_Li2022_reference_matlab.zip" download>Trilaciclib_Li2022_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trilaciclib/Trilaciclib_Li2022_reference/Trilaciclib_Li2022_reference_matlab_simbio.zip" download>Trilaciclib_Li2022_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trilaciclib/Trilaciclib_Li2022_reference/Trilaciclib_Li2022_reference_sbml.zip" download>Trilaciclib_Li2022_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trilaciclib/Trilaciclib_Li2022_reference/Trilaciclib_Li2022_reference_cellml.zip" download>Trilaciclib_Li2022_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0001 | kg |
| input | model | `Cl` | 2.15e-05 | m3/s |
| input | model | `VdPerKg` | 0.009071 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Li C, Horton JK, Sale M, Curd L, Goti V, Tao W et al. Pharmacokinetic Drug-Drug Interaction Studies Between Trilaciclib and Midazolam, Metformin, Rifampin, Itraconazole, and Topotecan in Healthy Volunteers and Patients with Extensive-Stage Small-Cell Lung Cancer. Clinical drug investigation 42(8):679–692 (2022). [doi:10.1007/s40261-022-01179-x](https://doi.org/10.1007/s40261-022-01179-x)

**This record:** Pharmacolibrary v26.09, model `Trilaciclib_Li2022_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_trilaciclib/Trilaciclib_Li2022_reference>

```bibtex
@misc{pharmacolibrary_TrilaciclibLi2022reference,
  title  = {{Pharmacolibrary model Trilaciclib_Li2022_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_trilaciclib/Trilaciclib_Li2022_reference},
  note   = {Parameters from doi:10.1007/s40261-022-01179-x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_trilaciclib/Trilaciclib_Li2022_reference/Trilaciclib_Li2022_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_trilaciclib/Trilaciclib_Li2022_reference/Trilaciclib_Li2022_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Trilaciclib_Li2022_reference_params.json` · controls `Trilaciclib_Li2022_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrilaciclib%5D%20Trilaciclib_Li2022_reference&body=Drug%3A%20trilaciclib%0ARecord%3A%20Trilaciclib_Li2022_reference%0APaper%3A%20Li_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trilaciclib/Trilaciclib_Li2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 20:01 UTC</sub>
