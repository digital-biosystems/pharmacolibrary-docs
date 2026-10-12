<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;benzylpenicillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzylpenicillin_Shah2023_reference&quot;,&quot;label&quot;:&quot;Shah_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benzylpenicillin/Benzylpenicillin_Shah2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# benzylpenicillin

- **generic name:** benzylpenicillin
- **ATC codes:** `J01CE01`, `J01CE08`, `S01AA14`
- **DrugBank:** [DB01053](https://go.drugbank.com/drugs/DB01053) · **PubChem:** [CID 5904](https://pubchem.ncbi.nlm.nih.gov/compound/5904)
- **molar mass:** 334.39 g/mol (C16H18N2O4S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Benzylpenicillin is a penicillin antibiotic used to treat bacterial infections such as gonorrhea, diphtheria, botulism, actinomycosis, and septicemia caused by anthrax or staphylococci. It remains an approved medicine, is on the WHO essential medicines list, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q258450](https://www.wikidata.org/wiki/Q258450) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| benzylpenicillin | parent | 334.39 | C16H18N2O4S | DrugBank | [5904](https://pubchem.ncbi.nlm.nih.gov/compound/5904) | Yoo_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:02 | 2:02 | 1/0/1 | 0/0/0 | 0/0/0 | 59,034/6,411 | einfracz / qwen3.8-27b | 8 | 0/4 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> | [Shah_2023_reference](drugs/drug_benzylpenicillin/Benzylpenicillin_Shah2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Shah RV et al., Population Pharmacokinetic Study of Ben…, Antibiotics (Basel, Switzer… (2023) | [10.3390/antibiotics12040643](https://doi.org/10.3390/antibiotics12040643) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Yoo_2025_reference](drugs/drug_benzylpenicillin/Benzylpenicillin_Yoo2025_reference.md) | — | 2-compartment (no model) | 4 | Yoo O et al., Population pharmacokinetics of penicill…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00269-25](https://doi.org/10.1128/aac.00269-25) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Butranova_2023 | irrelevant | 0 | 0 | The paper is a review of neonatal antibiotic pharmacokinetics that mentions benzylpenicillin as a common therapeutic agent but does not provide specific quantitative pharmacokinetic parameters (CL, V, ka, etc.) for benzylpenicillin in the provided text or tables. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:01 UTC</sub>
