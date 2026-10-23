<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;vonoprazan&quot;}]"></div>

# vonoprazan

- **generic name:** vonoprazan
- **ATC codes:** `A02BC08`, `A02BD17`
- **DrugBank:** [DB11739](https://go.drugbank.com/drugs/DB11739) · **PubChem:** [CID 15981397](https://pubchem.ncbi.nlm.nih.gov/compound/15981397)
- **molar mass:** 345.39 g/mol (C17H16FN3O2S) — DrugBank
- **groups:** approved, investigational

## About

Vonoprazan is an acid-suppressing drug used for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease, and in combination regimens to eradicate Helicobacter pylori. It is an approved medicine, though it appears not to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27887191](https://www.wikidata.org/wiki/Q27887191) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vonoprazan | parent | 345.39 | C17H16FN3O2S | DrugBank | [15981397](https://pubchem.ncbi.nlm.nih.gov/compound/15981397) | Scarpignato_2022 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 119 | L/h | 119 L/h | healthy volunteers and patients with gastroesophageal reflux disease | 1156 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Scarpignato_2022_reference](drugs/drug_vonoprazan/Vonoprazan_Scarpignato2022_reference.md) |
| ka | kabs | 2.51 | 1/h | 2.51 1/h | healthy volunteers and patients with gastroesophageal reflux disease | 1156 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Scarpignato_2022_reference](drugs/drug_vonoprazan/Vonoprazan_Scarpignato2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Scarpignato_2022_reference](drugs/drug_vonoprazan/Vonoprazan_Scarpignato2022_reference.md) | — | 1-compartment (no model) | 8 (+4 cov.) | Scarpignato C et al., A Population Pharmacokinetic Model of V…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2019](https://doi.org/10.1002/jcph.2019) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Echizen_2016_reference](drugs/drug_vonoprazan/Vonoprazan_Echizen2016_reference.md) | — | 1-compartment (no model) | 0 | Echizen H, The First-in-Class Potassium-Competitiv…, Clinical pharmacokinetics (2016) | [10.1007/s40262-015-0326-7](https://doi.org/10.1007/s40262-015-0326-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vonoprazan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ATP4A (inhibitor), ATP4A (modulator), ATP4B (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:31 | 1:09 | 1/1/0 | 0/0/0 | 0/0/0 | 110,355/5,914 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scarpignato_2023.pdf` | Scarpignato C et al., A translational pharmacokinetic/pharmac…, Alimentary pharmacology & t… (2023) | popPK | 5 | [10.1111/apt.17510](https://doi.org/10.1111/apt.17510) | [37066678](https://pubmed.ncbi.nlm.nih.gov/37066678) | The paper describes a PK/PD model using an existing population PK model for vonoprazan, but no specific numeric PK parameter values (CL, V, ka, etc.) are provided in the evidence. |

<sub>queue written 2026-10-07 19:30 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gatta_2023 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Gatta_2023 | not_relevant | 1 | 0 | The provided text is only the title of an editorial and does not contain the full text or any numeric PD parameters. |
| popPK | Jung_2026 | relevant | 10 | 1 | The study develops a population PK/PD model for vonoprazan, but the specific numeric parameter estimates (CL, Vd, ka) are contained in Table 2, which is not provided in the evidence. |
| popPK | Mulford_2026 | relevant | 9 | 4 | The study applies a population PK model to vonoprazan in humans, but the specific table containing the model parameters (Table 2) is referenced rather than included in the evidence, leaving only AUC values. |
| popPK | Scarpignato_2023 | relevant | 5 | 0 | The paper describes a PK/PD model using an existing population PK model for vonoprazan, but no specific numeric PK parameter values (CL, V, ka, etc.) are provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvonoprazan%5D&body=Drug%3A%20vonoprazan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_vonoprazan/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 19:30 UTC</sub>
