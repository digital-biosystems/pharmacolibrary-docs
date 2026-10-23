<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;roxadustat&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/&quot;},{&quot;label&quot;:&quot;Czock_2022 \u00b7 eskd&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Roxadustat_Takada2022v2_reference&quot;,&quot;label&quot;:&quot;Takada_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Takada2022v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# roxadustat — `Roxadustat_Czock2022_eskd`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:39 UTC) predates the latest extraction (2026-10-07 18:36 UTC); the status shown comes from the current checks. The model does not reproduce the paper's terminal half-life (paper 11.8, model 16.3); the model does not reproduce the paper's peak concentration (Cmax) (paper 0.01, model 0.00164) (+1 more).

<div class="pk-model-meta" hidden drug="roxadustat" model-id="Roxadustat_Czock2022_eskd" status="needs_review" stale="true" population="healthy volunteers, adults with chronic kidney disease" measured-compound="roxadustat" parameterization="apparent" topology="1C"></div>

## Citation
Czock D, Keller F. Clinical Pharmacokinetics and Pharmacodynamics of Roxadustat. Clinical pharmacokinetics 61(3):347–362 (2022).
  ·  DOI: [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x)

## Population and dosing

**Population:** healthy volunteers, adults with chronic kidney disease · condition healthy, chronic kidney disease · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (h·ng/mL per mg) | AUC | 774 | h·ng/mL per mg |
| Cmax (ng/mL per mg) | Cmax | 70 | ng/mL per mg |
| CL/F (L/h) | CL/F | 1.45 | L/h |
| Vz/F (L) | V/F | 34 | L |
| t½ or t½α and t½ß (h) | t1/2z | 17.2 | h |
| fu (%) | fu | 1.10 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 11.8, model 16.3); the model does not reproduce the paper's peak concentration (Cmax) (paper 0.01, model 0.00164) (+1 more).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUC, Cmax and fu), so that value has no SI equivalent. Extracted — roxadustat: AUC 774 h·ng/mL per mg, Cmax 70 ng/mL per mg, CL/F 1.45 L/h, V/F 34 L, t1/2z 17.2 h, fu 1.1 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has roxadustat, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (h·ng/mL per mg) | `Q88` · AUC | 774 | h·ng/mL per mg |  |  | (h·ng)/(ml·permg) | exact (1) | Czock_2022_table_1:row2:col5, Czock_2022_table_1:row2:col15, Czock_2022_table_1:row2:col16 |
| Cmax (ng/mL per mg) | `Q32` · Cmax | 70 | ng/mL per mg |  |  | ng/(ml·permg) | exact (1) | Czock_2022_table_1:row3:col5, Czock_2022_table_1:row3:col15, Czock_2022_table_1:row3:col16 |
| CL/F (L/h) | `Q27` · CL/F | 1.45 | L/h | 4.028e-07 | m3/s | l/h | exact (1) | Czock_2022_table_1:row6:col5, Czock_2022_table_1:row6:col15, Czock_2022_table_1:row6:col16 |
| Vz/F (L) | `Q76` · V/F | 34 | L | 0.034 | m3 | l | exact (1) | Czock_2022_table_1:row7:col5 |
| t½ or t½α and t½ß (h) | `Q57` · t1/2z | 17.2 | h | 6.192e+04 | s | h | llm (0.6) | Czock_2022_table_1:row8:col5, Czock_2022_table_1:row8:col6, Czock_2022_table_1:row8:col7, Czock_2022_table_1:row8:col15, Czock_2022_table_1:row8:col16 |
| fu (%) | `Q46` · fu | 1.10 | h |  |  | h | exact (1) | Czock_2022_table_1:row10:col5, Czock_2022_table_1:row10:col6, Czock_2022_table_1:row10:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Czock_2022_table_1:row1:col6', 'Czock_2022_table_1:row1:col7'])
- unit_dimension_unknown: 'h·ng/mL per mg' (AUC)
- unit_dimension_unknown: 'ng/mL per mg' (Cmax)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=roxadustat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'eskd' subgroup of Czock_2022 (paper reports 5 populations: eskd, healthy, liver cirrhosis cp b, parameter value, severe renal impairment)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row3:col5 = 'Yu [71]'
- unparsed cell Tab2:row5:col3 = 'Shibata [63]'
- unparsed cell Tab2:row6:col4 = 'Yu [71]'
- unparsed cell Tab2:row9:col5 = 'Yu [71]'
- unparsed cell Tab2:row12:col3 = 'Groenendaal [29]'
- unparsed cell Tab2:row14:col4 = 'Yu [71]'
- unparsed cell Tab2:row17:col4 = 'Yu [71]'
- unparsed cell Tab2:row19:col5 = 'Besarab [8]'
- unparsed cell Tab2:row21:col3 = 'Groenendaal [26]'
- unparsed cell Tab2:row22:col2 = 'Groenendaal [29]'
- unparsed cell Tab2:row23:col3 = 'Provenzano [56]'
- unparsed cell Tab2:row24:col5 = 'Portolés [52]'
- unparsed cell Tab2:row26:col5 = 'Graphical analysis, Fig. 3'
- unparsed cell Tab2:row31:col5 = 'Provenzano [56]'
- unparsed cell Tab2:row32:col3 = 'Groenendaal [26]'
- unparsed cell Tab2:row33:col2 = 'Groenendaal [26]'
- unparsed cell Tab2:row34:col3 = 'Provenzano [56]'
- unparsed cell Tab2:row35:col4 = 'Yu [71]'
- transposed table Czock_2022_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Czock_2022_table_1:row1:col1 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col2 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col3 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col4 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col5 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col11 = '200 mg, SS'
- unparsed cell Czock_2022_table_1:row1:col12 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col13 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col14 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col15 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col16 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col17 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col18 = '200 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col19 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col20 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col21 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col22 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col23 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row1:col24 = '100 mg, SD'
- unparsed cell Czock_2022_table_1:row2:col6 = '729 ± 381b'
- unparsed cell Czock_2022_table_1:row2:col7 = '629 ± 306b'
- unparsed cell Czock_2022_table_1:row3:col6 = '74 ± 27b'
- unparsed cell Czock_2022_table_1:row3:col7 = '59 ± 25b'
- unparsed cell Czock_2022_table_1:row6:col1 = '2.01a'
- unparsed cell Czock_2022_table_1:row6:col2 = '1.57a'
- unparsed cell Czock_2022_table_1:row6:col6 = '1.85 ± 1.01b'
- unparsed cell Czock_2022_table_1:row6:col7 = '2.48 ±2.52b'
- unparsed cell Czock_2022_table_1:row6:col9 = '1.36a'
- unparsed cell Czock_2022_table_1:row6:col11 = '2.26a'
- unparsed cell Czock_2022_table_1:row6:col12 = '2.65a'
- unparsed cell Czock_2022_table_1:row6:col13 = '2.52a'
- unparsed cell Czock_2022_table_1:row7:col1 = '37a'
- unparsed cell Czock_2022_table_1:row7:col2 = '33a'
- unparsed cell Czock_2022_table_1:row7:col6 = '53 ± 39b'
- unparsed cell Czock_2022_table_1:row7:col7 = '52 ± 45b'
- unparsed cell Czock_2022_table_1:row7:col8 = '61a'
- unparsed cell Czock_2022_table_1:row7:col9 = '72a'
- unparsed cell Czock_2022_table_1:row7:col10 = '26a'
- unparsed cell Czock_2022_table_1:row7:col11 = '31a'
- unparsed cell Czock_2022_table_1:row7:col12 = '49a'
- unparsed cell Czock_2022_table_1:row7:col13 = '48a'
- unparsed cell Czock_2022_table_1:row7:col14 = '30a'
- unparsed cell Czock_2022_table_1:row7:col15 = '36a'
- unparsed cell Czock_2022_table_1:row7:col16 = '34a'
- unparsed cell Czock_2022_table_1:row7:col17 = '130a'
- unparsed cell Czock_2022_table_1:row7:col18 = '65a'
- unparsed cell Czock_2022_table_1:row7:col19 = '22a'
- unparsed cell Czock_2022_table_1:row7:col20 = '22a'
- unparsed cell Czock_2022_table_1:row7:col21 = '22a'
- unparsed cell Czock_2022_table_1:row7:col22 = '22a'
- unparsed cell Czock_2022_table_1:row8:col1 = '12.6 (10.2–16.8)'
- unparsed cell Czock_2022_table_1:row8:col2 = '14.7 (10.0–30.1)'
- unparsed cell Czock_2022_table_1:row8:col8 = '7.5 and 38.5a'
- unparsed cell Czock_2022_table_1:row8:col9 = '6.3 and 36.7a'
- unparsed cell Czock_2022_table_1:row8:col10 = '8.3 and 19.8a'
- companion parameter table 1 transcribed (93 record(s))
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | roxadustat | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | roxadustat | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Czock_2022_table_1:row6:col5', 'Czock_2022_table_1:row6:col15', 'Czock_2022_table_1:row6:col16'] |
| C5_dimension_Q57 | pass | [time] |  | ['Czock_2022_table_1:row8:col5', 'Czock_2022_table_1:row8:col6', 'Czock_2022_table_1:row8:col7', 'Czock_2022_table_1:row8:col15', 'Czock_2022_table_1:row8:col16'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Czock_2022_table_1:row7:col5'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | ng/mL per mg | ['Czock_2022_table_1:row3:col5', 'Czock_2022_table_1:row3:col15', 'Czock_2022_table_1:row3:col16'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | h·ng/mL per mg | ['Czock_2022_table_1:row2:col5', 'Czock_2022_table_1:row2:col15', 'Czock_2022_table_1:row2:col16'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.45 L/h | ['Czock_2022_table_1:row6:col5', 'Czock_2022_table_1:row6:col15', 'Czock_2022_table_1:row6:col16'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 34 L | ['Czock_2022_table_1:row7:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=roxadustat) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.01 | 0.001637 | 0.1637 | µg/mL→SI vs simulated kg/m3 |
| T1_t_half_beta | reference | fail | 11.8 | 16.25 | 1.377 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12 | 16.25 | 1.354 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 13 | 16.25 | 1.25 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.46 | 16.25 | 4.697 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.74 | 16.25 | 21.96 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.1 | 16.25 | 14.77 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.1 | 16.25 | 2.006 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 17.5 | 16.25 | 0.9287 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.5 | 16.25 | 1.912 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 14.6 | 16.25 | 1.113 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 15.9 | 16.25 | 1.022 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 18.2 | 16.25 | 0.8929 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 14.7 | 16.25 | 1.105 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 12 | 16.25 | 1.354 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.5 | 16.25 | 1.912 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 12 | 16.25 | 1.354 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_eskd/Roxadustat_Czock2022_eskd_modelica.zip" download>Roxadustat_Czock2022_eskd_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_eskd/Roxadustat_Czock2022_eskd_fmi.zip" download>Roxadustat_Czock2022_eskd_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_eskd/Roxadustat_Czock2022_eskd_matlab.zip" download>Roxadustat_Czock2022_eskd_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_eskd/Roxadustat_Czock2022_eskd_matlab_simbio.zip" download>Roxadustat_Czock2022_eskd_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_eskd/Roxadustat_Czock2022_eskd_sbml.zip" download>Roxadustat_Czock2022_eskd_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_eskd/Roxadustat_Czock2022_eskd_cellml.zip" download>Roxadustat_Czock2022_eskd_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Czock D, Keller F. Clinical Pharmacokinetics and Pharmacodynamics of Roxadustat. Clinical pharmacokinetics 61(3):347–362 (2022). [doi:10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x)

**This record:** Pharmacolibrary v26.09, model `Roxadustat_Czock2022_eskd`. <https://pharmacolibrary.github.io/#/drugs/drug_roxadustat/Roxadustat_Czock2022_eskd>

```bibtex
@misc{pharmacolibrary_RoxadustatCzock2022eskd,
  title  = {{Pharmacolibrary model Roxadustat_Czock2022_eskd}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_roxadustat/Roxadustat_Czock2022_eskd},
  note   = {Parameters from doi:10.1007/s40262-021-01095-x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Broxadustat%5D%20Roxadustat_Czock2022_eskd&body=Drug%3A%20roxadustat%0ARecord%3A%20Roxadustat_Czock2022_eskd%0APaper%3A%20Czock_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_roxadustat/Roxadustat_Czock2022_eskd%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:36 UTC</sub>
