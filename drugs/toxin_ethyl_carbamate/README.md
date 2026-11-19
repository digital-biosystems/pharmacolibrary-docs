<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ethyl carbamate&quot;}]"></div>

# Ethyl carbamate

- **generic name:** Ethyl carbamate
- **T3DB:** [T3D4583](http://www.t3db.ca/toxins/T3D4583) · **DrugBank:** [DB04827](https://go.drugbank.com/drugs/DB04827) · **PubChem:** [CID 5641](https://pubchem.ncbi.nlm.nih.gov/compound/5641)
- **groups:** approved, withdrawn

## About

Ethyl carbamate (also known as urethane) is an ester of carbamic acid. It is not a component of polyurethanes. Urethane can be produced by the reaction of ammonia with ethyl chloroformate or by heating urea nitrate and ethyl alcohol. …

- **Category:** Pollutant, Airborne Pollutant, Food Toxin, Synthetic Toxin
- **Route of exposure:** ingestion, inhalation, injection
- **Sources and uses:** Small quantities of ethyl carbamate are still used in laboratories as an anesthetic for animals. Ethyl carbamate is found in many alcoholic beverages, especially distilled spirits.
- **Mechanism of toxicity:** Ethyl carbamate is genotoxic and a potent carcinogen. It exerts its effects through the formation of DNA adducts (via its vinyl carbamate epoxide metabolite) that induce choromosomal aberrations, micronuclei and sister chromatid exchange. …
- **Health effects:** Ethyl carbamate can cause cancer. Acute exposure can cause severe eye irritation and skin irritation. …
- **Lethal dose:** LD50 in rodents of 2g/kg (ingestion)
- **Carcinogenicity:** IARC group 2A, probably carcinogenic to humans.
- **Minimal risk levels (ATSDR):** >0.3 mg/kg/day for lung cancer
- **Treatment:** EYES: irrigate opened eyes for several minutes under running water. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4583">T3DB T3D4583</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 51-79-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17967">ChEBI 17967</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ethyl_carbamate | metabolite | 89.094 | C3H7NO2 | PubChem | [5641](https://pubchem.ncbi.nlm.nih.gov/compound/5641) | Kurata_1991 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Kurata_1991_reference](drugs/toxin_ethyl_carbamate/EthylCarbamate_Kurata1991_reference.md) | held back | 1-compartment, IV | 2 | Kurata N et al., Studies on inhibition and induction of…, Drug metabolism and disposi… (1991) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ethyl_carbamate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `AOX1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MPO (inducer), PLA2G4A (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 08:01 | 2:48 | 1/0/0 | 0/0/0 | 0/0/0 | 131,443/11,472 | ollama / glm-5.3-flash | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kurata_1991.pdf` | Kurata N et al., Studies on inhibition and induction of…, Drug metabolism and disposi… (1991) | popPK | 8 |  | [1676642](https://pubmed.ncbi.nlm.nih.gov/1676642) | Quantitative blood clearance values of ethyl carbamate (with SE) reported in mice; numbers are directly in the abstract. |

<sub>queue written 2026-11-15 07:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Badea_2007 | not_relevant | 0 | 0 |  |
| popPK | Inai_1991 | irrelevant | 1 | 0 | Carcinogenicity dose-response and VSD modeling with no kinetic parameters; numbers are dose levels and risk estimates, not toxicokinetics. |
| popPK | Iversen_1984 | irrelevant | 2 | 0 | Dermal carcinogenesis/dose-response study in mice with no kinetic parameters (only exposure concentrations reported). |
| popPK | Lachenmeier_2010 | irrelevant | 2 | 6 | This is an exposure and risk assessment study reporting EC concentrations in beverages, MOE and BMDL values, but no kinetic parameters (half-life, clearance, partition coefficients, etc.) for ethyl carbamate itself. |
| popPK | Lachenmeier_2012 | irrelevant | 0 | 0 | This is a comparative risk assessment using margin of exposure; no toxicokinetic parameters (half-life, clearance, etc.) for ethyl carbamate are reported, and no numeric kinetic values appear in the evidence. |
| PGx | Liu_2018 | not_relevant | 1 | 3 | This describes engineered bacterial urease enzyme mutants, not a host gene/genotype altering the PK or PD of ethyl carbamate. |
| popPK | McBride_2006 | irrelevant | 0 | 0 | Ethyl carbamate here is a N-(4-pyridyl) carbamate drug analogue tested in vitro on axonal conduction, not the toxicant as subject, and no kinetic parameters are reported. |
| popPK | Morita_2022 | irrelevant | 0 | 0 | "Ethyl carbamate" only appears as a chemical derivatization tag (2-trimethylsilylethyl carbamate) for meth/amphetamine immunoassay; no toxicokinetic parameters for ethyl carbamate itself. |
| PGx | Rodríguez_2007 | not_relevant | 0 | 0 | The paper concerns Lactobacillus taxonomy and screening for ethyl carbamate–related bacterial genes; no pharmacogenomic effect on ethyl carbamate PK/PD is reported. |
| popPK | Schlatter_2010 | irrelevant | 2 | 3 | This is a dose-response/exposure risk assessment; the BMDL and exposure values are not toxicokinetic parameters. |
| popPK | Sotomayor_1994 | relevant | 3 | 3 | Reports dose-dependent DNA binding for EC/metabolites in mouse tissues with numeric binding trends, but no classic kinetic parameters and exact values partly not shown. |
| popPK | Trzos_1978 | irrelevant | 0 | 0 | Ethyl carbamate appears only as a tested carcinogen in a micronucleus assay with negative results and no kinetic parameters of any kind. |
| popPK | Waddell_2005 | irrelevant | 2 | 1 | Carcinogenicity dose-response/threshold comparison for ethyl carbamate in rodents with no kinetic parameters (no half-life, rate constants, clearance, or model parameters); no numeric toxicokinetic values present. |
| popPK | unknown_2006 | irrelevant | 3 | 0 | This is a WHO/FAO risk-assessment summary report; no numeric toxicokinetic parameters for ethyl carbamate appear in the evidence, which is only an abstract of committee conclusions. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethyl_carbamate%5D&body=Drug%3A%20ethyl_carbamate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethyl_carbamate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 07:59 UTC</sub>
