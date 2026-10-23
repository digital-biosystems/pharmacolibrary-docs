<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;larotrectinib&quot;}]"></div>

# larotrectinib

- **generic name:** larotrectinib
- **ATC codes:** `L01EX12`, `L01XE53`
- **DrugBank:** [DB14723](https://go.drugbank.com/drugs/DB14723) · **PubChem:** none
- **molar mass:** 428.444 g/mol (C21H22F2N6O2) — DrugBank
- **groups:** approved, investigational

## About

Larotrectinib is a protein kinase inhibitor used to treat cancer. It is an approved anticancer medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27081513](https://www.wikidata.org/wiki/Q27081513) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.99).">human + animal</span> | [Roa_2024_survival_percentage](drugs/drug_larotrectinib/pd_Roa_2024_survival_percentage.md) | survival percentage ← larotrectinib · inhibition effect | — | Roa P et al., Zurletrectinib is a next-generation TRK…, British journal of cancer (2024) | [10.1038/s41416-024-02760-1](https://doi.org/10.1038/s41416-024-02760-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=larotrectinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: NTRK1 (inhibitor), NTRK2 (inhibitor), NTRK3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:35 | 1:43 | 0/0/0 | 0/1/0 | 0/0/0 | 127,723/7,619 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Attia_2020 | irrelevant | 0 | 0 | This is an in-vitro study of larotrectinib analogs and reports no larotrectinib disposition parameters. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | Larotrectinib is mentioned as background; no quantitative PK parameters for it are reported. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | This is a review of anti-breast-cancer pyrazoles, with no quantitative larotrectinib pharmacokinetic parameters. |
| popPK | Qin_2023 | irrelevant | 0 | 0 | Larotrectinib is only mentioned as background; the reported pharmacokinetics are for compound 24b. |
| popPK | Roa_2024 | irrelevant | 1 | 0 | Larotrectinib is only a comparator, and no larotrectinib disposition parameters are reported. |
| popPK | Schmidt_2025 | irrelevant | 0 | 0 | Larotrectinib is tested only for tumor inhibition, with no pharmacokinetic parameters or values reported. |
| popPK | Vanoli_2023 | irrelevant | 0 | 0 | This in vitro cancer-model study measures inhibitor response, not larotrectinib pharmacokinetics or disposition parameters. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | Larotrectinib is used as a TrkA inhibitor, and no larotrectinib pharmacokinetic parameters are reported. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | Larotrectinib is used as a TrkA inhibitor in cancer experiments, with no pharmacokinetic disposition parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blarotrectinib%5D&body=Drug%3A%20larotrectinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_larotrectinib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
