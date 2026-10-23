<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;momelotinib&quot;,&quot;href&quot;:&quot;drugs/drug_momelotinib/&quot;},{&quot;label&quot;:&quot;Rich_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# momelotinib — `Momelotinib_Rich2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CLm/F has no unit.

<div class="pk-model-meta" hidden drug="momelotinib" model-id="Momelotinib_Rich2026_reference" status="needs_review" stale="false" population="patients with myelofibrosis and healthy or special-population participants" measured-compound="momelotinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Rich B, Srinivasan M, Ho YL, Visser SAG, Ferron-Brady G, Vlasakakis G. Population Pharmacokinetics and Exposure-Response Analyses of Momelotinib, Its Active Metabolite (M21), and Total Active Moiety in Myelofibrosis. Clinical pharmacology and therapeutics 119(3):629–640 (2026).
  ·  DOI: [10.1002/cpt.70076](https://doi.org/10.1002/cpt.70076)

## Population and dosing

**Population:** patients with myelofibrosis and healthy or special-population participants · condition myelofibrosis; healthy participants and special populations including renal or hepatic impairment · age group adult · n = 661.

**Dosing:** 200 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, CLm/F, Q/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted, plus 9 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F, L/h | CL/F | 64.7 | L/h | 3.48 | 0.650 (None% RSE) |
| Q/F, L/h | Q/F | 36.1 | L/h | 7.57 |  |
| Total V/F, L | V/F | 383 | L | 5.87 | 0.476 (None% RSE) |
| k tr, 1/h | kabs | 8.63 | 1/h | 6.88 |  |
| OATP1B1/1B3 inhibitor on relative bioavailability | Frel | 1.64 |  | 4.07 |  |
| CLm/F of M21, L/h | CL/F | 24.9 | L/h | 2.59 |  |
| Vcm/F of M21, L | V1/F | 2.77 | L | 18.6 |  |
| Vpm/F of M21, L | V2/F | 45.7 | L | 7.83 |  |
| Q m/F of M21, L/h | Q/F | 8.84 | L/h | 9.90 |  |
| CL/F of momelotinib on CLm/F | CLm/F | 0.481 |  | 7.66 | 0.371 (None% RSE) |
| theta_cl_f_hepatic | theta_cl_f_hepatic | 0.914 |  | 6.93 |  |
| theta_cl_f_hepatic | theta_cl_f_hepatic | 0.779 |  | 13.3 |  |
| theta_cl_f_hepatic | theta_cl_f_hepatic | 0.477 |  | 21.8 |  |
| theta_cl_f_cyp3a4 | theta_cl_f_cyp3a4 | 2.01 |  | 3.90 |  |
| theta_cl_f_cyp3a4 | theta_cl_f_cyp3a4 | 1.39 |  | 12.6 |  |
| theta_q900_crcl | theta_q900_crcl | 0.418 |  | 14.1 |  |
| theta_q45_hepatic | theta_q45_hepatic | -0.359 |  | 38.0 |  |
| theta_q45_hepatic | theta_q45_hepatic | -0.679 |  | 49.2 |  |
| theta_q45_hepatic | theta_q45_hepatic | -1.84 |  | 10.2 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.676). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLm/F has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — momelotinib: CL/F 64.7 L/h, Q/F 36.1 L/h, V/F 383 L, kabs 8.63 1/h, Frel 1.64; M21: CL/F 24.9 L/h, V1/F 2.77 L, V2/F 45.7 L, Q/F 8.84 L/h, CLm/F 0.481.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of median a: this record has none, the second reading none; it also differs on 11 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 64.7 | L/h | 1.797e-05 | m3/s | l/h | 3.48 | exact (1) | cpt70076-tbl-0001:row4:col1, cpt70076-tbl-0001:row4:col2, cpt70076-tbl-0001:row4:col4 | 0.650 (None% RSE) |
| Q/F, L/h | `Q69` · Q/F | 36.1 | L/h | 1.003e-05 | m3/s | l/h | 7.57 | exact (1) | cpt70076-tbl-0001:row5:col1, cpt70076-tbl-0001:row5:col2, cpt70076-tbl-0001:row5:col4 |  |
| Total V/F, L | `Q76` · V/F | 383 | L | 0.383 | m3 | l | 5.87 | llm_confirmed (0.6) | cpt70076-tbl-0001:row6:col1, cpt70076-tbl-0001:row6:col2, cpt70076-tbl-0001:row6:col4 | 0.476 (None% RSE) |
| k tr, 1/h | `Q49` · kabs | 8.63 | 1/h | 0.002397 | 1/s | 1/h | 6.88 | exact (1) | cpt70076-tbl-0001:row8:col1, cpt70076-tbl-0001:row8:col2, cpt70076-tbl-0001:row8:col4 |  |
| OATP1B1/1B3 inhibitor on relative bioavailability | `Q87` · Frel | 1.64 |  |  |  |  | 4.07 | llm_confirmed (0.6) | cpt70076-tbl-0001:row16:col1, cpt70076-tbl-0001:row16:col2, cpt70076-tbl-0001:row16:col4 |  |
| CLm/F of M21, L/h | `Q27` · CL/F | 24.9 | L/h | 6.917e-06 | m3/s | l/h | 2.59 | exact (1) | cpt70076-tbl-0001:row28:col1, cpt70076-tbl-0001:row28:col2, cpt70076-tbl-0001:row28:col4 |  |
| Vcm/F of M21, L | `Q290` · V1/F | 2.77 | L | 0.00277 | m3 | l | 18.6 | exact (1) | cpt70076-tbl-0001:row29:col1, cpt70076-tbl-0001:row29:col2, cpt70076-tbl-0001:row29:col4 |  |
| Vpm/F of M21, L | `Q82` · V2/F | 45.7 | L | 0.0457 | m3 | l | 7.83 | exact (1) | cpt70076-tbl-0001:row30:col1, cpt70076-tbl-0001:row30:col2, cpt70076-tbl-0001:row30:col4 |  |
| Q m/F of M21, L/h | `Q69` · Q/F | 8.84 | L/h | 2.456e-06 | m3/s | l/h | 9.90 | exact (1) | cpt70076-tbl-0001:row31:col1, cpt70076-tbl-0001:row31:col2, cpt70076-tbl-0001:row31:col4 |  |
| CL/F of momelotinib on CLm/F | `Q351` · CLm/F | 0.481 |  |  |  |  | 7.66 | llm_confirmed (0.6) | cpt70076-tbl-0001:row33:col1, cpt70076-tbl-0001:row33:col2, cpt70076-tbl-0001:row33:col4 | 0.371 (None% RSE) |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | 0.914 |  |  |  |  | 6.93 |  | cpt70076-tbl-0001:row11:col1, cpt70076-tbl-0001:row11:col2, cpt70076-tbl-0001:row11:col4 |  |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | 0.779 |  |  |  |  | 13.3 |  | cpt70076-tbl-0001:row12:col1, cpt70076-tbl-0001:row12:col2, cpt70076-tbl-0001:row12:col4 |  |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | 0.477 |  |  |  |  | 21.8 |  | cpt70076-tbl-0001:row13:col1, cpt70076-tbl-0001:row13:col2, cpt70076-tbl-0001:row13:col4 |  |
| theta_cl_f_cyp3a4 | `Q900` · theta_cl_f_cyp3a4 | 2.01 |  |  |  |  | 3.90 |  | cpt70076-tbl-0001:row14:col1, cpt70076-tbl-0001:row14:col2, cpt70076-tbl-0001:row14:col4 |  |
| theta_cl_f_cyp3a4 | `Q900` · theta_cl_f_cyp3a4 | 1.39 |  |  |  |  | 12.6 |  | cpt70076-tbl-0001:row15:col1, cpt70076-tbl-0001:row15:col2, cpt70076-tbl-0001:row15:col4 |  |
| theta_q900_crcl | `Q900` · theta_q900_crcl | 0.418 |  |  |  |  | 14.1 |  | cpt70076-tbl-0001:row34:col1, cpt70076-tbl-0001:row34:col2, cpt70076-tbl-0001:row34:col4 |  |
| theta_q45_hepatic | `Q900` · theta_q45_hepatic | -0.359 |  |  |  |  | 38.0 |  | cpt70076-tbl-0001:row35:col1, cpt70076-tbl-0001:row35:col2, cpt70076-tbl-0001:row35:col4 |  |
| theta_q45_hepatic | `Q900` · theta_q45_hepatic | -0.679 |  |  |  |  | 49.2 |  | cpt70076-tbl-0001:row36:col1, cpt70076-tbl-0001:row36:col2, cpt70076-tbl-0001:row36:col4 |  |
| theta_q45_hepatic | `Q900` · theta_q45_hepatic | -1.84 |  |  |  |  | 10.2 |  | cpt70076-tbl-0001:row37:col1, cpt70076-tbl-0001:row37:col2, cpt70076-tbl-0001:row37:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| Median a | Q900 | llm |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'On CL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'On total V/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'On k tr' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'On k a' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional error phase III studies, %' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional error phase I/II studies, %' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive error phase I/II studies, ng/mL' routed out of structural estimates ('Residual error')
- table section iiv: 'On CLm/F of M21' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'On Vcm/F of M21' routed out of structural estimates ('Interindividual variability')
- dropped unlinked row (NIL): 'Fraction V central' — extend the ontology if this is a real PK parameter (source ['cpt70076-tbl-0001:row7:col1', 'cpt70076-tbl-0001:row7:col2', 'cpt70076-tbl-0001:row7:col4'])
- dropped duplicate Q49 ('k a, 1/h', value '0.303') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.914' (source ['cpt70076-tbl-0001:footnote', 'cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.779' (source ['cpt70076-tbl-0001:footnote', 'cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number '0.477' (source ['cpt70076-tbl-0001:footnote', 'cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '1.39' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number '1.64' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '1.64' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.481' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.418' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'fm' from footnote/prose loose number '0.640' (source ['cpt70076-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q45 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=momelotinib
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- row roles (LLM): model_class=compartmental; 40/40 row label(s) assigned, 25 linked by role; re-tagged parent→M21 ×33, momelotinib→parent ×9, momelotinib→M21 ×3
- molar mass: no plausible PubChem entry for 'M21' ('Momelotinib M21 metabolite') — left in mass units
- molar mass: none found for 'M21' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt70076-tbl-0001:row4:col3 = '60.3 to 69.2'
- unparsed cell cpt70076-tbl-0001:row4:col5 = '60.2 to 69.5'
- unparsed cell cpt70076-tbl-0001:row5:col3 = '30.7 to 41.4'
- unparsed cell cpt70076-tbl-0001:row5:col5 = '28.3 to 43.3'
- unparsed cell cpt70076-tbl-0001:row6:col3 = '339 to 427'
- unparsed cell cpt70076-tbl-0001:row6:col5 = '325 to 507'
- unparsed cell cpt70076-tbl-0001:row7:col3 = '0.234 to 0.343'
- unparsed cell cpt70076-tbl-0001:row7:col5 = '0.182 to 0.538'
- unparsed cell cpt70076-tbl-0001:row8:col3 = '7.46 to 9.79'
- unparsed cell cpt70076-tbl-0001:row8:col5 = '7.09 to 10.0'
- unparsed cell cpt70076-tbl-0001:row9:col3 = '0.253 to 0.354'
- unparsed cell cpt70076-tbl-0001:row9:col5 = '0.235 to 0.665'
- unparsed cell cpt70076-tbl-0001:row11:col3 = '0.798 to 1.05'
- unparsed cell cpt70076-tbl-0001:row11:col5 = '0.807 to 1.05'
- unparsed cell cpt70076-tbl-0001:row12:col3 = '0.600 to 1.01'
- unparsed cell cpt70076-tbl-0001:row12:col5 = '0.587 to 1.03'
- unparsed cell cpt70076-tbl-0001:row13:col3 = '0.311 to 0.731'
- unparsed cell cpt70076-tbl-0001:row13:col5 = '0.310 to 0.805'
- unparsed cell cpt70076-tbl-0001:row14:col3 = '1.86 to 2.17'
- unparsed cell cpt70076-tbl-0001:row14:col5 = '1.69 to 2.32'
- unparsed cell cpt70076-tbl-0001:row15:col3 = '1.09 to 1.78'
- unparsed cell cpt70076-tbl-0001:row15:col5 = '1.25 to 2.56'
- unparsed cell cpt70076-tbl-0001:row16:col3 = '1.51 to 1.78'
- unparsed cell cpt70076-tbl-0001:row16:col5 = '1.26 to 2.11'
- unparsed cell cpt70076-tbl-0001:row18:col3 = '0.605 to 0.694'
- unparsed cell cpt70076-tbl-0001:row18:col5 = '0.592 to 0.703'
- unparsed cell cpt70076-tbl-0001:row18:col6 = '9.02%'
- unparsed cell cpt70076-tbl-0001:row19:col3 = '0.384 to 0.567'
- unparsed cell cpt70076-tbl-0001:row19:col5 = '0.357 to 0.662'
- unparsed cell cpt70076-tbl-0001:row19:col6 = '48.1%'
- unparsed cell cpt70076-tbl-0001:row20:col3 = '0.802 to 1.02'
- unparsed cell cpt70076-tbl-0001:row20:col5 = '0.771 to 1.04'
- unparsed cell cpt70076-tbl-0001:row20:col6 = '52.5%'
- unparsed cell cpt70076-tbl-0001:row21:col3 = '0.445 to 0.618'
- unparsed cell cpt70076-tbl-0001:row21:col5 = '0.441 to 0.793'
- unparsed cell cpt70076-tbl-0001:row21:col6 = '49.6%'
- unparsed cell cpt70076-tbl-0001:row23:col3 = '56.0 to 60.9'
- unparsed cell cpt70076-tbl-0001:row23:col5 = '55.2 to 61.3'
- unparsed cell cpt70076-tbl-0001:row24:col3 = '33.0 to 35.6'
- unparsed cell cpt70076-tbl-0001:row24:col5 = '32.0 to 35.9'
- unparsed cell cpt70076-tbl-0001:row25:col3 = '1.15 to 1.79'
- unparsed cell cpt70076-tbl-0001:row25:col5 = '0.869 to 2.05'
- unparsed cell cpt70076-tbl-0001:row28:col3 = '23.7 to 26.2'
- unparsed cell cpt70076-tbl-0001:row28:col5 = '24.0 to 26.1'
- unparsed cell cpt70076-tbl-0001:row29:col3 = '1.76 to 3.78'
- unparsed cell cpt70076-tbl-0001:row29:col5 = '1.69 to 3.78'
- unparsed cell cpt70076-tbl-0001:row30:col3 = '38.7 to 52.8'
- unparsed cell cpt70076-tbl-0001:row30:col5 = '42.1 to 50.0'
- unparsed cell cpt70076-tbl-0001:row31:col3 = '7.12 to 10.6'
- unparsed cell cpt70076-tbl-0001:row31:col5 = '7.73 to 9.95'
- unparsed cell cpt70076-tbl-0001:row33:col3 = '0.409 to 0.554'
- unparsed cell cpt70076-tbl-0001:row33:col5 = '0.431 to 0.527'
- unparsed cell cpt70076-tbl-0001:row34:col3 = '0.302 to 0.533'
- unparsed cell cpt70076-tbl-0001:row34:col5 = '0.322 to 0.504'
- unparsed cell cpt70076-tbl-0001:row35:col3 = '−0.627 to −0.0917'
- unparsed cell cpt70076-tbl-0001:row35:col5 = '−0.553 to −0.135'
- unparsed cell cpt70076-tbl-0001:row36:col3 = '−1.33 to −0.0244'
- unparsed cell cpt70076-tbl-0001:row36:col5 = '−0.975 to −0.270'
- unparsed cell cpt70076-tbl-0001:row37:col3 = '−2.21 to −1.47'
- unparsed cell cpt70076-tbl-0001:row37:col5 = '−2.13 to −1.48'
- unparsed cell cpt70076-tbl-0001:row39:col3 = '0.344 to 0.398'
- unparsed cell cpt70076-tbl-0001:row39:col5 = '0.347 to 0.401'
- unparsed cell cpt70076-tbl-0001:row39:col6 = '13.7%'
- unparsed cell cpt70076-tbl-0001:row40:col3 = '2.06 to 2.73'
- unparsed cell cpt70076-tbl-0001:row40:col5 = '2.08 to 2.87'
- unparsed cell cpt70076-tbl-0001:row40:col6 = '52.8%'
- unparsed cell cpt70076-tbl-0001:row42:col3 = '48.6 to 54.8'
- unparsed cell cpt70076-tbl-0001:row42:col5 = '49.8 to 53.9'
- unparsed cell cpt70076-tbl-0001:row43:col3 = '31.1 to 36.3'
- unparsed cell cpt70076-tbl-0001:row43:col5 = '32.5 to 35.0'
- unparsed cell cpt70076-tbl-0001:row44:col3 = '0.397 to 3.33'
- unparsed cell cpt70076-tbl-0001:row44:col5 = '1.49 to 2.49'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.676 (25/37 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl/f of momelotinib on clm/f]` | 0.481 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[median a]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[mild_hepatic_dysfunction_nci_on_cl_f]` |  | 0.914 | only_one_extracted |
| `qwen3.8-27b` | `parameters[moderate_hepatic_dysfunction_nci_on_cl_f]` |  | 0.779 | only_one_extracted |
| `qwen3.8-27b` | `parameters[strong_cyp3a4_inducer_on_cl_f]` |  | 2.01 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_cl_f_cyp3a4].rse_percent` | 3.90 | 12.6 | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_f_cyp3a4].value` | 2.01 | 1.39 | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_f_hepatic].rse_percent` | 6.93 | 21.8 | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_f_hepatic].value` | 0.914 | 0.477 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q351_crcl]` |  | 0.418 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q45_hepatic]` | -0.359 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q900_crcl]` | 0.418 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt70076-tbl-0001:row4:col1', 'cpt70076-tbl-0001:row4:col2', 'cpt70076-tbl-0001:row4:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpt70076-tbl-0001:row28:col1', 'cpt70076-tbl-0001:row28:col2', 'cpt70076-tbl-0001:row28:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['cpt70076-tbl-0001:row29:col1', 'cpt70076-tbl-0001:row29:col2', 'cpt70076-tbl-0001:row29:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cpt70076-tbl-0001:row8:col1', 'cpt70076-tbl-0001:row8:col2', 'cpt70076-tbl-0001:row8:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cpt70076-tbl-0001:row5:col1', 'cpt70076-tbl-0001:row5:col2', 'cpt70076-tbl-0001:row5:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['cpt70076-tbl-0001:row31:col1', 'cpt70076-tbl-0001:row31:col2', 'cpt70076-tbl-0001:row31:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['cpt70076-tbl-0001:row6:col1', 'cpt70076-tbl-0001:row6:col2', 'cpt70076-tbl-0001:row6:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['cpt70076-tbl-0001:row30:col1', 'cpt70076-tbl-0001:row30:col2', 'cpt70076-tbl-0001:row30:col4'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] |  | ['cpt70076-tbl-0001:row33:col1', 'cpt70076-tbl-0001:row33:col2', 'cpt70076-tbl-0001:row33:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 64.7 L/h | ['cpt70076-tbl-0001:row4:col1', 'cpt70076-tbl-0001:row4:col2', 'cpt70076-tbl-0001:row4:col4'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.9 L/h | ['cpt70076-tbl-0001:row28:col1', 'cpt70076-tbl-0001:row28:col2', 'cpt70076-tbl-0001:row28:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.77 L | ['cpt70076-tbl-0001:row29:col1', 'cpt70076-tbl-0001:row29:col2', 'cpt70076-tbl-0001:row29:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 383 L | ['cpt70076-tbl-0001:row6:col1', 'cpt70076-tbl-0001:row6:col2', 'cpt70076-tbl-0001:row6:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 45.7 L | ['cpt70076-tbl-0001:row30:col1', 'cpt70076-tbl-0001:row30:col2', 'cpt70076-tbl-0001:row30:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmomelotinib%5D%20Momelotinib_Rich2026_reference&body=Drug%3A%20momelotinib%0ARecord%3A%20Momelotinib_Rich2026_reference%0APaper%3A%20Rich_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_momelotinib/Momelotinib_Rich2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:02 UTC</sub>
