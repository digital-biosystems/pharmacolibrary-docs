<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;polatuzumab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_polatuzumab_vedotin/&quot;},{&quot;label&quot;:&quot;Lu_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polatuzumab vedotin — `PolatuzumabVedotin_Lu2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.535). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Vmax, Km, Vmax and Css), so that value has no SI equivalent. None of the extracted parameters is polatuzumab vedotin's own; they describe acMMAE and unconjugated MMAE. Extracted — acMMAE: kel 0.0046 1/h, CL 0.00623 L/hour, V1 3.15 L, V2 3.98 L, Q 0.0145 L/hour, Vmax 0.0203 ng/mL/hour, Km 0.604 ng/mL; unconjugated MMAE: V1 82.2 L, CL 1.89 L/hour, Q 36.3 L/hour, V2 200 L, Vmax 0.0307 ng/mL/hour, Css 0.581 ng/mL, CLfm 3.7.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has polatuzumab_vedotin, the second reading unknown; it also differs on 19 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `polatuzumab_vedotin`, measured `acMMAE`.

## Citation
Lu D et al., Integrated Two-Analyte Population Pharm…, CPT: pharmacometrics & syst… (2020)
  ·  DOI: [10.1002/psp4.12482](https://doi.org/10.1002/psp4.12482)

<div class="pk-model-meta" hidden drug="polatuzumab vedotin" model-id="PolatuzumabVedotin_Lu2020_reference" status="rejected" stale="false" population="patients with non-Hodgkin lymphoma" measured-compound="acMMAE" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 14 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k des (1/hour) | `Q47` · kel | 0.0046 | 1/h | 1.2777777777777777e-06 | 1/h | 7.95 | llm (0.6) | psp412482-tbl-0001:row2:col3, psp412482-tbl-0001:row2:col4, psp412482-tbl-0001:row2:col5 | — | not captured |
| CLT (L/hour) | `Q22` · CL | 0.00623 | L/hour | 1.7305555555555556e-09 | [l] / [h] | 19.6 | exact (1.0) | psp412482-tbl-0001:row3:col3, psp412482-tbl-0001:row3:col4, psp412482-tbl-0001:row3:col5 | — | not captured |
| V 1 (L) | `Q63` · V1 | 3.15 | L | 0.00315 | [l] | 1.58 | exact (1.0) | psp412482-tbl-0001:row5:col3, psp412482-tbl-0001:row5:col4, psp412482-tbl-0001:row5:col5 | — | not captured |
| V 2 (L) | `Q64` · V2 | 3.98 | L | 0.00398 | [l] | 2.92 | exact (1.0) | psp412482-tbl-0001:row6:col3, psp412482-tbl-0001:row6:col4, psp412482-tbl-0001:row6:col5 | — | not captured |
| Q (L/hour) | `Q30` · Q | 0.0145 | L/hour | 4.027777777777778e-09 | [l] / [h] | 2.53 | exact (1.0) | psp412482-tbl-0001:row7:col3, psp412482-tbl-0001:row7:col4, psp412482-tbl-0001:row7:col5 | — | not captured |
| V max (ng/mL/hour) | `Q66` · Vmax | 0.0203 | ng/mL/hour | not captured | [ng] / [[h] · [ml]] | 14.3 | special_case (0.95) | psp412482-tbl-0001:row8:col3, psp412482-tbl-0001:row8:col4, psp412482-tbl-0001:row8:col5 | — | not captured |
| K M (ng/mL) | `Q1` · Km | 0.604 | ng/mL | not captured | [ng] / [ml] | 36.2 | space_fold (0.95) | psp412482-tbl-0001:row9:col3, psp412482-tbl-0001:row9:col4, psp412482-tbl-0001:row9:col5 | — | not captured |
| V MMAE (L) | `Q63` · V1 | 82.2 | L | 0.08220000000000001 | [l] | 8.15 | exact (1.0) | psp412482-tbl-0001:row14:col3, psp412482-tbl-0001:row14:col4, psp412482-tbl-0001:row14:col5 | — | not captured |
| CLMMAE (L/hour) | `Q22` · CL | 1.89 | L/hour | 5.25e-07 | [l] / [h] | 8.14 | exact (1.0) | psp412482-tbl-0001:row15:col3, psp412482-tbl-0001:row15:col4, psp412482-tbl-0001:row15:col5 | — | not captured |
| Q MMAE (L/hour) | `Q30` · Q | 36.3 | L/hour | 1.0083333333333332e-05 | [l] / [h] | 12.3 | exact (1.0) | psp412482-tbl-0001:row16:col3, psp412482-tbl-0001:row16:col4, psp412482-tbl-0001:row16:col5 | — | not captured |
| V 2,MMAE (L) | `Q64` · V2 | 200 | L | 0.2 | [l] | 6.13 | exact (1.0) | psp412482-tbl-0001:row17:col3, psp412482-tbl-0001:row17:col4, psp412482-tbl-0001:row17:col5 | — | not captured |
| V MAX,MMAE (ng/mL/hour) | `Q66` · Vmax | 0.0307 | ng/mL/hour | not captured | [ng] / [[h] · [ml]] | 9.17 | llm (0.6) | psp412482-tbl-0001:row18:col3, psp412482-tbl-0001:row18:col4, psp412482-tbl-0001:row18:col5 | — | not captured |
| K SS (ng/mL) | `Q34` · Css | 0.581 | ng/mL | not captured | [ng] / [ml] | 10.5 | llm (0.6) | psp412482-tbl-0001:row19:col3, psp412482-tbl-0001:row19:col4, psp412482-tbl-0001:row19:col5 | — | not captured |
| FRACCLT | `Q370` · CLfm | 3.70 | not captured | not captured | not captured | 3.11 | exact (1.0) | psp412482-tbl-0001:row20:col3, psp412482-tbl-0001:row20:col4, psp412482-tbl-0001:row20:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('CLINF (L/hour)', value '0.0344') — already have one for this compound
- unit_dimension_mismatch: 'V max (ng/mL/hour)' → Q66 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q22 ('CLINF,MAX', value '0.223') — already have one for this compound
- dropped unlinked row (NIL): 'T 50 (month)' — extend the ontology if this is a real PK parameter (source ['psp412482-tbl-0001:row11:col3', 'psp412482-tbl-0001:row11:col4', 'psp412482-tbl-0001:row11:col5'])
- dropped unlinked row (NIL): 'γ' — extend the ontology if this is a real PK parameter (source ['psp412482-tbl-0001:row12:col3', 'psp412482-tbl-0001:row12:col4', 'psp412482-tbl-0001:row12:col5'])
- unit_dimension_mismatch: 'V MAX,MMAE (ng/mL/hour)' → Q66 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q370 ('FRACMM', value '2.72') — already have one for this compound
- dropped unlinked row (NIL): 'ALPH (1/month)' — extend the ontology if this is a real PK parameter (source ['psp412482-tbl-0001:row22:col3', 'psp412482-tbl-0001:row22:col4', 'psp412482-tbl-0001:row22:col5'])
- dropped duplicate Q370 ('FRACT', value '0.139') — already have one for this compound
- implicit units: 'k des (1/hour)' → 1/h (from the paper text: 'The text states: "...k des is the rate constant of exponential decline, with an estimated half‐life of 6.28 days based o')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acMMAE
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 36 linked by role; re-tagged acMMAE→unconjugated MMAE ×30
- review gap-fill skipped: this record measures 'acMMAE', not polatuzumab_vedotin — the review values are the parent's

**Extraction notes:**
- unparsed cell psp412482-tbl-0001:row2:col1 = 'θ1'
- unparsed cell psp412482-tbl-0001:row3:col1 = 'θ2'
- unparsed cell psp412482-tbl-0001:row4:col1 = 'θ3'
- unparsed cell psp412482-tbl-0001:row5:col1 = 'θ4'
- unparsed cell psp412482-tbl-0001:row6:col1 = 'θ5'
- unparsed cell psp412482-tbl-0001:row7:col1 = 'θ6'
- unparsed cell psp412482-tbl-0001:row8:col1 = 'θ7'
- unparsed cell psp412482-tbl-0001:row9:col1 = 'θ8'
- unparsed cell psp412482-tbl-0001:row10:col1 = 'θ9'
- unparsed cell psp412482-tbl-0001:row11:col1 = 'θ10'
- unparsed cell psp412482-tbl-0001:row12:col1 = 'θ11'
- unparsed cell psp412482-tbl-0001:row14:col1 = 'θ12'
- unparsed cell psp412482-tbl-0001:row15:col1 = 'θ13'
- unparsed cell psp412482-tbl-0001:row16:col1 = 'θ14'
- unparsed cell psp412482-tbl-0001:row17:col1 = 'θ15'
- unparsed cell psp412482-tbl-0001:row18:col1 = 'θ16'
- unparsed cell psp412482-tbl-0001:row19:col1 = 'θ17'
- unparsed cell psp412482-tbl-0001:row20:col1 = 'θ18'
- unparsed cell psp412482-tbl-0001:row21:col1 = 'θ19'
- unparsed cell psp412482-tbl-0001:row22:col1 = 'θ20'
- unparsed cell psp412482-tbl-0001:row23:col1 = 'θ21'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.535 (23/43 fields) | 20 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['acmmae', 'unconjugated mmae', 'metabolism']] | [['polatuzumab vedotin', 'unconjugated mmae', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[alph]` | not captured | 0.167 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clinf]` | not captured | 0.0344 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clmmae].covariate_forms` | [] | ['linear_fractional', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[clt].covariate_forms` | [] | ['linear_fractional', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[fracclt].parameter_id` | Q370 | Q45 | mismatch |
| `gpt-oss-120b` | `parameters[fracecog]` | not captured | 0.905 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fracwt]` | not captured | -0.467 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k des,naïve]` | not captured | 3.38 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k des]` | 0.0046 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k des]` | not captured | 0.0046 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k ss]` | 0.581 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex_clinf]` | not captured | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_wt_power]` | not captured | 0.73 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_wt_v_1_v_2_wt_q_wt]` | not captured | 0.50 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 1].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[v max,mmae]` | 0.0307 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v mmae].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | polatuzumab_vedotin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | acMMAE | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row9:col3', 'psp412482-tbl-0001:row9:col4', 'psp412482-tbl-0001:row9:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row3:col3', 'psp412482-tbl-0001:row3:col4', 'psp412482-tbl-0001:row3:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row15:col3', 'psp412482-tbl-0001:row15:col4', 'psp412482-tbl-0001:row15:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row7:col3', 'psp412482-tbl-0001:row7:col4', 'psp412482-tbl-0001:row7:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row16:col3', 'psp412482-tbl-0001:row16:col4', 'psp412482-tbl-0001:row16:col5'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row19:col3', 'psp412482-tbl-0001:row19:col4', 'psp412482-tbl-0001:row19:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row2:col3', 'psp412482-tbl-0001:row2:col4', 'psp412482-tbl-0001:row2:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row5:col3', 'psp412482-tbl-0001:row5:col4', 'psp412482-tbl-0001:row5:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row14:col3', 'psp412482-tbl-0001:row14:col4', 'psp412482-tbl-0001:row14:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row6:col3', 'psp412482-tbl-0001:row6:col4', 'psp412482-tbl-0001:row6:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412482-tbl-0001:row17:col3', 'psp412482-tbl-0001:row17:col4', 'psp412482-tbl-0001:row17:col5'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 / [time] | ng/mL/hour | not captured | not captured | ['psp412482-tbl-0001:row8:col3', 'psp412482-tbl-0001:row8:col4', 'psp412482-tbl-0001:row8:col5'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 / [time] | ng/mL/hour | not captured | not captured | ['psp412482-tbl-0001:row18:col3', 'psp412482-tbl-0001:row18:col4', 'psp412482-tbl-0001:row18:col5'] |
| C5_unit_missing_Q370 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412482-tbl-0001:row20:col3', 'psp412482-tbl-0001:row20:col4', 'psp412482-tbl-0001:row20:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.00623 | not captured | not captured | ['psp412482-tbl-0001:row3:col3', 'psp412482-tbl-0001:row3:col4', 'psp412482-tbl-0001:row3:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00623 L/h | not captured | not captured | ['psp412482-tbl-0001:row3:col3', 'psp412482-tbl-0001:row3:col4', 'psp412482-tbl-0001:row3:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.89 L/h | not captured | not captured | ['psp412482-tbl-0001:row15:col3', 'psp412482-tbl-0001:row15:col4', 'psp412482-tbl-0001:row15:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.15 L | not captured | not captured | ['psp412482-tbl-0001:row5:col3', 'psp412482-tbl-0001:row5:col4', 'psp412482-tbl-0001:row5:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 82.2 L | not captured | not captured | ['psp412482-tbl-0001:row14:col3', 'psp412482-tbl-0001:row14:col4', 'psp412482-tbl-0001:row14:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.98 L | not captured | not captured | ['psp412482-tbl-0001:row6:col3', 'psp412482-tbl-0001:row6:col4', 'psp412482-tbl-0001:row6:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 200 L | not captured | not captured | ['psp412482-tbl-0001:row17:col3', 'psp412482-tbl-0001:row17:col4', 'psp412482-tbl-0001:row17:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_polatuzumab_vedotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lu_2020` / `Lu_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:11 UTC</sub>
