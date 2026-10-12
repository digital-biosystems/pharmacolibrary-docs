<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;sultiame&quot;}]"></div>

# sultiame

- **generic name:** sultiame
- **ATC codes:** `N03AX03`
- **DrugBank:** [DB08329](https://go.drugbank.com/drugs/DB08329) · **PubChem:** [CID 5356](https://pubchem.ncbi.nlm.nih.gov/compound/5356)
- **molar mass:** 290.359 g/mol (C10H14N2O4S2) — DrugBank
- **groups:** approved

## About

Sultiame is an anticonvulsant drug used to treat epilepsy. It is an approved medicine, though not authorised centrally in the European Union, and is used mainly in some European countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2364943](https://www.wikidata.org/wiki/Q2364943) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sultiame | parent | 290.359 | C10H14N2O4S2 | DrugBank | [5356](https://pubchem.ncbi.nlm.nih.gov/compound/5356) | Dao_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:52 | 2:42 | 0/0/1 | 0/0/0 | 0/0/0 | 104,191/3,541 | einfracz / qwen3.8-27b | 3 | 0/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q329 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Dao_2020_reference](drugs/drug_sultiame/Sultiame_Dao2020_reference.md) | — | 2-compartment (no model) | 7 | Dao K et al., Sultiame pharmacokinetic profile in pla…, Pharmacology research & per… (2020) | [10.1002/prp2.558](https://doi.org/10.1002/prp2.558) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sultiame).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CA1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 23 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Heger_2024 | not_relevant | 0 | 0 | The study investigates non-genetic factors (age, drug-drug interactions) affecting sulthiame PK and does not report pharmacogenomic effects. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 0 | 0 | The paper is a review of antiepileptic drug interactions and mentions sultiame (as STM) only in a list of abbreviations or as a minor comparator, providing no specific quantitative pharmacokinetic parameters for it. |
| PGx | Plissonneau_2026 | not_relevant | 0 | 0 | The paper studies the effect of hepatic steatosis (a metabolic condition) on drug metabolism, not the effect of a gene variant, genotype, or phenotype (pharmacogenomics). |
| PGx | Yamamoto_2014 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (sulthiame affecting clobazam pharmacokinetics) rather than a pharmacogenomic effect (gene variant changing sulthiame pharmacokinetics/pharmacodynamics). |
| PGx | Yamamoto_2015 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect of CYP2C9/2C19 variants on the target dose of phenytoin, not sultiame. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:50 UTC</sub>
