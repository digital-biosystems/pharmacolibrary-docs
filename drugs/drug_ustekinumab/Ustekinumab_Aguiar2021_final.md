<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ustekinumab&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/&quot;},{&quot;label&quot;:&quot;Aguiar_2021 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ustekinumab_Adedokun2022_reference&quot;,&quot;label&quot;:&quot;Adedokun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Adedokun2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ustekinumab_Lam2026_reference&quot;,&quot;label&quot;:&quot;Lam_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Lam2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ustekinumab — `Ustekinumab_Aguiar2021_final`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (KD), so that value has no SI equivalent. Extracted — ustekinumab: kabs 0.381 day−1, CL 0.277 L/day, V 3.57 L, Q 1.89 L/day, Vss 11 L, KD 0.168 nmol/L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl (l/day) a].covariate_forms`: this record has none, the second reading ['linear_fractional']; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Aguiar Zdovc J et al., Ustekinumab Dosing Individualization in…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13101587](https://doi.org/10.3390/pharmaceutics13101587)

<div class="pk-model-meta" hidden drug="ustekinumab" model-id="Ustekinumab_Aguiar2021_final" status="rejected" stale="false" population="patients with Crohn&#39;s disease" measured-compound="ustekinumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 1 covariate effect.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (day−1) | `Q49` · kabs | 0.381 | day−1 | 4.409722222222222e-06 | [1] / [d] | not captured | exact (1.0) | pharmaceutics-13-01587-t002:row3:col2 | — | not captured |
| CL (L/day) a | `Q22` · CL | 0.277 | L/day | 3.2060185185185188e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row4:col2 | — | not captured |
| serum_albumin_on_cl | `Q900` · serum_albumin_on_cl | -0.0165 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-13-01587-t002:row7:col2 | — | not captured |
| Vc (L) b | `Q61` · V | 3.57 | L | 0.00357 | [l] | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row8:col2 | — | not captured |
| Q (L/day) | `Q30` · Q | 1.89 | L/day | 2.1875e-08 | [l] / [d] | not captured | exact (1.0) | pharmaceutics-13-01587-t002:row10:col2 | — | not captured |
| Vp–target (L) | `Q65` · Vss | 11.0 | L | 0.011 | [l] | not captured | llm_corrected (0.6) | pharmaceutics-13-01587-t002:row22:col2 | — | not captured |
| Kd (nmol/L) | `Q331` · KD | 0.168 | nmol/L | not captured | [nM] / [l] | not captured | exact (1.0) | pharmaceutics-13-01587-t002:row25:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV CL (%, CV) e' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV Vc (%, CV) e' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV Vp (%, CV) e' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV F (%, SD) e' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV Ksyn (%, CV) e' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Additive RUV (nmol/L) e' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional RUV (%) e' routed out of structural estimates ('Residual variability')
- table representations disagree for 'Ka (day−1)'; source reconciliation required
- table representations disagree for 'CL (L/day) a'; source reconciliation required
- table representations disagree for 'FFM on CL'; source reconciliation required
- table representations disagree for 'bio-naïve on CL'; source reconciliation required
- table representations disagree for 'Serum albumin on CL'; source reconciliation required
- table representations disagree for 'Vc (L) b'; source reconciliation required
- table representations disagree for 'FFM on Vc'; source reconciliation required
- table representations disagree for 'Q (L/day)'; source reconciliation required
- table representations disagree for 'Vp (L) c'; source reconciliation required
- table representations disagree for 'FFM on Vp'; source reconciliation required
- table representations disagree for 'FCGR3A-158 V/V'; source reconciliation required
- table representations disagree for 'FCGR3A-158 V/F, F/F'; source reconciliation required
- table representations disagree for 'Serum CRP on Ksyn'; source reconciliation required
- table representations disagree for 'Vc–target (L)'; source reconciliation required
- table representations disagree for 'Qtarget (L/d)'; source reconciliation required
- table representations disagree for 'Vp–target (L)'; source reconciliation required
- table representations disagree for 'Kd (nmol/L)'; source reconciliation required
- dropped unlinked row (NIL): 'FFM on CL' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01587-t002:row5:col2'])
- dropped unlinked row (NIL): 'bio-naïve on CL' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01587-t002:row6:col2'])
- covariate level 'Serum albumin on CL' → Q900:serum_albumin_on_cl = -0.0165 (linear_fractional on Q22)
- dropped duplicate Q63 ('FFM on Vc', value '0.590') — already have one for this compound
- dropped unlinked row (NIL): 'Vp (L) c' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01587-t002:row11:col2'])
- dropped unlinked row (NIL): 'FFM on Vp' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01587-t002:row12:col2'])
- dropped unlinked row (NIL): 'FCGR3A-158 V/V' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01587-t002:row14:col2'])
- dropped unlinked row (NIL): 'FCGR3A-158 V/F, F/F' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01587-t002:row15:col2'])
- dropped unlinked row (NIL): 'Serum CRP on Ksyn' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01587-t002:row18:col2'])
- dropped duplicate Q63 ('Vc–target (L)', value '2.44') — already have one for this compound
- dropped duplicate Q30 ('Qtarget (L/d)', value '0.493') — already have one for this compound
- unit_dimension_mismatch: 'Kd (nmol/L)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['pharmaceutics-13-01587-t002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['pharmaceutics-13-01587-t002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['pharmaceutics-13-01587-t002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kin' from footnote/prose loose number None (source ['pharmaceutics-13-01587-t002:footnote']); the table cell was unparseable — needs review
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/day) a); Q63 (Vc (L) b); Q30 (Q (L/day))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ustekinumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (L) b' is the general volume)
- status held at route_to_review — not promoted
- model-stage split: 'final model / estimate' is the final model of Aguiar_2021 (paper reports 2 stages: base model / estimate, final model / estimate); same population, different model-building step
- molar mass: none found for 'ustekinumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table pharmaceutics-13-01587-t002: unparsed_numeric_cell
- table pharmaceutics-13-01587-t002: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (10/15 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl (l/day) a].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[ffm on cl]` | 0.598 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ffm on vp]` | 0.586 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` | not captured | -0.0165 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q46_albumin]` | -0.0165 | not captured | only_one_extracted |

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
| C1_half_life_beta | fail | 17.0 | 8.933 | 0.5255 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row10:col2'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['pharmaceutics-13-01587-t002:row25:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row8:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row22:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.277 | not captured | not captured | ['pharmaceutics-13-01587-t002:row4:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0115 L/h | not captured | not captured | ['pharmaceutics-13-01587-t002:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.57 L | not captured | not captured | ['pharmaceutics-13-01587-t002:row8:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 11 L | not captured | not captured | ['pharmaceutics-13-01587-t002:row22:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ustekinumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Aguiar_2021` / `Aguiar_2021::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:30 UTC</sub>
