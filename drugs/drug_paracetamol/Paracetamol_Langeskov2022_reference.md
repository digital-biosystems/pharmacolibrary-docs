<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;paracetamol&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/&quot;},{&quot;label&quot;:&quot;Langeskov_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paracetamol_Anderson2015_reference&quot;,&quot;label&quot;:&quot;Anderson_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/Paracetamol_Anderson2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Anderson_2015_VAS&quot;,&quot;label&quot;:&quot;Anderson_2015 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Anderson_2015_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Gibb_2008_VAS&quot;,&quot;label&quot;:&quot;Gibb_2008 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Gibb_2008_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paracetamol — `Paracetamol_Langeskov2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.643), gpt-oss:120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paracetamol model record was held back because the builder assumed bioavailability F=1 (and Fm=1, no molar correction) for all apparent parameters (ka 9.4 1/h, V1/F 48.5 L, CL/F 25.9 L/h, V2/F 55.4 L, Q/F 199 L/h, tlag 0.16 h), an assumption judged not acceptable.**

The record for paracetamol in healthy obese adults (Langeskov_2022, two-compartment structure) carries only apparent parameters, and the model builder substituted F=1, Fm=1 and no molar correction to obtain them; this apparent assumption was flagged as not acceptable, so the record needs review. A second reader returned no values (null) for CL/F, Q/F, ka, tlag, V1/F and V2/F and marked the dose compound and primary analyte as unknown, so the disagreements on these fields are inconclusive. Extracted — paracetamol: kabs 9.4 1/h, V1/F 48.5 L, CL/F 25.9 L/h, V2/F 55.4 L, Q/F 199 L/h, tlag 0.16 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl2/f: this record has 199, the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:30:09.771258+00:00) predates the upstream re-run (2026-10-07 06:04:56.733321+00:00). Current validate status: `rejected`.

## Citation
Langeskov EK et al., Population pharmacokinetic of paracetam…, Pharmacology research & per… (2022)
  ·  DOI: [10.1002/prp2.962](https://doi.org/10.1002/prp2.962)

<div class="pk-model-meta" hidden drug="paracetamol" model-id="Paracetamol_Langeskov2022_reference" status="rejected" stale="true" population="healthy obese adults" measured-compound="paracetamol" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h−1) (Placebo) | `Q49` · kabs | 9.4 | 1/h | 0.0026111111111111114 | 1/h | not captured | space_fold (0.95) | prp2962-tbl-0003:row1:col1, Langeskov_2022_table_2:row0:col1 | — | 2.03 (None% RSE) |
| ktr (h−1) (Placebo) | `Q306` · ktr | 7.28 | 1/h | 0.002022222222222222 | 1/h | not captured | space_fold (0.95) | prp2962-tbl-0003:row3:col1 | — | 1.82 (None% RSE) |
| V1/F (L) a | `Q290` · V1/F | 1843 | Units | not captured | [units] | not captured | llm_confirmed (0.6) | prp2962-tbl-0003:row5:col1 | — | 0.625 (None% RSE) |
| Cl/F (L/h) a | `Q27` · CL/F | 620 | Units | not captured | [units] | not captured | llm_confirmed (0.6) | prp2962-tbl-0003:row6:col1 | — | 0.151 (None% RSE) |
| V2/F(L) a | `Q82` · V2/F | 4184 | Units | not captured | [units] | not captured | llm_confirmed (0.6) | prp2962-tbl-0003:row7:col1 | — | 0.111 (None% RSE) |
| Cl2/F (L/h) a | `Q80` · Q2/F | 873 | Units | not captured | [units] | not captured | llm (0.6) | prp2962-tbl-0003:row8:col1 | — | not captured |
| Cl2/F (L/h) | `Q69` · Q/F | 199 | L/h | 5.5277777777777783e-05 | [l] / [h] | not captured | special_case (0.95) | Langeskov_2022_table_2:row6:col1 | — | not captured |
| Tlag (h) | `Q83` · tlag | 0.16 | h | 576.0 | [h] | not captured | exact (1.0) | Langeskov_2022_table_2:row7:col1 | — | 0.0586 (None% RSE) |
| Θkacovariate | `Q900` · Θkacovariate | 0.525 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| Θktrcovariate | `Q900` · Θktrcovariate | 0.791 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 Ka' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 Ktr' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 V1/F' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 Cl/f' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 V2/F' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'Residual unexplained variability (Ceps)' routed out of structural estimates ('Between subject variability (ω2)')
- table section iiv: 'ω2 Ka' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 V1/F' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 Cl/f' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 V2/F' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'ω2 Tlag' routed out of structural estimates ('Between subject variablity (ω2)')
- table section iiv: 'Residual unexplained variability (Ceps)' routed out of structural estimates ('Between subject variablity (ω2)')
- unit_dimension_unknown: 'Placebo' (kabs)
- kept covariate coefficient Θkacovariate=0.525 (covariate kacovariate) — not an ontology parameter
- unit_dimension_unknown: 'Placebo' (ktr)
- kept covariate coefficient Θktrcovariate=0.791 (covariate ktrcovariate) — not an ontology parameter
- unit_dimension_mismatch: 'V1/F (L) a' → Q290 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Cl/F (L/h) a' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'V2/F(L) a' → Q82 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Cl2/F (L/h) a' → Q80 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q290 ('V1/F (L)', value '48.5') — already have one for this compound
- routed 'ΘV1/Fcovariate' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q27 ('Cl/F (L/h)', value '25.9') — already have one for this compound
- dropped duplicate Q82 ('V2/F (L)', value '55.4') — already have one for this compound
- implicit units: 'ka (h−1) (Placebo)' → 1/h (from the popPK convention: "The paper states that ka is the absorption rate constant and compares its value to '4.33 h-1' and '5.7 h-1' in the text,")
- implicit units: 'ktr (h−1) (Placebo)' → 1/h (from the popPK convention: "The paper states that ktr is a first-order transit rate constant and compares its value to '5.7 h-1' (ka) and implies si")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=paracetamol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell prp2962-tbl-0003:row1:col3 = '6.56 [3.29–12.1]'
- unparsed cell prp2962-tbl-0003:row2:col3 = '0.821 [0.649–0.925]'
- unparsed cell prp2962-tbl-0003:row3:col3 = '10.4 [4.48–44.0]'
- unparsed cell prp2962-tbl-0003:row4:col3 = '0.820 [0.629–0.972]'
- unparsed cell prp2962-tbl-0003:row5:col3 = '1709 [1253–2224]'
- unparsed cell prp2962-tbl-0003:row6:col3 = '617 [551–691]'
- unparsed cell prp2962-tbl-0003:row7:col3 = '4229 [3573–4918]'
- unparsed cell prp2962-tbl-0003:row8:col3 = '890 [668–1122]'
- unparsed cell prp2962-tbl-0003:row10:col2 = '17.6 [31]'
- unparsed cell prp2962-tbl-0003:row10:col3 = '2.21 [1.41–3.32]'
- unparsed cell prp2962-tbl-0003:row11:col2 = '35.8 [46]'
- unparsed cell prp2962-tbl-0003:row11:col3 = '1.82 [0.390–3.17]'
- unparsed cell prp2962-tbl-0003:row12:col2 = '23.3 [21]'
- unparsed cell prp2962-tbl-0003:row12:col3 = '0.517 [0.218–0.822]'
- unparsed cell prp2962-tbl-0003:row13:col2 = '22.4 [2.7]'
- unparsed cell prp2962-tbl-0003:row13:col3 = '0.140 [0.079–0.211]'
- unparsed cell prp2962-tbl-0003:row14:col2 = '22.1 [19]'
- unparsed cell prp2962-tbl-0003:row14:col3 = '0.110 [0.0655–0.172]'
- unparsed cell prp2962-tbl-0003:row15:col2 = '4.67 [13]'
- unparsed cell prp2962-tbl-0003:row15:col3 = '0.322 [0.292–0.353]'
- unparsed cell Langeskov_2022_table_2:row0:col3 = '11.8 [6.2–27.8]'
- unparsed cell Langeskov_2022_table_2:row1:col3 = '0.534 [0.298–0.745]'
- unparsed cell Langeskov_2022_table_2:row2:col3 = '50.8 [28.6–83.3]'
- unparsed cell Langeskov_2022_table_2:row3:col3 = '0.0312 [0.0178–0.0456]'
- unparsed cell Langeskov_2022_table_2:row4:col3 = '25.9 [24.1–27.7]'
- unparsed cell Langeskov_2022_table_2:row5:col3 = '53.6 [24.4–70.5]'
- unparsed cell Langeskov_2022_table_2:row6:col3 = '196 [83.2–271]'
- unparsed cell Langeskov_2022_table_2:row7:col3 = '0.17 [0.11–0.20]'
- unparsed cell Langeskov_2022_table_2:row9:col2 = '35.3 [15]'
- unparsed cell Langeskov_2022_table_2:row9:col3 = '0.586 [0.212–1.31]'
- unparsed cell Langeskov_2022_table_2:row10:col2 = '33.2 [16]'
- unparsed cell Langeskov_2022_table_2:row10:col3 = '0.280 [0.0672–0.713]'
- unparsed cell Langeskov_2022_table_2:row11:col2 = '27.4 [5.7]'
- unparsed cell Langeskov_2022_table_2:row11:col3 = '0.0626 [0.033–0.111]'
- unparsed cell Langeskov_2022_table_2:row12:col2 = '26.8 [28]'
- unparsed cell Langeskov_2022_table_2:row12:col3 = '0.0936 [0.0187–0.32]'
- unparsed cell Langeskov_2022_table_2:row13:col2 = '34.7 [34]'
- unparsed cell Langeskov_2022_table_2:row13:col3 = '0.0467 [0.00783–0.187]'
- unparsed cell Langeskov_2022_table_2:row14:col2 = '10.5[20]'
- unparsed cell Langeskov_2022_table_2:row14:col3 = '0.0934 [0.0731–0.114]'
- companion parameter table 2 transcribed (22 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.643 (9/14 fields) | 5 |
| `gpt-oss:120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl2/f]` | 199 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka (h-1)].value` | 9.4 | 5.72 | mismatch |
| `gpt-oss-120b` | `parameters[tlag]` | 0.16 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θkacovariate]` | 0.525 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θktrcovariate]` | 0.791 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 25.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 25.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl2/f]` | 199 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl2/f]` | not captured | 199 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka (h-1)]` | 9.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka (h-1)]` | not captured | 5.72 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ktr (h-1)]` | not captured | 7.28 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` | 0.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` | not captured | 0.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | 48.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | not captured | 48.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | 55.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | not captured | 55.4 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | paracetamol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | paracetamol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['prp2962-tbl-0003:row6:col1'] |
| C5_dimension_Q290 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['prp2962-tbl-0003:row5:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['prp2962-tbl-0003:row3:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp2962-tbl-0003:row1:col1', 'Langeskov_2022_table_2:row0:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Langeskov_2022_table_2:row6:col1'] |
| C5_dimension_Q80 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['prp2962-tbl-0003:row8:col1'] |
| C5_dimension_Q82 | fail | [luminosity] / [length] ** 2 | Units | not captured | not captured | ['prp2962-tbl-0003:row7:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Langeskov_2022_table_2:row7:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=paracetamol) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | apparent_assumption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Langeskov_2022` / `Langeskov_2022::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_paracetamol/models/modelica/Paracetamol_Langeskov2022_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_paracetamol/models/modelica/Paracetamol_Langeskov2022_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_paracetamol/models/modelica/Paracetamol_Langeskov2022_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:04 UTC</sub>
