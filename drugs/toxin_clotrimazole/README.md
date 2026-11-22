<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Clotrimazole&quot;}]"></div>

# Clotrimazole

- **generic name:** Clotrimazole
- **T3DB:** [T3D2729](http://www.t3db.ca/toxins/T3D2729) · **DrugBank:** [DB00257](https://go.drugbank.com/drugs/DB00257) · **PubChem:** [CID 2812](https://pubchem.ncbi.nlm.nih.gov/compound/2812)
- **groups:** approved, investigational, vet_approved

## About

Clotrimazole is an imidazole derivative with a broad spectrum of antimycotic activity. It inhibits biosynthesis of the sterol ergostol, an important component of fungal cell membranes. Its action leads to increased membrane permeability and apparent disruption of enzyme systems bound to the membrane. …

- **Category:** Drug, Food Toxin, Synthetic Toxin
- **Route of exposure:** poorly and erratically absorbed orally, minimal vaginal or topical absorption.
- **Sources and uses:** For the local treatment of oropharyngeal candidiasis and vaginal yeast infections, also used in fungal infections of the skin such as ringworm, athlete's foot, and jock itch.
- **Mechanism of toxicity:** Clotrimazole interacts with yeast 14-&alpha; demethylase, a cytochrome P-450 enzyme that converts lanosterol to ergosterol, an essential component of the membrane. In this way, clotrimazole inhibits ergosterol synthesis, resulting in increased cellular permeability. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2729">T3DB T3D2729</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 23593-75-1 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:3764">ChEBI 3764</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clotrimazole | parent | 344.842 | C22H17ClN2 | PubChem | [2812](https://pubchem.ncbi.nlm.nih.gov/compound/2812) | Conte_1992 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Conte_1992_reference](drugs/toxin_clotrimazole/Clotrimazole_Conte1992_reference.md) | held back | 1-compartment, IV | 2 | Conte L et al., Pharmacokinetic study of [14C]flutrimaz…, Arzneimittel-Forschung (1992) | — |
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Rathod_2026_reference](drugs/toxin_clotrimazole/Clotrimazole_Rathod2026_reference.md) | — | 1-compartment (no model) | 0 | Rathod SK et al., Population pharmacokinetics, in-feed bi…, Veterinary research communi… (2026) | [10.1007/s11259-026-11145-z](https://doi.org/10.1007/s11259-026-11145-z) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-17 15:33 | 21:22 | 1/1/0 | 0/0/0 | 0/0/0 | 408,267/20,131 | einfracz / qwen3.8-flash-next | 21 | 2/14 | 21/0 | 0 |

## Coverage

- **PubMed hits:** 217 matched, 169 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rathod_2026.pdf` | Rathod SK et al., Population pharmacokinetics, in-feed bi…, Veterinary research communi… (2026) | popPK | 10 | [10.1007/s11259-026-11145-z](https://doi.org/10.1007/s11259-026-11145-z) | [41874756](https://pubmed.ncbi.nlm.nih.gov/41874756) | The paper explicitly reports quantitative toxicokinetic parameters (relative bioavailability, depletion times/degrees-days) for clotrimazole in a fish species. |
| `Conte_1992.pdf` | Conte L et al., Pharmacokinetic study of [14C]flutrimaz…, Arzneimittel-Forschung (1992) | popPK | 9 |  | [1418045](https://pubmed.ncbi.nlm.nih.gov/1418045) | The abstract explicitly reports quantitative pharmacokinetic parameters for clotrimazole (half-life, clearance, bioavailability, absorption fraction) in dogs. |
| `Czerninski_2010.pdf` | Czerninski R et al., A novel sustained-release clotrimazole…, Clinical oral investigations (2010) | popPK | 8 | [10.1007/s00784-009-0275-3](https://doi.org/10.1007/s00784-009-0275-3) | [19404692](https://pubmed.ncbi.nlm.nih.gov/19404692) | The paper reports toxicokinetic findings including a significantly prolonged terminal half-life for clotrimazole varnish vs troche, but the specific numeric values for the half-lives are not present in the provided abstract/evidence text. |
| `Prabagar_2007.pdf` | Prabagar B et al., Enhanced bioavailability of poorly wate…, Archives of pharmacal resea… (2007) | popPK | 8 | [10.1007/BF02977701](https://doi.org/10.1007/BF02977701) | [17366748](https://pubmed.ncbi.nlm.nih.gov/17366748) | The study reports oral bioavailability in rats, which implies kinetic parameters, but the specific numeric values (Cmax, AUC) are only mentioned qualitatively in the abstract without the actual numbers provided in the evidence. |
| `Rifai_1995.pdf` | Rifai N et al., HPLC measurement, blood distribution, a…, Clinical chemistry (1995) | popPK | 8 |  | [7882513](https://pubmed.ncbi.nlm.nih.gov/7882513) | The study reports on pharmacokinetics in humans, but the provided evidence text lacks the specific quantitative numeric values for parameters like half-life or clearance, describing trends qualitatively. |
| `Mertin_1997.pdf` | Mertin D et al., In-vitro permeability of the human nail…, The Journal of pharmacy and… (1997) | popPK | 6 | [10.1111/j.2042-7158.1997.tb06127.x](https://doi.org/10.1111/j.2042-7158.1997.tb06127.x) | [9306253](https://pubmed.ncbi.nlm.nih.gov/9306253) | The paper discusses predicted permeability parameters for clotrimazole, but the specific numeric values for these kinetic parameters are not provided in the extracted text. |
| `Draskau_2021.pdf` | Draskau MK et al., Human-relevant concentrations of the an…, Toxicology and applied phar… (2021) | popPK | 5 | [10.1016/j.taap.2021.115554](https://doi.org/10.1016/j.taap.2021.115554) | [33910022](https://pubmed.ncbi.nlm.nih.gov/33910022) | The paper mentions the development of a PBK model to match human and rat concentrations, but no specific numeric kinetic parameters (e.g., half-lives, partition coefficients, clearance rates) are provided in the abstract/evidence. |

<sub>queue written 2026-11-17 15:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agarwal_2013 | not_relevant | 0 | 0 | The paper characterizes the in vitro inhibition of cytochrome P450 enzymes by the drug TRAM-34 (a clotrimazole analog); it does not report how a human genetic variant affects the pharmacokinetics or pharmacodynamics of clotrimazole. |
| popPK | Al-Akayleh_2025 | irrelevant | 2 | 2 | The paper focuses on formulation development and in vitro permeation across synthetic membranes (Strat-M) without reporting quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd) in humans or animals. |
| PGx | Alshakarchi_2025 | not_relevant | 0 | 0 | The paper is a review on CYP inhibitors in colorectal cancer; it does not report any pharmacogenomic effects of gene variants on clotrimazole's PK/PD parameters. |
| PGx | Arnold_2019 | not_relevant | 0 | 0 | The paper reports an ex vivo drug-drug interaction study using clotrimazole as a CYP3A4 inhibitor to affect the permeability/metabolism of other drugs in porcine intestine; it does not report pharmacogenomic (gene variant) effects on clotrimazole's own PK/PD parameters. |
| PGx | Auerbach_2007 | not_relevant | 2 | 1 | The paper describes CAR2 splice variant effects on receptor transactivation and ligand binding (PD of the receptor), not on clotrimazole pharmacokinetics or the clinical pharmacodynamic effects of clotrimazole. |
| popPK | Avdeef_2008 | irrelevant | 2 | 0 | The paper discusses in vitro permeability and solubility (PAMPA) for ranking absorption potential but does not report quantitative in vivo toxicokinetic parameters (half-life, clearance, Vd, etc.) for clotrimazole. |
| popPK | Bachmann_1992 | irrelevant | 0 | 0 | Clotrimazole is used only as an inhibitor/co-exposure agent to study ethosuximide kinetics, with no kinetic parameters reported for clotrimazole itself. |
| popPK | Bachmann_1993 | irrelevant | 0 | 0 | Clotrimazole is used solely as a CYP3A inducer/comparator to study theophylline metabolism, not as the subject of kinetic analysis. |
| popPK | Back_1985 | irrelevant | 2 | 0 | Clotrimazole is used as a tool inhibitor to study tolbutamide metabolism, not as the subject substance for kinetic parameter extraction. |
| PGx | Ball_1992 | not_relevant | 0 | 0 | The paper discusses the metabolic inhibition of a different substrate (CQA 206-291) by clotrimazole, but does not report pharmacogenomic effects on clotrimazole's own PK/PD parameters. |
| popPK | Ben-Zvi_1988 | irrelevant | 0 | 0 | Clotrimazole is mentioned only as an in vitro comparator substance that inhibited enzyme activity, with no toxicokinetic parameters reported for its disposition. |
| PGx | Bombail_2004 | not_relevant | 0 | 0 | The paper focuses on transcriptional regulation of CYP3A4 using in vitro mutagenesis, not on how gene variants affect clotrimazole PK/PD in humans. |
| popPK | Cavicchioli_2024 | irrelevant | 0 | 0 | The paper investigates the kinetics of ivermectin in rainbow trout, with clotrimazole used solely as a pretreatment agent to induce P-glycoprotein, not as the subject of kinetic analysis. |
| popPK | Chatterton_2004 | irrelevant | 1 | 2 | The study measures retention of a radiolabeled formulation (99mTc-DTPA) and does not report quantitative toxicokinetic parameters (e.g., clearance, volume of distribution, partition coefficients) for the active substance clotrimazole itself; it is a formulation performance study. |
| popPK | Chouhan_2026 | irrelevant | 0 | 0 | Clotrimazole is mentioned only as an antifungal agent tested for susceptibility (which showed no inhibition), with no toxicokinetic parameters or quantitative kinetic data reported. |
| popPK | Clemons_2011 | irrelevant | 0 | 0 | The paper focuses on recombinant human mannose binding lectin and itraconazole, using clotrimazole only as a comparator in an efficacy study without reporting any toxicokinetic parameters for clotrimazole. |
| popPK | Coe_2006 | irrelevant | 0 | 0 | Clotrimazole is used solely as a comparator substance for gene expression profiling, with no kinetic parameters reported for it. |
| popPK | Czerninski_2010 | relevant | 8 | 0 | The paper reports toxicokinetic findings including a significantly prolonged terminal half-life for clotrimazole varnish vs troche, but the specific numeric values for the half-lives are not present in the provided abstract/evidence text. |
| popPK | Czerninski_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing treatment outcomes without reporting quantitative toxicokinetic parameters such as half-lives, clearance, or concentrations in biofluids. |
| popPK | DeVillez_1992 | irrelevant | 0 | 0 | no_text gate: only 208 chars of text extracted (&lt; 400) |
| popPK | Draskau_2021 | relevant | 5 | 2 | The paper mentions the development of a PBK model to match human and rat concentrations, but no specific numeric kinetic parameters (e.g., half-lives, partition coefficients, clearance rates) are provided in the abstract/evidence. |
| popPK | Duhm_1974 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| popPK | Edenius_2024 | irrelevant | 3 | 6 | The paper reports kinetic effects on the co-pollutant Benzo[a]pyrene (BaP) rather than quantitative toxicokinetic parameters for Clotrimazole itself, which appears as a co-exposure agent. |
| popPK | El-Houssieny_2010 | irrelevant | 2 | 0 | The paper reports physicochemical properties (solubility, partition coefficient, rheology) and antimicrobial activity of a gel formulation, not biological toxicokinetic parameters in organisms. |
| popPK | El_2021 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing treatment outcomes and does not report any toxicokinetic parameters or pharmacokinetic data for clotrimazole. |
| popPK | Epstein_2011 | irrelevant | 0 | 0 | The paper is a clinical case report on homeopathic treatment, where clotrimazole is mentioned only as a prior failed treatment with no kinetic parameters reported. |
| PGx | Erradhouani_2025 | not_relevant | 0 | 0 | The paper investigates zebrafish gene regulation (CYP3A65) using clotrimazole as a chemical probe, not how human gene variants affect clotrimazole PK/PD in humans. |
| PGx | Erradhouani_2025_2 | not_relevant | 0 | 0 | The paper uses clotrimazole as a chemical tool to induce CYP3A expression in zebrafish embryos for an environmental toxicology assay; it does not study clotrimazole pharmacokinetics or pharmacodynamics in humans, nor does it analyze human gene variants (pharmacogenomics) affecting clotrimazole parameters. |
| popPK | Eshimy_2025 | irrelevant | 2 | 0 | The paper focuses on antifungal efficacy, MIC/MFC values, and in vitro drug release percentages, reporting no toxicokinetic parameters such as absorption rates, half-lives, or clearance. |
| PGx | Faucette_2004 | not_relevant | 0 | 0 | The paper studies clotrimazole as an inducer of CYP enzymes in hepatocytes, not as a drug substrate, and does not analyze any gene variants (pharmacogenomics). |
| PGx | Fery_2010 | not_relevant | 0 | 0 | The paper discusses an in vitro cell-based assay for PXR-dependent CYP3A induction using clotrimazole as an inducer, but does not report any pharmacogenomic effects on PK or PD parameters in humans or animals. |
| popPK | Flint_2021 | irrelevant | 0 | 0 | The study reports clinical prescribing patterns and exposure frequencies, containing no quantitative toxicokinetic parameters. |
| PGx | Floerl_2025 | not_relevant | 1 | 2 | The paper reports clotrimazole as an inhibitor of OATP transporters (PD interaction for other drugs/substrates), but does not study clotrimazole's own pharmacokinetics or pharmacodynamics, nor does it link any specific human gene variant to changes in clotrimazole parameters. |
| popPK | Floyd_1986 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study for a vaginal treatment, reporting only clinical cure rates and adverse events with no toxicokinetic parameters or plasma concentration measurements. |
| PGx | Fowler_2000 | not_relevant | 0 | 0 | The study reports the effect of CYP3A4 site-directed mutations on the binding affinity (Ki) of clotrimazole as an inhibitor, not the pharmacokinetic or pharmacodynamic parameters of clotrimazole itself. |
| popPK | Fromtling_1988 | irrelevant | 0 | 0 | This is a general review/overview of antifungal azoles that describes the presence of pharmacokinetic information but does not report any specific quantitative kinetic parameters for clotrimazole. |
| PGx | Godamudunage_2018 | not_relevant | 0 | 0 | The study compares enzyme isoforms (CYP3A4 vs CYP3A7) across developmental stages, not genetic variants within a population affecting drug PK/PD. |
| popPK | Gosepath_2002 | irrelevant | 1 | 0 | The paper reports on ciliary beat frequency effects (pharmacodynamics/toxicity) rather than any quantitative toxicokinetic parameters such as absorption, distribution, metabolism, or excretion rates. |
| PGx | Govindaswami_2018 | not_relevant | 0 | 0 | The text is an abstract about prematurity prevention and mentions pharmacogenomics generally but does not mention clotrimazole or any specific PK/PD parameters affected by gene variants. |
| popPK | Higashikawa_1999 | irrelevant | 0 | 0 | The paper focuses on the metabolic clearance of midazolam, with clotrimazole used only as a CYP inducer (pretreatment), and no kinetic parameters for clotrimazole itself are reported. |
| PGx | Hofman_2021 | not_relevant | 0 | 0 | The paper focuses on CYP-mediated resistance to chemotherapeutics (docetaxel, paclitaxel, vincristine), with clotrimazole mentioned only as a negative control/inhibitor without any pharmacokinetic or pharmacodynamic data for it. |
| PGx | Hsu_2023 | not_relevant | 0 | 0 | The paper describes structural biology and binding affinities of clotrimazole to CYP enzymes, not pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Hughes_1984 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety of a clotrimazole treatment but contains no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Jensen_2002 | irrelevant | 0 | 0 | The paper is a review about IK channel pharmacology where clotrimazole is mentioned solely as a blocker of this channel, with no toxicokinetic parameters reported. |
| popPK | Kamalam_1992 | irrelevant | 0 | 0 | no_text gate: only 357 chars of text extracted (&lt; 400) |
| PGx | Kanno_2014 | not_relevant | 0 | 0 | The paper identifies a novel inverse agonist for the CAR receptor and mentions clotrimazole only as a known comparator/inverse agonist; it does not report pharmacogenomic effects on clotrimazole's PK or PD parameters. |
| popPK | Karpe_2026 | irrelevant | 1 | 0 | This is a review article focused on the anticancer mechanisms and drug repurposing of clotrimazole, not its quantitative toxicokinetics; no PK parameters are reported. |
| popPK | Kaur_2020 | irrelevant | 0 | 0 | The study reports clinical efficacy, safety, and cost outcomes for dermatophytosis treatment, with no toxicokinetic parameters reported for clotrimazole. |
| PGx | Kennedy_2021 | not_relevant | 0 | 0 | The study investigates the induction of P-glycoprotein expression/activity by clotrimazole in rainbow trout, but does not report on pharmacogenomic variations (gene variants/genotypes) affecting the pharmacokinetics or pharmacodynamics of clotrimazole. |
| popPK | Kizaki_1996 | irrelevant | 0 | 0 | Clotrimazole is used only as a co-exposure agent (CYP450 inhibitor) to study retinoic acid resistance in cell lines, with no kinetic parameters reported for clotrimazole. |
| popPK | Kompanowska-Jezierska_2003 | irrelevant | 0 | 0 | Clotrimazole appears solely as a pharmacological inhibitor/comparator to probe physiological pathways, with no quantitative toxicokinetic parameters reported for clotrimazole itself. |
| popPK | Kowalsky_1991 | irrelevant | 0 | 0 | The paper is a review focused on fluconazole, with clotrimazole mentioned only as a comparator without any kinetic data. |
| PGx | Koyano_2004 | not_relevant | 0 | 0 | Clotrimazole is used as an activator/ligand for the PXR receptor to measure the receptor's transcriptional activity, not as a drug whose PK/PD is altered by the genotype. |
| popPK | Kropf_2016 | irrelevant | 0 | 0 | Clotrimazole is used as an inhibitor to probe ABC transporter function; no kinetic parameters (concentration-time data, half-lives, clearance, etc.) for clotrimazole itself are reported. |
| PGx | Kropf_2016 | not_relevant | 2 | 2 | The study examines the effect of clotrimazole on ABC transporter expression/function in fish embryos, not the effect of a specific gene variant/genotype on clotrimazole PK/PD parameters in humans. |
| popPK | Lang_2004 | irrelevant | 0 | 0 | The paper discusses erythrocyte apoptosis mechanisms and mentions clotrimazole only as a Gardos channel inhibitor reagent, with no toxicokinetic data. |
| popPK | Lapham_2024 | irrelevant | 2 | 8 | The paper reports an enzymatic inhibition constant (IC50) for clotrimazole in vitro, which is not a toxicokinetic disposition parameter (e.g., half-life, clearance, Vd, partition coefficient). |
| PGx | Lapham_2024 | not_relevant | 0 | 0 | The paper reports clotrimazole as a chemical inhibitor of the enzyme UGT2B4 for reaction phenotyping, not as a drug subject to pharmacogenomic variation in its own PK/PD parameters. |
| PGx | Lee_2012 | not_relevant | 0 | 0 | The paper describes computational chemistry modeling of CYP3A4 inhibitor binding free energies and does not involve human genotypes, pharmacogenomics, or clinical PK/PD parameters. |
| PGx | Lemaire_2004 | not_relevant | 0 | 0 | The paper reports the use of clotrimazole as an inducer of CYP3A4/PXR in an in vitro cell assay, but does not investigate how genetic variants affect clotrimazole's pharmacokinetics or pharmacodynamics. |
| popPK | Leroy_2004 | irrelevant | 0 | 0 | The paper studies K(ATP) channel function in alveolar cells using clotrimazole as an experimental inhibitor, with no quantitative toxicokinetic parameters for clotrimazole reported. |
| popPK | Li_2026 | relevant | 4 | 5 | The paper reports in vivo pharmacokinetic results for clotrimazole in mice, but the provided text only contains cumulative release percentages (in vitro) and qualitative residence time; specific PK parameters like AUC or Cmax are likely in omitted figures. |
| PGx | Lille-Langøy_2019 | not_relevant | 1 | 0 | The paper describes zebrafish Pxr genetic variants affecting in vitro ligand binding and reporter gene expression, not pharmacokinetic or pharmacodynamic parameters of clotrimazole in humans. |
| PGx | Lubet_1992 | not_relevant | 1 | 1 | The paper discusses the induction of CYP2B1 enzyme activity by clotrimazole in rat models, which is a pharmacodynamic effect on an enzyme rather than a pharmacokinetic parameter of clotrimazole itself; additionally, it compares rat strains, not human genotypes. |
| popPK | Melefa_2020 | irrelevant | 0 | 0 | The paper reports haematological and biochemical indices (LC50, RBC, ALT, etc.) but contains no toxicokinetic parameters such as half-lives, clearance, or partition coefficients for clotrimazole. |
| popPK | Merino_2003 | irrelevant | 2 | 0 | Clotrimazole is used as an inhibitor/comparator to study the pharmacokinetics of albendazole; no kinetic parameters for clotrimazole itself are reported. |
| popPK | Mertin_1997 | relevant | 6 | 0 | The paper discusses predicted permeability parameters for clotrimazole, but the specific numeric values for these kinetic parameters are not provided in the extracted text. |
| popPK | Mignat_1997 | irrelevant | 0 | 0 | Clotrimazole is mentioned only as a co-administered drug interacting with tacrolimus, with no kinetic parameters for clotrimazole itself. |
| PGx | Monostory_2004 | not_relevant | 1 | 0 | The study reports in vitro enzyme inhibition (pharmacology/toxicology) and does not analyze genetic variants or in vivo pharmacokinetic/pharmacodynamic parameters affected by genotype. |
| PGx | Moody_2015 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of opioid metabolism by azoles (including clotrimazole as the inhibitor), not pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of clotrimazole itself. |
| popPK | Morris_2022 | irrelevant | 0 | 0 | The paper is a clinical case series on voriconazole treatment for yeast infections where clotrimazole is only mentioned as a prior failed therapy, with no toxicokinetic parameters reported. |
| popPK | Nandhagopal_2024 | irrelevant | 0 | 0 | Clotrimazole is only mentioned in the introduction as an example of an imidazole antifungal; the study focuses on a novel derivative (Probe II) and reports no toxicokinetic parameters for clotrimazole. |
| popPK | Okokon_2015 | irrelevant | 0 | 0 | This is a clinical efficacy review for seborrhoeic dermatitis with no toxicokinetic data or parameters. |
| popPK | Oyekan_1998 | irrelevant | 0 | 0 | Clotrimazole is mentioned only as a pharmacological inhibitor of epoxygenase, with no toxicokinetic parameters reported for it. |
| PGx | Paul_2013 | not_relevant | 0 | 0 | The paper discusses triclosan's interaction with nuclear receptors, not clotrimazole, and does not report pharmacogenomic effects on clotrimazole's PK/PD parameters. |
| PGx | Pinne_2016 | not_relevant | 0 | 10 | The paper discusses clotrimazole's ability to activate nuclear receptors (PXR/CAR) in vitro but does not report how gene variants affect clotrimazole's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Prabagar_2007 | relevant | 8 | 1 | The study reports oral bioavailability in rats, which implies kinetic parameters, but the specific numeric values (Cmax, AUC) are only mentioned qualitatively in the abstract without the actual numbers provided in the evidence. |
| PGx | Prajapati_2021 | not_relevant | 0 | 0 | The paper focuses on computational modeling of curcumin's interaction with fungal CYP51B and does not report pharmacogenomic effects on clotrimazole's PK or PD parameters. |
| popPK | Rifai_1995 | relevant | 8 | 3 | The study reports on pharmacokinetics in humans, but the provided evidence text lacks the specific quantitative numeric values for parameters like half-life or clearance, describing trends qualitatively. |
| popPK | Romero_2017 | irrelevant | 0 | 0 | The paper is an in vitro study of erythrophagocytosis; clotrimazole is used solely as a chemical inhibitor (pharmacological tool) to block the Gárdos channel, not as a substance whose toxicokinetics are being studied. |
| PGx | Sahi_2009 | not_relevant | 0 | 0 | Clotrimazole is used as an inducer of CYP2C9 in an in vitro mechanism study, not as the target drug whose PK/PD parameters are being evaluated for genetic effects. |
| PGx | Sahu_2025 | not_relevant | 0 | 0 | The paper studies antifungal resistance in Candida albicans isolates, not human pharmacogenomics affecting clotrimazole PK/PD. |
| PGx | Sam_2011 | not_relevant | 1 | 0 | The study investigates genetic associations with sirolimus (SRL) PK, not clotrimazole; clotrimazole is only mentioned as a covariate for dose adjustment. |
| PGx | Savkur_2003 | not_relevant | 0 | 0 | The paper characterizes splice variants of the human constitutive androstane receptor (hCAR) and their functional activity in reporter assays; it does not report on the pharmacokinetic or pharmacodynamic parameters of clotrimazole. |
| popPK | Shord_2010 | irrelevant | 1 | 0 | The paper reports pharmacokinetic parameters for midazolam (the substrate), not for clotrimazole (the inhibitor/subject). |
| popPK | Sims_2008 | irrelevant | 0 | 0 | The paper focuses on the toxicity and toxicokinetics of TNT in aquatic amphipods, using clotrimazole solely as a CYP450 inhibitor, with no kinetic parameters reported for clotrimazole itself. |
| popPK | Slama_1998 | irrelevant | 1 | 0 | Clotrimazole is only mentioned as a structural reference for novel compounds, and no kinetic parameters for clotrimazole itself are reported. |
| PGx | Smith_2005 | not_relevant | 0 | 0 | The text discusses UGT1A1 modulation in hepatocytes by inducers, mentioning clotrimazole only as an example of a PXR agonist that induces enzyme expression, not as a drug subject to pharmacogenomic analysis. |
| popPK | Sobel_1995 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing outcomes, containing no quantitative toxicokinetic parameters for clotrimazole. |
| popPK | Sohn_1982 | irrelevant | 0 | 0 | The paper is a review of ketoconazole, with clotrimazole mentioned only as a structurally related compound; no kinetic parameters for clotrimazole are reported. |
| popPK | Sreedevi_2026 | irrelevant | 1 | 0 | This is a narrative review on regulatory approaches for topical generics that mentions clotrimazole only as a case study example, without providing any quantitative kinetic parameters. |
| PGx | Svecova_2008 | not_relevant | 2 | 5 | The paper studies in vitro drug-drug interactions and receptor-mediated gene expression induction, not the effect of human genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tolou-Ghamari_2024 | irrelevant | 0 | 0 | The paper is a review of drug interactions for tacrolimus and cyclosporine, where clotrimazole is mentioned only as a co-administered agent affecting the monitoring of the immunosuppressants, with no kinetic data for clotrimazole itself. |
| popPK | Tomarchio_2025 | irrelevant | 0 | 0 | The paper describes a drug delivery hydrogel formulation and antifungal activity, focusing on in vitro release profiles rather than reporting quantitative toxicokinetic parameters (e.g., absorption, distribution, metabolism, excretion) in biological systems. |
| popPK | Tsapepas_2013 | irrelevant | 0 | 0 | Clotrimazole is only mentioned as a co-exposure/interacting agent, and all quantitative pharmacokinetic parameters reported are for tacrolimus, not clotrimazole. |
| popPK | Uno_2018 | irrelevant | 0 | 0 | Clotrimazole is mentioned only as a co-medication, while all pharmacokinetic parameters belong to tacrolimus. |
| PGx | Uno_2018 | not_relevant | 0 | 0 | The study reports the effect of CYP3A5 genotype on tacrolimus PK, not clotrimazole PK/PD; clotrimazole is only mentioned as a concomitant medication. |
| popPK | Uno_2019 | irrelevant | 1 | 0 | Clotrimazole is treated solely as a CYP3A5 inhibitor (co-exposure) altering tacrolimus pharmacokinetics, with no kinetic parameters reported for clotrimazole itself. |
| PGx | Uno_2019 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects of CYP3A5 on the pharmacokinetics of tacrolimus, not clotrimazole. |
| popPK | Uno_2019_2 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| popPK | Uno_2020 | irrelevant | 2 | 0 | Clotrimazole is a perpetrator of drug interaction, but the reported quantitative pharmacokinetic parameters (clearance, half-life/C0 decline) belong to tacrolimus, not clotrimazole. |
| popPK | Vasquez_2005 | irrelevant | 2 | 0 | Clotrimazole is a co-administered inhibitor (co-exposure), and all quantitative kinetic parameters reported are for tacrolimus, not clotrimazole. |
| PGx | Vickers_1995 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics of clotrimazole on the metabolism of SDZ IMM 125, not a pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter of clotrimazole itself. |
| popPK | Vuddhakul_1989 | irrelevant | 0 | 0 | The paper reports on in vitro immunological effects (phagocytosis, lymphocyte response) of clotrimazole and other antifungals, not on quantitative toxicokinetic parameters like clearance, half-life, or partition coefficients. |
| PGx | Walsky_2006 | not_relevant | 0 | 0 | The paper describes clotrimazole as an inhibitor of CYP2B6 in vitro, not as a drug whose PK/PD is affected by gene variants. |
| PGx | Warrilow_2014 | not_relevant | 0 | 0 | The paper compares biochemical binding affinities and enzyme inhibition of a new compound (VT-1161) against clotrimazole and others, but does not investigate pharmacogenomic effects on clotrimazole's PK/PD parameters. |
| PGx | Warrilow_2016 | not_relevant | 0 | 0 | The paper describes the binding affinity and inhibitory potency of clotrimazole on fungal CYP51 enzymes but does not report any pharmacogenomic effects of human gene variants on clotrimazole's PK or PD parameters. |
| PGx | Wings_2022 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between clotrimazole and tacrolimus, not a pharmacogenomic effect of a gene variant on a PK/PD parameter of clotrimazole itself. |
| PGx | Yamazoe_2020 | not_relevant | 0 | 0 | The paper discusses structural modeling of CYP3A4 interactions with ligands, including clotrimazole as an inhibitor, but does not report any pharmacogenomic (gene variant) effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yan_2015 | irrelevant | 0 | 0 | Clotrimazole is used solely as an internal standard for the analysis of HZ08, and no kinetic parameters for clotrimazole are reported. |
| popPK | Yeganeh_2000 | irrelevant | 0 | 0 | Clotrimazole is used only as an internal standard for the assay of terbinafine, and no toxicokinetic data for clotrimazole are reported. |
| popPK | Yin_2026 | irrelevant | 0 | 0 | The paper is a general review of azole antifungals; the only quantitative parameter mentioned for clotrimazole is logP (physicochemical), which is not a toxicokinetic parameter, and no kinetic values are reported. |
| PGx | Zangar_2000 | not_relevant | 0 | 0 | The paper discusses CCl4 metabolism and the inhibitory effect of clotrimazole on CYP enzymes, not the effect of genetic variants on clotrimazole's own PK/PD parameters. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper studies the transcriptional regulation of the chicken Abcg2 gene by various drugs including clotrimazole, but reports no toxicokinetic parameters (e.g., rates, volumes, half-lives) for clotrimazole itself. |
| PGx | Zhao_2021 | not_relevant | 0 | 0 | The study investigates the inhibition of the enzyme hCE2 by clotrimazole in microsomes, but does not assess how any gene variant or genotype affects clotrimazole's own PK or PD parameters. |
| PGx | de_2001 | not_relevant | 0 | 0 | The paper reports the development of an analytical method (HPLC) for ketoconazole, using clotrimazole only as an internal standard; it does not investigate clotrimazole pharmacokinetics or pharmacogenomics. |
| PGx | van_2022 | not_relevant | 1 | 0 | The paper discusses clotrimazole only as a compound identified to potentiate statin-induced cell death in breast cancer models; it does not investigate any gene variant effects on clotrimazole's own pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclotrimazole%5D&body=Drug%3A%20clotrimazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_clotrimazole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-17 15:29 UTC</sub>
