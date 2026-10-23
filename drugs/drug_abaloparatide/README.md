<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05A&quot;,&quot;href&quot;:&quot;atc/H05A.md&quot;},{&quot;label&quot;:&quot;abaloparatide&quot;}]"></div>

# abaloparatide

- **generic name:** abaloparatide
- **ATC codes:** `H05AA04`
- **DrugBank:** [DB05084](https://go.drugbank.com/drugs/DB05084) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Abaloparatide is a parathyroid hormone analogue used to treat postmenopausal osteoporosis. It is an approved medicine, with one product authorised in the European Union, though another application there was refused.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4834481](https://www.wikidata.org/wiki/Q4834481) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_PTHR1_internalization](drugs/drug_abaloparatide/pd_Sahbani_2019_PTHR1_internalization.md) | PTHR1 internalization ← abaloparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_arrestin_recruitment](drugs/drug_abaloparatide/pd_Sahbani_2019_arrestin_recruitment.md) | β-arrestin recruitment ← abaloparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_cAMP](drugs/drug_abaloparatide/pd_Sahbani_2019_cAMP.md) | intracellular cAMP ← abaloparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:54 | 0:28 | 0/0/0 | 1/0/0 | 0/0/0 | 28,509/946 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bilezikian_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy study assessing trabecular bone score (TBS) and bone mineral density, and does not report pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for abaloparatide. |
| popPK | Sahbani_2019 | irrelevant | 0 | 0 | The study evaluates the osteoanabolic efficacy and receptor signaling (cAMP, beta-arrestin) of abaloparatide, but does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
