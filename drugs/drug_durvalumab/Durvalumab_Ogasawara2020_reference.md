<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/&quot;},{&quot;label&quot;:&quot;Ogasawara_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# durvalumab — `Durvalumab_Ogasawara2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Durvalumab’s blood clearance CLb is reported as −1.58, an implausible negative clearance that led to rejection.

<div class="pk-model-meta" hidden drug="durvalumab" model-id="Durvalumab_Ogasawara2020_reference" status="rejected" stale="false" population="patients with hematologic malignancies" measured-compound="durvalumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Ogasawara K, Newhall K, Maxwell SE, Dell'Aringa J, Komashko V, Kilavuz N et al. Population Pharmacokinetics of an Anti-PD-L1 Antibody, Durvalumab in Patients with Hematologic Malignancies. Clinical pharmacokinetics 59(2):217–227 (2020).
  ·  DOI: [10.1007/s40262-019-00804-x](https://doi.org/10.1007/s40262-019-00804-x)

## Population and dosing

**Population:** patients with hematologic malignancies · condition hematologic malignancies · age group adult · n = 267.

**Dosing:** 1500 mg, iv, multiple, every 672 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 4 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| TVCL, L/h | CL | 0.0107 | L/h | 3.1 |
| TVVc, L | V1 | 4.63 | L | 2.1 |
| TVQ, L/h | Q | 0.0376 | L/h | 11.6 |
| TVVp, L | V2 | 2.68 | L | 6.3 |
| ALB on CLb | CLb | -1.58 |  | 7.1 |
| theta_q319_wt | theta_q319_wt | 0.581 |  | 15.5 |
| theta_clb_sex | theta_clb_sex | 0.791 |  | 4.2 |
| theta_q319_wt | theta_q319_wt | 0.451 |  | 18.9 |
| theta_v1_sex | theta_v1_sex | 0.790 |  | 4.2 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.522). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Durvalumab’s blood clearance CLb is reported as −1.58, an implausible negative clearance that led to rejection.**

The record identifies CLb as blood clearance, the proportionality factor relating drug concentration to elimination rate, and gives it the value −1.58. By contrast, total clearance is listed as 0.0107 L/h. Extracted — durvalumab: CL 0.0107 L/h, V1 4.63 L, Q 0.0376 L/h, V2 2.68 L, CLb -1.58.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of alb on clb: this record has -1.58, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| TVCL, L/h | `Q22` · CL | 0.0107 | L/h | 2.972e-09 | m3/s | l/h | 3.1 | tv_prefix (0.95) | Tab3:row2:col1 |
| TVVc, L | `Q63` · V1 | 4.63 | L | 0.00463 | m3 | l | 2.1 | tv_prefix (0.95) | Tab3:row3:col1 |
| TVQ, L/h | `Q30` · Q | 0.0376 | L/h | 1.044e-08 | m3/s | l/h | 11.6 | tv_prefix (0.95) | Tab3:row4:col1 |
| TVVp, L | `Q64` · V2 | 2.68 | L | 0.00268 | m3 | l | 6.3 | tv_prefix (0.95) | Tab3:row5:col1 |
| ALB on CLb | `Q23` · CLb | -1.58 |  |  |  |  | 7.1 | llm_confirmed (0.6) | Tab3:row6:col1 |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.581 |  |  |  |  | 15.5 |  | Tab3:row10:col1 |
| theta_clb_sex | `Q900` · theta_clb_sex | 0.791 |  |  |  |  | 4.2 |  | Tab3:row11:col1 |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.451 |  |  |  |  | 18.9 |  | Tab3:row14:col1 |
| theta_v1_sex | `Q900` · theta_v1_sex | 0.790 |  |  |  |  | 4.2 |  | Tab3:row15:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `qwen3.8-27b` | `parameters[alb on clb]` | -1.58 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[igg on clb]` |  | 0.258 | only_one_extracted |
| `qwen3.8-27b` | `parameters[sex_on_clb]` |  | 0.791 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_clb_sex]` | 0.791 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_clb_wt]` |  | 0.581 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_wt]` | 0.581 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q40_sex]` |  | 0.790 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q61_wt]` |  | 0.451 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_sex]` | 0.790 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvcl].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[tvvc].covariate_forms` | ['linear_fractional'] | [] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q23 | fail |  | -1.58 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab3:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab3:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row5:col1'] |
| C5_unit_missing_Q23 | fail | [length] ** 3 / [time] |  | ['Tab3:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0107 | ['Tab3:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0107 L/h | ['Tab3:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.63 L | ['Tab3:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.68 L | ['Tab3:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdurvalumab%5D%20Durvalumab_Ogasawara2020_reference&body=Drug%3A%20durvalumab%0ARecord%3A%20Durvalumab_Ogasawara2020_reference%0APaper%3A%20Ogasawara_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_durvalumab/Durvalumab_Ogasawara2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:18 UTC</sub>
