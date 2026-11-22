<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Nystatin&quot;}]"></div>

# Nystatin

- **generic name:** Nystatin
- **T3DB:** [T3D2847](http://www.t3db.ca/toxins/T3D2847) · **DrugBank:** [DB00646](https://go.drugbank.com/drugs/DB00646) · **PubChem:** [CID 11953884](https://pubchem.ncbi.nlm.nih.gov/compound/11953884)
- **groups:** approved, investigational, vet_approved

## About

Nystatin is a polyene antifungal drug to which many molds and yeasts are sensitive, including Candida spp. Nystatin has some toxicity associated with it when given intravenously, but it is not absorbed across intact skin or mucous membranes. It is considered a relatively safe drug for treating oral or gastrointestinal fungal infections.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral, topical(intravaginal). Nystatin is not absorbed from intact skin or mucous membrane.
- **Sources and uses:** Used to treat cutaneous, vaginal, mucosal and esophageal Candida infections. Nystatin is often used as prophylaxis in patients who are at risk for fungal infections, such as AIDS patients with a low CD4+ count and patients receiving chemotherapy.[Wikipedia]
- **Mechanism of toxicity:** Nystatin interacts with 14-&alpha; demethylase, a cytochrome P-450 enzyme necessary for the conversion of lanosterol to ergosterol. This results in inhibition of ergosterol synthesis and increased fungal cellular permeability. …
- **Health effects:** Tachycardia, bronchospasm, facial swelling, and non-specific myalgia have also been rarely reported. Stevens-Johnson syndrome has been reported very rarely.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2847">T3DB T3D2847</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 1400-61-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:7660">ChEBI 7660</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nystatin | parent | 926.107 | C47H75NO17 | PubChem | [11953884](https://pubchem.ncbi.nlm.nih.gov/compound/11953884) | Groll_2000, Groll_2003 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Groll_2000_reference](drugs/toxin_nystatin/Nystatin_Groll2000_reference.md) | — | 1-compartment (no model) | 2 | Groll AH et al., Compartmental pharmacokinetics and tiss…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.4.950-957.2000](https://doi.org/10.1128/AAC.44.4.950-957.2000) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Groll_2003_reference](drugs/toxin_nystatin/Nystatin_Groll2003_reference.md) | — | 1-compartment (no model) | 3 | Groll AH et al., Comparative drug disposition, urinary p…, Antimicrobial agents and ch… (2003) | [10.1128/AAC.47.12.3917-3925.2003](https://doi.org/10.1128/AAC.47.12.3917-3925.2003) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 10:05 | 16:32 | 0/2/0 | 0/0/0 | 0/0/0 | 516,918/41,392 | ollama / glm-5.3-flash | 24 | 5/15 | 24/0 | 0 |

## Coverage

- **PubMed hits:** 106 matched, 104 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Groll_2000.pdf` | Groll AH et al., Compartmental pharmacokinetics and tiss…, Antimicrobial agents and ch… (2000) | popPK | 10 | [10.1128/AAC.44.4.950-957.2000](https://doi.org/10.1128/AAC.44.4.950-957.2000) | [10722496](https://pubmed.ncbi.nlm.nih.gov/10722496) | Full PK parameters (Cmax, AUC, Vd, CL, terminal half-life) for liposomal nystatin are reported directly in the abstract for rabbits. |
| `Groll_2003.pdf` | Groll AH et al., Comparative drug disposition, urinary p…, Antimicrobial agents and ch… (2003) | popPK | 9 | [10.1128/AAC.47.12.3917-3925.2003](https://doi.org/10.1128/AAC.47.12.3917-3925.2003) | [14638502](https://pubmed.ncbi.nlm.nih.gov/14638502) | Quantitative plasma/urine/tissue kinetic parameters for liposomal nystatin (Cmax, AUC, clearance, volume of distribution) are reported directly in the abstract for rabbits. |
| `Semis_2012.pdf` | Semis R et al., Pharmacokinetics, tissue distribution a…, The Journal of antimicrobia… (2012) | popPK | 7 | [10.1093/jac/dks117](https://doi.org/10.1093/jac/dks117) | [22499997](https://pubmed.ncbi.nlm.nih.gov/22499997) | Mouse PK and tissue distribution of nystatin are the subject, but numeric parameter values (concentrations, kinetic curves) are not shown in the provided evidence, likely residing in figures/tables not included. |
| `Larson_2000.pdf` | Larson JL et al., The reproductive and developmental toxi…, Toxicological sciences : an… (2000) | popPK | 6 | [10.1093/toxsci/53.2.421](https://doi.org/10.1093/toxsci/53.2.421) | [10696790](https://pubmed.ncbi.nlm.nih.gov/10696790) | Toxicokinetic (systemic exposure) data for nystatin were collected in the SEG II rat and rabbit studies, but no numeric parameter values (Cmax, AUC, etc.) appear in the evidence — the numbers likely reside in results tables/appendices not provided. |
| `Groll_1999_3.pdf` | Groll AH et al., Liposomal nystatin against experimental…, The Journal of antimicrobia… (1999) | popPK | 5 | [10.1093/jac/43.1.95](https://doi.org/10.1093/jac/43.1.95) | [10381106](https://pubmed.ncbi.nlm.nih.gov/10381106) | Non-compartmental pharmacokinetics of liposomal nystatin in rabbits are reported, but the numeric parameter values are not present in the abstract evidence provided. |
| `Mertin_1997.pdf` | Mertin D et al., In-vitro permeability of the human nail…, The Journal of pharmacy and… (1997) | popPK | 5 | [10.1111/j.2042-7158.1997.tb06127.x](https://doi.org/10.1111/j.2042-7158.1997.tb06127.x) | [9306253](https://pubmed.ncbi.nlm.nih.gov/9306253) | In-vitro nail/hoof permeability rates for nystatin are the subject substance, but the numeric flux/permeability values are not shown in the evidence provided. |
| `Scheuch_2006.pdf` | Scheuch E et al., Quantitative determination of nystatin…, Journal of chromatography.… (2006) | popPK | 5 | [10.1016/j.jchromb.2006.07.015](https://doi.org/10.1016/j.jchromb.2006.07.015) | [16890501](https://pubmed.ncbi.nlm.nih.gov/16890501) | A pharmacokinetic trial with plasma concentration-time profiling of nystatin in humans is reported, but no numeric kinetic parameter values (half-life, Cmax, AUC, clearance) appear in the evidence provided. |

<sub>queue written 2026-11-14 09:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akaike_1997 | irrelevant | 0 | 0 | Nystatin appears only as an ionophore reagent in the perforated patch technique; no kinetic parameters of nystatin itself are reported. |
| popPK | Althaus_2009 | irrelevant | 0 | 0 | Nystatin appears only as a permeabilization reagent, with no kinetic parameters for nystatin. |
| popPK | Antoci_2021 | irrelevant | 0 | 0 | Nystatin appears only as a positive-control comparator in antimicrobial assays; no kinetic parameters for nystatin are reported. |
| PGx | Anwar_2018 | not_relevant | 0 | 0 | No gene variant/genotype effects on nystatin PK/PD parameters; only nanoparticle conjugation effects on antiacanthamoebic activity. |
| PGx | Anwar_2019 | not_relevant | 0 | 0 | Nanoparticle formulation study against Acanthamoeba; no host gene variant/genotype effect on nystatin PK or PD parameters. |
| PGx | Anwar_2020 | not_relevant | 0 | 0 | Nystatin only mentioned as background; no gene variant/genotype effect on PK/PD parameters reported. |
| popPK | Arnow_1992 | irrelevant | 1 | 0 | Nystatin is only a component of an oral nonabsorbable prophylaxis regimen with no kinetic parameters for nystatin itself; the pharmacokinetics reported (cefotaxime, ampicillin) belong to other substances. |
| PGx | Asadi_2024 | not_relevant | 0 | 0 | Study evaluates liposomal nystatin formulation MICs in Candida; no gene variant/genotype/phenotype effects on PK/PD parameters are reported. |
| popPK | Bakr_2026 | irrelevant | 0 | 0 | This is a treatment-efficacy study of nystatin in an oral candidiasis rat model; it reports fungal burden and body weight outcomes, not any toxicokinetic parameters (no half-life, clearance, absorption, or model of nystatin disposition). |
| popPK | Burkin_2022 | irrelevant | 2 | 1 | Nystatin appears only as a cross-reacting polyene in the immunoassay validation; all pharmacokinetic parameters concern amphotericin B, not nystatin. |
| popPK | Carmo_2023 | irrelevant | 2 | 0 | This is a review of multiple antifungals; nystatin is discussed qualitatively (topical use, poor solubility), with no quantitative kinetic parameters for nystatin itself; the numeric PK values given belong to other drugs (amphotericin B, fluconazole, griseofulvin, isavuconazole). |
| PGx | Carmo_2023 | not_relevant | 3 | 2 | Review mentions pharmacogenomics of antifungals generally, but abstract shows no gene variant effect on nystatin PK/PD. |
| popPK | Chouhan_2026 | irrelevant | 0 | 0 | Nystatin appears only as an antifungal susceptibility testing reagent with zone-of-inhibition results, no kinetic parameters. |
| PGx | Chu_2006 | not_relevant | 0 | 0 | Nystatin is only a mechanism probe inhibiting caveolae-mediated endocytosis of a protein; no genotypic effect on nystatin PK/PD is reported. |
| popPK | Coutinho_1995 | irrelevant | 2 | 6 | In vesicle biophysics study with partition coefficients for model membranes, not in vivo toxicokinetics; species is in vitro, not animals or humans. |
| popPK | Croy_2004 | irrelevant | 2 | 6 | In vitro formulation study (Pluronic micelles); the CAC and micelle-water partition coefficients are physicochemical, not physiological toxicokinetic parameters of nystatin in a whole organism, though numeric values are present. |
| popPK | Croy_2005 | irrelevant | 2 | 6 | Nystatin is the subject and numeric micelle-water partition coefficients and CACs are reported, but this is an in vitro formulation/solubilization study, not toxicokinetic disposition data in any species. |
| popPK | Cuthbert_2003 | irrelevant | 0 | 0 | Nystatin appears only as an analytical/membrane-permeabilising tool; no kinetic parameters for nystatin are reported. |
| popPK | Del_2013 | irrelevant | 1 | 0 | Nystatin is only mentioned as a drug class comparator; the paper is a qualitative review of naftifine with no kinetic parameters and no numeric values. |
| popPK | Ding_2021 | irrelevant | 0 | 0 | Nystatin appears only as an endocytosis inhibitor tool reagent; no kinetic parameters of nystatin are reported. |
| popPK | Ellepola_1998 | irrelevant | 0 | 0 | In vitro microbiology study of Candida germ tube formation; no toxicokinetic parameters for nystatin. |
| popPK | Flondor_2025 | irrelevant | 0 | 0 | Clinical efficacy/adherence trial of aloe vera adjunct to nystatin in children with oral candidiasis; no toxicokinetic parameters (half-life, clearance, partitioning, etc.) reported. |
| popPK | Goran_2004 | irrelevant | 0 | 0 | Clinical efficacy study of a combination vaginal capsule with no kinetic parameters for nystatin of any kind. |
| popPK | Groll_1999 | irrelevant | 2 | 2 | This is an analytical HPLC method paper for liposomal nystatin with validation numbers (range, LOQ, retention times) but no actual pharmacokinetic parameters of nystatin disposition. |
| popPK | Groll_1999_2 | irrelevant | 1 | 0 | Efficacy/safety study reporting only tissue fungal burden and creatinine clearance-type toxicity markers, with no nystatin kinetic parameters; any PK may exist in supplementary material not provided. |
| popPK | Groll_1999_3 | relevant | 5 | 2 | Non-compartmental pharmacokinetics of liposomal nystatin in rabbits are reported, but the numeric parameter values are not present in the abstract evidence provided. |
| popPK | Hettiarachchi_2010 | irrelevant | 0 | 0 | Clinical treatment-outcome study with no kinetic parameters for nystatin; nystatin only mentioned as a treatment option. |
| popPK | Hothersall_2013 | irrelevant | 0 | 0 | Nystatin appears only as an endocytosis inhibitor reagent; the paper's kinetic parameters concern palonosetron, not nystatin. |
| popPK | Kapoor_2025 | irrelevant | 0 | 0 | The paper is about posaconazole nanoparticle formulations; nystatin appears only as a cited comparator/dosing background, with no kinetic parameters for nystatin. |
| popPK | Kawami_2018 | irrelevant | 0 | 0 | Nystatin appears only as a caveolae-endocytosis inhibitor reagent (50 µM); the kinetic parameters (Km, Vmax) belong to AOPP-albumin, not nystatin. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | Nystatin appears only as an in vitro antifungal comparator (MIC reference), with no kinetic parameters of nystatin. |
| popPK | Khichi_2024 | irrelevant | 0 | 0 | Nystatin (Mycostatin) appears only as a comparator in an additive-checkerboard assay; the kinetic/docking parameters belong to fluconazole analogues, not nystatin. |
| popPK | Kumar_1989 | irrelevant | 0 | 0 | Clinical efficacy study of oral nystatin in psoriasis patients with no kinetic parameters of any kind. |
| popPK | Kunzelmann_1996 | irrelevant | 0 | 0 | Human clinical treatment study with MIC values for fluconazole; nystatin appears only as local topical co-treatment with no kinetic parameters. |
| popPK | Larson_2000 | relevant | 6 | 2 | Toxicokinetic (systemic exposure) data for nystatin were collected in the SEG II rat and rabbit studies, but no numeric parameter values (Cmax, AUC, etc.) appear in the evidence — the numbers likely reside in results tables/appendices not provided. |
| popPK | Li_2019 | irrelevant | 0 | 0 | No nystatin kinetic parameters reported; the paper concerns rhIFNα-2b efficacy in a rat VVC model, with no kinetic values of any substance. |
| popPK | Machlup_1994 | irrelevant | 0 | 0 | Nystatin appears only as an experimental ionophore/tool in frog skin electrophysiology, with no kinetic parameters for nystatin disposition. |
| popPK | Mardani_2018 | irrelevant | 0 | 4 | Nystatin appears only as a comparator antifungal in an in vitro MIC study; no kinetic parameters of nystatin are reported. |
| popPK | May_2012 | irrelevant | 1 | 1 | Nystatin appears only as a component of a digestive decontamination regimen (500,000 units Q 8h dosing), with no kinetic parameters (half-life, clearance, absorption) reported for nystatin or any substance's disposition. |
| popPK | Mertin_1997 | relevant | 5 | 2 | In-vitro nail/hoof permeability rates for nystatin are the subject substance, but the numeric flux/permeability values are not shown in the evidence provided. |
| popPK | Migalovich_2009 | irrelevant | 0 | 0 | Nystatin appears only as a mechanistic tool (caveolae inhibitor), not as the subject with any quantitative kinetic parameters. |
| popPK | Moraes_2024 | irrelevant | 0 | 0 | In vitro toxicity/efficacy screening (LC50, MIC) with no kinetic parameters (half-life, clearance, rates) for nystatin's disposition. |
| popPK | Moreira_2005 | irrelevant | 0 | 0 | This is a review of neonatal fungal infection management; nystatin is mentioned only as a prophylactic agent with no kinetic parameters for it, and fluconazole/amphotericin PK are discussed without numeric disposition values. |
| popPK | Nakashima_1996 | irrelevant | 0 | 0 | Nystatin appears only as the perforated patch-clamp reagent, not as the subject substance with any kinetic parameter. |
| popPK | Ng_2005 | irrelevant | 0 | 0 | Methods chapter about liposomal formulations, focused on amphotericin B with no nystatin kinetic parameters reported. |
| popPK | Nguyen_1999 | irrelevant | 0 | 0 | Nystatin is used only as an analytical/experimental permeabilizing reagent in Ussing chamber experiments; no toxicokinetic parameters of nystatin itself are reported. |
| popPK | Pedraza-Sánchez_2018 | irrelevant | 0 | 0 | Nystatin appears only as a co-treatment/comparator for oral candidiasis; no kinetic parameters (half-life, clearance, etc.) for nystatin are reported. |
| popPK | Prasad_2005 | irrelevant | 0 | 0 | No kinetic parameters of nystatin; it appears only as prophylaxis mention in a clinical review. |
| popPK | Price_1976 | irrelevant | 0 | 0 | Nystatin is used only as a reagent to open pores in red cell membranes for cesium labeling; the kinetic parameters (cesium clearance half-times) belong to cesium, not nystatin. |
| popPK | Rahman_2010 | irrelevant | 0 | 0 | Nystatin appears only as a laboratory permeabilizing reagent for cell membranes, not as a study substance with any kinetic parameters. |
| popPK | Ramaswamy_1999 | irrelevant | 3 | 1 | In vitro plasma fractionation study reporting distribution percentages qualitatively; actual numeric values are presumably in tables/figures not provided in the evidence. |
| popPK | Rios_1993 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | Saballs-Radresa_2000 | irrelevant | 0 | 0 | Review-style discussion of aspergillosis treatment mentioning liposomal nystatin only as a forthcoming therapeutic option, with no kinetic parameters for nystatin. |
| PGx | Sahu_2025 | not_relevant | 0 | 0 | The study reports susceptibility patterns in Candida albicans and genetic diversity markers, but no host or strain gene variant effect on nystatin PK/PD parameters. |
| popPK | Scheuch_2006 | relevant | 5 | 2 | A pharmacokinetic trial with plasma concentration-time profiling of nystatin in humans is reported, but no numeric kinetic parameter values (half-life, Cmax, AUC, clearance) appear in the evidence provided. |
| popPK | Semis_2012 | relevant | 7 | 4 | Mouse PK and tissue distribution of nystatin are the subject, but numeric parameter values (concentrations, kinetic curves) are not shown in the provided evidence, likely residing in figures/tables not included. |
| PGx | Shi_2003 | not_relevant | 0 | 0 | Nystatin here is a patch-clamp pore-forming agent, not a therapeutic drug; no gene variant affects its PK/PD parameters. |
| popPK | Shlyonsky_2008 | irrelevant | 0 | 0 | Nystatin appears only as a perforated patch-clamp technique reagent, with no kinetic parameters for nystatin itself. |
| popPK | Son_2004 | irrelevant | 0 | 0 | Nystatin is used only as an experimental permeabilization tool in airway epithelium electrophysiology, with no toxicokinetic parameters for nystatin. |
| popPK | Tarran_2006 | irrelevant | 0 | 0 | Nystatin is used only as an experimental ionophore to activate Na+ absorption in human airway epithelial cell cultures; no toxicokinetic parameter of nystatin is reported. |
| popPK | Tsapepas_2013 | irrelevant | 0 | 0 | Nystatin appears only as a co-administered comparator; all kinetic parameters belong to tacrolimus, not nystatin. |
| popPK | Wang_1998 | irrelevant | 2 | 2 | Reports in vitro partitioning of nystatin into artificial lipid vesicles (biophysical membrane study), not whole-body toxicokinetics, and no concrete numeric partition coefficient values are given in the abstract. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper measures uptake/efflux kinetics of voriconazole, not nystatin; nystatin does not appear as the subject substance. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | Nystatin is only used as a reagent to kill extracellular conidia; all kinetic parameters (EC50, Cs, PK/PD breakpoints, population PK) belong to voriconazole, not nystatin. |
| popPK | Wasan_1996 | irrelevant | 1 | 0 | Nystatin is only mentioned as an example hydrophobic drug; no kinetic parameters or numeric values are reported. |
| popPK | Wasan_1997 | irrelevant | 2 | 2 | This is a qualitative review/discussion of lipoprotein distribution of nystatin with no numeric kinetic parameters; only "over 50% with HDLs" appears, no rates, half-lives, or coefficients. |
| popPK | Waters_1999 | irrelevant | 0 | 0 | Nystatin is used only as an experimental tool to increase Na+ entry in vitro; no kinetic parameters for nystatin are reported. |
| popPK | Xie_2025 | irrelevant | 1 | 1 | This is a therapeutic efficacy study in rabbits; nystatin appears only via MIC shifts and symptom/histology outcomes, with no kinetic parameter (no half-life, clearance, or concentration time course) reported. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | Nystatin appears only as a comparator treatment in a clinical efficacy trial; no kinetic parameters of any kind are reported. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | Clinical efficacy trial comparing MB-PDT with nystatin in oral candidiasis; no toxicokinetic parameters for nystatin (no half-life, clearance of the drug, absorption, or disposition data) are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnystatin%5D&body=Drug%3A%20nystatin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nystatin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 09:59 UTC</sub>
