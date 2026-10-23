<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;tioconazole&quot;}]"></div>

# tioconazole

- **generic name:** tioconazole
- **ATC codes:** `D01AC07`, `G01AF08`
- **DrugBank:** [DB01007](https://go.drugbank.com/drugs/DB01007) · **PubChem:** [CID 5482](https://pubchem.ncbi.nlm.nih.gov/compound/5482)
- **molar mass:** 387.711 g/mol (C16H13Cl3N2OS) — DrugBank
- **groups:** approved

## About

Tioconazole is an antifungal drug used to treat fungal skin infections and vulvovaginal candidiasis. It is an approved medicine, applied topically to the skin or vagina.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q260326](https://www.wikidata.org/wiki/Q260326) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chen_2024_C_parvum_growth](drugs/drug_tioconazole/pd_Chen_2024_C_parvum_growth.md) | C. parvum growth ← tioconazole · direct sigmoid Emax (Hill) effect | — | Chen H et al., Lower micromolar activity of the antifu…, International journal for p… (2024) | [10.1016/j.ijpddr.2024.100551](https://doi.org/10.1016/j.ijpddr.2024.100551) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chen_2024_CpAdhE_activity](drugs/drug_tioconazole/pd_Chen_2024_CpAdhE_activity.md) | CpAdhE enzyme activity (forward reaction) ← tioconazole · direct sigmoid Emax (Hill) effect | — | Chen H et al., Lower micromolar activity of the antifu…, International journal for p… (2024) | [10.1016/j.ijpddr.2024.100551](https://doi.org/10.1016/j.ijpddr.2024.100551) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chen_2024_CpAdhE_activity_2](drugs/drug_tioconazole/pd_Chen_2024_CpAdhE_activity_2.md) | CpAdhE enzyme activity (reverse reaction) ← tioconazole · direct sigmoid Emax (Hill) effect | — | Chen H et al., Lower micromolar activity of the antifu…, International journal for p… (2024) | [10.1016/j.ijpddr.2024.100551](https://doi.org/10.1016/j.ijpddr.2024.100551) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tioconazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP51A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:55 | 0:50 | 0/0/0 | 1/0/0 | 0/0/0 | 23,652/1,264 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of enzyme inhibition and anti-parasitic efficacy, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for tioconazole. |
| popPK | Odds_1984 | irrelevant | 0 | 0 | The study is an in-vitro assessment of antifungal activity (inhibition factors) and does not report pharmacokinetic parameters for tioconazole. |
| popPK | Odds_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ATP suppression in Candida albicans and does not report any pharmacokinetic parameters for tioconazole. |
| popPK | Pasquali_2020 | irrelevant | 0 | 0 | The study is an in vitro sensitivity assay of a fungus (Fusarium graminearum) to fungicides, not a pharmacokinetic study of drug disposition in a host organism. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btioconazole%5D&body=Drug%3A%20tioconazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tioconazole/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
