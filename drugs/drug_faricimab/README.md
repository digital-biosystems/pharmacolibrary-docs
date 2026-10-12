<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;faricimab&quot;}]"></div>

# faricimab

- **generic name:** faricimab
- **ATC codes:** `S01LA09`
- **DrugBank:** [DB15303](https://go.drugbank.com/drugs/DB15303) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Faricimab is a monoclonal antibody used to treat eye conditions involving abnormal blood vessel growth, such as wet macular degeneration, macular edema, and complications of diabetes. It is authorised in the European Union and is also under investigation for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q60785557](https://www.wikidata.org/wiki/Q60785557) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:18 | 1:33 | 0/1/0 | 0/0/0 | 0/0/0 | 105,867/7,189 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Diack_2024_2_reference](drugs/drug_faricimab/Faricimab_Diack2024v2_reference.md) | — | 1-compartment (no model) | 5 (+2 cov.) | Diack C et al., Ocular Pharmacokinetics of Faricimab Fo…, Translational vision scienc… (2024) | [10.1167/tvst.13.11.14](https://doi.org/10.1167/tvst.13.11.14) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Diack_2024 | irrelevant | 2 | 1 | The paper describes a pharmacodynamic (PD) model of biomarkers (Ang-2, VEGF-A) rather than reporting quantitative pharmacokinetic (PK) parameters (CL, V, t1/2) for faricimab itself, which it references from a separate submitted manuscript. |
| popPK | Egger_2026 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (visual acuity, retinal thickness, treatment intervals) for faricimab in nAMD, but does not report any pharmacokinetic parameters (clearance, volume, half-life, or population PK model). |
| popPK | Tanaka_2026 | irrelevant | 0 | 0 | This is a clinical study investigating local macular hemodynamic changes (blood flow) and anatomy, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:17 UTC</sub>
