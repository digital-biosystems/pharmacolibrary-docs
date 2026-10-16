<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;prednisolone&quot;,&quot;href&quot;:&quot;drugs/drug_prednisolone/&quot;},{&quot;label&quot;:&quot;de_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prednisolone_Bouazza2025_reference&quot;,&quot;label&quot;:&quot;Bouazza_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisolone/Prednisolone_Bouazza2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prednisolone_Tan2024_reference&quot;,&quot;label&quot;:&quot;Tan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_prednisolone/Prednisolone_Tan2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# prednisolone — `Prednisolone_de2023_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.688). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The prednisolone binding parameter KD is reported as 0.0095 nmol, an amount rather than a concentration, giving a dimension mismatch on a structural parameter, so the record was rejected.**

In the prednisolone model for paediatric kidney transplant recipients, KD (equilibrium dissociation constant for drug-target binding) carries the verbatim unit 'nmol' with value 0.0095; a dissociation constant must be a concentration, so the check failed on a dimension mismatch. Because this unit could not be converted to SI, the parameter reached the model builder without an SI value. The remaining parameters (kabs 12.5 h-1, tlag 0.63 h, V 101 L/70 kg, CLm,norm/F 27.6 L/h/70 kg, Bmax 6.77) show no such mismatch. A second reader additionally disagreed on the dose compound (prednisone vs prednisolone), the primary analyte, whether the parameterization is apparent or mechanistic, and the classification of the clearance and Mtt parameters. Extracted — prednisolone: kabs 12.5 h-1, tlag 0.63 h, V 101 L/70 kg, CLm,norm/F 27.6 L/h/70 kg, Bmax 6.77, KD 0.0095 nmol.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has prednisone, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `prednisone`, measured `prednisolone`.

## Citation
de Truchis C et al., Prednisolone pharmacokinetics after ora…, British journal of clinical… (2023)
  ·  DOI: [10.1111/bcp.15610](https://doi.org/10.1111/bcp.15610)

<div class="pk-model-meta" hidden drug="prednisolone" model-id="Prednisolone_de2023_reference" status="rejected" stale="false" population="paediatric kidney transplant recipients" measured-compound="prednisolone" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** CLm,norm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ktr (h-1) | `Q49` · kabs | 12.5 | h-1 | 0.003472222222222222 | [1] / [h] | 4 | exact (1.0) | de_2023_table_p5_1:row1:col1, de_2023_table_p5_1:row1:col2 | — | not captured |
| Mtt (h) | `Q83` · tlag | 0.63 | h | 2268.0 | [h] | 37 | exact (1.0) | de_2023_table_p5_1:row2:col1, de_2023_table_p5_1:row2:col2 | — | not captured |
| VU (L/70 kg) | `Q61` · V | 101 | L/70 kg | 0.101 | [l] / [70kg] | 9 | exact (1.0) | de_2023_table_p5_1:row3:col1, de_2023_table_p5_1:row3:col2 | — | not captured |
| CLU (L/h/70 kg) | `Q375` · CLm,norm/F | 27.6 | L/h/70 kg | 7.666666666666667e-06 | [l] / [[h] · [70kg]] | 11 | exact (1.0) | de_2023_table_p5_1:row4:col1, de_2023_table_p5_1:row4:col2 | — | not captured |
| Bmax | `Q332` · Bmax | 6.77 | not captured | not captured | not captured | not captured | exact (1.0) | de_2023_table_p5_1:row5:col1 | — | not captured |
| K1 (nmol) | `Q331` · KD | 0.0095 | nmol | not captured | [nM] | not captured | llm (0.6) | de_2023_table_p5_1:row6:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Ω Mtt' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Ω CLU' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Ω K1' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Residual variability, additive (nmol/L)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Residual variability, proportional' routed out of structural estimates ('Residual error')
- unit_dimension_mismatch: 'K1 (nmol)' → Q331 (unit '[substance]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Kns' — extend the ontology if this is a real PK parameter (source ['de_2023_table_p5_1:row7:col1'])
- dropped unlinked row (NIL): 'βciclosporine/CLU' — extend the ontology if this is a real PK parameter (source ['de_2023_table_p5_1:row8:col1', 'de_2023_table_p5_1:row8:col2'])
- metabolite prednisolone: Q22→Q375 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided), normalised to a standard size
- metabolite volume: 'VU (L/70 kg)' Q63→Q61 for prednisolone — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=prednisolone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 8 linked by role
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[clu].parameter_id` | Q375 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[mtt].parameter_id` | Q83 | Q81 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | prednisone | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | prednisolone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q375 | pass | 27.6 | 27.6 | 1.0 | 0.05 | footnote reference category |
| C2_base_Q61 | pass | 101.0 | 101.0 | 1.0 | 0.05 | footnote reference category |
| C5_dimension_Q331 | fail | [substance] | nmol | not captured | not captured | ['de_2023_table_p5_1:row6:col1'] |
| C5_dimension_Q375 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['de_2023_table_p5_1:row4:col1', 'de_2023_table_p5_1:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['de_2023_table_p5_1:row1:col1', 'de_2023_table_p5_1:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['de_2023_table_p5_1:row3:col1', 'de_2023_table_p5_1:row3:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['de_2023_table_p5_1:row2:col1', 'de_2023_table_p5_1:row2:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 101 L | not captured | not captured | ['de_2023_table_p5_1:row3:col1', 'de_2023_table_p5_1:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_prednisolone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `de_2023` / `de_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 03:04 UTC</sub>
