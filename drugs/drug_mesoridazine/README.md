<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;mesoridazine&quot;}]"></div>

# mesoridazine

- **generic name:** mesoridazine
- **ATC codes:** `N05AC03`
- **DrugBank:** [DB00933](https://go.drugbank.com/drugs/DB00933) · **PubChem:** [CID 4078](https://pubchem.ncbi.nlm.nih.gov/compound/4078)
- **molar mass:** 386.574 g/mol (C21H26N2OS2) — DrugBank
- **groups:** approved, withdrawn

## About

Mesoridazine is a phenothiazine antipsychotic that was used to treat schizophrenia and schizophreniform disorder. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6821618](https://www.wikidata.org/wiki/Q6821618) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rabbit</span> | [Niedzwiecki_1984_DA_overflow](drugs/drug_mesoridazine/pd_Niedzwiecki_1984_DA_overflow.md) | Electrically evoked dopamine overflow (antagonism of apomorphine-induced inhibition of DA release) ← mesoridazine · inhibition effect | — | Niedzwiecki DM et al., Greater potency of mesoridazine and sul…, The Journal of pharmacology… (1984) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">cattle</span> | [Perry_1983_Competition_at_specific_alpha_2_adrenergic_binding_sites_in_bovine_caudate_nucleus](drugs/drug_mesoridazine/pd_Perry_1983_Competition_at_specific_alpha_2_adrenergic_bindin.md) | Competition at specific alpha 2-adrenergic binding sites in bovine caudate nucleus ← mesoridazine · inhibition effect | — | Perry BD et al., Interactions of neuroleptic compounds a…, European journal of pharmac… (1983) | [10.1016/0014-2999(83)90654-4](https://doi.org/10.1016/0014-2999(83)90654-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">in vitro</span> | [Su_2004_HERG_block](drugs/drug_mesoridazine/pd_Su_2004_HERG_block.md) | HERG K+ current block ← mesoridazine · inhibition effect | — | Su Z et al., Mesoridazine: an open-channel blocker o…, Journal of molecular and ce… (2004) | [10.1016/j.yjmcc.2003.10.017](https://doi.org/10.1016/j.yjmcc.2003.10.017) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">in vitro</span> | [Limberis_2006_hERG_block](drugs/drug_mesoridazine/pd_Limberis_2006_hERG_block.md) | hERG current block (IKr) ← mesoridazine · direct sigmoid Emax (Hill) effect | — | Limberis JT et al., Altering extracellular potassium concen…, Clinical and experimental p… (2006) | [10.1111/j.1440-1681.2006.04487.x](https://doi.org/10.1111/j.1440-1681.2006.04487.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mesoridazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DRD2 (target), HTR2A (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:04 | 4:50 | 0/0/0 | 3/1/0 | 0/0/0 | 68,300/2,677 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 47 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_13 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wagner_1991.pdf` | Wagner JG et al., Stepwise determination of multicompartm…, Journal of pharmacokinetics… (1991) | popPK | 8 | [10.1007/BF01061665](https://doi.org/10.1007/BF01061665) | [1920088](https://pubmed.ncbi.nlm.nih.gov/1920088) | Mesoridazine is a subject drug with compartmental disposition/absorption parameters estimated from 20 extravascular datasets, but the abstract gives no numeric parameter values (likely in tables/figures not provided). |
| `Niedzwiecki_1984.pdf` | Niedzwiecki DM et al., Greater potency of mesoridazine and sul…, The Journal of pharmacology… (1984) | pd | 4 |  | [6707914](https://www.ncbi.nlm.nih.gov/pubmed/6707914) | metadata signals extractable PD data (IC50) |
| `Perry_1983.pdf` | Perry BD et al., Interactions of neuroleptic compounds a…, European journal of pharmac… (1983) | pd | 4 | [10.1016/0014-2999(83)90654-4](https://doi.org/10.1016/0014-2999(83)90654-4) | [6140181](https://www.ncbi.nlm.nih.gov/pubmed/6140181) | metadata signals extractable PD data (IC50) |
| `Su_2004.pdf` | Su Z et al., Mesoridazine: an open-channel blocker o…, Journal of molecular and ce… (2004) | pd | 4 | [10.1016/j.yjmcc.2003.10.017](https://doi.org/10.1016/j.yjmcc.2003.10.017) | [14734057](https://www.ncbi.nlm.nih.gov/pubmed/14734057) | metadata signals extractable PD data (IC50) |
| `Berecz_2003.pdf` | Berecz R et al., Thioridazine steady-state plasma concen…, European journal of clinica… (2003) | pgx | 8 | [10.1007/s00228-003-0576-4](https://doi.org/10.1007/s00228-003-0576-4) | [12682803](https://www.ncbi.nlm.nih.gov/pubmed/12682803) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Dorado_2007.pdf` | Dorado P et al., No effect of the CYP1A2*1F genotype on…, European journal of clinica… (2007) | pgx | 8 | [10.1007/s00228-007-0284-6](https://doi.org/10.1007/s00228-007-0284-6) | [17345072](https://www.ncbi.nlm.nih.gov/pubmed/17345072) | metadata signals extractable PGX data (CYP1A2*1F, PK/PD-context) |
| `Dorado_2009.pdf` | Dorado P et al., Relevance of CYP2D6 -1584C&gt;G polymorphi…, Pharmacogenomics (2009) | pgx | 8 | [10.2217/pgs.09.57](https://doi.org/10.2217/pgs.09.57) | [19604081](https://www.ncbi.nlm.nih.gov/pubmed/19604081) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Thanacoody_2007.pdf` | Thanacoody RH et al., Factors affecting drug concentrations a…, Clinical pharmacology and t… (2007) | pgx | 8 | [10.1038/sj.clpt.6100195](https://doi.org/10.1038/sj.clpt.6100195) | [17460606](https://www.ncbi.nlm.nih.gov/pubmed/17460606) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Carrillo_1999.pdf` | Carrillo JA et al., Pharmacokinetic interaction of fluvoxam…, Journal of clinical psychop… (1999) | pgx | 7 | [10.1097/00004714-199912000-00002](https://doi.org/10.1097/00004714-199912000-00002) | [10587283](https://www.ncbi.nlm.nih.gov/pubmed/10587283) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `LLerena_2002.pdf` | LLerena A et al., QTc interval lengthening is related to…, Journal of psychopharmacolo… (2002) | pgx | 7 | [10.1177/026988110201600411](https://doi.org/10.1177/026988110201600411) | [12503836](https://www.ncbi.nlm.nih.gov/pubmed/12503836) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Lee_2010.pdf` | Lee CA et al., Identification of novel substrates for…, Drug metabolism and disposi… (2010) | pgx | 7 | [10.1124/dmd.109.030270](https://doi.org/10.1124/dmd.109.030270) | [19923256](https://www.ncbi.nlm.nih.gov/pubmed/19923256) | metadata signals extractable PGX data (CYP2J2, PK/PD-context) |
| `Eap_1996.pdf` | Eap CB et al., Plasma levels of the enantiomers of thi…, Clinical pharmacology and t… (1996) | pgx | 5 | [10.1016/S0009-9236(96)80010-5](https://doi.org/10.1016/S0009-9236(96)80010-5) | [8653995](https://www.ncbi.nlm.nih.gov/pubmed/8653995) | metadata signals extractable PGX data (CYP2D6) |
| `LLerena_2001.pdf` | LLerena A et al., Effect of thioridazine dosage on the de…, Therapeutic drug monitoring (2001) | pgx | 5 | [10.1097/00007691-200112000-00004](https://doi.org/10.1097/00007691-200112000-00004) | [11802093](https://www.ncbi.nlm.nih.gov/pubmed/11802093) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-06 16:03 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baumann_1992 | not_relevant | 3 | 5 | The paper reports no significant correlation between CYP2D6 (dextromethorphan) metabolism and mesoridazine plasma levels, so no pharmacogenomic effect on mesoridazine PK/PD is demonstrated. |
| PGx | Berecz_2003 | not_relevant | 3 | 5 | For mesoridazine, no significant CYP2D6 or CYP2C9 genotype effect on C/D was found; only smoking (non-genetic) affected its levels. |
| PGx | Carrillo_1999 | not_relevant | 2 | 3 | Effect is a drug-drug interaction (fluvoxamine) on mesoridazine concentrations, not a gene variant/genotype/phenotype effect. |
| PGx | LLerena_2001 | not_relevant | 3 | 3 | The paper reports CYP2D6 genotype effects on thioridazine levels and debrisoquine MR, but no genotype-dependent change in a PK/PD parameter of mesoridazine itself (only measured as a metabolite). |
| PGx | Lee_2010 | not_relevant | 2 | 3 | Paper identifies mesoridazine as a CYP2J2 substrate in vitro, but reports no gene variant/genotype effect on PK or PD parameters. |
| PGx | Sasahara_2015 | not_relevant | 2 | 0 | Computational study of CYP2D6 metabolism of thioridazine, not mesoridazine, and no gene variant effect on PK/PD parameters reported. |
| popPK | Wagner_1991 | relevant | 8 | 3 | Mesoridazine is a subject drug with compartmental disposition/absorption parameters estimated from 20 extravascular datasets, but the abstract gives no numeric parameter values (likely in tables/figures not provided). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmesoridazine%5D&body=Drug%3A%20mesoridazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mesoridazine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
