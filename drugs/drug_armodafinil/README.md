<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;armodafinil&quot;}]"></div>

# armodafinil

- **generic name:** armodafinil
- **ATC codes:** `N06BA13`
- **DrugBank:** [DB06413](https://go.drugbank.com/drugs/DB06413) · **PubChem:** [CID 9690109](https://pubchem.ncbi.nlm.nih.gov/compound/9690109)
- **molar mass:** 273.35 g/mol (C15H15NO2S) — DrugBank
- **groups:** approved, investigational

## About

Armodafinil is a wakefulness-promoting agent used for narcolepsy, hypersomnia, and sleep-wake disorders. It is administered orally as a tablet. The medication is approved for market use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q418913](https://www.wikidata.org/wiki/Q418913), [Wikipedia](https://en.wikipedia.org/wiki/Armodafinil?oldid=1370773396) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| armodafinil | parent | 273.35 | C15H15NO2S | DrugBank | [9690109](https://pubchem.ncbi.nlm.nih.gov/compound/9690109) | Willavize_2017 |
| modafinil sulfone | metabolite | 289.349 | C15H15NO3S | PubChem | [6460146](https://pubchem.ncbi.nlm.nih.gov/compound/6460146) | Willavize_2017 |
| R-modafinil acid | metabolite | 274.334 | C15H14O3S | PubChem | [11300303](https://pubchem.ncbi.nlm.nih.gov/compound/11300303) | Willavize_2017 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Willavize_2017_reference](drugs/drug_armodafinil/Armodafinil_Willavize2017_reference.md) | model (no simulator) | 1-compartment general linear | 3 | Willavize S et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | [10.1002/jcph.800](https://doi.org/10.1002/jcph.800) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 18:43 | 3:13 | 1/0/0 | 0/0/0 | 0/0/0 | 19,949/15,002 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Willavize_2017.pdf` | Willavize S et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.800](https://doi.org/10.1002/jcph.800) | [27436172](https://pubmed.ncbi.nlm.nih.gov/27436172) | The paper reports quantitative population pharmacokinetic parameters (CL/F, Vc/F, absorption half-life) for armodafinil with explicit numeric values in the text. |
| `Darwish_2008.pdf` | Darwish M et al., Interaction profile of armodafinil with…, Clinical pharmacokinetics (2008) | pgx | 8 | [10.2165/00003088-200847010-00006](https://doi.org/10.2165/00003088-200847010-00006) | [18076219](https://www.ncbi.nlm.nih.gov/pubmed/18076219) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Andrade_2015.pdf` | Andrade C, Delayed drug interactions in psychiatry…, The Journal of clinical psy… (2015) | pgx | 7 | [10.4088/JCP.15f10514](https://doi.org/10.4088/JCP.15f10514) | [26717524](https://www.ncbi.nlm.nih.gov/pubmed/26717524) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Aquinos_2021.pdf` | Aquinos BM et al., [Adrenal crisis associated with modafin…, Medicina (2021) | pgx | 7 |  | [34633961](https://www.ncbi.nlm.nih.gov/pubmed/34633961) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Darwish_2014.pdf` | Darwish M et al., Evaluation of the potential for a pharm…, Clinical drug investigation (2014) | pgx | 7 | [10.1007/s40261-014-0220-3](https://doi.org/10.1007/s40261-014-0220-3) | [25047407](https://www.ncbi.nlm.nih.gov/pubmed/25047407) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Darwish_2015.pdf` | Darwish M et al., Evaluation of potential pharmacokinetic…, Clinical drug investigation (2015) | pgx | 7 | [10.1007/s40261-015-0330-6](https://doi.org/10.1007/s40261-015-0330-6) | [26387027](https://www.ncbi.nlm.nih.gov/pubmed/26387027) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Niemegeers_2012.pdf` | Niemegeers P et al., Pharmacokinetic evaluation of armodafin…, Expert opinion on drug meta… (2012) | pgx | 7 | [10.1517/17425255.2012.708338](https://doi.org/10.1517/17425255.2012.708338) | [22803602](https://www.ncbi.nlm.nih.gov/pubmed/22803602) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-23 18:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrade_2015 | irrelevant | 0 | 0 | The paper is a commentary/review discussing drug interactions of armodafinil with risperidone and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for armodafinil itself. |
| PGx | Andrade_2015 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction between armodafinil and risperidone, not a pharmacogenomic effect. |
| popPK | Aquinos_2021 | irrelevant | 0 | 0 | The paper is a case report describing an adverse drug interaction (adrenal crisis) involving modafinil, not armodafinil, and contains no quantitative pharmacokinetic parameters. |
| PGx | Aquinos_2021 | not_relevant | 0 | 0 | The paper describes a clinical case of a drug-drug interaction between modafinil and hydrocortisone involving CYP3A4 induction, but does not report a pharmacogenomic effect (gene variant) on armodafinil pharmacokinetics or pharmacodynamics. |
| popPK | Darwish_2008 | irrelevant | 0 | 0 | This is a drug-interaction study reporting PK parameters for probe drugs (caffeine, midazolam, omeprazole) rather than quantitative disposition parameters for armodafinil itself. |
| PGx | Darwish_2008 | not_relevant | 0 | 0 | The study assesses drug-drug interactions (CYP induction/inhibition) in a general healthy population, not the effect of specific gene variants or genotypes on armodafinil pharmacokinetics or pharmacodynamics. |
| popPK | Darwish_2012 | relevant | 9 | 3 | The paper describes a population PK/PD model for armodafinil in humans, and key quantitative parameters like EC50 (4.6 µg/mL) and duration above threshold are reported, though specific PK parameter estimates (CL, V) are likely in the full text or supplementary material not fully detailed here. |
| PGx | Darwish_2012 | not_relevant | 0 | 0 | The paper describes a standard PK/PD modeling comparison between armodafinil and modafinil in a general patient population, with no mention of genetic variants, genotypes, or pharmacogenomic factors influencing the parameters. |
| popPK | Darwish_2012_2 | irrelevant | 2 | 0 | The study reports pharmacokinetic parameters (AUC, Cmax) for the co-administered drug quetiapine, not for armodafinil. |
| PGx | Darwish_2012_2 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between armodafinil and quetiapine, not a pharmacogenomic effect of armodafinil. |
| popPK | Darwish_2014 | irrelevant | 4 | 0 | This is a drug-drug interaction study where armodafinil acts as the inducer and ziprasidone is the subject drug for PK characterization; no quantitative PK parameters for armodafinil are reported in the provided text. |
| PGx | Darwish_2014 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (DDI) between armodafinil and ziprasidone, not a pharmacogenomic effect of armodafinil itself. |
| popPK | Darwish_2015 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of risperidone (the probe drug) and its metabolite, while armodafinil serves only as the perpetrator, with no disposition parameters reported for armodafinil itself. |
| PGx | Darwish_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (CYP3A4 induction) rather than a pharmacogenomic effect based on gene variants or genotypes. |
| popPK | Darwish_2015_2 | irrelevant | 5 | 0 | The study assesses the effect of armodafinil on aripiprazole, and while armodafinil PK was assessed, no numeric disposition parameters for armodafinil are reported in the provided evidence. |
| PGx | Darwish_2015_2 | not_relevant | 0 | 0 | The study reports a pharmacokinetic drug-drug interaction between armodafinil and aripiprazole, not a pharmacogenomic effect of armodafinil. |
| popPK | Darwish_2015_3 | relevant | 9 | 0 | The study is a pharmacokinetic DDI study reporting quantitative changes in armodafinil exposure (Cmax, AUC) in healthy humans, but the specific numeric parameter values (such as mean values or percentage change tables) are not present in the provided abstract/evidence text. |
| PGx | Darwish_2015_3 | not_relevant | 0 | 0 | The study evaluates a pharmacokinetic drug-drug interaction between armodafinil and carbamazepine, not the effect of a genetic variant on armodafinil's PK/PD. |
| popPK | Niemegeers_2012 | irrelevant | 1 | 0 | This is a review article discussing armodafinil's pharmacokinetics qualitatively but does not report specific quantitative disposition parameters (CL, V, ka) or population PK model estimates. |
| PGx | Niemegeers_2012 | not_relevant | 1 | 0 | The paper reviews general pharmacokinetics of armodafinil and mentions CYP enzymes (CYP3A4/2C19) for drug interactions, but does not report how specific gene variants/genotypes alter armodafinil's PK or PD parameters. |
| PGx | Willavize_2017 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic modeling based on clinical covariates like weight, sex, and age, but does not investigate gene variants or genotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barmodafinil%5D&body=Drug%3A%20armodafinil%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_armodafinil/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 18:40 UTC</sub>
