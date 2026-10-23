<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;quazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quazepam_Cha2024_reference&quot;,&quot;label&quot;:&quot;Cha_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quazepam/Quazepam_Cha2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# quazepam

- **generic name:** quazepam
- **ATC codes:** `N05CD10`
- **DrugBank:** [DB01589](https://go.drugbank.com/drugs/DB01589) · **PubChem:** [CID 4999](https://pubchem.ncbi.nlm.nih.gov/compound/4999)
- **molar mass:** 386.794 g/mol (C17H11ClF4N2S) — DrugBank
- **groups:** approved, illicit

## About

Quazepam is a benzodiazepine hypnotic used to treat insomnia and other sleep disorders. It is an approved medicine, though not authorised in the European Union, and carries a boxed warning; it is also listed as an illicit drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3927403](https://www.wikidata.org/wiki/Q3927403) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| quazepam | parent | 386.794 | C17H11ClF4N2S | DrugBank | [4999](https://pubchem.ncbi.nlm.nih.gov/compound/4999) | Hilbert_1984, Hilbert_1984_2 |
| 2-oxoquazepam | metabolite | 370.73 | C17H11ClF4N2O | PubChem | [93250](https://pubchem.ncbi.nlm.nih.gov/compound/93250) | Hilbert_1984 |
| N-desalkyl-2-oxoquazepam | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Cha_2024_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_quazepam/Quazepam_Cha2024_reference.md?tab=Simulation) · [record](drugs/drug_quazepam/Quazepam_Cha2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 19.76 | L/h | 19.76 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Cha_2024_reference](drugs/drug_quazepam/Quazepam_Cha2024_reference.md) |
| V | V/F | 74.8 | L | 74.8 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Cha_2024_reference](drugs/drug_quazepam/Quazepam_Cha2024_reference.md) |
| ka | kabs | 5.41 | 1/h | 5.41 1/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Cha_2024_reference](drugs/drug_quazepam/Quazepam_Cha2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Cha_2024_reference](drugs/drug_quazepam/Quazepam_Cha2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Cha HJ et al., Development of a Web Application for Si…, Pharmaceutics (2024) | [10.3390/pharmaceutics16050689](https://doi.org/10.3390/pharmaceutics16050689) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chung_1984_reference](drugs/drug_quazepam/Quazepam_Chung1984_reference.md) | — | general linear (no model) | 0 | Chung M et al., Multiple-dose quazepam kinetics, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.70](https://doi.org/10.1038/clpt.1984.70) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Hilbert_1984_reference](drugs/drug_quazepam/Quazepam_Hilbert1984_reference.md) | — | general linear (no model) | 6 | Hilbert JM et al., Quazepam kinetics in the elderly, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.220](https://doi.org/10.1038/clpt.1984.220) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Hilbert_1984_2_reference](drugs/drug_quazepam/Quazepam_Hilbert1984v2_reference.md) | — | general linear (no model) | 4 | Hilbert JM et al., Effect of sleep on quazepam kinetics, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.146](https://doi.org/10.1038/clpt.1984.146) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=quazepam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:53 | 4:27 | 1/3/0 | 0/0/0 | 0/0/0 | 114,254/7,633 | ollama / glm-5.3-flash | 3 | 1/1 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 50 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chung_1984.pdf` | Chung M et al., Multiple-dose quazepam kinetics, Clinical pharmacology and t… (1984) | popPK | 8 | [10.1038/clpt.1984.70](https://doi.org/10.1038/clpt.1984.70) | [6705450](https://pubmed.ncbi.nlm.nih.gov/6705450) | Human multiple-dose quazepam PK with two-compartment model and half-lives reported in abstract, but CL/V values not shown here. |
| `Hilbert_1984.pdf` | Hilbert JM et al., Quazepam kinetics in the elderly, Clinical pharmacology and t… (1984) | popPK | 8 | [10.1038/clpt.1984.220](https://doi.org/10.1038/clpt.1984.220) | [6478742](https://pubmed.ncbi.nlm.nih.gov/6478742) | Human geriatric quazepam PK with two-compartment model and numeric half-lives and Cmax reported directly in the abstract, though CL/V values are not given. |
| `Hilbert_1984_2.pdf` | Hilbert JM et al., Effect of sleep on quazepam kinetics, Clinical pharmacology and t… (1984) | popPK | 8 | [10.1038/clpt.1984.146](https://doi.org/10.1038/clpt.1984.146) | [6734056](https://pubmed.ncbi.nlm.nih.gov/6734056) | Human study with two-compartment model reporting numeric Vc, absorption t1/2, lag time, and elimination half-lives for quazepam and its metabolites directly in the abstract. |

<sub>queue written 2026-10-06 20:52 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cha_2024 | irrelevant | 0 | 0 | This is a population PK study of zolpidem; quazepam is only mentioned as a comparator benzodiazepine with no quazepam parameters. |
| popPK | Fujimiya_1995 | irrelevant | 0 | 0 | The study concerns ethanol pharmacokinetics in rabbits, not quazepam; no quazepam parameters appear. |
| PGx | Hara_2005 | not_relevant | 0 | 0 | Quazepam is only an inhibitor tested in vitro; no gene variant/genotype effect on quazepam PK/PD is reported. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper covers herbal-drug interactions (e.g. St John's wort, ginkgo) with no gene variant/genotype/phenotype effects on quazepam PK/PD. |
| PGx | Kawaguchi_2004 | not_relevant | 0 | 0 | This is a drug–drug interaction (St John's Wort) study, not a gene variant/genotype/phenotype effect on quazepam PK/PD. |
| popPK | Liu_2025 | irrelevant | 3 | 2 | This is an absorption/biopharmaceutics modeling study of food effect on quazepam; no disposition PK parameters (CL, V, half-life) are reported in the evidence, and any values likely reside in figures/supplementary material not provided. |
| PGx | Miura_2004 | not_relevant | 3 | 5 | In vitro enzyme phenotyping and inhibitor Ki values, not a gene variant/genotype effect on quazepam PK/PD in vivo. |
| PGx | Otani_2003 | not_relevant | 2 | 2 | Only states quazepam is partly metabolized by CYP3A4; no genotype/phenotype effect on any PK/PD parameter is reported. |
| popPK | Pillai_2004 | irrelevant | 0 | 0 | The paper models ibandronate, not quazepam; no quazepam parameters appear. |
| popPK | Scharf_1993 | irrelevant | 1 | 0 | Clinical sleep-efficacy study with no PK parameters reported; "three-compartment" refers to study design, not a PK model. |
| PGx | Sugimoto_2006 | not_relevant | 2 | 5 | GFJ (food-drug CYP3A4 inhibition) effect on quazepam PK/PD, not a gene variant/genotype/phenotype effect. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquazepam%5D&body=Drug%3A%20quazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_quazepam/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 20:52 UTC</sub>
