<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Tramadol&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/&quot;},{&quot;label&quot;:&quot;Lee_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bressolle2009_reference&quot;,&quot;label&quot;:&quot;Bressolle_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Bressolle2009_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Nordmeier2021_tramadol_estimate&quot;,&quot;label&quot;:&quot;Nordmeier_2021_tramadol_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_Nordmeier2021_tramadol_estimate.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tramadol — `Tramadol_Lee2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Tramadol" model-id="Tramadol_Lee2019_reference" status="rejected" stale="false" population="healthy Korean male subjects" measured-compound="Tramadol" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Lee J, Yoo HD, Bae JW, Lee S, Shin KH. Population pharmacokinetic analysis of tramadol and &lt;i&gt;O-&lt;/i&gt;desmethyltramadol with genetic polymorphism of &lt;i&gt;CYP2D6&lt;/i&gt;. Drug design, development and therapy 13:1751-1761 (2019).
  ·  DOI: [10.2147/dddt.s199574](https://doi.org/10.2147/dddt.s199574)

## Population and dosing

**Population:** healthy Korean male subjects · condition healthy · age group adult · n = 22.

**Dosing:** 100 mg, oral, multiple, every 12 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL/F (L/hr) | CL/F | 16.9 | L/hr | 20.7 |
| Vp/F (L) | V2/F | 59.9 | L | 42.4 |
| ka (hr−1) | kabs | 0.095 | hr−1 | 25.6 |
| Vm/F (L) | V1/F | 8.63 | L | 67.4 |
| CLPM/F (L/hr) | CLfm | 4.11 | L/hr | 34 |
| CLM/F (L/hr) | CL/F | 15.8 | L/hr | 66.4 |
| D2(hr) | R1 | 1.93 | hr | 48.8 |
| ALAG2(hr) | tlag | 1.63 | hr | 47.1 |
| Fr | FR | 0.88 |  | 7.2 |
| theta_cl_f_cyp2d6 | theta_cl_f_cyp2d6 | 0.351 |  | 81.4 |
| theta_q350_cyp2d6 | theta_q350_cyp2d6 | 0.528 |  | 34.1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/hr) | `Q27` · CL/F | 16.9 | L/hr | 4.694e-06 | m3/s | l/h | 20.7 | exact (1) | T0002:row2:col2 |
| Vp/F (L) | `Q82` · V2/F | 59.9 | L | 0.0599 | m3 | l | 42.4 | exact (1) | T0002:row4:col2 |
| ka (hr−1) | `Q49` · kabs | 0.095 | hr−1 | 2.639e-05 | 1/s | 1/h | 25.6 | exact (1) | T0002:row5:col2 |
| Vm/F (L) | `Q290` · V1/F | 8.63 | L | 0.00863 | m3 | l | 67.4 | exact (1) | T0002:row6:col2 |
| CLPM/F (L/hr) | `Q370` · CLfm | 4.11 | L/hr | 1.142e-06 | m3/s | l/h | 34 | llm_confirmed (0.6) | T0002:row7:col2 |
| CLM/F (L/hr) | `Q27` · CL/F | 15.8 | L/hr | 4.389e-06 | m3/s | l/h | 66.4 | exact (1) | T0002:row9:col2 |
| D2(hr) | `Q307` · R1 | 1.93 | hr |  |  | h | 48.8 | llm (0.6) | T0002:row10:col2 |
| ALAG2(hr) | `Q83` · tlag | 1.63 | hr | 5868 | s | h | 47.1 | exact (1) | T0002:row11:col2 |
| Fr | `Q43` · FR | 0.88 |  | 0.88 |  |  | 7.2 | exact (1) | T0002:row12:col2 |
| theta_cl_f_cyp2d6 | `Q900` · theta_cl_f_cyp2d6 | 0.351 |  |  |  |  | 81.4 |  | T0002:row3:col1, T0002:row3:col2 |
| theta_q350_cyp2d6 | `Q900` · theta_q350_cyp2d6 | 0.528 |  |  |  |  | 34.1 |  | T0002:row8:col1, T0002:row8:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 6 row(s) → O-desmethyltramadol (m_suffix 6)
- table section iiv: 'ωCL/F2' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ωV/F2' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ωCLPM/F2' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ωD22' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'σpro,tra' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σadd,tra' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σpro,ODMT' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σadd,ODMT' routed out of structural estimates ('Residual variability')
- column 'comment' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'D2(hr)' → Q307 (unit '[time]' vs ontology '[mass] / [time]') — route to review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1000 (source ['T0002:footnote', 'T0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q350 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Tramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- pharmacogenetic covariate 'theta_cl_f_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q350_cyp2d6' (cyp2d6) — PGx domain
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 7 linked by role; re-tagged parent→O-desmethyltramadol ×11
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2
- toxin: the located table(s) gave no kinetic value — 14 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T0002:row2:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T0002:row9:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T0002:row6:col2'] |
| C5_dimension_Q307 | fail | [mass] / [time] | hr ([time]) | ['T0002:row10:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['T0002:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T0002:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T0002:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['T0002:row11:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.9 L/h | ['T0002:row2:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 15.8 L/h | ['T0002:row9:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.63 L | ['T0002:row6:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 59.9 L | ['T0002:row4:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Lee2019_reference&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Lee2019_reference%0APaper%3A%20Lee_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tramadol/Tramadol_Lee2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 04:52 UTC</sub>
