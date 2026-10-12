<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;delafloxacin&quot;}]"></div>

# delafloxacin

- **generic name:** delafloxacin
- **ATC codes:** `J01MA23`
- **DrugBank:** [DB11943](https://go.drugbank.com/drugs/DB11943) · **PubChem:** [CID 487101](https://pubchem.ncbi.nlm.nih.gov/compound/487101)
- **molar mass:** 440.76 g/mol (C18H12ClF3N4O4) — DrugBank
- **groups:** approved, investigational

## About

Delafloxacin is a fluoroquinolone antibiotic used to treat bacterial infections, including community-acquired infections. It is approved and authorised in the European Union, though it remains a relatively specialised antibacterial rather than a widely used one.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5253067](https://www.wikidata.org/wiki/Q5253067) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:49 | 0:34 | 0/0/0 | 2/0/0 | 0/0/0 | 37,108/1,515 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Alexandre_2025_Totalpop](drugs/drug_delafloxacin/pd_Alexandre_2025_Totalpop.md) | total viable population ← delafloxacin · inhibition effect | — | Alexandre K et al., Effect of pH on antimicrobial activity…, Microbiology spectrum (2025) | [10.1128/spectrum.02338-25](https://doi.org/10.1128/spectrum.02338-25) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Lepak_2016_CFU](drugs/drug_delafloxacin/pd_Lepak_2016_CFU.md) | organism burden in the lung (CFU counts) biomarker turnover ← delafloxacin | — | Lepak AJ et al., In Vivo Pharmacodynamic Target Assessme…, Antimicrobial agents and ch… (2016) | [10.1128/AAC.00647-16](https://doi.org/10.1128/AAC.00647-16) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lepak_2016.pdf` | Lepak AJ et al., In Vivo Pharmacodynamic Target Assessme…, Antimicrobial agents and ch… (2016) | popPK | 8 | [10.1128/AAC.00647-16](https://doi.org/10.1128/AAC.00647-16) | [27216072](https://pubmed.ncbi.nlm.nih.gov/27216072) | Reports single-dose non-compartmental PK parameters (Cmax, AUC, t1/2) for delafloxacin in mice, though population PK values (CL, V) are not explicitly listed. |

<sub>queue written 2026-10-07T11:49:07.752734+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexandre_2025 | irrelevant | 1 | 0 | This is an in-vitro pharmacodynamic study measuring MICs and bacterial killing, not a pharmacokinetic study; PK parameters for simulations are in the supplementary material which is not provided. |
| popPK | Crass_2019 | irrelevant | 0 | 0 | The paper is a review discussing regulatory guidance for renal function estimation using delafloxacin only as an example, without providing original quantitative PK parameter values. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The study is an in-vitro investigation of MICs and efficacy of delafloxacin and other drugs against Mycobacterium abscessus, not a pharmacokinetic study. |
| popPK | Lv_2024 | relevant | 10 | 1 | The study is a population PK/PD trial for delafloxacin in humans, but the specific numeric parameter estimates (CL, V, Q, etc.) are located in Table 2, which is in the supplemental material and not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
