<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;remdesivir&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/&quot;},{&quot;label&quot;:&quot;Zhang_2025 \u00b7 parameters_for_healthy_control_zhang_et_al_2020&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remdesivir_Humeniuk2021_reference&quot;,&quot;label&quot;:&quot;Humeniuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Humeniuk2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remdesivir_Morrisette2020_reference&quot;,&quot;label&quot;:&quot;Morrisette_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Morrisette2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remdesivir — `Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.353), gpt-oss:120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Humeniuk_2021) cannot stand in for this paper's evidence. Extracted — remdesivir: Q 0.19 L/h, kic 3.28e+10 1/h, CL 2.99 L/h, V 93 L; intermediate metabolites: Q 12.5 L/h; nucleoside monophosphate: Q 0.039 L/h, CLfm 2.44 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has remdesivir → intermediate metabolites (im) (metabolism); intermediate metabolites (im) → nucleoside monophosphate (nuc) (metabolism), the second reading remdesivir → intermediate metabolites (metabolism); intermediate metabolites → nucleoside monophosphate (metabolism); remdesivir → gs-443902 (metabolism); it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:31:36.068706+00:00) predates the upstream re-run (2026-10-07 16:33:33.401536+00:00). Current validate status: `needs_review`.

## Citation
Zhang S et al., Pharmacokinetic simulations for remdesi…, Frontiers in pharmacology (2025)
  ·  DOI: [10.3389/fphar.2025.1488961](https://doi.org/10.3389/fphar.2025.1488961)

<div class="pk-model-meta" hidden drug="remdesivir" model-id="Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et" status="needs_review" stale="true" population="healthy subjects and patients with renal impairment" measured-compound="remdesivir" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| QRDV | `Q900` · equation variable | 0.19 | Zhang et al., 2020 | not captured | [zhangetal] | not captured | llm (0.6) | T1:row1:col2 | — | not captured |
| QIM | `Q30` · Q | 12.53 | L/h | 3.4805555555555554e-06 | L/h | not captured | exact (1.0) | T1:row2:col2 | — | not captured |
| QNUC | `Q30` · Q | 0.039 | L/h | 1.0833333333333333e-08 | L/h | not captured | exact (1.0) | T1:row3:col2 | — | not captured |
| KP,NUC | `Q370` · CLfm | 2.44 | L/h | 6.777777777777778e-07 | L/h | not captured | exact (1.0) | T1:row5:col2 | — | not captured |
| KP,NTP | `Q350` · kic | 3.28E10 | 1/h | 9111111.111111112 | 1/h | not captured | exact (1.0) | T1:row6:col2 | — | not captured |
| CLC,RDV | `Q22` · CL | 2.99 | L/h | 8.305555555555556e-07 | L/h | not captured | llm (0.6) | T1:row9:col2 | — | not captured |
| theta_q370_im | `Q900` · theta_q370_im | 0.31 | not captured | not captured | not captured | not captured | not captured (not captured) | T1:row4:col2 | — | not captured |
| theta_q370_im | `Q900` · theta_q370_im | 0.22 | not captured | not captured | not captured | not captured | not captured (not captured) | T1:row8:col2 | — | not captured |
| RDV Vz | `Q61` · V | 92.6 | L | 0.0926 | L | not captured | review_gapfill (0.7) | Humeniuk_2021:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'Zhang et al., 2020' (equation variable)
- unit_dimension_unknown: 'Zhang et al., 2020' (Q)
- unit_dimension_unknown: 'Zhang et al., 2020' (CLfm)
- unit_dimension_unknown: 'Zhang et al., 2020' (kic)
- dropped duplicate Q370 ('KC,NUC', value '0.38') — already have one for this compound
- unit_dimension_unknown: 'Zhang et al., 2020' (CL)
- covariate effect for Q370 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'QIM' → L/h (from the popPK convention: 'The paper states no unit for Q in the table caption, text, or footnotes; Q is an intercompartmental clearance, conventio')
- implicit units: 'QNUC' → L/h (from the popPK convention: 'No unit stated in the paper for Q; intercompartmental clearances are conventionally in L/h, consistent with the small va')
- implicit units: 'KP,NUC' → L/h (from the popPK convention: 'No unit stated in the paper; KP,NUC is a formation clearance (CLfm), and formation clearances are conventionally express')
- implicit units: 'KP,NTP' → 1/h (from the popPK convention: 'No unit stated in the paper; KP,NTP is a first-order intracellular conversion rate constant (kic), conventionally in 1/h')
- implicit units: 'CLC,RDV' → L/h (from the popPK convention: 'No unit stated in the paper; CLC,RDV is a total clearance (CL), conventionally in L/h, consistent with the value 2.99 fo')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remdesivir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'parameters for healthy control (zhang et al., 2020)' subgroup of Zhang_2025 (paper reports 3 populations: parameters for a renal-impaired patient with egfr = 0 (sörgel et al., 2021), parameters for healthy control (zhang et al., 2020), parameters for severe renal-impaired patients (zhang et al., 2020))
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 24 linked by role; re-tagged parent→intermediate metabolites (IM) ×9, parent→nucleoside monophosphate (NUC) ×9
- molar mass: no plausible PubChem entry for 'intermediate metabolites (IM)' ('Remdesivir Alanine Metabolite (Ala-Met; GS-704277)') — left in mass units
- molar mass: none found for 'intermediate metabolites (IM)' — its concentrations stay mass-only
- gap-filled Q61 (V) from Humeniuk_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T1:row0:col2 = 'Parameters for healthy control (Zhang et al., 2020)'
- unparsed cell T1:row0:col3 = 'Parameters for severe renal-impaired patients (Zhang et al., 2020)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.353 (6/17 fields) | 11 |
| `gpt-oss:120b` | not confirmed | 0.375 (6/16 fields) | 10 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['remdesivir', 'intermediate metabolites (im)', 'metabolism'], ['intermediate metabolites (im)', 'nucleoside monophosphate (nuc)', 'metabolism']] | [['remdesivir', 'intermediate metabolites', 'metabolism'], ['intermediate metabolites', 'nucleoside monophosphate', 'metabolism'], ['remdesivir', 'gs-443902', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[kp,nuc]` | not captured | 2.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kp,nuc]` | 2.44 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qim]` | not captured | 12.53 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qim]` | 12.53 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qnuc]` | not captured | 0.039 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qnuc]` | 0.039 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qrdv].parameter_id` | Q900 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[rdv vz]` | 92.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q370_im]` | not captured | 0.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q370_im]` | 0.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [['remdesivir', 'intermediate metabolites', 'metabolism'], ['intermediate metabolites', 'nucleoside monophosphate', 'metabolism']] | [['remdesivir', 'intermediate metabolites (im)', 'metabolism'], ['intermediate metabolites (im)', 'nucleoside monophosphate (nuc)', 'metabolism'], ['nucleoside monophosphate (nuc)', 'gs-443902', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[clc,rdv].parameter_id` | Q22 | Q26 | mismatch |
| `gpt-oss:120b` | `parameters[kp,nuc]` | 2.44 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kp,nuc]` | not captured | 2.44 | only_one_extracted |
| `gpt-oss:120b` | `parameters[qim]` | 12.53 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[qim]` | not captured | 12.53 | only_one_extracted |
| `gpt-oss:120b` | `parameters[qnuc]` | 0.039 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[qnuc]` | not captured | 0.039 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q370_im]` | 0.31 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q370_im]` | not captured | 0.31 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row9:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row3:col2'] |
| C5_dimension_Q350 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row6:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Humeniuk_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.99 | not captured | not captured | ['T1:row9:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.99 L/h | not captured | not captured | ['T1:row9:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 92.6 L | not captured | not captured | ['Humeniuk_2021:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_remdesivir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2025` / `Zhang_2025::parameters_for_healthy_control_zhang_et_al_2020`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:33 UTC</sub>
