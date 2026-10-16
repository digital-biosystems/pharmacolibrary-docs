<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;paracetamol&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/&quot;},{&quot;label&quot;:&quot;Wu_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paracetamol_Anderson2015_reference&quot;,&quot;label&quot;:&quot;Anderson_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/Paracetamol_Anderson2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Anderson_2015_VAS&quot;,&quot;label&quot;:&quot;Anderson_2015 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Anderson_2015_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Gibb_2008_VAS&quot;,&quot;label&quot;:&quot;Gibb_2008 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Gibb_2008_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paracetamol — `Paracetamol_Wu2025_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118), gpt-oss:120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has paracetamol, the second reading propacetamol; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:30:09.800412+00:00) predates the upstream re-run (2026-10-07 06:05:00.012248+00:00). Current validate status: `rejected`.

## Citation
Wu Y et al., A Novel Maturation Equation for Hepatic…, Journal of clinical pharmac… (2025)
  ·  DOI: [10.1002/jcph.70080](https://doi.org/10.1002/jcph.70080)

<div class="pk-model-meta" hidden drug="paracetamol" model-id="Paracetamol_Wu2025_reference" status="rejected" stale="true" population="preterm and term neonates, infants, children, and adults" measured-compound="paracetamol" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCLbirth | `Q27` · CL/F | 0 | not captured | not captured | not captured | not captured | llm (0.6) | jcph70080-tbl-0003:row53:col1 | — | not captured |
| θBWc | `Q900` · θBWc | 0.0 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θGAPNA50 | `Q900` · θGAPNA50 | 0.0 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θBWb | `Q900` · θBWb | 0.0 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| apparent volume of distribution of the S(-) enantiomer | `Q76` · V/F | 0.82 | L/kg | 0.0574 | L | not captured | review_gapfill (0.7) | Anderson_2015:review | — | not captured |
| Tlag | `Q83` · tlag | 4.2 | min | 252.0 | h | not captured | review_gapfill (0.7) | Gibb_2008:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CLformation,GLU(Lh)=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill | Q370 | not captured | exact |
| CLformation,SULF(L/h)=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill | Q370 | not captured | exact |
| CLformation,OXI(L/h)=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill | Q370 | not captured | exact |
| CLr,SULF(L/h)=fSULF×GFR+CLsecretion,SULF CLsecretion,SULF=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill | Q22 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'F' routed out of structural estimates ('IIV (RSE %) [Shrinkage %]')
- table section iiv: 'CLformation,GLU(Lh)=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill' routed out of structural estimates ('IIV (RSE %) [Shrinkage %]')
- table section iiv: 'CLformation,SULF(L/h)=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill' routed out of structural estimates ('IIV (RSE %) [Shrinkage %]')
- table section iiv: 'CLformation,OXI(L/h)=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill' routed out of structural estimates ('IIV (RSE %) [Shrinkage %]')
- table section iiv: 'CLr,SULF(L/h)=fSULF×GFR+CLsecretion,SULF CLsecretion,SULF=TVCLbirth×BWb1750θBWb+(TVCLmax×BWc1750θBWc−TVCLbirth×BWb1750θBWb)×PNAHill(GA34θGAPNA50×TVPNA50)Hill+PNAHill' routed out of structural estimates ('IIV (RSE %) [Shrinkage %]')
- table section iiv: 'Correction factor for urine volume' routed out of structural estimates ('IIV (RSE %) [Shrinkage %]')
- column 'estimates (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- kept covariate coefficient θBWc=0 (covariate BWc) — not an ontology parameter
- kept covariate coefficient θGAPNA50=0 (covariate GAPNA50) — not an ontology parameter
- kept covariate coefficient θBWb=0 (covariate BWb) — not an ontology parameter
- dropped PD-category row 'Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph70080-tbl-0003:row59:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=paracetamol
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 12 linked by role; re-tagged parent→paracetamol-glucuronide ×5, parent→paracetamol-sulfate ×6, parent→paracetamol-oxidative metabolites ×3
- gap-filled Q76 (V/F) from Anderson_2015's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Gibb_2008's review values (primary lacked it)

**Extraction notes:**
- unparsed cell jcph70080-tbl-0003:row7:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row13:col1 = '0.96 FIXED a'
- unparsed cell jcph70080-tbl-0003:row13:col3 = '0.96 (0.96‐0.96)'
- unparsed cell jcph70080-tbl-0003:row20:col3 = '0.738 (0.738‐0.738)'
- unparsed cell jcph70080-tbl-0003:row29:col3 = '0.738 (0.738‐0.738)'
- unparsed cell jcph70080-tbl-0003:row31:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row38:col3 = '0.738 (0.738‐0.738)'
- unparsed cell jcph70080-tbl-0003:row40:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row53:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row54:col3 = '0 (0‐0)'
- unparsed cell jcph70080-tbl-0003:row56:col3 = '0.738 (0.738‐0.738)'
- unparsed cell jcph70080-tbl-0003:row59:col3 = '1 (1‐1)'
- unparsed cell jcph70080-tbl-0003:row69:col1 = '3.068 (8%)'
- unparsed cell jcph70080-tbl-0003:row69:col3 = '2.99 (2.32‐4.2)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.118 (2/17 fields) | 15 |
| `gpt-oss:120b` | not confirmed | 0.4 (6/15 fields) | 9 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['paracetamol', 'paracetamol-glucuronide', 'metabolism'], ['paracetamol', 'paracetamol-sulfate', 'metabolism'], ['paracetamol', 'paracetamol-oxidative metabolites', 'metabolism'], ['propacetamol', 'paracetamol', 'interconversion']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[apparent volume of distribution of the s(-) enantiomer]` | 0.82 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clformation,glu(lh)=tvclbirth×bwb1750θbwb+(tvclmax×bwc1750θbwc-tvclbirth×bwb1750θbwb)×pnahill(ga34θgapna50×tvpna50)hill+pnahill]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clformation,glu(lh)=tvclbirth×bwb1750θbwb+(tvclmax×bwc1750θbwc-tvclbirth×bwb1750θbwb)×pnahill(ga34θgapna50×tvpna50)hill+pnahill]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clformation,oxi(l/h)=tvclbirth×bwb1750θbwb+(tvclmax×bwc1750θbwc-tvclbirth×bwb1750θbwb)×pnahill(ga34θgapna50×tvpna50)hill+pnahill]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clformation,sulf(l/h)=tvclbirth×bwb1750θbwb+(tvclmax×bwc1750θbwc-tvclbirth×bwb1750θbwb)×pnahill(ga34θgapna50×tvpna50)hill+pnahill]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clr,sulf(l/h)=fsulf×gfr+clsecretion,sulf clsecretion,sulf=tvclbirth×bwb1750θbwb+(tvclmax×bwc1750θbwc-tvclbirth×bwb1750θbwb)×pnahill(ga34θgapna50×tvpna50)hill+pnahill]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clr,sulf(l/h)=fsulf×gfr+clsecretion,sulf clsecretion,sulf=tvclbirth×bwb1750θbwb+(tvclmax×bwc1750θbwc-tvclbirth×bwb1750θbwb)×pnahill(ga34θgapna50×tvpna50)hill+pnahill]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 4.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvclbirth]` | 0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θbwb]` | 0.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θbwc]` | not captured | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θbwc]` | 0.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | paracetamol | propacetamol | mismatch |
| `gpt-oss:120b` | `parameters[tvclbirth]` | not captured | 0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θbwb]` | 0.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θbwb]` | not captured | 0.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θbwc]` | not captured | 0.738 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θbwc]` | 0.738 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θgapna50]` | 0.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θgapna50]` | not captured | 0.0 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | paracetamol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | paracetamol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Anderson_2015:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Gibb_2008:review'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70080-tbl-0003:row53:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 57.4 L | not captured | not captured | ['Anderson_2015:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wu_2025` / `Wu_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:05 UTC</sub>
