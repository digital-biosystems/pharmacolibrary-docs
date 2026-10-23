<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;cloxacillin&quot;}]"></div>

# cloxacillin

- **generic name:** cloxacillin
- **ATC codes:** `J01CF02`
- **DrugBank:** [DB01147](https://go.drugbank.com/drugs/DB01147) · **PubChem:** [CID 6098](https://pubchem.ncbi.nlm.nih.gov/compound/6098)
- **molar mass:** 435.881 g/mol (C19H18ClN3O5S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Cloxacillin is a penicillin antibiotic used to treat staphylococcal infections, including skin, bone, respiratory, and urinary tract infections. It is an approved human and veterinary medicine and is included on the WHO list of essential medicines, so it remains in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422219](https://www.wikidata.org/wiki/Q422219) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cloxacillin | parent | 435.881 | C19H18ClN3O5S | DrugBank | [6098](https://pubchem.ncbi.nlm.nih.gov/compound/6098) | Nauta_1976 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 9.168 | L/h | 152.8 ml/min | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Nauta_1975_reference](drugs/drug_cloxacillin/Cloxacillin_Nauta1975_reference.md) |
| V | V | 10.14 | L | 10.1404 L | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Nauta_1975_reference](drugs/drug_cloxacillin/Cloxacillin_Nauta1975_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Nauta_1975_reference](drugs/drug_cloxacillin/Cloxacillin_Nauta1975_reference.md) | — | 1-compartment (no model) | 2 | Nauta EH et al., Pharmacokinetics of flucloxacillin and…, British journal of clinical… (1975) | [10.1111/j.1365-2125.1975.tb01566.x](https://doi.org/10.1111/j.1365-2125.1975.tb01566.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Nauta_1976_reference](drugs/drug_cloxacillin/Cloxacillin_Nauta1976_reference.md) | — | 1-compartment (no model) | 4 | Nauta EH et al., Dicloxacillin and cloxacillin: pharmaco…, Clinical pharmacology and t… (1976) | [10.1002/cpt197620198](https://doi.org/10.1002/cpt197620198) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | [Mattie_1997_CFU](drugs/drug_cloxacillin/pd_Mattie_1997_CFU.md) | numbers of CFU ← cloxacillin · direct Emax (saturable) effect | — | Mattie H et al., Pharmacokinetic and pharmacodynamic mod…, Antimicrobial agents and ch… (1997) | [10.1128/AAC.41.10.2083](https://doi.org/10.1128/AAC.41.10.2083) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cloxacillin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A8` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:21 | 3:03 | 2/0/0 | 1/0/0 | 0/0/0 | 177,170/13,271 | einfracz / qwen3.8-27b | 6 | 3/3 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bellouard_2023.pdf` | Bellouard R et al., Development and validation of a dosing…, The Journal of antimicrobia… (2023) | popPK | 10 | [10.1093/jac/dkad030](https://doi.org/10.1093/jac/dkad030) | [36760090](https://pubmed.ncbi.nlm.nih.gov/36760090) | The paper describes a population pharmacokinetic model for cloxacillin, but the specific numeric parameter values (clearance, volume, etc.) are not listed in the provided text, only the resulting dose range and covariate (GFR). |
| `Courjon_2020.pdf` | Courjon J et al., A Population Pharmacokinetic Analysis o…, Antimicrobial agents and ch… (2020) | popPK | 10 | [10.1128/AAC.01562-20](https://doi.org/10.1128/AAC.01562-20) | [32988822](https://pubmed.ncbi.nlm.nih.gov/32988822) | This is a human population PK study for cloxacillin, but the provided abstract text describes the model and simulation results without listing the specific estimated PK parameter values (CL, V, etc.). |
| `Nauta_1976.pdf` | Nauta EH et al., Dicloxacillin and cloxacillin: pharmaco…, Clinical pharmacology and t… (1976) | popPK | 8 | [10.1002/cpt197620198](https://doi.org/10.1002/cpt197620198) | [1277730](https://pubmed.ncbi.nlm.nih.gov/1277730) | The paper reports quantitative PK parameters (bioavailability, T1/2) for cloxacillin in healthy subjects using a 2-compartment model, although the specific distribution volume and clearance values are likely in the full text/figures not fully detailed in the abstract snippet. |

<sub>queue written 2026-10-07 11:19 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beijer_2026 | relevant | 10 | 2 | The study is a population PK model of cloxacillin in humans, but the specific numeric parameter estimates (CL, V, Q) are located in Supplementary Table S2, which is not included in the evidence provided. |
| popPK | Bellouard_2023 | relevant | 10 | 4 | The paper describes a population pharmacokinetic model for cloxacillin, but the specific numeric parameter values (clearance, volume, etc.) are not listed in the provided text, only the resulting dose range and covariate (GFR). |
| popPK | Bins_1988 | relevant | 3 | 4 | Reports quantitative parameters for renal tubular excretion (EC50, Tmax) rather than standard compartmental PK parameters (CL, V, ka) for cloxacillin. |
| popPK | Bonnet_2004 | irrelevant | 0 | 0 | The study uses cloxacillin as a non-ototoxic comparator to evaluate teicoplanin's ototoxicity, reporting no pharmacokinetic parameters for cloxacillin. |
| popPK | Courjon_2020 | relevant | 10 | 3 | This is a human population PK study for cloxacillin, but the provided abstract text describes the model and simulation results without listing the specific estimated PK parameter values (CL, V, etc.). |
| popPK | Garcia_2012 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of antibiotic susceptibility in a THP-1 cell model, not a pharmacokinetic study reporting disposition parameters for cloxacillin. |
| popPK | Grabowski_2018 | relevant | 10 | 1 | The paper reports a population pharmacokinetic model for cloxacillin in cows, but the specific numeric parameter values (typical values for CL, V, etc.) are contained in Tables 1 and 2, which are described but not provided as readable numeric data in the evidence. |
| popPK | James_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gentamicin, with cloxacillin only listed as a co-administered antibiotic in the combination therapy regimen. |
| popPK | Janknegt_1997 | irrelevant | 0 | 0 | The paper is a review discussing pharmacodynamic and economic considerations for antibiotic policy and does not report original quantitative pharmacokinetic parameter values for cloxacillin. |
| popPK | Keelaghan_2022 | irrelevant | 0 | 0 | The study investigates the effect of short-chain fatty acids on Cryptosporidium parvum growth in vitro, where cloxacillin is only mentioned as a historical comparator for microbiome depletion, not as a subject of pharmacokinetic analysis. |
| popPK | Marsot_2020 | irrelevant | 0 | 0 | The paper is a review that explicitly states no studies met inclusion criteria for cloxacillin, and thus contains no pharmacokinetic data for the subject drug. |
| popPK | Mattie_1997 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (EC50, killing rates) rather than pharmacokinetic disposition parameters (CL, V) for cloxacillin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcloxacillin%5D&body=Drug%3A%20cloxacillin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cloxacillin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 11:19 UTC</sub>
