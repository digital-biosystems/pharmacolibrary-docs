<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Voxilaprevir&quot;}]"></div>

# Voxilaprevir

- **generic name:** Voxilaprevir
- **ATC codes:** `J05AP56`
- **DrugBank:** [DB12026](https://go.drugbank.com/drugs/DB12026) · **PubChem:** [CID 89921642](https://pubchem.ncbi.nlm.nih.gov/compound/89921642)
- **molar mass:** 868.94 g/mol (C40H52F4N6O9S) — DrugBank
- **groups:** approved, investigational

## About

Voxilaprevir is an antiviral drug used to treat hepatitis C virus infections. It is an approved medicine and is used in combination regimens for hepatitis C, mainly in specialist care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27236086](https://www.wikidata.org/wiki/Q27236086) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:59 | 0:53 | 0/0/0 | 1/1/0 | 0/0/0 | 31,708/4,825 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_percent_residual_infectivity_in_A549_hACE2_cells](drugs/drug_voxilaprevir/pd_Gammeltoft_2021_percent_residual_infectivity_in_A549_hACE2_c.md) | percent residual infectivity in A549-hACE2 cells ← voxilaprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_percent_residual_infectivity_in_Vero_E6_cells](drugs/drug_voxilaprevir/pd_Gammeltoft_2021_percent_residual_infectivity_in_Vero_E6_cell.md) | percent residual infectivity in Vero E6 cells ← voxilaprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pham_2019_PI_activity](drugs/drug_voxilaprevir/pd_Pham_2019_PI_activity.md) | PI activity ← voxilaprevir · inhibition effect | — | Pham LV et al., HCV genotype 1-6 NS3 residue 80 substit…, Journal of hepatology (2019) | [10.1016/j.jhep.2018.10.031](https://doi.org/10.1016/j.jhep.2018.10.031) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Indolfi_2022.pdf` | Indolfi G et al., Sofosbuvir-velpatasvir-voxilaprevir in…, Hepatology (Baltimore, Md.) (2022) | popPK | 8 | [10.1002/hep.32393](https://doi.org/10.1002/hep.32393) | [35112372](https://pubmed.ncbi.nlm.nih.gov/35112372) | Population pharmacokinetics were assessed, but no numeric disposition parameter values are present in the provided evidence. |

<sub>queue written 2026-10-07T15:59:17.885031+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gammeltoft_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral potency study, not a voxilaprevir pharmacokinetic study reporting disposition parameters. |
| popPK | Indolfi_2022 | relevant | 8 | 0 | Population pharmacokinetics were assessed, but no numeric disposition parameter values are present in the provided evidence. |
| popPK | Pham_2019 | irrelevant | 0 | 0 | This is an in-vitro antiviral resistance study and reports no voxilaprevir disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
