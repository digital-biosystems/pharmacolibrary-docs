<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;zaleplon&quot;}]"></div>

# zaleplon

- **generic name:** zaleplon
- **ATC codes:** `N05CF03`
- **DrugBank:** [DB00962](https://go.drugbank.com/drugs/DB00962) · **PubChem:** [CID 5719](https://pubchem.ncbi.nlm.nih.gov/compound/5719)
- **molar mass:** 305.3339 g/mol (C17H15N5O) — DrugBank
- **groups:** approved, illicit

## About

Zaleplon is a nonbenzodiazepine hypnotic and sedative from the pyrazolopyrimidine class used to treat insomnia. It is given by mouth in capsule form and is well absorbed from the gastrointestinal tract.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q145052](https://www.wikidata.org/wiki/Q145052), [Wikipedia](https://en.wikipedia.org/wiki/Zaleplon?oldid=1385545642) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zaleplon | parent | 305.334 | C17H15N5O | DrugBank | [5719](https://pubchem.ncbi.nlm.nih.gov/compound/5719) | Drover_2000 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Drover_2000_reference](drugs/drug_zaleplon/Zaleplon_Drover2000_reference.md) | — | 1-compartment (no model) | 0 | Drover D et al., Pharmacokinetics, pharmacodynamics, and…, Clinical therapeutics (2000) | [10.1016/s0149-2918(00)83043-x](https://doi.org/10.1016/s0149-2918(00)83043-x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:04 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 4,734/187 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beedham_2003.pdf` | Beedham C et al., Ziprasidone metabolism, aldehyde oxidas…, Journal of clinical psychop… (2003) | pgx | 8 | [10.1097/01.jcp.0000084028.22282.f2](https://doi.org/10.1097/01.jcp.0000084028.22282.f2) | [12826984](https://www.ncbi.nlm.nih.gov/pubmed/12826984) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hesse_2003.pdf` | Hesse LM et al., Clinically important drug interactions…, CNS drugs (2003) | pgx | 7 | [10.2165/00023210-200317070-00004](https://doi.org/10.2165/00023210-200317070-00004) | [12751920](https://www.ncbi.nlm.nih.gov/pubmed/12751920) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Najib_2006.pdf` | Najib J, Eszopiclone, a nonbenzodiazepine sedati…, Clinical therapeutics (2006) | pgx | 7 | [10.1016/j.clinthera.2006.04.014](https://doi.org/10.1016/j.clinthera.2006.04.014) | [16750462](https://www.ncbi.nlm.nih.gov/pubmed/16750462) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Renwick_1998.pdf` | Renwick AB et al., Metabolism of Zaleplon by human hepatic…, Xenobiotica; the fate of fo… (1998) | pgx | 7 | [10.1080/004982598239452](https://doi.org/10.1080/004982598239452) | [9604298](https://www.ncbi.nlm.nih.gov/pubmed/9604298) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-11-24 06:04 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beedham_2003 | irrelevant | 0 | 0 | The paper focuses on ziprasidone metabolism and only mentions zaleplon in passing as an example of an aldehyde oxidase substrate without reporting any PK parameters for it. |
| PGx | Beedham_2003 | not_relevant | 0 | 0 | The paper discusses the metabolism of ziprasidone and mentions zaleplon only as an example of an aldehyde oxidase substrate, providing no pharmacogenomic data for zaleplon. |
| PGx | Drover_2000 | not_relevant | 0 | 0 | The study is a general pharmacokinetic comparison in healthy volunteers and does not investigate the influence of specific gene variants or genotypes on drug response. |
| popPK | Goldschmied_2021 | irrelevant | 0 | 0 | The study is a clinical trial focusing on insomnia/depression outcomes and metabolomics, reporting no pharmacokinetic parameters for zaleplon. |
| PGx | Goldschmied_2021 | not_relevant | 0 | 0 | The study examines clinical outcomes (sleep, depression, metabolites) in an HIV+ population but does not report on pharmacogenomic variants or their effects on zaleplon PK/PD parameters. |
| popPK | Hesse_2003 | irrelevant | 0 | 0 | This is a review article summarizing drug interactions without providing original quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for zaleplon. |
| PGx | Hesse_2003 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and does not report pharmacogenomic effects (gene variants) on zaleplon's PK or PD. |
| PGx | Izat_2025 | not_relevant | 0 | 0 | PBPK modeling of AO/CYP3A4-mediated clearance of zaleplon; no gene variant/genotype/phenotype effects on PK/PD reported. |
| popPK | Najib_2006 | irrelevant | 0 | 0 | The paper is a review of eszopiclone, and zaleplon is only mentioned as a comparator agent without any reported pharmacokinetic parameters. |
| PGx | Najib_2006 | not_relevant | 0 | 0 | The paper reviews eszopiclone, not zaleplon, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Petroski_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on indiplon's receptor selectivity, with zaleplon used only as a comparator for potency (EC50) rather than for population PK parameter estimation. |
| PGx | Petroski_2006 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of indiplon and does not report pharmacogenomic effects on zaleplon. |
| popPK | Renwick_1998 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of metabolic enzymes (CYP isoforms) and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for zaleplon. |
| PGx | Renwick_1998 | not_relevant | 1 | 2 | The paper identifies CYP3A4 as the primary enzyme for zaleplon metabolism using cDNA-expressed isoforms and liver microsomes, but does not report genetic variants or in vivo pharmacokinetic/pharmacodynamic parameters. |
| popPK | Strelevitz_2012 | irrelevant | 1 | 0 | The paper is an in-vitro mechanistic study using zaleplon as a probe substrate for aldehyde oxidase and does not report population pharmacokinetic parameters (CL, V, etc.) for zaleplon. |
| PGx | Strelevitz_2012 | not_relevant | 0 | 0 | The paper uses zaleplon as a probe substrate to validate a method for estimating aldehyde oxidase contribution using hydralazine, but does not report any pharmacogenomic effects (gene variants) on its pharmacokinetics. |
| popPK | Tanoue_2013 | irrelevant | 2 | 0 | The study focuses on metabolic pathways (formation of 5-oxo-zaleplon and desethyl-zaleplon) and enzyme activities rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for zaleplon itself. |
| PGx | Tanoue_2013 | not_relevant | 0 | 0 | The study compares drug metabolism in humanized mice versus rats and does not investigate the impact of human genetic variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wegner_2008 | irrelevant | 0 | 0 | This is an in-vitro receptor pharmacology study reporting binding affinities (Ki) and potency (EC50), not pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| PGx | Wegner_2008 | not_relevant | 0 | 0 | The paper investigates in vitro binding affinities and patch-clamp properties of indiplon derivatives; zaleplon is mentioned only as a reference compound, and there is no pharmacogenomic analysis of zaleplon's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzaleplon%5D&body=Drug%3A%20zaleplon%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zaleplon/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 06:03 UTC</sub>
