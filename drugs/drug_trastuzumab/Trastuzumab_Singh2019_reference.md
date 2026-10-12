<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/&quot;},{&quot;label&quot;:&quot;Singh_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trastuzumab_Verma2025_rat&quot;,&quot;label&quot;:&quot;Verma_2025_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab/Trastuzumab_Verma2025_rat.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab — `Trastuzumab_Singh2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. None of the extracted parameters is trastuzumab's own; they describe MMAE.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has T-vc-MMAE, the second reading Trastuzumab-Valine-Citrulline-Monomethyl Auristatin E (T-vc-MMAE); it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Singh AP et al., A Cell-Level Systems PK-PD Model to Cha…, Pharmaceutics (2019)
  ·  DOI: [10.3390/pharmaceutics11020098](https://doi.org/10.3390/pharmaceutics11020098)

<div class="pk-model-meta" hidden drug="trastuzumab" model-id="Trastuzumab_Singh2019_reference" status="rejected" stale="false" population="N87 and GFP-MCF7 tumor bearing mice" measured-compound="T-vc-MMAE" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KoffTub | `Q330` · koff | 0.545 | 1/h | 0.0001513888888888889 | 1/h | not captured | llm (0.6) | pharmaceutics-11-00098-t001:row20:col2, pharmaceutics-11-00098-t001:row20:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| KdecP | Q305 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'RCap' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row8:col2'])
- dropped unlinked row (NIL): 'RKrogh' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row9:col2'])
- dropped unlinked row (NIL): 'DADC, DDrug' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row11:col3'])
- dropped unlinked row (NIL): 'RTumor' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row13:col1'])
- dropped unlinked row (NIL): 'KonADC' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row15:col2', 'pharmaceutics-11-00098-t001:row15:col3'])
- dropped unlinked row (NIL): 'KoffADC' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row16:col2', 'pharmaceutics-11-00098-t001:row16:col3'])
- dropped unlinked row (NIL): 'KintADC' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row17:col2', 'pharmaceutics-11-00098-t001:row17:col3'])
- dropped unlinked row (NIL): 'KdegADC' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row18:col2', 'pharmaceutics-11-00098-t001:row18:col3'])
- dropped unlinked row (NIL): 'KonTub' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row19:col2', 'pharmaceutics-11-00098-t001:row19:col3'])
- dropped unlinked row (NIL): 'Tubtot' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row21:col2'])
- dropped unlinked row (NIL): 'KinDrug' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row22:col2', 'pharmaceutics-11-00098-t001:row22:col3'])
- dropped PD-category row 'KoutDrug' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-11-00098-t001:row23:col2', 'pharmaceutics-11-00098-t001:row23:col3'])
- dropped unlinked row (NIL): 'Kmax' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row26:col3'])
- dropped unlinked row (NIL): 'τ' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-11-00098-t001:row28:col2'])
- implicit units: 'KoffTub' → 1/h (from the popPK convention: 'The parameter KoffTub is defined as a first-order dissociation rate constant. In population pharmacokinetic and pharmaco')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=T-vc-MMAE
- template fit: none — only the metabolite is modelled — no parent compartment
- row roles (LLM): model_class=compartmental; 16/16 row label(s) assigned, 1 linked by role; re-tagged parent→MMAE ×9
- molar mass: no plausible PubChem entry for 'T-vc-MMAE' ('Trastuzumab-Valine-Citrulline-Monomethyl Auristatin E') — left in mass units
- molar mass: none found for 'T-vc-MMAE' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'T-vc-MMAE', not trastuzumab — the review values are the parent's

**Extraction notes:**
- unparsed cell pharmaceutics-11-00098-t001:row6:col2 = '0.323 (8.8%)'
- unparsed cell pharmaceutics-11-00098-t001:row8:col4 = '[18,19,20]'
- unparsed cell pharmaceutics-11-00098-t001:row9:col4 = '[18,19,20]'
- unparsed cell pharmaceutics-11-00098-t001:row11:col2 = '0.022, 0.25'
- unparsed cell pharmaceutics-11-00098-t001:row11:col4 = '[18,19,20]'
- unparsed cell pharmaceutics-11-00098-t001:row15:col1 = 'Second order association rate constant between T-vc-MMAE and HER2 receptor'
- unparsed cell pharmaceutics-11-00098-t001:row15:col4 = '[14]'
- unparsed cell pharmaceutics-11-00098-t001:row16:col1 = 'First order dissociation rate constant between T-vc-MMAE and HER2 receptor'
- unparsed cell pharmaceutics-11-00098-t001:row16:col4 = '[14]'
- unparsed cell pharmaceutics-11-00098-t001:row17:col1 = 'Internalization rate of HER2-ADC complex inside the cell'
- unparsed cell pharmaceutics-11-00098-t001:row17:col4 = '[14]'
- unparsed cell pharmaceutics-11-00098-t001:row18:col4 = '[14]'
- unparsed cell pharmaceutics-11-00098-t001:row19:col4 = '[14]'
- unparsed cell pharmaceutics-11-00098-t001:row20:col4 = '[14]'
- unparsed cell pharmaceutics-11-00098-t001:row21:col4 = '[11,14]'
- unparsed cell pharmaceutics-11-00098-t001:row22:col4 = '[14]'
- unparsed cell pharmaceutics-11-00098-t001:row23:col4 = '[11]'
- unparsed cell pharmaceutics-11-00098-t001:row26:col1 = 'First order killing rate of MMAE in each tumor cell (either GFP-MCF7 or N87)'
- unparsed cell pharmaceutics-11-00098-t001:row26:col2 = '1.03 (31.3%)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['t-vc-mmae', 'mmae', 'metabolism']] | [['trastuzumab‐valine‐citrulline‐monomethyl auristatin e (t‐vc‐mmae)', 'mmae', 'hydrolysis']] | mismatch |
| `gpt-oss-120b` | `parameters[dadc, ddrug]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kdecp]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kdecp]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kintadc]` | not captured | 0.11 | only_one_extracted |
| `gpt-oss-120b` | `parameters[koffadc]` | not captured | 0.014 | only_one_extracted |
| `gpt-oss-120b` | `parameters[konadc]` | not captured | 0.03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kontub]` | not captured | 0.0183 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rcap]` | not captured | 8.0 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | T-vc-MMAE | Trastuzumab-Valine-Citrulline-Monomethyl Auristatin E (T-vc-MMAE) | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | T-vc-MMAE | total trastuzumab | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q330 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-11-00098-t001:row20:col2', 'pharmaceutics-11-00098-t001:row20:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_trastuzumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Singh_2019` / `Singh_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:23 UTC</sub>
