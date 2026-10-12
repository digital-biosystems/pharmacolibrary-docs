<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;camrelizumab&quot;}]"></div>

# camrelizumab

- **generic name:** camrelizumab
- **ATC codes:** `L01FF14`
- **DrugBank:** [DB14776](https://go.drugbank.com/drugs/DB14776) · **PubChem:** not captured
- **groups:** investigational

## About

Camrelizumab is a PD-1 inhibitor monoclonal antibody being investigated as an anticancer agent. It is not authorised in the European Union and remains investigational.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:50 | 2:14 | 0/3/1 | 0/0/0 | 0/0/0 | 52,400/8,658 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.417). Primary extraction retained.">cross-check: partial</span> | [Shang_2022_reference](drugs/drug_camrelizumab/Camrelizumab_Shang2022_reference.md) | — | 3-compartment (no model) | 3 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wang_2021_base](drugs/drug_camrelizumab/Camrelizumab_Wang2021_base.md) | — | 2-compartment (no model) | 8 | Wang CY et al., Population pharmacokinetics of the anti…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00550-y](https://doi.org/10.1038/s41401-020-00550-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wang_2021_final](drugs/drug_camrelizumab/Camrelizumab_Wang2021_final.md) | — | 2-compartment (no model) | 8 (+2 cov.) | Wang CY et al., Population pharmacokinetics of the anti…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00550-y](https://doi.org/10.1038/s41401-020-00550-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Wang_2021_median_2_5_97_5](drugs/drug_camrelizumab/Camrelizumab_Wang2021_median_2_5_97_5.md) | — | 1-compartment (no model) | 3 | Wang CY et al., Population pharmacokinetics of the anti…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00550-y](https://doi.org/10.1038/s41401-020-00550-y) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hou_2023 | irrelevant | 0 | 0 | This clinical efficacy study reports no quantitative pharmacokinetic disposition parameters for camrelizumab. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | This is a review and provides no quantitative camrelizumab disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:48 UTC</sub>
