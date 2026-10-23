<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;tolmetin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tolmetin_Selley1975_reference&quot;,&quot;label&quot;:&quot;Selley_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolmetin/Tolmetin_Selley1975_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# tolmetin

- **generic name:** tolmetin
- **ATC codes:** `M01AB03`, `M02AA21`
- **DrugBank:** [DB00500](https://go.drugbank.com/drugs/DB00500) · **PubChem:** [CID 5509](https://pubchem.ncbi.nlm.nih.gov/compound/5509)
- **molar mass:** 257.2845 g/mol (C15H15NO3) — DrugBank
- **groups:** approved

## About

Tolmetin is a non-steroidal anti-inflammatory drug used to treat osteoarthritis, rheumatoid arthritis, and juvenile rheumatoid arthritis. It is an approved medicine, available as oral antiinflammatory products and topical preparations for joint and muscular pain.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3992411](https://www.wikidata.org/wiki/Q3992411) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tolmetin | parent | 257.284 | C15H15NO3 | DrugBank | [5509](https://pubchem.ncbi.nlm.nih.gov/compound/5509) | Migdalof_1976, Sabater_1992, Selley_1975 |

## Start here

> **Selley_1975_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> normal subjects and patients with rheumatoid arthritis, n = 12. [Run it in the simulator](drugs/drug_tolmetin/Tolmetin_Selley1975_reference.md?tab=Simulation) · [record](drugs/drug_tolmetin/Tolmetin_Selley1975_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V/F | 6.86 ‡ | L | 0.098 l/kg | normal subjects and patients with rheumatoid arthritis | 12 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Selley_1975_reference](drugs/drug_tolmetin/Tolmetin_Selley1975_reference.md) |
| t½ | t1/2z | 0.83 | h | 0.83 hr | normal subjects and patients with rheumatoid arthritis | 12 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Selley_1975_reference](drugs/drug_tolmetin/Tolmetin_Selley1975_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Selley_1975_reference](drugs/drug_tolmetin/Tolmetin_Selley1975_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Selley ML et al., Pharmacokinetic studies of tolmetin in…, Clinical pharmacology and t… (1975) | [10.1002/cpt1975175599](https://doi.org/10.1002/cpt1975175599) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Migdalof_1976_reference](drugs/drug_tolmetin/Tolmetin_Migdalof1976_reference.md) | — | 1-compartment (no model) | 1 | Migdalof BH et al., The time course of tolmetin and its met…, Drug metabolism and disposi… (1976) | — |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Sabater_1992_reference](drugs/drug_tolmetin/Tolmetin_Sabater1992_reference.md) | — | 1-compartment (no model) | 2 | Sabater J et al., Pharmacokinetic study of tolmetin in th…, Arzneimittel-Forschung (1992) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Flores-Murrieta_1998_antinociceptive_effect](drugs/drug_tolmetin/pd_Flores_Murrieta_1998_antinociceptive_effect.md) | antinociceptive effect ← tolmetin · indirect response — drug inhibits the production of antinociceptive effect | model (no simulator) | Flores-Murrieta FJ et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1998) | [10.1023/a:1023273100270](https://doi.org/10.1023/a:1023273100270) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tolmetin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: MPO (inhibitor), PTGS1 (inhibitor), PTGS2 (inhibitor), TDO2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:29 | 0:22 | 1/2/0 | 1/0/0 | 0/0/0 | 26,941/2,331 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sabater_1992.pdf` | Sabater J et al., Pharmacokinetic study of tolmetin in th…, Arzneimittel-Forschung (1992) | popPK | 10 | not captured | [1418060](https://pubmed.ncbi.nlm.nih.gov/1418060) | The study is a pharmacokinetic analysis of tolmetin in rats reporting a compartmental model and specific parameters like bioavailability and absorption rate (K01), though other values like clearance and volume are not explicitly listed in the provided text. |
| `Selley_1975.pdf` | Selley ML et al., Pharmacokinetic studies of tolmetin in…, Clinical pharmacology and t… (1975) | popPK | 10 | [10.1002/cpt1975175599](https://doi.org/10.1002/cpt1975175599) | [1126116](https://pubmed.ncbi.nlm.nih.gov/1126116) | The study reports quantitative PK parameters for tolmetin in humans, including elimination rate constant, half-life, and volume of distribution. |
| `Migdalof_1976.pdf` | Migdalof BH et al., The time course of tolmetin and its met…, Drug metabolism and disposi… (1976) | popPK | 9 | not captured | [10146](https://pubmed.ncbi.nlm.nih.gov/10146) | The study reports quantitative PK parameters (half-life) for tolmetin in rats and mice using a one-compartment model, but specific values for clearance and volume are not explicitly listed in the evidence text. |
| `Flores-Murrieta_1998.pdf` | Flores-Murrieta FJ et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1998) | popPK | 6 | [10.1023/a:1023273100270](https://doi.org/10.1023/a:1023273100270) | [10205770](https://pubmed.ncbi.nlm.nih.gov/10205770) | The study reports population PK modeling of tolmetin in rats, but the abstract only provides PD parameters (IC50) and lacks specific numeric PK disposition values like CL or V. |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T01:29:32.237650+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Flores-Murrieta_1998 | relevant | 6 | 2 | The study reports population PK modeling of tolmetin in rats, but the abstract only provides PD parameters (IC50) and lacks specific numeric PK disposition values like CL or V. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding mechanistic study where tolmetin is tested as a comparator agent, and no pharmacokinetic parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 01:29 UTC</sub>
