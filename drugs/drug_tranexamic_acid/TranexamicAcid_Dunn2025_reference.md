<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;tranexamic acid&quot;,&quot;href&quot;:&quot;drugs/drug_tranexamic_acid/&quot;},{&quot;label&quot;:&quot;Dunn_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TranexamicAcid_Li2021_reference&quot;,&quot;label&quot;:&quot;Li_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tranexamic_acid/TranexamicAcid_Li2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TranexamicAcid_Gilliot2022_reference&quot;,&quot;label&quot;:&quot;Gilliot_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tranexamic_acid/TranexamicAcid_Gilliot2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tranexamic acid — `TranexamicAcid_Dunn2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.467). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The tranexamic acid two-compartment model for pregnant individuals was rejected because a compartment has no path from the dose, making part of the structure unreachable.**

The record contains blood clearance CLb of 8.59, central volume V1 of 10.7, inter-compartmental blood flow Qb of 28.9, peripheral volume V2 of 15.0, and an oral absorption lag time of 0.16, with weight covariate effects of 0.89 on clearance and flow and 0.44 on the volumes. The rejection reason is an unreachable or orphan compartment or unlinked metabolite in the topology. A second reader also disagreed on several fields: it read an oral absorption rate constant of 0.18 and an oral bioavailability fraction of 0.56 where this record has no values, and it assigned linear-fractional covariate forms to the clearance and volume parameters where this record lists them differently or not at all. Extracted — tranexamic acid: CLb 8.59, V1 10.7, Qb 28.9, V2 15, tlag 0.16.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has tranexamic acid, the second reading tranexamic_acid; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:42:00.965338+00:00) predates the upstream re-run (2026-10-05 17:02:06.154350+00:00). Current validate status: `rejected`.

## Citation
Dunn A et al., Evaluating Tranexamic Acid Dosing Strat…, Journal of clinical pharmac… (2025)
  ·  DOI: [10.1002/jcph.70031](https://doi.org/10.1002/jcph.70031)

<div class="pk-model-meta" hidden drug="tranexamic acid" model-id="TranexamicAcid_Dunn2025_reference" status="rejected" stale="true" population="pregnant individuals" measured-compound="tranexamic acid" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL b | `Q23` · CLb | 8.59 | L/h | 2.3861111111111113e-06 | L/h | not captured | space_fold (0.95) | jcph70031-tbl-0002:row3:col1, jcph70031-tbl-0002:row3:col2 | — | not captured |
| Vc b | `Q63` · V1 | 10.7 | L | 0.0107 | L | not captured | llm_confirmed (0.6) | jcph70031-tbl-0002:row4:col1, jcph70031-tbl-0002:row4:col2 | — | not captured |
| Q b | `Q54` · Qb | 28.9 | L/h | 8.027777777777777e-06 | L/h | not captured | space_fold (0.95) | jcph70031-tbl-0002:row5:col1, jcph70031-tbl-0002:row5:col2 | — | not captured |
| Vp b | `Q64` · V2 | 15.0 | L | 0.015 | L | not captured | llm_confirmed (0.6) | jcph70031-tbl-0002:row6:col1, jcph70031-tbl-0002:row6:col2 | — | not captured |
| Tlagoral | `Q83` · tlag | 0.16 | h | 576.0 | h | not captured | llm (0.6) | jcph70031-tbl-0002:row10:col2 | — | not captured |
| weight_on_cl_and_q | `Q900` · weight_on_cl_and_q | 0.89 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph70031-tbl-0002:row12:col2 | — | not captured |
| weight_on_vc_and_vp | `Q900` · weight_on_vc_and_vp | 0.44 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph70031-tbl-0002:row13:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'σadditive' routed out of structural estimates ('Within‐subject variability (WSV)')
- table section iiv: 'σproportional' routed out of structural estimates ('Within‐subject variability (WSV)')
- dropped unlinked row (NIL): 'Kaoral' — extend the ontology if this is a real PK parameter (source ['jcph70031-tbl-0002:row7:col1', 'jcph70031-tbl-0002:row7:col2'])
- dropped unlinked row (NIL): 'KaIM' — extend the ontology if this is a real PK parameter (source ['jcph70031-tbl-0002:row8:col1', 'jcph70031-tbl-0002:row8:col2'])
- dropped unlinked row (NIL): 'Foral' — extend the ontology if this is a real PK parameter (source ['jcph70031-tbl-0002:row9:col2'])
- covariate level 'Weight on CL and Q' → Q900:weight_on_cl_and_q = 0.89 (linear_fractional on Q23)
- covariate level 'Weight on Vc and Vp' → Q900:weight_on_vc_and_vp = 0.44 (linear_fractional on Q23)
- implicit units: 'CL b' → L/h (from the paper text: "Table 2 footnote b states: 'CLi=8.59L/h·(WT80)0.89...'")
- implicit units: 'Vc b' → L (from the paper text: "Table 2 footnote b states: 'Vci=10.7L·(WT80)0.44...'")
- implicit units: 'Q b' → L/h (from the paper text: "Table 2 footnote b states: 'Qi=28.9L/h·(WT80)0.89'")
- implicit units: 'Vp b' → L (from the paper text: "Table 2 footnote b states: 'Vpi=15.0L·(WT80)0.44...'")
- implicit units: 'Tlagoral' → h (from the paper text: "Paper text states: '...while 0.16 h was the estimated typical oral absorption lag time (Tlagoral).'")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Vc b); Q64 (Vp b)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tranexamic acid
- model equation 'CLi = 8.59*(WT/8)^0.75' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- model equation 'Vci = 10.7*(WT/8)^0.75' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- model equation 'Qi = 28.9*(WT/8)^0.75' not bound — neither LHS nor base term 'WT' linked to an ontology parameter
- model equation 'Vpi = 15.0*(WT/8)^0.75' not bound — neither LHS nor base term 'WT' linked to an ontology parameter

**Extraction notes:**
- unparsed cell jcph70031-tbl-0002:row3:col3 = '8.55 [8.07, 9.08]'
- unparsed cell jcph70031-tbl-0002:row4:col3 = '10.6 [8.38, 13.9]'
- unparsed cell jcph70031-tbl-0002:row5:col3 = '28.1 [19.6, 47.2]'
- unparsed cell jcph70031-tbl-0002:row6:col3 = '15.1 [13.2, 16.9]'
- unparsed cell jcph70031-tbl-0002:row7:col3 = '0.18 [0.16, 0.32]'
- unparsed cell jcph70031-tbl-0002:row8:col3 = '2.36 [1.89, 3.10]'
- unparsed cell jcph70031-tbl-0002:row9:col3 = '0.54 [0.38, 0.73]'
- unparsed cell jcph70031-tbl-0002:row10:col3 = '0.18 [0.12, 0.31]'
- unparsed cell jcph70031-tbl-0002:row12:col3 = '0.88 [0.57, 1.18]'
- unparsed cell jcph70031-tbl-0002:row13:col3 = '0.45 [0.25, 0.73]'
- unparsed cell jcph70031-tbl-0002:row21:col3 = '0.69 [0.52, 0.88]'
- unparsed cell jcph70031-tbl-0002:row22:col3 = '26.7 [22.7, 29.5]'
- LLM selected parameter table(s) 2
- captured model equation CLi = 8.59*(WT/8)^0.75
- captured model equation Vci = 10.7*(WT/8)^0.75
- captured model equation Qi = 28.9*(WT/8)^0.75
- captured model equation Vpi = 15.0*(WT/8)^0.75

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.467 (7/15 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl b].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[kaoral]` | not captured | 0.18 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q22_weight]` | not captured | 0.89 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_weight]` | not captured | 0.44 | only_one_extracted |
| `gpt-oss:120b` | `parameters[weight_on_cl_and_q]` | 0.89 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[weight_on_vc_and_vp]` | 0.44 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | tranexamic acid | tranexamic_acid | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | tranexamic acid | tranexamic_acid | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70031-tbl-0002:row3:col1', 'jcph70031-tbl-0002:row3:col2'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70031-tbl-0002:row5:col1', 'jcph70031-tbl-0002:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70031-tbl-0002:row4:col1', 'jcph70031-tbl-0002:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70031-tbl-0002:row6:col1', 'jcph70031-tbl-0002:row6:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph70031-tbl-0002:row10:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.59 | not captured | not captured | ['jcph70031-tbl-0002:row3:col1', 'jcph70031-tbl-0002:row3:col2'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q23 | pass | clearance within physiological range | 8.59 L/h | not captured | not captured | ['jcph70031-tbl-0002:row3:col1', 'jcph70031-tbl-0002:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 10.7 L | not captured | not captured | ['jcph70031-tbl-0002:row4:col1', 'jcph70031-tbl-0002:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 15 L | not captured | not captured | ['jcph70031-tbl-0002:row6:col1', 'jcph70031-tbl-0002:row6:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tranexamic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dunn_2025` / `Dunn_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 17:02 UTC</sub>
