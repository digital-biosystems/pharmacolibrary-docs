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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:33 | 0:28 | 0/1/0 | 0/0/0 | 0/0/0 | 72,582/2,358 | einfracz / qwen3.8-27b | 5 | 0/2 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.684). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chen_2020_reference](drugs/drug_sodium_oxybate/SodiumOxybate_Chen2020_reference.md) | — | 2-compartment (no model) | 7 (+3 cov.) | Chen C et al., Population and Noncompartmental Pharmac…, Clinical and translational… (2020) | [10.1111/cts.12780](https://doi.org/10.1111/cts.12780) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sodium_oxybate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADHFE1 (substrate), ALDH5A1 (substrate), GABBR1 (target), NNT (substrate), SLC52A2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Krahn_2025 | irrelevant | 0 | 0 | The paper reports clinical efficacy endpoints (ESS, sleep quality) rather than pharmacokinetic parameters (CL, V, ka) for sodium oxybate. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:32 UTC</sub>
