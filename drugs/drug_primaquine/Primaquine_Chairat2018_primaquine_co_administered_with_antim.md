<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;primaquine&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/&quot;},{&quot;label&quot;:&quot;Chairat_2018 \u00b7 primaquine_co_administered_with_antimalarial_drugs_pyronaridine_artesunate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Primaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# primaquine — `Primaquine_Chairat2018_primaquine_co_administered_with_antim`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax, AUC, AUC∞ and Cmax), so that value has no SI equivalent.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018)
  ·  DOI: [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297)

<div class="pk-model-meta" hidden drug="primaquine" model-id="Primaquine_Chairat2018_primaquine_co_administered_with_antim" status="rejected" stale="false" population="healthy adult volunteers" measured-compound="primaquine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax PRQ (ng/mL) | `Q32` · Cmax | 144 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row1:col4, Chairat_2018_table_2:row13:col4, Chairat_2018_table_2:row25:col4 | — | not captured |
| Tmax PRQ (h) | `Q56` · tmax | 1.35 | h | 4860.0 | [h] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row2:col4, Chairat_2018_table_2:row14:col4, Chairat_2018_table_2:row26:col4 | — | not captured |
| t1/2 PRQ (h) | `Q57` · t1/2z | 5.74 | h | 20664.0 | [h] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row3:col4, Chairat_2018_table_2:row15:col4, Chairat_2018_table_2:row27:col4 | — | not captured |
| AUC0–48 PRQ (ng·h/mL) | `Q88` · AUC | 1370 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm (0.6) | Chairat_2018_table_2:row4:col4, Chairat_2018_table_2:row16:col4, Chairat_2018_table_2:row28:col4 | — | not captured |
| AUC0–∞ PRQ (ng·h/mL) | `Q17` · AUC∞ | 1380 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row5:col4, Chairat_2018_table_2:row17:col4, Chairat_2018_table_2:row29:col4 | — | not captured |
| Cmax CPRQ (ng/mL) | `Q32` · Cmax | 1220 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row6:col4, Chairat_2018_table_2:row18:col4, Chairat_2018_table_2:row30:col4 | — | not captured |
| Tmax CPRQ (h) | `Q56` · tmax | 8.87 | h | 31931.999999999996 | [h] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row7:col4, Chairat_2018_table_2:row19:col4, Chairat_2018_table_2:row31:col4 | — | not captured |
| t1/2 CPRQ (h) | `Q57` · t1/2z | 13.8 | h | 49680.0 | [h] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row8:col4, Chairat_2018_table_2:row20:col4, Chairat_2018_table_2:row32:col4 | — | not captured |
| AUC0–48 CPRQ (ng·h/mL) | `Q19` · AUCt | 34600 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm (0.6) | Chairat_2018_table_2:row9:col4, Chairat_2018_table_2:row21:col4, Chairat_2018_table_2:row33:col4 | — | not captured |
| AUC0–∞ CPRQ (ng·h/mL) | `Q17` · AUC∞ | 45700 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row10:col4, Chairat_2018_table_2:row22:col4, Chairat_2018_table_2:row34:col4 | — | not captured |
| AUC_CPRQ/AUC_PRQ | `Q21` · AUC ratio | 32.9 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Chairat_2018_table_2:row11:col4, Chairat_2018_table_2:row23:col4, Chairat_2018_table_2:row35:col4 | — | not captured |
| Lag time | `Q83` · tlag | 0.0 | h | 0.0 | h | not captured | review_gapfill (0.7) | Fasinu_2022_2:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'NA'
- dropped value-less row: 'RSE and 95% CI'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=primaquine
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'Incorporation of hepatic first-pass metabolism showed a significant improvement (P &lt; 0.05) in model fit (ΔOFV of −260, −')
- population split: 'primaquine co-administered with antimalarial drugs: pyronaridine/artesunate' subgroup of Chairat_2018 (paper reports 4 populations: primaquine alone, primaquine co-administered with antimalarial drugs: chloroquine, primaquine co-administered with antimalarial drugs: dihydroartemisinin/ piperaquine, primaquine co-administered with antimalarial drugs: pyronaridine/artesunate)
- row roles: 2 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 35/35 row label(s) assigned, 18 linked by role; re-tagged primaquine→parent ×86, primaquine→carboxyprimaquine ×65, primaquine→chloroquine ×1
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Fasinu_2022_2's review values (primary lacked it)

**Extraction notes:**
- table Chairat_2018_table_1: unbound_uncertainty
- table Chairat_2018_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (107 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2
- LLM region Chairat_2018:other_prose: Connection error.
- LLM region Chairat_2018:other_prose: Connection error.
- LLM region Chairat_2018:discussion_prose: Connection error.

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row5:col4', 'Chairat_2018_table_2:row17:col4', 'Chairat_2018_table_2:row29:col4'] |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row10:col4', 'Chairat_2018_table_2:row22:col4', 'Chairat_2018_table_2:row34:col4'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row9:col4', 'Chairat_2018_table_2:row21:col4', 'Chairat_2018_table_2:row33:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row1:col4', 'Chairat_2018_table_2:row13:col4', 'Chairat_2018_table_2:row25:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row6:col4', 'Chairat_2018_table_2:row18:col4', 'Chairat_2018_table_2:row30:col4'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Chairat_2018_table_2:row2:col4', 'Chairat_2018_table_2:row14:col4', 'Chairat_2018_table_2:row26:col4'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Chairat_2018_table_2:row7:col4', 'Chairat_2018_table_2:row19:col4', 'Chairat_2018_table_2:row31:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Chairat_2018_table_2:row3:col4', 'Chairat_2018_table_2:row15:col4', 'Chairat_2018_table_2:row27:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Chairat_2018_table_2:row8:col4', 'Chairat_2018_table_2:row20:col4', 'Chairat_2018_table_2:row32:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Fasinu_2022_2:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Chairat_2018_table_2:row4:col4', 'Chairat_2018_table_2:row16:col4', 'Chairat_2018_table_2:row28:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_primaquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chairat_2018` / `Chairat_2018::primaquine_co_administered_with_antimalarial_drugs_pyronaridine_artesunate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 01:12 UTC</sub>
