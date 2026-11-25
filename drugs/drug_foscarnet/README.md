<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;foscarnet&quot;}]"></div>

# foscarnet

- **generic name:** foscarnet
- **ATC codes:** `J05AD01`
- **DrugBank:** [DB00529](https://go.drugbank.com/drugs/DB00529) · **PubChem:** [CID 3415](https://pubchem.ncbi.nlm.nih.gov/compound/3415)
- **molar mass:** 126.0053 g/mol (CH3O5P) — DrugBank
- **groups:** approved, investigational

## About

Foscarnet is an antiviral medication used to treat cytomegaloviral disease and herpes simplex infections. It is used as a generic medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q420387](https://www.wikidata.org/wiki/Q420387), [Wikipedia](https://en.wikipedia.org/wiki/Foscarnet?oldid=1373275641) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| foscarnet | parent | 126.005 | CH3O5P | DrugBank | [3415](https://pubchem.ncbi.nlm.nih.gov/compound/3415) | Ritschel_1985 |

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Ritschel_1985 · V ·/kg</text><circle cx="528.0" cy="30.0" r="4" fill="#ef6c00"><title>Ritschel_1985 · V ·/kg: 92.4 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Ritschel_1985 · V/F ·/kg</text><circle cx="513.5" cy="46.0" r="4" fill="#ef6c00"><title>Ritschel_1985 · V/F ·/kg: 84 L</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Ritschel_1985 · V1 ·/kg</text><circle cx="197.4" cy="62.0" r="4" fill="#ef6c00"><title>Ritschel_1985 · V1 ·/kg: 10.5 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Ritschel_1985_reference](drugs/drug_foscarnet/Foscarnet_Ritschel1985_reference.md) | — | 3-compartment (no model) | 5 | Ritschel WA et al., Pharmacokinetics of PFA (trisodium phos…, Methods and findings in exp… (1985) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Neyts_1997_HHV_8_DNA_synthesis](drugs/drug_foscarnet/pd_Neyts_1997_HHV_8_DNA_synthesis.md) | HHV-8 DNA synthesis ← foscarnet · inhibition effect | — | Neyts J et al., Antiviral drug susceptibility of human…, Antimicrobial agents and ch… (1997) | [10.1128/AAC.41.12.2754](https://doi.org/10.1128/AAC.41.12.2754) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:24 | 0:10 | 1/0/0 | 0/1/0 | 0/0/0 | 3,963/204 | einfracz / qwen3.8-27b | 27 | 5/22 | 27/0 | 0 |

## Coverage

- **PubMed hits:** 181 matched, 99 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agut_1989 | irrelevant | 0 | 0 | The study is an in-vitro antiviral susceptibility assay (IC50/IC90), not a pharmacokinetic study reporting disposition parameters. |
| PGx | Agut_1989 | not_relevant | 0 | 0 | The paper reports in vitro antiviral susceptibility of a virus to foscarnet, not the effect of a human gene variant on foscarnet's PK or PD parameters. |
| popPK | Akesson-Johansson_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy and resistance study that reports no pharmacokinetic parameters (CL, V, half-life) or compartmental models for foscarnet. |
| PGx | Akesson-Johansson_1986 | not_relevant | 0 | 0 | The paper reports clinical response and viral susceptibility to foscarnet but contains no data on pharmacogenomic variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Albadry_2024 | irrelevant | 0 | 0 | This liver CYP zonation study reports no foscarnet pharmacokinetic parameters. |
| popPK | Andrei_2000 | irrelevant | 0 | 0 | The paper is an antiviral activity study on ganciclovir derivatives where foscarnet is used only as a reference compound, with no pharmacokinetic parameters reported. |
| PGx | Andrei_2000 | not_relevant | 0 | 0 | The paper evaluates a new prodrug (ganciclovir elaidic acid ester) and does not report pharmacogenomic effects on the PK/PD of foscarnet. |
| popPK | Ansaar_2023 | irrelevant | 0 | 0 | The paper studies epirubicin, not foscarnet, and reports no foscarnet parameters. |
| popPK | Azzarolo_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of renal transporters, not a pharmacokinetic study of foscarnet, and foscarnet is only used as a control compound. |
| PGx | Azzarolo_1991 | not_relevant | 0 | 0 | The paper investigates the inhibition of renal sodium-phosphate cotransport by DIDS and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of foscarnet. |
| popPK | Ballout_2007 | irrelevant | 0 | 0 | The study reports in-vitro antiviral efficacy (EC50) against Epstein-Barr virus, not pharmacokinetic disposition parameters. |
| PGx | Ballout_2007 | not_relevant | 0 | 0 | The paper investigates antiviral efficacy (EC50) of foscarnet in cell lines but does not report any pharmacogenomic variants or genotypes affecting PK/PD. |
| popPK | Barsam_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rivaroxaban, not foscarnet. |
| PGx | Barsam_2017 | not_relevant | 0 | 0 | The paper investigates the effect of body weight and renal function on rivaroxaban pharmacokinetics, not foscarnet, and does not involve genetic variants. |
| popPK | Bemer_2013 | irrelevant | 0 | 0 | The study evaluates pharmacokinetic biomarkers for fludarabine, cyclophosphamide, and mycophenolate mofetil in hematopoietic cell transplant recipients, with no mention or data for foscarnet. |
| PGx | Bemer_2013 | not_relevant | 0 | 0 | The paper focuses on fludarabine, cyclophosphamide, and mycophenolate mofetil in HCT patients and does not mention foscarnet. |
| PGx | Benyahia_2025 | not_relevant | 0 | 0 | UL97 resistance is mentioned as context for treatment selection, but the paper does not report a genotype-related change in a foscarnet PK or PD parameter. |
| popPK | Bethge_1999 | irrelevant | 0 | 0 | The paper is a clinical case report on HHV-6 encephalitis treatment; foscarnet is used as a therapeutic agent, but no pharmacokinetic parameters (clearance, volume, half-life) for foscarnet are reported or measured. |
| PGx | Bethge_1999 | not_relevant | 0 | 0 | The paper is a case report of clinical treatment efficacy for HHV-6 encephalitis and does not investigate any gene variants or genotypes affecting foscarnet pharmacokinetics or pharmacodynamics. |
| popPK | Bhalla_2023 | irrelevant | 0 | 0 | The study focuses on bemcentinib and docetaxel in NSCLC patients and does not involve foscarnet or its pharmacokinetics. |
| PGx | Bhalla_2023 | not_relevant | 0 | 0 | The paper reports a Phase 1 trial of bemcentinib and docetaxel for lung cancer and does not mention foscarnet or any pharmacogenomic effects. |
| popPK | Borthwick_2005 | irrelevant | 0 | 0 | The paper focuses on the design of novel HCMV protease inhibitors and mentions foscarnet only as a comparator in the introduction; it contains no pharmacokinetic data or parameters for foscarnet. |
| PGx | Borthwick_2005 | not_relevant | 0 | 0 | The paper discusses the design of novel HCMV protease inhibitors and mentions foscarnet only as a background existing drug with limitations; it does not report any pharmacogenomic effects on the PK/PD of foscarnet. |
| popPK | Braidotti_2026 | irrelevant | 0 | 0 | The PK model and numeric parameters are for CMV-specific immunoglobulin; foscarnet is only mentioned as treatment. |
| popPK | Brand_2001 | irrelevant | 0 | 0 | The paper focuses on in vitro antiviral potency (EC50) of acyclovir, with foscarnet only mentioned as a comparator that showed no difference in activity between cell types, and no PK parameters are reported. |
| PGx | Brand_2001 | not_relevant | 0 | 0 | The paper focuses on acyclovir's potency differences due to cell type, not foscarnet's pharmacogenomics; foscarnet is only mentioned as a negative control without variant-specific data. |
| popPK | Call_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetics for rabbit antithymocyte globulin (rATG), not foscarnet. |
| PGx | Call_2009 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of rabbit antithymocyte globulin (rATG), not foscarnet, and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Camaioni_1990 | irrelevant | 1 | 0 | The paper focuses on the in-vitro anti-HIV activity and physical properties (protein binding) of a lipid conjugate, not the quantitative population pharmacokinetic parameters (CL, V, etc.) of foscarnet itself. |
| PGx | Camaioni_1990 | not_relevant | 0 | 0 | The paper describes the in vitro activity and protein binding properties of a lipid prodrug of foscarnet but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Cao_2001 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy assay for Hepatitis B and does not report pharmacokinetic parameters for foscarnet. |
| PGx | Cao_2001 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic effects of multiple drugs (lamivudine, FLG, etc.) on HBV markers, but does not contain pharmacogenomic data or focus on foscarnet. |
| popPK | Charvet_1994 | irrelevant | 0 | 0 | The paper describes in vitro synthesis and anti-HIV activity of prodrug conjugates, not the pharmacokinetic disposition parameters of foscarnet itself. |
| PGx | Charvet_1994 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro anti-HIV activity of phosphonoformate/acetate prodrugs of BCH-189, with no mention of foscarnet or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | This systematic review reports in-vitro antiviral EC50 values, not foscarnet disposition parameters. |
| popPK | Cheng_1999 | irrelevant | 0 | 0 | The paper describes a toxicology and efficacy study of a foscarnet prodrug (ODG-PFA) in rabbits, focusing on intraocular toxicity rather than reporting pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Cheng_1999 | not_relevant | 0 | 0 | The paper investigates intravitreal toxicology and formulation of a foscarnet prodrug in rabbits, with no mention of human genetic variants or pharmacogenomic effects. |
| popPK | Cherrier_2018 | irrelevant | 0 | 0 | The paper is a case report on CMV resistance and treatment efficacy, containing no pharmacokinetic parameter estimation for foscarnet. |
| PGx | Cherrier_2018 | not_relevant | 0 | 0 | The paper describes viral resistance mutations (UL97, UL54, UL56) and clinical outcomes, not human pharmacogenomic variants affecting foscarnet's PK or PD. |
| popPK | Chou_2005 | irrelevant | 0 | 0 | The study focuses on in vitro virology (phenotyping of CMV drug resistance) and does not report pharmacokinetic disposition parameters for foscarnet. |
| PGx | Chou_2005 | not_relevant | 0 | 0 | The paper reports viral drug resistance mutations affecting foscarnet IC50, not human pharmacogenomics affecting PK or PD. |
| popPK | Chou_2012 | irrelevant | 0 | 0 | The paper is an in-vitro study of antiviral susceptibility and resistance mechanisms, not a pharmacokinetic study reporting disposition parameters for foscarnet. |
| PGx | Chou_2012 | not_relevant | 0 | 0 | The study describes the effect of viral (CMV) mutations on drug susceptibility, not human gene variants affecting PK or PD. |
| popPK | Chou_2015 | irrelevant | 0 | 0 | The study focuses on the in vitro evolution of viral resistance to letermovir and foscarnet, not on the pharmacokinetic parameters of foscarnet. |
| PGx | Chou_2015 | not_relevant | 0 | 0 | The paper reports viral resistance mutations to letermovir and foscarnet, not human pharmacogenomic effects on PK/PD parameters. |
| popPK | Chou_2021 | irrelevant | 0 | 0 | The study focuses on in vitro antiviral susceptibility (EC50) of CMV mutants to acyclovir and cidofovir, not the pharmacokinetics or disposition parameters of foscarnet. |
| PGx | Chou_2021 | not_relevant | 0 | 0 | The paper investigates viral gene mutations (CMV UL54/UL97) and their effect on antiviral drug susceptibility (PD), which is not a human pharmacogenomic effect. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and dosing of rivaroxaban, not foscarnet. |
| PGx | Dai_2025 | not_relevant | 0 | 0 | The paper focuses on rivaroxaban, not foscarnet, and does not report pharmacogenomic effects. |
| popPK | De_2014 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy of l-BHDU, and foscarnet is mentioned only as a comparator agent in cell cultures, not as the subject of pharmacokinetic analysis. |
| PGx | De_2014 | not_relevant | 0 | 0 | The paper evaluates a new antiviral compound (l-BHDU) and mentions foscarnet only in the context of cell-based antagonism; it does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of foscarnet. |
| popPK | Deng_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for RG7667 (monoclonal antibodies), not foscarnet. |
| PGx | Deng_2018 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of RG7667 (monoclonal antibodies), not foscarnet, and does not report pharmacogenomic effects. |
| popPK | Drouot_2013 | irrelevant | 0 | 0 | The study describes an in vitro method for measuring antiviral susceptibility (EC50) in cell cultures, not population pharmacokinetics or disposition parameters. |
| PGx | Drouot_2013 | not_relevant | 1 | 0 | The paper focuses on viral mutations (HCMV UL54/UL97) causing drug resistance, not human genetic variants affecting foscarnet pharmacokinetics or pharmacodynamics. |
| popPK | Drouot_2016 | irrelevant | 0 | 0 | The study is an in-vitro virology experiment assessing antiviral activity (EC50) and drug interactions, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Drouot_2016 | not_relevant | 0 | 0 | The paper evaluates in vitro drug synergism of artesunate with antivirals against HCMV and does not report any pharmacogenomic effects on foscarnet pharmacokinetics or pharmacodynamics. |
| popPK | Faral-Tello_2012 | irrelevant | 0 | 0 | This in-vitro antiviral activity study reports no foscarnet disposition parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This is an AKI evidence-integration study, not a foscarnet pharmacokinetic study, and reports no disposition parameter values. |
| PGx | Ferreira_2026 | not_relevant | 0 | 0 | The paper does not analyze genetic variation or foscarnet PK/PD; foscarnet is only mentioned as a possible contributor to electrolyte disturbances. |
| popPK | Fryer_2004 | irrelevant | 0 | 0 | The study reports in-vitro antiviral susceptibility (EC50) of PCMV to foscarnet, not pharmacokinetic parameters. |
| PGx | Fryer_2004 | not_relevant | 0 | 0 | The paper reports antiviral susceptibility of a virus to foscarnet, but does not investigate the effect of human gene variants or genotypes on foscarnet PK/PD parameters. |
| popPK | Gandhi_2024 | irrelevant | 0 | 0 | The study reports HMB-001/FVIIa findings, not foscarnet pharmacokinetics. |
| popPK | Gege_2026 | irrelevant | 0 | 0 | Foscarnet is assessed only in an in-vitro antiviral combination assay, with no quantitative disposition parameters reported. |
| popPK | Gentry_2013 | irrelevant | 0 | 0 | The study focuses on viral resistance mechanisms and antiviral potency (EC50) of cyclopropavir, with foscarnet mentioned only as a comparator drug, and contains no pharmacokinetic parameters. |
| PGx | Gentry_2013 | not_relevant | 0 | 0 | The paper reports viral resistance (UL97 mutation) to cyclopropavir, not a human pharmacogenomic effect on the PK/PD of foscarnet. |
| popPK | Gentry_2015 | irrelevant | 0 | 0 | The paper is a mechanistic virology study on viral resistance mutations and in-vitro EC50 values, not a pharmacokinetic study of foscarnet. |
| PGx | Gentry_2015 | not_relevant | 0 | 0 | The paper reports a viral mutation (UL89) conferring resistance to a new drug class (indole nucleosides), not a human pharmacogenomic effect on foscarnet PK/PD. |
| popPK | Goldman_1991 | irrelevant | 0 | 0 | The paper describes antiviral activity of pyridinone derivatives against HIV-1 and only mentions foscarnet (as phosphonoformate) in the context of in-vitro displacement binding assays, not pharmacokinetics. |
| PGx | Goldman_1991 | not_relevant | 0 | 0 | The paper describes the antiviral activity of pyridinone derivatives on HIV-1 reverse transcriptase and does not involve foscarnet pharmacogenomics. |
| popPK | Gümbel_1994 | irrelevant | 0 | 0 | The paper is an in vitro virology study measuring antiviral activity (IC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Gümbel_1994 | not_relevant | 0 | 0 | The study reports in vitro anti-viral activity of foscarnet encapsulated in liposomes but does not report any pharmacogenomic effects (gene variant/genotype) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hakki_2011 | irrelevant | 0 | 0 | The paper is a review on CMV drug resistance and does not report any quantitative pharmacokinetic parameters for foscarnet. |
| PGx | Hakki_2011 | not_relevant | 0 | 0 | The paper discusses viral (CMV) drug resistance mutations (UL97, UL54) and the development of new antivirals; it does not report human pharmacogenomic effects on foscarnet's pharmacokinetics or pharmacodynamics. |
| popPK | Johnson_1987 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility study reporting ID50 values, not a pharmacokinetic study. |
| PGx | Johnson_1987 | not_relevant | 0 | 0 | The paper evaluates antiviral efficacy and drug interactions in a viral culture system, containing no data on human genetics or pharmacokinetics. |
| popPK | Kaneko_2000 | irrelevant | 0 | 0 | The study is an in-vitro evaluation of antiviral efficacy (EC50/CC50) rather than a pharmacokinetic study, and no disposition parameters are reported. |
| PGx | Kaneko_2000 | not_relevant | 0 | 0 | The paper reports in vitro antiviral efficacy of foscarnet against adenovirus but does not examine any genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kini_1997 | irrelevant | 0 | 0 | The study reports in-vitro antiviral activity (EC50) of foscarnet lipid prodrugs, not pharmacokinetic disposition parameters. |
| PGx | Kini_1997 | not_relevant | 0 | 0 | The paper investigates structure-activity relationships of lipid prodrugs, not the impact of human genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Koloskoff_2025 | irrelevant | 0 | 0 | The study models (val)ganciclovir, and patients who received foscarnet were excluded. |
| popPK | Kudlacek_2001 | irrelevant | 0 | 0 | The paper describes in-vitro mechanistic inhibition of cyclase isoforms by foscarnet and does not report any pharmacokinetic disposition parameters (CL, V, t1/2, etc.). |
| PGx | Kudlacek_2001 | not_relevant | 0 | 0 | The paper describes the mechanism of action (enzyme inhibition) of foscarnet but does not report any pharmacogenomic effects or genetic variants. |
| popPK | Kuramoto_2010 | irrelevant | 0 | 0 | The paper investigates the in vitro anti-CMV activity of mizoribine, and foscarnet is only mentioned as a comparator agent without any pharmacokinetic data. |
| PGx | Kuramoto_2010 | not_relevant | 0 | 0 | The paper focuses on the antiviral activity of mizoribine and its interaction with ganciclovir in CMV infections, without reporting any pharmacogenomic effects on foscarnet's PK or PD parameters. |
| popPK | Leroux_2021 | irrelevant | 0 | 0 | This review covers other anti-infectives and reports no foscarnet pharmacokinetic parameters. |
| popPK | Lietman_1992 | irrelevant | 2 | 0 | The text is a narrative summary/review describing general pharmacokinetic properties (renal elimination, negligible metabolism) without providing specific quantitative parameter values (CL, V, ka, t1/2). |
| PGx | Lietman_1992 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetic variability in foscarnet but does not mention any specific gene variants or pharmacogenomic factors influencing the drug's PK or PD. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | This is a planned rivaroxaban study and reports no foscarnet parameters. |
| popPK | Liu_2022_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rivaroxaban, not foscarnet. |
| PGx | Liu_2022_2 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of rivaroxaban, not foscarnet. |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | This systematic review reports no foscarnet pharmacokinetic parameters or numeric values. |
| popPK | López-Cortés_2000 | relevant | 9 | 2 | The study is a PK study in rabbits reporting a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text, only penetration ratios and AUCs. |
| PGx | López-Cortés_2000 | not_relevant | 0 | 0 | The study reports population PK parameters in rabbits but does not investigate or report any gene variant/genotype/phenotype effects. |
| popPK | Neyts_1997 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral susceptibility (EC50 values) of a virus to foscarnet, not pharmacokinetic disposition parameters. |
| PGx | Neyts_1997 | not_relevant | 0 | 10 | The paper reports antiviral drug susceptibility (EC50) of HHV-8 to various agents, including foscarnet, but does not investigate gene variants/genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Padullés_2016 | irrelevant | 0 | 0 | The paper describes a pharmacokinetic study for ganciclovir/valganciclovir, not foscarnet. |
| PGx | Padullés_2016 | not_relevant | 0 | 0 | The paper focuses on ganciclovir/valganciclovir pharmacokinetics and does not mention foscarnet or any pharmacogenomic variants. |
| popPK | Piret_2015 | irrelevant | 0 | 0 | This is an in vitro mechanistic study investigating viral DNA polymerase mutations and drug resistance, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Piret_2015 | not_relevant | 0 | 0 | The paper studies mutations in viral DNA polymerases (HSV-1 and HCMV) that alter drug susceptibility, which is a pharmacodynamic change in the pathogen, not a pharmacogenomic effect in the patient. |
| popPK | Piret_2016 | irrelevant | 0 | 0 | The study reports in vitro drug susceptibility (EC50) values for foscarnet against viruses, not population pharmacokinetic parameters (CL, V, ka, t1/2) in a biological species. |
| PGx | Piret_2016 | not_relevant | 0 | 10 | The paper describes a new laboratory assay (RTCA) for measuring viral resistance; it does not report human pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of foscarnet. |
| popPK | Prohn_2021 | irrelevant | 0 | 0 | The study models letermovir, and reports no foscarnet disposition parameters. |
| popPK | Pruimboom-Brees_2023 | irrelevant | 0 | 0 | The paper is a review on intravitreal drug development and does not mention foscarnet or provide any pharmacokinetic parameters for it. |
| PGx | Pruimboom-Brees_2023 | not_relevant | 0 | 0 | The paper reviews nonclinical and clinical development for intravitreal drugs and does not report pharmacogenomic effects on foscarnet. |
| PGx | Ritschel_1985 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in animal models (dogs and rabbits) and contains no information regarding human gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Rosowsky_1997 | irrelevant | 0 | 0 | This is a medicinal chemistry and in vitro virology study focused on the synthesis and antiviral activity of new compounds, with foscarnet serving only as a comparator drug in resistance assays rather than the subject of pharmacokinetic analysis. |
| PGx | Rosowsky_1997 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro antiviral activity of novel prodrugs against HIV strains with drug-resistant mutations in the virus (reverse transcriptase), not human pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of foscarnet. |
| popPK | Sati_2025 | irrelevant | 0 | 0 | The paper is a review of silver nanoparticle synthesis and has no relation to foscarnet pharmacokinetics. |
| PGx | Sati_2025 | not_relevant | 0 | 0 | The paper is a review of silver nanoparticle synthesis and applications, with no mention of foscarnet or pharmacogenomics. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for gadoterate meglumine (a gadolinium-based MRI contrast agent), not foscarnet. |
| PGx | Scala_2018 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of gadoterate meglumine in pediatric patients and does not involve foscarnet or any pharmacogenomic analysis. |
| popPK | Shiraki_2020 | irrelevant | 0 | 0 | The paper is an in-vitro virology study focusing on EC50 values and mechanisms of antiviral resistance, not a pharmacokinetic study of foscarnet. |
| PGx | Shiraki_2020 | not_relevant | 0 | 0 | The paper compares antiviral drug efficacy (EC50) against viral replication cycles and does not report human pharmacogenomic effects on foscarnet PK/PD. |
| popPK | Smee_1995 | irrelevant | 0 | 0 | The study is an in-vitro virology investigation of drug resistance in murine cytomegalovirus, reporting EC50 values and cross-resistance patterns, with no pharmacokinetic parameters (CL, V, t1/2) for foscarnet in any animal model. |
| PGx | Smee_1995 | not_relevant | 0 | 0 | The paper studies antiviral drug resistance in murine cytomegalovirus models and does not investigate human genetic variants affecting foscarnet pharmacokinetics or pharmacodynamics. |
| popPK | Song_2024 | irrelevant | 0 | 0 | The PopPK parameters are for maribavir; foscarnet is only mentioned as a comparator therapy. |
| popPK | Sudarsono_2026 | irrelevant | 0 | 0 | The quantitative PK values are for ganciclovir, while foscarnet is only mentioned as an alternative therapy. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | Foscarnet is only mentioned as an alternative; the PopPK model is for maribavir, with its parameter table in supplementary material not provided. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | The population-PK values are for maribavir; foscarnet is mentioned only as background or comparator therapy. |
| popPK | Sundquist_1979 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay of enzyme inhibition (reverse transcriptase) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for foscarnet. |
| PGx | Sundquist_1979 | not_relevant | 0 | 0 | The paper describes in vitro enzyme inhibition of reverse transcriptase and contains no human genotyping data or pharmacogenomic analysis. |
| popPK | Tomasik_2012 | irrelevant | 0 | 0 | This is a clinical case report on congenital cytomegaly where foscarnet is only mentioned as a therapeutic agent, with no pharmacokinetic parameters or quantitative disposition data reported. |
| PGx | Tomasik_2012 | not_relevant | 0 | 0 | The paper is a clinical case report on congenital cytomegalovirus infection and does not investigate the influence of gene variants on the pharmacokinetics or pharmacodynamics of foscarnet. |
| popPK | Townsend_1995 | irrelevant | 0 | 0 | The paper reports antiviral activity (IC50) of benzimidazole derivatives in vitro, with foscarnet only mentioned as a comparator for activity/selectivity. |
| PGx | Townsend_1995 | not_relevant | 0 | 0 | The paper reports antiviral activity and cytotoxicity of novel benzimidazole ribonucleosides, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Wagner_2026 | irrelevant | 0 | 0 | The paper is a clinical case report regarding CMV reactivation and treatment, containing no pharmacokinetic modeling or quantitative disposition parameters for foscarnet. |
| PGx | Wagner_2026 | not_relevant | 0 | 0 | The paper reports a case of CMV viral resistance due to viral mutations, not a pharmacogenomic effect of human gene variants on foscarnet's pharmacokinetics or pharmacodynamics. |
| popPK | Weinberg_2003 | irrelevant | 0 | 0 | The study investigates viral resistance to foscarnet (IC50 values) rather than the pharmacokinetic disposition of the drug in the host. |
| PGx | Weinberg_2003 | not_relevant | 1 | 0 | The paper reports antiviral resistance in the pathogen (CMV) caused by viral gene mutations, not a human pharmacogenomic effect on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Williams-Aziz_2005 | irrelevant | 0 | 0 | The paper is an in-vitro virology study focused on cidofovir lipid esters, with foscarnet mentioned only as a resistance comparator, and no PK data is provided. |
| PGx | Williams-Aziz_2005 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects on foscarnet's PK/PD parameters. |
| popPK | Wong_2022 | irrelevant | 0 | 0 | The study models ganciclovir pharmacokinetics; foscarnet is only mentioned in resistance testing, with no PK values reported. |
| popPK | Xu_2001 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study of reverse transcriptase inhibitors and mentions foscarnet only as a comparator for multidrug resistance, containing no pharmacokinetic data. |
| PGx | Xu_2001 | not_relevant | 0 | 0 | The paper discusses the structure-activity relationships of a new class of HIV inhibitors (ADAMs) and their efficacy against resistant strains, containing no pharmacogenomic data regarding foscarnet's PK or PD parameters. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of anti-herpetic activity, not a pharmacokinetic study, and contains no disposition parameters for foscarnet. |
| PGx | Yajima_2017 | not_relevant | 0 | 0 | The study compares the antiviral mechanisms of amenamevir, foscavir, and acyclovir in vitro and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Yuen_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ganciclovir, not foscarnet. |
| PGx | Yuen_1995 | not_relevant | 0 | 0 | The paper focuses on ganciclovir pharmacokinetics and population differences, not foscarnet or pharmacogenomic effects. |
| popPK | Zarrouk_2020 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study characterizing viral susceptibility to foscarnet (EC50) and enzyme binding, not a pharmacokinetic study reporting drug disposition parameters. |
| PGx | Zarrouk_2020 | not_relevant | 0 | 0 | The paper reports viral mutations (CMV DNA polymerase) affecting drug susceptibility, which is viral genomics/resistance, not human pharmacogenomics (host genetic variation affecting PK/PD). |
| popPK | Zarrouk_2021 | irrelevant | 0 | 0 | The paper is an in-vitro virology study focusing on viral resistance mechanisms (EC50 values), not a pharmacokinetic study of foscarnet. |
| PGx | Zarrouk_2021 | not_relevant | 0 | 0 | The study focuses on viral DNA polymerase mutations and their effect on viral drug resistance, not on human genetic variants affecting foscarnet pharmacokinetics or pharmacodynamics. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper focuses on the antiviral activity of new thioxothiazolo[3,4-a]quinazoline derivatives, with foscarnet mentioned only as a reference for resistance in virological assays, not as a subject of PK analysis. |
| PGx | Zhang_2023 | not_relevant | 0 | 0 | The paper reports the development of a new antiviral compound (AD-51) targeting HCMV alkaline nuclease and mentions activity against foscarnet-resistant viruses, but it does not report any pharmacogenomic effects on foscarnet PK or PD parameters. |
| PGx | von_2023 | not_relevant | 1 | 0 | The paper mentions CMV resistance mutations associated with foscarnet but does not report their effect on a foscarnet PK or PD parameter. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfoscarnet%5D&body=Drug%3A%20foscarnet%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_foscarnet/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 00:20 UTC</sub>
