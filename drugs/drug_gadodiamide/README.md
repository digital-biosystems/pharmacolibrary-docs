<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadodiamide&quot;}]"></div>

# gadodiamide

- **generic name:** gadodiamide
- **ATC codes:** `V08CA03`
- **DrugBank:** [DB00225](https://go.drugbank.com/drugs/DB00225) · **PubChem:** [CID 24847884](https://pubchem.ncbi.nlm.nih.gov/compound/24847884)
- **molar mass:** 573.66 g/mol (C16H26GdN5O8) — DrugBank
- **groups:** approved, investigational

## About

Gadodiamide is a paramagnetic contrast medium used for magnetic resonance imaging. It is administered intravenously. It is approved for clinical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q72479907](https://www.wikidata.org/wiki/Q72479907), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadodiamide | parent | 573.66 | C16H26GdN5O8 | DrugBank | [24847884](https://pubchem.ncbi.nlm.nih.gov/compound/24847884) | Van_1993 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub> | [Van_1993_reference](drugs/drug_gadodiamide/Gadodiamide_Van1993_reference.md) | — | 1-compartment (no model) | 3 | Van Wagoner M et al., Gadodiamide injection. First human expe…, Investigative radiology 28… (1993) | — |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Jurkiewicz_2022_reference](drugs/drug_gadodiamide/Gadodiamide_Jurkiewicz2022_reference.md) | — | 2-compartment (no model) | 3 | Jurkiewicz E et al., Pharmacokinetics, Safety, and Efficacy…, Investigative radiology (2022) | [10.1097/rli.0000000000000865](https://doi.org/10.1097/rli.0000000000000865) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Scala_2018_reference](drugs/drug_gadodiamide/Gadodiamide_Scala2018_reference.md) | — | 2-compartment (no model) | 3 | Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018) | [10.1097/rli.0000000000000412](https://doi.org/10.1097/rli.0000000000000412) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Beydemir_2021_PON1](drugs/drug_gadodiamide/pd_Beydemir_2021_PON1.md) | PON1 activity ← gadodiamide · inhibition effect | — | Beydemir Ş et al., Gadolinium-based contrast agents: in vi…, Drug and chemical toxicology (2021) | [10.1080/01480545.2019.1620266](https://doi.org/10.1080/01480545.2019.1620266) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:25 | 0:07 | 1/2/0 | 1/0/0 | 0/0/0 | 4,026/172 | einfracz / qwen3.8-27b | 7 | 0/3 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 54 matched, 51 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almudaimeegh_2026 | irrelevant | 0 | 0 | The paper is an in vitro materials science study on a novel nanoplatform, where gadodiamide is used only as a comparator for MRI relaxivity, with no PK modeling or disposition parameters reported. |
| PGx | Almudaimeegh_2026 | not_relevant | 0 | 0 | The paper investigates a novel nanoplatform for imaging and radiosensitization and does not study pharmacogenomic effects on gadodiamide PK/PD parameters. |
| popPK | Bailey_2014 | irrelevant | 0 | 0 | The study focuses on mapping water exchange rates in tumors using a specific MRI sequence, and although it assumes a distribution volume, it does not report standard pharmacokinetic parameters (CL, V, ka) for gadodiamide. |
| PGx | Bailey_2014 | not_relevant | 0 | 0 | The paper investigates MRI physics and water exchange kinetics in tumors, containing no data on genetic variants or pharmacogenomics. |
| popPK | Bali_2008 | irrelevant | 2 | 2 | The study uses gadodiamide as a diagnostic contrast agent to measure pancreatic perfusion via DCE-MRI, reporting organ-specific blood flow rates rather than systemic pharmacokinetic parameters (CL, V, ka) for the drug itself. |
| PGx | Bali_2008 | not_relevant | 0 | 0 | The study reports pancreatic perfusion changes in healthy volunteers following secretin stimulation using gadodiamide, but does not investigate any gene variants or pharmacogenomic effects. |
| popPK | Baranyai_2015 | irrelevant | 2 | 1 | This is a chemical dissociation study, not a quantitative PK disposition study; the reported half-life is for complex dissociation. |
| popPK | Baxter_2009 | irrelevant | 1 | 0 | The study uses gadodiamide as a diagnostic contrast agent to assess hepatic perfusion parameters (blood flow, distribution volume) rather than characterizing the drug's own population pharmacokinetic disposition parameters (CL, Vss, ka). |
| PGx | Baxter_2009 | not_relevant | 0 | 0 | The paper focuses on using gadodiamide as a contrast agent for MRI perfusion assessment to diagnose cirrhosis and does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Boesen_2009 | irrelevant | 0 | 0 | Gadodiamide (as Omniscan) is used solely as an imaging contrast agent to visualize intra-articular distribution, with no pharmacokinetic parameters reported. |
| PGx | Boesen_2009 | not_relevant | 0 | 0 | The study investigates the physical distribution of an intra-articular injection and its correlation with MRI synovitis scores, not the effect of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Burry_2004 | irrelevant | 0 | 0 | The study is a retrospective review of clinical safety and efficacy, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Burry_2004 | not_relevant | 0 | 0 | The paper reports on the safety and efficacy of gadodiamide in pediatric procedures but contains no information regarding genetic variants, genotypes, or phenotypes affecting pharmacokinetics or pharmacodynamics. |
| popPK | Colosimo_2001 | irrelevant | 0 | 0 | Gadodiamide is used only as a comparator agent in an MRI efficacy study, with no pharmacokinetic parameters reported. |
| PGx | Colosimo_2001 | not_relevant | 0 | 0 | The study compares the imaging efficacy of different MRI contrast agents in patients but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Edward_2010 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on fibroblast proliferation, not a pharmacokinetic study, and it reports no disposition parameters. |
| PGx | Edward_2010 | not_relevant | 0 | 0 | The study is an in vitro cell culture experiment examining fibroblast proliferation and does not report pharmacokinetic or pharmacodynamic parameters in humans or patients, nor does it involve any genetic variant or genotype analysis. |
| popPK | Feng_2008 | irrelevant | 0 | 0 | The study focuses on tumor angiogenic kinetic parameters (KPS, fPV) rather than gadodiamide's pharmacokinetic disposition parameters, using gadodiamide only as a control agent. |
| PGx | Feng_2008 | not_relevant | 0 | 0 | The paper investigates the imaging properties of contrast agents in a mouse model and does not report any pharmacogenomic effects or human genetic variation influencing the pharmacokinetics or pharmacodynamics of gadodiamide. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This drug-safety resource reports no quantitative gadodiamide pharmacokinetic parameters. |
| popPK | Gallitto_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and efficacy of napabucasin in glioma models, with no mention of gadodiamide pharmacokinetics. |
| PGx | Gallitto_2025 | not_relevant | 0 | 0 | The paper concerns napabucasin and radiotherapy for glioma and does not investigate gadodiamide or any pharmacogenomic effects on its PK/PD. |
| popPK | Hope_2009 | irrelevant | 0 | 0 | The study is a toxicology/pathology experiment measuring skin lesions and gadolinium deposition, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2). |
| PGx | Hope_2009 | not_relevant | 0 | 0 | The paper reports on the effects of drug co-administration (Epo and iron) on disease progression in an animal model, and does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter of gadodiamide. |
| popPK | Hope_2013 | irrelevant | 0 | 0 | The study evaluates the efficacy of imatinib for treating NSF in rats and does not report pharmacokinetic parameters for gadodiamide. |
| PGx | Hope_2013 | not_relevant | 0 | 0 | The study evaluates the therapeutic efficacy of imatinib on NSF lesions in a rat model and does not investigate any genetic variants or genotypes affecting gadodiamide pharmacokinetics or pharmacodynamics. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | The paper is a materials science and imaging study on a gadodiamide-conjugated nanoparticle, reporting only MRI contrast performance and not pharmacokinetic parameters like clearance or volume. |
| PGx | Huang_2019 | not_relevant | 0 | 0 | The paper focuses on the synthesis of a new nanomedicine (gadodiamide-conjugated chitosan) and its MRI contrast properties, not pharmacogenomics. |
| popPK | Häussler_1996 | irrelevant | 0 | 0 | The study is an MRI diagnostic imaging evaluation using gadodiamide as a contrast agent, with no report of pharmacokinetic parameters (CL, V, t1/2) or PK modeling. |
| PGx | Häussler_1996 | not_relevant | 0 | 0 | The paper evaluates the efficacy of gadodiamide as an MRI contrast agent in bone tumors and does not mention any genetic variants or pharmacogenomic factors influencing its pharmacokinetics or pharmacodynamics. |
| popPK | Jansen_2009 | irrelevant | 3 | 9 | The study reports DCE-MR model parameters (Ktrans, ve) for gadolinium distribution in a mouse tumor model, which are not standard systemic PK parameters (CL, V, half-life) for gadodiamide as a subject drug. |
| PGx | Jansen_2009 | not_relevant | 0 | 0 | The paper investigates gadodiamide pharmacokinetics in a murine model of cancer but does not report any pharmacogenomic effects (gene variants, genotypes, or phenotypes) on these parameters. |
| popPK | Joffe_2000 | irrelevant | 1 | 0 | The paper describes the development and validation of analytical methods (ICP-AES and HPLC) for quantifying gadodiamide, rather than reporting pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| PGx | Joffe_2000 | not_relevant | 0 | 0 | The paper reports analytical methods for measuring gadodiamide and its stability in renal impairment, but does not discuss any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Jurkiewicz_2022 | irrelevant | 1 | 1 | The study reports population pharmacokinetic parameters for gadopiclenol, not gadodiamide. |
| PGx | Jurkiewicz_2022 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of gadopiclenol (not gadodiamide) in pediatric patients and does not report pharmacogenomic effects. |
| popPK | Kucharczyk_1993 | irrelevant | 0 | 0 | This is an MR imaging study comparing the contrast agent efficacy of DyDTPA-BMA and gadodiamide in cats, with no quantitative pharmacokinetic parameters (CL, V, etc.) reported. |
| PGx | Kucharczyk_1993 | not_relevant | 0 | 0 | The study compares two MRI contrast agents in an animal model without reporting any genetic variants, genotypes, or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Liang_2010 | irrelevant | 0 | 0 | The study uses gadodiamide as a comparative agent in a DCE-MRI imaging study to characterize MRI signal enhancements, rather than reporting systemic pharmacokinetic disposition parameters (such as CL, V, or population PK models) for gadodiamide itself. |
| PGx | Liang_2010 | not_relevant | 0 | 0 | The study compares the pharmacokinetic parameters of three different gadolinium contrast agents in beagles but contains no information regarding genetic variants or genotypes. |
| popPK | Marckmann_2008 | irrelevant | 0 | 0 | The paper is a clinical case series regarding nephrogenic systemic fibrosis and contains no pharmacokinetic data or quantitative disposition parameters for gadodiamide. |
| PGx | Marckmann_2008 | not_relevant | 0 | 0 | The paper reports an epidemic of nephrogenic systemic fibrosis associated with renal insufficiency and gadodiamide exposure, but does not report any pharmacogenomic effect on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Marie_2018 | irrelevant | 0 | 0 | The study evaluates MRI signal intensity changes in brain nuclei, not quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Marie_2018 | not_relevant | 0 | 0 | The paper describes gadolinium deposition in the brain (T1 hyperintensity) following multiple administrations of gadodiamide but does not report any genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Martí-Bonmatí_2000 | irrelevant | 0 | 0 | The study is a safety and efficacy trial in infants focusing on clinical adverse events and diagnostic utility, with no reported pharmacokinetic parameters. |
| PGx | Martí-Bonmatí_2000 | not_relevant | 0 | 0 | The paper evaluates safety and efficacy in infants and does not report any gene variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Nikolaou_2004 | irrelevant | 0 | 0 | The study uses gadodiamide as a diagnostic contrast agent to measure pulmonary blood flow, not to determine the pharmacokinetic parameters of gadodiamide itself. |
| PGx | Nikolaou_2004 | not_relevant | 0 | 0 | The paper focuses on MRI protocol optimization and pulmonary blood flow quantification using gadodiamide in healthy volunteers, with no investigation into pharmacogenomic or genotype-based effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Normann_1995 | irrelevant | 2 | 1 | The study focuses on in vivo stability and excretion kinetics (qualitative HPLC) and explicitly notes the absence of biotransformation, but does not report quantitative compartmental PK parameters like clearance (CL) or volume (V). |
| PGx | Normann_1995 | not_relevant | 0 | 0 | This paper reports general pharmacokinetics in rats and contains no pharmacogenomic analysis or gene variants. |
| popPK | Peller_2016 | irrelevant | 0 | 0 | The study focuses on the MRI visualization and release kinetics of doxorubicin from thermosensitive liposomes in rats, not the population pharmacokinetics of gadodiamide. |
| PGx | Peller_2016 | not_relevant | 0 | 0 | The paper investigates MRI markers for hyperthermia-induced drug release from thermosensitive liposomes and contains no information regarding pharmacogenomics or gadodiamide. |
| popPK | Peters_1993 | irrelevant | 1 | 0 | This is a hemodynamic safety study comparing two agents, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Peters_1993 | not_relevant | 0 | 0 | The study investigates hemodynamic safety in dogs and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Riser_2012 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on fibroblast proliferation and NSF pathophysiology, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Riser_2012 | not_relevant | 0 | 0 | The paper investigates the cellular mechanism of gadolinium-induced fibrosis and the role of CCN3, but does not report any pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of gadodiamide. |
| popPK | Rui_2020 | irrelevant | 2 | 0 | The study is an MRI dosage optimization and imaging technique study, reporting image quality metrics (CNR/CR) rather than pharmacokinetic parameters (CL, V, t1/2). |
| PGx | Rui_2020 | not_relevant | 0 | 0 | The paper studies optimal dosing for MRI imaging parameters in animal models and contains no genetic variants or pharmacogenomic analysis. |
| popPK | Santibáñez_2019 | irrelevant | 0 | 0 | The study measures radiation dose enhancement in phantoms using gadolinium solutions (Omniscan) and does not report pharmacokinetic parameters. |
| PGx | Santibáñez_2019 | not_relevant | 0 | 0 | The paper focuses on physical dosimetry of gadolinium in phantoms and does not report pharmacogenomic effects on PK/PD in a biological or clinical context. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gadoterate meglumine, not gadodiamide. |
| PGx | Scala_2018 | not_relevant | 0 | 0 | The study evaluates the pharmacokinetics of gadoterate meglumine in pediatric subjects but does not investigate the effect of genetic variants or genotypes on drug clearance or other PK/PD parameters. |
| popPK | Sze_1991 | irrelevant | 1 | 0 | This is a clinical diagnostic study evaluating safety and imaging efficacy; it reports no quantitative pharmacokinetic parameters for gadodiamide. |
| PGx | Sze_1991 | not_relevant | 0 | 0 | The paper is a phase II-III safety and efficacy trial that does not report any pharmacogenomic data or genotype-stratified PK/PD analysis. |
| popPK | Thomsen_1997 | irrelevant | 0 | 0 | The study investigates the frequency of acute adverse events and the effect of verbal interviews, reporting no pharmacokinetic parameters such as clearance or volume of distribution. |
| PGx | Thomsen_1997 | not_relevant | 0 | 0 | The paper investigates the impact of verbal interview techniques on the reporting of adverse events to gadodiamide, not the effect of gene variants on PK/PD parameters. |
| popPK | Tsai_2022 | irrelevant | 0 | 0 | The study is an in-vitro toxicity mechanism investigation (autophagy/apoptosis in cell lines) and does not report any pharmacokinetic parameters (CL, V, t1/2) for gadodiamide. |
| PGx | Tsai_2022 | not_relevant | 0 | 0 | The study investigates the cellular toxicity mechanisms (autophagy/apoptosis) of gadodiamide in HaCaT cells but does not report any genetic variant, genotype, or pharmacogenomic effect on PK or PD parameters. |
| popPK | Valk_1993 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study for MRI contrast enhancement, not a pharmacokinetic study, and no quantitative PK parameters (CL, V, etc.) are reported. |
| PGx | Valk_1993 | not_relevant | 0 | 0 | The paper is a clinical comparison of two MRI contrast agents in a general population and does not report any gene variants, genotypes, or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Van_1993 | relevant | 7 | 2 | The study reports gadodiamide PK in humans and fits an open two-compartment model, but the specific quantitative parameter values (clearance, volume, etc.) are not present in the provided evidence, only the half-life (~70 min) and urine recovery. |
| PGx | Van_1993 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics in a cohort of healthy volunteers but does not investigate or report any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Wáng_2015 | irrelevant | 2 | 0 | This is a tissue retention study reporting Gd concentrations in tissues (skin, liver, bone) rather than quantitative systemic pharmacokinetic parameters (CL, V, t1/2) or a population PK model. |
| PGx | Wáng_2015 | not_relevant | 0 | 0 | The study compares Gd deposition in rats with different ovarian statuses (OVX vs control) and chelate types, but does not investigate genetic variants or genotypes associated with pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yim_2011 | irrelevant | 0 | 0 | The study evaluates Gd-DTPA-Pullulan, not gadodiamide (Gd-DTPA-BMA is used only as a comparator/reference), and no population PK parameters are reported. |
| PGx | Yim_2011 | not_relevant | 0 | 0 | The paper describes a new MRI contrast agent formulation in rats and does not report any pharmacogenomic effects of gadodiamide. |
| popPK | Zhou_2025 | irrelevant | 2 | 0 | The study is an in-vivo imaging/diffusion study in guinea pigs measuring MRI signal intensity, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for gadodiamide. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The study investigates a delivery method (microneedle injection) in guinea pigs and does not contain any pharmacogenomic data or genetic analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadodiamide%5D&body=Drug%3A%20gadodiamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadodiamide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:25 UTC</sub>
