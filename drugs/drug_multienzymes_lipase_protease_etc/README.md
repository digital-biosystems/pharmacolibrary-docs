<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A09A&quot;,&quot;href&quot;:&quot;atc/A09A.md&quot;},{&quot;label&quot;:&quot;multienzymes (lipase, protease etc.)&quot;}]"></div>

# multienzymes (lipase, protease etc.)

- **generic name:** multienzymes (lipase, protease etc.)
- **ATC codes:** `A09AA02`
- **DrugBank:** [DB00085](https://go.drugbank.com/drugs/DB00085) · **PubChem:** not captured
- **groups:** approved, investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 21:42 | 4:32 | 0/0/0 | 0/0/0 | 0/0/0 | 165,717/3,795 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 4/9 | 14/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=multienzymes_lipase_protease_etc) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Dietary fat (cleavage), Dietary protein (cleavage), Dietary starch (cleavage).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 126 matched, 63 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aguilar-Ascón_2023 | irrelevant | 0 | 0 | The study investigates the use of sludge as feed for mealworm larvae and does not report pharmacokinetic parameters for multienzymes_lipase_protease_etc. |
| popPK | Alnaimat_2021 | irrelevant | 0 | 0 | The paper is an in vitro study on the bioaccessibility of trace elements in tea, not a pharmacokinetic study of multienzymes_lipase_protease_etc. |
| PD | Alpers_1975 | not_relevant | 1 | 0 | The paper describes a qualitative physiological mechanism and in vivo/in vitro effects of pancreatic proteases on protein turnover but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., EC50, Emax). |
| popPK | Applová_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of daunorubicin and its metabolite daunorubicinol, not multienzymes_lipase_protease_etc. |
| popPK | B_2021 | irrelevant | 0 | 0 | The paper describes the production and characterization of a copper-chelating protein hydrolysate from chia seeds, not the pharmacokinetics of a drug. |
| popPK | Baum_1992 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of loxiglumide on insulin and CCK, not the pharmacokinetics of multienzymes (pancreatin) as the subject drug. |
| popPK | Camarillo_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mosapride to demonstrate bioequivalence, with pancreatin serving only as a co-administered component in the fixed-dose combination rather than the subject of PK analysis. |
| popPK | Caruso_2014 | irrelevant | 0 | 0 | The study evaluates viral inactivation in pancreatin (a mixture of enzymes) and does not report pharmacokinetic parameters for the drug itself. |
| popPK | Cave_1988 | irrelevant | 0 | 0 | The study focuses on amino acid bioavailability in feedstuffs using in vitro digestion and chick assays, not the pharmacokinetics of multienzymes_lipase_protease_etc. |
| popPK | Champagne_1989 | irrelevant | 0 | 0 | The paper is a review of mineral absorption mechanisms and does not report pharmacokinetic parameters for multienzymes_lipase_protease_etc. |
| PD | Chang_2009 | not_relevant | 2 | 1 | The paper is a clinical efficacy study comparing two protease inhibitors for post-ERCP pancreatitis prevention; it reports clinical outcomes and serum amylase levels but does not provide drug concentration data or fit a pharmacodynamic (exposure-response) model. |
| popPK | Cheng_2025 | irrelevant | 0 | 0 | The study investigates the effect of flaxseed lignans on the digestion of alpha-linolenic acid in an in vitro model, not the pharmacokinetics of multienzymes. |
| popPK | Corte-Real_2018 | irrelevant | 0 | 0 | The study is an in-vitro digestion experiment investigating carotenoid bioaccessibility, not a pharmacokinetic study of multienzymes_lipase_protease_etc. |
| popPK | De_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro digestion of liposomes containing curcumin and hydroxytyrosol, not the pharmacokinetics of multienzymes (lipase/protease). |
| popPK | Dey_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etodolac, not multienzymes_lipase_protease_etc, which is only used as an excipient in the dissolution medium. |
| popPK | Digenis_1994 | irrelevant | 0 | 0 | The paper is a review on gelatin capsule cross-linking and does not report pharmacokinetic parameters for multienzymes_lipase_protease_etc. |
| popPK | Hagemeyer_2026 | irrelevant | 0 | 0 | The paper is an in-vitro NMR study of griselimycin's membrane permeability mechanism, not a pharmacokinetic study of multienzymes_lipase_protease_etc. |
| PD | Hagemeyer_2026 | not_relevant | 0 | 0 | The paper focuses on the structural conformation and membrane permeability mechanism of griselimycin using NMR, with no pharmacodynamic or exposure-response data. |
| PD | Haranaka_1985 | not_relevant | 0 | 0 | The paper describes the purification and characterization of rabbit TNF, including its stability against various enzymes, but does not report any pharmacodynamic or exposure-response relationship for multienzymes. |
| popPK | Hartmann_2022 | irrelevant | 0 | 0 | The study is an in vitro comparison of physical properties and enzymatic activity of pancreatic enzyme supplements, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for the drug. |
| popPK | Heade_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of insulin (a peptide hormone) delivered via whey protein beads, not the drug multienzymes_lipase_protease_etc. |
| popPK | Hendeles_1990 | irrelevant | 0 | 0 | The study reports in vitro lipase activity and clinical therapeutic outcomes, not quantitative pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Jannin_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipid nanoparticle digestion, not a pharmacokinetic study of the enzymes as a subject drug. |
| popPK | Kihal_2020 | irrelevant | 0 | 0 | The study is an in vitro adsorption assay of mycotoxin binders on amino acids and vitamins, not a pharmacokinetic study of multienzymes. |
| popPK | Ling_2023 | irrelevant | 0 | 0 | The study investigates the digestion and absorption of ferulic acid in a food matrix, not the pharmacokinetics of multienzymes_lipase_protease_etc. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of salmon calcitonin (sCT) and puerarin (PR), not multienzymes/lipase/protease as the subject drug. |
| popPK | Lubkowicz_2022 | irrelevant | 0 | 0 | The study focuses on an engineered bacterial therapeutic (SYNB8802) for oxalate degradation, not the pharmacokinetics of multienzymes_lipase_protease_etc. |
| popPK | Löhr_2009 | irrelevant | 2 | 0 | The study investigates the physicochemical properties and release kinetics of pancreatin preparations (in vitro/mechanistic) rather than reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for the drug in a biological subject. |
| popPK | Mans_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sorafenib, not multienzymes_lipase_protease_etc. |
| popPK | Miljak_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and physicochemical properties of alpha-lipoic acid, not the pharmacokinetics of multienzymes_lipase_protease_etc. |
| PD | Miljak_2026 | not_relevant | 0 | 0 | The paper focuses on formulation, dissolution, permeability, and stability of alpha-lipoic acid cyclodextrin complexes, with no pharmacodynamic or exposure-response analysis. |
| popPK | Miyamori_1976 | irrelevant | 0 | 0 | The study investigates iron absorption in pancreatic disease, not the pharmacokinetics of multienzymes (lipase/protease) as a subject drug. |
| popPK | Moreau_1988 | irrelevant | 2 | 1 | The study measures the bioavailability (recovery rate) of lipase enzyme activity in the duodenum, which is a pharmacodynamic/functional assay rather than a pharmacokinetic study reporting disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Moss_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Tenofovir Disoproxil Fumarate (TDF), using pancrelipase only as an in-vitro degradation agent, not as the subject drug. |
| popPK | Nishiwaki_1993 | irrelevant | 0 | 0 | The study investigates renal hemodynamics and microcirculation in dogs with acute pancreatitis, not the pharmacokinetic parameters (CL, V, etc.) of multienzymes/lipase/protease. |
| popPK | Ofokansi_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefaclor (an antibiotic), not multienzymes_lipase_protease_etc. |
| popPK | Patil_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a prodrug stimulant (PRX-P4-003) and its parent fencamfamine, not on the pharmacokinetic parameters of multienzymes (lipase/protease) themselves. |
| PD | Penn_2008 | not_relevant | 0 | 0 | The paper describes qualitative mechanisms of cytotoxicity and survival outcomes in a shock model, but does not report any numeric concentration-effect or dose-response parameters for the enzymes or mediators. |
| popPK | Preisich_1976 | irrelevant | 0 | 0 | The study focuses on the enzymatic activity and therapeutic efficacy of a pancreatin compound (Fermento duodenal) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| popPK | Pu_2020 | irrelevant | 0 | 0 | The study focuses on the physicochemical characterization and in-vitro digestion stability of resveratrol-loaded nanoparticles, not the pharmacokinetics of multienzymes_lipase_protease_etc. |
| popPK | Rutzke_2004 | irrelevant | 0 | 0 | The study investigates iron bioavailability from spinach using an in vitro Caco-2 cell model, not the pharmacokinetics of multienzymes_lipase_protease_etc. |
| popPK | Ruzik_2016 | irrelevant | 0 | 0 | The study is an in vitro analysis of copper bioaccessibility in Açaí berries using digestive enzymes (pepsin/pancreatin) as tools, not a pharmacokinetic study of the enzymes themselves. |
| popPK | Samant_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ribociclib, not multienzymes_lipase_protease_etc. |
| PD | Samant_2018 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of ribociclib, specifically assessing the impact of gastric pH and food intake on bioavailability using PBPK and PopPK models, but does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Selmani_2024 | irrelevant | 0 | 0 | The study investigates the physicochemical stability and protein corona formation of selenium nanoparticles in simulated gastrointestinal fluids, not the pharmacokinetics of multienzymes. |
| popPK | Shen_1994 | irrelevant | 0 | 0 | The study is an in-vitro method for estimating mineral bioavailability and does not report pharmacokinetic parameters for multienzymes_lipase_protease_etc. |
| popPK | Shivakumar_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and characterization of enzyme-conjugated nanofibers for tissue engineering, not the pharmacokinetics of the enzymes as drugs. |
| popPK | Stewart_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme stability during simulated digestion, not a pharmacokinetic study of a specific drug subject. |
| PD | Stewart_2019 | not_relevant | 0 | 0 | The paper describes the inactivation of digestive enzymes (pepsin/pancreatin) over time in an in vitro model, which is a stability/kinetics study of the enzyme itself, not a pharmacodynamic exposure-response relationship for a drug. |
| popPK | Stumpf_2014 | irrelevant | 0 | 0 | The study evaluates the efficacy of pancreatic enzymes for clearing occluded feeding tubes and does not report any pharmacokinetic parameters. |
| popPK | Syed_2022 | irrelevant | 0 | 0 | The study focuses on the formulation and in-vitro release kinetics of fesoterodine, not the pharmacokinetics of multienzymes_lipase_protease_etc. |
| PD | Syed_2022 | not_relevant | 0 | 0 | The paper is a pharmaceutical formulation study focusing on the in vitro drug release kinetics of Fesoterodine minitablets and does not contain any pharmacodynamic or exposure-response data. |
| popPK | Tran_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of GLP-1/GIP co-agonist peptides (LY, semaglutide) and the mechanism of the permeation enhancer sodium caprate, not the drug multienzymes_lipase_protease_etc. |
| PD | Umeadi_2008 | not_relevant | 2 | 1 | The study reports qualitative inhibition results at single fixed concentrations without deriving numeric PD parameters like IC50 or Emax. |
| popPK | Unal_2005 | irrelevant | 0 | 0 | The study is an in vitro analysis of calcium bioavailability in dairy products and does not report pharmacokinetic parameters for multienzymes_lipase_protease_etc. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper is a food science study on the microencapsulation and in vitro digestion of yak butter, not a pharmacokinetic study of a drug. |
| popPK | Wen_2017 | irrelevant | 0 | 0 | The study is a dermatological toxicity model using pancreatin (enzymes) as an irritant, not a pharmacokinetic study of drug disposition. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The paper studies the speciation of copper in simulated digestive juice, not the pharmacokinetics of multienzymes_lipase_protease_etc. |
| popPK | Xiang_2017 | irrelevant | 0 | 0 | The study is an in vitro investigation of the gastrointestinal stability of flavonoids (dihydromyricetin, myricetin, myricitrin), not a pharmacokinetic study of multienzymes_lipase_protease_etc. |
| popPK | Zamani_2020 | irrelevant | 0 | 0 | The study focuses on the physico-chemical properties and in vitro release of flaxseed oil from liposomes, not the pharmacokinetics of multienzymes. |
| popPK | Zarei_2021 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro digestibility of a vitamin B3 derivative (nicotinamide riboside), not the pharmacokinetics of multienzymes/lipase/protease. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 25 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title/header for an abstract book and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
