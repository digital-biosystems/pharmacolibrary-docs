<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Disulfiram&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Disulfiram_Lanz2023_reference&quot;,&quot;label&quot;:&quot;Lanz_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_disulfiram/Disulfiram_Lanz2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Disulfiram

- **generic name:** Disulfiram
- **T3DB:** [T3D2557](http://www.t3db.ca/toxins/T3D2557) · **DrugBank:** [DB00822](https://go.drugbank.com/drugs/DB00822) · **PubChem:** [CID 3117](https://pubchem.ncbi.nlm.nih.gov/compound/3117)
- **groups:** approved, investigational

## About

A carbamate derivative used as an alcohol deterrent. It is a relatively nontoxic substance when administered alone, but markedly alters the intermediary metabolism of alcohol. When alcohol is ingested after administration of disulfiram, blood acetaldehyde concentrations are increased, followed by flushing, systemic vasodilation, respiratory difficulties, nausea, hypotension, and other symptoms (acetaldehyde syndrome). …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** inhalation (MSDS, A308), ingestion (MSDS, A308), dermal (MSDS, A308), eye contact (MSDS, A308)
Disulfiram is absorbed slowly from the gastrointestinal tract (80 to 90% of oral dose).
- **Sources and uses:** For the treatment and management of chronic alcoholism.
- **Mechanism of toxicity:** Disulfiram blocks the oxidation of alcohol at the acetaldehyde stage during alcohol metabolism following disulfiram intake causing an accumulation of acetaldehyde in the blood producing highly unpleasant symptoms. Disulfiram blocks the oxidation of alcohol through its irreversible inactivation of aldehyde dehydrogenase, which acts in the second step of ethanol utilization. …
- **Health effects:** Occasionally implicated in producing psychosis, optic neuritis, and encephalopathy. Hematologic, neuromuscular, and gastrointestinal toxicity and hepatotoxicity may occur 10 days to 12 months after therapy is begun.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.
- **Acute toxicity:** LD50: 8.6g/kg (oral, rat).

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2557">T3DB T3D2557</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 97-77-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:4659">ChEBI 4659</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 6-hydroxychlorzoxazone | metabolite | 185.563 | C7H4ClNO3 | PubChem | [2734](https://pubchem.ncbi.nlm.nih.gov/compound/2734) | Emery_1999 |
| Chlorzoxazone | metabolite | 169.564 | C7H4ClNO2 | PubChem | [2733](https://pubchem.ncbi.nlm.nih.gov/compound/2733) | Emery_1999 |

## Start here

> **Lanz_2023_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/toxin_disulfiram/Disulfiram_Lanz2023_reference.md?tab=Simulation) · [record](drugs/toxin_disulfiram/Disulfiram_Lanz2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human + animal" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Lanz_2023_reference](drugs/toxin_disulfiram/Disulfiram_Lanz2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Lanz J et al., Disulfiram: Mechanisms, Applications, a…, Antibiotics (Basel, Switzer… (2023) | [10.3390/antibiotics12030524](https://doi.org/10.3390/antibiotics12030524) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Emery_1999_reference](drugs/toxin_disulfiram/Disulfiram_Emery1999_reference.md) | — | general linear (no model) | 3 | Emery MG et al., Duration of cytochrome P-450 2E1 (CYP2E…, The Journal of pharmacology… (1999) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lee_2019_reference](drugs/toxin_disulfiram/Disulfiram_Lee2019_reference.md) | — | 1-compartment (no model) | 0 | Lee SA et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1220](https://doi.org/10.1002/cpt.1220) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 0.99).">mouse</span> | [Kim_1985_LD50](drugs/toxin_disulfiram/pd_Kim_1985_LD50.md) | lobeline sulfate toxicity (LD50) ← disulfiram · model not identified | — | Kim HL, Effects of SKF 525-A, phenobarbital and…, Veterinary and human toxico… (1985) | — |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">rat</span> | [Kalinina_1988_GSH](drugs/toxin_disulfiram/pd_Kalinina_1988_GSH.md) | glutathione content biomarker turnover ← disulfiram | — | Kalinina EV et al., [Disulfiram and butylhydroxyanisole ind…, Farmakologiia i toksikologi… (1988) | — |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">rat</span> | [Kalinina_1988_GST](drugs/toxin_disulfiram/pd_Kalinina_1988_GST.md) | glutathione-S-transferase activity biomarker turnover ← disulfiram | — | Kalinina EV et al., [Disulfiram and butylhydroxyanisole ind…, Farmakologiia i toksikologi… (1988) | — |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">rat</span> | [Kalinina_1988_ST](drugs/toxin_disulfiram/pd_Kalinina_1988_ST.md) | sulfotransferase activity biomarker turnover ← disulfiram | — | Kalinina EV et al., [Disulfiram and butylhydroxyanisole ind…, Farmakologiia i toksikologi… (1988) | — |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">rat</span> | [Kalinina_1988_UDP_GT](drugs/toxin_disulfiram/pd_Kalinina_1988_UDP_GT.md) | UDP glucuronosyltransferase activity biomarker turnover ← disulfiram | — | Kalinina EV et al., [Disulfiram and butylhydroxyanisole ind…, Farmakologiia i toksikologi… (1988) | — |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Lee_2019_CA_US](drugs/toxin_disulfiram/pd_Lee_2019_CA_US.md) | cell-associated unspliced (CA-US) ← Disulfiram · direct Emax (saturable) effect | model (no simulator) | Lee SA et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1220](https://doi.org/10.1002/cpt.1220) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Elliott_2015_CA_US_RNA](drugs/toxin_disulfiram/pd_Elliott_2015_CA_US_RNA.md) | change in cell-associated unspliced HIV RNA in CD4 cells · stimulation effect | — | Elliott JH et al., Short-term administration of disulfiram…, The lancet. HIV (2015) | [10.1016/s2352-3018(15)00226-x](https://doi.org/10.1016/s2352-3018(15)00226-x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=disulfiram).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `ALDH2` inhibitor, `CYP2E1` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ALDH3A2 (inhibitor), DBH (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 19:58 | 1:07:09 | 1/2/0 | 3/1/0 | 0/0/0 | 1,048,678/114,249 | einfracz / qwen3.8-flash-next | 34 | 5/18 | 34/0 | 0 |

## Coverage

- **PubMed hits:** 323 matched, 234 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2013.pdf` | Zhang L et al., A novel UPLC-ESI-MS/MS method for the q…, Journal of chromatography.… (2013) | popPK | 10 | [10.1016/j.jchromb.2013.08.009](https://doi.org/10.1016/j.jchromb.2013.08.009) | [24013191](https://pubmed.ncbi.nlm.nih.gov/24013191) | The evidence explicitly states the extraction recovery percentages (75.7% to 78.3%) and precision/accuracy metrics for the disulfiram assay applied to rat plasma, providing numeric data relevant to the method's performance for this specific substance and species, even if full PK parameters (like t1/2) are not listed in the snippet. |
| `Lee_2019.pdf` | Lee SA et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2019) | popPK | 9 | [10.1002/cpt.1220](https://doi.org/10.1002/cpt.1220) | [30137649](https://pubmed.ncbi.nlm.nih.gov/30137649) | Reports a population PK model of disulfiram in humans with quantitative AUC and Emax/AUC50 parameters. |
| `Miao_2018.pdf` | Miao L et al., mPEG5k- b-PLGA2k/PCL3.4k/MCT Mixed Mice…, Molecular pharmaceutics (2018) | popPK | 9 | [10.1021/acs.molpharmaceut.7b01094](https://doi.org/10.1021/acs.molpharmaceut.7b01094) | [29505711](https://pubmed.ncbi.nlm.nih.gov/29505711) | The paper reports pharmacokinetic improvements (Cmax, bioavailability) for disulfiram in a H22 xenograft tumor model, but the specific numeric values for the kinetic parameters are likely in the full text or supplementary tables which are not included in the provided abstract/evidence snippet (only relative fold-changes are given). |
| `Emery_1999.pdf` | Emery MG et al., Duration of cytochrome P-450 2E1 (CYP2E…, The Journal of pharmacology… (1999) | popPK | 8 |  | [10490907](https://pubmed.ncbi.nlm.nih.gov/10490907) | The paper reports a degradation half-life for the target enzyme inhibited by disulfiram and confirms rapid excretion of a disulfiram metabolite, establishing the duration of the toxicokinetic effect in humans. |
| `Silveira_2026.pdf` | Silveira GPE et al., Randomized Study About Influence of Foo…, European journal of drug me… (2026) | popPK | 8 | [10.1007/s13318-026-01022-0](https://doi.org/10.1007/s13318-026-01022-0) | [42429921](https://pubmed.ncbi.nlm.nih.gov/42429921) | The paper reports pharmacokinetic parameters (Cmax, AUC) for disulfiram metabolites in humans, but the specific numeric values are not present in the provided evidence text, which only describes relative percentage increases and qualitative trends. |
| `Zhuo_2018.pdf` | Zhuo X et al., Disulfiram-loaded mixed nanoparticles w…, Journal of colloid and inte… (2018) | popPK | 8 | [10.1016/j.jcis.2018.05.057](https://doi.org/10.1016/j.jcis.2018.05.057) | [29883928](https://pubmed.ncbi.nlm.nih.gov/29883928) | The paper reports pharmacokinetic data (blood concentration enhancement) for disulfiram in an animal tumor model, but the actual numeric kinetic parameters are not present in the provided evidence, only mentioned in the abstract. |
| `Baselt_1982.pdf` | Baselt RC et al., Efficacy of orally-administered chelati…, Research communications in… (1982) | popPK | 5 |  | [6293022](https://pubmed.ncbi.nlm.nih.gov/6293022) | The abstract qualitatively describes disulfiram's plasma level profile ("very high but transient") and tissue distribution effects in rats, but provides no quantitative kinetic parameters (e.g., half-lives, clearance values) in the provided text. |

<sub>queue written 2026-11-14 19:19 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_1984 | irrelevant | 0 | 0 | Disulfiram is mentioned only as a drug that inhibits benzodiazepine oxidation; the paper contains no toxicokinetic parameters for disulfiram itself. |
| popPK | Alsaad_2014 | irrelevant | 1 | 0 | This is a review article discussing potential drug repurposing for TB, not a primary study reporting specific kinetic parameters for disulfiram, and it contains no numeric values. |
| popPK | Andersen_1989 | irrelevant | 2 | 0 | The study reports kinetic parameters (absorption, distribution, excretion) for cadmium, not disulfiram; disulfiram is only a co-exposure altering cadmium kinetics, and no specific numeric kinetic parameters for disulfiram itself are provided. |
| popPK | Andersson_1981 | irrelevant | 0 | 0 | The paper discusses nitroimidazoles, mentioning disulfiram only in the context of a disulfiram-like reaction as a side effect, not as a subject of kinetic study. |
| PGx | Argüello-García_2021 | not_relevant | 0 | 0 | The text discusses disulfiram as a compound targeting Giardia virulence factors but does not report any pharmacokinetic or pharmacodynamic parameters influenced by gene variants/genotypes. |
| PGx | Arias_2014 | not_relevant | 2 | 1 | The study reports associations between genotypes and clinical outcomes (drinking metrics, abstinence) rather than changes in specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., enzyme activity inhibition) parameters of disulfiram. |
| popPK | Baker_2007 | irrelevant | 1 | 0 | The paper reports pharmacokinetic parameters for cocaine (clearance, AUC) in the presence of disulfiram, but contains no quantitative toxicokinetic parameters for disulfiram itself. |
| popPK | Barriere_1984 | irrelevant | 0 | 0 | Disulfiram is mentioned only as a reference to the disulfiram-like reaction (adverse effect) of certain cephalosporins, with no kinetic data for disulfiram itself. |
| popPK | Barth_2010 | irrelevant | 0 | 0 | The paper is a review article with no primary quantitative kinetic parameters or numeric values provided in the extracted evidence. |
| popPK | Baselt_1982 | relevant | 5 | 1 | The abstract qualitatively describes disulfiram's plasma level profile ("very high but transient") and tissue distribution effects in rats, but provides no quantitative kinetic parameters (e.g., half-lives, clearance values) in the provided text. |
| popPK | Beach_1986 | irrelevant | 1 | 0 | The paper reports kinetic parameters for caffeine, not disulfiram; disulfiram is only the inhibitor/co-exposure agent with no kinetic parameters provided for it. |
| PGx | Bell_2012 | not_relevant | 1 | 0 | The text is an editorial introduction/summary that mentions disulfiram and pharmacogenomics in a general context but reports no specific data, tables, or fitted effect sizes for how a gene variant changes a PK or PD parameter. |
| popPK | Boothby_2005 | irrelevant | 0 | 0 | Disulfiram is mentioned only as one of three FDA-approved drugs for alcohol dependence in the background; the paper reports pharmacokinetic parameters for acamprosate, not disulfiram. |
| popPK | Brewer_1993 | irrelevant | 0 | 0 | The paper is a review of clinical treatment and pharmacokinetics without reporting primary quantitative kinetic parameters, and no numerical values are present in the evidence. |
| popPK | Brien_1983 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| popPK | Brock_1984 | irrelevant | 0 | 0 | The paper mentions disulfiram qualitatively regarding its elimination mechanism but provides no quantitative kinetic parameters or numerical data in the text. |
| popPK | Brünen_2011 | irrelevant | 1 | 0 | The paper is a literature review and methodology study regarding therapeutic drug monitoring rating scales, providing no specific kinetic parameter values for disulfiram. |
| PGx | Caputo_2014 | not_relevant | 1 | 0 | The text is a general abstract discussing pharmacogenetics in alcohol dependence but does not report any specific gene variants affecting disulfiram's PK or PD parameters. |
| popPK | Chen_2008 | irrelevant | 0 | 0 | The paper discusses anticancer mechanisms of disulfiram but provides no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Cheng_2017 | irrelevant | 0 | 0 | Disulfiram is used as a pharmacological tool to inhibit an enzyme (DBH) in shrimp, but no toxicokinetic parameters of disulfiram itself are measured or reported. |
| popPK | Ciraulo_1985 | irrelevant | 2 | 0 | The paper reports pharmacokinetic parameters for imipramine and desipramine (the co-administered drugs), not for disulfiram itself; no kinetic parameters for disulfiram are presented. |
| popPK | Cornford_1979 | irrelevant | 2 | 0 | The subject substance is tryptophol (a metabolite formed after disulfiram treatment), not disulfiram itself; no kinetic parameters for disulfiram are reported. |
| PGx | Corsello_2020 | not_relevant | 3 | 3 | The paper reports a pharmacodynamic association (cell viability) between disulfiram toxicity and metallothionein gene expression levels, but does not define a specific genetic variant/phenotype in a patient population or provide fitted PK/PD parameter changes (e.g., clearance, AUC) for disulfiram. |
| popPK | Crabbe_2017 | irrelevant | 0 | 0 | The paper explicitly states that disulfiram was excluded from the study, so no kinetic parameters are reported. |
| popPK | Cui_2005 | irrelevant | 0 | 0 | Disulfiram appears only as a pharmacological inhibitor of aldehyde dehydrogenase to study NDPS metabolism, with no kinetic parameters reported for disulfiram itself. |
| popPK | Cvek_2008 | irrelevant | 1 | 0 | The provided text is a general review/abstract describing disulfiram's anticancer properties and states its pharmacokinetics are "well known" without reporting any specific numeric kinetic parameters. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | Disulfiram is mentioned only as a drug with which lopinavir/ritonavir has a contraindication, with no kinetic data for disulfiram itself. |
| PGx | Damkier_1999 | not_relevant | 0 | 0 | The study investigates the effect of drugs (including disulfiram) on the pharmacokinetics of quinidine, not the effect of gene variants on disulfiram's PK/PD. |
| popPK | DiPiro_1988 | irrelevant | 0 | 0 | Disulfiram is mentioned only as a comparator for describing an adverse reaction type ("disulfiram-like reactions"), with no kinetic parameters reported for disulfiram itself. |
| popPK | Diquet_1990 | irrelevant | 1 | 0 | The paper investigates disulfiram's effect on the pharmacokinetics of alprazolam (the subject substance), reporting no kinetic parameters for disulfiram itself. |
| popPK | Dorokhov_2018 | irrelevant | 1 | 0 | The paper is a review on formaldehyde metabolism where disulfiram is only mentioned as a potential therapeutic agent, with no reported toxicokinetic parameters or quantitative data for disulfiram. |
| popPK | Doroshyenko_2009 | irrelevant | 0 | 0 | The paper investigates acrylamide toxicokinetics, with disulfiram used solely as a CYP2E1 inhibitor comparator, not as the subject of kinetic analysis. |
| popPK | Dubey_2022 | irrelevant | 1 | 0 | The paper reports antibiotic synergy and MIC/IC50 values for bacterial enzyme inhibition, not toxicokinetic parameters of disulfiram. |
| popPK | Elenbaas_1982 | irrelevant | 1 | 9 | The paper studies moxalactam's disulfiram-like activity and ethanol/acetaldehyde kinetics, not the toxicokinetics of disulfiram itself. |
| popPK | Elliott_2015 | irrelevant | 1 | 0 | The paper reports pharmacodynamic outcomes (HIV RNA levels) but no toxicokinetic parameters for disulfiram. |
| popPK | Farooq_2019 | irrelevant | 2 | 0 | The text is a review of drug delivery systems with no specific numeric kinetic parameters for disulfiram provided in the evidence. |
| popPK | Fisher_2008 | irrelevant | 0 | 0 | The paper studies the effect of ethanol's metabolite acetaldehyde on drug transport, with disulfiram used solely as an experimental comparator/co-administration to inhibit alcohol dehydrogenase, not as the kinetic subject. |
| popPK | Forman_1980 | irrelevant | 2 | 0 | The paper reports pharmacodynamic effects (enzyme inhibition time-course) and lethality rates, but provides no quantitative toxicokinetic parameters such as half-life, clearance, volume of distribution, or metabolite kinetics. |
| popPK | Fraser_1997 | irrelevant | 1 | 0 | The paper is a review of alcohol-drug interactions where disulfiram is mentioned only as a comparator for disulfiram-like reactions, with no kinetic parameters reported. |
| PGx | Frye_1999 | not_relevant | 0 | 0 | The study investigates the drug-drug interaction where disulfiram acts as an inhibitor of CYP2E1 affecting the pharmacokinetics of a different drug (vesnarinone), rather than reporting how genetic variants affect the pharmacokinetics or pharmacodynamics of disulfiram itself. |
| PGx | Frye_2002 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions/enzyme inhibition by disulfiram, not on the effect of genetic variants on disulfiram's PK or PD parameters. |
| PGx | Glauser_1993 | not_relevant | 3 | 2 | The paper identifies enzymes (TMT/TPMT) and establishes correlations between enzyme activity and metabolite formation, but does not report specific pharmacogenomic variants (genotypes/phenotypes) or their quantitative effect on PK/PD parameters of disulfiram/DDC. |
| PGx | Goh_2017 | not_relevant | 0 | 0 | The paper is a general review of pharmacotherapies for alcohol dependence and does not report specific pharmacogenomic effects on PK or PD parameters for disulfiram. |
| popPK | Gou_2015 | irrelevant | 0 | 0 | The paper focuses on drug loading into polymeric micelles and formulation characterization, not on toxicokinetic parameters of disulfiram in a biological system. |
| popPK | Greenblatt_1978 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of chlordiazepoxide, citing disulfiram only as a drug interaction agent that alters chlordiazepoxide's clearance, with no kinetic parameters for disulfiram itself. |
| popPK | Greenblatt_1980 | irrelevant | 0 | 0 | Disulfiram appears solely as a co-exposure affecting benzodiazepine clearance; the paper reports kinetic parameters for benzodiazepines, not disulfiram. |
| popPK | Guerzoni_2018 | irrelevant | 0 | 0 | The paper is a comprehensive review of drug-drug interactions and does not report primary quantitative toxicokinetic parameters for disulfiram. |
| popPK | Guillot_2019 | irrelevant | 0 | 0 | Disulfiram is mentioned only as a comparator/known drug context; the study measures acetaldehyde levels in mice, not kinetic parameters of disulfiram itself. |
| popPK | Gurung_2022 | irrelevant | 0 | 0 | The paper reports computational binding energies to albumin, not toxicokinetic parameters like clearance, half-life, or partition coefficients for disulfiram. |
| popPK | Haass-Koffler_2017 | irrelevant | 1 | 0 | This is a review discussing ethanol pharmacokinetics with disulfiram mentioned only as a clinical comparator, containing no quantitative toxicokinetic parameters for disulfiram itself. |
| PGx | Hahl-Häkkinen_2023 | not_relevant | 1 | 2 | The study focuses on a drug-drug interaction (disulfiram inhibiting CYP1A2 metabolism of clozapine), not a pharmacogenomic effect of a gene variant on disulfiram's PK or PD. |
| PGx | Haile_2009 | not_relevant | 3 | 0 | The paper mentions a gene variant (DbetaH SNP) associated with paranoia (a PD adverse event) during disulfiram use for cocaine addiction, but does not quantify the effect size, nor does it report pharmacokinetic parameters of disulfiram itself. |
| PGx | Helander_1994 | not_relevant | 1 | 2 | The paper discusses pharmacogenomic influences on ethanol metabolism but only mentions that disulfiram interferes with a biomarker (5HTOL/5HIAA ratio) without reporting any specific PK/PD parameters for disulfiram or its genotype-dependent effects. |
| PGx | Helton_2015 | not_relevant | 5 | 2 | The provided text is an abstract of a review article; while it mentions pharmacogenetic findings for disulfiram, it does not report specific quantitative effects on PK/PD parameters itself, only summarizing existing literature without providing the data within the text. |
| popPK | Hochreiter_2012 | irrelevant | 2 | 1 | The paper is an analytical method validation for quantifying a disulfiram metabolite in human plasma and does not report specific toxicokinetic parameters (half-life, clearance, etc.), only assay performance metrics and dose ranges. |
| PGx | Hultsch_2018 | not_relevant | 1 | 0 | The paper discusses disulfiram as a potential therapeutic agent for tamoxifen-resistant cells but does not report any pharmacogenomic effect of gene variants on disulfiram's PK or PD parameters. |
| popPK | Igwe_1986 | irrelevant | 1 | 0 | Disulfiram is used only as a pretreatment modulator for the toxicokinetics of ethylene dichloride (EDC), not as the subject substance being modeled. |
| popPK | Igwe_1986_2 | irrelevant | 0 | 0 | The kinetic parameters (Km, Vmax) describe 1,2-dichloroethane disposition in rats; disulfiram is only a pretreatment agent, not the substance characterized. |
| PGx | J_2019 | not_relevant | 2 | 1 | The study reports purely in silico molecular docking and dynamics results regarding binding affinity/stability, not experimental pharmacokinetic or pharmacodynamic parameters in humans or animals. |
| popPK | Jiao_2016 | irrelevant | 1 | 0 | The paper is a review of disulfiram's anticancer mechanisms with no quantitative kinetic parameters provided. |
| popPK | Johansson_1992 | irrelevant | 2 | 0 | The text is an abstract of a review article that describes mechanisms qualitatively but provides no specific numeric kinetic parameters for disulfiram itself. |
| popPK | Juřica_2025 | irrelevant | 0 | 0 | The text discusses alcohol-drug interactions and mentions the disulfiram reaction generally, but contains no quantitative toxicokinetic parameters or disposition data for disulfiram. |
| popPK | Kanuri_2026 | irrelevant | 0 | 0 | The paper investigates disulfiram's pharmacological effect on lipid metabolism and obesity mechanisms in mice, but does not report toxicokinetic parameters such as half-life, clearance, Vmax/Km, or partition coefficients. |
| PGx | Kenna_2004 | not_relevant | 0 | 0 | The text is a general review of alcohol dependence treatments and mentions disulfiram only in the context of general efficacy; it does not report specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Kenna_2004_2 | not_relevant | 0 | 0 | The text is a general review of pharmacotherapies for alcohol dependence and mentions pharmacogenomics only as a future research direction, without reporting specific gene-drug interaction data for disulfiram. |
| popPK | Kharasch_1993 | irrelevant | 2 | 1 | The paper reports kinetic parameters (clearance, half-life) for the probe drug chlorzoxazone, not for disulfiram itself; disulfiram is only used as an inhibitor/co-exposure. |
| popPK | Kharasch_1999 | irrelevant | 2 | 8 | The paper reports the pharmacokinetic parameters (clearance, metabolic ratios) of probe drugs (tolbutamide, mephenytoin, etc.) to assess CYP activity, not kinetic parameters of disulfiram itself (e.g., its own half-life or Vd). |
| PGx | Kharasch_2000 | not_relevant | 0 | 0 | Disulfiram is mentioned only as a CYP2E1 inhibitor used to study halothane metabolism; the study does not investigate genetic effects on disulfiram's PK/PD. |
| popPK | Koubek_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for NSC 161128, not disulfiram; disulfiram is not mentioned in the provided text. |
| PGx | Kranzler_2018 | not_relevant | 0 | 0 | The text is a general review of Alcohol Use Disorder treatments and explicitly states there is insufficient evidence for pharmacogenetics, providing no specific data on gene variants affecting disulfiram PK/PD. |
| PGx | Kravljanac_2026 | not_relevant | 0 | 0 | The drug disulfiram is used as a treatment, but the gene variant (ADSL) explains the disease pathology, not the pharmacokinetics or pharmacodynamics of the drug itself. |
| PGx | Langhammer_2014 | not_relevant | 1 | 2 | Disulfiram is used only as a positive control in an in vitro CYP inhibition assay; no pharmacogenomic effect on its PK/PD is reported. |
| popPK | Lassman_1992 | irrelevant | 1 | 0 | Disulfiram is only mentioned as a type of symptom ("disulfiram-like"), and no kinetic parameters for disulfiram itself are reported or extracted. |
| popPK | LeBoeuf_1987 | irrelevant | 0 | 0 | The paper focuses on the deacetylation of diltiazem; disulfiram is only used as an inhibitor in an enzyme assay and is not the subject of kinetic parameter estimation. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper discusses disulfiram as a metabolism-dependent inhibitor of CYP enzymes, not as a substrate affected by genetic variants; no pharmacogenomic PK/PD data for disulfiram is reported. |
| PGx | Lehner_2024 | not_relevant | 0 | 0 | This is a review article discussing ethanol metabolism and ALDH2 polymorphisms' role in AUD risk; it mentions disulfiram only as a general ALDH2 inhibitor without reporting specific pharmacogenomic data on its PK or PD parameters. |
| PGx | Lennard_1998 | not_relevant | 1 | 0 | The text mentions a potential interaction involving TPMT and disulfiram's metabolite but provides no empirical data, pharmacogenomic effect sizes, or PK/PD parameter changes regarding disulfiram. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | Disulfiram is mentioned only as an inhibitor of CYP2C9 affecting Phenytoin metabolism; no pharmacogenomic effect on a disulfiram PK/PD parameter is reported. |
| popPK | Levy_2003 | irrelevant | 2 | 0 | The paper is a literature review summarizing drug interactions, with no specific kinetic parameters for disulfiram provided in the text. |
| PGx | Liu_2003 | not_relevant | 0 | 0 | The paper discusses retinoic acid metabolism in ferrets and mentions disulfiram only as a CYP inhibitor used in vitro, without reporting any pharmacogenomic effects on disulfiram's own PK or PD parameters. |
| popPK | Loft_1986 | irrelevant | 1 | 0 | The paper reports the effect of disulfiram on the kinetics of antipyrine (the probe drug), not the kinetic parameters of disulfiram itself. |
| popPK | Loi_1989 | irrelevant | 0 | 0 | The paper reports the kinetic parameters of theophylline (the object drug), not disulfiram; disulfiram is the inhibitor/comparator. |
| popPK | MacLeod_1978 | irrelevant | 1 | 0 | The paper studies the toxicokinetics of benzodiazepines (chlordiazepoxide, diazepam, oxazepam) affected by disulfiram, not the toxicokinetics of disulfiram itself. |
| PGx | Madan_1995 | not_relevant | 3 | 0 | The paper identifies metabolizing enzymes (CYP450s) but does not report effects of specific gene variants, genotypes, or phenotypes on pharmacokinetic parameters; it discusses enzyme contribution and chemical inhibition, not pharmacogenomics. |
| popPK | Mahmoud_1993 | irrelevant | 0 | 0 | The paper studies a different compound (DEAB) and mentions disulfiram only as a comparator for inhibition efficacy, reporting no kinetic parameters for disulfiram. |
| PGx | Manyike_2000 | not_relevant | 1 | 0 | The study uses disulfiram as a chemical inhibitor of CYP2E1 to investigate acetaminophen metabolism, not to assess the pharmacogenomic effects of gene variants on disulfiram's own PK or PD. |
| popPK | Marshall_2026 | irrelevant | 1 | 0 | The paper focuses on a novel compound SOPH-110S; disulfiram is mentioned only as a comparator/background context, and no kinetic parameters for disulfiram are reported. |
| popPK | Martínez-Riera_2019 | irrelevant | 0 | 0 | The paper studies soy isoflavones and alcohol; disulfiram is only mentioned as a comparator for disulfiram-like reactions, with no kinetic parameters for disulfiram itself. |
| popPK | Matsubara_1987 | irrelevant | 1 | 0 | The paper reports kinetics for latamoxef and NMTT causing disulfiram-like effects, not for disulfiram itself, and contains no numeric parameters in the text. |
| popPK | Matsubara_2002 | irrelevant | 0 | 0 | Disulfiram is mentioned only in the context of describing a "disulfiram-like reaction" caused by cephem antibiotics, with no kinetic parameters for disulfiram itself reported. |
| popPK | McCance-Katz_1998 | irrelevant | 3 | 1 | The paper describes an interaction study focusing on cocaine kinetics; while it notes disulfiram effects, no specific kinetic parameters for disulfiram itself are provided in the evidence. |
| popPK | McCance-Katz_2014 | irrelevant | 3 | 0 | The study reports pharmacokinetic interactions (drug-drug interaction on metabolite levels and enzyme activity) but does not report specific quantitative toxicokinetic parameters (half-life, clearance, Vd) for disulfiram in the text. |
| PGx | Meeley_1991 | not_relevant | 1 | 0 | The paper discusses disulfiram as an inhibitor of a plant enzyme involved in toxin detoxification, not as a drug with pharmacokinetic or pharmacodynamic parameters modulated by human genetic variants. |
| popPK | Mergenhagen_2020 | irrelevant | 1 | 0 | The paper is a systematic review of alcohol-antibiotic interactions where disulfiram is discussed only as a comparator for disulfiram-like reactions, with no quantitative kinetic parameters for disulfiram itself. |
| popPK | Miao_2018 | relevant | 9 | 2 | The paper reports pharmacokinetic improvements (Cmax, bioavailability) for disulfiram in a H22 xenograft tumor model, but the specific numeric values for the kinetic parameters are likely in the full text or supplementary tables which are not included in the provided abstract/evidence snippet (only relative fold-changes are given). |
| PGx | Mitra_1995 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction where disulfiram inhibits dapsone metabolism, not a pharmacogenomic effect of a gene variant on disulfiram's PK/PD parameters. |
| popPK | Mittal_2017 | irrelevant | 0 | 0 | The paper focuses on the effects of an ALDH activator (alda-1) and acetaldehyde on bone growth; disulfiram is only mentioned as historical context for an ALDH inhibitor causing bone loss, with no quantitative kinetic parameters for disulfiram itself. |
| popPK | Moore_1998 | irrelevant | 1 | 0 | The paper reports structural data on sheep ALDH1, mentioning disulfiram only qualitatively regarding reaction speed and tunnel size, with no quantitative kinetic parameters (Km, Vmax, rates) for disulfiram itself. |
| PGx | Mutschler_2013 | not_relevant | 1 | 0 | The text is a general review summary that mentions pharmacogenetics only in the context of improving treatment safety options, but provides no data on how specific gene variants affect disulfiram's PK or PD parameters. |
| popPK | Najlah_2025 | irrelevant | 1 | 0 | The paper focuses on the synthesis, chemical stability, and cytotoxicity (IC50) of novel saccharide-linked DDC prodrugs, reporting no toxicokinetic parameters (half-life, clearance, volume of distribution, etc.) for disulfiram. |
| popPK | Nielsen_1994 | irrelevant | 1 | 8 | The paper investigates the effect of disulfiram on the toxicokinetics of nickel, treating disulfiram as an intervention rather than the subject of kinetic parameterization. |
| popPK | Nishigaki_1985 | irrelevant | 0 | 0 | The extracted evidence contains only GROBID processing metadata and no scientific text, abstract, or data. |
| popPK | Oskarsson_1984 | irrelevant | 1 | 2 | The paper reports kinetic parameters (brain uptake ratios, excretion percentages) for LEAD, not disulfiram; disulfiram is only a co-administered agent influencing lead kinetics. |
| popPK | Oskarsson_1986 | irrelevant | 2 | 0 | The paper studies lead kinetics and neurotoxicity with disulfiram as a modifying agent/co-exposure, reporting no quantitative kinetic parameters for disulfiram itself. |
| popPK | Oskarsson_1987 | irrelevant | 1 | 0 | Disulfiram is used as a co-exposure/modulator to study lead toxicokinetics, not as the subject substance with reported kinetic parameters. |
| popPK | Oskarsson_1987_2 | irrelevant | 0 | 0 | The paper studies the effect of disulfiram on the tissue distribution and excretion of LEAD, reporting no kinetic parameters for disulfiram itself. |
| popPK | Oskarsson_1987_3 | irrelevant | 2 | 1 | The study reports qualitative histopathological outcomes (inclusion bodies) rather than quantitative toxicokinetic parameters for disulfiram. |
| popPK | Oskarsson_1989 | irrelevant | 0 | 0 | The paper reports on biochemical effects (ALAD activity, ALA excretion) of lead and disulfiram co-exposure but does not provide quantitative toxicokinetic parameters for disulfiram itself. |
| popPK | Parise_2013 | irrelevant | 2 | 2 | Disulfiram is used only as an enzyme inhibitor (co-exposure) to study the pharmacokinetics of a different drug (BEN); no kinetic parameters for disulfiram itself are reported. |
| PGx | Pentiuk_2004 | not_relevant | 1 | 0 | The text is a general review of CYP2E1 physiology and pathology, mentioning disulfiram only as an inhibitor example without reporting any specific gene variant effects on disulfiram PK/PD parameters. |
| PGx | Pike_2001 | not_relevant | 0 | 0 | The paper characterizes the enzymatic activity of FMO1 and other CYPs in kidney microsomes but does not test pharmacogenomic variants or report genotype-specific changes in PK/PD parameters. |
| popPK | Plotnick_1979 | irrelevant | 1 | 0 | Disulfiram is a co-exposure agent modifying the toxicokinetics of 1,2-dibromoethane; no kinetic parameters for disulfiram itself are reported. |
| popPK | Pyakurel_2016 | irrelevant | 0 | 0 | Disulfiram is used solely as an experimental inhibitor of octopamine synthesis and is not the subject of any toxicokinetic modeling or parameter reporting. |
| popPK | Quddos_2025 | irrelevant | 0 | 0 | Disulfiram is mentioned only as a comparator drug to explain mechanisms; the study measures alcohol pharmacokinetics, not disulfiram. |
| popPK | Quinn_1997 | irrelevant | 1 | 0 | The paper is a general review of illicit drug pharmacology where disulfiram is mentioned only as a treatment agent, with no kinetic parameters provided. |
| PGx | Reid_1999 | not_relevant | 0 | 0 | The paper discusses dacarbazine metabolism by CYP enzymes and uses di-sulfiram as an inhibitor, but does not report pharmacogenomic effects on disulfiram's PK or PD parameters. |
| popPK | Ryu_2007 | irrelevant | 2 | 8 | The numeric parameters (clearance, distribution volumes) reported are for the radiotracer 18F-FCWAY, not for disulfiram itself; disulfiram is the interacting agent whose own PK parameters are not quantified here. |
| popPK | Sato_2025 | irrelevant | 1 | 0 | The paper focuses on the metabolism of pirfenidone, mentioning disulfiram only as an inhibitor/reagent without reporting any kinetic parameters for disulfiram itself. |
| popPK | Scheibel_1979 | irrelevant | 1 | 0 | The paper reports in vitro antimalarial efficacy and mechanistic observations of disulfiram inhibiting parasite growth, but provides no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| PGx | Schmidtova_2020 | not_relevant | 0 | 0 | The paper mentions disulfiram only as one of several compounds to which resistant cell lines were cross-resistant; it does not analyze the effect of specific gene variants or genotypes on disulfiram's pharmacokinetics or pharmacodynamics. |
| popPK | Sellers_1980 | irrelevant | 1 | 2 | The paper studies the disposition of benzodiazepines (chlordiazepoxide, diazepam, etc.) in humans, with disulfiram acting only as an inhibitor/comparator; no kinetic parameters for disulfiram itself are reported. |
| popPK | Shan_2026 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamics and therapeutic timing of disulfiram in sepsis, reporting no toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| PGx | Shinn_2010 | not_relevant | 0 | 0 | The paper is a review of topiramate; disulfiram is mentioned only as a comparator, with no genetic data or PK/PD parameters reported for it. |
| PGx | Shorter_2011 | not_relevant | 0 | 0 | The paper is a general review of pharmacotherapies for cocaine addiction and mentions pharmacogenetics only as a future research direction, without reporting any specific gene-drug interactions or quantitative PK/PD data for disulfiram. |
| popPK | Silveira_2026 | relevant | 8 | 2 | The paper reports pharmacokinetic parameters (Cmax, AUC) for disulfiram metabolites in humans, but the specific numeric values are not present in the provided evidence text, which only describes relative percentage increases and qualitative trends. |
| popPK | Sivolap_2014 | irrelevant | 0 | 0 | The text is a general review of alcohol dependence treatments and mentions disulfiram only as a drug name without reporting any quantitative toxicokinetic parameters or numeric data. |
| popPK | Skillman_1981 | irrelevant | 0 | 0 | The paper is a review of sulfonylurea pharmacology and does not contain any quantitative toxicokinetic data for disulfiram. |
| popPK | Song_2016 | irrelevant | 1 | 0 | The abstract mentions a pharmacokinetics study but contains no specific numeric parameters for disulfiram's kinetics; such data would be in results/figures not provided. |
| PGx | Spellicy_2013 | not_relevant | 0 | 0 | The study reports pharmacodynamic efficacy (clinical response to disulfiram) modulated by genotype, but does not measure specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, enzyme inhibition, receptor occupancy). |
| popPK | Spivak_2018 | irrelevant | 0 | 0 | The paper is a review article about HIV-1 latency reversal agents and contains no quantitative toxicokinetic parameters or experimental data for disulfiram. |
| popPK | Stagos_2010 | irrelevant | 3 | 0 | The paper characterizes the enzyme ALDH1B1, with disulfiram mentioned only as an inhibitor to demonstrate sensitivity, without reporting quantitative kinetic parameters for disulfiram itself. |
| popPK | Svendsen_1976 | irrelevant | 0 | 0 | The reported kinetic parameters are for diphenylhydantoin and tolbutamide, with disulfiram acting only as a co-administered drug altering their metabolism. |
| PGx | Sztajnkrycer_2003 | not_relevant | 0 | 0 | The study investigates disulfiram as a cytochrome P450 inhibitor to mitigate toxin metabolism in mice, not the effect of human gene variants on disulfiram PK or PD. |
| PGx | Talwelkar_2021 | not_relevant | 0 | 0 | The paper reports on ex vivo drug sensitivity (cell viability) and clinical response in a patient case, but does not analyze the effect of germline pharmacogenomic variants (e.g., CYP enzymes) on disulfiram's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tang_2026 | irrelevant | 1 | 0 | Disulfiram is mentioned only as a chemical component for ligand engineering in a gold nanoparticle design, with no toxicokinetic data or parameters reported. |
| popPK | Toffoletto_2007 | irrelevant | 0 | 0 | The paper is a review of alcohol-chemical interactions that mentions disulfiram-like syndromes but reports no quantitative kinetic parameters for disulfiram itself. |
| PGx | Uehara_2021 | not_relevant | 0 | 0 | The paper investigates tolbutamide metabolism in humanized liver mice, using disulfiram merely as a chemical inhibitor of aldehyde dehydrogenase in vitro, not as a drug with genetically determined PK/PD parameters. |
| popPK | Upton_1991 | irrelevant | 1 | 0 | Disulfiram is listed only as a co-medicating drug affecting theophylline clearance, with no toxicokinetic parameters reported for disulfiram itself. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction where disulfiram decreases theophylline clearance; it does not study pharmacogenomic effects on disulfiram's own pharmacokinetic or pharmacodynamic parameters. |
| popPK | Van_1984 | irrelevant | 0 | 0 | The paper reviews ketoconazole and mentions disulfiram only qualitatively in the context of a drug interaction. |
| PGx | Van_2016 | not_relevant | 0 | 0 | The text discusses ALDH2 genetics and its connection to 'disulfiram-like reactions' (a symptom phenotype) in the context of hematopoietic stem cell biology, but does not report any pharmacokinetic or pharmacodynamic parameters for the drug disulfiram itself. |
| popPK | Verma_1990 | irrelevant | 1 | 0 | The paper reports clinical outcomes (response rates, toxicity grades) for a combination therapy but contains no quantitative toxicokinetic parameters for disulfiram. |
| popPK | Vesell_1975 | irrelevant | 2 | 0 | The paper measures the toxicokinetics of antipyrine, not disulfiram; disulfiram is merely a co-administered inhibitor, and no kinetic parameters for disulfiram itself are reported. |
| PGx | Vrzal_2016 | not_relevant | 0 | 0 | The study investigates the drug-drug interaction potential of the disulfiram-copper complex on CYP enzyme expression in hepatocytes, but does not analyze how gene variants/genotypes affect pharmacokinetic or pharmacodynamic parameters. |
| PGx | Wormhoudt_1996 | not_relevant | 0 | 0 | Disulfiram is mentioned only as a specific CYP2E1 inhibitor for 1,2-dibromoethane metabolism, not as the drug under investigation for pharmacogenomic effects. |
| popPK | Wormhoudt_1997 | irrelevant | 1 | 0 | Disulfiram is used solely as a CYP2E1 inhibitor in a study on 1,2-dibromoethane metabolism, with no kinetic parameters reported for disulfiram itself. |
| popPK | Zeng_2025 | irrelevant | 0 | 0 | Disulfiram is mentioned only as a comparator substance, and no pharmacokinetic parameters for disulfiram or its metabolites are reported. |
| popPK | Zhang_1992 | irrelevant | 0 | 0 | Disulfiram is mentioned only as a potential inhibitor of the enzyme deacetylating cinobufagin, with no kinetic parameters for disulfiram itself reported. |
| popPK | Zhang_2023 | irrelevant | 2 | 2 | The paper is a review summarizing disulfiram's mechanisms and clinical trials; it mentions a half-life only as a qualitative comparison for nanoparticle encapsulation and lacks original quantitative toxicokinetic data. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper identifies disulfiram as a potential therapeutic agent via high-throughput screening in ACC cells but does not report any pharmacogenomic effects (gene variants affecting PK/PD parameters) for disulfiram. |
| popPK | Zhang_2024_2 | irrelevant | 0 | 0 | The paper is a review of the antibiotic latamoxef; disulfiram is mentioned only in the context of "disulfiram-like reactions" caused by the antibiotic, with no kinetic parameters for disulfiram itself. |
| popPK | Zhu_2021 | irrelevant | 2 | 2 | Disulfiram is used only as a variable to modulate ALDH2 activity in an ethanol PBPK model; no quantitative toxicokinetic parameters (e.g., clearance, half-life, Km, Vmax) for disulfiram itself are reported in the text, only a assumed blood concentration range. |
| PGx | Zhu_2021 | not_relevant | 2 | 5 | The paper studies the effect of ALDH2 genotype and disulfiram on ethanol/acetaldehyde metabolism (substrates), but does not report how genetic variants affect the pharmacokinetic or pharmacodynamic parameters of disulfiram itself. |
| popPK | Zhuo_2018 | relevant | 8 | 0 | The paper reports pharmacokinetic data (blood concentration enhancement) for disulfiram in an animal tumor model, but the actual numeric kinetic parameters are not present in the provided evidence, only mentioned in the abstract. |
| PGx | Zindel_2014 | not_relevant | 0 | 0 | The text is a general historical review of alcohol dependence pharmacotherapy; it mentions pharmacogenetics only as a future direction and contains no specific data on gene variants affecting disulfiram's PK or PD parameters. |
| PGx | van_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effect of disulfiram as a biliverdin reductase inhibitor in a rat model but does not investigate the influence of gene variants, genotypes, or phenotypes on disulfiram's pharmacokinetics or pharmacodynamics. |
| PGx | von_1984 | not_relevant | 1 | 0 | The paper discusses genetic variability in alcohol/acetaldehyde metabolism and uses disulfiram only as a comparative analogy for ALDH inhibition, without reporting specific pharmacogenomic effects on disulfiram's PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdisulfiram%5D&body=Drug%3A%20disulfiram%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_disulfiram/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 19:20 UTC</sub>
