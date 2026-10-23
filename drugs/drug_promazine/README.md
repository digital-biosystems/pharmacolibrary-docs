<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;promazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Promazine_McGree2013_reference&quot;,&quot;label&quot;:&quot;McGree_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_promazine/Promazine_McGree2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# promazine

- **generic name:** promazine
- **ATC codes:** `N05AA03`
- **DrugBank:** [DB00420](https://go.drugbank.com/drugs/DB00420) · **PubChem:** [CID 4926](https://pubchem.ncbi.nlm.nih.gov/compound/4926)
- **molar mass:** 284.419 g/mol (C17H20N2S) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Promazine is a phenothiazine antipsychotic used to treat schizophreniform disorder and vomiting. It has been withdrawn from human use, though it remains an approved veterinary drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419822](https://www.wikidata.org/wiki/Q419822) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **McGree_2013_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_promazine/Promazine_McGree2013_reference.md?tab=Simulation) · [record](drugs/drug_promazine/Promazine_McGree2013_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 769 | L/h | 769.0 L/hr | review reference | horse | <span class="pk-badge pk-badge--orange">Needs review</span> | [McGree_2013_reference](drugs/drug_promazine/Promazine_McGree2013_reference.md) |
| V | V/F | 6874 | L | 6874.0 L | review reference | horse | <span class="pk-badge pk-badge--orange">Needs review</span> | [McGree_2013_reference](drugs/drug_promazine/Promazine_McGree2013_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [McGree_2013_reference](drugs/drug_promazine/Promazine_McGree2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | McGree JM et al., A Bayesian approach for estimating dete…, Journal of veterinary pharm… (2013) | [10.1111/j.1365-2885.2013.01389.x](https://doi.org/10.1111/j.1365-2885.2013.01389.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Curry_1990_reference](drugs/drug_promazine/Promazine_Curry1990_reference.md) | — | 1-compartment (no model) | 0 | Curry SH et al., A third, "deep," compartment for phenot…, Psychopharmacology bulletin (1990) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Ashoor_2011_ACh_induced_current](drugs/drug_promazine/pd_Ashoor_2011_ACh_induced_current.md) | acetylcholine (100 μM)-induced current through α7-nicotinic acetylcholine receptor ← promazine · inhibition effect | — | Ashoor A et al., Effects of phenothiazine-class antipsyc…, European journal of pharmac… (2011) | [10.1016/j.ejphar.2011.10.020](https://doi.org/10.1016/j.ejphar.2011.10.020) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jakubovic_1982_enkephalin_degradation_enkephalin_hydrolyzing_activity](drugs/drug_promazine/pd_Jakubovic_1982_enkephalin_degradation_enkephalin_hydrolyzing.md) | enkephalin degradation (enkephalin-hydrolyzing activity) ← promazine · inhibition effect | — | Jakubovic A, Degradation of met-enkephalin by extrac…, Peptides (1982) | [10.1016/0196-9781(82)90136-x](https://doi.org/10.1016/0196-9781(82)90136-x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:02 | 14:14 | 0/1/1 | 2/0/0 | 0/0/0 | 477,092/21,430 | ollama / glm-5.3-flash | 11 | 1/7 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 69 matched, 64 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Curry_1990.pdf` | Curry SH et al., A third, "deep," compartment for phenot…, Psychopharmacology bulletin (1990) | popPK | 8 | not captured | [2371373](https://pubmed.ncbi.nlm.nih.gov/2371373) | Human volunteer study with compartmental modeling of promazine reporting numeric rate constants and renal clearance, though no CL/V values are given. |

<sub>queue written 2026-10-06T16:55:38.504423+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | This is a ToxCast high-throughput screening review about environmental chemicals and diabetes/obesity; promazine is not the subject drug and no PK parameters appear. |
| PGx | Aänismaa_2008 | not_relevant | 0 | 0 | In vitro P-gp ATPase thermodynamics with promazine; no gene variant/genotype effect on PK/PD parameters. |
| PGx | Daniel_2002 | not_relevant | 3 | 5 | Chemical inhibition of CYP isoenzymes in rat microsomes, not a gene variant/genotype effect on PK/PD parameters. |
| PGx | Daniel_2003 | not_relevant | 0 | 5 | Reports drug-drug enzyme inhibition by promazine in vitro, not a gene variant/genotype effect on promazine PK/PD. |
| PGx | Daniel_2005 | not_relevant | 0 | 0 | Drug-drug/enzyme inhibition study in rats; no gene variant/genotype effect on promazine PK/PD reported. |
| PGx | Di_2009 | not_relevant | 2 | 1 | Promazine is only listed as a CYP2A6 substrate; no genotype-specific effect on its PK/PD parameters is reported. |
| popPK | Iversen_2025 | irrelevant | 0 | 0 | This is a liposome/drug-delivery chemistry study with no promazine PK parameters or numeric disposition values. |
| popPK | Kashyap_2025 | irrelevant | 0 | 0 | Paper is about DNA-programmable PROTACs; no promazine PK parameters anywhere. |
| popPK | McGree_2013 | irrelevant | 2 | 5 | The subject drug is acepromazine and its metabolite 2-(1-hydroxyethyl)promazine (HEPS), not promazine itself; numeric CL (769 L/h) and V (6874 L) for the metabolite are present but pertain to a different parent drug. |
| popPK | Nesbitt_2025 | irrelevant | 0 | 0 | This is a BLVRB inhibitor (BCT1028) PK study in mice; promazine is not mentioned at all. |
| popPK | Owolabi_2024 | irrelevant | 0 | 0 | This is an in vitro/in silico antimicrobial study of Hippocratea indica plant fractions against Salmonella Typhi; no promazine PK parameters are reported anywhere. |
| popPK | Spinaci_2023 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on adenine derivatives as A2AAR/CK1δ inhibitors; promazine is not mentioned and no PK parameters exist. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | This is a PROTAC proteomics/degradation study in HL-60 cells; no promazine PK parameters appear anywhere. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | This is a doxorubicin-loaded magnetic nanorobot study; promazine is not mentioned, and PK parameters are only in Table S1 (not provided) for DOX anyway. |
| PGx | Wójcikowski_2003 | not_relevant | 3 | 5 | Study identifies CYP isoforms catalyzing promazine metabolism via correlations/inhibitors in vitro, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| PGx | Wójcikowski_2006 | not_relevant | 2 | 3 | Promazine is only mentioned as a comparison drug; the paper studies thioridazine metabolism by CYPs, with no genotype effect on promazine PK/PD parameters. |
| PGx | Wójcikowski_2010 | not_relevant | 2 | 3 | In vitro enzyme contribution study for chlorpromazine; promazine only mentioned as prior comparison, no genotype/phenotype effect on promazine PK/PD reported. |
| PGx | Wójcikowski_2012 | not_relevant | 0 | 0 | In vitro autoinduction of metabolism in hepatocytes; no gene variant/genotype/phenotype effect on PK/PD parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | This is a tumor immunology/metabolism study with no promazine PK parameters reported. |
| PGx | Zivković_2010 | not_relevant | 3 | 2 | Case reports associate CYP2D6/DRD2 polymorphisms with MNS susceptibility, not with any quantified PK/PD parameter of promazine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 16:55 UTC</sub>
