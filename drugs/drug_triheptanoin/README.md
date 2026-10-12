<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;triheptanoin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Triheptanoin_Lee2022_reference&quot;,&quot;label&quot;:&quot;Lee_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# triheptanoin

- **generic name:** triheptanoin
- **ATC codes:** `A16AX17`
- **DrugBank:** [DB11677](https://go.drugbank.com/drugs/DB11677) · **PubChem:** [CID 69286](https://pubchem.ncbi.nlm.nih.gov/compound/69286)
- **molar mass:** 428.61 g/mol (C24H44O6) — DrugBank
- **groups:** approved, investigational

## About

Triheptanoin is a medium-chain triglyceride used as a calorie and fatty-acid supplement in metabolic disorders in which the body cannot properly use long-chain fatty acids for energy. It is an approved medicine, mainly used in the United States, and is also being studied for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414576](https://www.wikidata.org/wiki/Q414576) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| heptanoate | metabolite | — (mass units only) | — | — | — | — |
| trihexanoin | metabolite | 428.61 | — | the paper | — | Lee_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:59 | 3:02 | 1/0/0 | 0/0/0 | 0/0/0 | 119,697/40,781 | einfracz / qwen3.8-27b | 6 | 1/5 | 4/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Lee_2022_reference](drugs/drug_triheptanoin/Triheptanoin_Lee2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Lee SK et al., Population Pharmacokinetics of Heptanoa…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1145](https://doi.org/10.1002/cpdd.1145) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 7 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ambrose_2026 | not_relevant | 1 | 0 | This is a single case report on the clinical efficacy of triheptanoin in treating a specific metabolic disorder (PDE-ALDH7A1); it does not report pharmacogenomic associations between gene variants and PK/PD parameters. |
| popPK | Lee_2021 | relevant | 8 | 2 | Study reports NCA PK parameters for triheptanoin metabolites (heptanoate), but specific numeric values for CL, Vd, and t1/2 are not present in the text (referenced to Tables 3 and 6 which are not included). |
| PGx | Yamada_2019 | not_relevant | 1 | 0 | The paper discusses the management of VLCAD deficiency and mentions a trial for triheptanoin, but it does not report any pharmacogenomic analysis linking specific gene variants to changes in PK or PD parameters of triheptanoin. |
| popPK | Yoon_2026 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study evaluating the reduction of major clinical events in patients with LC-FAOD, containing no pharmacokinetic parameter estimates (CL, V, ka, etc.) for triheptanoin. |
| PGx | Zimmern_2022 | not_relevant | 0 | 0 | The paper reviews genetic epilepsies in general and mentions triheptanoin in relation to GLUT1 deficiency, but it does not report any pharmacogenomic effect (gene variant changing PK/PD) for triheptanoin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:56 UTC</sub>
