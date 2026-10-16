<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemether&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/&quot;},{&quot;label&quot;:&quot;Lohy_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemether_Lohy2018_reference&quot;,&quot;label&quot;:&quot;Lohy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/Artemether_Lohy2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artemether — `Artemether_Lohy2018_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**T3_param_coverage.**

A reported unit could not be converted (MTT and MTT), so that value has no SI equivalent. Extracted — artemether: Fab 1, MTT 0.738 h, CL/F 467 liters/h, kabs 0.0577 h−1, tlag 1.31 h; lumefantrine: MTT 4.04 h, CL/F 4.49 liters/h, V1/F 139 liters, Q/F 0.924 liters/h, V2/F 111 liters; dihydroartemisinin: CL/F 611 liters/h, V1/F 137 liters.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemether-lumefantrine, the second reading artemether/lumefantrine; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Lohy Das J et al., Population Pharmacokinetics of Artemeth…, Antimicrobial agents and ch… (2018)
  ·  DOI: [10.1128/AAC.00518-18](https://doi.org/10.1128/AAC.00518-18)

<div class="pk-model-meta" hidden drug="artemether" model-id="Artemether_Lohy2018_reference" status="needs_review" stale="false" population="pregnant women" measured-compound="artemether" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent–metabolite model: parent with 2 compartment(s); metabolite dihydroartemisinin: 1 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameters:** 12 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | T2:row2:col1, T2:row12:col1 | — | 57.6 (36.8% RSE) |
| MTT (h) | `Q81` · MTT | 4.04 | h | not captured | [h] | 5.16 | exact (1.0) | T2:row4:col1 | — | 132 (37.9% RSE) |
| CL/F (liters/h) | `Q27` · CL/F | 4.49 | liters/h | 1.2472222222222223e-06 | [l] / [h] | 6.59 | exact (1.0) | T2:row6:col1 | — | not captured |
| Vc/F (liters) | `Q290` · V1/F | 139 | liters | 0.139 | [l] | 6.77 | exact (1.0) | T2:row7:col1 | — | 48.7 (56.8% RSE) |
| Q/F (liters/h) | `Q69` · Q/F | 0.924 | liters/h | 2.5666666666666666e-07 | [l] / [h] | 13.3 | exact (1.0) | T2:row8:col1 | — | not captured |
| Vp/F (liters) | `Q82` · V2/F | 111 | liters | 0.111 | [l] | 8.69 | exact (1.0) | T2:row9:col1 | — | not captured |
| MTT (h) | `Q81` · MTT | 0.738 | h | not captured | [h] | 12.5 | exact (1.0) | T2:row14:col1 | — | not captured |
| CLARM/F (liters/h) | `Q27` · CL/F | 467 | liters/h | 0.00012972222222222223 | [l] / [h] | 17.9 | llm (0.6) | T2:row16:col1 | — | not captured |
| CLDHA/F (liters/h) | `Q27` · CL/F | 611 | liters/h | 0.00016972222222222223 | [l] / [h] | 15.4 | exact (1.0) | T2:row23:col1 | — | not captured |
| VDHA/F (liters) | `Q290` · V1/F | 137 | liters | 0.137 | [l] | 38.9 | exact (1.0) | T2:row24:col1 | — | not captured |
| ka (h−1) | `Q49` · kabs | 0.0577 | h−1 | 1.6027777777777778e-05 | 1/h | not captured | review_gapfill (0.7) | Kloprogge_2015:review | — | not captured |
| Lag time (h) | `Q83` · tlag | 1.31 | h | 4716.0 | h | not captured | review_gapfill (0.7) | Kloprogge_2015:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'MTT (h)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'Vc/F (liters)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'F' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'CLARM/F (liters/h)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'VARM/F (liters)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'CLDHA/F (liters/h)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'VDHA/F (liters)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table representations disagree for 'F'; source reconciliation required
- table representations disagree for 'Box-Cox shape parameter for BSV on F'; source reconciliation required
- table representations disagree for 'MTT (h)'; source reconciliation required
- table representations disagree for 'CL/F (liters/h)'; source reconciliation required
- table representations disagree for 'Vc/F (liters)'; source reconciliation required
- table representations disagree for 'Q/F (liters/h)'; source reconciliation required
- table representations disagree for 'Vp/F (liters)'; source reconciliation required
- table representations disagree for 'RUV (%)'; source reconciliation required
- table representations disagree for 'CLARM/F (liters/h)'; source reconciliation required
- table representations disagree for 'Emax (h−1)'; source reconciliation required
- table representations disagree for 'EC50 (nM)'; source reconciliation required
- table representations disagree for 'TIMEENZ (h)'; source reconciliation required
- table representations disagree for 'CLDHA/F (liters/h)'; source reconciliation required
- table representations disagree for 'VDHA/F (liters)'; source reconciliation required
- dropped PD-category row 'Emax (h−1)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row19:col1'])
- dropped PD-category row 'EC50 (nM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row20:col1'])
- dropped unlinked row (NIL): 'TIMEENZ (h)' — extend the ontology if this is a real PK parameter (source ['T2:row21:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=artemether
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at route_to_review — not promoted
- row roles: 4 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 12 linked by role; re-tagged parent→lumefantrine ×8, parent→dihydroartemisinin ×5
- gap-filled Q49 (kabs) from Kloprogge_2015's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kloprogge_2015's review values (primary lacked it)

**Extraction notes:**
- table T2: ambiguous_numeric_format
- table T2: unparsed_numeric_cell
- table T2: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.12 (3/25 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['artemether', 'dihydroartemisinin', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 4.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 4.49 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clarm/f]` | 467 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cldha/f]` | 611 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.0577 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 1.31 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | not captured | 4.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 0.738 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | 0.924 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 0.924 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[timeenz]` | not captured | 30.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[varm/f]` | not captured | 3000 | only_one_extracted |
| `gpt-oss-120b` | `parameters[varm/f]` | 3000 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | not captured | 139 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 139 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdha/f]` | 137 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | not captured | 111 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 111 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | artemether-lumefantrine | artemether/lumefantrine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row16:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row23:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row7:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row24:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Kloprogge_2015:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row8:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row9:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Kloprogge_2015:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.49 L/h | not captured | not captured | ['T2:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 467 L/h | not captured | not captured | ['T2:row16:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 611 L/h | not captured | not captured | ['T2:row23:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 139 L | not captured | not captured | ['T2:row7:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 137 L | not captured | not captured | ['T2:row24:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 111 L | not captured | not captured | ['T2:row9:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[dihydroartemisinin] | not captured | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.137, 'CL': 0.00016972222222222223, 'formation': 1.2472222222222223e-06} | not captured | dihydroartemisinin = compartment M1 with its own numbers |
| T3_metabolite_output[dihydroartemisinin] | not captured | pass | not captured | 1.7911925202220216e-06 | not captured | C_M1 (dihydroartemisinin) must rise above 0 when the parent is dosed |
| T3_molar_mass[dihydroartemisinin] | not captured | pass | not captured | {'MW': 0.2983746, 'MW_m1': 0.284352} | not captured | formation is molecule-for-molecule |
| T3_output_variable | not captured | pass | C_central (measured=artemether) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 9 scholar param(s) emitted or defaulted | 8 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | not captured | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 30.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_artemether/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lohy_2018` / `Lohy_2018::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_artemether/models/modelica/Artemether_Lohy2018_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_artemether/models/modelica/Artemether_Lohy2018_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_artemether/models/modelica/Artemether_Lohy2018_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_modelica.zip" download>Artemether_Lohy2018_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_fmi.zip" download>Artemether_Lohy2018_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_matlab.zip" download>Artemether_Lohy2018_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_sbml.zip" download>Artemether_Lohy2018_reference_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_cellml.zip" download>Artemether_Lohy2018_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_3M_9C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference.svg" alt="Artemether_Lohy2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 80 mg, single dose, first-order absorption (ka 0.0577 /h, lag 78.6 min, F 1). Dose in the paper: 80 mg.

<dbs-fmusim paramsurl="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_3M_9C` · parameters `Artemether_Lohy2018_reference_params.json` · controls `Artemether_Lohy2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:01 UTC</sub>
