<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/&quot;},{&quot;label&quot;:&quot;Ogasawara_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# durvalumab — `Durvalumab_Ogasawara2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.522). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Durvalumab’s blood clearance CLb is reported as −1.58, an implausible negative clearance that led to rejection.**

The record identifies CLb as blood clearance, the proportionality factor relating drug concentration to elimination rate, and gives it the value −1.58. By contrast, total clearance is listed as 0.0107 L/h. Extracted — durvalumab: CL 0.0107 L/h, V1 4.63 L, Q 0.0376 L/h, V2 2.68 L, CLb -1.58.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of alb on clb: this record has -1.58, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Ogasawara K et al., Population Pharmacokinetics of an Anti-…, Clinical pharmacokinetics (2020)
  ·  DOI: [10.1007/s40262-019-00804-x](https://doi.org/10.1007/s40262-019-00804-x)

## Model component
<dbs-pgx drug="durvalumab" model-id="Durvalumab_Ogasawara2020_reference" status="rejected" stale="false" population="patients with hematologic malignancies" measured-compound="durvalumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL, L/h | `Q22` · CL | 0.0107 | L/h | 2.972222222222222e-09 | [l] / [h] | 3.1 | tv_prefix (0.95) | Tab3:row2:col1 | — | not captured |
| TVVc, L | `Q63` · V1 | 4.63 | L | 0.00463 | [l] | 2.1 | tv_prefix (0.95) | Tab3:row3:col1 | — | not captured |
| TVQ, L/h | `Q30` · Q | 0.0376 | L/h | 1.0444444444444444e-08 | [l] / [h] | 11.6 | tv_prefix (0.95) | Tab3:row4:col1 | — | not captured |
| TVVp, L | `Q64` · V2 | 2.68 | L | 0.00268 | [l] | 6.3 | tv_prefix (0.95) | Tab3:row5:col1 | — | not captured |
| ALB on CLb | `Q23` · CLb | -1.58 | not captured | not captured | not captured | 7.1 | llm_confirmed (0.6) | Tab3:row6:col1 | — | not captured |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.581 | not captured | not captured | not captured | 15.5 | not captured (not captured) | Tab3:row10:col1 | — | not captured |
| theta_clb_sex | `Q900` · theta_clb_sex | 0.791 | not captured | not captured | not captured | 4.2 | not captured (not captured) | Tab3:row11:col1 | — | not captured |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.451 | not captured | not captured | not captured | 18.9 | not captured (not captured) | Tab3:row14:col1 | — | not captured |
| theta_v1_sex | `Q900` · theta_v1_sex | 0.790 | not captured | not captured | not captured | 4.2 | not captured (not captured) | Tab3:row15:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL, CV%' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Vc, CV%' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'Log additive error' routed out of structural estimates ('Residual variability')
- dropped duplicate Q23 ('IgG on CLb', value '0.258') — already have one for this compound
- dropped duplicate Q23 ('sPD-L1 on CLb', value '0.0617') — already have one for this compound
- dropped duplicate Q23 ('LDH on CLb', value '0.115') — already have one for this compound
- dropped duplicate Q23 ('MDS/AML on CLb', value '1.26') — already have one for this compound
- dropped duplicate Q63 ('ALB on Vcc', value '-0.566') — already have one for this compound
- dropped duplicate Q63 ('MM on Vcc', value '0.820') — already have one for this compound
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number -1.58 (source ['Tab3:footnote', 'Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.258 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 0.0617 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.115 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 0.581 (source ['Tab3:footnote', 'Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.791 (source ['Tab3:footnote', 'Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1.26 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.82 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ALB on CLb' — the LLM proposed 'unitless', whose dimension does not fit Q23; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=durvalumab
- molar mass: none found for 'durvalumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab3:row2:col2 = '0.0107 (0.0100–0.0113)'
- unparsed cell Tab3:row3:col2 = '4.62 (4.43–4.84)'
- unparsed cell Tab3:row4:col2 = '0.0375 (0.0298–0.0468)'
- unparsed cell Tab3:row5:col2 = '2.69 (2.43–2.98)'
- unparsed cell Tab3:row6:col2 = '−1.58 (−1.81 to −1.36)'
- unparsed cell Tab3:row7:col2 = '0.258 (0.193–0.317)'
- unparsed cell Tab3:row8:col2 = '0.0597 (0.0198–0.116)'
- unparsed cell Tab3:row9:col2 = '0.117 (0.0423–0.199)'
- unparsed cell Tab3:row10:col2 = '0.581 (0.385–0.766)'
- unparsed cell Tab3:row11:col2 = '0.789 (0.724–0.857)'
- unparsed cell Tab3:row12:col2 = '1.26 (1.15–1.37)'
- unparsed cell Tab3:row13:col2 = '−0.561 (−0.800 to −0.363)'
- unparsed cell Tab3:row14:col2 = '0.448 (0.284–0.591)'
- unparsed cell Tab3:row15:col2 = '0.790 (0.726–0.859)'
- unparsed cell Tab3:row16:col2 = '0.822 (0.756–0.893)'
- unparsed cell Tab3:row19:col2 = '25.3 (21.6–29.5)'
- unparsed cell Tab3:row20:col2 = '24.5 (22.1–26.8)'
- unparsed cell Tab3:row22:col2 = '0.197 (0.179–0.215)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.522 (12/23 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[alb on clb]` | -1.58 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[igg on clb]` | not captured | 0.258 | only_one_extracted |
| `qwen3.8-27b` | `parameters[sex_on_clb]` | not captured | 0.791 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_clb_sex]` | 0.791 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_clb_wt]` | not captured | 0.581 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_wt]` | 0.581 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q40_sex]` | not captured | 0.790 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q61_wt]` | not captured | 0.451 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_sex]` | 0.790 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvcl].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[tvvc].covariate_forms` | ['linear_fractional'] | [] | mismatch |

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
| C2_base_sign_Q23 | fail | not captured | -1.58 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col1'] |
| C5_unit_missing_Q23 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0107 | not captured | not captured | ['Tab3:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0107 L/h | not captured | not captured | ['Tab3:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.63 L | not captured | not captured | ['Tab3:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.68 L | not captured | not captured | ['Tab3:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_durvalumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ogasawara_2020` / `Ogasawara_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:18 UTC</sub>
