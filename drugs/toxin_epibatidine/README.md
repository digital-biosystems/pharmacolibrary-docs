<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Epibatidine&quot;}]"></div>

# Epibatidine

- **generic name:** Epibatidine
- **T3DB:** [T3D2530](http://www.t3db.ca/toxins/T3D2530) · **DrugBank:** [DB07720](https://go.drugbank.com/drugs/DB07720) · **PubChem:** [CID 1204](https://pubchem.ncbi.nlm.nih.gov/compound/1204)
- **groups:** experimental

## About

Epibatidine is a toxin found in certain poisonous frogs (Epipedobates tricolour). It is a powerful analgesic and works by activating nicotinic acetylcholine receptors.

- **Category:** Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite), inhalation (smoking)
- **Sources and uses:** Epibatidine is a toxin found in certain poisonous frogs (Epipedobates tricolour).
- **Mechanism of toxicity:** Epibatidine works by binding and activating nicotinic acetylcholine receptors.
- **Health effects:** Epibatidine is neurotoxic. It may also cause receptor blocks at neuromuscular junctions, causing respiratory paralysis and death. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2530">T3DB T3D2530</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 140111-52-0</small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=epibatidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRFAM7A (unknown), CHRNA2 (target), CHRNA3 (target), CHRNA4 (target), CHRNA7 (unknown), CHRNB2 (unknown), CHRNB4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 04:54 | 8:10 | 0/0/0 | 0/0/0 | 0/0/0 | 209,391/7,663 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 51 matched, 51 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wilkie_1996.pdf` | Wilkie GI et al., Pharmacological characterization of a n…, Neurochemical research (1996) | pd | 4 | [10.1007/BF02532425](https://doi.org/10.1007/BF02532425) | [8897478](https://www.ncbi.nlm.nih.gov/pubmed/8897478) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-10 04:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bencherif_1998 | irrelevant | 0 | 0 | The paper reports in vitro receptor binding and agonist potency data for RJR-2429, with epibatidine used only as a comparator, and contains no toxicokinetic parameters. |
| popPK | Braida_2020 | irrelevant | 0 | 0 | Epibatidine is used only as a radioligand for receptor binding assays, and the paper reports behavioral pharmacology of other substances in zebrafish without providing toxicokinetic parameters for epibatidine. |
| popPK | Chipana_2008 | irrelevant | 0 | 0 | Epibatidine is used solely as a radioligand ([3H]epibatidine) for binding assays, not as the subject substance for toxicokinetic parameter measurement. |
| popPK | Dahan_2004 | irrelevant | 0 | 0 | The paper is an electrophysiology study on nicotinic acetylcholine receptors in Xenopus oocytes using epibatidine as an agonist ligand, reporting no toxicokinetic or disposition parameters. |
| popPK | Dahlgren_2023 | irrelevant | 0 | 0 | Epibatidine is used as a pharmacological nicotinic receptor agonist to study duodenal permeability, not as the subject of toxicokinetic analysis. |
| popPK | Damaj_1996 | irrelevant | 0 | 0 | The paper reports on behavioral tolerance and dose-response shifts in mice, but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for epibatidine. |
| popPK | Di_2000 | irrelevant | 0 | 0 | The paper studies nicotinic receptor antagonism in vitro using [125]I-epibatidine as a radioligand, but reports no toxicokinetic parameters (absorption, distribution, metabolism, excretion) for epibatidine itself. |
| PGx | Flores_1999 | not_relevant | 5 | 2 | The study reports phenotypic variability in antinociception (PD) between inbred mouse strains but does not identify specific gene variants or genotypes responsible for the effect. |
| popPK | Franceschini_2002 | irrelevant | 0 | 0 | The paper focuses on the mechanisms of nicotine-induced seizures in mice, and while epibatidine is mentioned as a ligand for binding studies, no quantitative toxicokinetic parameters (half-life, clearance, etc.) for epibatidine are reported. |
| popPK | Guan_2003 | irrelevant | 0 | 0 | Epibatidine is used only as a radioactive ligand for binding studies, not as the subject of toxicokinetic analysis |
| popPK | Hama_2001 | irrelevant | 0 | 0 | The study reports pharmacodynamic dose-response data (ED50 values for analgesia) rather than quantitative toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Hernandez_2005 | irrelevant | 0 | 0 | The paper studies the effects of nicotine exposure on memory and receptor expression, using [3H]-epibatidine only as an analytical ligand for receptor autoradiography, not as the subject of toxicokinetic analysis. |
| popPK | Janhunen_2004 | irrelevant | 0 | 0 | The paper reports pharmacological effects (dopamine concentrations) rather than toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Kassiou_1998 | irrelevant | 0 | 0 | The paper focuses on the pharmacological evaluation of a radiotracer ([11C]A-84543) where epibatidine is used solely as a pharmacological challenge agent to test receptor specificity, with no kinetic parameters reported for epibatidine itself. |
| popPK | Kittila_1997 | irrelevant | 0 | 0 | The paper reports electrophysiological pharmacological data (dose-response/EC50) in rabbit retinal ganglion cells, not toxicokinetic parameters (half-life, clearance, etc.) for epibatidine. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The paper is a pharmacological study on nicotinic receptor subtypes in mouse tracheal epithelium using epibatidine as a tool compound to identify receptor subunits, reporting functional electrophysiology (ISC) and dose-response data rather than toxicokinetic parameters like clearance, half-life, or volume of distribution. |
| popPK | Lichtman_1998 | irrelevant | 0 | 0 | The paper reports ED50 values (dose-response metrics) rather than quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Marks_2004 | irrelevant | 0 | 0 | The paper uses epibatidine solely as a radioligand for receptor binding studies and does not report any pharmacokinetic parameters (half-life, clearance, distribution volume, etc.) for epibatidine. |
| popPK | Miyagi_2006 | irrelevant | 0 | 0 | The paper focuses on dinotefuran binding kinetics and receptor affinity, using epibatidine only as a comparator ligand rather than studying its toxicokinetic parameters. |
| popPK | Moerke_2017 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of nicotine, while epibatidine is used only as a behavioral comparator and no kinetic parameters for epibatidine are provided. |
| popPK | Mori_2002 | irrelevant | 0 | 0 | Epibatidine is used solely as a radioligand ([3H]epibatidine) for binding studies of dinotefuran; no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) are reported for epibatidine itself. |
| popPK | Perniss_2020 | irrelevant | 0 | 0 | The paper studies nicotine's effect on ciliary activity using epibatidine only as a mechanistic agonist tool, and reports no quantitative toxicokinetic parameters for epibatidine. |
| popPK | Ponzoni_2014 | irrelevant | 0 | 0 | Epibatidine is used only as an analytical radioligand for receptor binding studies, not as the subject substance for toxicokinetic parameter determination. |
| popPK | Rasmussen_1998 | irrelevant | 0 | 0 | The study investigates behavioral self-administration and dose-response in mice, reporting no quantitative toxicokinetic parameters (e.g., clearance, half-life, partition coefficients) for epibatidine. |
| popPK | Scheffel_2018 | irrelevant | 0 | 0 | The paper is an in vitro electrophysiology study focusing on receptor modulation, and epibatidine is used solely as a reference agonist to characterize receptor desensitization, not as a subject of toxicokinetic analysis. |
| popPK | Sershen_1997 | irrelevant | 0 | 0 | The paper reports pharmacological potency and efficacy of epibatidine in inducing neurotransmitter release, but contains no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Singh_1999 | irrelevant | 0 | 0 | The paper is a technical report on the GROBID software for document processing and contains no toxicokinetic data for epibatidine. |
| PGx | Tammimäki_2012 | not_relevant | 4 | 8 | The study reports a pharmacodynamic effect (intracellular calcium response) of a genetic variant on receptor function using epibatidine as a ligand, but it is a functional genomics study of receptor properties, not a clinical pharmacogenomic study of epibatidine as a therapeutic drug. |
| popPK | Tizabi_2000 | irrelevant | 0 | 0 | Epibatidine is used solely as an analytical ligand to measure receptor binding density; the study reports no pharmacokinetic parameters (half-life, clearance, etc.) for epibatidine itself. |
| popPK | Vieira-Brock_2015 | irrelevant | 0 | 0 | Epibatidine is used only as a radioligand ([(125)I]epibatidine) for autoradiographic assessment of receptor expression, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Villemagne_1997 | irrelevant | 2 | 8 | The paper reports pharmacokinetic parameters for 18F-FPH, an epibatidine analog, not for epibatidine itself. |
| popPK | Wall_2017 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of the novel nAChR agonist TC299423, using epibatidine only as a radioligand for binding assays, not as the subject substance. |
| popPK | Wilkie_1996 | irrelevant | 0 | 0 | The paper reports an in vitro pharmacodynamic EC50 value for epibatidine, but contains no quantitative toxicokinetic parameters such as clearance, half-life, or partition coefficients. |
| PGx | Wilson_2003 | not_relevant | 5 | 0 | The study reports interstrain variability in antinociception and genetic correlations for epibatidine, but does not report a pharmacogenomic effect on a specific PK/PD parameter (e.g., Cmax, AUC, ED50 change due to genotype). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepibatidine%5D&body=Drug%3A%20epibatidine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_epibatidine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
