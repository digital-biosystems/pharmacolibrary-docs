<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;roxadustat&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/&quot;},{&quot;label&quot;:&quot;Czock_2022 \u00b7 severe_renal_impairment&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Roxadustat_Takada2022v2_reference&quot;,&quot;label&quot;:&quot;Takada_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Takada2022v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# roxadustat — `Roxadustat_Czock2022_severe_renal_impairment`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:40 UTC (Needs review), but the paper was screened again on 2026-10-07 18:36 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The roxadustat model was held back because its simulated terminal half-life (18.7 h) does not match the paper's reported values (11.8 and 13 h) and its Cmax (0.00167 vs 0.01 µg/mL) is off, with an invented absorption rate constant.

<div class="pk-model-meta" hidden drug="roxadustat" model-id="Roxadustat_Czock2022_severe_renal_impairment" status="needs_review" stale="true" population="healthy volunteers, adults with chronic kidney disease" measured-compound="roxadustat" parameterization="apparent" topology="1C"></div>

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
| AUC (h·ng/mL per mg) | AUC | 825 | h·ng/mL per mg |
| Cmax (ng/mL per mg) | Cmax | 67 | ng/mL per mg |
| CL/F (L/h) | CL/F | 1.26 | L/h |
| Vz/F (L) | V/F | 34 | L |
| t½ or t½α and t½ß (h) | t1/2z | 18.5 | h |
| fu (%) | fu | 1.06 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The roxadustat model was held back because its simulated terminal half-life (18.7 h) does not match the paper's reported values (11.8 and 13 h) and its Cmax (0.00167 vs 0.01 µg/mL) is off, with an invented absorption rate constant.**

Simulated as the paper dosed it, the model's terminal half-life for roxadustat is 18.7 h versus the paper's 11.8 h and 13 h, and its peak concentration is 0.00167 versus the reported 0.01 µg/mL — both outside tolerance. The absorption rate constant ka and lag time were not reported in the source, so library defaults were substituted, and the invented absorption was judged not acceptable. The model also assumes bioavailability F=1 and metabolite fraction Fm=1 with apparent (/F) parameterization and no molar correction, and the fu parameter carries a time unit (h) despite being a percentage. Extracted — roxadustat: AUC 825 h·ng/mL per mg, Cmax 67 ng/mL per mg, CL/F 1.26 L/h, V/F 34 L, t1/2z 18.5 h, fu 1.06 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has roxadustat, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (h·ng/mL per mg) | `Q88` · AUC | 825 | h·ng/mL per mg |  |  | (h·ng)/(ml·permg) | exact (1) | Czock_2022_table_1:row2:col4, Czock_2022_table_1:row2:col15, Czock_2022_table_1:row2:col16 |
| Cmax (ng/mL per mg) | `Q32` · Cmax | 67 | ng/mL per mg |  |  | ng/(ml·permg) | exact (1) | Czock_2022_table_1:row3:col4, Czock_2022_table_1:row3:col15, Czock_2022_table_1:row3:col16 |
| CL/F (L/h) | `Q27` · CL/F | 1.26 | L/h | 3.5e-07 | m3/s | l/h | exact (1) | Czock_2022_table_1:row6:col4, Czock_2022_table_1:row6:col15, Czock_2022_table_1:row6:col16 |
| Vz/F (L) | `Q76` · V/F | 34 | L | 0.034 | m3 | l | exact (1) | Czock_2022_table_1:row7:col4 |
| t½ or t½α and t½ß (h) | `Q57` · t1/2z | 18.5 | h | 6.66e+04 | s | h | llm (0.6) | Czock_2022_table_1:row8:col4, Czock_2022_table_1:row8:col7, Czock_2022_table_1:row8:col15, Czock_2022_table_1:row8:col16 |
| fu (%) | `Q46` · fu | 1.06 | h |  |  | h | exact (1) | Czock_2022_table_1:row10:col4, Czock_2022_table_1:row10:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Czock_2022_table_1:row1:col7'])
- unit_dimension_unknown: 'h·ng/mL per mg' (AUC)
- unit_dimension_unknown: 'ng/mL per mg' (Cmax)
- implicit units: 'Cmax (ng/mL per mg)' — the LLM proposed 'ng/mL/mg', whose dimension does not fit Q32; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=roxadustat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'severe renal impairment' subgroup of Czock_2022 (paper reports 5 populations: eskd, healthy, liver cirrhosis cp b, parameter value, severe renal impairment)
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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Czock_2022_table_1:row6:col4', 'Czock_2022_table_1:row6:col15', 'Czock_2022_table_1:row6:col16'] |
| C5_dimension_Q57 | pass | [time] |  | ['Czock_2022_table_1:row8:col4', 'Czock_2022_table_1:row8:col7', 'Czock_2022_table_1:row8:col15', 'Czock_2022_table_1:row8:col16'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Czock_2022_table_1:row7:col4'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | ng/mL per mg | ['Czock_2022_table_1:row3:col4', 'Czock_2022_table_1:row3:col15', 'Czock_2022_table_1:row3:col16'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | h·ng/mL per mg | ['Czock_2022_table_1:row2:col4', 'Czock_2022_table_1:row2:col15', 'Czock_2022_table_1:row2:col16'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.26 L/h | ['Czock_2022_table_1:row6:col4', 'Czock_2022_table_1:row6:col15', 'Czock_2022_table_1:row6:col16'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 34 L | ['Czock_2022_table_1:row7:col4'] |

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
| T1_cmax | reference | fail | 0.01 | 0.001672 | 0.1672 | µg/mL→SI vs simulated kg/m3 |
| T1_t_half_beta | reference | fail | 11.8 | 18.7 | 1.585 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12 | 18.7 | 1.558 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 13 | 18.7 | 1.439 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.46 | 18.7 | 5.405 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.74 | 18.7 | 25.27 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.1 | 18.7 | 17 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.1 | 18.7 | 2.309 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 17.5 | 18.7 | 1.069 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.5 | 18.7 | 2.2 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 14.6 | 18.7 | 1.281 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 15.9 | 18.7 | 1.176 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 18.2 | 18.7 | 1.028 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 14.7 | 18.7 | 1.272 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 12 | 18.7 | 1.558 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.5 | 18.7 | 2.2 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 12 | 18.7 | 1.558 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment/Roxadustat_Czock2022_severe_renal_impairment_modelica.zip" download>Roxadustat_Czock2022_severe_renal_impairment_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment/Roxadustat_Czock2022_severe_renal_impairment_fmi.zip" download>Roxadustat_Czock2022_severe_renal_impairment_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment/Roxadustat_Czock2022_severe_renal_impairment_matlab.zip" download>Roxadustat_Czock2022_severe_renal_impairment_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment/Roxadustat_Czock2022_severe_renal_impairment_matlab_simbio.zip" download>Roxadustat_Czock2022_severe_renal_impairment_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment/Roxadustat_Czock2022_severe_renal_impairment_sbml.zip" download>Roxadustat_Czock2022_severe_renal_impairment_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment/Roxadustat_Czock2022_severe_renal_impairment_cellml.zip" download>Roxadustat_Czock2022_severe_renal_impairment_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Czock D, Keller F. Clinical Pharmacokinetics and Pharmacodynamics of Roxadustat. Clinical pharmacokinetics 61(3):347–362 (2022). [doi:10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x)

**This record:** Pharmacolibrary v26.09, model `Roxadustat_Czock2022_severe_renal_impairment`. <https://pharmacolibrary.github.io/#/drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment>

```bibtex
@misc{pharmacolibrary_RoxadustatCzock2022severerenalimpairment,
  title  = {{Pharmacolibrary model Roxadustat_Czock2022_severe_renal_impairment}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment},
  note   = {Parameters from doi:10.1007/s40262-021-01095-x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Broxadustat%5D%20Roxadustat_Czock2022_severe_renal_impairment&body=Drug%3A%20roxadustat%0ARecord%3A%20Roxadustat_Czock2022_severe_renal_impairment%0APaper%3A%20Czock_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 18:36 UTC</sub>
