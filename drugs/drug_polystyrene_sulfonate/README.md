<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;polystyrene sulfonate&quot;}]"></div>

# polystyrene sulfonate

- **generic name:** polystyrene sulfonate
- **ATC codes:** `V03AE01`
- **DrugBank:** [DB01344](https://go.drugbank.com/drugs/DB01344) · **PubChem:** none
- **groups:** approved

## About

Polystyrene sulfonate is a polymer used to treat high blood potassium. It is administered orally as a suspension or powder with a meal, or rectally as a retention enema. The drug is poorly absorbed by mouth.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3395465](https://www.wikidata.org/wiki/Q3395465), [Wikipedia](https://en.wikipedia.org/wiki/Polystyrene_sulfonate?oldid=1329210386) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schmaus_2025_HA_degradation](drugs/drug_polystyrene_sulfonate/pd_Schmaus_2025_HA_degradation.md) | HA degradation by CEMIP ← polystyrene_sulfonate · direct sigmoid Emax (Hill) effect | — | Schmaus A et al., A Novel, Cell-Compatible Hyaluronidase…, Cells (2025) | [10.3390/cells14020101](https://doi.org/10.3390/cells14020101) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:35 | 0:04 | 0/0/0 | 1/0/0 | 0/0/0 | 3,925/169 | einfracz / qwen3.8-27b | 13 | 1/12 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 43 matched, 39 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alsohaimi_2024 | irrelevant | 0 | 0 | The paper describes a material science study on a polystyrene sulfonate-modified activated carbon composite used for photocatalytic degradation of a dye, not a pharmacokinetic study of the drug polystyrene sulfonate. |
| PGx | Alsohaimi_2024 | not_relevant | 0 | 0 | The paper concerns the synthesis of a photocatalyst for degrading methylene blue dye, not pharmacogenomics or drug PK/PD. |
| popPK | Anderson_2000 | irrelevant | 0 | 0 | The study evaluates polystyrene sulfonate as a contraceptive/antimicrobial agent using in-vitro and animal functional assays (sperm inhibition, viral/bacterial reduction) and does not report pharmacokinetic parameters. |
| PGx | Anderson_2000 | not_relevant | 0 | 0 | The paper evaluates polystyrene sulfonate as a contraceptive/antimicrobial agent but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Barker_2006 | irrelevant | 0 | 0 | The study focuses on tolevamer, not polystyrene_sulfonate. |
| PGx | Barker_2006 | not_relevant | 0 | 0 | The paper discusses tolevamer, not polystyrene sulfonate, and does not report pharmacogenomic effects. |
| popPK | Bridgeman_2019 | irrelevant | 0 | 0 | The paper is a review focusing on the pharmacology, dosing, and clinical efficacy of potassium-lowering agents for hyperkalemia, rather than providing original quantitative pharmacokinetic disposition parameters (CL, V, etc.) for polystyrene sulfonate. |
| PGx | Bridgeman_2019 | not_relevant | 0 | 0 | The paper is a general pharmacology and dosing review of hyperkalemia agents and does not report pharmacogenomic effects. |
| popPK | Budovich_2014 | irrelevant | 0 | 0 | The paper is a case report regarding daptomycin-induced hyperkalemia where polystyrene_sulfonate is used as a therapeutic agent for potassium reduction, not as the subject of a pharmacokinetic study. |
| PGx | Budovich_2014 | not_relevant | 0 | 0 | The paper reports a case of daptomycin-induced hyperkalemia treated with sodium polystyrene sulfonate, containing no pharmacogenomic analysis or PK/PD data for polystyrene sulfonate. |
| popPK | Capitanini_2016 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on the pathological side effects (necrotizing colitis) of sodium polystyrene sulfonate, not a pharmacokinetic study, and contains no quantitative disposition parameters (CL, V, t1/2, etc.). |
| PGx | Capitanini_2016 | not_relevant | 0 | 0 | The paper reports a case of adverse gastrointestinal side effects (colitis) from sodium polystyrene sulfonate, with no mention of genetic variants affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Davidson_2018 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic effects (ion excretion) in mice rather than pharmacokinetic disposition parameters (CL, V, etc.) for polystyrene_sulfonate. |
| PGx | Davidson_2018 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of potassium binders (RDX7675, SPS, patiromer) in mice and does not involve gene variants or pharmacogenomics. |
| popPK | Delmo_2022 | irrelevant | 0 | 0 | This is an electrochemistry paper on ion-selective electrodes; polystyrene sulfonate appears only as PEDOT:PSS material, with no pharmacokinetic data. |
| popPK | Dong_2024 | irrelevant | 0 | 0 | The study investigates polystyrene sulfonate as a drug carrier for ligustrazine phosphate, not as the subject drug, and does not report PK parameters for polystyrene sulfonate itself. |
| PGx | Dong_2024 | not_relevant | 0 | 0 | The paper discusses polystyrene sulfonate resin as a drug delivery carrier and reports PK parameters, but it does not report any pharmacogenomic effects (gene variants) on PK/PD. |
| popPK | Douglas_1984 | irrelevant | 0 | 0 | The study investigates the regulation of aldosterone biosynthesis by potassium in rats and uses Kayexalate (a different drug) for manipulation, containing no pharmacokinetic data for polystyrene sulfonate. |
| PGx | Douglas_1984 | not_relevant | 0 | 0 | The paper investigates the physiological regulation of aldosterone by serum potassium and does not report any pharmacogenomic effects on the PK/PD of polystyrene sulfonate. |
| popPK | Epstein_2016 | irrelevant | 0 | 0 | The paper is a review of potassium homeostasis mechanisms and only mentions polystyrene sulfonate as a therapeutic context, without reporting any pharmacokinetic parameters. |
| PGx | Epstein_2016 | not_relevant | 0 | 0 | The paper is a review of potassium homeostasis mechanisms and does not report any pharmacogenomic effects (gene variants) on the PK/PD of polystyrene sulfonate. |
| popPK | Galeb_2021 | irrelevant | 0 | 0 | This is a review on melanins and analytical techniques with no polystyrene sulfonate PK data or parameters. |
| popPK | Gojo_2013 | irrelevant | 0 | 0 | This is a PK study of dinaciclib, not polystyrene sulfonate, which is only mentioned as a co-administered potassium binder for tumor lysis syndrome. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study of leptospirosis and does not investigate polystyrene sulfonate pharmacokinetics. |
| PGx | Jauréguiberry_2005 | not_relevant | 0 | 0 | The paper describes the clinical presentation of leptospirosis in patients and does not mention polystyrene_sulfonate or pharmacogenomics. |
| popPK | Ji_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of flavopiridol, not polystyrene_sulfonate. |
| PGx | Ji_2013 | not_relevant | 0 | 0 | The paper concerns flavopiridol, not polystyrene_sulfonate, and does not report pharmacogenomic effects. |
| popPK | Kessler_2011 | irrelevant | 0 | 0 | This is a clinical study of SPS as a potassium binder reporting potassium levels, not a pharmacokinetic study reporting disposition parameters for the drug itself. |
| PGx | Kessler_2011 | not_relevant | 0 | 0 | The study examines dose-response relationship of SPS on potassium but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD. |
| popPK | Kobayashi_2022 | irrelevant | 0 | 0 | The study evaluates patient satisfaction and efficacy of a formulation change (dry syrup vs. oral solution) and does not report any pharmacokinetic parameters (CL, V, t1/2) for polystyrene sulfonate. |
| PGx | Kobayashi_2022 | not_relevant | 0 | 0 | The study evaluates formulation changes (dry syrup vs oral solution) in CKD patients without analyzing any gene variants, genotypes, or phenotypes. |
| popPK | Kontarov_2015 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of the antiviral activity of polystyrene sulfonate, not a pharmacokinetic study. |
| PGx | Kontarov_2015 | not_relevant | 0 | 0 | The paper studies the antiviral activity of polystyrene sulfonate against influenza and contains no information about human pharmacogenomics, genetics, or genetic influence on PK/PD parameters. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of atropine sulfate using polystyrene sulfonate as an excipient/carrier, not as the subject drug. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper describes a formulation study of atropine using polystyrene sulfonate as a delivery system, not the pharmacokinetics or pharmacodynamics of polystyrene sulfonate itself, and reports no pharmacogenomic effects. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper investigates sodium polystyrene sulfonate (PSS) as a chemical additive to enhance enzymatic saccharification of biomass, not as a drug subject to pharmacokinetic analysis. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper reports on polystyrene sulfonate as a non-pharmaceutical biocatalysis enhancer, not as a drug, and does not involve pharmacogenomics. |
| popPK | Louie_2006 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy of tolevamer for treating C. difficile-associated diarrhea and does not report pharmacokinetic parameters (such as clearance or volume of distribution) for polystyrene sulfonate. |
| PGx | Louie_2006 | not_relevant | 0 | 0 | The paper reports a clinical trial of tolevamer for C. difficile infection with no mention of pharmacogenomics or genetic variants affecting PK/PD. |
| popPK | Mistry_2016 | irrelevant | 2 | 0 | This study evaluates the dose-response on serum potassium levels (clinical efficacy) rather than pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| PGx | Mistry_2016 | not_relevant | 0 | 0 | The study investigates the dose-response of sodium polystyrene sulfonate and the impact of clinical characteristics, but it does not examine any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Ndesendo_2015 | irrelevant | 0 | 0 | Polystyrene sulfonate is used only as a model drug in a formulation release study, not as a therapeutic agent for PK parameter estimation. |
| PGx | Ndesendo_2015 | not_relevant | 0 | 0 | The paper describes the development and physicochemical characterization of a drug delivery system using polystyrene sulfonate as a model drug, containing no genetic or pharmacogenomic data. |
| popPK | Nguyen_2022 | irrelevant | 0 | 0 | The paper is a clinical comparison of potassium reduction efficacy, not a pharmacokinetic study reporting disposition parameters like clearance or volume for polystyrene sulfonate. |
| PGx | Nguyen_2022 | not_relevant | 0 | 0 | The study compares two drugs for potassium reduction but does not investigate the influence of any gene variant or genotype on PK or PD parameters. |
| popPK | Olabemiwo_2017 | irrelevant | 0 | 0 | The paper is about using polystyrene sulfonate (PSS) as a coating material for fly ash to remove cadmium from water, which is an environmental/chemical engineering study, not a pharmacokinetic study of the drug polystyrene sulfonate (PS-Sodipus/Ca). |
| PGx | Olabemiwo_2017 | not_relevant | 0 | 0 | The paper concerns the environmental application of polystyrene sulfonate as an adsorbent for removing cadmium from water, not its pharmacokinetics or pharmacodynamics in humans. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper describes a nanofluidic drug delivery device and does not report pharmacokinetic parameters (CL, V, ka, etc.) for polystyrene_sulfonate. |
| PGx | Paci_2026 | not_relevant | 0 | 0 | The paper is about a nanofluidic electrochemical pump for drug delivery and does not involve pharmacogenomics or the drug polystyrene sulfonate. |
| popPK | Phelps_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for flavopiridol, not polystyrene_sulfonate. |
| PGx | Phelps_2009 | not_relevant | 0 | 0 | The paper studies flavopiridol, not polystyrene_sulfonate, and does not report pharmacogenomic effects on PK or PD. |
| popPK | Pitt_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics (potassium excretion) and safety of a resin, reporting no quantitative pharmacokinetic parameters (CL, Vd, ka, etc.) for the drug. |
| PGx | Pitt_2018 | not_relevant | 0 | 0 | The study reports standard pharmacodynamics in healthy volunteers and does not investigate any genetic variants or pharmacogenomic effects. |
| popPK | Prins-Can_2022 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of amitriptyline to assess drug interactions, not the disposition parameters of polystyrene sulfonate itself. |
| PGx | Prins-Can_2022 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between polystyrene sulfonate and amitriptyline, but does not involve any gene variants, genotypes, or pharmacogenomic analysis. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | Review of paediatric excipients; no PK parameters for polystyrene sulfonate are reported. |
| popPK | Schmaus_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study on hyaluronidase inhibition by various polymers (including polystyrene sulfonate) and does not contain any pharmacokinetic data for polystyrene sulfonate. |
| PGx | Schmaus_2025 | not_relevant | 0 | 0 | The paper investigates the inhibition of CEMIP hyaluronidase activity by sulfated polymers (including PSS) in a cell assay, which is a pharmacodynamic or biochemical effect, but it does not report on the pharmacokinetics or pharmacodynamics of polystyrene sulfonate itself, nor does it report a pharmacogenomic effect (gene variant changing the drug's PK/PD). |
| popPK | Stephens_2019 | irrelevant | 0 | 0 | The paper describes the radiolabeling and biodistribution of polystyrene sulfonate microspheres used as a vehicle for SIRT, not the pharmacokinetics of polystyrene sulfonate as a drug. |
| PGx | Stephens_2019 | not_relevant | 0 | 0 | The paper reports imaging characteristics of polystyrene sulfonate microspheres in rabbits, containing no pharmacogenomic analysis or data on how gene variants affect PK/PD parameters. |
| popPK | Tamanna_2015 | irrelevant | 0 | 0 | The paper investigates the release kinetics of gentamicin from drug carriers coated with polystyrene sulfonate (PSS), where PSS acts as a material/coating component rather than the subject drug for pharmacokinetic analysis. |
| PGx | Tamanna_2015 | not_relevant | 0 | 0 | The paper focuses on the drug delivery of gentamicin using polystyrene sulfonate (PSS) as a coating for mesoporous silica nanoparticles, not on the pharmacokinetics or pharmacodynamics of polystyrene sulfonate itself or its pharmacogenomic effects. |
| popPK | Thai_2025 | irrelevant | 0 | 0 | The study evaluates clinical efficacy (time to potassium normalization) and contains no pharmacokinetic parameters or models. |
| PGx | Thai_2025 | not_relevant | 0 | 0 | The paper compares the efficacy of two drugs for hyperkalemia but does not report any pharmacogenomic effects or genetic variants influencing PK/PD parameters. |
| popPK | Tomino_2007 | irrelevant | 0 | 0 | The study is a clinical efficacy trial measuring changes in serum potassium levels, not a pharmacokinetic study, and reports no disposition parameters for polystyrene sulfonate. |
| PGx | Tomino_2007 | not_relevant | 0 | 0 | The paper reports dose-response and drug-drug interactions (with RAAS inhibitors) but does not investigate the impact of genetic variants or genotypes on the pharmacokinetics or pharmacodynamics of polystyrene sulfonate. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The paper describes the development of a conductive sweat sensor using polystyrene sulfonate (PSS) as a material component, not a pharmacokinetic study of the drug Polystyrene Sulfonate. |
| PGx | Wu_2024 | not_relevant | 0 | 0 | The paper describes the fabrication of an electrochemical sensor using polystyrene sulfonate as a material, not its pharmacokinetic or pharmacodynamic properties or genetic interactions. |
| popPK | Yu_2017 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for hyperkalemia treatment and does not report any pharmacokinetic parameters (clearance, volume, etc.) for polystyrene sulfonate. |
| PGx | Yu_2017 | not_relevant | 0 | 0 | The paper investigates the general clinical efficacy of calcium polystyrene sulfonate in CKD patients without reporting any pharmacogenomic variants or genotype-specific effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolystyrene_sulfonate%5D&body=Drug%3A%20polystyrene_sulfonate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_polystyrene_sulfonate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
