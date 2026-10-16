<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;fenbendazole&quot;,&quot;href&quot;:&quot;drugs/drug_fenbendazole/&quot;},{&quot;label&quot;:&quot;Bach_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fenbendazole — `Fenbendazole_Bach2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.68). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the peripheral volume of distribution V2 for fenbendazole is reported as 34.7 mg — a mass unit for a structural volume parameter — a dimension mismatch, and the absolute bioavailability Fab carries no value.**

The parameter θ2, meaning the volume of distribution of the peripheral compartment (V2), is given as 34.7 with unit 'mg', which is dimensionally incompatible with a volume; the reported unit could not be converted to SI, so the parameter arrived without an SI value. In addition, the absolute bioavailability Fab (label 'F') is listed without any value or unit. All other parameters (CL 0.541 L/h, kabs 1.59 h−1, V/F 35.2 L, metabolite rate constants) carry consistent units. Extracted — fenbendazole: CL 0.541 L/h, V2 34.7 mg, kabs 1.59 h−1, V/F 35.2 liters, fm 0.000162, kel 0.0942 h−1; oxfendazole sulfone: kfm 0.00134 h−1, fm 0.0042, kel 0.105 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has fenbendazole, the second reading oxfendazole; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `oxfendazole`, measured `fenbendazole`.

## Citation
Bach T et al., Population Pharmacokinetic Model of Oxf…, Antimicrobial agents and ch… (2021)
  ·  DOI: [10.1128/AAC.02129-20](https://doi.org/10.1128/AAC.02129-20)

<div class="pk-model-meta" hidden drug="fenbendazole" model-id="Fenbendazole_Bach2021_reference" status="rejected" stale="false" population="healthy adults" measured-compound="fenbendazole" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 | `Q22` · CL | 0.541 | L/h | 1.502777777777778e-07 | L/h | 2.1 | llm (0.6) | Bach_2021_table_p6_1:row0:col1, Bach_2021_table_p6_1:row0:col2, Bach_2021_table_p6_1:row0:col3 | — | not captured |
| θ2 (mg) | `Q64` · V2 | 34.7 | mg | not captured | [mg] | not captured | llm (0.6) | Bach_2021_table_p6_1:row1:col2 | — | not captured |
| ka (h−1) | `Q49` · kabs | 1.59 | h−1 | 0.0004416666666666667 | [1] / [h] | 10.6 | exact (1.0) | Bach_2021_table_p6_1:row2:col2, Bach_2021_table_p6_1:row2:col3 | — | not captured |
| VOXF (liters) | `Q76` · V/F | 35.2 | liters | 0.0352 | [l] | 6.1 | llm (0.6) | Bach_2021_table_p6_1:row4:col2, Bach_2021_table_p6_1:row4:col3 | — | not captured |
| kgut,OXF-SO2 (h−1) | `Q305` · kfm | 0.00134 | h−1 | 3.722222222222222e-07 | [1] / [h] | 9.7 | exact (1.0) | Bach_2021_table_p6_1:row5:col2, Bach_2021_table_p6_1:row5:col3 | — | not captured |
| FM1 | `Q45` · fm | 0.00420 | not captured | not captured | not captured | 7.6 | exact (1.0) | Bach_2021_table_p6_1:row6:col2, Bach_2021_table_p6_1:row6:col3 | — | not captured |
| ke,OXF-SO2 (h−1) | `Q47` · kel | 0.105 | h−1 | 2.9166666666666666e-05 | [1] / [h] | 5.1 | exact (1.0) | Bach_2021_table_p6_1:row7:col2, Bach_2021_table_p6_1:row7:col3 | — | not captured |
| FM2 | `Q45` · fm | 0.000162 | not captured | not captured | not captured | 13.2 | exact (1.0) | Bach_2021_table_p6_1:row8:col2, Bach_2021_table_p6_1:row8:col3 | — | not captured |
| ke,FEN (h−1) | `Q47` · kel | 0.0942 | h−1 | 2.6166666666666668e-05 | [1] / [h] | 12.7 | exact (1.0) | Bach_2021_table_p6_1:row9:col2, Bach_2021_table_p6_1:row9:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'hepatic blood flow' routed out of structural estimates ('TABLE 1 Final estimates of oxfendazole and metabolite pharmacokinetic parameters, interindividual variability, and residual variability')
- table section iiv: 'human plasma volume' routed out of structural estimates ('TABLE 1 Final estimates of oxfendazole and metabolite pharmacokinetic parameters, interindividual variability, and residual variability')
- table section iiv: 'total body water volume' routed out of structural estimates ('TABLE 1 Final estimates of oxfendazole and metabolite pharmacokinetic parameters, interindividual variability, and residual variability')
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'θ2 (mg)' → Q64 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q22 ('CLOXF (liters/h)', value '2.57') — already have one for this compound
- implicit units: 'θ1' → L/h (from the popPK convention: 'No unit stated for this parameter in text, caption, or footnotes. Total clearance of oxfendazole is discussed in the tex')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fenbendazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [0, 0] (site presystemic: 'Our final model incorporated mechanistic characterization of dose-limited bioavailability as well as different oxfendazo')
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 17 linked by role; re-tagged parent→oxfendazole sulfone ×12, parent→fenbendazole ×10, fenbendazole→parent ×1
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Bach_2021
- unparsed cell Bach_2021_table_p6_1:row14:col1 = 'Variance of interindividual variability on kgut,OXF-SO2'
- unparsed cell Bach_2021_table_p6_1:row15:col1 = 'Variance of interindividual variability on ke,OXF-SO2'
- unparsed cell Bach_2021_table_p6_1:row16:col1 = 'Variance of interindividual variability on FM2'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.68 (17/25 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cloxf]` | not captured | 2.57 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[voxf].parameter_id` | Q76 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[θ1]` | 0.541 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ2].parameter_id` | Q64 | Q30 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | fenbendazole | oxfendazole | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row0:col1', 'Bach_2021_table_p6_1:row0:col2', 'Bach_2021_table_p6_1:row0:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row5:col2', 'Bach_2021_table_p6_1:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row7:col2', 'Bach_2021_table_p6_1:row7:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row9:col2', 'Bach_2021_table_p6_1:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row2:col2', 'Bach_2021_table_p6_1:row2:col3'] |
| C5_dimension_Q64 | fail | [mass] | mg | not captured | not captured | ['Bach_2021_table_p6_1:row1:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row4:col2', 'Bach_2021_table_p6_1:row4:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.541 L/h | not captured | not captured | ['Bach_2021_table_p6_1:row0:col1', 'Bach_2021_table_p6_1:row0:col2', 'Bach_2021_table_p6_1:row0:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 35.2 L | not captured | not captured | ['Bach_2021_table_p6_1:row4:col2', 'Bach_2021_table_p6_1:row4:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_fenbendazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bach_2021` / `Bach_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:19 UTC</sub>
