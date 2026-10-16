<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;idursulfase beta&quot;,&quot;href&quot;:&quot;drugs/drug_idursulfase_beta/&quot;},{&quot;label&quot;:&quot;Costain_2025 \u00b7 ids&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IdursulfaseBeta_Xie2015_reference&quot;,&quot;label&quot;:&quot;Xie_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_idursulfase_beta/IdursulfaseBeta_Xie2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# idursulfase beta — `IdursulfaseBeta_Costain2025_ids`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Cmax and AUC), so that value has no SI equivalent. Extracted — idursulfase beta: Cmax 3 nmol/mL, V 26.2 mL/kg, V2 104 mL/kg, CL 0.7 mL/min/kg, Q 1.4 mL/min/kg, AUC 105 nmol*min/mL, t1/2α 7.5 Min, t1/2β 164 Min.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `IDS fusion proteins`, measured `IDS`.

## Citation
Costain WJ et al., In vivo brain delivery of BBB-enabled i…, Fluids and barriers of the… (2025)
  ·  DOI: [10.1186/s12987-024-00617-6](https://doi.org/10.1186/s12987-024-00617-6)

<div class="pk-model-meta" hidden drug="idursulfase beta" model-id="IdursulfaseBeta_Costain2025_ids" status="rejected" stale="false" population="Wistar rats" measured-compound="IDS" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax | `Q32` · Cmax | 3 | nmol/mL | not captured | [nM] / [ml] | not captured | exact (1.0) | Tab2:row1:col2 | — | not captured |
| V | `Q61` · V | 26.2 | mL/kg | 0.0018339999999999997 | [ml] / [kg] | not captured | exact (1.0) | Tab2:row2:col2 | — | not captured |
| V2 | `Q64` · V2 | 104 | mL/kg | 0.007279999999999999 | [ml] / [kg] | not captured | exact (1.0) | Tab2:row3:col2 | — | not captured |
| CL | `Q22` · CL | 0.7 | mL/min/kg | 8.166666666666666e-07 | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Tab2:row4:col2 | — | not captured |
| CL2 | `Q30` · Q | 1.4 | mL/min/kg | 1.6333333333333333e-06 | [ml] / [[min] · [kg]] | not captured | special_case (0.95) | Tab2:row5:col2 | — | not captured |
| AUC | `Q88` · AUC | 105 | nmol*min/mL | not captured | [[min] · [nM]] / [ml] | not captured | exact (1.0) | Tab2:row6:col2 | — | not captured |
| t1/2α | `Q59` · t1/2α | 7.5 | Min | 450.0 | [min] | not captured | exact (1.0) | Tab2:row7:col2 | — | not captured |
| t1/2β | `Q60` · t1/2β | 164 | Min | 9840.0 | [min] | not captured | exact (1.0) | Tab2:row8:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cmax' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=IDS
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'ids' subgroup of Costain_2025 (paper reports 5 populations: ids, igf1r3h5-ids, igf1r3h5-ids-hsa, igf1r3h5-ids-m79, igf1r3h5-ids-r28)
- molar mass: none of 1 PubChem candidate(s) is 'IDS' (LLM) — left in mass units
- molar mass: none found for 'idursulfase_beta' — its concentrations stay mass-only
- molar mass: none found for 'IDS' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'IDS', not idursulfase_beta — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_alpha | fail | 27.8 | 7.736 | 0.2783 | 0.25 | reported t½α |
| C1_half_life_beta | fail | 36.9 | 172.68 | 4.6797 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col2'] |
| C5_dimension_Q32 | fail | [substance] / [length] ** 3 | nmol/mL | not captured | not captured | ['Tab2:row1:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Tab2:row7:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Tab2:row8:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col2'] |
| C5_dimension_Q88 | fail | [substance] * [time] / [length] ** 3 | nmol*min/mL | not captured | not captured | ['Tab2:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.7 | not captured | not captured | ['Tab2:row4:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.94 L/h | not captured | not captured | ['Tab2:row4:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.83 L | not captured | not captured | ['Tab2:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.28 L | not captured | not captured | ['Tab2:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_idursulfase_beta/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Costain_2025` / `Costain_2025::ids`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:11 UTC</sub>
