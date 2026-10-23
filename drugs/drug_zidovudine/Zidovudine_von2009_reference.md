<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zidovudine&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/&quot;},{&quot;label&quot;:&quot;von_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zidovudine_Fauchet2013_reference&quot;,&quot;label&quot;:&quot;Fauchet_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# zidovudine — `Zidovudine_von2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.10).">human + animal</span>

> The record was rejected because zidovudine (AZT) has no metabolic-link parameter (value “none”) for its AZT-MP, AZT-DP, and AZT-TP pathway.

<div class="pk-model-meta" hidden drug="zidovudine" model-id="Zidovudine_von2009_reference" status="rejected" stale="false" population="HIV-infected patients" measured-compound="zidovudine (AZT)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
von Kleist M, Huisinga W. Pharmacokinetic-pharmacodynamic relationship of NRTIs and its connection to viral escape: an example based on zidovudine. European journal of pharmaceutical sciences : official journal of the European Federation for Pharmaceutical Sciences 36(4-5):532–543 (2009).
  ·  DOI: [10.1016/j.ejps.2008.12.010](https://doi.org/10.1016/j.ejps.2008.12.010)

## Population and dosing

**Population:** HIV-infected patients · condition HIV infection.

**Dosing:** 100, 300, 600 mg, oral.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.10).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vb [L] | V | 800 | L |
| CL [L/min] | CL | 6 | L/min |
| B:P | Kp | 0.071 |  |
| F | Fab | 0.64 |  |
| fu^P | fu | 1.1 |  |
| k_A [min⁻¹] | kabs | 1 | min⁻¹ |
| theta_q350_um | theta_q350_um | 1.4 |  |
| theta_q1_um | theta_q1_um | 2.42 |  |
| theta_q1_um | theta_q1_um | 4.1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.353). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.10).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because zidovudine (AZT) has no metabolic-link parameter (value “none”) for its AZT-MP, AZT-DP, and AZT-TP pathway.**

Each link from AZT to AZT-MP, AZT-MP to AZT-DP, and AZT-DP to AZT-TP has its link parameter listed as none. Each metabolite also has zero compartments, leaving the metabolite pathway unreachable from the dose. Extracted — zidovudine: V 800 L, CL 6 L/min, Kp 0.071, Fab 0.64, fu 1.1, kabs 1 min⁻¹.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has zidovudine (AZT), the second reading zidovudine; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vb [L] | `Q61` · V | 800 | L | 0.8 | m3 | l | llm (0.6) | von_2009_table_p4_1:row1:col1, von_2009_table_p4_1:row1:col3, von_2009_table_p4_1:row1:col4 |
| CL [L/min] | `Q22` · CL | 6 | L/min | 0.0001 | m3/s | l/min | llm_confirmed (0.6) | von_2009_table_p4_1:row4:col1, von_2009_table_p4_1:row4:col4 |
| B:P | `Q410` · Kp | 0.071 |  |  |  |  | llm (0.6) | von_2009_table_p4_1:row5:col1, von_2009_table_p4_1:row5:col4 |
| F | `Q40` · Fab | 0.64 |  |  |  |  | exact (1) | von_2009_table_p4_1:row6:col1 |
| fu^P | `Q46` · fu | 1.1 |  |  |  |  | llm_confirmed (0.6) | von_2009_table_p4_1:row7:col1, von_2009_table_p4_1:row7:col4 |
| k_A [min⁻¹] | `Q49` · kabs | 1 | min⁻¹ | 0.01667 | 1/s | 1/min | llm (0.6) | von_2009_table_p4_1:row9:col1, von_2009_table_p4_1:row9:col4 |
| theta_q350_um | `Q900` · theta_q350_um | 1.4 |  |  |  |  |  | von_2009_table_p4_1:row8:col1, von_2009_table_p4_1:row8:col4 |
| theta_q1_um | `Q900` · theta_q1_um | 2.42 |  |  |  |  |  | von_2009_table_p4_1:row11:col1, von_2009_table_p4_1:row11:col4 |
| theta_q1_um | `Q900` · theta_q1_um | 4.1 |  |  |  |  |  | von_2009_table_p4_1:row12:col1, von_2009_table_p4_1:row12:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'param.' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q61 ('VT-cell [fL/cell]', value '140') — already have one for this compound
- NIL: refused to back-fill base 'V' from footnote/prose loose number 5.4 (source ['tab_0:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 800 (source ['tab_0:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 140 (source ['tab_0:footnote']); the table cell was unparseable — needs review
- covariate effect for Q350 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=zidovudine (AZT)
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=pbpk; 13/13 row label(s) assigned, 10 linked by role; re-tagged parent→zidovudine monophosphate (AZT-MP) ×2, parent→zidovudine diphosphate (AZT-DP) ×2, parent→zidovudine triphosphate (AZT-TP) ×2
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell von_2009_table_p4_1:row1:col2 = '(Brown et al., 1997)'
- unparsed cell von_2009_table_p4_1:row1:col5 = '(Bisset et al., 2004)'
- unparsed cell von_2009_table_p4_1:row2:col2 = '(Begenish et al., 2004)'
- unparsed cell von_2009_table_p4_1:row4:col2 = '(Acosta et al., 1996)'
- unparsed cell von_2009_table_p4_1:row4:col5 = '(Lavie et al., 1997)'
- unparsed cell von_2009_table_p4_1:row5:col2 = '(Luzier and Morse, 1993)'
- unparsed cell von_2009_table_p4_1:row5:col5 = '(Chow et al., 1997)'
- unparsed cell von_2009_table_p4_1:row6:col2 = '(Wilde and Langtry, 1993)'
- unparsed cell von_2009_table_p4_1:row6:col4 = '1·10⁻⁵'
- unparsed cell von_2009_table_p4_1:row7:col2 = '(Luzier and Morse, 1993)'
- unparsed cell von_2009_table_p4_1:row7:col5 = '(Flynn et al., 2007)'
- unparsed cell von_2009_table_p4_1:row8:col2 = '(Lavie et al., 1997)'
- unparsed cell von_2009_table_p4_1:row8:col5 = '(Traut, 1994)'
- unparsed cell von_2009_table_p4_1:row9:col5 = '(Zimmerman et al., 1987)'
- unparsed cell von_2009_table_p4_1:row11:col2 = '(Lavie et al., 1997)'
- unparsed cell von_2009_table_p4_1:row11:col5 = '(Cases-Gonzalez and Mendez-Arias, 2005)'
- unparsed cell von_2009_table_p4_1:row12:col2 = '(Cases-Gonzalez and Mendez-Arias, 2005)'
- unparsed cell von_2009_table_p4_1:row12:col3 = 'dTTP(0)[uM]'
- unparsed cell von_2009_table_p4_1:row12:col5 = '(Traut, 1994)'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.353 (6/17 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['zidovudine (azt)', 'zidovudine monophosphate (azt-mp)', 'metabolism'], ['zidovudine monophosphate (azt-mp)', 'zidovudine diphosphate (azt-dp)', 'metabolism'], ['zidovudine diphosphate (azt-dp)', 'zidovudine triphosphate (azt-tp)', 'metabolism']] | [['zidovudine', 'zidovudine monophosphate', 'metabolism'], ['zidovudine monophosphate', 'zidovudine diphosphate', 'metabolism'], ['zidovudine diphosphate', 'zidovudine triphosphate', 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[b:p]` | 0.071 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[fu^p]` | 1.1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_um]` |  | 1.4 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_um]` | 2.42 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_um]` | 4.1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q331_um]` |  | 2.42 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q350_um]` | 1.4 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vb [l]].parameter_id` | Q61 | Q54 | mismatch |
| `qwen3.8-27b` | `screen.dose_compound` | zidovudine (AZT) | zidovudine | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | zidovudine (AZT) | zidovudine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['von_2009_table_p4_1:row4:col1', 'von_2009_table_p4_1:row4:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['von_2009_table_p4_1:row9:col1', 'von_2009_table_p4_1:row9:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['von_2009_table_p4_1:row1:col1', 'von_2009_table_p4_1:row1:col3', 'von_2009_table_p4_1:row1:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6 | ['von_2009_table_p4_1:row4:col1', 'von_2009_table_p4_1:row4:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 360 L/h | ['von_2009_table_p4_1:row4:col1', 'von_2009_table_p4_1:row4:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 800 L | ['von_2009_table_p4_1:row1:col1', 'von_2009_table_p4_1:row1:col3', 'von_2009_table_p4_1:row1:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzidovudine%5D%20Zidovudine_von2009_reference&body=Drug%3A%20zidovudine%0ARecord%3A%20Zidovudine_von2009_reference%0APaper%3A%20von_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zidovudine/Zidovudine_von2009_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:28 UTC</sub>
