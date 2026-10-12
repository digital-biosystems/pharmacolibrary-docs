<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;olaparib&quot;,&quot;href&quot;:&quot;drugs/drug_olaparib/&quot;},{&quot;label&quot;:&quot;DeJongh_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Olaparib_Velev2021_reference&quot;,&quot;label&quot;:&quot;Velev_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_olaparib/Olaparib_Velev2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# olaparib — `Olaparib_DeJongh2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.696). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The metabolite AZD7648 is structurally disconnected from the olaparib central compartment, preventing any path from the dose to the metabolite.**

The model record links AZD7648 to olaparib via an interconversion parameter (CmD50) with an unknown parameter kind. Because the specific structural connection or rate constant defining this link is missing or invalid, AZD7648 remains an orphan metabolite. Consequently, the compartment representing AZD7648 is unreachable from the site of olaparib administration. Extracted — olaparib: fe 0.598, CL 0.251 L/h, V1 1.17 L, V2 2.66 L, kabs 2.77 1/h, Vmax 4.27, Km 3.73.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has AZD7648, olaparib, the second reading olaparib; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

> **Dose compound ≠ measured compound:** dosed `AZD7648, olaparib`, measured `olaparib`.

## Citation
DeJongh J et al., Defining preclinical efficacy with the…, Journal of pharmacokinetics… (2025)
  ·  DOI: [10.1007/s10928-025-09962-x](https://doi.org/10.1007/s10928-025-09962-x)

<div class="pk-model-meta" hidden drug="olaparib" model-id="Olaparib_DeJongh2025_reference" status="rejected" stale="false" population="SCID and Nude mice" measured-compound="olaparib" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absolute bio-avail | `Q44` · fe | 0.598 | not captured | not captured | not captured | 15.5 | llm (0.6) | Tab2:row2:col3, Tab2:row2:col4, Tab2:row2:col5, Tab2:row2:col6, Tab2:row2:col7 | — | not captured |
| Clearance | `Q22` · CL | 0.251 | L/h | 6.972222222222224e-08 | L/h | 7.69 | exact (1.0) | Tab2:row4:col3, Tab2:row4:col4, Tab2:row4:col5, Tab2:row4:col6, Tab2:row4:col7, DeJongh_2025_table_1:row2:col3, DeJongh_2025_table_1:row2:col4, DeJongh_2025_table_1:row2:col5, DeJongh_2025_table_1:row2:col6, DeJongh_2025_table_1:row2:col7 | — | not captured |
| Central distrib. vol | `Q63` · V1 | 1.17 | L | 0.00117 | L | 16.5 | llm (0.6) | Tab2:row5:col3, Tab2:row5:col4, Tab2:row5:col5, Tab2:row5:col6, Tab2:row5:col7 | — | not captured |
| Peripheral distrib. Vol. | `Q64` · V2 | 2.66 | L | 0.00266 | L | 13.3 | llm (0.6) | Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col5, Tab2:row7:col6, Tab2:row7:col7 | — | not captured |
| Abs. rate constant | `Q49` · kabs | 2.77 | 1/h | 0.0007694444444444445 | 1/h | 7.83 | llm (0.6) | DeJongh_2025_table_1:row1:col3, DeJongh_2025_table_1:row1:col4, DeJongh_2025_table_1:row1:col5, DeJongh_2025_table_1:row1:col6, DeJongh_2025_table_1:row1:col7 | — | not captured |
| Max. Elim. Rate | `Q66` · Vmax | 4.27 | not captured | not captured | not captured | 13.1 | llm (0.6) | DeJongh_2025_table_1:row3:col3, DeJongh_2025_table_1:row3:col4, DeJongh_2025_table_1:row3:col5, DeJongh_2025_table_1:row3:col6, DeJongh_2025_table_1:row3:col7 | — | not captured |
| Conc. at haf max.elim | `Q1` · Km | 3.73 | not captured | not captured | not captured | 8.32 | llm (0.6) | DeJongh_2025_table_1:row4:col3, DeJongh_2025_table_1:row4:col4, DeJongh_2025_table_1:row4:col5, DeJongh_2025_table_1:row4:col6, DeJongh_2025_table_1:row4:col7 | — | not captured |
| theta_cl_category | `Q900` · theta_cl_category | 82.5 | not captured | not captured | not captured | 19.7 | not captured (not captured) | Tab2:row8:col3, Tab2:row8:col4, Tab2:row8:col5, Tab2:row8:col6, Tab2:row8:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Om_1 (Vc)' routed out of structural estimates ('Random effect for inter-individual variability')
- table section iiv: 'Proportional residual error (variance)' routed out of structural estimates ('Random effect for inter-individual variability')
- table section iiv: 'F1 11,448 (Nude)*' routed out of structural estimates ('Random effect for inter-individual variability')
- table section iiv: 'F1 1734 (Nude)*' routed out of structural estimates ('Random effect for inter-individual variability')
- table section iiv: 'F1 1143 (Nude)*' routed out of structural estimates ('Random effect for inter-individual variability')
- table section iiv: 'F1 1721 (Nude)*' routed out of structural estimates ('Random effect for inter-individual variability')
- table section iiv: 'F1 1770 (SCID)*' routed out of structural estimates ('Random effect for inter-individual variability')
- table section iiv: 'F1 1816 (SCID)*' routed out of structural estimates ('Random effect for inter-individual variability')
- table section iiv: 'Om_1 (CL + Vmax)' routed out of structural estimates ('Random effects for inter-individual variability')
- table section iiv: 'Om_1 × 2' routed out of structural estimates ('Random effects for inter-individual variability')
- table section iiv: 'Om_2 (V)' routed out of structural estimates ('Random effects for inter-individual variability')
- table section iiv: 'Proportional Residual Error (variance)' routed out of structural estimates ('Random effects for inter-individual variability')
- table section iiv: 'F1 (relative to SCID mice)*' routed out of structural estimates ('Random effects for inter-individual variability')
- dropped duplicate Q22 ('Intercomp. clearance', value '0.932') — already have one for this compound
- dropped duplicate Q63 ('Central distrib vol', value '3.45') — already have one for this compound
- implicit units: 'Clearance' → L/h (from the popPK convention: 'The paper defines quantities in µmol and concentrations implicitly in µmol/L (given µmol amounts and standard concentrat')
- implicit units: 'Central distrib. vol' → L (from the popPK convention: 'Volume of distribution is the ratio of amount (µmol) to concentration (µmol/L), resulting in units of L. The magnitude 1')
- implicit units: 'Peripheral distrib. Vol.' → L (from the popPK convention: 'Volume of distribution is the ratio of amount (µmol) to concentration (µmol/L), resulting in units of L. The magnitude 2')
- implicit units: 'Abs. rate constant' → 1/h (from the popPK convention: "First-order absorption rate constants are dimensionally inverse time. The paper explicitly mentions fixed values in 'h−1")
- implicit units: 'Max. Elim. Rate' — the LLM proposed 'µmol/h', whose dimension does not fit Q66; left unset
- implicit units: 'Conc. at haf max.elim' — the LLM proposed 'µmol/L', whose dimension does not fit Q1; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Clearance); Q63 (Central distrib. vol); Q64 (Peripheral distrib. Vol.)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=olaparib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col1 = 'F1'
- unparsed cell DeJongh_2025_table_1:row1:col2 = '(h−1)'
- unparsed cell DeJongh_2025_table_1:row10:col3 = '− 0.0291'
- unparsed cell DeJongh_2025_table_1:row10:col5 = '− 0.0977'
- unparsed cell DeJongh_2025_table_1:row10:col7 = '− 120'
- unparsed cell DeJongh_2025_table_1:row13:col3 = '− 0.520'
- unparsed cell DeJongh_2025_table_1:row13:col5 = '− 0.880'
- unparsed cell DeJongh_2025_table_1:row13:col6 = '− 0.160'
- unparsed cell DeJongh_2025_table_1:row13:col7 = '− 35.3'
- companion parameter table 1 transcribed (48 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.696 (16/23 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['azd7648', 'olaparib', 'interconversion']] | [['azd7648', 'olaparib', 'interaction']] | mismatch |
| `gpt-oss-120b` | `parameters[absolute bio-avail].parameter_id` | Q44 | Q40 | mismatch |
| `gpt-oss-120b` | `parameters[clearance].covariate_forms` | ['additive_shift'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[intercomp. clearance]` | not captured | 0.932 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_category]` | 82.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q_category]` | not captured | 82.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | AZD7648, olaparib | olaparib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6', 'Tab2:row4:col7', 'DeJongh_2025_table_1:row2:col3', 'DeJongh_2025_table_1:row2:col4', 'DeJongh_2025_table_1:row2:col5', 'DeJongh_2025_table_1:row2:col6', 'DeJongh_2025_table_1:row2:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['DeJongh_2025_table_1:row1:col3', 'DeJongh_2025_table_1:row1:col4', 'DeJongh_2025_table_1:row1:col5', 'DeJongh_2025_table_1:row1:col6', 'DeJongh_2025_table_1:row1:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5', 'Tab2:row5:col6', 'Tab2:row5:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5', 'Tab2:row7:col6', 'Tab2:row7:col7'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['DeJongh_2025_table_1:row4:col3', 'DeJongh_2025_table_1:row4:col4', 'DeJongh_2025_table_1:row4:col5', 'DeJongh_2025_table_1:row4:col6', 'DeJongh_2025_table_1:row4:col7'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['DeJongh_2025_table_1:row3:col3', 'DeJongh_2025_table_1:row3:col4', 'DeJongh_2025_table_1:row3:col5', 'DeJongh_2025_table_1:row3:col6', 'DeJongh_2025_table_1:row3:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.251 | not captured | not captured | ['Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6', 'Tab2:row4:col7', 'DeJongh_2025_table_1:row2:col3', 'DeJongh_2025_table_1:row2:col4', 'DeJongh_2025_table_1:row2:col5', 'DeJongh_2025_table_1:row2:col6', 'DeJongh_2025_table_1:row2:col7'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CmD50'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.251 L/h | not captured | not captured | ['Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6', 'Tab2:row4:col7', 'DeJongh_2025_table_1:row2:col3', 'DeJongh_2025_table_1:row2:col4', 'DeJongh_2025_table_1:row2:col5', 'DeJongh_2025_table_1:row2:col6', 'DeJongh_2025_table_1:row2:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.17 L | not captured | not captured | ['Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5', 'Tab2:row5:col6', 'Tab2:row5:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.66 L | not captured | not captured | ['Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5', 'Tab2:row7:col6', 'Tab2:row7:col7'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_olaparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `DeJongh_2025` / `DeJongh_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:16 UTC</sub>
