<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;enoxolone&quot;}]"></div>

# enoxolone

- **generic name:** enoxolone
- **ATC codes:** `D03AX10`
- **DrugBank:** [DB13089](https://go.drugbank.com/drugs/DB13089) · **PubChem:** [CID 10114](https://pubchem.ncbi.nlm.nih.gov/compound/10114)
- **molar mass:** 470.694 g/mol (C30H46O4) — DrugBank
- **groups:** investigational

## About

Enoxolone (glycyrrhetic acid) is an anti-inflammatory triterpenoid that has been used topically to help heal wounds and ulcers. It is classified as investigational and is not an approved systemic medicine; its ATC listing places it among dermatological cicatrizants.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5948038](https://www.wikidata.org/wiki/Q5948038) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| enoxolone (glycyrrhetic acid (GA; enoxolone)) | parent | 470.694 | C30H46O4 | DrugBank | [10114](https://pubchem.ncbi.nlm.nih.gov/compound/10114) | Lu_2008, Xu_2014 |
| 3MGA | metabolite | 646.818 | C36H54O10 | PubChem | [161800](https://pubchem.ncbi.nlm.nih.gov/compound/161800) | Xu_2014 |
| GAM (phase II metabolites of GA) | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Lu_2008_reference](drugs/drug_enoxolone/Enoxolone_Lu2008_reference.md) | — | 1-compartment (no model) | 6 | Lu Y et al., [Study on pharmacokinetics of glycyrrhe…, Zhongguo Zhong yao za zhi =… (2008) | — |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Xu_2014_reference](drugs/drug_enoxolone/Enoxolone_Xu2014_reference.md) | — | general linear (no model) | 11 | Xu R et al., A semi-physiologically based pharmacoki…, PloS one (2014) | [10.1371/journal.pone.0114049](https://doi.org/10.1371/journal.pone.0114049) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ploeger_2001_urinary_cortisol_cortisone_ratio](drugs/drug_enoxolone/pd_Ploeger_2001_urinary_cortisol_cortisone_ratio.md) | urinary cortisol-cortisone ratio ← glycyrrhetic acid · inhibition effect | — | Ploeger B et al., A population physiologically based phar…, Toxicology and applied phar… (2001) | [10.1006/taap.2000.9078](https://doi.org/10.1006/taap.2000.9078) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=enoxolone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PTPN1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:42 | 5:53 | 0/2/0 | 0/1/0 | 0/0/0 | 114,015/29,564 | openai / gpt-6-luna | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_2008.pdf` | Lu Y et al., [Study on pharmacokinetics of glycyrrhe…, Zhongguo Zhong yao za zhi =… (2008) | popPK | 10 | not captured | [18831211](https://pubmed.ncbi.nlm.nih.gov/18831211) | Glycyrrhetic acid (enoxolone) was modeled in rats, and numeric disposition parameters are provided. |
| `Ploeger_2001.pdf` | Ploeger B et al., A population physiologically based phar…, Toxicology and applied phar… (2001) | popPK | 10 | [10.1006/taap.2000.9078](https://doi.org/10.1006/taap.2000.9078) | [11141355](https://pubmed.ncbi.nlm.nih.gov/11141355) | A population PBPK model of glycyrrhetic acid is reported, but no numeric disposition parameter values are present in the evidence. |
| `Peng_2010.pdf` | Peng WB et al., In vitro and in vivo pharmacokinetics o…, Journal of Asian natural pr… (2010) | popPK | 8 | [10.1080/10286020.2010.508283](https://doi.org/10.1080/10286020.2010.508283) | [20924902](https://pubmed.ncbi.nlm.nih.gov/20924902) | Rat plasma data for released enoxolone were fit with a two-compartment model, but no numeric parameter values are provided. |

<sub>queue written 2026-10-07T13:37:13.632581+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bera_2025 | irrelevant | 0 | 0 | This is an in-vitro anticancer study with SwissADME predictions, not quantitative enoxolone disposition parameters. |
| popPK | Ishida_1989 | irrelevant | 0 | 0 | The evidence contains only extraction-software boilerplate, with no study details or numeric pharmacokinetic values. |
| popPK | Peng_2010 | relevant | 8 | 1 | Rat plasma data for released enoxolone were fit with a two-compartment model, but no numeric parameter values are provided. |
| popPK | Ploeger_2001 | relevant | 10 | 1 | A population PBPK model of glycyrrhetic acid is reported, but no numeric disposition parameter values are present in the evidence. |
| popPK | Rakhimova_2023 | irrelevant | 0 | 0 | This is an in-vitro rat thymocyte study of cell-volume regulation, with no enoxolone pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 13:37 UTC</sub>
