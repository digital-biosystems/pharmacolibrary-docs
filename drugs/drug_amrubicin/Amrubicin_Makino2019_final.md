<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;amrubicin&quot;,&quot;href&quot;:&quot;drugs/drug_amrubicin/&quot;},{&quot;label&quot;:&quot;Makino_2019 \u00b7 final&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amrubicin — `Amrubicin_Makino2019_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Amrubicinol’s Vmax of 1.5 was dimensionally inconsistent as a structural parameter, so the record was rejected.

<div class="pk-model-meta" hidden drug="amrubicin" model-id="Amrubicin_Makino2019_final" status="rejected" stale="false" population="Japanese patients with lung cancer after platinum-based treatment" measured-compound="amrubicin and amrubicinol" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Makino Y, Makihara-Ando R, Ogawa T, Sato H, Goto Y, Kanda S et al. Individual optimal dose of amrubicin to prevent severe neutropenia in Japanese patients with lung cancer. Cancer science 110(11):3573–3583 (2019).
  ·  DOI: [10.1111/cas.14194](https://doi.org/10.1111/cas.14194)

## Population and dosing

**Population:** Japanese patients with lung cancer after platinum-based treatment · condition lung cancer after platinum-based treatment · age group adult · n = 50.

**Dosing:** 35, 40 mg/m2, iv, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed amrubicin, measured amrubicin and amrubicinol.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** apparent.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| tvVp, L | V2 | 9.8 | L | 33.3 (None% RSE) |
| tvCL2, L/h | Q | 9.2 | L/h |  |
| tvV3, L | V3 | 32.3 | L | 30.3 (None% RSE) |
| tvCL3, L/h | Q2 | 49.5 | L/h |  |
| tvVm, L | V | 1050.0 | L |  |
| tvCLp, L/h | CLfm | 19.5 | L/h |  |
| tvCLm, L/h | CL | 121.3 | L/h | 14.3 (None% RSE) |
| tvKdc, L/h | kfm | 0.1 | L/h |  |
| Cov BSA (Vm) | Vmax | 1.5 | Vm |  |
| Cov BSA (CLm) | CL | 1.8 | CLm | 18.3 (None% RSE) |
| Cov SLC28A3 (Kdc) | equation variable | -2.0 | Kdc |  |
| tvMMT | MTT | 172.6 |  |  |
| tvGamma, γ | equation variable | 0.4 | Kdc |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Amrubicinol’s Vmax of 1.5 was dimensionally inconsistent as a structural parameter, so the record was rejected.**

The record gives amrubicinol Vmax as 1.5 in unit Vm, meaning the maximum rate of enzymatic metabolism. The findings also state that a reported unit could not be converted to SI, leaving a parameter without an SI value, but do not identify which unit. Extracted — amrubicin: V2 9.8 L, Q 9.2 L/h, V3 32.3 L, Q2 49.5 L/h, MTT 173; amrubicinol: V 1.05e+03 L, CLfm 19.5 L/h, CL 121 L/h, kfm 0.1 L/h, Vmax 1.5 Vm, CL 1.8 CLm.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which molecule was measured: this record has amrubicin and amrubicinol, the second reading amrubicin; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| tvVp, L | `Q64` · V2 | 9.8 | L | 0.0098 | m3 | l | tv_prefix (0.95) | cas14194-tbl-0001:row4:col3, cas14194-tbl-0001:row4:col4 | 33.3 (None% RSE) |
| tvCL2, L/h | `Q30` · Q | 9.2 | L/h | 2.556e-06 | m3/s | l/h | exact (1) | cas14194-tbl-0001:row6:col3, cas14194-tbl-0001:row6:col4 |  |
| tvV3, L | `Q77` · V3 | 32.3 | L | 0.0323 | m3 | l | exact (1) | cas14194-tbl-0001:row7:col3, cas14194-tbl-0001:row7:col4 | 30.3 (None% RSE) |
| tvCL3, L/h | `Q99` · Q2 | 49.5 | L/h | 1.375e-05 | m3/s | l/h | exact (1) | cas14194-tbl-0001:row8:col3, cas14194-tbl-0001:row8:col4 |  |
| tvVm, L | `Q61` · V | 1050.0 | L | 1.05 | m3 | l | exact (1) | cas14194-tbl-0001:row9:col3, cas14194-tbl-0001:row9:col4 |  |
| tvCLp, L/h | `Q370` · CLfm | 19.5 | L/h | 5.417e-06 | m3/s | l/h | exact (1) | cas14194-tbl-0001:row10:col3, cas14194-tbl-0001:row10:col4 |  |
| tvCLm, L/h | `Q22` · CL | 121.3 | L/h | 3.369e-05 | m3/s | l/h | exact (1) | cas14194-tbl-0001:row11:col3, cas14194-tbl-0001:row11:col4 | 14.3 (None% RSE) |
| tvKdc, L/h | `Q305` · kfm | 0.1 | L/h |  |  | l/h | exact (1) | cas14194-tbl-0001:row12:col3, cas14194-tbl-0001:row12:col4 |  |
| Cov BSA (Vm) | `Q66` · Vmax | 1.5 | Vm |  |  | vm | llm (0.6) | cas14194-tbl-0001:row24:col3, cas14194-tbl-0001:row24:col4 |  |
| Cov BSA (CLm) | `Q22` · CL | 1.8 | CLm |  |  | clm | llm (0.6) | cas14194-tbl-0001:row26:col3, cas14194-tbl-0001:row26:col4 | 18.3 (None% RSE) |
| Cov SLC28A3 (Kdc) | `Q900` · equation variable | -2.0 | Kdc |  |  | kdc | llm (0.6) | cas14194-tbl-0001:row27:col3, cas14194-tbl-0001:row27:col4 |  |
| tvMMT | `Q81` · MTT | 172.6 |  |  |  |  | llm (0.6) | cas14194-tbl-0001:row36:col3, cas14194-tbl-0001:row36:col4 |  |
| tvGamma, γ | `Q900` · equation variable | 0.4 | Kdc |  |  | kdc | llm (0.6) | cas14194-tbl-0001:row37:col3, cas14194-tbl-0001:row37:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '−2 Log likelihood' — extend the ontology if this is a real PK parameter (source ['cas14194-tbl-0001:row3:col3'])
- dropped duplicate Q64 ('tvV2, L', value '28.5') — already have one for this compound
- unit_dimension_mismatch: 'tvKdc, L/h' → Q305 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_unknown: 'Vm' (Vmax)
- unit_dimension_unknown: 'CLp' (CL)
- dropped duplicate Q22 ('Cov BSA (CLp)', value '1.0') — already have one for this compound
- unit_dimension_mismatch: 'Cov BSA (CLm)' → Q351 (unit '[luminosity]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: 'Kdc' (equation variable)
- unit_dimension_mismatch: 'Cov PS (CLm)' → Q22 (unit '[luminosity]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('Cov PS (CLm)', value '-0.3') — already have one for this compound
- dropped duplicate Q305 ('Kdc=tvKdc·ecovSLC28A3(Kdc)·(SLC28A3)·eηKdc', value None) — already have one for this compound
- dropped unlinked row (NIL): '−2 Log Likelihood' — extend the ontology if this is a real PK parameter (source ['cas14194-tbl-0001:row34:col3'])
- dropped PD-category row 'tvCirc0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cas14194-tbl-0001:row35:col3', 'cas14194-tbl-0001:row35:col4'])
- dropped PD-category row 'tvGamma‐m, γm' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cas14194-tbl-0001:row38:col3', 'cas14194-tbl-0001:row38:col4'])
- dropped PD-category row 'tvSlope' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cas14194-tbl-0001:row39:col3', 'cas14194-tbl-0001:row39:col4'])
- dropped unlinked row (NIL): 'Cov PS (MMT)' — extend the ontology if this is a real PK parameter (source ['cas14194-tbl-0001:row43:col3', 'cas14194-tbl-0001:row43:col4'])
- unit inherited for equation variable (Q900): 'Kdc' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'Cov BSA (Vm)' — the LLM proposed '1', whose dimension does not fit Q66; left unset
- metabolite amrubicinol: Q351→Q22 — the model states fm, so its CL/V are not fm-divided
- metabolite volume: 'tvVm, L' Q63→Q61 for amrubicinol — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=amrubicin and amrubicinol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- model-stage split: 'final model' is the final model of Makino_2019 (paper reports 2 stages: base model, final model); same population, different model-building step
- row roles (LLM): model_class=compartmental; 37/37 row label(s) assigned, 50 linked by role; re-tagged parent→amrubicinol ×57

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.526 (10/19 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cov bsa].parameter_id` | Q66 | Q1 | mismatch |
| `qwen3.8-27b` | `parameters[cov bsa].value` | 1.5 | 1.0 | mismatch |
| `qwen3.8-27b` | `parameters[cov ps]` |  | -0.3 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cov slc28a3]` | -2.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[kdc=tvkdc ecovslc28a3(kdc) (slc28a3) eηkdc]` |  |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvgamma, γ]` | 0.4 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvkdc]` | 0.1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[tvmmt]` | 172.6 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | amrubicin and amrubicinol | amrubicin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cas14194-tbl-0001:row11:col3', 'cas14194-tbl-0001:row11:col4'] |
| C5_dimension_Q22 | fail | [luminosity] | CLm | ['cas14194-tbl-0001:row26:col3', 'cas14194-tbl-0001:row26:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cas14194-tbl-0001:row6:col3', 'cas14194-tbl-0001:row6:col4'] |
| C5_dimension_Q305 | fail | [length] ** 3 / [time] | L/h | ['cas14194-tbl-0001:row12:col3', 'cas14194-tbl-0001:row12:col4'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] |  | ['cas14194-tbl-0001:row10:col3', 'cas14194-tbl-0001:row10:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cas14194-tbl-0001:row9:col3', 'cas14194-tbl-0001:row9:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cas14194-tbl-0001:row4:col3', 'cas14194-tbl-0001:row4:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['cas14194-tbl-0001:row7:col3', 'cas14194-tbl-0001:row7:col4'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['cas14194-tbl-0001:row8:col3', 'cas14194-tbl-0001:row8:col4'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | Vm | ['cas14194-tbl-0001:row24:col3', 'cas14194-tbl-0001:row24:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 121 L/h | ['cas14194-tbl-0001:row11:col3', 'cas14194-tbl-0001:row11:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.05e+03 L | ['cas14194-tbl-0001:row9:col3', 'cas14194-tbl-0001:row9:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 9.8 L | ['cas14194-tbl-0001:row4:col3', 'cas14194-tbl-0001:row4:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamrubicin%5D%20Amrubicin_Makino2019_final&body=Drug%3A%20amrubicin%0ARecord%3A%20Amrubicin_Makino2019_final%0APaper%3A%20Makino_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amrubicin/Amrubicin_Makino2019_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:19 UTC</sub>
