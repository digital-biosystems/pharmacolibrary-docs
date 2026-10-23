<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;fostemsavir&quot;}]"></div>

# fostemsavir

- **generic name:** fostemsavir
- **ATC codes:** `J05AX29`
- **DrugBank:** [DB11796](https://go.drugbank.com/drugs/DB11796) · **PubChem:** [CID 11319217](https://pubchem.ncbi.nlm.nih.gov/compound/11319217)
- **molar mass:** 583.498 g/mol (C25H26N7O8P) — DrugBank
- **groups:** approved, investigational

## About

Fostemsavir is an antiviral medicine used to treat HIV infection. It is authorised in the European Union and is used as an approved antiviral, with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17001240](https://www.wikidata.org/wiki/Q17001240) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fostemsavir | parent | 583.498 | C25H26N7O8P | DrugBank | [11319217](https://pubchem.ncbi.nlm.nih.gov/compound/11319217) | Parasrampuria_2025 |
| temsavir | metabolite | 473.493 | C24H23N7O4 | PubChem | [11317439](https://pubchem.ncbi.nlm.nih.gov/compound/11317439) | Parasrampuria_2025 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Parasrampuria_2025_reference](drugs/drug_fostemsavir/Fostemsavir_Parasrampuria2025_reference.md) | — | 1-compartment (no model) | 5 | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Lagishetty_2020_ddQTcF](drugs/drug_fostemsavir/pd_Lagishetty_2020_ddQTcF.md) | difference vs. placebo for change from baseline in Fridericia-corrected QT interval ← temsavir (TMR) · direct linear effect | — | Lagishetty C et al., Effects of Temsavir, Active Moiety of A…, Clinical and translational… (2020) | [10.1111/cts.12763](https://doi.org/10.1111/cts.12763) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Parasrampuria_2025_0_5_log10_decrease_in_HIV_1_RNA](drugs/drug_fostemsavir/pd_Parasrampuria_2025_0_5_log10_decrease_in_HIV_1_RNA.md) | Proportion of subjects with &gt;0.5 log10 decrease in plasma HIV‐1 RNA on Day 8 ← temsavir · direct Emax (saturable) effect | — | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Parasrampuria_2025_1_log10_decrease_in_HIV_1_RNA](drugs/drug_fostemsavir/pd_Parasrampuria_2025_1_log10_decrease_in_HIV_1_RNA.md) | Proportion of subjects with &gt;1 log10 decrease in plasma HIV‐1 RNA on Day 8 ← temsavir · direct Emax (saturable) effect | — | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Parasrampuria_2025_Change_in_HIV_1_RNA](drugs/drug_fostemsavir/pd_Parasrampuria_2025_Change_in_HIV_1_RNA.md) | Change in plasma HIV‐1 RNA from Day 1 to Day 8 ← temsavir · direct Emax (saturable) effect | — | Parasrampuria R et al., Population pharmacokinetics and exposur…, Pharmacology research & per… (2025) | [10.1002/prp2.70023](https://doi.org/10.1002/prp2.70023) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fostemsavir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` carrier | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:40 | 2:09 | 0/1/0 | 1/1/0 | 0/0/0 | 61,160/13,100 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Thakkar_2023.pdf` | Thakkar N et al., Model-Based Dose Selection of Fostemsav…, Clinical pharmacology in dr… (2023) | popPK | 9 | [10.1002/cpdd.1291](https://doi.org/10.1002/cpdd.1291) | [37329260](https://pubmed.ncbi.nlm.nih.gov/37329260) | The paper uses population pharmacokinetic modeling for temsavir, but no numeric disposition parameter values are present in the evidence. |

<sub>queue written 2026-10-07 17:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lagishetty_2020 | irrelevant | 1 | 1 | The human study models QT response to temsavir concentrations, while PK exposure parameters are referred to in supplementary Figure S1 and are not provided here. |
| popPK | Thakkar_2023 | relevant | 9 | 0 | The paper uses population pharmacokinetic modeling for temsavir, but no numeric disposition parameter values are present in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfostemsavir%5D&body=Drug%3A%20fostemsavir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fostemsavir/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 17:39 UTC</sub>
