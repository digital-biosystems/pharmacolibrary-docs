<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pexidartinib&quot;,&quot;href&quot;:&quot;drugs/drug_pexidartinib/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 estimate_a&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pexidartinib — `Pexidartinib_Yin2021_estimate_a`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of (asian)•exp: this record has none, the second reading 1.27; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Yin O et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021)
  ·  DOI: [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753)

<div class="pk-model-meta" hidden drug="pexidartinib" model-id="Pexidartinib_Yin2021_estimate_a" status="rejected" stale="false" population="healthy subjects and patients with TGCT or other solid tumors" measured-compound="pexidartinib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, Q/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| (CRCL&lt;90/90)θ8 | `Q900` · equation variable | -0.0941 | not captured | not captured | not captured | not captured | llm (0.6) | jcph1753-tbl-0003:row3:col1 | — | not captured |
| ALAG1(exp(θ6)) | `Q83` · tlag | 0.387 | h | 1393.2 | h | not captured | exact (1.0) | jcph1753-tbl-0003:row16:col1 | — | not captured |
| D1(exp(θ7)) | `Q310` · D1 | 1.22 | h | 4392.0 | h | not captured | llm_confirmed (0.6) | jcph1753-tbl-0003:row17:col1 | — | not captured |
| F1Phase1(exp(θ8)) | `Q87` · Frel | 0.855 | not captured | not captured | not captured | not captured | llm (0.6) | jcph1753-tbl-0003:row18:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F (exp(θ1)) | Q27 | not captured | exact |
| Q/F(exp(θ4)) | Q69 | not captured | exact |
| Ω3.3 Vp/F | Q82 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('(Asian)•exp(θ10)', value '1.27') — already have one for this compound
- dropped duplicate Q900 ('(AST&gt;80/80)θ 11', value '0.0709') — already have one for this compound
- dropped duplicate Q900 ('(TBIL&gt;20.5/20.5)θ 12', value '0.244') — already have one for this compound
- dropped duplicate Q900 ('(StHT)•exp(θ13)', value '1.26') — already have one for this compound
- dropped duplicate Q900 ('(Female)•exp(θ14)', value '0.869') — already have one for this compound
- unit_dimension_unknown: 'WT/80' (Q/F)
- dropped duplicate Q27 ('Ω1.1 CL/F', value None) — already have one for this compound
- routed 'Ω3.1 COVVp/F−CL/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Ω3.2 COVVp/F−Vc/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped duplicate Q69 ('Ω4.4 Q/F', value None) — already have one for this compound
- routed 'Ω5.5 KA' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Ω6.6Ph1Form' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'ALAG1(exp(θ6))' → h (from the popPK convention: 'The paper describes ALAG1 as the drug absorption lag time but does not state its unit. Lag times are conventionally repo')
- implicit units: 'D1(exp(θ7))' → h (from the popPK convention: 'The paper describes D1 as the duration of zero-order absorption but does not state its unit. Absorption durations are co')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pexidartinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'estimate a' subgroup of Yin_2021 (paper reports 3 populations: estimate a, pexidartinib, zaad)
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 3 linked by role; re-tagged pexidartinib→parent ×28
- molar mass: no plausible PubChem entry for 'ZAAD' ('pexidartinib glucuronide') — left in mass units
- molar mass: none found for 'ZAAD' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell jcph1753-tbl-0003:row1:col2 = '5.43 to 6.27'
- unparsed cell jcph1753-tbl-0003:row3:col2 = '−0.402 to 0.214'
- unparsed cell jcph1753-tbl-0003:row4:col2 = '1.05 to 1.54'
- unparsed cell jcph1753-tbl-0003:row5:col2 = '−0.180 to 0.322'
- unparsed cell jcph1753-tbl-0003:row6:col2 = '0.183 to 0.306'
- unparsed cell jcph1753-tbl-0003:row7:col2 = '1.16 to 1.36'
- unparsed cell jcph1753-tbl-0003:row8:col2 = '0.808 to 0.934'
- unparsed cell jcph1753-tbl-0003:row13:col2 = '17.9 to 23.8'
- unparsed cell jcph1753-tbl-0003:row16:col2 = '0.385 to 0.390'
- unparsed cell jcph1753-tbl-0003:row17:col2 = '1.20 to 1.25'
- unparsed cell jcph1753-tbl-0003:row19:col2 = '0.0633 to 0.109'
- unparsed cell jcph1753-tbl-0003:row20:col2 = '0.0425 to 0.112'
- unparsed cell jcph1753-tbl-0003:row21:col2 = '0.207 to 0.341'
- unparsed cell jcph1753-tbl-0003:row22:col2 = '−0.0178 to 0.0476'
- unparsed cell jcph1753-tbl-0003:row23:col2 = '−0.105 to 0.0111'
- unparsed cell jcph1753-tbl-0003:row24:col2 = '0.152 to 0.275'
- unparsed cell jcph1753-tbl-0003:row25:col2 = '0.271 to 0.541'
- unparsed cell jcph1753-tbl-0003:row26:col2 = '0.648 to 1.98'
- unparsed cell jcph1753-tbl-0003:row27:col2 = '0.0592 to 0.143'
- unparsed cell jcph1753-tbl-0003:row28:col2 = '1.26 to 2.40'
- unparsed cell jcph1753-tbl-0003:row29:col2 = '0.0560 to 0.0743'
- unparsed cell jcph1753-tbl-0003:row30:col2 = '0.0839 to 0.0927'
- unparsed cell jcph1753-tbl-0003:row31:col2 = '0.0377 to 0.0391'
- unparsed cell Yin_2021_table_4:row3:col2 = '13 564 (6095)'
- companion parameter table 4 transcribed (7 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.6 (9/15 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[(asian)•exp]` | not captured | 1.27 | only_one_extracted |
| `qwen3.8-27b` | `parameters[(crcl&lt;90/90)θ8]` | -0.0941 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[f1phase1(exp(θ8))]` | 0.855 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ω3.2 covvp/f-vc/f]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ω3.3 vp/f].parameter_id` | Q82 | Q309 | mismatch |
| `qwen3.8-27b` | `parameters[ω5.5 ka]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['jcph1753-tbl-0003:row17:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph1753-tbl-0003:row16:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pexidartinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yin_2021` / `Yin_2021::estimate_a`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:19 UTC</sub>
