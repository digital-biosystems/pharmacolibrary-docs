<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;clopidogrel&quot;,&quot;href&quot;:&quot;drugs/toxin_clopidogrel/&quot;},{&quot;label&quot;:&quot;Jung_2024 \u00b7 standard_deviation::healthy male participants&quot;}]"></div>

# clopidogrel — `Clopidogrel_Jung2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** a compartment is unreachable, or a metabolite is unlinked

**Steps:**
1. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
2. Parent/metabolite records commonly miss the formation link.

<sub>owner: **curator** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-11 08:46:45.714133+00:00) predates the upstream re-run (2026-09-16 19:15:46.800579+00:00). Current validate status: `rejected`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jung YS; Jin BH; Park MS; Kim CO; Chae D et al. (2024). CPT: pharmacometrics & systems pharmacology 13
  ·  DOI: [10.1002/psp4.13053](https://doi.org/10.1002/psp4.13053)

<div class="pk-model-meta" hidden drug="clopidogrel" model-id="Clopidogrel_Jung2024_reference" status="rejected" stale="true" population="healthy male adults" measured-compound="clopidogrel" parameterization="apparent" topology="general_linear"></div>

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V c (=VH) (L) | `Q63` · V1 | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | psp413053-tbl-0002:row2:col1, psp413053-tbl-0002:row2:col2 | — | not captured |
| V p (L) | `Q64` · V2 | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | psp413053-tbl-0002:row3:col1 | — | not captured |
| CLc (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | central_subscript (0.9) | psp413053-tbl-0002:row4:col1, psp413053-tbl-0002:row4:col2 | — | not captured |
| Q c (L/h) | `Q30` · Q | —(suppressed) | L/h | — | [l] / [h] | not captured | llm (0.6) | psp413053-tbl-0002:row6:col1, psp413053-tbl-0002:row6:col2 | — | not captured |
| k a (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | not captured | space_fold (0.95) | psp413053-tbl-0002:row8:col1 | — | not captured |
| T lag (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | space_fold (0.95) | psp413053-tbl-0002:row9:col1 | — | not captured |
| fm1 | `Q45` · fm | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | psp413053-tbl-0002:row12:col1, psp413053-tbl-0002:row12:col2 | — | not captured |
| CLm1 (L/h) | `Q351` · CLm/F | —(suppressed) | L/h | — | [l] / [h] | not captured | llm (0.6) | psp413053-tbl-0002:row19:col1 | — | not captured |
| V m2 (L) | `Q352` · Vnorm | —(suppressed) | L | — | [l] | not captured | llm (0.6) | psp413053-tbl-0002:row20:col1 | — | not captured |
| V p2 (L) | `Q77` · V3 | —(suppressed) | L | — | [l] | not captured | space_fold (0.95) | psp413053-tbl-0002:row21:col1, psp413053-tbl-0002:row21:col2 | — | not captured |
| theta_fm_im_power | `Q900` · theta_fm_im_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp413053-tbl-0002:row13:col1 | — | not captured |
| theta_fm_pm_power | `Q900` · theta_fm_pm_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp413053-tbl-0002:row14:col1 | — | not captured |
| theta_fm_im_power | `Q900` · theta_fm_im_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp413053-tbl-0002:row16:col1 | — | not captured |
| theta_fm_pm_power | `Q900` · theta_fm_pm_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | psp413053-tbl-0002:row17:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Cor(Vc, CLc)' (captured trailing unit 'Vc, CLc' for child rows)
- dropped duplicate Q30 ('Q p (L/h)', value '587.93') — already have one for this compound
- dropped duplicate Q45 ('fm2', value '0.960') — already have one for this compound
- dropped duplicate Q63 ('V m1 (L)', value '51.45') — already have one for this compound
- dropped duplicate Q22 ('CLm2 (L/h)', value '7.248') — already have one for this compound
- dropped duplicate Q30 ('Q m2 (L/h)', value '4.476') — already have one for this compound
- dropped PD-category row 'K in' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row27:col1', 'psp413053-tbl-0002:row27:col2'])
- dropped PD-category row 'K out (h−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row28:col1'])
- dropped PD-category row 'E max' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row29:col1', 'psp413053-tbl-0002:row29:col2'])
- dropped PD-category row 'EC50 (ng/mL)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row30:col1'])
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp413053-tbl-0002:row31:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clopidogrel
- topology: 2 first-order transfer(s) across 3 compounds → general_linear

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Ground-truth comparison:** <span class="pk-badge pk-badge--orange">unconfirmed</span>  (8/10 matched, agreement 0.8, tol 0.25)

| o_id | agreement | extracted | truth | fold |
|---|---|---|---|---|
| `Q22` · CL | match | 9257.28 L/h | 9257.28 L/h | 1.0 |
| `Q30` · Q | value_mismatch | 845.70 L/h | 587.93 L/h | 1.438 |
| `Q351` · CLm/F | match | 74.25 L/h | 74.25 L/h | 1.0 |
| `Q352` · Vnorm | extra_in_extraction | 17.34 | None | not captured |
| `Q367` · Vm/F | missing_in_extraction | None | 51.45 | not captured |
| `Q45` · fm | match | 0.125 | 0.125 | 1.0 |
| `Q49` · kabs | match | 19.64 h−1 | 19.64 1/h | 1.0 |
| `Q63` · V1 | match | 1463.92 L | 1463.92 L | 1.0 |
| `Q64` · V2 | match | 2823.98 L | 2823.98 L | 1.0 |
| `Q77` · V3 | extra_in_extraction | 51.89 | None | not captured |
| `Q83` · tlag | match | 0.196 h | 0.196 h | 1.0 |
| `Q900` · equation variable | match | -2.432 | 4.476 L/h | -0.543 |

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 14 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413053-tbl-0002:row4:col1', 'psp413053-tbl-0002:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413053-tbl-0002:row6:col1', 'psp413053-tbl-0002:row6:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413053-tbl-0002:row19:col1'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413053-tbl-0002:row20:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413053-tbl-0002:row8:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413053-tbl-0002:row2:col1', 'psp413053-tbl-0002:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413053-tbl-0002:row3:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413053-tbl-0002:row21:col1', 'psp413053-tbl-0002:row21:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp413053-tbl-0002:row9:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=0.125 present with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.26e+03 L/h | not captured | not captured | ['psp413053-tbl-0002:row4:col1', 'psp413053-tbl-0002:row4:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.46e+03 L | not captured | not captured | ['psp413053-tbl-0002:row2:col1', 'psp413053-tbl-0002:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.82e+03 L | not captured | not captured | ['psp413053-tbl-0002:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clopidogrel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jung_2024` / `Jung_2024::standard_deviation::healthy male participants`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
