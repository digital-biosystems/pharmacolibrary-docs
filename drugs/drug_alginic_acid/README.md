<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;alginic acid&quot;}]"></div>

# alginic acid

- **generic name:** alginic acid
- **ATC codes:** `A02BX13`
- **DrugBank:** [DB13518](https://go.drugbank.com/drugs/DB13518) · **PubChem:** [CID 131704328](https://pubchem.ncbi.nlm.nih.gov/compound/131704328)
- **groups:** approved, investigational, withdrawn

## About

Alginic acid, a polysaccharide from brown algae, is used for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease. It is an approved medicine, though some products have been withdrawn, and it is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422092](https://www.wikidata.org/wiki/Q422092) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:16 | 3:53 | 0/0/0 | 0/0/0 | 0/0/0 | 313,678/9,992 | einfracz / qwen3.8-27b | 27 | 7/48 | 27/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10543 matched, 137 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Su_2026.pdf` | Su YC et al., Targeted hybrid nanogels for sialic aci…, International journal of bi… (2026) | pd | 4 | [10.1016/j.ijbiomac.2026.153003](https://doi.org/10.1016/j.ijbiomac.2026.153003) | [42276469](https://www.ncbi.nlm.nih.gov/pubmed/42276469) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-15T03:15:04.363312+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | A_2021 | irrelevant | 2 | 0 | The paper evaluates biodistribution and imaging of alginate (a polymer) in mice but does not report standard quantitative population-pharmacokinetic parameters (CL, V, ka, t1/2 with V) for alginic acid as a small-molecule drug. |
| popPK | Abd-Elghany_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of simvastatin using alginate as a coating excipient, not the pharmacokinetics of alginic acid itself. |
| popPK | Atwal_2026 | irrelevant | 0 | 0 | The study investigates the in vitro release kinetics of platelet-derived factors from alginate microparticles, not the systemic pharmacokinetics of alginic acid itself. |
| popPK | Barry_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vancomycin, not alginic acid. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for therapeutic enzymes in lysosomal storage diseases, and does not report any PK parameters for alginic acid. |
| PD | Barzel_2026 | not_relevant | 3 | 0 | The paper is a review of therapeutic enzymes in lysosomal storage diseases and does not contain any data, analysis, or parameters for alginic acid. |
| popPK | Bayer_1992 | irrelevant | 0 | 0 | The study investigates alginase (an enzyme) and alginate (a bacterial exopolysaccharide) in an infection model, not the pharmacokinetics of the drug alginic acid. |
| popPK | Cao_2016 | irrelevant | 0 | 0 | The study investigates the binding and diffusion of tobramycin in alginate beads as a biofilm model, not the pharmacokinetics of alginic acid as a drug. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The study focuses on resource recovery (phosphorus and alginate extraction) from wastewater sludge and contains no pharmacokinetic parameters for alginic acid. |
| popPK | Chen_2022_2 | irrelevant | 0 | 0 | The paper focuses on the formulation and delivery of quercetin using alginate-coated nanoparticles, not the pharmacokinetics of alginic acid. |
| popPK | Chirizzi_2025 | irrelevant | 0 | 0 | The study investigates the delivery of paclitaxel using alginate as a material component, not the pharmacokinetics of alginic acid itself. |
| popPK | Cohen_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bovine serum albumin (BSA) delivered via alginate-based microcapsules, not alginic acid itself. |
| popPK | Delavenne_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rFIX-FP (Factor IX) in haemophilia B, not alginic acid. |
| PD | Delavenne_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model validation for rFIX-FP but does not report any pharmacodynamic (PD) or exposure-response relationship, as the drug's effect (hemostasis) is managed via target concentration thresholds rather than a modeled effect-response curve. |
| popPK | Eivazzadeh-Keihan_2023 | irrelevant | 0 | 0 | The paper reports on the synthesis and characterization of a magnetic nanocomposite material, not the pharmacokinetics of alginic acid. |
| popPK | El-Ashmawy_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of the drug gliclazide using an alginate formulation, rather than evaluating the pharmacokinetic parameters of alginic acid itself. |
| popPK | El_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ciprofloxacin, not alginic acid. |
| PD | El_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of ciprofloxacin and its exposure-response to a static AUC/MIC target, not on the pharmacodynamics of alginic acid. |
| popPK | Eleveld_2026 | irrelevant | 0 | 0 | The paper is a methodological comparison of software tools (OpenPMX vs. NONMEM) using generic simulated datasets or unrelated examples, with no specific PK data or parameters for alginic_acid. |
| PD | Eleveld_2026 | not_relevant | 0 | 0 | The paper is a software validation study comparing estimation precision of OpenPMX vs NONMEM using simulated PK/PD datasets; it does not report a specific pharmacodynamic relationship or numeric PD parameters for alginic acid. |
| popPK | Fei_2025 | irrelevant | 0 | 0 | The paper describes a biomaterial hydrogel study for pulp regeneration where sodium alginate is a structural component, not a drug subject to pharmacokinetic analysis. |
| popPK | Fleten_2022 | irrelevant | 0 | 0 | The study focuses on the delivery and efficacy of cabazitaxel encapsulated in alginate microspheres, not the pharmacokinetics of alginic acid itself. |
| popPK | Fresquet-Molina_2025 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for vancomycin, not alginic acid. |
| PD | Fresquet-Molina_2025 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic (PK) models for vancomycin and does not report any pharmacodynamic (PD) or exposure-response relationships for alginic acid or any other drug. |
| popPK | Gallo_2017 | irrelevant | 0 | 0 | The paper focuses on the formulation and characterization of sodium cromoglycate microparticles, not the pharmacokinetics of alginic acid. |
| PD | Garnett_1993 | not_relevant | 1 | 0 | The text is a general review of GERD management that mentions alginic acid only as a drug class without providing any specific pharmacodynamic data, exposure-response relationships, or numeric parameters. |
| popPK | Ghumman_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxcarbazepine, with alginate serving only as a formulation polymer (excipient), not as the subject drug. |
| popPK | Goeyvaerts_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mosnodenvir (a dengue antiviral), not alginic acid. |
| popPK | Govan_1983 | irrelevant | 0 | 0 | The study investigates the heterogeneity and pulmonary survival of alginate-producing Pseudomonas aeruginosa in rats, not the pharmacokinetics of alginic acid. |
| popPK | Guidi_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of isavuconazole, not alginic_acid. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of colistin and imipenem, not the pharmacokinetics of alginic acid. |
| popPK | Han_2024 | irrelevant | 0 | 0 | The paper is a materials science study on magnesium boride-alginate hydrogels for cell rejuvenation and does not report pharmacokinetic parameters for alginic acid. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of iclepertin, not alginic acid. |
| popPK | Hattab_1981 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of fluoride (a constituent element) rather than the pharmacokinetic disposition parameters (CL, V, ka) of the drug alginic acid itself. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of calaspargase pegol (CalPEG), not alginic acid. |
| popPK | Horhota_1976 | irrelevant | 0 | 0 | The study investigates the physical stability and dissolution characteristics of tablet formulations containing an alginate derivative, not the pharmacokinetics of alginic acid in a biological subject. |
| popPK | Hsu_2026 | irrelevant | 0 | 0 | The paper is a methodological study on population PK modeling strategies using simulated data and does not involve the drug alginic acid. |
| PD | Hsu_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PopPK) covariate identification methods and simulation power, with no mention of alginic acid or any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The paper studies astaxanthin-loaded microcapsules using alginate as a coating material, not the pharmacokinetics of alginic acid. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological study evaluating an automated PopPK modeling software (nlmixr2auto) on 22 general datasets, with no specific mention of alginic acid as the subject drug. |
| PD | Huang_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling methods and does not report any pharmacodynamic (PD) or exposure-response relationships for alginic acid or any other drug. |
| popPK | Husheng_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for vancomycin, not alginic acid. |
| PD | Husheng_2026 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic (PK) models for vancomycin and does not report any pharmacodynamic (PD) or exposure-response relationships for alginic acid or any other drug. |
| PD | Ibrahim_2025 | not_relevant | 0 | 0 | The paper focuses on the extraction and characterization of mango peel bioactive compounds and their antimicrobial/antioxidant properties; it does not report a pharmacodynamic or exposure-response relationship for alginic acid. |
| popPK | Jaafar_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of insulin delivered via alginate nanoparticles; alginate acts as a drug delivery excipient/coating rather than the subject drug. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of rivaroxaban, not alginic acid. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not alginic acid, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Jiao_2024 | irrelevant | 0 | 0 | The paper focuses on the mechanical properties and 3D bioprinting of alginate-based biomaterials for artificial blood vessels, not the pharmacokinetics of alginic acid. |
| popPK | Jin_2026 | irrelevant | 0 | 0 | The study focuses on the immunomodulatory and osteogenic effects of a hydrogel biomaterial in rats, not on the pharmacokinetic parameters of alginic acid. |
| popPK | Johansen_1994 | irrelevant | 0 | 0 | The study focuses on the clearance of Pseudomonas aeruginosa bacteria in rat lungs, not the pharmacokinetic parameters (CL, V, t1/2) of alginic acid as a drug. |
| popPK | Johansen_1994_2 | irrelevant | 0 | 0 | The paper is an immunological study on Pseudomonas aeruginosa vaccines in rats, where alginate serves as an antigen component, not a drug subject to pharmacokinetic analysis. |
| popPK | Jovanović_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of adalimumab, not alginic acid. |
| PD | Jovanović_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of Adalimumab, reporting parameters like clearance and volume of distribution, but contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Ju_2023 | irrelevant | 0 | 0 | The paper is a review on extracellular vesicles and hydrogels for tissue repair and does not study the pharmacokinetics of alginic acid. |
| popPK | Karabasz_2019 | irrelevant | 0 | 0 | The study focuses on the toxicity and anticancer activity of a curcumin-alginate conjugate in mice, containing no pharmacokinetic parameters for alginic acid. |
| popPK | Karakas_2022 | irrelevant | 0 | 0 | The study investigates alginate-pectin beads as a delivery system for ellagic acid, not the pharmacokinetics of alginic acid itself, and reports no PK parameters. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a general benchmarking framework for population pharmacokinetic covariate modeling methods and does not report specific pharmacokinetic parameters for alginic_acid. |
| PD | Karlsen_2026 | not_relevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building in population pharmacokinetics (popPK) using simulated data; it does not report any pharmacodynamic (PD) or exposure-response relationships for alginic acid or any other drug. |
| popPK | Kawashima_1989 | irrelevant | 0 | 0 | The provided evidence is empty (contains only metadata), so no pharmacokinetic data for alginic_acid is present. |
| popPK | Kawashima_1990 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and headers, with no scientific content regarding alginic acid pharmacokinetics. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The paper investigates the inhibition of bacterial alginate synthesis by ebselen and its analogues in Pseudomonas aeruginosa, not the pharmacokinetics of alginic acid. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The study focuses on the delivery of bacteriophages using alginate microspheres and does not report pharmacokinetic parameters for alginic acid. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bevacizumab (CT-P16), not alginic acid. |
| PD | Kim_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bevacizumab (CT-P16) and compares PK parameters, but it does not report a pharmacodynamic (PD) model or exposure-response relationship with numeric PD parameters (e.g., Emax, EC50); it only references a published exposure benchmark for context. |
| PD | Klöck_1997 | not_relevant | 0 | 0 | The paper reports qualitative biocompatibility and lack of mitogenic activity for alginic acid, but provides no numeric concentration-effect or dose-response data. |
| PD | Kolahdoozan_2024 | not_relevant | 2 | 1 | The paper focuses on optimizing extraction parameters (temperature, time, power) to maximize antioxidant activity (DPPH) and does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for the drug in a biological system. |
| popPK | Kong_2025 | irrelevant | 0 | 0 | The paper describes a software framework (PKPy) and uses Theophylline or simulated data for validation, not alginic acid. |
| PD | Kong_2025 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) software framework and analyzes theophylline PK data; it contains no pharmacodynamic (PD) or exposure-response analysis for alginic acid or any other drug. |
| popPK | Kou_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and therapeutic effects of tetrandrine (a natural alkaloid) delivered via alginate nanogels, not on alginic acid as the subject drug. |
| popPK | Kovach_2017 | irrelevant | 0 | 0 | The paper studies the mechanical properties of bacterial biofilms containing alginate, not the pharmacokinetics of alginic acid as a drug. |
| popPK | Kumar_2023 | irrelevant | 0 | 0 | The study focuses on the hemostatic and wound-healing efficacy of alginate hydrogels, not the population pharmacokinetics (CL, V, etc.) of alginic acid. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The study is a methodological benchmark using warfarin, theophylline, and tobramycin, not a pharmacokinetic study of alginic_acid. |
| PD | Kwack_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling for warfarin, theophylline, and tobramycin, and does not report any pharmacodynamic (PD) or exposure-response relationships for alginic acid. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of a sodium alginate hydrogel for gastric ulcers, not the pharmacokinetic parameters of alginic acid. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of remimazolam tosilate, not alginic acid. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PopPK and PBPK) modeling for dose recommendation and does not report any pharmacodynamic or exposure-response analysis. |
| PD | Liew_2006 | not_relevant | 0 | 0 | The paper focuses on pharmaceutical formulation and drug release kinetics from alginate matrices, not on the pharmacodynamic (exposure-response) relationship of alginic acid itself. |
| popPK | Lin_2024 | irrelevant | 0 | 0 | The study focuses on the formulation and release of curcumin tablets using sodium alginate as an excipient, not the pharmacokinetics of alginic acid. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study focuses on rutin encapsulation in emulsions for colon targeting, not the pharmacokinetics of alginic acid. |
| PD | Luciani-Giacobbe_2021 | not_relevant | 0 | 0 | The paper reports pharmacokinetic (bioavailability) and dissolution data, but does not provide a pharmacodynamic (exposure-response or dose-response) analysis or numeric PD parameters. |
| popPK | Ma_2023 | irrelevant | 0 | 0 | The paper describes the use of sodium alginate sponges for microplastic removal in water, which is an environmental engineering/materials science study, not a pharmacokinetic study. |
| popPK | Madgulkar_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lopinavir (using alginic acid as a formulation excipient), not alginic acid itself. |
| popPK | Mamdouh_2019 | irrelevant | 0 | 0 | The study investigates the formulation and release kinetics of nimodipine using sodium alginate as an excipient, not the pharmacokinetics of alginic acid itself. |
| popPK | Masoumi_2020 | irrelevant | 0 | 0 | The study focuses on buprenorphine-loaded nanoparticles using alginate as a carrier material, not on the pharmacokinetics of alginic acid itself. |
| popPK | McKellar_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetics for fenbendazole, not alginic_acid, which is only mentioned as a vehicle (alginate suspension) for the subject drug. |
| popPK | Moghadam_1990 | irrelevant | 0 | 0 | The paper is a dental technique description for provisional restorations using alginate impressions, not a pharmacokinetic study of alginic acid. |
| popPK | Moghadamnia_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ibuprofen, with alginic acid used only as a formulation excipient, not as the subject drug. |
| popPK | Mori_2018 | irrelevant | 0 | 0 | The study focuses on the formulation and physicochemical characterization of β-carotene hydrogels using sodium alginate as a stabilizer, not on the pharmacokinetics of alginic acid. |
| PD | Murata_2016 | not_relevant | 0 | 0 | The paper investigates the effect of alginic acid on the dissolution rate of valsartan from film dosage forms, which is a pharmaceutical formulation/dissolution study, not a pharmacodynamic (exposure-response) or dose-response analysis of alginic acid's biological effect. |
| popPK | Naeem_2023 | irrelevant | 0 | 0 | The study focuses on the formulation of puerarin-loaded hydrogels using sodium alginate as an excipient, not the pharmacokinetics of alginic acid. |
| popPK | Nazarov_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gentamicin as the subject drug, using alginic acid only as a formulation polymer/comparator. |
| popPK | Niu_2019 | irrelevant | 0 | 0 | The study focuses on diclofenac sodium as the subject drug, with sodium alginate acting only as a delivery excipient, and does not report PK parameters for alginic acid. |
| popPK | Noureen_2022 | irrelevant | 0 | 0 | The paper investigates a drug delivery system (alginate microspheres for tramadol) and does not report pharmacokinetic parameters (CL, V, etc.) for alginic acid itself. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of elafibranor and GFT1007, not alginic acid. |
| popPK | P_2016 | irrelevant | 0 | 0 | The study focuses on curcumin-loaded alginate nanogels for drug delivery, not the pharmacokinetics of alginic acid itself, and contains no PK parameters. |
| popPK | Redman_2021 | irrelevant | 0 | 0 | The study investigates the efficacy of glycoside hydrolases for biofilm dispersal and does not report pharmacokinetic parameters for alginic acid. |
| popPK | Ristow_1982 | irrelevant | 0 | 0 | The study examines the bioavailability of folic acid in the presence of sodium alginate (a fiber), not the pharmacokinetics of alginate itself. |
| PD | Sanchez-Ballester_2021 | not_relevant | 0 | 0 | The paper is a review of alginic acid as a pharmaceutical excipient focusing on structure-property relationships for tablet formulation, not pharmacodynamic or exposure-response relationships. |
| popPK | Sattar_2024 | irrelevant | 0 | 0 | The study focuses on the in-vitro drug release of ciprofloxacin from alginate-based nanocarriers, not the pharmacokinetics of alginic acid itself. |
| popPK | Schweizer_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a monoclonal antibody delivered via an alginate formulation, not the pharmacokinetics of alginic acid itself as the subject drug. |
| popPK | Seth_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a dipeptidyl peptidase-IV inhibitor using magnetic beads (containing alginate as a carrier material), not alginic acid as the subject drug. |
| popPK | Sethuramalingam_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of asparaginase, not alginic acid. |
| PD | Sethuramalingam_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of asparaginase and does not contain any data, analysis, or mention of alginic acid. |
| PD | Sharma_2017 | not_relevant | 0 | 0 | The paper describes the adsorption of a metal ion by a nanohydrogel, which is a physicochemical process, not a pharmacodynamic drug-response relationship. |
| popPK | Shinde_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of azelastine, not alginic acid, which is used only as a formulation excipient. |
| popPK | Shiraishi_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of indomethacin using alginate as an excipient/comparator, not the pharmacokinetics of alginic acid itself. |
| popPK | Shiraishi_1993 | irrelevant | 0 | 0 | The provided evidence contains no scientific text, parameters, or data for alginic acid. |
| popPK | Song_2022 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| PD | Su_2026 | not_relevant | 3 | 2 | The paper reports an IC50 value for the nanogel formulation, which is a dose-response parameter, but it does not provide a formal PK/PD model, exposure-response analysis, or detailed concentration-effect curve for alginic acid itself; the focus is on nanocarrier design and efficacy rather than pharmacodynamic modeling. |
| popPK | Sunnåker_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitiperstat, not alginic_acid. |
| PD | Sunnåker_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (popPK) model for mitiperstat, not alginic acid, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Surendran_2022 | irrelevant | 0 | 0 | The study focuses on the formulation and characterization of rutin-loaded chitosan-alginate nanoparticles for antidiabetic purposes, not the pharmacokinetics of alginic acid. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of 5-fluorouracil pharmacokinetics and does not contain any data regarding alginic acid. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil and does not report any pharmacodynamic (PD) or exposure-response relationships for alginic acid or any other drug. |
| PD | Syad_2013 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of crude extracts, not a pharmacodynamic exposure-response relationship for the specific drug alginic acid in a biological system. |
| popPK | Sürmelioğlu_2026 | irrelevant | 0 | 0 | The paper is a systematic review of vancomycin pharmacokinetics, which is a different drug entirely and does not report data for alginic acid. |
| PD | Sürmelioğlu_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PopPK) studies for vancomycin, not alginic acid, and focuses on PK parameters (clearance, volume) rather than pharmacodynamic (PD) or exposure-response relationships. |
| PD | Taha_2005 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro drug release kinetics of alginic acid beads, not a pharmacodynamic or exposure-response relationship for the drug itself. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of 5-fluorouracil (5-FU), not alginic acid. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetic (PK) modeling of 5-fluorouracil (5-FU) and does not contain any pharmacodynamic (PD) or exposure-response analysis for alginic acid or any other drug. |
| popPK | Trinh_2023 | irrelevant | 0 | 0 | The paper describes alginate as a drug delivery excipient for acetaminophen and reports no pharmacokinetic parameters for alginic acid itself. |
| popPK | Tulbah_2026 | irrelevant | 0 | 0 | The paper is a review of PKPD models for anesthetic agents (e.g., propofol, remifentanil) and does not study alginic_acid. |
| PD | Tulbah_2026 | not_relevant | 0 | 0 | The paper is a review of PK/PD models for anesthetic agents (propofol, remifentanil, fentanyl, etc.) and does not contain any data, analysis, or parameters for alginic acid. |
| popPK | Wafa_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pilocarpine nitrate using alginate as a delivery vehicle, not the disposition parameters of alginic acid itself. |
| PD | Wang_2018 | not_relevant | 0 | 0 | The paper focuses on the formulation, stability, and qualitative antitumor efficacy of nanogels, without reporting any quantitative pharmacodynamic or exposure-response models or numeric PD parameters. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The study focuses on curcumin release and antioxidant activity from alginate hydrogel beads, not the pharmacokinetics of alginic acid itself. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper evaluates a drug delivery vehicle using model drugs (Zolmitriptan, Etodolac), not the pharmacokinetics of alginic acid itself. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on a sodium alginate-based hydrogel for intervertebral disc repair, not the pharmacokinetics of alginic acid as a drug. |
| popPK | Wang_2024_2 | irrelevant | 0 | 0 | The study focuses on sodium alginate as a nanocarrier component for rapeseed-derived peptides, not on the pharmacokinetics of alginic acid itself. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper describes a drug delivery system using sodium alginate as a matrix for CO therapy and chemotherapy, not a pharmacokinetic study of alginic acid itself. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a review and model library for polymyxin B, not alginic acid. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling of polymyxin B and does not report any pharmacodynamic (PD) or exposure-response relationships for alginic acid. |
| popPK | Winkler_1985 | irrelevant | 0 | 0 | The paper is a review of Pseudomonas aeruginosa infections in cystic fibrosis and discusses alginic acid only as a bacterial exopolysaccharide, not as a drug with pharmacokinetic parameters. |
| popPK | Woods_1985 | irrelevant | 0 | 0 | This is an immunology study regarding alginate as a protective immunogen against bacterial infection, not a pharmacokinetic study of alginic acid disposition parameters. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The study focuses on sodium alginate as a coating for liposomes containing collagen peptides in an in vitro setting, with no pharmacokinetic parameters for alginic acid. |
| PD | Wu_2025 | not_relevant | 0 | 0 | The paper describes the synthesis of a modified alginate hydrogel for heavy metal adsorption and reports adsorption isotherm/kinetic parameters, which are physicochemical material properties, not pharmacodynamic (drug exposure-response) relationships. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for bosutinib, not alginic_acid. |
| PD | Wu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for bosutinib, not alginic acid, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tacrolimus, not alginic_acid. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, not alginic acid, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of daptomycin, not alginic acid. |
| PD | Xie_2026 | not_relevant | 0 | 0 | The paper focuses on daptomycin population pharmacokinetics (PopPK) and precision dosing, not alginic acid, and does not report pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of polymyxin B, not alginic acid. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling and exposure prediction (AUC) for polymyxin B, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Yomota_1994 | irrelevant | 0 | 0 | The provided text is metadata regarding a software tool (GROBID) and does not contain any scientific content or data regarding alginic acid pharmacokinetics. |
| popPK | Yu_2019 | irrelevant | 0 | 0 | The paper focuses on alginate-chitosan coated nanocomposites for oral vaccine delivery and cellular uptake, not the pharmacokinetics of alginic acid. |
| popPK | Zaidi_2026 | irrelevant | 0 | 0 | The paper is a systematic review of opioid pharmacokinetics in pregnancy and does not contain data for alginic acid. |
| PD | Zaidi_2026 | not_relevant | 0 | 0 | The paper is a systematic review of opioid pharmacokinetics in pregnancy and does not contain any data, analysis, or parameters for alginic acid. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper focuses on the fabrication and physical characterization of salidroside emulsions using sodium alginate as a stabilizer, not the pharmacokinetics of alginic acid. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for linezolid, not alginic acid. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PopPK) and machine learning for concentration prediction of linezolid, with no pharmacodynamic (PD) modeling, exposure-response analysis, or numeric PD parameters reported. |
| popPK | Zhenyan_2026 | irrelevant | 0 | 0 | The paper is a systematic review of rituximab pharmacokinetics, not a study on alginic acid. |
| PD | Zhenyan_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetics (PK) for rituximab, not alginic acid, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Zhong_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a doxorubicin-loaded nanoparticle formulation, not the drug alginic acid itself. |
| popPK | Zou_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cyanidin-3-O-glucoside (C3G) delivered by alginate, not the pharmacokinetic parameters of alginic acid itself. |
| popPK | Zussman_2022 | irrelevant | 0 | 0 | The study investigates metronidazole release from hydrogels, not the pharmacokinetics of alginic acid. |
| PD | unknown_1991 | not_relevant | 1 | 0 | The paper is a clinical trial comparing fixed-dose combinations and reports only qualitative symptom improvements and healing rates, with no concentration-effect data, PK/PD modeling, or numeric PD parameters. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for immunoglobulins (IVIg/SCIg) and does not study alginic acid. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for immunoglobulins (IVIg/SCIg) and does not contain any data, analysis, or parameters for alginic acid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
