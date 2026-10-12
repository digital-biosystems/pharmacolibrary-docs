<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;metamizole sodium&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/&quot;},{&quot;label&quot;:&quot;Blaser_2021 \u00b7 metamizole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MetamizoleSodium_Ekobena2025_reference&quot;,&quot;label&quot;:&quot;Ekobena_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/MetamizoleSodium_Ekobena2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MetamizoleSodium_Stoschus2025_reference&quot;,&quot;label&quot;:&quot;Stoschus_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_metamizole_sodium/MetamizoleSodium_Stoschus2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# metamizole sodium — `MetamizoleSodium_Blaser2021_metamizole`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.054), gpt-oss:120b (not confirmed, agreement 0.028). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Q and Q have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Q and Q), so that value has no SI equivalent. None of the extracted parameters is metamizole sodium's own; they describe 4-methylaminoantipyrine, 4-aminoantipyrine, 4-acetylaminoantipyrine and 4-formylaminoantipyrine. Extracted — 4-methylaminoantipyrine: kabs 2.53 1/h, V1/F 71.2 L, Q 0.03 n = 8, kfm 0.006 1/h, kel 0.178 1/h, t1/2z 0.36 h; 4-aminoantipyrine: V1/F 35.6 L, Q 0.552 n = 8, kfm 0.033 1/h, kel 0.008 1/h, t1/2z 2.39 h; 4-acetylaminoantipyrine: V1/F 55.1 L, kel 0.074 1/h, t1/2z 10.3 h; 4-formylaminoantipyrine: V1/F 11.5 L, kel 0.567 1/h, t1/2z 6.95 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 4-methylaminoantipyrine, the second reading 4-MAA; it also differs on 34 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:27:52.102113+00:00) predates the upstream re-run (2026-10-07 15:27:16.433954+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `metamizole`, measured `4-methylaminoantipyrine`.

## Citation
Blaser LS et al., Comparative Effects of Metamizole (Dipy…, Frontiers in pharmacology (2021)
  ·  DOI: [10.3389/fphar.2021.620635](https://doi.org/10.3389/fphar.2021.620635)

<div class="pk-model-meta" hidden drug="metamizole sodium" model-id="MetamizoleSodium_Blaser2021_metamizole" status="needs_review" stale="true" population="healthy salt-depleted adults" measured-compound="4-methylaminoantipyrine" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 17 extracted.

**Parameterization:** V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 2.528 | n = 8 | not captured | [n=8] | not captured | exact (1.0) | T3:row1:col1 | — | not captured |
| V1/F (L) | `Q290` · V1/F | 71.2 | L | 0.0712 | [l] | not captured | exact (1.0) | T3:row2:col1 | — | not captured |
| k12 (1/h) | `Q30` · Q | 0.030 | n = 8 | not captured | [n=8] | not captured | exact (1.0) | T3:row3:col1 | — | not captured |
| k14 (1/h) | `Q305` · kfm | 0.006 | n = 8 | not captured | [n=8] | not captured | exact (1.0) | T3:row4:col1 | — | not captured |
| k10 (1/h) | `Q47` · kel | 0.178 | n = 8 | not captured | [n=8] | not captured | exact (1.0) | T3:row5:col1 | — | not captured |
| V2/F (L) | `Q290` · V1/F | 35.6 | L | 0.0356 | [l] | not captured | exact (1.0) | T3:row6:col1 | — | not captured |
| k23 (1/h) | `Q30` · Q | 0.552 | n = 8 | not captured | [n=8] | not captured | exact (1.0) | T3:row7:col1 | — | not captured |
| k24 (1/h) | `Q305` · kfm | 0.033 | n = 8 | not captured | [n=8] | not captured | exact (1.0) | T3:row8:col1 | — | not captured |
| k20 (1/h) | `Q47` · kel | 0.008 | n = 8 | not captured | [n=8] | not captured | exact (1.0) | T3:row9:col1 | — | not captured |
| V3/F (L) | `Q82` · V2/F | 55.1 | L | 0.0551 | [l] | not captured | exact (1.0) | T3:row10:col1 | — | not captured |
| V4/F (L) | `Q290` · V1/F | 11.5 | L | 0.0115 | [l] | not captured | exact (1.0) | T3:row12:col1 | — | not captured |
| k40 (1/h) | `Q47` · kel | 0.567 | n = 8 | not captured | [n=8] | not captured | exact (1.0) | T3:row13:col1 | — | not captured |
| ke0 (1/h) | `Q47` · kel | 0.012 | n = 8 | not captured | [n=8] | not captured | exact (1.0) | T3:row14:col1 | — | not captured |
| T1/2 K01 (h) | `Q57` · t1/2z | 0.36 | h | 1296.0 | [h] | not captured | llm_confirmed (0.6) | T3:row15:col1 | — | not captured |
| T1/2 4-AA (h) | `Q57` · t1/2z | 2.39 | h | 8604.0 | [h] | not captured | llm_confirmed (0.6) | T3:row17:col1 | — | not captured |
| T1/2 4-AAA (h) | `Q57` · t1/2z | 10.33 | h | 37188.0 | [h] | not captured | llm_confirmed (0.6) | T3:row18:col1 | — | not captured |
| T1/2 4-FAA (h) | `Q57` · t1/2z | 6.95 | h | 25020.0 | [h] | not captured | llm_confirmed (0.6) | T3:row19:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Metamizole (n = 8)' — extend the ontology if this is a real PK parameter (source ['T3:row0:col1'])
- unit_dimension_unknown: 'n = 8' (kabs)
- unit_dimension_unknown: 'n = 8' (Q)
- unit_dimension_unknown: 'n = 8' (kfm)
- unit_dimension_unknown: 'n = 8' (kel)
- dropped duplicate Q47 ('k30 (1/h)', value '0.074') — already have one for this compound
- dropped duplicate Q57 ('T1/2 4-MAA (h)', value '3.43') — already have one for this compound
- dropped PD-category row 'EC50 (µM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row20:col1'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['T3:row21:col1'])
- dropped PD-category row 'E0 b' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T3:row22:col1'])
- dropped unlinked row (NIL): 'Emax b' — extend the ontology if this is a real PK parameter (source ['T3:row23:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=4-methylaminoantipyrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 5 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'metamizole (n = 8)' subgroup of Blaser_2021 (paper reports 6 populations: 4-aa, 4-aaa, 4-faa, 4-maa, metamizole (n = 8), naproxen (n = 7))
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 28 linked by role; re-tagged parent→4-methylaminoantipyrine ×15, naproxen→4-methylaminoantipyrine ×12, parent→4-aminoantipyrine ×7, naproxen→4-aminoantipyrine ×7, parent→4-acetylaminoantipyrine ×3, naproxen→4-acetylaminoantipyrine ×2, parent→4-formylaminoantipyrine ×1, naproxen→4-formylaminoantipyrine ×1, parent→6-keto-prostaglandin F1alpha ×4, naproxen→6-keto-prostaglandin F1alpha ×4
- review gap-fill skipped: this record measures '4-methylaminoantipyrine', not metamizole_sodium — the review values are the parent's

**Extraction notes:**
- unparsed cell T3:row6:col3 = '16.8 ± 5.58a'
- unparsed cell T3:row16:col3 = '0.028 ± 0.004a'
- unparsed cell T3:row19:col3 = '22.10 ± 1.32a'
- unparsed cell T3:row20:col2 = 'EC50 (µM)'
- unparsed cell T3:row22:col2 = 'E0'
- companion parameter table 2 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.054 (2/37 fields) | 35 |
| `gpt-oss:120b` | not confirmed | 0.028 (1/36 fields) | 35 |

<details><summary>70 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['metamizole', '4-methylaminoantipyrine', 'metabolism'], ['4-methylaminoantipyrine', '4-aminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-methylaminoantipyrine', 'interconversion'], ['4-aminoantipyrine', '4-acetylaminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-formylaminoantipyrine', 'metabolism']] | [['metamizole', '4-maa', 'metabolism'], ['4-maa', '4-aa', 'metabolism'], ['4-aa', '4-faa', 'interconversion'], ['4-aa', '4-aaa', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[k10]` | not captured | 0.178 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k10]` | 0.178 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | not captured | 0.030 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 0.030 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k14]` | not captured | 0.006 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k14]` | 0.006 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k20]` | 0.008 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k23]` | not captured | 0.552 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k23]` | 0.552 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k24]` | 0.033 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k30]` | not captured | 0.074 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k40]` | not captured | 0.567 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k40]` | 0.567 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 2.528 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 2.528 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke0]` | 0.012 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aa]` | not captured | 2.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aa]` | 2.39 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aaa]` | not captured | 10.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-aaa]` | 10.33 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-faa]` | not captured | 6.95 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-faa]` | 6.95 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 4-maa]` | not captured | 3.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 k01]` | not captured | 0.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 k01]` | 0.36 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f]` | not captured | 71.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f]` | 71.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | 35.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 35.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | not captured | 55.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 55.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` | not captured | 11.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v4/f]` | 11.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | 4-methylaminoantipyrine | 4-MAA | mismatch |
| `gpt-oss:120b` | `model.links` | [['metamizole', '4-methylaminoantipyrine', 'metabolism'], ['4-methylaminoantipyrine', '4-aminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-formylaminoantipyrine', 'metabolism'], ['4-aminoantipyrine', '4-acetylaminoantipyrine', 'metabolism']] | [['metamizole', '4-maa', 'metabolism'], ['4-maa', '4-aa', 'metabolism'], ['4-aa', '4-faa', 'metabolism'], ['4-aa', '4-aaa', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[k10]` | 0.178 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k10]` | not captured | 0.178 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | 0.030 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12]` | not captured | 0.030 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k14]` | not captured | 0.006 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k14]` | 0.006 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k20]` | 0.008 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k23]` | 0.552 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k23]` | not captured | 0.552 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k24]` | 0.033 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k30]` | 0.074 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k40]` | not captured | 0.567 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k40]` | 0.567 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 2.528 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 2.528 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 4-aa]` | not captured | 2.39 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 4-aa]` | 2.39 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 4-aaa]` | not captured | 10.33 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 4-aaa]` | 10.33 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 4-faa]` | not captured | 6.95 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 4-faa]` | 6.95 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 4-maa]` | not captured | 3.43 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 k01]` | 0.36 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2 k01]` | not captured | 0.36 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | 71.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v1/f]` | not captured | 71.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | 35.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v2/f]` | not captured | 35.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3/f]` | 55.1 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v3/f]` | not captured | 55.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v4/f]` | not captured | 11.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v4/f]` | 11.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | metamizole | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 4-methylaminoantipyrine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 17 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row6:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row12:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row15:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row17:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row18:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['T3:row19:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T3:row10:col1'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | n = 8 | not captured | not captured | ['T3:row3:col1'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | n = 8 | not captured | not captured | ['T3:row7:col1'] |
| C5_unit_missing_Q305 | fail | 1 / [time] | n = 8 | not captured | not captured | ['T3:row4:col1'] |
| C5_unit_missing_Q305 | fail | 1 / [time] | n = 8 | not captured | not captured | ['T3:row8:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | n = 8 | not captured | not captured | ['T3:row5:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | n = 8 | not captured | not captured | ['T3:row9:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | n = 8 | not captured | not captured | ['T3:row13:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | n = 8 | not captured | not captured | ['T3:row14:col1'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | n = 8 | not captured | not captured | ['T3:row1:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 71.2 L | not captured | not captured | ['T3:row2:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 35.6 L | not captured | not captured | ['T3:row6:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 11.5 L | not captured | not captured | ['T3:row12:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 55.1 L | not captured | not captured | ['T3:row10:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_metamizole_sodium/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Blaser_2021` / `Blaser_2021::metamizole`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:27 UTC</sub>
