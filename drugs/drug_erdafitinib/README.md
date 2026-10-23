<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;erdafitinib&quot;}]"></div>

# erdafitinib

- **generic name:** erdafitinib
- **ATC codes:** `L01EN01`
- **DrugBank:** [DB12147](https://go.drugbank.com/drugs/DB12147) · **PubChem:** [CID 67462786](https://pubchem.ncbi.nlm.nih.gov/compound/67462786)
- **molar mass:** 446.555 g/mol (C25H30N6O2) — DrugBank
- **groups:** approved, investigational

## About

Erdafitinib is a protein kinase inhibitor used to treat transitional cell carcinoma, a cancer of the urinary tract. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27077213](https://www.wikidata.org/wiki/Q27077213) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| erdafitinib | parent | 446.555 | C25H30N6O2 | DrugBank | [67462786](https://pubchem.ncbi.nlm.nih.gov/compound/67462786) | Dosne_2020, Dosne_2022 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.2 | L/h | 0.200 L/h | adult healthy volunteers and cancer patients |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dosne_2020_reference](drugs/drug_erdafitinib/Erdafitinib_Dosne2020_reference.md) |
| CL | CL/F | — | L/h | 33 % | patients with cancer | 345 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dosne_2022_reference](drugs/drug_erdafitinib/Erdafitinib_Dosne2022_reference.md) |
| t½ | t1/2z | 76.4 | h | 76.4 hours | adult healthy volunteers and cancer patients |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dosne_2020_reference](drugs/drug_erdafitinib/Erdafitinib_Dosne2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Dosne_2020_reference](drugs/drug_erdafitinib/Erdafitinib_Dosne2020_reference.md) | — | 1-compartment (no model) | 3 | Dosne AG et al., Population Pharmacokinetics of Total an…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1547](https://doi.org/10.1002/jcph.1547) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub> | [Dosne_2022_reference](drugs/drug_erdafitinib/Erdafitinib_Dosne2022_reference.md) | — | 1-compartment (no model) | 1 | Dosne AG et al., Erdafitinib's effect on serum phosphate…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12727](https://doi.org/10.1002/psp4.12727) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [De_2024_serum_phosphate](drugs/drug_erdafitinib/pd_De_2024_serum_phosphate.md) | serum phosphate · model not identified | — | De Carlo A et al., Reinforcement Learning and PK-PD Models…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3176](https://doi.org/10.1002/cpt.3176) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=erdafitinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate, `SLC22A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CSF1R (substrate), FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FGFR4 (inhibitor), KDR (substrate), KIT (substrate), PDGFRA (substrate), PDGFRB (substrate), RET (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:46 | 4:15 | 2/0/0 | 0/1/0 | 0/0/0 | 124,518/21,785 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dosne_2020.pdf` | Dosne AG et al., Population Pharmacokinetics of Total an…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1547](https://doi.org/10.1002/jcph.1547) | [31742712](https://pubmed.ncbi.nlm.nih.gov/31742712) | The human population-PK study reports numeric apparent clearance and terminal half-life values. |
| `Tosca_2022.pdf` | Tosca EM et al., A translational model-based approach to…, Cancer chemotherapy and pha… (2022) | popPK | 8 | [10.1007/s00280-021-04370-7](https://doi.org/10.1007/s00280-021-04370-7) | [34786600](https://pubmed.ncbi.nlm.nih.gov/34786600) | The paper models erdafitinib pharmacokinetics in animals, but no numeric disposition parameter values are present in the evidence. |
| `Li_2020.pdf` | Li LY et al., Effect of Plasma Protein Binding on the…, Journal of clinical pharmac… (2020) | popPK | 7 | [10.1002/jcph.1529](https://doi.org/10.1002/jcph.1529) | [31602692](https://pubmed.ncbi.nlm.nih.gov/31602692) | Human erdafitinib PK analysis reports quantitative binding estimates, but no numeric clearance or other disposition estimates are shown. |

<sub>queue written 2026-10-06 23:42 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2024 | irrelevant | 3 | 0 | It uses a literature PopPK-PD model for virtual patients but reports no erdafitinib disposition parameter values in the provided evidence. |
| popPK | Dosne_2022_2 | irrelevant | 2 | 1 | Human exposure–response analysis uses a previously developed PK-PD model but reports no erdafitinib disposition parameters; model details are cited and some results are in unprovided supplementary material. |
| popPK | Li_2020 | relevant | 7 | 2 | Human erdafitinib PK analysis reports quantitative binding estimates, but no numeric clearance or other disposition estimates are shown. |
| popPK | Tosca_2022 | relevant | 8 | 1 | The paper models erdafitinib pharmacokinetics in animals, but no numeric disposition parameter values are present in the evidence. |
| popPK | Zhu_2024 | irrelevant | 1 | 0 | This human drug-interaction study reports pharmacokinetics of midazolam and metformin, not erdafitinib disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Berdafitinib%5D&body=Drug%3A%20erdafitinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_erdafitinib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 23:42 UTC</sub>
