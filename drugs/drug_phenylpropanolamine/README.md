<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01B&quot;,&quot;href&quot;:&quot;atc/R01B.md&quot;},{&quot;label&quot;:&quot;phenylpropanolamine&quot;}]"></div>

# phenylpropanolamine

- **generic name:** phenylpropanolamine
- **ATC codes:** `R01BA01`
- **DrugBank:** [DB00397](https://go.drugbank.com/drugs/DB00397) · **PubChem:** [CID 26934](https://pubchem.ncbi.nlm.nih.gov/compound/26934)
- **molar mass:** 151.209 g/mol (C9H13NO) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Phenylpropanolamine is a sympathomimetic drug used as a nasal decongestant. It is given orally. The drug is currently withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q97786582](https://www.wikidata.org/wiki/Q97786582), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenylpropanolamine | parent | 151.209 | C9H13NO | DrugBank | [26934](https://pubchem.ncbi.nlm.nih.gov/compound/26934) | Shargel_1990 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Shargel_1990_reference](drugs/drug_phenylpropanolamine/Phenylpropanolamine_Shargel1990_reference.md) | — | 1-compartment (no model) | 6 | Shargel L et al., Bioavailability and cardiovascular safe…, Biopharmaceutics & drug dis… (1990) | [10.1002/bdd.2510110703](https://doi.org/10.1002/bdd.2510110703) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:36 | 2:58 | 0/1/0 | 0/0/0 | 0/0/0 | 15,657/7,699 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shargel_1990.pdf` | Shargel L et al., Bioavailability and cardiovascular safe…, Biopharmaceutics & drug dis… (1990) | popPK | 9 | [10.1002/bdd.2510110703](https://doi.org/10.1002/bdd.2510110703) | [2265237](https://pubmed.ncbi.nlm.nih.gov/2265237) | The study reports quantitative PK parameters (ka, half-life) and non-compartmental metrics (AUC, Cmax) for phenylpropanolamine in humans, with specific numeric values provided in the abstract/text. |
| `Carrillo_2000.pdf` | Carrillo JA et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039020-00004](https://doi.org/10.2165/00003088-200039020-00004) | [10976659](https://www.ncbi.nlm.nih.gov/pubmed/10976659) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-11-24 04:33 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altenbach_2002 | irrelevant | 0 | 0 | The paper describes the receptor binding and pharmacodynamic profile of a new drug (ABT-866) using phenylpropanolamine only as a comparator, with no population pharmacokinetic parameters reported for phenylpropanolamine. |
| PGx | Altenbach_2002 | not_relevant | 0 | 0 | The paper compares the pharmacodynamics of a novel drug (ABT-866) to phenylpropanolamine in animal models but does not report any genetic or pharmacogenomic effects. |
| PGx | Bedada_2018 | not_relevant | 2 | 5 | Phenylpropanolamine is used only as a urinary metabolite/compliance marker (cathinone/PPA ratio correlated with CYP2D6 genotype), not as a drug with a reported pharmacogenomic effect on its own PK/PD parameter. |
| popPK | Benedetti_2001 | irrelevant | 0 | 0 | The paper is a review discussing the metabolic role of amine oxidases, mentioning phenylpropanolamine only as an example of a drug containing a sympathomimetic amine, without providing any pharmacokinetic parameters. |
| PGx | Benedetti_2001 | not_relevant | 0 | 0 | This is a review of amine oxidases in xenobiotic metabolism and mentions phenylpropanolamine as an example of a drug interaction but does not report any pharmacogenomic studies on phenylpropanolamine PK or PD parameters. |
| popPK | Carrillo_2000 | irrelevant | 0 | 0 | The paper is a review of caffeine interactions that mentions phenylpropanolamine only as a CYP1A2 inhibitor, without reporting any quantitative pharmacokinetic parameters for it. |
| PGx | Carrillo_2000 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic interactions involving caffeine and phenylpropanolamine but does not report any gene variant or genotype affecting the PK/PD of phenylpropanolamine. |
| popPK | Rothman_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of ephedrine stereoisomers at transporters and receptors, not a pharmacokinetic study of phenylpropanolamine. |
| PGx | Rothman_2003 | not_relevant | 0 | 0 | The paper describes in vitro transporter kinetics of ephedrine stereoisomers and mentions phenylpropanolamine only as a related compound, without reporting any gene-variant or genotype-dependent effects on phenylpropanolamine PK/PD parameters. |
| PGx | Shargel_1990 | not_relevant | 0 | 0 | The paper reports general pharmacokinetics and cardiovascular safety of phenylpropanolamine but does not mention or analyze any gene variants, genotypes, or phenotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenylpropanolamine%5D&body=Drug%3A%20phenylpropanolamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_phenylpropanolamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:33 UTC</sub>
