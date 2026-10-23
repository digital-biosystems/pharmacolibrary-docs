<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02A&quot;,&quot;href&quot;:&quot;atc/H02A.md&quot;},{&quot;label&quot;:&quot;fludrocortisone&quot;}]"></div>

# fludrocortisone

- **generic name:** fludrocortisone
- **ATC codes:** `H02AA02`, `S01CA06`, `S02CA07`, `S03CA05`
- **DrugBank:** [DB00687](https://go.drugbank.com/drugs/DB00687) · **PubChem:** [CID 31378](https://pubchem.ncbi.nlm.nih.gov/compound/31378)
- **molar mass:** 380.4504 g/mol (C21H29FO5) — DrugBank
- **groups:** approved, investigational

## About

Fludrocortisone is a mineralocorticoid corticosteroid used to treat conditions such as Addison's disease, adrenal insufficiency, and postural hypotension. It is an approved medicine and appears on the WHO essential medicines list, so it is used widely in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2697578](https://www.wikidata.org/wiki/Q2697578) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fludrocortisone | parent | 380.45 | C21H29FO5 | DrugBank | [31378](https://pubchem.ncbi.nlm.nih.gov/compound/31378) | Hamitouche_2017, Polito_2016 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 40 | L/h | 40 l h-1 | adults with septic shock | &gt;= 20 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Polito_2016_reference](drugs/drug_fludrocortisone/Fludrocortisone_Polito2016_reference.md) |
| V | V/F | 78 | L | 78 l | adults with septic shock | &gt;= 20 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Polito_2016_reference](drugs/drug_fludrocortisone/Fludrocortisone_Polito2016_reference.md) |
| t½ | t1/2z | 1.35 | h | 1.35 h | adults with septic shock | &gt;= 20 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Polito_2016_reference](drugs/drug_fludrocortisone/Fludrocortisone_Polito2016_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub> | [Polito_2016_reference](drugs/drug_fludrocortisone/Fludrocortisone_Polito2016_reference.md) | — | 1-compartment (no model) | 5 | Polito A et al., Pharmacokinetics of oral fludrocortison…, British journal of clinical… (2016) | [10.1111/bcp.13065](https://doi.org/10.1111/bcp.13065) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Hamitouche_2017_reference](drugs/drug_fludrocortisone/Fludrocortisone_Hamitouche2017_reference.md) | — | general linear (no model) | 2 | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Christ_1993_IP3](drugs/drug_fludrocortisone/pd_Christ_1993_IP3.md) | IP3 ← fludrocortisone · direct Emax (saturable) effect | — | Christ M et al., The inositol-1,4,5-trisphosphate system…, The Journal of clinical end… (1993) | [10.1210/jcem.77.6.8263127](https://doi.org/10.1210/jcem.77.6.8263127) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hamitouche_2017_urinary_sodium_potassium_ratio](drugs/drug_fludrocortisone/pd_Hamitouche_2017_urinary_sodium_potassium_ratio.md) | urinary sodium/potassium ratio ← fludrocortisone · indirect response — drug inhibits the production of urinary sodium/potassium ratio | — | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fludrocortisone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | prostate gland | `AR` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HSD11B1 (substrate), HSD11B2 (substrate), NR3C1 (target), NR3C2 (target), SERPINA6 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:33 | 1:02 | 1/1/0 | 2/0/0 | 0/0/0 | 46,534/3,259 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hamitouche_2017.pdf` | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | popPK | 10 | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) | [28083797](https://pubmed.ncbi.nlm.nih.gov/28083797) | The study provides a population pharmacokinetic model for fludrocortisone in humans, with key numeric parameters like clearance and half-life explicitly stated in the abstract. |
| `Polito_2016.pdf` | Polito A et al., Pharmacokinetics of oral fludrocortison…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.13065](https://doi.org/10.1111/bcp.13065) | [27416887](https://pubmed.ncbi.nlm.nih.gov/27416887) | The paper reports a population pharmacokinetic model for fludrocortisone with specific numeric values for clearance, volume of distribution, half-life, and absorption lag time directly in the abstract. |

<sub>queue written 2026-10-07T09:32:49.573550+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Christ_1993 | irrelevant | 0 | 0 | The study investigates in vitro signaling mechanisms (IP3 generation) of steroids in human mononuclear leukocytes and does not report pharmacokinetic parameters (CL, V, t1/2) for fludrocortisone. |
| popPK | Hadoke_2001 | irrelevant | 0 | 0 | Fludrocortisone is used only as a comparator agent in a functional vascular physiology study in mice; no pharmacokinetic parameters (CL, V, etc.) are reported. |
| popPK | Kamrath_2019 | irrelevant | 0 | 0 | The study focuses on urinary steroid metabolomics for monitoring growth in CAH patients and does not report pharmacokinetic parameters for fludrocortisone. |
| popPK | Nakada_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of beta-adrenergic receptor regulation in 3T3-L1 cells where fludrocortisone is used only as a comparative ligand for receptor affinity, not for pharmacokinetic analysis. |
| popPK | Wehling_1995 | irrelevant | 0 | 0 | The paper investigates nongenomic mechanisms of mineralocorticoids on intracellular calcium, not pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:33 UTC</sub>
