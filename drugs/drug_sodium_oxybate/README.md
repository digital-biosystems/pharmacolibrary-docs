<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;sodium oxybate&quot;}]"></div>

# sodium oxybate

- **generic name:** sodium oxybate
- **ATC codes:** `N01AX11`, `N07XX04`
- **DrugBank:** [DB09072](https://go.drugbank.com/drugs/DB09072) · **PubChem:** [CID 23663870](https://pubchem.ncbi.nlm.nih.gov/compound/23663870)
- **molar mass:** 126.087 g/mol (C4H7NaO3) — DrugBank
- **groups:** approved, investigational

## About

Sodium oxybate is used to treat narcolepsy, including cataplexy, and has also been studied for conditions such as fibromyalgia, hypersomnia, insomnia, and chronic fatigue syndrome. It is authorised in the European Union and approved elsewhere, but is a controlled medicine carrying a boxed warning, so its use is tightly regulated.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7553347](https://www.wikidata.org/wiki/Q7553347) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sodium oxybate (sodium_oxybate) | parent | 126.087 | C4H7NaO3 | DrugBank | [23663870](https://pubchem.ncbi.nlm.nih.gov/compound/23663870) | Chen_2020 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Chen_2020_reference](drugs/drug_sodium_oxybate/SodiumOxybate_Chen2020_reference.md) | — | 2-compartment (no model) | 7 (+3 cov.) | Chen C et al., Population and Noncompartmental Pharmac…, Clinical and translational… (2020) | [10.1111/cts.12780](https://doi.org/10.1111/cts.12780) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sodium_oxybate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADHFE1 (substrate), ALDH5A1 (substrate), GABBR1 (target), NNT (substrate), SLC52A2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:33 | 0:28 | 0/1/0 | 0/0/0 | 0/0/0 | 72,582/2,358 | einfracz / qwen3.8-27b | 5 | 0/2 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Krahn_2025 | irrelevant | 0 | 0 | The paper reports clinical efficacy endpoints (ESS, sleep quality) rather than pharmacokinetic parameters (CL, V, ka) for sodium oxybate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_oxybate%5D&body=Drug%3A%20sodium_oxybate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_oxybate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 04:32 UTC</sub>
