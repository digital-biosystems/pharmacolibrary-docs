<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;osimertinib&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/&quot;},{&quot;label&quot;:&quot;Yang_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Osimertinib_Rodier2022_reference&quot;,&quot;label&quot;:&quot;Rodier_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Jones_2023_pEGFR&quot;,&quot;label&quot;:&quot;Jones_2023 \u00b7 pEGFR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/pd_Jones_2023_pEGFR.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# osimertinib — `Osimertinib_Yang2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.607). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**MW, V and CL have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — osimertinib: CLnorm/F 14.3 L/h, kabs 0.26 1/h, Fab 0.67, MW 1.57; AZ5104: CL/F 32 L/h, fm 0.25, V1/F 151 L, V 0.65, CL 0.18.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has osimertinib (plus platinum-pemetrexed in FLAURA2), the second reading osimertinib; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025)
  ·  DOI: [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759)

<div class="pk-model-meta" hidden drug="osimertinib" model-id="Osimertinib_Yang2025_reference" status="needs_review" stale="false" population="patients with EGFR-mutated advanced NSCLC" measured-compound="osimertinib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 9 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, CLnorm/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLptot/F, L/h | `Q355` · CLnorm/F | 14.35 | L/h | 3.986111111111111e-06 | [l] / [h] | not captured | llm (0.6) | cpt3759-tbl-0002:row2:col1 | — | not captured |
| CLm/F, L/h | `Q27` · CL/F | 32.05 | L/h | 8.902777777777776e-06 | [l] / [h] | not captured | exact (1.0) | cpt3759-tbl-0002:row3:col1 | — | not captured |
| K a , 1/h | `Q49` · kabs | 0.26 | 1/h | 7.222222222222222e-05 | [1] / [h] | not captured | exact (1.0) | cpt3759-tbl-0002:row4:col1 | — | not captured |
| F m | `Q45` · fm | 0.25 | not captured | not captured | not captured | not captured | exact (1.0) | cpt3759-tbl-0002:row6:col1 | — | not captured |
| V m /F, L | `Q290` · V1/F | 151 | L | 0.151 | [l] | not captured | exact (1.0) | cpt3759-tbl-0002:row7:col1 | — | not captured |
| wt_on_clptot_f | `Q900` · wt_on_clptot_f | 0.36 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt3759-tbl-0002:row8:col1 | — | not captured |
| ALB on CLptot/F | `Q40` · Fab | 0.67 | not captured | not captured | not captured | not captured | llm (0.6) | cpt3759-tbl-0002:row9:col1 | — | not captured |
| ALB on V p /F | `Q374` · MW | 1.57 | not captured | not captured | not captured | not captured | llm (0.6) | cpt3759-tbl-0002:row11:col1 | — | not captured |
| ALB on V m /F | `Q61` · V | 0.65 | not captured | not captured | not captured | not captured | llm (0.6) | cpt3759-tbl-0002:row14:col1 | — | not captured |
| JPN on CLm/F | `Q22` · CL | 0.18 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | cpt3759-tbl-0002:row16:col1 | — | 0.19 (None% RSE) |
| theta_q76_wt | `Q900` · theta_q76_wt | 0.64 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt3759-tbl-0002:row10:col1 | — | not captured |
| theta_clm_f_wt | `Q900` · theta_clm_f_wt | 0.74 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt3759-tbl-0002:row12:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 4 row(s) → AZ5104 (m_suffix 4)
- table section iiv: 'IIV on CLptot/F a' routed out of structural estimates ('Between subject variability')
- table section iiv: 'Correlation CLptot/F‐CLm/F' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on CLm/F a' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on K a a' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on V p /F a' routed out of structural estimates ('Between subject variability')
- table section iiv: 'IIV on V m /F a' routed out of structural estimates ('Between subject variability')
- table section residual_error: 'Parent proportional component' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Parent additive component (nM)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Metabolite proportional component' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Metabolite additive component (nM)' routed out of structural estimates ('Residual variability')
- covariate level 'WT on CLptot/F' → Q900:wt_on_clptot_f = 0.36 (linear_fractional on Q355)
- dropped unlinked row (NIL): 'ALB on CLm/F' — extend the ontology if this is a real PK parameter (source ['cpt3759-tbl-0002:row13:col1'])
- dropped unlinked row (NIL): 'Asian (NonCHN or nonJPN) on CLm/F' — extend the ontology if this is a real PK parameter (source ['cpt3759-tbl-0002:row15:col1'])
- covariate category for shrinkage from footnote/prose kept as documentation only (['cpt3759-tbl-0002:footnote'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number 3.62 (source ['cpt3759-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CLm/F' from footnote/prose loose number 3.99 (source ['cpt3759-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number 21.76 (source ['cpt3759-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Vm/F' from footnote/prose loose number 46.12 (source ['cpt3759-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- metabolite az5104: Q367→Q61 — the model states fm, so its CL/V are not fm-divided
- metabolite az5104: Q351→Q22 — the model states fm, so its CL/V are not fm-divided
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=osimertinib
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles: 2 per-group rows of AZ5104 covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 29/29 row label(s) assigned, 5 linked by role; re-tagged parent→AZ5104 ×12, osimertinib→parent ×3, osimertinib→AZ5104 ×2
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table cpt3759-tbl-0002: unbound_uncertainty
- table cpt3759-tbl-0002: ambiguous_numeric_format
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.607 (17/28 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[alb on clm/f]` | 0.72 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[asian (nonchn or nonjpn) on clm/f]` | not captured | 0.16 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[clptot/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_wt]` | 0.36 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q76_wt]` | not captured | 0.64 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v2_f_wt]` | 0.64 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v p /f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[wt_on_clptot_f]` | not captured | 0.36 | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | osimertinib (plus platinum-pemetrexed in FLAURA2) | osimertinib | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | osimertinib and AZ5104 | osimertinib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3759-tbl-0002:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt3759-tbl-0002:row7:col1'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3759-tbl-0002:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt3759-tbl-0002:row4:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt3759-tbl-0002:row16:col1'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | not captured | not captured | not captured | ['cpt3759-tbl-0002:row11:col1'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['cpt3759-tbl-0002:row14:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 32 L/h | not captured | not captured | ['cpt3759-tbl-0002:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 151 L | not captured | not captured | ['cpt3759-tbl-0002:row7:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_osimertinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yang_2025` / `Yang_2025::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:08 UTC</sub>
