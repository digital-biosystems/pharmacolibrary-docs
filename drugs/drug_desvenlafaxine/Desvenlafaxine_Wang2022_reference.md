<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desvenlafaxine&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/&quot;},{&quot;label&quot;:&quot;Wang_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desvenlafaxine_MangasSanjun2023_reference&quot;,&quot;label&quot;:&quot;Mangas-Sanju\u00e1n_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# desvenlafaxine — `Desvenlafaxine_Wang2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-05 09:26 UTC) predates the latest extraction (2026-10-06 22:21 UTC); the status shown comes from the current checks. The record was rejected because apparent parameters (CL/F 80.9 L/h, V/F 628 L) were combined with an absolute bioavailability of 0.048, double-correcting for F in the venlafaxine/O-desmethyl venlafaxine model.

<div class="pk-model-meta" hidden drug="desvenlafaxine" model-id="Desvenlafaxine_Wang2022_reference" status="needs_review" stale="true" population="healthy volunteers and psychiatric patients" measured-compound="O-desmethyl venlafaxine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Wang Z, Li L, Huang S, Wang X, Liu S, Li X et al. Joint population pharmacokinetic modeling of venlafaxine and O-desmethyl venlafaxine in healthy volunteers and patients to evaluate the impact of morbidity and concomitant medication. Frontiers in pharmacology 13:978202 (2022).
  ·  DOI: [10.3389/fphar.2022.978202](https://doi.org/10.3389/fphar.2022.978202)

## Population and dosing

**Population:** healthy volunteers and psychiatric patients · condition healthy and psychiatric disorders (depression/anxiety) · age group adult · n = 151.

**Dosing:** 50 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed venlafaxine, measured O-desmethyl venlafaxine.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F, L/h | CL/F | 80.9 | L/h | 0.219 (None% RSE) |
| V/F, L | V/F | 628 | L | 0.106 (None% RSE) |
| CLM/F, L/h | CL/F | 22.1 | L/h |  |
| V M/F, L | V1/F | 238 | L |  |
| Ka, 1/h | kabs | 0.63 | 1/h |  |
| FP | fm | 0.048 |  |  |
| θamisulpride on CLM/F | CL | 0.593 |  | 0.156 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because apparent parameters (CL/F 80.9 L/h, V/F 628 L) were combined with an absolute bioavailability of 0.048, double-correcting for F in the venlafaxine/O-desmethyl venlafaxine model.**

The paper reports CL/F, V/F, CLm/F (22.1 L/h) and Vm/F (238 L), all already adjusted for bioavailability, yet the record also carries an absolute bioavailability Fab of 0.048; applying both corrections violates apparent-parameter coherence. The record is also internally inconsistent: it is filed under desvenlafaxine while the measured compound is venlafaxine, and the metabolite clearance covariate is labelled 'θamisulpride on CLm/F' (0.593 L/h) despite no amesulpride in the model. A second reader disagreed on whether the bioavailability covariate (0.048) and the metabolite parameters CLm/F and Vm/F belong in the record, leaving those fields contested. Extracted — desvenlafaxine: CL/F 80.9 L/h, V/F 628 L, kabs 0.63 1/h, Fab 0.048, CLm/F 0.593 L/h; O-desmethyl venlafaxine: CLm/F 22.1 L/h, Vm/F 238 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has venlafaxine, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F, L/h | `Q27` · CL/F | 80.9 | L/h | 2.247e-05 | m3/s | l/h | exact (1) | T2:row1:col1 | 0.219 (None% RSE) |
| V/F, L | `Q76` · V/F | 628 | L | 0.628 | m3 | l | exact (1) | T2:row2:col1 | 0.106 (None% RSE) |
| CLM/F, L/h | `Q27` · CL/F | 22.1 | L/h | 6.139e-06 | m3/s | l/h | exact (1) | T2:row3:col1 |  |
| V M/F, L | `Q290` · V1/F | 238 | L | 0.238 | m3 | l | exact (1) | T2:row4:col1 |  |
| Ka, 1/h | `Q49` · kabs | 0.63 | 1/h | 0.000175 | 1/s | 1/h | exact (1) | T2:row5:col1 |  |
| FP | `Q45` · fm | 0.048 |  |  |  |  | exact (1) | T2:row6:col1 |  |
| θamisulpride on CLM/F | `Q22` · CL | 0.593 |  |  |  |  | llm_confirmed (0.6) | T2:row9:col1 | 0.156 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability, %CV')
- table section iiv: 'V/F' routed out of structural estimates ('Interindividual variability, %CV')
- table section iiv: 'CLM/F' routed out of structural estimates ('Interindividual variability, %CV')
- table section iiv: 'V M/F' routed out of structural estimates ('Interindividual variability, %CV')
- table section residual_error: 'Proportional error on VEN' routed out of structural estimates ('Residual variability, % CV')
- table section residual_error: 'Proportional error on ODV' routed out of structural estimates ('Residual variability, % CV')
- dropped duplicate Q27 ('θmorbid state on CL/F', value '0.617') — already have one for this compound
- dropped duplicate Q27 ('θamisulpride on CL/F', value '0.392') — already have one for this compound
- metabolite o-desmethyl venlafaxine (desvenlafaxine): Q351→Q22 — the model states fm, so its CL/V are not fm-divided
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=O-desmethyl venlafaxine
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [1] (site presystemic: 'Results and conclusion: Concentrations of VEN and ODV were well described with a one-compartment model incorporating fir')
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 6 linked by role; re-tagged parent→O-desmethyl venlafaxine (desvenlafaxine) ×7
- review gap-fill skipped: this record measures 'O-desmethyl venlafaxine', not desvenlafaxine — the review values are the parent's

**Extraction notes:**
- unparsed cell T2:row1:col2 = '9.7%'
- unparsed cell T2:row2:col2 = '5.8%'
- unparsed cell T2:row3:col2 = '6.6%'
- unparsed cell T2:row4:col2 = '33.1%'
- unparsed cell T2:row6:col2 = '18.3%'
- unparsed cell T2:row7:col2 = '5.9%'
- unparsed cell T2:row8:col2 = '17.8%'
- unparsed cell T2:row9:col2 = '28.7%'
- unparsed cell T2:row11:col2 = '13.4%'
- unparsed cell T2:row12:col2 = '35.2%'
- unparsed cell T2:row13:col2 = '19.4%'
- unparsed cell T2:row14:col2 = '39.3%'
- unparsed cell T2:row16:col2 = '8.5%'
- unparsed cell T2:row17:col2 = '13.6%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (2/18 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f]` | 80.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 80.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` |  | 22.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` | 22.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fp]` |  | 0.048 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fp]` | 0.048 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.63 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v m/f]` |  | 238 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v m/f]` | 238 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 628 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 628 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θamisulpride on clm/f]` |  | 0.593 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θamisulpride on clm/f]` | 0.593 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | venlafaxine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | O-desmethyl venlafaxine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row1:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T2:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['T2:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['T2:row2:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['T2:row9:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 80.9 L/h | ['T2:row1:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.1 L/h | ['T2:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 238 L | ['T2:row4:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 628 L | ['T2:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdesvenlafaxine%5D%20Desvenlafaxine_Wang2022_reference&body=Drug%3A%20desvenlafaxine%0ARecord%3A%20Desvenlafaxine_Wang2022_reference%0APaper%3A%20Wang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_desvenlafaxine/Desvenlafaxine_Wang2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:21 UTC</sub>
