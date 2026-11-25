<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;methaqualone&quot;}]"></div>

# methaqualone

- **generic name:** methaqualone
- **ATC codes:** `N05CM01`
- **DrugBank:** [DB04833](https://go.drugbank.com/drugs/DB04833) · **PubChem:** [CID 6292](https://pubchem.ncbi.nlm.nih.gov/compound/6292)
- **molar mass:** 250.2952 g/mol (C16H14N2O) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Methaqualone is a sedative-hypnotic in the quinazolinone class used to treat insomnia. It was withdrawn from the market in many countries due to widespread misuse and addiction, though it remains a recreational drug in some regions.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q423912](https://www.wikidata.org/wiki/Q423912), [Wikipedia](https://en.wikipedia.org/wiki/Methaqualone?oldid=1385795914) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:54 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,029/154 | einfracz / qwen3.8-27b | 4 | 4/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verpooten_1982.pdf` | Verpooten GA et al., Prediction of the efficacy of hemoperfu…, Archives of toxicology. Sup… (1982) | popPK | 6 | [10.1007/978-3-642-68511-8_54](https://doi.org/10.1007/978-3-642-68511-8_54) | [6954915](https://pubmed.ncbi.nlm.nih.gov/6954915) | The text identifies methaqualone as following a two-compartment model but provides no specific numeric values for clearance, volume, or half-life in the evidence. |

<sub>queue written 2026-11-24 03:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul_2025 | irrelevant | 0 | 0 | Methaqualone appears only as an internal standard in the GC-NPD assay for lignocaine; no methaqualone PK parameters are reported. |
| popPK | Belcastro_1992 | irrelevant | 0 | 0 | The paper is a review of drug education textbooks and discusses methaqualone only as a potential adulterant in illicit drugs, providing no pharmacokinetic data. |
| PGx | Belcastro_1992 | not_relevant | 0 | 0 | The paper is a review of drug education textbooks regarding adulterants in illicit drugs and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Cai_1989 | irrelevant | 0 | 0 | Methaqualone is used solely as an internal standard for tetramethylpyrazine, which is the actual subject drug. |
| PGx | Cai_1989 | not_relevant | 0 | 0 | The paper describes the PK of tetramethylpyrazine; methaqualone is only used as an internal standard and no pharmacogenomic effects are reported. |
| popPK | Chemburkar_1976 | irrelevant | 2 | 0 | The study focuses on dissolution-bioavailability correlation and formulation development, reporting no quantitative pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Chemburkar_1976 | not_relevant | 0 | 0 | The paper investigates the correlation between tablet dissolution rates and bioavailability, not the impact of gene variants on pharmacokinetics or pharmacodynamics. |
| popPK | Commissaris_1983 | irrelevant | 0 | 0 | This is a pharmacodynamic tolerance study measuring rotarod impairment, not a pharmacokinetic study, and it does not report any quantitative disposition parameters (clearance, volume, half-life) for methaqualone. |
| PGx | Commissaris_1983 | not_relevant | 0 | 0 | The study examines pharmacological tolerance in animals, not the effect of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Faulkner_1979 | irrelevant | 0 | 0 | The study focuses on dose-response and tolerance to clinical signs of intoxication, not pharmacokinetic parameters like clearance or volume. |
| PGx | Faulkner_1979 | not_relevant | 0 | 0 | The study examines pharmacological tolerance in a polydrug abuse population and does not investigate specific gene variants or genotypes. |
| popPK | Flanagan_1972 | irrelevant | 0 | 0 | The paper describes a gas-liquid chromatography analytical method for measuring drug concentrations in plasma, but does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life for methaqualone. |
| PGx | Flanagan_1972 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring barbiturates and methaqualone in plasma and does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Haghpassand_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of a methaqualone derivative (CP-10447) on lipoprotein secretion, not a pharmacokinetic study of methaqualone. |
| PGx | Haghpassand_1996 | not_relevant | 0 | 0 | The paper studies the mechanism of action of a methaqualone derivative (CP-10447) on lipoprotein secretion in cell lines and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Hindmarsh_1983 | relevant | 4 | 4 | The study reports PK parameters for methaqualone in humans but provides only qualitative significance results and limited summary ranges for peak concentration, lacking specific mean values for clearance, volume, or half-life. |
| PGx | Hindmarsh_1983 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between methaqualone and diphenhydramine in healthy subjects, not a pharmacogenomic effect. |
| popPK | Hirshkowitz_1982 | irrelevant | 0 | 0 | This is a pharmacodynamic study focusing on sleep spindle activity (EEG effects), not a pharmacokinetic study reporting disposition parameters like clearance or volume for methaqualone. |
| PGx | Hirshkowitz_1982 | not_relevant | 0 | 0 | The paper discusses sleep spindle activity as a PD parameter but does not report any pharmacogenomic effects (gene variants) influencing these parameters. |
| popPK | Kulkarni_2026 | irrelevant | 0 | 0 | The paper focuses on machine learning models for predicting minimum inhibitory concentrations (MICs) of antibiotics in Mycobacterium tuberculosis and does not contain any pharmacokinetic data for methaqualone. |
| PGx | Kulkarni_2026 | not_relevant | 0 | 0 | The paper focuses on machine learning models for Mycobacterium tuberculosis antibiotic resistance and does not study methaqualone pharmacogenomics. |
| popPK | Maksay_1988 | irrelevant | 0 | 0 | The study is an in vitro receptor binding assay analyzing the mechanism of action (GABA enhancement of displacing potency) and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| PGx | Maksay_1988 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic interaction of GABA and methaqualone on receptor binding in a rat model but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Müller_1978 | irrelevant | 0 | 0 | The study reports an in vitro receptor binding IC50 value for methaqualone, not pharmacokinetic disposition parameters (CL, V, half-life). |
| PGx | Müller_1978 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding affinity of methaqualone but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Noh_2017 | irrelevant | 0 | 0 | The paper reports PK parameters for 7-O-succinyl macrolactin A (SMA); methaqualone is only used as an internal standard in the LC-MS/MS assay, with no methaqualone PK data. |
| popPK | Nozaki_1981 | irrelevant | 2 | 0 | This is a pharmacodynamic/pharmacological study measuring behavioral and respiratory effects (potency/dose-response) rather than pharmacokinetic disposition parameters (CL, V, etc.), and no PK numeric values are present. |
| PGx | Nozaki_1981 | not_relevant | 0 | 0 | The paper describes a pharmacological study using a rat model to compare sedative potencies and does not investigate genetic variants or pharmacogenomic effects. |
| popPK | Prost_2003 | irrelevant | 2 | 0 | The study focuses on stereoselective metabolism and chiral analysis via capillary electrophoresis, lacking quantitative population pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Prost_2003 | not_relevant | 2 | 0 | The study explicitly states that CYP2D6 and CYP2C19 polymorphisms do not significantly contribute to methaqualone metabolism and found no marked difference between phenotypes, thus failing to report a pharmacogenomic effect. |
| popPK | Rock_1976 | irrelevant | 0 | 0 | The paper describes a urine detection test for methaqualone abuse in a military setting and does not report any pharmacokinetic parameters or models. |
| PGx | Rock_1976 | not_relevant | 0 | 0 | The paper describes a clinical trial on methaqualone abuse detection via urine testing, without reporting any gene variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Tilstone_1978 | irrelevant | 5 | 0 | The paper describes the effect of ethanol on the pharmacokinetic parameters (distribution and elimination) of methaqualone but the provided evidence contains no specific quantitative values for clearance, volume, or half-life. |
| PGx | Tilstone_1978 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (ethanol) rather than pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of methaqualone. |
| popPK | Verpooten_1982 | irrelevant | 6 | 0 | The text identifies methaqualone as following a two-compartment model but provides no specific numeric values for clearance, volume, or half-life in the evidence. |
| PGx | Verpooten_1982 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetic modeling of methaqualone in poisoned patients and does not investigate any gene variants or pharmacogenomic effects. |
| popPK | Wijk_2024 | irrelevant | 1 | 2 | Methaqualone appears only as a covariate (urine test) reducing rifampicin bioavailability by 19%; no PK parameters for methaqualone itself are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethaqualone%5D&body=Drug%3A%20methaqualone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methaqualone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
