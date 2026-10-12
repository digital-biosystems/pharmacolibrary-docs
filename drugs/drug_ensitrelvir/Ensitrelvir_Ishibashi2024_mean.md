<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ensitrelvir&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/&quot;},{&quot;label&quot;:&quot;Ishibashi_2024 \u00b7 mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ensitrelvir_Ishibashi2024_mean&quot;,&quot;label&quot;:&quot;Ishibashi_2024_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ensitrelvir_Ishibashi2024_median&quot;,&quot;label&quot;:&quot;Ishibashi_2024_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ensitrelvir — `Ensitrelvir_Ishibashi2024_mean`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**The ensitrelvir model was held back because its simulated peak concentration, 0.00125, fails to reproduce the paper’s comparison value of 0.943.**

The model does not reproduce the paper’s peak concentration (Cmax): the comparison gives 0.943 for the paper and 0.00125 for the model, beyond the stated tolerance; the record separately lists Cmax as 48.9 μg/mL. The absorption rate constant ka and lag time Tlag were defaulted rather than estimated, and ka was used as an unsupported absorption assumption in a first-order depot model. The apparent parameterization assumes F=1 and Fm=1 with no molar correction, and a reported unit could not be converted to SI, leaving that parameter without an SI value. Extracted — ensitrelvir: CL/F 0.201 L/h, V/F 14.5 L, Cmax 48.9 μg/mL, AUCt 910 μg*h/mL, Ct 34.8 μg/mL, AUC 1.23e+03 μg*h/mL.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[auc_d1].parameter_id`: this record has Q19, the second reading Q88; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Ishibashi T et al., Population Pharmacokinetics of Ensitrel…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01446-4](https://doi.org/10.1007/s40262-024-01446-4)

<div class="pk-model-meta" hidden drug="ensitrelvir" model-id="Ensitrelvir_Ishibashi2024_mean" status="needs_review" stale="false" population="healthy participants and participants infected with SARS-CoV-2" measured-compound="ensitrelvir" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 0.201 | L/h | 5.583333333333334e-08 | [l] / [h] | not captured | exact (1.0) | Ishibashi_2024_table_4:row1:col2, Ishibashi_2024_table_4:row12:col2 | — | not captured |
| Vc/F (L) | `Q76` · V/F | 14.5 | L | 0.0145 | [l] | not captured | exact (1.0) | Ishibashi_2024_table_4:row2:col2, Ishibashi_2024_table_4:row13:col2 | — | not captured |
| Cmax_d1 (μg/mL) | `Q32` · Cmax | 48.9 | μg/mL | not captured | [µg] / [ml] | not captured | llm (0.6) | Ishibashi_2024_table_4:row3:col2, Ishibashi_2024_table_4:row14:col2 | — | not captured |
| AUC_d1 (μg*h/mL) | `Q19` · AUCt | 909.5 | μg*h/mL | not captured | [[h] · [µg]] / [ml] | not captured | llm (0.6) | Ishibashi_2024_table_4:row4:col2, Ishibashi_2024_table_4:row15:col2 | — | not captured |
| C24_d1 (μg/mL) | `Q75` · Ct | 34.8 | μg/mL | not captured | [µg] / [ml] | not captured | llm (0.6) | Ishibashi_2024_table_4:row5:col2, Ishibashi_2024_table_4:row16:col2 | — | not captured |
| AUC_d5 (μg*h/mL) | `Q88` · AUC | 1233 | μg*h/mL | not captured | [[h] · [µg]] / [ml] | not captured | llm (0.6) | Ishibashi_2024_table_4:row7:col2, Ishibashi_2024_table_4:row18:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax_d5 (μg/mL)', value '56.4') — already have one for this compound
- dropped duplicate Q75 ('C24_d5 (μg/mL)', value '41.8') — already have one for this compound
- dropped duplicate Q32 ('Entire Cmax (μg/mL)', value '56.4') — already have one for this compound
- dropped duplicate Q88 ('Entire AUC (μg*h/mL)', value '5433') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.594' (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.362' (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number '0.521' (source ['Tab3:footnote', 'Tab3:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ensitrelvir
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)
- population split: 'mean' subgroup of Ishibashi_2024 (paper reports 2 populations: mean, median)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab3:row2:col1 = '1.50 (1.25–1.75)'
- unparsed cell Tab3:row2:col3 = '1.50 (1.23–1.80)'
- unparsed cell Tab3:row2:col4 = '1.50 (1.23–1.80)'
- unparsed cell Tab3:row3:col1 = '0.211 (0.208–0.214)'
- unparsed cell Tab3:row3:col3 = '0.211 (0.207–0.214)'
- unparsed cell Tab3:row3:col4 = '0.211 (0.207–0.214)'
- unparsed cell Tab3:row4:col1 = '14.7 (13.9–15.5)'
- unparsed cell Tab3:row4:col3 = '14.8 (13.9–15.5)'
- unparsed cell Tab3:row4:col4 = '14.8 (13.9–15.5)'
- unparsed cell Tab3:row5:col1 = '0.539 (0.321–0.757)'
- unparsed cell Tab3:row5:col3 = '0.534 (0.331–0.823)'
- unparsed cell Tab3:row5:col4 = '0.534 (0.331–0.823)'
- unparsed cell Tab3:row6:col1 = '2.50 (1.80–3.20)'
- unparsed cell Tab3:row6:col3 = '2.49 (1.74–3.26)'
- unparsed cell Tab3:row6:col4 = '2.49 (1.74–3.26)'
- unparsed cell Tab3:row7:col1 = '0.594 (0.398–0.790)'
- unparsed cell Tab3:row7:col3 = '0.599 (0.447–1.00)'
- unparsed cell Tab3:row7:col4 = '0.599 (0.447–1.00)'
- unparsed cell Tab3:row8:col1 = '0.362 (0.262–0.462)'
- unparsed cell Tab3:row8:col3 = '0.367 (0.280–0.469)'
- unparsed cell Tab3:row8:col4 = '0.367 (0.280–0.469)'
- unparsed cell Tab3:row9:col1 = '0.521 (0.456–0.586)'
- unparsed cell Tab3:row9:col3 = '0.527 (0.459–0.585)'
- unparsed cell Tab3:row9:col4 = '0.527 (0.459–0.585)'
- unparsed cell Tab3:row10:col1 = '1.04 (0.960–1.12)'
- unparsed cell Tab3:row10:col3 = '1.04 (0.959–1.11)'
- unparsed cell Tab3:row10:col4 = '1.04 (0.959–1.11)'
- unparsed cell Tab3:row12:col1 = '72.9 (64.3–80.6)'
- unparsed cell Tab3:row12:col3 = '72.1 (64.4–80.4)'
- unparsed cell Tab3:row12:col4 = '72.1 (64.4–80.4)'
- unparsed cell Tab3:row13:col1 = '21.3 (19.7–22.8)'
- unparsed cell Tab3:row13:col3 = '21.3 (20.0–23.0)'
- unparsed cell Tab3:row13:col4 = '21.3 (20.0–23.0)'
- unparsed cell Tab3:row14:col3 = '0.0217 (0.0179–0.0263)'
- unparsed cell Tab3:row14:col4 = '0.0217 (0.0179–0.0263)'
- unparsed cell Tab3:row15:col1 = '14.7 (12.8–16.3)'
- unparsed cell Tab3:row15:col3 = '14.6 (12.7–16.5)'
- unparsed cell Tab3:row15:col4 = '14.6 (12.7–16.5)'
- unparsed cell Tab3:row17:col1 = '19.9 (18.5–21.3)'
- unparsed cell Tab3:row17:col3 = '19.8 (18.6–21.2)'
- unparsed cell Tab3:row17:col4 = '19.8 (18.6–21.2)'
- unparsed cell Tab3:row18:col1 = '0.0317 (0.0224–0.0410)'
- unparsed cell Tab3:row18:col3 = '0.0331 (0.00945–0.0570)'
- unparsed cell Tab3:row18:col4 = '0.0331 (0.00945–0.0570)'
- companion parameter table 4 transcribed (140 record(s))
- LLM selected parameter table(s) 4
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.643 (9/14 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[auc_d1].parameter_id` | Q19 | Q88 | mismatch |
| `qwen3.8-27b` | `parameters[auc_d5].parameter_id` | Q88 | Q19 | mismatch |
| `qwen3.8-27b` | `parameters[c24_d1]` | 34.8 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[c24_d5]` | not captured | 41.8 | only_one_extracted |
| `qwen3.8-27b` | `parameters[entire auc]` | not captured | 5433 | only_one_extracted |

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
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row4:col2', 'Ishibashi_2024_table_4:row15:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row1:col2', 'Ishibashi_2024_table_4:row12:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row3:col2', 'Ishibashi_2024_table_4:row14:col2'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row5:col2', 'Ishibashi_2024_table_4:row16:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row2:col2', 'Ishibashi_2024_table_4:row13:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row7:col2', 'Ishibashi_2024_table_4:row18:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.201 L/h | not captured | not captured | ['Ishibashi_2024_table_4:row1:col2', 'Ishibashi_2024_table_4:row12:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 14.5 L | not captured | not captured | ['Ishibashi_2024_table_4:row2:col2', 'Ishibashi_2024_table_4:row13:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=ensitrelvir) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.9430000000000001 | 0.0012452427678753763 | 0.0013 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0234 | 0.0012452427678753763 | 0.0532 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.005 | 0.0012452427678753763 | 0.249 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0213 | 0.0012452427678753763 | 0.0585 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0103 | 0.0012452427678753763 | 0.1209 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0229 | 0.0012452427678753763 | 0.0544 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.041 | 0.0012452427678753763 | 0.0304 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.925 | 0.0012452427678753763 | 0.0013 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.026600000000000002 | 0.0012452427678753763 | 0.0468 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00487 | 0.0012452427678753763 | 0.2557 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0183 | 0.0012452427678753763 | 0.068 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0143 | 0.0012452427678753763 | 0.0871 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0262 | 0.0012452427678753763 | 0.0475 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0468 | 0.0012452427678753763 | 0.0266 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.925 | 0.0012452427678753763 | 0.0013 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.026600000000000002 | 0.0012452427678753763 | 0.0468 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00488 | 0.0012452427678753763 | 0.2552 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0183 | 0.0012452427678753763 | 0.068 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0143 | 0.0012452427678753763 | 0.0871 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0262 | 0.0012452427678753763 | 0.0475 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0468 | 0.0012452427678753763 | 0.0266 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.9420000000000001 | 0.0012452427678753763 | 0.0013 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0489 | 0.0012452427678753763 | 0.0255 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0107 | 0.0012452427678753763 | 0.1164 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0219 | 0.0012452427678753763 | 0.0569 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0249 | 0.0012452427678753763 | 0.05 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.047700000000000006 | 0.0012452427678753763 | 0.0261 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0869 | 0.0012452427678753763 | 0.0143 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.92 | 0.0012452427678753763 | 0.0014 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0564 | 0.0012452427678753763 | 0.0221 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.011 | 0.0012452427678753763 | 0.1132 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.019600000000000003 | 0.0012452427678753763 | 0.0635 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0319 | 0.0012452427678753763 | 0.039 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0551 | 0.0012452427678753763 | 0.0226 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.10400000000000001 | 0.0012452427678753763 | 0.012 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.92 | 0.0012452427678753763 | 0.0014 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0564 | 0.0012452427678753763 | 0.0221 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.011 | 0.0012452427678753763 | 0.1132 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0195 | 0.0012452427678753763 | 0.0639 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0319 | 0.0012452427678753763 | 0.039 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0551 | 0.0012452427678753763 | 0.0226 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.10400000000000001 | 0.0012452427678753763 | 0.012 | μg/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 0.41 | 0.0012452427678753763 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.741 | 0.0012452427678753763 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 2.5 | 0.0012452427678753763 | not captured | unresolved concentration unit (exp 'h', sim 'kg/m3') |
| T1_cmax | reference | skipped | 6.0 | 0.0012452427678753763 | not captured | unresolved concentration unit (exp 'h', sim 'kg/m3') |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ensitrelvir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ishibashi_2024` / `Ishibashi_2024::mean`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ensitrelvir/models/modelica/Ensitrelvir_Ishibashi2024_mean.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ensitrelvir/models/modelica/Ensitrelvir_Ishibashi2024_mean.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ensitrelvir/models/modelica/Ensitrelvir_Ishibashi2024_mean.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean/Ensitrelvir_Ishibashi2024_mean_modelica.zip" download>Ensitrelvir_Ishibashi2024_mean_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean/Ensitrelvir_Ishibashi2024_mean_fmi.zip" download>Ensitrelvir_Ishibashi2024_mean_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean/Ensitrelvir_Ishibashi2024_mean_matlab.zip" download>Ensitrelvir_Ishibashi2024_mean_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean/Ensitrelvir_Ishibashi2024_mean_matlab_simbio.zip" download>Ensitrelvir_Ishibashi2024_mean_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean/Ensitrelvir_Ishibashi2024_mean_sbml.zip" download>Ensitrelvir_Ishibashi2024_mean_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean/Ensitrelvir_Ishibashi2024_mean_cellml.zip" download>Ensitrelvir_Ishibashi2024_mean_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean/Ensitrelvir_Ishibashi2024_mean.svg" alt="Ensitrelvir_Ishibashi2024_mean diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 20, 70, 125, 250, 375, 500, 750, 1000, 2000 mg.

<dbs-fmusim paramsurl="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean/Ensitrelvir_Ishibashi2024_mean_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean/Ensitrelvir_Ishibashi2024_mean_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Ensitrelvir_Ishibashi2024_mean_params.json` · controls `Ensitrelvir_Ishibashi2024_mean_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:23 UTC</sub>
