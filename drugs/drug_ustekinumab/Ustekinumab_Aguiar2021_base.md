<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ustekinumab&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/&quot;},{&quot;label&quot;:&quot;Aguiar_2021 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ustekinumab_Adedokun2022_reference&quot;,&quot;label&quot;:&quot;Adedokun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Adedokun2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ustekinumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ustekinumab_Lam2026_reference&quot;,&quot;label&quot;:&quot;Lam_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Lam2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ustekinumab — `Ustekinumab_Aguiar2021_base`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The unit nmol/L for Kd could not be converted to standard SI units, causing a dimension mismatch that rejected the ustekinumab model record.**

The equilibrium dissociation constant for drug-target binding is reported as 0.350 nmol/L. This specific unit was not recognized as convertible to standard SI units, leaving the parameter without a valid standard value. Consequently, a dimension mismatch was detected on this structural parameter, leading to the record's rejection. Extracted — ustekinumab: kabs 0.518 day−1, CL 0.264, V1 2.18, Q 20.1 L/day, V2 5.04, Fab 71.7, KD 0.35 nmol/L.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Aguiar Zdovc J et al., Ustekinumab Dosing Individualization in…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13101587](https://doi.org/10.3390/pharmaceutics13101587)

<div class="pk-model-meta" hidden drug="ustekinumab" model-id="Ustekinumab_Aguiar2021_base" status="rejected" stale="false" population="patients with Crohn&#39;s disease" measured-compound="ustekinumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (day−1) | `Q49` · kabs | 0.518 | day−1 | 5.99537037037037e-06 | [1] / [d] | not captured | exact (1.0) | pharmaceutics-13-01587-t002:row3:col1 | — | not captured |
| CL (L/day) a | `Q22` · CL | 0.264 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row4:col1 | — | not captured |
| Vc (L) b | `Q63` · V1 | 2.18 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row8:col1 | — | not captured |
| Q (L/day) | `Q30` · Q | 20.1 | L/day | 2.3263888888888893e-07 | [l] / [d] | not captured | exact (1.0) | pharmaceutics-13-01587-t002:row10:col1 | — | not captured |
| Vp (L) c | `Q64` · V2 | 5.04 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row11:col1 | — | not captured |
| Fraction absorbed, F (%) | `Q40` · Fab | 71.7 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row13:col1 | — | not captured |
| Kd (nmol/L) | `Q331` · KD | 0.350 | nmol/L | not captured | [nM] / [l] | not captured | exact (1.0) | pharmaceutics-13-01587-t002:row25:col1 | — | not captured |

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
- dropped duplicate Q63 ('Vc–target (L)', value '18.8') — already have one for this compound
- dropped duplicate Q30 ('Qtarget (L/d)', value '0.752') — already have one for this compound
- dropped unlinked row (NIL): 'Vp–target (L)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01587-t002:row22:col1'])
- unit_dimension_mismatch: 'Kd (nmol/L)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ustekinumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'base model' is the base model of Aguiar_2021 (paper reports 2 stages: base model, final model); same population, different model-building step
- molar mass: none found for 'ustekinumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-13-01587-t002:row3:col3 = '0.380 (0.341–0.422)'
- unparsed cell pharmaceutics-13-01587-t002:row4:col3 = '0.275 (0.259–0.294)'
- unparsed cell pharmaceutics-13-01587-t002:row5:col3 = '0.596 (0.539–0.673)'
- unparsed cell pharmaceutics-13-01587-t002:row6:col3 = '−0.232 (−0.280–−0.192)'
- unparsed cell pharmaceutics-13-01587-t002:row7:col3 = '−0.0170 (−0.0224–−0.0127)'
- unparsed cell pharmaceutics-13-01587-t002:row8:col3 = '3.56 (3.41–3.70)'
- unparsed cell pharmaceutics-13-01587-t002:row9:col3 = '0.587 (0.534–0.644)'
- unparsed cell pharmaceutics-13-01587-t002:row10:col3 = '1.88 (1.69–2.11)'
- unparsed cell pharmaceutics-13-01587-t002:row11:col3 = '3.27 (3.01–3.52)'
- unparsed cell pharmaceutics-13-01587-t002:row12:col3 = '0.581 (0.512–0.660)'
- unparsed cell pharmaceutics-13-01587-t002:row14:col3 = '88.8 (86.1–92.4)'
- unparsed cell pharmaceutics-13-01587-t002:row15:col3 = '70.8 (65.3–75.8)'
- unparsed cell pharmaceutics-13-01587-t002:row18:col3 = '0.0843 (0.0772–0.0883)'
- unparsed cell pharmaceutics-13-01587-t002:row20:col3 = '2.44 (2.27–2.81)'
- unparsed cell pharmaceutics-13-01587-t002:row21:col3 = '0.488 (0.440–0.539)'
- unparsed cell pharmaceutics-13-01587-t002:row22:col3 = '10.9 (9.87–12.0)'
- unparsed cell pharmaceutics-13-01587-t002:row25:col3 = '0.168 (0.154–0.196)'
- unparsed cell pharmaceutics-13-01587-t002:row27:col3 = '18.0 (16.0–20.1)'
- unparsed cell pharmaceutics-13-01587-t002:row28:col3 = '9.79 (8.88–10.8)'
- unparsed cell pharmaceutics-13-01587-t002:row29:col3 = '23.6 (19.7–26.0)'
- unparsed cell pharmaceutics-13-01587-t002:row30:col3 = '17.4 (15.8–20.2)'
- unparsed cell pharmaceutics-13-01587-t002:row31:col3 = '98.4 (83.4–110)'
- unparsed cell pharmaceutics-13-01587-t002:row33:col3 = '4.58 (4.09–5.86)'
- unparsed cell pharmaceutics-13-01587-t002:row34:col3 = '7.74 (6.94–8.55)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (11/11 fields) | none |

_All readers agree on the compared fields of this record._

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
| C1_half_life_beta | pass | 17.0 | 19.078 | 1.1222 | 0.25 | reported t½β |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row10:col1'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['pharmaceutics-13-01587-t002:row25:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row3:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row4:col1'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row8:col1'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row11:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.264 | not captured | not captured | ['pharmaceutics-13-01587-t002:row4:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ustekinumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Aguiar_2021` / `Aguiar_2021::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:03 UTC</sub>
