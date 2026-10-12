<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;oseltamivir&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/&quot;},{&quot;label&quot;:&quot;Wang_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oseltamivir_Lin2012_reference&quot;,&quot;label&quot;:&quot;Lin_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oseltamivir/Oseltamivir_Lin2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oseltamivir — `Oseltamivir_Wang2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Q and Vmax have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Vmax), so that value has no SI equivalent. Extracted — oseltamivir: kel 0.653 1/h, V1 86.8 L, kabs 0.878 1/h, Q 0.226, t1/2z 0.274 d, CLm/F 3.11 mL/d, Vmax 109 copies/mL; oseltamivir carboxylate: CLm/F 5.93 mL/d, CLm,norm/F 0.151 L/h/kg, V1 68.2 L, V2 0.182 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has oseltamivir, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `oseltamivir`, measured `oseltamivir carboxylate`.

## Citation
Wang K et al., Oseltamivir drug-disease modelling in i…, British journal of clinical… (2026)
  ·  DOI: [10.1002/bcp.70623](https://doi.org/10.1002/bcp.70623)

<div class="pk-model-meta" hidden drug="oseltamivir" model-id="Oseltamivir_Wang2026_reference" status="needs_review" stale="false" population="infants and toddlers (birth through 23 months) with influenza virus infection" measured-compound="oseltamivir carboxylate" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** CLm,norm/F, CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K e (1/h) | `Q47` · kel | 0.653 | 1/h | 0.0001813888888888889 | 1/h | 21.7 | exact (1.0) | bcp70623-tbl-0001:row1:col1 | — | 11.9 (95.9% RSE) |
| V c (L) | `Q63` · V1 | 86.8 | L | 0.0868 | [l] | 22.5 | space_fold (0.95) | bcp70623-tbl-0001:row2:col1 | — | 52.1 (22.7% RSE) |
| K a (1/h) | `Q49` · kabs | 0.878 | 1/h | 0.0002438888888888889 | 1/h | 26.5 | exact (1.0) | bcp70623-tbl-0001:row3:col1 | — | 46.3 (48.3% RSE) |
| K cp (1/h) | `Q30` · Q | 0.226 | not captured | not captured | not captured | 29.3 | exact (1.0) | bcp70623-tbl-0001:row4:col1 | — | not captured |
| CL m1 | `Q351` · CLm/F | 5.93 | mL/d | 6.863425925925925e-11 | [ml] / [d] | 6.94 | metabolite_elimination (0.85) | bcp70623-tbl-0001:row7:col1, bcp70623-tbl-0001:footnote | — | not captured |
| CL m2 | `Q375` · CLm,norm/F | 0.151 | L/h/kg | 2.936111111111111e-06 | L/h | 6.85 | llm_corrected (0.6) | bcp70623-tbl-0001:row8:col1, bcp70623-tbl-0001:footnote | — | not captured |
| V m1 | `Q63` · V1 | 68.2 | L | 0.06820000000000001 | [l] | 11.7 | llm (0.6) | bcp70623-tbl-0001:row10:col1, bcp70623-tbl-0001:footnote | — | not captured |
| V m2 | `Q64` · V2 | 0.182 | L/kg | 0.01274 | L | 5.51 | llm (0.6) | bcp70623-tbl-0001:row11:col1, bcp70623-tbl-0001:footnote | — | not captured |
| T 1 (d) | `Q57` · t1/2z | 0.274 | d | 23673.600000000002 | [d] | 23.3 | llm (0.6) | bcp70623-tbl-0001:row16:col1 | — | not captured |
| c (mL/d) | `Q351` · CLm/F | 3.11 | mL/d | 3.5995370370370366e-11 | [ml] / [d] | 17.5 | llm (0.6) | bcp70623-tbl-0001:row17:col1 | — | not captured |
| V max (copies/mL) | `Q66` · Vmax | 109 | copies/mL | not captured | [copies] / [ml] | not captured | special_case (0.95) | bcp70623-tbl-0001:row19:col1 | — | 45.5 (22.2% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'K e (1/h)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'V c (L)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'K a (1/h)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'K cp (1/h)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'K pc (1/h)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'CL m (L/h)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'V m (L)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'τ (1/h)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'IC 50 (ng/mL)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'T 1 (d)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'c (mL/d)' routed out of structural estimates ('IIV CV% (%RSE)')
- table section iiv: 'c 1 (mL/d)' routed out of structural estimates ('IIV CV% (%RSE)')
- dropped duplicate Q30 ('K pc (1/h)', value '0.0805') — already have one for this compound
- relinked 'CL m1' Q370 → Q22 for oseltamivir carboxylate: a metabolite's own clearance is its elimination, not its formation
- dropped unlinked row (NIL): 'τ1' — extend the ontology if this is a real PK parameter (source ['bcp70623-tbl-0001:row13:col1', 'bcp70623-tbl-0001:footnote'])
- dropped unlinked row (NIL): 'τ2' — extend the ontology if this is a real PK parameter (source ['bcp70623-tbl-0001:row14:col1', 'bcp70623-tbl-0001:footnote'])
- dropped PD-category row 'IC 50 (ng/mL)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp70623-tbl-0001:row15:col1'])
- dropped duplicate Q22 ('c 1 (mL/d)', value '0.515') — already have one for this compound
- unit_dimension_unknown: 'copies/mL' (Vmax)
- dropped value-less row: 'K a'
- dropped value-less row: 'K cp'
- dropped value-less row: 'K pc'
- dropped value-less row: 'K e'
- dropped value-less row: 'V c'
- dropped value-less row: 'τ'
- dropped value-less row: 'CL m'
- dropped value-less row: 'V m'
- dropped value-less row: 'T 1'
- dropped value-less row: 'ε'
- dropped value-less row: 'v'
- dropped value-less row: 'c'
- dropped value-less row: 'c 1'
- dropped value-less row: 'IC50'
- dropped value-less row: 'V max'
- unit inherited for CL (Q22): 'mL/d' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for V1 (Q63): 'L' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'K e (1/h)' → 1/h (from the paper text: "Table caption: 'K e is the elimination rate constant.' Rate constants are first-order; value 0.653 consistent with 1/h.")
- implicit units: 'K a (1/h)' → 1/h (from the paper text: "Table caption: 'K a is the absorption rate constant of oseltamivir.' First-order rate constant, 1/h.")
- implicit units: 'K cp (1/h)' — the LLM proposed '1/h', whose dimension does not fit Q30; left unset
- implicit units: 'CL m2' → L/h/kg (from the popPK convention: "CL m2 is the slope parameter for clearance vs weight (text: 'CL m2 ... are the respective slope parameters for clearance")
- implicit units: 'V m2' → L/kg (from the popPK convention: "V m2 is the slope parameter for distribution volume vs weight (text: 'V m2 are the respective slope parameters for ... d")
- implicit units: 'V max (copies/mL)' — the LLM proposed 'copies/mL', whose dimension does not fit Q66; left unset
- metabolite oseltamivir carboxylate: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite oseltamivir carboxylate: Q354→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=oseltamivir carboxylate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 34/34 row label(s) assigned, 13 linked by role; re-tagged parent→oseltamivir carboxylate ×11, oseltamivir carboxylate→parent ×5
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (12/30 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[c].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cl m1].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cl m2]` | 0.151 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 0.878 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | not captured | 0.878 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k cp]` | 0.226 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k cp]` | not captured | 0.226 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k e]` | 0.653 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k e]` | not captured | 0.653 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k pc]` | not captured | 0.0805 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c]` | 86.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c]` | not captured | 86.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v m1].parameter_id` | Q63 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[v m2].parameter_id` | Q64 | Q352 | mismatch |
| `gpt-oss-120b` | `parameters[τ1]` | not captured | 6.15 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | oseltamivir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | oseltamivir carboxylate | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70623-tbl-0001:row17:col1'] |
| C5_dimension_Q375 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70623-tbl-0001:row8:col1', 'bcp70623-tbl-0001:footnote'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp70623-tbl-0001:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp70623-tbl-0001:row3:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['bcp70623-tbl-0001:row16:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70623-tbl-0001:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp70623-tbl-0001:row11:col1', 'bcp70623-tbl-0001:footnote'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp70623-tbl-0001:row4:col1'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | copies/mL | not captured | not captured | ['bcp70623-tbl-0001:row19:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 86.8 L | not captured | not captured | ['bcp70623-tbl-0001:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 68.2 L | not captured | not captured | ['bcp70623-tbl-0001:row10:col1', 'bcp70623-tbl-0001:footnote'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.7 L | not captured | not captured | ['bcp70623-tbl-0001:row11:col1', 'bcp70623-tbl-0001:footnote'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oseltamivir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2026` / `Wang_2026::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:06 UTC</sub>
