<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Econazole&quot;}]"></div>

# Econazole

- **generic name:** Econazole
- **T3DB:** [T3D2992](http://www.t3db.ca/toxins/T3D2992) · **DrugBank:** [DB01127](https://go.drugbank.com/drugs/DB01127) · **PubChem:** [CID 3198](https://pubchem.ncbi.nlm.nih.gov/compound/3198)
- **groups:** approved

## About

Econazole is only found in individuals that have used or taken this drug. It is a broad spectrum antimycotic with some action against Gram positive bacteria. It is used topically in dermatomycoses also orally and parenterally. [PubChem] Econazole interacts with 14-alpha demethylase, a cytochrome P-450 enzyme necessary to convert lanosterol to ergosterol. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** after topical application to the skin of normal subjects, systemic absorption of econazole nitrate is extremely low. Although most of the applied drug remains on the skin surface, drug concentrations were found in the stratum corneum which, by far, exceeded the minimum inhibitory concentration for dermatophytes.
- **Sources and uses:** For topical application in the treatment of tinea pedis, tinea cruris, and tinea corporis caused by <i>Trichophyton rubrum</i>, <i>Trichophyton mentagrophytes</i>, <i>Trichophyton tonsurans</i>, <i>Microsporum canis</i>, <i>Microsporum audouini</i>, <i>Microsporum gypseum</i>, and <i>Epidermophyton floccosum</i>, in the treatment of cutaneous candidiasis, and in the treatment of tinea versicolor.
- **Mechanism of toxicity:** Econazole interacts with 14-&alpha; demethylase, a cytochrome P-450 enzyme necessary to convert lanosterol to ergosterol. As ergosterol is an essential component of the fungal cell membrane, inhibition of its synthesis results in increased cellular permeability causing leakage of cellular contents. …
- **Acute toxicity:** LD50: 462 mg/kg (Oral, Mouse)
LD50: 462 mg/kg (Oral, Rat)
LD50: 668 mg/kg (Oral, Guinea pig)
LD50: >160 mg/kg (Oral, Dog)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2992">T3DB T3D2992</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 27220-47-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:4754">ChEBI 4754</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Khera_2022_reference](drugs/toxin_econazole/Econazole_Khera2022_reference.md) | — | 1-compartment (no model) | 0 | Khera H et al., Single ascending dose safety, tolerabil…, Expert review of anti-infec… (2022) | [10.1080/14787210.2022.2016392](https://doi.org/10.1080/14787210.2022.2016392) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=econazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NR1I2 (partial agonist).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 10:42 | 9:29 | 0/1/0 | 0/0/0 | 0/0/0 | 331,349/16,879 | einfracz / qwen3.8-flash-next | 15 | 1/7 | 15/0 | 0 |

## Coverage

- **PubMed hits:** 73 matched, 73 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cameron_1976.pdf` | Cameron BD et al., Absorption and disposition of econazole…, Arzneimittel-Forschung (1976) | popPK | 9 |  | [1037247](https://pubmed.ncbi.nlm.nih.gov/1037247) | The text provides quantitative absorption fractions (one-third of dose) and peak plasma concentrations with time points for econazole in rabbits. |
| `Khera_2022.pdf` | Khera H et al., Single ascending dose safety, tolerabil…, Expert review of anti-infec… (2022) | popPK | 8 | [10.1080/14787210.2022.2016392](https://doi.org/10.1080/14787210.2022.2016392) | [34913825](https://pubmed.ncbi.nlm.nih.gov/34913825) | The paper reports quantitative pharmacokinetic parameters (AUC) for econazole in humans, which are directly usable as kinetic data points. |
| `NDri-Stempfer_2009.pdf` | N'Dri-Stempfer B et al., Improved bioequivalence assessment of t…, Pharmaceutical research (2009) | popPK | 8 | [10.1007/s11095-008-9742-9](https://doi.org/10.1007/s11095-008-9742-9) | [18941872](https://pubmed.ncbi.nlm.nih.gov/18941872) | The paper reports dermatopharmacokinetic (DPK) parameters (uptake and clearance) for econazole, which are quantitative kinetic metrics, but the specific numeric values for these parameters are not provided in the abstract text. |

<sub>queue written 2026-11-14 10:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Razek_1995 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating therapeutic efficacy of econazole for pityrosporum folliculitis and reports no quantitative toxicokinetic parameters such as half-lives, clearance, or volume of distribution. |
| popPK | Ahmad_2008 | irrelevant | 0 | 0 | The paper reports qualitative duration of therapeutic concentrations (e.g., "up to 5 days") in a mouse TB efficacy study but provides no quantitative kinetic parameters such as half-lives, clearance rates, volumes of distribution, or PK coefficients. |
| popPK | Ahmed_2025 | irrelevant | 1 | 0 | The paper is a systematic review of solid lipid nanoparticles that mentions econazole only as an API encapsulated in various formulations, without reporting any quantitative toxicokinetic parameters for econazole itself. |
| popPK | Alshehri_2026 | irrelevant | 0 | 0 | Econazole is used solely as an analytical internal standard for the quantification of abemaciclib and tamoxifen; no kinetic parameters for econazole are reported. |
| PGx | Britza_2023 | not_relevant | 0 | 0 | Econazole is used merely as a pharmacological CYP3A4 inhibitor in vitro, not as the subject of a pharmacogenomic PK/PD study. |
| popPK | Chen_2007 | irrelevant | 2 | 8 | The paper reports octanol-polymer and octanol-water partition coefficients (log P), which are physicochemical properties for method validation, not biological toxicokinetic parameters like clearance or volume of distribution. |
| popPK | Del_2013 | irrelevant | 0 | 0 | The paper discusses topical antifungals generally, mentioning econazole only as an example of an imidazole with no kinetic parameters provided. |
| popPK | Di_2020 | relevant | 9 | 2 | The paper reports AUC0-t data for econazole, a key pharmacokinetic metric, but the specific numeric values are contained in Table 2 and Figures 1-4 which are not included in the provided evidence text. |
| PGx | Ellard_1993 | not_relevant | 0 | 0 | The paper reports in vitro genotoxicity (micronucleus formation) and metabolic activity in engineered cell lines, not clinical pharmacokinetic or pharmacodynamic parameters in humans. |
| PGx | Erradhouani_2025 | not_relevant | 0 | 0 | The paper studies the regulation of gene expression (cyp3a65) in zebrafish by econazole acting as a PXR antagonist, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of econazole. |
| PGx | Fowler_2000 | not_relevant | 0 | 10 | The paper describes in vitro site-directed mutagenesis of CYP3A4 enzyme kinetics and inhibitor binding, not a pharmacogenomic study in humans changing pharmacokinetic or pharmacodynamic parameters of econazole. |
| popPK | Fromtling_1988 | irrelevant | 2 | 0 | The provided evidence is merely an abstract/overview summary of an antifungal review with no specific numeric kinetic parameters for econazole. |
| popPK | Genuino_2024 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for topical antifungals and contains no toxicokinetic parameters for econazole. |
| PGx | Godamudunage_2018 | not_relevant | 0 | 0 | The paper compares enzyme inhibition potency between two different protein isoforms (CYP3A4 vs CYP3A7) across different developmental stages, not how a genetic variant changes PK/PD parameters in a patient population. |
| popPK | Kippax_1982 | irrelevant | 0 | 0 | The paper is a clinical study on vaginitis treatment efficacy with no reported pharmacokinetic parameters for econazole. |
| popPK | Leal_2017 | relevant | 4 | 6 | The paper reports quantitative uptake amounts (Q6h) and clearance data for econazole in ex vivo porcine skin, which constitutes topical bioavailability/kinetic data, though it is not systemic PBPK/toxicokinetics. |
| PGx | Lee_2012 | not_relevant | 0 | 0 | The paper is a computational chemistry study on CYP3A4 inhibition binding energies; it does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of econazole. |
| popPK | Li_2018 | relevant | 7 | 0 | The paper reports quantitative toxicokinetic parameters (AUC, Cmax, Tmax, t1/2) for econazole in rabbits, but the specific numeric values are not present in the text, only mentioned as calculated via software or shown in figures/tables not provided. |
| popPK | Liang_2023 | irrelevant | 3 | 0 | The text mentions pharmacokinetic parameters (AUC, t1/2) but provides no numeric values for econazole; values are likely in a table or figure not included in the evidence. |
| popPK | Mertin_1997 | irrelevant | 1 | 0 | The paper discusses econazole only in terms of predicted efficacy and permeability trends among a group of drugs, providing no specific quantitative toxicokinetic parameters (such as specific partition coefficients, permeability coefficients with values, or kinetic rate constants) for econazole in the evidence provided. |
| PGx | Monostory_2004 | not_relevant | 0 | 0 | The paper investigates econazole's inhibition of CYP enzymes in vitro, not the effect of human gene variants on econazole's PK/PD parameters. |
| PGx | Moody_2015 | not_relevant | 0 | 0 | The paper reports the in vitro inhibition of opioid metabolism by azoles (including econazole), not the effect of gene variants on the pharmacokinetics or pharmacodynamics of econazole itself. |
| popPK | NDri-Stempfer_2009 | relevant | 8 | 2 | The paper reports dermatopharmacokinetic (DPK) parameters (uptake and clearance) for econazole, which are quantitative kinetic metrics, but the specific numeric values for these parameters are not provided in the abstract text. |
| PGx | Neunzig_2011 | not_relevant | 1 | 0 | The paper discusses econazole only as a broad-range P450 inhibitor used to determine IC50 values for CYP3A7, without reporting how gene variants affect econazole's own pharmacokinetics or pharmacodynamics. |
| popPK | Pieńko_2017 | irrelevant | 1 | 0 | The paper reports DFT computational adsorption energies for drug-carbon nanostructure complexes, not quantitative toxicokinetic parameters for econazole disposition in humans or animals. |
| PGx | Svecova_2008 | not_relevant | 0 | 0 | The paper discusses the interaction of econazole with PXR to modulate CYP3A4 gene expression, but does not evaluate the impact of any host gene variants (pharmacogenomics) on econazole's PK/PD parameters. |
| popPK | Tang_2000 | irrelevant | 0 | 0 | The paper focuses on hydrogen peroxide toxicity in rat islets, with econazole mentioned only as a calcium channel blocker used as a tool compound, not as the subject of toxicokinetic analysis. |
| popPK | Wang_2006 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of antifungal treatments without measuring or reporting any toxicokinetic parameters such as half-lives, clearance, or plasma concentrations. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The study investigates drug-protein interactions and in vitro enzyme kinetics, not pharmacogenomic effects (gene variants/genotypes) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Xiao_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic mechanism of econazole as a cytochrome P450 inhibitor in heart cells but does not report any gene variant or genotype affecting drug pharmacokinetics or pharmacodynamics. |
| PGx | Yan_2017 | not_relevant | 0 | 0 | The paper reports econazole as an inhibitor of CYP4Z1 but does not report pharmacogenomic effects on econazole's PK/PD parameters. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper reports on the pharmacological mechanism and therapeutic efficacy of econazole in Parkinson's disease models, but contains no quantitative toxicokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beconazole%5D&body=Drug%3A%20econazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_econazole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 10:39 UTC</sub>
