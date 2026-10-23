<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;encorafenib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Encorafenib_Yang2026_reference&quot;,&quot;label&quot;:&quot;Yang_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# encorafenib

- **generic name:** encorafenib
- **ATC codes:** `L01EC03`
- **DrugBank:** [DB11718](https://go.drugbank.com/drugs/DB11718) · **PubChem:** [CID 50922675](https://pubchem.ncbi.nlm.nih.gov/compound/50922675)
- **molar mass:** 540.01 g/mol (C22H27ClFN7O4S) — DrugBank
- **groups:** approved, investigational

## About

Encorafenib is a BRAF protein kinase inhibitor used to treat melanoma and colorectal cancer, and has also been studied for lung cancer. It is authorised in the European Union for melanoma and colorectal cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15409405](https://www.wikidata.org/wiki/Q15409405) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| encorafenib | parent | 540.01 | C22H27ClFN7O4S | DrugBank | [50922675](https://pubchem.ncbi.nlm.nih.gov/compound/50922675) | Yang_2026 |

## Start here

> **Yang_2026_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy participants and patients with melanoma, metastatic CRC, NSCLC, or other solid tumors, n = 1310. [Run it in the simulator](drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md?tab=Simulation) · [record](drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 12.24 | L/h | 12.238 L/h | healthy participants and patients with melanoma, metastatic CRC, NSCLC, or other solid tumors | 1310 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yang_2026_reference](drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md) |
| V | V1/F | 61.73 | L | 61.73 L | healthy participants and patients with melanoma, metastatic CRC, NSCLC, or other solid tumors | 1310 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yang_2026_reference](drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md) |
| ka | kabs | 0.954 | 1/h | 0.954 h−1 | healthy participants and patients with melanoma, metastatic CRC, NSCLC, or other solid tumors | 1310 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yang_2026_reference](drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md) |
| t½ | t1/2z | 64.28 | h | 64.279 h | healthy participants and patients with melanoma, metastatic CRC, NSCLC, or other solid tumors | 1310 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yang_2026_reference](drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_t_half_terminal</sub> | [Yang_2026_reference](drugs/drug_encorafenib/Encorafenib_Yang2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Yang DZ et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01608-y](https://doi.org/10.1007/s40262-025-01608-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Yang_2026_AENZ](drugs/drug_encorafenib/pd_Yang_2026_AENZ.md) | enzyme amount ← encorafenib · indirect response — drug stimulates the production of enzyme amount | model (no simulator) | Yang DZ et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01608-y](https://doi.org/10.1007/s40262-025-01608-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=encorafenib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inducer/inhibitor, `CYP2C19` substrate, `CYP2C8` inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate, `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BRAF (inhibitor), CCND1 (inhibitor), LIMK1 (inhibitor), LIMK2 (inhibitor), MAP2K4 (inhibitor), MAPK10 (inhibitor), MAPK8 (inhibitor), MAPK9 (inhibitor), RAF1 (inhibitor), STK36 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:41 | 3:14 | 1/0/0 | 1/0/0 | 0/0/0 | 70,098/17,367 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pétermann_2026.pdf` | Pétermann YJ et al., Population pharmacokinetics of encorafe…, Cancer chemotherapy and pha… (2026) | popPK | 10 | [10.1007/s00280-026-04876-y](https://doi.org/10.1007/s00280-026-04876-y) | [41843134](https://pubmed.ncbi.nlm.nih.gov/41843134) | The human popPK model is described and numeric exposure metrics and half-life are given, but numeric model parameter estimates are not. |

<sub>queue written 2026-10-06T23:38:16.091596+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2019 | irrelevant | 1 | 0 | This is a review and provides no numeric encorafenib disposition parameters in the supplied evidence. |
| popPK | Pétermann_2026 | relevant | 10 | 3 | The human popPK model is described and numeric exposure metrics and half-life are given, but numeric model parameter estimates are not. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:38 UTC</sub>
