<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;tolcapone&quot;}]"></div>

# tolcapone

- **generic name:** tolcapone
- **ATC codes:** `N04BX01`
- **DrugBank:** [DB00323](https://go.drugbank.com/drugs/DB00323) · **PubChem:** [CID 4659569](https://pubchem.ncbi.nlm.nih.gov/compound/4659569)
- **molar mass:** 273.2408 g/mol (C14H11NO5) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Tolcapone is a catechol-O-methyltransferase inhibitor used as an add-on treatment for Parkinson's disease. It remains authorised in the European Union, but its use is restricted because of a boxed warning linked to serious liver safety concerns.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413840](https://www.wikidata.org/wiki/Q413840) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tolcapone | parent | 273.241 | C14H11NO5 | DrugBank | [4659569](https://pubchem.ncbi.nlm.nih.gov/compound/4659569) | Jorga_2000 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Jorga_2000_fluctuator_model](drugs/drug_tolcapone/Tolcapone_Jorga2000_fluctuator_model.md) | — | 3-compartment (no model) | 11 | Jorga K et al., Population pharmacokinetics of tolcapon…, British journal of clinical… (2000) | [10.1046/j.1365-2125.2000.00113.x](https://doi.org/10.1046/j.1365-2125.2000.00113.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [↳ non_fluctuator_model](drugs/drug_tolcapone/Tolcapone_Jorga2000_non_fluctuator_model.md) | — | 2-compartment (no model) | 10 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Dingemanse_1995_2_COMT_activity](drugs/drug_tolcapone/pd_Dingemanse_1995_2_COMT_activity.md) | COMT activity in erythrocytes ← tolcapone · direct Emax (saturable) effect | — | Dingemanse J et al., Integrated pharmacokinetics and pharmac…, Clinical pharmacology and t… (1995) | [10.1016/0009-9236(95)90035-7](https://doi.org/10.1016/0009-9236(95)90035-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Dingemanse_1996_COMT_activity](drugs/drug_tolcapone/pd_Dingemanse_1996_COMT_activity.md) | COMT activity in erythrocytes ← tolcapone · direct Emax (saturable) effect | — | Dingemanse J et al., Multiple-dose clinical pharmacology of…, European journal of clinica… (1996) | [10.1007/s002280050068](https://doi.org/10.1007/s002280050068) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tolcapone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `COMT` inhibitor | DrugBank actor |
| metabolism | kidney | `COMT` inhibitor | DrugBank actor |
| metabolism | liver | `COMT` inhibitor, `CYP2C9` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:32 | 1:14 | 0/2/0 | 2/0/0 | 0/0/0 | 79,762/5,436 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dingemanse_1995.pdf` | Dingemanse J et al., Pharmacokinetic-pharmacodynamic interac…, British journal of clinical… (1995) | popPK | 7 | [10.1111/j.1365-2125.1995.tb05781.x](https://doi.org/10.1111/j.1365-2125.1995.tb05781.x) | [8527287](https://pubmed.ncbi.nlm.nih.gov/8527287) | Tolcapone is the subject drug with human PK reported (tmax 1.5 h, t1/2 2.3 h, dose-proportional kinetics), but no CL/V or model parameters are given numerically in the evidence. |
| `Dingemanse_1995_2.pdf` | Dingemanse J et al., Integrated pharmacokinetics and pharmac…, Clinical pharmacology and t… (1995) | popPK | 7 | [10.1016/0009-9236(95)90035-7](https://doi.org/10.1016/0009-9236(95)90035-7) | [7768073](https://pubmed.ncbi.nlm.nih.gov/7768073) | Human first-in-human PK study of tolcapone with half-life values reported, but no CL/V or full parameter table in the evidence. |
| `Dingemanse_1996.pdf` | Dingemanse J et al., Multiple-dose clinical pharmacology of…, European journal of clinica… (1996) | popPK | 6 | [10.1007/s002280050068](https://doi.org/10.1007/s002280050068) | [8739811](https://pubmed.ncbi.nlm.nih.gov/8739811) | Human multiple-dose PK study of tolcapone with metabolite half-life reported, but most numeric parameters (CL, V, Cmax, AUC) are not present in the evidence provided. |

<sub>queue written 2026-10-06T14:31:28.887193+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adamiak_2010 | irrelevant | 1 | 1 | Tolcapone is only a co-administered COMT inhibitor; the PK/PD model concerns levodopa, not tolcapone's own disposition parameters. |
| popPK | Baas_2001 | irrelevant | 2 | 2 | Tolcapone is only a co-administered COMT inhibitor; the PK/PD parameters reported (levodopa AUC, Cmax, EC50) concern levodopa, not tolcapone's own disposition. |
| popPK | Dingemanse_1996 | relevant | 6 | 3 | Human multiple-dose PK study of tolcapone with metabolite half-life reported, but most numeric parameters (CL, V, Cmax, AUC) are not present in the evidence provided. |
| popPK | Gueorguieva_2006 | irrelevant | 4 | 1 | This is an optimal-design methodology paper using a tolcapone IV case study, but no numeric PK parameter values appear in the evidence (they would be in the case-study results not provided). |
| popPK | Jorga_2000_2 | irrelevant | 2 | 3 | The population PK model is of levodopa (and 3-O-methyldopa), with tolcapone only as a co-administered COMT inhibitor; no tolcapone disposition parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 14:31 UTC</sub>
