<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;benzylpenicillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzylpenicillin_Shah2023_reference&quot;,&quot;label&quot;:&quot;Shah_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benzylpenicillin/Benzylpenicillin_Shah2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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

## Start here

> **Shah_2023_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_benzylpenicillin/Benzylpenicillin_Shah2023_reference.md?tab=Simulation) · [record](drugs/drug_benzylpenicillin/Benzylpenicillin_Shah2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 24 ‡ | L/h | 24.0 L/h/70 kg | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Shah_2023_reference](drugs/drug_benzylpenicillin/Benzylpenicillin_Shah2023_reference.md) |
| CL | CL | — | L/h | 12.1 | healthy adult volunteers | 72 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yoo_2025_reference](drugs/drug_benzylpenicillin/Benzylpenicillin_Yoo2025_reference.md) |
| V | V1 | 15.1 ‡ | L | 15.1 L/70 kg | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Shah_2023_reference](drugs/drug_benzylpenicillin/Benzylpenicillin_Shah2023_reference.md) |
| V | V1 | 1022 ‡ | L | 14.6 l.70kg−1 | healthy adult volunteers | 72 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yoo_2025_reference](drugs/drug_benzylpenicillin/Benzylpenicillin_Yoo2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="306.7" y1="18" x2="306.7" y2="58" stroke="#ddd"/><text x="306.7" y="72" font-size="10" text-anchor="middle">100</text><line x1="423.3" y1="18" x2="423.3" y2="58" stroke="#ddd"/><text x="423.3" y="72" font-size="10" text-anchor="middle">1000</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Shah_2023 · V1 ·/kg</text><circle cx="210.9" cy="30.0" r="4" fill="#2e7d32"><title>Shah_2023 · V1 ·/kg: 15.1 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Yoo_2025 · V1 ·/kg</text><circle cx="424.4" cy="46.0" r="4" fill="#ef6c00"><title>Yoo_2025 · V1 ·/kg: 1022 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Shah_2023_reference](drugs/drug_benzylpenicillin/Benzylpenicillin_Shah2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Shah RV et al., Population Pharmacokinetic Study of Ben…, Antibiotics (Basel, Switzer… (2023) | [10.3390/antibiotics12040643](https://doi.org/10.3390/antibiotics12040643) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Yoo_2025_reference](drugs/drug_benzylpenicillin/Benzylpenicillin_Yoo2025_reference.md) | — | 2-compartment (no model) | 4 | Yoo O et al., Population pharmacokinetics of penicill…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00269-25](https://doi.org/10.1128/aac.00269-25) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=benzylpenicillin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC15A1` inhibitor/substrate, `SLC22A4` inhibitor, `SLC22A5` inhibitor, `SLCO2B1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `SLCO1B1` substrate | DrugBank actor |
| metabolism | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC15A2` inhibitor/substrate, `SLC22A6` inhibitor, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SLC22A11 (inhibitor), SLCO3A1 (substrate), SLCO4A1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:02 | 2:02 | 2/0/0 | 0/0/0 | 0/0/0 | 59,034/6,411 | einfracz / qwen3.8-27b | 8 | 0/4 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 62 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Butranova_2023 | irrelevant | 0 | 0 | The paper is a review of neonatal antibiotic pharmacokinetics that mentions benzylpenicillin as a common therapeutic agent but does not provide specific quantitative pharmacokinetic parameters (CL, V, ka, etc.) for benzylpenicillin in the provided text or tables. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 11:01 UTC</sub>
