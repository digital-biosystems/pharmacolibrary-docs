<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;monobenzone&quot;}]"></div>

# monobenzone

- **generic name:** monobenzone
- **ATC codes:** `D11AX13`
- **DrugBank:** [DB00600](https://go.drugbank.com/drugs/DB00600) · **PubChem:** [CID 7638](https://pubchem.ncbi.nlm.nih.gov/compound/7638)
- **molar mass:** 200.2332 g/mol (C13H12O2) — DrugBank
- **groups:** approved, withdrawn

## About

Monobenzone is a skin-lightening agent used to treat vitiligo and other pigmentation disorders by permanently removing remaining skin pigment. It is no longer in general use; it was withdrawn from the market, reportedly because it caused permanent depigmentation and skin irritation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2768526](https://www.wikidata.org/wiki/Q2768526) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:36 | 1:22 | 0/0/0 | 1/0/0 | 0/0/0 | 36,260/666 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ma_2021_KDM1A](drugs/drug_monobenzone/pd_Ma_2021_KDM1A.md) | KDM1A inhibitory activity biomarker turnover ← monobenzone | — | Ma P et al., Monobenzone, a Novel and Potent KDM1A I…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.640949](https://doi.org/10.3389/fphar.2021.640949) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=monobenzone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TYR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dong_2022 | irrelevant | 0 | 0 | The study focuses on the in vitro and in vivo anti-leukemic efficacy and mechanism of action (RNR inhibition) of monobenzone, containing no pharmacokinetic data such as clearance, volume, or half-life. |
| popPK | Ma_2021 | irrelevant | 0 | 0 | This is an in vitro mechanistic study characterizing monobenzone as a KDM1A inhibitor, reporting no pharmacokinetic parameters. |
| popPK | Zhu_2013 | irrelevant | 0 | 0 | The study focuses on a pathological mouse model of vitiligo induced by monobenzone and does not report any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
