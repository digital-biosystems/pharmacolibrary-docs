<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;roxadustat&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/&quot;},{&quot;label&quot;:&quot;Czock_2022 \u00b7 severe_renal_impairment&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Roxadustat_Takada2022v2_reference&quot;,&quot;label&quot;:&quot;Takada_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Takada2022v2_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# roxadustat — `Roxadustat_Czock2022_severe_renal_impairment`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-check: partial 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The roxadustat model was held back because its simulated terminal half-life (18.7 h) does not match the paper's reported values (11.8 and 13 h) and its Cmax (0.00167 vs 0.01 µg/mL) is off, with an invented absorption rate constant.**

Simulated as the paper dosed it, the model's terminal half-life for roxadustat is 18.7 h versus the paper's 11.8 h and 13 h, and its peak concentration is 0.00167 versus the reported 0.01 µg/mL — both outside tolerance. The absorption rate constant ka and lag time were not reported in the source, so library defaults were substituted, and the invented absorption was judged not acceptable. The model also assumes bioavailability F=1 and metabolite fraction Fm=1 with apparent (/F) parameterization and no molar correction, and the fu parameter carries a time unit (h) despite being a percentage. Extracted — roxadustat: AUC 825 h·ng/mL per mg, Cmax 67 ng/mL per mg, CL/F 1.26 L/h, V/F 34 L, t1/2z 18.5 h, fu 1.06 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of dose: this record has none, the second reading none. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:40:24.498015+00:00) predates the upstream re-run (2026-10-07 18:36:31.244126+00:00). Current validate status: `needs_review`.

## Citation
Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x)

<div class="pk-model-meta" hidden drug="roxadustat" model-id="Roxadustat_Czock2022_severe_renal_impairment" status="needs_review" stale="true" population="healthy volunteers, adults with chronic kidney disease" measured-compound="roxadustat" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC (h·ng/mL per mg) | `Q88` · AUC | 825 | h·ng/mL per mg | not captured | [[h] · [ng]] / [[ml] · [permg]] | not captured | exact (1.0) | Czock_2022_table_1:row2:col4, Czock_2022_table_1:row2:col15, Czock_2022_table_1:row2:col16 | — | not captured |
| Cmax (ng/mL per mg) | `Q32` · Cmax | 67 | ng/mL per mg | not captured | [ng] / [[ml] · [permg]] | not captured | exact (1.0) | Czock_2022_table_1:row3:col4, Czock_2022_table_1:row3:col15, Czock_2022_table_1:row3:col16 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 1.26 | L/h | 3.5000000000000004e-07 | [l] / [h] | not captured | exact (1.0) | Czock_2022_table_1:row6:col4, Czock_2022_table_1:row6:col15, Czock_2022_table_1:row6:col16 | — | not captured |
| Vz/F (L) | `Q76` · V/F | 34 | L | 0.034 | [l] | not captured | exact (1.0) | Czock_2022_table_1:row7:col4 | — | not captured |
| t½ or t½α and t½ß (h) | `Q57` · t1/2z | 18.5 | h | 66600.0 | [h] | not captured | llm (0.6) | Czock_2022_table_1:row8:col4, Czock_2022_table_1:row8:col7, Czock_2022_table_1:row8:col15, Czock_2022_table_1:row8:col16 | — | not captured |
| fu (%) | `Q46` · fu | 1.06 | h | not captured | [h] | not captured | exact (1.0) | Czock_2022_table_1:row10:col4, Czock_2022_table_1:row10:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at route_to_review — not promoted
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.909 (10/11 fields) | 1 |
| `gpt-oss:120b` | confirmed | 1.0 (10/10 fields) | none |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` | not captured | not captured | only_one_extracted |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Czock_2022_table_1:row6:col4', 'Czock_2022_table_1:row6:col15', 'Czock_2022_table_1:row6:col16'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Czock_2022_table_1:row8:col4', 'Czock_2022_table_1:row8:col7', 'Czock_2022_table_1:row8:col15', 'Czock_2022_table_1:row8:col16'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Czock_2022_table_1:row7:col4'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | ng/mL per mg | not captured | not captured | ['Czock_2022_table_1:row3:col4', 'Czock_2022_table_1:row3:col15', 'Czock_2022_table_1:row3:col16'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | h·ng/mL per mg | not captured | not captured | ['Czock_2022_table_1:row2:col4', 'Czock_2022_table_1:row2:col15', 'Czock_2022_table_1:row2:col16'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.26 L/h | not captured | not captured | ['Czock_2022_table_1:row6:col4', 'Czock_2022_table_1:row6:col15', 'Czock_2022_table_1:row6:col16'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 34 L | not captured | not captured | ['Czock_2022_table_1:row7:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=roxadustat) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.01 | 0.001671655068531977 | 0.1672 | µg/mL→SI vs simulated kg/m3 |
| T1_t_half_beta | reference | fail | 11.8 | 18.702582534965376 | 1.585 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 12.0 | 18.702582534965376 | 1.5585 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 13.0 | 18.702582534965376 | 1.4387 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.46 | 18.702582534965376 | 5.4054 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.74 | 18.702582534965376 | 25.2738 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.1 | 18.702582534965376 | 17.0023 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.1 | 18.702582534965376 | 2.309 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 17.5 | 18.702582534965376 | 1.0687 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.5 | 18.702582534965376 | 2.2003 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 14.6 | 18.702582534965376 | 1.281 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 15.9 | 18.702582534965376 | 1.1763 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 18.2 | 18.702582534965376 | 1.0276 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 14.7 | 18.702582534965376 | 1.2723 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 12.0 | 18.702582534965376 | 1.5585 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.5 | 18.702582534965376 | 2.2003 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 12.0 | 18.702582534965376 | 1.5585 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_roxadustat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Czock_2022` / `Czock_2022::severe_renal_impairment`)
- model: `../../../knowledgebase/drugs/drug_roxadustat/models/modelica/Roxadustat_Czock2022_severe_renal_impairment.mo`
- deviation: `../../../knowledgebase/drugs/drug_roxadustat/models/modelica/Roxadustat_Czock2022_severe_renal_impairment.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_roxadustat/models/modelica/Roxadustat_Czock2022_severe_renal_impairment.json`


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

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:36 UTC</sub>
