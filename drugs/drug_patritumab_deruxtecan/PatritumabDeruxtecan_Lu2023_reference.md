<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;patritumab deruxtecan&quot;,&quot;href&quot;:&quot;drugs/drug_patritumab_deruxtecan/&quot;},{&quot;label&quot;:&quot;Lu_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# patritumab deruxtecan — `PatritumabDeruxtecan_Lu2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Vmax and Km), so that value has no SI equivalent. None of the extracted parameters is patritumab deruxtecan's own; they describe DXd-conjugated antibody and unconjugated DXd. Extracted — DXd-conjugated antibody: CL 0.342 L/d, V1 2.94 L, Vmax 4.35e+03 μg/d, Km 576 ng/mL, Q 0.443 L/d, V2 5.37 L; unconjugated DXd: kfm 0.03 1/h, CL 5.71 L/h, kel 0.18 1/h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `patritumab deruxtecan`, measured `DXd-conjugated antibody`.

## Citation
Lu Y et al., Population Pharmacokinetics of Patritum…, Journal of clinical pharmac… (2023)
  ·  DOI: [10.1002/jcph.2137](https://doi.org/10.1002/jcph.2137)

<div class="pk-model-meta" hidden drug="patritumab deruxtecan" model-id="PatritumabDeruxtecan_Lu2023_reference" status="rejected" stale="false" population="patients with HER3-expressing solid tumors" measured-compound="DXd-conjugated antibody" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 9 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLlin, L/d | `Q22` · CL | 0.342 | L/d | 3.958333333333333e-09 | [l] / [d] | not captured | llm (0.6) | jcph2137-tbl-0002:row1:col1 | — | not captured |
| Vc, L | `Q63` · V1 | 2.943 | L | 0.0029430000000000003 | [l] | not captured | exact (1.0) | jcph2137-tbl-0002:row2:col1 | — | 15.3 (None% RSE) |
| Vmax, μg/d | `Q66` · Vmax | 4352.2 | μg/d | not captured | [µg] / [d] | not captured | special_case (0.95) | jcph2137-tbl-0002:row3:col1 | — | not captured |
| Km, ng/mL | `Q1` · Km | 575.9 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | jcph2137-tbl-0002:row4:col1 | — | not captured |
| Q, L/d | `Q30` · Q | 0.443 | L/d | 5.127314814814815e-09 | [l] / [d] | not captured | exact (1.0) | jcph2137-tbl-0002:row5:col1 | — | not captured |
| Vp, L | `Q64` · V2 | 5.369 | L | 0.005369 | [l] | not captured | exact (1.0) | jcph2137-tbl-0002:row6:col1 | — | not captured |
| Krel, 1/h | `Q305` · kfm | 0.030 | 1/h | 8.333333333333334e-06 | [1] / [h] | not captured | exact (1.0) | Lu_2023_table_3:row0:col1 | — | not captured |
| CLDXd, L/h | `Q22` · CL | 5.713 | L/h | 1.5869444444444444e-06 | [l] / [h] | not captured | exact (1.0) | Lu_2023_table_3:row1:col1 | — | not captured |
| θ | `Q900` · equation variable | 0.648 | not captured | not captured | not captured | not captured | llm (0.6) | Lu_2023_table_3:row2:col1 | — | not captured |
| β, 1/h | `Q47` · kel | 0.180 | 1/h | 4.9999999999999996e-05 | [1] / [h] | not captured | exact (1.0) | Lu_2023_table_3:row3:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | -0.467 | not captured | not captured | not captured | not captured | not captured (not captured) | Lu_2023_table_3:row4:col1 | — | not captured |
| theta_cl_hepatic_impairment_mild_cldxd | `Q900` · theta_cl_hepatic_impairment_mild_cldxd | 0.706 | not captured | not captured | not captured | not captured | not captured (not captured) | Lu_2023_table_3:row5:col1 | — | not captured |
| theta_q25_hepatic_impairment_moderate_data_missing_cldxd | `Q900` · theta_q25_hepatic_impairment_moderate_data_missing_cldxd | 0.532 | not captured | not captured | not captured | not captured | not captured (not captured) | Lu_2023_table_3:row6:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLlin, L/d' routed out of structural estimates ('IIV of Mean, %')
- table section iiv: 'CLlin, L/d' routed out of structural estimates ('IIV of RSE, %')
- table section iiv: 'Vc, L' routed out of structural estimates ('IIV of Mean, %')
- table section iiv: 'Vc, L' routed out of structural estimates ('IIV of RSE, %')
- table section iiv: 'Krel, 1/h' routed out of structural estimates ('IIV of Mean, %')
- table section iiv: 'Krel, 1/h' routed out of structural estimates ('IIV of RSE, %')
- table section iiv: 'CLDXd, L/h' routed out of structural estimates ('IIV of Mean, %')
- table section iiv: 'CLDXd, L/h' routed out of structural estimates ('IIV of RSE, %')
- unit_dimension_mismatch: 'Vmax, μg/d' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q22 ('Weight–CLlin', value '0.911') — already have one for this compound
- dropped duplicate Q63 ('Weight–Vc', value '0.654') — already have one for this compound
- dropped unlinked row (NIL): 'Albumin level–CLlin' — extend the ontology if this is a real PK parameter (source ['jcph2137-tbl-0002:row9:col1'])
- dropped duplicate Q22 ('Female–CLlin', value '0.865') — already have one for this compound
- dropped duplicate Q22 ('Breast cancer–CLlin', value '0.811') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q25 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=DXd-conjugated antibody
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- row roles: 2 per-group rows of unconjugated DXd covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 14 linked by role; re-tagged patritumab deruxtecan→DXd-conjugated antibody ×17, patritumab deruxtecan→unconjugated DXd ×13
- molar mass: none found for 'patritumab deruxtecan' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'DXd-conjugated antibody', not patritumab_deruxtecan — the review values are the parent's

**Extraction notes:**
- table jcph2137-tbl-0002: unbound_uncertainty
- table jcph2137-tbl-0002: unparsed_numeric_cell
- table Lu_2023_table_3: unbound_uncertainty
- table Lu_2023_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (29 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['jcph2137-tbl-0002:row4:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph2137-tbl-0002:row1:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Lu_2023_table_3:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph2137-tbl-0002:row5:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Lu_2023_table_3:row0:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Lu_2023_table_3:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph2137-tbl-0002:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph2137-tbl-0002:row6:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | μg/d | not captured | not captured | ['jcph2137-tbl-0002:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.342 | not captured | not captured | ['jcph2137-tbl-0002:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0142 L/h | not captured | not captured | ['jcph2137-tbl-0002:row1:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.71 L/h | not captured | not captured | ['Lu_2023_table_3:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.94 L | not captured | not captured | ['jcph2137-tbl-0002:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.37 L | not captured | not captured | ['jcph2137-tbl-0002:row6:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_patritumab_deruxtecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lu_2023` / `Lu_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:51 UTC</sub>
